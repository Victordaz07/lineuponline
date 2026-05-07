import { LessonList } from '@/components/learning/LessonList'
import { SUBMODULE_GROUPS } from '@/data/seed-doctrine'
import type { Lesson } from '@/types/doctrine'

export type SubmoduleHeroSectionProps = {
  group: string
  lessons: Lesson[]
  moduleId: string
}

export function SubmoduleHeroSection({ group, lessons, moduleId }: SubmoduleHeroSectionProps) {
  const meta = SUBMODULE_GROUPS[group]
  if (!meta) return null

  return (
    <section
      aria-label={`Submodulo especial: ${meta.title}`}
      className="rounded-2xl border border-gold-main/40 bg-gradient-to-br from-bg-elevated via-white to-bg-surface p-6 shadow-md"
    >
      <p className="font-ui text-xs font-semibold uppercase tracking-[0.18em] text-gold-main">
        Personaje principal
      </p>
      <div className="mt-3 flex flex-wrap items-start gap-3">
        <span className="text-5xl leading-none" aria-hidden="true">
          {meta.icon}
        </span>
        <div className="min-w-0 flex-1">
          <h2 className="font-title text-2xl leading-tight text-blue-accent sm:text-3xl">
            {meta.title}
          </h2>
          <p className="mt-2 max-w-prose font-reading text-sm leading-relaxed text-text-muted">
            {meta.description}
          </p>
        </div>
      </div>
      <div className="mt-5">
        <LessonList lessons={lessons} moduleId={moduleId} />
      </div>
    </section>
  )
}
