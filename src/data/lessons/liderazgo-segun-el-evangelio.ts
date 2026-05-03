import type { Lesson } from '@/types/doctrine'

export const liderazgoSegunElEvangelio: Lesson = {
  id: 'liderazgo-segun-el-evangelio',
  moduleId: 'lideres-misioneros',
  title: 'Liderazgo según el Evangelio',
  subtitle: 'Servir, no ser servido',
  author: 'Fuentes principales: DyC 121, Mateo 20, Juan 13, DyC 4',
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
              left: {
                title: 'Liderazgo del mundo',
                items: [
                  'Controla e impone su voluntad',
                  'Se enfoca en resultados a cualquier costo',
                  'Protege su posición y autoridad',
                  'Se rodea de quienes lo afirman',
                  'La lealtad fluye hacia arriba (al líder)',
                ],
              },
              right: {
                title: 'Liderazgo del evangelio',
                items: [
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
          'DyC 121 fue escrita desde la cárcel de Liberty — un José Smith encarcelado sin juicio, separado de su familia durante meses, sin poder ejercer ningún llamamiento. Es precisamente desde ese contexto de impotencia total que el Señor revela el principio de por qué los hombres pierden el sacerdocio — y cómo se ejerce legítimamente. El mensaje es urgente para todo líder: hay formas de liderar que hacen que los cielos se retiren.',
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
              text: 'He aquí, ere que lo supiera, ya no tenía el sacerdocio. Cuando emprendemos a cubrir nuestros pecados, o a satisfacer nuestro orgullo, nuestra vana ambición, o a ejercer control o dominio o compulsión sobre las almas de los hijos de los hombres en cualquier grado de injusticia, he aquí que los cielos se retiran, el Espíritu del Señor se contrista.',
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
      title: 'Las Cualidades del Líder-Servidor',
      intro: {
        romanNumeral: 'III',
        title: 'Las Cualidades del Líder-Servidor',
        paragraphs: [
          'DyC 4 fue revelada para misioneros, pero sus principios aplican a todo liderazgo en el evangelio. Las cualidades que describe no son habilidades de gestión — son atributos del corazón que Dios busca en quienes le sirven.',
        ],
      },
      topics: [
        {
          id: 't3',
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
            {
              type: 'reflection',
              prompt: '¿Qué llamamiento tienes actualmente — en la Iglesia, en tu hogar, en tu trabajo? ¿Cuál de los principios de DyC 121 (persuasión, paciencia, mansedumbre, amor no fingido, bondad, puro conocimiento) te cuesta más aplicar? ¿Qué cambiaría en cómo lideras si adoptaras completamente el modelo de Jesús lavando los pies de sus discípulos?',
            },
          ],
        },
      ],
    },
  ],
}
