import type { Lesson } from '@/types/doctrine'

export const tomasElMisionero: Lesson = {
  id: 'tomas-el-misionero',
  moduleId: 'personajes-escrituras',
  title: 'El Misionero de la India',
  subtitle: 'El evangelio llega al subcontinente en el año 52 d.C.',
  description: 'La tradición cristiana más antigua del mundo fuera del Mediterráneo es la de los Cristianos de Santo Tomás en Kerala, India. Tomás, el apóstol que dudó de la resurrección, viajó al otro extremo del mundo conocido y fundó siete iglesias. Murió mártir en Chennai. Su historia lleva el evangelio más lejos que ningún otro apóstol de los doce.',
  level: 'INTERMEDIO',
  icon: '🌏',
  duration: 30,
  order: 5413,
  status: 'PUBLISHED',
  studyBodyPlain: '',
  originalBodyPlain: '',
  submoduleGroup: 'tomas',
  studySections: [
    {
      id: 's1',
      title: 'Las Fuentes Históricas',
      intro: {
        romanNumeral: 'I',
        title: 'Evidencia del Ministerio de Tomás en India',
        paragraphs: ['Hechos de Tomás, Eusebio, y la comunidad que perdura hasta hoy'],
      },
      topics: [
        {
          id: 't1',
          title: 'Los Hechos de Tomás — siglo II',
          blocks: [
            {
              type: 'paragraph',
              text: 'Los Hechos de Tomás (Acta Thomae) son un documento apócrifo del siglo II escrito en sirio, probablemente en Edesa. Aunque no son canónicos, representan la tradición más antigua escrita sobre el ministerio de Tomás en India. El texto narra que Tomás fue inicialmente renuente a ir — incluso la tradición sobre su misión comienza con resistencia, consistente con su carácter — pero que Cristo se le apareció y lo convenció. La historicidad del núcleo del texto es debatida pero no descartada por la historiografía seria.',
            },
            {
              type: 'doctrine_box',
              title: 'Eusebio de Cesarea y la evidencia del siglo IV',
              body: 'Eusebio de Cesarea, el primer historiador de la Iglesia (circa 313 d.C.), menciona en Historia Eclesiástica III.1.1 que Tomás recibió como campo misionero a Partia (que en su época incluía regiones del este). Orígenes, un siglo antes, menciona a Tomás predicando entre los Partos. Estas referencias geográficas son consistentes con una ruta terrestre hacia el subcontinente indio, que en el siglo I era frecuentada por comerciantes judíos y griegos.',
            },
            {
              type: 'key_points',
              title: 'Fuentes para el ministerio indio de Tomás',
              points: [
                'Hechos de Tomás (siglo II): relato narrativo más extenso, escrito en sirio.',
                'Eusebio de Cesarea (siglo IV): mención de Tomás en el oriente.',
                'La comunidad de Cristianos de Santo Tomás en Kerala: existencia histórica verificable.',
                'Inscripciones en cobre de Quilon (circa 883-1105 d.C.): documentan privilegios a la comunidad cristiana.',
                'Tradición oral preservada en la comunidad: memorias litúrgicas del siglo I.',
              ],
            },
          ],
        },
      ],
    },
    {
      id: 's2',
      title: 'La Llegada a Kerala',
      intro: {
        romanNumeral: 'II',
        title: '52 d.C. — Muzuris, Costa de Malabar',
        paragraphs: ['El apóstol en el puerto más importante del océano Índico'],
      },
      topics: [
        {
          id: 't2',
          title: 'Muzuris (Kodungallur) — el puerto del mundo antiguo',
          blocks: [
            {
              type: 'paragraph',
              text: 'La tradición de los Cristianos de Santo Tomás sitúa la llegada de Tomás al puerto de Muzuris (hoy Kodungallur o Cranganore, en Kerala) en el año 52 d.C. Muzuris era en esa época uno de los puertos de mayor tráfico del mundo antiguo: el Periplus del Mar Eritreo, un manual de comercio greco-romano del siglo I, lo describe como el puerto más próspero de la India, con barcos llegando de Arabia, Persia, y el Imperio Romano. Una comunidad judía bien establecida vivía allí; para un misionero judío de Galilea, habría sido un punto de entrada natural.',
            },
            {
              type: 'deep_dive',
              title: 'La comunidad judía de Kerala en el siglo I',
              paragraphs: [
                'Las inscripciones de cobre de los Judíos de Cochin documentan una presencia judía en Kerala que algunos estudiosos datan en el siglo I a.C. o antes. El rey Cheraman Perumal habría concedido privilegios a un comerciante judío llamado José Rabbán.',
                'Para Tomás, predicar primero a la diáspora judía habría sido el patrón misionero apostólico estándar, el mismo que Pablo seguía: comenzar en la sinagoga (Hechos 13:14, 17:1-2).',
                'La conexión entre la comunidad judía establecida en Kerala y el inicio del ministerio de Tomás es históricamente plausible aunque no documentada directamente.',
              ],
            },
          ],
        },
        {
          id: 't3',
          title: 'Las siete iglesias fundadas por Tomás',
          blocks: [
            {
              type: 'paragraph',
              text: 'La tradición de los Cristianos de Santo Tomás en Kerala identifica siete iglesias como fundadas por el apóstol: Kodungallur, Kollam, Niranam, Nilackal (Chayal), Kokkamangalam, Kottakkavu (North Paravur) y Palayoor. Estas comunidades existen hasta hoy bajo diversas denominaciones — Siria Ortodoxa, Católica Siria Caldea, Jacobita — y todas comparten la tradición de la fundación apostólica por Tomás en el siglo I.',
            },
            {
              type: 'timeline',
              items: [
                { label: '52 d.C.', text: 'Tomás llega a Muzuris (Kodungallur), Kerala', color: 'blue' },
                { label: '52-68 d.C.', text: 'Ministerio en Kerala — fundación de siete comunidades', color: 'gold' },
                { label: '68-72 d.C.', text: 'Viaje a la costa este, ministerio en Mylapore (Chennai)', color: 'blue' },
                { label: 'circa 72 d.C.', text: 'Martirio en el Monte Santo Tomás, Chennai', color: 'red' },
              ],
            },
          ],
        },
      ],
    },
    {
      id: 's3',
      title: 'El Ministerio entre la Élite Brahmán',
      intro: {
        romanNumeral: 'III',
        title: 'El Evangelio y la Alta Cultura India del Siglo I',
        paragraphs: ['Tomás no evangelizó solo entre los pobres'],
      },
      topics: [
        {
          id: 't4',
          title: 'Conversiones de la élite en la tradición india',
          blocks: [
            {
              type: 'paragraph',
              text: 'La tradición oral de los Nasranis (Cristianos de Santo Tomás) preserva que Tomás convirtió a varios brahmanesos — miembros de la casta sacerdotal más alta del sistema hindú. Los llamados "Namboothiri Kristyani" son familias brahmán de Kerala que afirman descender de las conversiones originales de Tomás. Esta particularidad es históricamente notable: el evangelio en India comenzó en los estratos sociales más altos, no solo entre las castas bajas.',
            },
            {
              type: 'doctrine_box',
              title: 'El patrón misionero de Tomás: élite primero',
              body: 'Los Hechos de Tomás narran que el apóstol llegó a India como arquitecto contratado por el rey Gondofares para construir un palacio real. Esta historia, aunque apócrifa en su forma literaria, preserva el patrón histórico: Tomás tenía acceso a la élite. El rey Gondofares de Partia/India existe históricamente — monedas con su nombre fueron descubiertas en el siglo XIX, confirmando que reinó circa 20-50 d.C. La tradición sobre Tomás y Gondofares tiene una verosimilitud histórica notable.',
            },
          ],
        },
      ],
    },
    {
      id: 's4',
      title: 'El Martirio en Chennai',
      intro: {
        romanNumeral: 'IV',
        title: 'El Monte Santo Tomás — circa 72 d.C.',
        paragraphs: ['El apóstol que dudó de la resurrección muere por ella'],
      },
      topics: [
        {
          id: 't5',
          title: 'Lanceado mientras oraba',
          blocks: [
            {
              type: 'paragraph',
              text: 'La tradición más extendida sitúa el martirio de Tomás en el Monte Santo Tomás (hoy San Tomé, en Chennai), donde habría sido lanceado mientras oraba, alrededor del año 72 d.C. Sus restos fueron posteriormente trasladados a Edesa (hoy Urfa, Turquía) en el siglo IV, y luego parte de ellos a Ortona, Italia, donde se veneran hasta hoy. La catedral de San Tomás de Mylapore, Chennai, marca el sitio tradicional de su muerte.',
            },
            {
              type: 'key_points',
              title: 'Lo que el martirio de Tomás significa',
              points: [
                'Murió por afirmar que había visto y tocado al Cristo resucitado.',
                'El hombre que exigió evidencia empírica murió por el testimonio de esa evidencia.',
                'Ningún apóstol habría muerto por una mentira que él mismo sabía era mentira.',
                'Su martirio es la prueba más poderosa de la sinceridad de su fe post-resurrección.',
              ],
            },
            {
              type: 'reflection',
              prompt: '¿Cómo cambia tu perspectiva de Tomás saber que el apóstol más asociado con la duda murió por su testimonio de la resurrección de Cristo, habiendo llevado el evangelio más lejos que cualquier otro de los doce? ¿Qué dice esto sobre la relación entre duda inicial y compromiso final?',
            },
          ],
        },
      ],
    },
  ],
}
