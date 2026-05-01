import type { LessonIntro } from '@/types/doctrine'

export type LessonSectionHeaderProps = {
  intro: LessonIntro
}

/**
 * Encabezado visual de una sección con número romano opcional.
 */
export function LessonSectionHeader({ intro }: LessonSectionHeaderProps) {
  return (
    <header className="space-y-3 rounded-2xl border border-blue-accent/15 bg-gradient-to-r from-bg-elevated to-white p-6 shadow-sm">
      <div className="flex flex-wrap items-baseline gap-3">
        {intro.romanNumeral ? (
          <span className="font-title text-3xl text-gold-main" aria-hidden="true">
            {intro.romanNumeral}
          </span>
        ) : null}
        <h2 className="font-title text-2xl text-blue-accent">{intro.title}</h2>
      </div>
      {intro.paragraphs?.length ? (
        <div className="space-y-2">
          {intro.paragraphs.map((p, i) => (
            <p key={i} className="text-reading text-base leading-relaxed text-text-main">
              {p}
            </p>
          ))}
        </div>
      ) : null}
    </header>
  )
}
