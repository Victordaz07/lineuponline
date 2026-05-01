/**
 * Datos semilla de módulos y lecciones para desarrollo y fallback offline.
 */
import type { DoctrinalModule, Lesson } from '@/types/doctrine'

const studyLaExpiacion = `La expiación del Salvador es el acto central de amor y justicia en el plan de felicidad. A través de Su sufrimiento en el jardín y en la cruz, Cristo asumió las cargas, dolores y pecados de toda la humanidad.

Al arrepentirnos y seguir Sus mandamientos, podemos ser perdonados, fortalecidos y eventualmente exaltados. Este don no es meramente teórico: cambia cómo tratamos a los demás y cómo enfrentamos la adversidad.

La fe en la expiación nos invita a confiar en Su misericordia mientras nos esforzamos por el arrepentimiento sincero y la caridad duradera.`

const originalLaExpiacion = `DISCURSO ORIGINAL (extracto ilustrativo)

Título: La expiación del Salvador
Autor: W. Cleon Skousen

Contexto: Las enseñanzas sobre la expiación nos recuerdan que el Salvador pagó un precio infinito. Cada alma importa; cada corazón puede ser alcanzado por Su gracia.

(Texto de ejemplo para la pestaña "Texto original". Reemplazar con el contenido íntegro del discurso cuando esté disponible en el CMS o Firestore.)`

export const seedLessons: Record<string, Lesson> = {
  'la-expiacion-del-salvador': {
    id: 'la-expiacion-del-salvador',
    moduleId: 'doctrina-fundamental',
    title: 'La expiación del Salvador',
    author: 'W. Cleon Skousen',
    description:
      'Reflexión sobre el acto redentor del Salvador y su aplicación diaria en la fe y el arrepentimiento.',
    level: 'INTERMEDIATE',
    heroImage: {
      url: '/images/hero-celestial-a.png',
      alt: 'Iluminación suave sobre un paisaje sereno, metáfora de esperanza y redención',
    },
    studyBodyPlain: studyLaExpiacion,
    originalBodyPlain: originalLaExpiacion,
    scriptures: [
      { reference: '2 Nefi 25:26', book: '2 Nefi', verses: '26' },
      { reference: 'Alma 7:11-13', book: 'Alma', verses: '11-13' },
    ],
    quickFacts: [
      'La expiación cubre pecado, muerte y dolores personales.',
      'El arrepentimiento es un principio de fe y obra.',
      'La caridad es el vínculo perfecto que nos une a Cristo.',
    ],
    previousLessonId: 'la-fe-como-principio-de-poder',
    nextLessonId: null,
  },
  'la-fe-como-principio-de-poder': {
    id: 'la-fe-como-principio-de-poder',
    moduleId: 'doctrina-fundamental',
    title: 'La fe como principio de poder',
    author: 'Equipo editorial',
    description: 'Introducción a la fe como acción y confianza en el Señor.',
    level: 'BASIC',
    studyBodyPlain:
      'La fe es el primer principio del evangelio. Implica confiar en Jesucristo lo suficiente como para obrar en consecuencia.\n\nCuando la fe se nutre con las escrituras, la oración y la obediencia, se convierte en un principio de poder en nuestra vida diaria.',
    originalBodyPlain:
      'Texto original de ejemplo para la lección sobre la fe. Sustituir con transcripción oficial cuando corresponda.',
    scriptures: [{ reference: 'Éter 12:6', book: 'Éter', verses: '6' }],
    quickFacts: ['La fe sin obras está muerta.', 'Dios responde a la fe sincera.'],
    previousLessonId: null,
    nextLessonId: 'la-expiacion-del-salvador',
  },
}

export const seedModules: DoctrinalModule[] = [
  {
    id: 'doctrina-fundamental',
    title: 'Doctrina fundamental',
    description: 'Cimientos del evangelio restaurado: fe, expiación, plan de felicidad.',
    icon: '📖',
    heroImageUrl: '/images/hero-celestial-a.png',
    lessonIds: ['la-fe-como-principio-de-poder', 'la-expiacion-del-salvador'],
  },
  {
    id: 'familia-eterna',
    title: 'Familia eterna',
    description: 'Matrimonio, convenios y hogares centrados en Cristo.',
    icon: '💒',
    lessonIds: [],
  },
]

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
