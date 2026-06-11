import type { TopicDef } from '../types'

/**
 * Master topic list for Scripture Quest.
 * Adding a new topic here is ALL that is needed for it to appear
 * in the game selector — no other code changes required.
 */
export const TOPICS: TopicDef[] = [
  {
    id: 'atonement',
    label: 'La Expiación de Jesucristo',
    description:
      'El sacrificio infinito del Salvador: Getsemaní, la cruz y la Resurrección.',
    studyModuleId: 'la-expiacion-del-salvador',
  },
  {
    id: 'restoration',
    label: 'La Restauración del Evangelio',
    description:
      'La Primera Visión, la salida a luz del Libro de Mormón y la restauración de la Iglesia.',
    studyModuleId: null,
  },
  {
    id: 'plan_of_salvation',
    label: 'El Plan de Salvación',
    description:
      'La vida preterrenal, el propósito de la vida terrenal y los reinos de gloria.',
    studyModuleId: null,
  },
  {
    id: 'book_of_mormon',
    label: 'El Libro de Mormón',
    description:
      'Otro testamento de Jesucristo: sus profetas, pueblos y enseñanzas.',
    studyModuleId: null,
  },
  {
    id: 'prophets',
    label: 'Profetas y Revelación Continua',
    description:
      'El llamamiento de profetas vivientes y cómo Dios revela Su voluntad hoy.',
    studyModuleId: null,
  },
  {
    id: 'ordinances',
    label: 'Las Ordenanzas y los Convenios',
    description:
      'Las ordenanzas de salvación y los convenios que nos unen a Dios.',
    studyModuleId: null,
  },
  {
    id: 'priesthood',
    label: 'El Sacerdocio',
    description:
      'La autoridad y el poder de Dios delegados al hombre para bendecir a Sus hijos.',
    studyModuleId: null,
  },
  {
    id: 'faith_repentance',
    label: 'La Fe y el Arrepentimiento',
    description:
      'Los primeros principios del Evangelio: fe en Jesucristo y el cambio de corazón.',
    studyModuleId: null,
  },
  {
    id: 'baptism',
    label: 'Bautismo y Don del Espíritu Santo',
    description:
      'La puerta del convenio: el bautismo por inmersión y el don del Espíritu Santo.',
    studyModuleId: null,
  },
  {
    id: 'eternal_family',
    label: 'La Familia Eterna',
    description:
      'El matrimonio en el templo y la doctrina de las familias selladas por la eternidad.',
    studyModuleId: null,
  },
]

/**
 * Tema especial "Mixto": sortea preguntas de todos los temas.
 * No forma parte de TOPICS (no aplica para insignias ni para el banco).
 */
export const MIXED_TOPIC_ID = 'mixed'

export const MIXED_TOPIC: TopicDef = {
  id: MIXED_TOPIC_ID,
  label: '🎲 Mixto — Todos los temas',
  description:
    'Preguntas sorpresa de cualquier tema: la prueba definitiva de tu conocimiento del Evangelio.',
  studyModuleId: null,
}

/** Lista que se muestra en el selector del juego (Mixto primero). */
export const SELECTABLE_TOPICS: TopicDef[] = [MIXED_TOPIC, ...TOPICS]

export function getTopicById(id: string): TopicDef | undefined {
  if (id === MIXED_TOPIC_ID) return MIXED_TOPIC
  return TOPICS.find((t) => t.id === id)
}
