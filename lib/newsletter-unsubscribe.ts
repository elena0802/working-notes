import { createHmac, timingSafeEqual } from "crypto";
import { normalizeEmail } from "@/lib/newsletter-admin";
import { SITE_URL } from "@/lib/constants";
import { getSupabaseAdmin } from "@/lib/supabase-admin";

function getUnsubscribeSecret(): string {
  const secret = process.env.NEWSLETTER_UNSUBSCRIBE_SECRET;

  if (!secret) {
    throw new Error("Missing NEWSLETTER_UNSUBSCRIBE_SECRET environment variable");
  }

  return secret;
}

export function createUnsubscribeToken(email: string): string {
  const normalized = normalizeEmail(email);

  return createHmac("sha256", getUnsubscribeSecret())
    .update(normalized)
    .digest("base64url");
}

export function verifyUnsubscribeToken(
  email: string,
  token: string,
): boolean {
  try {
    const expected = createUnsubscribeToken(email);
    const providedBuffer = Buffer.from(token);
    const expectedBuffer = Buffer.from(expected);

    if (providedBuffer.length !== expectedBuffer.length) {
      return false;
    }

    return timingSafeEqual(providedBuffer, expectedBuffer);
  } catch {
    return false;
  }
}

export function buildUnsubscribeUrl(email: string): string {
  const normalized = normalizeEmail(email);
  const token = createUnsubscribeToken(normalized);
  const params = new URLSearchParams({
    email: normalized,
    token,
  });

  return `${SITE_URL}/newsletter/unsubscribe?${params.toString()}`;
}

export async function unsubscribeNewsletterEmail(email: string): Promise<void> {
  const normalized = normalizeEmail(email);
  const now = new Date().toISOString();
  const supabase = getSupabaseAdmin();

  const { error } = await supabase.from("newsletter_subscribers").upsert(
    {
      email: normalized,
      status: "unsubscribed",
      unsubscribed_at: now,
      updated_at: now,
    },
    { onConflict: "email" },
  );

  if (error) {
    throw new Error(error.message);
  }
}
