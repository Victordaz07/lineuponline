import { useState } from 'react'
import type { MessageType } from '@/types/community'
import { MESSAGE_TYPE_LABELS } from '@/types/community'

const MESSAGE_TYPES: MessageType[] = ['comment', 'suggestion', 'concern', 'topic_request']

export type MessageFormProps = {
  onSubmit: (payload: { type: MessageType; content: string; topicName?: string }) => Promise<void>
}

/**
 * Formulario para enviar mensajes a la comunidad.
 * Incluye selector de tipo, campo opcional de nombre de tema y área de contenido.
 */
export function MessageForm({ onSubmit }: MessageFormProps) {
  const [type, setType] = useState<MessageType>('comment')
  const [content, setContent] = useState('')
  const [topicName, setTopicName] = useState('')
  const [loading, setLoading] = useState(false)
  const [errors, setErrors] = useState<{ content?: string; topicName?: string }>({})

  function validate(): boolean {
    const next: typeof errors = {}
    if (content.trim().length < 20) {
      next.content = 'El mensaje debe tener al menos 20 caracteres.'
    }
    if (type === 'topic_request' && topicName.trim().length === 0) {
      next.topicName = 'Ingresa el nombre del tema solicitado.'
    }
    setErrors(next)
    return Object.keys(next).length === 0
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    if (!validate()) return
    setLoading(true)
    try {
      await onSubmit({
        type,
        content: content.trim(),
        ...(type === 'topic_request' ? { topicName: topicName.trim() } : {}),
      })
      setContent('')
      setTopicName('')
      setType('comment')
      setErrors({})
    } finally {
      setLoading(false)
    }
  }

  return (
    <form
      onSubmit={handleSubmit}
      noValidate
      className="rounded-2xl border border-sg-gold/15 bg-navy-mid p-5 shadow-sm"
    >
      {/* Type selector */}
      <fieldset className="mb-4">
        <legend className="mb-2 font-ui text-xs font-semibold uppercase tracking-wide text-parchment/55">
          Tipo de mensaje
        </legend>
        <div className="flex flex-wrap gap-2">
          {MESSAGE_TYPES.map((t) => (
            <button
              key={t}
              type="button"
              onClick={() => {
                setType(t)
                setErrors((prev) => ({ ...prev, topicName: undefined }))
              }}
              className={[
                'rounded-full border px-3.5 py-1.5 font-ui text-sm font-medium transition',
                t === type
                  ? 'border-sg-gold bg-sg-gold text-navy-deep shadow-sm'
                  : 'border-sg-gold/20 bg-navy-deep/40 text-parchment/75 hover:border-sg-gold/50 hover:bg-sg-gold/5',
              ].join(' ')}
            >
              {MESSAGE_TYPE_LABELS[t]}
            </button>
          ))}
        </div>
      </fieldset>

      {/* Topic name field — only for topic_request */}
      {type === 'topic_request' && (
        <div className="mb-4">
          <label
            htmlFor="topicName"
            className="mb-1.5 block font-ui text-sm font-medium text-parchment/80"
          >
            Nombre del tema
          </label>
          <input
            id="topicName"
            type="text"
            value={topicName}
            onChange={(e) => {
              setTopicName(e.target.value)
              if (errors.topicName) setErrors((prev) => ({ ...prev, topicName: undefined }))
            }}
            placeholder="Ej. El libro de Job"
            className={[
              'w-full rounded-lg border bg-navy-deep px-3 py-2 font-ui text-sm text-parchment/80 placeholder:text-parchment/30',
              'focus:outline-none focus:ring-2 focus:ring-sg-gold/40',
              errors.topicName ? 'border-red-500' : 'border-sg-gold/20',
            ].join(' ')}
          />
          {errors.topicName && (
            <p className="mt-1 font-ui text-xs text-red-500">{errors.topicName}</p>
          )}
        </div>
      )}

      {/* Content textarea */}
      <div className="mb-5">
        <label
          htmlFor="messageContent"
          className="mb-1.5 block font-ui text-sm font-medium text-parchment/80"
        >
          Mensaje
        </label>
        <textarea
          id="messageContent"
          rows={4}
          value={content}
          onChange={(e) => {
            setContent(e.target.value)
            if (errors.content && e.target.value.trim().length >= 20) {
              setErrors((prev) => ({ ...prev, content: undefined }))
            }
          }}
          placeholder="Escribe tu mensaje aquí… (mínimo 20 caracteres)"
          className={[
            'w-full resize-none rounded-lg border bg-navy-deep px-3 py-2 font-reading text-sm text-parchment/80 placeholder:text-parchment/30',
            'focus:outline-none focus:ring-2 focus:ring-sg-gold/40',
            errors.content ? 'border-red-500' : 'border-sg-gold/20',
          ].join(' ')}
        />
        <div className="mt-1 flex items-start justify-between gap-2">
          {errors.content ? (
            <p className="font-ui text-xs text-red-500">{errors.content}</p>
          ) : (
            <span />
          )}
          <span
            className={[
              'ml-auto font-ui text-xs tabular-nums',
              content.trim().length < 20 ? 'text-parchment/55' : 'text-sg-gold-light',
            ].join(' ')}
          >
            {content.trim().length} / 20 mín.
          </span>
        </div>
      </div>

      {/* Submit */}
      <button
        type="submit"
        disabled={loading}
        className="w-full rounded-lg border border-sg-gold bg-sg-gold px-4 py-2.5 font-ui text-sm font-semibold text-navy-deep shadow-sm transition hover:brightness-95 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sg-gold disabled:cursor-not-allowed disabled:opacity-50"
      >
        {loading ? (
          <span className="inline-flex items-center justify-center gap-2">
            <svg
              className="h-4 w-4 animate-spin"
              viewBox="0 0 24 24"
              fill="none"
              aria-hidden="true"
            >
              <circle
                className="opacity-25"
                cx="12"
                cy="12"
                r="10"
                stroke="currentColor"
                strokeWidth="4"
              />
              <path
                className="opacity-75"
                fill="currentColor"
                d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"
              />
            </svg>
            Enviando…
          </span>
        ) : (
          'Enviar mensaje'
        )}
      </button>
    </form>
  )
}
