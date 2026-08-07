import { useRef, useState } from 'react'
import type React from 'react'

export type UploadSlotProps = {
  label: string
  previewUrl?: string
  placeholderIcon: string
  wide?: boolean
  onUpload: (file: File) => Promise<void>
  onRemove: () => Promise<void>
}

/**
 * Tarjeta clicable de un slot de imagen (hero, ícono, patrón, conclusión):
 * muestra la imagen real si existe (con badge "Subida ✓" y botón "Quitar"),
 * o un placeholder con degradado + emoji (badge "Placeholder") si aún no se
 * subió nada. Mismo patrón de click-para-subir que el ImageManager de
 * Scripture Quest.
 */
export function UploadSlot({ label, previewUrl, placeholderIcon, wide = false, onUpload, onRemove }: UploadSlotProps) {
  const [busy, setBusy] = useState(false)
  const inputRef = useRef<HTMLInputElement>(null)

  async function handleFile(file: File | null) {
    if (!file) return
    setBusy(true)
    try {
      await onUpload(file)
    } catch (e) {
      console.error(e)
      alert('Error subiendo la imagen')
    } finally {
      setBusy(false)
    }
  }

  async function handleRemove(e: React.MouseEvent) {
    e.stopPropagation()
    setBusy(true)
    try {
      await onRemove()
    } catch (e) {
      console.error(e)
      alert('Error quitando la imagen')
    } finally {
      setBusy(false)
    }
  }

  return (
    <div className="space-y-1">
      <div className="flex items-center justify-between">
        <p className="font-ui text-[11px] font-semibold uppercase tracking-wider text-parchment/50">{label}</p>
        <span
          className={`rounded-full px-1.5 py-0.5 font-ui text-[9px] font-bold ${
            previewUrl ? 'bg-jade/15 text-jade' : 'bg-parchment/10 text-parchment/40'
          }`}
        >
          {previewUrl ? 'Subida ✓' : 'Placeholder'}
        </span>
      </div>
      <div
        role="button"
        tabIndex={0}
        onClick={() => !busy && inputRef.current?.click()}
        onKeyDown={(e) => {
          if (e.key === 'Enter' || e.key === ' ') inputRef.current?.click()
        }}
        title="Clic para subir imagen"
        className={`relative flex cursor-pointer items-center justify-center overflow-hidden rounded-xl border border-sg-gold/15 bg-navy-deep/60 ${
          wide ? 'aspect-video' : 'aspect-square'
        }`}
      >
        {previewUrl ? (
          <img src={previewUrl} alt="" className="h-full w-full object-cover" />
        ) : (
          <span
            className="flex h-full w-full items-center justify-center text-3xl opacity-80"
            style={{ background: 'linear-gradient(150deg, rgb(var(--sg-gold-bright) / 0.35), rgb(var(--navy-mid)) 75%)' }}
            aria-hidden="true"
          >
            {placeholderIcon}
          </span>
        )}
        {busy ? (
          <div className="absolute inset-0 flex items-center justify-center bg-navy-deep/70">
            <span className="font-ui text-[11px] text-sg-gold animate-pulse">…</span>
          </div>
        ) : null}
        {previewUrl && !busy ? (
          <button
            type="button"
            onClick={handleRemove}
            aria-label={`Quitar ${label}`}
            className="absolute right-1 top-1 flex h-5 w-5 items-center justify-center rounded-full bg-navy-deep/80 text-[10px] text-terracotta hover:bg-navy-deep"
          >
            ×
          </button>
        ) : null}
        <input
          ref={inputRef}
          type="file"
          accept="image/*"
          className="hidden"
          onChange={(e) => {
            void handleFile(e.target.files?.[0] ?? null)
            e.target.value = ''
          }}
        />
      </div>
    </div>
  )
}
