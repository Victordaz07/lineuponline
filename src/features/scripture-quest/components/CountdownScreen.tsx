import { useEffect, useMemo, useRef, useState } from 'react'
import { FixedStage } from './FixedStage'
import { useCountdown } from '../hooks/useCountdown'
import type { CountdownState, SQPlayer, GameConfig } from '../types/multiRound'

// ─── Avatar bubble ────────────────────────────────────────────────────────────

const AVATAR_COLORS = [
  '#1A6B5A', '#8B1A1A', '#1A3A8B', '#6B5A1A',
  '#5A1A6B', '#1A5A6B', '#6B3A1A', '#2A6B1A',
]

function PlayerBubble({ player, index }: { player: SQPlayer; index: number }) {
  return (
    <div
      className="flex flex-col items-center gap-2"
      style={{ animation: `sqRise 0.4s ease-out ${index * 80}ms both` }}
    >
      <div
        className="flex h-16 w-16 items-center justify-center rounded-full text-2xl font-bold text-white shadow-lg"
        style={{ background: AVATAR_COLORS[player.avatarIndex % AVATAR_COLORS.length] }}
      >
        {player.displayName.charAt(0).toUpperCase()}
      </div>
      <span
        className="max-w-[80px] truncate text-center font-ui text-xs text-parchment/70"
        title={player.displayName}
      >
        {player.displayName}
      </span>
    </div>
  )
}

// ─── Big animated number ──────────────────────────────────────────────────────

function CountNumber({ n, isPaused }: { n: number; isPaused: boolean }) {
  // Re-mount on each change to retrigger animation
  const prevRef = useRef(n)
  const [animKey, setAnimKey] = useState(0)

  useEffect(() => {
    if (n !== prevRef.current) {
      prevRef.current = n
      setAnimKey((k) => k + 1)
    }
  }, [n])

  if (isPaused) {
    return (
      <div className="flex flex-col items-center gap-3">
        <div
          className="flex h-36 w-36 items-center justify-center rounded-full border-4 border-sg-gold/40 bg-navy-mid/80"
          style={{ animation: 'sqPulse 2s ease-in-out infinite' }}
        >
          <span className="font-display text-6xl text-sg-gold">⏸</span>
        </div>
        <p className="font-ui text-lg font-semibold uppercase tracking-[0.2em] text-parchment/60">
          Pausado
        </p>
      </div>
    )
  }

  if (n <= 0) {
    return (
      <div
        className="flex h-36 w-36 items-center justify-center rounded-full bg-sg-gold/20"
        style={{ animation: 'sqPop 0.4s cubic-bezier(0.34,1.56,0.64,1)' }}
      >
        <span className="font-display text-6xl font-bold text-sg-gold">¡Ya!</span>
      </div>
    )
  }

  // Ring color shifts warm→urgent
  const urgentColors: Record<number, string> = {
    1: '#ef4444',
    2: '#f97316',
    3: '#eab308',
  }
  const ringColor = urgentColors[n] ?? '#D4AF62'
  const ringGlow = urgentColors[n]
    ? `0 0 40px ${urgentColors[n]}80, 0 0 80px ${urgentColors[n]}30`
    : '0 0 40px rgba(212,175,98,0.4), 0 0 80px rgba(212,175,98,0.15)'

  return (
    <div
      key={animKey}
      className="relative flex h-40 w-40 items-center justify-center rounded-full border-4"
      style={{
        borderColor: ringColor,
        boxShadow: ringGlow,
        animation: 'sqPop 0.35s cubic-bezier(0.34,1.56,0.64,1)',
        background: 'rgba(13,27,42,0.7)',
      }}
    >
      <span
        className="font-display font-bold leading-none"
        style={{ fontSize: 88, color: ringColor }}
      >
        {n}
      </span>
    </div>
  )
}

// ─── Starfield background ─────────────────────────────────────────────────────

