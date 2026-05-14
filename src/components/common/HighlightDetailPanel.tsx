import { useEffect, useRef, useState } from 'react'
import type { ActiveHighlight } from '@/hooks/useTextHighlight'
import type { HighlightColor } from '@/stores/highlightsStore'
import { useHighlightsStore } from '@/stores/highlightsStore'
import { TagEditor } from '@/components/common/TagEditor'

const COLORS: HighlightColor[] = ['yellow', 'green', 'blue', 'pink']

const SWATCH: Record<HighlightColor, string> = {
  yellow: 'bg-yellow-300 hover:bg-yellow-400',
  green:  'bg-emerald-300 hover:bg-emerald-400',
  blue:   'bg-blue-300 hover:bg-blue-400',
  pink:   'bg-pink-300 hover:bg-pink-400',
}

const RING: Record<HighlightColor, string> = {
  yellow: 'ring-yellow-500',
  green:  'ring-emerald-500',
  blue:   'ring-blue-500',
  pink:   'ring-pink-400',
}

type Props = {
  activeHL: ActiveHighlight
  onClose: () => void
}

export function HighlightDetailPanel({ activeHL, onClose }: Props) {
  const panelRef = useRef<HTMLDivElement | null>(null)
  const [left, setLeft] = useState(activeHL.left)

  const highlight = useHighlightsStore((s) => s.highlights.find((h) => h.id === activeHL.id))
  const removeHighlight = useHighlightsStore((s) => s.removeHighlight)
  const updateColor = useHighlightsStore((s) => s.updateColor)
  const updateTags = useHighlightsStore((s) => s.updateTags)
  const updateNote = useHighlightsStore((s) => s.updateNote)

  // Keep panel within viewport horizontally
  useEffect(() => {
    if (!panelRef.current) return
    const panelW = panelRef.current.offsetWidth
    const vw = window.innerWidth
    const ideal = activeHL.left - panelW / 2
    setLeft(Math.max(8, Math.min(ideal, vw - panelW - 8)))
  }, [activeHL.left])

  // Close on outside click
  useEffect(() => {
    function onPointerDown(e: PointerEvent) {
      if (panelRef.current && !panelRef.current.contains(e.target as Node)) {
        onClose()
      }
    }
    document.addEventListener('pointerdown', onPointerDown)
    return () => document.removeEventListener('pointerdown', onPointerDown)
  }, [onClose])

  if (!highlight) return null

  function handleRemove() {
    removeHighlight(activeHL.id)
    onClose()
  }

  const top = Math.max(8, activeHL.top - 180)

  return (
    <div
      ref={panelRef}
      className="fixed z-50 w-72 rounded-2xl border border-gold-main/20 bg-white shadow-xl"
      style={{ top, left }}
    >
      {/* Header: color + remove */}
      <div className="flex items-center gap-2 border-b border-gray-100 px-3 py-2.5">
        <span className="font-ui text-xs font-semibold uppercase tracking-wide text-text-muted">
          Resaltado
        </span>
        <div className="ml-auto flex items-center gap-1.5">
          {COLORS.map((color) => (
            <button
              key={color}
              type="button"
              aria-label={`Cambiar a ${color}`}
              onMouseDown={(e) => e.preventDefault()}
              onClick={() => updateColor(activeHL.id, color)}
              className={`h-5 w-5 rounded-full transition-transform hover:scale-110 ${SWATCH[color]} ${
                highlight.color === color ? `ring-2 ring-offset-1 ${RING[color]}` : ''
              }`}
            />
          ))}
          <button
            type="button"
            aria-label="Quitar resaltado"
            onMouseDown={(e) => e.preventDefault()}
            onClick={handleRemove}
            className="ml-1.5 flex h-6 w-6 items-center justify-center rounded-full text-sm text-rose-400 transition hover:bg-rose-50 hover:text-rose-600"
            title="Quitar resaltado"
          >
            🗑
          </button>
        </div>
      </div>

      {/* Selected text preview */}
      <p className="px-3 pt-2.5 font-reading text-xs italic leading-relaxed text-text-muted line-clamp-2">
        &ldquo;{highlight.selectedText}&rdquo;
      </p>

      {/* Tags */}
      <div className="px-3 pt-2">
        <p className="mb-1 font-ui text-xs font-semibold text-text-muted">Etiquetas</p>
        <TagEditor
          tags={highlight.tags}
          onChange={(tags) => updateTags(activeHL.id, tags)}
        />
      </div>

      {/* Note */}
      <div className="px-3 pb-3 pt-2">
        <p className="mb-1 font-ui text-xs font-semibold text-text-muted">Nota personal</p>
        <textarea
          rows={2}
          value={highlight.note}
          onChange={(e) => updateNote(activeHL.id, e.target.value)}
          placeholder="Escribe tu reflexión sobre este versículo…"
          className="w-full resize-none rounded-xl border border-blue-accent/15 bg-cream px-3 py-2 font-reading text-xs leading-relaxed text-text-main placeholder:text-text-muted focus:outline-none focus:ring-2 focus:ring-gold-main/30"
        />
      </div>
    </div>
  )
}
