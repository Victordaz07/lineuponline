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

/** Profile section: last 6 games + badge collection. */
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

  return (
    <QuestShell>
      <QuestAuthGate>
        <div className="space-y-10">
          <section>
            <div className="mb-3 flex items-center justify-between gap-3">
              <h2 className="font-display text-2xl font-bold text-warm-white">
                Mis últimas partidas
              </h2>
              <Link
                to="/games/scripture-quest/study"
                className="font-ui text-xs font-bold uppercase tracking-wide text-sg-gold-bright hover:underline"
              >
                Modo estudio →
              </Link>
            </div>
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
                        Nivel {h.level} · {h.correctAnswers}/{h.totalQuestions} correctas
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
                        {h.score} pts
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
            <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4">
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
        </div>
      </QuestAuthGate>
    </QuestShell>
  )
}
