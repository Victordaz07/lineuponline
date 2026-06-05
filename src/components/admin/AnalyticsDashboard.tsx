import { useEffect, useState } from 'react'
import { fetchAnalytics, type AnalyticsData } from '@/services/analyticsService'
import { seedLessons } from '@/data/seed-doctrine'
import { LoadingSpinner } from '@/components/common/LoadingSpinner'

function lessonName(lessonId: string): string {
  return seedLessons[lessonId]?.title ?? lessonId
}

type KpiCardProps = {
  label: string
  value: number
  sub?: string
  accent?: boolean
}

function KpiCard({ label, value, sub, accent }: KpiCardProps) {
  return (
    <div className="rounded-xl border border-sg-gold/10 bg-navy-deep p-4">
      <p className="font-ui text-xs uppercase tracking-wide text-parchment/40">{label}</p>
      <p className={`mt-1 font-display text-2xl ${accent ? 'text-sg-gold' : 'text-sg-gold-light'}`}>
        {value.toLocaleString()}
      </p>
      {sub ? <p className="mt-1 font-ui text-xs text-parchment/30">{sub}</p> : null}
    </div>
  )
}

type HBarProps = {
  rank: number
  label: string
  value: number
  max: number
  suffix?: string
  color?: string
}

function HBar({ rank, label, value, max, suffix = '', color = 'bg-sg-gold' }: HBarProps) {
  const pct = max > 0 ? Math.round((value / max) * 100) : 0
  return (
    <div className="flex items-center gap-3">
      <span className="w-5 text-right font-ui text-xs text-parchment/30">{rank}</span>
      <div className="min-w-0 flex-1">
        <div className="flex items-baseline justify-between gap-2">
          <span className="truncate font-ui text-sm text-parchment/80">{label}</span>
          <span className="shrink-0 font-ui text-xs font-semibold text-sg-gold-light">
            {value}{suffix}
          </span>
        </div>
        <div className="mt-1 h-1.5 w-full overflow-hidden rounded-full bg-navy-light">
          <div className={`h-full rounded-full ${color} transition-all`} style={{ width: `${pct}%` }} />
        </div>
      </div>
    </div>
  )
}

export function AnalyticsDashboard() {
  const [data, setData] = useState<AnalyticsData | null>(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    fetchAnalytics()
      .then(setData)
      .catch((e) => setError(e instanceof Error ? e.message : 'Error al cargar métricas'))
      .finally(() => setLoading(false))
  }, [])

  if (loading) {
    return (
      <div className="flex justify-center py-12">
        <LoadingSpinner />
      </div>
    )
  }

  if (error) {
    return (
      <div className="rounded-xl border border-red-900/40 bg-red-950/40 p-4">
        <p className="font-ui text-sm text-red-400">{error}</p>
        <p className="mt-1 font-ui text-xs text-parchment/40">
          Verifica que las reglas de Firestore permiten lecturas de collectionGroup al admin.
        </p>
      </div>
    )
  }

  if (!data) return null

  const maxReaders = data.topLessons[0]?.readers ?? 1

  return (
    <div className="space-y-8">

      {/* Usuarios */}
      <section className="space-y-3">
        <h2 className="font-ui text-xs font-semibold uppercase tracking-[0.18em] text-sg-gold">
          Usuarios
        </h2>
        <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
          <KpiCard label="Registrados" value={data.totalUsers} accent />
          <KpiCard label="Activos 7 días" value={data.activeUsersLast7d} sub="últimos 7 días" />
          <KpiCard label="Activos 30 días" value={data.activeUsersLast30d} sub="últimos 30 días" />
          <KpiCard
            label="Tasa retención"
            value={data.totalUsers > 0 ? Math.round((data.activeUsersLast30d / data.totalUsers) * 100) : 0}
            sub="activos / total"
            accent
          />
        </div>
      </section>

      {/* Engagement */}
      <section className="space-y-3">
        <h2 className="font-ui text-xs font-semibold uppercase tracking-[0.18em] text-sg-gold">
          Actividad de estudio
        </h2>
        <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
          <KpiCard label="Temas visitados" value={data.totalTopicVisits} sub="total acumulado" />
          <KpiCard label="Quizzes completados" value={data.totalQuizAttempts} sub="intentos totales" />
          <KpiCard label="Entradas de diario" value={data.totalJournalEntries} sub="reflexiones guardadas" />
          <KpiCard label="Notas guardadas" value={data.totalNotes} sub="notas de estudio" />
        </div>
      </section>

      {/* Top lecciones */}
      <section className="rounded-2xl border border-sg-gold/15 bg-navy-mid p-5 space-y-4">
        <div>
          <h2 className="font-display text-lg text-parchment">Lecciones más estudiadas</h2>
          <p className="font-ui text-xs text-parchment/40">Usuarios únicos que abrieron al menos un tema</p>
        </div>
        {data.topLessons.length === 0 ? (
          <p className="font-ui text-sm text-parchment/40">Sin datos aún.</p>
        ) : (
          <div className="space-y-3">
            {data.topLessons.map((item, i) => (
              <HBar
                key={item.lessonId}
                rank={i + 1}
                label={lessonName(item.lessonId)}
                value={item.readers}
                max={maxReaders}
                suffix=" users"
              />
            ))}
          </div>
        )}
      </section>

      {/* Quiz performance */}
      <div className="grid gap-4 sm:grid-cols-2">

        <section className="rounded-2xl border border-sg-gold/15 bg-navy-mid p-5 space-y-4">
          <div>
            <h2 className="font-display text-lg text-parchment">Mejor rendimiento</h2>
            <p className="font-ui text-xs text-parchment/40">Quiz promedio más alto</p>
          </div>
          {data.topQuizLessons.length === 0 ? (
            <p className="font-ui text-sm text-parchment/40">Sin datos aún.</p>
          ) : (
            <div className="space-y-3">
              {data.topQuizLessons.map((item, i) => (
                <HBar
                  key={item.lessonId}
                  rank={i + 1}
                  label={lessonName(item.lessonId)}
                  value={item.avgScore}
                  max={100}
                  suffix="%"
                  color="bg-emerald-500"
                />
              ))}
            </div>
          )}
        </section>

        <section className="rounded-2xl border border-sg-gold/15 bg-navy-mid p-5 space-y-4">
          <div>
            <h2 className="font-display text-lg text-parchment">Más difíciles</h2>
            <p className="font-ui text-xs text-parchment/40">Quiz promedio más bajo (bajo 80%)</p>
          </div>
          {data.lowQuizLessons.length === 0 ? (
            <p className="font-ui text-sm text-parchment/40">Sin quizzes con dificultad aún.</p>
          ) : (
            <div className="space-y-3">
              {data.lowQuizLessons.map((item, i) => (
                <HBar
                  key={item.lessonId}
                  rank={i + 1}
                  label={lessonName(item.lessonId)}
                  value={item.avgScore}
                  max={100}
                  suffix="%"
                  color="bg-amber-500"
                />
              ))}
            </div>
          )}
        </section>

      </div>

    </div>
  )
}
