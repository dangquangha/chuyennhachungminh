import { ArrowRight, CartIcon } from './icons'

/** Nút CTA trong card. Là <span> vì cả card đã là link. */
export default function ProductCta({ available }: { available: boolean }) {
  const sizing = 'min-h-11 px-2 text-[0.85rem]'

  // Màn hình rất hẹp (<375px): ẩn icon để chữ "Xem trên Shopee" không bị cắt
  const compactIcons = 'hidden min-[375px]:block'

  if (!available) {
    return (
      <span className={`flex w-full items-center justify-center rounded-full bg-line/70 font-medium text-muted ${sizing}`}>
        Sắp có link
      </span>
    )
  }

  return (
    <span
      className={`flex w-full items-center justify-center gap-1.5 rounded-full bg-primary-strong font-semibold text-white transition duration-150 group-hover:bg-primary-hover group-active:scale-[0.97] group-active:bg-primary-hover ${sizing}`}
    >
      <CartIcon className={`size-[1.1em] shrink-0 ${compactIcons}`} />
      <span className="truncate">Xem trên Shopee</span>
      <ArrowRight className={`size-[1em] shrink-0 transition-transform group-hover:translate-x-0.5 ${compactIcons}`} />
    </span>
  )
}
