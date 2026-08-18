import { useEffect, useRef, useState } from 'react'
import { Link, Navigate } from 'react-router-dom'
import { useAdmin } from '@/hooks/useAdmin'
import { useAuth } from '@/hooks/useAuth'
import { extractYoutubeId } from '../lib/extractYoutubeId'
import { parseAlbumReport, type ParsedSong } from '../lib/parseAlbumReport'
import {
  addAlbum,
  addTrack,
  addTracksFromImport,
  addUploadedTrack,
  deleteAlbum,
  deleteTrack,
  newAlbumId,
  nextTrackOrder,
  reorderTrack,
  subscribeAlbums,
  subscribeTracksByAlbum,
  updateAlbum,
  updateTrack,
} from '../services/discography.service'
import { uploadDiscographyAudio, uploadDiscographyCover } from '../services/discographyStorage.service'
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

  const [editingAlbumId, setEditingAlbumId] = useState<string | null>(null)
  const [albumTitle, setAlbumTitle] = useState('')
  const [albumDescription, setAlbumDescription] = useState('')
  const [albumReport, setAlbumReport] = useState('')
  const [albumCoverUrl, setAlbumCoverUrl] = useState('')
  const [albumCoverFile, setAlbumCoverFile] = useState<File | null>(null)
  const [albumCoverPreview, setAlbumCoverPreview] = useState<string | null>(null)

  const [songSource, setSongSource] = useState<'youtube' | 'upload'>('youtube')
  const [songUrl, setSongUrl] = useState('')
  const [audioFile, setAudioFile] = useState<File | null>(null)
  const [uploadStatus, setUploadStatus] = useState('')
  const [songTitle, setSongTitle] = useState('')
  const [songTitleEn, setSongTitleEn] = useState('')
  const [songCharacter, setSongCharacter] = useState('')
  const [songEra, setSongEra] = useState('')
  const [songArc, setSongArc] = useState('')
  const [songScripture, setSongScripture] = useState('')
  const [songSignature, setSongSignature] = useState('')

  const [bulkUploading, setBulkUploading] = useState(false)
  const [bulkStatus, setBulkStatus] = useState('')
  const bulkInputRef = useRef<HTMLInputElement>(null)

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

  // Vista previa local del archivo de portada elegido, antes de subirlo.
  useEffect(() => {
    if (!albumCoverFile) {
      // eslint-disable-next-line react-hooks/set-state-in-effect
      setAlbumCoverPreview(null)
      return
    }
    const url = URL.createObjectURL(albumCoverFile)
    setAlbumCoverPreview(url)
    return () => URL.revokeObjectURL(url)
  }, [albumCoverFile])

  if (authLoading) return null
  if (!user || !isAdmin) return <Navigate to="/" replace />

  function resetAlbumFields() {
    setEditingAlbumId(null)
    setAlbumTitle('')
    setAlbumDescription('')
    setAlbumReport('')
    setAlbumCoverUrl('')
    setAlbumCoverFile(null)
  }

  function startEditAlbum(album: Album) {
    setEditingAlbumId(album.id)
    setAlbumTitle(album.title)
    setAlbumDescription(album.description)
    setAlbumReport('')
    setAlbumCoverUrl(album.coverUrl ?? '')
    setAlbumCoverFile(null)
    setTab('albums')
  }

  async function handleSaveAlbum() {
    if (!albumTitle.trim()) {
      alert('Falta el título del álbum.')
      return
    }
    setLoading(true)
    try {
      const id = editingAlbumId ?? newAlbumId()
      let coverUrl = albumCoverUrl
      if (albumCoverFile) {
        coverUrl = await uploadDiscographyCover(albumCoverFile, id)
      }

      if (editingAlbumId) {
        await updateAlbum(editingAlbumId, {
          title: albumTitle.trim(),
          description: albumDescription.trim(),
          coverUrl: coverUrl.trim() || null,
        })
      } else {
        await addAlbum({
          id,
          title: albumTitle.trim(),
          description: albumDescription.trim(),
          report: albumReport.trim(),
          coverUrl,
        })
      }
      resetAlbumFields()
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
    if (editingAlbumId === album.id) resetAlbumFields()
  }

  function resetSongFields() {
    setSongUrl('')
    setAudioFile(null)
    setSongTitle('')
    setSongTitleEn('')
    setSongCharacter('')
    setSongEra('')
    setSongArc('')
    setSongScripture('')
    setSongSignature('')
  }

  async function handleSaveTrack() {
    if (!selectedAlbumId) {
      alert('Primero selecciona o crea un álbum.')
      return
    }
    if (!songTitle.trim()) {
      alert('Falta el título de la canción.')
      return
    }
    const songMeta = {
      era: songEra.trim(),
      character: songCharacter.trim(),
      titleEn: songTitleEn.trim() || null,
      arc: songArc.trim(),
      scriptureRef: songScripture.trim(),
      signatureSound: songSignature.trim(),
    }

    if (songSource === 'upload') {
      if (!audioFile) {
        alert('Selecciona un archivo MP3 para subir.')
        return
      }
      setLoading(true)
      setUploadStatus(`Subiendo ${audioFile.name}...`)
      try {
        const { url, storagePath } = await uploadDiscographyAudio(audioFile, selectedAlbumId)
        await addUploadedTrack({
          albumId: selectedAlbumId,
          subtitle: selectedAlbum?.title ?? '',
          title: songTitle.trim(),
          titleEn: songTitleEn.trim() || null,
          storageUrl: url,
          storagePath,
          order: nextTrackOrder(tracks),
          coverUrl: selectedAlbum?.coverUrl,
          songMeta,
        })
        resetSongFields()
      } catch (e) {
        console.error(e)
        alert('Error al subir el archivo.')
      } finally {
        setLoading(false)
        setUploadStatus('')
      }
      return
    }

    if (!detectedVideoId) {
      alert('No pude reconocer esa URL de YouTube. Revisa el link.')
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
        order: nextTrackOrder(tracks),
        songMeta,
      })
      resetSongFields()
    } finally {
      setLoading(false)
    }
  }

  async function handleBulkUpload(files: FileList | null) {
    if (!files || files.length === 0 || !selectedAlbumId) return
    setBulkUploading(true)
    let order = nextTrackOrder(tracks)
    for (let i = 0; i < files.length; i++) {
      const file = files[i]
      setBulkStatus(`Subiendo ${i + 1}/${files.length}: ${file.name}`)
      try {
        const { url, storagePath } = await uploadDiscographyAudio(file, selectedAlbumId)
        await addUploadedTrack({
          albumId: selectedAlbumId,
          subtitle: selectedAlbum?.title ?? '',
          title: file.name.replace(/\.[^.]+$/, ''),
          storageUrl: url,
          storagePath,
          order: order++,
          coverUrl: selectedAlbum?.coverUrl,
        })
      } catch (e) {
        console.error(e)
        alert(`Error subiendo ${file.name}`)
      }
    }
    setBulkUploading(false)
    setBulkStatus('')
    if (bulkInputRef.current) bulkInputRef.current.value = ''
  }

  async function handleDeleteTrack(track: DiscographyTrack) {
    if (!confirm('¿Eliminar esta canción?')) return
    await deleteTrack(track.id, track.storagePath)
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
      const count = await addTracksFromImport(selectedAlbumId, selectedAlbum?.title ?? '', importPreview, nextTrackOrder(tracks))
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
        <p className="font-ui text-sm text-parchment/50">Carga álbumes y canciones de YouTube o tus propios MP3, sin tocar código.</p>
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
            <p className="mb-3 font-ui text-xs font-semibold uppercase tracking-wider text-sg-gold-light">
              {editingAlbumId ? 'Editando álbum' : 'Nuevo álbum'}
            </p>

            <label className={labelClass}>Título del álbum</label>
            <input
              className={inputClass}
              value={albumTitle}
              onChange={(e) => setAlbumTitle(e.target.value)}
              placeholder="Mis Otras Ovejas · Temporada 1"
            />

            <label className={labelClass}>Descripción (se muestra a los usuarios)</label>
            <textarea
              className={`${inputClass} min-h-[70px] resize-y`}
              value={albumDescription}
              onChange={(e) => setAlbumDescription(e.target.value)}
              placeholder="De qué trata este álbum, en una o dos frases."
            />

            <label className={labelClass}>Portada</label>
            <div className="mb-3 flex items-center gap-3">
              <div className="flex h-16 w-16 shrink-0 items-center justify-center overflow-hidden rounded-lg bg-navy-deep">
                {albumCoverPreview || albumCoverUrl ? (
                  <img src={albumCoverPreview ?? albumCoverUrl} alt="" className="h-full w-full object-cover" />
                ) : (
                  <span className="text-2xl" aria-hidden="true">🖼️</span>
                )}
              </div>
              <div className="flex-1">
                <input
                  type="file"
                  accept="image/*"
                  onChange={(e) => setAlbumCoverFile(e.target.files?.[0] ?? null)}
                  className="mb-1.5 w-full font-ui text-xs text-parchment/70 file:mr-2 file:rounded-lg file:border-0 file:bg-sg-gold/15 file:px-2.5 file:py-1.5 file:font-ui file:text-xs file:font-semibold file:text-sg-gold-light"
                />
                <input
                  className="w-full rounded-lg border border-sg-gold/20 bg-navy-deep px-2.5 py-1.5 font-ui text-xs text-parchment placeholder:text-parchment/30 focus:border-sg-gold/50 focus:outline-none"
                  value={albumCoverUrl}
                  onChange={(e) => {
                    setAlbumCoverUrl(e.target.value)
                    setAlbumCoverFile(null)
                  }}
                  placeholder="...o pega una URL de imagen"
                />
              </div>
            </div>

            {!editingAlbumId && (
              <>
                <label className={labelClass}>Notas internas para importar canciones (opcional, ver pestaña 3)</label>
                <textarea
                  className={`${inputClass} min-h-[100px] resize-y font-mono text-xs`}
                  value={albumReport}
                  onChange={(e) => setAlbumReport(e.target.value)}
                  placeholder="Temporada, eras, notas de producción, lo que sea..."
                />
              </>
            )}

            <div className="flex gap-2">
              <button
                onClick={handleSaveAlbum}
                disabled={loading}
                className="rounded-lg bg-sg-gold px-5 py-2.5 font-ui text-sm font-semibold text-ink disabled:opacity-60"
              >
                {loading ? 'Guardando...' : editingAlbumId ? 'Guardar cambios' : 'Crear álbum'}
              </button>
              {editingAlbumId && (
                <button
                  onClick={resetAlbumFields}
                  className="rounded-lg border border-sg-gold/30 px-4 py-2.5 font-ui text-sm text-parchment/70"
                >
                  Cancelar
                </button>
              )}
            </div>
          </div>

          <div>
            <h3 className="mb-2 font-ui text-sm text-parchment/70">Álbumes existentes</h3>
            <div className="flex flex-col gap-2">
              {albums.map((a) => (
                <div
                  key={a.id}
                  className="flex items-center gap-2 rounded-lg bg-navy-mid px-3 py-2.5"
                >
                  <div className="flex h-9 w-9 shrink-0 items-center justify-center overflow-hidden rounded-md bg-navy-deep">
                    {a.coverUrl ? (
                      <img src={a.coverUrl} alt="" className="h-full w-full object-cover" />
                    ) : (
                      <span className="text-sm" aria-hidden="true">💿</span>
                    )}
                  </div>
                  <button
                    onClick={() => {
                      setSelectedAlbumId(a.id)
                      setTab('tracks')
                    }}
                    className="flex-1 truncate text-left font-ui text-sm text-parchment"
                  >
                    {a.title}
                  </button>
                  <button onClick={() => startEditAlbum(a)} className="font-ui text-xs text-sg-gold-light">
                    Editar
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
                <label className={labelClass}>Fuente</label>
                <div className="mb-3 flex gap-1 rounded-xl border border-sg-gold/15 bg-navy-deep p-1">
                  {(['youtube', 'upload'] as const).map((source) => (
                    <button
                      key={source}
                      type="button"
                      onClick={() => setSongSource(source)}
                      className={`flex-1 rounded-lg px-3 py-2 font-ui text-xs font-semibold transition ${
                        songSource === source ? 'bg-navy-light text-parchment shadow-sm' : 'text-parchment/40 hover:text-parchment/70'
                      }`}
                    >
                      {source === 'youtube' ? 'URL de YouTube' : 'Subir MP3'}
                    </button>
                  ))}
                </div>

                {songSource === 'youtube' ? (
                  <>
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
                  </>
                ) : (
                  <>
                    <label className={labelClass}>Archivo MP3</label>
                    <input
                      type="file"
                      accept="audio/*,.mp3,.wav,.ogg,.m4a"
                      onChange={(e) => setAudioFile(e.target.files?.[0] ?? null)}
                      className="mb-1 w-full font-ui text-xs text-parchment/70 file:mr-3 file:rounded-lg file:border-0 file:bg-sg-gold/15 file:px-3 file:py-2 file:font-ui file:text-xs file:font-semibold file:text-sg-gold-light"
                    />
                    <p className="mb-3 font-ui text-xs text-parchment/40">
                      {audioFile ? `✓ ${audioFile.name} (${(audioFile.size / 1024 / 1024).toFixed(1)} MB)` : 'Elige un archivo de tu computadora.'}
                    </p>
                  </>
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
                  disabled={loading || (songSource === 'youtube' ? !detectedVideoId : !audioFile)}
                  className="rounded-lg bg-sg-gold px-5 py-2.5 font-ui text-sm font-semibold text-ink disabled:opacity-50"
                >
                  {loading ? uploadStatus || 'Guardando...' : 'Agregar canción'}
                </button>
              </div>

              <div className="rounded-xl border border-dashed border-sg-gold/25 bg-navy-mid/50 p-4">
                <p className="mb-2 font-ui text-xs font-semibold text-parchment/70">
                  Subir un álbum completo de una vez
                </p>
                <p className="mb-3 font-ui text-xs text-parchment/45">
                  Elige varios MP3 a la vez — se agregan en el orden en que los selecciones, con el nombre del
                  archivo como título (lo puedes renombrar después).
                </p>
                {bulkUploading ? (
                  <p className="font-ui text-xs text-sg-gold animate-pulse">{bulkStatus}</p>
                ) : (
                  <input
                    ref={bulkInputRef}
                    type="file"
                    accept="audio/*,.mp3,.wav,.ogg,.m4a"
                    multiple
                    onChange={(e) => handleBulkUpload(e.target.files)}
                    className="w-full font-ui text-xs text-parchment/70 file:mr-3 file:rounded-lg file:border-0 file:bg-sg-gold/15 file:px-3 file:py-2 file:font-ui file:text-xs file:font-semibold file:text-sg-gold-light"
                  />
                )}
              </div>

              <div>
                <h3 className="mb-2 font-ui text-sm text-parchment/70">
                  Canciones en este álbum ({tracks.length}) — usa las flechas para ordenarlas
                </h3>
                <div className="flex flex-col gap-2">
                  {tracks.map((t, i) => (
                    <TrackRow
                      key={t.id}
                      track={t}
                      isFirst={i === 0}
                      isLast={i === tracks.length - 1}
                      onMove={(direction) => reorderTrack(tracks, t.id, direction)}
                      onDelete={() => handleDeleteTrack(t)}
                    />
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
                className="rounded-lg bg-sg-gold px-5 py-2.5 font-ui text-sm font-semibold text-ink disabled:opacity-50"
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

function TrackRow({
  track,
  isFirst,
  isLast,
  onMove,
  onDelete,
}: {
  track: DiscographyTrack
  isFirst: boolean
  isLast: boolean
  onMove: (direction: 'up' | 'down') => void
  onDelete: () => void
}) {
  const [editing, setEditing] = useState(false)
  const [title, setTitle] = useState(track.title)

  async function handleRename() {
    setEditing(false)
    if (title.trim() && title.trim() !== track.title) {
      await updateTrack(track.id, { title: title.trim() })
    } else {
      setTitle(track.title)
    }
  }

  return (
    <div className="flex items-center gap-2 rounded-lg bg-navy-mid p-2.5">
      <div className="flex shrink-0 flex-col">
        <button
          onClick={() => onMove('up')}
          disabled={isFirst}
          className="flex h-4 w-5 items-center justify-center text-parchment/40 hover:text-sg-gold-light disabled:opacity-20"
          title="Subir"
        >
          ▲
        </button>
        <button
          onClick={() => onMove('down')}
          disabled={isLast}
          className="flex h-4 w-5 items-center justify-center text-parchment/40 hover:text-sg-gold-light disabled:opacity-20"
          title="Bajar"
        >
          ▼
        </button>
      </div>
      {track.coverUrl ? (
        <img src={track.coverUrl} alt="" className="h-10 w-10 shrink-0 rounded-md object-cover" />
      ) : (
        <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-md bg-navy-deep text-lg" aria-hidden="true">
          🎵
        </span>
      )}
      <div className="min-w-0 flex-1">
        {editing ? (
          <input
            autoFocus
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            onBlur={handleRename}
            onKeyDown={(e) => e.key === 'Enter' && handleRename()}
            className="w-full rounded-lg bg-navy-deep px-2 py-1 font-ui text-sm text-parchment outline-none ring-1 ring-sg-gold/40"
          />
        ) : (
          <button className="block truncate text-left font-ui text-sm text-parchment" onClick={() => setEditing(true)} title="Clic para renombrar">
            {track.title}
          </button>
        )}
        <p className="truncate font-ui text-xs text-parchment/50">{track.songMeta?.character}</p>
      </div>
      <button onClick={onDelete} className="shrink-0 font-ui text-xs text-red-400">
        Eliminar
      </button>
    </div>
  )
}
