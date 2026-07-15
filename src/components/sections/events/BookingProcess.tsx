import { Calendar, MessageSquare, CheckSquare, Sparkles } from "lucide-react";

const processSteps = [
  {
    step: "01",
    icon: Calendar,
    title: "Choose Event Scale",
    description: "Submit date coordinates, cabin types, and guest size guidelines through our official consultation portal.",
  },
  {
    step: "02",
    icon: MessageSquare,
    title: "Discuss Requirements",
    description: "Our dedicated chambers event coordinator contacts you directly to lock in mocktails and customized starter configurations.",
  },
  {
    step: "03",
    icon: CheckSquare,
    title: "Confirm Package",
    description: "Approve the custom menu layouts, finalize the deposit registry token, and assign VIP seating codes.",
  },
  {
    step: "04",
    icon: Sparkles,
    title: "Celebrate Feasts",
    description: "Arrive at the chambers. Dine comfortably inside the private family cabins, backed by dedicated host services.",
  },
];

export function BookingProcess() {
  return (
    <section className="py-16 bg-obsidian">
      <div className="max-w-7xl mx-auto px-space-4 md:px-space-6 space-y-12 select-text">
        <div className="text-center max-w-xl mx-auto space-y-space-2">
          <span className="font-body text-[9px] uppercase tracking-[0.2em] text-gold/80 font-medium font-semibold block">Simple Milestones</span>
          <h3 className="font-heading text-2xl md:text-3xl text-ivory">The Booking Timeline</h3>
          <p className="font-body text-xs text-silver/65 leading-relaxed font-light">
            We reject tedious bureaucratic forms. Our consultation pipeline is structured to lock in custom configurations rapidly.
          </p>
        </div>

        {/* Timeline Horizontal Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 max-w-5xl mx-auto relative">
          {processSteps.map((step, index) => (
            <div key={index} className="space-y-4 text-center relative md:text-left">
              
              {/* Connector line on Desktop */}
              {index < 3 && (
                <div className="hidden md:block absolute top-6 left-1/2 w-full h-[1px] bg-gradient-to-r from-gold/30 to-transparent z-0" />
              )}

              {/* Icon / Step Index Bubble */}
              <div className="w-12 h-12 rounded-full border border-gold/25 text-gold bg-charcoal flex items-center justify-center mx-auto md:mx-0 relative z-10 shadow-md">
                <step.icon className="w-5 h-5" />
                <span className="absolute -top-1.5 -right-1.5 w-5 h-5 rounded-full bg-gold text-obsidian text-[8px] flex items-center justify-center font-bold font-body">
                  {step.step}
                </span>
              </div>

              <div className="space-y-1 text-center md:text-left">
                <h4 className="font-heading text-base text-ivory font-medium">{step.title}</h4>
                <p className="font-body text-xs text-silver/70 leading-relaxed font-light">
                  {step.description}
                </p>
              </div>

            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
