import type { Lesson } from '@/types/doctrine'

export const laPreexistencia: Lesson = {
  id: 'preexistencia',
  moduleId: 'doctrina-avanzada-carne',
  title: 'La Preexistencia',
  subtitle: 'Quiénes éramos antes de nacer',
  author: 'Fuentes principales: Abraham 3, DyC 138, Jeremías 1, Job 38',
  description:
    'Vivimos con Dios antes de nacer. Teníamos personalidad, carácter, y destino. Elegimos venir a la tierra. Entender la vida premortal transforma completamente cómo entiendes tu identidad, tus talentos, y el propósito de lo que estás viviendo ahora.',
  level: 'AVANZADO',
  icon: '⭐',
  duration: 60,
  order: 3,
  status: 'PUBLISHED',
  studyBodyPlain: '',
  originalBodyPlain: '',
  previousLessonId: 'templo-casa-del-senor',
  nextLessonId: 'plan-de-salvacion',
  studySections: [
    {
      id: 's1',
      title: 'Existíamos Antes de Nacer',
      intro: {
        romanNumeral: 'I',
        title: 'Existíamos Antes de Nacer',
        paragraphs: [
          'Una de las doctrinas más hermosas y distintivas de la Restauración es esta: no empezaste a existir cuando naciste. Tenías una existencia premortal. Vivías como espíritu con tu Padre Celestial. Tenías personalidad, carácter, capacidades, y relaciones que se formaron durante eones antes de la mortalidad.',
        ],
      },
      topics: [
        {
          id: 't1',
          title: 'La Naturaleza del Espíritu Premortal',
          blocks: [
            {
              type: 'highlight_verse',
              text: 'Ahora el Señor me había mostrado, a mí, Abraham, las inteligencias que fueron organizadas antes de que el mundo fuera; y entre todas estas había muchas de las grandes e nobles; y Dios vio que esas almas eran buenas, y se puso en medio de ellas, y dijo: Seré tu gobernante.',
              reference: 'Abraham 3:22–23',
            },
            {
              type: 'paragraph',
              text: 'Abraham vio en visión la vida premortal. Lo que describe no es un estado vago de existencia nebulosa — es una comunidad de espíritus con diferencias reales de carácter y capacidad. "Muchas de las grandes e nobles" — algunas almas ya habían desarrollado más que otras. El carácter que traemos a esta vida no fue aleatoriamente asignado. Fue desarrollado durante una existencia anterior.',
            },
            {
              type: 'highlight_verse',
              text: 'La inteligencia, o la luz de la verdad, no fue creada ni hecha; ni tampoco se puede crear. [...] El hombre también estuvo en el principio con Dios.',
              reference: 'Doctrina y Convenios 93:29, 33',
            },
            {
              type: 'doctrine_box',
              title: 'La diferencia entre inteligencia, espíritu, y alma',
              body: 'DyC 93:29 introduce una distinción técnica importante: la "inteligencia" o "luz de la verdad" es lo más fundamental de tu ser — nunca fue creada y no puede ser destruida. El "espíritu" es esa inteligencia organizada por Dios en forma espiritual (Abraham 3:22). El "alma" es la combinación de espíritu y cuerpo mortal (DyC 88:15). Lo que significa: hay un núcleo de ti que es eterno en el sentido más literal — nadie te hizo existir desde cero. Tu existencia no tiene punto de origen en el tiempo.',
            },
            {
              type: 'highlight_verse',
              text: 'Antes de que te formara en el vientre, te conocí, y antes de que nacieras, te santifiqué, te di por profeta a las naciones.',
              reference: 'Jeremías 1:5',
            },
            {
              type: 'highlight_verse',
              text: '¿Dónde estabas tú cuando puse los fundamentos de la tierra? [...] Cuando alababan todas las estrellas del alba, y se regocijaban todos los hijos de Dios.',
              reference: 'Job 38:4, 7',
            },
            {
              type: 'media_slot',
              kind: 'image',
              src: undefined,
              alt: 'Vast celestial expanse with countless glowing spirit orbs of light, warm golden tones, painterly style',
              caption: 'La vida premortal — espíritus organizados antes de la fundación del mundo',
              contextCard: { label: 'Vida premortal', place: 'Premortalidad' },
            },
          ],
        },
      ],
    },
    {
      id: 's2',
      title: 'Las Almas Nobles y Grandes — Abraham 3',
      intro: {
        romanNumeral: 'II',
        title: 'Las Almas Nobles y Grandes — Abraham 3',
        paragraphs: [
          'Abraham 3 no solo confirma la existencia premortal — revela que había jerarquía, desarrollo diferencial, y asignaciones específicas preparadas antes del nacimiento. Dios eligió a ciertos espíritus para ciertos roles. Ese principio de preordenación no pertenece solo a los profetas.',
        ],
      },
      topics: [
        {
          id: 't2',
          title: 'Preordenación: Preparados, No Predestinados',
          blocks: [
            {
              type: 'highlight_verse',
              text: 'Y Dios vio estas almas, que eran buenas; y me dijo: Abraham, tú eres uno de ellas; fuiste elegido antes de que nacieras. Y hay dos tiempos determinados para dos cosas: la primera, para traer a muchos a la gloria; la segunda, para los que deben ser los gobernantes del reino de Dios.',
              reference: 'Abraham 3:23',
            },
            {
              type: 'paragraph',
              text: '"Fuiste elegido antes de que nacieras." Esto es lo que la teología llama preordenación — no predestinación. La diferencia es crítica. La predestinación calvinista dice que Dios seleccionó arbitrariamente quiénes se salvan y quiénes se condenan, sin que el ser humano pueda hacer nada. La preordenación restaurada dice que Dios, conociendo perfectamente el carácter que cada espíritu desarrolló en la premortalidad, asignó roles y responsabilidades específicas — que luego cada persona puede cumplir o rechazar con su agencia en la mortalidad.',
            },
            {
              type: 'compare_grid',
              left: {
                title: 'Predestinación (calvinismo)',
                items: [
                  'Dios elige arbitrariamente quién se salva',
                  'El humano no puede cambiar su destino',
                  'La fe y las obras no afectan el resultado final',
                  'La condenación fue decidida antes de nacer, sin mérito',
                ],
              },
              right: {
                title: 'Preordenación (Restauración)',
                items: [
                  'Dios asigna roles basado en carácter premortal desarrollado',
                  'La agencia siempre puede cumplir o rechazar la asignación',
                  'La fidelidad en la mortalidad confirma o cancela la preordenación',
                  'Nadie es predestinado a la condenación — todos tienen acceso a la expiación',
                ],
              },
            },
            {
              type: 'highlight_verse',
              text: 'Muchos son los llamados, y pocos los escogidos. Y ¿por qué no son escogidos? Por causa de sus corazones, que están puestos tan intensamente sobre las cosas del mundo.',
              reference: 'Doctrina y Convenios 121:34–35',
            },
            {
              type: 'media_slot',
              kind: 'image',
              src: undefined,
              alt: 'Grand celestial council: multitude of radiant spirit beings gathered around a throne of light, majestic and reverent, painterly style',
              caption: 'El Gran Consejo Premortal — Abraham fue elegido antes de nacer (Abraham 3:23)',
              contextCard: { label: 'El Consejo en los Cielos' },
            },
            {
              type: 'key_points',
              title: 'Lo que Abraham 3 revela sobre la vida premortal',
              points: [
                'Cristo fue el primero y el más grande entre los espíritus — "uno semejante al Hijo del Hombre" (Abraham 3:24), el Primogénito en el espíritu (DyC 93:21)',
                'Algunos espíritus fueron asignados como "gobernantes" — no en el sentido político sino en el de liderazgo espiritual sobre dispensaciones y naciones',
                'La tierra fue creada como "lugar de prueba" explícitamente: "probaremos a ver si harán todas las cosas que el Señor su Dios les mandare" (Abraham 3:25)',
                'La premortalidad no garantiza la exaltación — la asignación es una oportunidad, no un boleto. La fidelidad en la mortalidad es lo que la confirma',
              ],
            },
            {
              type: 'leader_quote',
              quote: 'Fuiste enviado a este tiempo, a este lugar, por una razón. No viniste aquí por accidente. Viniste aquí por designio divino — con talentos específicos, con retos específicos, con misiones específicas que cumplir. El hecho de que no las recuerdes no significa que no existan.',
              name: 'Russell M. Nelson',
              role: '"Becoming Exemplary Latter-day Saints", Conferencia General, octubre 2018 (trad.)',
            },
          ],
        },
      ],
    },
    {
      id: 's3',
      title: 'La Guerra en el Cielo',
      intro: {
        romanNumeral: 'III',
        title: 'La Guerra en el Cielo',
        paragraphs: [
          'La premortalidad no fue un estado de paz pasiva. Hubo conflicto. Hubo elección. Hubo un momento en que cada espíritu tuvo que decidir qué tipo de eternidad quería. Comprender esa guerra aclara por qué estás aquí, por qué el adversario existe, y qué batallas estás continuando ahora.',
        ],
      },
      topics: [
        {
          id: 't3',
          title: 'Dos Planes, Una Elección Eterna',
          blocks: [
            {
              type: 'highlight_verse',
              text: 'Y yo, el Señor Dios, hablé a Moisés, diciendo: He aquí que Satanás vino tentándome, diciendo: Moisés, hijo del hombre, adórame. [...] Y he aquí, vino Satanás, diciendo: Heme aquí, envíame a mí; seré tu hijo y redimiré a toda la humanidad, de modo que no se perderá ni una sola alma, y sin duda lo haré; dámele tu honor.',
              reference: 'Moisés 1:12; 4:1',
            },
            {
              type: 'paragraph',
              text: 'El plan de Lucifer tenía una lógica superficialmente atractiva: garantizar que todos regresaran, eliminar el riesgo del fracaso. El precio era la agencia. Cristo propuso el plan del Padre: preservar la agencia, proveer una expiación para quienes fallaran, y devolver toda la gloria al Padre. La diferencia era la diferencia entre esclavitud segura y libertad con riesgo. Dos tercios eligieron la libertad. Un tercio eligió la seguridad del control.',
            },
            {
              type: 'highlight_verse',
              text: 'Y se libró una batalla en el cielo: Miguel y sus ángeles luchaban contra el dragón; y luchaba el dragón y sus ángeles; pero no prevalecieron, ni se halló ya lugar para ellos en el cielo. Y fue lanzado fuera el gran dragón, la serpiente antigua, que se llama diablo y Satanás, el cual engaña al mundo entero.',
              reference: 'Apocalipsis 12:7–9',
            },
            {
              type: 'highlight_verse',
              text: 'Y fue echado fuera el dragón grande, la serpiente antigua, y una tercera parte de los ejércitos del cielo se volvió después de él; y fueron echados fuera al vacío del espacio.',
              reference: 'Doctrina y Convenios 29:36–37',
            },
            {
              type: 'media_slot',
              kind: 'image',
              src: undefined,
              alt: 'Dramatic spiritual battle in heaven: streams of brilliant light opposing dark swirling mass, celestial atmosphere, symbolic and epic, no violent imagery',
              caption: 'La Guerra en el Cielo — un tercio de los espíritus eligió el plan de Lucifer (DyC 29:36)',
              contextCard: { label: 'La Guerra en el Cielo' },
            },
            {
              type: 'doctrine_box',
              title: 'Por qué Satanás sigue aquí — y por qué importa para ti',
              body: 'Lucifer y sus seguidores no fueron aniquilados — fueron expulsados sin cuerpo, sin posibilidad de progresión, y sin acceso a la exaltación. Eso explica su motivación: si él no puede tener un cuerpo glorificado, intentará que tú no uses bien el tuyo. Si no puede hacer convenios, intentará que tú los rompas. No opera por sadismo abstracto — opera por envidia y desesperanza. DyC 29:39 añade algo crucial: fue necesario que el diablo tentara a los hombres, "pues de otro modo no eran agentes para sí mismos." La tentación no es un fallo del sistema — es una condición necesaria para que la agencia tenga sentido.',
            },
            {
              type: 'deep_dive',
              badge: 'Profundizar',
              title: 'Por qué elegiste venir — y lo que eso implica',
              paragraphs: [
                'Elegiste la mortalidad sabiendo que habría dolor, enfermedad, pérdida, tentación, y muerte. No lo elegiste ignorando esos riesgos — los conocías. Lo elegiste porque también conocías la alternativa: quedarte en la premortalidad sin un cuerpo, sin la posibilidad de la exaltación, sin el crecimiento que solo la mortalidad puede producir.',
                'Esto cambia completamente cómo interpretas el sufrimiento. Cuando estás en el hospital, cuando pierdes un ser amado, cuando tu matrimonio está en crisis — no estás en territorio no planeado. Estás en exactamente el tipo de experiencia que elegiste tener, porque sabías que solo a través de ellas podrías llegar a ser lo que Dios quiere que seas.',
                'Job 38:7 dice que los "hijos de Dios" — todos los espíritus premortales — "se regocijaban" cuando Dios creó la tierra. Eso incluye el momento en que se planificó tu mortalidad, con todas sus pruebas. Te regocijaste. No porque las pruebas sean fáciles, sino porque entendías lo que producirían.',
              ],
            },
          ],
        },
      ],
    },
    {
      id: 's4',
      title: 'El Velo del Olvido — Por Qué No Recordamos',
      intro: {
        romanNumeral: 'IV',
        title: 'El Velo del Olvido — Por Qué No Recordamos',
        paragraphs: [
          'Si vivimos con Dios antes de nacer, ¿por qué no lo recordamos? Esta es la pregunta más frecuente sobre la premortalidad, y tiene una respuesta doctrinal precisa. El velo de la memoria no es un castigo ni un descuido divino — es una condición necesaria para que la fe, la agencia, y la prueba tengan sentido.',
        ],
      },
      topics: [
        {
          id: 't4',
          title: 'La Lógica del Velo',
          blocks: [
            {
              type: 'paragraph',
              text: 'Si recordaras perfectamente haber vivido con Dios, haber visto Su rostro, haber conocido Su amor de manera directa y tangible — ¿qué significaría la fe? La fe requiere actuar sobre evidencia insuficiente para la certeza. Si tuvieras certeza directa de la existencia de Dios por memoria personal, ya no necesitarías fe. Y sin fe, el plan de salvación no puede funcionar como prueba del carácter.',
            },
            {
              type: 'doctrine_box',
              title: 'El velo como condición, no como castigo',
              body: 'Boyd K. Packer enseñó que el velo no fue diseñado para dejarnos ignorantes — fue diseñado para crear las condiciones en las que la fe puede operar genuinamente. Un ser que recuerda perfectamente a Dios no puede "creer" en Él en el sentido activo, transformador, y meritorio de la fe. El olvido es la condición que hace posible la fe. Y la fe es la condición que hace posible la exaltación.',
            },
            {
              type: 'media_slot',
              kind: 'image',
              src: undefined,
              alt: 'A lone figure walking through translucent light curtains, transitioning from warm golden celestial glow to soft mortal morning light, ethereal and peaceful',
              caption: 'El Velo del Olvido — condición necesaria para que la fe tenga sentido',
              contextCard: { label: 'El Velo del Olvido' },
            },
            {
              type: 'highlight_verse',
              text: 'Ahora bien, el Señor no ha permitido que ninguna nación haga cosas mayores que las que él ha preparado para mi pueblo; pues el Señor no ha revelado mis obras a las naciones, y por esto ha hecho que cuando sus siervos les hablasen, sus corazones se oscureciesen, para que no las comprendiesen; pero en el momento oportuno de su sabiduría, revelará todas sus obras.',
              reference: 'DyC 128:18 (adaptado)',
            },
            {
              type: 'key_points',
              title: 'Lo que llevamos del premortal aunque no lo recordemos conscientemente',
              points: [
                'Talentos y capacidades — las inclinaciones naturales hacia el arte, la música, el servicio, el liderazgo, o el estudio tienen raíces premortales según la doctrina restaurada',
                'Carácter moral — la tendencia hacia la bondad, la honestidad, y la compasión que algunos parecen traer desde pequeños puede reflejar lo que desarrollaron antes',
                'Reconocimiento espiritual — la sensación de "ya sabía esto" al escuchar el evangelio por primera vez es lo que los misioneros llaman "el velo se adelgaza"',
                'Relaciones significativas — la Iglesia enseña que las familias y amistades profundas a menudo tienen historia premortal; nos "encontramos" con conocidos de antes',
              ],
            },
            {
              type: 'leader_quote',
              quote: 'Cada uno de nosotros es un hijo o hija espiritual del Padre Celestial. Esa identidad no comenzó con el nacimiento. Comenzó antes del nacimiento. Continúa después de la muerte. Comprender esto cambia cómo te ves a ti mismo en el espejo — no como un accidente cósmico, sino como un ser eterno en entrenamiento.',
              name: 'Dieter F. Uchtdorf',
              role: '"The Reflection in the Water", Conferencia del Grupo de Jóvenes Adultos, noviembre 2009 (trad.)',
            },
          ],
        },
      ],
    },
    {
      id: 's5',
      title: 'La Premortalidad en la Biblia',
      intro: {
        romanNumeral: 'V',
        title: 'La Premortalidad en la Biblia',
        paragraphs: [
          'La doctrina de la preexistencia no fue inventada por José Smith. Estaba en la Biblia desde siempre — en textos que el mundo cristiano tradicional leía sin reconocer su implicación. La Restauración no contradice la Biblia en este punto: la completa.',
        ],
      },
      topics: [
        {
          id: 't5',
          title: 'Los Textos que el Mundo Cristiano Tenía pero No Leía',
          blocks: [
            {
              type: 'highlight_verse',
              text: 'Antes de que te formara en el vientre, te conocí, y antes de que nacieras, te santifiqué, te di por profeta a las naciones.',
              reference: 'Jeremías 1:5',
            },
            {
              type: 'paragraph',
              text: 'Jeremías 1:5 es el texto más directo: Dios "conoció" a Jeremías antes de su formación en el vientre. La palabra hebrea "yadah" — conocer — implica relación personal, no conocimiento abstracto. Dios no solo sabía que Jeremías existiría; tenía una relación con él. Eso requiere que Jeremías ya existiera en alguna forma. La interpretación calvinista dice que es metáfora o conocimiento previo de Dios. La lectura literal dice que Jeremías existía y Dios lo conocía.',
            },
            {
              type: 'highlight_verse',
              text: 'Según nos escogió en él antes de la fundación del mundo, para que fuésemos santos y sin mancha delante de él, en amor habiéndonos predestinado para ser adoptados hijos suyos por medio de Jesucristo.',
              reference: 'Efesios 1:4–5',
            },
            {
              type: 'highlight_verse',
              text: 'Y al pasar Jesús, vio a un hombre ciego de nacimiento. Y le preguntaron sus discípulos, diciendo: Rabí, ¿quién pecó, éste o sus padres, para que haya nacido ciego?',
              reference: 'Juan 9:1–2',
            },
            {
              type: 'paragraph',
              text: 'Juan 9:1-2 es fascinante: los discípulos le preguntan a Cristo si el hombre nació ciego por su propio pecado o el de sus padres. La pregunta del pecado propio implica que los discípulos consideraban posible que el hombre hubiera pecado antes de nacer — lo que solo tiene sentido si ellos creían en la preexistencia. Cristo no corrige la premisa de que la preexistencia es posible — simplemente aclara que ni ese pecado ni el de los padres causó la ceguera en este caso específico.',
            },
            {
              type: 'doctrine_box',
              title: 'La premortalidad en el pensamiento cristiano primitivo',
              body: 'La preexistencia del alma no fue inventada por José Smith. Orígenes de Alejandría (185-253 d.C.), uno de los padres más influyentes de la Iglesia primitiva, enseñó que las almas existían antes del nacimiento. Fue una doctrina debatida y eventualmente condenada en el Segundo Concilio de Constantinopla (553 d.C.) — más de 500 años después de Cristo. Esto significa que la doctrina estuvo presente en el pensamiento cristiano temprano, fue debatida, y luego oficialmente eliminada. La Restauración no introduce una idea extraña al cristianismo — restaura una que fue sacada.',
            },
            {
              type: 'compare_grid',
              left: {
                title: 'Interpretación tradicional cristiana',
                items: [
                  'Jeremías 1:5 = "conocer" como preconocimiento divino abstracto',
                  'Efesios 1:4 = Dios eligió a los santos en la mente divina, no en existencia real',
                  'Juan 9:2 = pregunta incorrecta de discípulos ignorantes',
                  'Job 38:7 = los "hijos de Dios" son ángeles, no espíritus humanos',
                ],
              },
              right: {
                title: 'Lectura restaurada',
                items: [
                  'Jeremías 1:5 = relación personal real que requiere existencia previa',
                  'Efesios 1:4 = selección real antes del mundo basada en carácter premortal',
                  'Juan 9:2 = los discípulos creían en la preexistencia como algo posible',
                  'Job 38:7 = todos los espíritus humanos presentes en la creación',
                ],
              },
            },
          ],
        },
      ],
    },
    {
      id: 's6',
      title: 'Lo Que la Premortalidad Significa para Hoy',
      intro: {
        romanNumeral: 'VI',
        title: 'Lo Que la Premortalidad Significa para Hoy',
        paragraphs: [
          'La doctrina de la preexistencia no es solo teología abstracta interesante. Tiene implicaciones directas y prácticas para cómo vives hoy, cómo te entiendes a ti mismo, y cómo tratas a las personas a tu alrededor.',
        ],
      },
      topics: [
        {
          id: 't6',
          title: 'Identidad, Propósito y Destino',
          blocks: [
            {
              type: 'key_points',
              title: 'Cinco implicaciones prácticas de la doctrina de la preexistencia',
              points: [
                'Tu identidad es eterna — no eres un accidente biológico; eres un ser espiritual con historia antes de esta vida y destino después de ella',
                'Tus talentos tienen raíces premortales — lo que se te da fácil fue probablemente desarrollado antes; no lo desperdicies ni lo minimices',
                'Las relaciones significativas tienen historia previa — la premortalidad sugiere que los encuentros que cambian tu vida no son del todo accidentales',
                'Tu sufrimiento no es accidental — elegiste un camino que incluía estas pruebas porque sabías que te formarían de maneras que nada más podría',
                'Viniste con una misión — Jeremías 1:5 no es solo para profetas; cada espíritu fue "conocido" antes de nacer con una contribución específica para hacer',
              ],
            },
            {
              type: 'highlight_verse',
              text: 'Y vi que las almas de los justos que habían partido de este mundo estaban en el paraíso de Dios. Y también vi que el espíritu de los justos que habían muerto habían gozado del poder del Espíritu Santo.',
              reference: 'Doctrina y Convenios 138:12, 29',
            },
            {
              type: 'quiz',
              id: 'q-preex-velo',
              question: {
                kind: 'true_false',
                statement: 'Según la doctrina restaurada, el velo del olvido fue colocado como consecuencia del pecado de Adán y Eva en el Jardín del Edén.',
                correctAnswer: false,
                explanation: 'El velo no fue un castigo por la Caída. Fue diseñado antes de la fundación del mundo como condición necesaria para que la fe opere genuinamente. Sin el velo, recordaríamos a Dios con certeza directa y la fe no tendría sentido como principio de progresión espiritual.',
              },
            },
            {
              type: 'quiz',
              id: 'q-preex-preord',
              question: {
                kind: 'fill_blank',
                prompt: 'La diferencia entre la preordenación (doctrina restaurada) y la predestinación (calvinismo) es que la preordenación...',
                options: [
                  'garantiza la salvación independientemente de las decisiones en la mortalidad',
                  'asigna roles basados en el carácter premortal, pero la agencia puede cumplirlos o rechazarlos',
                  'solo aplica a los profetas y apóstoles, no a los miembros ordinarios',
                ],
                correctIndex: 1,
              },
            },
            {
              type: 'reflection',
              prompt: '¿Cómo cambia la forma en que te ves a ti mismo saber que existías antes de nacer y que elegiste venir a la mortalidad? ¿Hay algo en tu vida — un talento, una inclinación, una relación — que ahora tiene más sentido a la luz de la premortalidad? ¿Cómo cambia esta doctrina la forma en que ves a alguien que te resulta difícil o que parece muy diferente a ti?',
            },
          ],
        },
      ],
    },
  ],
}
