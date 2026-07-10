import CollectionPlacesSection from "@/components/CollectionPlacesSection";
import EditorsLetter from "@/components/EditorsLetter";
import NewsletterCollectionCover from "@/components/NewsletterCollectionCover";
import NewsletterFeaturedCollection from "@/components/NewsletterFeaturedCollection";
import NewsletterHero from "@/components/NewsletterHero";
import NewsletterRelatedReadingSection from "@/components/NewsletterRelatedReadingSection";
import NewsletterSectionBreak from "@/components/NewsletterSectionBreak";
import { notFound } from "next/navigation";
import { getArticlesBySlugs } from "@/data/articles";
import { getCollectionBySlug } from "@/data/collections";
import { getCuratedPlacesByIds } from "@/data/curatedPlaces";
import {
  getNewsletterIssueBySlug,
  getPublishedNewsletterIssues,
} from "@/data/newsletters";
import { enrichArticles } from "@/lib/content";

type PageProps = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  return getPublishedNewsletterIssues().map((issue) => ({ slug: issue.slug }));
}

export async function generateMetadata({ params }: PageProps) {
  const { slug } = await params;
  const issue = getNewsletterIssueBySlug(slug);

  if (!issue || issue.status !== "published") {
    return { title: "Not Found" };
  }

  return {
    title: issue.title,
    description: issue.previewText ?? issue.subject,
  };
}

export default async function NewsletterIssuePage({ params }: PageProps) {
  const { slug } = await params;
  const issue = getNewsletterIssueBySlug(slug);

  if (!issue || issue.status !== "published") {
    notFound();
  }

  const collection = getCollectionBySlug(issue.collectionSlug);

  if (!collection) {
    notFound();
  }

  const places = getCuratedPlacesByIds(collection.placeIds);
  const essays = enrichArticles(getArticlesBySlugs(collection.essaySlugs));

  return (
    <article className="page-shell mx-auto max-w-7xl pb-24 pt-10 md:pb-28 md:pt-14">
      <NewsletterHero
        title={issue.title}
        subject={issue.subject}
        publishedAt={issue.publishedAt}
        letter={issue.letter}
      />

      <div className="mt-12 md:mt-16">
        <EditorsLetter letter={issue.letter} />
      </div>

      <NewsletterSectionBreak variant="editorial" />

      <NewsletterFeaturedCollection collection={collection} />

      {collection.coverImage && (
        <NewsletterCollectionCover
          src={collection.coverImage}
          alt={collection.title}
        />
      )}

      <NewsletterSectionBreak variant="full" />

      <CollectionPlacesSection places={places} className="pt-0" />

      <NewsletterSectionBreak variant="full" className="mt-12 md:mt-14" />

      <NewsletterRelatedReadingSection essays={essays} className="pt-0" />
    </article>
  );
}
