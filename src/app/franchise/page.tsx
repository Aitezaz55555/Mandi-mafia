import { MaxWidthContainer } from "@/components/shared/MaxWidthContainer";
import { constructMetadata } from "@/utils/metadata";
import { Metadata } from "next";

export const metadata: Metadata = constructMetadata({
  title: "Franchise Alliance — Invest in Mandi Mafia Chambers",
  description: "Expand the Mandi Mafia franchise alliance. Access standardized supply chain assets, branding guides, and kitchen layouts.",
});

export default function FranchisePage() {
  return (
    <section className="py-20 md:py-32 bg-obsidian select-text">
      <MaxWidthContainer className="max-w-3xl space-y-12">
        <div className="space-y-space-3 text-center">
          <span className="font-body text-[10px] uppercase tracking-[0.25em] text-gold/80 font-medium block">Alliance Network</span>
          <h1 className="font-heading text-4xl sm:text-5xl md:text-6xl text-ivory font-light leading-tight tracking-wide">
            Franchise Alliance
          </h1>
          <div className="h-[1px] bg-gradient-to-r from-transparent via-gold/30 to-transparent w-40 mx-auto" />
        </div>

        <div className="space-y-6 text-xs sm:text-sm text-silver/80 leading-relaxed font-light font-body">
          <p>
            Mandi Mafia represents a highly profitable, standardized business engine inside the premium hospitality segment. By combining unique brand identity with strict operational blueprints, we deliver high yield returns across our franchise networks.
          </p>
          <p>
            Our flagshipVijayawada chamber has proven the market viability of premium family cabin setups. We are currently configuring our Guntur branch for its official opening in winter 2026, and actively reviewing alliance coordinates in other regions.
          </p>
          <p>
            All approved franchise partners receive complete operations support: standardized spice configurations, kitchen layout design guides, cabin interior blueprints, and unified marketing materials.
          </p>
          <p>
            To submit an investment tier inquiry or evaluate site demographics with our directors, please reach out directly to the desk email: <a href="mailto:registry@mandimafia.com" className="text-gold hover:underline">registry@mandimafia.com</a>.
          </p>
        </div>
      </MaxWidthContainer>
    </section>
  );
}
