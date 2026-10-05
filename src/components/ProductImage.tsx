import { useEffect, useRef, useState } from 'react'

/** Ảnh dùng khi sản phẩm chưa có ảnh hoặc link ảnh bị lỗi */
export const DEFAULT_PRODUCT_IMAGE = '/products/default.svg'

interface Props {
  src?: string
  alt: string
  className?: string
  /** true cho ảnh nằm trong màn hình đầu tiên → tải ngay thay vì lazy */
  priority?: boolean
}

/** Ảnh sản phẩm có khung tỉ lệ cố định (tránh layout shift), tự chuyển sang ảnh mặc định khi thiếu hoặc lỗi. */
export default function ProductImage({ src, alt, className = '', priority = false }: Props) {
  const [failed, setFailed] = useState(false)
  const imgRef = useRef<HTMLImageElement>(null)

  // HTML được prerender nên ảnh có thể đã lỗi trước khi React gắn onError → kiểm tra lại khi mount
  useEffect(() => {
    const img = imgRef.current
    if (img?.complete && img.naturalWidth === 0) setFailed(true)
  }, [])
  const imageSrc = src?.trim() && !failed ? src : DEFAULT_PRODUCT_IMAGE

  return (
    <div className={`relative overflow-hidden bg-blush ${className}`}>
      <img
        ref={imgRef}
        src={imageSrc}
        alt={alt}
        width={400}
        height={400}
        loading={priority ? 'eager' : 'lazy'}
        decoding="async"
        fetchPriority={priority ? 'high' : 'auto'}
        onError={() => setFailed(true)}
        className="absolute inset-0 size-full object-cover transition duration-300 group-hover:scale-[1.03]"
      />
    </div>
  )
}
