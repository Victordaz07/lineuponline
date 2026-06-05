import type { LessonSection } from '@/types/doctrine'

export type LessonSectionNavProps = {
  sections: LessonSection[]
  activeIndex: number
  onSelect: (index: number) => void
}

export function LessonSectionNav({ sections, activeIndex, onSelect }: LessonSectionNavProps) {
  return (
    <nav
      className="sticky top-0 z-20 -mx-8 overflow-x-auto border-b border-sg-gold/15 bg-navy-mid/95 backdrop-blur-sm [scrollbar-width:none] [&::-webkit-scrollbar]:hidden sm:-mx-8"
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
                  ? 'bg-sg-gold/10 text-sg-gold-light'
                  : 'text-parchment/45 hover:bg-navy-deep/40 hover:text-parchment/80'
              }`}
            >
              <span
                className={`font-display text-xl leading-none ${
                  active ? 'text-sg-gold' : 'text-parchment/20'
                }`}
              >
                {s.intro?.romanNumeral ?? String(i + 1)}
              </span>
              <span className="max-w-[8rem] truncate font-ui text-xs">
                {s.title}
              </span>
              {active ? (
                <span className="h-0.5 w-5 rounded-full bg-sg-gold" aria-hidden="true" />
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