function Starfield() {
  // Pseudoaleatorio determinista: sin funciones impuras durante el render
  const stars = useMemo(
    () =>
      Array.from({ length: 60 }, (_, i) => ({
        x: (i * 137.5) % 100,
        y: (i * 61.8 + 13) % 100,
        size: ((i * 7) % 20) / 10 + 0.5,
        opacity: ((i * 11) % 50) / 100 + 0.1,
        duration: ((i * 13) % 30) / 10 + 2,
        delay: i * 0.1,
      })),
    [],
  )

  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      {stars.map((s, i) => (
        <div
          key={i}
          className="absolute rounded-full bg-sg-gold-light"
          style={{
            left: `${s.x}%`,
            top: `${s.y}%`,
            width: s.size,
            height: s.size,
            opacity: s.opacity,
            animation: `sqPulse ${s.duration}s ease-in-out ${s.delay}s infinite`,
          }}
        />
      ))}
    </div>
  )
}

// ─── Progress arc (SVG ring timer) ───────────────────────────────────────────

function TimerRing({
  secsLeft,
  total,
  isPaused,
}: {
  secsLeft: number
  total: number
  isPaused: boolean
}) {
  const r = 76
  const circ = 2 * Math.PI * r
  const pct = isPaused ? secsLeft / total : Math.max(0, secsLeft / total)
  const dash = pct * circ

  return (
    <svg
      width="200"
      height="200"
      viewBox="0 0 200 200"
      className="absolute"
      style={{ transform: 'rotate(-90deg)' }}
    >
      {/* Background ring */}
      <circle
        cx="100" cy="100" r={r}
        fill="none"
        stroke="rgba(212,175,98,0.08)"
        strokeWidth="4"
      />
      {/* Progress ring */}
      <circle
        cx="100" cy="100" r={r}
        fill="none"
        stroke={isPaused ? 'rgba(212,175,98,0.3)' : '#D4AF62'}
        strokeWidth="4"
        strokeLinecap="round"
        strokeDasharray={`${dash} ${circ}`}
        style={{ transition: 'stroke-dasharray 0.15s linear, stroke 0.3s' }}
      />
    </svg>
  )
}

// ─── Host controls ────────────────────────────────────────────────────────────

function HostControls({
  isPaused,
  secsLeft,
  onPause,
  onResume,
  onStartNow,
  onCancel,
}: {
  isPaused: boolean
  secsLeft: number
  onPause: (secsLeft: number) => void
  onResume: (secsLeft: number) => void
  onStartNow: () => void
  onCancel: () => void
}) {
  return (
    <div className="flex items-center gap-4">
      <button
        onClick={onCancel}
        className="rounded-2xl border border-parchment/15 px-5 py-2.5 font-ui text-sm text-parchment/40 transition hover:border-parchment/30 hover:text-parchment/60"
      >
        ← Cancelar
      </button>

      {isPaused ? (
        <button
          onClick={() => onResume(secsLeft)}
          className="flex items-center gap-2 rounded-2xl border-2 border-sg-gold/50 bg-sg-gold/10 px-7 py-2.5 font-ui text-base font-semibold text-sg-gold transition hover:bg-sg-gold/20"
        >
          ▶ Reanudar conteo
        </button>
      ) : (
        <button
          onClick={() => onPause(secsLeft)}
          className="flex items-center gap-2 rounded-2xl border-2 border-parchment/20 bg-navy-mid/60 px-7 py-2.5 font-ui text-base font-semibold text-parchment/70 transition hover:border-parchment/40 hover:text-parchment"
        >
          ⏸ Pausar
        </button>
      )}

      <button
        onClick={onStartNow}
        className="flex items-center gap-2 rounded-2xl bg-sg-gold px-8 py-2.5 font-ui text-base font-bold text-ink shadow-lg transition hover:bg-sg-gold-light active:scale-95"
      >
        Iniciar ya ▶▶
      </button>
    </div>
  )
}

// ─── CountdownScreen ──────────────────────────────────────────────────────────

export interface CountdownScreenProps {
  countdown: CountdownState
  config: GameConfig
  players: SQPlayer[]
  isHost: boolean
  onPause: (secsLeft: number) => void
  onResume: (secsLeft: number) => void
  onStartNow: () => void
  onCancel: () => void
  /** Called when the countdown naturally reaches 0 */
  onDone: () => void
  className?: string
}

