/**
 * Modo solitario: práctica individual a ritmo propio, 100% local durante el
 * juego (sin sala ni Firestore por ronda). Misma puntuación que el modo
 * multijugador; al final guarda historial e insignias como cualquier partida.
 */
import { useEffect, useMemo, useRef, useState, useCallback } from 'react'
import { Link, useNavigate, useSearchParams } from 'react-router-dom'
import { useAuth } from '@/hooks/useAuth'
import { QuestAuthGate, QuestShell } from '../components/QuestShell'
import { RoundPanel } from '../components/RoundPanels'
import { SQIcon } from '../components/SQIcon'
import { BADGES, ROUND_TYPE_LABELS } from '../data/badges'
import { getTopicById } from '../data/topics'
import { fetchApprovedRounds, selectRounds } from '../services/bankService'
import { finalizeGameForPlayer } from '../services/historyService'
import { loadAudioLibrary } from '../services/audioLibrary'
import { useGameStore } from '../store/gameStore'
import type { BadgeId, GameRound, Player, QuestLevel } from '../types'
import {
  TIMER_BY_TYPE,
  evaluateAnswer,
  isPassing,
  roundAnswerText,
  roundExplanation,
  roundToStudyQuestion,
} from '../utils/scoreCalculator'
import { sound } from '../utils/sound'

const ROUNDS_PER_GAME = 10

// ─── Confetti ─────────────────────────────────────────────────────────────────
const COLORS = ['#E8C87A', '#D4AF62', '#F5EFE0', '#ffffff', '#B8923A', '#fbbf24']

function Confetti() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  const launch = useCallback(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    if (!ctx) return

    canvas.width = window.innerWidth
    canvas.height = window.innerHeight

    type Particle = {
      x: number; y: number; vx: number; vy: number
      angle: number; spin: number; size: number
      color: string; shape: 'rect' | 'circle'
      alpha: number
    }

    const particles: Particle[] = Array.from({ length: 140 }, () => ({
      x: Math.random() * canvas.width,
      y: -10 - Math.random() * 200,
      vx: (Math.random() - 0.5) * 4,
      vy: 2 + Math.random() * 4,
      angle: Math.random() * Math.PI * 2,
      spin: (Math.random() - 0.5) * 0.2,
      size: 6 + Math.random() * 8,
      color: COLORS[Math.floor(Math.random() * COLORS.length)],
      shape: Math.random() > 0.4 ? 'rect' : 'circle',
      alpha: 1,
    }))

    let raf: number
    const tick = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)
      let alive = false
      for (const p of particles) {
        p.x += p.vx
        p.y += p.vy
        p.vy += 0.07
        p.angle += p.spin
        if (p.y > canvas.height * 0.7) p.alpha = Math.max(0, p.alpha - 0.025)
        if (p.alpha <= 0) continue
        alive = true
        ctx.save()
        ctx.globalAlpha = p.alpha
        ctx.fillStyle = p.color
        ctx.translate(p.x, p.y)
        ctx.rotate(p.angle)
        if (p.shape === 'rect') {
          ctx.fillRect(-p.size / 2, -p.size / 4, p.size, p.size / 2)
        } else {
          ctx.beginPath()
          ctx.arc(0, 0, p.size / 2, 0, Math.PI * 2)
          ctx.fill()
        }
        ctx.restore()
      }
      if (alive) raf = requestAnimationFrame(tick)
      else ctx.clearRect(0, 0, canvas.width, canvas.height)
    }
    raf = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(raf)
  }, [])

  useEffect(() => {
    const stop = launch()
    return stop
  }, [launch])

  return (
    <canvas
      ref={canvasRef}
      className="pointer-events-none fixed inset-0 z-50"
      aria-hidden
    />
  )
}

type Phase = 'loading' | 'question' | 'reveal' | 'end'

type SoloState = {
  phase: Phase
  index: number
  score: number
  streak: number
  maxStreak: number
  results: { correct: boolean; points: number }[]
  /** Respuesta enviada en la ronda actual (null = sin responder) */
  answer: string | null
  startedAt: number
}

const INITIAL: SoloState = {
  phase: 'loading',
  index: 0,
  score: 0,
  streak: 0,
  maxStreak: 0,
  results: [],
  answer: null,
  startedAt: 0,
}

