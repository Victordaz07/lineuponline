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
          'En el mundo, el liderazgo fluye hacia abajo: quien tiene autoridad manda, quien manda es obedecido. Jesús entró a una habitación llena de discípulos que argumentaban sobre quién sería el más grande en el reino — y lo invirtió completamente. El mayor es el que sirve.',
        ],
      },
      topics: [
        {
          id: 't1',
          title: 'El Modelo de Cristo',
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
                  'Protege su posición y autoridad',
                  'La lealtad fluye hacia arriba (al líder)',
                  'Se rodea de quienes lo afirman',
                  'El éxito se mide en resultados a cualquier costo',
                ],
              },
              right: {
                title: 'Liderazgo del evangelio',
                items: [
                  'Sirve y sostiene a quienes lidera',
                  'Comparte el crédito y absorbe la responsabilidad',
                  'La preocupación fluye hacia abajo (hacia los liderados)',
                  'Busca consejo y retroalimentación honesta',
                  'El éxito se mide en el crecimiento de las personas',
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
              text: 'La noche antes de su crucifixión, el Hijo de Dios tomó una toalla y lavó los pies de doce hombres — incluyendo los de Judas, que ya había acordado entregarlo. Este acto no fue simbólico ni teatral. Fue una declaración: el mayor en el reino es quien se inclina a servir, no quien se sienta a recibir servicio.',
              blockId: 'li-s1-p-0',
            },
            {
              type: 'media_slot',
              kind: 'image',
              src: undefined,
              caption: 'Cristo lavando los pies de sus discípulos — el fundamento del liderazgo del evangelio.',
              contextCard: { year: 'Juan 13', place: 'El Aposento Alto', label: 'Servir, no ser servido' },
            },
            {
              type: 'leader_quote',
              quote: 'El verdadero líder del evangelio no pregunta: "¿Qué pueden hacer estas personas por mí?" sino "¿Qué puedo hacer yo por estas personas?" Esa inversión no es estrategia — es el corazón del evangelio de Jesucristo.',
              name: 'Élder Jeffrey R. Holland',
              role: '"The Mantle is Far, Far Greater than the Intellect", BYU Speech, 1981 (trad.)',
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
          'DyC 121 fue escrita desde la cárcel de Liberty — un José Smith encarcelado sin juicio, separado de su familia durante meses, sin poder ejercer ningún llamamiento. Es precisamente desde ese contexto de impotencia total que el Señor revela por qué los hombres pierden el sacerdocio — y cómo se ejerce legítimamente.',
        ],
      },
      topics: [
        {
          id: 't2',
          title: 'Lo Que Hace Que los Cielos se Retiren',
          blocks: [
            {
              type: 'highlight_verse',
              text: 'Los derechos del sacerdocio están inseparablemente unidos a los poderes del cielo, y que los poderes del cielo no pueden ser controlados ni manejados sino sobre los principios de justicia.',
              reference: 'Doctrina y Convenios 121:36',
            },
            {
              type: 'highlight_verse',
              text: 'He aquí que antes que se diera cuenta, ya no tenía el sacerdocio. Cuando comenzamos a cubrir nuestros pecados, a satisfacer nuestro orgullo, nuestra vana ambición, o a ejercer control o dominio o compulsión sobre las almas de los hijos de los hombres en cualquier grado de injusticia, he aquí que los cielos se retiran, el Espíritu del Señor se contrista.',
              reference: 'Doctrina y Convenios 121:37',
            },
            {
              type: 'doctrine_box',
              title: 'Las tres causas que hacen que los cielos se retiren',
              body: 'DyC 121:37 identifica con precisión lo que destruye la influencia legítima de un líder: (1) Cubrir sus pecados — falta de transparencia y autenticidad. (2) Orgullo y vana ambición — motivaciones centradas en sí mismo más que en los demás. (3) Control, dominio, compulsión — usar la posición para forzar en lugar de persuadir. Cuando cualquiera de estos entra, "los cielos se retiran." No como castigo externo, sino como consecuencia directa: un líder que controla en lugar de servir ya no lleva la influencia celestial.',
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
              text: 'Reprendiendo oportunamente, cuando sea movido por el Espíritu Santo; y después mostrando un aumento de amor hacia aquel a quien has reprendido, no sea que lo tenga por tu enemigo.',
              reference: 'Doctrina y Convenios 121:43',
            },
          ],
        },
      ],
    },
    {
      id: 's3',
      title: 'La Corrección con Amor',
      intro: {
        romanNumeral: 'III',
        title: 'La Corrección con Amor',
        paragraphs: [
          'Todo líder tendrá que corregir a alguien. La pregunta no es si — sino cómo. DyC 121:43-44 establece el protocolo más específico de todo el canon restaurado para el momento más difícil del liderazgo.',
        ],
      },
      topics: [
        {
          id: 't3',
          title: 'El Protocolo de la Reprensión',
          blocks: [
            {
              type: 'highlight_verse',
              text: 'Reprendiendo oportunamente, cuando sea movido por el Espíritu Santo; y después mostrando un aumento de amor hacia aquel a quien has reprendido, no sea que lo tenga por tu enemigo; para que sepa que tu fidelidad es más fuerte que los lazos de la muerte.',
              reference: 'Doctrina y Convenios 121:43–44',
            },
            {
              type: 'steps',
              title: 'El protocolo de DyC 121:43 para corregir con amor — 4 pasos',
              steps: [
                'ESPERAR EL ESPÍRITU — "cuando sea movido por el Espíritu Santo." La corrección impulsada por la frustración, el orgullo herido, o la presión institucional no cumple el estándar. Primero, busca el Espíritu. ¿Es este el momento? ¿Eres tú la persona correcta para hacerlo?',
                'CORREGIR CON OPORTUNIDAD — "oportunamente." El momento importa tanto como el contenido. Una corrección verdadera se da en privado, en el momento adecuado, con palabras específicas sobre el comportamiento, no ataques a la identidad.',
                'MOSTRAR UN AUMENTO DE AMOR — "después mostrando un aumento de amor." Después de la corrección, no menos amor sino más. El objetivo es que la persona sepa que fue corregida porque te importa, no porque la rechazas.',
                'CONFIRMAR LA RELACIÓN — "para que sepa que tu fidelidad es más fuerte que los lazos de la muerte." La corrección sin confirmación de la relación se convierte en distancia. El seguimiento importa más que el mensaje inicial.',
              ],
            },
            {
              type: 'deep_dive',
              badge: 'Aplicación práctica',
              title: 'Por qué la mayoría de los líderes evitan la corrección',
              paragraphs: [
                'Hay dos extremos patológicos en el liderazgo del evangelio: el líder que nunca corrige (por miedo al conflicto o al rechazo), y el líder que corrige sin amor (por frustración, orgullo, o necesidad de control). Ambos extremos dañan a las personas a su cargo.',
                'El primer tipo produce inmadurez espiritual en el rebaño — las personas nunca crecen porque nadie les dice la verdad con amor. El segundo tipo produce heridas que alejan a las personas de la Iglesia.',
                'La frase "movido por el Espíritu Santo" no es una excusa para la parálisis — es una fuente de valor y sabiduría. El Espíritu sabe cuándo una persona está lista para escuchar, qué palabras llegarán al corazón, y cómo el líder puede mantener la relación mientras entrega un mensaje difícil.',
              ],
            },
            {
              type: 'leader_quote',
              quote: 'He aprendido que las personas pueden soportar casi cualquier cosa que yo necesite decirles si saben que las amo genuinamente. Y he aprendido que casi nada de lo que digo llega al corazón si no lo saben.',
              name: 'Élder David A. Bednar',
              role: '"Come and See", Conferencia General, octubre 2014 (trad.)',
            },
          ],
        },
      ],
    },
    {
      id: 's4',
      title: 'Las Cualidades del Líder-Servidor',
      intro: {
        romanNumeral: 'IV',
        title: 'Las Cualidades del Líder-Servidor',
        paragraphs: [
          'DyC 4 fue revelada para misioneros, pero sus principios aplican a todo liderazgo en el evangelio. Las cualidades que describe no son habilidades de gestión — son atributos del corazón que Dios busca en quienes le sirven.',
        ],
      },
      topics: [
        {
          id: 't4',
          title: 'El Corazón de un Siervo',
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
              text: 'El "ojo fijo en la gloria de Dios" es el antídoto contra la vana ambición. Cuando el objetivo genuino es servir a Dios y a Sus hijos, el control y el dominio pierden su atractivo. Un líder cuya motivación central es el servicio genuino opera naturalmente bajo los principios de DyC 121 — no porque siga una lista de reglas, sino porque ha adoptado el corazón de un siervo.',
              blockId: 'li-s4-p-0',
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
              quote: 'El poder espiritual de un hombre en el hogar y en la Iglesia no está determinado principalmente por su llamamiento, sino por la rectitud de su vida. Un hombre puede tener la autoridad del sacerdocio y aun así carecer de su poder. La autoridad viene de la ordenación; el poder viene de la obediencia y la rectitud personal.',
              name: 'Russell M. Nelson',
              role: '"The Price of Priesthood Power", Conferencia General, abril 2016 (trad.)',
            },
          ],
        },
      ],
    },
    {
      id: 's5',
      title: 'Liderazgo en el Hogar',
      intro: {
        romanNumeral: 'V',
        title: 'Liderazgo en el Hogar',
        paragraphs: [
          'El hogar es el primer y más importante laboratorio de liderazgo del evangelio. Antes de que puedas liderar bien en la Iglesia, tienes que aprender a hacerlo en tu familia. Y los principios de DyC 121 aplican especialmente — quizás más intensamente — dentro de casa.',
        ],
      },
      topics: [
        {
          id: 't5',
          title: 'El Líder en la Familia',
          blocks: [
            {
              type: 'highlight_verse',
              text: 'Y vosotros, padres, no provoquéis a ira a vuestros hijos, sino criadlos en disciplina y amonestación del Señor.',
              reference: 'Efesios 6:4',
            },
            {
              type: 'doctrine_box',
              title: 'La Proclamación sobre la Familia y el liderazgo del hogar',
              body: 'La Proclamación sobre la Familia (1995) establece que los padres tienen "la obligación sagrada de criar a sus hijos con amor y rectitud." La palabra clave es "con amor" — no "con autoridad" ni "con control." El sacerdocio en el hogar no es una licencia para el dominio familiar sino para el servicio familiar. Un padre que lidera bajo los principios de DyC 121 — persuasión, paciencia, amor no fingido — produce un hogar donde los hijos quieren seguir el evangelio, no donde lo obedecen por miedo.',
            },
            {
              type: 'compare_grid',
              left: {
                title: 'Liderazgo coercitivo en el hogar',
                items: [
                  'Obediencia basada en miedo o presión',
                  'Los hijos cumplen cuando los padres están presentes',
                  'La fe de los hijos depende de la fe de los padres',
                  'El evangelio se asocia con tensión y control',
                  'Los hijos se alejan cuando pueden elegir libremente',
                ],
              },
              right: {
                title: 'Liderazgo servidor en el hogar',
                items: [
                  'Obediencia basada en comprensión y amor',
                  'Los hijos internalizan los principios, no solo las reglas',
                  'Los hijos desarrollan fe propia',
                  'El evangelio se asocia con paz, gozo y pertenencia',
                  'Los hijos eligen el evangelio cuando son adultos libres',
                ],
              },
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
      title: 'Aplicación y Verificación',
      intro: {
        romanNumeral: 'VI',
        title: 'Aplicación y Verificación',
        paragraphs: [
          'El liderazgo del evangelio no se aprende leyendo sobre él — se aprende practicándolo. Estas preguntas y ejercicios están diseñados para pasar de la doctrina al comportamiento.',
        ],
      },
      topics: [
        {
          id: 't6',
          title: 'De la Doctrina a la Práctica',
          blocks: [
            {
              type: 'reflection',
              prompt: '¿Qué llamamiento tienes actualmente — en la Iglesia, en tu hogar, en tu trabajo? ¿Cuál de los principios de DyC 121 (persuasión, paciencia, mansedumbre, amor no fingido, bondad, puro conocimiento) te cuesta más aplicar? ¿Qué cambiaría en cómo lideras si adoptaras completamente el modelo de Jesús lavando los pies de sus discípulos?',
            },
            {
              type: 'quiz',
              id: 'q-1', question: { kind: 'fill_blank',
                prompt: 'Según DyC 121:37, cuando un líder ejerce "control, dominio o compulsión" en cualquier grado de injusticia, ___.',
                options: [
                  'pierde su llamamiento formalmente',
                  'los cielos se retiran y el Espíritu se contrista',
                  'debe confesar al obispo',
                  'su familia lo abandonará',
                ],
                correctIndex: 1,
                explanation: 'DyC 121:37 dice que los cielos se retiran y el Espíritu del Señor se contrista. No es un castigo externo — es una consecuencia directa: el líder coercitivo pierde la influencia espiritual real, independientemente de su título formal.',
              },
            },
            {
              type: 'quiz',
              id: 'q-2', question: {
                kind: 'fill_blank',
                prompt: 'DyC 121:41-42 lista siete principios del liderazgo del evangelio. El primero es la persuasión, el segundo es la paciencia, el tercero es la ___.',
                options: ['obediencia', 'mansedumbre', 'templanza', 'autoridad'],
                correctIndex: 1,
                explanation: 'Los siete principios son: persuasión, paciencia, mansedumbre, amor no fingido, bondad, puro conocimiento, y sin hipocresía ni engaño. La mansedumbre — suavidad de espíritu — es el tercer principio.',
              },
            },
            {
              type: 'quiz',
              id: 'q-3', question: {
                kind: 'fill_blank',
                prompt: 'Según DyC 121:43, el líder debe reprend er "cuando sea movido por ___" y después mostrar un aumento de amor.',
                options: ['la necesidad', 'el Espíritu Santo', 'la autoridad', 'la situación'],
                correctIndex: 1,
                explanation: 'DyC 121:43 especifica que la reprensión debe ocurrir "cuando sea movido por el Espíritu Santo." La corrección espiritual no está motivada por frustración ni presión institucional — está guiada por el Espíritu, en el momento correcto, con las palabras correctas.',
              },
            },
          ],
        },
      ],
    },
  ],
}
