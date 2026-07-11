import Link from "next/link";
import { notFound } from "next/navigation";
import ArticleCard from "@/components/ArticleCard";
import ArticleMarkdown from "@/components/ArticleMarkdown";
import EditorialImage from "@/components/EditorialImage";
import {
  getAllNotes,
  getNoteBySlug,
  getRelatedNotes,
} from "@/lib/notes";

type PageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return getAllNotes().map((note) => ({ slug: note.slug }));
}

export async function generateMetadata({ params }: PageProps) {
  const { slug } = await params;
  const note = getNoteBySlug(slug);

  if (!note) {
    return { title: "Not Found" };
  }

  return {
    title: note.title,
    description: note.summary,
  };
}

export default async function NotePage({ params }: PageProps) {
  const { slug } = await params;
  const note = getNoteBySlug(slug);

  if (!note) {
    notFound();
  }

  const relatedNotes = getRelatedNotes(slug, 3);

  return (
    <article className="pb-24 pt-10 md:pt-14">
      <header className="page-shell mx-auto max-w-[860px] text-center">
        <Link
          href="/notes"
          className="text-xs uppercase tracking-[0.28em] text-foreground/55 transition-colors hover:text-accent"
        >
          기록과 생각
        </Link>

        <p className="section-label mt-8 sm:mt-10">{note.type}</p>

        <h1 className="mt-4 font-serif-kr text-3xl leading-[1.34] tracking-normal text-foreground sm:mt-5 sm:text-4xl md:text-5xl lg:text-[3.25rem]">
          {note.title}
        </h1>

        <p className="mx-auto mt-6 max-w-[700px] whitespace-pre-line font-serif-kr text-lg leading-[1.75] text-foreground/70 sm:mt-7 sm:text-xl md:text-2xl">
          {note.summary}
        </p>

        <p className="mt-6 text-xs tracking-[0.12em] text-foreground/55 sm:mt-8">
          {note.date}
        </p>

        {note.tags && note.tags.length > 0 ? (
          <ul className="mt-6 flex flex-wrap justify-center gap-x-4 gap-y-2 text-xs tracking-[0.08em] text-foreground/55">
            {note.tags.map((tag) => (
              <li key={tag}>#{tag}</li>
            ))}
          </ul>
        ) : null}
      </header>

      {note.coverImage ? (
        <div className="page-shell mx-auto mt-10 max-w-5xl md:mt-16">
          <EditorialImage
            src={note.coverImage}
            alt={note.imageAlt ?? note.title}
            aspect="feature"
            priority
          />
        </div>
      ) : null}

      <div
        className={`page-shell mx-auto w-full max-w-[700px] ${
          note.coverImage ? "mt-10 md:mt-16" : "mt-10 md:mt-14"
        }`}
      >
        <ArticleMarkdown content={note.content} />
      </div>

      {relatedNotes.length > 0 ? (
        <section className="page-shell mx-auto mt-20 max-w-6xl border-t border-muted/50 pt-16 md:mt-32 md:pt-20">
          <p className="section-label">관련 기록</p>
          <h2 className="mt-3 font-serif text-2xl text-foreground md:mt-4 md:text-3xl">
            이어서 읽기
          </h2>

          <div className="mt-10 grid gap-10 sm:grid-cols-2 sm:gap-12 lg:grid-cols-3 lg:gap-10">
            {relatedNotes.map((related) => (
              <ArticleCard
                key={related.slug}
                article={related}
                variant="magazine"
              />
            ))}
          </div>
        </section>
      ) : null}
    </article>
  );
}
