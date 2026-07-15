export default function Loading() {
  return (
    <div className="min-h-[80vh] w-full flex flex-col items-center justify-center bg-obsidian text-center space-y-4">
      {/* Golden animated loader ring */}
      <div className="relative w-12 h-12">
        <div className="absolute inset-0 rounded-full border-2 border-gold/10" />
        <div className="absolute inset-0 rounded-full border-2 border-t-gold border-r-gold animate-spin" />
      </div>
      <p className="font-body text-[10px] text-gold/80 uppercase tracking-[0.25em] font-semibold animate-pulse">
        Entering Chambers...
      </p>
    </div>
  );
}
