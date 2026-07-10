import CollectionCard from "@/components/CollectionCard";
import type { Collection } from "@/types/collection";

type CollectionsSectionProps = {
  collections: Collection[];
};

export default function CollectionsSection({
  collections,
}: CollectionsSectionProps) {
  if (collections.length === 0) {
    return null;
  }

  return (
    <section className="border-b border-muted/50 pb-12 md:pb-16">
      <div className="max-w-3xl">
        <p className="section-label">Collections</p>
        <h2 className="mt-5 font-serif text-2xl text-foreground sm:text-3xl md:text-4xl">
          Curated by Second Season
        </h2>
        <p className="body-calm mt-6 text-foreground/70 sm:mt-8">
          장소와 글을 하나의 흐름으로 묶어, 다시 꺼내볼 수 있는 컬렉션으로
          정리했습니다.
        </p>
      </div>

      <div className="mt-12 grid gap-10 sm:grid-cols-2 sm:gap-12 lg:grid-cols-3 lg:gap-14 md:mt-16">
        {collections.map((collection) => (
          <CollectionCard key={collection.slug} collection={collection} />
        ))}
      </div>
    </section>
  );
}
