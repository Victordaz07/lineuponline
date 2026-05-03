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
import { laOracion as lessonOracion } from '@/data/lessons/la-oracion'
import { elEstudioEscrituras as lessonEstudioEscrituras } from '@/data/lessons/el-estudio-escrituras'
import { elMinisterioEnElHogar as lessonMinisterio } from '@/data/lessons/el-ministerio-en-el-hogar'
import { laPrimeraVision as lessonPrimeraVision } from '@/data/lessons/la-primera-vision'
import { laGranApostasia as lessonGranApostasia } from '@/data/lessons/la-gran-apostasia'
import { elLibroDeMormon as lessonLibroDeMormon } from '@/data/lessons/el-libro-de-mormon'
import { elSacerdocio as lessonSacerdocio } from '@/data/lessons/el-sacerdocio'
import { elTemplo as lessonTemplo } from '@/data/lessons/el-templo'
import { laPreexistencia as lessonPreexistencia } from '@/data/lessons/la-preexistencia'
import { elPlanDeSalvacion as lessonPlanSalvacion } from '@/data/lessons/el-plan-de-salvacion'
import { justiciaYMisericordia as lessonJusticiaMisericordia } from '@/data/lessons/justicia-y-misericordia'
import { losConveniosEternos as lessonConvenios } from '@/data/lessons/los-convenios-eternos'
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
    title: 'La Oración',
    subtitle: 'El don más sublime — comunicación con el Padre',
    description: 'Cómo orar, qué esperar, qué hacer cuando el cielo parece cerrado, y cómo vivir en oración continua. Holland, Scott, Bednar, Alma 34, 3 Nefi 18.',
    level: 'BÁSICO',
    icon: '🕯️',
    duration: 65,
    order: 2,
    status: 'PUBLISHED',
  },
  {
    id: 'estudio-escrituras',
    moduleId: 'vida-familiar-personal',
    title: 'El Estudio de las Escrituras',
    subtitle: 'Banquetear en las palabras de Cristo',
    description: 'Cómo pasar de leer a banquetear: el Libro de Mormón como caso especial, el Espíritu como maestro, y el hábito diario que construye el testimonio robusto. Bednar, Benson, DyC 18.',
    level: 'BÁSICO',
    icon: '📖',
    duration: 60,
    order: 3,
    status: 'PUBLISHED',
  },
  {
    id: 'ministerio-en-el-hogar',
    moduleId: 'vida-familiar-personal',
    title: 'El Ministerio en el Hogar',
    subtitle: 'Cuidar como Cristo cuidó',
    description: 'Del checklist mensual al amor genuino: la diferencia entre enseñanza en el hogar y el ministerio real, la parábola de la oveja perdida, y cómo ministrar en los momentos que importan.',
    level: 'BÁSICO',
    icon: '❤️',
    duration: 50,
    order: 4,
    status: 'PUBLISHED',
  },
  {
    id: 'primera-vision',
    moduleId: 'historia-restauracion',
    title: 'La Primera Visión',
    subtitle: 'La apertura de la última dispensación',
    description: 'La primavera de 1820: un adolescente entra al bosque con Santiago 1:5 en el corazón. El contexto histórico, la oscuridad antes de la luz, los cinco relatos, y por qué todo lo que enseñamos depende de que sea verdad.',
    level: 'BÁSICO',
    icon: '✨',
    duration: 65,
    order: 1,
    status: 'PUBLISHED',
  },
  {
    id: 'gran-apostasia',
    moduleId: 'historia-restauracion',
    title: 'La Gran Apostasía',
    subtitle: 'Por qué la Restauración era necesaria',
    description: 'La pérdida de la autoridad del sacerdocio y las llaves de revelación. Por qué la reforma no era suficiente, los cuatro elementos perdidos, y la dispensación de la plenitud de los tiempos.',
    level: 'BÁSICO',
    icon: '🍂',
    duration: 55,
    order: 2,
    status: 'PUBLISHED',
  },
  {
    id: 'libro-de-mormon-reliquia',
    moduleId: 'historia-restauracion',
    title: 'El Libro de Mormón — Piedra Angular',
    subtitle: 'Otro testamento de Jesucristo',
    description: 'El origen del libro, los once testigos, su contenido centrado en Cristo, y la promesa de Moroni 10:4. Por qué Benson dijo que acerca más a Dios que cualquier otro libro.',
    level: 'BÁSICO',
    icon: '📜',
    duration: 65,
    order: 3,
    status: 'PUBLISHED',
  },
  {
    id: 'sacerdocio-autoridad-poder',
    moduleId: 'doctrina-avanzada-carne',
    title: 'El Sacerdocio — Autoridad y Poder',
    subtitle: 'Las dos mitades que la mayoría confunde',
    description: 'La distinción de Nelson entre autoridad (ordenación) y poder (rectitud), los dos sacerdocios y sus funciones, las llaves y quién las tiene. DyC 84, 107, 121.',
    level: 'AVANZADO',
    icon: '🔑',
    duration: 70,
    order: 1,
    status: 'PUBLISHED',
  },
  {
    id: 'templo-casa-del-senor',
    moduleId: 'doctrina-avanzada-carne',
    title: 'El Templo — La Casa del Señor',
    subtitle: 'Donde el tiempo y la eternidad se tocan',
    description: 'El endowment, el sellamiento y el trabajo vicario por los muertos. DyC 84, 128, 132 y Russell M. Nelson sobre por qué nuestro futuro espiritual depende de nuestra relación con el templo.',
    level: 'AVANZADO',
    icon: '🏛️',
    duration: 75,
    order: 2,
    status: 'PUBLISHED',
  },
  {
    id: 'preexistencia',
    moduleId: 'doctrina-avanzada-carne',
    title: 'La Preexistencia',
    subtitle: 'Quiénes éramos antes de nacer',
    description: 'Vivimos con Dios antes de nacer: Abraham 3, la guerra en el cielo, por qué elegiste venir a la mortalidad y las cinco implicaciones prácticas de esta doctrina para tu identidad y propósito.',
    level: 'AVANZADO',
    icon: '⭐',
    duration: 60,
    order: 3,
    status: 'PUBLISHED',
  },
  {
    id: 'plan-de-salvacion',
    moduleId: 'doctrina-avanzada-carne',
    title: 'El Plan de Salvación',
    subtitle: 'La arquitectura de la eternidad',
    description: 'El plan de felicidad: las seis etapas de la existencia, la Caída como acto necesario, y la Expiación como eje central. Alma 42, 2 Nefi 2, DyC 76.',
    level: 'AVANZADO',
    icon: '🗺️',
    duration: 70,
    order: 4,
    status: 'PUBLISHED',
  },
  {
    id: 'justicia-y-misericordia',
    moduleId: 'doctrina-avanzada-carne',
    title: 'Justicia y Misericordia',
    subtitle: 'Equilibradas en Cristo',
    description: 'El dilema más profundo del universo: cómo Cristo satisface ambas simultáneamente. Alma 42, DyC 19 — el precio ya pagado, el arrepentido vs. el no arrepentido.',
    level: 'AVANZADO',
    icon: '⚖️',
    duration: 65,
    order: 5,
    status: 'PUBLISHED',
  },
  {
    id: 'convenios-eternos',
    moduleId: 'doctrina-avanzada-carne',
    title: 'Los Convenios Eternos',
    subtitle: 'Los lazos que nos atan a Cristo',
    description: 'La escalera de los convenios: bautismo, Santa Cena, sacerdocio, endowment y sellamiento. Por qué romper un convenio es grave y cómo se renueva a través del arrepentimiento. DyC 82, 84, 132.',
    level: 'AVANZADO',
    icon: '🔗',
    duration: 65,
    order: 6,
    status: 'PUBLISHED',
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
  'la-oracion': lessonOracion,
  'estudio-escrituras': lessonEstudioEscrituras,
  'ministerio-en-el-hogar': lessonMinisterio,
  'primera-vision': lessonPrimeraVision,
  'gran-apostasia': lessonGranApostasia,
  'libro-de-mormon-reliquia': lessonLibroDeMormon,
  'sacerdocio-autoridad-poder': lessonSacerdocio,
  'templo-casa-del-senor': lessonTemplo,
  'preexistencia': lessonPreexistencia,
  'plan-de-salvacion': lessonPlanSalvacion,
  'justicia-y-misericordia': lessonJusticiaMisericordia,
  'convenios-eternos': lessonConvenios,
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
