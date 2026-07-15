import { galleryItemsList, GalleryItem } from "../gallery-data";

export class GalleryService {
  /**
   * Fetch visual assets list from local mock or database
   * Future Integration: Bind fetch('/api/gallery') or direct database load
   */
  static async getGalleryItems(category?: string): Promise<GalleryItem[]> {
    await new Promise((resolve) => setTimeout(resolve, 300));
    
    if (!category || category === "all") {
      return galleryItemsList;
    }
    
    return galleryItemsList.filter((item) => item.category === category);
  }
}
