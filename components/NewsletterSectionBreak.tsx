type NewsletterSectionBreakProps = {
  /** Editorial column width for letter/collection transitions */
  variant?: "editorial" | "full";
  className?: string;
};

export default function NewsletterSectionBreak({
  variant = "editorial",
  className = "",
}: NewsletterSectionBreakProps) {
  const widthClass =
    variant === "editorial" ? "mx-auto max-w-[680px]" : "w-full";

  return (
    <div
      aria-hidden
      className={`${widthClass} mt-14 border-t border-muted/50 pt-10 md:mt-16 md:pt-12 ${className}`}
    />
  );
}
