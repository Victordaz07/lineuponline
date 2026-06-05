import { useState, useRef } from 'react'
import { Navigate } from 'react-router-dom'
import { useAdmin } from '@/hooks/useAdmin'
import { useAuth } from '@/hooks/useAuth'
import { getFirebaseAuth, isFirebaseConfigured } from '@/lib/firebase'

const TTS_URL = import.meta.env.VITE_TTS_FUNCTION_URL as string | undefined
const MAX_CHARS = 5000

// Voice mapping: speaker label → OpenAI voice ID
const VOICE_MAP: Record<string, string> = {
  SETH: 'onyx',
  MIA:  'nova',
}
const FALLBACK_VOICE = 'alloy'

type GenerationStatus = 'idle' | 'generating' | 'done' | 'error'

async function getIdToken(): Promise<string | null> {
  try {
    if (!isFirebaseConfigured()) return null
    const user = getFirebaseAuth().currentUser
    return user ? await user.getIdToken() : null
  } catch {
    return null
  }
}

async function fetchAudioBlob(text: string, voice: string): Promise<Blob> {
  if (!TTS_URL) throw new Error('VITE_TTS_FUNCTION_URL is not configured')
  const token = await getIdToken()
  const headers: Record<string, string> = { 'Content-Type': 'application/json' }
  if (token) headers['Authorization'] = `Bearer ${token}`
  const res = await fetch(TTS_URL, {
    method: 'POST',
    headers,
    body: JSON.stringify({ text: text.slice(0, 4096), voice }),
  })
  if (!res.ok) throw new Error(`TTS HTTP ${res.status}`)
  return res.blob()
}

type ParsedLine = { voice: string; text: string }

function parseScript(script: string): ParsedLine[] {
  const lines: ParsedLine[] = []
  for (const raw of script.split('\n')) {
    const line = raw.trim()
    if (!line || line.startsWith('[')) continue
    const m = line.match(/^([A-ZÁÉÍÓÚÑ][A-ZÁÉÍÓÚÑ0-9 _-]*):\s*(.+)$/)
    if (m) {
      const speaker = m[1].trim().toUpperCase()
      lines.push({ voice: VOICE_MAP[speaker] ?? FALLBACK_VOICE, text: m[2].trim() })
    }
  }
  return lines
}

async function concatBlobs(blobs: Blob[]): Promise<Blob> {
  const buffers = await Promise.all(blobs.map((b) => b.arrayBuffer()))
  const total = buffers.reduce((n, ab) => n + ab.byteLength, 0)
  const out = new Uint8Array(total)
  let offset = 0
  for (const ab of buffers) {
    out.set(new Uint8Array(ab), offset)
    offset += ab.byteLength
  }
  return new Blob([out], { type: 'audio/mpeg' })
}

