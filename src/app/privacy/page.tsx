import { MaxWidthContainer } from "@/components/shared/MaxWidthContainer";
import { constructMetadata } from "@/utils/metadata";
import { Metadata } from "next";

export const metadata: Metadata = constructMetadata({
  title: "Privacy Policy — Mandi Mafia Chambers",
  description: "Read the privacy guidelines, reservation data encryption, and local contact rules of Mandi Mafia.",
});

export default function PrivacyPage() {
  return (
    <section className="py-20 md:py-32 bg-obsidian select-text">
      <MaxWidthContainer className="max-w-3xl space-y-12">
        <div className="space-y-space-3 text-center">
          <span className="font-body text-[10px] uppercase tracking-[0.25em] text-gold/80 font-medium block">Legal Standards</span>
          <h1 className="font-heading text-4xl sm:text-5xl md:text-6xl text-ivory font-light leading-tight tracking-wide">
            Privacy Policy
          </h1>
          <div className="h-[1px] bg-gradient-to-r from-transparent via-gold/30 to-transparent w-40 mx-auto" />
        </div>

        <div className="space-y-6 text-xs sm:text-sm text-silver/80 leading-relaxed font-light font-body">
          <p>
            At Mandi Mafia, we prioritize the protection of your reservation and contact data. This document outlines how we collect and secure details submitted through our table registry and consultation forms.
          </p>
          <p>
            <strong>Information We Collect:</strong> We collect contact details (Name, Phone number, Email) and reservation specifications (Guests, Dates, Seating options, Occasion categories) to manage seat assignments at our chambers.
          </p>
          <p>
            <strong>Data Security:</strong> All client registry databases are encrypted and stored in secure cloud systems. We do not sell, rent, or distribute phone coordinates or emails to third-party ad networks.
          </p>
          <p>
            If you wish to remove your customer reservation tokens or email subscriptions from our syndicate databases, please contact the registry manager at: <a href="mailto:registry@mandimafia.com" className="text-gold hover:underline">registry@mandimafia.com</a>.
          </p>
        </div>
      </MaxWidthContainer>
    </section>
  );
}
