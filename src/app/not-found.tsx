import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex-1 flex flex-col items-center justify-center p-space-6 bg-obsidian text-center">
      <div className="max-w-md space-y-space-6 flex flex-col items-center">
        <div className="font-heading text-7xl text-gold font-light">404</div>
        <div className="space-y-space-2">
          <h2 className="font-heading text-2xl sm:text-3xl text-ivory">
            Lost in the Syndicate
          </h2>
          <p className="font-body text-xs text-silver/70 max-w-xs mx-auto leading-relaxed">
            The secret chamber you are looking for does not exist or has been relocated by the council.
          </p>
        </div>
        <Link
          href="/"
          className="px-space-6 py-space-3 bg-gold text-obsidian font-body text-[10px] uppercase tracking-[0.15em] font-semibold transition-all duration-300 hover:bg-gold-hover hover:shadow-gold-glow"
        >
          Return to Main Chambers
        </Link>
      </div>
    </div>
  );
}
