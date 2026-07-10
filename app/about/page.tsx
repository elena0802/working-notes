import CareerTimeline from "@/components/CareerTimeline";
import NewsletterSubscribeForm from "@/components/NewsletterSubscribeForm";
import {
  educatorProfile,
  getCareerTimeline,
} from "@/data/educator";

export const metadata = {
  title: "교직 인생",
  description:
    "37년 동안 교실에서 보낸 시간—첫 발령부터 진로교사, 그리고 다시 찾아온 학생들까지.",
};

function AboutSectionTitle({ children }: { children: string }) {
  return (
    <h2 className="font-serif text-2xl leading-snug text-foreground sm:text-3xl md:text-4xl">
      {children}
    </h2>
  );
}

type AboutIntroSectionProps = {
  title: string;
  paragraphs: string[];
};

function AboutIntroSection({ title, paragraphs }: AboutIntroSectionProps) {
  return (
    <section className="page-shell mx-auto max-w-[760px]">
      <AboutSectionTitle>{title}</AboutSectionTitle>
      <div className="mt-8 space-y-6 sm:mt-10">
        {paragraphs.map((paragraph) => (
          <p key={paragraph} className="body-reading">
            {paragraph}
          </p>
        ))}
      </div>
    </section>
  );
}

const teacherIntroParagraphs = [
  "교단에서 보낸 시간은 단순히 수업을 하는 시간이 아니었습니다.",
  "학생들과 만나고, 고민을 나누고, 함께 성장하는 시간이었습니다.",
  "사립고등학교와 공립중학교, 진로상담교사와 담임교사를 거치며 다양한 학생들을 만났습니다.",
  "교사는 가르치는 사람인 동시에 배우는 사람이라고 생각합니다.",
  "37년 동안 학생들에게 많은 것을 가르쳤지만, 그보다 더 많은 것을 배웠습니다.",
  "은퇴 후에도 배움을 멈추지 않고 새로운 사람들을 만나며 두 번째 계절을 살아가고 있습니다.",
];

export default function AboutPage() {
  const timeline = getCareerTimeline();

  return (
    <div className="pb-24 pt-10 md:pt-14">
      {/* Hero */}
      <header className="page-shell mx-auto max-w-[760px] text-center">
        <p className="section-label">교직 인생</p>

        <h1 className="mt-5 font-serif-kr text-2xl leading-[1.5] tracking-[0.01em] text-foreground sm:mt-6 sm:text-3xl md:text-4xl">
          {educatorProfile.headlineLines[0]}
          <br />
          {educatorProfile.headlineLines[1]}
        </h1>

        <p className="body-calm mx-auto mt-6 max-w-xl whitespace-pre-line text-foreground/65 sm:mt-8">
          {educatorProfile.subheadline}
        </p>
      </header>

      <div className="mt-20 space-y-20 md:mt-24 md:space-y-28">
        <section className="page-shell mx-auto max-w-[760px]">
          <p className="section-label">교사 소개</p>
          <h2 className="mt-4 font-serif text-3xl leading-tight text-foreground sm:mt-5 sm:text-4xl md:text-5xl">
            박옥주
          </h2>
          <p className="mt-4 text-base leading-relaxed text-foreground/65 sm:mt-5 sm:text-lg">
            학생들과 함께 성장해 온 교육자
          </p>
          <div className="mt-8 space-y-6 sm:mt-10">
            {teacherIntroParagraphs.map((paragraph) => (
              <p key={paragraph} className="body-reading">
                {paragraph}
              </p>
            ))}
          </div>
        </section>

        <AboutIntroSection
          title="왜 Second Season인가"
          paragraphs={[
            "은퇴는 끝이 아니라 새로운 시작이라고 생각합니다.",
            "Second Season은 교직 생활의 기록을 정리하는 공간이면서, 앞으로 배우고 만나고 기록해 나갈 삶을 위한 공간입니다.",
            "교단에서 배운 이야기들, 새로운 도시에서 만난 사람들, 오래 기억하고 싶은 장소들을 차분히 남겨두고 싶었습니다.",
          ]}
        />
      </div>

      <div className="page-shell mx-auto mt-20 max-w-[760px] md:mt-28">
        <CareerTimeline
          milestones={timeline}
          variant="full"
          sectionTitle={educatorProfile.timelineSectionTitle}
          sectionSubtitle="37년 동안 학생들과 함께한 기록"
        />
      </div>

      <section className="page-shell mx-auto mt-20 max-w-xl border-t border-muted/50 pt-16 text-center md:mt-28 md:pt-20">
        <p className="section-label">Newsletter</p>
        <h2 className="home-section-title mt-4 md:mt-5">
          Second Season의 편지
        </h2>
        <p className="home-section-desc mt-5 sm:mt-6">
          두 번째 계절의 기록을,
          <br />
          좋은 장소와 조용한 순간과 함께 가끔 편지로 나눕니다.
        </p>
        <NewsletterSubscribeForm source="home" variant="editorial" />
      </section>
    </div>
  );
}
