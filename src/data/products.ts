import type { Product } from '../types/product'

/**
 * DANH SÁCH SẢN PHẨM
 * ------------------------------------------------------------------
 * Chỉ cần sửa file này để thêm / sửa / xóa sản phẩm.
 *
 * - id:          mã duy nhất (không trùng nhau)
 * - name:        tên sản phẩm
 * - description: một câu ngắn, giọng kể chuyện ("Giúp căn bếp gọn hơn")
 * - image:       ảnh trong thư mục public/products, nên là ảnh vuông ~800x800, .webp/.jpg
 * - category:    một trong các danh mục trong src/config/site.ts
 * - price:       (tuỳ chọn) ví dụ "129.000đ"
 * - badge:       (tuỳ chọn) ví dụ "Đáng mua", "Bán chạy", "Mới"
 * - shopeeUrl:   link Shopee (affiliate). Để trống → card hiện "Sắp có link"
 *
 * Thứ tự trong mảng = thứ tự hiển thị trên trang.
 */
export const products: Product[] = [
  {
    id: '01',
    name: 'Ống đựng đũa, dao, thớt đa năng',
    description: 'Giúp căn bếp gọn gàng và sạch sẽ hơn hẳn',
    image: '/products/ong-dung-dua.svg',
    category: 'Đồ bếp',
    price: '159.000đ',
    badge: 'Đáng mua',
    shopeeUrl: 'https://shopee.vn/',
  },
  {
    id: '02',
    name: 'Kệ gia vị 2 tầng xoay',
    description: 'Lọ nào cũng thấy, lấy một tay là xong',
    image: '/products/ke-gia-vi.svg',
    category: 'Đồ bếp',
    price: '189.000đ',
    badge: 'Bán chạy',
    shopeeUrl: 'https://shopee.vn/',
  },
  {
    id: '03',
    name: 'Bộ hộp đựng thực phẩm có nắp',
    description: 'Tủ lạnh nhà mình ngăn nắp từ ngày có bộ này',
    image: '/products/hop-dung-thuc-pham.svg',
    category: 'Đồ gia dụng',
    price: '235.000đ',
    shopeeUrl: 'https://shopee.vn/',
  },
  {
    id: '04',
    name: 'Móc dán tường không khoan',
    description: 'Treo đồ chắc chắn mà không làm hỏng tường',
    image: '/products/moc-dan-tuong.svg',
    category: 'Đồ tiện ích',
    price: '39.000đ',
    shopeeUrl: 'https://shopee.vn/',
  },
  {
    id: '05',
    name: 'Đèn ngủ cảm ứng ánh vàng',
    description: 'Ánh sáng dịu, đêm dậy cho bé ăn không chói mắt',
    image: '/products/den-ngu.svg',
    category: 'Phòng ngủ',
    price: '99.000đ',
    badge: 'Mới',
    shopeeUrl: 'https://shopee.vn/',
  },
  {
    id: '06',
    name: 'Túi hút chân không đựng chăn màn',
    description: 'Tủ quần áo rộng ra gấp đôi khi cất đồ mùa đông',
    image: '/products/tui-hut-chan-khong.svg',
    category: 'Phòng ngủ',
    price: '119.000đ',
    shopeeUrl: 'https://shopee.vn/',
  },
  {
    id: '07',
    name: 'Cây lau nhà tự vắt',
    description: 'Lau nhà nhanh, không phải cúi người vắt tay',
    image: '/products/cay-lau-nha.svg',
    category: 'Đồ gia dụng',
    price: '265.000đ',
    shopeeUrl: 'https://shopee.vn/',
  },
  {
    id: '08',
    name: 'Bình giữ nhiệt cho cả nhà',
    description: 'Giữ nước ấm cả ngày, bé mang đi học rất tiện',
    image: '/products/binh-giu-nhiet.svg',
    category: 'Đồ cho gia đình',
    price: '145.000đ',
    shopeeUrl: 'https://shopee.vn/',
  },
  {
    id: '09',
    name: 'Kệ xe đẩy 3 tầng có bánh xe',
    description: 'Đẩy đi đâu cũng được, góc nào cũng gọn',
    image: '/products/ke-xe-day.svg',
    category: 'Đồ tiện ích',
    // Ví dụ sản phẩm chưa có link → card hiển thị trạng thái "Sắp có link"
    shopeeUrl: '',
  },
]
