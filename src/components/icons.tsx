import type { SVGProps } from 'react'

type IconProps = SVGProps<SVGSVGElement>

const base = { 'aria-hidden': true, focusable: false } as const

export function ArrowRight(props: IconProps) {
  return (
    <svg {...base} viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" {...props}>
      <path d="M4 10h12M11 5l5 5-5 5" />
    </svg>
  )
}

export function CartIcon(props: IconProps) {
  return (
    <svg {...base} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.9} strokeLinecap="round" strokeLinejoin="round" {...props}>
      <path d="M5 7h14l-1.4 9.1a2 2 0 0 1-2 1.7H8.4a2 2 0 0 1-2-1.7Z" />
      <path d="M9 10V6a3 3 0 0 1 6 0v4" />
    </svg>
  )
}

export function TikTokIcon(props: IconProps) {
  return (
    <svg {...base} viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M16.6 3c.3 2.2 1.6 3.6 3.9 3.8v3.1a7.4 7.4 0 0 1-3.8-1.1v5.9c0 3.6-2.6 6.3-6.2 6.3A6 6 0 0 1 4.5 15c0-3.7 3.2-6.5 7-5.9v3.3a2.8 2.8 0 0 0-3.7 2.7 2.8 2.8 0 0 0 2.9 2.8c1.7 0 2.8-1.1 2.8-3.2V3Z" />
    </svg>
  )
}

export function SparkleIcon(props: IconProps) {
  return (
    <svg {...base} viewBox="0 0 20 20" fill="currentColor" {...props}>
      <path d="M10 2.5 11.8 8.2 17.5 10l-5.7 1.8L10 17.5l-1.8-5.7L2.5 10l5.7-1.8Z" />
    </svg>
  )
}
