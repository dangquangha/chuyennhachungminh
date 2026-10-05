import type { CATEGORIES } from '../config/site'

export type Category = (typeof CATEGORIES)[number]

export interface Product {
  id: string
  name: string
  description: string
  /**
   * Ảnh sản phẩm: đường dẫn trong public (ví dụ "/products/tripod.jpg") hoặc link ảnh đầy đủ.
   * Bỏ trống → dùng ảnh mặc định.
   */
  image?: string
  category: Category
  price?: string
  badge?: string
  /** Bỏ trống hoặc chuỗi rỗng → card hiển thị trạng thái "Sắp có link" */
  shopeeUrl?: string
}
