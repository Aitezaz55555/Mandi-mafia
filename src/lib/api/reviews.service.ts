import { reviewsList, Review } from "../reviews-data";

export class ReviewsService {
  /**
   * Fetch customer reviews and rating summaries
   * Future Integration: Bind Google Places API reviews feed or database collection
   */
  static async getReviews(sort?: "newest" | "highest"): Promise<Review[]> {
    await new Promise((resolve) => setTimeout(resolve, 300));

    const list = [...reviewsList];
    if (sort === "highest") {
      return list.sort((a, b) => b.rating - a.rating);
    }
    
    return list.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
  }
}
