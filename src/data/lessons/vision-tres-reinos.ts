import type { Lesson } from '@/types/doctrine'

export const visionTresReinos: Lesson = {
  id: 'vision-tres-reinos',
  moduleId: 'discursos-sermones-clasicos',
  title: 'Los Tres Reinos de Gloria — Estudio Profundo',
  subtitle: 'Enseñanza complementaria al plan de salvación',
  author: 'Fuentes principales: DyC 76, 88, 131, 132; 1 Corintios 15; 2 Corintios 12',
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
      title: 'Antes de DyC 76: Lo Que Pablo Vio',
      intro: {
        romanNumeral: 'I',
        title: 'Antes de DyC 76: Lo Que Pablo Vio',
        paragraphs: [
          'La revelación de DyC 76 no apareció en el vacío. Pablo ya había vislumbrado algo que excedía el sistema binario de cielo e infierno — pero lo que vio fue tan grande que ni siquiera intentó describirlo completamente. La Restauración completó lo que Pablo apenas tocó.',
        ],
      },
      topics: [
        {
          id: 't1',
          title: 'El Fragmento que Quedó en Pablo',
          blocks: [
            {
              type: 'highlight_verse',
              text: 'Conozco a un hombre en Cristo, que hace catorce años (si en el cuerpo, no lo sé; si fuera del cuerpo, no lo sé; Dios lo sabe) fue arrebatado hasta el tercer cielo. Y conozco al tal hombre [...] que fue arrebatado al paraíso, donde oyó palabras inefables que no le es dado al hombre expresar.',
              reference: '2 Corintios 12:2–4',
            },
            {
              type: 'paragraph',
              text: 'Pablo vio el "tercer cielo" — lo que implica que hay al menos tres niveles de gloria. Pero lo que vio era "inefable": no se podía expresar en palabras. Esta es la diferencia entre Pablo y Joseph Smith: Pablo vio pero no pudo escribir; Joseph también vio, y el Señor le dijo "escribid la visión" (DyC 76:28). La Restauración trajo lo que Pablo no pudo articular.',
              blockId: 'tr-s1-p-0',
            },
            {
              type: 'highlight_verse',
              text: 'Hay también cuerpos celestiales, y cuerpos terrestres; pero una es la gloria de los celestiales, y otra la de los terrestres. Una es la gloria del sol, otra la gloria de la luna, y otra la gloria de las estrellas; pues una estrella es diferente de otra en gloria.',
              reference: '1 Corintios 15:40–41',
            },
            {
              type: 'compare_grid',
              left: {
                title: 'Visión fragmentaria de Pablo',
                items: [
                  'Tres cielos (implícito en "tercer cielo")',
                  'Sol, luna, estrellas como metáforas de gloria',
                  'Palabras "inefables" — no se pueden expresar',
                  'Solo una persona reportada con este conocimiento',
                  'Tradición bíblica lo interpretó como alegoría',
                ],
              },
              right: {
                title: 'Visión completa de DyC 76',
                items: [
                  'Tres reinos de gloria + tiniebla exterior — descripción detallada',
                  'Sol, luna, estrellas como descripciones literales de gloria',
                  'Mandato de "escribid la visión" — DyC 76:28',
                  'Dos testigos: Joseph Smith y Sidney Rigdon',
                  'La doctrina se presenta como revelación directa para esta dispensación',
                ],
              },
            },
            {
              type: 'media_slot',
              kind: 'image',
              src: undefined,
              caption: 'Los tres reinos de gloria — la arquitectura eterna revelada en D&C 76 y D&C 131.',
              contextCard: { year: 'DyC 76 · DyC 131 · DyC 132', place: 'Destinos Eternos', label: 'Los Tres Reinos' },
            },
          ],
        },
      ],
    },
    {
      id: 's2',
      title: 'El Reino Celestial',
      intro: {
        romanNumeral: 'II',
        title: 'El Reino Celestial',
        paragraphs: [
          'DyC 76:50-70 describe el reino más alto con el mayor detalle. No es vago ni general — especifica quiénes entran, en qué presencia viven, y qué son. DyC 131:1-4 agrega la estructura interna de ese reino.',
        ],
      },
      topics: [
        {
          id: 't2',
          title: 'La Gloria del Sol',
          blocks: [
            {
              type: 'highlight_verse',
              text: 'Estos son los que recibieron el testimonio de Jesús, y creyeron en su nombre, y fueron bautizados después de la manera de su entierro, siendo sepultados en el agua en su nombre, y esto conforme al mandamiento que él les dio.',
              reference: 'Doctrina y Convenios 76:51–52',
            },
            {
              type: 'highlight_verse',
              text: 'Estos son los que verán la faz de Dios y sabrán que él es, y que verán a su Padre y al mismo Dios omnipotente, pues serán sus sacerdotes y reyes en los siglos de los siglos.',
              reference: 'Doctrina y Convenios 76:57–58',
            },
            {
              type: 'doctrine_box',
              title: '"Sellado por el Espíritu Santo de la Promesa" — qué significa exactamente',
              body: 'DyC 76:53 menciona ser "sellados por el Espíritu Santo de la promesa." Este sellamiento no es la ordenanza del templo en sí misma — es la confirmación divina de que los convenios han sido honrados fielmente. El Espíritu Santo "sella" o ratifica los convenios cuando la persona ha sido fiel. Es posible recibir las ordenanzas del templo sin ese sellamiento si no se vive el convenio. La ordenanza abre la puerta; el sellamiento confirma que se ha caminado fielmente a través de ella.',
            },
            {
              type: 'highlight_verse',
              text: 'En el orden celestial hay tres grados; y para obtener el grado más elevado, el hombre ha de entrar en este orden del sacerdocio [significando el nuevo y sempiterno convenio del matrimonio]; y si no lo hace, no puede obtenerlo. Permanecerá separado y no puede tener aumento.',
              reference: 'Doctrina y Convenios 131:1–4',
            },
            {
              type: 'key_points',
              title: 'Los tres grados dentro del celestial',
              points: [
                'Grado más alto: exaltación — matrimonio eterno sellado, presencia plena del Padre, aumento eterno (hijos espirituales), se convierten en dioses (DyC 132:19-20)',
                'Segundo y tercer grado: salvación celestial sin exaltación — presencia del Padre, pero "permanecerán separados" sin aumento eterno',
                'La diferencia clave: el convenio del matrimonio eterno no es opcional para el grado más alto',
                'El trabajo vicario permite que quienes murieron sin esa ordenanza puedan recibirla — por eso el trabajo de templo importa',
              ],
            },
          ],
        },
      ],
    },
    {
      id: 's3',
      title: 'Los Reinos Terrestre y Teleste',
      intro: {
        romanNumeral: 'III',
        title: 'Los Reinos Terrestre y Teleste',
        paragraphs: [
          'Los dos reinos de gloria inferiores no son destinos de castigo — son destinos proporcionales. La doctrina restaurada es radical: incluso la persona que en esta vida rechazó el evangelio y vivió pecaminosamente recibe un destino que "supera todo entendimiento."',
        ],
      },
      topics: [
        {
          id: 't3',
          title: 'Gloria Proporcional a la Rectitud',
          blocks: [
            {
              type: 'highlight_verse',
              text: 'He aquí, estos son los que murieron sin ley; y también los que son los espíritus de los hombres retenidos en prisión, quienes el Hijo fue a visitarles y a predicarles el evangelio, para que pudieran ser juzgados según los hombres en la carne.',
              reference: 'Doctrina y Convenios 76:72–74',
            },
            {
              type: 'compare_grid',
              left: {
                title: 'Reino Terrestre (la luna)',
                items: [
                  'Honorables en vida — no malvados sino incompletos',
                  'Rechazaron el evangelio completo en la tierra',
                  'Reciben la presencia del Hijo pero no del Padre (DyC 76:77)',
                  '"Engañados por las artimañas de los hombres" (DyC 76:75)',
                  'Incluye muchos que vivieron con buena fe en otras religiones',
                ],
              },
              right: {
                title: 'Reino Telestial (las estrellas)',
                items: [
                  'Infieles, mentirosos, fornicarios, asesinos (DyC 76:103)',
                  'Sufren en el mundo espiritual hasta la última resurrección',
                  'Reciben del Espíritu Santo, pero no del Hijo ni del Padre',
                  '"Innumerables como las estrellas" — la mayoría cuantitativa',
                  '"Sobrepasa todo entendimiento" — incluso este destino es glorioso',
                ],
              },
            },
            {
              type: 'highlight_verse',
              text: 'Y la gloria del telestial es una que supera todo entendimiento; y ningún hombre la conoce excepto a quien Dios la ha revelado.',
              reference: 'Doctrina y Convenios 76:89–90',
            },
            {
              type: 'paragraph',
              text: 'El versículo 89 es quizás el más importante de DyC 76 para la teología pastoral. Incluso el destino más bajo de los tres reinos — para personas que en esta vida vivieron en mentira, fornicación, o rechazo al evangelio — "supera todo entendimiento." La imagen popular del infierno como tormento eterno simplemente no existe en la doctrina restaurada para la mayoría de las personas. Lo que existe es un sistema de destinos proporcionales, todos ellos gloriosos más allá de lo que podemos imaginar.',
              blockId: 'tr-s3-p-0',
            },
            {
              type: 'leader_quote',
              quote: 'La revelación de los tres reinos de gloria es la declaración más expansiva de la misericordia de Dios en toda la historia de la revelación canónica. El menor de los reinos "supera todo entendimiento." Eso solo puede significar que la misericordia de Dios excede todo lo que el pensamiento humano sobre la justicia podría diseñar.',
              name: 'Élder B.H. Roberts',
              role: '"The Gospel and Man\'s Relationship to Deity", Deseret News, 1888 (trad.)',
            },
          ],
        },
      ],
    },
    {
      id: 's4',
      title: 'La Tiniebla Exterior',
      intro: {
        romanNumeral: 'IV',
        title: 'La Tiniebla Exterior',
        paragraphs: [
          'Existe un destino fuera de los tres reinos de gloria. No es el "infierno" popular — es algo mucho más específico, y prácticamente inaccesible para la persona ordinaria. Entenderlo correctamente elimina el miedo irracional y provoca reverencia genuina.',
        ],
      },
      topics: [
        {
          id: 't4',
          title: 'El Único Destino Sin Redención',
          blocks: [
            {
              type: 'highlight_verse',
              text: 'Son los únicos sobre quienes tiene poder la segunda muerte; sí, y únicamente ellos no serán redimidos en el tiempo señalado del Señor, después de haber sufrido la ira de Dios. Y no serán perdonados jamás; ni habrá para ellos fin a su tormento.',
              reference: 'Doctrina y Convenios 76:37–38',
            },
            {
              type: 'doctrine_box',
              title: 'La tiniebla exterior no es el "infierno popular" — es radicalmente diferente',
              body: 'El "infierno" en el evangelio restaurado tiene un uso preciso: (1) El mundo espíritus de sufrimiento (prisión espiritual) es temporal — termina con la resurrección. (2) La tiniebla exterior es el destino de los hijos de perdición solamente — permanente, sin redención. Lo que el mundo llama "infierno eterno para los pecadores" simplemente no existe en la doctrina restaurada. Los pecadores comunes heredan algún reino de gloria. Solo quienes cumplen los cuatro requisitos extremos de DyC 76:31-35 van a las tinieblas.',
            },
            {
              type: 'highlight_verse',
              text: 'Son los que habían tenido testimonio de Jesús por el Espíritu Santo y habían negado al Hijo después de haberle recibido al Padre y al Hijo; por lo tanto sufrirán, sí, ellos son los únicos que no serán redimidos en el tiempo señalado del Señor.',
              reference: 'Doctrina y Convenios 76:43',
            },
            {
              type: 'deep_dive',
              badge: 'Pregunta real',
              title: '¿Puede alguien ir realmente a la tiniebla exterior?',
              paragraphs: [
                'José Smith fue directo: "Sería necesario abrir el cielo para que alguien pudiera apostatar al grado de ser hijo de perdición." Es tan difícil que la mayoría de los teólogos restaurados coinciden en que será extremadamente escaso en número.',
                'Los cuatro requisitos (DyC 76:31-35): haber conocido el poder de Dios, haber participado de él, haberlo negado deliberadamente después, y haber "crucificado a Cristo para sí mismos." El énfasis es en el conocimiento pleno — no la fe, no la creencia, sino el conocimiento confirmado por el Espíritu, seguido de negación deliberada.',
                'El élder Joseph Fielding Smith escribió: "En cuanto a quiénes serán los hijos de perdición, no tenemos que preocuparnos mucho. Serán pocos, si es que hay alguno, entre los que vivimos hoy." Para la persona que duda, que tiene preguntas, que ha cometido errores graves — la tiniebla exterior no es una amenaza real. El camino de regreso siempre está disponible mientras haya voluntad de arrepentirse.',
              ],
            },
          ],
        },
      ],
    },
    {
      id: 's5',
      title: 'Preguntas Frecuentes sobre los Reinos',
      intro: {
        romanNumeral: 'V',
        title: 'Preguntas Frecuentes sobre los Reinos',
        paragraphs: [
          'La doctrina de los tres reinos genera preguntas naturales: ¿puede alguien progresar entre reinos? ¿Qué pasa con los niños que mueren pequeños? ¿Y con los que nunca oyeron el evangelio? La doctrina restaurada tiene respuestas específicas.',
        ],
      },
      topics: [
        {
          id: 't5',
          title: 'Respondiendo las Preguntas Difíciles',
          blocks: [
            {
              type: 'highlight_verse',
              text: 'Y también todos los niños que mueren antes de llegar a los años de responsabilidad son salvos en el reino celestial de los cielos.',
              reference: 'Doctrina y Convenios 137:10',
            },
            {
              type: 'key_points',
              title: 'Respuestas doctrinales a las preguntas más frecuentes',
              points: [
                '¿Progreso entre reinos? — La doctrina oficial es que no se ha revelado. No hay declaración canónica que lo confirme ni que lo niegue definitivamente. La Iglesia enseña que los destinos son permanentes después del juicio final.',
                '¿Niños que mueren antes de los 8 años? — DyC 137:10 es explícito: son salvos en el reino celestial. No necesitan bautismo; la expiación de Cristo los cubre automáticamente.',
                '¿Personas que nunca oyeron el evangelio? — DyC 76:72-74 y 1 Pedro 3:19 — el evangelio se predica en el mundo de los espíritus. El trabajo vicario de templo provee las ordenanzas. Dios juzga según el conocimiento que cada persona tuvo.',
                '¿Sellamiento y exaltación? — El matrimonio eterno en el templo es requisito para el grado más alto del celestial (DyC 131:1-4). Sin ese convenio, la salvación celestial es posible pero no la exaltación plena.',
                '¿Personas con discapacidades mentales? — Dios juzga según la capacidad real de cada persona. La doctrina establece que Él es perfectamente justo y no pedirá cuentas de lo que una persona no pudo comprender o elegir.',
              ],
            },
            {
              type: 'deep_dive',
              badge: 'DyC 137',
              title: 'La visión de los justos sin ley — un precedente clave',
              paragraphs: [
                'En enero de 1836, Joseph Smith recibió una visión en el templo de Kirtland. Vio a su hermano Alvin en el reino celestial — un hombre que había muerto antes de la Restauración, sin bautismo en la Iglesia. La visión perturbó a Joseph: ¿cómo podía Alvin estar en el celestial?',
                'La respuesta del Señor (DyC 137:7-8) estableció un principio fundamental: todos los que murieron sin conocimiento del evangelio, que lo habrían recibido de haberlo conocido, son herederos del reino celestial. No son juzgados por lo que no pudieron elegir.',
                'Este principio es la base doctrinal de toda la obra misional de templo: el trabajo vicario no es un "seguro de vida post-mortem" sino la provisión divina de ordenanzas para quienes no tuvieron acceso a ellas en vida. Dios es perfectamente justo, y ningún alma será negada la oportunidad de oír y decidir.',
              ],
            },
            {
              type: 'leader_quote',
              quote: 'Dios no condena a nadie por lo que no pudo saber o elegir. Su justicia es perfecta precisamente porque es proporcional. No mide con la misma vara al que tuvo toda la luz y al que vivió en tiniebla sin culpa. Eso sería injusticia — y Dios no puede actuar de manera injusta.',
              name: 'Élder Boyd K. Packer',
              role: '"The Plan of Happiness", Conferencia General, octubre 2015 (trad.)',
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
          'La doctrina de los tres reinos no es especulación abstracta. Cambia directamente cómo vives, cómo ves a los demás, y por qué motivo obedeces el evangelio.',
        ],
      },
      topics: [
        {
          id: 't6',
          title: 'De la Teología a la Práctica',
          blocks: [
            {
              type: 'key_points',
              title: 'Cinco implicaciones prácticas de la doctrina de los reinos',
              points: [
                'Ver a las personas como seres con destino eterno proporcional cambia cómo las tratas — nadie es "perdido" por defecto',
                'La motivación para la obediencia cambia: no miedo al infierno sino amor a la exaltación y a la familia eterna',
                'El trabajo de templo no es ritual sino provisión de ordenanzas esenciales para personas que no tuvieron acceso',
                'El evangelio no es para los perfectos — es para los que quieren más del destino glorioso que Dios tiene preparado',
                'La imagen de Dios cambia: no un juez que busca condenar sino un Padre que diseñó un sistema de misericordia que excede toda comprensión',
              ],
            },
            {
              type: 'reflection',
              prompt: '¿Cómo cambia tu forma de ver a las personas fuera de la Iglesia saber que Dios tiene un destino proporcional para cada una? ¿Te motiva más el amor a la exaltación o el miedo a las consecuencias del pecado? ¿Hay alguna persona en tu familia que ya falleció por quien sientes la urgencia de hacer trabajo vicario?',
            },
            {
              type: 'quiz',
              id: 'q-1', question: { kind: 'fill_blank',
                prompt: 'Según DyC 131:1-4, para obtener el grado más alto del reino celestial, se debe entrar en el convenio del ___.',
                options: ['bautismo', 'matrimonio eterno', 'sacerdocio', 'diezmo'],
                correctIndex: 1,
                explanation: 'DyC 131:1-4 especifica que el grado más alto del reino celestial requiere "entrar en este orden del sacerdocio [el nuevo y sempiterno convenio del matrimonio]." Sin ese convenio, se pueden heredar grados inferiores del celestial pero no la exaltación plena.',
              },
            },
            {
              type: 'quiz',
              id: 'q-2', question: {
                kind: 'fill_blank',
                prompt: 'DyC 137:10 enseña que todos los niños que mueren antes de los años de responsabilidad son salvos en el reino ___ de los cielos.',
                options: ['telestial', 'terrestre', 'celestial', 'espiritual'],
                correctIndex: 2,
                explanation: 'DyC 137:10 es explícito: "todos los niños que mueren antes de llegar a los años de responsabilidad son salvos en el reino celestial." La expiación de Cristo los cubre sin necesidad de bautismo.',
              },
            },
            {
              type: 'quiz',
              id: 'q-3', question: {
                kind: 'fill_blank',
                prompt: 'Según DyC 76:89-90, la gloria del reino ___ "supera todo entendimiento" — incluyendo el destino de quienes vivieron en pecado.',
                options: ['celestial', 'terrestre', 'telestial', 'perdición'],
                correctIndex: 2,
                explanation: 'DyC 76:89-90 afirma que "la gloria del telestial es una que supera todo entendimiento." Incluso el reino más bajo de los tres — para personas que vivieron en pecado — es más glorioso de lo que los humanos podemos imaginar.',
              },
            },
          ],
        },
      ],
    },
  ],
}
