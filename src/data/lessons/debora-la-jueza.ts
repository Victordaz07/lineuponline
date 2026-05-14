import type { Lesson } from '@/types/doctrine'

export const deboraLaJueza: Lesson = {
  id: 'debora-la-jueza',
  moduleId: 'personajes-escrituras',
  submoduleGroup: 'debora',
  title: 'La Jueza',
  subtitle: 'La única mujer jueza de Israel',
  author: 'Fuentes: Jueces 4–5; historia del Oriente Próximo Antiguo; arqueología de Canaán',
  description: 'Débora gobernaba a Israel bajo su palmera cuando todo el pueblo la reconocía como jueza. Durante veinte años, Canaán había oprimido a Israel con 900 carros de hierro. Un texto que no se disculpa: Débora simplemente era jueza, y toda la nación lo aceptaba.',
  level: 'INTERMEDIO',
  icon: '⚖️',
  duration: 30,
  order: 6310,
  status: 'PUBLISHED',
  studyBodyPlain: '',
  originalBodyPlain: '',
  previousLessonId: null,
  nextLessonId: 'debora-la-profetisa',
  studySections: [
    {
      id: 's1',
      title: 'Israel y el ciclo de los Jueces',
      intro: {
        romanNumeral: 'I',
        title: 'El Libro de los Jueces — Un Ciclo Repetido',
        paragraphs: [
          'El libro de Jueces narra la historia de Israel entre la conquista de Canaán y la monarquía. Es una historia de ciclos: fidelidad, apostasía, opresión, arrepentimiento, liberación — y vuelta a empezar.',
        ],
      },
      topics: [
        {
          id: 't1-1',
          title: 'El ciclo de los Jueces y la opresión cananea',
          blocks: [
            {
              type: 'paragraph',
              text: 'El libro de Jueces estructura su narrativa en torno a un patrón teológico recurrente que los eruditos llaman el «ciclo deuteronómico»: Israel abandona a Jehová y sirve a los baales; Jehová permite que un enemigo los oprima; Israel clama a Dios en su angustia; Dios levanta un juez (shofet) que libra a Israel; el juez muere; Israel vuelve a apostatar. Este ciclo se repite doce veces en el libro, con jueces menores y mayores, hombres y al menos una mujer.',
            },
            {
              type: 'timeline',
              items: [
                { label: 'Fidelidad inicial', text: 'Israel sirve a Jehová durante la generación de Josué y los ancianos que le sobrevivieron', ref: 'Jueces 2:7', color: 'gold' },
                { label: 'Apostasía', text: 'La siguiente generación no conoce a Jehová ni las obras que había hecho por Israel; sirven a los baales', ref: 'Jueces 2:10-13', color: 'red' },
                { label: 'Opresión', text: 'Jehová entrega a Israel en manos de sus enemigos. Jabín, rey de Canaán, oprime a Israel durante 20 años', ref: 'Jueces 4:2-3', color: 'red' },
                { label: 'Liberación', text: 'Débora llama a Barac; la batalla del río Quisón; victoria sobre Sísara y sus 900 carros de hierro', ref: 'Jueces 4:14-16', color: 'green' },
              ],
            },
            {
              type: 'highlight_verse',
              reference: 'Jueces 4:1-3',
              text: 'Después de la muerte de Aod, los hijos de Israel volvieron a hacer lo malo ante los ojos de Jehová. Y Jehová los vendió en mano de Jabín rey de Canaán, el cual reinó en Hazor; y el capitán de su ejército se llamaba Sísara... Y clamaron los hijos de Israel a Jehová, porque aquél tenía novecientos carros herrados, y había oprimido con crueldad a los hijos de Israel por veinte años.',
            },
            {
              type: 'paragraph',
              text: 'Veinte años de opresión cananea. Este número no es casual — en la cronología del libro de Jueces, veinte años representa una generación completa. Los hijos de Israel crecieron bajo el dominio de Jabín. Sísara, el comandante del ejército cananeo con sus novecientos carros de hierro, era el instrumento visible de esa opresión. Los carros de hierro en el siglo XII a.C. eran la tecnología militar más avanzada del mundo — el equivalente de tanques en un campo de batalla de infantería.',
            },
          ],
        },
        {
          id: 't1-2',
          title: 'El shofet — qué era un juez en Israel',
          blocks: [
            {
              type: 'doctrine_box',
              title: 'Shofet — juez, liberador, gobernante',
              body: 'La palabra hebrea shofet (juez) abarca un rango de funciones que no tiene equivalente exacto en el español moderno. Un juez en Israel no era solo un árbitro legal — era también un líder militar cuando la situación lo exigía, una autoridad espiritual que podía recibir el Espíritu de Dios para actuar, y un gobernante de facto en ausencia de rey. El shofet era la máxima autoridad cívica, judicial y a menudo militar de su tribu o región.',
            },
            {
              type: 'paragraph',
              text: 'El texto de Jueces 4:4-5 describe a Débora con una precisión notable: "Y Débora, una mujer profetisa, mujer de Lapidot, juzgaba a Israel en aquel tiempo. Y acostumbraba sentarse bajo la palmera de Débora, entre Ramá y Bet-el, en el monte de Efraín; y los hijos de Israel subían a ella a juicio." La descripción no tiene calificativos que señalen lo extraordinario — simplemente afirma la realidad: Débora era la jueza de Israel, y todo el pueblo la reconocía como tal.',
            },
            {
              type: 'highlight_verse',
              reference: 'Jueces 4:4-5',
              text: 'Y Débora, una mujer profetisa, mujer de Lapidot, juzgaba a Israel en aquel tiempo. Y acostumbraba sentarse bajo la palmera de Débora, entre Ramá y Bet-el, en el monte de Efraín; y los hijos de Israel subían a ella a juicio.',
            },
            {
              type: 'paragraph',
              text: 'El detalle geográfico es importante: la palmera de Débora estaba en el monte de Efraín, territorio central de Israel. No era un lugar marginal o periférico — era una ruta de acceso común. Y el pueblo "subía a ella" — la expresión implica un viaje deliberado, un ascenso, para buscar su juicio. No es una descripción de una mujer que ejerce autoridad localmente o en ausencia de hombres calificados. Es la descripción de un liderazgo nacional reconocido y buscado activamente.',
            },
          ],
        },
      ],
    },
    {
      id: 's2',
      title: 'Lo extraordinario de una jueza',
      intro: {
        romanNumeral: 'II',
        title: 'Una Mujer con esta Autoridad en el Oriente Próximo Antiguo',
        paragraphs: [
          'Para comprender la magnitud de lo que el texto describe en Jueces 4, es necesario entender el contexto cultural del Oriente Próximo en el siglo XII a.C. El liderazgo político y judicial era universalmente masculino en las culturas circundantes.',
        ],
      },
      topics: [
        {
          id: 't2-1',
          title: 'El contexto del Antiguo Oriente Próximo',
          blocks: [
            {
              type: 'paragraph',
              text: 'En el siglo XII a.C., las culturas del Mediterráneo Oriental y el Oriente Próximo — Egipto, Mesopotamia, los reinos cananeos, los filisteos — tenían en común un sistema de liderazgo en el que el poder militar, judicial y político era ejercido casi exclusivamente por hombres. Las excepciones — como la faraona Hatshepsut en Egipto o algunas reinas de Biblos — eran escasas, altamente debatidas, y generalmente mediadas a través de estructuras monárquicas o sacerdotales especiales.',
            },
            {
              type: 'deep_dive',
              badge: 'CONTEXTO HISTÓRICO',
              title: 'Israel en el siglo XII a.C. — el período de los Jueces',
              paragraphs: [
                'El período de los Jueces (aproximadamente 1200-1050 a.C.) es uno de los más complejos y tumultuosos de la historia de Israel. La conquista de Canaán bajo Josué había dejado a Israel como una confederación de tribus sin un liderazgo centralizado permanente. No había rey, no había capital, no había ejército nacional. Las tribus eran semi-autónomas y a menudo enfrentaban amenazas independientes.',
                'En este contexto de descentralización, el shofet era la única figura de autoridad que podía convocar a más de una tribu. Que todo Israel "subiera" a Débora para juicio implica que su autoridad era reconocida transregionalmente — un logro extraordinario para cualquier líder del período, y completamente sin paralelo para una mujer en el contexto del Oriente Próximo.',
                'Los textos religiosos de los pueblos vecinos de Israel — los baalistas cananeos, los adoradores de Astoret — tenían sacerdotisas y figuras femeninas en roles religiosos. Pero el rol de Débora no era sacerdotal ni cultual — era judicial, civil y militar. Eso no tiene paralelo conocido en la región.',
              ],
            },
            {
              type: 'key_points',
              title: 'Lo que hacía extraordinario el liderazgo de Débora',
              points: [
                'Jueza — autoridad judicial suprema sobre todo Israel, reconocida sin narrativa de legitimación',
                'Profetisa — portavoz de Dios en el mismo nivel que Moisés o Samuel',
                'Lideresa militar — convocó y acompañó al ejército en la batalla',
                'Compositora — el Cántico de Débora (Jueces 5) es uno de los textos más antiguos de la Biblia',
                'Sin precedente en las culturas vecinas para una mujer con autoridad civil y judicial de este alcance',
              ],
            },
          ],
        },
        {
          id: 't2-2',
          title: 'El texto que no pide disculpas',
          blocks: [
            {
              type: 'paragraph',
              text: 'Una de las características más notables del texto de Jueces 4 es lo que no dice. No hay narrativa sobre cómo Débora llegó a ser jueza. No hay justificación de su autoridad como excepción a una regla. No hay explicación de por qué no había un hombre disponible. El texto simplemente describe la realidad: Débora juzgaba a Israel. Y los hijos de Israel subían a ella.',
            },
            {
              type: 'paragraph',
              text: 'Interpretaciones posteriores de la historia de Débora — tanto judías como cristianas — han intentado explicar su autoridad como consecuencia de la falta de hombres disponibles, o como un caso excepcional condicionado por circunstancias extraordinarias. El texto mismo no ofrece ninguno de estos marcos. La autoridad de Débora aparece en Jueces 4 sin asterisco, sin condición y sin disculpa.',
            },
            {
              type: 'central_quote',
              text: 'El texto no explica la autoridad de Débora. La presupone.',
              attribution: 'Reflexión sobre el silencio teológico de Jueces 4',
            },
            {
              type: 'reflection',
              prompt: '¿Qué dice del carácter de Dios el hecho de que eligiera a una mujer para ser el único ser humano que gobernaba toda Israel en un período sin rey? ¿Cómo cambia esto tu comprensión de a quién Dios llama para liderar?',
            },
          ],
        },
      ],
    },
    {
      id: 's3',
      title: 'La geografía de la liberación',
      intro: {
        romanNumeral: 'III',
        title: 'El Escenario de la Historia — La Llanura de Esdraelón',
        paragraphs: [
          'La batalla que Débora y Barac librarían ocurrió en uno de los campos de batalla más estratégicos del mundo antiguo: la llanura de Esdraelón, cruzada por el río Quisón.',
        ],
      },
      topics: [
        {
          id: 't3-1',
          title: 'La llanura de Esdraelón — el campo de batalla',
          blocks: [
            {
              type: 'paragraph',
              text: 'La llanura de Esdraelón (también llamada Jezreel o Valle de Meguido) es el mayor valle de Israel, que cruza el país de este a oeste separando la Galilea del sur de la zona montañosa de Samaría. En el mundo antiguo era la principal ruta comercial y militar entre Egipto y Mesopotamia. Quienes controlaban Esdraelón controlaban el corazón del Creciente Fértil.',
            },
            {
              type: 'media_slot',
              kind: 'image',
              alt: 'Vista aérea de la llanura de Esdraelón con el Monte Tabor al fondo',
              caption: 'La llanura de Esdraelón: terreno plano ideal para carros de guerra, cruzado por el río Quisón. Barac musternó sus tropas en el Monte Tabor, visible al norte.',
              contextCard: {
                year: 'c. 1125 a.C.',
                place: 'Llanura de Esdraelón, Israel',
                label: 'El campo de batalla — corazón militar de Canaán',
              },
            },
            {
              type: 'paragraph',
              text: 'La llanura era el terreno ideal para los 900 carros de hierro de Sísara. En campo abierto y plano, la caballería de carros era devastadora contra infantería a pie. Israel no tenía carros. Que Débora ordenara la batalla en este terreno — en apariencia favorable para el enemigo — era una declaración de fe absoluta en la dirección divina. El resultado mostraría por qué.',
            },
            {
              type: 'doctrine_box',
              title: 'El Monte Tabor y Meguido',
              body: 'El Monte Tabor (588 metros sobre la llanura) fue el punto de concentración de las tropas de Barac antes de la batalla. El nombre Meguido — que da nombre a la llanura — aparece en el Apocalipsis como el lugar de la batalla final entre el bien y el mal: Armagedón (Har Meguido, la montaña de Meguido). La llanura donde Débora libró su batalla es el mismo escenario que la apocalíptica identifica como el lugar de la batalla definitiva.',
            },
          ],
        },
        {
          id: 't3-2',
          title: 'Los 900 carros — la tecnología del terror',
          blocks: [
            {
              type: 'paragraph',
              text: 'Un carro de guerra del siglo XII a.C. era una máquina de combate especializada: una plataforma móvil de madera reforzada con hierro o bronce, tirada por dos caballos entrenados, llevando un conductor y un arquero o lancero. Podía alcanzar velocidades de 30-40 km/h en terreno plano. Para la infantería sin proyectiles de largo alcance efectivos, un carro en carga era prácticamente imposible de detener.',
            },
            {
              type: 'compare_grid',
              title: 'Las fuerzas en el campo de batalla',
              left: {
                label: 'Sísara — el ejército cananeo',
                points: [
                  '900 carros de hierro — tecnología militar de vanguardia',
                  'Ejército profesional y bien equipado',
                  'Ventaja en terreno plano (la llanura de Esdraelón)',
                  'Respaldo político del rey Jabín de Hazor',
                  '20 años de dominio sin desafío serio',
                ],
              },
              right: {
                label: 'Barac — el ejército israelita',
                points: [
                  '10.000 hombres de las tribus de Neftalí y Zabulón',
                  'Infantería sin carros ni caballería',
                  'Ventaja solo en terreno elevado (el Monte Tabor)',
                  'Respaldo espiritual de la profetisa Débora',
                  'La orden de Débora: "este es el día en que Jehová ha entregado a Sísara en tu mano"',
                ],
              },
            },
            {
              type: 'quiz',
              quizType: 'true_false',
              question: 'Los carros de hierro de Sísara eran la tecnología militar más avanzada disponible en el siglo XII a.C.',
              answer: true,
              explanation: 'Correcto. El hierro comenzaba a reemplazar al bronce en armamento durante este período (la transición Bronce-Hierro). Los 900 carros de Sísara representaban un dominio tecnológico abrumador sobre la infantería israelita sin carros. Su derrota fue tanto más extraordinaria.',
            },
          ],
        },
      ],
    },
    {
      id: 's4',
      title: 'Autoridad sin precedente — reflexión doctrinal',
      intro: {
        romanNumeral: 'IV',
        title: 'Lo que el Texto de Jueces 4-5 Enseña sobre el Llamamiento',
        paragraphs: [
          'El liderazgo de Débora plantea preguntas que el texto mismo no responde — y ese silencio es, en sí mismo, parte de su mensaje.',
        ],
      },
      topics: [
        {
          id: 't4-1',
          title: 'El llamamiento sin justificación',
          blocks: [
            {
              type: 'paragraph',
              text: 'Ningún otro juez en el libro de Jueces recibe la descripción simultánea de tres títulos: profetisa, esposa (con nombre de esposo), y jueza. La acumulación es deliberada. El texto quiere que el lector entienda que Débora no era una aproximación provisional a la autoridad — era la autoridad. Y el pueblo de Dios la reconocía como tal.',
            },
            {
              type: 'leader_quote',
              quote: 'Nuestro Padre Celestial no hace distinción en cuanto a quién puede recibir una revelación. Tanto los hombres como las mujeres tienen acceso por igual al Espíritu Santo, y el don de la revelación puede ser otorgado a cualquier persona digna.',
              name: 'Russell M. Nelson',
              role: 'Presidente de La Iglesia de Jesucristo de los Santos de los Últimos Días',
            },
            {
              type: 'paragraph',
              text: 'La Restauración enseña que el don profético no tiene fronteras de género (Joel 2:28; Hechos 2:17). Débora ejercía ese don en la forma más amplia posible: no solo recibiendo mensajes privados, sino gobernando toda una nación y convocando ejércitos en nombre del Señor. El precedente que su historia establece en el texto canónico es irreversible.',
            },
            {
              type: 'note_prompts',
              prompts: [
                { id: 'p1', question: '¿Qué te dice del carácter de Dios el hecho de que Israel reconociera sin resistencia registrada la autoridad de Débora como jueza?' },
                { id: 'p2', question: '¿Qué diferencia hay entre la autoridad que Débora ejercía como profetisa-jueza y la autoridad eclesiástica del sacerdocio? ¿El texto mismo establece alguna distinción?' },
                { id: 'p3', question: 'Si Débora viviera en el Israel actual o en tu comunidad de fe, ¿cómo crees que sería recibida? ¿Qué dice eso sobre nuestra comprensión del llamamiento divino?' },
              ],
            },
          ],
        },
        {
          id: 't4-2',
          title: '"Madre en Israel" — el título más alto',
          blocks: [
            {
              type: 'highlight_verse',
              reference: 'Jueces 5:7',
              text: 'Las aldeas quedaron abandonadas en Israel, habían decaído, hasta que yo Débora me levanté, me levanté como madre en Israel.',
            },
            {
              type: 'paragraph',
              text: 'En su propio cántico, Débora se da a sí misma un título que ningún otro juez usa: "madre en Israel." La maternidad en la cultura hebrea era una de las formas más altas de autoridad y responsabilidad: la madre era la transmisora de la fe, la guardiana de la identidad del hogar, la fuente de sabiduría práctica y espiritual. Una "madre en Israel" a escala nacional era la persona que protegía, nutría y defendía la identidad de todo el pueblo.',
            },
            {
              type: 'reflection',
              prompt: 'Débora combinó autoridad judicial, don profético y maternidad espiritual de una nación. ¿Cómo estas dimensiones — justicia, revelación, nutrición espiritual — se complementan en lugar de contradecirse? ¿Cuál de estas dimensiones ves más activa en tu propio servicio?',
            },
          ],
        },
      ],
    },
  ],
}
