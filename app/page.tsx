import Link from "next/link";
import ArticleCard from "@/components/ArticleCard";
import CareerTimelinePreview from "@/components/CareerTimelinePreview";
import CollectionCard from "@/components/CollectionCard";
import EditorialImage from "@/components/EditorialImage";
import NewsletterSubscribeForm from "@/components/NewsletterSubscribeForm";
import {
  getFeaturedArticle,
  getHomeRecentPosts,
  homeFeaturedStoryDisplay,
  siteImages,
} from "@/data/articles";
import { getHomeFeaturedCollections } from "@/data/collections";
import { educatorProfile, getHomeTimelinePreview } from "@/data/educator";
import { enrichArticle, enrichArticles } from "@/lib/content";

export default function Home() {
  const featured = enrichArticle(getFeaturedArticle());
  const recentPosts = enrichArticles(getHomeRecentPosts());
  const [firstRow, secondRow] = [
    recentPosts.slice(0, 2),
    recentPosts.slice(2, 5),
  ];
  const timelinePreview = getHomeTimelinePreview();
  const featuredCollections = getHomeFeaturedCollections();

  return (
    <>
      {/* Hero */}
      <section className="page-shell mx-auto max-w-7xl py-12 pb-16 md:py-20 lg:py-24">
        <div className="grid items-start gap-8 md:gap-10 lg:grid-cols-12 lg:gap-14">
          <div className="order-2 min-w-0 lg:order-1 lg:col-span-6 lg:pt-10">
            <p className="section-label">SECOND SEASON</p>
            <h1 className="mt-5 font-serif text-3xl leading-snug text-foreground sm:text-4xl md:text-5xl">
              박옥주 교사의
              <br />
              <span className="whitespace-nowrap">두 번째 계절 이야기</span>
            </h1>
            <p className="body-calm mt-6 text-foreground/80 sm:mt-8">
              교단에서 배운 것들,
              <br />
              그리고 여전히 아름다운 것을 발견하는 일상을 기록합니다.
            </p>
            <Link href="/journal" className="home-btn mt-10 sm:mt-12">
              이야기 더보기 →
            </Link>
          </div>

          <div className="order-1 min-w-0 lg:order-2 lg:col-span-6 lg:flex lg:items-start lg:justify-end lg:pt-10">
            <div className="w-full max-w-xl lg:max-w-lg">
              <EditorialImage
                src={siteImages.hero.src}
                alt={siteImages.hero.alt}
                aspect="hero"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      {/* Featured Story */}
      <section className="home-section-featured page-shell mx-auto max-w-7xl">
        <Link href={`/journal/${featured.slug}`} className="group block min-w-0">
          <div className="mx-auto max-w-5xl">
            <EditorialImage
              src={featured.image}
              alt={featured.imageAlt}
              aspect="feature"
            />
          </div>
          <div className="mx-auto mt-5 max-w-2xl text-center md:mt-6">
            <p className="section-label">Featured Story</p>
            <h2 className="home-featured-title mt-4 transition-colors group-hover:text-accent md:mt-5">
              {homeFeaturedStoryDisplay.title}
            </h2>
            <p className="home-section-desc mt-5 whitespace-pre-line sm:mt-6">
              {homeFeaturedStoryDisplay.subtitle}
            </p>
            <span className="home-btn mt-5 sm:mt-6">
              두 번째 계절 읽기 →
            </span>
          </div>
        </Link>
      </section>

      {/* Latest Journal */}
      <section className="home-section page-shell mx-auto max-w-7xl">
        <div className="mb-12 md:mb-14">
          <p className="section-label">Latest Journal</p>
          <div className="mt-4 flex items-end justify-between gap-4 md:mt-5">
            <h2 className="home-section-title min-w-0">
              최근 글
            </h2>
            <Link
              href="/journal"
              className="home-btn inline-flex min-h-11 shrink-0 items-center justify-center px-5 py-3 text-base md:min-h-0 md:px-7 md:py-3 md:text-[1rem]"
            >
              전체보기 →
            </Link>
          </div>
        </div>

        {firstRow.length > 0 && (
          <div className="mb-16 grid gap-10 sm:mb-20 sm:gap-12 lg:grid-cols-2 lg:mb-24 lg:gap-14">
            {firstRow.map((article) => (
              <ArticleCard
                key={article.slug}
                article={article}
                variant="lead"
                hideCaption
                homeTypography
              />
            ))}
          </div>
        )}

        <div className="grid gap-10 sm:grid-cols-2 sm:gap-12 lg:grid-cols-3 lg:gap-10">
          {secondRow.map((article) => (
            <ArticleCard
              key={article.slug}
              article={article}
              variant="magazine"
              hideCaption
              homeTypography
            />
          ))}
        </div>
      </section>

      {/* Places Worth Remembering */}
      <section id="places" className="home-places-section">
        <div className="page-shell mx-auto max-w-7xl">
          <div className="mx-auto max-w-3xl text-center">
            <p className="section-label text-foreground/50">Places</p>
            <h2 className="home-section-title mt-4 md:mt-5">
              함께 나누고 싶은 곳들
            </h2>
            <p className="home-section-desc mt-5 whitespace-pre-line sm:mt-6">
              오랫동안 기억에 남은 장소들과{"\n"}
              그곳에서 시작된 이야기들을 모았습니다.
            </p>
          </div>

          <div className="mt-12 grid gap-10 md:mt-14 md:grid-cols-2 md:gap-12 lg:gap-14">
            {featuredCollections.map((collection) => (
              <CollectionCard
                key={collection.slug}
                collection={collection}
                imageAspect="placesFeature"
                homeTypography
                homePlaces
              />
            ))}
          </div>

          <div className="mt-12 text-center md:mt-16">
            <Link href="/places" className="home-btn home-places-cta">
              모든 컬렉션 보기 →
            </Link>
          </div>
        </div>
      </section>

      {/* 교직 인생 */}
      <section className="home-section page-shell mx-auto max-w-7xl">
        <div className="mx-auto max-w-3xl text-center">
          <p className="section-label">TEACHING LIFE</p>
          <h2 className="home-section-title mt-4 md:mt-5">
            {educatorProfile.homeTeaser.headline}
          </h2>
          <p className="home-section-desc mt-5 whitespace-pre-line sm:mt-6">
            {educatorProfile.homeTeaser.subheadline}
          </p>
        </div>

        <CareerTimelinePreview milestones={timelinePreview} />

        <div className="mt-14 text-center md:mt-20">
          <Link href="/about" className="home-btn">
            교직 인생 전체 보기 →
          </Link>
        </div>
      </section>

      {/* Newsletter */}
      <section className="home-section border-t border-muted/50">
        <div className="page-shell mx-auto max-w-xl text-center">
          <p className="section-label">Newsletter</p>
          <h2 className="home-section-title mt-4 md:mt-5">
            Second Season의 편지
          </h2>
          <p className="home-section-desc mt-5 sm:mt-6">
            두 번째 계절의 기록을,
            <br />
            좋은 장소와 조용한 순간과 함께 가끔 편지로 나눕니다.
          </p>
          <NewsletterSubscribeForm source="home" variant="editorial" />
        </div>
      </section>
    </>
  );
}
