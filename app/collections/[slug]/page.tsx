import CollectionEditorNote from "@/components/CollectionEditorNote";
import CollectionPlacesSection from "@/components/CollectionPlacesSection";
import CollectionStoriesSection from "@/components/CollectionStoriesSection";
import EditorialImage from "@/components/EditorialImage";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getArticlesBySlugs } from "@/data/articles";
import {
  collections,
  getCollectionBySlug,
} from "@/data/collections";
import { getCuratedPlacesByIds } from "@/data/curatedPlaces";
import { enrichArticles } from "@/lib/content";

type PageProps = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  return collections.map((collection) => ({ slug: collection.slug }));
}

export async function generateMetadata({ params }: PageProps) {
  const { slug } = await params;
  const collection = getCollectionBySlug(slug);

  if (!collection) {
    return { title: "Not Found" };
  }

  return {
    title: collection.title,
    description: collection.description,
  };
}

export default async function CollectionPage({ params }: PageProps) {
  const { slug } = await params;
  const collection = getCollectionBySlug(slug);

  if (!collection) {
    notFound();
  }

  const places = getCuratedPlacesByIds(collection.placeIds);
  const essays = enrichArticles(getArticlesBySlugs(collection.essaySlugs));

  return (
    <div className="page-shell mx-auto max-w-7xl pb-24 pt-10 md:pt-14">
      <header className="max-w-2xl border-b border-muted/50 pb-10 md:pb-16">
        <Link
          href="/places"
          className="text-xs uppercase tracking-[0.28em] text-foreground/45 transition-colors hover:text-accent"
        >
          Places
        </Link>

        <p className="section-label mt-8 sm:mt-10">Collections</p>

        <h1 className="mt-4 font-serif text-3xl leading-[1.15] tracking-[0.01em] text-foreground sm:mt-5 sm:text-4xl md:text-5xl lg:text-[3.25rem]">
          {collection.title}
        </h1>

        {collection.subtitle && (
          <p className="mt-5 whitespace-pre-line font-serif text-lg leading-relaxed text-foreground/60 sm:mt-6 sm:text-xl md:text-2xl">
            {collection.subtitle}
          </p>
        )}

        <p className="body-calm mt-6 text-foreground/70 sm:mt-8">
          {collection.description}
        </p>
      </header>

      {collection.coverImage && (
        <div className="mt-10 max-w-5xl md:mt-16">
          <EditorialImage
            src={collection.coverImage}
            alt={collection.title}
            aspect="feature"
            priority
            captionAlign="center"
          />
        </div>
      )}

      {collection.editorNote && (
        <CollectionEditorNote note={collection.editorNote} />
      )}

      <CollectionPlacesSection
        places={places}
        className={
          collection.coverImage || collection.editorNote
            ? "pt-12 md:pt-20"
            : places.length > 0
              ? "py-12 md:py-20"
              : undefined
        }
      />

      <CollectionStoriesSection essays={essays} />
    </div>
  );
}
