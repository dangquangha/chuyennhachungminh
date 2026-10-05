import type { ReactNode } from 'react'
import { useInView } from '../hooks/useInView'

/** Fade-in nhẹ khi phần tử cuộn vào màn hình. Tự tắt khi người dùng bật "giảm chuyển động". */
export default function Reveal({ children, className = '' }: { children: ReactNode; className?: string }) {
  const { ref, inView } = useInView<HTMLDivElement>()
  return (
    <div ref={ref} className={`reveal ${inView ? 'is-visible' : ''} ${className}`}>
      {children}
    </div>
  )
}
