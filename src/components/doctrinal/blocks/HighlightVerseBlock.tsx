import type { HighlightVerseBlock as HighlightVerseBlockType } from '@/types/doctrine'
import { useFavoritesStore } from '@/stores/favoritesStore'

export type HighlightVerseBlockProps = {
  block: HighlightVerseBlockType
  lessonId?: string
  moduleId?: string
  topicTitle?: string
}

export function HighlightVerseBlock({ block, lessonId, moduleId, topicTitle }: HighlightVerseBlockProps) {
  const isFavorite = useFavoritesStore((s) => s.isFavorite)
  const getFavoriteId = useFavoritesStore((s) => s.getFavoriteId)
  const addFavorite = useFavoritesStore((s) => s.addFavorite)
  const removeFavorite = useFavoritesStore((s) => s.removeFavorite)

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
      <blockquote className="pr-8 font-reading text-lg font-medium leading-relaxed">
        &ldquo;{block.text}&rdquo;
      </blockquote>
      <figcaption className="mt-4 font-ui text-sm font-semibold tracking-wide text-gold-dim">
        {block.reference}
      </figcaption>
    </figure>
  )
}
