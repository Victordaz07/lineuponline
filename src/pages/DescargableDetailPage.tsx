import { useParams, Link } from 'react-router-dom'
import { LoadingSpinner } from '@/components/common/LoadingSpinner'
import { useDownloadable } from '@/hooks/useDownloadables'
import { registerDownload } from '@/services/downloadables.service'

function formatBytes(bytes: number): string {
  if (bytes < 1024) return `${bytes} B`
  if (bytes < 1024 * 1024) return `${(bytes / 1024).toFixed(1)} KB`
  return `${(bytes / (1024 * 1024)).toFixed(1)} MB`
}

export default function DescargableDetailPage() {
  const { id } = useParams<{ id: string }>()
  const { resource, loading } = useDownloadable(id)

  if (loading) {
    return (
      <div className="flex min-h-[50vh] items-center justify-center">
        <LoadingSpinner />
      </div>
    )
  }

  if (!resource) {
    return (
      <div className="mx-auto max-w-2xl px-4 py-16 text-center">
        <p className="font-ui text-sm font-semibold text-parchment/60">Recurso no encontrado</p>
        <p className="mt-1 font-ui text-xs text-parchment/40">Puede que haya sido eliminado.</p>
        <Link to="/descargables" className="mt-4 inline-block font-ui text-sm text-sg-gold-light">
          ← Volver a Descargables
        </Link>
      </div>
    )
  }

  return (
    <div className="mx-auto max-w-2xl px-4 py-6">
      <nav className="mb-4 font-ui text-xs text-parchment/40">
        <Link to="/descargables" className="hover:text-parchment/70">Descargables</Link>
      </nav>

      <div className="overflow-hidden rounded-2xl border border-sg-gold/15 bg-navy-mid">
        <div className="flex aspect-[16/9] w-full items-center justify-center overflow-hidden bg-navy-light">
          {resource.coverImageUrl ? (
            <img src={resource.coverImageUrl} alt={resource.title} className="h-full w-full object-cover" />
          ) : (
            <span className="text-6xl" aria-hidden="true">📄</span>
          )}
        </div>

        <div className="p-5">
          <h1 className="font-display text-2xl text-parchment">{resource.title}</h1>
          {resource.description && (
            <p className="mt-2 font-ui text-sm text-parchment/60">{resource.description}</p>
          )}

          {resource.tags.length > 0 && (
            <div className="mt-3 flex flex-wrap gap-1.5">
              {resource.tags.map((tag) => (
                <span
                  key={tag}
                  className="rounded-full border border-sg-gold/20 px-2.5 py-1 font-ui text-xs text-sg-gold/70"
                >
                  {tag}
                </span>
              ))}
            </div>
          )}

          <p className="mt-4 font-ui text-xs text-parchment/40">
            {formatBytes(resource.fileSizeBytes)} · {resource.downloadCount} descargas
          </p>

          <a
            href={resource.fileUrl}
            download={resource.fileName}
            target="_blank"
            rel="noopener"
            onClick={() => void registerDownload(resource)}
            className="mt-5 inline-flex items-center gap-2 rounded-lg bg-sg-gold px-5 py-2.5 font-ui text-sm font-semibold text-ink"
          >
            ⬇ Descargar
          </a>
        </div>
      </div>
    </div>
  )
}
