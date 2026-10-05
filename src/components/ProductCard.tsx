import type { Product } from '../types/product'
import { hasValidUrl } from '../lib/tracking'
import ProductLink from './ProductLink'
import ProductImage from './ProductImage'
import ProductCta from './ProductCta'
import Badge from './Badge'

export default function ProductCard({ product, priority }: { product: Product; priority?: boolean }) {
  const available = hasValidUrl(product.shopeeUrl)

  return (
    <li className="flex">
      <ProductLink
        product={product}
        className={`group flex w-full flex-row overflow-hidden rounded-[18px] border border-line bg-white shadow-soft transition duration-200 ${
          available ? 'hover:-translate-y-0.5 hover:shadow-lift' : 'opacity-80'
        }`}
      >
        {/* Card ngang: ảnh vuông cố định bên trái (không bị cắt dù nội dung cao hơn) */}
        <div className="relative my-3 ml-3 w-28 shrink-0 self-center min-[375px]:w-32 sm:w-40 md:w-28 lg:w-36">
          <ProductImage src={product.image} alt={product.name} priority={priority} className="aspect-square rounded-[14px]" />
          {product.badge && (
            <div className="absolute top-1.5 left-1.5">
              <Badge>{product.badge}</Badge>
            </div>
          )}
        </div>

        <div className="flex min-w-0 flex-1 flex-col justify-center p-3 sm:p-4">
          <h3 className="line-clamp-2 text-[0.95rem] leading-snug font-semibold text-ink">{product.name}</h3>
          <p className="mt-1 line-clamp-3 text-[0.82rem] leading-relaxed text-muted italic">“{product.description}”</p>
          {product.price && <p className="mt-2 text-[0.95rem] font-bold text-primary-strong">{product.price}</p>}
          <div className="mt-auto pt-3">
            <ProductCta available={available} />
          </div>
        </div>
      </ProductLink>
    </li>
  )
}
