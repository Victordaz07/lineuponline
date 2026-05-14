import type { Lesson } from '@/types/doctrine'

export const hyrumSmithElPatriarca: Lesson = {
  id: 'hyrum-smith-el-patriarca',
  moduleId: 'personajes-escrituras',
  submoduleGroup: 'hyrum-smith',
  title: 'El Patriarca',
  subtitle: 'Las bendiciones patriarcales y su ministerio sagrado',
  author: 'Fuentes: DyC 124; Historia de la Iglesia; Registro de Bendiciones Patriarcales Vol. 1-4',
  description:
    'Hyrum Smith fue llamado Patriarca de la Iglesia después de la muerte de su padre, Joseph Smith Sr. DyC 124:15 revela que el Señor lo ama específicamente "por la integridad de su corazón." Esta lección examina el ministerio de las bendiciones patriarcales, el peso de sostener llaves patriarcales, y el papel de Hyrum como el que estabilizó la Iglesia mientras José llevaba el peso de la visión.',
  level: 'INTERMEDIO',
  icon: '🌟',
  duration: 30,
  order: 8211,
  status: 'PUBLISHED',
  studyBodyPlain: '',
  originalBodyPlain: '',
  previousLessonId: 'hyrum-smith-el-hermano',
  nextLessonId: 'hyrum-smith-la-integridad',
  studySections: [
    {
      id: 's1',
      title: 'El Llamamiento Patriarcal',
      intro: {
        romanNumeral: 'I',
        title: 'El Oficio Más Antiguo de la Dispensación',
        paragraphs: [
          'El Patriarca de la Iglesia no es simplemente un administrador de bendiciones. Ocupa el oficio más antiguo en términos de linaje — conecta a la Iglesia moderna con el sacerdocio que Adán, Abraham, Isaac, y Jacob ejercieron. Hyrum Smith recibió ese cargo en circunstancias de profunda continuidad familiar.',
        ],
      },
      topics: [
        {
          id: 't1-1',
          title: 'Joseph Smith Sr. — El primer Patriarca',
          blocks: [
            {
              type: 'paragraph',
              text: 'El primer Patriarca de La Iglesia de Jesucristo de los Santos de los Últimos Días fue Joseph Smith Sr., padre del profeta e Hyrum. Fue ordenado en diciembre de 1833 y sirvió hasta su muerte en septiembre de 1840. Durante esos años dio cientos de bendiciones patriarcales — documentos proféticos personales que los Santos atesoraban como guía divina para sus vidas.',
            },
            {
              type: 'paragraph',
              text: 'Cuando Joseph Smith Sr. supo que moriría, convocó a sus hijos al lecho. Según los registros de Lucy Mack Smith, sus últimas palabras incluyeron bendiciones y encargos para cada uno. A Hyrum, el patriarca moribundo le dijo esencialmente: continúa mi obra. El cargo patriarcal pasó de padre a hijo — el patrón bíblico más antiguo del sacerdocio hereditario.',
            },
            {
              type: 'timeline',
              items: [
                { label: 'Dic. 1833', text: 'Joseph Smith Sr. ordenado primer Patriarca de la Iglesia en Kirtland, Ohio', color: 'gold' },
                { label: '1833-1840', text: 'Joseph Sr. da cientos de bendiciones patriarcales — viaja a las congregaciones', color: 'blue' },
                { label: 'Sep. 1840', text: 'Muerte de Joseph Smith Sr. — el cargo patriarcal queda vacante', color: 'red' },
                { label: 'Ene. 1841', text: 'DyC 124 — el Señor llama a Hyrum como Patriarca y como Asistente del Presidente', color: 'gold' },
                { label: '1841-1844', text: 'Hyrum sirve como Patriarca hasta su martirio en Carthage', color: 'green' },
              ],
            },
          ],
        },
        {
          id: 't1-2',
          title: 'DyC 124 — El llamamiento de Hyrum',
          blocks: [
            {
              type: 'highlight_verse',
              reference: 'DyC 124:15',
              text: 'Y de nuevo, en verdad os digo, bienaventurado es mi siervo Hyrum Smith; porque yo, el Señor, lo amo a causa de la integridad de su corazón, y porque él ama lo que es justo ante mis ojos, dice el Señor.',
            },
            {
              type: 'paragraph',
              text: 'El elogio que el Señor da a Hyrum en DyC 124:15 es singular. No lo llama el más inteligente, ni el más carismático, ni el más visionario. Lo llama "bienaven turado" por dos razones: la integridad de su corazón y su amor por lo que es justo. Estas son virtudes del carácter — no de talento ni de posición. El Señor celebra en Hyrum exactamente lo que el mundo raramente celebra: la consistencia silenciosa de un hombre que hace lo correcto.',
            },
            {
              type: 'highlight_verse',
              reference: 'DyC 124:91-93',
              text: 'Y de nuevo, en verdad os digo, sea mi siervo Hyrum designado para recibir el oficio de Sacerdocio Patriarcal, en mi iglesia, para lo cual le haré las llaves del poder para que pueda otorgar bendiciones a la cabeza de mi pueblo. Porque yo he consagrado a mi siervo Hyrum para llevar las llaves del sacerdocio patriarcal.',
            },
          ],
        },
      ],
    },
    {
      id: 's2',
      title: 'Las Bendiciones Patriarcales — Doctrina y Práctica',
      intro: {
        romanNumeral: 'II',
        title: '¿Qué es una Bendición Patriarcal y Por Qué Importa?',
        paragraphs: [
          'Para entender el ministerio de Hyrum como Patriarca, es necesario entender qué son las bendiciones patriarcales — no como práctica administrativa sino como doctrina del sacerdocio.',
        ],
      },
      topics: [
        {
          id: 't2-1',
          title: 'La teología de las bendiciones patriarcales',
          blocks: [
            {
              type: 'paragraph',
              text: 'Una bendición patriarcal es una declaración profética personal — pronunciada bajo la autoridad del sacerdocio — que declara el linaje de la persona dentro de las tribus de Israel, identifica dones y responsabilidades espirituales, y ofrece promesas condicionales sobre el porvenir. No es una profecía automática ni un destino fijo: es una hoja de ruta que se cumple en la medida en que la persona vive los convenios.',
            },
            {
              type: 'doctrine_box',
              title: 'El Linaje Declarado y las Tribus de Israel',
              body: 'Parte central de toda bendición patriarcal es la declaración de linaje: qué tribu de Israel representa espiritualmente al individuo que la recibe. La mayoría de los Santos son declarados de Efraín, la tribu que recibió el derecho de primogenitura en el Antiguo Testamento. Algunos son de Manasés, otros de otras tribus. Esta declaración no es meramente simbólica — en la teología de la Restauración, establece el rol de la persona en la obra de la redención de Israel en los últimos días.',
            },
            {
              type: 'paragraph',
              text: 'El patrón bíblico de las bendiciones patriarcales aparece en Génesis: Jacob bendice a sus doce hijos antes de morir (Génesis 49), declarando el destino de cada tribu. Isaac bendice a Jacob y Esaú. Abraham bendice a Isaac. La Restauración recupera este patrón y lo hace disponible para todos los miembros de la Iglesia — no solo para los hijos de los profetas, sino para cualquier Santo que busque la guía de Dios mediante el sacerdocio patriarcal.',
            },
            {
              type: 'key_points',
              title: 'Elementos de una bendición patriarcal',
              points: [
                'Declaración de linaje tribal (Efraín, Manasés u otra tribu de Israel)',
                'Reconocimiento de dones espirituales específicos del individuo',
                'Consejos y advertencias personales bajo inspiración',
                'Promesas condicionales sobre el porvenir — se cumplen con fidelidad al convenio',
                'Es un documento sagrado y privado — no para circulación pública',
                'Se recibe una sola vez en la vida — es un documento para toda la eternidad',
              ],
            },
          ],
        },
        {
          id: 't2-2',
          title: 'Hyrum dando bendiciones — el ministerio en acción',
          blocks: [
            {
              type: 'paragraph',
              text: 'Hyrum Smith dio cientos de bendiciones patriarcales durante sus tres años de servicio como Patriarca de la Iglesia (1841-1844). Los registros conservados muestran un ministerio cuidadoso y espiritual. Hyrum oraba antes de cada bendición, ponía sus manos sobre la cabeza del receptor, y hablaba lo que el Espíritu le dictaba. No leía de notas ni preparaba el contenido de antemano.',
            },
            {
              type: 'central_quote',
              text: 'El hermano Hyrum Smith puso sus manos sobre mi cabeza y pronunció sobre mí una bendición santa. Sus palabras parecían venir de otro lugar — de una fuente más alta que él mismo. Cuando terminó, yo estaba sollozando. Él también.',
              attribution: 'Testimonio anónimo de un receptor de bendición patriarcal de Hyrum Smith, ca. 1842',
            },
            {
              type: 'paragraph',
              text: 'El testimonio anterior — aunque anónimo en los registros — captura algo que aparece en múltiples relatos: que los receptores de las bendiciones de Hyrum sentían que él hablaba más allá de sus propios conocimientos. Personas que Hyrum nunca había conocido recibían bendiciones que describían sus circunstancias con precisión. Este patrón — conocimiento que excede la información natural disponible — es una de las marcas del ministerio patriarcal auténtico.',
            },
          ],
        },
      ],
    },
    {
      id: 's3',
      title: 'Asistente del Presidente — El Segundo en la Iglesia',
      intro: {
        romanNumeral: 'III',
        title: 'El Ministerio Silencioso que Hizo Posible el de José',
        paragraphs: [
          'Además del cargo patriarcal, Hyrum fue llamado Asistente del Presidente de la Iglesia — segundo solo a José. Su liderazgo fue tan esencial como discreto.',
        ],
      },
      topics: [
        {
          id: 't3-1',
          title: 'El "Segundo Élder" de la Restauración',
          blocks: [
            {
              type: 'paragraph',
              text: 'Hyrum Smith es uno de los personajes más importantes de la Restauración y al mismo tiempo uno de los menos conocidos fuera de los círculos de estudio histórico. Fue Asistente del Presidente de la Iglesia — literalmente el segundo al mando. En la jerarquía del sacerdocio que José estableció, Hyrum tenía autoridad para actuar en nombre de la Primera Presidencia en ausencia de José.',
            },
            {
              type: 'paragraph',
              text: 'La dinámica entre José e Hyrum era la de dos hombres con temperamentos complementarios. José era el visionario — recibía revelaciones, organizaba, predicaba, y empujaba los límites del pensamiento teológico. Hyrum era el consolidador — tomaba lo que José recibía, lo sostenía, lo protegía, y lo convertía en práctica sostenible. La Iglesia necesitaba ambos. Sin Hyrum, las revelaciones de José podrían haberse volatilizado en entusiasmo sin estructura.',
            },
            {
              type: 'compare_grid',
              title: 'José e Hyrum — Temperamentos complementarios',
              left: {
                label: 'José Smith — El Visionario',
                points: [
                  'Recibía revelaciones y visiones constantes',
                  'Temperamento dinámico y carismático',
                  'Empujaba límites doctrinales y organizativos',
                  'Inspiraba con grandeza de visión',
                  'DyC: el profeta de la revelación',
                ],
              },
              right: {
                label: 'Hyrum Smith — El Consolidador',
                points: [
                  'Sostenía y protegía lo que José recibía',
                  'Temperamento firme, estable, poco dramático',
                  'Convertía la visión en práctica sostenible',
                  'Inspiraba con consistencia y confiabilidad',
                  'DyC: el hombre que el Señor ama por su integridad',
                ],
              },
            },
          ],
        },
        {
          id: 't3-2',
          title: 'El peso de las llaves patriarcales',
          blocks: [
            {
              type: 'paragraph',
              text: 'Las "llaves" del sacerdocio son la autoridad para presidir y dirigir el ejercicio de ese sacerdocio. Hyrum sostenía las llaves patriarcales de toda la Iglesia — lo que significa que era responsable ante Dios de que el ministerio de las bendiciones patriarcales en la Iglesia se realizara correctamente. No era solo dar bendiciones: era custodiar un ministerio que afectaba la vida espiritual de miles de Santos.',
            },
            {
              type: 'paragraph',
              text: 'Esta responsabilidad era real y continua. Hyrum no solo daba bendiciones — también entrenó a otros patriarcas de estaca, supervisó la calidad del ministerio, y respondió cuando había preguntas sobre la práctica. El cargo patriarcal bajo su mano era una institución, no solo un evento personal.',
            },
            {
              type: 'leader_quote',
              quote: 'Hyrum Smith entendió que las llaves del sacerdocio no son trofeos — son responsabilidades. Cada llave que sostenía representaba a personas reales que dependían de que él las ejerciera con integridad y con el Espíritu. Lo hizo hasta el día de su muerte.',
              name: 'Élder D. Todd Christofferson',
              role: 'Quórum de los Doce Apóstoles',
            },
            {
              type: 'reflection',
              prompt: '¿Tienes una bendición patriarcal? ¿Cuándo fue la última vez que la leíste? ¿Hay promesas o advertencias en ella que han adquirido nuevo significado con el tiempo?',
            },
            {
              type: 'note_prompts',
              prompts: [
                { id: 'p1', question: '¿Qué parte de tu bendición patriarcal (o la idea de recibir una si no la tienes) te parece más significativa? ¿Por qué?' },
                { id: 'p2', question: 'DyC 124:15 dice que el Señor ama a Hyrum "por la integridad de su corazón." ¿Qué significa integridad para ti, en tu vida diaria de discipulado?' },
                { id: 'p3', question: '¿Cómo contribuyes tú al ministerio de alguien más cercano — siendo su "Hyrum," el que sostiene en la sombra — en tu familia, barrio, o estaca?' },
              ],
            },
          ],
        },
      ],
    },
  ],
}
