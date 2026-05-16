import type { Lesson } from '@/types/doctrine'

export const danielYLaRestauracion: Lesson = {
  id: 'daniel-y-la-restauracion',
  moduleId: 'personajes-escrituras',
  title: 'Daniel y la Restauración',
  subtitle: 'El profeta más citado después de Isaías',
  description:
    'Daniel 2:44-45 es la profecía que José Smith citó más directamente para describir el propósito de la Restauración. DyC 116 conecta Daniel 7 con Adán-ondi-Ahmán. Las 70 semanas de Daniel 9 apuntan al ministerio de Cristo. Y por razones que van más allá de la coincidencia, Daniel es el profeta más citado en los primeros documentos de la Iglesia después de Isaías.',
  level: 'AVANZADO',
  icon: '✨',
  duration: 25,
  order: 4414,
  status: 'PUBLISHED',
  submoduleGroup: 'daniel',
  studyBodyPlain: '',
  originalBodyPlain: '',
  studySections: [
    {
      id: 's1',
      title: 'Daniel 2 — La Profecía de la Restauración',
      intro: {
        romanNumeral: 'I',
        title: 'La Piedra que Llenarás la Tierra',
        paragraphs: [
          'Cuando José Smith necesitaba describir lo que estaba haciendo en 1830, no inventó un lenguaje nuevo. Usó el de Daniel.',
        ],
      },
      topics: [
        {
          id: 't1',
          title: 'José Smith y Daniel 2',
          blocks: [
            {
              type: 'highlight_verse',
              reference: 'Daniel 2:44-45',
              text: 'Y en los días de estos reyes el Dios del cielo levantará un reino que no será jamás destruido, ni será el reino dejado a otro pueblo; desmenuzará y consumirá a todos estos reinos, pero él permanecerá para siempre. De la manera que viste que del monte fue cortada una piedra, no con mano, la cual desmenuzó el hierro, el bronce, el barro, la plata y el oro.',
            },
            {
              type: 'paragraph',
              text: 'José Smith enseñó en el "Discurso de la Roca" (agosto de 1843) que la "piedra cortada no con mano" de Daniel 2 era literalmente la Iglesia de Jesucristo de los Santos de los Últimos Días. No una alegoría vaga sobre el crecimiento del reino de Dios — la Iglesia específica restaurada en 1830, destinada a crecer hasta llenar toda la tierra antes de la Segunda Venida. Esta fue la interpretación más explícita y más directa que José Smith dio a cualquier profecía del Antiguo Testamento.',
            },
            {
              type: 'doctrine_box',
              title: 'La Secuencia de la Profecía de Daniel 2',
              body: 'La profecía de Daniel 2 tiene una secuencia precisa que la Restauración toma en serio: (1) durante el período de los reinos de hierro y barro (un Imperio Romano dividido y sus sucesores), (2) el Dios del cielo levantará un reino que comenzará pequeño como una piedra, (3) ese reino destruirá todos los reinos del mundo mediante el crecimiento, no mediante la guerra, (4) y llenará toda la tierra. El orden de 1830 hasta hoy sigue exactamente esta secuencia.',
            },
            {
              type: 'timeline',
              items: [
                { label: '1820', text: 'La Primera Visión — el llamamiento de José Smith', ref: 'JS-Historia 1:17', color: 'gold' },
                { label: '1830', text: 'Organización de la Iglesia — la piedra cortada del monte', ref: 'DyC 65:2', color: 'blue' },
                { label: '1843', text: 'José Smith enseña explícitamente que la piedra = la Iglesia', ref: 'Discurso de la Roca', color: 'green' },
                { label: 'Futuro', text: 'La piedra llena la tierra — la Segunda Venida', ref: 'Daniel 2:35', color: 'red' },
              ],
            },
          ],
        },
      ],
    },
    {
      id: 's2',
      title: 'Daniel 7 — Adán-ondi-Ahmán',
      intro: {
        romanNumeral: 'II',
        title: 'El Gran Consejo Final',
        paragraphs: [
          'DyC 116 es una de las secciones más breves de la Doctrina y Convenios — una sola frase — pero conecta Daniel 7 con un evento futuro de alcance eterno.',
        ],
      },
      topics: [
        {
          id: 't2',
          title: 'El Anciano de Días y la Segunda Venida',
          blocks: [
            {
              type: 'highlight_verse',
              reference: 'Doctrina y Convenios 116:1',
              text: 'Primavera Hill, situado en el condado de Daviess, Estado de Misuri, es el lugar designado para Adán-ondi-Ahmán, como fue llamado por el Señor en la lengua adámica; es también el lugar donde el Anciano de Días se sentará, según lo que dice Daniel el Profeta.',
            },
            {
              type: 'paragraph',
              text: 'La referencia de DyC 116 a "el Anciano de Días" de Daniel el Profeta es directa e inequívoca: el consejo de Daniel 7:9-14 no es solo una visión alegórica del juicio final. Es un evento real, con una ubicación geográfica específica (Missouri), un presidente identificado (Adán/Miguel, DyC 138:38) y un propósito preciso: todos los que han tenido llaves de dispensación las rendirán a Adán, quien las entregará a Cristo justo antes de la Segunda Venida.',
            },
            {
              type: 'deep_dive',
              title: 'Lo que ocurrirá en Adán-ondi-Ahmán',
              paragraphs: [
                'Joseph Fielding Smith enseñó que en Adán-ondi-Ahmán se celebrará un gran consejo al que asistirán los hombres que han tenido llaves del sacerdocio en todas las dispensaciones — Adán, Set, Enoc, Noé, Abraham, Moisés, Pedro, Santiago y Juan, José Smith y otros.',
                'En ese consejo, cada dispensador rendrá cuenta de su mayordomía. Las llaves que les fueron confiadas serán devueltas a Adán, el Anciano de Días. Y Adán las presentará a Cristo, quien recibirá su dominio sobre la tierra antes de su gloriosa Segunda Venida.',
                'Este evento — que Daniel vio en visión como "el Anciano de Días" recibiendo el trono y entregándolo al "Hijo del Hombre" — es la transición entre la era mortal y el milenio. Y su ubicación física en Adán-ondi-Ahmán conecta la geografía de los últimos días con el primer padre de la humanidad.',
              ],
            },
          ],
        },
      ],
    },
    {
      id: 's3',
      title: 'Daniel 9 — Las 70 Semanas y Cristo',
      intro: {
        romanNumeral: 'III',
        title: 'La Cronología más Precisa del Mesías',
        paragraphs: [
          'Las 70 semanas de Daniel 9 constituyen la única profecía del Antiguo Testamento que permite calcular el tiempo aproximado del ministerio del Mesías — y apuntan directamente a Cristo.',
        ],
      },
      topics: [
        {
          id: 't3',
          title: 'Las semanas y el ministerio de Jesús',
          blocks: [
            {
              type: 'highlight_verse',
              reference: 'Daniel 9:26',
              text: 'Y después de las sesenta y dos semanas se quitará la vida al Mesías, mas no por sí; y el pueblo de un príncipe que ha de venir destruirá la ciudad y el santuario; con inundación será su fin, y hasta el fin de la guerra durarán las devastaciones.',
            },
            {
              type: 'paragraph',
              text: 'Las 70 semanas de Daniel (490 años) comenzaron con el decreto de Artajerjes I para restaurar Jerusalén (458/457 a.C.). Las primeras 69 semanas (483 años) llegan al año del bautismo de Cristo — el momento en que fue "ungido" (el significado literal de Mesías) con el Espíritu Santo. Daniel 9:26 predice que el Mesías "será quitado" (ejecutado) al final de ese período. La precisión es asombrosa: una profecía escrita en el siglo VI a.C. que describe el ministerio y la muerte de Cristo con exactitud cronológica.',
            },
            {
              type: 'key_points',
              title: 'Las 70 Semanas en la Restauración',
              points: [
                'Las 70 semanas confirman la divinidad de las profecías de Daniel — y por ende la autenticidad del libro',
                'La Restauración enseña que Cristo cumplió la ley mosaica — incluyendo su función de terminar con los sacrificios (Daniel 9:27)',
                'Las referencias de DyC 45 a eventos de los últimos días recogen el lenguaje de Daniel 9 sobre la "abominación desoladora"',
                'El cumplimiento de las 70 semanas en Cristo es uno de los fundamentos de la teología de la Restauración sobre la apostasía y la necesidad de restauración',
              ],
            },
          ],
        },
      ],
    },
    {
      id: 's4',
      title: 'Por qué Daniel es Fundamental para la Restauración',
      intro: {
        romanNumeral: 'IV',
        title: 'El Profeta de los Últimos Días',
        paragraphs: [
          'Daniel no solo predijo la Restauración — su propio libro fue sellado hasta los últimos días. Que ahora podamos entenderlo es parte del cumplimiento de su profecía.',
        ],
      },
      topics: [
        {
          id: 't4',
          title: 'Daniel sellado hasta el tiempo del fin',
          blocks: [
            {
              type: 'highlight_verse',
              reference: 'Daniel 12:4,9',
              text: 'Pero tú, Daniel, cierra las palabras y sella el libro hasta el tiempo del fin. Muchos correrán de aquí para allá, y la ciencia se aumentará... Y él dijo: Anda, Daniel, pues estas palabras están cerradas y selladas hasta el tiempo del fin.',
            },
            {
              type: 'paragraph',
              text: 'Daniel recibió instrucción de sellar su libro "hasta el tiempo del fin." Esto no significaba que el texto fuera inaccesible — el libro de Daniel es parte del canon hebreo desde el período del Segundo Templo. Significaba que su comprensión plena no estaría disponible hasta los últimos días. La Restauración, con DyC 116 identificando Adán-ondi-Ahmán y DyC 65:2 citando la "piedra que llena la tierra," abre esa comprensión de una manera que ninguna tradición anterior había hecho.',
            },
            {
              type: 'compare_grid',
              left: {
                label: 'Lo que entendían las tradiciones anteriores',
                points: [
                  'Daniel 2: cuatro imperios históricos',
                  'Daniel 7: visión del juicio final genérico',
                  'Daniel 9: cronología mesiánica aproximada',
                  'Daniel 12: resurrección al final de los tiempos',
                ],
              },
              right: {
                label: 'Lo que revela la Restauración',
                points: [
                  'Daniel 2: la piedra es la Iglesia restaurada en 1830 (DyC 65:2)',
                  'Daniel 7: el consejo de Adán-ondi-Ahmán antes de la Segunda Venida (DyC 116)',
                  'Daniel 9: cronología exacta del ministerio y muerte de Cristo',
                  'Daniel 12: resurrección literal y el sellamiento del libro abierto en 1830',
                ],
              },
            },
            {
              type: 'leader_quote',
              quote: 'José Smith enseñó que la piedra de Daniel 2 es esta Iglesia. Eso no es una interpretación — es revelación. Y somos responsables de ayudar a que esa piedra llene la tierra.',
              name: 'Ezra Taft Benson',
              role: 'Decimotercer Presidente de la Iglesia',
            },
            {
              type: 'reflection',
              prompt: '¿Cómo cambia tu comprensión de la misión de la Iglesia saber que fue profetizada en Daniel 2 y que su propósito es literalmente "llenar la tierra"? ¿Qué papel específico juegas tú en el cumplimiento de esa profecía?',
            },
          ],
        },
      ],
    },
  ],
}
