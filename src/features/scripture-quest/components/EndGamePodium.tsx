/**
 * Podio final (pantalla del anfitrión): confeti, podio de 3 columnas y
 * franja de insignias otorgadas durante la sesión.
 */
import { useMemo } from 'react'
import type { Player, Team } from '../types'
import { BADGES } from '../data/badges'
import type { BadgeId } from '../types'
import { SQAvatar, SQIcon } from './SQIcon'

type PodiumRow = { key: string; label: string; avatar: string | null; score: number }

type Props = {
  players: Player[]
  teams: Team[]
  teamMode: boolean
  /** Insignias otorgadas en la sesión: nombre del jugador → insignias */
  awardedBadges?: { playerName: string; badgeId: BadgeId }[]
}

const CONFETTI_COLORS = ['#d4af62', '#b8923a', '#e2574c', '#3e8ed0', '#43a06b', '#e8c87a']

function Confetti() {
  const pieces = useMemo(
    () =>
      Array.from({ length: 40 }, (_, i) => ({
        left: `${(i * 37) % 100}%`,
        duration: `${2.4 + ((i * 13) % 20) / 10}s`,
        delay: `${((i * 7) % 30) / 10}s`,
        color: CONFETTI_COLORS[i % CONFETTI_COLORS.length],
      })),
    [],
  )
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden>
      {pieces.map((p, i) => (
        <span
          key={i}
          className="sq-confetti-piece"
          style={{
            ['--sq-x' as string]: p.left,
            ['--sq-d' as string]: p.duration,
            animationDelay: p.delay,
            background: p.color,
          }}
        />
      ))}
    </div>
  )
}

export function EndGamePodium({ players, teams, teamMode, awardedBadges = [] }: Props) {
  const rows: PodiumRow[] = teamMode
    ? [...teams]
        .sort((a, b) => b.score - a.score)
        .map((t) => ({ key: t.id, label: t.name, avatar: null, score: t.score }))
    : [...players]
        .sort((a, b) => b.score - a.score)
        .map((p) => ({ key: p.uid, label: p.name, avatar: p.avatar, score: p.score }))

  const [first, second, third] = rows
  const columns = [
    { row: second, place: 2, height: 'h-40', medal: '🥈' },
    { row: first, place: 1, height: 'h-56', medal: '🥇' },
    { row: third, place: 3, height: 'h-28', medal: '🥉' },
  ]

  return (
    <div className="relative flex h-full flex-col justify-between">
      <Confetti />

      <h2 className="sq-rise text-center font-display text-5xl font-bold text-warm-white">
        ¡Fin de la partida!
      </h2>

      <div className="flex items-end justify-center gap-6">
        {columns.map(({ row, place, height, medal }) =>
          row ? (
            <div key={row.key} className={`sq-rise sq-rise-${place} flex w-56 flex-col items-center gap-3`}>
              <span className="text-4xl" aria-hidden>{medal}</span>
              {row.avatar && <SQAvatar id={row.avatar} size={64} className="sq-float" />}
              <p className="text-center font-display text-2xl font-bold text-warm-white">
                {row.label}
              </p>
              <p className="font-display text-3xl font-bold text-sg-gold-bright">
                {row.score.toLocaleString('es')}
              </p>
              <div
                className={`w-full rounded-t-2xl border border-b-0 border-sg-gold/40 ${height} ${
                  place === 1 ? 'bg-gold-dim sq-gold-ring' : 'bg-navy-light/50'
                } flex items-start justify-center pt-3 font-display text-4xl font-bold text-sg-gold`}
              >
                {place}
              </div>
            </div>
          ) : (
            <div key={place} className="w-56" />
          ),
        )}
      </div>

      {awardedBadges.length > 0 && (
        <div className="sq-rise sq-rise-3 sq-card flex flex-wrap items-center justify-center gap-4 p-4">
          <span className="font-ui text-xs font-bold uppercase tracking-widest text-sg-gold-light">
            Insignias de la sesión
          </span>
          {awardedBadges.map((a, i) => (
            <span key={i} className="flex items-center gap-2 font-ui text-sm text-warm-white">
              <span className="text-sg-gold-bright">
                <SQIcon name={BADGES[a.badgeId].icon} size={22} />
              </span>
              {BADGES[a.badgeId].label} — {a.playerName}
            </span>
          ))}
        </div>
      )}
    </div>
  )
}
