import { timingSafeEqual } from "crypto";

export function verifyNewsletterAdminSecret(
  providedSecret: string | null,
): boolean {
  const expectedSecret = process.env.NEWSLETTER_ADMIN_SECRET;

  if (!providedSecret || !expectedSecret) {
    return false;
  }

  const providedBuffer = Buffer.from(providedSecret);
  const expectedBuffer = Buffer.from(expectedSecret);

  if (providedBuffer.length !== expectedBuffer.length) {
    return false;
  }

  return timingSafeEqual(providedBuffer, expectedBuffer);
}

export function normalizeEmail(email: string): string {
  return email.trim().toLowerCase();
}
