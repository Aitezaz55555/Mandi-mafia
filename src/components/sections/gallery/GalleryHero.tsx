import Link from "next/link";
import Image from "next/image";

export function GalleryHero() {
  return (
    <section className="relative h-[45vh] min-h-[350px] w-full flex items-center justify-center overflow-hidden bg-obsidian">
      {/* Background photo and vignetting */}
      <div className="absolute inset-0 z-0">
        <Image
          src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=1600&auto=format&fit=crop"
          alt="Mandi Mafia interior lights backdrop"
          fill
          priority
          className="object-cover object-center filter brightness-[0.25]"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-obsidian/90 via-obsidian/45 to-obsidian" />
        <div 
          className="absolute inset-0 opacity-[0.2]"
          style={{
            background: "radial-gradient(circle 40vw at 50% 60%, rgba(212, 175, 55, 0.15) 0%, transparent 80%)"
          }}
        />
      </div>

      {/* Hero Typography */}
      <div className="relative z-10 text-center space-y-space-3 max-w-2xl px-space-4 mt-8 select-text">
        {/* Breadcrumbs */}
        <nav className="flex items-center justify-center gap-2 text-[10px] uppercase tracking-[0.2em] text-silver/60">
          <Link href="/" className="hover:text-gold transition-colors">
            Home
          </Link>
          <span>/</span>
          <span className="text-gold font-medium">Gallery</span>
        </nav>

        <h1 className="font-heading text-4xl sm:text-5xl md:text-6xl text-ivory font-light leading-tight tracking-wide">
          Chambers & Creations
        </h1>
        <div className="h-[1px] bg-gradient-to-r from-transparent via-gold/30 to-transparent w-36 mx-auto" />
        <p className="font-body text-xs sm:text-sm text-silver/70 leading-relaxed font-light">
          A visual record of flavor, light, and brotherhood inside Mandi Mafia. Explore our private seating chambers, open wood-fired ovens, and gourmet creations.
        </p>
      </div>
    </section>
  );
}
