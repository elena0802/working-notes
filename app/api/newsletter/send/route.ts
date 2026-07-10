import { verifyNewsletterAdminSecret } from "@/lib/newsletter-admin";
import {
  CampaignAlreadySentError,
  NewsletterNotFoundError,
  NewsletterSendConfigError,
  sendNewsletterToAllSubscribers,
  sendTestNewsletterEmail,
} from "@/lib/newsletter-send";
import { NextRequest, NextResponse } from "next/server";

type SendRequestBody = {
  newsletterSlug?: unknown;
  mode?: unknown;
};

function jsonError(message: string, status: number, details?: string) {
  return NextResponse.json(
    details ? { error: message, details } : { error: message },
    { status },
  );
}

function isSendMode(value: unknown): value is "test" | "all" {
  return value === "test" || value === "all";
}

export async function POST(request: NextRequest) {
  const providedSecret = request.headers.get("x-newsletter-admin-secret");

  if (!verifyNewsletterAdminSecret(providedSecret)) {
    return jsonError("Unauthorized", 401);
  }

  let body: SendRequestBody;

  try {
    body = (await request.json()) as SendRequestBody;
  } catch {
    return jsonError("Invalid JSON body", 400);
  }

  const newsletterSlug =
    typeof body.newsletterSlug === "string" ? body.newsletterSlug.trim() : "";

  if (!newsletterSlug) {
    return jsonError("newsletterSlug is required", 400);
  }

  if (!isSendMode(body.mode)) {
    return jsonError('mode must be "test" or "all"', 400);
  }

  try {
    if (body.mode === "test") {
      const { messageId } = await sendTestNewsletterEmail(newsletterSlug);

      return NextResponse.json({
        ok: true,
        mode: "test",
        messageId,
      });
    }

    const { recipients } =
      await sendNewsletterToAllSubscribers(newsletterSlug);

    return NextResponse.json({
      ok: true,
      mode: "all",
      recipients,
      newsletterSlug,
    });
  } catch (error) {
    if (error instanceof NewsletterNotFoundError) {
      return jsonError("Newsletter not found", 404);
    }

    if (error instanceof CampaignAlreadySentError) {
      return jsonError("Newsletter already sent", 409);
    }

    if (error instanceof NewsletterSendConfigError) {
      return jsonError("Email configuration is incomplete", 500);
    }

    const details = error instanceof Error ? error.message : undefined;

    return jsonError("Send failed", 500, details);
  }
}
