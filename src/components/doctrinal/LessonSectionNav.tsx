import type { LessonSection } from '@/types/doctrine'

export type LessonSectionNavProps = {
  sections: LessonSection[]
  activeIndex: number
  onSelect: (index: number) => void
}

export function LessonSectionNav({ sections, activeIndex, onSelect }: LessonSectionNavProps) {
  return (
    <nav
      className="sticky top-0 z-20 -mx-4 border-b border-gold-main/20 bg-bg-surface/95 px-4 py-3 backdrop-blur-sm sm:mx-0 sm:rounded-t-xl"
      aria-label="Secciones de la lección"
    >
      <div className="flex flex-wrap items-center gap-2">
        {sections.map((s, i) => {
          const active = i === activeIndex
          return (
            <button
              key={s.id}
              type="button"
              onClick={() => onSelect(i)}
              className={`inline-flex max-w-[11rem] truncate rounded-full border px-3 py-1.5 font-ui text-xs font-semibold transition sm:text-sm ${
                active
                  ? 'border-gold-main bg-gold-dim text-blue-accent'
                  : 'border-blue-accent/15 bg-white text-text-muted hover:border-gold-main/40'
              }`}
              aria-current={active ? 'true' : undefined}
            >
              {s.title}
            </button>
          )
        })}
      </div>
    </nav>
  )
}
