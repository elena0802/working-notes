type EditorsLetterProps = {
  letter: string;
};

export default function EditorsLetter({ letter }: EditorsLetterProps) {
  const paragraphs = letter.split("\n\n").filter(Boolean);

  return (
    <section
      aria-labelledby="editors-letter-heading"
      className="mx-auto max-w-lg px-1"
    >
      <h2 id="editors-letter-heading" className="section-label text-center">
        Editor&apos;s Letter
      </h2>

      <div className="body-reading mt-10 space-y-7 sm:mt-12 sm:space-y-8 md:mt-14">
        {paragraphs.map((paragraph, index) => (
          <p
            key={index}
            className={
              index === 0
                ? "font-serif text-[1.125rem] leading-[1.85] text-foreground/88 sm:text-xl sm:leading-[1.8]"
                : "leading-[1.95] text-foreground/78"
            }
          >
            {paragraph}
          </p>
        ))}
      </div>
    </section>
  );
}
