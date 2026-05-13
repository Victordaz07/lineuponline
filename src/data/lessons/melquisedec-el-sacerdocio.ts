import type { Lesson } from '@/types/doctrine'

export const melquisedecElSacerdocio: Lesson = {
  id: 'melquisedec-el-sacerdocio',
  moduleId: 'personajes-escrituras',
  title: 'El Sacerdocio Supremo',
  subtitle: 'Por qué lleva su nombre',
  description: 'El sacerdocio más alto no lleva el nombre de Adán, ni de Noé, ni de Abraham — lleva el de Melquisedec. ¿Por qué? Porque fue el ejemplo más perfecto de su ejercicio fuera del propio Cristo.',
  level: 'AVANZADO',
  icon: '⚡',
  duration: 15,
  order: 3213,
  status: 'PUBLISHED',
  studyBodyPlain: '',
  originalBodyPlain: '',
  submoduleGroup: 'melquisedec',
  studySections: [
    {
      id: 's4',
      title: 'Melquisedec como Tipo de Cristo',
      intro: { romanNumeral: 'IV', title: 'El Modelo del Sumo Sacerdote Eterno', paragraphs: ['Hebreos 5:6 — "Tú eres sacerdote para siempre"'] },
      topics: [
        {
          id: 't4',
          title: 'Todos los paralelos apuntan a Cristo',
          blocks: [
            { type: 'key_points', id: 'kp1', title: 'Melquisedec como tipo de Cristo', points: [
              'Rey de Salem (Paz) → Cristo es el "Príncipe de Paz" (Isaías 9:6)',
              'Sacerdote del Dios Altísimo → Cristo es el Gran Sumo Sacerdote (Hebreos 4:14)',
              'Sacó pan y vino → Los emblemas de la Santa Cena instituidos por Cristo',
              '"Sin principio de días ni fin de vida" → Cristo existe desde la eternidad (Juan 8:58)',
              'Recibió diezmos de Abraham → Cristo recibe la ofrenda total de sus hijos',
            ]},
            { type: 'reflection', id: 'r1', prompt: 'El sacerdocio más alto de la Iglesia lleva el nombre de Melquisedec como alias del nombre de Cristo. Si sostuvieras ese sacerdocio, ¿cómo cambiaría tu perspectiva saber que participas en el Orden del Hijo de Dios?' },
          ],
        },
      ],
    },
  ],
}
