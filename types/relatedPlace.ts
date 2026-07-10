export type RelatedEssay = {
  slug: string;
  title: string;
  excerpt?: string;
};

export type RelatedPlace = {
  id: string;
  name: string;
  category: "cafe" | "restaurant" | "walk" | "stay" | "bookstore" | "garden";
  context?: string;
  description?: string;
  location?: string;
  image?: string;
  tags?: string[];
  rePlaceUrl?: string;
  relatedEssay?: RelatedEssay;
};
