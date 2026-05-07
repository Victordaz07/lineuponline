import type { Lesson } from '@/types/doctrine'

export const laResurreccionDeCristo: Lesson = {
  id: 'la-resurreccion-de-cristo',
  moduleId: 'personajes-escrituras',
  submoduleGroup: 'jesucristo',
  title: 'La Resurrección',
  subtitle: 'El hecho que cambia todo',
  author: 'Fuentes: Marcos 16; Lucas 24; Juan 20; 1 Corintios 15; 3 Nefi 11; DyC 76; DHC 1',
  description:
    'Pablo lo dijo sin rodeos: "Si Cristo no resucitó, vuestra fe es vana; aún estáis en vuestros pecados." La Resurrección no es el final feliz de una historia triste — es el eje sobre el que gira toda la fe cristiana. Esta lección recorre las apariciones del Cristo resucitado: desde María Magdalena hasta 3 Nefi, desde Tomás hasta José Smith.',
  level: 'INTERMEDIO',
  icon: '🌄',
  duration: 65,
  order: 14,
  status: 'PUBLISHED',
  studyBodyPlain: '',
  originalBodyPlain: '',
  previousLessonId: null,
  nextLessonId: null,
  studySections: [
    {
      id: 's1',
      title: 'El argumento de Pablo — 1 Corintios 15',
      intro: {
        romanNumeral: 'I',
        title: 'El argumento de Pablo — 1 Corintios 15',
        paragraphs: [
          'La mejor defensa de la Resurrección en el Nuevo Testamento no la escribió un evangelista — la escribió Pablo, un abogado formado en la escuela de Gamaliel, el mayor erudito judío de su generación. Y Pablo la estructura como un argumento legal, no como una declaración de fe.',
        ],
      },
      topics: [
        {
          id: 't1-1',
          title: 'El argumento más antiguo y el más potente',
          blocks: [
            {
              type: 'highlight_verse',
              text: 'Porque primeramente os he enseñado lo que asimismo recibí: Que Cristo murió por nuestros pecados, conforme a las Escrituras; y que fue sepultado, y que resucitó al tercer día, conforme a las Escrituras; y que apareció a Cefas, y después a los doce. Después apareció a más de quinientos hermanos a la vez, de los cuales muchos viven aún, y otros ya duermen.',
              reference: '1 Corintios 15:3-6',
            },
            {
              type: 'doctrine_box',
              title: 'La cadena de testimonio más antigua de la Resurrección',
              body: '1 Corintios fue escrita alrededor del año 54-55 d.C. — solo 20-25 años después de la Resurrección. Pero Pablo cita una tradición que él mismo "recibió" (v.3 — la misma terminología técnica rabínica para transmisión oral de enseñanza), lo que sitúa la fuente aún más atrás. Pablo menciona 500 testigos simultáneos y añade "de los cuales muchos viven aún" — una invitación explícita a verificar. Nadie que quisiera fabricar este relato añadiría testigos verificables vivos.',
            },
            {
              type: 'highlight_verse',
              text: 'Y si Cristo no resucitó, vuestra fe es vana; aún estáis en vuestros pecados. Entonces también los que durmieron en Cristo perecieron. Si en esta vida solamente esperamos en Cristo, somos los más dignos de lástima de todos los hombres.',
              reference: '1 Corintios 15:17-19',
            },
            {
              type: 'paragraph',
              text: 'Pablo no dice "si no creéis en la Resurrección, vuestra fe es incompleta." Dice que si la Resurrección no ocurrió, entonces toda la fe cristiana es "vana" — vacía, inútil. La Resurrección no es un punto doctrinal entre muchos — es el eje estructural de toda la fe. Sin ella, la Expiación queda incompleta, los muertos perecieron, y los vivos son los seres más dignos de lástima del universo.',
            },
            {
              type: 'key_points',
              title: 'Las apariciones del Cristo resucitado — lista completa',
              points: [
                'María Magdalena — Juan 20:11-18 (primera)',
                'Las otras mujeres — Mateo 28:9-10',
                'Pedro (Cefas) solo — 1 Corintios 15:5; Lucas 24:34',
                'Los dos discípulos de Emaús — Lucas 24:13-35',
                'Los Once en el Aposento Alto — Juan 20:19-23',
                'Tomás y los Once — Juan 20:24-29',
                'En Galilea — 500 a la vez (1 Corintios 15:6) y los Once (Mateo 28:16-20)',
                'Santiago, hermano de Jesús — 1 Corintios 15:7',
                'El pueblo en 3 Nefi — 2,500 personas, durante dos días (3 Nefi 11-28)',
                'Esteban — Hechos 7:55-56',
                'Pablo en el camino a Damasco — Hechos 9:3-5',
                'José Smith — Primera Visión (DHC 1:17)',
              ],
            },
          ],
        },
      ],
    },
    {
      id: 's2',
      title: 'María Magdalena — la primera testigo',
      intro: {
        romanNumeral: 'II',
        title: 'María Magdalena — la primera testigo',
        paragraphs: [
          'De todos los testigos posibles, el Cristo resucitado eligió aparecerse primero a María Magdalena — una mujer en una cultura que no aceptaba el testimonio femenino en ningún tribunal romano ni judío. Esa elección no fue accidental.',
        ],
      },
      topics: [
        {
          id: 't2-1',
          title: 'Juan 20 — el jardín antes del amanecer',
          blocks: [
            {
              type: 'highlight_verse',
              text: 'María se quedó fuera llorando junto al sepulcro; y mientras lloraba, se inclinó para mirar dentro del sepulcro. Y ve a dos ángeles con vestiduras blancas, que estaban sentados el uno a la cabecera, y el otro a los pies, donde el cuerpo de Jesús había sido puesto.',
              reference: 'Juan 20:11-12',
            },
            {
              type: 'highlight_verse',
              text: 'Jesús le dijo: ¡María! Volviéndose ella, le dijo: ¡Raboni! (que quiere decir, Maestro). Jesús le dijo: No me toques, porque aún no he subido a mi Padre; pero ve a mis hermanos, y diles: Subo a mi Padre y a vuestro Padre, a mi Dios y a vuestro Dios.',
              reference: 'Juan 20:16-17',
            },
            {
              type: 'deep_dive',
              badge: 'La primera testigo',
              title: 'Por qué María Magdalena y no Pedro',
              paragraphs: [
                'En el siglo I, el testimonio de una mujer no tenía peso legal en un tribunal romano ni judío. Si alguien quisiera fabricar un relato creíble de la Resurrección, haría de Pedro o de Juan el primer testigo. El hecho de que todos los evangelios registren a María Magdalena como la primera en ver al Cristo resucitado es uno de los detalles más difíciles de explicar si el relato fue inventado.',
                'La palabra que Jesús usa es su nombre — "¡María!" No una descripción, no un título. Su nombre. El buen pastor llama a sus ovejas "por nombre" (Juan 10:3), y en ese jardín al amanecer, el Cristo resucitado demuestra que lo recuerda. Después de la crucifixión, el entierro, el sepulcro cerrado con piedra — lo primero que hace es llamar a María por nombre.',
                'Y luego la comisiona: "ve a mis hermanos, y diles." María se convierte en la primera misionera del Cristo resucitado. La mujer que la cultura del siglo I habría descartado como testigo se convierte en la primera en llevar el mensaje más importante de la historia.',
              ],
            },
          ],
        },
      ],
    },
    {
      id: 's3',
      title: 'El camino a Emaús — Lucas 24',
      intro: {
        romanNumeral: 'III',
        title: 'El camino a Emaús — Lucas 24',
        paragraphs: [
          'Es el relato de aparición más largo del Nuevo Testamento y el más íntimo — no porque Cristo se haya identificado desde el principio, sino exactamente porque no lo hizo. La aparición de Emaús es el retrato más humano del Cristo resucitado en los evangelios.',
        ],
      },
      topics: [
        {
          id: 't3-1',
          title: 'El caminante desconocido',
          blocks: [
            {
              type: 'highlight_verse',
              text: 'Y aconteció que mientras hablaban y discutían entre sí, Jesús mismo se acercó, y caminaba con ellos. Mas los ojos de ellos estaban velados, para que no le conociesen.',
              reference: 'Lucas 24:15-16',
            },
            {
              type: 'paragraph',
              text: 'Dos discípulos caminan 11 kilómetros de Jerusalén a Emaús, tristes y confusos. Un hombre se une a ellos y les pregunta de qué hablan. Se sorprenden de que no sepa lo que pasó — "tú solo eres forastero en Jerusalén" (v.18). El desconocido entonces les explica la Biblia completa con referencia a Cristo. Y llegan al destino. Ellos le invitan a cenar. Él parte el pan.',
            },
            {
              type: 'highlight_verse',
              text: 'Y aconteció que estando sentado con ellos a la mesa, tomó el pan y lo bendijo, lo partió, y les dio. Entonces les fueron abiertos los ojos, y le reconocieron; mas él se desapareció de su vista.',
              reference: 'Lucas 24:30-31',
            },
            {
              type: 'doctrine_box',
              title: 'Por qué lo reconocieron al partir el pan',
              body: 'No lo reconocieron mientras caminaba. No lo reconocieron mientras explicaba las escrituras. Lo reconocieron cuando partió el pan — el mismo gesto de la Última Cena (Lucas 22:19). La Santa Cena no es un ritual inventado: es un acto de reconocimiento. "Haced esto en memoria de mí" tiene un significado concreto en Emaús: el pan partido revela al Cristo que está presente. ¿Cuántas veces estamos caminando junto a Cristo sin reconocerlo, hasta que partimos el pan?',
            },
          ],
        },
      ],
    },
    {
      id: 's4',
      title: 'Tomás — "Mi Señor y mi Dios"',
      intro: {
        romanNumeral: 'IV',
        title: 'Tomás — "Mi Señor y mi Dios"',
        paragraphs: [
          'Tomás es el apóstol que la tradición llama "el incrédulo" — pero esa lectura es incompleta. Tomás hizo la declaración cristológica más directa del Nuevo Testamento, y lo hizo después de ver y tocar al Cristo resucitado.',
        ],
      },
      topics: [
        {
          id: 't4-1',
          title: 'El que dudó — y luego confesó',
          blocks: [
            {
              type: 'highlight_verse',
              text: 'Entonces le dijo a Tomás: Pon aquí tu dedo, y mira mis manos; y acerca tu mano, y métela en mi costado; y no seas incrédulo, sino creyente. Entonces Tomás respondió y le dijo: ¡Señor mío, y Dios mío!',
              reference: 'Juan 20:27-28',
            },
            {
              type: 'doctrine_box',
              title: '"Mi Señor y mi Dios" — la confesión más directa del NT',
              body: 'Cuando Tomás dice "Mi Señor y mi Dios" en Juan 20:28, hace la declaración cristológica más directa del Nuevo Testamento. No dice "mi maestro" ni "mi profeta" — dice "mi Dios." Y Jesús no lo corrige. En el siglo I, cuando alguien decía algo falso sobre la naturaleza de Dios delante de un rabino o profeta, era corregido inmediatamente. El silencio de Cristo ante la declaración de Tomás es una confirmación implícita.',
            },
            {
              type: 'highlight_verse',
              text: 'Jesús le dijo: Porque me has visto, Tomás, creíste; bienaventurados los que no vieron, y creyeron.',
              reference: 'Juan 20:29',
            },
            {
              type: 'paragraph',
              text: 'Cristo no reprende a Tomás por haber exigido evidencia — lo bendice por haberla recibido y creer. La bienaventuranza va para "los que no vieron y creyeron" — los creyentes de generaciones posteriores. Pero la fe de Tomás sigue siendo válida. El evangelio no requiere creer sin investigar — requiere investigar con honestidad y actuar sobre lo que se encuentra.',
            },
          ],
        },
      ],
    },
    {
      id: 's5',
      title: '3 Nefi y la Primera Visión — la Resurrección continúa',
      intro: {
        romanNumeral: 'V',
        title: '3 Nefi y la Primera Visión — la Resurrección continúa',
        paragraphs: [
          'El patrón de apariciones del Cristo resucitado no terminó en el siglo I. La Restauración enseña que el mismo Cristo que se apareció a María Magdalena, a los Once, a Pablo — se apareció también en América (3 Nefi) y a José Smith en el siglo XIX. La Resurrección no es una reliquia histórica — es una realidad presente.',
        ],
      },
      topics: [
        {
          id: 't5-1',
          title: 'Las apariciones que van más allá del Nuevo Testamento',
          blocks: [
            {
              type: 'highlight_verse',
              text: 'Y aconteció que tendió su mano y habló al pueblo, diciendo: He aquí, soy Jesucristo, de quien han hablado los profetas, que había de venir al mundo. Y aconteció que él extendió su mano y habló al pueblo... y vieron las heridas en sus manos y sus pies, y creyeron.',
              reference: '3 Nefi 11:9-10, 15',
            },
            {
              type: 'paragraph',
              text: 'La aparición de 3 Nefi es la mejor documentada después de la resurrección: dos días, 2,500 testigos, cada uno tocó las heridas. El Cristo de 3 Nefi llora, bendice niños, ora, organiza la Iglesia. No es una visión — es una aparición física del mismo Cristo con el mismo cuerpo que María Magdalena reconoció en el jardín.',
            },
            {
              type: 'highlight_verse',
              text: 'Vi una columna de luz, exactamente sobre mi cabeza, más brillante que el sol, que descendió gradualmente hasta descansar sobre mí... Cuando la luz reposó sobre mí, vi a dos Personajes, cuyo brillo y gloria desafían toda descripción, parados sobre mí en el aire. Uno de ellos me habló, llamándome por mi nombre, y dijo, señalando al otro: Éste es mi Hijo Amado. ¡Escúchale!',
              reference: 'DHC 1:17',
            },
            {
              type: 'doctrine_box',
              title: 'La Primera Visión como aparición de resurrección',
              body: 'La Primera Visión no es solo el inicio de la Restauración — es la aparición más reciente del Cristo resucitado registrada en texto histórico. José Smith vio al Padre y al Hijo: dos seres distintos, corporales, gloriosos, en 1820. Esta aparición confirma (1) la resurrección física de Cristo — tiene un cuerpo glorificado, (2) la naturaleza del Padre — también es un ser corpóreo, (3) la distinción de las personas de la Divinidad — no son una sola sustancia. Todo lo que la Primera Visión enseña está conectado con la resurrección.',
            },
            {
              type: 'compare_grid',
              title: 'Patrones comunes en las apariciones del Cristo resucitado',
              left: {
                label: 'Lo que siempre ocurre',
                points: [
                  'Un individuo o grupo preparado recibe la aparición',
                  'Cristo se identifica — "Yo soy Jesucristo"',
                  'Las marcas físicas confirman su identidad (heridas, cuerpo real)',
                  'Se entrega una misión o comisión',
                  'El testigo queda transformado permanentemente',
                ],
              },
              right: {
                label: 'Lo que varía',
                points: [
                  'El contexto — jardín, camino, cuarto cerrado, cielo abierto',
                  'Si es reconocido inmediatamente o no',
                  'La duración — de minutos a dos días (3 Nefi)',
                  'El número de testigos — 1 (María), 500 (Pablo), 2,500 (3 Nefi)',
                  'La forma — en gloria vs. como caminante en un camino',
                ],
              },
            },
          ],
        },
      ],
    },
    {
      id: 's6',
      title: 'Por qué la Resurrección cambia todo',
      intro: {
        romanNumeral: 'VI',
        title: 'Por qué la Resurrección cambia todo',
        paragraphs: [
          'No es un detalle doctrinal. No es la "cereza del pastel" del relato de Cristo. Pablo dijo que sin la Resurrección, toda la fe cristiana es vana. ¿Por qué tiene ese peso?',
        ],
      },
      topics: [
        {
          id: 't6-1',
          title: 'Lo que la Resurrección garantiza',
          blocks: [
            {
              type: 'key_points',
              title: 'Lo que la Resurrección confirma y garantiza',
              points: [
                'Confirma la identidad de Cristo — si Dios lo resucitó, las afirmaciones de Cristo son verdaderas (Romanos 1:4)',
                'Garantiza la resurrección universal — "como en Adán todos mueren, también en Cristo todos serán vivificados" (1 Corintios 15:22)',
                'Completa la Expiación — la muerte sin resurrección no sería victoria; sería derrota',
                'Establece la naturaleza eterna del cuerpo humano — nuestros cuerpos resucitarán como el de Cristo (Alma 11:43)',
                'Hace posible el trabajo vicario — DyC 138 depende de que Cristo esté vivo para presidir el mundo espiritual',
                'Garantiza que el Salvador es personal — no una memoria o una idea, sino un Ser real que conoce tu nombre',
              ],
            },
            {
              type: 'leader_quote',
              quote: 'La Resurrección de Jesucristo es el milagro más grande de la historia. Y cada uno de nosotros — absolutamente cada uno — se beneficiará de ese milagro. La muerte no tiene la última palabra. Cristo la tiene.',
              name: 'Russell M. Nelson',
              role: 'Conferencia General, abril 2021',
            },
            {
              type: 'highlight_verse',
              text: 'Y esta mortalidad debe vestirse de inmortalidad, y esto corruptible debe vestirse de incorrupción... Sorbida es la muerte en victoria. ¿Dónde está, oh muerte, tu aguijón? ¿Dónde, oh sepulcro, tu victoria?',
              reference: '1 Corintios 15:53-55',
            },
            {
              type: 'paragraph',
              text: 'Pablo escribió esas palabras en forma de burla. Le está hablando a la muerte como si fuera un enemigo derrotado. No con tristeza — con triunfo. La Resurrección convierte la pregunta más aterradora de la existencia humana ("¿qué pasa cuando muero?") en la pregunta más esperanzadora. La respuesta es: lo mismo que le pasó a Cristo. Cuerpo y espíritu reunidos para siempre. El cuerpo que tienes no es un accidente temporal — es parte de quién eres eternamente.',
            },
            {
              type: 'quiz',
              quizType: 'true_false',
              question: 'En 1 Corintios 15:6, Pablo menciona que Cristo se apareció a más de 500 personas a la vez — y añade que muchos de esos testigos todavía estaban vivos cuando escribió.',
              answer: true,
              explanation: 'Correcto. 1 Corintios 15:6 dice: "Después apareció a más de quinientos hermanos a la vez, de los cuales muchos viven aún, y otros ya duermen." La frase "muchos viven aún" es una invitación implícita a verificar el testimonio con testigos vivos — algo que solo alguien que dice la verdad añadiría.',
            },
            {
              type: 'quiz',
              quizType: 'fill_blank',
              question: 'En Juan 20:28, después de tocar las heridas del Cristo resucitado, Tomás hizo la declaración cristológica más directa del Nuevo Testamento: "___ mío, y ___ mío."',
              answer: 'Señor / Dios',
              explanation: 'Juan 20:28: "Entonces Tomás respondió y le dijo: ¡Señor mío, y Dios mío!" Esta es la confesión más directa de la divinidad de Cristo en el Nuevo Testamento, hecha por alguien que dudó, investigó, y creyó por evidencia física.',
            },
            {
              type: 'reflection',
              prompt: '¿En qué momento de tu vida ha sido la Resurrección más real para ti — no como doctrina sino como hecho? Si la Resurrección es verdadera, ¿qué cambia en cómo ves tu propio cuerpo, tu muerte eventual, y a las personas que has perdido?',
            },
          ],
        },
      ],
    },
  ],
}
