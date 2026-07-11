import Link from "next/link";
import ArticleCard from "@/components/ArticleCard";
import { getRecentNotes } from "@/lib/notes";

export default function Home() {
  const recentNotes = getRecentNotes(3);

  return (
    <section className="py-12 md:py-[4.5rem]">
      <div className="page-shell mx-auto max-w-7xl">
        <div className="mb-10 flex flex-col items-start gap-6 sm:flex-row sm:items-end sm:justify-between md:mb-12">
          <div>
            <p className="section-label">Recent Notes</p>
            <h1 className="home-section-title mt-4 md:mt-5">최근 기록</h1>
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
  );
}
