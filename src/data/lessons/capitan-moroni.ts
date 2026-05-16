import type { Lesson } from '@/types/doctrine'

export const capitanMoroni: Lesson = {
  id: 'capitan-moroni',
  moduleId: 'personajes-escrituras',
  title: 'Capitán Moroni — El Título de Libertad',
  subtitle: 'Si todos los hombres fueran como Moroni',
  description: 'El capitán Moroni tenía 25 años cuando se convirtió en comandante en jefe. Nunca perdió una guerra. Pero más que sus victorias militares, el Libro de Mormón lo recuerda por el Título de Libertad — el estandarte que enarboló por su Dios, su religión, su libertad, su paz, sus esposas y sus hijos.',
  level: 'INTERMEDIO',
  icon: '🏴',
  duration: 60,
  order: 75,
  status: 'PUBLISHED',
  studyBodyPlain: '',
  originalBodyPlain: '',
  studySections: [
    {
      id: 's1',
      title: 'El Título de Libertad',
      intro: { romanNumeral: 'I', title: 'Alma 46 — El Estandarte de la Fe', paragraphs: ['Guerra espiritual antes que guerra militar'] },
      topics: [
        {
          id: 't1',
          title: 'La capa rasgada y la causa',
          blocks: [
            { type: 'highlight_verse', id: 'v1', reference: 'Alma 46:12-13', text: 'Y aconteció que rasgó su capa; y tomó un trozo de ella, y escribió en ella: En memoria de nuestro Dios, nuestra religión, y libertad, y nuestra paz, nuestras esposas, y nuestros hijos. Y llamó la tierra por donde viajaba tierra prometida.' },
            { type: 'paragraph', id: 'p1', text: 'Antes de ir a la guerra, Moroni estableció la causa. No fue "destruir a los lamanitas" ni "proteger el territorio." Fue: Dios, religión, libertad, paz, familia. El orden importa: el fundamento teológico precede a los objetivos políticos y personales. Moroni corrió por toda la tierra levantando el estandarte y proclamando quién estaba dispuesto a defender esas cosas. La guerra comenzó como un acto de testimonio.' },
          ],
        },
      ],
    },
    {
      id: 's2',
      title: '"Si Todos los Hombres Fueran Como Moroni"',
      intro: { romanNumeral: 'II', title: 'Alma 48:17 — El Elogio de Mormón', paragraphs: ['El verdadero retrato del hombre'] },
      topics: [
        {
          id: 't2',
          title: 'El soldado cuya fuerza era su fe',
          blocks: [
            { type: 'highlight_verse', id: 'v2', reference: 'Alma 48:17-18', text: 'Sí, verdaderamente, verdaderamente os digo, que si todos los hombres hubieran sido y fuesen y fuesen todavía como Moroni, he aquí, las mismas potestades del infierno se habrían sacudido para siempre; sí, el demonio nunca tendría poder sobre los corazones de los hijos de los hombres. He aquí, era un hombre como Ammoní, y Ammoní y sus hermanos, sí, también todos aquellos que habían sido ordenados por el sagrado orden de Dios...' },
            { type: 'paragraph', id: 'p2', text: 'Mormón compara a Moroni no con otros generales sino con los misioneros: Ammoní y sus hermanos. Un general y misioneros — en el mismo elogio. El punto de Mormón: la grandeza de Moroni no era su habilidad táctica sino su carácter. "No se deleitaba en el derramamiento de sangre... su alma se gozaba en la libertad y la libertad de su país" (Alma 48:11). La fuerza estaba al servicio de valores, no viceversa.' },
          ],
        },
      ],
    },
    {
      id: 's3',
      title: 'Las Ciudades Fuertes',
      intro: { romanNumeral: 'III', title: 'Alma 49-50 — La Preparación como Virtud', paragraphs: ['"Si estáis preparados no temeréis"'] },
      topics: [
        {
          id: 't3',
          title: 'La preparación estratégica como principio espiritual',
          blocks: [
            { type: 'paragraph', id: 'p3', text: 'Moroni preparó las ciudades nefitas durante los períodos de paz: terraplenes, muros, zanjas, torres de vigilancia. Cuando los lamanitas atacaron las ciudades fortalecidas encontraron una resistencia que no esperaban — y Mormón registra que "los lamanitas no se habían preparado para enfrentarse con semejante clase de combate" (Alma 49:8). La preparación en tiempos de paz es una virtud de liderazgo. El principio es aplicable espiritualmente: el espiritual que prepara convenios y hábitos en tiempos de calma resiste mejor en tiempos de tormenta.' },
          ],
        },
      ],
    },
    {
      id: 's4',
      title: 'La Carta a Pahoran',
      intro: { romanNumeral: 'IV', title: 'Alma 59-61 — El Error que Se Corrigió', paragraphs: ['Cuando Moroni juzgó mal — y reconoció su error'] },
      topics: [
        {
          id: 't4',
          title: 'El gran hombre que cometió un error grande',
          blocks: [
            { type: 'paragraph', id: 'p4', text: 'Moroni escribió una carta furiosa a Pahoran, el gobernador, acusándolo de traición por no enviar refuerzos. La carta es poderosa, apasionada — y equivocada. Pahoran respondió explicando que había una rebelión interna que le impedía enviar tropas. La respuesta de Pahoran no fue defensiva: "Me alegra que tu corazón esté firmemente por la libertad... No tengo enojo contra ti." Moroni aceptó la corrección y actuó. Los grandes cometen errores de juicio. Los grandes los reconocen y corrigen.' },
            { type: 'reflection', id: 'r1', prompt: '¿Cuál es tu "causa" — el conjunto de valores que defines como tu Título de Libertad, los que defenderías con todo tu ser? ¿Están en el orden correcto: Dios, religión, libertad, paz, familia?' },
          ],
        },
      ],
    },
  ],
}
