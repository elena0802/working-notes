import Image from "next/image";

type NewsletterCollectionCoverProps = {
  src: string;
  alt: string;
  className?: string;
};

export default function NewsletterCollectionCover({
  src,
  alt,
  className = "mt-8 md:mt-10",
}: NewsletterCollectionCoverProps) {
  return (
    <figure className={`mx-auto max-w-[680px] ${className}`}>
      <div className="relative h-[280px] w-full overflow-hidden sm:h-[300px] md:h-[360px] lg:h-[400px]">
        <Image
          src={src}
          alt={alt}
          fill
          sizes="(max-width: 768px) 100vw, 680px"
          className="object-cover object-center"
        />
      </div>
    </figure>
  );
}
