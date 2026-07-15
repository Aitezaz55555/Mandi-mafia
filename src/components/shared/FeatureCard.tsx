import { LucideIcon } from "lucide-react";
import { cn } from "@/lib/utils";

interface FeatureCardProps extends React.HTMLAttributes<HTMLDivElement> {
  icon: LucideIcon;
  title: string;
  description: string;
}

export function FeatureCard({
  icon: Icon,
  title,
  description,
  className,
  ...props
}: FeatureCardProps) {
  return (
    <div
      className={cn(
        "group relative bg-charcoal border border-gold/10 hover:border-gold/30 p-space-6 md:p-space-8 transition-all duration-500 hover:-translate-y-1 hover:shadow-[0_10px_25px_rgba(0,0,0,0.35)] select-text",
        className
      )}
      {...props}
    >
      {/* Absolute outline details */}
      <div className="absolute top-0 left-0 w-3 h-3 border-t border-l border-gold/30 opacity-60 m-4 group-hover:opacity-100 transition-opacity duration-500" />
      <div className="absolute top-0 right-0 w-3 h-3 border-t border-r border-gold/30 opacity-60 m-4 group-hover:opacity-100 transition-opacity duration-500" />

      <div className="space-y-space-4">
        {/* Icon Frame */}
        <div className="w-10 h-10 rounded-full border border-gold/20 flex items-center justify-center text-gold bg-gold/5 group-hover:bg-gold group-hover:text-obsidian transition-all duration-500 shadow-md">
          <Icon className="w-5 h-5" />
        </div>

        {/* Text Details */}
        <div className="space-y-space-2">
          <h3 className="font-heading text-lg md:text-xl text-ivory group-hover:text-gold transition-colors duration-300">
            {title}
          </h3>
          <p className="font-body text-xs text-silver/70 leading-relaxed font-light">
            {description}
          </p>
        </div>
      </div>
    </div>
  );
}
