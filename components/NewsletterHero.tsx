import Link from "next/link";
import {
  estimateLetterReadingMinutes,
  formatNewsletterMonthYear,
  getNewsletterIssueLabel,
} from "@/lib/newsletterDisplay";

type NewsletterHeroProps = {
  title: string;
  subject: string;
  publishedAt: string;
  letter: string;
};

export default function NewsletterHero({
  title,
  subject,
  publishedAt,
  letter,
}: NewsletterHeroProps) {
  const issueLabel = getNewsletterIssueLabel(title);
  const monthYear = formatNewsletterMonthYear(publishedAt);
  const readingMinutes = estimateLetterReadingMinutes(letter);

  const metaParts = [
    issueLabel,
    monthYear,
    `${readingMinutes} min read`,
  ].filter(Boolean);

  return (
    <header className="mx-auto max-w-[680px] text-center">
      <Link
        href="/newsletter"
        className="text-xs uppercase tracking-[0.28em] text-foreground/45 transition-colors hover:text-accent"
      >
        Letters
      </Link>

      <p className="section-label mt-10 sm:mt-12">Newsletter</p>

      <h1 className="mt-6 font-serif text-[2rem] leading-[1.12] tracking-[0.01em] text-foreground sm:text-4xl md:mt-8 md:text-[2.75rem] md:leading-[1.1]">
        {title}
      </h1>

      <p className="mx-auto mt-6 max-w-xl font-serif text-xl leading-[1.55] text-foreground/58 sm:mt-7 sm:text-2xl md:text-[1.65rem] md:leading-[1.5]">
        {subject}
      </p>

      {metaParts.length > 0 && (
        <p className="mt-8 text-[0.6875rem] uppercase tracking-[0.22em] text-foreground/40 sm:mt-10">
          {metaParts.join(" · ")}
        </p>
      )}
    </header>
  );
}
