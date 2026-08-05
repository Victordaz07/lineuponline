import { useEffect, useMemo, useRef, useState } from 'react'
import { useAdmin } from '@/hooks/useAdmin'
import { isFirebaseConfigured } from '@/lib/firebase'
import {
  deleteLessonAudioSlot,
  saveLessonAudioFile,
  saveLessonAudioYoutube,
  subscribeLessonAudio,
} from '@/services/lessonAudio.service'
import {
  LESSON_AUDIO_SLOT_KEYS,
  type LessonAudioDoc,
  type LessonAudioLanguage,
  type LessonAudioLength,
  type LessonAudioSlotKey,
} from '@/types/lessonAudio'

export type LessonPodcastPlayerProps = {
  lessonId: string
}

const SLOT_LABELS: Record<LessonAudioSlotKey, string> = {
  'es-larga': 'Español · versión larga',
  'es-corta': 'Español · versión corta',
  'en-larga': 'English · long version',
  'en-corta': 'English · short version',
}

function slotKey(language: LessonAudioLanguage, length: LessonAudioLength): LessonAudioSlotKey {
  return `${language}-${length}`
}

export function LessonPodcastPlayer({ lessonId }: LessonPodcastPlayerProps) {
  const { isAdmin } = useAdmin()
  const [audio, setAudio] = useState<LessonAudioDoc | null>(null)
  const [expanded, setExpanded] = useState(false)
  const [editorOpen, setEditorOpen] = useState(false)
  const [language, setLanguage] = useState<LessonAudioLanguage>('es')
  const [length, setLength] = useState<LessonAudioLength>('larga')

  useEffect(() => {
    if (!isFirebaseConfigured()) {
      // eslint-disable-next-line react-hooks/set-state-in-effect
      setAudio(null)
      return
    }
    return subscribeLessonAudio(lessonId, setAudio)
  }, [lessonId])

  const slots = useMemo(() => audio?.slots ?? {}, [audio])
  const configuredKeys = useMemo(
    () => LESSON_AUDIO_SLOT_KEYS.filter((key) => slots[key]?.url),
    [slots],
  )
  const hasAnyAudio = configuredKeys.length > 0

  const availableLanguages = useMemo(() => {
    const langs = new Set<LessonAudioLanguage>()
    for (const key of configuredKeys) langs.add(key.split('-')[0] as LessonAudioLanguage)
    return langs
  }, [configuredKeys])

  // Idioma/duración efectivos: si la selección actual ya no tiene audio,
  // se deriva en el render (no en un efecto) cuál usar en su lugar.
  const effectiveLanguage = availableLanguages.has(language)
    ? language
    : ((availableLanguages.values().next().value as LessonAudioLanguage | undefined) ?? language)

  const availableLengths = useMemo(() => {
    const lens = new Set<LessonAudioLength>()
    for (const key of configuredKeys) {
      const [lang, len] = key.split('-') as [LessonAudioLanguage, LessonAudioLength]
      if (lang === effectiveLanguage) lens.add(len)
    }
    return lens
  }, [configuredKeys, effectiveLanguage])

  const effectiveLength = availableLengths.has(length)
    ? length
    : ((availableLengths.values().next().value as LessonAudioLength | undefined) ?? length)

  const activeSlot = slots[slotKey(effectiveLanguage, effectiveLength)]

  if (!hasAnyAudio && !isAdmin) {
    return null
  }

  return (
    <div className="flex w-full flex-col gap-3">
      <div className="flex flex-wrap items-center gap-2">
        {hasAnyAudio ? (
          <button
            type="button"
            onClick={() => setExpanded((v) => !v)}
            className="inline-flex items-center gap-2 rounded-full border border-sg-gold/30 bg-navy-mid px-4 py-2 font-ui text-sm font-semibold text-parchment/85 shadow-md transition hover:bg-sg-gold/10"
            aria-expanded={expanded}
          >
            <span aria-hidden="true">🎙️</span>
            {expanded ? 'Ocultar podcast' : 'Escuchar podcast'}
          </button>
        ) : null}

        {isAdmin ? (
          <button
            type="button"
            onClick={() => setEditorOpen((v) => !v)}
            className="inline-flex items-center gap-1.5 rounded-full border border-sg-gold/20 bg-navy-deep px-3 py-1.5 font-ui text-xs font-semibold text-parchment/60 transition hover:border-sg-gold/40 hover:text-parchment"
            aria-expanded={editorOpen}
          >
            <span aria-hidden="true">⚙️</span>
            {editorOpen ? 'Cerrar edición de audios' : 'Editar audios del podcast'}
          </button>
        ) : null}
      </div>

      {expanded && hasAnyAudio ? (
        <div className="w-full overflow-hidden rounded-2xl border border-sg-gold/15 bg-navy-mid shadow-md">
          <div className="flex flex-wrap items-center gap-x-4 gap-y-2 border-b border-sg-gold/10 px-4 py-3">
            <LanguageLengthToggle
              label="Idioma"
              options={[
                { value: 'es', label: 'Español', enabled: availableLanguages.has('es') },
                { value: 'en', label: 'English', enabled: availableLanguages.has('en') },
              ]}
              value={effectiveLanguage}
              onChange={(v) => setLanguage(v as LessonAudioLanguage)}
            />
            <LanguageLengthToggle
              label="Duración"
              options={[
                { value: 'larga', label: 'Larga', enabled: availableLengths.has('larga') },
                { value: 'corta', label: 'Corta', enabled: availableLengths.has('corta') },
              ]}
              value={effectiveLength}
              onChange={(v) => setLength(v as LessonAudioLength)}
            />
          </div>

          <div className="p-4">
            {activeSlot ? (
              activeSlot.sourceType === 'youtube' && activeSlot.youtubeVideoId ? (
                <div className="aspect-video w-full overflow-hidden rounded-xl bg-black">
                  <iframe
                    key={activeSlot.youtubeVideoId}
                    src={`https://www.youtube-nocookie.com/embed/${activeSlot.youtubeVideoId}`}
                    title={activeSlot.label ?? SLOT_LABELS[slotKey(effectiveLanguage, effectiveLength)]}
                    className="h-full w-full"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  />
                </div>
              ) : (
                <audio
                  key={activeSlot.url}
                  controls
                  preload="none"
                  src={activeSlot.url}
                  className="w-full"
                >
                  Tu navegador no soporta la reproducción de audio.
                </audio>
              )
            ) : (
              <p className="font-ui text-xs text-parchment/50">
                No hay un audio disponible para esta combinación de idioma/duración.
              </p>
            )}
          </div>
        </div>
      ) : null}

      {editorOpen && isAdmin ? <LessonPodcastAdminEditor lessonId={lessonId} slots={slots} /> : null}
    </div>
  )
}

