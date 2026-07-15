import { MaxWidthContainer } from "@/components/shared/MaxWidthContainer";
import { constructMetadata } from "@/utils/metadata";
import { Metadata } from "next";

export const metadata: Metadata = constructMetadata({
  title: "Our Story — The Mandi Mafia Culinary Alliance",
  description: "Learn about the culinary secrets, Yemen underground tandoors, and luxury hospitality philosophy driving Mandi Mafia in Vijayawada.",
});

export default function AboutPage() {
  return (
    <section className="py-20 md:py-32 bg-obsidian select-text">
      <MaxWidthContainer className="max-w-3xl space-y-12">
        <div className="space-y-space-3 text-center">
          <span className="font-body text-[10px] uppercase tracking-[0.25em] text-gold/80 font-medium block">Our Heritage</span>
          <h1 className="font-heading text-4xl sm:text-5xl md:text-6xl text-ivory font-light leading-tight tracking-wide">
            The Story of the Syndicate
          </h1>
          <div className="h-[1px] bg-gradient-to-r from-transparent via-gold/30 to-transparent w-40 mx-auto" />
        </div>

        <div className="space-y-6 text-xs sm:text-sm text-silver/80 leading-relaxed font-light font-body">
          <p>
            Mandi Mafia was conceived not just as a restaurant, but as a culinary alliance dedicated to restoring the authentic slow-cooked craftsmanship of Arabian Mandi. In an industry saturated with shortcut configurations and artificial tenderizers, our goal is simple: preserve Yemeni heritage.
          </p>
          <p>
            Our core culinary configurations rely on custom wood-fired underground clay tandoors. We slow-cook our premium mutton and chicken cuts for hours over specific dry firewood mixes, allowing natural steam and fat basting to tenderize the grains.
          </p>
          <p>
            Every spice blend is custom-assembled at our chambers. From imported Yemeni cardamom pods to hand-crushed dry cloves, our spice baseline is configured daily to maintain flavor density.
          </p>
          <p>
            Today, our headquarters beside Skyline Hub in Vijayawada serves as the sanctuary for family feasts and business collaborations alike. We welcome you to join the culinary syndicate.
          </p>
        </div>
      </MaxWidthContainer>
    </section>
  );
}
