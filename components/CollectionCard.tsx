import Link from "next/link";
import EditorialImage from "@/components/EditorialImage";
import type { Collection } from "@/types/collection";

type CollectionCardProps = {
  collection: Collection;
  imageAspect?: "card" | "feature" | "placesFeature";
  homeTypography?: boolean;
  homePlaces?: boolean;
};

function getCollectionSummary(collection: Collection): string {
  return collection.subtitle ?? collection.description;
}

function getCollectionCounts(collection: Collection): string | undefined {
  const placeCount = collection.placeIds.length;
  const essayCount = collection.essaySlugs.length;

  if (placeCount === 0 && essayCount === 0) {
    return undefined;
  }

  const parts: string[] = [];

  if (placeCount > 0) {
    parts.push(`${placeCount} places`);
  }

  if (essayCount > 0) {
    parts.push(`${essayCount} essays`);
  }

  return parts.join(" · ");
}

export default function CollectionCard({
  collection,
  imageAspect = "card",
  homeTypography = false,
  homePlaces = false,
}: CollectionCardProps) {
  const titleClassName = homePlaces
    ? "home-places-card-title transition-colors group-hover:text-accent"
    : homeTypography
      ? "home-card-title transition-colors group-hover:text-accent"
      : "font-serif text-xl leading-snug text-foreground transition-colors group-hover:text-accent sm:text-[1.35rem] md:text-2xl";
  const summaryClassName = homeTypography
    ? "home-card-desc mt-4 line-clamp-3"
    : "mt-4 line-clamp-3 text-sm leading-[1.85] text-foreground/65";
  const summary = getCollectionSummary(collection);
  const counts = getCollectionCounts(collection);
  const href = `/collections/${collection.slug}`;

  if (collection.coverImage) {
    return (
      <article className="group min-w-0">
        <Link href={href} className="block">
          <EditorialImage
            src={collection.coverImage}
            alt={collection.title}
            aspect={imageAspect}
          />
          <div className="mt-6 flex flex-1 flex-col">
            <h3 className={titleClassName}>{collection.title}</h3>

            {summary && <p className={summaryClassName}>{summary}</p>}

            {counts && (
              <p className="mt-5 text-xs tracking-[0.08em] text-foreground/45">
                {counts}
              </p>
            )}

            <p className="section-label mt-8 text-foreground/50 transition-colors group-hover:text-accent">
              View Collection →
            </p>
          </div>
        </Link>
      </article>
    );
  }

  return (
    <article className="group min-w-0">
      <Link
        href={href}
        className="flex min-h-full flex-col border border-foreground/10 bg-background px-6 py-8 transition-colors hover:border-foreground/20 sm:px-7 sm:py-9"
      >
        <h3 className={titleClassName}>{collection.title}</h3>

        {summary && (
          <p className={homeTypography ? "home-card-desc mt-4 flex-1" : "mt-4 flex-1 text-sm leading-[1.85] text-foreground/65"}>
            {summary}
          </p>
        )}

        {counts && (
          <p className="mt-5 text-xs tracking-[0.08em] text-foreground/45">
            {counts}
          </p>
        )}

        <p className="section-label mt-8 text-foreground/50 transition-colors group-hover:text-accent">
          View Collection →
        </p>
      </Link>
    </article>
  );
}
