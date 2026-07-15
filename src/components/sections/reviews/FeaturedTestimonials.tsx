import { Star, Quote } from "lucide-react";

export function FeaturedTestimonials() {
  return (
    <section className="bg-charcoal/5 py-16 border-t border-b border-gold/10">
      <div className="max-w-4xl mx-auto px-space-4 space-y-12 text-center select-text">
        <div className="space-y-space-2">
          <span className="font-body text-[9px] uppercase tracking-[0.2em] text-gold/80 font-medium font-semibold block">Editorial Spotlight</span>
          <h3 className="font-heading text-2xl md:text-3xl text-ivory">The Patron Diaries</h3>
        </div>

        {/* Large Quote card */}
        <div className="relative bg-charcoal border border-gold/15 p-8 md:p-12 space-y-6 shadow-xl">
          <Quote className="w-10 h-10 text-gold/25 mx-auto animate-pulse" />
          
          <p className="font-heading text-xl md:text-2xl text-ivory leading-relaxed font-light italic max-w-2xl mx-auto">
            "Direct seating at Mandi Mafia is like crossing a line into another culinary syndicate. The lamb was so tender it pulled away like silk, and the floor carpets inside the private cabins created a memory my children won't forget."
          </p>

          <div className="h-[1px] bg-gradient-to-r from-transparent via-gold/30 to-transparent w-24 mx-auto" />

          <div className="space-y-1">
            <h4 className="font-heading text-lg text-gold font-medium">Vikram & Family</h4>
            <span className="font-body text-[9px] uppercase tracking-wider text-silver/50 block">Vijayawada Chamber Patrons</span>
          </div>

          <div className="flex justify-center text-gold gap-0.5">
            {Array.from({ length: 5 }).map((_, i) => (
              <Star key={i} className="w-3.5 h-3.5 fill-current" />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
