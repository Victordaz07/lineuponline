import { useState } from 'react'
import type React from 'react'
import type { HighlightColor } from '@/stores/highlightsStore'

const COLORS: HighlightColor[] = ['yellow', 'green', 'blue', 'pink']

const SWATCH_CLASSES: Record<HighlightColor, string> = {
  yellow: 'bg-yellow-300 hover:bg-yellow-400',
  green:  'bg-emerald-300 hover:bg-emerald-400',
  blue:   'bg-blue-300 hover:bg-blue-400',
  pink:   'bg-pink-300 hover:bg-pink-400',
}

const TOOLBAR_W = 250
const COMPOSER_W = 260
const TOOLBAR_H = 44

type SelectionState = { text: string; top: number; left: number; height?: number }

type HighlightToolbarProps = {
  sel: SelectionState | null
  toolbarRef: React.RefObject<HTMLDivElement | null>
  onSave: (color: HighlightColor) => void
  onSaveNote: (text: string) => void
  onDismiss: () => void
}

export function HighlightToolbar({ sel, toolbarRef, onSave, onSaveNote, onDismiss }: HighlightToolbarProps) {
  const [composing, setComposing] = useState(false)
  const [draft, setDraft] = useState('')

  // Nueva selección (o cierre) → siempre arrancamos en modo colores, sin borrador previo.
  // Ajuste de estado durante el render (patrón recomendado por React para
  // "resetear estado cuando cambia una prop"), guardado en estado en vez de un ref.
  const [prevSel, setPrevSel] = useState(sel)
  if (sel !== prevSel) {
    setPrevSel(sel)
    if (!sel && (composing || draft)) {
      setComposing(false)
      setDraft('')
    }
  }

  if (!sel) return null

  const width = composing ? COMPOSER_W : TOOLBAR_W
  const vw = typeof window !== 'undefined' ? window.innerWidth : 375
  const clampedLeft = Math.min(Math.max(8, sel.left), vw - width - 8)
  const clampedTop =
    sel.top < TOOLBAR_H + 16
      ? sel.top + (sel.height ?? 24) + 4
      : sel.top - TOOLBAR_H - 4

  function reset() {
    setComposing(false)
    setDraft('')
  }

  function handleDismiss() {
    reset()
    onDismiss()
  }

  function handleSendNote() {
    if (!draft.trim()) return
    onSaveNote(draft)
    reset()
  }

  if (composing) {
    return (
      <div
        ref={toolbarRef}
        className="fixed z-50 flex items-center gap-1.5 rounded-2xl border border-sg-gold/30 bg-navy-mid p-1.5 shadow-lg"
        style={{ top: clampedTop, left: clampedLeft, width }}
      >
        <input
          type="text"
          autoFocus
          value={draft}
          onChange={(e) => setDraft(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === 'Enter') { e.preventDefault(); handleSendNote() }
            if (e.key === 'Escape') { e.preventDefault(); handleDismiss() }
          }}
          placeholder="Escribe tu nota…"
          className="min-w-0 flex-1 rounded-full border border-sg-gold/15 bg-navy-deep px-3 py-1.5 font-ui text-xs text-parchment placeholder:text-parchment/40 focus:border-sg-gold/40 focus:outline-none"
        />
        <button
          type="button"
          onMouseDown={(e) => e.preventDefault()}
          onClick={handleSendNote}
          disabled={!draft.trim()}
          aria-label="Guardar nota"
          className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full text-ink transition disabled:opacity-40"
          style={{ background: 'linear-gradient(150deg, rgb(var(--sg-gold-bright)), rgb(var(--sg-gold)))' }}
        >
          <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <path d="M5 12h14" /><path d="M13 6l6 6-6 6" />
          </svg>
        </button>
      </div>
    )
  }

  return (
    <div
      ref={toolbarRef}
      className="fixed z-50 flex items-center gap-1.5 rounded-xl border border-sg-gold/25 bg-navy-mid px-2 py-1.5 shadow-lg"
      style={{ top: clampedTop, left: clampedLeft }}
    >
      {COLORS.map((color) => (
        <button
          key={color}
          type="button"
          aria-label={`Resaltar en ${color}`}
          onMouseDown={(e) => e.preventDefault()}
          onClick={() => onSave(color)}
          className={`h-6 w-6 rounded-full transition-transform hover:scale-110 ${SWATCH_CLASSES[color]}`}
        />
      ))}
      <span className="h-4 w-px bg-sg-gold/20" aria-hidden="true" />
      <button
        type="button"
        aria-label="Anotar este pasaje"
        onMouseDown={(e) => e.preventDefault()}
        onClick={() => setComposing(true)}
        className="flex h-6 w-6 items-center justify-center rounded-full text-sg-gold-light transition hover:bg-sg-gold/15"
      >
        <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
          <path d="M12 20h9" /><path d="M16.5 3.5a2.12 2.12 0 0 1 3 3L7 19l-4 1 1-4 12.5-12.5z" />
        </svg>
      </button>
      <button
        type="button"
        onMouseDown={(e) => e.preventDefault()}
        onClick={handleDismiss}
        className="ml-1 flex h-6 w-6 items-center justify-center rounded-full text-xs text-parchment/50 hover:bg-navy-deep/50"
      >
        <svg width="10" height="10" viewBox="0 0 10 10" fill="none" aria-hidden="true"><path d="M1 1l8 8M9 1L1 9" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/></svg>
      </button>
    </div>
  )
}
