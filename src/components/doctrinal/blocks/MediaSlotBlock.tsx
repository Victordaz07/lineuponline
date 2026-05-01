import type { MediaSlotBlock as MediaSlotBlockType } from '@/types/doctrine'

export type MediaSlotBlockProps = {
  block: MediaSlotBlockType
}

/**
 * Imagen, video embebido o tarjeta tipográfica de contexto si no hay recurso.
 */
export function MediaSlotBlock({ block }: MediaSlotBlockProps) {
  const hasSrc = Boolean(block.src?.trim())

  if (!hasSrc && block.contextCard) {
    const { year, place, label } = block.contextCard
    return (
      <figure className="overflow-hidden rounded-2xl border border-gold-main/35 bg-gradient-to-br from-[#0f172a] via-blue-accent to-[#1e3a5f] shadow-lg">
        <div className="flex min-h-[12rem] flex-col items-center justify-center gap-2 px-6 py-10 text-center text-white">
          {label ? <p className="font-ui text-xs font-semibold uppercase tracking-[0.2em] text-gold-main">{label}</p> : null}
          {year ? <p className="font-title text-5xl text-gold-dim sm:text-6xl">{year}</p> : null}
          {place ? <p className="font-ui text-sm text-white/90">{place}</p> : null}
        </div>
        {block.caption ? (
          <figcaption className="border-t border-white/10 px-4 py-2 font-ui text-xs text-white/70">
            {block.caption}
          </figcaption>
        ) : null}
      </figure>
    )
  }

  if (block.kind === 'video' && hasSrc) {
    return (
      <figure className="overflow-hidden rounded-2xl border border-gold-main/25 bg-white shadow-sm">
        <div className="aspect-video w-full">
          <video
            className="h-full w-full object-cover"
            controls
            preload="metadata"
            src={block.src}
            title={block.alt ?? 'Video de la lección'}
          >
            <track kind="captions" />
          </video>
        </div>
        {block.caption ? (
          <figcaption className="border-t border-gold-main/15 px-4 py-2 font-ui text-xs text-text-muted">
            {block.caption}
          </figcaption>
        ) : null}
      </figure>
    )
  }

  return (
    <figure className="overflow-hidden rounded-2xl border border-gold-main/25 bg-white shadow-sm">
      <div className="flex aspect-video w-full items-center justify-center bg-gradient-to-b from-white to-bg-elevated">
        {hasSrc ? (
          <img src={block.src} alt={block.alt ?? ''} loading="lazy" className="h-full w-full object-cover" />
        ) : (
          <p className="px-4 text-center font-ui text-sm text-text-muted">Contenido visual próximamente</p>
        )}
      </div>
      {block.caption ? (
        <figcaption className="border-t border-gold-main/15 px-4 py-2 font-ui text-xs text-text-muted">
          {block.caption}
        </figcaption>
      ) : null}
    </figure>
  )
}
