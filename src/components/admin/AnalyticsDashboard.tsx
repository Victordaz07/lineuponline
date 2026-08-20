import { useEffect, useState } from 'react'
import { fetchAnalytics, type AnalyticsData } from '@/services/analyticsService'
import { seedLessons } from '@/data/seed-doctrine'
import { LoadingSpinner } from '@/components/common/LoadingSpinner'
import { HBar, KpiCard } from '@/components/admin/AdminMetricPrimitives'

function lessonName(lessonId: string): string {
  return seedLessons[lessonId]?.title ?? lessonId
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
