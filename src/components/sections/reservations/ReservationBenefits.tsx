import { ShieldCheck, Sparkles, Trophy, Gift, HeartHandshake } from "lucide-react";

const benefits = [
  {
    id: 1,
    icon: Trophy,
    title: "Priority Seating Cabin",
    description: "Direct bookings receive immediate priority allotment for private cabins and lounge seats during weekend dinner peaks.",
  },
  {
    id: 2,
    icon: Gift,
    title: "Anniversary & Celebrations Decors",
    description: "Complimentary custom decoration bundles are arranged for birthdays, anniversaries, and corporate events when registered in advance.",
  },
  {
    id: 3,
    icon: Sparkles,
    title: "Pre-order Platter Priming",
    description: "Unlock access to pre-order underground slow-cooked items, ensuring dishes are ready exactly upon your cohorts arrival.",
  },
  {
    id: 4,
    icon: ShieldCheck,
    title: "Direct Concierge Control",
    description: "No third-party app middle-men. Manage table updates, cabin extensions, and timing shifts directly with our manager.",
  },
];

export function ReservationBenefits() {
  return (
    <section className="bg-charcoal/20 border-t border-b border-gold/10 py-16">
      <div className="max-w-7xl mx-auto px-space-4 md:px-space-6 space-y-12 select-text">
        <div className="text-center max-w-xl mx-auto space-y-space-2">
          <span className="font-body text-[9px] uppercase tracking-[0.2em] text-gold/80 font-medium">Direct Registry Advantages</span>
          <h3 className="font-heading text-2xl md:text-3xl text-ivory">Why Book Directly?</h3>
          <p className="font-body text-xs text-silver/65 leading-relaxed font-light">
            Registering tables through our official portal guarantees priority support and access to exclusive custom arrangements.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {benefits.map((b) => (
            <div key={b.id} className="p-space-5 border border-gold/5 bg-charcoal hover:border-gold/25 transition-all duration-300">
              <div className="w-9 h-9 rounded-full border border-gold/25 text-gold bg-gold/5 flex items-center justify-center mb-4">
                <b.icon className="w-4 h-4" />
              </div>
              <h4 className="font-heading text-base text-ivory mb-2 font-medium">{b.title}</h4>
              <p className="font-body text-xs text-silver/70 leading-relaxed font-light">{b.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
