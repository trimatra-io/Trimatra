import { NextRequest } from "next/server";

type RateRecord = {
  count: number;
  resetAt: number;
};

const bucket = new Map<string, RateRecord>();

function nowMs() {
  return Date.now();
}

export function getClientIp(request: NextRequest) {
  const forwardedFor = request.headers.get("x-forwarded-for");
  if (forwardedFor) {
    return forwardedFor.split(",")[0].trim();
  }

  const realIp = request.headers.get("x-real-ip");
  if (realIp) {
    return realIp.trim();
  }

  return "unknown";
}

export function checkRateLimit(key: string, limit: number, windowMs: number) {
  const currentTime = nowMs();
  const current = bucket.get(key);

  if (!current || current.resetAt <= currentTime) {
    bucket.set(key, { count: 1, resetAt: currentTime + windowMs });
    return { allowed: true, remaining: limit - 1, resetAt: currentTime + windowMs };
  }

  if (current.count >= limit) {
    return { allowed: false, remaining: 0, resetAt: current.resetAt };
  }

  current.count += 1;
  bucket.set(key, current);

  return { allowed: true, remaining: limit - current.count, resetAt: current.resetAt };
}

export function hasSuspiciousHeaderValue(value: string) {
  // Guard against header injection via CRLF.
  return /[\r\n]/.test(value);
}

export function sanitizeSingleLine(value: string) {
  return value.replace(/[\r\n]+/g, " ").trim();
}

export function isAllowedOrigin(request: NextRequest) {
  const originHeader = request.headers.get("origin");
  if (!originHeader) {
    return true;
  }

  try {
    const origin = new URL(originHeader);
    const host = request.headers.get("host");

    if (!host) {
      return false;
    }

    return origin.host === host;
  } catch {
    return false;
  }
}
