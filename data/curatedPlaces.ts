import { getArticleBySlug } from "@/data/articles";
import { relatedPlacesByArticleSlug } from "@/data/relatedPlaces";
import type { RelatedEssay, RelatedPlace } from "@/types/relatedPlace";

export type CuratedPlace = {
  id: string;
  title: string;
  category: RelatedPlace["category"];
  location?: string;
  description?: string;
  context?: string;
  image?: string;
  rePlaceUrl?: string;
  relatedEssay?: RelatedEssay;
};

function toCuratedPlace(place: RelatedPlace): CuratedPlace {
  const essayImage = place.relatedEssay?.slug
    ? getArticleBySlug(place.relatedEssay.slug)?.image
    : undefined;

  return {
    id: place.id,
    title: place.name,
    category: place.category,
    location: place.location,
    description: place.description,
    context: place.context,
    image: place.image ?? essayImage,
    rePlaceUrl: place.rePlaceUrl,
    relatedEssay: place.relatedEssay,
  };
}

/**
 * Flatten all related places across essays, deduplicated by place id.
 * First occurrence wins when the same id appears under multiple essays.
 */
export function getAllRelatedPlaces(): CuratedPlace[] {
  const seen = new Set<string>();
  const places: CuratedPlace[] = [];

  for (const articlePlaces of Object.values(relatedPlacesByArticleSlug)) {
    for (const place of articlePlaces) {
      if (seen.has(place.id)) {
        continue;
      }

      seen.add(place.id);
      places.push(toCuratedPlace(place));
    }
  }

  return places;
}

export function getCuratedPlacesByIds(ids: string[]): CuratedPlace[] {
  const placesById = new Map(
    getAllRelatedPlaces().map((place) => [place.id, place]),
  );

  return ids
    .map((id) => placesById.get(id))
    .filter((place): place is CuratedPlace => place !== undefined);
}

/**
 * Manual curation order for the Places page.
 * Places-category essays first (interleaved for variety), then journeys.
 */
const curatedPlaceIdsForPlacesPage = [
  "place-001",
  "place-004",
  "place-013",
  "place-002",
  "place-005",
  "place-014",
  "place-003",
  "place-006",
  "place-015",
  "place-007",
  "place-008",
  "place-009",
  "place-010",
  "place-011",
  "place-012",
] as const;

const PLACES_PAGE_CURATED_LIMIT = 6;

export function curatedPlacesForPlacesPage(): CuratedPlace[] {
  const placesById = new Map(
    getAllRelatedPlaces().map((place) => [place.id, place]),
  );

  return curatedPlaceIdsForPlacesPage
    .slice(0, PLACES_PAGE_CURATED_LIMIT)
    .map((id) => placesById.get(id))
    .filter((place): place is CuratedPlace => place !== undefined);
}

export const curatedPlacesForPlacesPageList =
  curatedPlacesForPlacesPage();
