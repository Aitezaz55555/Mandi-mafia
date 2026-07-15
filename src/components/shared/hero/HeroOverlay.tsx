export function HeroOverlay() {
  return (
    <div className="absolute inset-0 z-10 pointer-events-none select-none">
      {/* Vignette Linear Shadow overlay (Top-to-Bottom) */}
      <div className="absolute inset-0 bg-gradient-to-b from-obsidian/90 via-obsidian/45 to-obsidian" />
      
      {/* Ambient Spotlight Amber-Gold Glow (Radial Center Bloom) */}
      <div 
        className="absolute inset-0 opacity-[0.25]"
        style={{
          background: "radial-gradient(circle 50vw at 50% 60%, rgba(212, 175, 55, 0.15) 0%, transparent 80%)"
        }}
      />
      
      {/* Noise Texture layer */}
      <div 
        className="absolute inset-0 opacity-[0.015] mix-blend-overlay"
        style={{
          backgroundImage: `radial-gradient(circle, #ccc 10%, transparent 11%), radial-gradient(circle, #ccc 10%, transparent 11%)`,
          backgroundSize: "4px 4px",
          backgroundPosition: "0 0, 2px 2px",
        }}
      />
    </div>
  );
}
