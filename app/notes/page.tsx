import Link from "next/link";
import { getAllNotes } from "@/lib/notes";

export const metadata = {
  title: "기록과 생각",
  description: "의사결정 과정과 생각의 변화에 대한 기록입니다.",
};

export default function NotesPage() {
  const notes = getAllNotes();

  return (
    <div className="pb-24 pt-10 md:pt-14">
      <header className="page-shell mx-auto max-w-5xl">
        <h1 className="font-serif-kr text-2xl leading-[1.5] tracking-[0.01em] text-foreground sm:text-3xl">
          기록과 생각
        </h1>
      </header>

      <section className="page-shell mx-auto max-w-5xl pt-10 md:pt-14">
        <div>
          {notes.map((note) => (
            <article
              key={note.slug}
              className="border-t border-muted/50 last:border-b"
            >
              <Link
                href={`/notes/${note.slug}`}
                className="group grid gap-3 py-6 sm:py-7 md:grid-cols-[8rem_minmax(0,1fr)_auto] md:items-baseline md:gap-8"
              >
                <time
                  dateTime={note.date}
                  className="text-xs tracking-[0.12em] text-foreground/45"
                >
                  {note.date.replaceAll("-", ".")}
                </time>
                <h2 className="font-serif text-xl leading-snug text-foreground transition-colors group-hover:text-accent sm:text-2xl">
                  {note.title}
                </h2>
                <p className="section-label">{note.type}</p>
              </Link>
            </article>
          ))}
        </div>
      </section>
    </div>
  );
}
