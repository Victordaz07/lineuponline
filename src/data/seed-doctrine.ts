/**
 * Datos semilla: catálogo unificado de módulos y lecciones (sin iframes).
 */
import { lessonKingFollett } from '@/data/lessons/king-follett'
import { laExpiacionDelSalvador as lessonLaExpiacionDelSalvador } from '@/data/lessons/la-expiacion-del-salvador'
import { santaCena as lessonSantaCena } from '@/data/lessons/santa-cena'
import { elBautismo as lessonElBautismo } from '@/data/lessons/el-bautismo'
import { elDonDelEspirituSanto as lessonDonEspirituSanto } from '@/data/lessons/el-don-del-espiritu-santo'
import { laFePrincipioDePoder as lessonFePrincipioPoder } from '@/data/lessons/la-fe-principio-de-poder'
import { elArrepentimientoReal as lessonArrepentimiento } from '@/data/lessons/el-arrepentimiento-real'
import { laResurreccionYLosReinos as lessonResurreccion } from '@/data/lessons/la-resurreccion-y-los-reinos'
import { laProclamacionFamilia as lessonProclamacionFamilia } from '@/data/lessons/la-proclamacion-familia'
import type { DifficultyLevel, DoctrinalModule, Lesson, LessonStatus } from '@/types/doctrine'

type LessonRow = {
  id: string
  moduleId: string
  title: string
  subtitle?: string
  description: string
  level: DifficultyLevel
  icon: string
  duration: number
  order: number
  status: LessonStatus
}

const MODULE_ROWS: Omit<DoctrinalModule, 'lessonIds'>[] = [
  {
    id: 'doctrina-fundamental',
    title: 'Doctrina Fundamental',
    description:
      'Los principios esenciales del Evangelio de Jesucristo: fe, arrepentimiento, bautismo, don del Espíritu Santo y la Expiación.',
    icon: '⚡',
    order: 1,
    level: 'BÁSICO',
    usePurpleAccent: false,
  },
  {
    id: 'vida-familiar-personal',
    title: 'Vida Familiar y Personal',
    description: 'Oración, estudio de las Escrituras y el evangelio en el hogar.',
    icon: '👨‍👩‍👧‍👦',
    order: 2,
    level: 'BÁSICO',
    usePurpleAccent: false,
  },
  {
    id: 'historia-restauracion',
    title: 'Historia y Restauración',
    description: 'La Primera Visión, la Gran Apostasía y la restauración del Evangelio.',
    icon: '🌳',
    order: 3,
    level: 'INTERMEDIO',
    usePurpleAccent: false,
  },
  {
    id: 'doctrina-avanzada-carne',
    title: 'Doctrina Avanzada — La Carne del Evangelio',
    description: 'Temas profundos: sacerdocio, templo, preexistencia y plan de salvación.',
    icon: '👑',
    order: 4,
    level: 'AVANZADO',
    usePurpleAccent: true,
  },
  {
    id: 'lideres-misioneros',
    title: 'Para Líderes y Misioneros',
    description: 'Servir, enseñar y llevar el mensaje con poder.',
    icon: '🎯',
    order: 5,
    level: 'INTERMEDIO',
    usePurpleAccent: false,
  },
  {
    id: 'discursos-sermones-clasicos',
    title: 'Discursos y Sermones Clásicos',
    description: 'Estudio profundo de discursos históricos y conferencias memorables.',
    icon: '📜',
    order: 6,
    level: 'AVANZADO',
    usePurpleAccent: true,
  },
]

