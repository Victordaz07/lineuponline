type BlockType = 'main-title' | 'author' | 'context' | 'section-title' | 'question-title' | 'quote' | 'dialog' | 'paragraph' | 'cta'

type Block = { type: BlockType; text: string }

function parseBlocks(raw: string): Block[] {
  const lines = raw.split('\n').map((l) => l.trim()).filter(Boolean)
  const blocks: Block[] = []

  for (let i = 0; i < lines.length; i++) {
    const line = lines[i]

    if (i === 0) {
      blocks.push({ type: 'main-title', text: line })
      continue
    }

    if (line.startsWith('por ') && line.length < 40) {
      blocks.push({ type: 'author', text: line })
      continue
    }

    if (line.startsWith('Presentado por')) {
      blocks.push({ type: 'context', text: line })
      continue
    }

    // Scripture / blockquote
    if (line.startsWith('«') || line.startsWith('"')) {
      blocks.push({ type: 'quote', text: line })
      continue
    }

    // Dialog lines: "Skousen: «…»" or "Elder Widtsoe: «…»"
    if (/^(Skousen|Elder Widtsoe):\s*«/.test(line)) {
      blocks.push({ type: 'dialog', text: line })
      continue
    }

    // CTA at the end
    if (line.startsWith('¿Listo para profundizar')) {
      blocks.push({ type: 'cta', text: line })
      continue
    }

    // Section title: short, no trailing period/comma, starts uppercase or ¿
    const isTitle =
      line.length < 72 &&
      !line.endsWith('.') &&
      !line.endsWith(',') &&
      !line.endsWith(':') &&
      !line.startsWith('«') &&
      /^[A-ZÁÉÍÓÚÑÜ¿]/.test(line)

    if (isTitle) {
      const type = line.startsWith('¿') ? 'question-title' : 'section-title'
      blocks.push({ type, text: line })
      continue
    }

    blocks.push({ type: 'paragraph', text: line })
  }

  return blocks
}

// Bold the speaker name in dialog: "Skousen: «…»" → <strong>Skousen</strong>: «…»
function DialogLine({ text }: { text: string }) {
  const colonIdx = text.indexOf(':')
  const speaker = text.slice(0, colonIdx)
  const rest = text.slice(colonIdx + 1).trim()
  return (
    <p className="pl-4 font-reading text-base leading-relaxed text-text-main">
      <strong className="font-ui text-xs font-semibold uppercase tracking-wide text-blue-accent">
        {speaker}
      </strong>
      <span className="text-text-muted"> · </span>
      <em>{rest}</em>
    </p>
  )
}

// Separate citation from quote: «…»— Referencia
function QuoteBlock({ text }: { text: string }) {
  const refMatch = text.match(/^(«[\s\S]+»)\s*—\s*(.+)$/)
  const quoteText = refMatch ? refMatch[1] : text
  const reference = refMatch ? refMatch[2] : null

  return (
    <blockquote className="relative my-1 overflow-hidden rounded-r-xl border-l-4 border-gold-main bg-gold-dim px-5 py-4">
      <p className="font-reading text-base italic leading-relaxed text-text-main">{quoteText}</p>
      {reference && (
        <cite className="mt-2 block font-ui text-xs font-semibold not-italic text-gold-main">
          — {reference}
        </cite>
      )}
    </blockquote>
  )
}

export function OriginalTextRenderer({ text }: { text: string }) {
  const blocks = parseBlocks(text)

  return (
    <div className="space-y-5">
      {blocks.map((block, i) => {
        switch (block.type) {
          case 'main-title':
            return (
              <div key={i} className="border-b border-gold-main/30 pb-5 text-center">
                <h1 className="font-title text-2xl text-blue-accent sm:text-3xl">{block.text}</h1>
              </div>
            )

          case 'author':
            return (
              <p key={i} className="-mt-3 text-center font-ui text-sm text-text-muted">
                {block.text}
              </p>
            )

          case 'context':
            return (
              <p key={i} className="rounded-xl bg-bg-elevated px-4 py-3 font-ui text-xs italic leading-relaxed text-text-muted">
                {block.text}
              </p>
            )

          case 'section-title':
          case 'question-title':
            return (
              <div key={i} className="mt-6 flex items-center gap-3 first:mt-0">
                <span className="h-px flex-1 bg-gold-main/25" />
                <h2 className="font-title text-base text-blue-accent sm:text-lg">{block.text}</h2>
                <span className="h-px flex-1 bg-gold-main/25" />
              </div>
            )

          case 'quote':
            return <QuoteBlock key={i} text={block.text} />

          case 'dialog':
            return <DialogLine key={i} text={block.text} />

          case 'cta':
            return (
              <div key={i} className="mt-4 rounded-xl border border-blue-accent/20 bg-bg-elevated px-5 py-4 text-center">
                <p className="font-ui text-sm font-semibold text-blue-accent">{block.text}</p>
              </div>
            )

          default:
            return (
              <p key={i} className="font-reading text-base leading-relaxed text-text-main">
                {block.text}
              </p>
            )
        }
      })}
    </div>
  )
}
