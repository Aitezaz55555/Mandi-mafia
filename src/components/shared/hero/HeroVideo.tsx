"use client";

import { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";

interface HeroVideoProps {
  src: string;
  poster: string;
}

export function HeroVideo({ src, poster }: HeroVideoProps) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [videoLoaded, setVideoLoaded] = useState(false);
  const [hasError, setHasError] = useState(false);

  useEffect(() => {
    // Disable video playback if user prefers reduced motion (accessibility)
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    
    if (videoRef.current) {
      if (prefersReducedMotion) {
        videoRef.current.pause();
      } else {
        // Attempt playback trigger
        videoRef.current.play().catch(() => {
          // Auto-play was blocked or failed
        });
      }
    }
  }, []);

  return (
    <div className="absolute inset-0 z-0 bg-obsidian">
      {!hasError && (
        <video
          ref={videoRef}
          src={src}
          poster={poster}
          autoPlay
          muted
          loop
          playsInline
          onPlay={() => setVideoLoaded(true)}
          onError={() => setHasError(true)}
          className={cn(
            "w-full h-full object-cover filter brightness-[0.35] transition-opacity duration-1000 ease-smooth",
            videoLoaded ? "opacity-100" : "opacity-0"
          )}
        />
      )}
    </div>
  );
}
