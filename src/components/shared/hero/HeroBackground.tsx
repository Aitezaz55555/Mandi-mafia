import { HeroVideo } from "./HeroVideo";
import { HeroFallbackImage } from "./HeroFallbackImage";
import { HeroOverlay } from "./HeroOverlay";

interface HeroBackgroundProps {
  videoSrc: string;
  fallbackImageSrc: string;
  fallbackImageAlt: string;
}

export function HeroBackground({
  videoSrc,
  fallbackImageSrc,
  fallbackImageAlt,
}: HeroBackgroundProps) {
  return (
    <div className="absolute inset-0 z-0">
      <HeroFallbackImage src={fallbackImageSrc} alt={fallbackImageAlt} />
      <HeroVideo src={videoSrc} poster={fallbackImageSrc} />
      <HeroOverlay />
    </div>
  );
}
