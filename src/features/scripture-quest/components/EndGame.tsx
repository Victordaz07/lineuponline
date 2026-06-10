import { Link } from 'react-router-dom'
import { BADGES } from '../data/badges'
import type { BadgeId, Player, Question, Team } from '../types'
import { LiveLeaderboard } from './LiveLeaderboard'

type Props = {
  players: Player[]
  teams: Team[]
  teamMode: boolean
  highlightUid?: string
  newBadges: BadgeId[]
  missedQuestions: Question[]
  saving: boolean
}

/** Final screen: podium, earned badges and entry point to study mode. */
export function EndGame({
  players,
  teams,
  teamMode,
  highlightUid,
  newBadges,
  missedQuestions,
  saving,
}: Props) {
  return (
    <div className="space-y-8">
      <div className="text-center">
        <p className="text-5xl" aria-hidden>
          🏆
        </p>
        <h2 className="mt-2 font-display text-4xl font-bold text-warm-white">
          ¡Fin de la partida!
        </h2>
        {saving && (
          <p className="mt-1 font-ui text-sm text-warm-white/60">Guardando resultados…</p>
        )}
      </div>

      <LiveLeaderboard
        players={players}
        teams={teams}
        teamMode={teamMode}
        highlightUid={highlightUid}
      />

      {newBadges.length > 0 && (
        <div className="rounded-2xl border border-sg-gold bg-gold-dim p-5">
          <h3 className="font-display text-xl font-bold text-sg-gold-bright">
            ¡Insignias nuevas!
          </h3>
          <ul className="mt-3 space-y-2">
            {newBadges.map((id) => (
              <li key={id} className="flex items-center gap-3 font-ui text-warm-white">
                <span className="text-2xl" aria-hidden>
                  {BADGES[id].icon}
                </span>
                <span>
                  <span className="font-semibold">{BADGES[id].label}</span>
                  <span className="block text-xs text-warm-white/70">
                    {BADGES[id].description}
                  </span>
                </span>
              </li>
            ))}
          </ul>
        </div>
      )}

      {missedQuestions.length > 0 && (
        <div className="rounded-2xl border border-navy-light bg-navy-light/40 p-5 text-center">
          <p className="font-ui text-warm-white">
            Fallaste {missedQuestions.length} pregunta
            {missedQuestions.length === 1 ? '' : 's'}. ¡Conviértelas en aprendizaje!
          </p>
          <Link
            to="/games/scripture-quest/study"
            className="mt-3 inline-block rounded-xl bg-sg-gold px-6 py-3 font-ui text-sm font-bold uppercase tracking-wide text-navy-deep transition hover:bg-sg-gold-light"
          >
            Repasar en modo estudio
          </Link>
        </div>
      )}

      <div className="flex flex-wrap justify-center gap-3">
        <Link
          to="/games/scripture-quest"
          className="rounded-xl border border-sg-gold px-6 py-3 font-ui text-sm font-bold uppercase tracking-wide text-sg-gold-bright transition hover:bg-sg-gold hover:text-navy-deep"
        >
          Jugar otra vez
        </Link>
        <Link
          to="/profile/scripture-quest"
          className="rounded-xl border border-navy-light px-6 py-3 font-ui text-sm font-bold uppercase tracking-wide text-warm-white/80 transition hover:border-sg-gold hover:text-sg-gold-bright"
        >
          Ver mi historial
        </Link>
      </div>
    </div>
  )
}
