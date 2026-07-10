import { getArticlesBySlugs } from "@/data/articles";
import { getCollectionBySlug } from "@/data/collections";
import { getNewsletterIssueBySlug } from "@/data/newsletters";
import { SITE_URL } from "@/lib/constants";
import { buildUnsubscribeUrl } from "@/lib/newsletter-unsubscribe";
import {
  formatNewsletterMonthYear,
  getNewsletterIssueLabel,
} from "@/lib/newsletterDisplay";
import type { NewsletterIssue } from "@/types/newsletter";
import type { Collection } from "@/types/collection";
import type { Article } from "@/data/articles";

type NewsletterEmailContent = {
  issue: NewsletterIssue;
  collection: Collection;
  stories: Article[];
};

function escapeHtml(value: string): string {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

function absoluteUrl(path: string): string {
  return `${SITE_URL}${path.startsWith("/") ? path : `/${path}`}`;
}

function resolveNewsletterEmailContent(
  newsletterSlug: string,
): NewsletterEmailContent {
  const issue = getNewsletterIssueBySlug(newsletterSlug);

  if (!issue) {
    throw new Error(`Newsletter issue not found: ${newsletterSlug}`);
  }

  const collection = getCollectionBySlug(issue.collectionSlug);

  if (!collection) {
    throw new Error(
      `Collection not found for newsletter "${newsletterSlug}": ${issue.collectionSlug}`,
    );
  }

  const stories = getArticlesBySlugs(collection.essaySlugs);

  return { issue, collection, stories };
}

function formatPublishedDate(publishedAt: string): string {
  const date = new Date(`${publishedAt}T12:00:00`);

  return date.toLocaleDateString("ko-KR", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

function letterParagraphsHtml(letter: string): string {
  return letter
    .split("\n\n")
    .filter(Boolean)
    .map(
      (paragraph) =>
        `<p style="margin: 0 0 20px; font-size: 16px; line-height: 1.85; color: #4a4a4a;">${escapeHtml(paragraph)}</p>`,
    )
    .join("\n");
}

function storiesListHtml(stories: Article[], newsletterUrl: string): string {
  if (stories.length === 0) {
    return "";
  }

  const items = stories
    .map((story) => {
      const storyUrl = absoluteUrl(`/notes/${story.slug}`);

      return `<li style="margin-bottom: 16px;">
  <a href="${storyUrl}" style="color: #2e2e2e; font-size: 16px; font-family: Georgia, 'Times New Roman', serif; text-decoration: none; border-bottom: 1px solid #d8d0c4;">${escapeHtml(story.title)}</a>
  <p style="margin: 6px 0 0; font-size: 14px; line-height: 1.7; color: #6b6b6b;">${escapeHtml(story.excerpt)}</p>
</li>`;
    })
    .join("\n");

  return `<table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" style="margin-top: 40px; border-top: 1px solid #d8d0c4; padding-top: 32px;">
  <tr>
    <td>
      <p style="margin: 0 0 8px; font-size: 11px; letter-spacing: 0.28em; text-transform: uppercase; color: #a8b19e;">Related Reading</p>
      <h2 style="margin: 0 0 20px; font-size: 22px; font-weight: normal; font-family: Georgia, 'Times New Roman', serif; color: #2e2e2e;">Continue Exploring</h2>
      <ul style="margin: 0; padding: 0; list-style: none;">
        ${items}
      </ul>
      <p style="margin: 24px 0 0; font-size: 14px; line-height: 1.7;">
        <a href="${newsletterUrl}" style="color: #7a8570; text-decoration: none; border-bottom: 1px solid #d8d0c4;">Read the full letter on Second Season</a>
      </p>
    </td>
  </tr>
</table>`;
}

function renderNewsletterEmailHtmlContent({
  issue,
  collection,
  stories,
  recipientEmail,
}: NewsletterEmailContent & { recipientEmail?: string }): string {
  const newsletterUrl = absoluteUrl(`/newsletter/${issue.slug}`);
  const collectionUrl = absoluteUrl(`/collections/${collection.slug}`);
  const issueLabel = getNewsletterIssueLabel(issue.title);
  const monthYear = formatNewsletterMonthYear(issue.publishedAt);
  const publishedDate = formatPublishedDate(issue.publishedAt);

  const metaParts = [issueLabel, monthYear].filter(Boolean).join(" · ");
  const unsubscribeFooter = recipientEmail
    ? `<p style="margin: 20px 0 0; font-size: 12px; line-height: 1.7; color: #8a8a8a;">
                <a href="${buildUnsubscribeUrl(recipientEmail)}" style="color: #8a8a8a; text-decoration: underline;">Unsubscribe</a>
              </p>`
    : "";

  const subtitleBlock = collection.subtitle
    ? `<p style="margin: 8px 0 0; font-size: 17px; line-height: 1.6; font-family: Georgia, 'Times New Roman', serif; color: #6b6b6b;">${escapeHtml(collection.subtitle)}</p>`
    : "";

  return `<!DOCTYPE html>
<html lang="ko">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>${escapeHtml(issue.title)} · Second Season</title>
</head>
<body style="margin: 0; padding: 0; background-color: #f7f4ee; color: #2e2e2e; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Helvetica, Arial, sans-serif;">
  <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" style="background-color: #f7f4ee;">
    <tr>
      <td align="center" style="padding: 32px 16px;">
        <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" style="max-width: 600px; background-color: #f7f4ee;">
          <tr>
            <td style="padding: 8px 0 32px; text-align: center; border-bottom: 1px solid #d8d0c4;">
              <p style="margin: 0 0 12px; font-size: 13px; letter-spacing: 0.22em; text-transform: uppercase; color: #2e2e2e; font-family: Georgia, 'Times New Roman', serif;">Second Season</p>
              <p style="margin: 0 0 16px; font-size: 11px; letter-spacing: 0.28em; text-transform: uppercase; color: #a8b19e;">Newsletter</p>
              <h1 style="margin: 0; font-size: 28px; font-weight: normal; line-height: 1.25; font-family: Georgia, 'Times New Roman', serif; color: #2e2e2e;">${escapeHtml(issue.title)}</h1>
              <p style="margin: 16px 0 0; font-size: 20px; line-height: 1.5; font-family: Georgia, 'Times New Roman', serif; color: #6b6b6b;">${escapeHtml(issue.subject)}</p>
              <p style="margin: 16px 0 0; font-size: 12px; letter-spacing: 0.12em; color: #8a8a8a;">${escapeHtml(publishedDate)}${metaParts ? ` · ${escapeHtml(metaParts)}` : ""}</p>
            </td>
          </tr>
          <tr>
            <td style="padding: 32px 0;">
              <p style="margin: 0 0 20px; font-size: 11px; letter-spacing: 0.28em; text-transform: uppercase; color: #a8b19e;">Editor&apos;s Letter</p>
              ${letterParagraphsHtml(issue.letter)}
            </td>
          </tr>
          <tr>
            <td style="padding: 32px 0; border-top: 1px solid #d8d0c4;">
              <p style="margin: 0 0 8px; font-size: 11px; letter-spacing: 0.28em; text-transform: uppercase; color: #a8b19e;">Featured Collection</p>
              <h2 style="margin: 0; font-size: 24px; font-weight: normal; font-family: Georgia, 'Times New Roman', serif; color: #2e2e2e;">
                <a href="${collectionUrl}" style="color: #2e2e2e; text-decoration: none;">${escapeHtml(collection.title)}</a>
              </h2>
              ${subtitleBlock}
              <p style="margin: 16px 0 0; font-size: 16px; line-height: 1.85; color: #4a4a4a;">${escapeHtml(collection.description)}</p>
              <p style="margin: 20px 0 0; font-size: 14px; line-height: 1.7;">
                <a href="${collectionUrl}" style="color: #7a8570; text-decoration: none; border-bottom: 1px solid #d8d0c4;">View full collection</a>
              </p>
            </td>
          </tr>
          <tr>
            <td>
              ${storiesListHtml(stories, newsletterUrl)}
            </td>
          </tr>
          <tr>
            <td style="padding: 40px 0 16px; border-top: 1px solid #d8d0c4; text-align: center;">
              <p style="margin: 0 0 8px; font-size: 12px; letter-spacing: 0.16em; color: #8a8a8a;">Second Season</p>
              <p style="margin: 0; font-size: 13px; line-height: 1.7; color: #8a8a8a;">A journal of places, moments, and the second season of life.</p>
              <p style="margin: 16px 0 0; font-size: 13px;">
                <a href="${newsletterUrl}" style="color: #7a8570; text-decoration: none; border-bottom: 1px solid #d8d0c4;">Read on the web</a>
              </p>
              ${unsubscribeFooter}
            </td>
          </tr>
        </table>
      </td>
    </tr>
  </table>
</body>
</html>`;
}

export function renderNewsletterEmailHtml(
  newsletterSlug: string,
  recipientEmail?: string,
): string {
  const { issue, collection, stories } =
    resolveNewsletterEmailContent(newsletterSlug);

  return renderNewsletterEmailHtmlContent({
    issue,
    collection,
    stories,
    recipientEmail,
  });
}

export function renderNewsletterEmailText(
  newsletterSlug: string,
  recipientEmail?: string,
): string {
  const { issue, collection, stories } =
    resolveNewsletterEmailContent(newsletterSlug);

  const newsletterUrl = absoluteUrl(`/newsletter/${issue.slug}`);
  const collectionUrl = absoluteUrl(`/collections/${collection.slug}`);
  const publishedDate = formatPublishedDate(issue.publishedAt);
  const issueLabel = getNewsletterIssueLabel(issue.title);
  const monthYear = formatNewsletterMonthYear(issue.publishedAt);

  const letterBody = issue.letter
    .split("\n\n")
    .filter(Boolean)
    .join("\n\n");

  const storyLines = stories
    .map(
      (story) =>
        `- ${story.title}\n  ${story.excerpt}\n  ${absoluteUrl(`/notes/${story.slug}`)}`,
    )
    .join("\n\n");

  const metaLine = [issueLabel, monthYear].filter(Boolean).join(" · ");

  return [
    "SECOND SEASON",
    "",
    "Newsletter",
    issue.title,
    issue.subject,
    `${publishedDate}${metaLine ? ` · ${metaLine}` : ""}`,
    "",
    "— Editor's Letter —",
    "",
    letterBody,
    "",
    "— Featured Collection —",
    collection.title,
    collection.subtitle ?? "",
    collection.description,
    collectionUrl,
    "",
    storyLines ? "— Continue Exploring —\n\n" + storyLines : "",
    "",
    `Read the full letter: ${newsletterUrl}`,
    ...(recipientEmail
      ? ["", `Unsubscribe: ${buildUnsubscribeUrl(recipientEmail)}`]
      : []),
    "",
    "Second Season — A journal of places, moments, and the second season of life.",
  ]
    .filter((line) => line !== "")
    .join("\n");
}
