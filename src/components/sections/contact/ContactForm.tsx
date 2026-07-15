"use client";

import { useState } from "react";
import { Send, CheckCircle2 } from "lucide-react";
import { cn } from "@/lib/utils";

interface ContactFormProps {
  onSubmit?: (data: {
    name: string;
    phone: string;
    email: string;
    subject: string;
    message: string;
  }) => Promise<boolean>;
}

export function ContactForm({ onSubmit }: ContactFormProps) {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");

  const [errors, setErrors] = useState<{ [key: string]: string }>({});
  const [isSuccess, setIsSuccess] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const validate = () => {
    const newErrors: { [key: string]: string } = {};

    if (!name.trim()) newErrors.name = "Full name is required.";
    if (!phone.trim()) {
      newErrors.phone = "Phone number is required.";
    } else if (!/^\+?[0-9]{10,12}$/.test(phone.replace(/[\s-]/g, ""))) {
      newErrors.phone = "Please enter a valid phone number (10-12 digits).";
    }
    if (!email.trim()) {
      newErrors.email = "Email is required.";
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      newErrors.email = "Please enter a valid email address.";
    }
    if (!subject.trim()) newErrors.subject = "Subject is required.";
    if (!message.trim()) newErrors.message = "Message details are required.";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleFormSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);
    const data = { name, phone, email, subject, message };

    if (onSubmit) {
      try {
        const success = await onSubmit(data);
        if (success) setIsSuccess(true);
      } catch (err) {
        console.error("Failed to submit contact query:", err);
      } finally {
        setIsSubmitting(false);
      }
    } else {
      // Mock submit success (API hook point)
      setTimeout(() => {
        setIsSuccess(true);
        setIsSubmitting(false);
      }, 800);
    }
  };

  if (isSuccess) {
    return (
      <div className="bg-charcoal border border-gold/15 p-8 text-center space-y-space-4 shadow-md max-w-lg mx-auto select-text">
        <CheckCircle2 className="w-12 h-12 text-gold mx-auto animate-pulse" />
        <h3 className="font-heading text-2xl text-ivory">Message Dispatched</h3>
        <p className="font-body text-xs text-silver/70 leading-relaxed max-w-xs mx-auto">
          We have registered your query inside our concierge inbox. Our table registry manager will contact you within 24 hours.
        </p>
        <button
          onClick={() => {
            setIsSuccess(false);
            setName("");
            setPhone("");
            setEmail("");
            setSubject("");
            setMessage("");
          }}
          className="px-5 h-10 border border-gold/30 hover:border-gold hover:bg-gold/5 text-gold font-body text-[10px] uppercase tracking-wider font-semibold transition-all duration-300 outline-none cursor-pointer"
        >
          Send Another Message
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleFormSubmit} className="bg-charcoal border border-gold/10 p-space-6 md:p-space-8 space-y-4 shadow-md select-text">
      <div className="space-y-space-2 text-left mb-6">
        <h3 className="font-heading text-xl text-gold font-semibold uppercase tracking-wider">concierge Contact Form</h3>
        <p className="font-body text-xs text-silver/65 font-light leading-relaxed">
          Submit queries for special party bookings, bulk catering requests, or Guntur branch coordinates directly.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {/* Name */}
        <div className="space-y-1">
          <label htmlFor="c-name" className="font-body text-[10px] uppercase tracking-wider text-silver/60 block">Full Name</label>
          <input
            type="text"
            id="c-name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full h-11 px-4 bg-obsidian border border-silver/20 focus:border-gold text-xs text-ivory outline-none focus:ring-1 focus:ring-gold font-body"
            placeholder="Enter your name"
          />
          {errors.name && <p className="text-[10px] text-error font-body">{errors.name}</p>}
        </div>

        {/* Phone */}
        <div className="space-y-1">
          <label htmlFor="c-phone" className="font-body text-[10px] uppercase tracking-wider text-silver/60 block">Phone Number</label>
          <input
            type="tel"
            id="c-phone"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            className="w-full h-11 px-4 bg-obsidian border border-silver/20 focus:border-gold text-xs text-ivory outline-none focus:ring-1 focus:ring-gold font-body"
            placeholder="e.g. 9876543210"
          />
          {errors.phone && <p className="text-[10px] text-error font-body">{errors.phone}</p>}
        </div>
      </div>

      {/* Email */}
      <div className="space-y-1">
        <label htmlFor="c-email" className="font-body text-[10px] uppercase tracking-wider text-silver/60 block">Email Address</label>
        <input
          type="email"
          id="c-email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full h-11 px-4 bg-obsidian border border-silver/20 focus:border-gold text-xs text-ivory outline-none focus:ring-1 focus:ring-gold font-body"
          placeholder="name@example.com"
        />
        {errors.email && <p className="text-[10px] text-error font-body">{errors.email}</p>}
      </div>

      {/* Subject */}
      <div className="space-y-1">
        <label htmlFor="c-subject" className="font-body text-[10px] uppercase tracking-wider text-silver/60 block">Subject</label>
        <input
          type="text"
          id="c-subject"
          value={subject}
          onChange={(e) => setSubject(e.target.value)}
          className="w-full h-11 px-4 bg-obsidian border border-silver/20 focus:border-gold text-xs text-ivory outline-none focus:ring-1 focus:ring-gold font-body"
          placeholder="e.g. Corporate party reservations"
        />
        {errors.subject && <p className="text-[10px] text-error font-body">{errors.subject}</p>}
      </div>

      {/* Message */}
      <div className="space-y-1">
        <label htmlFor="c-message" className="font-body text-[10px] uppercase tracking-wider text-silver/60 block">Message Details</label>
        <textarea
          id="c-message"
          rows={5}
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          className="w-full p-4 bg-obsidian border border-silver/20 focus:border-gold text-xs text-ivory outline-none focus:ring-1 focus:ring-gold font-body resize-none"
          placeholder="Describe your inquiry..."
        />
        {errors.message && <p className="text-[10px] text-error font-body">{errors.message}</p>}
      </div>

      {/* Submit button */}
      <div className="pt-4 text-right">
        <button
          type="submit"
          disabled={isSubmitting}
          className="px-6 h-11 bg-gold hover:bg-gold-hover text-obsidian font-body text-[10px] uppercase tracking-wider font-semibold flex items-center justify-center gap-2 border border-gold hover:shadow-gold-glow transition-all duration-300 cursor-pointer outline-none ml-auto"
        >
          {isSubmitting ? "Dispatching..." : "Send Message"}
          <Send className="w-3.5 h-3.5" />
        </button>
      </div>

    </form>
  );
}
