import type { LessonSection } from '@/types/doctrine'

export type LessonSectionNavProps = {
  sections: LessonSection[]
  activeIndex: number
  onSelect: (index: number) => void
}

/**
 * Navegación entre secciones de una lección.
 *
 * En vez de pestañas con títulos recortados, muestra el título COMPLETO de la
 * sección activa (en Lora) más un "stepper" de numerales para saltar, con estado
 * visual hecho / actual / pendiente — coherente con la estética del rediseño.
 */
export function LessonSectionNav({ sections, activeIndex, onSelect }: LessonSectionNavProps) {
  const active = sections[activeIndex]
  const numeral = active?.intro?.romanNumeral ?? String(activeIndex + 1)

  return (
    <nav
      className="sticky top-0 z-20 -mx-6 border-b border-sg-gold/15 bg-navy-mid/95 px-6 py-3 backdrop-blur-md sm:-mx-8 sm:px-8"
      aria-label="Secciones de la lección"
    >
      <p className="font-ui text-[10px] font-bold uppercase tracking-[0.16em] text-sg-gold">
        Sección {activeIndex + 1} de {sections.length}
      </p>
      <h3 className="mt-0.5 font-display text-lg font-semibold leading-snug text-parchment">
        <span className="text-sg-gold-light">{numeral}</span>
        <span className="mx-1.5 text-sg-gold/40">·</span>
        {active?.title}
      </h3>

      <ol className="mt-2.5 flex flex-wrap items-center gap-1.5" aria-label="Ir a una sección">
        {sections.map((s, i) => {
          const isActive = i === activeIndex
          const isDone = i < activeIndex
          const label = s.intro?.romanNumeral ?? String(i + 1)
          return (
            <li key={s.id}>
              <button
                type="button"
                onClick={() => onSelect(i)}
                aria-current={isActive ? 'step' : undefined}
                title={s.title}
                aria-label={`Sección ${i + 1}: ${s.title}`}
                className={`flex h-8 min-w-8 items-center justify-center rounded-lg px-2 font-display text-sm font-semibold transition ${
                  isActive
                    ? 'bg-sg-gold text-ink shadow-sm'
                    : isDone
                      ? 'bg-sg-gold/15 text-sg-gold-light hover:bg-sg-gold/25'
                      : 'bg-navy-light/60 text-parchment/45 hover:bg-navy-light hover:text-parchment/70'
                }`}
              >
                {label}
              </button>
            </li>
          )
        })}
      </ol>
    </nav>
  )
}