export default function SoloPage() {
  const navigate = useNavigate()
  const { user } = useAuth()
  const [params] = useSearchParams()
  const topicId = params.get('topic') ?? 'mixed'
  const level = (Number(params.get('level')) || 1) as QuestLevel
  const { playerName, avatar } = useGameStore()

  const [rounds, setRounds] = useState<GameRound[]>([])
  const [state, setState] = useState<SoloState>(INITIAL)
  const [now, setNow] = useState(() => Date.now())
  const [newBadges, setNewBadges] = useState<BadgeId[]>([])
  const [saving, setSaving] = useState(false)
  const finalizedRef = useRef(false)

  useEffect(() => {
    sound.setProfile('solo')
    void loadAudioLibrary()
    return () => {
      sound.stopMusic()
      sound.setProfile('player')
    }
  }, [])

  // Música de fondo: comienza con la primera pregunta y no se interrumpe entre rondas
  useEffect(() => {
    if (rounds.length === 0) return
    if (state.phase === 'question') {
      // playForRoom usa el guard interno para no reiniciar si ya está sonando
      sound.playForRoom('playing', 'festivo')
    } else if (state.phase === 'end') {
      sound.playForRoom('ended', 'festivo')
    }
    // reveal: la música continúa sin interrupciones
  }, [state.phase, rounds.length])

  // Sorteo de rondas al entrar (sin mímica: teamMode false)
  useEffect(() => {
    let cancelled = false
    void (async () => {
      const pool = await fetchApprovedRounds()
      const drawn = selectRounds(pool, {
        topicId,
        level,
        count: ROUNDS_PER_GAME,
        teamMode: false,
      })
      if (!cancelled) {
        setRounds(drawn)
        setState({ ...INITIAL, phase: drawn.length > 0 ? 'question' : 'end', startedAt: Date.now() })
      }
    })()
    return () => {
      cancelled = true
    }
  }, [topicId, level])

  const round = rounds[state.index]
  const duration = round ? TIMER_BY_TYPE[round.roundType] : 20
  const elapsed = state.phase === 'question' ? (now - state.startedAt) / 1000 : 0
  const remaining = Math.max(0, Math.ceil(duration - elapsed))
  const expired = state.phase === 'question' && elapsed >= duration

  // Reloj local (solo durante la pregunta)
  useEffect(() => {
    if (state.phase !== 'question') return
    const interval = setInterval(() => setNow(Date.now()), 250)
    return () => clearInterval(interval)
  }, [state.phase, state.index])

  function closeRound(answer: string | null) {
    if (!round || state.phase !== 'question') return
    const answeredAt = (Date.now() - state.startedAt) / 1000
    const evaluation = evaluateAnswer(round, answer, answeredAt, state.streak)
    if (evaluation.correct) sound.correct()
    else sound.wrong()
    const newStreak = evaluation.correct ? state.streak + 1 : 0
    setState((s) => ({
      ...s,
      phase: 'reveal',
      answer,
      score: s.score + evaluation.points,
      streak: newStreak,
      maxStreak: Math.max(s.maxStreak, newStreak),
      results: [...s.results, evaluation],
    }))
  }

  // Tiempo agotado sin responder → revelar como incorrecta
  useEffect(() => {
    if (!expired || state.phase !== 'question') return
    const timeout = setTimeout(() => closeRound(null), 0)
    return () => clearTimeout(timeout)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [expired, state.phase])

  function nextRound() {
    if (state.index + 1 >= rounds.length) {
      setState((s) => ({ ...s, phase: 'end' }))
    } else {
      setState((s) => ({
        ...s,
        phase: 'question',
        index: s.index + 1,
        answer: null,
        startedAt: Date.now(),
      }))
      setNow(Date.now())
    }
  }

  const summary = useMemo(() => {
    const correct = state.results.filter((r) => r.correct).length
    const missed = rounds
      .filter((_, i) => !state.results[i]?.correct)
      .map(roundToStudyQuestion)
    return { correct, missed, passed: isPassing(correct, rounds.length) }
  }, [state.results, rounds])

  // Fanfarria al llegar al resumen final
  useEffect(() => {
    if (state.phase === 'end' && rounds.length > 0) sound.fanfare()
  }, [state.phase, rounds.length])

  // Guardar historial e insignias al terminar (una sola vez)
  useEffect(() => {
    if (state.phase !== 'end' || rounds.length === 0 || !user || finalizedRef.current) return
    finalizedRef.current = true
    const payload = {
      uid: user.uid,
      roomId: `solo-${Date.now()}`,
      topicId,
      level,
      score: state.score,
      totalQuestions: rounds.length,
      correctAnswers: summary.correct,
      missedQuestions: summary.missed,
      maxStreak: state.maxStreak,
      // En solitario, "ganar" significa aprobar la práctica (>60 %)
      wonGame: summary.passed,
    }
    setTimeout(() => {
      setSaving(true)
      finalizeGameForPlayer(payload)
        .then(setNewBadges)
        .catch(() => undefined)
        .finally(() => setSaving(false))
    }, 0)
  }, [state.phase, rounds.length, user, topicId, level, state.score, state.maxStreak, summary])

  // Jugador local ficticio para reutilizar los paneles del modo multijugador
  const fakeMe: Player = {
    uid: user?.uid ?? 'solo',
    name: playerName || 'Tú',
    avatar,
    score: state.score,
    teamId: null,
    isLeader: false,
    answeredCurrentQuestion: state.answer !== null,
    currentAnswer: state.answer,
    answerElapsed: null,
    streak: state.streak,
    maxStreak: state.maxStreak,
    results: {},
  }

  const topic = getTopicById(topicId)
  const lastResult = state.results[state.results.length - 1]

  return (
    <QuestShell>
      <QuestAuthGate>
        {state.phase === 'loading' && (
          <p className="py-16 text-center font-ui text-warm-white/60 sq-pulse">
            Preparando tu práctica…
          </p>
        )}

        {state.phase !== 'loading' && state.phase !== 'end' && round && (
          <div className="mx-auto max-w-lg space-y-4">
            <div className="flex items-center justify-between font-ui text-xs uppercase tracking-widest text-sg-gold-light">
              <span>
                {topic?.label ?? topicId} · Ronda {state.index + 1}/{rounds.length}
              </span>
              <span className="font-display text-base normal-case tracking-normal text-sg-gold-bright">
                {state.score.toLocaleString('es')} pts
                {state.streak >= 2 && ` · 🔥${state.streak}`}
              </span>
            </div>

            {state.phase === 'question' && (
              <RoundPanel
                round={round}
                me={fakeMe}
                myTeam={undefined}
                players={[fakeMe]}
                remaining={remaining}
                expired={expired}
                onAnswer={closeRound}
                onVote={() => undefined}
                onConfirm={() => undefined}
              />
            )}

            {state.phase === 'reveal' && lastResult && (
              <div className="space-y-4">
                <div
                  className={`sq-pop rounded-2xl p-5 text-center ${
                    lastResult.correct
                      ? 'bg-emerald-500/15 ring-1 ring-emerald-400'
                      : 'bg-rose-500/15 ring-1 ring-rose-400'
                  }`}
                >
                  <p className="text-4xl" aria-hidden>
                    {lastResult.correct ? '🎉' : '😔'}
                  </p>
                  <p className="mt-1 font-display text-2xl font-bold text-warm-white">
                    {lastResult.correct
                      ? '¡Correcto!'
                      : state.answer === null
                        ? 'Se acabó el tiempo'
                        : 'Incorrecto'}
                  </p>
                  {lastResult.points > 0 && (
                    <p className="font-ui text-sg-gold-bright">
                      +{lastResult.points.toLocaleString('es')} pts
                    </p>
                  )}
                </div>

                <div className="sq-rise rounded-2xl border border-sg-gold/40 bg-gold-dim p-5">
                  <p className="font-ui text-xs uppercase tracking-widest text-sg-gold-bright">
                    Respuesta correcta
                  </p>
                  <p className="mt-1 font-display text-xl font-bold text-warm-white">
                    {roundAnswerText(round)}
                  </p>
                </div>

                <div className="sq-rise sq-rise-2 sq-card p-5">
                  <p className="font-ui text-xs font-bold uppercase tracking-widest text-sg-gold-light">
                    📖 Dato de las Escrituras
                  </p>
                  <p className="mt-2 font-display text-lg leading-snug text-warm-white">
                    {roundExplanation(round)}
                  </p>
                </div>

                <button
                  type="button"
                  onClick={nextRound}
                  className="w-full rounded-xl bg-sg-gold py-4 font-ui text-base font-bold uppercase tracking-wide text-navy-deep transition hover:bg-sg-gold-light"
                >
                  {state.index + 1 >= rounds.length
                    ? 'Ver mi resultado'
                    : `Siguiente ronda (${ROUND_TYPE_LABELS[rounds[state.index + 1].roundType]})`}
                </button>
              </div>
            )}
          </div>
        )}

        {state.phase === 'end' && (
          <div className="mx-auto max-w-sm space-y-5">
            {summary.passed && <Confetti />}
            <div className="sq-pop sq-card p-6 text-center">
              <p className="text-5xl" aria-hidden>
                {summary.passed ? '🏆' : '💪'}
              </p>
              <h2 className="mt-2 font-display text-3xl font-bold text-warm-white">
                {summary.passed ? '¡Práctica aprobada!' : '¡Sigue practicando!'}
              </h2>
              <p className="mt-1 font-ui text-sm text-warm-white/60">
                {topic?.label ?? topicId} · Nivel {level}
              </p>
              <p className="mt-3 font-display text-5xl font-bold text-sg-gold-bright">
                {state.score.toLocaleString('es')}
              </p>
              <p className="font-ui text-xs text-warm-white/60">puntos</p>
              <p className="mt-3 font-ui text-sm text-warm-white">
                {summary.correct}/{rounds.length} correctas
                {state.maxStreak >= 2 && ` · 🔥 Mejor racha: ${state.maxStreak}`}
              </p>
              {saving && (
                <p className="mt-2 font-ui text-xs text-warm-white/50 sq-pulse">
                  Guardando resultados…
                </p>
              )}
            </div>

            {newBadges.length > 0 && (
              <div className="space-y-2">
                {newBadges.map((id) => (
                  <div
                    key={id}
                    className="sq-pop flex items-center gap-3 rounded-2xl border border-sg-gold bg-gold-dim p-4"
                  >
                    <span className="text-sg-gold-bright">
                      <SQIcon name={BADGES[id].icon} size={36} />
                    </span>
                    <span>
                      <span className="block font-display text-lg font-bold text-warm-white">
                        {BADGES[id].label}
                      </span>
                      <span className="font-ui text-xs text-warm-white/70">
                        {BADGES[id].description}
                      </span>
                    </span>
                  </div>
                ))}
              </div>
            )}

            {summary.missed.length > 0 && (
              <Link
                to="/games/scripture-quest/study"
                className="sq-rise block rounded-2xl border border-navy-light bg-navy-light/40 p-4 text-center transition hover:border-sg-gold"
              >
                <p className="font-ui text-sm text-warm-white">
                  Fallaste{' '}
                  <span className="font-bold text-sg-gold-bright">{summary.missed.length}</span>{' '}
                  pregunta{summary.missed.length === 1 ? '' : 's'}
                </p>
                <p className="mt-1 font-ui text-xs font-bold uppercase tracking-wide text-sg-gold-bright">
                  Repasar en modo estudio →
                </p>
              </Link>
            )}

            <div className="flex justify-center gap-3">
              <button
                type="button"
                onClick={() => {
                  finalizedRef.current = false
                  setNewBadges([])
                  navigate(0)
                }}
                className="rounded-xl bg-sg-gold px-5 py-2.5 font-ui text-xs font-bold uppercase tracking-wide text-navy-deep transition hover:bg-sg-gold-light"
              >
                Otra práctica
              </button>
              <Link
                to="/games/scripture-quest"
                className="rounded-xl border border-sg-gold px-5 py-2.5 font-ui text-xs font-bold uppercase tracking-wide text-sg-gold-bright transition hover:bg-sg-gold hover:text-navy-deep"
              >
                Menú del juego
              </Link>
            </div>
          </div>
        )}
      </QuestAuthGate>
    </QuestShell>
  )
}
