import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export function EventGalleryPreview() {
  const eventPhotos = [
    "https://images.unsplash.com/photo-1543007630-9710e4a00a20?q=80&w=600&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=600&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1514933651103-005eec06c04b?q=80&w=600&auto=format&fit=crop",
  ];

  return (
    <section className="py-16 bg-charcoal/5 border-t border-b border-gold/10">
      <div className="max-w-7xl mx-auto px-space-4 md:px-space-6 space-y-12 select-text text-center">
        
        <div className="space-y-space-2 max-w-xl mx-auto">
          <span className="font-body text-[9px] uppercase tracking-[0.2em] text-gold/80 font-medium font-semibold block">Chamber Snaps</span>
          <h3 className="font-heading text-2xl md:text-3xl text-ivory">Event Atmospheres</h3>
          <p className="font-body text-xs text-silver/65 leading-relaxed font-light">
            Glimpse the visual layout of corporate dinings, private gatherings, and anniversary mocktails setups.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-4xl mx-auto">
          {eventPhotos.map((photo, index) => (
            <div key={index} className="relative aspect-[4/3] w-full border border-gold/10 overflow-hidden shadow-sm">
              <Image
                src={photo}
                alt="Patrons celebrating events inside Mandi Mafia cabins"
                fill
                sizes="(max-width: 768px) 100vw, 300px"
                className="object-cover hover:scale-102 transition-all duration-700 filter brightness-[0.8]"
                loading="lazy"
              />
            </div>
          ))}
        </div>

        <div className="pt-4">
          <Link
            href="/gallery"
            className="inline-flex items-center gap-2 text-gold hover:text-gold-hover font-body text-[10px] uppercase tracking-[0.15em] font-semibold transition-all duration-300 group cursor-pointer focus-visible:ring-1 focus-visible:ring-gold outline-none"
          >
            Explore Chamber Gallery
            <ArrowRight className="w-3.5 h-3.5 transform translate-x-0 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

      </div>
    </section>
  );
}
