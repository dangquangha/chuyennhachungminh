import { useState } from 'react'

interface Props {
  src: string
  alt: string
  className?: string
  /** true cho ảnh nằm trong màn hình đầu tiên → tải ngay thay vì lazy */
  priority?: boolean
}

/** Ảnh sản phẩm có khung tỉ lệ cố định (tránh layout shift) và fallback khi ảnh lỗi. */
export default function ProductImage({ src, alt, className = '', priority = false }: Props) {
  const [failed, setFailed] = useState(false)

  return (
    <div className={`relative overflow-hidden bg-blush ${className}`}>
      {failed ? (
        <div role="img" aria-label={alt} className="absolute inset-0 grid place-items-center text-4xl">
          🏡
        </div>
      ) : (
        <img
          src={src}
          alt={alt}
          width={400}
          height={400}
          loading={priority ? 'eager' : 'lazy'}
          decoding="async"
          fetchPriority={priority ? 'high' : 'auto'}
          onError={() => setFailed(true)}
          className="absolute inset-0 size-full object-cover transition duration-300 group-hover:scale-[1.03]"
        />
      )}
    </div>
  )
}
