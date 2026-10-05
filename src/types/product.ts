import type { CATEGORIES } from '../config/site'

export type Category = (typeof CATEGORIES)[number]

export interface Product {
  id: string
  name: string
  description: string
  /** Đường dẫn ảnh, ví dụ "/products/ong-dung-dua.jpg" (đặt file trong thư mục public/products) */
  image: string
  category: Category
  price?: string
  badge?: string
  /** Bỏ trống hoặc chuỗi rỗng → card hiển thị trạng thái "Sắp có link" */
  shopeeUrl?: string
}
