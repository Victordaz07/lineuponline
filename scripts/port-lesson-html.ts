/**
 * Extrae texto plano de #view-estudio y #view-texto en los HTML LUL legacy
 * y genera `src/data/lessons/*.ts` con objetos `Lesson` tipados.
 *
 * @example npx tsx scripts/port-lesson-html.ts
 */
import { existsSync, mkdirSync, readFileSync, writeFileSync } from 'node:fs'
import { dirname, join } from 'node:path'
import { fileURLToPath } from 'node:url'
import { JSDOM } from 'jsdom'

const rootDir = join(dirname(fileURLToPath(import.meta.url)), '..')

function extractPanel(html: string, panelId: string): string {
  const dom = new JSDOM(html)
  const rootEl = dom.window.document.getElementById(panelId)
  if (!rootEl) {
    return ''
  }
  const selector =
    'p, .detail-p, .scripture-text, .quote-text, .orig-body p, blockquote, h1, h2, h3, h4, li'
  const nodes = rootEl.querySelectorAll(selector)
  const parts: string[] = []
  for (const n of nodes) {
    const txt = n.textContent?.replace(/\s+/g, ' ').trim() ?? ''
    if (txt.length > 0) {
      parts.push(txt)
    }
  }
  return parts.join('\n\n')
}

type LessonMeta = {
  id: string
  moduleId: string
  title: string
  subtitle?: string
  author?: string
  description: string
  level: 'BÁSICO' | 'INTERMEDIO' | 'AVANZADO'
  icon?: string
  duration?: number
  order: number
  status: 'PUBLISHED' | 'IN_CONSTRUCTION'
  heroImage?: { url: string; alt: string }
  scriptures?: { reference: string; book?: string; verses?: string }[]
  quickFacts?: string[]
}

type PortJob = {
  htmlRelative: string
  exportName: string
  outRelative: string
  meta: LessonMeta
}

const jobs: PortJob[] = [
  {
    htmlRelative: 'public/lessons/la-expiacion.html',
    exportName: 'lessonLaExpiacionDelSalvador',
    outRelative: 'src/data/lessons/la-expiacion-del-salvador.ts',
    meta: {
      id: 'la-expiacion-del-salvador',
      moduleId: 'doctrina-fundamental',
      title: 'La Expiación del Salvador',
      subtitle: 'Guía de estudio profundo',
      description:
        'Estudio lineal del plan de salvación, la Caída, la justicia y la misericordia, centrado en la Expiación de Jesucristo.',
      level: 'BÁSICO',
      icon: '✝️',
      duration: 120,
      order: 6,
      status: 'PUBLISHED',
      author: 'W. Cleon Skousen',
      heroImage: {
        url: '/images/hero-celestial-a.png',
        alt: 'Iluminación suave sobre un paisaje sereno, metáfora de esperanza y redención',
      },
      scriptures: [],
      quickFacts: [],
    },
  },
  {
    htmlRelative: 'public/lessons/king-follett.html',
    exportName: 'lessonKingFollett',
    outRelative: 'src/data/lessons/king-follett.ts',
    meta: {
      id: 'king-follett',
      moduleId: 'discursos-sermones-clasicos',
      title: 'El Sermón de King Follett',
      subtitle: 'Nauvoo, 7 de abril de 1844',
      description:
        'Último gran discurso doctrinal del Profeta José Smith: naturaleza de Dios, inteligencia y destino eterno.',
      level: 'AVANZADO',
      icon: '📜',
      duration: 150,
      order: 1,
      status: 'PUBLISHED',
      author: 'José Smith',
      scriptures: [],
      quickFacts: [],
    },
  },
]

for (const job of jobs) {
  const htmlPath = join(rootDir, job.htmlRelative)
  if (!existsSync(htmlPath)) {
    console.warn(`Omitido (no existe ${job.htmlRelative}; restaura el HTML desde git para volver a portar).`)
    continue
  }
  const html = readFileSync(htmlPath, 'utf8')
  const studyBodyPlain = extractPanel(html, 'view-estudio')
  const originalBodyPlain = extractPanel(html, 'view-texto')
  const lesson = {
    ...job.meta,
    studyBodyPlain,
    originalBodyPlain,
    previousLessonId: null,
    nextLessonId: null,
  }
  const outPath = join(rootDir, job.outRelative)
  mkdirSync(dirname(outPath), { recursive: true })
  const fileBody = `import type { Lesson } from '@/types/doctrine'

export const ${job.exportName}: Lesson = ${JSON.stringify(lesson, null, 2)}
`
  writeFileSync(outPath, fileBody, 'utf8')
  console.log('Wrote', job.outRelative, `(${studyBodyPlain.length + originalBodyPlain.length} chars text)`)
}
