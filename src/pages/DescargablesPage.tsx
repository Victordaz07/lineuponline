import { useMemo, useState } from 'react'
import { Link } from 'react-router-dom'
import { useDownloadables } from '@/hooks/useDownloadables'
import type { DownloadableResource } from '@/types/downloadable'

function fileIcon(fileType: string): string {
  if (fileType.includes('pdf')) return '📄'
  if (fileType.includes('audio')) return '🎧'
  if (fileType.includes('image')) return '🖼️'
  return '📎'
}

function ResourceCard({ resource }: { resource: DownloadableResource }) {
  return (
    <Link
      to={`/descargables/${resource.id}`}
      className="group relative overflow-hidden rounded-2xl border border-sg-gold/15 bg-navy-mid transition hover:border-sg-gold/30"
    >
      <div className="flex aspect-square w-full items-center justify-center overflow-hidden bg-navy-light">
        {resource.coverImageUrl ? (
          <img
            src={resource.coverImageUrl}
            alt={resource.title}
            className="h-full w-full object-cover transition duration-300 group-hover:scale-105"
          />
        ) : (
          <span className="text-4xl" aria-hidden="true">{fileIcon(resource.fileType)}</span>
        )}
      </div>
      <div className="p-3">
        <p className="font-ui text-sm font-semibold leading-tight text-parchment/90">{resource.title}</p>
        {resource.description && (
          <p className="mt-0.5 line-clamp-2 font-ui text-[11px] text-parchment/45">{resource.description}</p>
        )}
        {resource.tags.length > 0 && (
          <div className="mt-2 flex flex-wrap gap-1">
            {resource.tags.slice(0, 3).map((tag) => (
              <span
                key={tag}
                className="rounded-full border border-sg-gold/20 px-2 py-0.5 font-ui text-[10px] text-sg-gold/70"
              >
                {tag}
              </span>
            ))}
          </div>
        )}
      </div>
    </Link>
  )
}

export default function DescargablesPage() {
  const resources = useDownloadables()
  const [activeTag, setActiveTag] = useState<string | null>(null)

  const tags = useMemo(() => {
    const set = new Set<string>()
    resources.forEach((r) => r.tags.forEach((t) => set.add(t)))
    return Array.from(set).sort()
  }, [resources])

  const filtered = activeTag ? resources.filter((r) => r.tags.includes(activeTag)) : resources

  return (
    <div className="mx-auto max-w-2xl px-4 py-6">
      <div className="mb-6">
        <h1 className="font-display text-2xl font-semibold text-parchment">Descargables</h1>
        <p className="mt-1 font-ui text-sm text-parchment/50">
          Guías y documentos gratuitos, listos para descargar y compartir
        </p>
      </div>

      {tags.length > 0 && (
        <div className="mb-5 flex flex-wrap gap-2">
          <button
            onClick={() => setActiveTag(null)}
            className={`rounded-full border px-3 py-1 font-ui text-xs transition ${
              activeTag === null
                ? 'border-sg-gold bg-sg-gold/10 text-sg-gold-light'
                : 'border-sg-gold/20 text-parchment/50 hover:border-sg-gold/40'
            }`}
          >
            Todos
          </button>
          {tags.map((tag) => (
            <button
              key={tag}
              onClick={() => setActiveTag(tag)}
              className={`rounded-full border px-3 py-1 font-ui text-xs transition ${
                activeTag === tag
                  ? 'border-sg-gold bg-sg-gold/10 text-sg-gold-light'
                  : 'border-sg-gold/20 text-parchment/50 hover:border-sg-gold/40'
              }`}
            >
              {tag}
            </button>
          ))}
        </div>
      )}

      {filtered.length === 0 ? (
        <div className="flex flex-col items-center gap-4 py-20 text-center">
          <span className="text-5xl text-sg-gold/25" aria-hidden="true">📄</span>
          <div>
            <p className="font-ui text-sm font-semibold text-parchment/50">Pronto habrá descargables aquí</p>
            <p className="mt-1 font-ui text-xs text-parchment/30">
              Los recursos publicados aparecerán en esta pantalla
            </p>
          </div>
        </div>
      ) : (
        <div className="grid grid-cols-2 gap-3 sm:grid-cols-3">
          {filtered.map((resource) => (
            <ResourceCard key={resource.id} resource={resource} />
          ))}
        </div>
      )}
    </div>
  )
}
