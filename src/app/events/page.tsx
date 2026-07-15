import { EventsHero } from "@/components/sections/events/EventsHero";
import { EventTypes } from "@/components/sections/events/EventTypes";
import { EventPackages } from "@/components/sections/events/EventPackages";
import { VenueShowcase } from "@/components/sections/events/VenueShowcase";
import { CorporateDining } from "@/components/sections/events/CorporateDining";
import { BookingProcess } from "@/components/sections/events/BookingProcess";
import { EventGalleryPreview } from "@/components/sections/events/EventGalleryPreview";
import { EventFAQ } from "@/components/sections/events/EventFAQ";
import { EventInquiryForm } from "@/components/sections/events/EventInquiryForm";
import { EventsCTA } from "@/components/sections/events/EventsCTA";
import { MaxWidthContainer } from "@/components/shared/MaxWidthContainer";
import { constructMetadata } from "@/utils/metadata";
import { Metadata } from "next";

export const metadata: Metadata = constructMetadata({
  title: "Private Events & Catering — Mandi Mafia Celebrations",
  description: "Secure corporate banquets, birthday parties, or on-site wedding catering: explore space capacities, Gold/Royal packages, and timelines in Vijayawada.",
});

export default function EventsPage() {
  return (
    <>
      <EventsHero />
      <EventTypes />
      <EventPackages />
      <VenueShowcase />
      <CorporateDining />
      <BookingProcess />
      <EventGalleryPreview />
      <EventFAQ />
      
      {/* Event Inquiry Form Section */}
      <section id="inquiry-form-section" className="bg-charcoal/10 py-16 scroll-mt-24 border-t border-gold/10">
        <MaxWidthContainer className="max-w-3xl">
          <EventInquiryForm />
        </MaxWidthContainer>
      </section>

      <EventsCTA />
    </>
  );
}
