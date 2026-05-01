import { useState } from 'react'
import type { FormEvent } from 'react'
import { Link } from 'react-router-dom'
import { useSyncNotes } from '@/hooks/useSyncNotes'
import type { UserNoteInput } from '@/types/userNotes'

export function NotesPage() {
  const [topicId, setTopicId] = useState('reflexion-general')
  const [moduleId, setModuleId] = useState('notas-personales')
  const [question, setQuestion] = useState('¿Qué aprendiste hoy en tu estudio?')
  const [answerText, setAnswerText] = useState('')
  const [statusMessage, setStatusMessage] = useState<string | null>(null)

  const userId = 'demo-user'
  const { isOnline, isSyncing, pendingCount, lastError, saveNote, flushPending } = useSyncNotes({
    userId,
  })

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()

    const trimmedAnswer = answerText.trim()
    if (!trimmedAnswer) {
      setStatusMessage('Escribe una respuesta antes de guardar.')
      return
    }

    const note: UserNoteInput = {
      noteId: crypto.randomUUID(),
      topicId: topicId.trim(),
      moduleId: moduleId.trim(),
      question: question.trim(),
      answerText: trimmedAnswer,
      clientUpdatedAt: new Date().toISOString(),
    }

    await saveNote(note)
    setAnswerText('')
    setStatusMessage(
      isOnline
        ? 'Nota guardada y enviada para sincronización.'
        : 'Nota guardada localmente. Se sincronizará al volver la conexión.',
    )
  }

  return (
    <>
      <div className="mb-6">
        <Link to="/" className="font-ui text-sm text-gold-main hover:text-blue-accent">
          ← Volver al inicio
        </Link>
        <h1 className="mt-3 font-title text-2xl text-blue-accent">Notas de reflexión</h1>
        <p className="mt-2 font-ui text-sm text-text-muted">
          Notas generales de la app (las guías HTML LUL tienen sus propias notas dentro del estudio).
        </p>
      </div>

      <section className="notes-card">
        <h2 className="mb-4 text-xl text-blue-accent">Guardar nota</h2>

        <form className="flex flex-col gap-3" onSubmit={handleSubmit}>
          <input
            className="celestial-input"
            value={topicId}
            onChange={(e) => setTopicId(e.target.value)}
            placeholder="topicId"
            aria-label="Identificador del tema"
          />
          <input
            className="celestial-input"
            value={moduleId}
            onChange={(e) => setModuleId(e.target.value)}
            placeholder="moduleId"
            aria-label="Identificador del módulo"
          />
          <input
            className="celestial-input"
            value={question}
            onChange={(e) => setQuestion(e.target.value)}
            placeholder="Pregunta"
            aria-label="Pregunta de reflexión"
          />
          <textarea
            className="celestial-input min-h-28"
            value={answerText}
            onChange={(e) => setAnswerText(e.target.value)}
            placeholder="Escribe tu respuesta"
            aria-label="Respuesta"
          />

          <div className="flex flex-wrap items-center gap-3">
            <button className="btn-primary" type="submit">
              Guardar nota
            </button>
            <button className="btn-secondary" type="button" onClick={() => void flushPending()}>
              Sincronizar ahora
            </button>
          </div>
        </form>

        <div className="mt-4 space-y-1 text-sm text-text-muted">
          <p>Estado de red: {isOnline ? 'En línea' : 'Sin conexión'}</p>
          <p>Sincronizando: {isSyncing ? 'Sí' : 'No'}</p>
          <p>Pendientes: {pendingCount}</p>
          {statusMessage ? <p>{statusMessage}</p> : null}
          {lastError ? <p className="text-red-600">Error: {lastError}</p> : null}
        </div>
      </section>
    </>
  )
}
