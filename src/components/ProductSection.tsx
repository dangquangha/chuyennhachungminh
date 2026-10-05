import { useMemo, useRef, useState } from 'react'
import type { Product } from '../types/product'
import { CATEGORIES } from '../config/site'
import CategoryFilter, { ALL } from './CategoryFilter'
import ProductCard from './ProductCard'
import SectionTitle from './SectionTitle'
import Reveal from './Reveal'

/** Chỉ hiện bộ lọc khi đủ sản phẩm và có từ 2 danh mục trở lên */
const MIN_PRODUCTS_FOR_FILTER = 6

export default function ProductSection({ products }: { products: Product[] }) {
  const [active, setActive] = useState<string>(ALL)
  const sectionRef = useRef<HTMLElement>(null)

  const { categories, counts } = useMemo(() => {
    const counts: Record<string, number> = { [ALL]: products.length }
    for (const p of products) counts[p.category] = (counts[p.category] ?? 0) + 1
    return { categories: CATEGORIES.filter((c) => counts[c]), counts }
  }, [products])

  const showFilter = products.length >= MIN_PRODUCTS_FOR_FILTER && categories.length > 1
  const visible = active === ALL ? products : products.filter((p) => p.category === active)

  const handleChange = (cat: string) => {
    setActive(cat)
    // Nếu đã cuộn qua đầu danh sách, đưa người dùng về đầu để thấy kết quả lọc
    const el = sectionRef.current
    if (el && el.getBoundingClientRect().top < 0) el.scrollIntoView({ block: 'start' })
  }

  return (
    <section ref={sectionRef} id="san-pham" aria-labelledby="products-title" className="mt-8 scroll-mt-2">
      <SectionTitle id="products-title" title="Đồ hay nhà mình đã dùng" subtitle={`${products.length} món đã được chia sẻ trên TikTok`} />

      {showFilter && <CategoryFilter categories={categories} active={active} onChange={handleChange} counts={counts} />}

      <p className="sr-only" aria-live="polite">
        Đang hiển thị {visible.length} sản phẩm{active !== ALL ? ` trong danh mục ${active}` : ''}
      </p>

      {visible.length > 0 ? (
        <Reveal>
          <ul key={active} className="mt-2 grid grid-cols-1 gap-3 md:grid-cols-2 md:gap-4">
            {/* 3 card đầu nằm trong màn hình đầu tiên → tải ảnh ngay */}
            {visible.map((p, i) => (
              <ProductCard key={p.id} product={p} priority={i < 3} />
            ))}
          </ul>
        </Reveal>
      ) : (
        <p className="mt-6 rounded-[18px] border border-dashed border-line bg-white px-5 py-8 text-center text-muted">
          Danh mục này chưa có sản phẩm, quay lại sau nhé ❤️
        </p>
      )}
    </section>
  )
}
