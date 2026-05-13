import type { Lesson } from '@/types/doctrine'

export const moroniLaPromesa: Lesson = {
  id: 'moroni-la-promesa',
  moduleId: 'personajes-escrituras',
  submoduleGroup: 'moroni-profeta',
  title: 'Moroni — La Promesa',
  subtitle: 'Cómo saber si el Libro de Mormón es verdadero',
  description:
    'Moroni 10:3-5 es la última invitación del último profeta del Libro de Mormón: ora sobre el libro, con corazón sincero y real intención, y el Espíritu Santo te manifestará su verdad. Este mecanismo de confirmación espiritual ha sido probado por millones. Esta lección estudia cómo funciona y por qué es tan poderoso.',
  level: 'INTERMEDIO',
  icon: '🙏',
  duration: 30,
  order: 7712,
  status: 'PUBLISHED',
  studyBodyPlain: '',
  originalBodyPlain: '',
  studySections: [
    {
      id: 's1',
      title: 'El Último Testamento de Moroni',
      intro: {
        romanNumeral: 'I',
        title: 'El Último Testamento de Moroni',
        paragraphs: [
          'Moroni 10 es el capítulo final del Libro de Mormón. Moroni ha terminado de transcribir a los jareditas, ha añadido sus propias instrucciones doctrinales, y ahora cierra el libro con el único testimonio que importa: el suyo propio y la invitación a obtener el tuyo.',
        ],
      },
      topics: [
        {
          id: 't1-1',
          title: 'Moroni 10:3-5 — Los elementos de la promesa',
          blocks: [
            {
              type: 'highlight_verse',
              reference: 'Moroni 10:3-5',
              text: 'He aquí, quisiera exhortaros a que cuando leáis estas cosas, si es sabio en Dios que las leáis, que remembréis cuán misericordioso ha sido el Señor para con los hijos de los hombres... y si pedís con un corazón sincero, con real intención, teniendo fe en Cristo, os manifestará la verdad de ellas por el poder del Espíritu Santo. Y por el poder del Espíritu Santo podréis conocer la verdad de todas las cosas.',
            },
            {
              type: 'paragraph',
              text: 'La promesa de Moroni tiene cuatro condiciones específicas que frecuentemente se citan pero raramente se analizan con cuidado. No es una promesa automática que funcione como un experimento de laboratorio —es una invitación que requiere disposición interior. Cada condición es significativa y su ausencia explica por qué la promesa no siempre produce el resultado esperado de inmediato.',
            },
            {
              type: 'key_points',
              title: 'Las cuatro condiciones de la Promesa de Moroni',
              points: [
                'Remembrar la misericordia de Dios: la disposición de ver la mano de Dios en la historia personal, no solo pedir confirmación en el vacío',
                'Corazón sincero: honestidad interior genuina, sin agenda preestablecida de confirmar o negar',
                'Real intención: disposición real de actuar según la respuesta recibida, sea cual sea',
                'Fe en Cristo: no fe en el libro mismo, sino en la persona de Cristo como mediador de verdad espiritual',
              ],
            },
            {
              type: 'doctrine_box',
              title: 'La distinción entre "corazón sincero" y "real intención"',
              body: '"Corazón sincero" se refiere a la honestidad de la disposición interior —no preguntar con la mente ya decidida. "Real intención" se refiere a la voluntad de actuar: si la respuesta es "sí," ¿estás dispuesto a cambiar tu vida? Muchas personas oran con sinceridad emocional pero sin real intención —quieren saber la verdad del libro pero no están dispuestos a cambiar nada si la respuesta es afirmativa. La promesa requiere ambas: honestidad interior y disposición a actuar.',
            },
          ],
        },
      ],
    },
    {
      id: 's2',
      title: 'El Mecanismo de la Confirmación Espiritual',
      intro: {
        romanNumeral: 'II',
        title: 'El Mecanismo de la Confirmación Espiritual',
        paragraphs: [
          'La confirmación del Espíritu Santo no funciona como la verificación empírica de una hipótesis científica. Tiene su propia epistemología —su propia forma de producir conocimiento— que es tan rigurosa como la científica, pero opera en un registro diferente.',
        ],
      },
      topics: [
        {
          id: 't2-1',
          title: 'Cómo funciona el Espíritu Santo como testigo',
          blocks: [
            {
              type: 'highlight_verse',
              reference: 'DyC 8:2-3',
              text: 'Sí, yo te hablaré en tu mente y en tu corazón, por el Espíritu Santo, el cual vendrá sobre ti y morará en tu corazón. Ahora bien, esto es el espíritu de revelación.',
            },
            {
              type: 'paragraph',
              text: 'DyC 8:2-3 describe la mecánica del Espíritu Santo como testigo: habla en la mente (pensamiento, comprensión) y en el corazón (sentimiento, emoción, paz) simultáneamente. Cuando estos dos canales convergen —cuando el intelecto comprende y el corazón siente paz en el mismo momento—, esa convergencia es la firma del Espíritu. No es solo emoción —la emoción sin comprensión es manipulación. No es solo razonamiento —el razonamiento sin sentimiento es solo análisis. La revelación ocurre cuando ambos se alinean.',
            },
            {
              type: 'paragraph',
              text: 'Alma 32 describe este proceso como un "experimento": plantar la semilla de la palabra en el corazón, nutrir ese experimento, y observar si la semilla crece. La Promesa de Moroni es exactamente ese experimento aplicado al Libro de Mormón. La semilla es leer con real intención; el nutriente es ponderar y orar; el crecimiento es la confirmación del Espíritu. Este no es un proceso instantáneo —Alma describe algo que requiere tiempo, paciencia y esfuerzo continuo.',
            },
            {
              type: 'compare_grid',
              title: 'Epistemología científica vs. espiritual',
              left: {
                label: 'Conocimiento empírico',
                points: [
                  'Observable por instrumentos externos',
                  'Reproducible por cualquier persona con el método correcto',
                  'No requiere disposición interior del observador',
                  'Se verifica mediante falsabilidad (Popper)',
                  'El observador puede ser neutral o incluso hostil',
                ],
              },
              right: {
                label: 'Conocimiento espiritual (Espíritu Santo)',
                points: [
                  'Observable internamente, en la mente y el corazón',
                  'Reproducible por quien cumple las condiciones de disposición interior',
                  'Requiere corazón sincero y real intención como precondiciones',
                  'Se verifica mediante el fruto en la vida del receptor (Mateo 7:20)',
                  'El receptor debe estar abierto a ser cambiado por lo que aprende',
                ],
              },
            },
          ],
        },
      ],
    },
    {
      id: 's3',
      title: 'La Promesa Probada por Millones',
      intro: {
        romanNumeral: 'III',
        title: 'La Promesa Probada por Millones',
        paragraphs: [
          'Desde 1830, decenas de millones de personas en todo el mundo han aplicado la Promesa de Moroni. Sus testimonios constituyen el corpus de evidencia más amplio de confirmación espiritual de cualquier texto religioso en la historia moderna.',
        ],
      },
      topics: [
        {
          id: 't3-1',
          title: 'El experimento que funciona globalmente',
          blocks: [
            {
              type: 'paragraph',
              text: 'La Iglesia SUD tiene aproximadamente 17 millones de miembros en el mundo, provenientes de culturas radicalmente distintas: África, Asia, América Latina, Europa, Oceanía. No comparten idioma, cultura, tradición educativa ni estructura económica. Sin embargo, una fracción significativa de ellos describe experiencias de confirmación del Libro de Mormón que, aunque con palabras diferentes, tienen una estructura fenomenológica similar: paz profunda, comprensión repentina, certeza que no depende de argumentos externos. La convergencia transcultural de este testimonio es en sí misma un dato a considerar.',
            },
            {
              type: 'leader_quote',
              quote: 'El Libro de Mormón es la palabra de Dios. Estoy tan seguro de ello como de cualquier cosa que sé. Ha cambiado las vidas de millones de personas que han tomado en serio la Promesa de Moroni, la han puesto a prueba con honestidad, y han recibido una respuesta que no podían explicar mediante argumentos racionales solamente.',
              name: 'Gordon B. Hinckley',
              role: 'Conferencia General, octubre 2002',
            },
            {
              type: 'doctrine_box',
              title: 'El testimonio como conocimiento, no como sentimiento',
              body: 'En la teología de la Restauración, el testimonio espiritual no es meramente emocional —es epistémico. Moroni 10:5 dice "podréis conocer la verdad de todas las cosas" —no "podréis sentir" sino "podréis conocer." El idioma español usa el mismo verbo para ambos, pero el hebreo y el griego bíblico distinguen entre tipos de conocimiento. El conocimiento mediante el Espíritu Santo es tan real como el conocimiento empírico —opera en un registro diferente, pero produce certeza igualmente legítima.',
            },
            {
              type: 'reflection',
              prompt: '¿Has aplicado la Promesa de Moroni con las cuatro condiciones que especifica —remembranza, corazón sincero, real intención, fe en Cristo? Si no, ¿qué condición es la que más te cuesta cumplir, y por qué? Si sí, ¿cómo describirías lo que experimentaste?',
            },
          ],
        },
      ],
    },
    {
      id: 's4',
      title: 'Lo que la Promesa Exige de Nosotros',
      intro: {
        romanNumeral: 'IV',
        title: 'Lo que la Promesa Exige de Nosotros',
        paragraphs: [
          'La Promesa de Moroni no termina en la experiencia espiritual de confirmación —comienza allí. La confirmación lleva a responsabilidad. Moroni 10:32-33 describe lo que sigue después de recibir el testimonio.',
        ],
      },
      topics: [
        {
          id: 't4-1',
          title: 'El testimonio que transforma',
          blocks: [
            {
              type: 'highlight_verse',
              reference: 'Moroni 10:32-33',
              text: 'Sí, venid a Cristo, y perfeccionaos en él, y absteneos de toda impiedad; y si os abstenéis de toda impiedad y amáis a Dios con toda vuestra fuerza, alma y mente, entonces es suficiente su gracia para que seáis santificados en Cristo. Y si por la gracia de Dios sois perfectos en Cristo, de ningún modo podréis negaros el poder de Dios.',
            },
            {
              type: 'paragraph',
              text: 'El Libro de Mormón termina donde debería terminar: en Cristo. No en Moroni, no en el Libro de Mormón mismo, no en la iglesia —en Cristo. La Promesa de Moroni es un medio, no un fin. El fin es llegar a Cristo, abstenerse de impiedad, y recibir su gracia santificadora. El testimonio del libro es el punto de entrada a una vida de discipleship, no una meta en sí misma. Este cierre es perfectamente coherente con la estructura del libro entero: todo apunta a Cristo.',
            },
            {
              type: 'central_quote',
              text: 'Y por el poder del Espíritu Santo podréis conocer la verdad de todas las cosas.',
              attribution: 'Moroni 10:5',
            },
            {
              type: 'reflection',
              prompt: 'Si el Espíritu Santo puede confirmar la verdad del Libro de Mormón, y si Moroni 10:5 dice que por el mismo poder "podréis conocer la verdad de todas las cosas" —¿qué otras preguntas importantes de tu vida podrías llevar a Dios con la misma disposición de corazón sincero y real intención?',
            },
          ],
        },
      ],
    },
  ],
}
