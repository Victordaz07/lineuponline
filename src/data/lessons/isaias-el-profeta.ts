import type { Lesson } from '@/types/doctrine'

export const isaiasElProfeta: Lesson = {
  id: 'isaias-el-profeta',
  moduleId: 'personajes-escrituras',
  title: 'Isaías — El Profeta más Citado',
  subtitle: 'Por qué Cristo, Nefi y Pablo recurrieron a él más que a ningún otro',
  description: 'Isaías es el profeta más citado del canon cristiano y del Libro de Mormón. Su visión del trono celestial, su ministerio bajo cuatro reyes y la crisis asiria que marcó su época hacen de él el punto de partida obligado para entender el canon.',
  level: 'INTERMEDIO',
  icon: '✍️',
  duration: 30,
  order: 4010,
  status: 'PUBLISHED',
  studyBodyPlain: '',
  originalBodyPlain: '',
  submoduleGroup: 'isaias',
  studySections: [
    {
      id: 's1',
      title: 'Por qué Isaías es el profeta más citado',
      intro: {
        romanNumeral: 'I',
        title: 'Omnipresente en el Canon',
        paragraphs: [
          'Ningún profeta del Antiguo Testamento es citado más veces en el Nuevo Testamento, el Libro de Mormón y DyC que Isaías.',
        ],
      },
      topics: [
        {
          id: 't1',
          title: 'El alcance de Isaías en las escrituras',
          blocks: [
            {
              type: 'paragraph',
              text: 'Isaías es el profeta más citado en el Nuevo Testamento después de los Salmos. Cristo comenzó su ministerio público leyendo Isaías 61 en la sinagoga de Nazaret (Lucas 4:18-19). Pablo usó Isaías para construir su teología de la gracia y de la misión a los gentiles. En el Libro de Mormón, Nefi copió 21 capítulos completos de Isaías en sus planchas (1 Nefi 20-21, 2 Nefi 12-24).',
            },
            {
              type: 'highlight_verse',
              reference: '3 Nefi 23:1',
              text: 'Y sucedió que les mandó que escribieran las palabras que había dicho el Padre a Isaías. Y aconteció que después que Jesús les dijo estas palabras, dijo a Ammón: Escudriñad estas cosas diligentemente; porque en verdad os digo que grande importancia tienen estas cosas para vosotros.',
            },
            {
              type: 'key_points',
              title: 'Por qué Isaías es tan citado',
              points: [
                'Más de 400 citas directas o alusiones en el Nuevo Testamento',
                '21 capítulos completos copiados al Libro de Mormón por Nefi',
                'El Cristo resucitado en 3 Nefi ordenó específicamente su estudio',
                'DyC 113 es el comentario de José Smith sobre capítulos clave de Isaías',
                'Su lenguaje poético hebreo contiene capas de significado que se abren con el Espíritu',
              ],
            },
            {
              type: 'doctrine_box',
              title: 'El mandato de Nefi',
              body: 'En 2 Nefi 25:5, Nefi reconoce que Isaías es difícil: "Pues yo, Nefi, no he enseñado muchas cosas acerca de la manera de los judíos; porque sus obras han estado en oscuridad, y sus iniquidades." Pero insiste: el esfuerzo vale la pena porque Isaías escribió sobre cosas que "ningún hombre puede saber a menos que sea instruido en la manera de los judíos." El Libro de Mormón es, en parte, la clave que Dios proveyó para abrir a Isaías.',
            },
          ],
        },
      ],
    },
    {
      id: 's2',
      title: 'La visión del trono — Isaías 6',
      intro: {
        romanNumeral: 'II',
        title: 'Santo, Santo, Santo',
        paragraphs: [
          'El año en que murió el rey Uzías, Isaías vio al Señor sentado sobre un trono alto y sublime.',
        ],
      },
      topics: [
        {
          id: 't2',
          title: 'La vocación profética',
          blocks: [
            {
              type: 'highlight_verse',
              reference: 'Isaías 6:1-3',
              text: 'En el año que murió el rey Uzías vi yo al Señor sentado sobre un trono alto y sublime, y sus faldas llenaban el templo. Por encima de él había serafines... Y el uno al otro daba voces, diciendo: Santo, Santo, Santo, Jehová de los ejércitos; toda la tierra está llena de su gloria.',
            },
            {
              type: 'paragraph',
              text: 'La visión de Isaías 6 no es solo una experiencia mística — es su carta de credenciales profética. En el mundo del Antiguo Testamento, un profeta debía poder decir cuándo y cómo fue llamado. Isaías vio el consejo celestial. Ese mismo escenario se repite en DyC 76 (la visión del trono), en la Primera Visión (el Padre y el Hijo), y en el libro de Apocalipsis. La frase "Santo, Santo, Santo" (trisagio) indica perfección absoluta — la repetición triplicada es el superlativo hebreo máximo.',
            },
            {
              type: 'paragraph',
              text: 'Cuando el carbón encendido toca los labios de Isaías ("tu pecado está perdonado"), estamos viendo la lógica de la expiación: el fuego de la santidad de Dios purifica en vez de destruir al que acepta ser purificado. José Smith vio en esta visión un tipo del sacerdocio: el profeta es comisionado directamente ante el trono, no por delegación burocrática.',
            },
            {
              type: 'reflection',
              prompt: '¿Qué significa que Isaías vio la gloria de Dios antes de ser llamado a profetizar? ¿Qué dice eso sobre el fundamento del testimonio auténtico?',
            },
          ],
        },
      ],
    },
    {
      id: 's3',
      title: 'Su época y el contexto asirio',
      intro: {
        romanNumeral: 'III',
        title: 'Siglo VIII a.C. — Asiria en las Puertas',
        paragraphs: [
          'Isaías profetizó durante cuatro reinados en medio de la mayor crisis política de su tiempo.',
        ],
      },
      topics: [
        {
          id: 't3',
          title: 'Quién era Isaías y cuándo vivió',
          blocks: [
            {
              type: 'paragraph',
              text: 'Isaías profetizó en Jerusalén durante los reinados de Uzías, Jotam, Acaz y Ezequías (Isaías 1:1) — aproximadamente 740-700 a.C. Era un hombre de la clase alta, con acceso directo al rey (Isaías 7:3). Su mensaje central era político-teológico: no temas a Asiria ni hagas alianzas con Egipto — confía en Jehová.',
            },
            {
              type: 'timeline',
              items: [
                { label: '745 a.C.', text: 'Tiglat-Pileser III asciende al trono de Asiria — el imperio más feroz del mundo antiguo', color: 'red' },
                { label: '740 a.C.', text: 'Isaías recibe su visión del trono en el año de la muerte del rey Uzías', color: 'gold' },
                { label: '722 a.C.', text: 'Asiria conquista el reino del Norte (Israel) y deporta a las diez tribus', color: 'red' },
                { label: '701 a.C.', text: 'Senaquerib sitia Jerusalén bajo Ezequías — el ángel del Señor mata a 185.000 asirios en una noche', color: 'blue' },
              ],
            },
            {
              type: 'doctrine_box',
              title: 'El contexto que explica todo',
              body: 'El reino del Norte (Israel, con capital en Samaria) cayó ante Asiria en 722 a.C. y sus habitantes fueron dispersados. Isaías vivió ese colapso. Por eso sus mensajes alternan entre juicio (para un pueblo que rechaza a Dios) y esperanza (para un remanente que volverá). La amenaza asiria no era teórica para Isaías — era la realidad diaria de su ministerio de cuarenta años.',
            },
          ],
        },
        {
          id: 't4',
          title: 'Las claves del lenguaje de Isaías',
          blocks: [
            {
              type: 'key_points',
              title: 'Cómo leer a Isaías',
              points: [
                'El hebreo usa paralelismo poético: el segundo estíquio amplía o contrasta el primero',
                '"Israel" puede referirse al reino del Norte, a toda la nación, o al pueblo de Dios en todos los tiempos',
                'Las profecías tienen cumplimiento doble o triple: inmediato, mesiánico, y en los últimos días',
                '"El remanente volverá" (Shear-Jashub, nombre del hijo de Isaías) es el tema conductor',
                '"Jehová de los ejércitos" (Yahweh Sabaoth) aparece más de 60 veces — Dios como comandante de las huestes celestiales',
              ],
            },
          ],
        },
      ],
    },
    {
      id: 's4',
      title: 'Nefi y el mandato de entender a Isaías',
      intro: {
        romanNumeral: 'IV',
        title: 'Liken All Scriptures',
        paragraphs: [
          'Nefi insistió en que sus descendientes debían estudiar a Isaías y aplicarlo a su propia situación.',
        ],
      },
      topics: [
        {
          id: 't5',
          title: 'El principio de "likar" las escrituras',
          blocks: [
            {
              type: 'highlight_verse',
              reference: '1 Nefi 19:23',
              text: 'Y les hablo estas cosas para el provecho de su alma, pues que pueda persuadirlos a recordar al Señor su Redentor. Por tanto, hablo a todas las casas de Israel, si así fuere que pudieran tener estos escritos. Pues he aquí, Isaías habló muchas cosas que fueron difíciles de entender para muchos de mi pueblo, porque no saben la manera de los profetizar entre los judíos.',
            },
            {
              type: 'paragraph',
              text: 'Nefi introduce el principio de "likar" (del inglés "liken") en 1 Nefi 19:23: aplicar las escrituras a nuestra propia situación. No se trata de leer a Isaías como historia antigua, sino de preguntar: ¿qué me dice este texto a mí, hoy, en mis circunstancias? Nefi cita a Isaías 48-49 en el contexto del viaje de su familia al Nuevo Mundo — los usa como mapa espiritual de la propia experiencia.',
            },
            {
              type: 'steps',
              title: 'Cómo estudiar a Isaías según Nefi',
              steps: [
                'Leer el capítulo en contexto histórico: ¿qué crisis enfrentaba Isaías en su tiempo?',
                'Identificar el cumplimiento mesiánico: ¿qué dice sobre Cristo?',
                'Buscar el cumplimiento en los últimos días: ¿qué dice sobre la Restauración y la segunda venida?',
                '"Likar": aplicarlo a tu vida — ¿qué amenaza de "Asiria" enfrentas tú hoy?',
                'Preguntar al Espíritu: ¿qué capa de significado no he visto todavía?',
              ],
            },
            {
              type: 'central_quote',
              text: 'Porque yo sé que si el hombre guarda los mandamientos de Dios, es prosperado en la tierra.',
              attribution: 'Nefi (1 Nefi 4:14) — citando el principio que sustenta toda la promesa de Isaías',
            },
          ],
        },
      ],
    },
  ],
}
