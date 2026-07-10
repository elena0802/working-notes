import { REPLACE_URL } from "@/lib/constants";

export default function RePlaceCTA() {
  return (
    <div className="page-shell mx-auto mt-16 max-w-[680px] md:mt-28">
      <div className="border-t border-foreground/10 pt-12 md:pt-16">
        <p className="whitespace-pre-line text-center font-serif text-lg leading-[1.75] text-foreground/55 sm:text-xl md:text-2xl md:leading-[1.7]">
          {"Second Season은 삶의 순간을 기록합니다.\nRe:Place는 그 순간이 머물렀던 장소를 기록합니다."}
        </p>
        <div className="mt-8 text-center sm:mt-10">
          <a
            href={REPLACE_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs uppercase tracking-[0.28em] text-foreground/50 transition-colors hover:text-accent"
          >
            RE:PLACE 둘러보기
          </a>
        </div>
      </div>
    </div>
  );
}
