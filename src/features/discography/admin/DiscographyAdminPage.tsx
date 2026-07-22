import { useEffect, useState } from 'react'
import { Link, Navigate } from 'react-router-dom'
import { useAdmin } from '@/hooks/useAdmin'
import { useAuth } from '@/hooks/useAuth'
import { extractYoutubeId } from '../lib/extractYoutubeId'
import { parseAlbumReport, type ParsedSong } from '../lib/parseAlbumReport'
import {
  addAlbum,
  addTrack,
  addTracksFromImport,
  deleteAlbum,
  deleteTrack,
  subscribeAlbums,
  subscribeTracksByAlbum,
} from '../services/discography.service'
import type { Album, DiscographyTrack } from '../types'

type Tab = 'albums' | 'tracks' | 'import'

export default function DiscographyAdminPage() {
  const { user, authLoading } = useAuth()
  const { isAdmin } = useAdmin()

  const [tab, setTab] = useState<Tab>('albums')
  const [albums, setAlbums] = useState<Album[]>([])
  const [selectedAlbumId, setSelectedAlbumId] = useState('')
  const [tracks, setTracks] = useState<DiscographyTrack[]>([])
  const [loading, setLoading] = useState(false)

  const [albumTitle, setAlbumTitle] = useState('')
  const [albumReport, setAlbumReport] = useState('')
  const [albumCover, setAlbumCover] = useState('')

  const [songUrl, setSongUrl] = useState('')
  const [songTitle, setSongTitle] = useState('')
  const [songTitleEn, setSongTitleEn] = useState('')
  const [songCharacter, setSongCharacter] = useState('')
  const [songEra, setSongEra] = useState('')
  const [songArc, setSongArc] = useState('')
  const [songScripture, setSongScripture] = useState('')
  const [songSignature, setSongSignature] = useState('')

  const [importText, setImportText] = useState('')
  const [importPreview, setImportPreview] = useState<ParsedSong[]>([])
  const [importing, setImporting] = useState(false)

  const detectedVideoId = extractYoutubeId(songUrl)
  const selectedAlbum = albums.find((a) => a.id === selectedAlbumId)

  useEffect(() => subscribeAlbums(setAlbums), [])

  useEffect(() => {
    if (!selectedAlbumId) {
      // eslint-disable-next-line react-hooks/set-state-in-effect
      setTracks([])
      return
    }
    return subscribeTracksByAlbum(selectedAlbumId, setTracks)
  }, [selectedAlbumId])

  if (authLoading) return null
  if (!user || !isAdmin) return <Navigate to="/" replace />

  async function handleSaveAlbum() {
    if (!albumTitle.trim()) {
      alert('Falta el título del álbum.')
      return
    }
    setLoading(true)
    try {
      const id = await addAlbum({ title: albumTitle.trim(), report: albumReport.trim(), coverUrl: albumCover })
      setAlbumTitle('')
      setAlbumReport('')
      setAlbumCover('')
      setSelectedAlbumId(id)
      setTab('tracks')
    } finally {
      setLoading(false)
    }
  }

  async function handleDeleteAlbum(album: Album) {
    if (!confirm(`¿Eliminar el álbum "${album.title}" y todas sus canciones?`)) return
    await deleteAlbum(album.id)
    if (selectedAlbumId === album.id) setSelectedAlbumId('')
  }

  async function handleSaveTrack() {
    if (!selectedAlbumId) {
      alert('Primero selecciona o crea un álbum.')
      return
    }
    if (!detectedVideoId) {
      alert('No pude reconocer esa URL de YouTube. Revisa el link.')
      return
    }
    if (!songTitle.trim()) {
      alert('Falta el título de la canción.')
      return
    }
    setLoading(true)
    try {
      await addTrack({
        albumId: selectedAlbumId,
        subtitle: selectedAlbum?.title ?? '',
        title: songTitle.trim(),
        titleEn: songTitleEn.trim() || null,
        youtubeUrl: songUrl.trim(),
        youtubeVideoId: detectedVideoId,
        songMeta: {
          era: songEra.trim(),
          character: songCharacter.trim(),
          titleEn: songTitleEn.trim() || null,
          arc: songArc.trim(),
          scriptureRef: songScripture.trim(),
          signatureSound: songSignature.trim(),
        },
      })
      setSongUrl('')
      setSongTitle('')
      setSongTitleEn('')
      setSongCharacter('')
      setSongEra('')
      setSongArc('')
      setSongScripture('')
      setSongSignature('')
    } finally {
      setLoading(false)
    }
  }

  async function handleDeleteTrack(trackId: string) {
    if (!confirm('¿Eliminar esta canción?')) return
    await deleteTrack(trackId)
  }

  function handleProcessImport() {
    setImportPreview(parseAlbumReport(importText))
  }

  async function handleConfirmImport() {
    if (!selectedAlbumId) {
      alert('Primero selecciona un álbum en la pestaña de Canciones.')
      return
    }
    setImporting(true)
    try {
      const count = await addTracksFromImport(selectedAlbumId, selectedAlbum?.title ?? '', importPreview)
      if (count === 0) {
        alert('No hay canciones válidas para importar.')
        return
      }
      setImportText('')
      setImportPreview([])
      setTab('tracks')
      alert(`${count} canciones importadas correctamente.`)
    } finally {
      setImporting(false)
    }
  }

  const tabs: { id: Tab; label: string }[] = [
    { id: 'albums', label: '1. Álbumes' },
    { id: 'tracks', label: '2. Canciones' },
    { id: 'import', label: '3. Importar informe' },
  ]

  const inputClass =
    'mb-3 w-full rounded-lg border border-sg-gold/20 bg-navy-deep px-3 py-2.5 font-ui text-sm text-parchment placeholder:text-parchment/30 focus:border-sg-gold/50 focus:outline-none'
  const labelClass = 'mb-1.5 block font-ui text-[11px] uppercase tracking-wider text-parchment/50'

  return (
    <div className="mx-auto max-w-3xl space-y-6 pb-16">
      <nav className="flex items-center gap-2 font-ui text-xs text-parchment/40">
        <Link to="/admin" className="hover:text-parchment/70">Admin</Link>
        <span>›</span>
        <span className="text-parchment/70">Música</span>
      </nav>

      <header className="space-y-1">
        <h1 className="font-display text-3xl text-parchment">Música</h1>
        <p className="font-ui text-sm text-parchment/50">Carga álbumes y canciones de YouTube sin tocar código.</p>
      </header>

      <div role="tablist" className="flex gap-1 rounded-2xl border border-sg-gold/15 bg-navy-mid p-1">
        {tabs.map(({ id, label }) => (
          <button
            key={id}
            type="button"
            role="tab"
            aria-selected={tab === id}
            onClick={() => setTab(id)}
            className={`flex-1 rounded-xl px-3 py-2.5 font-ui text-sm font-semibold transition ${
              tab === id ? 'bg-navy-light text-parchment shadow-sm' : 'text-parchment/40 hover:text-parchment/70'
            }`}
          >
            {label}
          </button>
        ))}
      </div>

      {tab === 'albums' && (
        <div className="space-y-6">
          <div className="rounded-xl border border-sg-gold/15 bg-navy-mid p-5">
            <label className={labelClass}>Título del álbum</label>
            <input
              className={inputClass}
              value={albumTitle}
              onChange={(e) => setAlbumTitle(e.target.value)}
              placeholder="Mis Otras Ovejas · Temporada 1"
            />
            <label className={labelClass}>Portada (URL, opcional)</label>
            <input
              className={inputClass}
              value={albumCover}
              onChange={(e) => setAlbumCover(e.target.value)}
              placeholder="https://..."
            />
            <label className={labelClass}>Informe / contexto del álbum (opcional)</label>
            <textarea
              className={`${inputClass} min-h-[140px] resize-y font-mono text-xs`}
              value={albumReport}
              onChange={(e) => setAlbumReport(e.target.value)}
              placeholder="Temporada, eras, notas de producción, lo que sea..."
            />
            <button
              onClick={handleSaveAlbum}
              disabled={loading}
              className="rounded-lg bg-sg-gold px-5 py-2.5 font-ui text-sm font-semibold text-navy-deep disabled:opacity-60"
            >
              {loading ? 'Guardando...' : 'Crear álbum'}
            </button>
          </div>

          <div>
            <h3 className="mb-2 font-ui text-sm text-parchment/70">Álbumes existentes</h3>
            <div className="flex flex-col gap-2">
              {albums.map((a) => (
                <div
                  key={a.id}
                  className="flex items-center justify-between rounded-lg bg-navy-mid px-3 py-2.5"
                >
                  <button
                    onClick={() => {
                      setSelectedAlbumId(a.id)
                      setTab('tracks')
                    }}
                    className="flex-1 text-left font-ui text-sm text-parchment"
                  >
                    {a.title}
                  </button>
                  <button
                    onClick={() => handleDeleteAlbum(a)}
                    className="font-ui text-xs text-red-400"
                  >
                    Eliminar
                  </button>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {tab === 'tracks' && (
        <div className="space-y-6">
          <div>
            <label className={labelClass}>Álbum</label>
            <select
              className={inputClass}
              value={selectedAlbumId}
              onChange={(e) => setSelectedAlbumId(e.target.value)}
            >
              <option value="">— Selecciona un álbum —</option>
              {albums.map((a) => (
                <option key={a.id} value={a.id}>{a.title}</option>
              ))}
            </select>
          </div>

          {selectedAlbumId && (
            <>
              <div className="rounded-xl border border-sg-gold/15 bg-navy-mid p-5">
                <label className={labelClass}>URL de YouTube</label>
                <input
                  className={inputClass}
                  value={songUrl}
                  onChange={(e) => setSongUrl(e.target.value)}
                  placeholder="https://youtube.com/watch?v=..."
                />
                {songUrl && (
                  <p className={`mb-3 -mt-2 font-ui text-xs ${detectedVideoId ? 'text-sg-gold-light' : 'text-red-400'}`}>
                    {detectedVideoId ? `✓ Video detectado: ${detectedVideoId}` : '✗ No reconozco esa URL'}
                  </p>
                )}

                <label className={labelClass}>Título (español)</label>
                <input className={inputClass} value={songTitle} onChange={(e) => setSongTitle(e.target.value)} placeholder="Estandarte De La Libertad" />

                <label className={labelClass}>Título (inglés, opcional)</label>
                <input className={inputClass} value={songTitleEn} onChange={(e) => setSongTitleEn(e.target.value)} placeholder="Title of Liberty" />

                <label className={labelClass}>Personaje</label>
                <input className={inputClass} value={songCharacter} onChange={(e) => setSongCharacter(e.target.value)} placeholder="Capitán Moroni" />

                <label className={labelClass}>Era / contexto</label>
                <input className={inputClass} value={songEra} onChange={(e) => setSongEra(e.target.value)} placeholder="Guerra y libertad · ~73–64 a.C." />

                <label className={labelClass}>Arco narrativo</label>
                <textarea
                  className={`${inputClass} min-h-[80px] resize-y`}
                  value={songArc}
                  onChange={(e) => setSongArc(e.target.value)}
                  placeholder="Un manto rasgado convertido en bandera..."
                />

                <label className={labelClass}>Referencia escritural</label>
                <input className={inputClass} value={songScripture} onChange={(e) => setSongScripture(e.target.value)} placeholder="Alma 46:12–13 · Alma 48:11–17" />

                <label className={labelClass}>Signature Sound</label>
                <textarea
                  className={`${inputClass} min-h-[60px] resize-y`}
                  value={songSignature}
                  onChange={(e) => setSongSignature(e.target.value)}
                  placeholder="Modern folk rock con electronic..."
                />

                <button
                  onClick={handleSaveTrack}
                  disabled={loading || !detectedVideoId}
                  className="rounded-lg bg-sg-gold px-5 py-2.5 font-ui text-sm font-semibold text-navy-deep disabled:opacity-50"
                >
                  {loading ? 'Guardando...' : 'Agregar canción'}
                </button>
              </div>

              <div>
                <h3 className="mb-2 font-ui text-sm text-parchment/70">Canciones en este álbum ({tracks.length})</h3>
                <div className="flex flex-col gap-2">
                  {tracks.map((t) => (
                    <div key={t.id} className="flex items-center gap-3 rounded-lg bg-navy-mid p-2.5">
                      <img src={t.coverUrl} alt="" className="h-10 w-10 rounded-md object-cover" />
                      <div className="min-w-0 flex-1">
                        <p className="truncate font-ui text-sm text-parchment">{t.title}</p>
                        <p className="truncate font-ui text-xs text-parchment/50">{t.songMeta?.character}</p>
                      </div>
                      <button onClick={() => handleDeleteTrack(t.id)} className="font-ui text-xs text-red-400">
                        Eliminar
                      </button>
                    </div>
                  ))}
                </div>
              </div>
            </>
          )}
        </div>
      )}

      {tab === 'import' && (
        <div className="space-y-4">
          <div>
            <label className={labelClass}>Álbum destino</label>
            <select className={inputClass} value={selectedAlbumId} onChange={(e) => setSelectedAlbumId(e.target.value)}>
              <option value="">— Selecciona un álbum —</option>
              {albums.map((a) => (
                <option key={a.id} value={a.id}>{a.title}</option>
              ))}
            </select>
          </div>

          <div>
            <label className={labelClass}>Pega aquí el informe completo (ver docs/SEEKER-GOSPEL-PLANTILLA-INFORME.md)</label>
            <textarea
              className={`${inputClass} min-h-[260px] resize-y font-mono text-xs`}
              value={importText}
              onChange={(e) => setImportText(e.target.value)}
              placeholder={'---SONG---\nTítulo: ...\nYouTube: ...\n---FIN---'}
            />
          </div>

          <button
            onClick={handleProcessImport}
            className="rounded-lg border border-sg-gold bg-navy-mid px-5 py-2.5 font-ui text-sm text-parchment"
          >
            Vista previa
          </button>

          {importPreview.length > 0 && (
            <div className="space-y-3">
              <h3 className="font-ui text-sm text-parchment/70">
                {importPreview.filter((s) => s.valid).length} de {importPreview.length} canciones listas
              </h3>
              <div className="flex flex-col gap-2">
                {importPreview.map((song, i) => (
                  <div
                    key={i}
                    className={`rounded-lg bg-navy-mid p-3 border-l-4 ${song.valid ? 'border-sg-gold-light' : 'border-red-400'}`}
                  >
                    <p className="font-ui text-sm text-parchment">{song.title || '(sin título)'}</p>
                    <p className="font-ui text-xs text-parchment/50">
                      {song.character} {song.era ? `· ${song.era}` : ''}
                    </p>
                    {!song.valid && <p className="mt-1 font-ui text-xs text-red-400">{song.errors.join(' · ')}</p>}
                  </div>
                ))}
              </div>

              <button
                onClick={handleConfirmImport}
                disabled={importing || !selectedAlbumId}
                className="rounded-lg bg-sg-gold px-5 py-2.5 font-ui text-sm font-semibold text-navy-deep disabled:opacity-50"
              >
                {importing ? 'Importando...' : `Importar ${importPreview.filter((s) => s.valid).length} canciones`}
              </button>
            </div>
          )}
        </div>
      )}
    </div>
  )
}