export function CountdownScreen({
  countdown,
  config,
  players,
  isHost,
  onPause,
  onResume,
  onStartNow,
  onCancel,
  onDone,
  className = '',
}: CountdownScreenProps) {
  const { secsLeft, isPaused } = useCountdown(
    countdown,
    config.countdownDuration,
    onDone,
  )

  // Show max 8 players; if more, show +N
  const visiblePlayers = players.slice(0, 8)
  const extraCount = players.length - visiblePlayers.length

  return (
    <div className={`relative h-full w-full bg-navy-deep ${className}`}>
      <FixedStage className="h-full w-full">
        {/* Background */}
        <div className="relative flex h-full w-full flex-col items-center justify-between overflow-hidden bg-navy-deep px-16 py-12">
          {/* Radial glow from center */}
          <div
            className="pointer-events-none absolute inset-0"
            style={{
              background:
                'radial-gradient(ellipse 60% 50% at 50% 55%, rgba(212,175,98,0.07) 0%, transparent 70%)',
            }}
          />
          <Starfield />

          {/* ── Top: branding ── */}
          <div className="relative z-10 text-center">
            <p className="font-ui text-xs font-semibold uppercase tracking-[0.25em] text-sg-gold/60">
              ⚔️ Scripture Quest
            </p>
            <h1 className="mt-2 font-display text-5xl font-bold text-parchment">
              {isPaused
                ? 'Esperando jugadores…'
                : secsLeft <= 0
                  ? '¡Comienza la partida!'
                  : '¡Prepárense!'}
            </h1>
            <p className="mt-1 font-ui text-base text-parchment/45">
              {config.totalRounds} preguntas
              {config.withTeams ? ' · Con equipos' : ' · Individual'}
            </p>
          </div>

          {/* ── Center: countdown number ── */}
          <div className="relative z-10 flex items-center justify-center">
            <TimerRing
              secsLeft={secsLeft}
              total={config.countdownDuration}
              isPaused={isPaused}
            />
            <CountNumber n={secsLeft} isPaused={isPaused} />
          </div>

          {/* ── Players ── */}
          <div className="relative z-10 flex flex-col items-center gap-4">
            {players.length > 0 ? (
              <div className="flex flex-wrap items-end justify-center gap-6">
                {visiblePlayers.map((p, i) => (
                  <PlayerBubble key={p.uid} player={p} index={i} />
                ))}
                {extraCount > 0 && (
                  <div className="flex h-16 w-16 items-center justify-center rounded-full border-2 border-dashed border-sg-gold/30 text-sg-gold/60">
                    <span className="font-ui text-sm font-semibold">+{extraCount}</span>
                  </div>
                )}
              </div>
            ) : (
              <p className="font-ui text-sm text-parchment/30">
                Sin jugadores aún…
              </p>
            )}

            {players.length > 0 && (
              <p className="font-ui text-xs text-parchment/35">
                {players.length} jugador{players.length !== 1 ? 'es' : ''} listo
                {players.length !== 1 ? 's' : ''}
              </p>
            )}
          </div>

          {/* ── Host controls ── */}
          {isHost && (
            <div className="relative z-10">
              <HostControls
                isPaused={isPaused}
                secsLeft={secsLeft}
                onPause={onPause}
                onResume={onResume}
                onStartNow={onStartNow}
                onCancel={onCancel}
              />
            </div>
          )}

          {/* Non-host waiting message */}
          {!isHost && (
            <p
              className="relative z-10 font-ui text-sm text-parchment/35"
              style={{ animation: 'sqPulse 2s ease-in-out infinite' }}
            >
              El anfitrión iniciará la partida en breve…
            </p>
          )}
        </div>
      </FixedStage>

      {/* Keyframes — injected once */}
      <style>{`
        @keyframes sqRise {
          from { opacity: 0; transform: translateY(20px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        @keyframes sqPop {
          0%   { transform: scale(0.6); opacity: 0.3; }
          60%  { transform: scale(1.08); }
          100% { transform: scale(1); opacity: 1; }
        }
        @keyframes sqPulse {
          0%, 100% { opacity: 1; }
          50%       { opacity: 0.4; }
        }
      `}</style>
    </div>
  )
}
