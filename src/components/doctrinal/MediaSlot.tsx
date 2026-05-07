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
export function MediaSlot({ src, alt, caption, ratioClass }: MediaSlotProps) {
  return (
    <figure className="overflow-hidden rounded-2xl border border-gold-main/25 bg-white shadow-sm">
      <div
        className={`flex w-full items-center justify-center bg-bg-elevated ${ratioClass ?? ''} ${!src ? 'border border-dashed border-blue-accent/25' : ''}`}
      >
        {src ? (
          <img src={src} alt={alt} loading="lazy" className={`w-full object-contain ${ratioClass ? 'h-full' : 'max-h-[36rem] h-auto'}`} />
        ) : (
          <p className="px-4 py-16 text-center font-ui text-sm text-text-muted">Sin imagen configurada</p>
        )}
      </div>
      {caption ? (
        <figcaption className="border-t border-gold-main/15 px-4 py-2 font-ui text-xs text-text-muted">
          {caption}
        </figcaption>
      ) : null}
    </figure>
  )
}
