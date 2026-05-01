import { useCallback, useState } from 'react'
import type { NotePromptsBlock as NotePromptsBlockType } from '@/types/doctrine'
import type { UserNoteInput } from '@/types/userNotes'

export type NotePromptsBlockProps = {
  block: NotePromptsBlockType
  moduleId: string
  lessonId: string
  topicId: string
  topicTitle: string
  onSaveNote?: (note: UserNoteInput) => Promise<void>
  onJournalSave?: (payload: {
    topicId: string
    topicTitle: string
    promptId: string
    question: string
    answerText: string
  }) => void
}

function newNoteId(): string {
  if (typeof crypto !== 'undefined' && 'randomUUID' in crypto) {
    return crypto.randomUUID()
  }
  return `note-${Date.now()}-${Math.random().toString(36).slice(2, 9)}`
}

/**
 * Prompts de notas guiadas; opcionalmente guarda en Firestore vía onSaveNote.
 */
export function NotePromptsBlock({
  block,
  moduleId,
  lessonId,
  topicId,
  topicTitle,
  onSaveNote,
  onJournalSave,
}: NotePromptsBlockProps) {
  const [drafts, setDrafts] = useState<Record<string, string>>({})
  const [saved, setSaved] = useState<Record<string, boolean>>({})
  const [busyId, setBusyId] = useState<string | null>(null)

  const setDraft = useCallback((promptId: string, value: string) => {
    setDrafts((d) => ({ ...d, [promptId]: value }))
  }, [])

  const handleSave = useCallback(
    async (promptId: string, question: string) => {
      const answerText = (drafts[promptId] ?? '').trim()
      if (!answerText || !onSaveNote) {
        return
      }
      setBusyId(promptId)
      try {
        const note: UserNoteInput = {
          noteId: newNoteId(),
          topicId: `${lessonId}__${topicId}`,
          moduleId,
          question,
          answerText,
          clientUpdatedAt: new Date().toISOString(),
        }
        await onSaveNote(note)
        onJournalSave?.({ topicId, topicTitle, promptId, question, answerText })
        setSaved((s) => ({ ...s, [promptId]: true }))
      } finally {
        setBusyId(null)
      }
    },
    [drafts, lessonId, moduleId, onJournalSave, onSaveNote, topicId, topicTitle],
  )

  return (
    <div className="space-y-4 rounded-2xl border border-gold-main/30 bg-white p-5 shadow-sm">
      <p className="font-ui text-xs font-semibold uppercase tracking-wider text-gold-main">Notas guiadas</p>
      <p className="text-sm text-text-muted">
        Escribe lo que sientes sobre este tema; puedes revisarlo luego en tu diario de estudio.
        {topicTitle ? <span className="sr-only"> Tema: {topicTitle}.</span> : null}
      </p>
      <ul className="space-y-4">
        {block.prompts.map((p) => (
          <li key={p.id} className="rounded-xl border border-blue-accent/10 bg-bg-elevated/80 p-4">
            <label htmlFor={`prompt-${p.id}`} className="font-ui text-sm font-semibold text-blue-accent">
              {p.question}
            </label>
            <textarea
              id={`prompt-${p.id}`}
              rows={3}
              value={drafts[p.id] ?? ''}
              onChange={(e) => setDraft(p.id, e.target.value)}
              disabled={Boolean(saved[p.id])}
              className="mt-2 w-full rounded-lg border border-blue-accent/20 bg-white p-3 font-reading text-sm text-text-main focus:border-gold-main focus:outline-none focus:ring-1 focus:ring-gold-main disabled:opacity-70"
            />
            <div className="mt-2 flex items-center gap-2">
              {onSaveNote ? (
                <button
                  type="button"
                  disabled={Boolean(saved[p.id]) || busyId === p.id || !(drafts[p.id] ?? '').trim()}
                  onClick={() => void handleSave(p.id, p.question)}
                  className="rounded-full bg-gold-main px-4 py-1.5 font-ui text-xs font-semibold text-blue-accent hover:opacity-90 disabled:cursor-not-allowed disabled:opacity-50"
                >
                  {saved[p.id] ? 'Guardado' : busyId === p.id ? 'Guardando…' : 'Guardar nota'}
                </button>
              ) : (
                <p className="font-ui text-xs text-text-muted">Inicia sesión o configura notas para guardar.</p>
              )}
            </div>
          </li>
        ))}
      </ul>
    </div>
  )
}
