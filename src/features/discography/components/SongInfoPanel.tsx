// Ficha de la canción — misma estética que SGM_MisOtrasOvejas_Archive.html
// (Cinzel + Cormorant Garamond, "tablilla grabada", era/personaje/escritura/signature sound).

import type { SongMeta } from '../types'

interface SongInfoPanelProps {
  meta: SongMeta
  title: string
  onClose: () => void
}

export function SongInfoPanel({ meta, title, onClose }: SongInfoPanelProps) {
  return (
    <div className="fixed inset-0 z-50 flex flex-col overflow-y-auto bg-navy-deep">
      {/* Textura ambiental sutil, igual que el .hero::before del archivo original */}
      <div
        className="pointer-events-none fixed inset-0"
        style={{
          background:
            'radial-gradient(ellipse 70% 40% at 50% 10%, rgba(184,146,58,0.14) 0%, transparent 60%), radial-gradient(ellipse 50% 60% at 50% 50%, rgba(212,175,55,0.08) 0%, transparent 70%)',
        }}
      />

      <div className="relative mx-auto w-full max-w-lg px-6 pb-16 pt-8">
        <button
          onClick={onClose}
          className="mb-8 flex items-center gap-2 font-ui text-xs uppercase tracking-widest text-parchment/50"
        >
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" aria-hidden="true">
            <path d="M12 4L4 12M4 4l8 8" />
          </svg>
          Volver a la canción
        </button>

        {/* Era */}
        <div className="mb-6 flex items-center gap-3">
          <span className="font-ui text-[10px] uppercase tracking-[0.22em] text-sg-gold">{meta.era}</span>
          <div className="h-px flex-1 bg-sg-gold/25" />
        </div>

        {/* Título ceremonial */}
        <h1 className="mb-1 font-ceremonial text-3xl font-bold text-parchment">{title}</h1>
        {meta.titleEn && <p className="mb-2 font-display text-sm italic text-parchment/50">{meta.titleEn}</p>}
        <p className="mb-8 font-display text-sm italic text-sg-gold-light">{meta.character}</p>

        {/* Arco narrativo */}
        <p className="mb-8 font-display text-base leading-relaxed text-warm-white">{meta.arc}</p>

        {/* Escrituras */}
        <div className="flex items-baseline justify-between border-t border-sg-gold/15 py-3">
          <span className="font-ui text-[10px] uppercase tracking-widest text-parchment/50">Escrituras</span>
          <span className="text-right font-display text-sm text-parchment">{meta.scriptureRef}</span>
        </div>

        {/* Signature Sound */}
        <div className="pb-2 pt-4">
          <span className="mb-2 block font-ui text-[10px] uppercase tracking-widest text-parchment/50">
            Signature Sound
          </span>
          <p className="font-display text-sm leading-relaxed text-warm-white">{meta.signatureSound}</p>
        </div>
      </div>
    </div>
  )
}
