/**
 * Parsea HTML estilo LUL (view-estudio, topic-card, quiz-block, etc.) y emite
 * un módulo TypeScript `LessonSection[]`.
 *
 * @example npx tsx scripts/port-lesson-structured.ts ruta/al/archivo.html src/data/lessons/foo-sections.ts studySectionsFoo
 */
import { existsSync, mkdirSync, readFileSync, writeFileSync } from 'node:fs'
import { basename, dirname, join } from 'node:path'
import { fileURLToPath } from 'node:url'
import { JSDOM } from 'jsdom'
import type { LessonSection } from '../src/types/doctrine.ts'

const rootDir = join(dirname(fileURLToPath(import.meta.url)), '..')

function slug(raw: string): string {
  const s = raw
    .toLowerCase()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-|-$/g, '')
  return s.length > 0 ? s : 'seccion'
}

function cleanText(el: Element | null | undefined): string {
  return el?.textContent?.replace(/\s+/g, ' ').trim() ?? ''
}

function parseQuiz(el: Element, index: number): LessonBlock {
  const statement = cleanText(el.querySelector('.quiz-question, .pregunta, h4, p'))
  const options = [...el.querySelectorAll('.quiz-option, .option, button[data-answer], li.option')]

  const labels = options.map((o) => cleanText(o)).filter(Boolean)
  const sortItems = [...el.querySelectorAll('.sort-item, [data-sort-item]')]
    .map((s) => cleanText(s))
    .filter(Boolean)

  let question: QuizQuestion

  if (sortItems.length >= 2) {
    question = {
      kind: 'sort_items',
      items: sortItems,
      correctOrder: sortItems.map((_, i) => i),
      explanation: cleanText(el.querySelector('.quiz-explain, .explanation')) || undefined,
    }
  } else if (
    labels.length === 2 &&
    (labels.some((l) => /verdad|falso|true|false/i.test(l)) || labels.every((l) => l.length < 12))
  ) {
    const trueIdx = labels.findIndex((l) => /verdadero|true|sí|si/i.test(l))
    const falseIdx = labels.findIndex((l) => /falso|false|no/i.test(l))
    const correctIsTrue =
      el.getAttribute('data-correct') === 'true' ||
      el.querySelector('[data-correct="true"]')?.classList.contains('verdadero') === true ||
      trueIdx === 0
    const hasTf = trueIdx >= 0 || falseIdx >= 0
    question = {
      kind: 'true_false',
      statement: statement || labels.join(' / ') || 'Indica si la afirmación es correcta.',
      correctAnswer: hasTf ? correctIsTrue : el.getAttribute('data-answer') !== 'false',
      explanation: cleanText(el.querySelector('.quiz-explain')) || undefined,
    }
  } else if (labels.length >= 2) {
    const correctAttr = el.getAttribute('data-correct-index')
    let correctIndex = correctAttr != null ? Number.parseInt(correctAttr, 10) : 0
    if (Number.isNaN(correctIndex)) {
      correctIndex = 0
    }
    const marked = el.querySelector('[data-correct="true"], .correct')
    if (marked) {
      const idx = labels.findIndex((_, i) => options[i] === marked || options[i]?.contains(marked))
      if (idx >= 0) {
        correctIndex = idx
      }
    }
    question = {
      kind: 'fill_blank',
      prompt: statement || 'Elige la mejor opción.',
      options: labels,
      correctIndex,
      explanation: cleanText(el.querySelector('.quiz-explain')) || undefined,
    }
  } else {
    question = {
      kind: 'true_false',
      statement: statement || 'Este sermón se dio en Nauvoo.',
      correctAnswer: true,
    }
  }

  const id = el.getAttribute('data-quiz-id') ?? el.id ?? `quiz-${index}`

  return { type: 'quiz', id: slug(id), question }
}