function LanguageLengthToggle({
  label,
  options,
  value,
  onChange,
}: {
  label: string
  options: { value: string; label: string; enabled: boolean }[]
  value: string
  onChange: (value: string) => void
}) {
  return (
    <div className="flex items-center gap-1.5">
      <span className="font-ui text-[0.6rem] font-semibold uppercase tracking-wider text-parchment/50">
        {label}
      </span>
      {options.map((opt) => (
        <button
          key={opt.value}
          type="button"
          disabled={!opt.enabled}
          onClick={() => onChange(opt.value)}
          className={`rounded-full px-2.5 py-1 font-ui text-xs font-semibold transition ${
            value === opt.value && opt.enabled
              ? 'bg-sg-gold/15 text-sg-gold-light ring-1 ring-sg-gold/40'
              : opt.enabled
                ? 'text-parchment/50 hover:text-parchment'
                : 'cursor-not-allowed text-parchment/20'
          }`}
        >
          {opt.label}
        </button>
      ))}
    </div>
  )
}

function LessonPodcastAdminEditor({
  lessonId,
  slots,
}: {
  lessonId: string
  slots: LessonAudioDoc['slots']
}) {
  return (
    <div className="w-full space-y-3 rounded-2xl border border-sg-gold/20 bg-navy-deep p-4">
      <p className="font-ui text-xs font-semibold uppercase tracking-wider text-parchment/50">
        Audios del podcast (4 espacios: español/inglés × larga/corta)
      </p>
      <div className="grid gap-3 sm:grid-cols-2">
        {LESSON_AUDIO_SLOT_KEYS.map((key) => (
          <LessonPodcastSlotEditor key={key} lessonId={lessonId} slotKey={key} slot={slots[key]} />
        ))}
      </div>
    </div>
  )
}

