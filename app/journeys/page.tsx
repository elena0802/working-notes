import CategoryArchive from "@/components/CategoryArchive";

export const metadata = {
  title: "Journeys",
  description: "많이 보기보다 오래 머무는 여행을 기록합니다.",
};

export default function JourneysPage() {
  return (
    <CategoryArchive
      title="Journeys"
      subtitle="많이 보기보다 오래 머무는 여행을 기록합니다."
      category="Journeys"
    />
  );
}
