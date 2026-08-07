export type MediaSlotProps = {
  src?: string
  alt: string
  caption?: string
  ratioClass?: string
  /**
   * Emoji a mostrar en una tarjeta-placeholder con degradado dorado cuando
   * no hay `src` — usado para lecciones/personajes cuyo arte real todavía
   * no se ha subido desde /admin/imagenes. Sin esta prop, se mantiene el
   * aviso de "Sin imagen configurada" (bloques `media_slot` sin relación).
   */
  placeholderIcon?: string
}

/**
 * Contenedor de imagen hero o ilustrativa con ratio fijo.
 *
 * @param props - URL, texto alternativo y ratio Tailwind
 * @returns Figura responsive
 */
export function MediaSlot({ src, alt, caption, ratioClass = 'aspect-video', placeholderIcon }: MediaSlotProps) {
  return (
    <figure className="overflow-hidden rounded-2xl border border-sg-gold/20 bg-navy-mid shadow-sm">
      {src ? (
        <img src={src} alt={alt} loading="lazy" className="block h-auto w-full" />
      ) : placeholderIcon ? (
        <div
          className={`relative flex w-full items-center justify-center overflow-hidden ${ratioClass}`}
          style={{ background: 'linear-gradient(150deg, rgb(var(--sg-gold-bright) / 0.35), rgb(var(--navy-mid)) 70%)' }}
        >
          <span className="text-6xl opacity-90 drop-shadow-sm" aria-hidden="true">
            {placeholderIcon}
          </span>
        </div>
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
