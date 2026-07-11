import fs from "fs";
import path from "path";
import matter from "gray-matter";

const notesDirectory = path.join(process.cwd(), "content", "notes");

export type NoteFrontmatter = {
  title: string;
  date: string;
  type: string;
  summary: string;
  tags: string[];
  coverImage?: string;
  imageAlt?: string;
};

export type Note = NoteFrontmatter & {
  slug: string;
  content: string;
};

function validateFrontmatter(
  data: Record<string, unknown>,
  filename: string,
): NoteFrontmatter {
  const requiredStrings = ["title", "date", "type", "summary"] as const;

  for (const field of requiredStrings) {
    if (typeof data[field] !== "string" || data[field].trim() === "") {
      throw new Error(
        `Invalid note frontmatter in ${filename}: "${field}" must be a non-empty string.`,
      );
    }
  }

  if (
    !Array.isArray(data.tags) ||
    !data.tags.every((tag) => typeof tag === "string")
  ) {
    throw new Error(
      `Invalid note frontmatter in ${filename}: "tags" must be a string array.`,
    );
  }

  for (const field of ["coverImage", "imageAlt"] as const) {
    if (data[field] !== undefined && typeof data[field] !== "string") {
      throw new Error(
        `Invalid note frontmatter in ${filename}: "${field}" must be a string when provided.`,
      );
    }
  }

  return {
    title: data.title as string,
    date: data.date as string,
    type: data.type as string,
    summary: data.summary as string,
    tags: data.tags as string[],
    coverImage: data.coverImage as string | undefined,
    imageAlt: data.imageAlt as string | undefined,
  };
}

function readNote(filename: string): Note {
  const filePath = path.join(notesDirectory, filename);
  const source = fs.readFileSync(filePath, "utf8");
  const { data, content } = matter(source);

  return {
    slug: path.basename(filename, ".md"),
    ...validateFrontmatter(data, filename),
    content: content.trim(),
  };
}

export function getAllNotes(): Note[] {
  if (!fs.existsSync(notesDirectory)) {
    return [];
  }

  return fs
    .readdirSync(notesDirectory)
    .filter((filename) => filename.endsWith(".md"))
    .map(readNote)
    .sort((a, b) => b.date.localeCompare(a.date));
}

export function getNoteBySlug(slug: string): Note | undefined {
  return getAllNotes().find((note) => note.slug === slug);
}

export function getRecentNotes(limit = 5): Note[] {
  return getAllNotes().slice(0, limit);
}

export function getRelatedNotes(slug: string, limit = 3): Note[] {
  return getAllNotes()
    .filter((note) => note.slug !== slug)
    .slice(0, limit);
}
