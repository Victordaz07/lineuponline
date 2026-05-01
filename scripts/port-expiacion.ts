/**
 * Parser dedicado para e3a07022-laexpiaciondelsalvador.html → la-expiacion-del-salvador.ts
 *
 * La estructura HTML es plana: los .section-intro y .topic son hermanos dentro de #view-estudio.
 * Los nuevos tipos de bloque (dialogue, compare_grid, crisis_cards, deep_dive, timeline) se
 * parsean aquí antes de escribir el archivo TypeScript de destino.
 *
 * Uso: npx tsx scripts/port-expiacion.ts [ruta-html]
 */

import { readFileSync, writeFileSync, mkdirSync } from 'node:fs'
import { join, dirname } from 'node:path'
import { fileURLToPath } from 'node:url'
import { JSDOM } from 'jsdom'

const rootDir = join(dirname(fileURLToPath(import.meta.url)), '..')
const htmlPath =
  process.argv[2] ??
  '/root/.claude/uploads/bf6e7501-4549-4925-a5be-f54f3ef80e70/e3a07022-laexpiaciondelsalvador.html'
const outPath = join(rootDir, 'src/data/lessons/la-expiacion-del-salvador.ts')

const html = readFileSync(htmlPath, 'utf8')
const { document } = new JSDOM(html).window

// ─── helpers ────────────────────────────────────────────────────────────────

function text(el: Element | null | undefined): string {
  return el?.textContent?.replace(/\s+/g, ' ').trim() ?? ''
}

function slug(raw: string): string {
  return raw
    .toLowerCase()
    .normalize('NFD')
    .replace(/[̀-ͯ]/g, '')
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-|-$/g, '')
    || 'item'
}

// ─── block parsers ───────────────────────────────────────────────────────────

type Block = Record<string, unknown>

function parseParagraph(el: Element, topicSlug: string, idx: number): Block {
  return { type: 'paragraph', text: text(el), blockId: `${topicSlug}-p-${idx}` }
}

function parseScripture(el: Element): Block {
  return {
    type: 'highlight_verse',
    text: text(el.querySelector('.scripture-text')),
    reference: text(el.querySelector('.scripture-ref')),
  }
}

function parseLeaderQuote(el: Element): Block {
  return {
    type: 'leader_quote',
    quote: text(el.querySelector('.quote-text')),
    name: text(el.querySelector('.quote-attr')) || 'Autor',
  }
}

function parseDoctrineBox(el: Element): Block {
  const paras = [...el.querySelectorAll('p')].map((p) => text(p)).filter(Boolean)
  return {
    type: 'doctrine_box',
    title: text(el.querySelector('.doctrine-box-title')) || 'Doctrina',
    body: paras.join(' '),
  }
}

function parseCompareGrid(el: Element): Block {
  const cards = [...el.querySelectorAll('.compare-card')]
  const left = cards[0]
  const right = cards[1]
  const parseCard = (c: Element) => ({
    title: text(c?.querySelector('.compare-card-title')),
    items: [...(c?.querySelectorAll('li') ?? [])].map((li) => text(li)).filter(Boolean),
  })
  return {
    type: 'compare_grid',
    left: parseCard(left),
    right: parseCard(right),
  }
}

function parseDialogue(el: Element): Block {
  const title = text(el.querySelector('.dialogue-header')) || undefined
  const lines = [...el.querySelectorAll('.dialogue-line')].map((line) => {
    const side = line.classList.contains('padre') ? 'left' : 'right'
    const speaker = text(line.querySelector('.dialogue-speaker'))
    // Remove speaker text from line text
    const speakerEl = line.querySelector('.dialogue-speaker')
    if (speakerEl) speakerEl.remove()
    const lineText = text(line.querySelector('.dialogue-text') ?? line)
    return { speaker, side, text: lineText }
  })
  return { type: 'dialogue', title, lines }
}

