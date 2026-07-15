import { Building2, FileCheck, ChefHat, HeartHandshake, Compass } from "lucide-react";

export function CorporateDining() {
  return (
    <section className="py-16 bg-charcoal/5 border-t border-b border-gold/10">
      <div className="max-w-7xl mx-auto px-space-4 md:px-space-6 space-y-12 select-text">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-5xl mx-auto items-center">
          
          {/* Column 1: Corporate Dining */}
          <div className="space-y-6 bg-charcoal border border-gold/10 p-8 shadow-md">
            <div className="w-10 h-10 rounded-full border border-gold/25 text-gold bg-gold/5 flex items-center justify-center">
              <Building2 className="w-5 h-5" />
            </div>

            <div className="space-y-2">
              <span className="font-body text-[9px] uppercase tracking-wider text-gold font-semibold block">Business Services</span>
              <h3 className="font-heading text-xl md:text-2xl text-ivory">Corporate Dining Chambers</h3>
              <p className="font-body text-xs text-silver/70 leading-relaxed font-light">
                Orchestrate client meetings or team rewards dinners within our quiet chambers. We offer full accommodations for corporate needs in Vijayawada:
              </p>
            </div>

            <ul className="space-y-3 text-xs font-light text-silver/80">
              <li className="flex gap-2 items-center">
                <FileCheck className="w-4 h-4 text-gold/80 shrink-0" />
                <span>Formal GST-compliant tax invoices for corporate accounting.</span>
              </li>
              <li className="flex gap-2 items-center">
                <HeartHandshake className="w-4 h-4 text-gold/80 shrink-0" />
                <span>Dedicated event coordinators to manage custom starters layouts.</span>
              </li>
              <li className="flex gap-2 items-center">
                <Compass className="w-4 h-4 text-gold/80 shrink-0" />
                <span>Priority slot holds and corporate credit billing options.</span>
              </li>
            </ul>
          </div>

          {/* Column 2: Catering Services */}
          <div className="space-y-6 bg-charcoal border border-gold/10 p-8 shadow-md">
            <div className="w-10 h-10 rounded-full border border-gold/25 text-gold bg-gold/5 flex items-center justify-center">
              <ChefHat className="w-5 h-5" />
            </div>

            <div className="space-y-2">
              <span className="font-body text-[9px] uppercase tracking-wider text-gold font-semibold block">External Services</span>
              <h3 className="font-heading text-xl md:text-2xl text-ivory">Syndicate Catering</h3>
              <p className="font-body text-xs text-silver/70 leading-relaxed font-light">
                Transport our authentic Yemen slow-cookers and wood-fire grills directly to your venue of choice. We organize on-site setups for:
              </p>
            </div>

            <ul className="space-y-3 text-xs font-light text-silver/80">
              <li className="flex gap-2.5 items-start">
                <div className="w-1.5 h-1.5 rounded-full bg-gold shrink-0 mt-1.5" />
                <div>
                  <span className="text-ivory font-medium block">Office & Corporate Catering</span>
                  <span>Premium buffet systems delivered straight to business parks.</span>
                </div>
              </li>
              <li className="flex gap-2.5 items-start">
                <div className="w-1.5 h-1.5 rounded-full bg-gold shrink-0 mt-1.5" />
                <div>
                  <span className="text-ivory font-medium block">Wedding & Large Celebrations</span>
                  <span>Grand Thal platters and active wood-fired oven layouts for huge gatherings.</span>
                </div>
              </li>
            </ul>
          </div>

        </div>
      </div>
    </section>
  );
}

