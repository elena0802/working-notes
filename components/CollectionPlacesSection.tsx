import CuratedPlaceCard from "@/components/CuratedPlaceCard";
import type { CuratedPlace } from "@/data/curatedPlaces";

type CollectionPlacesSectionProps = {
  places: CuratedPlace[];
  className?: string;
};

export default function CollectionPlacesSection({
  places,
  className = "pt-12 md:pt-20",
}: CollectionPlacesSectionProps) {
  if (places.length === 0) {
    return null;
  }

  return (
    <section className={className}>
      <div className="max-w-3xl">
        <p className="section-label">Re:Place</p>
        <h2 className="mt-5 font-serif text-2xl text-foreground sm:text-3xl md:text-4xl">
          Places in This Collection
        </h2>
        <p className="body-calm mt-6 text-foreground/70 sm:mt-8">
          Second Season에서 이 컬렉션과 함께 기록한 장소들입니다.
        </p>
      </div>

      <div className="mt-12 grid gap-10 sm:grid-cols-2 sm:gap-12 lg:grid-cols-3 lg:gap-14 md:mt-16">
        {places.map((place) => (
          <CuratedPlaceCard key={place.id} place={place} />
        ))}
      </div>
    </section>
  );
}
