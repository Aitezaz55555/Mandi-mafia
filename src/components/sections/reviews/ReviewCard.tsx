import { Star, ShieldCheck } from "lucide-react";
import { Review } from "@/lib/reviews-data";

interface ReviewCardProps {
  review: Review;
}

export function ReviewCard({ review }: ReviewCardProps) {
  return (
    <div className="group relative bg-charcoal border border-gold/10 hover:border-gold/30 p-space-5 md:p-space-6 flex flex-col justify-between h-full transition-all duration-500 hover:shadow-[0_10px_25px_rgba(0,0,0,0.3)] select-text">
      {/* Visual outline details */}
      <div className="absolute top-0 left-0 w-2.5 h-2.5 border-t border-l border-gold/25 m-3.5 opacity-40 group-hover:opacity-100 transition-opacity" />
      
      <div className="space-y-space-3">
        {/* Header Stars & Checked verification */}
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-0.5 text-gold">
            {Array.from({ length: 5 }).map((_, i) => (
              <Star
                key={i}
                className={`w-3.5 h-3.5 ${
                  i < review.rating ? "fill-current" : "opacity-20"
                }`}
              />
            ))}
          </div>
          
          {review.verified && (
            <div className="flex items-center gap-1 text-[8px] uppercase tracking-widest text-emerald-500/80 font-body font-semibold">
              <ShieldCheck className="w-3.5 h-3.5 shrink-0" />
              <span>Verified Visit</span>
            </div>
          )}
        </div>

        {/* Review body content */}
        <p className="font-body text-xs sm:text-sm text-silver/80 leading-relaxed font-light italic">
          "{review.text}"
        </p>
      </div>

      {/* Reviewer Meta Details */}
      <div className="border-t border-gold/10 pt-space-3 mt-space-5 flex items-center justify-between gap-2">
        <div>
          <h4 className="font-heading text-base text-ivory group-hover:text-gold transition-colors duration-300">
            {review.name}
          </h4>
          <span className="font-body text-[8px] uppercase tracking-wider text-silver/50 block">
            {review.visitType}
          </span>
        </div>
        <span className="text-[9px] font-body text-silver/40 shrink-0">{review.date}</span>
      </div>

    </div>
  );
}
