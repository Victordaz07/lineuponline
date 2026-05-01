import type { LessonSection } from '@/types/doctrine'

export type LessonSectionNavProps = {
  sections: LessonSection[]
  activeIndex: number
  /** Sección marcada como con al menos un tema visitado. */
  sectionTouched: (index: number) => boolean
  onSelect: (index: number) => void
  onNextSection?: () => void
}

/**
 * Navegación sticky por secciones con indicadores de progreso.
 */
export function LessonSectionNav({
  sections,
  activeIndex,
  sectionTouched,
  onSelect,
  onNextSection,
}: LessonSectionNavProps) {
  return (
    <nav
      className="sticky top-0 z-20 -mx-4 border-b border-gold-main/20 bg-bg-surface/95 px-4 py-3 backdrop-blur-sm sm:mx-0 sm:rounded-t-xl"
      aria-label="Secciones de la lección"
    >
      <div className="flex flex-wrap items-center gap-2">
        {sections.map((s, i) => {
          const active = i === activeIndex
          const touched = sectionTouched(i)
          return (
            <button
              key={s.id}
              type="button"
              onClick={() => onSelect(i)}
              className={`inline-flex max-w-[11rem] items-center gap-2 truncate rounded-full border px-3 py-1.5 font-ui text-xs font-semibold transition sm:text-sm ${
                active
                  ? 'border-gold-main bg-gold-dim text-blue-accent'
                  : 'border-blue-accent/15 bg-white text-text-muted hover:border-gold-main/40'
              }`}
              aria-current={active ? 'true' : undefined}
            >
              <span
                className={`h-2 w-2 shrink-0 rounded-full ${touched ? 'bg-emerald-500' : 'bg-gray-300'}`}
                aria-hidden="true"
                title={touched ? 'Has explorado esta sección' : 'Sin explorar'}
              />
              <span className="truncate">{s.title}</span>
            </button>
          )
        })}
      </div>
      {onNextSection && activeIndex < sections.length - 1 ? (
        <button
          type="button"
          onClick={() => onNextSection()}
          className="mt-3 font-ui text-xs font-semibold text-blue-accent underline-offset-2 hover:underline"
        >
          Siguiente sección →
        </button>
      ) : null}
    </nav>
  )
}
