import Image from "next/image";
import { Play, ExternalLink } from "lucide-react";
import { bloggerVideosList } from "@/lib/reviews-data";

export function FoodBloggerSection() {
  return (
    <section className="py-16 bg-obsidian">
      <div className="max-w-7xl mx-auto px-space-4 md:px-space-6 space-y-12 select-text">
        <div className="text-center max-w-xl mx-auto space-y-space-2">
          <span className="font-body text-[9px] uppercase tracking-[0.2em] text-gold/80 font-medium font-semibold block">Media Coverage</span>
          <h3 className="font-heading text-2xl md:text-3xl text-ivory">Gourmet Influencers</h3>
          <p className="font-body text-xs text-silver/65 leading-relaxed font-light">
            Watch local food vloggers and reviewers decode our Yemeni underground slow-cooking spices.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {bloggerVideosList.map((video) => (
            <div key={video.id} className="group bg-charcoal border border-gold/10 hover:border-gold/30 p-4 space-y-4 shadow-md transition-all duration-300">
              
              {/* Thumbnail with overlay Play */}
              <div className="relative aspect-[16/9] w-full overflow-hidden bg-charcoal-muted">
                <Image
                  src={video.thumbnail}
                  alt={video.title}
                  fill
                  className="object-cover transition-transform duration-[1200ms] group-hover:scale-105 filter brightness-[0.7]"
                  sizes="(max-width: 768px) 100vw, 400px"
                  loading="lazy"
                />
                
                {/* Play Trigger */}
                <div className="absolute inset-0 flex items-center justify-center pointer-events-auto">
                  <a
                    href={video.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 rounded-full bg-gold/90 hover:bg-gold text-obsidian flex items-center justify-center shadow-lg transition-transform group-hover:scale-110 focus:outline-none"
                    aria-label={`Play ${video.creator} video`}
                  >
                    <Play className="w-5 h-5 fill-current ml-0.5" />
                  </a>
                </div>
              </div>

              {/* Text metadata */}
              <div className="space-y-1.5 flex justify-between items-start gap-4">
                <div>
                  <span className="text-[8px] uppercase tracking-widest text-gold font-body block font-medium">
                    {video.creator} • {video.platform}
                  </span>
                  <h4 className="font-heading text-base text-ivory group-hover:text-gold transition-colors leading-snug">
                    {video.title}
                  </h4>
                </div>
                
                <a
                  href={video.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-silver/40 hover:text-gold shrink-0 mt-1"
                  aria-label="Open review page link"
                >
                  <ExternalLink className="w-4 h-4" />
                </a>
              </div>

            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
