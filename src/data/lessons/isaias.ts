import type { Lesson } from '@/types/doctrine'

export const isaias: Lesson = {
  id: 'isaias',
  moduleId: 'personajes-escrituras',
  title: 'Isaías — El Profeta de Todos los Tiempos',
  subtitle: 'Nefi lo citó más que cualquier otro profeta',
  description: 'Nefi ordenó estudiar a Isaías "porque nadie puede conocer estas cosas a menos que sea instruido en la manera de los judíos." ¿Por qué es tan citado y tan difícil? Un estudio de su contexto, estilo hebreo, y sus profecías cumplidas y pendientes.',
  level: 'AVANZADO',
  icon: '📜',
  duration: 85,
  order: 40,
  status: 'PUBLISHED',
  studyBodyPlain: '',
  originalBodyPlain: '',
  studySections: [
    {
      id: 's1',
      title: '¿Por qué Isaías?',
      intro: { romanNumeral: 'I', title: 'El Profeta más Citado del Canon', paragraphs: ['Nefi, Cristo y Pablo lo usaron más que a cualquier otro'] },
      topics: [
        {
          id: 't1',
          title: 'Omnipresente en el canon',
          blocks: [
            { type: 'paragraph', id: 'p1', text: 'Isaías es el profeta más citado en el Nuevo Testamento después de los Salmos. Cristo comenzó su ministerio público leyendo Isaías 61 en la sinagoga de Nazaret (Lucas 4:18-19). Pablo usó Isaías para construir su teología de la gracia y de la misión a los gentiles. En el Libro de Mormón, Nefi copió 21 capítulos completos de Isaías en sus planchas (1 Nefi 20-21, 2 Nefi 12-24). El Cristo resucitado en 3 Nefi 23:1 ordenó específicamente: "Escudriñad estas cosas diligentemente; porque en verdad os digo que grande importancia tienen estas cosas para vosotros."' },
            { type: 'highlight_verse', id: 'v1', reference: '2 Nefi 25:5', text: 'Y pues yo he criado mis días en la tierra de Jerusalén, y he conocido muchas cosas acerca de las costumbres de los judíos — porque he sido instruido en todos los aprendizajes de mi padre — por tanto puedo escribir como un profeta de los judíos; porque yo, Nefi, escribo en las cosas de mi padre; y también en las cosas de mi hermano Isaías.' },
          ],
        },
      ],
    },
    {
      id: 's2',
      title: 'El Contexto Histórico que Todo lo Cambia',
      intro: { romanNumeral: 'II', title: 'Siglo VIII a.C. — Asiria en las Puertas', paragraphs: ['Isaías profetizó durante 4 reinados'] },
      topics: [
        {
          id: 't2',
          title: 'Quién era Isaías y cuándo vivió',
          blocks: [
            { type: 'paragraph', id: 'p2', text: 'Isaías profetizó en Jerusalén durante los reinados de Uzías, Jotam, Acaz y Ezequías (Isaías 1:1) — aproximadamente 740-700 a.C. Era un hombre de la clase alta, con acceso directo al rey (Isaías 7:3). Su mensaje central era político-teológico: no temas a Asiria ni hagas alianzas con Egipto — confía en Jehová. Este contexto de amenaza política constante explica la urgencia de sus oráculos.' },
            { type: 'key_points', id: 'kp1', title: 'Las claves para entender a Isaías', points: [
              'El hebreo bíblico usa paralelismo poético — el segundo estíquio amplía o contrasta el primero',
              '"Israel" a veces se refiere a el reino del Norte, a veces a todo el pueblo de Dios',
              'Las profecías tienen cumplimiento doble o triple: inmediato, mesiánico, y en los últimos días',
              '"El remanente volverá" (Shear-Jashub, nombre del hijo de Isaías) es el tema central',
            ]},
          ],
        },
      ],
    },
    {
      id: 's3',
      title: 'Las Profecías Mesiánicas',
      intro: { romanNumeral: 'III', title: 'Cristo en cada Página', paragraphs: ['Las más directas del Antiguo Testamento'] },
      topics: [
        {
          id: 't3',
          title: 'El Siervo Sufriente',
          blocks: [
            { type: 'highlight_verse', id: 'v2', reference: 'Isaías 53:4-5', text: 'Ciertamente llevó él nuestras enfermedades, y sufrió nuestros dolores; y nosotros le tuvimos por azotado, por herido de Dios y abatido. Mas él herido fue por nuestras rebeliones, molido por nuestros pecados; el castigo de nuestra paz fue sobre él, y por su llaga fuimos nosotros curados.' },
            { type: 'paragraph', id: 'p3', text: 'Isaías 53 fue escrito 700 años antes de Cristo. Es tan específico en su descripción de la pasión que los eruditos judíos lo llaman "el capítulo prohibido" — porque lo leen y ven a Jesús. Describe: el Siervo despreciado y desechado, varón de dolores, herido por nuestras transgresiones, llevado como cordero al matadero, sin violencia ni engaño en su boca, sepultado con los ricos. Cada detalle tiene cumplimiento verificable en la vida de Cristo.' },
          ],
        },
        {
          id: 't4',
          title: 'Los capítulos mesiánicos clave',
          blocks: [
            { type: 'key_points', id: 'kp2', title: 'Profecías cumplidas en Cristo', points: [
              'Isaías 7:14 — "La virgen concebirá y dará a luz un hijo" (Mateo 1:23)',
              'Isaías 9:6 — "El Príncipe de Paz... su dominio aumentará sin fin" (Lucas 1:32-33)',
              'Isaías 11:1-2 — "Un vástago saldrá de Isaí" — el linaje davídico de Cristo',
              'Isaías 40:3 — "Voz que clama en el desierto" — Juan el Bautista (Mateo 3:3)',
              'Isaías 53 — El Siervo Sufriente (Philip y el eunuco, Hechos 8:32-35)',
              'Isaías 61:1-2 — Jesús lo leyó en Nazaret como su propia descripción de misión',
            ]},
          ],
        },
      ],
    },
    {
      id: 's4',
      title: 'Los Últimos Días en Isaías',
      intro: { romanNumeral: 'IV', title: 'Capítulos 2, 29, 49 — Profecía de la Restauración', paragraphs: ['Lo que Isaías vio sobre nuestro tiempo'] },
      topics: [
        {
          id: 't5',
          title: 'Isaías vio la Restauración',
          blocks: [
            { type: 'highlight_verse', id: 'v3', reference: 'Isaías 29:14', text: 'Por tanto, he aquí que nuevamente excitaré yo la admiración de este pueblo con un prodigio grande y espantoso; porque perecerá la sabiduría de sus sabios, y se desvanecerá la inteligencia de sus entendidos.' },
            { type: 'paragraph', id: 'p4', text: 'Moroni citó Isaías 29:14 a José Smith en 1823 (JS-H 1:19) como una de las profecías a punto de cumplirse. Los versículos precedentes (29:11-12) describen "las palabras del libro sellado" que se dan al letrado y al iletrado — una descripción que encaja perfectamente con Martín Harris llevando la copia de los caracteres del Libro de Mormón al Prof. Anthon, y con la traducción de José Smith.' },
            { type: 'reflection', id: 'r1', prompt: 'Si Isaías pudo ver con tal claridad eventos que ocurrirían 700 años después, ¿qué dice eso sobre la naturaleza de la revelación profética? ¿Qué pasajes de Isaías que has leído antes adquieren nuevo significado para ti ahora?' },
          ],
        },
      ],
    },
  ],
}
