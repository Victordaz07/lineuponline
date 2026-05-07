import type { Lesson } from '@/types/doctrine'

export const visionTresReinos: Lesson = {
  id: 'vision-tres-reinos',
  moduleId: 'discursos-sermones-clasicos',
  title: 'Los Tres Reinos de Gloria — Estudio Profundo',
  subtitle: 'Enseñanza complementaria al plan de salvación',
  author: 'Fuentes principales: DyC 76, 88, 131, 132, 138; 1 Corintios 15; 2 Corintios 12',
  description:
    'Un estudio detallado de las condiciones, los habitantes y las promesas de cada reino de gloria. Desde el fragmentario testimonio de Pablo hasta la revelación plena de DyC 76: quiénes entran, qué reciben, y qué implica para la misión y la vida del santo de los últimos días.',
  level: 'AVANZADO',
  icon: '✨',
  duration: 55,
  order: 3,
  status: 'PUBLISHED',
  studyBodyPlain: '',
  originalBodyPlain: '',
  previousLessonId: null,
  nextLessonId: null,
  studySections: [
    {
      id: 's1',
      title: 'Antes de DyC 76: El Testimonio Fragmentario',
      intro: {
        romanNumeral: 'I',
        title: 'Antes de DyC 76: El Testimonio Fragmentario',
        paragraphs: [
          'La revelación de DyC 76 no apareció en el vacío. Pablo ya había vislumbrado algo que excedía el sistema binario de cielo e infierno — pero lo que vio fue tan grande que ni siquiera intentó describirlo en detalle. La Restauración completó lo que Pablo apenas tocó.',
        ],
      },
      topics: [
        {
          id: 't1',
          title: 'Lo Que Pablo Vio y No Pudo Decir',
          blocks: [
            {
              type: 'highlight_verse',
              text: 'Conozco a un hombre en Cristo, que hace catorce años (si en el cuerpo, no lo sé; si fuera del cuerpo, no lo sé; Dios lo sabe) fue arrebatado hasta el tercer cielo. Y conozco al tal hombre [...] que fue arrebatado al paraíso, donde oyó palabras inefables que no le es dado al hombre expresar.',
              reference: '2 Corintios 12:2–4',
            },
            {
              type: 'paragraph',
              text: 'Pablo vio el "tercer cielo" — lo que implica que hay al menos tres niveles de gloria celestial. Pero lo que vio era "inefable": no se podía expresar en palabras. Esta es la diferencia entre Pablo y Joseph Smith: Pablo vio pero no pudo escribir; Joseph también vio, y el Señor le dijo "escribid la visión" (DyC 76:28). La Restauración trajo lo que Pablo no pudo articular.',
            },
            {
              type: 'highlight_verse',
              text: 'Hay también cuerpos celestiales, y cuerpos terrestres; pero una es la gloria de los celestiales, y otra la de los terrestres. Una es la gloria del sol, otra la gloria de la luna, y otra la gloria de las estrellas; pues una estrella es diferente de otra en gloria.',
              reference: '1 Corintios 15:40–41',
            },
            {
              type: 'paragraph',
              text: 'Pablo usó el sol, la luna y las estrellas como metáforas de diferentes glorias de los cuerpos resurrecto. La Restauración los adoptó como las imágenes de los tres reinos de gloria: celestial (sol), terrestre (luna), telestial (estrellas). Lo que Pablo presentó como ilustración, DyC 76 lo revela como descripción. El apóstol tenía la metáfora; el Profeta recibió el mapa completo.',
            },
            {
              type: 'deep_dive',
              badge: 'Contexto',
              title: 'El problema con el sistema binario',
              paragraphs: [
                'Durante 1,800 años, la teología cristiana operó bajo una premisa: mueres y vas al cielo o al infierno. Algunos añadieron el purgatorio como estado temporal, pero el destino final seguía siendo binario. Este sistema tenía un problema filosófico irresoluble: ¿cómo puede ser justa la misma gloria eterna para un mártir que murió por Cristo y para alguien que se convirtió en su lecho de muerte? ¿Y es justo el mismo tormento eterno para Hitler y para alguien que simplemente no creyó?',
                'Pablo intuyó que el sistema no era así de simple — su visión del "tercer cielo" sugería profundidad que la teología cristiana no supo manejar. Fue relegada a anécdota mística. La Restauración tomó esa intuición, la expandió, y respondió la pregunta: la gloria de Dios es infinitamente matizada, y cada alma recibe exactamente lo que su corazón fue capaz de recibir.',
              ],
            },
          ],
        },
      ],
    },
    {
      id: 's2',
      title: 'La Ley de la Cosecha — Por Qué Hay Reinos Diferentes',
      intro: {
        romanNumeral: 'II',
        title: 'La Ley de la Cosecha — Por Qué Hay Reinos Diferentes',
        paragraphs: [
          'Los tres reinos no son decisiones arbitrarias de Dios. DyC 88 revela el principio subyacente: cada persona es resucitada en la gloria cuya ley vivió. No es favoritism — es física espiritual. No puedes recibir más luz de la que estás preparado para sostener.',
        ],
      },
      topics: [
        {
          id: 't2',
          title: 'DyC 88 — La Ley del Reino',
          blocks: [
            {
              type: 'highlight_verse',
              text: 'Y aquel que no puede sufrir la ley de un reino celestial no puede endurar una gloria celestial. Y aquel que no puede sufrir la ley de un reino terrestre no puede endurar una gloria terrestre. Y aquel que no puede sufrir la ley de un reino telestial no puede endurar una gloria telestial.',
              reference: 'Doctrina y Convenios 88:22–24',
            },
            {
              type: 'doctrine_box',
              title: 'El principio: la gloria es proporcional a la ley vivida',
              body: 'DyC 88 enseña algo contraintuitivo: los destinos eternos no son asignados desde afuera — son el resultado natural de quién eres en el momento del juicio. No es que Dios "decida" enviarte al reino terrestre; es que el reino terrestre es el nivel de gloria que puedes sostener dado el nivel de luz que viviste. Una persona que nunca aceptó la plenitud del evangelio no podría "soportar" la gloria del reino celestial — no por castigo, sino porque esa gloria requiere un tipo de ser que esa persona aún no es. El amor de Dios es tan grande que no fuerza a nadie a un nivel de gloria que los destruiría.',
            },
            {
              type: 'highlight_verse',
              text: 'El que recibe la luz y sigue en Dios, recibe más luz; y esa luz aumenta más y más hasta el día perfecto.',
              reference: 'Doctrina y Convenios 50:24',
            },
            {
              type: 'compare_grid',
              title: 'La ley que corresponde a cada reino',
              left: {
                label: 'Ley celestial',
                points: [
                  'Recibir todos los convenios y ordenanzas del evangelio',
                  'Sellamiento eterno del matrimonio en el templo',
                  'Vivir según la plenitud de la ley del evangelio',
                  'Resulta en: presencia del Padre y el Hijo, exaltación, aumento eterno',
                ],
              },
              right: {
                label: 'Ley terrestre / telestial',
                points: [
                  'Terrestre: vida honorable sin recibir el evangelio completo',
                  'Telestial: rechazo del evangelio; vivir según los deseos carnales',
                  'Cada ley trae su propia gloria — ninguna es "castigo" en sentido de venganza',
                  'Resulta en: gloria proporcional al nivel de luz recibida y vivida',
                ],
              },
            },
            {
              type: 'key_points',
              title: 'Cuatro principios de DyC 88 sobre la ley de la cosecha',
              points: [
                'Cada reino tiene su propia ley — celestial, terrestre, telestial (DyC 88:22-24)',
                'La resurrección ocurre en fases: los justos primero, el resto después (DyC 88:96-102)',
                'No se puede entrar a una gloria superior a la ley que se vivió — no porque Dios no quiera, sino porque el alma no podría sostenerla',
                'El proceso es justo: todos tendrán oportunidad de escuchar el evangelio, sea en esta vida o en el mundo de los espíritus (DyC 138)',
              ],
            },
          ],
        },
      ],
    },
    {
      id: 's3',
      title: 'El Mundo de los Espíritus — El Proceso Antes del Juicio',
      intro: {
        romanNumeral: 'III',
        title: 'El Mundo de los Espíritus — El Proceso Antes del Juicio',
        paragraphs: [
          'Entre la muerte y la resurrección existe el mundo de los espíritus. DyC 138 — recibida por Joseph F. Smith en 1918 — abrió la comprensión de lo que ocurre allí. No es un estado de espera pasivo: es el proceso por el que la mayoría de la humanidad oye el evangelio por primera vez.',
        ],
      },
      topics: [
        {
          id: 't3',
          title: 'DyC 138 — La Visión de la Redención de los Muertos',
          blocks: [
            {
              type: 'media_slot',
              kind: 'image',
              src: undefined,
              alt: 'Joseph F. Smith meditando en las Escrituras el día que recibió DyC 138',
              caption: 'Joseph F. Smith, 3 de octubre de 1918 — pocos días antes de su muerte, recibió la revelación más extensa de su ministerio',
              contextCard: {
                year: '1918',
                place: 'Salt Lake City, Utah',
                label: 'tres-reinos-joseph-f-smith-vision-138',
              },
            },
            {
              type: 'paragraph',
              text: 'El 3 de octubre de 1918, Joseph F. Smith, el sexto Presidente de la Iglesia, meditaba en las Escrituras sobre la Expiación. Su hijo Hyrum acababa de morir en la guerra; varios de sus hijos habían muerto ese año. Mientras leía 1 Pedro 3:18-20 — el pasaje sobre Cristo predicando a los "espíritus en prisión" — los cielos se abrieron y vio el mundo de los espíritus.',
            },
            {
              type: 'highlight_verse',
              text: 'Vi la multitud de los espíritus de los justos, que habían muerto siendo fieles al testimonio de Jesús, mientras esperaban la resurrección de entre los muertos. Los vio como cuerpos organizados... y entre esa gran multitud aparecieron el Salvador mismo, y tomó su presencia allí, y su mirada y aspecto era semejante.',
              reference: 'Doctrina y Convenios 138:12–16 (paráfrasis)',
            },
            {
              type: 'compare_grid',
              title: 'Paraíso vs. Prisión espiritual',
              left: {
                label: 'Paraíso (DyC 138:12-17)',
                points: [
                  'Los que murieron fieles al evangelio',
                  'Estado de paz, descanso y "alegría anticipada" de la resurrección',
                  'Cristo fue allí y organizó el trabajo misional para los muertos',
                  'Los justos van directamente al paraíso',
                  'Incluye a santos de todos los tiempos y dispensaciones',
                ],
              },
              right: {
                label: 'Prisión espiritual (DyC 138:29-37)',
                points: [
                  'Los que murieron sin el evangelio o rechazándolo',
                  'Estado de espera — no tortura, pero sí ausencia de paz plena',
                  'Misioneros espirituales (enviados desde el paraíso) predican allí',
                  'Al aceptar el evangelio y recibir las ordenanzas por vicariedad, salen',
                  'Los "sufrimientos" de DyC 76:106 para el telestial ocurren aquí',
                ],
              },
            },
            {
              type: 'doctrine_box',
              title: 'Por qué el trabajo de templo es esencial para los tres reinos',
              body: 'DyC 138 revela que las ordenanzas salvadoras son necesarias incluso para los muertos — y que los espíritus en prisión pueden aceptar o rechazar el evangelio cuando se les predica. Las ordenanzas vicarias del templo (bautismo, confirmación, endowment, sellamiento) abren la puerta para que los que aceptan puedan entrar al reino celestial. Sin el trabajo de templo, los honorables que nunca oyeron el evangelio quedarían limitados al reino terrestre no por falta de rectitud, sino por falta de oportunidad. El trabajo de templo es el puente entre la justicia de Dios y su misericordia.',
            },
            {
              type: 'highlight_verse',
              text: 'Así fue preparada la redención de los muertos — una esperanza de gloria para los muertos que habían muerto en sus pecados sin conocimiento de la verdad o que hubieran transgredido las leyes habidas, para recibir parte en la primera resurrección.',
              reference: 'Doctrina y Convenios 138:58',
            },
          ],
        },
      ],
    },
    {
      id: 's4',
      title: 'Los Tres Reinos — Perfil Detallado de Habitantes',
      intro: {
        romanNumeral: 'IV',
        title: 'Los Tres Reinos — Perfil Detallado de Habitantes',
        paragraphs: [
          'DyC 76 no habla en abstracto — describe categorías específicas de personas en cada reino. Cuando leemos esas descripciones, empezamos a ver caras conocidas, y a entender dónde podríamos estar nosotros mismos.',
        ],
      },
      topics: [
        {
          id: 't4',
          title: 'Quién Está en Cada Reino — El Texto',
          blocks: [
            {
              type: 'media_slot',
              kind: 'image',
              src: undefined,
              alt: 'Representación artística de los tres reinos — el sol, la luna y las estrellas como símbolos de los tres grados de gloria',
              caption: 'La gloria de cada reino difiere como el sol difiere de la luna y de las estrellas (1 Corintios 15:40-42)',
              contextCard: {
                label: 'tres-reinos-artistic-sun-moon-stars',
              },
            },
            {
              type: 'highlight_verse',
              text: 'Y la gloria de la luna es igual a los que recibieron el evangelio de Cristo según el convenio, pero no la tomaron cuando se les llamó. Son los del cuerpo de Cristo, pero no los herederos del evangelio, sino personas honorables de la tierra, que fueron cegadas por las artimañas de los hombres.',
              reference: 'Doctrina y Convenios 76:74–75',
            },
            {
              type: 'key_points',
              title: 'Habitantes del reino terrestre — perfiles (DyC 76:71-80)',
              points: [
                '"Honorables de la tierra" — personas de buena vida que no aceptaron la plenitud del evangelio',
                'Los que murieron sin ley — sin oportunidad de escuchar el evangelio en esta vida (v.72)',
                'Los que recibieron el evangelio en el mundo de los espíritus pero no en esta vida (v.73-74)',
                '"Cegados por las artimañas de los hombres" — honestamente equivocados, no maliciosos (v.75)',
                'Santos que recibieron el evangelio pero no fueron "valientes" — demasiado tibios (v.79)',
              ],
            },
            {
              type: 'highlight_verse',
              text: 'He aquí, estos son los que murieron en sus pecados y pecados, a quienes el diablo tuvo poder sobre ellos mientras vivieron en sus cuerpos de carne. Estos son aquellos que no recibieron el evangelio de Cristo ni el testimonio de Jesús.',
              reference: 'Doctrina y Convenios 76:81–82',
            },
            {
              type: 'key_points',
              title: 'Habitantes del reino telestial — perfiles (DyC 76:81-112)',
              points: [
                '"Los que no recibieron el evangelio de Cristo ni el testimonio de Jesús" (v.82)',
                'Mentirosos, hechiceros, adúlteros, fornicarios (v.103) — activamente impíos',
                '"El número de ellos es grande como la arena del mar" (v.109) — la mayoría de la humanidad',
                'Sufren en prisión espiritual hasta la última resurrección (v.84-85)',
                'Al final, su gloria "sobrepasa todo entendimiento" — incluso esto es misericordioso (v.89)',
              ],
            },
            {
              type: 'doctrine_box',
              title: 'Una pregunta difícil: ¿dónde están los miembros inactivos?',
              body: 'DyC 76 no da listas definitivas de individuos — da principios. Un miembro bautizado que abandona la práctica del evangelio no necesariamente va al telestial. El texto del terrestre habla de "los que recibieron el evangelio de Cristo pero no lo tomaron cuando se les llamó" y de los "santos que no fueron valientes en el testimonio de Jesús" (v.79). Hay un rango dentro de cada categoría, y la aplicación a casos individuales queda en manos de Dios. Lo que sí queda claro es la dirección: los convenios del templo son el camino hacia el reino celestial, y la diligencia en guardarlos es la diferencia entre el más alto y los demás grados.',
            },
          ],
        },
      ],
    },
    {
      id: 's5',
      title: 'La Exaltación — DyC 132 y el Matrimonio Eterno',
      intro: {
        romanNumeral: 'V',
        title: 'La Exaltación — DyC 132 y el Matrimonio Eterno',
        paragraphs: [
          'Dentro del reino celestial hay tres grados (DyC 131:1-4). Solo el más alto trae la exaltación plena — y la condición única es el matrimonio eterno sellado en el templo. DyC 132 revela por qué el matrimonio no es simplemente un convenio humano sino el fundamento de la vida eterna.',
        ],
      },
      topics: [
        {
          id: 't5',
          title: 'DyC 131–132 — El Convenio de la Exaltación',
          blocks: [
            {
              type: 'media_slot',
              kind: 'image',
              src: undefined,
              alt: 'Pareja siendo sellada en el templo — sala de sellamiento con altar blanco',
              caption: 'El sellamiento eterno es la puerta al más alto grado del reino celestial (DyC 131:1-4)',
              contextCard: {
                label: 'tres-reinos-temple-sealing-exaltation',
              },
            },
            {
              type: 'highlight_verse',
              text: 'En el grado más alto del reino celestial se observa esta ley: para obtener el más alto, un hombre debe entrar en este orden del sacerdocio [del matrimonio eterno]; y si no lo hace, no puede obtenerlo. Puede entrar al otro, pero eso es el fin de su reino; no puede tener un aumento.',
              reference: 'Doctrina y Convenios 131:1–4',
            },
            {
              type: 'highlight_verse',
              text: 'Y si os sellais en la tierra, tendréis poder sobre la muerte y el infierno; y si vivís según mi ley, el poder que os ha sido dado se convierte en una bendición sobre vuestra posteridad después de vosotros, y sobre los hijos de vuestros hijos eternamente, lo cual os será una gloria inmortal.',
              reference: 'Doctrina y Convenios 132:19 (paráfrasis)',
            },
            {
              type: 'doctrine_box',
              title: 'Salvación vs. exaltación — la distinción crítica',
              body: 'Lorenzo Snow, quinto Presidente de la Iglesia, articuló esta distinción: "La inmortalidad es un regalo gratuito para todos los hijos de Dios; la exaltación debe ganarse." Todos los hijos de Dios serán resucitados — eso es la "salvación" en su sentido más básico. Pero la exaltación — el más alto grado del reino celestial, con el aumento eterno y la presencia plena del Padre — requiere los convenios del templo, incluyendo el matrimonio eterno. Sin el sellamiento, un alma puede entrar al reino celestial, pero no al más alto grado. La diferencia entre "ser salvo" y "ser exaltado" es la diferencia entre la luna y el sol.',
            },
            {
              type: 'compare_grid',
              title: 'Salvación vs. exaltación',
              left: {
                label: 'Salvación (kingdoms of glory)',
                points: [
                  'Todos los que no son hijos de perdición la reciben',
                  'Requiere solo la resurrección — un don gratuito de Cristo',
                  'Incluye los tres reinos de gloria',
                  'Es la obra básica de la Expiación',
                  '"Immortality is a free gift" — Snow',
                ],
              },
              right: {
                label: 'Exaltación (celestial, grado más alto)',
                points: [
                  'Requiere todos los convenios y ordenanzas del evangelio',
                  'Requiere el sellamiento eterno del matrimonio en el templo',
                  'Requiere "haber guardado todos los convenios"',
                  'Resulta en: "dioses, aun los hijos de Dios" (DyC 76:58)',
                  'Incluye aumento eterno — familia eterna sin fin',
                ],
              },
            },
            {
              type: 'quiz',
              quizType: 'true_false',
              question: 'Según DyC 131:1-4, una persona puede entrar al reino celestial sin el matrimonio eterno, pero no al grado más alto de ese reino.',
              answer: true,
              explanation: 'Correcto. DyC 131:1-4 enseña que hay tres grados dentro del reino celestial. El más alto requiere el matrimonio eterno. Sin él, una persona puede entrar al reino celestial (un segundo o tercer grado) pero "ese es el fin de su reino; no puede tener un aumento." La diferencia es entre salvación celestial y exaltación.',
            },
          ],
        },
      ],
    },
    {
      id: 's6',
      title: 'Implicaciones para la Vida del Santo',
      intro: {
        romanNumeral: 'VI',
        title: 'Implicaciones para la Vida del Santo',
        paragraphs: [
          'La doctrina de los tres reinos no es solo especulación sobre el más allá. Transforma directamente cómo el miembro activo del evangelio entiende su llamamiento misionero, su vida de convenios, y la naturaleza del Dios a quien sirve.',
        ],
      },
      topics: [
        {
          id: 't6',
          title: 'Por Qué Esta Doctrina Cambia Cómo Vivimos',
          blocks: [
            {
              type: 'key_points',
              title: 'Cuatro implicaciones prácticas de DyC 76 y 88',
              points: [
                'La misericordia de Dios es más grande de lo que imaginamos — incluso quienes no aceptan el evangelio en esta vida tienen oportunidad en el mundo de los espíritus',
                'Las ordenanzas importan eternamente — no porque salven automáticamente, sino porque abren el acceso al reino más alto de gloria',
                'El evangelio no es para los "perfectos" — el telestial es para "los malvados" y aun ellos reciben gloria; el evangelio es para los que quieren más',
                'La motivación correcta no es el miedo al infierno sino el amor a la exaltación — vivir el evangelio para ser como Dios, no para evitar el castigo',
              ],
            },
            {
              type: 'highlight_verse',
              text: 'Pues he aquí, así dice el Señor: Yo, el Señor, soy misericordioso y piadoso con los que me temen, y me complace honrarlos que me sirven en justicia y verdad hasta el fin. Grande será su recompensa y eterna será su gloria.',
              reference: 'Doctrina y Convenios 76:5–6',
            },
            {
              type: 'leader_quote',
              quote: 'La revelación de los tres reinos de gloria es la declaración más expansiva de la misericordia de Dios en la historia de la revelación. Ningún otro texto canónico cristiano describe un Dios que organiza el más allá con tanta precisión proporcional a la rectitud de cada hijo. No es que el pecado no importe — importa profundamente. Es que incluso los que pecaron reciben más de lo que merecen, porque la misericordia de Dios supera la comprensión humana del mérito.',
              name: 'Jeffrey R. Holland',
              role: '"The Grandeur of God", Conferencia General, octubre 2003 (trad.)',
            },
            {
              type: 'deep_dive',
              badge: 'Profundizar',
              title: 'El "infierno" en la doctrina restaurada',
              paragraphs: [
                'La palabra "infierno" en el evangelio restaurado tiene un uso específico. En DyC 76, los que van a "las tinieblas de afuera" — el único destino sin gloria — son los hijos de perdición: los que tuvieron un testimonio perfecto del Hijo de Dios y lo negaron deliberadamente (DyC 76:31-35). El requisito es tan alto que José Smith dijo que sería necesario abrir los cielos para que alguien pudiera calificar.',
                'El "infierno" en el sentido del mundo de los espíritus de sufrimiento (prisión espiritual) es temporal — termina con la resurrección y el juicio. El "infierno" como destino eterno y sin redención está reservado para los hijos de perdición.',
                'Esta distinción tiene implicaciones pastorales enormes: la persona que está luchando con el pecado, que duda, que ha cometido errores graves — no está en riesgo de las tinieblas de afuera mientras tenga la posibilidad de arrepentimiento. El evangelio ofrece un camino de regreso para casi cualquiera.',
              ],
            },
            {
              type: 'quiz',
              quizType: 'fill_blank',
              question: 'DyC 88 enseña que cada persona es resucitada en la gloria cuya _____ vivió.',
              answer: 'ley',
              explanation: 'DyC 88:22-24 establece que "el que no puede sufrir la ley de un reino celestial no puede endurar una gloria celestial" — y así sucesivamente para cada reino. El principio: no es una decisión arbitraria de Dios sino el resultado natural de la ley que cada alma vivió durante su mortalidad.',
            },
            {
              type: 'quiz',
              quizType: 'true_false',
              question: 'DyC 138 enseña que los muertos que no oyeron el evangelio en vida pueden aceptarlo en el mundo de los espíritus.',
              answer: true,
              explanation: 'Correcto. DyC 138:29-37 describe cómo Cristo organizó, durante los tres días entre su muerte y resurrección, el trabajo misional en el mundo de los espíritus. Los justos del paraíso fueron enviados a predicar a los que estaban en prisión espiritual. Esto es la base doctrinal del trabajo de templo para los muertos.',
            },
            {
              type: 'reflection',
              prompt: '¿Cómo cambia tu forma de ver a las personas fuera de la Iglesia saber que Dios ha diseñado un destino proporcional para cada uno? ¿Cambia la forma en que llevas a cabo el trabajo genealógico y de templo saber lo que ocurre en el mundo de los espíritus según DyC 138? ¿Y qué diferencia prática hace en tu vida diaria la distinción entre "ser salvo" y "ser exaltado"?',
            },
          ],
        },
      ],
    },
  ],
}
