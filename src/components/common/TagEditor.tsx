import { useState } from 'react'

const TAG_COLORS = [
  'bg-blue-100 text-blue-700',
  'bg-emerald-100 text-emerald-700',
  'bg-purple-100 text-purple-700',
  'bg-amber-100 text-amber-700',
  'bg-rose-100 text-rose-700',
]

function tagColor(tag: string): string {
  let hash = 0
  for (const c of tag) hash = (hash * 31 + c.charCodeAt(0)) & 0xffff
  return TAG_COLORS[hash % TAG_COLORS.length]!
}

type TagEditorProps = {
  tags: string[]
  onChange: (tags: string[]) => void
}

export function TagEditor({ tags, onChange }: TagEditorProps) {
  const [editing, setEditing] = useState(false)
  const [input, setInput] = useState('')

  function addTag(raw: string) {
    const tag = raw.trim().toLowerCase().replace(/\s+/g, '-')
    if (!tag || tags.includes(tag)) {
      setInput('')
      return
    }
    onChange([...tags, tag])
    setInput('')
  }

  return (
    <div className="flex flex-wrap items-center gap-1.5">
      {tags.map((tag) => (
        <span
          key={tag}
          className={`flex items-center gap-1 rounded-full px-2 py-0.5 font-ui text-xs font-medium ${tagColor(tag)}`}
        >
          #{tag}
          <button
            type="button"
            onClick={() => onChange(tags.filter((t) => t !== tag))}
            aria-label={`Quitar etiqueta ${tag}`}
            className="ml-0.5 opacity-60 hover:opacity-100"
          >
            ×
          </button>
        </span>
      ))}

      {editing ? (
        <input
          type="text"
          value={input}
          autoFocus
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === 'Enter' || e.key === ',') {
              e.preventDefault()
              addTag(input)
            }
            if (e.key === 'Escape') {
              setEditing(false)
              setInput('')
            }
          }}
          onBlur={() => {
            if (input.trim()) addTag(input)
            setEditing(false)
            setInput('')
          }}
          placeholder="etiqueta…"
          className="w-24 rounded-full border border-sg-gold/20 bg-navy-deep px-2 py-0.5 font-ui text-xs text-parchment/80 focus:outline-none focus:ring-2 focus:ring-sg-gold/30"
        />
      ) : (
        <button
          type="button"
          onClick={() => setEditing(true)}
          className="rounded-full border border-dashed border-sg-gold/20 px-2 py-0.5 font-ui text-xs text-parchment/50 transition hover:border-sg-gold/40 hover:text-sg-gold-light"
        >
          + etiqueta
        </button>
      )}
    </div>
  )
}
