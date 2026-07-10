export type NewsletterIssue = {
  slug: string;
  title: string;
  subject: string;
  previewText?: string;
  publishedAt: string;
  collectionSlug: string;
  letter: string;
  status: "draft" | "published";
};