function blocksFromContainer(container: Element | null, topicSlug: string): LessonBlock[] {
  if (!container) {
    return []
  }
  const blocks: LessonBlock[] = []
  let pIndex = 0

  const pushParagraph = (text: string) => {
    const t = text.replace(/\s+/g, ' ').trim()
    if (t.length > 0) {
      blocks.push({
        type: 'paragraph',
        text: t,
        blockId: `${topicSlug}-p-${pIndex++}`,
      })
    }
  }

  const children = [...container.children]
  for (const child of children) {
    if (child.matches('.quiz-block, [data-quiz]')) {
      blocks.push(parseQuiz(child, blocks.length))
      continue
    }

    if (child.matches('.leader-quote, blockquote.leader')) {
      const quote = cleanText(child.querySelector('.quote-text, blockquote, p')) || cleanText(child)
      const name = cleanText(child.querySelector('.author, cite, footer .name'))
      const role = cleanText(child.querySelector('.role, .office')) || undefined
      blocks.push({ type: 'leader_quote', quote, name: name || 'Autor desconocido', role })
      continue
    }

    if (child.matches('.doctrine-box, aside.doctrine')) {
      const title = cleanText(child.querySelector('h3, h4, .box-title')) || 'Doctrina'
      const body = cleanText(child.querySelector('.box-body, p')) || cleanText(child)
      const icon = cleanText(child.querySelector('.icon')) || undefined
      blocks.push({ type: 'doctrine_box', title, body, icon: icon || undefined })
      continue
    }

    if (child.matches('.key-points, .puntos-clave')) {
      const title = cleanText(child.querySelector('h4, h3')) || undefined
      const points = [...child.querySelectorAll('li')].map((li) => cleanText(li)).filter(Boolean)
      if (points.length) {
        blocks.push({ type: 'key_points', title, points })
      }
      continue
    }

    if (child.matches('.steps, .pasos')) {
      const title = cleanText(child.querySelector('h4, h3')) || undefined
      const steps = [...child.querySelectorAll('li')].map((li) => cleanText(li)).filter(Boolean)
      if (steps.length) {
        blocks.push({ type: 'steps', title, steps })
      }
      continue
    }

    if (child.matches('.highlight-verse, .scripture-highlight')) {
      const reference = cleanText(child.querySelector('.ref, .reference')) || 'Escrituras'
      const text = cleanText(child.querySelector('.verse-text, p')) || cleanText(child)
      blocks.push({ type: 'highlight_verse', reference, text })
      continue
    }

    if (child.matches('.central-quote, .cita-central')) {
      const text = cleanText(child.querySelector('.quote, p')) || cleanText(child)
      const attribution = cleanText(child.querySelector('.attr, footer')) || undefined
      blocks.push({ type: 'central_quote', text, attribution })
      continue
    }

    if (child.matches('.reflection, .reflexion')) {
      const prompt = cleanText(child.querySelector('p, .prompt')) || cleanText(child)
      blocks.push({ type: 'reflection', prompt })
      continue
    }

    if (child.matches('.media-slot, figure.media')) {
      const img = child.querySelector('img')
      const src = img?.getAttribute('src') ?? undefined
      blocks.push({
        type: 'media_slot',
        kind: 'image',
        src: src ?? undefined,
        alt: img?.getAttribute('alt') ?? '',
        caption: cleanText(child.querySelector('figcaption')) || undefined,
      })
      continue
    }

    if (child.matches('.note-prompts, .notas-guiadas')) {
      const prompts = [...child.querySelectorAll('.prompt-item, li[data-prompt], li')]
        .map((li, i) => ({
          id: li.getAttribute('data-id') ?? `np-${topicSlug}-${i}`,
          question: cleanText(li.querySelector('.q, p')) || cleanText(li),
        }))
        .filter((p) => p.question.length > 0)
      if (prompts.length) {
        blocks.push({ type: 'note_prompts', prompts })
      }
      continue
    }

    if (child.matches('p')) {
      pushParagraph(cleanText(child))
      continue
    }

    if (child.matches('ul, ol')) {
      for (const li of child.querySelectorAll(':scope > li')) {
        pushParagraph(cleanText(li))
      }
      continue
    }

    const nested = child.querySelector('.detail-inner')
    if (nested) {
      blocks.push(...blocksFromContainer(nested, topicSlug))
    } else if (cleanText(child).length > 0 && !(child.className?.toString() ?? '').includes('skip-port')) {
      pushParagraph(cleanText(child))
    }
  }

  return blocks
}

function parseIntro(el: Element | null): LessonIntro | undefined {
  if (!el) {
    return undefined
  }
  const roman = cleanText(el.querySelector('.roman, .numero-romano')) || undefined
  const title = cleanText(el.querySelector('h2, h3, .intro-title')) || cleanText(el)
  const paragraphs = [...el.querySelectorAll('p')]
    .map((p) => cleanText(p))
    .filter(Boolean)
  if (!title && paragraphs.length === 0) {
    return undefined
  }
  return {
    romanNumeral: roman,
    title: title || 'Introducción',
    paragraphs: paragraphs.length ? paragraphs : undefined,
  }
}

