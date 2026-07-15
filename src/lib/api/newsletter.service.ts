import { newsletterSchema } from "../validations";

export class NewsletterService {
  /**
   * Submit email address to the newsletter syndicate list
   * Future Integration: Bind Mailchimp/SendGrid API or direct database registry
   */
  static async subscribe(email: string): Promise<boolean> {
    // 1. Zod runtime validation check
    const validation = newsletterSchema.safeParse({ email });
    
    if (!validation.success) {
      throw new Error(validation.error.issues[0]?.message || "Invalid email address format.");
    }

    // 2. Mock network latency
    await new Promise((resolve) => setTimeout(resolve, 500));

    // 3. Client-side database storage simulation
    if (typeof window !== "undefined") {
      const existing = localStorage.getItem("mandi_mafia_newsletter");
      const list = existing ? JSON.parse(existing) : [];
      list.push({
        email,
        createdAt: new Date().toISOString(),
      });
      localStorage.setItem("mandi_mafia_newsletter", JSON.stringify(list));
      console.log("Database Sync Completed: Registered Subscriber", email);
    }

    return true;
  }
}
