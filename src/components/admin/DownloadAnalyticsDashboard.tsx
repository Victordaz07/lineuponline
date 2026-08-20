import { useEffect, useState } from 'react'
import { fetchDownloadAnalytics, type DownloadAnalyticsData } from '@/services/downloadAnalytics.service'
import { LoadingSpinner } from '@/components/common/LoadingSpinner'
import { HBar, KpiCard } from '@/components/admin/AdminMetricPrimitives'

function countryFlag(countryCode: string): string {
  if (countryCode.length !== 2) return '🌐'
  const codePoints = [...countryCode.toUpperCase()].map((c) => 127397 + c.charCodeAt(0))
  return String.fromCodePoint(...codePoints)
}

export function DownloadAnalyticsDashboard() {
  const [data, setData] = useState<DownloadAnalyticsData | null>(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    fetchDownloadAnalytics()
      .then(setData)
      .catch((e) => setError(e instanceof Error ? e.message : 'Error al cargar métricas de descargas'))
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
      </div>
    )
  }

  if (!data) return null

  const maxFile = data.topFiles[0]?.count ?? 1
  const maxTag = data.topTags[0]?.count ?? 1
  const maxCountry = data.byCountry[0]?.count ?? 1
  const maxDay = Math.max(1, ...data.timeSeries.map((d) => d.count))

  return (
    <div className="space-y-8">
      <section className="grid grid-cols-2 gap-3 sm:grid-cols-4">
        <KpiCard label="Descargas totales" value={data.totalDownloads} accent />
        <KpiCard label="Últimos 30 días" value={data.totalDownloadsLast30d} sub="volumen reciente" />
        <KpiCard label="Archivos con descargas" value={data.topFiles.length} sub="recursos distintos" />
        <KpiCard label="Países detectados" value={data.byCountry.length} sub="origen aproximado" />
      </section>

      <section className="rounded-2xl border border-sg-gold/15 bg-navy-mid p-5 space-y-4">
        <div>
          <h2 className="font-display text-lg text-parchment">Más descargados</h2>
          <p className="font-ui text-xs text-parchment/40">Recursos con más descargas registradas</p>
        </div>
        {data.topFiles.length === 0 ? (
          <p className="font-ui text-sm text-parchment/40">Sin datos aún.</p>
        ) : (
          <div className="space-y-3">
            {data.topFiles.map((item, i) => (
              <HBar key={item.resourceId} rank={i + 1} label={item.title} value={item.count} max={maxFile} />
            ))}
          </div>
        )}
      </section>

      <div className="grid gap-4 sm:grid-cols-2">
        <section className="rounded-2xl border border-sg-gold/15 bg-navy-mid p-5 space-y-4">
          <div>
            <h2 className="font-display text-lg text-parchment">Temas de mayor interés</h2>
            <p className="font-ui text-xs text-parchment/40">Etiquetas más frecuentes en descargas</p>
          </div>
          {data.topTags.length === 0 ? (
            <p className="font-ui text-sm text-parchment/40">Sin datos aún.</p>
          ) : (
            <div className="space-y-3">
              {data.topTags.map((item, i) => (
                <HBar key={item.tag} rank={i + 1} label={item.tag} value={item.count} max={maxTag} color="bg-emerald-500" />
              ))}
            </div>
          )}
        </section>

        <section className="rounded-2xl border border-sg-gold/15 bg-navy-mid p-5 space-y-4">
          <div>
            <h2 className="font-display text-lg text-parchment">Origen aproximado</h2>
            <p className="font-ui text-xs text-parchment/40">País inferido del navegador (sin IP)</p>
          </div>
          {data.byCountry.length === 0 ? (
            <p className="font-ui text-sm text-parchment/40">Sin datos aún.</p>
          ) : (
            <div className="space-y-3">
              {data.byCountry.map((item, i) => (
                <HBar
                  key={item.countryCode}
                  rank={i + 1}
                  label={`${countryFlag(item.countryCode)} ${item.countryCode}`}
                  value={item.count}
                  max={maxCountry}
                  color="bg-amber-500"
                />
              ))}
            </div>
          )}
        </section>
      </div>

      <section className="rounded-2xl border border-sg-gold/15 bg-navy-mid p-5 space-y-4">
        <div>
          <h2 className="font-display text-lg text-parchment">Tendencia diaria</h2>
          <p className="font-ui text-xs text-parchment/40">Descargas por día (últimos 30 días con datos)</p>
        </div>
        {data.timeSeries.length === 0 ? (
          <p className="font-ui text-sm text-parchment/40">Sin datos aún.</p>
        ) : (
          <div className="flex h-24 items-end gap-1">
            {data.timeSeries.map((d) => (
              <div key={d.date} className="flex-1" title={`${d.date}: ${d.count}`}>
                <div
                  className="rounded-t bg-sg-gold transition-all"
                  style={{ height: `${Math.max(4, Math.round((d.count / maxDay) * 96))}px` }}
                />
              </div>
            ))}
          </div>
        )}
      </section>
    </div>
  )
}
