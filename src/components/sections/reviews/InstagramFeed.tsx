import Image from "next/image";
import { instagramPostsList } from "@/lib/reviews-data";
import { MessageSquare, Heart } from "lucide-react";

export function InstagramFeed() {
  return (
    <section className="py-16 bg-charcoal/5">
      <div className="max-w-7xl mx-auto px-space-4 md:px-space-6 space-y-12 select-text">
        <div className="text-center max-w-xl mx-auto space-y-space-2">
          <span className="font-body text-[9px] uppercase tracking-[0.2em] text-gold/80 font-medium font-semibold block">Social Wall</span>
          <h3 className="font-heading text-2xl md:text-3xl text-ivory">Chambers on Instagram</h3>
          <p className="font-body text-xs text-silver/65 leading-relaxed font-light">
            Browse snapshots submitted by patrons under the hash tag <span className="text-gold">#MandiMafia</span>.
          </p>
        </div>

        {/* 4-Column Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-5xl mx-auto">
          {instagramPostsList.map((post) => (
            <a
              key={post.id}
              href={post.link}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative aspect-square w-full border border-gold/10 hover:border-gold/30 bg-charcoal overflow-hidden shadow-sm cursor-pointer outline-none focus-visible:ring-1 focus-visible:ring-gold"
              aria-label="Open Instagram post details"
            >
              <Image
                src={post.image}
                alt="Instagram feed snapshot showing Mandi Mafia dining moments"
                fill
                sizes="(max-width: 640px) 50vw, 250px"
                className="object-cover transition-transform duration-[1200ms] group-hover:scale-105 filter brightness-[0.8]"
                loading="lazy"
              />
              
              {/* Cover overlay details (Likes count) */}
              <div className="absolute inset-0 bg-black/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center gap-1.5 text-gold select-none">
                <Heart className="w-5 h-5 fill-current" />
                <span className="font-body text-[10px] uppercase tracking-wider font-semibold">
                  {post.likes}
                </span>
                <span className="text-[7px] text-silver/50 font-body uppercase tracking-widest pt-1 border-t border-gold/10">View on IG</span>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
