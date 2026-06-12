import { useEffect, useState } from 'react'
import { useAuth } from '@/hooks/useAuth'
import { useToastStore } from '@/stores/toastStore'
import { StudyMode } from '../components/StudyMode'
import { QuestAuthGate, QuestShell } from '../components/QuestShell'
import {
  awardStudyBadgeIfEarned,
  fetchHistory,
  fetchStats,
  registerStudiedQuestion,
} from '../services/historyService'
import type { Question } from '../types'
import { loadAudioLibrary } from '../services/audioLibrary'
import { sound } from '../utils/sound'

/** Study mode: review every missed question from the saved game history. */
export default function StudyPage() {
  const { user } = useAuth()

  // Música suave de estudio si el admin subió pistas a esa etapa
  useEffect(() => {
    let cancelled = false
    void loadAudioLibrary().then(() => {
      if (!cancelled) sound.playStageLoop('study', 'silencio')
    })
    return () => {
      cancelled = true
      sound.stopMusic()
    }
  }, [])
  const addToast = useToastStore((s) => s.addToast)

  const [questions, setQuestions] = useState<Question[]>([])
  const [studiedIds, setStudiedIds] = useState<string[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    if (!user) return
    let cancelled = false
    void (async () => {
      try {
        const [history, stats] = await Promise.all([
          fetchHistory(user.uid),
          fetchStats(user.uid),
        ])
        if (cancelled) return
        const seen = new Set<string>()
        const missed: Question[] = []
        for (const entry of history) {
          for (const q of entry.missedQuestions ?? []) {
            if (!seen.has(q.id)) {
              seen.add(q.id)
              missed.push(q)
            }
          }
        }
        setQuestions(missed)
        setStudiedIds(stats.studiedQuestionIds)
      } catch {
        if (!cancelled) addToast('No se pudo cargar tu historial.', 'error')
      } finally {
        if (!cancelled) setLoading(false)
      }
    })()
    return () => {
      cancelled = true
    }
  }, [user, addToast])

  async function handleStudied(question: Question) {
    if (!user) return
    setStudiedIds((prev) => [...prev, question.id])
    try {
      const count = await registerStudiedQuestion(user.uid, question.id)
      const earned = await awardStudyBadgeIfEarned(user.uid, count)
      if (earned) {
        addToast('¡Insignia desbloqueada: Estudioso! 📖', 'success')
      }
    } catch {
      addToast('No se pudo guardar el repaso.', 'error')
    }
  }

  return (
    <QuestShell>
      <QuestAuthGate>
        <h2 className="mb-1 font-display text-3xl font-bold text-warm-white">
          Modo estudio
        </h2>
        <p className="mb-6 font-ui text-sm text-warm-white/60">
          Repasa las preguntas que fallaste en tus últimas partidas.
        </p>
        {loading ? (
          <p className="py-10 text-center font-ui text-warm-white/60">
            Cargando preguntas…
          </p>
        ) : (
          <StudyMode
            questions={questions}
            studiedIds={studiedIds}
            onStudied={(q) => void handleStudied(q)}
          />
        )}
      </QuestAuthGate>
    </QuestShell>
  )
}
