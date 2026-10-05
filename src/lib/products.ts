import type { Product } from '../types/product'

/**
 * Sắp xếp theo `order` tăng dần. Sản phẩm không có `order` xếp cuối;
 * trùng `order` (hoặc cùng không có) thì giữ thứ tự trong file (Array.sort là stable).
 */
export function sortProducts(products: readonly Product[]): Product[] {
  const rank = (p: Product) => p.order ?? Number.MAX_SAFE_INTEGER
  return [...products].sort((a, b) => rank(a) - rank(b))
}
