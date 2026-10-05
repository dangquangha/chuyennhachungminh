import type { Product } from '../types/product'

/**
 * DANH SÁCH SẢN PHẨM
 * ------------------------------------------------------------------
 * Chỉ cần sửa file này để thêm / sửa / xóa sản phẩm.
 *
 * - id:          mã duy nhất (không trùng nhau)
 * - name:        tên sản phẩm
 * - description: một câu ngắn, giọng kể chuyện ("Giúp căn bếp gọn hơn")
 * - image:       (tuỳ chọn) ảnh trong public/products hoặc link ảnh, nên là ảnh vuông ~800x800.
 *                Bỏ trống → dùng ảnh mặc định (public/products/default.svg)
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
    name: 'Tripod điện thoại rảnh tay',
    description: 'Quay TikTok hay xem video nấu ăn đều vững',
    category: 'Đồ tiện ích',
    shopeeUrl: 'https://s.shopee.vn/40gx90LFmr',
    image: 'https://down-vn.img.susercontent.com/file/vn-11134207-7ras8-m2j7quvccyb8a1.webp',
  },
  {
    id: '02',
    name: 'Búa đập gừng tỏi, dần thịt',
    description: 'Một nhát là tỏi dập xong, thịt mềm hơn',
    category: 'Đồ bếp',
    shopeeUrl: 'https://s.shopee.vn/4VdDjvJLly',
  },
  {
    id: '03',
    name: 'Thùng rác treo tường gọn bếp',
    description: 'Nhặt rau gọt củ xong bỏ rác ngay tay',
    category: 'Đồ gia dụng',
    shopeeUrl: 'https://s.shopee.vn/4LJnXcJz6x',
  },
  {
    id: '04',
    name: 'Giấy vệ sinh treo tường tiện rút',
    description: 'Treo gọn trên tường, cần là rút một tờ',
    category: 'Đồ gia dụng',
    shopeeUrl: 'https://s.shopee.vn/4qG48XI564',
  },
  {
    id: '05',
    name: 'Dụng cụ xay tỏi ớt hành',
    description: 'Kéo vài cái là nhuyễn, khỏi băm cay tay',
    category: 'Đồ bếp',
    shopeeUrl: 'https://s.shopee.vn/4fwdwEIiR3',
  },
  {
    id: '06',
    name: 'Giày Mary Jane đỏ thoáng chân',
    description: 'Dáng xinh, thoáng khí, dễ phối đồ',
    category: 'Thời trang',
    shopeeUrl: 'https://s.shopee.vn/9zyFoYd1ZS',
  },
]
