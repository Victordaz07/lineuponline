import type { Lesson } from '@/types/doctrine'

export const cristoLibroDeMormonVsBiblia: Lesson = {
  id: 'cristo-libro-de-mormon-vs-biblia',
  moduleId: 'personajes-escrituras',
  submoduleGroup: 'jesucristo',
  title: 'Cristo: Libro de Mormón vs. Biblia',
  subtitle: 'Dos testamentos, un Salvador',
  author: 'Fuentes: 2 Nefi 25; Alma 7; Mosíah 3; 3 Nefi 11-28; Moroni 10; Lucas 24',
  description:
    'El Libro de Mormón menciona a Cristo más de 2,500 veces. No es un libro sobre América — es un libro sobre Cristo. Esta lección compara lo que cada escritura aporta al retrato del Salvador y por qué la Restauración produce el testimonio más completo de Cristo que existe en ninguna tradición religiosa.',
  level: 'INTERMEDIO',
  icon: '📚',
  duration: 70,
  order: 12,
  status: 'PUBLISHED',
  studyBodyPlain: '',
  originalBodyPlain: '',
  previousLessonId: null,
  nextLessonId: null,
  studySections: [
    {
      id: 's1',
      title: 'El libro más cristocéntrico del mundo',
      intro: {
        romanNumeral: 'I',
        title: 'El libro más cristocéntrico del mundo',
        paragraphs: [
          'El subtítulo del Libro de Mormón no es "Historia de una civilización antigua" ni "Escrituras del pueblo nefiita." Es: "Otro Testamento de Jesucristo." Esa declaración tiene consecuencias estadísticas verificables que la mayoría de los miembros desconoce.',
        ],
      },
      topics: [
        {
          id: 't1-1',
          title: 'Los números del cristocentrismo',
          blocks: [
            {
              type: 'doctrine_box',
              title: '2,500 menciones en 239,000 palabras',
              body: 'El Libro de Mormón menciona a Cristo — por alguno de sus nombres o títulos — más de 2,500 veces en 239,000 palabras. Eso es una mención cada 95 palabras aproximadamente. La Biblia completa (AT + NT) tiene menos densidad cristológica en términos proporcionales. El Antiguo Testamento pasa centenares de capítulos sin mencionar a Cristo directamente. El Libro de Mormón nunca pasa mucho sin que Cristo aparezca — incluso en los libros de historia militar.',
            },
            {
              type: 'highlight_verse',
              text: 'Hablamos de Cristo, nos regocijamos en Cristo, predicamos de Cristo, profetizamos de Cristo, y escribimos según nuestras profecías, para que nuestros hijos sepan a qué fuente deben acudir para la remisión de sus pecados.',
              reference: '2 Nefi 25:26',
            },
            {
              type: 'paragraph',
              text: 'Nefi escribió esas palabras aproximadamente en el año 550 a.C. — 550 años antes de que Cristo naciera. En esa época, Cristo todavía no había vivido en la tierra. Sin embargo, Nefi habla de él en tiempo presente y futuro, como alguien real y conocido. La diferencia con el Antiguo Testamento hebreo es notable: los profetas del AT hablan de un Mesías futuro y velado. Nefi habla del Salvador por nombre, con claridad, explicando la Expiación.',
            },
            {
              type: 'key_points',
              title: 'Nombres y títulos de Cristo en el Libro de Mormón',
              points: [
                'Jesucristo / Cristo — el más frecuente',
                'El Redentor / El Salvador — docenas de veces',
                'El Santo de Israel — tomado del AT, usado con nueva claridad',
                'El Eterno Juez — Moroni 10:34',
                'El Cordero de Dios — 1 Nefi y 3 Nefi',
                'El Buen Pastor — Alma, Helamán',
                'El Padre y el Hijo — Mosíah 15 (la cristología más compleja del LdM)',
              ],
            },
          ],
        },
      ],
    },
    {
      id: 's2',
      title: 'Lo que el LdM añade a la Biblia sobre Cristo',
      intro: {
        romanNumeral: 'II',
        title: 'Lo que el LdM añade a la Biblia sobre Cristo',
        paragraphs: [
          'La pregunta no es cuál escritura es "mejor" — sino qué añade cada una. El Libro de Mormón contiene profecías sobre Cristo más específicas que la mayoría del Antiguo Testamento, y doctrinas sobre la Expiación más explícitas que la mayoría del Nuevo Testamento.',
        ],
      },
      topics: [
        {
          id: 't2-1',
          title: 'Profecías que la Biblia no tiene',
          blocks: [
            {
              type: 'highlight_verse',
              text: 'Y he aquí, vendrá a estar en el mundo y no lo reconocerá el mundo; y vendrá a los suyos, y lo recibirán; y su nombre será Jesucristo, el Hijo de Dios.',
              reference: 'Mosíah 3:5 (profecía del rey Benjamín, ~124 a.C.)',
            },
            {
              type: 'highlight_verse',
              text: 'Y he aquí, vendrá a pasar que el Hijo de Dios vendrá en su gloria; y su gloria será la gloria del Unigénito del Padre, plena de gracia, equidad y verdad, llena de paciencia y misericordia y longanimidad, rápido para oir los clamores de su pueblo y responder a sus oraciones.',
              reference: 'Alma 7:9-10',
            },
            {
              type: 'compare_grid',
              title: 'Profecías mesiánicas: Biblia vs. Libro de Mormón',
              left: {
                label: 'Antiguo Testamento',
                points: [
                  'Nacerá de una virgen — Isaías 7:14 (ambiguo en hebreo: alma/virgen)',
                  'Será de la casa de David — Miqueas 5:2',
                  'Montará un asno — Zacarías 9:9',
                  'Será traicionado por 30 piezas — Zacarías 11:12',
                  'Sus huesos no serán quebrados — Salmo 34:20',
                ],
              },
              right: {
                label: 'Libro de Mormón',
                points: [
                  'Nacerá de María, en Jerusalén (tierra de) — Alma 7:10 — NOMBRE ESPECÍFICO',
                  'Su nombre será Jesucristo, el Hijo de Dios — Mosíah 3:8 — 600 años antes',
                  'Sanará enfermos, resucitará muertos — Mosíah 3:5',
                  'Sufrirá más que cualquier hombre — Mosíah 3:7 — Getsemaní antes de Juan',
                  'Su Expiación abarca el dolor físico, no solo los pecados — Alma 7:11-12',
                ],
              },
            },
            {
              type: 'doctrine_box',
              title: 'Alma 7:11-12 — la doctrina que solo el LdM tiene',
              body: 'Alma 7:11-12 dice que Cristo tomó sobre sí "no solo los pecados de su pueblo, sino también sus dolores y enfermedades; y su pueblo sufre toda clase de dolores... para que sus entrañas se llenen de misericordia... para que sepa cómo socorrer a su pueblo según sus enfermedades." Esta doctrina — que Cristo absorbió también el dolor físico, la enfermedad y el sufrimiento — no aparece con esta claridad en el Nuevo Testamento. Es una aportación doctrinal única del Libro de Mormón.',
            },
          ],
        },
      ],
    },
    {
      id: 's3',
      title: 'La visita de 3 Nefi — lo que la Biblia no registró',
      intro: {
        romanNumeral: 'III',
        title: 'La visita de 3 Nefi — lo que la Biblia no registró',
        paragraphs: [
          'El Nuevo Testamento registra las apariciones de Cristo resucitado en pocas páginas. El Cristo de 3 Nefi tiene dieciocho capítulos. Es el retrato más extenso del Cristo resucitado que existe en ninguna escritura del mundo.',
        ],
      },
      topics: [
        {
          id: 't3-1',
          title: 'En qué se diferencia el Cristo de 3 Nefi',
          blocks: [
            {
              type: 'paragraph',
              text: 'En el Nuevo Testamento, las apariciones post-resurrección son breves, urgentes, focalizadas. Cristo aparece en cuartos cerrados, en caminos, junto a un sepulcro. Siempre hay una comisión — una misión que dar. En 3 Nefi, Cristo llega y se queda. No hay prisa. Repite las bienaventuranzas con variaciones. Sana a los enfermos uno por uno. Ora con la multitud. Llora. Toca a los niños. Organiza la Iglesia. Enseña el sacerdocio. Regresa al día siguiente.',
            },
            {
              type: 'compare_grid',
              title: 'Cristo resucitado: NT vs. 3 Nefi',
              left: {
                label: 'Nuevo Testamento',
                points: [
                  'Aparece en habitaciones cerradas — Lucas 24, Juan 20',
                  'Apariciones breves, focalizadas en la misión',
                  'Se come un pez para probar que es físico — Lucas 24:42',
                  'Comisión a los Once — Mateo 28:18-20',
                  'El Espíritu Santo les es dado soplando — Juan 20:22',
                ],
              },
              right: {
                label: '3 Nefi',
                points: [
                  'Aparece ante 2,500 personas al aire libre',
                  'Permanece todo un día, regresa al siguiente',
                  'Invita a todos a tocarle uno por uno — 3 Nefi 11:15',
                  'Repite el Sermón del Monte con variaciones — 3 Nefi 12-14',
                  'Llora de alegría al bendecir a los niños — 3 Nefi 17:22',
                ],
              },
            },
            {
              type: 'highlight_verse',
              text: 'Y aconteció que Jesús bendijo a cada uno de ellos a medida que le presentaban a sus hijitos. Y después de esto, Jesús lloró, y la multitud lo vio y oyó su testimonio; y él los amaba.',
              reference: '3 Nefi 17:21-22',
            },
          ],
        },
      ],
    },
    {
      id: 's4',
      title: 'Cristo en cada libro del Libro de Mormón',
      intro: {
        romanNumeral: 'IV',
        title: 'Cristo en cada libro del Libro de Mormón',
        paragraphs: [
          'El Libro de Mormón no es una historia con Cristo como personaje secundario. Cristo es el argumento central de cada libro — aunque algunos lo hagan más explícitamente que otros.',
        ],
      },
      topics: [
        {
          id: 't4-1',
          title: 'Un mapa cristológico del Libro de Mormón',
          blocks: [
            {
              type: 'key_points',
              title: 'Cristo en cada libro',
              points: [
                '1 Nefi: El árbol de vida = el amor de Dios = Cristo (1 Nefi 11:21-22). Lehi sueña con Cristo antes de que nazca.',
                'Mosíah: Abinadi el mártir cuyo único mensaje es Cristo (Mosíah 15). Benjamín predica la Expiación a toda la nación.',
                'Alma: La Expiación como centro del plan (Alma 42). La teología de la fe (Alma 32). El Cristo que conoce el dolor (Alma 7:11-12).',
                'Helamán: "Recordad que en Cristo está vuestra roca, y el diablo no tiene poder sobre vosotros" (Helamán 5:12). La roca es Cristo.',
                '3 Nefi: La visita física. El mayor encuentro entre Cristo y humanos que registra ninguna escritura.',
                'Éter: La fe de los que no han visto (Éter 12:6). Las 16 piedras y la mano de Cristo — la primera vez que alguien lo toca antes de la encarnación.',
                'Moroni: "La caridad es el amor puro de Cristo" (Moroni 7:47). El libro termina con una invitación directa a Cristo (Moroni 10:32-33).',
              ],
            },
            {
              type: 'highlight_verse',
              text: 'Y el ángel me dijo: Mira al Cordero de Dios, sí, al Padre Eterno. ¿Sabes el significado del árbol? Y le dije: Sí, que es el amor de Dios, que se derrama libremente en los corazones de los hijos de los hombres.',
              reference: '1 Nefi 11:21-22',
            },
          ],
        },
      ],
    },
    {
      id: 's5',
      title: 'Diferencias doctrinales — Biblia vs. Restauración',
      intro: {
        romanNumeral: 'V',
        title: 'Diferencias doctrinales — Biblia vs. Restauración',
        paragraphs: [
          'La Restauración no contradice la Biblia sobre Cristo — la amplía. Pero hay puntos donde la interpretación del cristianismo tradicional y la doctrina de la Restauración difieren significativamente. Conviene conocerlos con precisión.',
        ],
      },
      topics: [
        {
          id: 't5-1',
          title: 'Cinco diferencias doctrinales clave',
          blocks: [
            {
              type: 'doctrine_box',
              title: '1. La naturaleza de Dios — Nicea vs. la Restauración',
              body: 'El Concilio de Nicea (325 d.C.) declaró que el Padre, el Hijo y el Espíritu Santo son "una sola sustancia" (homoousios) — el Dios trino de la doctrina cristiana tradicional. La Restauración enseña lo que Pedro vio en Hechos 7:55-56: Esteban "mirando al cielo, vio la gloria de Dios, y a Jesús que estaba a la diestra de Dios" — dos seres distintos. DyC 130:22 es explícito: "El Padre tiene un cuerpo de carne y huesos tan tangible como el del hombre; el Hijo también." No es el mismo Dios con tres máscaras — son tres individuos distintos.',
            },
            {
              type: 'doctrine_box',
              title: '2. La Expiación — solo el Calvario vs. Getsemaní + Calvario',
              body: 'El cristianismo tradicional centró el sufrimiento expiatorio en la crucifixión. La Restauración, con DyC 19:16-18 y el Libro de Mormón (Mosíah 3:7: "sufrirá más que lo que cualquier hombre puede sufrir"), pone el mayor peso en Getsemaní. El Calvario fue la muerte física — Getsemaní fue el sufrimiento por los pecados de la humanidad.',
            },
            {
              type: 'doctrine_box',
              title: '3. El dolor absorbido — solo pecados vs. todo sufrimiento',
              body: 'La mayoría de las tradiciones cristianas enseña que Cristo murió por los pecados. Alma 7:11-12 enseña que Cristo tomó también los dolores, las enfermedades, las aflicciones — no solo los pecados, sino la condición humana completa. Esto amplía el alcance de la Expiación más allá de lo que el Nuevo Testamento expresa explícitamente.',
            },
            {
              type: 'doctrine_box',
              title: '4. La resurrección corporal — afirmada con mayor claridad',
              body: 'Lucas 24:39: "palpad y ved; que el espíritu no tiene carne ni huesos, como veis que yo tengo." Muchas tradiciones christianas hacen de la resurrección algo espiritual o metafórico. La Restauración insiste en la literalidad física: el cuerpo resucitado de Cristo tiene "carne y huesos" — y el cuerpo resucitado de los seres humanos también será literal (Alma 11:43-44). 3 Nefi 11:15 lo confirma: cada persona tocó al Cristo físicamente resucitado.',
            },
            {
              type: 'doctrine_box',
              title: '5. La misión postmortal — lo que la Biblia menciona brevemente',
              body: '1 Pedro 3:18-20 menciona que Cristo "fue y predicó a los espíritus en prisión." DyC 138 (la Visión de la Redención de los Muertos) expande ese versículo en una revelación completa sobre la misión de Cristo al mundo de los espíritus. La misericordia de Dios alcanza a los que nunca oyeron el evangelio — esta es una contribución doctrinal de la Restauración sin equivalente en el cristianismo tradicional.',
            },
          ],
        },
      ],
    },
    {
      id: 's6',
      title: 'La promesa de Moroni — el Cristo que puedes conocer',
      intro: {
        romanNumeral: 'VI',
        title: 'La promesa de Moroni — el Cristo que puedes conocer',
        paragraphs: [
          'El Libro de Mormón termina con una invitación — no con una conclusión. Moroni, el último testigo, después de haber visto la destrucción de toda su civilización, escribe su testimonio final y hace una promesa que tiene dos siglos de respuestas documentadas.',
        ],
      },
      topics: [
        {
          id: 't6-1',
          title: 'Moroni 10 — el testimonio final',
          blocks: [
            {
              type: 'highlight_verse',
              text: 'Y cuando recibáis estas cosas, os exhorto a que preguntéis a Dios, el Padre Eterno, en el nombre de Cristo, si estas cosas no son verdaderas; y si pedís con un corazón sincero, con verdadera intención, teniendo fe en Cristo, él os manifestará la verdad de ello por el poder del Espíritu Santo.',
              reference: 'Moroni 10:4',
            },
            {
              type: 'highlight_verse',
              text: 'Y ahora yo os encomiendo a Dios — a Aquel que es eterno. Sí, a ese gran Jehová cuya obra eterna es la inmortalidad y la vida eterna de los hombres. Amén.',
              reference: 'Moroni 10:34',
            },
            {
              type: 'deep_dive',
              badge: 'La promesa',
              title: 'Lo que Moroni 10:4 garantiza',
              paragraphs: [
                'La promesa de Moroni no es solo "recibirás un sentimiento de paz sobre el Libro de Mormón." Es un acceso al mismo método de conocimiento que usaron los profetas: preguntar a Dios directamente y recibir respuesta del Espíritu Santo.',
                'Esto significa que cualquier persona, en cualquier lugar del mundo, puede tener el mismo tipo de experiencia que tuvo José Smith. No es conocimiento de segunda mano — es conocimiento de primera mano. La Restauración democratizó el acceso a la revelación personal.',
                'Y el centro de esa revelación, invariablemente, es Jesucristo. El Espíritu Santo da testimonio del Padre y del Hijo (Juan 15:26). El Libro de Mormón es un testamento de Cristo. La promesa de Moroni no lleva solo al libro — lleva al Salvador.',
              ],
            },
            {
              type: 'highlight_verse',
              text: 'Y si venís a Cristo, y os perfeccionáis en él, y renunciáis a toda impiedad; y si amáis a Dios con toda vuestra fuerza, alma y mente, entonces su gracia os es suficiente, para que por su gracia seáis perfectos en Cristo.',
              reference: 'Moroni 10:32',
            },
            {
              type: 'quiz',
              quizType: 'true_false',
              question: 'Según Alma 7:11-12, la Expiación de Cristo cubrió únicamente los pecados — no el dolor físico ni las enfermedades.',
              answer: false,
              explanation: 'Incorrecto. Alma 7:11-12 enseña explícitamente que Cristo tomó sobre sí "no solo los pecados de su pueblo, sino también sus dolores y enfermedades." Esta doctrina — que la Expiación abarca el dolor y el sufrimiento físico además de los pecados — es una contribución doctrinal única del Libro de Mormón.',
            },
            {
              type: 'reflection',
              prompt: '¿Qué aporta el Libro de Mormón a tu comprensión de Cristo que la Biblia sola no te daba? ¿Y cuál de las diferencias doctrinales entre la Restauración y el cristianismo tradicional sobre Cristo encuentras más significativa para tu fe personal?',
            },
          ],
        },
      ],
    },
  ],
}
