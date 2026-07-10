import ArticleCard from "@/components/ArticleCard";
import CollectionsSection from "@/components/CollectionsSection";
import PlacesWorthRemembering from "@/components/PlacesWorthRemembering";
import { getArticlesByCategory } from "@/data/articles";
import { getAllCollections } from "@/data/collections";
import { curatedPlacesForPlacesPage } from "@/data/curatedPlaces";
import { enrichArticles } from "@/lib/content";

export const metadata = {
  title: "좋은 공간들",
  description:
    "오래 기억에 남은 카페, 책방, 산책길, 그리고 여행지들.",
};

export default function PlacesPage() {
  const collections = getAllCollections();
  const curatedPlaces = curatedPlacesForPlacesPage();
  const placesArticles = enrichArticles(getArticlesByCategory("Places"));

  return (
    <div className="pb-24 pt-10 md:pt-14">
      <header className="page-shell mx-auto max-w-[760px] text-center">
        <p className="section-label">좋은 공간들</p>
        <h1 className="mt-5 font-serif-kr text-2xl leading-[1.5] tracking-[0.01em] text-foreground sm:mt-6 sm:text-3xl md:text-4xl">
          다시 머물고 싶은 장소들
        </h1>
        <p className="body-calm mx-auto mt-6 max-w-xl whitespace-pre-line text-foreground/65 sm:mt-8">
          오래 기억에 남은 카페,{"\n"}책방, 산책길, 그리고 여행지들.
        </p>
      </header>

      <div className="page-shell mx-auto max-w-7xl py-12 md:py-20">
        <CollectionsSection collections={collections} />

        <div className="pt-12 md:pt-20">
          <PlacesWorthRemembering places={curatedPlaces} />
        </div>

        <section className="pt-12 md:pt-20">
          <div className="max-w-3xl">
            <h2 className="font-serif text-2xl text-foreground sm:text-3xl md:text-4xl">
              Stories About Places
            </h2>
            <p className="body-calm mt-6 text-foreground/70 sm:mt-8">
              장소를 바라보는 기준과 머문 시간에 대한 글들입니다.
            </p>
          </div>

          <div className="mt-12 grid gap-10 sm:grid-cols-2 sm:gap-12 lg:grid-cols-3 lg:gap-14 md:mt-16">
            {placesArticles.map((article) => (
              <ArticleCard
                key={article.slug}
                article={article}
                variant="magazine"
              />
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
