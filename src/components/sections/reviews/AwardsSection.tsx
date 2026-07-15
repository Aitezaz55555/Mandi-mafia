import { Trophy, Star, ShieldCheck } from "lucide-react";
import { awardsListList } from "@/lib/reviews-data";

export function AwardsSection() {
  return (
    <section className="py-16 bg-obsidian border-t border-gold/10">
      <div className="max-w-7xl mx-auto px-space-4 md:px-space-6 space-y-12 select-text">
        
        {/* Section Header */}
        <div className="text-center max-w-xl mx-auto space-y-space-2">
          <span className="font-body text-[9px] uppercase tracking-[0.2em] text-gold/80 font-medium font-semibold block">Registry Accolades</span>
          <h3 className="font-heading text-2xl md:text-3xl text-ivory">Awards & Credentials</h3>
          <p className="font-body text-xs text-silver/65 leading-relaxed font-light">
            Mandi Mafia's commitment to slow-cooking authenticity and hospitality layout design has been recognized by local institutions.
          </p>
        </div>

        {/* Awards list cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-3xl mx-auto">
          {awardsListList.map((award) => (
            <div key={award.id} className="p-space-5 border border-gold/10 bg-charcoal space-y-3 relative hover:border-gold/30 transition-all duration-300">
              <div className="absolute top-0 right-0 p-3 flex gap-1 items-center font-heading text-xs text-gold">
                <Star className="w-3.5 h-3.5 fill-current" />
                <span>{award.year}</span>
              </div>

              <div className="w-8 h-8 rounded-full border border-gold/25 text-gold bg-gold/5 flex items-center justify-center">
                <Trophy className="w-4 h-4" />
              </div>
              
              <div className="space-y-1">
                <h4 className="font-heading text-lg text-ivory font-medium">{award.title}</h4>
                <span className="font-body text-[9px] uppercase tracking-wider text-silver/50 block">Issued by: {award.issuer}</span>
              </div>
              
              <p className="font-body text-xs text-silver/70 leading-relaxed font-light">
                {award.description}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
