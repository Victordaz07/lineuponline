import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { useAuth } from '@/hooks/useAuth'
import { BadgeCard } from '../components/BadgeCard'
import { QuestAuthGate, QuestShell } from '../components/QuestShell'
import { BADGES } from '../data/badges'
import { getTopicById } from '../data/topics'
import { useBadges } from '../hooks/useBadges'
import { fetchHistory } from '../services/historyService'
import type { GameHistoryEntry } from '../types'

/** Perfil: franja de estadísticas, últimas 6 partidas, insignias 4×2 y estudio. */
export default function QuestProfilePage() {
  const { user } = useAuth()
  const { badges } = useBadges(user?.uid)
  const [history, setHistory] = useState<GameHistoryEntry[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    if (!user) return
    let cancelled = false
    fetchHistory(user.uid)
      .then((entries) => {
        if (!cancelled) setHistory(entries)
      })
      .catch(() => undefined)
      .finally(() => {
        if (!cancelled) setLoading(false)
      })
    return () => {
      cancelled = true
    }
  }, [user])

  const earnedById = new Map(badges.map((b) => [b.badgeId, b]))
  const totalScore = history.reduce((sum, h) => sum + h.score, 0)
  const passRate =
    history.length > 0
      ? Math.round((history.filter((h) => h.passed).length / history.length) * 100)
      : 0
  const missedTotal = history.reduce((sum, h) => sum + (h.missedQuestions?.length ?? 0), 0)

  return (
    <QuestShell>
      <QuestAuthGate>
        <div className="space-y-10">
          {/* Franja de estadísticas */}
          <section className="grid grid-cols-2 gap-3 sm:grid-cols-4">
            {[
              { label: 'Partidas recientes', value: String(history.length) },
              { label: 'Puntos acumulados', value: totalScore.toLocaleString('es') },
              { label: 'Aprobadas', value: `${passRate}%` },
              { label: 'Insignias', value: `${badges.length}/${Object.keys(BADGES).length}` },
            ].map((stat, i) => (
              <div key={stat.label} className={`sq-card sq-rise sq-rise-${i} p-4 text-center`}>
                <p className="font-display text-3xl font-bold text-sg-gold-bright">{stat.value}</p>
                <p className="font-ui text-[11px] uppercase tracking-widest text-warm-white/60">
                  {stat.label}
                </p>
              </div>
            ))}
          </section>

          <section>
            <h2 className="mb-3 font-display text-2xl font-bold text-warm-white">
              Mis últimas partidas
            </h2>
            {loading ? (
              <p className="font-ui text-sm text-warm-white/60">Cargando…</p>
            ) : history.length === 0 ? (
              <p className="font-ui text-sm text-warm-white/60">
                Aún no has jugado ninguna partida.{' '}
                <Link to="/games/scripture-quest" className="text-sg-gold-bright underline">
                  ¡Empieza ahora!
                </Link>
              </p>
            ) : (
              <ul className="space-y-2">
                {history.map((h) => (
                  <li
                    key={`${h.roomId}-${h.date?.toMillis() ?? ''}`}
                    className="flex flex-wrap items-center justify-between gap-3 rounded-xl border border-navy-light bg-navy-light/40 px-4 py-3"
                  >
                    <div>
                      <p className="font-display text-lg font-bold text-warm-white">
                        {getTopicById(h.topic)?.label ?? h.topic}
                      </p>
                      <p className="font-ui text-xs text-warm-white/60">
                        Nivel {h.level} ·{' '}
                        {h.totalQuestions > 0
                          ? `${Math.round((h.correctAnswers / h.totalQuestions) * 100)}% correctas`
                          : 'sin rondas'}{' '}
                        ({h.correctAnswers}/{h.totalQuestions})
                        {h.date && ` · ${h.date.toDate().toLocaleDateString('es')}`}
                      </p>
                    </div>
                    <div className="flex items-center gap-3">
                      <span
                        className={`rounded-full px-3 py-1 font-ui text-xs font-bold uppercase ${
                          h.passed
                            ? 'bg-emerald-500/20 text-emerald-300'
                            : 'bg-rose-500/20 text-rose-300'
                        }`}
                      >
                        {h.passed ? 'Aprobada' : 'A repasar'}
                      </span>
                      <span className="font-display text-xl font-bold text-sg-gold-bright">
                        {h.score.toLocaleString('es')}
                      </span>
                    </div>
                  </li>
                ))}
              </ul>
            )}
          </section>

          <section>
            <h2 className="mb-3 font-display text-2xl font-bold text-warm-white">
              Insignias ({badges.length}/{Object.keys(BADGES).length})
            </h2>
            <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
              {Object.values(BADGES).map((def) => {
                const earned = earnedById.get(def.id)
                return (
                  <BadgeCard
                    key={def.id}
                    badge={def}
                    earned={Boolean(earned)}
                    earnedAt={earned?.earnedAt ? earned.earnedAt.toDate() : null}
                  />
                )
              })}
            </div>
          </section>

          {/* Tarjeta de modo estudio */}
          <Link
            to="/games/scripture-quest/study"
            className="sq-card block p-5 transition hover:border-sg-gold"
          >
            <div className="flex items-center justify-between gap-4">
              <div>
                <p className="font-display text-xl font-bold text-warm-white">📖 Modo estudio</p>
                <p className="font-ui text-sm text-warm-white/60">
                  {missedTotal > 0
                    ? `Tienes ${missedTotal} pregunta${missedTotal === 1 ? '' : 's'} fallada${missedTotal === 1 ? '' : 's'} por repasar.`
                    : 'Sin preguntas pendientes de repaso. ¡Bien hecho!'}
                </p>
              </div>
              <span className="font-ui text-xs font-bold uppercase tracking-wide text-sg-gold-bright">
                Repasar →
              </span>
            </div>
          </Link>
        </div>
      </QuestAuthGate>
    </QuestShell>
  )
}
