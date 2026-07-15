import { eventInquirySchema } from "../validations";

interface EventPayload {
  name: string;
  phone: string;
  email: string;
  eventType: string;
  guests: number;
  date: string;
  budget: string;
  message: string;
}

export class EventsService {
  /**
   * Submit event consultation inquiry details
   * Future Integration: Bind supabase.from('event_inquiries').insert() or custom API
   */
  static async submitInquiry(payload: EventPayload): Promise<boolean> {
    // 1. Zod runtime verification checks
    const validation = eventInquirySchema.safeParse(payload);
    
    if (!validation.success) {
      throw new Error(validation.error.issues[0]?.message || "Invalid payload schema.");
    }

    // 2. Mock network latency
    await new Promise((resolve) => setTimeout(resolve, 800));

    // 3. Client-side database storage simulation
    if (typeof window !== "undefined") {
      const existing = localStorage.getItem("mandi_mafia_events");
      const list = existing ? JSON.parse(existing) : [];
      list.push({
        ...payload,
        createdAt: new Date().toISOString(),
      });
      localStorage.setItem("mandi_mafia_events", JSON.stringify(list));
      console.log("Database Sync Completed: Stored Event Inquiry", payload.email);
    }

    return true;
  }
}
