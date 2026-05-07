import { useRef } from 'react'
import { Link } from 'react-router-dom'
import { ModuleGrid } from '@/components/learning/ModuleGrid'
import { findSeedLesson, findSeedModule, getCatalogStats, seedModules } from '@/data/seed-doctrine'
import { useFavoritesStore } from '@/stores/favoritesStore'
import { useStudyJournalStore } from '@/stores/studyJournalStore'

function relDays(iso: string): string {
  const diff = Math.floor((Date.now() - new Date(iso).getTime()) / 86_400_000)
  if (diff === 0) return 'hoy'
  if (diff === 1) return 'ayer'
  return `hace ${diff} días`
}

export default function Dashboard() {
  const modulesRef = useRef<HTMLDivElement>(null)
  const entries = useStudyJournalStore((s) => s.entries)
  const favoriteCount = useFavoritesStore((s) => s.verses.length)
  const stats = getCatalogStats()

  const lastEntry = entries.length > 0
    ? [...entries].sort((a, b) => b.clientUpdatedAt.localeCompare(a.clientUpdatedAt))[0]
    : null

  const continueModuleId = lastEntry?.moduleId ?? 'doctrina-fundamental'
  const continueLessonId = lastEntry?.lessonId ?? 'la-expiacion-del-salvador'
  const continueLesson = lastEntry
    ? findSeedLesson(lastEntry.moduleId, lastEntry.lessonId)
    : findSeedLesson('doctrina-fundamental', 'la-expiacion-del-salvador')
  const continueModule = lastEntry
    ? findSeedModule(lastEntry.moduleId)
    : findSeedModule('doctrina-fundamental')

  return (
    <div className="mx-auto max-w-4xl space-y-6 pb-4">

      {/* ── Hero ────────────────────────────────────────────────── */}
      <section className="relative overflow-hidden rounded-3xl bg-[#0b1a35] px-8 py-12 shadow-xl sm:px-12 sm:py-16">
        {/* decorative star dots */}
        <Stars />

        <div className="relative z-10 max-w-xl">
          <p className="font-ui text-[0.6rem] font-semibold uppercase tracking-[0.3em] text-gold-main">
            Edición Celestial
          </p>

          <h1 className="mt-3 font-title text-4xl leading-tight text-white sm:text-5xl">
            LineUponLine
          </h1>

          <blockquote className="mt-5 border-l-2 border-gold-main/50 pl-4">
            <p className="font-reading text-sm italic leading-relaxed text-white/70">
              "Línea sobre línea, precepto sobre precepto; aquí un poco y allí un poco."
            </p>
            <cite className="mt-1 block font-ui text-xs text-gold-main/80 not-italic">
              — Isaías 28:10
            </cite>
          </blockquote>

          <div className="mt-8 flex flex-wrap gap-3">
            <button
              type="button"
              onClick={() => modulesRef.current?.scrollIntoView({ behavior: 'smooth' })}
              className="inline-flex items-center gap-2 rounded-full border border-gold-main/60 px-5 py-2.5 font-ui text-sm font-semibold text-gold-main transition hover:bg-gold-main/15"
            >
              Explorar módulos
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                <path d="M7 2v10M3 8l4 4 4-4" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
            <Link
              to="/my-notes"
              className="inline-flex items-center gap-2 rounded-full bg-gold-main px-5 py-2.5 font-ui text-sm font-semibold text-white shadow transition hover:brightness-110"
            >
              Diario de estudio
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                <path d="M2 7h10M8 3l4 4-4 4" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* ── Stats ───────────────────────────────────────────────── */}
      <div className="grid grid-cols-3 gap-3">
        <StatTile icon="📖" value={stats.published} label="Lecciones disponibles" />
        <StatTile icon="✍️" value={entries.length} label="Reflexiones escritas" />
        <StatTile icon="⭐" value={favoriteCount} label="Versículos guardados" />
      </div>

      {/* ── Continúa estudiando ─────────────────────────────────── */}
      <section className="flex flex-col gap-3 rounded-2xl border border-gold-main/25 bg-white p-5 shadow-sm sm:flex-row sm:items-center sm:justify-between sm:p-6">
        <div className="min-w-0">
          <p className="font-ui text-[0.6rem] font-semibold uppercase tracking-[0.22em] text-gold-main">
            {lastEntry ? `Última sesión · ${relDays(lastEntry.clientUpdatedAt)}` : 'Lección destacada'}
          </p>
          <p className="mt-1 truncate font-title text-xl text-blue-accent">
            {continueLesson?.title ?? 'La Expiación del Salvador'}
          </p>
          <p className="font-ui text-xs text-text-muted">
            {continueModule?.title ?? 'Doctrina Fundamental'}
            {lastEntry ? ` · ${lastEntry.topicTitle}` : ''}
          </p>
        </div>
        <Link
          to={`/lesson/${continueModuleId}/${continueLessonId}`}
          className="inline-flex shrink-0 items-center gap-2 rounded-xl bg-blue-accent px-5 py-3 font-ui text-sm font-semibold text-white shadow transition hover:brightness-110"
        >
          {lastEntry ? 'Continuar' : 'Comenzar'}
          <svg width="14" height="14" viewBox="0 0 14 14" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
            <path d="M2 7h10M8 3l4 4-4 4" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </Link>
      </section>

      {/* ── Módulos ─────────────────────────────────────────────── */}
      <section ref={modulesRef} className="scroll-mt-6 space-y-4">
        <div className="flex items-baseline justify-between">
          <h2 className="font-title text-2xl text-blue-accent">Módulos doctrinales</h2>
          <span className="font-ui text-xs text-text-muted">{seedModules.length} módulos</span>
        </div>
        <ModuleGrid modules={seedModules} />
      </section>

    </div>
  )
}

function StatTile({ icon, value, label }: { icon: string; value: number; label: string }) {
  return (
    <div className="flex flex-col items-center rounded-2xl border border-gold-main/15 bg-white px-3 py-4 text-center shadow-sm">
      <span className="text-xl" aria-hidden="true">{icon}</span>
      <p className="mt-1.5 font-title text-2xl text-blue-accent">{value}</p>
      <p className="mt-0.5 font-ui text-[0.6rem] leading-tight text-text-muted">{label}</p>
    </div>
  )
}

function Stars() {
  const dots = [
    [12, 8], [28, 5], [45, 12], [60, 6], [75, 9], [88, 4],
    [5, 22], [35, 18], [55, 25], [70, 20], [92, 17],
    [18, 35], [48, 38], [65, 32], [82, 40],
    [8, 52], [30, 58], [52, 50], [78, 55], [95, 48],
    [22, 72], [42, 68], [62, 75], [85, 70],
    [10, 88], [35, 82], [58, 90], [80, 85],
  ] as const

  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden="true">
      {dots.map(([x, y], i) => (
        <span
          key={i}
          className="absolute inline-block rounded-full bg-white"
          style={{
            left: `${x}%`,
            top: `${y}%`,
            width: i % 4 === 0 ? '2px' : '1.5px',
            height: i % 4 === 0 ? '2px' : '1.5px',
            opacity: 0.15 + (i % 5) * 0.07,
          }}
        />
      ))}
      {/* subtle radial glow top-right */}
      <div className="absolute -right-20 -top-20 h-72 w-72 rounded-full bg-blue-accent/30 blur-3xl" />
      <div className="absolute bottom-0 left-10 h-40 w-40 rounded-full bg-gold-main/10 blur-2xl" />
    </div>
  )
}