const LESSON_ROWS: LessonRow[] = [
  {
    id: 'santa-cena',
    moduleId: 'doctrina-fundamental',
    title: 'La Santa Cena',
    subtitle: 'Convenio y poder renovados',
    description: 'El pan y el agua, la memoria del Salvador, y los convenios que renovamos cada semana.',
    level: 'BÁSICO',
    icon: '🍷',
    duration: 45,
    order: 1,
    status: 'PUBLISHED',
  },
  {
    id: 'bautismo',
    moduleId: 'doctrina-fundamental',
    title: 'El Bautismo',
    subtitle: 'Nacimiento de nuevo por agua y por el Espíritu',
    description: 'La primera ordenanza del evangelio: la puerta al camino estrecho, el convenio en las aguas, y el nacimiento espiritual que transforma al hombre viejo en hombre nuevo.',
    level: 'BÁSICO',
    icon: '💧',
    duration: 50,
    order: 2,
    status: 'PUBLISHED',
  },
  {
    id: 'arrepentimiento',
    moduleId: 'doctrina-fundamental',
    title: 'El Arrepentimiento Real',
    subtitle: 'Transformación real, no penitencia',
    description: 'Diferencia entre penitencia y conversión real. DyC 19 y Alma 42 como fuentes primarias: el precio ya pagado, la justicia y la misericordia, y el camino hacia el gozo.',
    level: 'BÁSICO',
    icon: '🙏',
    duration: 65,
    order: 3,
    status: 'PUBLISHED',
  },
  {
    id: 'don-espiritu-santo',
    moduleId: 'doctrina-fundamental',
    title: 'El Don del Espíritu Santo',
    subtitle: 'El mayor don que Dios da a sus hijos en mortalidad',
    description: 'El tercer miembro de la Divinidad, sus funciones como Consolador y Santificador, la diferencia entre su influencia y su don, y cómo cultivar su compañía constante.',
    level: 'BÁSICO',
    icon: '🕊️',
    duration: 60,
    order: 3,
    status: 'PUBLISHED',
  },
  {
    id: 'fe-principio-poder',
    moduleId: 'doctrina-fundamental',
    title: 'La Fe como Principio de Poder',
    subtitle: 'La causa motriz de toda acción en el universo',
    description: 'Las Lecciones de Fe como fuente principal: la fe como principio motor, las tres cosas necesarias para fe en Dios, el experimento de Alma 32, y Éter 12 sobre la fe que produce milagros.',
    level: 'BÁSICO',
    icon: '🌟',
    duration: 65,
    order: 5,
    status: 'PUBLISHED',
  },
  {
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
  },
  {
    id: 'resurreccion-tres-reinos',
    moduleId: 'doctrina-fundamental',
    title: 'La Resurrección y los Tres Reinos de Gloria',
    subtitle: 'Lo que Dios reveló sobre la eternidad',
    description: 'DyC 76 y 1 Corintios 15: la resurrección universal y los tres destinos eternos de gloria revelados a José Smith.',
    level: 'AVANZADO',
    icon: '✨',
    duration: 80,
    order: 7,
    status: 'PUBLISHED',
  },
  {
    id: 'proclamacion-familia',
    moduleId: 'vida-familiar-personal',
    title: 'La Proclamación sobre la Familia',
    subtitle: 'El hogar como centro del plan eterno',
    description: 'El género eterno, el matrimonio como ordenanza divina, los roles del padre y la madre, y por qué la familia es la unidad fundamental de la eternidad.',
    level: 'BÁSICO',
    icon: '🏠',
    duration: 55,
    order: 1,
    status: 'PUBLISHED',
  },
  {
    id: 'la-oracion',
    moduleId: 'vida-familiar-personal',
    title: 'La oración',
    subtitle: 'Comunicación con el Padre',
    description: 'Oración personal, familiar y el poder de la súplica sincera.',
    level: 'BÁSICO',
    icon: '🕯️',
    duration: 22,
    order: 2,
    status: 'IN_CONSTRUCTION',
  },
  {
    id: 'estudio-escrituras',
    moduleId: 'vida-familiar-personal',
    title: 'El estudio de las Escrituras',
    subtitle: 'Buscad diligentemente',
    description: 'Métodos de estudio, estudio personal y en familia.',
    level: 'BÁSICO',
    icon: '📖',
    duration: 24,
    order: 3,
    status: 'IN_CONSTRUCTION',
  },
  {
    id: 'ministerio-en-el-hogar',
    moduleId: 'vida-familiar-personal',
    title: 'El ministerio en el hogar',
    subtitle: 'Enseñar con poder',
    description: 'Cómo enseñar el evangelio en casa con sencillez y Espíritu.',
    level: 'BÁSICO',
    icon: '❤️',
    duration: 26,
    order: 4,
    status: 'IN_CONSTRUCTION',
  },
  {
    id: 'primera-vision',
    moduleId: 'historia-restauracion',
    title: 'La Primera Visión',
    subtitle: 'La apertura de esta última dispensación',
    description: 'El relato de José Smith y el ministerio de Jesucristo restaurado.',
    level: 'INTERMEDIO',
    icon: '🌅',
    duration: 35,
    order: 1,
    status: 'IN_CONSTRUCTION',
  },
  {
    id: 'gran-apostasia',
    moduleId: 'historia-restauracion',
    title: 'La Gran Apostasía',
    subtitle: 'La necesidad de una restauración',
    description: 'La caída de la Iglesia primitiva y la promesa de restauración.',
    level: 'INTERMEDIO',
    icon: '🍂',
    duration: 32,
    order: 2,
    status: 'IN_CONSTRUCTION',
  },
  {
    id: 'libro-de-mormon-reliquia',
    moduleId: 'historia-restauracion',
    title: 'El Libro de Mormón — piedra angular',
    subtitle: 'Otro testamento de Cristo',
    description: 'Origen, propósito y testimonio del Libro de Mormón.',
    level: 'INTERMEDIO',
    icon: '📗',
    duration: 36,
    order: 3,
    status: 'IN_CONSTRUCTION',
  },
  {
    id: 'sacerdocio-autoridad-poder',
    moduleId: 'doctrina-avanzada-carne',
    title: 'El Sacerdocio — Autoridad y poder',
    subtitle: 'Las dos mitades del sacerdocio',
    description: 'Diferencias entre autoridad delegada y el poder del sacerdocio.',
    level: 'AVANZADO',
    icon: '🔑',
    duration: 40,
    order: 1,
    status: 'IN_CONSTRUCTION',
  },
  {
    id: 'templo-casa-del-senor',
    moduleId: 'doctrina-avanzada-carne',
    title: 'El Templo — la casa del Señor',
    subtitle: 'Ordenanzas eternas y sellos',
    description: 'El propósito del templo en el plan de salvación.',
    level: 'AVANZADO',
    icon: '🏛️',
    duration: 45,
    order: 2,
    status: 'IN_CONSTRUCTION',
  },
  {
    id: 'preexistencia',
    moduleId: 'doctrina-avanzada-carne',
    title: 'La preexistencia',
    subtitle: 'Quiénes éramos antes de nacer',
    description: 'Inteligencias, hijos espirituales y el consejo en los cielos.',
    level: 'AVANZADO',
    icon: '☁️',
    duration: 42,
    order: 3,
    status: 'IN_CONSTRUCTION',
  },
  {
    id: 'plan-de-salvacion',
    moduleId: 'doctrina-avanzada-carne',
    title: 'El plan de salvación',
    subtitle: 'Felicidad en esta vida y en la eternidad',
    description: 'Creación, Caída, Expiación y condiciones del plan del Padre.',
    level: 'AVANZADO',
    icon: '🧭',
    duration: 38,
    order: 4,
    status: 'IN_CONSTRUCTION',
  },
  {
    id: 'justicia-y-misericordia',
    moduleId: 'doctrina-avanzada-carne',
    title: 'Justicia y misericordia',
    subtitle: 'Equilibradas en Cristo',
    description: 'Cómo la Expiación satisface la justicia y derrama la misericordia.',
    level: 'AVANZADO',
    icon: '⚖️',
    duration: 36,
    order: 5,
    status: 'IN_CONSTRUCTION',
  },
  {
    id: 'convenios-eternos',
    moduleId: 'doctrina-avanzada-carne',
    title: 'Los convenios eternos',
    subtitle: 'Enlaces que nos atan a Cristo',
    description: 'Bautismo, unción, sellos y fidelidad al convenio.',
    level: 'AVANZADO',
    icon: '🔗',
    duration: 34,
    order: 6,
    status: 'IN_CONSTRUCTION',
  },
  {
    id: 'liderazgo-segun-el-evangelio',
    moduleId: 'lideres-misioneros',
    title: 'Liderazgo según el evangelio',
    subtitle: 'Servir, no ser servido',
    description: 'Principios de liderazgo en barrios, estacas y hogares.',
    level: 'INTERMEDIO',
    icon: '🧭',
    duration: 35,
    order: 1,
    status: 'IN_CONSTRUCTION',
  },
  {
    id: 'mision-y-testimonio',
    moduleId: 'lideres-misioneros',
    title: 'Misión y testimonio',
    subtitle: 'Proclamar con claridad y amor',
    description: 'Predicar el evangelio y fortalecer a los recién convertidos.',
    level: 'INTERMEDIO',
    icon: '📣',
    duration: 33,
    order: 2,
    status: 'IN_CONSTRUCTION',
  },
  {
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
  },
  {
    id: 'vision-dc-76',
    moduleId: 'discursos-sermones-clasicos',
    title: 'La visión de la gloria celeste (D&C 76)',
    subtitle: 'Con José Smith y Sidney Rigdon',
    description: 'Grados de gloria, el plan de redención en la visión registrada en D&C 76.',
    level: 'AVANZADO',
    icon: '🌌',
    duration: 55,
    order: 2,
    status: 'IN_CONSTRUCTION',
  },
  {
    id: 'vision-tres-reinos',
    moduleId: 'discursos-sermones-clasicos',
    title: 'Visión de los tres grados de gloria',
    subtitle: 'Enseñanza complementaria al plan de salvación',
    description: 'Profundizar en la doctrina de reinos y exaltación.',
    level: 'AVANZADO',
    icon: '✨',
    duration: 50,
    order: 3,
    status: 'IN_CONSTRUCTION',
  },
]

