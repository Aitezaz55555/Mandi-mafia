import { ContactHero } from "@/components/sections/contact/ContactHero";
import { BranchInformation } from "@/components/sections/contact/BranchInformation";
import { ContactForm } from "@/components/sections/contact/ContactForm";
import { FAQQuickHelp } from "@/components/sections/contact/FAQQuickHelp";
import { MaxWidthContainer } from "@/components/shared/MaxWidthContainer";
import { constructMetadata } from "@/utils/metadata";
import { Metadata } from "next";

export const metadata: Metadata = constructMetadata({
  title: "Concierge Registry — Mandi Mafia Contact",
  description: "Get in touch with Mandi Mafia HQ in Vijayawada or explore Guntur coordinates: opening timings, valet parking instructions, and contact details.",
});

export default function ContactPage() {
  return (
    <>
      <ContactHero />
      
      {/* Branch selector & Operational Information details */}
      <section className="bg-obsidian py-16">
        <MaxWidthContainer>
          <BranchInformation />
        </MaxWidthContainer>
      </section>

      {/* Message Dispatcher Form wrapper */}
      <section className="bg-charcoal/10 py-16 border-t border-gold/10">
        <MaxWidthContainer className="max-w-3xl">
          <ContactForm />
        </MaxWidthContainer>
      </section>

      <FAQQuickHelp />
    </>
  );
}
