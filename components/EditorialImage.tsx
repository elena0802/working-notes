import Image from "next/image";

type EditorialImageProps = {
  src: string;
  alt: string;
  caption?: string;
  aspect?: "hero" | "feature" | "placesFeature" | "card" | "wide" | "editor" | "square";
  priority?: boolean;
  className?: string;
  captionAlign?: "left" | "center" | "right";
};

const aspectClasses = {
  hero: "aspect-[3/2]",
  feature: "aspect-[4/3] md:aspect-[16/9] lg:aspect-[2/1]",
  placesFeature: "aspect-[4/3] md:aspect-[16/9] lg:aspect-[16/9]",
  card: "aspect-[4/5]",
  wide: "aspect-[21/9] md:aspect-[3/1]",
  editor: "aspect-[4/5] md:aspect-[3/4]",
  square: "aspect-square",
};

const captionAlignClasses = {
  left: "text-left",
  center: "text-center",
  right: "text-right",
};

const sizeHints = {
  hero: "(max-width: 640px) 100vw, (max-width: 1024px) 45vw, 32vw",
  feature: "(max-width: 768px) 100vw, 90vw",
  placesFeature: "(max-width: 768px) 100vw, 45vw",
  card: "(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw",
  wide: "100vw",
  editor: "(max-width: 768px) 100vw, 40vw",
  square: "(max-width: 768px) 50vw, 25vw",
};

export default function EditorialImage({
  src,
  alt,
  caption,
  aspect = "card",
  priority = false,
  className = "",
  captionAlign = "left",
}: EditorialImageProps) {
  return (
    <figure className={`min-w-0 ${className}`}>
      <div className={`relative w-full overflow-hidden ${aspectClasses[aspect]}`}>
        <Image
          src={src}
          alt={alt}
          fill
          priority={priority}
          sizes={sizeHints[aspect]}
          className="object-cover"
        />
      </div>
      {caption ? (
        <figcaption
          className={`mt-3 text-xs leading-relaxed tracking-[0.16em] text-foreground/45 ${captionAlignClasses[captionAlign]}`}
        >
          {caption}
        </figcaption>
      ) : null}
    </figure>
  );
}
