import { useEffect } from 'react'
import type { GameRound, Player, Team } from '../types'
import { sound } from '../utils/sound'
import { ROUND_TYPE_LABELS } from '../data/badges'
import { roundAnswerText, roundExplanation } from '../utils/scoreCalculator'
import { LiveLeaderboard } from './LiveLeaderboard'

type Props = {
  round: GameRound
  players: Player[]
  teams: Team[]
  teamMode: boolean
  /** Vista del jugador: resultado propio de esta ronda. */
  myResult?: { correct: boolean; points: number } | null
  highlightUid?: string
  /** Vista del anfitrión: segundos para la siguiente ronda. */
  nextIn?: number | null
  /** Vista del anfitrión: tipo de la siguiente ronda (vista previa). */
  nextRoundType?: string | null
}

/** Pantalla entre rondas: respuesta correcta, dato de las Escrituras y tabla. */
export function ResultsScreen({
  round,
  players,
  teams,
  teamMode,
  myResult,
  highlightUid,
  nextIn,
  nextRoundType,
}: Props) {
  // Sonido de revelación: acierto/error en el teléfono, "ta-da" en la TV
  useEffect(() => {
    if (myResult === undefined || myResult === null) sound.reveal()
    else if (myResult.correct) sound.correct()
    else sound.wrong()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <div className="space-y-6">
      {myResult !== undefined && myResult !== null && (
        <div
          className={`rounded-2xl p-5 text-center ${
            myResult.correct
              ? 'sq-bounce bg-emerald-500/15 ring-1 ring-emerald-400'
              : 'sq-shake bg-rose-500/15 ring-1 ring-rose-400'
          }`}
        >
          <p className="text-4xl" aria-hidden>
            {myResult.correct ? '🎉' : '😔'}
          </p>
          <p className="mt-1 font-display text-2xl font-bold text-warm-white">
            {myResult.correct ? '¡Correcto!' : 'Incorrecto'}
          </p>
          {myResult.points > 0 && (
            <p className="sq-points-fly font-display text-2xl font-bold text-sg-gold-bright">
              +{myResult.points.toLocaleString('es')} pts
            </p>
          )}
        </div>
      )}

      <div className="sq-rise rounded-2xl border border-sg-gold/40 bg-gold-dim p-5">
        <p className="font-ui text-xs uppercase tracking-widest text-sg-gold-bright">
          Respuesta correcta
        </p>
        <p className="mt-1 font-display text-xl font-bold text-warm-white">
          {roundAnswerText(round)}
        </p>
      </div>

      {/* Dato de las Escrituras */}
      <div className="sq-rise sq-rise-2 sq-card p-5">
        <p className="flex items-center gap-2 font-ui text-xs font-bold uppercase tracking-widest text-sg-gold-light">
          📖 Dato de las Escrituras
        </p>
        <p className="mt-2 font-display text-lg leading-snug text-warm-white">
          {roundExplanation(round)}
        </p>
      </div>

      <LiveLeaderboard
        players={players}
        teams={teams}
        teamMode={teamMode}
        highlightUid={highlightUid}
        limit={8}
      />

      {typeof nextIn === 'number' && nextIn > 0 && (
        <p className="text-center font-ui text-sm text-warm-white/60">
          {nextRoundType
            ? `Siguiente ronda (${ROUND_TYPE_LABELS[nextRoundType] ?? nextRoundType}) en ${nextIn}…`
            : `Siguiente ronda en ${nextIn}…`}
        </p>
      )}
    </div>
  )
}
