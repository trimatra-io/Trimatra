import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";
import { getContactWebhook, isContactTarget, type ContactTarget } from "@/lib/contact-webhooks";
import { verifyFormSignature } from "@/lib/form-signature";
import {
  checkRateLimit,
  getClientIp,
  hasSuspiciousHeaderValue,
  isAllowedOrigin,
  sanitizeSingleLine,
} from "@/lib/request-security";

const MAX_FILE_SIZE_BYTES = 5 * 1024 * 1024;
const ALLOWED_FILE_TYPES = new Set(["image/png", "image/jpeg", "image/webp"]);

const contactSchema = z.object({
  target: z.enum(["business", "support", "careers"]),
  name: z.string().min(2).max(100),
  email: z.string().email().max(254),
  subject: z.string().min(3).max(150),
  message: z.string().min(10).max(4000),
  portfolio: z.string().url().max(500).optional().or(z.literal("")),
  website: z.string().max(0).optional(),
});

function getTargetColor(target: ContactTarget) {
  const colorMap: Record<ContactTarget, number> = {
    business: 0x3b82f6,
    support: 0xf59e0b,
    careers: 0x22c55e,
  };

  return colorMap[target];
}

export async function POST(request: NextRequest) {
  if (!isAllowedOrigin(request)) {
    return NextResponse.json({ message: "Origin denied" }, { status: 403 });
  }

  const ip = getClientIp(request);
  const rate = checkRateLimit(`contact:${ip}`, 5, 10 * 60 * 1000);
  if (!rate.allowed) {
    return NextResponse.json(
      { message: "Too many requests. Try again later." },
      {
        status: 429,
        headers: {
          "Retry-After": Math.max(1, Math.ceil((rate.resetAt - Date.now()) / 1000)).toString(),
        },
      }
    );
  }

  try {
    const data = await request.formData();
    const signature = String(data.get("signature") ?? "");
    const userAgent = request.headers.get("user-agent") ?? "unknown";

    if (!verifyFormSignature(signature, "contact", ip, userAgent)) {
      return NextResponse.json({ message: "Invalid signature" }, { status: 403 });
    }

    const rawTarget = String(data.get("target") ?? "");
    if (!isContactTarget(rawTarget)) {
      return NextResponse.json({ message: "Invalid target" }, { status: 400 });
    }

    const rawPayload = {
      target: rawTarget,
      name: String(data.get("name") ?? "").trim(),
      email: String(data.get("email") ?? "").trim(),
      subject: String(data.get("subject") ?? "").trim(),
      message: String(data.get("message") ?? "").trim(),
      portfolio: String(data.get("portfolio") ?? "").trim(),
      website: String(data.get("website") ?? "").trim(),
    };

    const parsed = contactSchema.safeParse(rawPayload);
    if (!parsed.success) {
      return NextResponse.json({ message: "Invalid form payload" }, { status: 400 });
    }

    // Honeypot field should always be empty for real users.
    if (parsed.data.website) {
      return NextResponse.json({ message: "Accepted" }, { status: 200 });
    }

    if (
      hasSuspiciousHeaderValue(parsed.data.name) ||
      hasSuspiciousHeaderValue(parsed.data.email) ||
      hasSuspiciousHeaderValue(parsed.data.subject)
    ) {
      return NextResponse.json({ message: "Invalid payload" }, { status: 400 });
    }

    const filePart = data.get("file");
    const file = filePart instanceof File ? filePart : null;

    if (file) {
      if (!ALLOWED_FILE_TYPES.has(file.type)) {
        return NextResponse.json({ message: "Unsupported file type" }, { status: 400 });
      }

      if (file.size > MAX_FILE_SIZE_BYTES) {
        return NextResponse.json({ message: "File too large" }, { status: 400 });
      }
    }

    const target = parsed.data.target;
    const webhookUrl = getContactWebhook(target);

    const fields: { name: string; value: string; inline?: boolean }[] = [
      { name: "Nama", value: sanitizeSingleLine(parsed.data.name), inline: true },
      { name: "Email", value: sanitizeSingleLine(parsed.data.email), inline: true },
      { name: "Subject", value: sanitizeSingleLine(parsed.data.subject) },
      { name: "Pesan", value: parsed.data.message },
    ];

    if (parsed.data.portfolio) {
      fields.splice(2, 0, {
        name: "Portfolio",
        value: sanitizeSingleLine(parsed.data.portfolio),
      });
    }

    const embedPayload = {
      embeds: [
        {
          title: `Kontak Baru - ${target}`,
          color: getTargetColor(target),
          fields,
          footer: { text: "Trimatra Studio Contact" },
          timestamp: new Date().toISOString(),
        },
      ],
    };

    const embedRes = await fetch(webhookUrl, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(embedPayload),
    });

    if (!embedRes.ok) {
      return NextResponse.json({ message: "Upstream delivery failed" }, { status: 502 });
    }

    if (file) {
      const formData = new FormData();
      formData.append("content", `Attachment from ${sanitizeSingleLine(parsed.data.name)}`);
      formData.append("file", file);

      const fileRes = await fetch(webhookUrl, {
        method: "POST",
        body: formData,
      });

      if (!fileRes.ok) {
        return NextResponse.json({ message: "Attachment delivery failed" }, { status: 502 });
      }
    }

    return NextResponse.json({ message: "Delivered" }, { status: 200 });
  } catch {
    return NextResponse.json({ message: "Unexpected error" }, { status: 500 });
  }
}
