import { GalleryHero } from "@/components/sections/gallery/GalleryHero";
import { GalleryGrid } from "@/components/sections/gallery/GalleryGrid";
import { GalleryCTA } from "@/components/sections/gallery/GalleryCTA";
import { constructMetadata } from "@/utils/metadata";
import { Metadata } from "next";

export const metadata: Metadata = constructMetadata({
  title: "Visual Intrigue — Mandi Mafia Gallery",
  description: "Explore the visual chambers of Mandi Mafia: luxury speakeasy booths, family cabins, open wood-fired ovens, and cinematic platters.",
});

export default function GalleryPage() {
  return (
    <>
      <GalleryHero />
      <GalleryGrid />
      <GalleryCTA />
    </>
  );
}
