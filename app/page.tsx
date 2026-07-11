import Link from "next/link";
import ArticleCard from "@/components/ArticleCard";
import { getRecentNotes } from "@/lib/notes";

export default function Home() {
  const recentNotes = getRecentNotes(3);

  return (
    <>
      <section className="page-shell mx-auto max-w-7xl py-12 md:py-[4.5rem] lg:py-20">
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

      <section className="border-t border-muted/50 py-12 md:py-[4.5rem]">
        <div className="page-shell mx-auto max-w-7xl">
          <div className="mb-10 flex flex-col items-start gap-6 sm:flex-row sm:items-end sm:justify-between md:mb-12">
            <div>
              <p className="section-label">Recent Notes</p>
              <h2 className="home-section-title mt-4 md:mt-5">최근 기록</h2>
            </div>
            <Link href="/notes" className="home-btn shrink-0">
              기록과 생각 전체 보기 →
            </Link>
          </div>

          <div className="grid items-stretch gap-10 md:grid-cols-2 md:gap-12 [&_h3]:min-h-[3.75rem] [&>article]:h-full [&>article>a]:h-full [&>article>a>div]:h-full">
            {recentNotes.map((note) => (
              <ArticleCard
                key={note.slug}
                article={note}
                variant="magazine"
                homeTypography
              />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
