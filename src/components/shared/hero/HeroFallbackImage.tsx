import Image from "next/image";

interface HeroFallbackImageProps {
  src: string;
  alt: string;
}

export function HeroFallbackImage({ src, alt }: HeroFallbackImageProps) {
  return (
    <div className="absolute inset-0 z-0 bg-obsidian">
      <Image
        src={src}
        alt={alt}
        fill
        priority
        className="object-cover object-center filter brightness-[0.3]"
        sizes="100vw"
      />
    </div>
  );
}
