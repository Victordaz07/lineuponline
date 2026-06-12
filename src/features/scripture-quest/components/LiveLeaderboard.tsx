import type { Player, Team } from '../types'
import { SQAvatar } from './SQIcon'

type Props = {
  players: Player[]
  teams: Team[]
  teamMode: boolean
  highlightUid?: string
  limit?: number
}

const MEDALS = ['🥇', '🥈', '🥉']

/** Live standings — teams in team mode, individual players otherwise. */
export function LiveLeaderboard({ players, teams, teamMode, highlightUid, limit }: Props) {
  const rows = teamMode
    ? [...teams]
        .sort((a, b) => b.score - a.score)
        .map((t) => ({
          key: t.id,
          name: t.name,
          avatar: null as string | null,
          detail: `${t.memberIds.length} integrante${t.memberIds.length === 1 ? '' : 's'}`,
          score: t.score,
          highlighted: false,
        }))
    : [...players]
        .sort((a, b) => b.score - a.score)
        .map((p) => ({
          key: p.uid,
          name: p.name,
          avatar: p.avatar as string | null,
          detail: p.streak >= 2 ? `🔥 Racha de ${p.streak}` : '',
          score: p.score,
          highlighted: p.uid === highlightUid,
        }))

  const visible = limit ? rows.slice(0, limit) : rows

  return (
    <div className="space-y-2">
      <h3 className="font-display text-xl font-bold text-warm-white">Tabla de posiciones</h3>
      {visible.length === 0 && (
        <p className="font-ui text-sm text-warm-white/60">Aún no hay puntuaciones.</p>
      )}
      <ol className="space-y-1.5">
        {visible.map((row, i) => (
          <li
            key={row.key}
            className={`sq-rise flex items-center justify-between rounded-xl px-4 py-2.5 font-ui ${
              row.highlighted ? 'bg-sg-gold/20 ring-1 ring-sg-gold' : 'bg-navy-light/60'
            }`}
            style={{ animationDelay: `${Math.min(i, 6) * 0.07}s` }}
          >
            <span className="flex items-center gap-3 text-warm-white">
              <span className="w-7 text-center text-lg">{MEDALS[i] ?? `${i + 1}.`}</span>
              {row.avatar && <SQAvatar id={row.avatar} size={30} />}
              <span className="font-medium">{row.name}</span>
              {row.detail && <span className="text-xs text-sg-gold-light">{row.detail}</span>}
            </span>
            <span className="font-display text-xl font-bold text-sg-gold-bright">
              {row.score.toLocaleString('es')}
            </span>
          </li>
        ))}
      </ol>
    </div>
  )
}
