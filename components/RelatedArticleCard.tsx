import Link from "next/link";
import EditorialImage from "@/components/EditorialImage";
import type { ArticleDisplay } from "@/lib/content";

type RelatedArticleCardProps = {
  article: ArticleDisplay;
};

export default function RelatedArticleCard({ article }: RelatedArticleCardProps) {
  return (
    <article className="group min-w-0">
      <Link href={`/journal/${article.slug}`} className="block">
        <EditorialImage
          src={article.image}
          alt={article.imageAlt}
          aspect="card"
        />
        <div className="mt-5">
          <p className="section-label">{article.category}</p>
          <h3 className="mt-3 font-serif text-xl leading-snug text-foreground transition-colors group-hover:text-accent">
            {article.title}
          </h3>
        </div>
      </Link>
    </article>
  );
}
