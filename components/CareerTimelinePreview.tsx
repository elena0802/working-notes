import Image from "next/image";
import { milestoneTitleClassName } from "@/lib/milestoneTitle";
import type { CareerMilestone } from "@/types/educator";

type CareerTimelinePreviewProps = {
  milestones: CareerMilestone[];
};

function MilestoneImage({ milestone }: { milestone: CareerMilestone }) {
  if (!milestone.image) return null;

  return (
    <div className="relative aspect-[3/2] w-full overflow-hidden">
      <Image
        src={milestone.image.src}
        alt={milestone.image.alt}
        fill
        sizes="(max-width: 768px) 100vw, 42vw"
        className="object-cover"
      />
    </div>
  );
}

function MilestoneText({ milestone }: { milestone: CareerMilestone }) {
  return (
    <div>
      <p className="section-label">
        CHAPTER {String(milestone.chapter).padStart(2, "0")}
      </p>
      <h3
        className={milestoneTitleClassName(
          "home-career-card-title mt-3 md:mt-4",
          milestone,
        )}
      >
        {milestone.title}
      </h3>
      <p className="home-career-card-desc mt-3 sm:mt-4 md:mt-5">
        {milestone.previewDescription ?? milestone.description}
      </p>
    </div>
  );
}

export default function CareerTimelinePreview({
  milestones,
}: CareerTimelinePreviewProps) {
  return (
    <div
      aria-label="교직 인생 타임라인 미리보기"
      className="relative mt-12 md:mt-16"
    >
      <div
        className="absolute bottom-0 left-1/2 top-0 hidden w-px -translate-x-1/2 bg-foreground/10 md:block"
        aria-hidden
      />

      <ol className="space-y-14 sm:space-y-16 md:space-y-24 lg:space-y-28">
        {milestones.map((milestone, index) => {
          const imageOnLeft = index % 2 === 0;

          return (
            <li key={milestone.id} className="relative">
              <div
                className="absolute left-1/2 top-10 z-10 hidden h-2.5 w-2.5 -translate-x-1/2 rounded-full border border-foreground/20 bg-background md:block"
                aria-hidden
              />

              {/* Mobile: image then text */}
              <div className="space-y-6 md:hidden">
                <MilestoneImage milestone={milestone} />
                <MilestoneText milestone={milestone} />
              </div>

              {/* Desktop: alternating sides */}
              <div className="hidden items-center gap-10 md:grid md:grid-cols-2 lg:gap-16">
                {imageOnLeft ? (
                  <>
                    <div className="pr-6 lg:pr-10">
                      <MilestoneImage milestone={milestone} />
                    </div>
                    <div className="pl-6 lg:pl-10">
                      <MilestoneText milestone={milestone} />
                    </div>
                  </>
                ) : (
                  <>
                    <div className="order-1 pl-6 lg:pl-10">
                      <MilestoneText milestone={milestone} />
                    </div>
                    <div className="order-2 pr-6 lg:pr-10">
                      <MilestoneImage milestone={milestone} />
                    </div>
                  </>
                )}
              </div>
            </li>
          );
        })}
      </ol>
    </div>
  );
}
