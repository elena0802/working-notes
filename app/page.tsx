import Link from "next/link";
import ArticleCard from "@/components/ArticleCard";
import { getRecentNotes } from "@/lib/notes";

export default function Home() {
  const recentNotes = getRecentNotes(3);

  return (
    <>
      <section className="page-shell mx-auto max-w-7xl py-16 md:py-24 lg:py-28">
        <div className="mx-auto max-w-3xl text-center">
          <p className="section-label">Working Notes</p>
          <h1 className="mt-5 font-serif text-4xl leading-snug text-foreground sm:text-5xl md:text-6xl">
            Working Notes
          </h1>
          <p className="body-calm mx-auto mt-6 max-w-xl text-foreground/70 sm:mt-8">
            의사결정 과정과 생각의 변화를 기록합니다.
          </p>
        </div>
      </section>

      <section className="home-section border-t border-muted/50">
        <div className="page-shell mx-auto max-w-7xl">
          <div className="mb-12 md:mb-14">
            <p className="section-label">Recent Notes</p>
            <h2 className="home-section-title mt-4 md:mt-5">최근 기록</h2>
          </div>

          <div className="grid gap-10 sm:grid-cols-2 sm:gap-12 lg:grid-cols-3 lg:gap-14">
            {recentNotes.map((note) => (
              <ArticleCard
                key={note.slug}
                article={note}
                variant="magazine"
                homeTypography
              />
            ))}
          </div>

          <div className="mt-14 text-center md:mt-20">
            <Link href="/notes" className="home-btn">
              기록과 생각 전체 보기 →
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
