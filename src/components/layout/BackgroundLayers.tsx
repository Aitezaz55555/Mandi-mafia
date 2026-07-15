import Image from "next/image";

export function BackgroundLayers() {
  return (
    <div className="fixed inset-0 z-0 overflow-hidden pointer-events-none select-none">
      {/* Subtle Noise Grid Overlay */}
      <div 
        className="absolute inset-0 opacity-[0.02] mix-blend-overlay"
        style={{
          backgroundImage: `radial-gradient(circle, #ccc 10%, transparent 11%), radial-gradient(circle, #ccc 10%, transparent 11%)`,
          backgroundSize: "4px 4px",
          backgroundPosition: "0 0, 2px 2px",
        }}
      />
      
      {/* Ambient Gradient Shadows */}
      <div className="absolute inset-0 bg-obsidian" />
      <div className="absolute inset-0 bg-gradient-to-b from-obsidian via-obsidian/95 to-obsidian" />
      
      {/* Ambient Radial Spotlight Glows (Amber Gold & Deep Burgundy) */}
      <div className="absolute top-[10%] left-[5%] w-[45vw] h-[45vw] rounded-full bg-gold/3 blur-[120px]" />
      <div className="absolute bottom-[20%] right-[5%] w-[50vw] h-[50vw] rounded-full bg-burgundy/4 blur-[140px]" />
      
      {/* Background Decorative Skyline Watermark at bottom */}
      <div className="absolute bottom-0 left-0 right-0 h-48 opacity-[0.02] flex items-end justify-center">
        <div className="relative w-full max-w-5xl h-36">
          <Image
            src="/assets/logo/logo-transparent.png"
            alt=""
            fill
            sizes="(max-width: 1280px) 100vw, 1280px"
            className="object-contain object-bottom filter grayscale brightness-50"
          />
        </div>
      </div>
    </div>
  );
}
