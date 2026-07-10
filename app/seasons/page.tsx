import CategoryArchive from "@/components/CategoryArchive";

export const metadata = {
  title: "Seasons",
  description: "계절의 변화와 삶의 변화를 함께 바라봅니다.",
};

export default function SeasonsPage() {
  return (
    <CategoryArchive
      title="Seasons"
      subtitle="계절의 변화와 삶의 변화를 함께 바라봅니다."
      category="Seasons"
    />
  );
}
