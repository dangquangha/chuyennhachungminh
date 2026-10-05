/**
 * Thông tin chung của kênh. Sửa các link ở đây, không cần đụng vào component.
 */
export const SITE = {
  name: 'Chuyện nhà chúng mình',
  tagline: 'Mỗi ngày một chút chuyện hay cho căn nhà nhỏ ❤️',
  avatar: '/avatar.svg',
  tiktokHandle: '@chuyennhachungminh_',
  tiktokUrl: 'https://www.tiktok.com/@chuyennhachungminh_',
} as const

/** Danh mục sản phẩm. Thêm/bớt danh mục ở đây; filter tự ẩn danh mục chưa có sản phẩm. */
export const CATEGORIES = [
  'Đồ bếp',
  'Đồ gia dụng',
  'Đồ tiện ích',
  'Phòng ngủ',
  'Đồ cho gia đình',
  'Thời trang',
] as const
