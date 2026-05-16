import type { Lesson } from '@/types/doctrine'

export const liderazgoSegunElEvangelio: Lesson = {
  id: 'liderazgo-segun-el-evangelio',
  moduleId: 'lideres-misioneros',
  title: 'Liderazgo según el Evangelio',
  subtitle: 'Servir, no ser servido',
  author: 'Fuentes principales: DyC 121, Mateo 20, Juan 13, DyC 4; Mosíah 2; Alma 48',
  description:
    'El mundo define el liderazgo como control desde arriba. El evangelio lo invierte: el mayor es el que sirve. DyC 121 establece el principio eterno de que los poderes del cielo solo pueden ser manejados sobre bases de justicia, persuasión y amor genuino.',
  level: 'INTERMEDIO',
  icon: '🧭',
  duration: 65,
  order: 1,
  status: 'PUBLISHED',
  studyBodyPlain: '',
  originalBodyPlain: '',
  previousLessonId: null,
  nextLessonId: null,
  studySections: [
    {
      id: 's1',
      title: 'La Gran Inversión del Liderazgo',
      intro: {
        romanNumeral: 'I',
        title: 'La Gran Inversión del Liderazgo',
        paragraphs: [
          'En el mundo, el liderazgo fluye hacia abajo: quien tiene autoridad manda, quien manda es obedecido. Jesús entró a una habitación llena de discípulos que argumentaban sobre quién sería el más grande en el reino — y lo invirtió completamente. El mayor es el que sirve. No como táctica de liderazgo efectivo, sino como principio eterno del cielo.',
        ],
      },
      topics: [
        {
          id: 't1',
          title: 'El Mundo vs. el Evangelio',
          blocks: [
            {
              type: 'highlight_verse',
              text: 'Mas entre vosotros no será así, sino que el que quiera hacerse grande entre vosotros será vuestro servidor, y el que quiera ser el primero entre vosotros será vuestro siervo; como el Hijo del Hombre no vino para ser servido, sino para servir, y para dar su vida en rescate por muchos.',
              reference: 'Mateo 20:26–28',
            },
            {
              type: 'compare_grid',
              title: 'Dos modelos de liderazgo',
              left: {
                label: 'Liderazgo del mundo',
                points: [
                  'Controla e impone su voluntad',
                  'Se enfoca en resultados a cualquier costo',
                  'Protege su posición y autoridad',
                  'Se rodea de quienes lo afirman',
                  'La lealtad fluye hacia arriba (al líder)',
                ],
              },
              right: {
                label: 'Liderazgo del evangelio',
                points: [
                  'Sirve y sostiene a quienes lidera',
                  'Se enfoca en las personas, no solo los resultados',
                  'Comparte el crédito y absorbe la responsabilidad',
                  'Busca consejo y retroalimentación honesta',
                  'La preocupación fluye hacia abajo (hacia los liderados)',
                ],
              },
            },
            {
              type: 'highlight_verse',
              text: 'Y habiéndose levantado de la cena, se quitó el manto, y tomando una toalla, se la ciñó. Luego puso agua en un lebrillo, y comenzó a lavar los pies de los discípulos [...] Pues si yo, el Señor y el Maestro, he lavado vuestros pies, vosotros también debéis lavaros los pies los unos a los otros.',
              reference: 'Juan 13:4–5, 14',
            },
            {
              type: 'paragraph',
              text: 'La noche antes de su crucifixión, el Hijo de Dios tomó una toalla y lavó los pies de doce hombres — incluyendo los de Judas, que ya había acordado entregarlo. Este acto no fue simbólico ni teatral. Fue una declaración: el mayor en el reino es quien se inclina a servir, no quien se sienta a recibir servicio. El liderazgo del evangelio empieza exactamente ahí.',
            },
          ],
        },
      ],
    },
    {
      id: 's2',
      title: 'El Principio Eterno de DyC 121',
      intro: {
        romanNumeral: 'II',
        title: 'El Principio Eterno de DyC 121',
        paragraphs: [
          'DyC 121 fue escrita desde la cárcel de Liberty — un José Smith encarcelado sin juicio, separado de su familia durante meses, sin poder ejercer ningún llamamiento. Es precisamente desde ese contexto de impotencia total que el Señor revela el principio de por qué los hombres pierden el sacerdocio — y cómo se ejerce legítimamente.',
        ],
      },
      topics: [
        {
          id: 't2',
          title: 'El Principio y la Advertencia',
          blocks: [
            {
              type: 'highlight_verse',
              text: 'Los derechos del sacerdocio están inseparablemente unidos a los poderes del cielo, y que los poderes del cielo no pueden ser controlados ni manejados sino sobre los principios de justicia.',
              reference: 'Doctrina y Convenios 121:36',
            },
            {
              type: 'highlight_verse',
              text: 'Cuando emprendemos a cubrir nuestros pecados, o a satisfacer nuestro orgullo, nuestra vana ambición, o a ejercer control o dominio o compulsión sobre las almas de los hijos de los hombres en cualquier grado de injusticia, he aquí que los cielos se retiran, el Espíritu del Señor se contrista.',
              reference: 'Doctrina y Convenios 121:37',
            },
            {
              type: 'doctrine_box',
              title: 'Las tres causas de pérdida de influencia espiritual',
              body: 'DyC 121:37 identifica con precisión lo que destruye la influencia legítima de un líder: (1) Cubrir sus pecados — falta de transparencia y autenticidad. (2) Orgullo y vana ambición — motivaciones centradas en sí mismo más que en los demás. (3) Control, dominio, compulsión — usar la posición para forzar en lugar de persuadir. Cuando cualquiera de estos entra, "los cielos se retiran." No como castigo externo, sino como consecuencia directa: un líder que controla en lugar de servir ya no lleva la influencia celestial, independientemente de su título formal.',
            },
            {
              type: 'highlight_verse',
              text: 'Ningún poder ni influencia puede ni debe mantenerse en virtud del sacerdocio, sino por persuasión, por paciencia, por mansedumbre y amor no fingido; por bondad y por puro conocimiento, que mucho ensanchan el alma sin hipocresía y sin engaño.',
              reference: 'Doctrina y Convenios 121:41–42',
            },
            {
              type: 'key_points',
              title: 'Los siete principios del liderazgo del evangelio (DyC 121:41-42)',
              points: [
                'Persuasión — apelar a la razón y al corazón, no a la posición jerárquica',
                'Paciencia — no forzar los tiempos ni presionar cuando la persona no está lista',
                'Mansedumbre — suavidad de espíritu, no urgencia ansiosa ni agresividad',
                'Amor no fingido — genuino, no estratégico para obtener lealtad o resultados',
                'Bondad — el carácter base que hace posibles todos los demás principios',
                'Puro conocimiento — enseñar principios y razones, no solo reglas y órdenes',
                'Sin hipocresía ni engaño — congruencia total entre quien eres y lo que enseñas',
              ],
            },
            {
              type: 'highlight_verse',
              text: 'Reprendiendo oportunamente, cuando sea movido por el Espíritu Santo; y después mostrando un aumento de amor hacia aquel a quien has reprendido, no sea que lo tenga por tu enemigo; para que sepa que tu fidelidad es más fuerte que los lazos de la muerte.',
              reference: 'Doctrina y Convenios 121:43–44',
            },
            {
              type: 'leader_quote',
              quote: 'El poder espiritual de un hombre en el hogar y en la Iglesia no está determinado principalmente por su llamamiento, sino por la rectitud de su vida. Un hombre puede tener la autoridad del sacerdocio y aun así carecer de su poder. La autoridad viene de la ordenación; el poder viene de la obediencia y la rectitud personal.',
              name: 'Russell M. Nelson',
              role: '"The Price of Priesthood Power", Conferencia General, abril 2016 (trad.)',
            },
          ],
        },
      ],
    },
    {
      id: 's3',
      title: 'Líderes de las Escrituras — Tres Modelos',
      intro: {
        romanNumeral: 'III',
        title: 'Líderes de las Escrituras — Tres Modelos',
        paragraphs: [
          'El principio de DyC 121 no es solo doctrina abstracta — tiene rostros. El rey Benjamín, el capitán Moroni y Moisés son tres estudios de caso que muestran cómo se ve el liderazgo del evangelio cuando es encarnado por personas reales en contextos difíciles.',
        ],
      },
      topics: [
        {
          id: 't3',
          title: 'Tres Líderes, Un Principio',
          blocks: [
            {
              type: 'media_slot',
              kind: 'image',
              src: undefined,
              alt: 'El rey Benjamín hablando a su pueblo desde su torre — Mosíah 2',
              caption: 'El rey Benjamín: "Yo les he servido con mis propias manos" — Mosíah 2:14',
              contextCard: {
                label: 'liderazgo-rey-benjamin-torre',
              },
            },
            {
              type: 'highlight_verse',
              text: 'Y he aquí, yo os digo estas cosas para que aprendáis sabiduría; para que aprendáis que cuando estéis en el servicio de vuestros semejantes, no estáis sino en el servicio de vuestro Dios.',
              reference: 'Mosíah 2:17',
            },
            {
              type: 'deep_dive',
              badge: 'El Rey Benjamín',
              title: 'El rey que trabajó con sus propias manos (Mosíah 2:12-18)',
              paragraphs: [
                'El rey Benjamín tenía todo el derecho a ser servido. Era el monarca de un reino, un profeta, un guerrero que había luchado con sus propias manos para defender a su pueblo (Palabras de Mormón 1:13-18). Pero Mosíah 2:14 es extraordinario: "Les he servido con mis propias manos para que no me cargaseis; y para que no hubieran cargas sobre vosotros."',
                'Un rey que trabaja para no ser una carga a su pueblo. No delega, no contrata, no acepta tributo de lo que puede hacer él mismo. Su discurso final no empieza con sus logros sino con su servicio: "para que no estuvierais abrumados con impuestos, y que ninguna cosa pesada viniera sobre vosotros" (v.14).',
                'La lección: el liderazgo legítimo absorbe cargas; no las transfiere. Un líder del evangelio se pregunta no "¿qué pueden hacer por mí?" sino "¿qué carga puedo quitarles?"',
              ],
            },
            {
              type: 'highlight_verse',
              text: 'Y si yo, el hombre a quien llamáis rey, os he servido, ¿cuánto más no deberíais serviros los unos a los otros?',
              reference: 'Mosíah 2:18',
            },
            {
              type: 'deep_dive',
              badge: 'El Capitán Moroni',
              title: 'Moroni — el liderazgo bajo fuego (Alma 48:11-17)',
              paragraphs: [
                'Alma 48:11 describe al capitán Moroni con una lista de atributos que el texto de Mormon considera más importante que la estrategia militar: "era un hombre fuerte y poderoso; y también era hombre de perfecta comprensión; sí, un hombre que no deleitaba en el derramamiento de sangre; un hombre cuya alma se regocijaba en la libertad y la libertad de su país."',
                'Mormon añade algo que no dijo de ningún general: "Sí, y un hombre que era firme en la fe de Cristo." Y luego el elogio más notable de cualquier personaje en el Libro de Mormón: "si todos los hombres hubieran sido, y fueren, y jamás serán, como Moroni, he aquí, los poderes del infierno se habrían sacudido para siempre" (Alma 48:17).',
                'Lo que hace a Moroni extraordinario no es su estrategia ni su valor — es que su poder viene de su carácter. Construye ciudades de refugio (Alma 50), escribe cartas con amor a sus enemigos (Alma 60-61), llora por los muertos de ambos bandos. Su "título de la libertad" no dice "síganme a mí" — dice "en memoria de nuestro Dios, nuestra religión, libertad, y paz" (Alma 46:12).',
              ],
            },
            {
              type: 'key_points',
              title: 'El patrón del líder renuente en las Escrituras',
              points: [
                'Moisés: "¿Quién soy yo para ir a Faraón?" (Éxodo 3:11) — el llamado rechaza la posición, no la busca',
                'Enós: antes de liderar, ora toda una noche por su propio pueblo (Enós 1:9)',
                'El rey Benjamín: termina su reinado pidiéndole a su pueblo que no le deban nada',
                'El capitán Moroni: su primera acción al recibir el mando es orar y arrodillarse (Alma 46:13)',
                'Patrón común: los líderes que Dios escoge no buscan la posición — son encontrados sirviendo en donde están',
              ],
            },
          ],
        },
      ],
    },
    {
      id: 's4',
      title: 'Liderazgo en el Hogar',
      intro: {
        romanNumeral: 'IV',
        title: 'Liderazgo en el Hogar',
        paragraphs: [
          'El hogar es el laboratorio más exigente del liderazgo según el evangelio. No hay audiencia que impresionar, no hay título que protegerte. Solo tú y las personas que más amas. Los principios de DyC 121 aplican con igual — o mayor — urgencia en el hogar que en cualquier llamamiento.',
        ],
      },
      topics: [
        {
          id: 't4',
          title: 'DyC 121 en el Hogar',
          blocks: [
            {
              type: 'paragraph',
              text: 'La "Proclamación sobre la Familia" describe el rol del padre como "presidir con amor y justicia." La palabra "presidir" tiene raíz en el servicio — presidir no es dominar sino orientar, facilitar, coordinar. Un presidente de empresa puede presidir sin amor; un padre que preside sin amor ya no cumple su función según el evangelio.',
            },
            {
              type: 'compare_grid',
              title: 'Autoridad en el hogar — dos modelos',
              left: {
                label: 'Autoridad por posición',
                points: [
                  '"Soy el padre/madre — así se hace"',
                  'Las decisiones son del que tiene el cargo',
                  'Corrección = consecuencia, no conversación',
                  'La obediencia es el objetivo final',
                  'Los hijos aprenden a obedecer, no a decidir',
                ],
              },
              right: {
                label: 'Autoridad por servicio (DyC 121)',
                points: [
                  '"¿Cuál es la mejor decisión para nuestra familia?"',
                  'Las decisiones se toman en consejo (Mateo 18:19-20)',
                  'Corrección = "reprensión oportuna + aumento de amor"',
                  'El convertirse en personas es el objetivo',
                  'Los hijos aprenden a razonar, a arrepentirse, a confiar',
                ],
              },
            },
            {
              type: 'doctrine_box',
              title: 'El consejo familiar como práctica de DyC 121',
              body: 'El consejo familiar es la aplicación más directa de los principios de DyC 121 en el hogar. Cuando los padres toman decisiones sobre los hijos sin consultarlos, ejercen autoridad por posición. Cuando los padres crean un espacio donde cada voz importa — incluyendo la del niño más pequeño — ejercen autoridad por servicio. El Presidente Nelson ha enseñado: "celebrad consejos familiares regularmente... escuchad a sus hijos." El consejo no transfiere la autoridad a los hijos — la ejerce en su beneficio.',
            },
            {
              type: 'highlight_verse',
              text: 'Reprende a tu hijo, y te dará descanso, y dará alegría a tu alma.',
              reference: 'Proverbios 29:17',
            },
            {
              type: 'leader_quote',
              quote: 'El hogar no es el lugar donde el liderazgo del evangelio se aplica después de aprenderlo en los callamientos de la Iglesia. Es el lugar donde se aprende. La capacidad de presidir con amor en el hogar — de crear un ambiente donde cada hijo se sienta valorado, escuchado y amado — es la capacidad de liderazgo más difícil y más importante que un discípulo puede desarrollar.',
              name: 'Dieter F. Uchtdorf',
              role: '"Of Things That Matter Most", Conferencia General, octubre 2010 (trad.)',
            },
          ],
        },
      ],
    },
    {
      id: 's5',
      title: 'Las Cualidades del Líder-Servidor',
      intro: {
        romanNumeral: 'V',
        title: 'Las Cualidades del Líder-Servidor',
        paragraphs: [
          'DyC 4 fue revelada para misioneros, pero sus principios aplican a todo liderazgo en el evangelio. Las cualidades que describe no son habilidades de gestión — son atributos del corazón que Dios busca en quienes le sirven.',
        ],
      },
      topics: [
        {
          id: 't5',
          title: 'Las Cualidades que el Señor Busca',
          blocks: [
            {
              type: 'highlight_verse',
              text: 'Por tanto, oh vosotros que os embarcáis en el servicio de Dios, ved que le sirváis con todo vuestro corazón, poder, mente y fuerza, a fin de que estéis al final del día sin culpa ante Dios.',
              reference: 'Doctrina y Convenios 4:2',
            },
            {
              type: 'highlight_verse',
              text: 'Y la fe, la esperanza, la caridad y el amor, con el ojo fijo en la gloria de Dios, os califican para la obra. Acordaos de la fe, la virtud, el conocimiento, la templanza, la paciencia, la piedad fraterna, la bondad y la caridad.',
              reference: 'Doctrina y Convenios 4:5–6',
            },
            {
              type: 'paragraph',
              text: 'El "ojo fijo en la gloria de Dios" es el antídoto contra la vana ambición: cuando el objetivo genuino es servir a Dios y a Sus hijos, el control y el dominio pierden su atractivo. Un líder cuya motivación central es el servicio genuino naturalmente opera bajo los principios de DyC 121 — no porque se esfuerce en seguir una lista de reglas, sino porque ha adoptado el corazón de un siervo.',
            },
            {
              type: 'key_points',
              title: 'Tres preguntas de diagnóstico para un líder del evangelio',
              points: [
                '¿Mis decisiones están motivadas por lo que es mejor para las personas que sirvo, o por lo que me hace quedar bien?',
                '¿Cuando corrijo o reprendo, lo hago "movido por el Espíritu Santo" y luego muestro un "aumento de amor"?',
                '¿Las personas que lidero sienten que me importan genuinamente, o sienten que las uso para cumplir objetivos de llamamiento?',
              ],
            },
            {
              type: 'leader_quote',
              quote: 'El sacerdocio no es un honor que se posee. Es una responsabilidad que se ejerce. Y se ejerce — solo puede ejercerse — con amor. No el amor que es fácil de dar cuando todo va bien, sino el amor que se da cuando es difícil, costoso y mal recompensado. Ese es el amor que mueve el cielo.',
              name: 'Dieter F. Uchtdorf',
              role: '"Pride and the Priesthood", Conferencia General, octubre 2010 (trad.)',
            },
          ],
        },
      ],
    },
    {
      id: 's6',
      title: 'Cuando el Liderazgo Falla — y Cómo Restaurarlo',
      intro: {
        romanNumeral: 'VI',
        title: 'Cuando el Liderazgo Falla — y Cómo Restaurarlo',
        paragraphs: [
          'DyC 121:39 contiene una de las advertencias más sobrias del canon restaurado: "Es la naturaleza y disposición de casi todos los hombres, cuando reciben un poco de autoridad, como se imaginan, el momento en que comienzan a ejercer control injusto." No dice "algunos hombres." Dice "casi todos." El primer paso para ser un buen líder es aceptar que la tendencia al abuso está en cada uno de nosotros.',
        ],
      },
      topics: [
        {
          id: 't6',
          title: 'DyC 121:39 y la Tentación Universal',
          blocks: [
            {
              type: 'media_slot',
              kind: 'image',
              src: undefined,
              alt: 'Persona arrodillada en oración — liderazgo que empieza con humildad ante Dios',
              caption: 'El liderazgo del evangelio comienza y termina en la oración',
              contextCard: {
                label: 'liderazgo-humildad-oracion',
              },
            },
            {
              type: 'highlight_verse',
              text: 'Sabemos que es la naturaleza y disposición de casi todos los hombres, cuando reciben un poco de autoridad, como se imaginan, comenzar a ejercer control injusto, dominio o compulsión sobre las almas de los hijos de los hombres.',
              reference: 'Doctrina y Convenios 121:39',
            },
            {
              type: 'doctrine_box',
              title: 'Por qué "casi todos" — la raíz del abuso de autoridad',
              body: 'El Señor no dice que solo los malvados abusan del poder — dice "casi todos." La razón es que el abuso de autoridad no siempre nace de la malicia. Nace del miedo (necesitamos controlar porque desconfiamos), del orgullo (creemos saber más que los que servimos), o del agotamiento (las decisiones autocráticas son más rápidas que el consejo). Ninguna de estas motivaciones es maliciosa — pero todas producen el mismo resultado: personas que se sienten usadas en lugar de amadas. El reconocimiento de esta tendencia no es derrota — es el inicio de la libertad.',
            },
            {
              type: 'paragraph',
              text: 'Cuando un líder ha fallado — cuando ha controlado, dominado, o abusado de su posición — la restauración no empieza con una nueva política de liderazgo sino con una conversación honesta. El patrón de DyC 121:43-44 es preciso: cuando se ha reprendido injustamente, se muestra "un aumento de amor hacia aquel... no sea que lo tenga por tu enemigo." El aumento de amor no cancela la corrección necesaria — la completa.',
            },
            {
              type: 'key_points',
              title: 'Cuatro pasos para restaurar el liderazgo después de un fallo',
              points: [
                'Reconocer — sin excusas ni "pero tú también"; la responsabilidad es del líder, no de las circunstancias',
                'Disculparse directamente con la persona afectada — no en general, sino específicamente',
                '"Aumento de amor" — un acto concreto de servicio hacia quien fue agraviado',
                'Cambiar el patrón — no la promesa de cambiar, sino la práctica de cambiar: un ajuste específico en comportamiento futuro',
              ],
            },
            {
              type: 'quiz',
              quizType: 'true_false',
              question: 'Según DyC 121:39, solo los líderes maliciosos tienen tendencia a abusar de la autoridad.',
              answer: false,
              explanation: 'Incorrecto. DyC 121:39 dice "la naturaleza y disposición de casi todos los hombres" — no solo los maliciosos. El Señor identifica esta como una tendencia universal que debe ser vigilada activamente. El reconocimiento de esta tendencia en uno mismo es el primer paso del liderazgo honesto.',
            },
            {
              type: 'quiz',
              quizType: 'fill_blank',
              question: 'DyC 121:43 enseña que después de reprender a alguien, el líder debe mostrar "un aumento de _____ hacia aquel a quien has reprendido."',
              answer: 'amor',
              explanation: '"Reprendiendo oportunamente... y después mostrando un aumento de amor hacia aquel a quien has reprendido, no sea que lo tenga por tu enemigo." (DyC 121:43). La reprensión sin amor después produce resentimiento; el amor sin reprensión produce irresponsabilidad. DyC 121 requiere ambos, en ese orden.',
            },
            {
              type: 'reflection',
              prompt: '¿Qué llamamiento tienes actualmente — en la Iglesia, en tu hogar, en tu trabajo? ¿Reconoces en ti mismo la tendencia que describe DyC 121:39? ¿Hay alguien a quien deberías mostrar "un aumento de amor" después de una reprensión o corrección reciente? ¿Y cuál de los siete principios de DyC 121:41-42 necesitas desarrollar más conscientemente esta semana?',
            },
          ],
        },
      ],
    },
  ],
}
