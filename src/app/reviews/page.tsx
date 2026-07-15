import { ReviewsHero } from "@/components/sections/reviews/ReviewsHero";
import { ReviewSummary } from "@/components/sections/reviews/ReviewSummary";
import { ReviewGrid } from "@/components/sections/reviews/ReviewGrid";
import { FeaturedTestimonials } from "@/components/sections/reviews/FeaturedTestimonials";
import { FoodBloggerSection } from "@/components/sections/reviews/FoodBloggerSection";
import { InstagramFeed } from "@/components/sections/reviews/InstagramFeed";
import { AwardsSection } from "@/components/sections/reviews/AwardsSection";
import { PressMentions } from "@/components/sections/reviews/PressMentions";
import { ReviewCTA } from "@/components/sections/reviews/ReviewCTA";
import { MaxWidthContainer } from "@/components/shared/MaxWidthContainer";
import { constructMetadata } from "@/utils/metadata";
import { Metadata } from "next";

export const metadata: Metadata = constructMetadata({
  title: "Patrons & Press — Mandi Mafia Reviews",
  description: "Browse verified customer reviews, Google scores, food blogger vlog highlights, awards, and press articles detailing Mandi Mafia in Vijayawada.",
});

export default function ReviewsPage() {
  return (
    <>
      <ReviewsHero />
      
      {/* Google Ratings & Masonry Feed Section */}
      <section className="bg-obsidian py-16">
        <MaxWidthContainer className="space-y-16">
          <ReviewSummary />
          <ReviewGrid />
        </MaxWidthContainer>
      </section>

      <FeaturedTestimonials />
      <FoodBloggerSection />
      <InstagramFeed />
      <AwardsSection />
      <PressMentions />
      <ReviewCTA />
    </>
  );
}
