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
        className={`group flex w-full flex-row overflow-hidden min-[360px]:flex-col rounded-[18px] border border-line bg-white shadow-soft transition duration-200 ${
          available ? 'hover:-translate-y-0.5 hover:shadow-lift' : 'opacity-80'
        }`}
      >
        <div className="relative w-[38%] shrink-0 min-[360px]:w-auto">
          <ProductImage src={product.image} alt={product.name} priority={priority} className="aspect-square max-[359px]:aspect-auto max-[359px]:h-full max-[359px]:min-h-32" />
          {product.badge && (
            <div className="absolute top-2.5 left-2.5">
              <Badge>{product.badge}</Badge>
            </div>
          )}
        </div>

        <div className="flex min-w-0 flex-1 flex-col p-3 sm:p-4">
          <h3 className="line-clamp-2 text-[0.95rem] leading-snug font-semibold text-ink">{product.name}</h3>
          <p className="mt-1 line-clamp-2 text-[0.82rem] leading-relaxed text-muted italic">“{product.description}”</p>
          {product.price && <p className="mt-2 text-[0.95rem] font-bold text-primary-strong">{product.price}</p>}
          <div className="mt-auto pt-3">
            <ProductCta available={available} />
          </div>
        </div>
      </ProductLink>
    </li>
  )
}
