import type { Lesson } from '@/types/doctrine'

export const melquisedec: Lesson = {
  id: 'melquisedec',
  moduleId: 'personajes-escrituras',
  title: 'Melquisedec — El Rey-Sacerdote Eterno',
  subtitle: 'Sin padre, sin madre, sin genealogía',
  description: 'Hebreos 7 lo describe como "sin padre, sin madre, sin genealogía, sin principio de días ni fin de vida". El sacerdocio más alto lleva su nombre. Alma 13 en el Libro de Mormón revela detalles que la Biblia omite.',
  level: 'AVANZADO',
  icon: '👑',
  duration: 65,
  order: 32,
  status: 'PUBLISHED',
  studyBodyPlain: '',
  originalBodyPlain: '',
  studySections: [
    {
      id: 's1',
      title: 'El Misterio de Génesis 14',
      intro: { romanNumeral: 'I', title: 'Aparece sin Introducción', paragraphs: ['El personaje más enigmático del AT'] },
      topics: [
        {
          id: 't1',
          title: 'Sin pasado, sin futuro — en el texto',
          blocks: [
            { type: 'highlight_verse', reference: 'Génesis 14:18-20', text: 'Entonces Melquisedec, rey de Salem y sacerdote del Dios Altísimo, sacó pan y vino; y le bendijo, diciendo: Bendito sea Abram del Dios Altísimo, creador de los cielos y de la tierra; y bendito sea el Dios Altísimo, que entregó tus enemigos en tu mano. Y le dio Abram los diezmos de todo.' },
            { type: 'paragraph', text: 'Melquisedec aparece en Génesis 14 sin ninguna introducción genealógica — algo extraordinariamente inusual en el texto hebreo, donde cada personaje importante viene con su árbol familiar. Aparece, bendice a Abram, recibe el diezmo, y desaparece. Este silencio deliberado es lo que Pablo usa en Hebreos 7 para su argumento teológico.' },
            { type: 'doctrine_box', title: 'Salem = Jerusalén', body: 'Los eruditos identifican Salem con la futura Jerusalén — de hecho, "Jeru-salem" contiene la raíz "salem" (shalem = paz). Melquisedec era rey de la ciudad que más tarde sería la capital del reino de David y el sitio del templo de Salomón. Su sacerdocio y su ciudad eran el prefiguramiento exacto del ministerio de Cristo.' },
          ],
        },
      ],
    },
    {
      id: 's2',
      title: 'Hebreos 7 — El Argumento de Pablo',
      intro: { romanNumeral: 'II', title: 'Superior al Levítico', paragraphs: ['Por qué el sacerdocio de Melquisedec supera al de Aarón'] },
      topics: [
        {
          id: 't2',
          title: 'El argumento de la superioridad',
          blocks: [
            { type: 'highlight_verse', reference: 'Hebreos 7:4,7', text: 'Considerad, pues, cuán grande era éste, a quien aun Abraham el patriarca dio diezmos del botín... Y sin discusión alguna, el menor es bendecido por el mayor.' },
            { type: 'paragraph', text: 'Pablo construye su argumento en capas: (1) Abraham le pagó diezmos a Melquisedec — en la lógica hebrea, el que recibe los diezmos es superior al que los paga; (2) Melquisedec bendijo a Abraham — el que bendice es mayor que el bendecido; (3) Leví, el antepasado de los sacerdotes levíticos, estaba "en los lomos de Abraham" cuando esto ocurrió — por tanto los sacerdotes levíticos pagaron diezmos a Melquisedec a través de su antepasado. El sacerdocio de Melquisedec es superioral levítico en todo sentido.' },
          ],
        },
      ],
    },
    {
      id: 's3',
      title: 'Alma 13 — Lo que el Libro de Mormón Añade',
      intro: { romanNumeral: 'III', title: 'Preordenado antes de Nacer', paragraphs: ['El origen eterno del sacerdocio'] },
      topics: [
        {
          id: 't3',
          title: 'Llamados desde el principio',
          blocks: [
            { type: 'highlight_verse', reference: 'Alma 13:3', text: 'Y esto es el modo según el cual fueron llamados según la preparación de Dios desde la fundación del mundo, a causa de su fe y sus buenas obras; en el primer estado de su existencia siendo dejados a su propia agencia, eligieron el bien.' },
            { type: 'paragraph', text: 'Alma 13 revela que los sumos sacerdotes — incluyendo Melquisedec — fueron llamados y preparados en la preexistencia. Su sacerdocio no fue accidental ni solo genealógico: fue el resultado de sus elecciones en la vida premortal. Esto conecta el sacerdocio con la doctrina de la preexistencia de una manera que ningún otro texto del canon bíblico hace.' },
            { type: 'paragraph', text: 'Alma también revela el nombre de la ciudad de Melquisedec: Salem/Jerusalén estaba llena de maldad, y Melquisedec "ejerció un poderoso ministerio entre su pueblo" y los trajo al arrepentimiento, convirtiéndola en una ciudad de paz. Por eso se le llamó "Príncipe de Paz" — antes que Cristo, Melquisedec trajo paz a su ciudad como tipo del Príncipe de Paz eterno.' },
          ],
        },
      ],
    },
    {
      id: 's4',
      title: 'Melquisedec como Tipo de Cristo',
      intro: { romanNumeral: 'IV', title: 'El Modelo del Sumo Sacerdote Eterno', paragraphs: ['Hebreos 5:6 — "Tú eres sacerdote para siempre"'] },
      topics: [
        {
          id: 't4',
          title: 'Todos los paralelos apuntan a Cristo',
          blocks: [
            { type: 'key_points', title: 'Melquisedec como tipo de Cristo', points: [
              'Rey de Salem (Paz) → Cristo es el "Príncipe de Paz" (Isaías 9:6)',
              'Sacerdote del Dios Altísimo → Cristo es el Gran Sumo Sacerdote (Hebreos 4:14)',
              'Sacó pan y vino → Los emblemas de la Santa Cena instituidos por Cristo',
              '"Sin principio de días ni fin de vida" → Cristo existe desde la eternidad (Juan 8:58)',
              'Recibió diezmos de Abraham → Cristo recibe la ofrenda total de sus hijos',
            ]},
            { type: 'reflection', prompt: 'El sacerdocio más alto de la Iglesia lleva el nombre de Melquisedec como alias del nombre de Cristo. Si sostuvieras ese sacerdocio, ¿cómo cambiaría tu perspectiva saber que participas en el Orden del Hijo de Dios?' },
          ],
        },
      ],
    },
  ],
}
