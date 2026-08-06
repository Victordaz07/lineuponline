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
      className="overflow-hidden rounded-2xl border border-sg-gold/30 bg-navy-mid shadow-card"
    >
      {meta.heroImage && (
        <div className="relative aspect-[16/9] w-full overflow-hidden sm:aspect-[21/8]">
          <img src={meta.heroImage} alt="" className="h-full w-full object-cover" />
          <div
            className="pointer-events-none absolute inset-0"
            style={{ background: 'linear-gradient(0deg, rgb(var(--navy-mid)) 5%, rgb(var(--navy-mid) / 0.15) 45%, transparent 75%)' }}
          />
        </div>
      )}
      <div className="p-6">
        {meta.label && (
          <p className="font-ui text-xs font-semibold uppercase tracking-[0.18em] text-sg-gold">
            {meta.label}
          </p>
        )}
        <div className="mt-3 flex flex-wrap items-center gap-3.5">
          {meta.iconImage ? (
            <div
              className="flex h-16 w-16 shrink-0 items-center justify-center overflow-hidden rounded-2xl shadow-md"
              style={{ background: 'linear-gradient(160deg, rgb(var(--sg-gold-bright)), rgb(var(--sg-gold)))' }}
            >
              <img src={meta.iconImage} alt="" className="h-full w-full object-cover" />
            </div>
          ) : (
            <span className="text-5xl leading-none" aria-hidden="true">
              {meta.icon}
            </span>
          )}
          <div className="min-w-0 flex-1">
            <h2 className="font-display text-2xl font-semibold leading-tight text-parchment sm:text-3xl">
              {meta.title}
            </h2>
            <p className="mt-2 max-w-prose font-display text-sm leading-relaxed text-parchment/65">
              {meta.description}
            </p>
          </div>
        </div>
        <div className="mt-5">
          <LessonList lessons={lessons} moduleId={moduleId} />
        </div>
      </div>
    </section>
  )
}
