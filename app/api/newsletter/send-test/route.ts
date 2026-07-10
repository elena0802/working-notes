import { getNewsletterIssueBySlug } from "@/data/newsletters";
import { verifyNewsletterAdminSecret, normalizeEmail } from "@/lib/newsletter-admin";
import {
  renderNewsletterEmailHtml,
  renderNewsletterEmailText,
} from "@/lib/newsletter-email";
import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";

type SendTestRequestBody = {
  newsletterSlug?: unknown;
  toEmail?: unknown;
};

function jsonError(message: string, status: number, details?: string) {
  return NextResponse.json(
    details ? { error: message, details } : { error: message },
    { status },
  );
}

export async function POST(request: NextRequest) {
  const providedSecret = request.headers.get("x-newsletter-admin-secret");

  if (!verifyNewsletterAdminSecret(providedSecret)) {
    return jsonError("Unauthorized", 401);
  }

  let body: SendTestRequestBody;

  try {
    body = (await request.json()) as SendTestRequestBody;
  } catch {
    return jsonError("Invalid JSON body", 400);
  }

  const newsletterSlug =
    typeof body.newsletterSlug === "string" ? body.newsletterSlug.trim() : "";

  if (!newsletterSlug) {
    return jsonError("newsletterSlug is required", 400);
  }

  const adminEmailRaw = process.env.ADMIN_EMAIL;

  if (!adminEmailRaw) {
    return jsonError("Email configuration is incomplete", 500);
  }

  const adminEmail = normalizeEmail(adminEmailRaw);
  const requestedRecipient =
    typeof body.toEmail === "string" && body.toEmail.trim()
      ? normalizeEmail(body.toEmail)
      : adminEmail;

  if (requestedRecipient !== adminEmail) {
    return jsonError("Recipient not allowed", 403);
  }

  const issue = getNewsletterIssueBySlug(newsletterSlug);

  if (!issue) {
    return jsonError("Newsletter not found", 404);
  }

  const resendApiKey = process.env.RESEND_API_KEY;
  const fromEmail = process.env.NEWSLETTER_FROM_EMAIL;
  const fromName = process.env.NEWSLETTER_FROM_NAME ?? "Second Season";

  if (!resendApiKey || !fromEmail) {
    return jsonError("Email configuration is incomplete", 500);
  }

  try {
    const html = renderNewsletterEmailHtml(newsletterSlug);
    const text = renderNewsletterEmailText(newsletterSlug);
    const resend = new Resend(resendApiKey);

    const { data, error } = await resend.emails.send({
      from: `${fromName} <${fromEmail}>`,
      to: adminEmail,
      subject: issue.subject,
      html,
      text,
    });

    if (error) {
      return jsonError("Send failed", 500, error.message);
    }

    if (!data?.id) {
      return jsonError("Send failed", 500, "Resend did not return a message ID");
    }

    return NextResponse.json({ ok: true, messageId: data.id });
  } catch (error) {
    if (
      error instanceof Error &&
      error.message.toLowerCase().includes("not found")
    ) {
      return jsonError("Newsletter not found", 404);
    }

    const details = error instanceof Error ? error.message : undefined;

    return jsonError("Send failed", 500, details);
  }
}
