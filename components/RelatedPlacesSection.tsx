import type { RelatedPlace } from "@/data/relatedPlaces";
import {
  getRelatedPlaceBody,
  getRelatedPlaceMeta,
} from "@/data/relatedPlaces";
import { REPLACE_URL } from "@/lib/constants";

type RelatedPlacesSectionProps = {
  places: RelatedPlace[];
};

export default function RelatedPlacesSection({
  places,
}: RelatedPlacesSectionProps) {
  if (places.length === 0) {
    return null;
  }

  return (
    <section className="page-shell mx-auto mt-20 max-w-6xl md:mt-32">
      <p className="section-label">Re:Place</p>
      <h2 className="mt-4 font-serif text-2xl text-foreground md:text-3xl">
        이 글과 관련된 장소
      </h2>
      <p className="mt-5 max-w-2xl whitespace-pre-line text-sm leading-[1.9] text-foreground/55 sm:text-[0.9375rem]">
        {"Second Season은 장소의 의미를 기록합니다.\nRe:Place는 그 장소를 다시 찾아갈 수 있게 합니다."}
      </p>

      <div className="mt-12 grid gap-8 sm:grid-cols-2 sm:gap-10 lg:grid-cols-3 lg:gap-10">
        {places.map((place) => {
          const meta = getRelatedPlaceMeta(place);
          const body = getRelatedPlaceBody(place);
          const linkHref =
            place.rePlaceUrl && place.rePlaceUrl !== "#"
              ? place.rePlaceUrl
              : REPLACE_URL;

          return (
            <article
              key={place.id}
              className="flex min-w-0 flex-col border border-foreground/10 bg-background px-6 py-8 sm:px-7 sm:py-9"
            >
              <h3 className="font-serif text-xl leading-snug text-foreground sm:text-[1.35rem]">
                {place.name}
              </h3>

              {meta && (
                <p className="mt-3 text-xs tracking-[0.08em] text-foreground/45">
                  {meta}
                </p>
              )}

              {body && (
                <p className="mt-5 flex-1 text-sm leading-[1.85] text-foreground/65">
                  {body}
                </p>
              )}

              {linkHref && (
                <a
                  href={linkHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-8 inline-block text-xs uppercase tracking-[0.22em] text-foreground/50 transition-colors hover:text-accent"
                >
                  Re:Place에서 보기
                </a>
              )}
            </article>
          );
        })}
      </div>
    </section>
  );
}
