import type { Product } from '../types/product'

/**
 * DANH SÁCH SẢN PHẨM
 * ------------------------------------------------------------------
 * Chỉ cần sửa file này để thêm / sửa / xóa sản phẩm.
 *
 * - id:          mã duy nhất (không trùng nhau)
 * - order:       (tuỳ chọn) thứ tự hiển thị, số nhỏ hiện trước (1, 2, 3…).
 *                Muốn đưa món nào lên đầu chỉ cần đổi số, không cần di chuyển cả khối.
 * - name:        tên sản phẩm
 * - description: một câu ngắn, giọng kể chuyện ("Giúp căn bếp gọn hơn")
 * - image:       (tuỳ chọn) ảnh trong public/products hoặc link ảnh, nên là ảnh vuông ~800x800.
 *                Bỏ trống → dùng ảnh mặc định (public/products/default.svg)
 * - category:    một trong các danh mục trong src/config/site.ts
 * - price:       (tuỳ chọn) ví dụ "129.000đ"
 * - badge:       (tuỳ chọn) ví dụ "Đáng mua", "Bán chạy", "Mới"
 * - shopeeUrl:   link Shopee (affiliate). Để trống → card hiện "Sắp có link"
 *
 * Sản phẩm không có order sẽ xếp sau cùng, theo thứ tự trong mảng.
 */
export const products: Product[] = [
  {
    id: '01',
    order: 1,
    name: 'Tripod điện thoại rảnh tay',
    description: 'Quay TikTok hay xem video nấu ăn đều vững',
    category: 'Đồ tiện ích',
    shopeeUrl: 'https://s.shopee.vn/40gx90LFmr',
    image: 'https://down-vn.img.susercontent.com/file/vn-11134207-7ras8-m2j7quvccyb8a1.webp',
  },
  {
    id: '02',
    order: 6,
    name: 'Búa đập gừng tỏi, dần thịt',
    description: 'Một nhát là tỏi dập xong, thịt mềm hơn',
    category: 'Đồ bếp',
    shopeeUrl: 'https://s.shopee.vn/4VdDjvJLly',
    image: 'https://down-vn.img.susercontent.com/file/sg-11134201-824gl-mpuw0t88nytq49.webp',
  },
  {
    id: '03',
    order: 5,
    name: 'Thùng rác treo tường gọn bếp',
    description: 'Nhặt rau gọt củ xong bỏ rác ngay tay',
    category: 'Đồ gia dụng',
    shopeeUrl: 'https://s.shopee.vn/4LJnXcJz6x',
    image: 'https://down-vn.img.susercontent.com/file/vn-11134207-7qukw-lj2yiwgowj6494.webp',
  },
  {
    id: '04',
    order: 7,
    name: 'Giấy vệ sinh treo tường tiện rút',
    description: 'Treo gọn trên tường, cần là rút một tờ',
    category: 'Đồ gia dụng',
    shopeeUrl: 'https://s.shopee.vn/4qG48XI564',
    image: 'https://down-vn.img.susercontent.com/file/vn-11134207-81ztc-mtbadfv8b4lg3e.webp',
  },
  {
    id: '05',
    order: 3,
    name: 'Dụng cụ xay tỏi ớt hành',
    description: 'Kéo vài cái là nhuyễn, khỏi băm cay tay',
    category: 'Đồ bếp',
    shopeeUrl: 'https://s.shopee.vn/4fwdwEIiR3',
    image: 'https://down-vn.img.susercontent.com/file/vn-11134207-81ztc-mpexnbj4fbim75.webp',
  },
  {
    id: '06',
    order: 6,
    name: 'Giày Mary Jane đỏ thoáng chân',
    description: 'Dáng xinh, thoáng khí, dễ phối đồ',
    category: 'Thời trang',
    shopeeUrl: 'https://s.shopee.vn/9zyFoYd1ZS',
    image: 'https://down-vn.img.susercontent.com/file/cn-11134207-7ras8-mc31v6ec8xu3bb.webp',
  },
  {
    id: '07',
    order: 4,
    name: 'Nồi chiên không dầu 20L cỡ lớn',
    description: 'Lòng nồi 20L rộng rãi, nấu một mẻ đủ cả nhà ăn',
    category: 'Đồ bếp',
    shopeeUrl: 'https://s.shopee.vn/3VkhysQqtR',
    image: 'https://down-vn.img.susercontent.com/file/vn-11134207-820l4-miv04wey9c790b.webp',
  },
  {
    id: '08',
    order: 8,
    name: 'Máy chạy bộ gấp gọn MY-HI',
    description: 'Chạy bộ ngay trong nhà, xong gập lại cất gọn góc phòng',
    category: 'Đồ cho gia đình',
    shopeeUrl: 'https://s.shopee.vn/8fSmqmBzWb',
    image: 'https://down-vn.img.susercontent.com/file/vn-11134207-81ztc-mrlam1ppgflz7a.webp',
  },
  {
    id: '09',
    order: 2,
    name: 'Máy xay thịt đa năng',
    description: 'Xay thịt, tỏi ớt hay rau củ đều nhanh, đỡ băm mỏi tay',
    category: 'Đồ bếp',
    shopeeUrl: 'https://s.shopee.vn/3B7qeDsuK2',
    image: 'https://down-vn.img.susercontent.com/file/vn-11134207-820l4-mjpdzycn2tc1ee.webp',
  },
]
