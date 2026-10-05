import { SITE } from '../config/site'
import { trackEvent, withUtm } from '../lib/tracking'

export default function Footer() {
  return (
    <footer className="mt-10 border-t border-line pt-6 pb-[max(2rem,env(safe-area-inset-bottom))] text-center">
      <nav aria-label="Liên kết" className="flex justify-center gap-2">
        <a
          href={SITE.tiktokUrl}
          target="_blank"
          rel="noopener noreferrer"
          onClick={() => trackEvent({ name: 'outbound_click', target: 'tiktok', placement: 'footer' })}
          className="inline-flex min-h-11 items-center rounded-full px-4 text-sm font-medium text-ink hover:text-primary-strong"
        >
          TikTok
        </a>
        <span aria-hidden="true" className="self-center text-line">•</span>
        <a
          href={withUtm(SITE.shopeeStoreUrl, { utm_content: 'footer' })}
          target="_blank"
          rel="noopener noreferrer sponsored"
          onClick={() => trackEvent({ name: 'outbound_click', target: 'shopee_store', placement: 'footer' })}
          className="inline-flex min-h-11 items-center rounded-full px-4 text-sm font-medium text-ink hover:text-primary-strong"
        >
          Shopee
        </a>
      </nav>
      <p className="mt-2 text-sm text-muted">Chia sẻ những điều nhỏ bé giúp cuộc sống dễ dàng hơn ❤️</p>
      <p className="mt-1 text-xs text-muted">
        © {SITE.copyrightYear} {SITE.name}
      </p>
    </footer>
  )
}
