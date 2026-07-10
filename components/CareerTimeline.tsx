import Image from "next/image";
import Link from "next/link";
import { milestoneTitleClassName } from "@/lib/milestoneTitle";
import type { CareerMilestone, CareerMilestoneImage } from "@/types/educator";

type CareerTimelineProps = {
  milestones: CareerMilestone[];
  variant?: "full" | "teaser";
  sectionTitle?: string;
  sectionSubtitle?: string;
};

function TimelineMilestoneImage({
  image,
  isTeaser,
}: {
  image: CareerMilestoneImage;
  isTeaser: boolean;
}) {
  return (
    <div
      className={
        isTeaser
          ? "mb-5 max-w-xs sm:mb-6 sm:max-w-sm"
          : "mb-6 max-w-sm sm:mb-8 sm:max-w-md"
      }
    >
      <div className="relative aspect-[3/2] w-full overflow-hidden">
        <Image
          src={image.src}
          alt={image.alt}
          fill
          sizes={
            isTeaser
              ? "(max-width: 640px) 80vw, 20rem"
              : "(max-width: 640px) 90vw, 28rem"
          }
          className="object-cover"
        />
      </div>
    </div>
  );
}

export default function CareerTimeline({
  milestones,
  variant = "full",
  sectionTitle,
  sectionSubtitle,
}: CareerTimelineProps) {
  const isTeaser = variant === "teaser";

  return (
    <section
      aria-label="교직 인생 타임라인"
      className={isTeaser ? "mt-8 sm:mt-10" : "mt-12 md:mt-16"}
    >
      {!isTeaser && sectionTitle && (
        <div className="mb-10 md:mb-14">
          <h2 className="font-serif text-2xl leading-snug text-foreground sm:text-3xl md:text-4xl">
            {sectionTitle}
          </h2>
          {sectionSubtitle && (
            <p className="mt-3 text-base leading-relaxed text-foreground/65 sm:mt-4 sm:text-lg">
              {sectionSubtitle}
            </p>
          )}
        </div>
      )}

      <ol className="relative border-l border-foreground/10 pl-6 sm:pl-8">
        {milestones.map((milestone) => (
          <li
            key={milestone.id}
            className={
              isTeaser
                ? "relative pb-8 last:pb-0 sm:pb-10"
                : "relative pb-10 last:pb-0 sm:pb-12 md:pb-14"
            }
          >
            <div
              className="absolute -left-[calc(1.5rem+5px)] top-1.5 h-2.5 w-2.5 rounded-full border border-foreground/20 bg-background sm:-left-[calc(2rem+5px)]"
              aria-hidden
            />

            {milestone.image && (
              <TimelineMilestoneImage image={milestone.image} isTeaser={isTeaser} />
            )}

            <p className="section-label">
              CHAPTER {String(milestone.chapter).padStart(2, "0")}
            </p>

            <h3
              className={milestoneTitleClassName(
                isTeaser
                  ? "mt-3 font-serif text-xl leading-snug text-foreground sm:text-2xl"
                  : "mt-4 font-serif text-2xl leading-snug text-foreground sm:text-3xl",
                milestone,
              )}
            >
              {milestone.title}
            </h3>

            <p
              className={
                isTeaser
                  ? "body-calm mt-3 text-foreground/70 sm:mt-4"
                  : "body-reading mt-4 sm:mt-5"
              }
            >
              {milestone.description}
            </p>

            {milestone.journalSlug && (
              <Link
                href={`/journal/${milestone.journalSlug}`}
                className={
                  isTeaser
                    ? "mt-4 inline-block border border-foreground/15 px-4 py-2 text-xs tracking-[0.08em] text-foreground/70 transition-colors hover:border-accent hover:text-accent"
                    : "mt-5 inline-flex min-h-11 items-center border border-foreground/15 px-5 py-3 text-sm tracking-[0.04em] text-foreground/75 transition-colors hover:border-accent hover:text-accent"
                }
              >
                관련 이야기 읽기 →
              </Link>
            )}
          </li>
        ))}
      </ol>
    </section>
  );
}