function LessonPodcastSlotEditor({
  lessonId,
  slotKey: key,
  slot,
}: {
  lessonId: string
  slotKey: LessonAudioSlotKey
  slot: LessonAudioDoc['slots'][LessonAudioSlotKey]
}) {
  const [mode, setMode] = useState<'file' | 'youtube'>(slot?.sourceType ?? 'file')
  const [youtubeUrl, setYoutubeUrl] = useState('')
  const [label, setLabel] = useState(slot?.label ?? '')
  const [busy, setBusy] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const fileInputRef = useRef<HTMLInputElement>(null)

  async function handleFileChange(e: React.ChangeEvent<HTMLInputElement>) {
    const file = e.target.files?.[0]
    if (!file) return
    setBusy(true)
    setError(null)
    try {
      await saveLessonAudioFile(lessonId, key, file, label)
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Error al subir el archivo')
    } finally {
      setBusy(false)
      if (fileInputRef.current) fileInputRef.current.value = ''
    }
  }

  async function handleSaveYoutube() {
    if (!youtubeUrl.trim()) return
    setBusy(true)
    setError(null)
    try {
      await saveLessonAudioYoutube(lessonId, key, youtubeUrl, label)
      setYoutubeUrl('')
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Error al guardar la URL')
    } finally {
      setBusy(false)
    }
  }

  async function handleDelete() {
    if (!confirm('¿Eliminar este audio?')) return
    setBusy(true)
    setError(null)
    try {
      await deleteLessonAudioSlot(lessonId, key, slot?.storagePath)
    } finally {
      setBusy(false)
    }
  }

  const inputClass =
    'w-full rounded-lg border border-sg-gold/20 bg-navy-mid px-2.5 py-2 font-ui text-xs text-parchment placeholder:text-parchment/30 focus:border-sg-gold/50 focus:outline-none'

  return (
    <div className="space-y-2 rounded-xl border border-sg-gold/10 bg-navy-mid/60 p-3">
      <div className="flex items-center justify-between gap-2">
        <p className="font-ui text-xs font-semibold text-parchment/80">{SLOT_LABELS[key]}</p>
        {slot?.url ? (
          <span className="font-ui text-[0.65rem] font-semibold text-emerald-400">✓ Cargado</span>
        ) : (
          <span className="font-ui text-[0.65rem] text-parchment/40">Sin audio</span>
        )}
      </div>

      <div className="flex gap-1">
        <button
          type="button"
          onClick={() => setMode('file')}
          className={`flex-1 rounded-lg px-2 py-1 font-ui text-[0.65rem] font-semibold transition ${
            mode === 'file' ? 'bg-sg-gold/15 text-sg-gold-light' : 'text-parchment/50'
          }`}
        >
          Subir archivo
        </button>
        <button
          type="button"
          onClick={() => setMode('youtube')}
          className={`flex-1 rounded-lg px-2 py-1 font-ui text-[0.65rem] font-semibold transition ${
            mode === 'youtube' ? 'bg-sg-gold/15 text-sg-gold-light' : 'text-parchment/50'
          }`}
        >
          URL de YouTube
        </button>
      </div>

      <input
        type="text"
        value={label}
        onChange={(e) => setLabel(e.target.value)}
        placeholder="Etiqueta opcional (ej. Discurso · 8 min)"
        className={inputClass}
      />

      {mode === 'file' ? (
        <input
          ref={fileInputRef}
          type="file"
          accept="audio/*"
          disabled={busy}
          onChange={(e) => void handleFileChange(e)}
          className="w-full font-ui text-[0.65rem] text-parchment/60 file:mr-2 file:rounded-lg file:border-0 file:bg-sg-gold/15 file:px-2.5 file:py-1.5 file:font-ui file:text-[0.65rem] file:font-semibold file:text-sg-gold-light"
        />
      ) : (
        <div className="flex gap-1.5">
          <input
            type="text"
            value={youtubeUrl}
            onChange={(e) => setYoutubeUrl(e.target.value)}
            placeholder="https://youtube.com/watch?v=..."
            className={inputClass}
          />
          <button
            type="button"
            onClick={() => void handleSaveYoutube()}
            disabled={busy || !youtubeUrl.trim()}
            className="shrink-0 rounded-lg bg-sg-gold px-2.5 py-1 font-ui text-[0.65rem] font-semibold text-navy-deep disabled:opacity-50"
          >
            Guardar
          </button>
        </div>
      )}

      {slot?.url ? (
        <button
          type="button"
          onClick={() => void handleDelete()}
          disabled={busy}
          className="font-ui text-[0.65rem] font-semibold text-red-400 disabled:opacity-50"
        >
          Eliminar audio
        </button>
      ) : null}

      {error ? <p className="font-ui text-[0.65rem] text-red-400">{error}</p> : null}
    </div>
  )
}
