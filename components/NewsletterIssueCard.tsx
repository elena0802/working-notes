import Link from "next/link";
import type { NewsletterIssue } from "@/types/newsletter";

type NewsletterIssueCardProps = {
  issue: NewsletterIssue;
};

function formatPublishedDate(publishedAt: string): string {
  const date = new Date(`${publishedAt}T12:00:00`);

  return date.toLocaleDateString("ko-KR", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

export default function NewsletterIssueCard({ issue }: NewsletterIssueCardProps) {
  return (
    <article className="group border-t border-muted/50 py-10 first:border-t-0 first:pt-0 md:py-12">
      <Link href={`/newsletter/${issue.slug}`} className="block max-w-2xl">
        <p className="section-label">{formatPublishedDate(issue.publishedAt)}</p>
        <h2 className="mt-4 font-serif text-2xl leading-snug text-foreground transition-colors group-hover:text-accent sm:text-3xl">
          {issue.title}
        </h2>
        <p className="mt-3 font-serif text-lg text-foreground/55 sm:text-xl">
          {issue.subject}
        </p>
        {issue.previewText && (
          <p className="body-calm mt-5 text-foreground/65">{issue.previewText}</p>
        )}
        <span className="mt-6 inline-block text-xs uppercase tracking-[0.28em] text-foreground/45 transition-colors group-hover:text-accent">
          Read letter
        </span>
      </Link>
    </article>
  );
}
