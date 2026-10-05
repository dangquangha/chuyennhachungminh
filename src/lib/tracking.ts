import { UTM_PARAMS } from '../config/site'
import type { Product } from '../types/product'

/**
 * Lớp tracking dùng chung. Hiện tại chỉ log khi dev.
 * Khi có ID tracking, gắn script vào index.html rồi bỏ comment các dòng tương ứng bên dưới.
 */

type TrackingEvent =
  | { name: 'product_click'; product: Product }
  | { name: 'outbound_click'; target: 'shopee_store' | 'tiktok'; placement: string }

declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void
    fbq?: (...args: unknown[]) => void
    ttq?: { track: (event: string, data?: Record<string, unknown>) => void }
  }
}

export function trackEvent(event: TrackingEvent): void {
  if (import.meta.env.DEV) console.info('[track]', event)

  try {
    if (event.name === 'product_click') {
      const { product } = event
      // Google Analytics 4
      window.gtag?.('event', 'select_item', {
        items: [{ item_id: product.id, item_name: product.name, item_category: product.category }],
      })
      // Meta Pixel
      window.fbq?.('track', 'ViewContent', { content_ids: [product.id], content_name: product.name })
      // TikTok Pixel
      window.ttq?.track('ClickButton', { content_id: product.id, content_name: product.name })
    } else {
      window.gtag?.('event', 'click', { link_target: event.target, placement: event.placement })
    }
  } catch {
    // Tracking không bao giờ được chặn việc chuyển trang
  }
}

/** Gắn UTM vào URL (không ghi đè tham số đã có sẵn). */
export function withUtm(url: string, extra?: Record<string, string>): string {
  if (!UTM_PARAMS) return url
  try {
    const u = new URL(url)
    for (const [key, value] of Object.entries({ ...UTM_PARAMS, ...extra })) {
      if (!u.searchParams.has(key)) u.searchParams.set(key, value)
    }
    return u.toString()
  } catch {
    return url
  }
}

export function hasValidUrl(url?: string): url is string {
  if (!url) return false
  try {
    const { protocol } = new URL(url)
    return protocol === 'https:' || protocol === 'http:'
  } catch {
    return false
  }
}

export function getProductUrl(product: Product): string | null {
  return hasValidUrl(product.shopeeUrl) ? withUtm(product.shopeeUrl, { utm_content: product.id }) : null
}

/**
 * Gọi khi người dùng bấm vào sản phẩm.
 * Việc mở tab mới do thẻ <a target="_blank"> đảm nhiệm (ổn định hơn window.open
 * trong in-app browser của TikTok và không bị chặn popup), hàm này chỉ ghi nhận click.
 */
export function handleProductClick(product: Product): void {
  trackEvent({ name: 'product_click', product })
}
