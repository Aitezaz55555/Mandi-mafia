import { reservationSchema } from "../validations";
import { BookingDetails } from "@/components/sections/reservations/ReservationForm";

export class ReservationService {
  /**
   * Submit table reservation details to the backend registry
   * Future Integration: Bind direct supabase.from('reservations').insert() or fetch('/api/reservations')
   */
  static async submitReservation(payload: BookingDetails): Promise<{ success: boolean; token: string }> {
    // 1. Zod runtime verification checks
    const validation = reservationSchema.safeParse(payload);
    
    if (!validation.success) {
      throw new Error(validation.error.issues[0]?.message || "Invalid payload schema.");
    }

    // 2. Mock network latency
    await new Promise((resolve) => setTimeout(resolve, 800));

    // 3. Generate mock token registry (hook location for Firebase / Supabase)
    const token = "MM-" + Math.floor(100000 + Math.random() * 900000);
    
    // 4. Client-side database storage simulation
    if (typeof window !== "undefined") {
      const existing = localStorage.getItem("mandi_mafia_reservations");
      const list = existing ? JSON.parse(existing) : [];
      list.push({
        ...payload,
        token,
        status: "CONFIRMED",
        createdAt: new Date().toISOString(),
      });
      localStorage.setItem("mandi_mafia_reservations", JSON.stringify(list));
      console.log("Database Sync Completed: Stored Reservation", token);
    }
    
    return {
      success: true,
      token,
    };
  }
}
