import ArticleCard from "@/components/ArticleCard";
import { getAllNotes } from "@/lib/notes";

export const metadata = {
  title: "기록과 생각",
  description: "의사결정 과정과 생각의 변화에 대한 기록입니다.",
};

export default function NotesPage() {
  const notes = getAllNotes();

  return (
    <div className="pb-24 pt-10 md:pt-14">
      <header className="page-shell mx-auto max-w-[760px] text-center">
        <p className="section-label">기록과 생각</p>
        <h1 className="mt-5 font-serif-kr text-2xl leading-[1.5] tracking-[0.01em] text-foreground sm:mt-6 sm:text-3xl md:text-4xl">
          결정하고, 바꾸고, 돌아보는 기록
        </h1>
        <p className="body-calm mx-auto mt-6 max-w-xl text-foreground/65 sm:mt-8">
          의사결정 과정과 생각의 변화, 실행 후의 회고를 기록합니다.
        </p>
      </header>

      <section className="page-shell mx-auto max-w-7xl py-12 md:py-20">
        <div className="grid gap-10 sm:grid-cols-2 sm:gap-12 lg:grid-cols-3 lg:gap-14">
          {notes.map((note) => (
            <ArticleCard key={note.slug} article={note} variant="default" />
          ))}
        </div>
      </section>
    </div>
  );
}
