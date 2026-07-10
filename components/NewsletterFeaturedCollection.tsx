import Link from "next/link";
import type { Collection } from "@/types/collection";

type NewsletterFeaturedCollectionProps = {
  collection: Collection;
};

export default function NewsletterFeaturedCollection({
  collection,
}: NewsletterFeaturedCollectionProps) {
  return (
    <section
      aria-labelledby="featured-collection-heading"
      className="mx-auto max-w-[680px]"
    >
      <h2 id="featured-collection-heading" className="section-label">
        Featured Collection
      </h2>

      <Link
        href={`/collections/${collection.slug}`}
        className="group mt-8 block sm:mt-10"
      >
        <h3 className="font-serif text-2xl leading-snug text-foreground transition-colors group-hover:text-accent sm:text-3xl md:text-[2rem]">
          {collection.title}
        </h3>

        {collection.subtitle && (
          <p className="mt-4 font-serif text-lg leading-relaxed text-foreground/55 sm:text-xl">
            {collection.subtitle}
          </p>
        )}

        <p className="body-calm mt-6 text-foreground/68">{collection.description}</p>

        <span className="mt-8 inline-block text-xs uppercase tracking-[0.28em] text-foreground/42 transition-colors group-hover:text-accent">
          View full collection
        </span>
      </Link>
    </section>
  );
}
