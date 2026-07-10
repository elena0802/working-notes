import CuratedPlaceCard from "@/components/CuratedPlaceCard";
import type { CuratedPlace } from "@/data/curatedPlaces";

type PlacesWorthRememberingProps = {
  places: CuratedPlace[];
};

export default function PlacesWorthRemembering({
  places,
}: PlacesWorthRememberingProps) {
  if (places.length === 0) {
    return null;
  }

  return (
    <section className="border-b border-muted/50 pb-12 md:pb-16">
      <div className="max-w-3xl">
        <p className="section-label">Re:Place</p>
        <h2 className="mt-5 font-serif text-2xl text-foreground sm:text-3xl md:text-4xl">
          Places Worth Remembering
        </h2>
        <p className="body-calm mt-6 whitespace-pre-line text-foreground/70 sm:mt-8">
          {
            "Second Season에서 이야기한 장소들,\n그리고 Re:Place에 기록된 실제 장소들을 모았습니다."
          }
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
