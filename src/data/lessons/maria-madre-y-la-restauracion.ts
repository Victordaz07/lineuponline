import type { Lesson } from '@/types/doctrine'

export const mariaMadreYLaRestauracion: Lesson = {
  id: 'maria-madre-y-la-restauracion',
  moduleId: 'personajes-escrituras',
  submoduleGroup: 'maria-madre',
  title: 'María y la Restauración',
  subtitle: 'La más mencionada en el Libro de Mormón',
  author: 'Fuentes: 1 Nefi 11:13-21; Mosíah 3:8; Alma 7:10; Éter 3:14',
  description:
    'María es la única mujer mencionada por su propio nombre en el Libro de Mormón fuera de citas del Antiguo Testamento. Tres profetas del hemisferio occidental — Nefi, Benjamín, y Alma — mencionaron su nombre siglos antes de que ella naciera. La Restauración añade dimensiones a nuestra comprensión de María que ni la tradición católica ni la protestante incluyen: no es adorada como mediadora, pero es profundamente honrada como "la más santa de todas las mujeres" y como el eslabón físico indispensable de la Encarnación.',
  level: 'AVANZADO',
  icon: '✨',
  duration: 25,
  order: 6414,
  status: 'PUBLISHED',
  studyBodyPlain: '',
  originalBodyPlain: '',
  previousLessonId: 'maria-madre-en-la-cruz',
  nextLessonId: null,
  studySections: [
    {
      id: 's1',
      title: 'María en el Libro de Mormón — 600 años antes',
      intro: {
        romanNumeral: 'I',
        title: '1 Nefi 11:13-21 — Nefi la Vio en Visión',
        paragraphs: [
          'En el año 600 antes de Cristo, mientras Jerusalén aún existía, un profeta en el desierto de Arabia vio en visión a una joven virgen que llevaría en sus brazos al Hijo de Dios.',
        ],
      },
      topics: [
        {
          id: 't1-1',
          title: 'La visión de Nefi — la virgen y el Cordero',
          blocks: [
            {
              type: 'highlight_verse',
              reference: '1 Nefi 11:13-15',
              text: 'Y aconteció que vi a una virgen, y era sumamente hermosa y blanca. Y sucedió que yo dije al ángel: ¿Qué significado tiene la virgen que viste? Y él me dijo: ¿Sabes tú la condescendencia de Dios? Y yo le dije: Sé que él ama a sus hijos; sin embargo, no sé el significado de todas las cosas.',
            },
            {
              type: 'paragraph',
              text: 'La pregunta del ángel a Nefi — "¿Sabes tú la condescendencia de Dios?" — es la pregunta teológica central alrededor de la cual gira toda la cristología del Libro de Mormón. La "condescendencia" (del latín "con-descendere" — descender juntos) es el acto por el cual el Ser más exaltado del universo eligió entrar en la condición más humilde de la existencia: nacer de una mujer mortal, crecer, sufrir, y morir. La virgen que Nefi ve es la persona específica a través de quien ese descenso se hizo posible.',
            },
            {
              type: 'highlight_verse',
              reference: '1 Nefi 11:18-21',
              text: 'Y él me dijo: ¡He aquí, la virgen que ves es la madre del Hijo de Dios, según la carne! Y aconteció que vi a la virgen nuevamente, llevando a un niño en sus brazos. Y el ángel me dijo: ¡Mira al Cordero de Dios, sí, incluso al Eterno Padre! ¿Puedes tú contemplar la condescendencia de Dios? Y yo le dije: Sí, yo creo que el Hijo de Dios descendió de los cielos, y vi en él el gozo del mundo.',
            },
            {
              type: 'paragraph',
              text: 'La descripción de Nefi de la virgen como "sumamente hermosa y blanca" ha generado debate sobre si es una descripción étnica o espiritual. El contexto sugiere que es espiritual: en el simbolismo del Libro de Mormón, "blanco" está asociado con pureza (1 Nefi 8:11; 2 Nefi 9:14). Nefi no está describiendo la apariencia racial de María — está describiendo su estado espiritual. La virgen que vio era "sumamente pura." El ángel confirma esto al declararla "la madre del Hijo de Dios, según la carne" — un título que implica una preparación espiritual específica.',
            },
          ],
        },
        {
          id: 't1-2',
          title: 'Las tres menciones de María en el Libro de Mormón',
          blocks: [
            {
              type: 'highlight_verse',
              reference: 'Mosíah 3:8',
              text: 'Y he aquí que vendrá entre los hijos de los hombres, y se llamará Jesucristo, el Hijo de Dios, el Padre del cielo y de la tierra, el Creador de todas las cosas desde el principio; y su madre se llamará María.',
            },
            {
              type: 'highlight_verse',
              reference: 'Alma 7:10',
              text: 'Y he aquí, él nacerá de María, en Jerusalén, que es la tierra de nuestros padres, siendo ella una virgen, un vaso precioso y escogido, que será sometido al yugo, conforme a la carne.',
            },
            {
              type: 'paragraph',
              text: 'Las tres menciones explícitas de María por nombre en el Libro de Mormón son: 1 Nefi 11:18 (identificación de la virgen de la visión), Mosíah 3:8 (el ángel que habla al rey Benjamín), y Alma 7:10 (Alma predicando en Gideon). Cada una proviene de una fuente diferente — un profeta migrante, un ángel, y un sumo sacerdote — en contextos históricos distintos, separados por cientos de años. Tres testigos independientes que la nombran por nombre antes de que naciera.',
            },
            {
              type: 'compare_grid',
              title: 'María en el Antiguo Mundo vs. María en el Nuevo Mundo',
              left: {
                label: 'Testimonios del Antiguo Mundo (Biblia)',
                points: [
                  'Lucas 1 — Gabriel la anuncia y ella consiente',
                  'Marcos 3 — La familia que no entendía',
                  'Juan 2 — "Haced todo lo que él os dijere"',
                  'Juan 19 — Al pie de la cruz',
                  'Hechos 1:14 — En el aposento alto orando',
                ],
              },
              right: {
                label: 'Testimonios del Nuevo Mundo (Libro de Mormón)',
                points: [
                  '1 Nefi 11 — Nefi la ve en visión, 600 a.C.',
                  'Mosíah 3:8 — El ángel al rey Benjamín da su nombre',
                  'Alma 7:10 — Alma la llama "vaso precioso y escogido"',
                  'Ningún otro nombre femenino aparece solo en BdM',
                  'Tres fuentes independientes de tres siglos distintos',
                ],
              },
            },
          ],
        },
      ],
    },
    {
      id: 's2',
      title: 'Alma 7:10 — "Un vaso precioso y escogido"',
      intro: {
        romanNumeral: 'II',
        title: 'Los Epítetos de María en el Libro de Mormón',
        paragraphs: [
          'Alma 7:10 contiene la descripción más rica de María en todo el Libro de Mormón: "un vaso precioso y escogido." Esta frase merece atención detallada.',
        ],
      },
      topics: [
        {
          id: 't2-1',
          title: '"Vaso precioso y escogido" — análisis del título',
          blocks: [
            {
              type: 'paragraph',
              text: 'El título de Alma 7:10 — "un vaso precioso y escogido" — tiene resonancia bíblica directa. Pablo usa la metáfora del "vaso" para describir instrumentos elegidos de Dios (2 Corintios 4:7; 2 Timoteo 2:20-21). Ananías recibe la instrucción divina sobre Pablo: "instrumento escogido me es éste" (Hechos 9:15). La imagen del vaso implica un recipiente diseñado para contener algo que lo trasciende — el vaso no es el tesoro, pero es indispensable para portar el tesoro.',
            },
            {
              type: 'paragraph',
              text: 'Que María sea llamada "vaso precioso y escogido" en el año aproximado 83 a.C. — cuatro generaciones antes del nacimiento de Cristo — es una indicación de que su elección fue anterior a su existencia mortal. La tradición de la Restauración enseña que los seres espirituales fueron elegidos y preparados en la preexistencia para sus misiones terrenales (Abraham 3:22-23). María no fue elegida al azar en el año 5 a.C. — su selección fue anterior a la creación del mundo.',
            },
            {
              type: 'doctrine_box',
              title: 'La elección premortal de María — doctrina de la Restauración',
              body: 'El Élder Bruce R. McConkie escribió: "Tomando en cuenta lo que sabemos sobre los concilios del cielo donde los espíritus más capaces y obedientes fueron seleccionados para misiones especiales en la tierra, es justo concluir que María fue una de las almas más nobles y avanzadas que el Padre envió a la tierra." Esta enseñanza coloca a María no como una joven aleatoria de Nazaret sino como una de las personalidades preexistentes más preparadas y fieles de la historia. Su fiat en Lucas 1:38 no fue improvisation espiritual — fue la manifestación de un carácter cultivado en eternidades previas.',
            },
          ],
        },
        {
          id: 't2-2',
          title: 'Erratum de Alma 7:10 — "en Jerusalén"',
          blocks: [
            {
              type: 'paragraph',
              text: 'Alma 7:10 dice que Jesús nacerá "en Jerusalén, que es la tierra de nuestros padres." Belén no está en Jerusalén — está a ocho kilómetros al sur. ¿Es esto un error del Libro de Mormón? Los críticos lo han señalado así. Pero hay una explicación contextualment coherente: desde la perspectiva de los lamanitas en el hemisferio occidental que tenían registros de su tierra de origen, Belén y Jerusalén eran parte del mismo territorio geográfico. "Tierra de Jerusalén" era la región, no solo la ciudad. Micah 5:2 llama a Belén "Belén Efrata" — que era la región de Judá centrada en Jerusalén. Alma usó el nombre de la ciudad más conocida para identificar la región.',
            },
            {
              type: 'deep_dive',
              badge: 'Apologética',
              title: '"En Jerusalén" — ¿Error geográfico o descripción regional?',
              paragraphs: [
                'El texto de Alma 7:10 usa la frase "en Jerusalén, que es la tierra de nuestros padres" — no simplemente "en la ciudad de Jerusalén." Esta calificación — "la tierra de nuestros padres" — sugiere que Alma estaba hablando de una región, no de una ciudad específica. El lenguaje semítico del período del Antiguo Testamento usaba frecuentemente el nombre de la ciudad principal para identificar toda la región circundante.',
                'Los papiros de Elefantina (siglo V a.C.) y documentos del Mar Muerto muestran que era normal en el Antiguo Cercano Oriente usar el nombre de una ciudad prominente para referirse a la región más amplia que la rodeaba. "Tierra de Jerusalén" era el término que los exiliados y la diáspora usaban para referirse a Judá como un todo. Lehi y sus descendientes, que habían salido de Jerusalén como punto de referencia geográfico, usarían naturalmente "Jerusalén" para referirse a toda la región de su origen.',
              ],
            },
          ],
        },
      ],
    },
    {
      id: 's3',
      title: 'La visión de la Restauración sobre María',
      intro: {
        romanNumeral: 'III',
        title: 'Ni Corredentora ni Figura Secundaria — El Tercer Camino',
        paragraphs: [
          'Las tradiciones católica y protestante han llegado a posiciones opuestas sobre María. La Restauración ofrece una tercera vía: honrarla profundamente sin adorarla, reconocer su singularidad sin hacerla mediadora.',
        ],
      },
      topics: [
        {
          id: 't3-1',
          title: 'El posición de la Restauración — entre dos extremos',
          blocks: [
            {
              type: 'paragraph',
              text: 'La tradición católica ha desarrollado un corpus teológico extenso sobre María: la Inmaculada Concepción (su concepción sin pecado original), la Perpetua Virginidad, la Asunción corporal, la Corredención (participación en la obra redentora de Cristo), y la intercesión mariana. El Concilio Vaticano II la proclamó "Madre de la Iglesia." La oración del Rosario la coloca como canal de peticiones a Cristo.',
            },
            {
              type: 'paragraph',
              text: 'La tradición protestante, en reacción a lo que vio como excesos marianos, tendió al otro extremo: minimizar a María hasta el punto de que su papel en el plan de salvación queda casi invisible. La Reforma rechazó la intercesión de los santos, incluyendo a María, y redujo su importancia a la de un instrumento histórico cumplido.',
            },
            {
              type: 'compare_grid',
              title: 'Tres posiciones sobre María',
              left: {
                label: 'Tradición católica',
                points: [
                  'Madre de Dios (Theotokos) — título oficial',
                  'Inmaculada Concepción — sin pecado original',
                  'Asunción corporal al cielo',
                  'Mediadora e intercesora entre el hombre y Cristo',
                  'La Iglesia ora "a" María regularmente',
                ],
              },
              right: {
                label: 'La Restauración',
                points: [
                  'La más santa de todas las mujeres (McConkie)',
                  'Elegida antes de la fundación del mundo',
                  'No es mediadora — Cristo es el único mediador',
                  'Honrada profundamente pero no adorada',
                  'El Libro de Mormón la nombra tres veces',
                ],
              },
            },
            {
              type: 'paragraph',
              text: 'La Restauración honra a María como la más exaltada de las mujeres en la historia — sin hacer de esa exaltación un canal de mediación alternativo a Cristo. Ella fue el eslabón físico indispensable de la Encarnación; sin su fiat, la Redención no habría tomado forma humana. Pero una vez que ese eslabón fue forjado, el papel mediador pertenece exclusivamente al Hijo que ella portó.',
            },
          ],
        },
        {
          id: 't3-2',
          title: 'María como el eslabón físico de la Encarnación',
          blocks: [
            {
              type: 'highlight_verse',
              reference: 'Éter 3:14-16',
              text: 'He aquí, yo soy Jesucristo. Yo soy el Padre y el Hijo... He aquí, este cuerpo que veis es el cuerpo de mi espíritu; y el hombre lo he creado yo a imagen mía misma; y así como aparezco ante ti el espíritu, así también apareceré ante mi pueblo en carne.',
            },
            {
              type: 'paragraph',
              text: 'La doctrina de Éter 3:14-16 conecta directamente con el rol de María: Cristo tenía un cuerpo espiritual antes de la Encarnación. Para que ese cuerpo espiritual tomara forma física, necesitaba una madre mortal. María fue la que proporcionó la mitad mortal de la naturaleza dual de Cristo. De ella heredó la capacidad de morir — lo que lo hizo el sacrificio expiatorio posible. Del Padre Celestial heredó la capacidad de resucitar. María es, literalmente, la mitad mortal de la Expiación.',
            },
            {
              type: 'leader_quote',
              quote: 'María fue elegida antes de la fundación del mundo para ser la madre del Hijo de Dios. Su misión no fue accidental ni secundaria — fue central al plan de salvación. Sin su consentimiento, sin su fe, sin su cuerpo, la Expiación infinita no habría tenido forma mortal. Honrarla es honrar el plan de Dios.',
              name: 'Élder Bruce R. McConkie',
              role: 'Quórum de los Doce Apóstoles',
            },
          ],
        },
      ],
    },
    {
      id: 's4',
      title: 'Lo que la Restauración añade a nuestra comprensión de María',
      intro: {
        romanNumeral: 'IV',
        title: 'Una Comprensión Más Completa que Ninguna Otra Tradición',
        paragraphs: [
          'La Restauración tiene acceso a testimonios sobre María que ninguna otra tradición cristiana posee: tres profetas del hemisferio occidental que la nombraron siglos antes de su nacimiento.',
        ],
      },
      topics: [
        {
          id: 't4-1',
          title: 'Lo que solo la Restauración añade',
          blocks: [
            {
              type: 'paragraph',
              text: 'Que tres profetas del Libro de Mormón — Nefi, Benjamín, Alma — mencionen a María por nombre siglos antes de su nacimiento no es solo un dato apologético. Es una ventana a la planificación divina anterior al tiempo. Su nombre era conocido en el cielo antes de que existiera en la tierra. Su misión estaba registrada en los anales del cielo antes de que naciera. La Restauración, con acceso al Libro de Mormón, tiene un argumento triple que ninguna otra tradición cristiana puede presentar para la centralidad providencial de María.',
            },
            {
              type: 'paragraph',
              text: 'La tradición de la Restauración también añade la doctrina de la preexistencia — que todas las almas vivieron como espíritus antes de venir a la tierra, y que los más grandes entre ellos fueron elegidos y preparados para misiones específicas (Abraham 3:22-23). Aplicada a María, esta doctrina significa que la mujer que dijo "hágase conmigo conforme a tu palabra" ya había demostrado ese mismo fiat en la existencia premortal. Su consentimiento en la Anunciación fue la manifestación terrenal de un carácter cultivado en eternidades previas.',
            },
            {
              type: 'note_prompts',
              prompts: [
                { id: 'p1', question: '¿Por qué crees que Dios eligió que tres profetas del hemisferio occidental mencionaran a María por nombre siglos antes de su nacimiento? ¿Qué dice eso sobre su lugar en el plan de salvación?' },
                { id: 'p2', question: '¿Cómo diferencia la Restauración el honor profundo de María de la adoración que la tradición católica le otorga? ¿Por qué importa esa distinción?' },
                { id: 'p3', question: '¿Qué añade la doctrina de la preexistencia a tu comprensión de por qué María era la persona adecuada para ser la madre del Hijo de Dios?' },
              ],
            },
            {
              type: 'quiz',
              quizType: 'true_false',
              question: 'María es mencionada por su nombre propio en tres pasajes del Libro de Mormón fuera de citas del Antiguo Testamento.',
              answer: true,
              explanation: 'Sí. Los tres pasajes son: 1 Nefi 11:18 (la visión de Nefi), Mosíah 3:8 (el discurso del ángel al rey Benjamín), y Alma 7:10 (Alma predicando en Gideon). Ella es la única mujer nombrada por su propio nombre en el Libro de Mormón fuera de personajes del Antiguo Testamento.',
            },
            {
              type: 'quiz',
              quizType: 'fill_blank',
              question: 'En Alma 7:10, María es descrita como "un vaso precioso y _____ que será sometido al yugo, conforme a la carne."',
              answer: 'escogido',
              explanation: 'Alma 7:10 llama a María "un vaso precioso y escogido" — un título que implica tanto su valor espiritual como su elección divina anterior a su existencia mortal. El término "escogido" conecta con la doctrina de la Restauración sobre la selección premortal de los instrumentos divinos.',
            },
          ],
        },
      ],
    },
  ],
}