function parseTopicCard(card: Element, topicIndex: number, sectionSlug: string): LessonTopic | null {
  const idAttr = card.getAttribute('data-topic-id') ?? card.id
  const titleEl = card.querySelector('.topic-title, summary, h3, h4')
  const title = cleanText(titleEl)
  const subtitle = cleanText(card.querySelector('.topic-subtitle, .subtitle')) || undefined
  const slugBase = slug(idAttr || title || `${sectionSlug}-topic-${topicIndex}`)
  const inner = card.querySelector('.detail-inner, .topic-body, .card-body') ?? card
  const blocks = blocksFromContainer(inner, slugBase)

  if (!title && blocks.length === 0) {
    return null
  }

  return {
    id: slugBase,
    title: title || `Tema ${topicIndex + 1}`,
    subtitle,
    blocks,
  }
}

function parseSectionsFromDocument(doc: Document): LessonSection[] {
  const root = doc.getElementById('view-estudio') ?? doc.querySelector('main') ?? doc.body

  if (!root) {
    return []
  }

  let sectionRoots = [...root.querySelectorAll('[data-lesson-section], .lesson-section, section.section-block')]

  if (sectionRoots.length === 0) {
    sectionRoots = [...root.querySelectorAll(':scope > section')]
  }

  const sections: LessonSection[] = []

  sectionRoots.forEach((secEl, secIdx) => {
    const sid = secEl.getAttribute('data-section-id') ?? secEl.id
    const secSlug = slug(
      sid || cleanText(secEl.querySelector('h2.section-title, h2, .section-title')) || `section-${secIdx}`,
    )

    const introEl = secEl.querySelector('.section-intro, .intro-bloque')
    const intro = parseIntro(introEl)

    const topicCards = [...secEl.querySelectorAll('.topic-card, .topic, details.topic')]
    const topics: LessonTopic[] = []
    topicCards.forEach((card, i) => {
      const t = parseTopicCard(card, i, secSlug)
      if (t) {
        topics.push(t)
      }
    })

    if (topics.length === 0 && intro) {
      topics.push({
        id: `${secSlug}-contenido`,
        title: intro.title,
        blocks: intro.paragraphs?.length
          ? intro.paragraphs.map((text, j) => ({
              type: 'paragraph' as const,
              text,
              blockId: `${secSlug}-p-${j}`,
            }))
          : [],
      })
    }

    if (topics.length === 0) {
      return
    }

    const title =
      cleanText(secEl.querySelector('h2.section-title, h2, .section-title')) ||
      intro?.title ||
      `Sección ${secIdx + 1}`

    sections.push({
      id: secSlug,
      title,
      intro: introEl ? intro : undefined,
      topics,
    })
  })

  if (sections.length === 0) {
    const topics = [...root.querySelectorAll('.topic-card, .topic')]
    if (topics.length > 0) {
      const parsed = topics
        .map((card, i) => parseTopicCard(card, i, 'general'))
        .filter((t): t is LessonTopic => t != null)
      if (parsed.length > 0) {
        sections.push({
          id: 'general',
          title: cleanText(root.querySelector('h1, h2')) || 'Estudio',
          topics: parsed,
        })
      }
    }
  }

  return sections
}

function emitTs(varName: string, sections: LessonSection[], outPath: string): void {
  const json = JSON.stringify(sections, null, 2)
  const content = `/**\n * Auto-generado por scripts/port-lesson-structured.ts\n * Revisa tipos y ajusta bloques antes de publicar.\n */\nimport type { LessonSection } from '@/types/doctrine'\n\nexport const ${varName}: LessonSection[] = ${json} as unknown as LessonSection[]\n`
  mkdirSync(dirname(outPath), { recursive: true })
  writeFileSync(outPath, content, 'utf8')
}

const inputArg = process.argv[2]
const outArg = process.argv[3]
const varName = process.argv[4] ?? 'studySectionsExported'

if (!inputArg) {
  console.error('Uso: npx tsx scripts/port-lesson-structured.ts <entrada.html> [salida.ts] [nombreExport]')
  process.exit(1)
}

const inputPath = inputArg.startsWith('/') || /^[a-z]:\\/i.test(inputArg) ? inputArg : join(rootDir, inputArg)

if (!existsSync(inputPath)) {
  console.warn(`No se encontró el archivo: ${inputPath}`)
  process.exit(1)
}

const html = readFileSync(inputPath, 'utf8')
const dom = new JSDOM(html)
const sections = parseSectionsFromDocument(dom.window.document)

const defaultOut = join(rootDir, 'src', 'data', 'lessons', `${slug(basename(inputPath, '.html'))}-sections.ts`)
const outPath = outArg ? (outArg.startsWith('/') || /^[a-z]:\\/i.test(outArg) ? outArg : join(rootDir, outArg)) : defaultOut

emitTs(varName, sections, outPath)
console.log(`Secciones: ${sections.length}. Escrito: ${outPath}`)
