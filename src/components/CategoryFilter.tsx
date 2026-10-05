interface Props {
  categories: string[]
  active: string
  onChange: (category: string) => void
  counts: Record<string, number>
}

export const ALL = 'Tất cả'

export default function CategoryFilter({ categories, active, onChange, counts }: Props) {
  return (
    <div className="sticky top-0 z-10 -mx-4 bg-cream px-4 py-3 sm:-mx-6 sm:px-6">
      <div role="group" aria-label="Lọc theo danh mục" className="no-scrollbar -mx-4 flex gap-2 overflow-x-auto px-4 sm:mx-0 sm:flex-wrap sm:px-0">
        {[ALL, ...categories].map((cat) => {
          const selected = cat === active
          return (
            <button
              key={cat}
              type="button"
              aria-pressed={selected}
              onClick={() => onChange(cat)}
              className={`min-h-10 shrink-0 rounded-full px-4 text-sm font-medium whitespace-nowrap transition duration-150 active:scale-[0.96] ${
                selected
                  ? 'bg-ink text-white shadow-soft'
                  : 'border border-line bg-white text-ink hover:border-primary/50'
              }`}
            >
              {cat}
              <span className={`ml-1.5 text-xs ${selected ? 'text-white/75' : 'text-muted'}`}>{counts[cat]}</span>
            </button>
          )
        })}
      </div>
    </div>
  )
}
