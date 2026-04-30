import type { CatalogLesson, CatalogModule } from '../types/catalog'

export const CATALOG_MODULES: CatalogModule[] = [
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

export const CATALOG_LESSONS: CatalogLesson[] = [
  // --- Doctrina Fundamental ---
  {
    id: 'santa-cena',
    moduleId: 'doctrina-fundamental',
    title: 'La Santa Cena',
    subtitle: 'Convenio y poder renovados',
    description: 'El pan y el agua, la memoria del Salvador y nuestros convenios.',
    level: 'BÁSICO',
    icon: '🍷',
    duration: 20,
    order: 1,
    status: 'IN_CONSTRUCTION',
  },
  {
    id: 'bautismo',
    moduleId: 'doctrina-fundamental',
    title: 'El Bautismo',
    subtitle: 'Nacimiento de nuevo por agua y por el Espíritu',
    description: 'La primera ordenanza del evangelio y su relación con la limpieza y el convenio.',
    level: 'BÁSICO',
    icon: '💧',
    duration: 25,
    order: 2,
    status: 'IN_CONSTRUCTION',
  },
  {
    id: 'arrepentimiento',
    moduleId: 'doctrina-fundamental',
    title: 'El Arrepentimiento',
    subtitle: 'Un cambio de corazón y de conducta',
    description: 'Los arrepentimientos eterno y diario, y la misericordia del Salvador.',
    level: 'BÁSICO',
    icon: '🙏',
    duration: 22,
    order: 3,
    status: 'IN_CONSTRUCTION',
  },
  {
    id: 'don-espiritu-santo',
    moduleId: 'doctrina-fundamental',
    title: 'El don del Espíritu Santo',
    subtitle: 'Guía, consuelo y santificación',
    description: 'Cómo recibir y reconocer la compañía del Espíritu.',
    level: 'BÁSICO',
    icon: '✨',
    duration: 24,
    order: 4,
    status: 'IN_CONSTRUCTION',
  },
  {
    id: 'fe-principio-poder',
    moduleId: 'doctrina-fundamental',
    title: 'La fe como principio de poder',
    subtitle: 'Confianza en Cristo que mueve a la acción',
    description: 'La fe, las obras y el poder de Dios en nuestra vida.',
    level: 'BÁSICO',
    icon: '🌟',
    duration: 25,
    order: 5,
    status: 'IN_CONSTRUCTION',
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
    htmlPath: '/lessons/la-expiacion.html',
  },

  // --- Vida familiar y personal ---
  {
    id: 'proclamacion-familia',
    moduleId: 'vida-familiar-personal',
    title: 'La Proclamación sobre la familia',
    subtitle: 'El hogar y el plan eterno',
    description: 'La familia en el plan de Dios y el papel de los padres.',
    level: 'BÁSICO',
    icon: '🏠',
    duration: 28,
    order: 1,
    status: 'IN_CONSTRUCTION',
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

  // --- Historia y restauración ---
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

  // --- Doctrina avanzada ---
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

  // --- Líderes y misioneros ---
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

  // --- Discursos clásicos ---
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
    htmlPath: '/lessons/king-follett.html',
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

export function getModuleById(moduleId: string): CatalogModule | undefined {
  return CATALOG_MODULES.find((m) => m.id === moduleId)
}

export function getLessonsForModule(moduleId: string): CatalogLesson[] {
  return CATALOG_LESSONS.filter((l) => l.moduleId === moduleId).sort((a, b) => a.order - b.order)
}

export function getLesson(moduleId: string, lessonId: string): CatalogLesson | undefined {
  return CATALOG_LESSONS.find((l) => l.moduleId === moduleId && l.id === lessonId)
}

export function getPublishedCountForModule(moduleId: string): { published: number; total: number } {
  const lessons = getLessonsForModule(moduleId)
  return {
    published: lessons.filter((l) => l.status === 'PUBLISHED').length,
    total: lessons.length,
  }
}

export function getCatalogStats(): {
  totalLessons: number
  published: number
  percentRounded: number
} {
  const totalLessons = CATALOG_LESSONS.length
  const published = CATALOG_LESSONS.filter((l) => l.status === 'PUBLISHED').length
  const percentRounded =
    totalLessons === 0 ? 0 : Math.round((published / totalLessons) * 100)
  return { totalLessons, published, percentRounded }
}

export function getAdjacentLessons(
  moduleId: string,
  lessonId: string,
): { previous: CatalogLesson | null; next: CatalogLesson | null } {
  const sorted = getLessonsForModule(moduleId)
  const index = sorted.findIndex((l) => l.id === lessonId)
  if (index === -1) {
    return { previous: null, next: null }
  }
  return {
    previous: index > 0 ? sorted[index - 1]! : null,
    next: index < sorted.length - 1 ? sorted[index + 1]! : null,
  }
}
