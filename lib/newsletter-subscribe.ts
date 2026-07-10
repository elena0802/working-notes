import { normalizeEmail } from "@/lib/newsletter-admin";

const MAX_EMAIL_LENGTH = 254;
const MAX_SOURCE_LENGTH = 50;
const SOURCE_PATTERN = /^[a-z0-9_-]+$/;

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export function validateSubscribeEmail(
  rawEmail: unknown,
): { ok: true; email: string } | { ok: false } {
  if (typeof rawEmail !== "string") {
    return { ok: false };
  }

  const email = normalizeEmail(rawEmail);

  if (!email || email.length > MAX_EMAIL_LENGTH || !EMAIL_PATTERN.test(email)) {
    return { ok: false };
  }

  return { ok: true, email };
}

export function validateSubscribeSource(rawSource: unknown): string {
  if (rawSource === undefined || rawSource === null) {
    return "unknown";
  }

  if (typeof rawSource !== "string") {
    return "unknown";
  }

  const source = rawSource.trim().toLowerCase();

  if (
    !source ||
    source.length > MAX_SOURCE_LENGTH ||
    !SOURCE_PATTERN.test(source)
  ) {
    return "unknown";
  }

  return source;
}
