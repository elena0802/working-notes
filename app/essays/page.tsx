import CategoryArchive from "@/components/CategoryArchive";

export const metadata = {
  title: "Essays",
  description: "삶의 두 번째 계절에서 발견한 생각들을 기록합니다.",
};

export default function EssaysPage() {
  return (
    <CategoryArchive
      title="Essays"
      subtitle="삶의 두 번째 계절에서 발견한 생각들을 기록합니다."
      category="Essay"
    />
  );
}