const PORTED: Partial<Record<string, Lesson>> = {
  'santa-cena': lessonSantaCena,
  'bautismo': lessonElBautismo,
  'don-espiritu-santo': lessonDonEspirituSanto,
  'fe-principio-poder': lessonFePrincipioPoder,
  'arrepentimiento': lessonArrepentimiento,
  'resurreccion-tres-reinos': lessonResurreccion,
  'proclamacion-familia': lessonProclamacionFamilia,
  'la-expiacion-del-salvador': lessonLaExpiacionDelSalvador,
  'king-follett': lessonKingFollett,
}

function lessonIdsForModule(moduleId: string): string[] {
  return LESSON_ROWS.filter((l) => l.moduleId === moduleId)
    .sort((a, b) => a.order - b.order)
    .map((l) => l.id)
}

function buildSeedLessons(): Record<string, Lesson> {
  const byModule = new Map<string, LessonRow[]>()
  for (const row of LESSON_ROWS) {
    const list = byModule.get(row.moduleId) ?? []
    list.push(row)
    byModule.set(row.moduleId, list)
  }
  for (const list of byModule.values()) {
    list.sort((a, b) => a.order - b.order)
  }

  const out: Record<string, Lesson> = {}

  for (const row of LESSON_ROWS) {
    const list = byModule.get(row.moduleId)!
    const idx = list.findIndex((x) => x.id === row.id)
    const prevId: string | null = idx > 0 ? list[idx - 1]!.id : null
    const nextId: string | null = idx < list.length - 1 ? list[idx + 1]!.id : null

    const ported = PORTED[row.id]
    if (ported) {
      out[row.id] = {
        ...ported,
        previousLessonId: prevId,
        nextLessonId: nextId,
      }
    } else {
      out[row.id] = {
        id: row.id,
        moduleId: row.moduleId,
        title: row.title,
        subtitle: row.subtitle,
        description: row.description,
        level: row.level,
        icon: row.icon,
        duration: row.duration,
        order: row.order,
        status: row.status,
        studyBodyPlain: '',
        originalBodyPlain: '',
        previousLessonId: prevId,
        nextLessonId: nextId,
      }
    }
  }

  return out
}

