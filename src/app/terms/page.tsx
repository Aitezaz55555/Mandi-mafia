import { MaxWidthContainer } from "@/components/shared/MaxWidthContainer";
import { constructMetadata } from "@/utils/metadata";
import { Metadata } from "next";

export const metadata: Metadata = constructMetadata({
  title: "Terms of Registry — Mandi Mafia Chambers",
  description: "Read the table booking reservation conditions, holding windows, and cancellation rules of Mandi Mafia.",
});

export default function TermsPage() {
  return (
    <section className="py-20 md:py-32 bg-obsidian select-text">
      <MaxWidthContainer className="max-w-3xl space-y-12">
        <div className="space-y-space-3 text-center">
          <span className="font-body text-[10px] uppercase tracking-[0.25em] text-gold/80 font-medium block">Rules of Engagement</span>
          <h1 className="font-heading text-4xl sm:text-5xl md:text-6xl text-ivory font-light leading-tight tracking-wide">
            Terms of Registry
          </h1>
          <div className="h-[1px] bg-gradient-to-r from-transparent via-gold/30 to-transparent w-40 mx-auto" />
        </div>

        <div className="space-y-6 text-xs sm:text-sm text-silver/80 leading-relaxed font-light font-body">
          <p>
            By using our table reservation system and events portals, you agree to comply with the terms of registry outlined below.
          </p>
          <p>
            <strong>Reservation Hold Time:</strong> Tables are held for a maximum of 15 minutes past the reserved arrival slot. Past this window, the chamber seat coordinates will be released back to the general walk-in pool.
          </p>
          <p>
            <strong>Private Cabin Minimums:</strong> Premium seating cabins require a minimum of 4 guests or platter orders matching standard cabin sizes.
          </p>
          <p>
            <strong>Catering Deposits:</strong> Large corporate dining events and buffet catering orders require a deposit token at least 48 hours prior to the event schedule to lock in kitchen configurations.
          </p>
          <p>
            For any queries or modifications to these guidelines, please consult with our concierge staff.
          </p>
        </div>
      </MaxWidthContainer>
    </section>
  );
}
