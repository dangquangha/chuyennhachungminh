import { SITE } from '../config/site'
import { trackEvent, withUtm } from '../lib/tracking'
import { ArrowRight, CartIcon } from './icons'
import Reveal from './Reveal'

export default function ShopeeCta() {
  return (
    <Reveal className="mt-10">
      <section aria-label="Cửa hàng Shopee" className="rounded-[20px] border border-line bg-white px-5 py-6 text-center shadow-soft">
        <p className="text-[0.95rem] text-muted">Còn nhiều món hay khác chúng mình chưa kịp đưa lên đây</p>
        <a
          href={withUtm(SITE.shopeeStoreUrl, { utm_content: 'store' })}
          target="_blank"
          rel="noopener noreferrer sponsored"
          onClick={() => trackEvent({ name: 'outbound_click', target: 'shopee_store', placement: 'after_products' })}
          className="btn-primary group mt-3 min-h-12 w-full px-6 text-base sm:w-auto"
        >
          <CartIcon className="size-5" />
          Xem tất cả sản phẩm trên Shopee
          <ArrowRight className="size-4 transition-transform group-hover:translate-x-0.5" />
        </a>
      </section>
    </Reveal>
  )
}