function parseCrisisCards(el: Element): Block {
  const colorMap: Record<string, string> = { 'crisis-1': 'purple', 'crisis-2': 'blue', 'crisis-3': 'red' }
  const cards = [...el.querySelectorAll('.crisis-card')].map((card) => {
    const colorKey = [...card.classList].find((c) => colorMap[c]) ?? 'crisis-1'
    return {
      num: text(card.querySelector('.crisis-num')),
      title: text(card.querySelector('.crisis-title')),
      desc: text(card.querySelector('.crisis-desc')),
      color: colorMap[colorKey] ?? 'blue',
    }
  })
  return { type: 'crisis_cards', cards }
}

function parseDeepDive(el: Element): Block {
  const badge = text(el.querySelector('.deep-dive-badge')) || undefined
  const title = text(el.querySelector('.deep-dive-title'))
  const paragraphs = [...el.querySelectorAll('.deep-dive-inner p')]
    .map((p) => text(p))
    .filter(Boolean)
  return { type: 'deep_dive', badge, title, paragraphs }
}

function parseTimeline(el: Element): Block {
  const dotColorMap: Record<string, string> = { gold: 'gold', red: 'red', blue: 'blue', green: 'green' }
  const items = [...el.querySelectorAll('.tl-item')].map((item) => {
    const dot = item.querySelector('.tl-dot')
    const colorClass = [...(dot?.classList ?? [])].find((c) => dotColorMap[c]) ?? 'gold'
    return {
      label: text(item.querySelector('.tl-label')),
      text: text(item.querySelector('.tl-text')),
      ref: text(item.querySelector('.tl-ref')) || undefined,
      color: dotColorMap[colorClass] ?? 'gold',
    }
  })
  return { type: 'timeline', items }
}

function parseReflection(el: Element): Block {
  const paras = [...el.querySelectorAll('p')].map((p) => text(p)).filter(Boolean)
  return { type: 'reflection', prompt: paras.join(' ') }
}

function parseHighlightVerse(el: Element): Block {
  return {
    type: 'highlight_verse',
    text: text(el.querySelector('.highlight-verse-text')),
    reference: text(el.querySelector('.highlight-verse-ref')),
  }
}

function parseCentralQuote(el: Element): Block {
  return {
    type: 'central_quote',
    text: text(el.querySelector('.central-quote-text')),
    attribution: text(el.querySelector('.central-quote-attr')) || undefined,
  }
}

function parseQuiz(el: Element, topicSlug: string, idx: number): Block {
  const question = text(el.querySelector('.quiz-question'))
  const optEls = [...el.querySelectorAll('.quiz-option')]
  const options = optEls.map((o) => text(o))
  // Detect correct index from onclick="checkQuiz('...', this, true)"
  let correctIndex = 0
  optEls.forEach((o, i) => {
    const onclick = o.getAttribute('onclick') ?? ''
    if (onclick.includes(', true)')) correctIndex = i
  })
  const explanation = text(el.querySelector('.quiz-feedback.correct-fb')) || undefined
  return {
    type: 'quiz',
    id: slug(el.id || `${topicSlug}-quiz-${idx}`),
    question: { kind: 'fill_blank', prompt: question, options, correctIndex, explanation },
  }
}

function parseSteps(el: Element): Block {
  const steps = [...el.querySelectorAll('.step')].map((step) => {
    const t = text(step.querySelector('.step-title'))
    const d = text(step.querySelector('.step-desc'))
    return t && d ? `${t}: ${d}` : t || d
  }).filter(Boolean)
  return { type: 'steps', steps }
}

function parseKeyPoints(el: Element): Block {
  const points = [...el.querySelectorAll('.key-point')].map((kp) => text(kp.querySelector('.key-text'))).filter(Boolean)
  return { type: 'key_points', points }
}

function parseTrioGrid(el: Element): Block {
  const items = [...el.querySelectorAll('.trio-card')].map((card) => {
    const icon = text(card.querySelector('.trio-icon'))
    const title = text(card.querySelector('.trio-title'))
    const body = text(card.querySelector('.trio-text'))
    return `${icon} ${title}: ${body}`.trim()
  }).filter(Boolean)
  return { type: 'key_points', points: items }
}

