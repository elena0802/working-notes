export type Collection = {
  slug: string;
  title: string;
  subtitle?: string;
  description: string;
  coverImage?: string;
  editorNote?: string;
  placeIds: string[];
  essaySlugs: string[];
};
