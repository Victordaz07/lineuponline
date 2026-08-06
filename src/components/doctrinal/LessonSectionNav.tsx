import type { LessonSection } from '@/types/doctrine'

export type LessonSectionNavProps = {
  sections: LessonSection[]
  activeIndex: number
  onSelect: (index: number) => void
}

/**
 * Navegación entre secciones de una lección — "riel de progreso":
 * tarjeta autocontenida con nodos numerados conectados por una línea, avance en
 * dorado hasta la sección actual y una etiqueta corta bajo cada nodo. El título
 * completo de la sección se muestra en el contenido, debajo.
 */
export function LessonSectionNav({ sections, activeIndex, onSelect }: LessonSectionNavProps) {
  const total = sections.length
  const progress = total > 1 ? activeIndex / (total - 1) : 0

  return (
    <nav
      className="rounded-2xl border border-sg-gold/15 bg-navy-mid p-5 shadow-card"
      aria-label="Secciones de la lección"
    >
      <div className="mb-4 flex items-baseline justify-between">
        <p className="font-ui text-[10px] font-bold uppercase tracking-[0.14em] text-parchment/45">
          Progreso de la lección
        </p>
        <p className="font-ui text-[11px] font-bold text-sg-gold-light tabular-nums">
          {activeIndex + 1} / {total}
        </p>
      </div>

      <ol className="relative flex justify-between" aria-label="Ir a una sección">
        {/* Riel base */}
        <span
          aria-hidden="true"
          className="absolute left-[14px] right-[14px] top-[14px] h-0.5 rounded-full bg-parchment/12"
        />
        {/* Avance en dorado hasta el nodo activo */}
        <span
          aria-hidden="true"
          className="absolute left-[14px] top-[14px] h-0.5 rounded-full bg-gradient-to-r from-sg-gold to-sg-gold-light transition-[width] duration-300"
          style={{ width: `calc((100% - 28px) * ${progress})` }}
        />

        {sections.map((s, i) => {
          const isActive = i === activeIndex
          const isDone = i < activeIndex
          const numeral = s.intro?.romanNumeral ?? String(i + 1)
          return (
            <li key={s.id} className="relative z-10 flex min-w-0 flex-1 justify-center">
              <button
                type="button"
                onClick={() => onSelect(i)}
                aria-current={isActive ? 'step' : undefined}
                aria-label={`Sección ${i + 1}: ${s.title}`}
                className="group flex w-full flex-col items-center gap-1.5"
              >
                <span
                  className={`flex h-7 w-7 items-center justify-center rounded-full font-display text-[13px] font-bold leading-none transition ${
                    isActive
                      ? 'bg-sg-gold text-ink shadow-[0_0_0_4px_rgb(var(--navy-mid))]'
                      : isDone
                        ? 'bg-navy-mid text-sg-gold-light ring-2 ring-sg-gold/60'
                        : 'bg-navy-mid text-parchment/40 ring-2 ring-parchment/20 group-hover:ring-sg-gold/40'
                  }`}
                >
                  {numeral}
                </span>
                <span
                  className={`max-w-full truncate px-0.5 font-ui text-[9.5px] font-semibold leading-tight ${
                    isActive ? 'text-sg-gold-light' : isDone ? 'text-parchment/55' : 'text-parchment/35'
                  }`}
                >
                  {s.intro?.title ?? s.title}
                </span>
              </button>
            </li>
          )
        })}
      </ol>
    </nav>
  )
}
