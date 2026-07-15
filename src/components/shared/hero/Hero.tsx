import { HeroBackground } from "./HeroBackground";
import { HeroContent } from "./HeroContent";
import { HeroParticles } from "./HeroParticles";
import { HeroScrollIndicator } from "./HeroScrollIndicator";

interface HeroProps {
  videoSrc?: string;
  fallbackImageSrc?: string;
  fallbackImageAlt?: string;
}

export function Hero({
  videoSrc = "/assets/hero/hero-cinematic.mp4",
  fallbackImageSrc = "https://images.unsplash.com/photo-1541532713592-79a0317b6b77?q=80&w=1600&auto=format&fit=crop",
  fallbackImageAlt = "Mandi Mafia Cinematic Culinary Feasts",
}: HeroProps) {
  return (
    <section className="relative min-h-screen w-full flex items-center justify-center overflow-hidden bg-obsidian">
      {/* Dynamic video loop & shadows backing */}
      <HeroBackground
        videoSrc={videoSrc}
        fallbackImageSrc={fallbackImageSrc}
        fallbackImageAlt={fallbackImageAlt}
      />

      {/* Floating gold ember sparks */}
      <HeroParticles />

      {/* Staggered text content & actions */}
      <HeroContent />

      {/* Bouncing scroll arrow suggestion */}
      <HeroScrollIndicator />
    </section>
  );
}
