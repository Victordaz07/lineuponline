import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useAuth } from '@/hooks/useAuth'
import { useToastStore } from '@/stores/toastStore'
import { CodeInput } from '../components/CodeInput'
import { QuestAuthGate, QuestShell } from '../components/QuestShell'
import { TOPICS } from '../data/topics'
import { fetchApprovedRounds, selectRounds } from '../services/bankService'
import { createRoom } from '../services/roomService'
import { useGameStore } from '../store/gameStore'
import type { QuestLevel } from '../types'
import { isValidRoomCode } from '../utils/roomCodeGenerator'

const ROUNDS_PER_GAME = 10

const LEVELS: { value: QuestLevel; label: string }[] = [
  { value: 1, label: 'Nivel 1 · Reconocimiento' },
  { value: 2, label: 'Nivel 2 · Comprensión' },
  { value: 3, label: 'Nivel 3 · Aplicación' },
  { value: 4, label: 'Nivel 4 · Análisis profundo' },
]

/** Landing: crear sala (tema + nivel) o unirse con el código de 6 casillas. */
export default function LandingPage() {
  const navigate = useNavigate()
  const { user } = useAuth()
  const addToast = useToastStore((s) => s.addToast)
  const setActiveRoom = useGameStore((s) => s.setActiveRoom)

  const [tab, setTab] = useState<'host' | 'join'>('host')
  const [topicId, setTopicId] = useState(TOPICS[0].id)
  const [level, setLevel] = useState<QuestLevel>(1)
  const [teamMode, setTeamMode] = useState(false)
  const [creating, setCreating] = useState(false)
  const [joinCode, setJoinCode] = useState('')

  async function handleCreate() {
    if (!user) return
    setCreating(true)
    try {
      // Las rondas se sortean del banco aprobado: cero llamadas a IA
      const pool = await fetchApprovedRounds()
      const rounds = selectRounds(pool, { topicId, level, count: ROUNDS_PER_GAME, teamMode })
      if (rounds.length === 0) {
        addToast('No hay rondas aprobadas para ese tema y nivel.', 'error')
        return
      }
      const code = await createRoom({ hostId: user.uid, topicId, level, teamMode, rounds })
      setActiveRoom(code, 'host')
      navigate(`/games/scripture-quest/host/${code}`)
    } catch {
      addToast('No se pudo crear la sala. Intenta de nuevo.', 'error')
    } finally {
      setCreating(false)
    }
  }

  function handleJoin(code: string = joinCode) {
    if (!isValidRoomCode(code)) {
      addToast('El código debe tener 6 caracteres.', 'error')
      return
    }
    navigate(`/games/scripture-quest/play/${code}`)
  }

  const selectedTopic = TOPICS.find((t) => t.id === topicId)

  return (
    <QuestShell>
      <QuestAuthGate>
        <p className="mb-6 max-w-2xl font-ui text-sm text-warm-white/70">
          Trivia de las Escrituras multijugador en tiempo real: preguntas clásicas,
          versículos para completar, mímica en equipo, ¿quién soy? y más.
        </p>

        <div className="mb-6 flex gap-2">
          {(
            [
              ['host', 'Crear sala'],
              ['join', 'Unirme con código'],
            ] as const
          ).map(([key, label]) => (
            <button
              key={key}
              type="button"
              onClick={() => setTab(key)}
              className={`rounded-xl px-5 py-2.5 font-ui text-sm font-bold uppercase tracking-wide transition ${
                tab === key
                  ? 'bg-sg-gold text-navy-deep'
                  : 'bg-navy-light/50 text-warm-white/70 hover:text-warm-white'
              }`}
            >
              {label}
            </button>
          ))}
        </div>

        {tab === 'host' ? (
          <div className="space-y-5 sq-rise">
            <div className="space-y-1.5">
              <span className="font-ui text-sm font-medium text-sg-gold-light">Tema</span>
              <div className="grid gap-2 sm:grid-cols-2">
                {TOPICS.map((t) => (
                  <button
                    key={t.id}
                    type="button"
                    onClick={() => setTopicId(t.id)}
                    className={`rounded-xl border p-3 text-left transition ${
                      topicId === t.id
                        ? 'border-sg-gold bg-gold-dim'
                        : 'border-navy-light bg-navy-light/40 hover:border-sg-gold/50'
                    }`}
                  >
                    <p className="font-display text-base font-bold text-warm-white">{t.label}</p>
                  </button>
                ))}
              </div>
              {selectedTopic && (
                <p className="font-ui text-xs text-warm-white/60">{selectedTopic.description}</p>
              )}
            </div>

            <div className="space-y-1.5">
              <span className="font-ui text-sm font-medium text-sg-gold-light">Dificultad</span>
              <div className="grid gap-2 sm:grid-cols-2">
                {LEVELS.map((l) => (
                  <button
                    key={l.value}
                    type="button"
                    onClick={() => setLevel(l.value)}
                    className={`rounded-xl border px-4 py-2.5 text-left font-ui text-sm transition ${
                      level === l.value
                        ? 'border-sg-gold bg-gold-dim text-warm-white'
                        : 'border-navy-light bg-navy-light/40 text-warm-white/70 hover:border-sg-gold/50'
                    }`}
                  >
                    {l.label}
                  </button>
                ))}
              </div>
            </div>

            <label className="flex cursor-pointer items-center gap-3 rounded-xl border border-navy-light bg-navy-light/40 px-4 py-3">
              <input
                type="checkbox"
                checked={teamMode}
                onChange={(e) => setTeamMode(e.target.checked)}
                className="h-5 w-5 accent-sg-gold"
              />
              <span className="font-ui text-sm text-warm-white">
                Modo por equipos
                <span className="block text-xs text-warm-white/60">
                  Votación en vivo, líder que confirma y rondas de mímica exclusivas.
                </span>
              </span>
            </label>

            <button
              type="button"
              disabled={creating}
              onClick={() => void handleCreate()}
              className="w-full rounded-xl bg-sg-gold py-4 font-ui text-base font-bold uppercase tracking-wide text-navy-deep transition hover:bg-sg-gold-light disabled:opacity-40"
            >
              {creating ? 'Sorteando rondas…' : 'Crear sala'}
            </button>
          </div>
        ) : (
          <div className="mx-auto max-w-sm space-y-5 sq-rise">
            <p className="text-center font-ui text-sm font-medium text-sg-gold-light">
              Ingresa el código de la sala
            </p>
            <CodeInput value={joinCode} onChange={setJoinCode} onComplete={handleJoin} />
            <button
              type="button"
              onClick={() => handleJoin()}
              disabled={!isValidRoomCode(joinCode)}
              className="w-full rounded-xl bg-sg-gold py-4 font-ui text-base font-bold uppercase tracking-wide text-navy-deep transition hover:bg-sg-gold-light disabled:opacity-40"
            >
              Unirme
            </button>
          </div>
        )}
      </QuestAuthGate>
    </QuestShell>
  )
}
