import Link from "next/link";
import { notFound } from "next/navigation";
import ArticleMarkdown from "@/components/ArticleMarkdown";
import EditorialImage from "@/components/EditorialImage";
import RelatedArticleCard from "@/components/RelatedArticleCard";
import RelatedPlacesSection from "@/components/RelatedPlacesSection";
import RePlaceCTA from "@/components/RePlaceCTA";
import { articles, getArticleBySlug, getRelatedArticles } from "@/data/articles";
import { relatedPlacesByArticleSlug } from "@/data/relatedPlaces";
import {
  contentExists,
  enrichArticles,
  getArticleContent,
} from "@/lib/content";

type PageProps = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  return articles.map((article) => ({ slug: article.slug }));
}

export async function generateMetadata({ params }: PageProps) {
  const { slug } = await params;
  const article = getArticleBySlug(slug);

  if (!article) {
    return { title: "Not Found" };
  }

  return {
    title: article.title,
    description: article.excerpt,
  };
}

export default async function ArticlePage({ params }: PageProps) {
  const { slug } = await params;
  const article = getArticleBySlug(slug);

  if (!article || !contentExists(slug)) {
    notFound();
  }

  const { frontmatter, content } = getArticleContent(slug);
  const relatedArticles = enrichArticles(getRelatedArticles(slug, 3));
  const relatedPlaces = relatedPlacesByArticleSlug[slug] ?? [];

  return (
    <article className="pb-24 pt-10 md:pt-14">
      {/* Article Hero */}
      <header className="page-shell mx-auto max-w-4xl text-center">
        <Link
          href="/journal"
          className="text-xs uppercase tracking-[0.28em] text-foreground/45 transition-colors hover:text-accent"
        >
          Journal
        </Link>

        <p className="section-label mt-8 sm:mt-10">{article.category}</p>

        <h1 className="mt-4 font-serif text-3xl leading-[1.15] tracking-[0.01em] text-foreground sm:mt-5 sm:text-4xl md:text-5xl lg:text-[3.25rem]">
          {article.title}
        </h1>

        <p className="mt-5 whitespace-pre-line font-serif text-lg leading-relaxed text-foreground/60 sm:mt-6 sm:text-xl md:text-2xl">
          {frontmatter.subtitle}
        </p>

        <p className="mt-6 text-xs tracking-[0.12em] text-foreground/45 sm:mt-8">
          {article.date}
        </p>
      </header>

      <div className="page-shell mx-auto mt-10 max-w-5xl md:mt-16">
        <EditorialImage
          src={article.image}
          alt={frontmatter.imageAlt}
          aspect="feature"
          priority
        />
      </div>

      {/* Article Body */}
      <div className="page-shell mx-auto mt-12 max-w-[680px] md:mt-20">
        <ArticleMarkdown content={content} />
      </div>

      <RelatedPlacesSection places={relatedPlaces} />

      <RePlaceCTA />

      {/* Related Articles */}
      {relatedArticles.length > 0 && (
        <section className="page-shell mx-auto mt-20 max-w-6xl md:mt-32">
          <p className="section-label">관련 글</p>
          <h2 className="mt-3 font-serif text-2xl text-foreground md:mt-4 md:text-3xl">
            함께 읽기
          </h2>

          <div className="mt-10 grid gap-10 sm:grid-cols-2 sm:gap-12 lg:grid-cols-3 lg:gap-10">
            {relatedArticles.map((related) => (
              <RelatedArticleCard key={related.slug} article={related} />
            ))}
          </div>
        </section>
      )}
    </article>
  );
}
