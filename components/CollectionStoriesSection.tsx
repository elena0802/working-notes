import ArticleCard from "@/components/ArticleCard";
import type { ArticleDisplay } from "@/lib/content";

type CollectionStoriesSectionProps = {
  essays: ArticleDisplay[];
  className?: string;
};

export default function CollectionStoriesSection({
  essays,
  className = "border-t border-muted/50 pt-12 md:pt-20",
}: CollectionStoriesSectionProps) {
  if (essays.length === 0) {
    return null;
  }

  return (
    <section className={className}>
      <div className="max-w-3xl">
        <p className="section-label">Journal</p>
        <h2 className="mt-5 font-serif text-2xl text-foreground sm:text-3xl md:text-4xl">
          Stories in This Collection
        </h2>
        <p className="body-calm mt-6 text-foreground/70 sm:mt-8">
          이 컬렉션을 통해 다시 읽어볼 수 있는 Second Season 글들입니다.
        </p>
      </div>

      <div className="mt-12 grid gap-10 sm:grid-cols-2 sm:gap-12 lg:grid-cols-3 lg:gap-14 md:mt-16">
        {essays.map((essay) => (
          <ArticleCard
            key={essay.slug}
            article={essay}
            variant="magazine"
          />
        ))}
      </div>
    </section>
  );
}
