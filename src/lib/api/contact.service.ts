import { contactSchema } from "../validations";

interface ContactPayload {
  name: string;
  phone: string;
  email: string;
  subject: string;
  message: string;
}

export class ContactService {
  /**
   * Submit contact form message to concierge inbox
   * Future Integration: Bind direct supabase.from('contacts').insert() or REST mailer
   */
  static async submitInquiry(payload: ContactPayload): Promise<boolean> {
    // 1. Zod runtime verification checks
    const validation = contactSchema.safeParse(payload);
    
    if (!validation.success) {
      throw new Error(validation.error.issues[0]?.message || "Invalid payload schema.");
    }

    // 2. Mock network latency
    await new Promise((resolve) => setTimeout(resolve, 600));

    // 3. Client-side database storage simulation
    if (typeof window !== "undefined") {
      const existing = localStorage.getItem("mandi_mafia_inquiries");
      const list = existing ? JSON.parse(existing) : [];
      list.push({
        ...payload,
        createdAt: new Date().toISOString(),
      });
      localStorage.setItem("mandi_mafia_inquiries", JSON.stringify(list));
      console.log("Database Sync Completed: Stored Inquiry", payload.email);
    }

    return true;
  }
}
