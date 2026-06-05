export type MediaSlotProps = {
  src?: string
  alt: string
  caption?: string
  ratioClass?: string
}

/**
 * Contenedor de imagen hero o ilustrativa con ratio fijo.
 *
 * @param props - URL, texto alternativo y ratio Tailwind
 * @returns Figura responsive
 */
export function MediaSlot({ src, alt, caption, ratioClass = 'aspect-video' }: MediaSlotProps) {
  return (
    <figure className="overflow-hidden rounded-2xl border border-sg-gold/20 bg-navy-mid shadow-sm">
      {src ? (
        <img src={src} alt={alt} loading="lazy" className="block h-auto w-full" />
      ) : (
        <div
          className={`flex w-full items-center justify-center border border-dashed border-sg-gold/20 bg-gradient-to-b from-navy-mid to-navy-deep ${ratioClass}`}
        >
          <p className="px-4 text-center font-ui text-sm text-parchment/50">Sin imagen configurada</p>
        </div>
      )}
      {caption ? (
        <figcaption className="border-t border-sg-gold/15 px-4 py-2 font-ui text-xs text-parchment/50">
          {caption}
        </figcaption>
      ) : null}
    </figure>
  )
}
