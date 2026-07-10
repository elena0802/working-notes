/** Display-only helpers for newsletter pages (not part of the data model). */

export function formatNewsletterMonthYear(publishedAt: string): string {
  const date = new Date(`${publishedAt}T12:00:00`);

  return date.toLocaleDateString("en-US", {
    month: "long",
    year: "numeric",
  });
}

export function getNewsletterIssueLabel(title: string): string | undefined {
  const match = title.match(/#(\d+)/);

  if (!match) {
    return undefined;
  }

  return `Issue No. ${match[1].padStart(3, "0")}`;
}

/** Rough estimate for mixed Korean/English editorial copy. */
export function estimateLetterReadingMinutes(letter: string): number {
  const characters = letter.replace(/\s+/g, "").length;

  return Math.max(1, Math.ceil(characters / 450));
}
