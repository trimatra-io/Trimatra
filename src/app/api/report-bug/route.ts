import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";
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

const bugSchema = z.object({
  username: z.string().min(2).max(80),
  email: z.string().email().max(254),
  ourgame: z.string().min(2).max(120),
  message: z.string().min(10).max(3000),
});

export async function POST(request: NextRequest) {
  if (!isAllowedOrigin(request)) {
    return NextResponse.json({ message: "Origin denied" }, { status: 403 });
  }

  const ip = getClientIp(request);
  const rate = checkRateLimit(`report-bug:${ip}`, 5, 10 * 60 * 1000);
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

  const webhookUrl = process.env.DISCORD_WEBHOOK_SUPPORT;
  if (!webhookUrl) {
    return NextResponse.json({ message: "Webhook not configured" }, { status: 500 });
  }

  try {
    const data = await request.formData();
    const signature = String(data.get("signature") ?? "");
    const userAgent = request.headers.get("user-agent") ?? "unknown";

    if (!verifyFormSignature(signature, "report-bug", ip, userAgent)) {
      return NextResponse.json({ message: "Invalid signature" }, { status: 403 });
    }

    const rawPayload = {
      username: String(data.get("username") ?? "").trim(),
      email: String(data.get("email") ?? "").trim(),
      ourgame: String(data.get("ourgame") ?? "").trim(),
      message: String(data.get("message") ?? "").trim(),
    };

    const parsed = bugSchema.safeParse(rawPayload);
    if (!parsed.success) {
      return NextResponse.json({ message: "Invalid form payload" }, { status: 400 });
    }

    if (
      hasSuspiciousHeaderValue(parsed.data.username) ||
      hasSuspiciousHeaderValue(parsed.data.email) ||
      hasSuspiciousHeaderValue(parsed.data.ourgame)
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

    const payload = {
      embeds: [
        {
          title: "Bug Report Baru",
          color: 0xef4444,
          fields: [
            { name: "Username", value: sanitizeSingleLine(parsed.data.username), inline: true },
            { name: "Email", value: sanitizeSingleLine(parsed.data.email), inline: true },
            { name: "Game", value: sanitizeSingleLine(parsed.data.ourgame) },
            { name: "Message", value: parsed.data.message },
          ],
          footer: { text: "Trimatra Studio Bug Report" },
          timestamp: new Date().toISOString(),
        },
      ],
    };

    const embedRes = await fetch(webhookUrl, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    });

    if (!embedRes.ok) {
      return NextResponse.json({ message: "Upstream delivery failed" }, { status: 502 });
    }

    if (file) {
      const attachmentData = new FormData();
      attachmentData.append("content", `Attachment from ${sanitizeSingleLine(parsed.data.username)}`);
      attachmentData.append("file", file);

      const fileRes = await fetch(webhookUrl, {
        method: "POST",
        body: attachmentData,
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
