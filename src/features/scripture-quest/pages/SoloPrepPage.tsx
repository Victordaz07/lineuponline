/**
 * Pantalla de preparación antes del modo solitario.
 * Cuenta regresiva de 7 s con anillo SVG animado + opción de saltar.
 */
import { useEffect, useState } from 'react'
import { useNavigate, useSearchParams } from 'react-router-dom'
import { QuestAuthGate, QuestShell } from '../components/QuestShell'
import { getTopicById } from '../data/topics'
import { loadAudioLibrary } from '../services/audioLibrary'
import { sound } from '../utils/sound'
import type { QuestLevel } from '../types'

const DURATION = 7
const RADIUS = 52
const CIRCUMFERENCE = 2 * Math.PI * RADIUS

export default function SoloPrepPage() {
  const navigate = useNavigate()
  const [params] = useSearchParams()
  const topicId = params.get('topic') ?? 'mixed'
  const level = (Number(params.get('level')) || 1) as QuestLevel
  const topic = getTopicById(topicId)

  const [remaining, setRemaining] = useState(DURATION)

  const goToSolo = () =>
    navigate(`/games/scripture-quest/solo?topic=${topicId}&level=${level}`, { replace: true })

  // Música de lobby mientras espera
  useEffect(() => {
    void loadAudioLibrary().then(() => sound.playStageLoop('lobby', 'festivo'))
    return () => sound.stopMusic()
  }, [])

  // Temporizador
  useEffect(() => {
    const start = Date.now()
    const id = setInterval(() => {
      const left = Math.max(0, DURATION - (Date.now() - start) / 1000)
      setRemaining(left)
      if (left === 0) {
        clearInterval(id)
        navigate(`/games/scripture-quest/solo?topic=${topicId}&level=${level}`, { replace: true })
      }
    }, 80)
    return () => clearInterval(id)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const fraction = remaining / DURATION
  const dashOffset = CIRCUMFERENCE * (1 - fraction)
  const displayNum = Math.ceil(remaining)

  // Color del anillo: dorado → ámbar cuando quedan ≤ 2 s
  const ringColor = remaining <= 2 ? '#F59E0B' : '#E8C87A'

  return (
    <QuestShell>
      <QuestAuthGate>
        <div className="flex min-h-[82vh] flex-col items-center justify-center gap-7 px-4 text-center">
          {/* Encabezado */}
          <div>
            <p className="font-ui text-[11px] uppercase tracking-[0.22em] text-sg-gold-light">
              Modo solitario
            </p>
            <h1 className="mt-1 font-display text-4xl font-bold text-warm-white">
              ¡Prepárate!
            </h1>
            <p className="mt-1 font-ui text-sm text-warm-white/50">
              La práctica comienza en…
            </p>
          </div>

          {/* Anillo de cuenta regresiva */}
          <div className="relative flex items-center justify-center">
            {/* Brillo de fondo */}
            <div
              className="absolute rounded-full blur-2xl transition-opacity duration-700"
              style={{
                width: 120,
                height: 120,
                background: `radial-gradient(circle, ${ringColor}22 0%, transparent 70%)`,
              }}
            />
            <svg width="144" height="144" className="-rotate-90" aria-hidden>
              {/* Pista */}
              <circle
                cx="72" cy="72" r={RADIUS}
                fill="none"
                stroke="rgba(184,146,58,0.12)"
                strokeWidth="7"
              />
              {/* Progreso */}
              <circle
                cx="72" cy="72" r={RADIUS}
                fill="none"
                stroke={ringColor}
                strokeWidth="7"
                strokeLinecap="round"
                strokeDasharray={CIRCUMFERENCE}
                strokeDashoffset={dashOffset}
                style={{ transition: 'stroke-dashoffset 0.08s linear, stroke 0.4s ease' }}
              />
            </svg>
            {/* Número */}
            <span
              className="absolute font-display font-bold text-warm-white transition-all duration-300"
              style={{ fontSize: displayNum >= 10 ? '2.6rem' : '3.5rem', lineHeight: 1 }}
            >
              {displayNum}
            </span>
          </div>

          {/* Tema + nivel */}
          <div className="flex items-center gap-2 rounded-full border border-sg-gold/25 bg-navy-light/30 px-5 py-2 backdrop-blur-sm">
            <span className="font-ui text-sm font-semibold text-sg-gold-bright">
              {topic?.label ?? topicId}
            </span>
            <span className="text-sg-gold/30">·</span>
            <span className="font-ui text-sm text-warm-white/60">Nivel {level}</span>
          </div>

          {/* Info pills */}
          <div className="flex flex-wrap justify-center gap-3">
            {[
              { icon: '📚', text: '10 rondas' },
              { icon: '⚡', text: 'Velocidad cuenta' },
              { icon: '🔥', text: 'Rachas bonus' },
            ].map(({ icon, text }) => (
              <span
                key={text}
                className="rounded-xl border border-navy-light bg-navy-light/25 px-3 py-1.5 font-ui text-xs text-warm-white/60"
              >
                {icon} {text}
              </span>
            ))}
          </div>

          {/* Botón saltar */}
          <button
            type="button"
            onClick={goToSolo}
            className="mt-2 rounded-xl border border-sg-gold/35 px-8 py-3 font-ui text-sm font-bold uppercase tracking-wide text-sg-gold-bright transition hover:bg-sg-gold/10 active:scale-95"
          >
            Saltar →
          </button>
        </div>
      </QuestAuthGate>
    </QuestShell>
  )
}
