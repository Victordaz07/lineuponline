type ImageSlotProps = {
  label: string
  description: string
  ratio?: '16/9' | '4/3'
  src?: string
  alt: string
  caption?: string
}

export function ImageSlot({
  label,
  description,
  ratio = '16/9',
  src,
  alt,
  caption,
}: ImageSlotProps) {
  return (
    <figure className="image-placeholder-card">
      <div className="placeholder-frame" style={{ aspectRatio: ratio }}>
        {src ? (
          <img className="slot-image" src={src} alt={alt} loading="lazy" />
        ) : (
          <>
            <span className="placeholder-tag">{label}</span>
            <p className="placeholder-text">{description}</p>
          </>
        )}
      </div>
      {caption ? <figcaption className="placeholder-caption">{caption}</figcaption> : null}
    </figure>
  )
}
