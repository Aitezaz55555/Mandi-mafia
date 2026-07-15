import Navbar from "./Navbar";
import Footer from "./Footer";
import { BackgroundLayers } from "./BackgroundLayers";
import { ScrollProgress } from "./ScrollProgress";
import { FloatingControls } from "./FloatingControls";
import { LoadingOverlay } from "./LoadingOverlay";
import { RouteTransition } from "./RouteTransition";

export function PageContainer({ children }: { children: React.ReactNode }) {
  return (
    <>
      {/* Dynamic top scroll progress line */}
      <ScrollProgress />

      {/* Initial page loading cover */}
      <LoadingOverlay />

      {/* Ambient backgrounds, grids, spot overlays */}
      <BackgroundLayers />

      {/* Skip navigation link for screen readers */}
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only fixed top-4 left-4 z-[100] bg-gold text-obsidian px-4 py-2 font-body text-xs font-semibold tracking-widest border border-gold hover:shadow-gold-glow outline-none cursor-pointer"
      >
        Skip to Content
      </a>

      {/* Responsive header navbar */}
      <Navbar />

      {/* Animated main viewport wrapper */}
      <main id="main-content" className="relative z-10 flex-1 flex flex-col pt-20 outline-none" tabIndex={-1}>
        <RouteTransition>{children}</RouteTransition>
      </main>

      {/* WhatsApp chat & Scroll to top hooks */}
      <FloatingControls />

      {/* Navigation footer blocks */}
      <Footer />
    </>
  );
}
