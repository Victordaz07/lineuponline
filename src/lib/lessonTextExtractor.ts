import type { Lesson, LessonBlock } from '@/types/doctrine'

function blockToText(block: LessonBlock): string {
  const lines: string[] = []

  switch (block.type) {
    case 'paragraph':
      lines.push(block.text)
      break

    case 'leader_quote':
      lines.push(`"${block.quote}"`)
      lines.push(`— ${block.name}${block.role ? `, ${block.role}` : ''}`)
      break

    case 'doctrine_box':
      lines.push(`[${block.title}]`)
      lines.push(block.body)
      break

    case 'key_points':
      if (block.title) lines.push(block.title)
      for (const p of block.points) lines.push(`• ${p}`)
      break

    case 'steps':
      if (block.title) lines.push(block.title)
      for (const s of block.steps) {
        if (typeof s === 'string') {
          lines.push(`• ${s}`)
        } else {
          const body = s.body ?? s.description ?? ''
          lines.push(`${s.step}. ${s.title}${body ? ': ' + body : ''}`)
        }
      }
      break

    case 'highlight_verse':
      lines.push(`[${block.reference}]`)
      lines.push(block.text)
      break

    case 'central_quote':
      lines.push(`"${block.text}"`)
      if (block.attribution) lines.push(`— ${block.attribution}`)
      break

    case 'reflection':
      lines.push(`Reflexión: ${block.prompt}`)
      break

    case 'media_slot':
      if (block.caption) lines.push(`[Imagen: ${block.caption}]`)
      else if (block.alt) lines.push(`[Imagen: ${block.alt}]`)
      break

    case 'quiz': {
      const q = block as Record<string, unknown>
      if (typeof q.question === 'string') {
        lines.push(`Pregunta: ${q.question}`)
        if (typeof q.explanation === 'string') lines.push(`Explicación: ${q.explanation}`)
      } else if (q.question && typeof q.question === 'object') {
        const qo = q.question as Record<string, unknown>
        if (qo.kind === 'true_false') lines.push(`Pregunta V/F: ${qo.statement}`)
        else if (qo.kind === 'fill_blank') {
          lines.push(`Pregunta: ${qo.prompt}`)
          if (Array.isArray(qo.options)) lines.push(`Opciones: ${(qo.options as string[]).join(' / ')}`)
        } else if (qo.kind === 'sort_items') {
          if (Array.isArray(qo.items)) lines.push(`Ordenar: ${(qo.items as string[]).join(' → ')}`)
        }
        if (typeof qo.explanation === 'string') lines.push(`Explicación: ${qo.explanation}`)
      }
      break
    }

    case 'note_prompts':
      for (const p of block.prompts) lines.push(`• ${p.question}`)
      break

    case 'dialogue':
      if (block.title) lines.push(block.title)
      for (const l of block.lines) lines.push(`${l.speaker}: ${l.text}`)
      break

    case 'compare_grid': {
      if (block.title) lines.push(block.title)
      if (block.left && block.right) {
        const lt = block.left.title ?? block.left.label ?? 'A'
        const rt = block.right.title ?? block.right.label ?? 'B'
        lines.push(`${lt} vs ${rt}`)
        const lItems = block.left.items ?? block.left.points ?? []
        const rItems = block.right.items ?? block.right.points ?? []
        const max = Math.max(lItems.length, rItems.length)
        for (let i = 0; i < max; i++) {
          lines.push(`• ${lItems[i] ?? ''} | ${rItems[i] ?? ''}`)
        }
      }
      if (block.rows) {
        for (const row of block.rows) {
          if (Array.isArray(row)) lines.push(`${row[0]}: ${row[1]} | ${row[2]}`)
          else lines.push(`${row.label}: ${row.a} | ${row.b}`)
        }
      }
      break
    }

    case 'crisis_cards':
      for (const c of block.cards) lines.push(`${c.num}. ${c.title}: ${c.desc}`)
      break

    case 'deep_dive':
      if (block.badge) lines.push(`[${block.badge}]`)
      lines.push(block.title)
      for (const p of block.paragraphs) lines.push(p)
      break

    case 'timeline':
      for (const item of block.items) {
        lines.push(`${item.label}: ${item.text}${item.ref ? ` (${item.ref})` : ''}`)
      }
      break
  }

  return lines.filter(Boolean).join('\n')
}

/** Extrae todo el texto legible de una lección en un string limpio apto para LLMs. */
export function extractLessonText(lesson: Lesson): string {
  const parts: string[] = []

  // Encabezado
  parts.push(lesson.title.toUpperCase())
  if (lesson.author) parts.push(`por ${lesson.author}`)
  if (lesson.description) parts.push(lesson.description)
  parts.push('')

  // Quick facts
  if (lesson.quickFacts?.length) {
    parts.push('PUNTOS CLAVE:')
    for (const f of lesson.quickFacts) parts.push(`• ${f}`)
    parts.push('')
  }

  // Escrituras relacionadas
  if (lesson.scriptures?.length) {
    parts.push('ESCRITURAS RELACIONADAS:')
    for (const s of lesson.scriptures) parts.push(`• ${s.reference}`)
    parts.push('')
  }

  // Estudio en texto plano (si no hay secciones ricas)
  if (lesson.studyBodyPlain?.trim() && !lesson.studySections?.length) {
    parts.push('CONTENIDO DE ESTUDIO:')
    parts.push(lesson.studyBodyPlain.trim())
    parts.push('')
  }

  // Secciones ricas (temas expandibles)
  if (lesson.studySections?.length) {
    for (const section of lesson.studySections) {
      if (section.intro) {
        const prefix = section.intro.romanNumeral ? `${section.intro.romanNumeral}. ` : ''
        parts.push(`=== ${prefix}${section.intro.title} ===`)
        if (section.intro.paragraphs?.length) {
          for (const p of section.intro.paragraphs) parts.push(p)
        }
        parts.push('')
      }

      for (const topic of section.topics) {
        parts.push(`--- ${topic.title} ---`)
        if (topic.subtitle) parts.push(topic.subtitle)

        for (const block of topic.blocks) {
          const text = blockToText(block)
          if (text) parts.push(text)
        }
        parts.push('')
      }
    }
  }

  // Texto original
  if (lesson.originalBodyPlain?.trim()) {
    parts.push('TEXTO ORIGINAL:')
    parts.push(lesson.originalBodyPlain.trim())
  }

  return parts.join('\n').trim()
}
