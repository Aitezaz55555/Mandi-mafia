"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Calendar as CalendarIcon, Clock, Users, Coffee, Compass, CheckCircle2, ChevronRight, ChevronLeft, Send, Phone } from "lucide-react";
import { timeSlots, diningOptions, occasionsList, TimeSlot, DiningOption } from "@/lib/reservation-data";
import { cn } from "@/lib/utils";
import { ReservationService } from "@/lib/api/reservation.service";

export interface BookingDetails {
  date: string;
  timeSlot: string;
  guestsCount: number;
  diningOption: string;
  occasion: string;
  name: string;
  phone: string;
  email: string;
  specialRequests: string;
}

interface ReservationFormProps {
  onSubmit?: (data: BookingDetails) => Promise<{ success: boolean; token: string }>;
}

export function ReservationForm({ onSubmit }: ReservationFormProps) {
  // Step State
  const [step, setStep] = useState<number>(1);
  const [isSubmitted, setIsSubmitted] = useState<boolean>(false);
  const [bookingToken, setBookingToken] = useState<string>("");

  // Booking details state
  const [date, setDate] = useState<string>("");
  const [timeSlot, setTimeSlot] = useState<string>("");
  const [guestsCount, setGuestsCount] = useState<number>(2);
  const [diningOption, setDiningOption] = useState<string>("standard");
  const [occasion, setOccasion] = useState<string>("casual");
  const [name, setName] = useState<string>("");
  const [phone, setPhone] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [specialRequests, setSpecialRequests] = useState<string>("");

  // Validation states
  const [errors, setErrors] = useState<{ [key: string]: string }>({});
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);

  // Auto-fill selected dish from URL query parameter (Sprint 5 Menu integration)
  useEffect(() => {
    if (typeof window !== "undefined") {
      const params = new URLSearchParams(window.location.search);
      const preselectedDish = params.get("dish");
      if (preselectedDish) {
        setSpecialRequests(`Patron requested preselected dish registry: ${preselectedDish}`);
      }
    }
  }, []);

  const validateStep = (currentStep: number): boolean => {
    const newErrors: { [key: string]: string } = {};

    if (currentStep === 1 && !date) {
      newErrors.date = "Please select a dining date.";
    }
    if (currentStep === 2 && !timeSlot) {
      newErrors.timeSlot = "Please select an operational time slot.";
    }
    if (currentStep === 6) {
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
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleNext = () => {
    if (validateStep(step)) {
      setStep((prev) => Math.min(prev + 1, 8));
    }
  };

  const handlePrev = () => {
    setStep((prev) => Math.max(prev - 1, 1));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateStep(6)) return;

    const data: BookingDetails = {
      date,
      timeSlot,
      guestsCount,
      diningOption,
      occasion,
      name,
      phone,
      email,
      specialRequests,
    };

    setIsSubmitting(true);
    try {
      if (onSubmit) {
        const response = await onSubmit(data);
        if (response.success) {
          setBookingToken(response.token);
          setIsSubmitted(true);
        }
      } else {
        const response = await ReservationService.submitReservation(data);
        if (response.success) {
          setBookingToken(response.token);
          setIsSubmitted(true);
        }
      }
    } catch (err: any) {
      console.error("Reservation dispatch error:", err);
      setErrors({ submit: err.message || "A network failure occurred. Please retry." });
    } finally {
      setIsSubmitting(false);
    }
  };

  // Get current date string for input minimum (disallow past dates)
  const getMinDate = () => {
    const today = new Date();
    const yyyy = today.getFullYear();
    const mm = String(today.getMonth() + 1).padStart(2, "0");
    const dd = String(today.getDate()).padStart(2, "0");
    return `${yyyy}-${mm}-${dd}`;
  };

  if (isSubmitted) {
    return (
      <ReservationConfirmation
        token={bookingToken}
        name={name}
        date={date}
        time={timeSlot}
        guests={guestsCount}
        option={diningOption}
      />
    );
  }

  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-space-8 items-start select-none">
      {/* LEFT COLUMN: Booking Steps Form */}
      <form onSubmit={handleSubmit} className="lg:col-span-8 bg-charcoal border border-gold/10 p-space-6 md:p-space-8 space-y-space-6 relative shadow-lg">
        {/* Step indicator bar */}
        <div className="flex items-center justify-between text-[10px] uppercase tracking-widest text-silver/50 pb-4 border-b border-gold/10">
          <span>Step {step} of 7</span>
          <span>{((step / 7) * 100).toFixed(0)}% Complete</span>
        </div>

        <div className="min-h-[250px]">
          {/* STEP 1: Date picker */}
          {step === 1 && (
            <div className="space-y-space-4">
              <label htmlFor="date" className="font-heading text-xl text-ivory block font-medium">
                Choose Dining Date
              </label>
              <input
                type="date"
                id="date"
                min={getMinDate()}
                value={date}
                onChange={(e) => setDate(e.target.value)}
                className="w-full h-12 px-4 bg-obsidian border border-silver/20 focus:border-gold text-xs text-ivory outline-none focus:ring-2 focus:ring-gold focus:ring-offset-2 focus:ring-offset-obsidian font-body"
              />
              {errors.date && <p className="text-[10px] text-error font-body">{errors.date}</p>}
            </div>
          )}

          {/* STEP 2: Time slot grid */}
          {step === 2 && (
            <div className="space-y-space-4">
              <span className="font-heading text-xl text-ivory block font-medium">Select Arrival Time</span>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                {timeSlots.map((slot) => (
                  <button
                    key={slot.time}
                    type="button"
                    disabled={!slot.isAvailable}
                    onClick={() => setTimeSlot(slot.time)}
                    className={cn(
                      "h-12 border text-center font-body text-xs cursor-pointer flex flex-col justify-center items-center transition-all duration-300 relative outline-none",
                      !slot.isAvailable
                        ? "border-silver/10 text-silver/20 cursor-not-allowed"
                        : timeSlot === slot.time
                        ? "bg-gold border-gold text-obsidian font-semibold"
                        : "border-silver/20 text-silver/80 hover:border-gold/30 hover:text-gold"
                    )}
                  >
                    <span>{slot.time}</span>
                    {slot.isPopular && slot.isAvailable && (
                      <span className={cn(
                        "text-[7px] uppercase tracking-widest block font-medium",
                        timeSlot === slot.time ? "text-obsidian" : "text-gold"
                      )}>
                        Popular
                      </span>
                    )}
                  </button>
                ))}
              </div>
              {errors.timeSlot && <p className="text-[10px] text-error font-body">{errors.timeSlot}</p>}
            </div>
          )}

          {/* STEP 3: Guest stepper */}
          {step === 3 && (
            <div className="space-y-space-4">
              <label htmlFor="guests" className="font-heading text-xl text-ivory block font-medium">Number of Guests</label>
              <div className="flex items-center gap-space-4">
                <button
                  type="button"
                  onClick={() => setGuestsCount((g) => Math.max(1, g - 1))}
                  className="w-12 h-12 border border-silver/25 text-silver hover:border-gold hover:text-gold flex items-center justify-center font-body text-lg cursor-pointer outline-none"
                >
                  -
                </button>
                <div className="w-16 h-12 bg-obsidian border border-silver/20 flex items-center justify-center font-body text-lg text-gold font-semibold">
                  {guestsCount}
                </div>
                <button
                  type="button"
                  onClick={() => setGuestsCount((g) => Math.min(30, g + 1))}
                  className="w-12 h-12 border border-silver/25 text-silver hover:border-gold hover:text-gold flex items-center justify-center font-body text-lg cursor-pointer outline-none"
                >
                  +
                </button>
              </div>
              <p className="text-[10px] text-silver/50 font-body">For large team gatherings exceeding 30 guests, please contact our director directly.</p>
            </div>
          )}

          {/* STEP 4: Dining Cabin Preference */}
          {step === 4 && (
            <div className="space-y-space-4">
              <span className="font-heading text-xl text-ivory block font-medium">Choose Seating Configuration</span>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {diningOptions.map((opt) => (
                  <button
                    key={opt.id}
                    type="button"
                    onClick={() => setDiningOption(opt.id)}
                    className={cn(
                      "p-space-4 border text-left flex flex-col justify-between items-start gap-2 transition-all duration-300 relative outline-none cursor-pointer",
                      diningOption === opt.id
                        ? "border-gold bg-gold/5"
                        : "border-silver/20 hover:border-gold/30"
                    )}
                  >
                    <div className="w-full flex items-center justify-between">
                      <h4 className={cn("font-heading text-base font-medium", diningOption === opt.id ? "text-gold" : "text-ivory")}>
                        {opt.name}
                      </h4>
                      <span className="text-[8px] uppercase tracking-wider text-silver/50 font-body">{opt.capacity}</span>
                    </div>
                    <p className="font-body text-[10px] text-silver/70 leading-relaxed font-light">
                      {opt.description}
                    </p>
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* STEP 5: Occasion Selector */}
          {step === 5 && (
            <div className="space-y-space-4">
              <span className="font-heading text-xl text-ivory block font-medium">Is this a Special Occasion?</span>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {occasionsList.map((occ) => (
                  <button
                    key={occ.id}
                    type="button"
                    onClick={() => setOccasion(occ.id)}
                    className={cn(
                      "h-12 border text-center font-body text-xs cursor-pointer flex items-center justify-center transition-all duration-300 relative outline-none",
                      occasion === occ.id
                        ? "bg-gold border-gold text-obsidian font-semibold"
                        : "border-silver/20 text-silver/80 hover:border-gold/30 hover:text-gold"
                    )}
                  >
                    {occ.label}
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* STEP 6: Customer verification details */}
          {step === 6 && (
            <div className="space-y-space-4">
              <span className="font-heading text-xl text-ivory block font-medium">Registry Details</span>
              <div className="grid grid-cols-1 gap-4">
                
                {/* Full name */}
                <div className="space-y-1">
                  <label htmlFor="name" className="font-body text-[10px] uppercase tracking-wider text-silver/60 block">Full Name</label>
                  <input
                    type="text"
                    id="name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="w-full h-11 px-4 bg-obsidian border border-silver/20 focus:border-gold text-xs text-ivory outline-none focus:ring-2 focus:ring-gold focus:ring-offset-2 focus:ring-offset-obsidian font-body"
                    placeholder="Enter your name"
                  />
                  {errors.name && <p className="text-[10px] text-error font-body">{errors.name}</p>}
                </div>

                {/* Contact phone */}
                <div className="space-y-1">
                  <label htmlFor="phone" className="font-body text-[10px] uppercase tracking-wider text-silver/60 block">Contact Number</label>
                  <input
                    type="tel"
                    id="phone"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    className="w-full h-11 px-4 bg-obsidian border border-silver/20 focus:border-gold text-xs text-ivory outline-none focus:ring-2 focus:ring-gold focus:ring-offset-2 focus:ring-offset-obsidian font-body"
                    placeholder="e.g. 9876543210"
                  />
                  {errors.phone && <p className="text-[10px] text-error font-body">{errors.phone}</p>}
                </div>

                {/* Email address */}
                <div className="space-y-1">
                  <label htmlFor="email" className="font-body text-[10px] uppercase tracking-wider text-silver/60 block">Email Address</label>
                  <input
                    type="email"
                    id="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full h-11 px-4 bg-obsidian border border-silver/20 focus:border-gold text-xs text-ivory outline-none focus:ring-2 focus:ring-gold focus:ring-offset-2 focus:ring-offset-obsidian font-body"
                    placeholder="name@example.com"
                  />
                  {errors.email && <p className="text-[10px] text-error font-body">{errors.email}</p>}
                </div>

              </div>
            </div>
          )}

          {/* STEP 7: Special requests */}
          {step === 7 && (
            <div className="space-y-space-4">
              <label htmlFor="requests" className="font-heading text-xl text-ivory block font-medium">Special Dining Requests</label>
              <textarea
                id="requests"
                rows={5}
                value={specialRequests}
                onChange={(e) => setSpecialRequests(e.target.value)}
                placeholder="Details of allergy warnings, seat preferences, or platter pre-orders..."
                className="w-full p-4 bg-obsidian border border-silver/20 focus:border-gold text-xs text-ivory outline-none focus:ring-2 focus:ring-gold focus:ring-offset-2 focus:ring-offset-obsidian font-body resize-none"
              />
            </div>
          )}
        </div>

        {/* STEP BUTTON TRIGGERS */}
        <div className="space-y-4 border-t border-gold/10 pt-6">
          {errors.submit && (
            <p className="text-xs text-error font-body font-light text-right">{errors.submit}</p>
          )}
          
          <div className="flex items-center justify-between">
            {step > 1 ? (
              <button
                type="button"
                disabled={isSubmitting}
                onClick={handlePrev}
                className="px-5 h-11 border border-gold/20 hover:border-gold text-gold font-body text-[10px] uppercase tracking-wider font-semibold flex items-center gap-1.5 transition-all duration-300 cursor-pointer outline-none disabled:opacity-50 disabled:cursor-not-allowed"
              >
                <ChevronLeft className="w-4 h-4" />
                Back
              </button>
            ) : (
              <div />
            )}

            {step < 7 ? (
              <button
                type="button"
                onClick={handleNext}
                className="px-5 h-11 bg-gold hover:bg-gold-hover text-obsidian font-body text-[10px] uppercase tracking-wider font-semibold flex items-center gap-1.5 transition-all duration-300 cursor-pointer outline-none"
              >
                Next Step
                <ChevronRight className="w-4 h-4" />
              </button>
            ) : (
              <button
                type="submit"
                disabled={isSubmitting}
                className="px-6 h-11 bg-gold hover:bg-gold-hover text-obsidian font-body text-[10px] uppercase tracking-wider font-semibold flex items-center gap-1.5 transition-all duration-300 cursor-pointer outline-none hover:shadow-gold-glow disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? "Submitting..." : "Submit Registry"}
                <Send className="w-3.5 h-3.5" />
              </button>
            )}
          </div>
        </div>

      </form>

      {/* RIGHT COLUMN: Sidebar dynamic summary */}
      <aside className="lg:col-span-4 bg-charcoal border border-gold/10 p-space-6 space-y-space-4 shadow-md sticky top-24 select-text">
        <h3 className="font-heading text-lg text-gold font-semibold uppercase tracking-wider">
          Registry Summary
        </h3>
        <div className="h-[1px] bg-gold/20 w-full" />
        
        <ul className="space-y-space-4 text-xs font-light text-silver/80">
          <li className="flex gap-2">
            <CalendarIcon className="w-4 h-4 text-gold shrink-0 mt-0.5" />
            <div>
              <span className="text-[10px] text-silver/50 block uppercase tracking-wider">Date</span>
              <span>{date ? new Date(date).toLocaleDateString("en-IN", { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' }) : "Not selected"}</span>
            </div>
          </li>
          
          <li className="flex gap-2">
            <Clock className="w-4 h-4 text-gold shrink-0 mt-0.5" />
            <div>
              <span className="text-[10px] text-silver/50 block uppercase tracking-wider">Time</span>
              <span>{timeSlot || "Not selected"}</span>
            </div>
          </li>

          <li className="flex gap-2">
            <Users className="w-4 h-4 text-gold shrink-0 mt-0.5" />
            <div>
              <span className="text-[10px] text-silver/50 block uppercase tracking-wider">Patrons</span>
              <span>{guestsCount} Guests</span>
            </div>
          </li>

          <li className="flex gap-2">
            <Coffee className="w-4 h-4 text-gold shrink-0 mt-0.5" />
            <div>
              <span className="text-[10px] text-silver/50 block uppercase tracking-wider">Seating Chamber</span>
              <span>{diningOptions.find(o => o.id === diningOption)?.name || "Standard Table"}</span>
            </div>
          </li>

          <li className="flex gap-2">
            <Compass className="w-4 h-4 text-gold shrink-0 mt-0.5" />
            <div>
              <span className="text-[10px] text-silver/50 block uppercase tracking-wider">Occasion</span>
              <span>{occasionsList.find(o => o.id === occasion)?.label || "Casual Dining"}</span>
            </div>
          </li>
        </ul>

        {step >= 6 && name && (
          <div className="border-t border-gold/10 pt-4 space-y-2 text-xs font-light text-silver/80">
            <h4 className="font-heading text-sm text-ivory">Contact</h4>
            <p className="line-clamp-1"><span className="text-gold">Name:</span> {name}</p>
            <p className="line-clamp-1"><span className="text-gold">Phone:</span> {phone}</p>
          </div>
        )}
      </aside>
    </div>
  );
}

// Nested Confirmation layout block
interface ConfirmationProps {
  token: string;
  name: string;
  date: string;
  time: string;
  guests: number;
  option: string;
}

function ReservationConfirmation({ token, name, date, time, guests, option }: ConfirmationProps) {
  const handleHomeClick = () => {
    window.location.href = "/";
  };

  const formattedDate = new Date(date).toLocaleDateString("en-IN", {
    weekday: 'long',
    month: 'long',
    day: 'numeric',
  });

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      className="max-w-2xl mx-auto bg-charcoal border border-gold/15 p-8 md:p-12 text-center space-y-space-6 shadow-xl select-text"
    >
      <div className="flex flex-col items-center gap-2">
        <CheckCircle2 className="w-12 h-12 text-gold animate-pulse" />
        <span className="font-body text-[10px] uppercase tracking-[0.25em] text-gold/80 font-medium">
          Registry Confirmed
        </span>
        <h2 className="font-heading text-3xl md:text-4xl text-ivory font-light">
          Welcome to the Syndicate
        </h2>
        <div className="h-[1px] bg-gradient-to-r from-transparent via-gold/30 to-transparent w-40" />
      </div>

      <div className="bg-obsidian/60 border border-gold/5 p-space-5 space-y-space-3 text-xs font-light text-silver/80 text-left max-w-md mx-auto">
        <div className="flex justify-between border-b border-gold/10 pb-2">
          <span className="text-gold font-medium">Reservation ID:</span>
          <span className="font-mono text-gold font-semibold">{token}</span>
        </div>
        <div className="flex justify-between pt-1">
          <span>Patron:</span>
          <span className="text-ivory font-medium">{name}</span>
        </div>
        <div className="flex justify-between">
          <span>Date & Time:</span>
          <span className="text-ivory font-medium">{formattedDate} @ {time}</span>
        </div>
        <div className="flex justify-between">
          <span>Guests Count:</span>
          <span className="text-ivory font-medium">{guests} Guests</span>
        </div>
        <div className="flex justify-between">
          <span>Chamber Seating:</span>
          <span className="text-ivory font-medium capitalize">{option.replace("-", " ")}</span>
        </div>
      </div>

      <p className="font-body text-xs text-silver/65 max-w-xs mx-auto leading-relaxed font-light">
        A confirmation details dispatch was triggered. To coordinate pre-orders or decoration changes, contact the concierge directly.
      </p>

      <div className="flex flex-col sm:flex-row gap-space-3 items-center justify-center pt-2">
        <a
          href={`https://wa.me/918665550100?text=I%20have%20confirmed%20my%20table%20reservation%20ID%20${token}.`}
          target="_blank"
          rel="noopener noreferrer"
          className="w-full sm:w-auto px-6 h-11 bg-emerald-700 text-ivory font-body text-[10px] uppercase tracking-wider font-semibold flex items-center justify-center gap-1.5 border border-emerald-500/20 hover:bg-emerald-600 transition-all duration-300 cursor-pointer outline-none"
        >
          Confirm via WhatsApp
        </a>
        <button
          onClick={handleHomeClick}
          className="w-full sm:w-auto px-6 h-11 border border-gold/30 hover:border-gold hover:bg-gold/5 text-gold font-body text-[10px] uppercase tracking-wider font-semibold flex items-center justify-center transition-all duration-300 focus-visible:ring-1 focus-visible:ring-gold outline-none cursor-pointer"
        >
          Back to Homepage
        </button>
      </div>
    </motion.div>
  );
}
