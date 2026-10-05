import { SparkleIcon } from './icons'

export default function Badge({ children }: { children: string }) {
  return (
    <span className="inline-flex items-center gap-1 rounded-full bg-white/95 px-2.5 py-1 text-xs font-semibold text-primary-strong shadow-soft">
      <SparkleIcon className="size-3" />
      {children}
    </span>
  )
}
