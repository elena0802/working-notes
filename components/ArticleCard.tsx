import Link from "next/link";
import EditorialImage from "@/components/EditorialImage";
import type { ArticleDisplay } from "@/lib/content";

type ArticleCardProps = {
  article: ArticleDisplay;
  variant?: "default" | "magazine" | "lead";
  hideCaption?: boolean;
  homeTypography?: boolean;
};

export default function ArticleCard({
  article,
  variant = "default",
  hideCaption = false,
  homeTypography = false,
}: ArticleCardProps) {
  if (variant === "lead") {
    return (
      <article className="group min-w-0">
        <Link href={`/journal/${article.slug}`} className="block">
          <EditorialImage
            src={article.image}
            alt={article.imageAlt}
            caption={hideCaption ? undefined : article.imageCaption}
            aspect="feature"
          />
          <div className="mt-8 max-w-xl">
            <p className="section-label">{article.category}</p>
            <h3
              className={
                homeTypography
                  ? "home-card-title-lead mt-4 transition-colors group-hover:text-accent"
                  : "mt-4 font-serif text-2xl leading-snug tracking-[-0.02em] text-foreground transition-colors group-hover:text-accent sm:text-2xl md:text-2xl lg:text-3xl"
              }
            >
              {article.title}
            </h3>
            <p
              className={
                homeTypography
                  ? "home-card-desc-readable mt-4"
                  : "mt-4 text-sm leading-[1.8] text-foreground/65 sm:text-base"
              }
            >
              {article.excerpt}
            </p>
          </div>
        </Link>
      </article>
    );
  }

  if (variant === "magazine") {
    return (
      <article className="group min-w-0">
        <Link href={`/journal/${article.slug}`} className="block">
          <EditorialImage
            src={article.image}
            alt={article.imageAlt}
            caption={hideCaption ? undefined : article.imageCaption}
            aspect="card"
          />
          <div className="mt-6">
            <p className="section-label">{article.category}</p>
            <h3
              className={
                homeTypography
                  ? "home-card-title mt-3 transition-colors group-hover:text-accent"
                  : "mt-3 font-serif text-xl leading-snug tracking-[-0.02em] text-foreground transition-colors group-hover:text-accent md:text-xl lg:text-2xl"
              }
            >
              {article.title}
            </h3>
          </div>
        </Link>
      </article>
    );
  }

  return (
    <article className="group min-w-0">
      <Link href={`/journal/${article.slug}`} className="block">
        <EditorialImage
          src={article.image}
          alt={article.imageAlt}
          caption={hideCaption ? undefined : article.imageCaption}
          aspect="card"
        />
        <div className="mt-6">
          <p className="section-label">{article.category}</p>
          <h3 className="mt-3 font-serif text-xl leading-snug text-foreground transition-colors group-hover:text-accent sm:text-2xl">
            {article.title}
          </h3>
          <p className="mt-3 text-sm leading-[1.8] text-foreground/65 sm:text-base">
            {article.excerpt}
          </p>
        </div>
      </Link>
    </article>
  );
}
