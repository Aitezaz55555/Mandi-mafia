import { Phone, MessageSquare, Mail, MapPin } from "lucide-react";

export function ReservationContactCard() {
  return (
    <section className="py-16 bg-charcoal/5">
      <div className="max-w-7xl mx-auto px-space-4 md:px-space-6 space-y-12 select-text">
        <div className="text-center max-w-xl mx-auto space-y-space-2">
          <span className="font-body text-[9px] uppercase tracking-[0.2em] text-gold/80 font-medium">Alternative Channels</span>
          <h3 className="font-heading text-2xl md:text-3xl text-ivory">Direct Concierge Connect</h3>
          <p className="font-body text-xs text-silver/65 leading-relaxed font-light">
            If you experience scheduling overlaps or need custom modifications for group meals, contact our host agents directly.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
          {/* Phone call card */}
          <div className="p-space-5 border border-gold/10 bg-charcoal text-center space-y-3">
            <div className="w-8 h-8 rounded-full border border-gold/25 text-gold bg-gold/5 flex items-center justify-center mx-auto">
              <Phone className="w-4 h-4" />
            </div>
            <h4 className="font-heading text-base text-ivory font-medium">Call Chambers</h4>
            <p className="text-[10px] text-silver/50 font-body uppercase tracking-wider">Instant voice connect</p>
            <a href="tel:+918665550100" className="text-gold hover:text-gold-hover font-semibold text-xs block font-body tracking-wider">
              +91 866 555 0100
            </a>
          </div>

          {/* WhatsApp card */}
          <div className="p-space-5 border border-gold/10 bg-charcoal text-center space-y-3">
            <div className="w-8 h-8 rounded-full border border-gold/25 text-gold bg-gold/5 flex items-center justify-center mx-auto">
              <MessageSquare className="w-4 h-4" />
            </div>
            <h4 className="font-heading text-base text-ivory font-medium">Concierge Chat</h4>
            <p className="text-[10px] text-silver/50 font-body uppercase tracking-wider">WhatsApp chat links</p>
            <a href="https://wa.me/918665550100" target="_blank" rel="noopener noreferrer" className="text-gold hover:text-gold-hover font-semibold text-xs block font-body tracking-wider">
              Message Registry
            </a>
          </div>

          {/* Email card */}
          <div className="p-space-5 border border-gold/10 bg-charcoal text-center space-y-3">
            <div className="w-8 h-8 rounded-full border border-gold/25 text-gold bg-gold/5 flex items-center justify-center mx-auto">
              <Mail className="w-4 h-4" />
            </div>
            <h4 className="font-heading text-base text-ivory font-medium">Registry Mail</h4>
            <p className="text-[10px] text-silver/50 font-body uppercase tracking-wider">Official booking inbox</p>
            <a href="mailto:registry@mandimafia.com" className="text-gold hover:text-gold-hover font-semibold text-xs block font-body tracking-wider truncate">
              registry@mandimafia.com
            </a>
          </div>

          {/* Map pin card */}
          <div className="p-space-5 border border-gold/10 bg-charcoal text-center space-y-3">
            <div className="w-8 h-8 rounded-full border border-gold/25 text-gold bg-gold/5 flex items-center justify-center mx-auto">
              <MapPin className="w-4 h-4" />
            </div>
            <h4 className="font-heading text-base text-ivory font-medium">Chambers Address</h4>
            <p className="text-[10px] text-silver/50 font-body uppercase tracking-wider">Vijayawada hub</p>
            <a href="https://maps.google.com" target="_blank" rel="noopener noreferrer" className="text-gold hover:text-gold-hover font-semibold text-[11px] block font-body leading-tight">
              Beside Skyline Hub, AP
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
