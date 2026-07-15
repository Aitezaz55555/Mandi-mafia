import { pressMentionsList } from "@/lib/reviews-data";
import { ArrowUpRight } from "lucide-react";

export function PressMentions() {
  return (
    <section className="py-16 bg-charcoal/5 border-t border-gold/10">
      <div className="max-w-7xl mx-auto px-space-4 md:px-space-6 space-y-12 select-text">
        
        {/* Section Header */}
        <div className="text-center max-w-xl mx-auto space-y-space-2">
          <span className="font-body text-[9px] uppercase tracking-[0.2em] text-gold/80 font-medium font-semibold block">Editorial Reports</span>
          <h3 className="font-heading text-2xl md:text-3xl text-ivory">Press Coverages</h3>
          <p className="font-body text-xs text-silver/65 leading-relaxed font-light">
            Read reviews and summaries published by culinary columns and dining guides.
          </p>
        </div>

        {/* Press list grids */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-3xl mx-auto">
          {pressMentionsList.map((press) => (
            <div key={press.id} className="p-space-5 border border-gold/10 bg-charcoal flex flex-col justify-between gap-6 hover:border-gold/30 transition-all duration-300">
              
              <div className="space-y-3">
                {/* Logo representation */}
                <div className="font-heading text-xs tracking-[0.25em] text-gold/70 font-semibold uppercase">
                  {press.logoText}
                </div>
                
                <p className="font-body text-xs sm:text-sm text-silver/80 leading-relaxed font-light italic">
                  "{press.summary}"
                </p>
              </div>

              {/* Read more link */}
              <div className="flex items-center justify-between border-t border-gold/10 pt-3">
                <span className="text-[10px] text-silver/50 font-body uppercase tracking-wider">{press.publication}</span>
                <a
                  href={press.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-gold hover:text-gold-hover font-body text-[9px] uppercase tracking-widest font-semibold transition-colors duration-300"
                >
                  Read Article
                  <ArrowUpRight className="w-3 h-3" />
                </a>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
