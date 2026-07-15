import { z } from "zod";

// 1. Table Reservation Validation Schema
export const reservationSchema = z.object({
  date: z.string().min(1, "Date is required."),
  timeSlot: z.string().min(1, "Time slot is required."),
  guestsCount: z.number().min(1).max(50, "Direct reservation holds up to 50 guests."),
  diningOption: z.string().min(1, "Seating selection is required."),
  occasion: z.string().min(1, "Occasion category is required."),
  name: z.string().trim().min(2, "Name must be at least 2 characters."),
  phone: z.string().trim().regex(/^\+?[0-9]{10,12}$/, "Please enter a valid phone number (10-12 digits)."),
  email: z.string().trim().email("Please enter a valid email address."),
  specialRequests: z.string().max(500, "Requests details are capped at 500 characters.").optional(),
});

// 2. Concierge General Contact Schema
export const contactSchema = z.object({
  name: z.string().trim().min(2, "Name must be at least 2 characters."),
  phone: z.string().trim().regex(/^\+?[0-9]{10,12}$/, "Please enter a valid phone number (10-12 digits)."),
  email: z.string().trim().email("Please enter a valid email address."),
  subject: z.string().trim().min(3, "Subject must be at least 3 characters."),
  message: z.string().trim().min(10, "Message details must be at least 10 characters."),
});

// 3. Corporate & Private Events Inquiry Schema
export const eventInquirySchema = z.object({
  name: z.string().trim().min(2, "Name must be at least 2 characters."),
  phone: z.string().trim().regex(/^\+?[0-9]{10,12}$/, "Please enter a valid phone number (10-12 digits)."),
  email: z.string().trim().email("Please enter a valid email address."),
  eventType: z.string().min(1, "Event category is required."),
  guests: z.number().min(5, "Private event inquiry requires at least 5 guests."),
  date: z.string().min(1, "Date is required."),
  budget: z.string().min(1, "Budget guideline is required."),
  message: z.string().max(1000, "Custom requirements are capped at 1000 characters.").optional(),
});

// 4. Newsletter Signup Schema
export const newsletterSchema = z.object({
  email: z.string().trim().email("Please enter a valid email address."),
});
