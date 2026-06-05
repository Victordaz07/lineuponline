import { useRef, useState } from 'react'
import { useShallow } from 'zustand/react/shallow'
import { useMarginNotesStore } from '@/stores/marginNotesStore'

function relativeTime(iso: string): string {
  const diff = Date.now() - new Date(iso).getTime()
  const mins = Math.floor(diff / 60_000)
  if (mins < 1) return 'ahora mismo'
  if (mins < 60) return `hace ${mins} min`
  const hours = Math.floor(mins / 60)
  if (hours < 24) return `hace ${hours}h`
  const days = Math.floor(hours / 24)
  if (days < 7) return `hace ${days} día${days > 1 ? 's' : ''}`
  return new Date(iso).toLocaleDateString('es', { day: 'numeric', month: 'short' })
}

type BlockWrapperProps = {
  children: React.ReactNode
  blockKey: string
  lessonId: string
  topicId: string
  blockType: string
}

export function BlockWrapper({ children, blockKey, lessonId, topicId, blockType }: BlockWrapperProps) {
  const notes = useMarginNotesStore(
    useShallow((s) => s.notes.filter((n) => n.blockKey === blockKey)),
  )
  const addNote = useMarginNotesStore((s) => s.addNote)
  const updateNote = useMarginNotesStore((s) => s.updateNote)
  const removeNote = useMarginNotesStore((s) => s.removeNote)

  const [showInput, setShowInput] = useState(false)
  const [draft, setDraft] = useState('')
  const [editingId, setEditingId] = useState<string | null>(null)
  const [editDraft, setEditDraft] = useState('')
  const textareaRef = useRef<HTMLTextAreaElement>(null)

  function openInput() {
    setShowInput(true)
    setTimeout(() => textareaRef.current?.focus(), 40)
  }

  function handleSave() {
    if (draft.trim()) {
      addNote({ lessonId, topicId, blockKey, blockType, noteText: draft.trim(), tags: [] })
    }
    setDraft('')
    setShowInput(false)
  }

  function startEdit(id: string, text: string) {
    setEditingId(id)
    setEditDraft(text)
  }

  function commitEdit() {
    if (!editingId) return
    if (editDraft.trim()) {
      updateNote(editingId, editDraft.trim())
    } else {
      removeNote(editingId)
    }
    setEditingId(null)
    setEditDraft('')
  }

  return (
    <div className="group/block relative">
      <button
        type="button"
        onClick={openInput}
        aria-label="Agregar nota personal"
        title="Agregar nota"
        className="absolute -right-1 -top-1 z-10 flex h-6 w-6 items-center justify-center rounded-full border border-sg-gold/30 bg-navy-mid text-xs text-sg-gold opacity-0 shadow-sm transition-opacity hover:bg-sg-gold/15 group-hover/block:opacity-100"
      >
        ✏
      </button>

      {children}

      {notes.length > 0 && (
        <div className="mt-2 space-y-1.5">
          {notes.map((note) =>
            editingId === note.id ? (
              <div key={note.id} className="space-y-1.5 rounded-lg border-l-4 border-sg-gold bg-sg-gold/10 px-3 py-2">
                <textarea
                  value={editDraft}
                  onChange={(e) => setEditDraft(e.target.value)}
                  className="w-full resize-none rounded-lg border border-sg-gold/30 bg-navy-deep p-2 font-ui text-sm text-parchment/85 placeholder:text-parchment/40 focus:outline-none focus:ring-2 focus:ring-sg-gold/30"
                  rows={3}
                  autoFocus
                  onKeyDown={(e) => {
                    if (e.key === 'Escape') { setEditingId(null); setEditDraft('') }
                  }}
                />
                <div className="flex items-center gap-2">
                  <button type="button" onClick={commitEdit} className="rounded-lg bg-sg-gold px-3 py-1 font-ui text-xs font-semibold text-navy-deep">
                    Guardar
                  </button>
                  <button type="button" onClick={() => { setEditingId(null); setEditDraft('') }} className="font-ui text-xs text-parchment/55">
                    Cancelar
                  </button>
                  <button type="button" onClick={() => removeNote(note.id)} className="ml-auto font-ui text-xs text-red-400 hover:text-red-300">
                    Eliminar
                  </button>
                </div>
              </div>
            ) : (
              <div key={note.id} className="group/note relative rounded-lg border-l-4 border-sg-gold bg-sg-gold/10 px-3 py-2">
                <p className="whitespace-pre-wrap font-display text-sm leading-relaxed text-parchment/85">{note.noteText}</p>
                <div className="mt-1.5 flex items-center gap-2">
                  <span className="font-ui text-xs text-parchment/50">{relativeTime(note.updatedAt)}</span>
                  <button
                    type="button"
                    onClick={() => startEdit(note.id, note.noteText)}
                    className="ml-auto font-ui text-xs text-sg-gold/60 opacity-0 transition-opacity group-hover/note:opacity-100 hover:text-sg-gold"
                  >
                    Editar
                  </button>
                </div>
              </div>
            ),
          )}
        </div>
      )}

      {showInput && (
        <div className="mt-2 space-y-1.5">
          <textarea
            ref={textareaRef}
            value={draft}
            onChange={(e) => setDraft(e.target.value)}
            placeholder="Tu reflexión personal sobre este párrafo…"
            rows={3}
            className="w-full resize-none rounded-lg border border-sg-gold/25 bg-navy-deep p-3 font-display text-sm text-parchment/85 placeholder:text-parchment/40 focus:outline-none focus:ring-2 focus:ring-sg-gold/30"
            onKeyDown={(e) => {
              if (e.key === 'Escape') { setShowInput(false); setDraft('') }
            }}
          />
          <div className="flex items-center gap-2">
            <button type="button" onClick={handleSave} className="rounded-lg bg-sg-gold px-4 py-1.5 font-ui text-xs font-semibold text-navy-deep shadow-sm hover:brightness-95">
              Guardar nota
            </button>
            <button type="button" onClick={() => { setShowInput(false); setDraft('') }} className="font-ui text-xs text-parchment/55">
              Cancelar
            </button>
          </div>
        </div>
      )}
    </div>
  )
}
