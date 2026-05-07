import type { LessonSection } from '@/types/doctrine'

export type LessonSectionNavProps = {
  sections: LessonSection[]
  activeIndex: number
  onSelect: (index: number) => void
}

export function LessonSectionNav({ sections, activeIndex, onSelect }: LessonSectionNavProps) {
  return (
    <nav
      className="sticky top-0 z-20 -mx-8 overflow-x-auto border-b border-blue-accent/10 bg-white/95 backdrop-blur-sm [scrollbar-width:none] [&::-webkit-scrollbar]:hidden sm:-mx-8"
      aria-label="Secciones de la lección"
    >
      <div className="flex min-w-max gap-1 px-6 py-2">
        {sections.map((s, i) => {
          const active = i === activeIndex
          return (
            <button
              key={s.id}
              type="button"
              onClick={() => onSelect(i)}
              aria-current={active ? 'true' : undefined}
              className={`flex flex-col items-center gap-0.5 rounded-xl px-4 py-2 transition-all ${
                active
                  ? 'bg-gold-main/10 text-blue-accent'
                  : 'text-text-muted hover:bg-bg-elevated hover:text-blue-accent'
              }`}
            >
              <span
                className={`font-title text-xl leading-none ${
                  active ? 'text-gold-main' : 'text-blue-accent/25'
                }`}
              >
                {s.intro?.romanNumeral ?? String(i + 1)}
              </span>
              <span className="max-w-[8rem] truncate font-ui text-xs">
                {s.title}
              </span>
              {active ? (
                <span className="h-0.5 w-5 rounded-full bg-gold-main" aria-hidden="true" />
              ) : (
                <span className="h-0.5 w-5" aria-hidden="true" />
              )}
            </button>
          )
        })}
      </div>
    </nav>
  )
}
