import ArticleCard from "@/components/ArticleCard";
import { getArticlesByCategory } from "@/data/articles";
import { enrichArticles } from "@/lib/content";

type CategoryArchiveProps = {
  title: string;
  subtitle: string;
  category: string;
};

export default function CategoryArchive({
  title,
  subtitle,
  category,
}: CategoryArchiveProps) {
  const categoryArticles = enrichArticles(getArticlesByCategory(category));

  return (
    <div className="page-shell mx-auto max-w-7xl pb-24 pt-10 md:pt-14">
      <header className="max-w-2xl border-b border-muted/50 pb-10 md:pb-16">
        <p className="section-label">{title}</p>
        <h1 className="mt-5 font-serif text-4xl tracking-[0.02em] text-foreground sm:text-5xl md:text-6xl">
          {title}
        </h1>
        <p className="body-calm mt-5 text-foreground/70 sm:mt-6">{subtitle}</p>
      </header>

      <section className="py-12 md:py-20">
        <div className="grid gap-10 sm:grid-cols-2 sm:gap-12 lg:grid-cols-3 lg:gap-14">
          {categoryArticles.map((article) => (
            <ArticleCard
              key={article.slug}
              article={article}
              variant="magazine"
            />
          ))}
        </div>
      </section>
    </div>
  );
}