function parseInlineNotes(el: Element, topicSlug: string): Block {
  const prompts = [...el.querySelectorAll('.inline-q')].map((q, i) => {
    const labelEl = q.querySelector('.inline-q-label')
    // Remove the Q-number span from label text
    const spanEl = labelEl?.querySelector('span')
    if (spanEl) spanEl.remove()
    const question = text(labelEl)
    return { id: `${topicSlug}-np-${i}`, question }
  }).filter((p) => p.question.length > 0)
  return { type: 'note_prompts', prompts }
}

// ─── main block dispatcher ───────────────────────────────────────────────────

function blocksFromDetail(container: Element, topicSlug: string): Block[] {
  const blocks: Block[] = []
  let pIdx = 0

  for (const child of [...container.children]) {
    const cls = child.className?.toString() ?? ''

    if (child.matches('.quiz-block')) {
      blocks.push(parseQuiz(child, topicSlug, pIdx++))
    } else if (child.matches('.inline-notes')) {
      blocks.push(parseInlineNotes(child, topicSlug))
    } else if (child.matches('.dialogue-block')) {
      blocks.push(parseDialogue(child))
    } else if (child.matches('.compare-grid')) {
      blocks.push(parseCompareGrid(child))
    } else if (child.matches('.crisis-cards')) {
      blocks.push(parseCrisisCards(child))
    } else if (child.matches('.deep-dive')) {
      blocks.push(parseDeepDive(child))
    } else if (child.matches('.timeline')) {
      blocks.push(parseTimeline(child))
    } else if (child.matches('.reflection-block')) {
      blocks.push(parseReflection(child))
    } else if (child.matches('.highlight-verse')) {
      blocks.push(parseHighlightVerse(child))
    } else if (child.matches('.central-quote')) {
      blocks.push(parseCentralQuote(child))
    } else if (child.matches('.scripture')) {
      blocks.push(parseScripture(child))
    } else if (child.matches('.leader-quote')) {
      blocks.push(parseLeaderQuote(child))
    } else if (child.matches('.doctrine-box')) {
      blocks.push(parseDoctrineBox(child))
    } else if (child.matches('.key-points')) {
      blocks.push(parseKeyPoints(child))
    } else if (child.matches('.steps')) {
      blocks.push(parseSteps(child))
    } else if (child.matches('.trio-grid')) {
      blocks.push(parseTrioGrid(child))
    } else if (child.matches('.detail-p')) {
      const t = text(child)
      if (t) blocks.push(parseParagraph(child, topicSlug, pIdx++))
    } else if (child.matches('p')) {
      const t = text(child)
      if (t) blocks.push({ type: 'paragraph', text: t, blockId: `${topicSlug}-p-${pIdx++}` })
    } else if (!cls.includes('quiz-feedback') && !cls.includes('quiz-reset') && !cls.includes('quiz-header') && !cls.includes('quiz-title') && !cls.includes('quiz-question') && !cls.includes('quiz-options')) {
      // Skip quiz internals; recurse for other containers
      const inner = child.querySelector('.detail-inner')
      if (inner) {
        blocks.push(...blocksFromDetail(inner, topicSlug))
      }
    }
  }

  return blocks
}

// ─── section/topic parser ────────────────────────────────────────────────────

interface ParsedTopic {
  id: string
  title: string
  subtitle?: string
  blocks: Block[]
}

interface ParsedSection {
  id: string
  title: string
  intro?: { title: string; paragraphs?: string[] }
  topics: ParsedTopic[]
}

