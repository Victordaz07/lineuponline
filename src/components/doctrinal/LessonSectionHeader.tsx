import type { LessonIntro } from '@/types/doctrine'

export type LessonSectionHeaderProps = {
  intro: LessonIntro
}

/**
 * Encabezado visual de una sección con número romano opcional.
 */
export function LessonSectionHeader({ intro }: LessonSectionHeaderProps) {
  return (
    <header className="space-y-3 rounded-2xl border border-sg-gold/15 bg-gradient-to-r from-navy-mid to-navy-deep/70 p-6 shadow-sm">
      <div className="flex flex-wrap items-baseline gap-3">
        {intro.romanNumeral ? (
          <span className="font-display text-3xl text-sg-gold" aria-hidden="true">
            {intro.romanNumeral}
          </span>
        ) : null}
        <h2 className="font-display text-2xl text-parchment">{intro.title}</h2>
      </div>
      {intro.paragraphs?.length ? (
        <div className="space-y-2">
          {intro.paragraphs.map((p, i) => (
            <p key={i} className="text-reading text-base leading-relaxed text-parchment/80">
              {p}
            </p>
          ))}
        </div>
      ) : null}
    </header>
  )
}
