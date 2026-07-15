import { MenuHero } from "@/components/sections/menu/MenuHero";
import { MenuGrid } from "@/components/sections/menu/MenuGrid";
import { ReservationStrip } from "@/components/sections/menu/ReservationStrip";
import { constructMetadata } from "@/utils/metadata";
import { Metadata } from "next";

export const metadata: Metadata = constructMetadata({
  title: "The Syndicate Roster — Mandi Mafia Menu",
  description: "Browse Vijayawada's finest Arabian culinary choices: grand family platters, wood-fired baby lamb Mandis, kababs, mocktails, and desserts.",
});

export default function MenuPage() {
  return (
    <>
      <MenuHero />
      <MenuGrid />
      <ReservationStrip />
    </>
  );
}