export default function EpisodeGeneratorPage() {
  const { user, authLoading } = useAuth()
  const { isAdmin } = useAdmin()

  const [script, setScript] = useState('')
  const [status, setStatus] = useState<GenerationStatus>('idle')
  const [progress, setProgress] = useState(0)
  const [total, setTotal] = useState(0)
  const [error, setError] = useState<string | null>(null)
  const [audioUrl, setAudioUrl] = useState<string | null>(null)
  const prevUrlRef = useRef<string | null>(null)

  if (authLoading) return null
  if (!user || !isAdmin) return <Navigate to="/" replace />

  async function handleGenerate() {
    const lines = parseScript(script)
    if (lines.length === 0) {
      setError('No se detectaron líneas válidas. Usa el formato SETH: texto o MIA: texto.')
      return
    }
    if (!TTS_URL) {
      setError('VITE_TTS_FUNCTION_URL no está configurado. Contacta al administrador.')
      return
    }

    // Revoke previous blob URL
    if (prevUrlRef.current) {
      URL.revokeObjectURL(prevUrlRef.current)
      prevUrlRef.current = null
    }
    setAudioUrl(null)
    setStatus('generating')
    setProgress(0)
    setTotal(lines.length)
    setError(null)

    const blobs: Blob[] = []
    for (let i = 0; i < lines.length; i++) {
      try {
        const blob = await fetchAudioBlob(lines[i].text, lines[i].voice)
        blobs.push(blob)
        setProgress(i + 1)
      } catch (err) {
        setError(`Error en línea ${i + 1}: ${err instanceof Error ? err.message : 'desconocido'}`)
        setStatus('error')
        return
      }
    }

    const combined = await concatBlobs(blobs)
    const url = URL.createObjectURL(combined)
    prevUrlRef.current = url
    setAudioUrl(url)
    setStatus('done')
  }

  const charCount = script.length
  const lines = parseScript(script)
  const isGenerating = status === 'generating'

  return (
    <div className="mx-auto max-w-2xl space-y-6 pb-16">
      <header className="space-y-1">
        <p className="font-ui text-xs font-semibold uppercase tracking-[0.18em] text-sg-gold">
          Admin Tools
        </p>
        <h1 className="font-display text-3xl text-parchment">Episode Audio Generator</h1>
        <p className="font-ui text-sm text-parchment/50">
          Generate podcast-style dialogue audio using Seth &amp; Mia voices.
        </p>
      </header>

      <div className="h-px bg-sg-gold/15" />

      {/* Script editor */}
      <div className="space-y-3">
        <p className="font-ui text-xs font-semibold uppercase tracking-widest text-parchment/50">
          Script
        </p>
        <div className="overflow-hidden rounded-2xl border border-sg-gold/15 bg-navy-mid">
          <textarea
            value={script}
            onChange={(e) => setScript(e.target.value.slice(0, MAX_CHARS))}
            rows={10}
            placeholder={'SETH: Welcome to Seeker Gospel.\nMIA: Today we explore a fundamental truth.\n[Stage directions are skipped]\nSETH: Let\'s begin.'}
            className="w-full resize-y bg-transparent px-4 py-3 font-mono text-sm text-parchment/80 placeholder:text-parchment/20 focus:outline-none"
          />
          <div className="flex items-center justify-between border-t border-sg-gold/10 px-4 py-2">
            <p className="font-ui text-xs text-parchment/35">
              Use <code className="rounded bg-navy-light px-1 font-mono text-sg-gold-light">SETH:</code> and{' '}
              <code className="rounded bg-navy-light px-1 font-mono text-sg-gold-light">MIA:</code> prefixes for each line.
              Lines starting with <code className="rounded bg-navy-light px-1 font-mono text-parchment/40">[</code> are skipped.
            </p>
            <span className={`font-ui text-xs tabular-nums ${charCount > MAX_CHARS * 0.9 ? 'text-amber-400' : 'text-parchment/30'}`}>
              {charCount.toLocaleString()} / {MAX_CHARS.toLocaleString()}
            </span>
          </div>
        </div>
      </div>

      {/* Controls */}
      <div className="flex items-center gap-3">
        <button
          type="button"
          onClick={() => void handleGenerate()}
          disabled={isGenerating || lines.length === 0}
          className="rounded-xl bg-sg-gold px-6 py-2.5 font-ui text-sm font-bold text-navy-deep transition hover:brightness-110 disabled:opacity-40"
        >
          {isGenerating ? `Generating ${progress}/${total}…` : 'Generate Audio'}
        </button>

        {status === 'done' && (
          <span className="rounded-full border border-emerald-500/30 bg-emerald-950/50 px-3 py-1 font-ui text-xs font-semibold text-emerald-400">
            Done
          </span>
        )}
        {status === 'error' && (
          <span className="rounded-full border border-rose-500/30 bg-rose-950/50 px-3 py-1 font-ui text-xs font-semibold text-rose-400">
            Error
          </span>
        )}
        {isGenerating && (
          <span className="font-ui text-xs text-parchment/40">
            {lines.length} segment{lines.length !== 1 ? 's' : ''} detected
          </span>
        )}
      </div>

      {/* Progress bar */}
      {isGenerating && (
        <div className="h-1 w-full overflow-hidden rounded-full bg-navy-light">
          <div
            className="h-full rounded-full bg-sg-gold transition-all duration-300"
            style={{ width: total > 0 ? `${(progress / total) * 100}%` : '0%' }}
          />
        </div>
      )}

      {error && (
        <p className="rounded-xl border border-rose-800/30 bg-rose-950/40 px-4 py-3 font-ui text-sm text-rose-300">
          {error}
        </p>
      )}

      {/* Audio result */}
      {audioUrl && (
        <div className="space-y-3 rounded-2xl border border-sg-gold/15 bg-navy-mid p-5">
          <p className="font-ui text-xs font-semibold uppercase tracking-widest text-parchment/50">
            Generated Audio
          </p>
          {/* eslint-disable-next-line jsx-a11y/media-has-caption */}
          <audio controls src={audioUrl} className="w-full" />
          <a
            href={audioUrl}
            download="episode.mp3"
            className="inline-block rounded-xl border border-sg-gold/30 px-4 py-2 font-ui text-sm font-semibold text-sg-gold-light transition hover:bg-navy-light"
          >
            Download MP3
          </a>
        </div>
      )}
    </div>
  )
}
