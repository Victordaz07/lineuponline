import type { Lesson } from '@/types/doctrine'

export const moisesElLegislador: Lesson = {
  id: 'moises-el-legislador',
  moduleId: 'personajes-escrituras',
  title: 'Moisés — El Legislador de Israel',
  subtitle: 'Las dos tablas, la cara de Dios, y la ley que preparó a Cristo',
  description: 'Moisés habló con Dios cara a cara (Éxodo 33:11) — pero solo vio su espalda (33:23). Dos conjuntos de tablas con dos leyes distintas. DyC 84 revela lo que Israel perdió. Y Moisés apareció en la Transfiguración como testigo de que la ley se cumplió en Cristo.',
  level: 'AVANZADO',
  icon: '📋',
  duration: 30,
  order: 3513,
  status: 'PUBLISHED',
  studyBodyPlain: '',
  originalBodyPlain: '',
  submoduleGroup: 'moises',
  studySections: [
    {
      id: 's1',
      title: 'Ver la espalda de Dios — los límites del mortal',
      intro: {
        romanNumeral: 'I',
        title: 'La Paradoja de Éxodo 33',
        paragraphs: [
          'Dos versículos del mismo capítulo parecen contradictorios. La doctrina restaurada los resuelve.',
        ],
      },
      topics: [
        {
          id: 't1',
          title: 'La aparente contradicción de Éxodo 33',
          blocks: [
            {
              type: 'compare_grid',
              title: 'Éxodo 33 — Cara a Cara pero Solo la Espalda',
              left: {
                title: 'Éxodo 33:11',
                items: [
                  '"Hablaba Jehová a Moisés cara a cara, como habla cualquiera a su compañero"',
                  'Indica comunicación directa, personal, sin intermediario',
                ],
              },
              right: {
                title: 'Éxodo 33:20, 23',
                items: [
                  '"No podrás ver mi rostro; porque no me verá hombre, y vivirá"',
                  '"Y apartaré mi mano, y verás mis espaldas; mas no se verá mi rostro"',
                ],
              },
            },
            {
              type: 'paragraph',
              text: 'La aparente contradicción se resuelve entendiendo que en el lenguaje hebreo antiguo "cara a cara" describe la calidad y la directness de la comunicación — sin intermediarios, sin velo, de persona a persona. Lo que Moisés no podía ver era la gloria completa y plena del Padre. Moisés vio y habló con el Cristo premortal en forma de mensajero glorificado (como en las teofanías de Génesis 18 y otras); lo que estaba restringido era la gloria inabarcable del Padre Eterno en su plenitud.',
            },
            {
              type: 'doctrine_box',
              title: 'DyC 84:22-24 — Lo que Israel Perdió',
              body: 'DyC 84:22-24 añade una capa que la Biblia no articula explícitamente: "Por tanto, sin los ritos del sacerdocio... ningún hombre puede ver el rostro de Dios, ni vivir. Moisés buscó esto diligentemente, a fin de que el pueblo pudiera ver el rostro de Dios; pero Dios apartó su ira, pues su corazón se endureció... por tanto, el Señor juró en su ira que no entrarían en su reposo mientras estuvieran en el desierto, y tampoco les permitiría ver su rostro." Israel rechazó el evangelio superior que Moisés quería darles.',
            },
          ],
        },
      ],
    },
    {
      id: 's2',
      title: 'Las dos tablas de la ley',
      intro: {
        romanNumeral: 'II',
        title: 'La Ley Mayor y la Ley Menor',
        paragraphs: [
          'El becerro de oro no solo fue una idolatría — fue el evento que cambió el código legal de Israel para los siglos siguientes.',
        ],
      },
      topics: [
        {
          id: 't2',
          title: 'Por qué había dos conjuntos de tablas',
          blocks: [
            {
              type: 'paragraph',
              text: 'Éxodo 31-32 narra que Dios entregó a Moisés las primeras tablas de piedra "escritas con el dedo de Dios" (31:18). Mientras Moisés estaba en el monte, Israel construyó el becerro de oro. Al descender y ver la escena, Moisés rompió las tablas (32:19). Éxodo 34 registra la preparación de las segundas tablas — pero esta vez Moisés las labró él mismo, y el contenido fue diferente.',
            },
            {
              type: 'deep_dive',
              title: 'La Doctrina de las Dos Tablas',
              paragraphs: [
                'La doctrina restaurada (DyC 84:23-27; JST Éxodo 34) enseña que las primeras tablas contenían el evangelio superior — el Sacerdocio de Melquisedec, los ordenanzas del templo, la presencia de Dios mismo. Israel las rechazó mediante el becerro de oro, demostrando que no estaba preparado para vivir la ley mayor.',
                'Las segundas tablas contenían la ley de Moisés — un código civil, ceremonial y moral detallado diseñado como "ayo" (pedagogo, Gálatas 3:24) para llevar a Israel a Cristo. Era una ley más estricta en rituales externos, pero menor en espiritualidad interna. Era lo mejor que Israel podía recibir dado su estado de preparación.',
                'Este principio — que Dios da a Su pueblo leyes proporcionadas a su capacidad espiritual — explica por qué diferentes dispensaciones tienen diferentes estándares. No es inconsistencia divina sino sabiduría pastoral. El evangelio completo siempre fue el objetivo; la ley de Moisés era el camino de acceso para los que todavía no podían vivir el evangelio superior.',
              ],
            },
            {
              type: 'highlight_verse',
              reference: 'DyC 84:23-25',
              text: 'Moisés buscó esto diligentemente, a fin de que el pueblo pudiera ver el rostro de Dios... por tanto, el Señor les quitó a Moisés de en medio de ellos, y también el Santo Sacerdocio; y continuó con ellos el sacerdocio menor.',
            },
          ],
        },
      ],
    },
    {
      id: 's3',
      title: 'La ley de Moisés como maestro hacia Cristo',
      intro: {
        romanNumeral: 'III',
        title: 'Gálatas 3:24 — El Ayo que Lleva a Cristo',
        paragraphs: [
          'La ley de Moisés no fue un error ni un plan B. Fue el método de enseñanza más exhaustivo de Cristo que el mundo antiguo conoció.',
        ],
      },
      topics: [
        {
          id: 't3',
          title: 'Cada sacrificio apuntaba hacia Él',
          blocks: [
            {
              type: 'highlight_verse',
              reference: 'Gálatas 3:24',
              text: 'De manera que la ley ha sido nuestro ayo, para llevarnos a Cristo, a fin de que fuésemos justificados por la fe.',
            },
            {
              type: 'paragraph',
              text: 'La palabra griega "paidagogos" (ayo) describe en el mundo grecorromano al esclavo de confianza que acompañaba al hijo del amo al colegio, protegiéndolo y guiándolo. No era el maestro — era el guía al maestro. Pablo usa esta imagen para describir la ley de Moisés: no era el destino sino el camino al destino. Los 613 mandamientos de la ley mosaica, con sus sacrificios, fiestas, purificaciones y rituales, formaban un sistema de enseñanza continua sobre la naturaleza de la santidad, el costo del pecado, y la necesidad de un redentor.',
            },
            {
              type: 'key_points',
              title: 'Elementos de la Ley de Moisés que tipifican a Cristo',
              points: [
                'El sistema de sacrificios: cada animal sin mancha prefigura al Salvador sin pecado',
                'El Sumo Sacerdote: Cristo es el Sumo Sacerdote eterno (Hebreos 4-10)',
                'Las siete fiestas de Israel: cada una se cumple en un momento de la vida de Cristo',
                'La Pascua: Cristo es el Cordero de la Pascua (1 Corintios 5:7)',
                'El Tabernáculo: sus compartimentos tipifican el plan de salvación y los grados de gloria',
                'La Ciudad de Refugio: Cristo como refugio del pecador que huye de la ley',
              ],
            },
          ],
        },
      ],
    },
    {
      id: 's4',
      title: 'Moisés en la Transfiguración',
      intro: {
        romanNumeral: 'IV',
        title: 'Mateo 17 — El Fin y el Cumplimiento',
        paragraphs: [
          'Cuando Moisés apareció en el Monte de la Transfiguración, fue el momento en que la ley reconoció a su propio cumplimiento.',
        ],
      },
      topics: [
        {
          id: 't4',
          title: 'La ley y los profetas en el monte',
          blocks: [
            {
              type: 'highlight_verse',
              reference: 'Mateo 17:2-3',
              text: 'Y se transfiguró delante de ellos, y resplandeció su rostro como el sol, y sus vestidos se hicieron blancos como la luz. Y he aquí les aparecieron Moisés y Elías, hablando con él.',
            },
            {
              type: 'paragraph',
              text: 'La aparición de Moisés y Elías en el Monte de la Transfiguración no fue decorativa. Lucas 9:31 especifica que hablaron de "su partida" — literalmente su "éxodo" (exodon en griego) — que Jesús cumpliría en Jerusalén. Moisés representa la ley; Elías representa los profetas. Juntos, son "la ley y los profetas" — la totalidad de las escrituras judías. Su presencia y conversación con Cristo declaraba que toda la revelación anterior apuntaba a este momento.',
            },
            {
              type: 'paragraph',
              text: 'La doctrina restaurada añade que este encuentro también fue un concilio de sacerdocio: Moisés y Elías, como seres con cuerpos resucitados o traducidos, confirieron a Pedro, Santiago y Juan las llaves del sacerdocio que necesitarían para presidir la Iglesia. El Padre mismo habló: "Este es mi Hijo amado, en quien tengo complacencia; a él oíd" (Mateo 17:5) — la ley de Moisés ya no era la voz final.',
            },
            {
              type: 'doctrine_box',
              title: 'Moisés: Traducido, no Muerto',
              body: 'Deuteronomio 34 describe la muerte de Moisés en el monte Nebo, pero Judas 9 menciona que el arcángel Miguel disputó con Satanás por el cuerpo de Moisés — lo cual es extraordinariamente inusual si simplemente hubiera muerto de manera normal. La doctrina de la Iglesia, siguiendo la tradición restaurada, enseña que Moisés fue traducido (como Elías, como Juan) para poder aparecer en el Monte de la Transfiguración con un cuerpo y conferir llaves — algo que los espíritus incorpóreos no pueden hacer (DyC 129).',
            },
            {
              type: 'reflection',
              prompt: '¿En qué área de tu vida estás viviendo la "ley de Moisés" — reglas y estructuras externas — cuando Dios te está invitando a vivir la ley superior del evangelio de Cristo, que es amor y gracia internalizados?',
            },
          ],
        },
      ],
    },
  ],
}
