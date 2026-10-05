import type { ReactNode } from 'react'
import type { Product } from '../types/product'
import { getProductUrl, handleProductClick } from '../lib/tracking'

interface Props {
  product: Product
  className: string
  children: ReactNode
}

/**
 * Bọc toàn bộ card thành một link lớn (dễ bấm bằng một tay).
 * Nếu sản phẩm chưa có link Shopee hợp lệ → render khối không bấm được.
 */
export default function ProductLink({ product, className, children }: Props) {
  const url = getProductUrl(product)

  if (!url) {
    return (
      <div className={className} aria-disabled="true">
        {children}
      </div>
    )
  }

  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer sponsored"
      onClick={() => handleProductClick(product)}
      aria-label={`${product.name}${product.price ? `, giá ${product.price}` : ''}. Xem ngay (mở tab mới)`}
      className={className}
    >
      {children}
    </a>
  )
}
