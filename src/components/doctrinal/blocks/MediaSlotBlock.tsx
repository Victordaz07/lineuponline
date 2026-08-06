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
      <figure className="overflow-hidden rounded-2xl border border-sg-gold/30 bg-gradient-to-br from-[#0f172a] via-blue-accent to-[#1e3a5f] shadow-lg">
        <div className="flex min-h-[12rem] flex-col items-center justify-center gap-2 px-6 py-10 text-center text-white">
          {label ? <p className="font-ui text-xs font-semibold uppercase tracking-[0.2em] text-sg-gold">{label}</p> : null}
          {year ? <p className="font-display text-5xl text-amber-300 sm:text-6xl">{year}</p> : null}
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
      <figure className="overflow-hidden rounded-2xl border border-sg-gold/25 bg-navy-mid shadow-sm">
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
          <figcaption className="border-t border-sg-gold/15 px-4 py-2 font-ui text-xs text-parchment/50">
            {block.caption}
          </figcaption>
        ) : null}
      </figure>
    )
  }

  const hasMarkers = hasSrc && Boolean(block.markers?.length)

  return (
    <figure className="overflow-hidden rounded-2xl border border-sg-gold/25 bg-navy-mid shadow-sm">
      {hasSrc ? (
        hasMarkers ? (
          <div className="relative">
            <img
              src={block.src}
              alt={block.alt ?? ''}
              loading="lazy"
              className="block h-auto w-full"
              style={block.objectPosition ? { objectPosition: block.objectPosition } : undefined}
            />
            {block.markers?.map((marker, i) => (
              <span
                key={`${marker.label}-${i}`}
                className={`absolute -translate-x-1/2 -translate-y-1/2 whitespace-nowrap rounded-full border border-sg-gold/50 bg-navy-deep/85 px-2.5 py-1 font-ui text-[11px] font-semibold text-sg-gold-light shadow-md backdrop-blur-sm ${
                  marker.align === 'left' ? '!translate-x-0' : marker.align === 'right' ? '!-translate-x-full' : ''
                }`}
                style={{ left: `${marker.x}%`, top: `${marker.y}%` }}
              >
                {marker.label}
              </span>
            ))}
          </div>
        ) : (
          <img
            src={block.src}
            alt={block.alt ?? ''}
            loading="lazy"
            className="block h-auto w-full"
            style={block.objectPosition ? { objectPosition: block.objectPosition } : undefined}
          />
        )
      ) : (
        <div className="flex aspect-video w-full items-center justify-center bg-gradient-to-b from-navy-mid to-navy-deep">
          <p className="px-4 text-center font-ui text-sm text-parchment/50">Contenido visual próximamente</p>
        </div>
      )}
      {block.caption ? (
        <figcaption className="border-t border-sg-gold/15 px-4 py-2 font-ui text-xs text-parchment/50">
          {block.caption}
        </figcaption>
      ) : null}
    </figure>
  )
}
