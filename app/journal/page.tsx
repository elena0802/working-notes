import ArticleCard from "@/components/ArticleCard";
import { getArticlesBySlugs, journalIssues } from "@/data/articles";
import { enrichArticles } from "@/lib/content";

export const metadata = {
  title: "기록과 생각",
  description:
    "정년 이후의 삶, 새롭게 배우고 만난 것들에 대한 기록입니다.",
};

export default function JournalPage() {
  return (
    <div className="pb-24 pt-10 md:pt-14">
      <header className="page-shell mx-auto max-w-[760px] text-center">
        <p className="section-label">기록과 생각</p>
        <h1 className="mt-5 font-serif-kr text-2xl leading-[1.5] tracking-[0.01em] text-foreground sm:mt-6 sm:text-3xl md:text-4xl">
          배우고 만나고 기록하는 시간
        </h1>
        <p className="body-calm mx-auto mt-6 max-w-xl whitespace-pre-line text-foreground/65 sm:mt-8">
          정년 이후의 삶,{"\n"}새롭게 배우고 만난 것들에 대한 기록입니다.
        </p>
      </header>

      <div className="page-shell mx-auto max-w-7xl">
      {journalIssues.map((issue, index) => {
        const issueArticles = enrichArticles(getArticlesBySlugs(issue.slugs));

        return (
          <section
            key={issue.label}
            className={
              index === 0
                ? "py-12 md:py-20"
                : "border-t border-muted/50 py-12 md:py-20"
            }
          >
            <div className="max-w-2xl">
              <p className="section-label">
                {issue.label} · {issue.title}
              </p>
              <p className="body-calm mt-5 text-foreground/70">
                {issue.description}
              </p>
            </div>

            <div className="mt-10 grid gap-10 sm:grid-cols-2 sm:gap-12 lg:mt-14 lg:grid-cols-3 lg:gap-14">
              {issueArticles.map((article) => (
                <ArticleCard
                  key={article.slug}
                  article={article}
                  variant="magazine"
                />
              ))}
            </div>
          </section>
        );
      })}
      </div>
    </div>
  );
}
