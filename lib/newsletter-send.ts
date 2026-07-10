import { getNewsletterIssueBySlug } from "@/data/newsletters";
import { normalizeEmail } from "@/lib/newsletter-admin";
import {
  renderNewsletterEmailHtml,
  renderNewsletterEmailText,
} from "@/lib/newsletter-email";
import { getSupabaseAdmin } from "@/lib/supabase-admin";
import type { NewsletterIssue } from "@/types/newsletter";
import { Resend } from "resend";

export const NEWSLETTER_SEND_BATCH_LIMIT = 50;

export class NewsletterSendConfigError extends Error {
  constructor(message = "Email configuration is incomplete") {
    super(message);
    this.name = "NewsletterSendConfigError";
  }
}

export class NewsletterNotFoundError extends Error {
  constructor(message = "Newsletter not found") {
    super(message);
    this.name = "NewsletterNotFoundError";
  }
}

export class CampaignAlreadySentError extends Error {
  constructor(message = "Newsletter already sent") {
    super(message);
    this.name = "CampaignAlreadySentError";
  }
}

export type NewsletterSendConfig = {
  resend: Resend;
  from: string;
  adminEmail: string;
};

export type RenderedNewsletterEmail = {
  html: string;
  text: string;
  subject: string;
};

function requirePublishedIssue(newsletterSlug: string): NewsletterIssue {
  const issue = getNewsletterIssueBySlug(newsletterSlug);

  if (!issue || issue.status !== "published") {
    throw new NewsletterNotFoundError();
  }

  return issue;
}

export function getNewsletterSendConfig(): NewsletterSendConfig {
  const resendApiKey = process.env.RESEND_API_KEY;
  const fromEmail = process.env.NEWSLETTER_FROM_EMAIL;
  const fromName = process.env.NEWSLETTER_FROM_NAME ?? "Second Season";
  const adminEmailRaw = process.env.ADMIN_EMAIL;

  if (!resendApiKey || !fromEmail || !adminEmailRaw) {
    throw new NewsletterSendConfigError();
  }

  return {
    resend: new Resend(resendApiKey),
    from: `${fromName} <${fromEmail}>`,
    adminEmail: normalizeEmail(adminEmailRaw),
  };
}

export function renderNewsletterForSend(
  newsletterSlug: string,
  recipientEmail: string,
): RenderedNewsletterEmail {
  const issue = requirePublishedIssue(newsletterSlug);

  return {
    html: renderNewsletterEmailHtml(newsletterSlug, recipientEmail),
    text: renderNewsletterEmailText(newsletterSlug, recipientEmail),
    subject: issue.subject,
  };
}

export async function getActiveSubscribers(
  limit = NEWSLETTER_SEND_BATCH_LIMIT,
): Promise<string[]> {
  const supabase = getSupabaseAdmin();

  const { data, error } = await supabase
    .from("newsletter_subscribers")
    .select("email")
    .eq("status", "active")
    .is("unsubscribed_at", null)
    .order("created_at", { ascending: true })
    .limit(limit);

  if (error) {
    throw new Error(error.message);
  }

  return (data ?? []).map((row) => normalizeEmail(row.email));
}

export async function getExistingCampaignSlug(
  newsletterSlug: string,
): Promise<boolean> {
  const supabase = getSupabaseAdmin();

  const { data, error } = await supabase
    .from("newsletter_campaigns")
    .select("newsletter_slug")
    .eq("newsletter_slug", newsletterSlug)
    .maybeSingle();

  if (error) {
    throw new Error(error.message);
  }

  return data !== null;
}

export async function createCampaignRecord(
  newsletterSlug: string,
  recipientCount: number,
  resendCampaignId?: string,
): Promise<void> {
  const supabase = getSupabaseAdmin();
  const sentAt = new Date().toISOString();

  const { error } = await supabase.from("newsletter_campaigns").insert({
    newsletter_slug: newsletterSlug,
    recipient_count: recipientCount,
    sent_at: sentAt,
    resend_campaign_id: resendCampaignId ?? null,
  });

  if (error) {
    throw new Error(error.message);
  }
}

export async function sendOneNewsletterEmail(
  config: NewsletterSendConfig,
  rendered: RenderedNewsletterEmail,
  to: string,
): Promise<string> {
  const { data, error } = await config.resend.emails.send({
    from: config.from,
    to,
    subject: rendered.subject,
    html: rendered.html,
    text: rendered.text,
  });

  if (error) {
    throw new Error(error.message);
  }

  if (!data?.id) {
    throw new Error("Resend did not return a message ID");
  }

  return data.id;
}

export async function sendTestNewsletterEmail(
  newsletterSlug: string,
): Promise<{ messageId: string }> {
  requirePublishedIssue(newsletterSlug);

  const config = getNewsletterSendConfig();
  const rendered = renderNewsletterForSend(
    newsletterSlug,
    config.adminEmail,
  );
  const messageId = await sendOneNewsletterEmail(
    config,
    rendered,
    config.adminEmail,
  );

  return { messageId };
}

export async function sendNewsletterToAllSubscribers(
  newsletterSlug: string,
): Promise<{ recipients: number }> {
  requirePublishedIssue(newsletterSlug);

  if (await getExistingCampaignSlug(newsletterSlug)) {
    throw new CampaignAlreadySentError();
  }

  const subscribers = await getActiveSubscribers();

  if (subscribers.length === 0) {
    throw new Error("No active subscribers found");
  }

  const config = getNewsletterSendConfig();
  const messageIds: string[] = [];

  for (const email of subscribers) {
    const rendered = renderNewsletterForSend(newsletterSlug, email);
    const messageId = await sendOneNewsletterEmail(config, rendered, email);
    messageIds.push(messageId);
  }

  await createCampaignRecord(
    newsletterSlug,
    subscribers.length,
    messageIds[0],
  );

  return { recipients: subscribers.length };
}
