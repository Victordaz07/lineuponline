import type { Lesson } from '@/types/doctrine'

export const elEstudioEscrituras: Lesson = {
  id: 'estudio-escrituras',
  moduleId: 'vida-familiar-personal',
  title: 'El Estudio de las Escrituras',
  subtitle: 'Banquetear en las palabras de Cristo',
  author: 'Fuentes principales: 2 Nefi 32, Bednar, Benson, DyC 18',
  description:
    'Las Escrituras no son historia religiosa — son revelación directa de Dios para ti. Cómo pasar de simplemente leer a verdaderamente banquetear: métodos, el Espíritu como maestro, y el hábito diario que lo cambia todo.',
  level: 'BÁSICO',
  icon: '📖',
  duration: 60,
  order: 3,
  status: 'PUBLISHED',
  studyBodyPlain: '',
  originalBodyPlain: '',
  previousLessonId: 'la-oracion',
  nextLessonId: 'ministerio-en-el-hogar',
  studySections: [
    // ─── SECCIÓN I ───────────────────────────────────────────────────────────
    {
      id: 's1',
      title: 'No Historia — Revelación Directa',
      intro: {
        romanNumeral: 'I',
        title: 'No Historia — Revelación Directa',
        paragraphs: [
          'Hay una diferencia entre leer un libro sobre Dios y escuchar a Dios directamente. Las Escrituras son lo segundo. Cuando Nefi escribió su registro, no estaba redactando historia para futuros académicos. Estaba transmitiendo revelación para futuros santos. "Las Escrituras son las palabras de Cristo" — y las palabras de Cristo tienen el poder de decirte exactamente qué hacer con tu vida.',
        ],
      },
      topics: [
        {
          id: 't1',
          title: 'Dios Te Habla a Ti — Personalmente',
          blocks: [
            {
              type: 'highlight_verse',
              text: 'Porque he aquí, otra vez os digo que si escucháis al Espíritu que os enseña, o a mí de alguna manera, será dado a conocer en vuestra mente y en vuestro corazón, por el Espíritu Santo, que procede de mí, el cual da testimonio del Padre y del Hijo.',
              reference: 'Doctrina y Convenios 8:2–3',
            },
            {
              type: 'highlight_verse',
              text: 'Estas palabras no son de hombres ni del hombre, sino de mí; por tanto, testificaréis que son de mí y no del hombre; porque es mi voz la que os las dice; porque son dadas por mi Espíritu a vosotros.',
              reference: 'Doctrina y Convenios 18:34–36',
            },
            {
              type: 'paragraph',
              text: 'DyC 18 no habla solo de ese texto en particular. Habla del principio: cuando lees las Escrituras, estás escuchando la voz del Señor. No una voz grabada de hace siglos. Una voz que el Espíritu hace viva y presente ahora. Esta distinción transforma completamente cómo te acercas a ellas: no como un estudiante que lee un texto antiguo, sino como un hijo que escucha a su Padre.',
            },
            {
              type: 'highlight_verse',
              text: 'Y ahora, mis amados hermanos, os digo estas cosas para que aprendáis sabiduría; para que podáis saber que cuando enseñéis por el poder y la inspiración del Espíritu Santo derramado sobre vosotros, el poder del Espíritu Santo transportará estas cosas a los corazones de los hijos de los hombres.',
              reference: '2 Nefi 33:1',
            },
            {
              type: 'doctrine_box',
              title: 'Las Escrituras como revelación aplicada a ti',
              body: 'Nefi registra en 1 Nefi 19:23 cómo usaba las Escrituras del Antiguo Testamento con su familia: "Os he leído estas cosas para que podáis aplicarlas a vosotros mismos y a vuestros hijos." No las leía como historia de Israel. Las leía como revelación aplicable. Esta es la clave: las Escrituras no son un archivo de lo que Dios dijo — son lo que Dios te dice ahora, si las aplicas a tu situación.',
            },
            {
              type: 'leader_quote',
              quote: 'Los poderes divinos de las escrituras son liberados mediante el estudio individual, diligente y devoto. No me estoy refiriendo a leer casualmente o a la familiarización superficial con las palabras de Dios. Me refiero al tipo de estudio que cambia corazones, que fortalece la fe, que provee dirección.',
              name: 'David A. Bednar',
              role: '"A Reservoir of Living Water", Devocional del SAE en BYU, 4 de febrero de 2007 (trad.)',
            },
          ],
        },
      ],
    },

    // ─── SECCIÓN II ──────────────────────────────────────────────────────────
    {
      id: 's2',
      title: 'El Libro de Mormón',
      intro: {
        romanNumeral: 'II',
        title: 'El Libro de Mormón',
        paragraphs: [
          'De todas las Escrituras que Dios ha dado, hay una que ocupa un lugar especial en esta dispensación. El presidente Ezra Taft Benson dedicó los últimos años de su ministerio a hablar de ella con urgencia creciente — porque estaba convencido de que los Santos de los Últimos Días estaban bajo condenación por no aprovecharse de lo que tenían.',
        ],
      },
      topics: [
        {
          id: 't2',
          title: 'La Piedra Angular y la Condenación',
          blocks: [
            {
              type: 'highlight_verse',
              text: 'Y vuestra mente ha quedado en tinieblas a causa de la incredulidad y porque habéis tratado ligeramente las cosas que habéis recibido; lo cual trae consigo la condenación de la iglesia y sus miembros que permanecen en ese estado, hasta que se arrepientan y recuerden el nuevo convenio, a saber, el Libro de Mormón y los mandamientos anteriores que os he dado.',
              reference: 'Doctrina y Convenios 84:54–57',
            },
            {
              type: 'paragraph',
              text: 'Esta escritura es incómoda — intencionalmente. Dios dice que hay una condenación sobre la Iglesia por tratar ligeramente el Libro de Mormón. "Tratar ligeramente" no significa rechazarlo. Significa tenerlo en el estante y no estudiarlo. Significa conocerlo superficialmente y no banquetear en él. El remedio es también específico: recordar el nuevo convenio, que es el Libro de Mormón.',
            },
            {
              type: 'leader_quote',
              quote: 'El Libro de Mormón es la piedra angular de nuestra religión. Fue escrito para nuestra época. Fue preservado para nuestra época. Fue traído a la tierra para nuestra época. El Señor prometió que serán bendecidos quienes lean el Libro de Mormón, y que se manifestará la verdad de él al lector por el poder del Espíritu Santo.',
              name: 'Ezra Taft Benson',
              role: '"The Keystone of Our Religion", Conferencia General, octubre 1986 (trad.)',
            },
            {
              type: 'leader_quote',
              quote: 'Prometo que a partir de este día, si nos sumergimos diariamente en el Libro de Mormón, podremos ser hombres y mujeres de Dios en este día, podremos hacer frente a las tentaciones del adversario y recibir testimonio de que Jesucristo es el Salvador e Hijo de Dios.',
              name: 'Ezra Taft Benson',
              role: '"The Book of Mormon — Keystone of Our Religion", Conferencia General, octubre 1986 (trad.)',
            },
            {
              type: 'highlight_verse',
              text: 'Y cuando recibáis estas cosas, quisiera exhortaros a que preguntéis a Dios el Eterno Padre, en el nombre de Cristo, si no son verdaderas estas cosas; y si pedís con un corazón sincero, con verdadera intención, teniendo fe en Cristo, él os manifestará la verdad de ello por el poder del Espíritu Santo.',
              reference: 'Moroni 10:4',
            },
            {
              type: 'deep_dive',
              badge: 'Profundizar',
              title: 'Por qué el Libro de Mormón es diferente a todas las demás Escrituras',
              paragraphs: [
                'Joseph Smith dijo que el Libro de Mormón es "el libro más correcto de cualquier libro en la tierra" y que "un hombre se acercará más a Dios siguiendo sus preceptos que por los de cualquier otro libro." Esta no es una declaración de superioridad sobre la Biblia — es una declaración sobre función. El Libro de Mormón fue escrito específicamente para los habitantes de los últimos días, con nuestros problemas en mente.',
                'Mormón y Moroni, al abreviar los registros de siglos, eligieron qué incluir. No eligieron al azar. El Espíritu les guió a incluir exactamente lo que los lectores del siglo XXI necesitarían. El principio de la fe (Alma 32), la expiación (Alma 34, 36, 42), el arrepentimiento (3 Nefi 9:22), la oración (Moroni 7), el Espíritu Santo (3 Nefi 11) — todo está ahí, dicho con una claridad que la Biblia, traducida y retranslada a través de siglos, a veces no puede igualar.',
                'Cuando lees el Libro de Mormón con sinceridad, estás usando el instrumento que Dios diseñó específicamente para tu época. Por eso la promesa de Moroni 10:4 es tan directa: si pides con sincero corazón y verdadera intención, la respuesta vendrá. El libro fue escrito para ser probado.',
              ],
            },
          ],
        },
      ],
    },

    // ─── SECCIÓN III ─────────────────────────────────────────────────────────
    {
      id: 's3',
      title: 'Banquetear — No Solo Leer',
      intro: {
        romanNumeral: 'III',
        title: 'Banquetear — No Solo Leer',
        paragraphs: [
          '2 Nefi 32:3 no dice "lean las palabras de Cristo". Dice "banquetéen en las palabras de Cristo." Un banquete es una experiencia completamente distinta a tomar un bocado rápido. Requiere tiempo, atención, preparación, y la intención de nutrirte, no solo de llenar el espacio. La diferencia entre leer las Escrituras y estudiarlas es exactamente esa.',
        ],
      },
      topics: [
        {
          id: 't3',
          title: 'El Método Importa: Tres Formas de Relacionarse con las Escrituras',
          blocks: [
            {
              type: 'highlight_verse',
              text: 'Porque he aquí, otra vez os digo que si escucháis al Espíritu... os será dado a conocer en vuestra mente y en vuestro corazón. [...] Festejad en las palabras de Cristo; porque he aquí, las palabras de Cristo os dirán todas las cosas que debéis hacer.',
              reference: '2 Nefi 32:3',
            },
            {
              type: 'compare_grid',
              left: {
                title: 'Solo leer',
                items: [
                  'Pasar los ojos por el texto',
                  'Meta: cubrir páginas',
                  'Información que entra y sale',
                  'Sin preguntas, sin lápiz',
                  'Pasivo — el texto es fijo',
                ],
              },
              right: {
                title: 'Banquetear / Estudiar',
                items: [
                  'Escuchar al Espíritu mientras lees',
                  'Meta: recibir revelación',
                  'Principios que cambian decisiones',
                  'Lápiz en mano, diario abierto',
                  'Activo — Dios te habla a través del texto',
                ],
              },
            },
            {
              type: 'leader_quote',
              quote: 'Bednar identificó tres métodos de estudio de las Escrituras. El primero: leer de principio a fin. El segundo: buscar temas o tópicos específicos. El tercero: estudiar por personaje. Cada método revela cosas que los otros no. La madurez escritural viene de usar los tres — no de dominar solo uno.',
              name: 'David A. Bednar',
              role: '"A Reservoir of Living Water", Devocional SAE en BYU, 4 de febrero de 2007 (trad.)',
            },
            {
              type: 'highlight_verse',
              text: 'Nunca se apartará de tu boca este libro de la ley, sino que de día y de noche meditarás en él, para que guardes y hagas conforme a todo lo que en él está escrito; porque entonces harás prosperar tu camino, y todo te saldrá bien.',
              reference: 'Josué 1:8',
            },
            {
              type: 'paragraph',
              text: 'Josué no recibe una promesa vaga de bendición. Recibe una promesa específica y condicional: medita en el libro de día y de noche, guarda lo que dice — y entonces prosperar y tener éxito seguirán. El estudio de las Escrituras no es solo una práctica espiritual. Es una estrategia para vivir bien. Las personas que conocen la Palabra de Dios toman mejores decisiones porque tienen acceso a sabiduría que supera la inteligencia humana.',
            },
            {
              type: 'key_points',
              title: 'Cinco hábitos del estudio profundo',
              points: [
                'Lápiz en mano — subrayar, marcar, escribir en márgenes; lo que no se marca se olvida',
                'Estudia con una pregunta — trae al texto una pregunta real de tu vida',
                'Diario de estudio — anota lo que el Espíritu te enseña; las revelaciones no escritas se pierden',
                'Pausa cuando sientas algo — la velocidad es enemiga del Espíritu en el estudio',
                'Busca aplicación inmediata — ¿qué de esto puedo hacer hoy?',
              ],
            },
          ],
        },
      ],
    },

    // ─── SECCIÓN IV ──────────────────────────────────────────────────────────
    {
      id: 's4',
      title: 'El Espíritu — el Verdadero Maestro',
      intro: {
        romanNumeral: 'IV',
        title: 'El Espíritu — el Verdadero Maestro',
        paragraphs: [
          'El mayor error en el estudio de las Escrituras es pensar que el objetivo es entender el texto. El objetivo es que el Espíritu Santo te enseñe a través del texto. Hay una diferencia enorme. Un exégeta puede conocer el griego y el hebreo y entender el contexto histórico perfectamente — y perderse completamente lo que Dios quiere que tú, en tu situación específica, escuches hoy.',
        ],
      },
      topics: [
        {
          id: 't4',
          title: 'Cómo el Espíritu Enseña mientras Estudias',
          blocks: [
            {
              type: 'highlight_verse',
              text: 'Mas el Consolador, el Espíritu Santo, a quien el Padre enviará en mi nombre, él os enseñará todas las cosas, y os recordará todo lo que yo os he dicho.',
              reference: 'Juan 14:26',
            },
            {
              type: 'paragraph',
              text: 'Cristo prometió que el Espíritu Santo "os enseñará todas las cosas." No algunas cosas. No las cosas que estás estudiando. Todas las cosas. Incluyendo las que necesitas para tomar esa decisión difícil que llevas semanas evitando. Incluyendo la perspectiva que te falta sobre esa relación complicada. El Espíritu no se limita al texto que estás leyendo — usa el texto como punto de partida para enseñarte exactamente lo que necesitas.',
            },
            {
              type: 'highlight_verse',
              text: 'Escudriñad las Escrituras; porque a vosotros os parece que en ellas tenéis la vida eterna; y ellas son las que dan testimonio de mí.',
              reference: 'Juan 5:39',
            },
            {
              type: 'doctrine_box',
              title: 'El patrón de Nefi: ponderar y el Espíritu lleva',
              body: '1 Nefi 11 es el caso de estudio perfecto. Nefi no recibió la gran visión de su padre en una sesión de estudio pasiva. El versículo 1 dice: "Me senté a ponderar en mi corazón las cosas que mi padre había hablado, y deseé en extremo ver, oír y conocer estas cosas." Tres elementos: sentarse, ponderar, y desear. El Espíritu respondió a esa disposición activa. La revelación no vino a la mente ocupada y distraída — vino a la mente quieta, enfocada, y anhelante.',
            },
            {
              type: 'deep_dive',
              badge: 'Profundizar',
              title: 'El depósito vivo: la metáfora de Bednar',
              paragraphs: [
                'En su devocional de 2007, Bednar usó la imagen de una torre de agua vs. un sistema de tuberías conectadas directamente a la fuente. La torre de agua almacena; las tuberías fluyen. El estudio de las Escrituras no es para llenar una torre de información religiosa. Es para mantenerte conectado, como tuberías, a la fuente viva de agua.',
                'El resultado de esta conexión es lo que Bednar llama un "depósito de agua viva" — un reservorio de testimonio, doctrina y principios que has construido con años de estudio. Cuando llegan las pruebas — y llegarán — ese depósito es lo que tiene agua cuando el mundo a tu alrededor se seca. Las personas sin ese depósito quedan sin recursos en los momentos de crisis espiritual.',
                'El depósito no se llena de una vez. Se llena gota a gota, estudio a estudio, día tras día. Es por eso que la constancia importa más que la intensidad. Leer diez minutos cada día por un año produce un depósito más profundo que leer cinco horas en un solo día una vez al mes.',
              ],
            },
            {
              type: 'leader_quote',
              quote: 'Si quieres hablar con Dios, ora. Si quieres que Dios te hable, lee las Escrituras. Esa es la fórmula. No hay sustituto. El Espíritu Santo obra a través de las palabras escritas para llevar revelación al corazón del lector — pero eso requiere que el lector esté ahí, lápiz en mano, con corazón dispuesto.',
              name: 'Howard W. Hunter',
              role: '"Reading the Scriptures", Ensign, noviembre 1979 (trad.)',
            },
          ],
        },
      ],
    },

    // ─── SECCIÓN V ───────────────────────────────────────────────────────────
    {
      id: 's5',
      title: 'El Hábito que Lo Cambia Todo',
      intro: {
        romanNumeral: 'V',
        title: 'El Hábito que Lo Cambia Todo',
        paragraphs: [
          'El estudio de las Escrituras no es un proyecto — es un estilo de vida. La diferencia entre los santos que tienen un testimonio profundo y robusto y los que tienen uno frágil y circunstancial casi siempre se puede trazar hasta aquí: los primeros han hecho del estudio diario un hábito irrompible. Los segundos lo hacen cuando tienen ganas o cuando hay crisis.',
        ],
      },
      topics: [
        {
          id: 't5',
          title: 'La Constancia Diaria — La Promesa del Depósito',
          blocks: [
            {
              type: 'highlight_verse',
              text: 'Todo aquel que me oye estas palabras y las pone en práctica, le compararé a un hombre prudente que edificó su casa sobre la roca. Descendió lluvia, vinieron ríos, soplaron vientos y azotaron aquella casa; y no cayó, porque estaba fundada sobre la roca.',
              reference: 'Mateo 7:24–25',
            },
            {
              type: 'paragraph',
              text: 'La roca de Mateo 7 no es la fe en abstracto. Es escuchar y hacer — palabras y acción. El estudio de las Escrituras es precisamente eso: escuchar la voz del Señor (leer) y poner en práctica lo que dice (aplicar). La casa construida sobre esa roca no colapsa cuando vienen las pruebas. No porque las pruebas sean menos reales, sino porque el fundamento es sólido.',
            },
            {
              type: 'timeline',
              items: [
                {
                  label: 'Día 1–30',
                  text: 'El hábito se forma: misma hora, mismo lugar, mismo compromiso',
                  ref: 'Josué 1:8',
                  color: 'blue',
                },
                {
                  label: 'Mes 1–3',
                  text: 'El Espíritu comienza a enseñar durante el estudio — momentos de claridad y revelación',
                  ref: 'DyC 8:2–3',
                  color: 'gold',
                },
                {
                  label: 'Mes 3–12',
                  text: 'El depósito crece — doctrina interiorizada, no solo conocida',
                  ref: 'Bednar, "Reservoir of Living Water"',
                  color: 'blue',
                },
                {
                  label: 'Años 1–5',
                  text: 'Las Escrituras se convierten en el lente a través del cual interpretas la vida',
                  ref: '2 Nefi 32:3',
                  color: 'gold',
                },
                {
                  label: 'Toda la vida',
                  text: 'El testimonio es robusto — fundado en años de escuchar la voz del Señor',
                  ref: 'Mateo 7:24–25',
                  color: 'gold',
                },
              ],
            },
            {
              type: 'leader_quote',
              quote: 'He aprendido que hay una diferencia entre estudiar el evangelio y vivir el evangelio. Pero también he aprendido que no se puede vivir profundamente el evangelio sin estudiarlo profundamente primero. Las personas que conozco con mayor paz, mayor capacidad de manejar la adversidad, y mayor amor genuino por los demás, sin excepción, son personas que estudian las Escrituras con regularidad y con el Espíritu.',
              name: 'Henry B. Eyring',
              role: '"A Discussion on Scripture Study", Ensign, julio 2005 (trad.)',
            },
            {
              type: 'key_points',
              title: 'Cómo construir el hábito diario',
              points: [
                'Misma hora todos los días — el cerebro aprende por repetición contextual',
                'Antes de ver el teléfono — lo primero del día determina el tono del día',
                'Aunque sean diez minutos — la constancia vence a la duración',
                'Comparte con alguien — enseñar lo que aprendiste fija el aprendizaje',
                'Estudio en familia — DyC 68:25 manda a los padres enseñar escrituras a sus hijos',
              ],
            },
            {
              type: 'reflection',
              prompt: '¿Cuándo fue la última vez que una escritura específica te dijo exactamente lo que necesitabas escuchar? ¿Qué diferencia hay entre cómo estudias las Escrituras ahora y cómo te gustaría estudiarlas? ¿Qué cambio concreto harás esta semana?',
            },
          ],
        },
      ],
    },
  ],
}
