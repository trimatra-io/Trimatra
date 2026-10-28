import { createHmac, randomBytes, timingSafeEqual } from "crypto";

export type SignedFormName = "contact" | "report-bug";

const TOKEN_TTL_MS = 5 * 60 * 1000;

function readSecret() {
  const secret = process.env.FORM_SIGNATURE_SECRET;
  if (!secret) {
    throw new Error("Missing FORM_SIGNATURE_SECRET environment variable");
  }

  return secret;
}

function makePayload(form: SignedFormName, ip: string, userAgent: string, expiresAt: number, nonce: string) {
  return `${form}|${ip}|${userAgent}|${expiresAt}|${nonce}`;
}

function signPayload(payload: string, secret: string) {
  return createHmac("sha256", secret).update(payload).digest("hex");
}

export function issueFormSignature(form: SignedFormName, ip: string, userAgent: string) {
  const expiresAt = Date.now() + TOKEN_TTL_MS;
  const nonce = randomBytes(12).toString("hex");
  const secret = readSecret();
  const payload = makePayload(form, ip, userAgent, expiresAt, nonce);
  const signature = signPayload(payload, secret);

  return `${expiresAt}.${nonce}.${signature}`;
}

export function verifyFormSignature(
  token: string,
  form: SignedFormName,
  ip: string,
  userAgent: string
) {
  const segments = token.split(".");
  if (segments.length !== 3) {
    return false;
  }

  const [expiresAtRaw, nonce, signature] = segments;
  const expiresAt = Number(expiresAtRaw);
  if (!Number.isFinite(expiresAt) || expiresAt <= Date.now()) {
    return false;
  }

  if (!nonce || !signature) {
    return false;
  }

  const secret = readSecret();
  const payload = makePayload(form, ip, userAgent, expiresAt, nonce);
  const expected = signPayload(payload, secret);

  const actualBuffer = Buffer.from(signature, "utf8");
  const expectedBuffer = Buffer.from(expected, "utf8");

  if (actualBuffer.length !== expectedBuffer.length) {
    return false;
  }

  return timingSafeEqual(actualBuffer, expectedBuffer);
}
