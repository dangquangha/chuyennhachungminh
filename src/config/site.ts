/**
 * Thông tin chung của kênh. Sửa các link ở đây, không cần đụng vào component.
 */
export const SITE = {
  name: 'Chuyện nhà chúng mình',
  tagline: 'Mỗi ngày một chút chuyện hay cho căn nhà nhỏ ❤️',
  avatar: '/avatar.svg',
  // TODO: thay bằng handle và link thật của kênh
  tiktokHandle: '@chuyennhachungminh',
  tiktokUrl: 'https://www.tiktok.com/@chuyennhachungminh',
  shopeeStoreUrl: 'https://shopee.vn/',
  /** Năm hiển thị trong footer */
  copyrightYear: 2026,
} as const

/** Danh mục sản phẩm. Thêm/bớt danh mục ở đây; filter tự ẩn danh mục chưa có sản phẩm. */
export const CATEGORIES = [
  'Đồ bếp',
  'Đồ gia dụng',
  'Đồ tiện ích',
  'Phòng ngủ',
  'Đồ cho gia đình',
] as const

/** Thêm UTM vào mọi link ra ngoài. Để `null` nếu không muốn gắn UTM. */
export const UTM_PARAMS: Record<string, string> | null = {
  utm_source: 'tiktok',
  utm_medium: 'bio_link',
  utm_campaign: 'chuyen_nha_chung_minh',
}
