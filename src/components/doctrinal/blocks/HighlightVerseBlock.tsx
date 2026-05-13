import type { HighlightVerseBlock as HighlightVerseBlockType } from '@/types/doctrine'
import { useFavoritesStore } from '@/stores/favoritesStore'
import { useTextHighlight } from '@/hooks/useTextHighlight'
import { HighlightToolbar } from '@/components/common/HighlightToolbar'
import type { HighlightColor } from '@/stores/highlightsStore'

const VERSE_COLOR_CLASSES: Record<HighlightColor, string> = {
  yellow: 'bg-yellow-300 text-blue-950 rounded px-0.5',
  green:  'bg-emerald-300 text-blue-950 rounded px-0.5',
  blue:   'bg-sky-200 text-blue-950 rounded px-0.5',
  pink:   'bg-pink-300 text-blue-950 rounded px-0.5',
}

export type HighlightVerseBlockProps = {
  block: HighlightVerseBlockType
  lessonId?: string
  moduleId?: string
  topicTitle?: string
  blockKey?: string
  topicId?: string
}

export function HighlightVerseBlock({ block, lessonId, moduleId, topicTitle, blockKey, topicId }: HighlightVerseBlockProps) {
  const isFavorite = useFavoritesStore((s) => s.isFavorite)
  const getFavoriteId = useFavoritesStore((s) => s.getFavoriteId)
  const addFavorite = useFavoritesStore((s) => s.addFavorite)
  const removeFavorite = useFavoritesStore((s) => s.removeFavorite)

  const { sel, setSel, toolbarRef, handleMouseUp, saveHighlight, renderSegments } =
    useTextHighlight(blockKey, lessonId, topicId, block.text)

  const canBookmark = Boolean(lessonId && moduleId)
  const saved = canBookmark ? isFavorite(block.reference, lessonId!) : false

  function toggleBookmark() {
    if (!canBookmark) return
    if (saved) {
      const id = getFavoriteId(block.reference, lessonId!)
      if (id) removeFavorite(id)
    } else {
      addFavorite({
        reference: block.reference,
        text: block.text,
        lessonId: lessonId!,
        moduleId: moduleId!,
        topicTitle: topicTitle ?? '',
      })
    }
  }

  return (
    <figure className="relative rounded-2xl bg-blue-accent px-5 py-6 text-white shadow-lg">
      <HighlightToolbar
        sel={sel}
        toolbarRef={toolbarRef}
        onSave={saveHighlight}
        onDismiss={() => { window.getSelection()?.removeAllRanges(); setSel(null) }}
      />
      {canBookmark ? (
        <button
          type="button"
          onClick={toggleBookmark}
          aria-label={saved ? 'Quitar de favoritos' : 'Guardar versículo'}
          className="absolute right-3 top-3 rounded-full p-1.5 text-xl leading-none text-white/50 transition hover:text-gold-dim"
        >
          {saved ? '★' : '☆'}
        </button>
      ) : null}
      <blockquote
        className="select-text pr-8 font-reading text-lg font-medium leading-relaxed"
        onMouseUp={handleMouseUp}
      >
        &ldquo;{renderSegments(VERSE_COLOR_CLASSES)}&rdquo;
      </blockquote>
      <figcaption className="mt-4 font-ui text-sm font-semibold tracking-wide text-gold-dim">
        {block.reference}
      </figcaption>
    </figure>
  )
}
