import type { Lesson } from '@/types/doctrine'

export const melquisedecElRey: Lesson = {
  id: 'melquisedec-el-rey',
  moduleId: 'personajes-escrituras',
  title: 'El Rey-Sacerdote',
  subtitle: 'Sin padre, sin madre, sin genealogía',
  description: 'Hebreos 7 describe a Melquisedec de manera que desafía toda categoría humana: sin genealogía sacerdotal, sin principio de días ni fin de vida. ¿Qué significa realmente?',
  level: 'AVANZADO',
  icon: '👑',
  duration: 15,
  order: 3210,
  status: 'PUBLISHED',
  studyBodyPlain: '',
  originalBodyPlain: '',
  submoduleGroup: 'melquisedec',
  studySections: [
    {
      id: 's1',
      title: 'El Misterio de Génesis 14',
      intro: { romanNumeral: 'I', heading: 'Aparece sin Introducción', subheading: 'El personaje más enigmático del AT' },
      topics: [
        {
          id: 't1',
          title: 'Sin pasado, sin futuro — en el texto',
          blocks: [
            { type: 'highlight_verse', id: 'v1', reference: 'Génesis 14:18-20', text: 'Entonces Melquisedec, rey de Salem y sacerdote del Dios Altísimo, sacó pan y vino; y le bendijo, diciendo: Bendito sea Abram del Dios Altísimo, creador de los cielos y de la tierra; y bendito sea el Dios Altísimo, que entregó tus enemigos en tu mano. Y le dio Abram los diezmos de todo.' },
            { type: 'paragraph', id: 'p1', text: 'Melquisedec aparece en Génesis 14 sin ninguna introducción genealógica — algo extraordinariamente inusual en el texto hebreo, donde cada personaje importante viene con su árbol familiar. Aparece, bendice a Abram, recibe el diezmo, y desaparece. Este silencio deliberado es lo que Pablo usa en Hebreos 7 para su argumento teológico.' },
            { type: 'doctrine_box', id: 'db1', title: 'Salem = Jerusalén', content: 'Los eruditos identifican Salem con la futura Jerusalén — de hecho, "Jeru-salem" contiene la raíz "salem" (shalem = paz). Melquisedec era rey de la ciudad que más tarde sería la capital del reino de David y el sitio del templo de Salomón. Su sacerdocio y su ciudad eran el prefiguramiento exacto del ministerio de Cristo.' },
          ],
        },
      ],
    },
  ],
}
