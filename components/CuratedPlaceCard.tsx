import EditorialImage from "@/components/EditorialImage";
import type { CuratedPlace } from "@/data/curatedPlaces";
import { REPLACE_URL } from "@/lib/constants";

type CuratedPlaceCardProps = {
  place: CuratedPlace;
};

function getCuratedPlaceUrl(rePlaceUrl?: string): string {
  return rePlaceUrl && rePlaceUrl !== "#" ? rePlaceUrl : REPLACE_URL;
}

function getCuratedPlaceBody(place: CuratedPlace): string | undefined {
  return place.context ?? place.description;
}

export default function CuratedPlaceCard({ place }: CuratedPlaceCardProps) {
  const body = getCuratedPlaceBody(place);
  const href = getCuratedPlaceUrl(place.rePlaceUrl);

  if (place.image) {
    return (
      <article className="group flex min-w-0 flex-col">
        <EditorialImage src={place.image} alt={place.title} aspect="card" />
        <div className="mt-6 flex flex-1 flex-col">
          <h3 className="font-serif text-xl leading-snug text-foreground sm:text-[1.35rem]">
            {place.title}
          </h3>

          {place.location && (
            <p className="mt-3 text-xs tracking-[0.08em] text-foreground/45">
              {place.location}
            </p>
          )}

          {body && (
            <p className="mt-5 flex-1 text-sm leading-[1.85] text-foreground/65">
              {body}
            </p>
          )}

          {place.relatedEssay && (
            <p className="mt-5 text-sm leading-relaxed text-foreground/50">
              {place.relatedEssay.title}
            </p>
          )}

          <a
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-8 inline-block text-xs uppercase tracking-[0.22em] text-foreground/50 transition-colors hover:text-accent"
          >
            Re:Place에서 보기
          </a>
        </div>
      </article>
    );
  }

  return (
    <article className="flex min-w-0 flex-col border border-foreground/10 bg-background px-6 py-8 sm:px-7 sm:py-9">
      <h3 className="font-serif text-xl leading-snug text-foreground sm:text-[1.35rem]">
        {place.title}
      </h3>

      {place.location && (
        <p className="mt-3 text-xs tracking-[0.08em] text-foreground/45">
          {place.location}
        </p>
      )}

      {body && (
        <p className="mt-5 flex-1 text-sm leading-[1.85] text-foreground/65">
          {body}
        </p>
      )}

      {place.relatedEssay && (
        <p className="mt-5 text-sm leading-relaxed text-foreground/50">
          {place.relatedEssay.title}
        </p>
      )}

      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className="mt-8 inline-block text-xs uppercase tracking-[0.22em] text-foreground/50 transition-colors hover:text-accent"
      >
        Re:Place에서 보기
      </a>
    </article>
  );
}
