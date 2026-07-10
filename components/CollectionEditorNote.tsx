type CollectionEditorNoteProps = {
  note: string;
};

export default function CollectionEditorNote({ note }: CollectionEditorNoteProps) {
  return (
    <section className="mt-16 max-w-[680px] md:mt-24">
      <p className="section-label">Editor&apos;s Note</p>
      <div className="body-calm mt-8 space-y-6 text-foreground/75 sm:mt-10">
        {note.split("\n\n").map((paragraph, index) => (
          <p key={index}>{paragraph}</p>
        ))}
      </div>
    </section>
  );
}
