import Link from "next/link";
import EditorialImage from "@/components/EditorialImage";
import type { Note } from "@/lib/notes";

type ArticleCardProps = {
  article: Note;
  variant?: "default" | "magazine" | "lead";
  homeTypography?: boolean;
};

export default function ArticleCard({
  article,
  variant = "default",
  homeTypography = false,
}: ArticleCardProps) {
  const imageAlt = article.imageAlt ?? article.title;

  if (variant === "lead") {
    return (
      <article className="group min-w-0">
        <Link href={`/notes/${article.slug}`} className="block">
          {article.coverImage ? (
            <EditorialImage
              src={article.coverImage}
              alt={imageAlt}
              aspect="feature"
            />
          ) : null}
          <div
            className={
              article.coverImage
                ? "mt-8 max-w-xl"
                : "max-w-xl border-t border-muted/70 pt-8"
            }
          >
            <p className="section-label">{article.type}</p>
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
              {article.summary}
            </p>
          </div>
        </Link>
      </article>
    );
  }

  if (variant === "magazine") {
    return (
      <article className="group min-w-0">
        <Link href={`/notes/${article.slug}`} className="block">
          {article.coverImage ? (
            <EditorialImage
              src={article.coverImage}
              alt={imageAlt}
              aspect="card"
            />
          ) : null}
          <div
            className={
              article.coverImage ? "mt-6" : "border-t border-muted/70 pt-6"
            }
          >
            <p className="section-label">{article.type}</p>
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
      <Link href={`/notes/${article.slug}`} className="block">
        {article.coverImage ? (
          <EditorialImage
            src={article.coverImage}
            alt={imageAlt}
            aspect="card"
          />
        ) : null}
        <div
          className={
            article.coverImage ? "mt-6" : "border-t border-muted/70 pt-6"
          }
        >
          <p className="section-label">{article.type}</p>
          <h3 className="mt-3 font-serif text-xl leading-snug text-foreground transition-colors group-hover:text-accent sm:text-2xl">
            {article.title}
          </h3>
          <p className="mt-3 text-sm leading-[1.8] text-foreground/65 sm:text-base">
            {article.summary}
          </p>
        </div>
      </Link>
    </article>
  );
}
