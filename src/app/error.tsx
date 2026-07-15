"use client";

import { useEffect, useState } from "react";
import { AlertTriangle, RotateCcw, WifiOff } from "lucide-react";

export default function ErrorBoundary({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  const [isOffline, setIsOffline] = useState(false);

  useEffect(() => {
    console.error("ErrorBoundary caught runtime exception:", error);
    
    // Check if network is disconnected
    setIsOffline(!navigator.onLine);

    const handleOnline = () => setIsOffline(false);
    const handleOffline = () => setIsOffline(true);

    window.addEventListener("online", handleOnline);
    window.addEventListener("offline", handleOffline);

    return () => {
      window.removeEventListener("online", handleOnline);
      window.removeEventListener("offline", handleOffline);
    };
  }, [error]);

  return (
    <div className="min-h-[70vh] w-full flex flex-col items-center justify-center p-space-6 bg-obsidian text-center space-y-6">
      
      {/* Icon Frame */}
      <div className="w-16 h-16 rounded-full border border-gold/25 text-gold bg-gold/5 flex items-center justify-center shadow-lg">
        {isOffline ? (
          <WifiOff className="w-8 h-8 animate-pulse" />
        ) : (
          <AlertTriangle className="w-8 h-8 text-burgundy animate-bounce" />
        )}
      </div>

      {/* Detail headings */}
      <div className="space-y-2 max-w-md select-text">
        <span className="font-body text-[10px] uppercase tracking-widest text-gold font-medium">
          {isOffline ? "Network Offline" : "Registry Exception"}
        </span>
        <h2 className="font-heading text-2xl md:text-3xl text-ivory font-light leading-tight">
          {isOffline ? "Chamber Connection Disrupted" : "Registry Database Sync Interrupted"}
        </h2>
        <p className="font-body text-xs text-silver/70 leading-relaxed font-light">
          {isOffline
            ? "Your internet connection is currently offline. Please check your network router and verify that cellular data or Wi-Fi is active."
            : "A database error or secure network socket shift occurred while communicating with the Mandi Mafia servers. Our syndicate hosts are investigating."}
        </p>
      </div>

      {/* Retry Trigger button */}
      <div className="pt-2">
        <button
          onClick={() => reset()}
          className="px-6 h-11 bg-gold hover:bg-gold-hover text-obsidian font-body text-[10px] uppercase tracking-wider font-semibold flex items-center justify-center gap-2 border border-gold hover:shadow-gold-glow transition-all duration-300 cursor-pointer outline-none focus-visible:ring-1 focus-visible:ring-gold"
        >
          <RotateCcw className="w-3.5 h-3.5" />
          Retry Request
        </button>
      </div>

    </div>
  );
}
