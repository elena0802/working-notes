import ArticleCard from "@/components/ArticleCard";
import type { ArticleDisplay } from "@/lib/content";

type NewsletterRelatedReadingSectionProps = {
  essays: ArticleDisplay[];
  className?: string;
};

export default function NewsletterRelatedReadingSection({
  essays,
  className = "",
}: NewsletterRelatedReadingSectionProps) {
  if (essays.length === 0) {
    return null;
  }

  return (
    <section className={className}>
      <div className="max-w-3xl">
        <p className="section-label">Related Reading</p>
        <h2 className="mt-4 font-serif text-xl leading-snug text-foreground sm:text-2xl md:text-3xl">
          Continue Exploring
        </h2>
        <p className="mt-4 text-base leading-relaxed text-foreground/55 sm:mt-5">
          이 컬렉션과 이어지는 Second Season 글들입니다.
        </p>
      </div>

      <div className="mt-10 grid gap-8 sm:grid-cols-2 sm:gap-10 lg:grid-cols-3 lg:gap-12 md:mt-12">
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
