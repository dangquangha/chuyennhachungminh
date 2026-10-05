export default function SectionTitle({ id, title, subtitle }: { id: string; title: string; subtitle?: string }) {
  return (
    <div className="mb-4">
      <h2 id={id} className="font-display text-[1.3rem] leading-snug font-bold text-ink sm:text-2xl">
        {title}
      </h2>
      {subtitle && <p className="mt-1 text-sm text-muted">{subtitle}</p>}
    </div>
  )
}
