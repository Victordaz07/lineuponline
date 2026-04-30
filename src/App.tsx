import { useState } from 'react'
import type { FormEvent } from 'react'
import { HeroCard } from './components/molecules/HeroCard'
import { ScriptureBlock } from './components/molecules/ScriptureBlock'
import { useSyncNotes } from './features/notes/hooks/useSyncNotes'
import type { UserNoteInput } from './types/firestore/userNotes'

function App() {
  const [topicId, setTopicId] = useState('la-expiacion')
  const [moduleId, setModuleId] = useState('modulo-1')
  const [question, setQuestion] = useState('Que aprendiste de este modulo?')
  const [answerText, setAnswerText] = useState('')
  const [statusMessage, setStatusMessage] = useState<string | null>(null)

  // TODO: reemplazar por uid real cuando se conecte Auth.
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
        ? 'Nota guardada y enviada para sincronizacion.'
        : 'Nota guardada localmente. Se sincronizara al volver la conexion.',
    )
  }

  return (
    <main className="min-h-screen bg-bg-elevated px-4 py-10 sm:px-6">
      <div className="mx-auto flex w-full max-w-4xl flex-col gap-6">
        <HeroCard
          eyebrow="Sistema de Diseño"
          title="LineUponLine Celestial"
          description="Un lenguaje visual claro, reverente y legible para estudio profundo en cualquier entorno, incluso sin conexión."
        />

        <ScriptureBlock
          citation="2 Nefi 31:20"
          text="...debéis seguir adelante con firmeza en Cristo, teniendo un fulgor perfecto de esperanza y amor por Dios y por todos los hombres."
        />

        <section className="rounded-2xl border border-gold-main/20 bg-bg-base p-6 shadow-sm sm:p-8">
          <h2 className="mb-4 text-xl text-blue-accent">Notas de reflexion</h2>

          <form className="flex flex-col gap-3" onSubmit={handleSubmit}>
            <input
              className="rounded-lg border border-slate-300 px-3 py-2"
              value={topicId}
              onChange={(event) => setTopicId(event.target.value)}
              placeholder="topicId"
            />
            <input
              className="rounded-lg border border-slate-300 px-3 py-2"
              value={moduleId}
              onChange={(event) => setModuleId(event.target.value)}
              placeholder="moduleId"
            />
            <input
              className="rounded-lg border border-slate-300 px-3 py-2"
              value={question}
              onChange={(event) => setQuestion(event.target.value)}
              placeholder="Pregunta"
            />
            <textarea
              className="min-h-28 rounded-lg border border-slate-300 px-3 py-2"
              value={answerText}
              onChange={(event) => setAnswerText(event.target.value)}
              placeholder="Escribe tu respuesta"
            />

            <div className="flex flex-wrap items-center gap-3">
              <button className="rounded-lg bg-blue-accent px-4 py-2 font-semibold text-white" type="submit">
                Guardar nota
              </button>
              <button
                className="rounded-lg border border-slate-300 px-4 py-2"
                type="button"
                onClick={() => void flushPending()}
              >
                Sincronizar ahora
              </button>
            </div>
          </form>

          <div className="mt-4 space-y-1 text-sm text-text-muted">
            <p>Estado de red: {isOnline ? 'En linea' : 'Sin conexion'}</p>
            <p>Sincronizando: {isSyncing ? 'Si' : 'No'}</p>
            <p>Pendientes: {pendingCount}</p>
            {statusMessage ? <p>{statusMessage}</p> : null}
            {lastError ? <p className="text-red-600">Error: {lastError}</p> : null}
          </div>
        </section>
      </div>
    </main>
  )
}

export default App