export const seedLessons: Record<string, Lesson> = buildSeedLessons()

export const seedModules: DoctrinalModule[] = [...MODULE_ROWS]
  .sort((a, b) => a.order - b.order)
  .map((m) => ({
    ...m,
    lessonIds: lessonIdsForModule(m.id),
  }))

/**
 * Busca una lección por módulo e id.
 *
 * @param moduleId - Id del módulo
 * @param lessonId - Id de la lección
 * @returns Lección o undefined
 */
export function findSeedLesson(moduleId: string, lessonId: string): Lesson | undefined {
  const lesson = seedLessons[lessonId]
  if (!lesson || lesson.moduleId !== moduleId) {
    return undefined
  }
  return lesson
}

/**
 * Obtiene el módulo semilla por id.
 *
 * @param moduleId - Id del módulo
 * @returns Módulo o undefined
 */
export function findSeedModule(moduleId: string): DoctrinalModule | undefined {
  return seedModules.find((m) => m.id === moduleId)
}

/**
 * Estadísticas del catálogo (lecciones publicadas vs total).
 *
 * @returns Totales y porcentaje redondeado
 */
export function getCatalogStats(): {
  totalLessons: number
  published: number
  percentRounded: number
} {
  const totalLessons = LESSON_ROWS.length
  const published = LESSON_ROWS.filter((l) => l.status === 'PUBLISHED').length
  const percentRounded = totalLessons === 0 ? 0 : Math.round((published / totalLessons) * 100)
  return { totalLessons, published, percentRounded }
}
