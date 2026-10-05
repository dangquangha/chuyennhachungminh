# Chuyện nhà chúng mình: trang link sản phẩm

Landing page đặt trong bio TikTok. Trang tổng hợp những món đồ kênh đã review và dẫn người xem sang Shopee.

React 19 + TypeScript + Vite + Tailwind CSS v4. Mobile-first, HTML được prerender sẵn lúc build để trang hiện nhanh.

## Chạy project

Yêu cầu Node 20 trở lên.

```bash
npm install
npm run dev        # chạy local tại http://localhost:5173
npm run build      # build production vào thư mục dist/
npm run preview    # xem thử bản build
```

Thư mục `dist/` là site tĩnh, deploy được lên Vercel, Netlify, Cloudflare Pages, GitHub Pages…

## Cập nhật sản phẩm

**Chỉ cần sửa [`src/data/products.ts`](src/data/products.ts).** Không cần đụng vào component.

```ts
{
  id: '10',                               // không trùng với sản phẩm khác
  name: 'Tên sản phẩm',
  description: 'Một câu ngắn, giọng kể chuyện',
  image: '/products/ten-anh.webp',        // đặt file vào public/products/
  category: 'Đồ bếp',                     // phải nằm trong CATEGORIES (src/config/site.ts)
  price: '129.000đ',                      // tuỳ chọn
  badge: 'Đáng mua',                      // tuỳ chọn
  shopeeUrl: 'https://s.shopee.vn/xxxx',  // để trống → card hiện "Sắp có link"
}
```

- Thứ tự trong mảng chính là thứ tự hiển thị.
- Bộ lọc danh mục chỉ hiện khi có từ 6 sản phẩm trở lên và ít nhất 2 danh mục. Danh mục chưa có sản phẩm tự động bị ẩn.
- Nếu mảng rỗng, trang hiện thông báo "Chúng mình đang cập nhật…".

**Ảnh sản phẩm:** dùng ảnh vuông khoảng 800×800, định dạng `.webp` hoặc `.jpg`, dung lượng dưới 100KB. Ảnh `.svg` trong `public/products/` hiện chỉ là ảnh minh hoạ mẫu.

## Thông tin kênh và link

Sửa trong [`src/config/site.ts`](src/config/site.ts): tên kênh, tagline, avatar, TikTok handle/URL, link Shopee store, danh mục và tham số UTM.

Khi đã có domain thật, thay `https://chuyennhachungminh.vn/` trong [`index.html`](index.html) (canonical, `og:url`, `og:image`).

## Tracking

Toàn bộ code tracking nằm trong [`src/lib/tracking.ts`](src/lib/tracking.ts):

- `handleProductClick(product, placement)`: được gọi mỗi khi bấm vào sản phẩm.
- `trackEvent(...)`: tự gửi event tới **GA4** (`gtag`), **Meta Pixel** (`fbq`) và **TikTok Pixel** (`ttq`) nếu script tương ứng đã được nhúng. Chưa nhúng thì không có gì xảy ra.
- Mọi link ra ngoài đều được gắn UTM (`utm_source=tiktok&utm_medium=bio_link…`), riêng link sản phẩm có thêm `utm_content=<id>`. Đặt `UTM_PARAMS = null` để tắt.

Để bật analytics, dán snippet của GA4, Meta hoặc TikTok vào `<head>` của `index.html`. Không cần sửa component.

Card sản phẩm dùng thẻ `<a target="_blank">` thay vì `window.open`, vì cách này ổn định hơn trong in-app browser của TikTok, không bị chặn popup và vẫn hỗ trợ nhấn giữ để copy link.

## Cấu trúc

```
src/
  config/site.ts        Thông tin kênh, link, danh mục, UTM
  data/products.ts      Danh sách sản phẩm (file duy nhất cần sửa thường xuyên)
  types/product.ts      Kiểu dữ liệu Product
  lib/tracking.ts       Click tracking, UTM, kiểm tra URL
  hooks/useInView.ts    IntersectionObserver cho hiệu ứng fade-in
  components/
    Header                            Phần đầu trang (avatar, tên kênh, TikTok)
    ProductSection, CategoryFilter    Danh sách và bộ lọc (filter dính trên đầu khi cuộn)
    ProductCard, ProductLink,
    ProductImage, ProductCta, Badge   Các phần của card sản phẩm
    ShopeeCta, TikTokSection, Footer
    EmptyState, Reveal, SectionTitle, icons
  entry-server.tsx      Dùng khi build để prerender HTML
scripts/prerender.mjs   Ghi HTML đã render vào dist/index.html
```

## Ghi chú thiết kế

- Màu `#E8897D` dùng cho điểm nhấn. Nút CTA dùng tông đậm hơn `#B85246` để chữ trắng đạt chuẩn tương phản WCAG AA (≥ 4.5:1).
- Chữ phụ dùng `#6B625D` thay cho `#777`, vì `#777` trên nền kem không đạt chuẩn AA.
- Dưới 360px (iPhone SE đời 1), card sản phẩm chuyển sang dạng ngang để không quá cao. Từ 360px trở lên là lưới 2 cột, từ 640px trở lên là 3 cột.
- Animation tự tắt khi người dùng bật "Giảm chuyển động" trong cài đặt máy.
