import Link from "next/link";
import Image from "next/image";

export function EventsHero() {
  return (
    <section className="relative h-[40vh] min-h-[300px] w-full flex items-center justify-center overflow-hidden bg-obsidian">
      {/* Dynamic video loop backing */}
      <div className="absolute inset-0 z-0">
        <video
          src="/assets/events/events-showcase.mp4"
          autoPlay
          muted
          loop
          playsInline
          className="w-full h-full object-cover filter brightness-[0.2]"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-obsidian/90 via-obsidian/45 to-obsidian" />
        <div 
          className="absolute inset-0 opacity-[0.25]"
          style={{
            background: "radial-gradient(circle 40vw at 50% 60%, rgba(212, 175, 55, 0.15) 0%, transparent 80%)"
          }}
        />
      </div>

      {/* Typography contents */}
      <div className="relative z-10 text-center space-y-space-3 max-w-2xl px-space-4 mt-8 select-text">
        <nav className="flex items-center justify-center gap-2 text-[10px] uppercase tracking-[0.2em] text-silver/60">
          <Link href="/" className="hover:text-gold transition-colors">
            Home
          </Link>
          <span>/</span>
          <span className="text-gold font-medium">Private Events</span>
        </nav>

        <h1 className="font-heading text-4xl sm:text-5xl md:text-6xl text-ivory font-light leading-tight tracking-wide">
          Private Celebrations
        </h1>
        <div className="h-[1px] bg-gradient-to-r from-transparent via-gold/30 to-transparent w-36 mx-auto" />
        <p className="font-body text-xs sm:text-sm text-silver/70 leading-relaxed font-light">
          Host your celebrations inside the secret chambers of Mandi Mafia. Custom packages, private cabins, and outdoor catering configurations.
        </p>
      </div>
    </section>
  );
}