function parseSections(): ParsedSection[] {
  const root = document.getElementById('view-estudio')
  if (!root) throw new Error('#view-estudio not found')

  const container = root.querySelector('.container') ?? root

  const sections: ParsedSection[] = []
  let currentSection: ParsedSection | null = null

  for (const child of [...container.children]) {
    if (child.matches('.section-intro')) {
      const sectionTitle = text(child.querySelector('.section-title'))
      const sectionDesc = text(child.querySelector('.section-desc'))
      const eyebrow = text(child.querySelector('.section-eyebrow'))
      currentSection = {
        id: child.id || slug(sectionTitle),
        title: sectionTitle,
        intro: {
          title: sectionTitle,
          paragraphs: sectionDesc ? [sectionDesc] : undefined,
        },
        topics: [],
      }
      if (eyebrow) {
        // Extract roman numeral from eyebrow like "Sección I — Los Cimientos"
        const romanMatch = eyebrow.match(/([IVXLCDM]+)\s*[—–-]/)
        if (romanMatch) {
          (currentSection.intro as Record<string, unknown>).romanNumeral = romanMatch[1]
        }
      }
      sections.push(currentSection)
    } else if (child.matches('.topic') && currentSection) {
      const topicName = text(child.querySelector('.topic-name'))
      const topicQuick = text(child.querySelector('.topic-quick'))
      const topicId = child.id || slug(topicName)
      const topicSlug = slug(topicId)

      const detailInner = child.querySelector('.detail-inner')
      const blocks = detailInner ? blocksFromDetail(detailInner, topicSlug) : []

      currentSection.topics.push({
        id: topicSlug,
        title: topicName || `Tema ${currentSection.topics.length + 1}`,
        subtitle: topicQuick || undefined,
        blocks,
      })
    }
  }

  return sections.filter((s) => s.topics.length > 0)
}

// ─── emit TypeScript ─────────────────────────────────────────────────────────

const sections = parseSections()

console.log(`Secciones: ${sections.length}`)
sections.forEach((s) => console.log(`  ${s.id}: ${s.topics.length} temas`))

const totalTopics = sections.reduce((n, s) => n + s.topics.length, 0)
const totalBlocks = sections.reduce((n, s) => n + s.topics.reduce((m, t) => m + t.blocks.length, 0), 0)
console.log(`Total temas: ${totalTopics}, bloques: ${totalBlocks}`)

// Read existing lesson file for metadata (previousLessonId, nextLessonId, etc.)
const existingSource = readFileSync(outPath, 'utf8')
const prevMatch = existingSource.match(/previousLessonId:\s*('([^']*)'|null)/)
const nextMatch = existingSource.match(/nextLessonId:\s*('([^']*)'|null)/)
const prevLessonId = prevMatch ? (prevMatch[2] ?? null) : null
const nextLessonId = nextMatch ? (nextMatch[2] ?? null) : null

const sectionsJson = JSON.stringify(sections, null, 2)

const output = `import type { Lesson } from '@/types/doctrine'

export const laExpiacionDelSalvador: Lesson = {
  id: 'la-expiacion-del-salvador',
  moduleId: 'doctrina-fundamental',
  title: 'La Expiación del Salvador',
  subtitle: 'Guía de estudio profundo',
  author: 'W. Cleon Skousen',
  description:
    'Estudio lineal del plan de salvación, la Caída, la justicia y la misericordia, centrado en la Expiación de Jesucristo. Basado en el discurso de W. Cleon Skousen y las enseñanzas del Apóstol John A. Widtsoe.',
  level: 'BÁSICO',
  icon: '✝️',
  duration: 120,
  order: 6,
  status: 'PUBLISHED',
  studyBodyPlain: '',
  originalBodyPlain: '',
  previousLessonId: ${prevLessonId === null ? 'null' : `'${prevLessonId}'`},
  nextLessonId: ${nextLessonId === null ? 'null' : `'${nextLessonId}'`},
  studySections: ${sectionsJson} as unknown as Lesson['studySections'],
}
`

mkdirSync(dirname(outPath), { recursive: true })
writeFileSync(outPath, output, 'utf8')
console.log(`\nEscrito: ${outPath}`)
