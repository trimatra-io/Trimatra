import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";
import { issueFormSignature, type SignedFormName } from "@/lib/form-signature";
import { checkRateLimit, getClientIp, isAllowedOrigin } from "@/lib/request-security";

export const dynamic = "force-dynamic";

const formSchema = z.object({
  form: z.enum(["contact", "report-bug"]),
});

export async function GET(request: NextRequest) {
  if (!isAllowedOrigin(request)) {
    return NextResponse.json({ message: "Origin denied" }, { status: 403 });
  }

  const ip = getClientIp(request);
  const rate = checkRateLimit(`form-token:${ip}`, 20, 10 * 60 * 1000);
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

  const parsed = formSchema.safeParse({
    form: request.nextUrl.searchParams.get("form"),
  });

  if (!parsed.success) {
    return NextResponse.json({ message: "Invalid form parameter" }, { status: 400 });
  }

  const userAgent = request.headers.get("user-agent") ?? "unknown";
  const token = issueFormSignature(parsed.data.form as SignedFormName, ip, userAgent);

  return NextResponse.json(
    { token },
    {
      status: 200,
      headers: {
        "Cache-Control": "no-store, max-age=0",
      },
    }
  );
}
