import type { Lesson } from '@/types/doctrine'

export const elLibroDeMormon: Lesson = {
  id: 'libro-de-mormon-reliquia',
  moduleId: 'historia-restauracion',
  title: 'El Libro de Mormón — Piedra Angular',
  subtitle: 'Otro testamento de Jesucristo',
  author: 'Fuentes principales: Introducción del Libro de Mormón, Benson, Holland',
  description:
    'El Libro de Mormón es el mayor testamento físico de la veracidad del profeta José Smith y de la Restauración. Su origen, su contenido central, y por qué Ezra Taft Benson dijo que podemos acercarnos más a Dios a través de sus páginas que por cualquier otro libro.',
  level: 'BÁSICO',
  icon: '📜',
  duration: 65,
  order: 3,
  status: 'PUBLISHED',
  studyBodyPlain: '',
  originalBodyPlain: '',
  previousLessonId: 'gran-apostasia',
  nextLessonId: null,
  studySections: [
    {
      id: 's1',
      title: 'Cómo Llegó el Libro',
      intro: {
        romanNumeral: 'I',
        title: 'Cómo Llegó el Libro',
        paragraphs: [
          'El Libro de Mormón surgió de uno de los eventos más extraordinarios y verificables de la historia religiosa moderna: un joven de 21 años sin educación formal dictó 531 páginas de texto coherente, históricamente complejo, y teológicamente profundo en aproximadamente 65 días de trabajo. Entender cómo llegó es el primer paso para entender por qué importa.',
        ],
      },
      topics: [
        {
          id: 't1',
          title: 'Del Monte Cumorah a las Imprentas de Palmyra',
          blocks: [
            {
              type: 'timeline',
              items: [
                { label: '421 d.C.', text: 'Moroni, último profeta nefita, sella las planchas de oro y las entierra en el monte Cumorah, en la actual Nueva York.', color: 'gold' },
                { label: '1823', text: 'El ángel Moroni se aparece a José Smith y le revela la existencia de las planchas. José las ve pero no las puede tomar aún.', ref: 'JS-H 1:30–34', color: 'blue' },
                { label: '1827', text: 'José recibe físicamente las planchas. Inicia la traducción con la asistencia del Urim y Tumim.', color: 'gold' },
                { label: '1829', text: 'Oliver Cowdery se convierte en escriba principal. En 65 días de trabajo activo se completa la traducción de 531 páginas.', color: 'blue' },
                { label: '1830', text: 'Se publican 5,000 copias del Libro de Mormón en Palmyra, Nueva York. La Iglesia se organiza el 6 de abril.', color: 'green' },
              ],
            },
            {
              type: 'highlight_verse',
              text: 'Y de acuerdo con las cosas que estaban grabadas en las planchas, así fue la traducción, por mi Espíritu.',
              reference: 'Doctrina y Convenios 20:8',
            },
            {
              type: 'media_slot',
              kind: 'image',
              src: undefined,
              caption: 'El monte Cumorah en Nueva York — donde Moroni depositó las planchas en el año 421 d.C.',
              contextCard: { year: '421 d.C. → 1830', place: 'Cumorah, Nueva York', label: 'El Libro de Mormón' },
            },
            {
              type: 'paragraph',
              text: 'El proceso de traducción no era como traducir del latín al español. José Smith no sabía egipcio reformado. Lo que hizo fue recibir inspiración divina sobre el significado del texto, y Oliver Cowdery lo escribió. Emma Smith, que sirvió como escriba en algunos pasajes, recordó décadas después: "José jamás tenía un manuscrito ni libro para referencia, y si salía un momento regresaba y continuaba exactamente donde se había quedado."',
              blockId: 'bm-s1-p-0',
            },
          ],
        },
      ],
    },
    {
      id: 's2',
      title: 'Los Testigos',
      intro: {
        romanNumeral: 'II',
        title: 'Los Testigos',
        paragraphs: [
          'Una de las afirmaciones más inusuales del Libro de Mormón es que múltiples testigos, además de José Smith, vieron las planchas físicamente. El número y la naturaleza de esos testimonios es históricamente significativo — y resistió décadas de presión para ser retractado.',
        ],
      },
      topics: [
        {
          id: 't2',
          title: 'Once Hombres que Nunca Retractaron',
          blocks: [
            {
              type: 'doctrine_box',
              title: 'Tres Testigos vs. Ocho Testigos — dos niveles de evidencia',
              body: 'Los Tres Testigos (Oliver Cowdery, David Whitmer, Martin Harris) declararon haber visto las planchas con un ángel y escuchado la voz de Dios. Los Ocho Testigos (los hermanos Whitmer y los hermanos Smith) declararon haber manejado físicamente las planchas, haberlas volteado, y haber visto los grabados. Los dos grupos proveen evidencia de niveles distintos: visión angélica y evidencia táctil. Ninguno de los once, a pesar de graves fricciones con José Smith en algunos casos, retiró jamás su testimonio.',
            },
            {
              type: 'deep_dive',
              badge: 'Análisis histórico',
              title: 'Por qué los testimonios importan como evidencia',
              paragraphs: [
                'David Whitmer y Oliver Cowdery se distanciaron de José Smith y de la Iglesia durante años. Martin Harris llegó a unirse a al menos cuatro movimientos religiosos diferentes después de su testimonio. Estos no eran hombres ciegos de lealtad. Tenían motivos personales, diferencias teológicas, y años de separación institucional.',
                'Sin embargo, cuando se les preguntaba sobre las planchas — incluso décadas después, incluso cuando ya no formaban parte de la Iglesia — insistían en la realidad de lo que habían visto. Whitmer, en 1887, poco antes de su muerte, publicó una declaración pública afirmando su testimonio: "Es verdad todo lo que he declarado sobre el ángel y las planchas."',
                'La prueba de once testigos independientes, en ausencia de motivación para mentir y con motivación para retractarse, es evidencia histórica que cualquier escéptico honesto debe confrontar.',
              ],
            },
            {
              type: 'leader_quote',
              quote: 'Declaro que tengo un testimonio absolutamente indestructible de la verdad del Libro de Mormón. He buscado por años cualquier razón académica, histórica, o lingüística para dudar de él — y en cambio, he encontrado evidencia acumulada de su autenticidad.',
              name: 'Jeffrey R. Holland',
              role: '"Safety for the Soul", Conferencia General, octubre 2009 (trad.)',
            },
          ],
        },
      ],
    },
    {
      id: 's3',
      title: 'El Contenido Doctrinal Central',
      intro: {
        romanNumeral: 'III',
        title: 'El Contenido Doctrinal Central',
        paragraphs: [
          'El subtítulo del Libro de Mormón lo dice todo: "Otro Testamento de Jesucristo." No es un libro de arqueología ni de historia americana. Es un testamento de Cristo — su misión, su expiación, su ministerio entre otras naciones.',
        ],
      },
      topics: [
        {
          id: 't3',
          title: 'Cristo en el Libro de Mormón',
          blocks: [
            {
              type: 'highlight_verse',
              text: 'Hablamos de Cristo, nos regocijamos en Cristo, predicamos de Cristo, profetizamos de Cristo, y escribimos según nuestras profecías, para que nuestros hijos puedan saber a qué fuente recurrir para la remisión de sus pecados.',
              reference: '2 Nefi 25:26',
            },
            {
              type: 'highlight_verse',
              text: 'Y él irá a sufrir dolores y aflicciones y tentaciones de toda clase; y esto para que se cumpla la palabra que dice que tomará sobre sí los dolores y las enfermedades de su pueblo.',
              reference: 'Alma 7:11–12',
            },
            {
              type: 'compare_grid',
              left: {
                title: 'La Biblia testifica',
                items: [
                  'Cristo nació de una virgen en Belén',
                  'Su ministerio fue en Judea y Galilea',
                  'Murió y resucitó en Jerusalén',
                  'Sus apóstoles fundaron la iglesia original',
                  'Vendrá de nuevo en gloria',
                ],
              },
              right: {
                title: 'El Libro de Mormón agrega',
                items: [
                  'Profetas en América predijeron su nacimiento con precisión (3 Nefi 1)',
                  'Visitó a los nefitas después de su resurrección (3 Nefi 11)',
                  'La expiación cubrió también el dolor y la enfermedad — no solo el pecado (Alma 7:11-12)',
                  'El evangelio es el mismo en todas las naciones (3 Nefi 27:13-21)',
                  'Su visita a los nefitas prueba que "otras ovejas tengo que no son de este redil" (Juan 10:16)',
                ],
              },
            },
            {
              type: 'leader_quote',
              quote: 'El Libro de Mormón lleva al hombre más cerca de Dios mediante la observancia de sus preceptos que cualquier otro libro.',
              name: 'Ezra Taft Benson',
              role: '"The Keystone of Our Religion", Conferencia General, octubre 1986 (trad.)',
            },
          ],
        },
      ],
    },
    {
      id: 's4',
      title: 'La Fe Como Experimento',
      intro: {
        romanNumeral: 'IV',
        title: 'La Fe Como Experimento',
        paragraphs: [
          'Alma 32 contiene una de las enseñanzas más sofisticadas sobre la epistemología de la fe que existe en cualquier tradición religiosa. Alma no pide fe ciega — pide un experimento.',
        ],
      },
      topics: [
        {
          id: 't4',
          title: 'El Experimento de Alma',
          blocks: [
            {
              type: 'highlight_verse',
              text: 'Pero he aquí, si despertáis y agudizáis vuestras facultades, siquiera hasta el punto de experimentar con mis palabras, y ejercéis un poquito de fe, sí, siquiera si no podéis hacer más que desear creer, dejad que este deseo obre en vosotros.',
              reference: 'Alma 32:27',
            },
            {
              type: 'steps',
              title: 'El experimento de fe según Alma 32 — 5 pasos',
              steps: [
                'DESEAR — No necesitas certeza para empezar. Solo necesitas "deseo de creer." Eso es suficiente para plantar la semilla.',
                'PLANTAR — Tomar una palabra de las escrituras o una práctica del evangelio y darle "lugar en tu corazón" — comenzar a actuar como si fuera verdad.',
                'NUTRIR — Seguir actuando: orar, estudiar, aplicar. La semilla necesita riego constante para que crezca.',
                'SENTIR — Observar si "comienza a hincharse dentro de tu pecho" — si la práctica produce algo discerniblemente diferente en tu interior.',
                'SABER — A medida que el árbol crece y produce fruto real, puedes decir que sabes por experiencia — no por fe ciega sino por evidencia acumulada.',
              ],
            },
            {
              type: 'doctrine_box',
              title: 'Fe no es lo opuesto del conocimiento — es el camino hacia él',
              body: 'Alma 32:18 aclara: "Si un hombre sabe una cosa, no tiene razón de creerla, porque ya la sabe." La fe opera en el espacio antes del conocimiento pleno. No es irracional — es racional bajo condiciones de incertidumbre. El experimento de Alma es genuinamente empírico: planta, observa, evalúa el resultado.',
            },
          ],
        },
      ],
    },
    {
      id: 's5',
      title: 'La Promesa de Moroni',
      intro: {
        romanNumeral: 'V',
        title: 'La Promesa de Moroni',
        paragraphs: [
          'El último capítulo del Libro de Mormón contiene una de las promesas más audaces de la literatura religiosa: si lees este libro y preguntas a Dios con sinceridad real, Él te responderá.',
        ],
      },
      topics: [
        {
          id: 't5',
          title: 'Tres Condiciones, Una Promesa',
          blocks: [
            {
              type: 'highlight_verse',
              text: 'Y cuando recibáis estas cosas, quisiera exhortaros a que preguntéis a Dios el Eterno Padre, en el nombre de Cristo, si no son verdaderas estas cosas; y si pedís con un corazón sincero, con verdadera intención, teniendo fe en Cristo, él os manifestará la verdad de ello por el poder del Espíritu Santo.',
              reference: 'Moroni 10:4–5',
            },
            {
              type: 'key_points',
              title: 'Las tres condiciones de Moroni 10:4',
              points: [
                'Corazón sincero — no curiosidad intelectual sino disposición real a cambiar si la respuesta es sí',
                'Verdadera intención — la pregunta es genuina, no para probar que el libro es falso ni para confirmar lo que ya crees',
                'Fe en Cristo — creer que Dios existe y que puede responder preguntas — que la comunicación divina es posible',
              ],
            },
            {
              type: 'paragraph',
              text: 'Moroni escribió estas palabras en soledad. Era el último sobreviviente de su civilización. No tenía nada que ganar con una mentira — nadie lo iba a leer en vida. Lo que escribió fue la convicción más profunda de alguien que había visto el fin de todo lo que amaba y aun así creía que el libro que guardaba cambiaría el mundo.',
              blockId: 'bm-s5-p-0',
            },
            {
              type: 'leader_quote',
              quote: 'Cada persona que ha vivido sobre la tierra merece saber si el Libro de Mormón es verdadero. Dios promete responder esa pregunta.',
              name: 'Russell M. Nelson',
              role: '"El Libro de Mormón: Lo que mi vida es", Conferencia General, octubre 2017 (trad.)',
            },
          ],
        },
      ],
    },
    {
      id: 's6',
      title: 'El Libro en Tu Vida',
      intro: {
        romanNumeral: 'VI',
        title: 'El Libro en Tu Vida',
        paragraphs: [
          'El presidente Benson enseñó que la Iglesia en su conjunto está "bajo condenación" cuando no hace uso pleno del Libro de Mormón. No como decoración en el estante, sino como herramienta de transformación espiritual diaria.',
        ],
      },
      topics: [
        {
          id: 't6',
          title: 'Reflexión y Verificación',
          blocks: [
            {
              type: 'reflection',
              prompt: '¿Has cumplido la promesa de Moroni 10:4 con sinceridad real — no como ejercicio religioso sino como pregunta genuina? Si ya tienes un testimonio, ¿cuándo fue la última vez que lo renovaste estudiando el Libro de Mormón con la misma apertura que la primera vez?',
            },
            {
              type: 'quiz', id: 'q-1', question: { kind: 'fill_blank',
                prompt: 'Los Tres Testigos declararon haber visto las planchas con un ___ y haber escuchado la voz de Dios confirmando la autenticidad del libro.',
                options: ['profeta', 'ángel', 'espíritu', 'sueño'],
                correctIndex: 1,
                explanation: 'Oliver Cowdery, David Whitmer, y Martin Harris declararon que el ángel Moroni les mostró las planchas y que la voz de Dios confirmó su autenticidad. Ninguno retractó este testimonio.',
              },
            },
            {
              type: 'quiz', id: 'q-2', question: {
                kind: 'fill_blank',
                prompt: 'Según Alma 32:27, para iniciar el experimento de fe solo necesitas tener "deseo de ___" — ese deseo es suficiente para comenzar.',
                options: ['saber', 'creer', 'ver', 'entender'],
                correctIndex: 1,
                explanation: 'Alma 32:27 enseña: "siquiera si no podéis hacer más que desear creer, dejad que este deseo obre en vosotros." El punto de partida no es certeza sino deseo genuino.',
              },
            },
            {
              type: 'quiz', id: 'q-3', question: {
                kind: 'fill_blank',
                prompt: 'Moroni 10:4 identifica tres condiciones para recibir la promesa: corazón sincero, verdadera intención, y ___ en Cristo.',
                options: ['obediencia', 'fe', 'conocimiento', 'bautismo'],
                correctIndex: 1,
                explanation: 'Las tres condiciones son: corazón sincero, verdadera intención, y fe en Cristo. La fe en Cristo implica creer que Dios existe y que puede responder preguntas a través del Espíritu Santo.',
              },
            },
          ],
        },
      ],
    },
  ],
}
