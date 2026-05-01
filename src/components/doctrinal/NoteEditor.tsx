import { useState } from 'react'
import type { FormEvent } from 'react'
import { Button } from '@/components/common/Button'
import type { UserNoteInput } from '@/types/userNotes'

export type NoteEditorProps = {
  moduleId: string
  lessonId: string
  onSave: (payload: UserNoteInput) => Promise<void>
  onCancel: () => void
  defaultQuestion?: string
}

/**
 * Editor breve de notas personales ligado a módulo y lección.
 *
 * @param props - Identificadores y callbacks
 * @returns Formulario de nota
 */
export function NoteEditor({
  moduleId,
  lessonId,
  onSave,
  onCancel,
  defaultQuestion = '¿Qué aprendiste de esta lección?',
}: NoteEditorProps) {
  const [title, setTitle] = useState('')
  const [content, setContent] = useState('')
  const [loading, setLoading] = useState(false)

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    const trimmed = content.trim()
    if (!trimmed) {
      return
    }
    setLoading(true)
    try {
      const note: UserNoteInput = {
        noteId: crypto.randomUUID(),
        topicId: lessonId,
        moduleId,
        question: title.trim() || defaultQuestion,
        answerText: trimmed,
        clientUpdatedAt: new Date().toISOString(),
      }
      await onSave(note)
      setTitle('')
      setContent('')
    } finally {
      setLoading(false)
    }
  }

  return (
    <form
      onSubmit={(e) => void handleSubmit(e)}
      className="mt-6 space-y-4 rounded-2xl border border-gold-main/25 bg-white p-5 shadow-sm"
      aria-label="Editor de notas personales"
    >
      <h3 className="font-title text-lg text-blue-accent">Tus notas</h3>
      <div className="space-y-2">
        <label htmlFor="note-title" className="block font-ui text-sm font-semibold text-text-main">
          Título (opcional)
        </label>
        <input
          id="note-title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="w-full rounded-lg border border-blue-accent/25 bg-white px-3 py-2 font-ui text-sm text-text-main shadow-inner focus:border-blue-accent focus:outline-none focus:ring-2 focus:ring-blue-accent/20"
          placeholder="Ej. Ideas para compartir"
        />
      </div>
      <div className="space-y-2">
        <label htmlFor="note-content" className="block font-ui text-sm font-semibold text-text-main">
          Contenido
        </label>
        <textarea
          id="note-content"
          value={content}
          onChange={(e) => setContent(e.target.value)}
          rows={5}
          className="w-full rounded-lg border border-blue-accent/25 bg-white px-3 py-2 font-reading text-sm text-text-main shadow-inner focus:border-blue-accent focus:outline-none focus:ring-2 focus:ring-blue-accent/20"
          placeholder="Escribe tu reflexión…"
          required
        />
      </div>
      <div className="flex flex-wrap gap-2">
        <Button type="submit" variant="primary" loading={loading} disabled={loading}>
          Guardar
        </Button>
        <Button type="button" variant="secondary" onClick={onCancel} disabled={loading}>
          Cancelar
        </Button>
      </div>
    </form>
  )
}
