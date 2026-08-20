import { useState } from 'react'
import { Link, Navigate } from 'react-router-dom'
import { useAdmin } from '@/hooks/useAdmin'
import { useAuth } from '@/hooks/useAuth'
import {
  createDownloadable,
  deleteDownloadable,
  newDownloadableResourceId,
  uploadDownloadableCover,
  uploadDownloadableFile,
} from '@/services/downloadables.service'
import { useDownloadables } from '@/hooks/useDownloadables'
import type { DownloadableResource } from '@/types/downloadable'

const inputClass =
  'mb-3 w-full rounded-lg border border-sg-gold/20 bg-navy-deep px-3 py-2.5 font-ui text-sm text-parchment placeholder:text-parchment/30 focus:border-sg-gold/50 focus:outline-none'
const labelClass = 'mb-1.5 block font-ui text-[11px] uppercase tracking-wider text-parchment/50'

function formatBytes(bytes: number): string {
  if (bytes < 1024) return `${bytes} B`
  if (bytes < 1024 * 1024) return `${(bytes / 1024).toFixed(1)} KB`
  return `${(bytes / (1024 * 1024)).toFixed(1)} MB`
}

export default function DescargablesAdminPage() {
  const { user, authLoading } = useAuth()
  const { isAdmin } = useAdmin()
  const resources = useDownloadables()

  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')
  const [tagsInput, setTagsInput] = useState('')
  const [file, setFile] = useState<File | null>(null)
  const [coverFile, setCoverFile] = useState<File | null>(null)
  const [saving, setSaving] = useState(false)
  const [status, setStatus] = useState('')

  if (authLoading) return null
  if (!user || !isAdmin) return <Navigate to="/" replace />

  function resetFields() {
    setTitle('')
    setDescription('')
    setTagsInput('')
    setFile(null)
    setCoverFile(null)
  }

  async function handleSave() {
    if (!title.trim()) {
      alert('Falta el título del recurso.')
      return
    }
    if (!file) {
      alert('Selecciona el archivo a compartir.')
      return
    }
    setSaving(true)
    try {
      const id = newDownloadableResourceId()
      setStatus(`Subiendo ${file.name}...`)
      const { url: fileUrl, storagePath } = await uploadDownloadableFile(id, file)

      let coverImageUrl: string | null = null
      let coverStoragePath: string | null = null
      if (coverFile) {
        setStatus('Subiendo portada...')
        const cover = await uploadDownloadableCover(id, coverFile)
        coverImageUrl = cover.url
        coverStoragePath = cover.storagePath
      }

      const tags = tagsInput
        .split(',')
        .map((t) => t.trim())
        .filter(Boolean)

      await createDownloadable({
        id,
        title: title.trim(),
        description: description.trim(),
        fileUrl,
        storagePath,
        fileName: file.name,
        fileSizeBytes: file.size,
        fileType: file.type || 'application/octet-stream',
        coverImageUrl,
        coverStoragePath,
        tags,
        uploadedByUid: user!.uid,
      })
      resetFields()
    } catch (e) {
      console.error(e)
      alert('Error al subir el recurso.')
    } finally {
      setSaving(false)
      setStatus('')
    }
  }

  async function handleDelete(resource: DownloadableResource) {
    if (!confirm(`¿Eliminar "${resource.title}"? Esto borra el archivo permanentemente.`)) return
    await deleteDownloadable(resource.id, resource.storagePath, resource.coverStoragePath)
  }

  return (
    <div className="mx-auto max-w-3xl space-y-6 pb-16">
      <nav className="flex items-center gap-2 font-ui text-xs text-parchment/40">
        <Link to="/admin" className="hover:text-parchment/70">Admin</Link>
        <span>›</span>
        <span className="text-parchment/70">Descargables</span>
      </nav>

      <header className="space-y-1">
        <h1 className="font-display text-3xl text-parchment">Descargables</h1>
        <p className="font-ui text-sm text-parchment/50">
          Sube PDFs y guías descargables. Se publican con lectura pública, sin necesidad de iniciar sesión.
        </p>
      </header>

      <div className="rounded-xl border border-sg-gold/15 bg-navy-mid p-5">
        <p className="mb-3 font-ui text-xs font-semibold uppercase tracking-wider text-sg-gold-light">
          Nuevo recurso
        </p>

        <label className={labelClass}>Título</label>
        <input
          className={inputClass}
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Guía de estudio: Vida Familiar y Personal"
        />

        <label className={labelClass}>Descripción</label>
        <textarea
          className={`${inputClass} min-h-[70px] resize-y`}
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          placeholder="De qué trata este recurso, en una o dos frases."
        />

        <label className={labelClass}>Temas / etiquetas (separadas por coma)</label>
        <input
          className={inputClass}
          value={tagsInput}
          onChange={(e) => setTagsInput(e.target.value)}
          placeholder="familia, oración, hogar"
        />

        <label className={labelClass}>Archivo (PDF u otro documento)</label>
        <input
          type="file"
          onChange={(e) => setFile(e.target.files?.[0] ?? null)}
          className="mb-1 w-full font-ui text-xs text-parchment/70 file:mr-3 file:rounded-lg file:border-0 file:bg-sg-gold/15 file:px-3 file:py-2 file:font-ui file:text-xs file:font-semibold file:text-sg-gold-light"
        />
        <p className="mb-3 font-ui text-xs text-parchment/40">
          {file ? `✓ ${file.name} (${formatBytes(file.size)})` : 'Elige un archivo de tu computadora.'}
        </p>

        <label className={labelClass}>Portada (opcional)</label>
        <input
          type="file"
          accept="image/*"
          onChange={(e) => setCoverFile(e.target.files?.[0] ?? null)}
          className="mb-3 w-full font-ui text-xs text-parchment/70 file:mr-3 file:rounded-lg file:border-0 file:bg-sg-gold/15 file:px-3 file:py-2 file:font-ui file:text-xs file:font-semibold file:text-sg-gold-light"
        />

        <button
          onClick={handleSave}
          disabled={saving}
          className="rounded-lg bg-sg-gold px-5 py-2.5 font-ui text-sm font-semibold text-ink disabled:opacity-60"
        >
          {saving ? status || 'Guardando...' : 'Publicar recurso'}
        </button>
      </div>

      <div>
        <h3 className="mb-2 font-ui text-sm text-parchment/70">
          Recursos publicados ({resources.length})
        </h3>
        <div className="flex flex-col gap-2">
          {resources.map((r) => (
            <div key={r.id} className="flex items-center gap-3 rounded-lg bg-navy-mid px-3 py-2.5">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center overflow-hidden rounded-md bg-navy-deep">
                {r.coverImageUrl ? (
                  <img src={r.coverImageUrl} alt="" className="h-full w-full object-cover" />
                ) : (
                  <span className="text-lg" aria-hidden="true">📄</span>
                )}
              </div>
              <div className="min-w-0 flex-1">
                <p className="truncate font-ui text-sm text-parchment">{r.title}</p>
                <p className="truncate font-ui text-xs text-parchment/45">
                  {formatBytes(r.fileSizeBytes)} · {r.downloadCount} descargas
                </p>
              </div>
              <Link to={`/descargables/${r.id}`} className="font-ui text-xs text-sg-gold-light">
                Ver
              </Link>
              <button onClick={() => handleDelete(r)} className="font-ui text-xs text-red-400">
                Eliminar
              </button>
            </div>
          ))}
          {resources.length === 0 && (
            <p className="font-ui text-sm text-parchment/40">Sin recursos publicados aún.</p>
          )}
        </div>
      </div>
    </div>
  )
}
