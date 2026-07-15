import { ReservationHero } from "@/components/sections/reservations/ReservationHero";
import { ReservationForm } from "@/components/sections/reservations/ReservationForm";
import { ReservationBenefits } from "@/components/sections/reservations/ReservationBenefits";
import { ReservationFAQ } from "@/components/sections/reservations/ReservationFAQ";
import { ReservationContactCard } from "@/components/sections/reservations/ReservationContactCard";
import { MaxWidthContainer } from "@/components/shared/MaxWidthContainer";
import { constructMetadata } from "@/utils/metadata";
import { Metadata } from "next";

export const metadata: Metadata = constructMetadata({
  title: "Secure Your Cabin Seating — Mandi Mafia Reservations",
  description: "Direct table registration registry for private family cabins, VIP speakeasy tables, or large corporate platters booking at Vijayawada.",
});

export default function ReservationsPage() {
  return (
    <>
      <ReservationHero />
      
      {/* Form Container Wrapper */}
      <section className="bg-obsidian py-16">
        <MaxWidthContainer>
          <ReservationForm />
        </MaxWidthContainer>
      </section>

      <ReservationBenefits />
      <ReservationFAQ />
      <ReservationContactCard />
    </>
  );
}
