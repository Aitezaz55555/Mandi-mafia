"use client";

import { useState } from "react";
import { Send, CheckCircle2 } from "lucide-react";
import { cn } from "@/lib/utils";

interface EventInquiryFormProps {
  onSubmit?: (data: {
    name: string;
    phone: string;
    email: string;
    eventType: string;
    guests: number;
    date: string;
    budget: string;
    message: string;
  }) => Promise<boolean>;
}

export function EventInquiryForm({ onSubmit }: EventInquiryFormProps) {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [eventType, setEventType] = useState("birthday");
  const [guests, setGuests] = useState<number>(15);
  const [date, setDate] = useState("");
  const [budget, setBudget] = useState("10k-25k");
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
    if (!date) newErrors.date = "Please select an event date.";
    if (guests < 5) newErrors.guests = "Event inquiry requires a minimum of 5 guests.";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleFormSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);
    const data = { name, phone, email, eventType, guests, date, budget, message };

    if (onSubmit) {
      try {
        const success = await onSubmit(data);
        if (success) setIsSuccess(true);
      } catch (err) {
        console.error("Failed to submit event inquiry:", err);
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

  const getMinDate = () => {
    const today = new Date();
    const yyyy = today.getFullYear();
    const mm = String(today.getMonth() + 1).padStart(2, "0");
    const dd = String(today.getDate()).padStart(2, "0");
    return `${yyyy}-${mm}-${dd}`;
  };

  if (isSuccess) {
    return (
      <div className="bg-charcoal border border-gold/15 p-8 text-center space-y-space-4 shadow-md max-w-lg mx-auto select-text">
        <CheckCircle2 className="w-12 h-12 text-gold mx-auto animate-pulse" />
        <h3 className="font-heading text-2xl text-ivory">Inquiry Registered</h3>
        <p className="font-body text-xs text-silver/70 leading-relaxed max-w-xs mx-auto">
          Your event details have been submitted. Our dedicated host coordinator will contact you via phone within 12 hours.
        </p>
        <button
          onClick={() => {
            setIsSuccess(false);
            setName("");
            setPhone("");
            setEmail("");
            setDate("");
            setMessage("");
          }}
          className="px-5 h-10 border border-gold/30 hover:border-gold hover:bg-gold/5 text-gold font-body text-[10px] uppercase tracking-wider font-semibold transition-all duration-300 outline-none cursor-pointer"
        >
          Submit Another Inquiry
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleFormSubmit} className="bg-charcoal border border-gold/10 p-space-6 md:p-space-8 space-y-4 shadow-md select-text">
      <div className="space-y-space-2 text-left mb-6">
        <h3 className="font-heading text-xl text-gold font-semibold uppercase tracking-wider">Event Consultation Request</h3>
        <p className="font-body text-xs text-silver/65 font-light leading-relaxed">
          Submit details below. Our concierge host coordinates custom table extensions, pricing adjustments, and special decors.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {/* Name */}
        <div className="space-y-1">
          <label htmlFor="e-name" className="font-body text-[10px] uppercase tracking-wider text-silver/60 block">Full Name</label>
          <input
            type="text"
            id="e-name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full h-11 px-4 bg-obsidian border border-silver/20 focus:border-gold text-xs text-ivory outline-none focus:ring-1 focus:ring-gold font-body"
            placeholder="Enter your name"
          />
          {errors.name && <p className="text-[10px] text-error font-body">{errors.name}</p>}
        </div>

        {/* Phone */}
        <div className="space-y-1">
          <label htmlFor="e-phone" className="font-body text-[10px] uppercase tracking-wider text-silver/60 block">Phone Number</label>
          <input
            type="tel"
            id="e-phone"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            className="w-full h-11 px-4 bg-obsidian border border-silver/20 focus:border-gold text-xs text-ivory outline-none focus:ring-1 focus:ring-gold font-body"
            placeholder="e.g. 9876543210"
          />
          {errors.phone && <p className="text-[10px] text-error font-body">{errors.phone}</p>}
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {/* Email */}
        <div className="space-y-1">
          <label htmlFor="e-email" className="font-body text-[10px] uppercase tracking-wider text-silver/60 block">Email Address</label>
          <input
            type="email"
            id="e-email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full h-11 px-4 bg-obsidian border border-silver/20 focus:border-gold text-xs text-ivory outline-none focus:ring-1 focus:ring-gold font-body"
            placeholder="name@example.com"
          />
          {errors.email && <p className="text-[10px] text-error font-body">{errors.email}</p>}
        </div>

        {/* Date */}
        <div className="space-y-1">
          <label htmlFor="e-date" className="font-body text-[10px] uppercase tracking-wider text-silver/60 block">Preferred Date</label>
          <input
            type="date"
            id="e-date"
            min={getMinDate()}
            value={date}
            onChange={(e) => setDate(e.target.value)}
            className="w-full h-11 px-4 bg-obsidian border border-silver/20 focus:border-gold text-xs text-ivory outline-none focus:ring-1 focus:ring-gold font-body"
          />
          {errors.date && <p className="text-[10px] text-error font-body">{errors.date}</p>}
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        {/* Event Type */}
        <div className="space-y-1">
          <label htmlFor="e-type" className="font-body text-[10px] uppercase tracking-wider text-silver/60 block">Event Category</label>
          <select
            id="e-type"
            value={eventType}
            onChange={(e) => setEventType(e.target.value)}
            className="w-full h-11 px-4 bg-obsidian border border-silver/20 focus:border-gold text-xs text-ivory outline-none focus:ring-1 focus:ring-gold font-body cursor-pointer"
          >
            <option value="birthday">Birthday Celebration</option>
            <option value="anniversary">Anniversary</option>
            <option value="corporate">Corporate Dinner</option>
            <option value="catering">Catering Service</option>
            <option value="other">Other Event</option>
          </select>
        </div>

        {/* Guests */}
        <div className="space-y-1">
          <label htmlFor="e-guests" className="font-body text-[10px] uppercase tracking-wider text-silver/60 block">Guests Count</label>
          <input
            type="number"
            id="e-guests"
            min={5}
            value={guests}
            onChange={(e) => setGuests(parseInt(e.target.value) || 5)}
            className="w-full h-11 px-4 bg-obsidian border border-silver/20 focus:border-gold text-xs text-ivory outline-none focus:ring-1 focus:ring-gold font-body"
          />
          {errors.guests && <p className="text-[10px] text-error font-body">{errors.guests}</p>}
        </div>

        {/* Budget */}
        <div className="space-y-1">
          <label htmlFor="e-budget" className="font-body text-[10px] uppercase tracking-wider text-silver/60 block">Estimated Budget</label>
          <select
            id="e-budget"
            value={budget}
            onChange={(e) => setBudget(e.target.value)}
            className="w-full h-11 px-4 bg-obsidian border border-silver/20 focus:border-gold text-xs text-ivory outline-none focus:ring-1 focus:ring-gold font-body cursor-pointer"
          >
            <option value="under-10k">Under ₹10,000</option>
            <option value="10k-25k">₹10,000 — ₹25,000</option>
            <option value="25k-50k">₹25,000 — ₹50,000</option>
            <option value="50k-plus">₹50,000+ / Custom</option>
          </select>
        </div>
      </div>

      {/* Message */}
      <div className="space-y-1">
        <label htmlFor="e-message" className="font-body text-[10px] uppercase tracking-wider text-silver/60 block">Custom Requirements</label>
        <textarea
          id="e-message"
          rows={5}
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          className="w-full p-4 bg-obsidian border border-silver/20 focus:border-gold text-xs text-ivory outline-none focus:ring-1 focus:ring-gold font-body resize-none"
          placeholder="e.g. Allergy details, halal requirements, floral colors, layout structures..."
        />
      </div>

      {/* Submit button */}
      <div className="pt-4 text-right">
        <button
          type="submit"
          disabled={isSubmitting}
          className="px-6 h-11 bg-gold hover:bg-gold-hover text-obsidian font-body text-[10px] uppercase tracking-wider font-semibold flex items-center justify-center gap-2 border border-gold hover:shadow-gold-glow transition-all duration-300 cursor-pointer outline-none ml-auto"
        >
          {isSubmitting ? "Dispatching..." : "Submit Inquiry"}
          <Send className="w-3.5 h-3.5" />
        </button>
      </div>

    </form>
  );
}
