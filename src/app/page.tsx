import { Hero } from "@/components/shared/hero/Hero";
import StorySection from "@/components/sections/StorySection";
import SignatureDishes from "@/components/sections/SignatureDishes";
import WhyChooseUs from "@/components/sections/WhyChooseUs";
import ExperienceSection from "@/components/sections/ExperienceSection";
import GalleryPreview from "@/components/sections/GalleryPreview";
import TestimonialsPreview from "@/components/sections/TestimonialsPreview";
import ReservationBanner from "@/components/sections/ReservationBanner";
import LocationPreview from "@/components/sections/LocationPreview";

export default function Home() {
  return (
    <>
      <Hero />
      <StorySection />
      <SignatureDishes />
      <WhyChooseUs />
      <ExperienceSection />
      <GalleryPreview />
      <TestimonialsPreview />
      <ReservationBanner />
      <LocationPreview />
    </>
  );
}
