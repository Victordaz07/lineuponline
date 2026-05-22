import type React from 'react'
import type { HighlightColor } from '@/stores/highlightsStore'

const COLORS: HighlightColor[] = ['yellow', 'green', 'blue', 'pink']

const SWATCH_CLASSES: Record<HighlightColor, string> = {
  yellow: 'bg-yellow-300 hover:bg-yellow-400',
  green:  'bg-emerald-300 hover:bg-emerald-400',
  blue:   'bg-blue-300 hover:bg-blue-400',
  pink:   'bg-pink-300 hover:bg-pink-400',
}

const TOOLBAR_W = 210
const TOOLBAR_H = 44

type SelectionState = { text: string; top: number; left: number; height?: number }

type HighlightToolbarProps = {
  sel: SelectionState | null
  toolbarRef: React.RefObject<HTMLDivElement | null>
  onSave: (color: HighlightColor) => void
  onDismiss: () => void
}

export function HighlightToolbar({ sel, toolbarRef, onSave, onDismiss }: HighlightToolbarProps) {
  if (!sel) return null

  const vw = typeof window !== 'undefined' ? window.innerWidth : 375
  const clampedLeft = Math.min(Math.max(8, sel.left), vw - TOOLBAR_W - 8)
  const clampedTop =
    sel.top < TOOLBAR_H + 16
      ? sel.top + (sel.height ?? 24) + 4
      : sel.top - TOOLBAR_H - 4

  return (
    <div
      ref={toolbarRef}
      className="fixed z-50 flex items-center gap-1.5 rounded-xl border border-gold-main/20 bg-white px-2 py-1.5 shadow-lg"
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
      <button
        type="button"
        onMouseDown={(e) => e.preventDefault()}
        onClick={onDismiss}
        className="ml-1 flex h-6 w-6 items-center justify-center rounded-full text-xs text-text-muted hover:bg-gray-100"
      >
        ✕
      </button>
    </div>
  )
}
