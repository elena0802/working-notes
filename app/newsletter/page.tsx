import NewsletterIssueCard from "@/components/NewsletterIssueCard";
import { getPublishedNewsletterIssues } from "@/data/newsletters";

export const metadata = {
  title: "Newsletter",
  description:
    "Second Season의 편지 — 좋은 장소, 조용한 순간, 그리고 다시 읽고 싶은 이야기.",
};

export default function NewsletterPage() {
  const issues = getPublishedNewsletterIssues();

  return (
    <div className="page-shell mx-auto max-w-3xl pb-24 pt-10 md:pt-14">
      <header className="border-b border-muted/50 pb-10 md:pb-16">
        <p className="section-label">Newsletter</p>
        <h1 className="mt-5 font-serif text-4xl tracking-[0.02em] text-foreground sm:text-5xl md:text-6xl">
          Letters
        </h1>
        <p className="body-calm mt-5 text-foreground/70 sm:mt-6">
          좋은 장소, 조용한 여행, 그리고 오래 기억하고 싶은 순간들을 가끔
          보내드립니다. 웹에서 읽는 Second Season의 편지입니다.
        </p>
      </header>

      {issues.length > 0 ? (
        <div className="pt-10 md:pt-14">
          {issues.map((issue) => (
            <NewsletterIssueCard key={issue.slug} issue={issue} />
          ))}
        </div>
      ) : (
        <p className="body-calm pt-10 text-foreground/60 md:pt-14">
          아직 발행된 편지가 없습니다.
        </p>
      )}
    </div>
  );
}
