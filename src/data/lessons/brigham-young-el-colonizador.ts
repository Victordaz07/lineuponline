import type { Lesson } from '@/types/doctrine'

export const brighamYoungElColonizador: Lesson = {
  id: 'brigham-young-el-colonizador',
  moduleId: 'personajes-escrituras',
  submoduleGroup: 'brigham-young',
  title: 'El Colonizador',
  subtitle: '350 comunidades en el desierto',
  author: 'Fuentes: Historia de la Iglesia, Diario de Discursos, Registros territoriales de Utah, Historiadores Juanita Brooks y Richard Bushman',
  description:
    'En treinta años de presidencia, Brigham Young estableció más de 350 comunidades en Utah, Nevada, Idaho, Arizona, California y Wyoming. Fundó la Universidad de Utah, creó el sistema cooperativo ZCMI, construyó el Tabernáculo de Salt Lake, y puso la primera piedra del Templo de Salt Lake en 1853. Es también el presidente de la Iglesia cuyo legado incluye la Masacre de Mountain Meadows de 1857, la teoría Adán-Dios, y las declaraciones sobre la restricción de sacerdocio. Una visión honesta requiere examinar ambas dimensiones.',
  level: 'INTERMEDIO',
  icon: '🌵',
  duration: 35,
  order: 8413,
  status: 'PUBLISHED',
  studyBodyPlain: '',
  originalBodyPlain: '',
  previousLessonId: 'brigham-young-el-exodo',
  nextLessonId: 'brigham-young-y-la-restauracion',
  studySections: [
    {
      id: 's1',
      title: '350 comunidades en treinta años',
      intro: {
        romanNumeral: 'I',
        title: 'El Colonizador que No Descansó',
        paragraphs: [
          'La obra de colonización de Brigham Young no tiene paralelo en la historia americana del siglo XIX. Tomó un desierto y construyó una civilización.',
        ],
      },
      topics: [
        {
          id: 't1-1',
          title: 'La geografía del reino de Brigham',
          blocks: [
            {
              type: 'paragraph',
              text: 'Entre 1847 y 1877, Brigham Young supervisó el establecimiento de más de 350 colonias y comunidades en un territorio que se extendía desde el Territorio de Utah hacia Nevada, Idaho, Arizona, California y Wyoming. El método era siempre el mismo: convocar a un grupo de santos con habilidades complementarias (carpinteros, agricultores, herreros, maestros), enviarlos con instrucciones específicas al lugar elegido, y mantener contacto para asegurar el establecimiento exitoso.',
            },
            {
              type: 'key_points',
              title: 'Las instituciones que Brigham construyó',
              points: [
                'Universidad de Deseret (1850) — hoy Universidad de Utah',
                'ZCMI — Zion's Cooperative Mercantile Institution (1869) — primero gran almacén cooperativo de EEUU',
                'El Tabernáculo de Salt Lake (1867) — acústica famosa, sede de la Conferencia General',
                'Primera piedra del Templo de Salt Lake (1853) — completado en 1893, 16 años después de su muerte',
                'Sistema de irrigación que convirtió el desierto en tierra fértil',
                'Brigham Young University en Provo — nombre en su honor, establecida en 1875',
              ],
            },
            {
              type: 'leader_quote',
              quote: 'Si quieres saber qué quiere el Señor que hagas, encuentra qué necesita hacerse y hazlo. El Señor no va a venir a decirte que plantes maíz si ya sabes que el campo necesita maíz.',
              name: 'Brigham Young',
              role: 'Diario de Discursos, Vol. 11',
            },
            {
              type: 'paragraph',
              text: 'La fe práctica de Brigham Young transformó el desierto. El sistema de irrigación que desarrolló para el Valle del Gran Lago Salado se convirtió en modelo para la colonización del oeste americano. En 1847, la tierra donde hoy está Salt Lake City era un desierto árido. En 1877, cuando murió, era una ciudad de 20,000 habitantes con calles planificadas, templos en construcción, escuelas, y una economía cooperativa funcionando.',
            },
          ],
        },
      ],
    },
    {
      id: 's2',
      title: 'La Masacre de Mountain Meadows — septiembre 1857',
      intro: {
        romanNumeral: 'II',
        title: 'El 11 de Septiembre de 1857 — La Sombra del Legado',
        paragraphs: [
          'El 11 de septiembre de 1857, una caravana de emigrantes de Arkansas fue masacrada en el suroeste de Utah. Es la página más oscura del legado de Brigham Young.',
        ],
      },
      topics: [
        {
          id: 't2-1',
          title: 'Lo que ocurrió y lo que no se sabe con certeza',
          blocks: [
            {
              type: 'paragraph',
              text: 'La Masacre de Mountain Meadows ocurrió en un clima de extrema tensión: el ejército federal de Estados Unidos marchaba hacia Utah para suprimir lo que el gobierno federal llamaba una "rebelión mormona." En ese ambiente de miedo y paranoia, una caravana de emigrantes de Arkansas — la compañía Fancher, de aproximadamente 120 personas — cruzó Utah de camino a California. En Mountain Meadows, en el suroeste de Utah, fueron atacados, sitiados durante varios días, y finalmente masacrados. Solo sobrevivieron 17 niños pequeños.',
            },
            {
              type: 'deep_dive',
              title: 'La pregunta de la responsabilidad de Brigham Young',
              paragraphs: [
                'La pregunta central de la historiografía de Mountain Meadows es: ¿cuánto sabía Brigham Young y cuánto ordenó? La evidencia histórica disponible — estudiada durante décadas por historiadores mormones y no mormones — sugiere lo siguiente: John D. Lee, el líder principal de la masacre, fue finalmente ejecutado en 1877 por el crimen después de un juicio. Isaac Haight y William Dame, quienes dieron órdenes militantes locales, no fueron procesados de la misma manera.',
                'Brigham Young recibió un mensaje de Mountain Meadows pidiendo instrucciones antes de la masacre. Su respuesta — que llegó demasiado tarde para detener el evento — fue que se dejara pasar a los emigrantes. Esto sugiere que no ordenó la masacre. Sin embargo, el clima de fanatismo que permitió que sus líderes locales tomaran tal decisión fue cultivado en parte por su retórica sobre los enemigos de los santos.',
                'Los historiadores de la Iglesia, incluyendo Richard Turley y Terryl Givens, han concluido que Brigham Young probablemente no ordenó directamente la masacre pero que el ambiente que él en parte creó la hizo posible. La Iglesia publicó en 2007 un informe histórico completo que reconoce la masacre como un crimen cometido por líderes locales de la Iglesia sin autorización de Brigham Young.',
              ],
            },
            {
              type: 'paragraph',
              text: 'John D. Lee fue excomulgado en 1870 y finalmente ejecutado por fusilamiento en el mismo lugar de la masacre en 1877. En 1961, fue rehabilitado póstumamente por la Iglesia — una decisión que generó controversia. Para las familias de los 120 muertos en Mountain Meadows, ninguna rehabilitación institucional borra el crimen. Para los historiadores de la Iglesia, la masacre es parte del legado complicado de un período de extrema tensión entre los santos y el gobierno federal.',
            },
          ],
        },
      ],
    },
    {
      id: 's3',
      title: 'Doctrinas problemáticas — Adán-Dios y el sacerdocio',
      intro: {
        romanNumeral: 'III',
        title: 'Las Enseñanzas que la Iglesia Posterior Ha Rechazado',
        paragraphs: [
          'Brigham Young enseñó doctrinas que la Iglesia moderna no considera reveladas. La honestidad histórica requiere examinarlas.',
        ],
      },
      topics: [
        {
          id: 't3-1',
          title: 'La teoría Adán-Dios y sus consecuencias',
          blocks: [
            {
              type: 'paragraph',
              text: 'En 1852, Brigham Young enseñó en la Conferencia General una doctrina que posteriormente se conoció como la teoría "Adán-Dios": que Adán era el mismo ser que Dios el Padre, que había venido a esta tierra para ser el padre biológico de Jesucristo, y que era el objeto primario de culto. Esta doctrina fue enseñada durante el período de Brigham con cierta regularidad, aunque nunca fue adoptada formalmente en los estándares doctrinales de la Iglesia.',
            },
            {
              type: 'paragraph',
              text: 'El presidente Spencer W. Kimball declaró en 1976 que la doctrina Adán-Dios es falsa y contraria a la revelación. La Iglesia actualmente enseña que Adán y Dios el Padre son seres distintos, como lo enseñó claramente Joseph Smith. El caso ilustra algo importante sobre la naturaleza de la enseñanza profética: que un profeta sea llamado de Dios no significa que todo lo que enseña sea revelado o correcto.',
            },
            {
              type: 'doctrine_box',
              title: 'La restricción del sacerdocio — la enseñanza más duradera y dolorosa',
              body: 'Brigham Young fue el presidente que formalizó la restricción que prohibió a los hombres de ascendencia negra africana recibir el sacerdocio o las ordenanzas del templo. Esta restricción existió hasta 1978, cuando el presidente Spencer W. Kimball recibió la revelación que la terminó (Declaración Oficial 2). Las declaraciones de Brigham Young sobre la raza son, según los estándares modernos tanto de la sociedad como de la Iglesia, profundamente erróneas. La Introducción al Gospel Topics Essay de la Iglesia sobre el sacerdocio y la raza afirma que estas enseñanzas no eran reveladas sino reflejos de los prejuicios de la época. Esto es historialmente honesto y teológicamente necesario.',
            },
            {
              type: 'paragraph',
              text: 'La disposición a examinar honestamente estas partes del legado de Brigham Young no disminuye su grandeza como colonizador y organizador — sino que proporciona una visión más completa y más humana de quien fue. Un profeta que nunca se equivoca no necesita fe para seguirlo. Un profeta que fue grandioso y que también se equivocó de maneras significativas requiere un tipo diferente y más maduro de discipulado.',
            },
          ],
        },
      ],
    },
    {
      id: 's4',
      title: 'El balance del legado',
      intro: {
        romanNumeral: 'IV',
        title: 'Grandeza y Complejidad — El Legado Completo',
        paragraphs: [
          'Ninguna figura importante de la historia de la Iglesia requiere más madurez para evaluar que Brigham Young. Su legado es genuinamente mixto — y eso lo hace más, no menos, instructivo.',
        ],
      },
      topics: [
        {
          id: 't4-1',
          title: 'Una evaluación honesta',
          blocks: [
            {
              type: 'compare_grid',
              title: 'El legado de Brigham Young — lo que construyó y lo que dejó sin resolver',
              left: {
                label: 'Los logros extraordinarios',
                points: [
                  'Más de 350 comunidades establecidas en 30 años',
                  'Éxodo de 70,000 santos organizado con precisión logística',
                  'Instituciones educativas, económicas y culturales fundadas',
                  'El programa del templo llevado a continuidad práctica',
                  'La Iglesia preservada durante la crisis post-martirio',
                ],
              },
              right: {
                label: 'Los errores y sus consecuencias',
                points: [
                  'Mountain Meadows — 120 muertos, responsabilidad parcial',
                  'Teoría Adán-Dios — rechazada como falsa por presidentes posteriores',
                  'Restricción del sacerdocio formalizada con base en prejuicio racial',
                  'Retórica de "sangre expiadora" en el período de reforma de 1856',
                  'Gobierno teocrático que confundía autoridad civil y eclesiástica',
                ],
              },
            },
            {
              type: 'paragraph',
              text: 'La Iglesia moderna ha elegido un camino de honestidad histórica sobre Brigham Young que no era común en generaciones anteriores. Los Gospel Topics Essays publicados por la Iglesia reconocen los problemas de la restricción del sacerdocio y la conexión con Mountain Meadows de manera que hubieran sido impensables hace cincuenta años. Esto es progreso — no traición al pasado sino honestidad con él.',
            },
            {
              type: 'central_quote',
              text: 'No tengo temor de que la verdad perjudique la causa del hombre justo. Si la causa de la verdad no puede soportar el examen, déjala caer. Pero si puede soportarlo, que brille.',
              attribution: 'Brigham Young, Diario de Discursos, Vol. 14',
            },
            {
              type: 'reflection',
              prompt: '¿Cómo sostienes en la mente simultáneamente el genio organizacional de Brigham Young y los errores graves de su legado? ¿Qué significa para ti que la Iglesia que él construyó fue suficientemente resiliente para sobrevivir y corregir algunas de sus equivocaciones? ¿Qué te enseña sobre la naturaleza de la Iglesia como institución humana y divina a la vez?',
            },
          ],
        },
      ],
    },
    {
      id: 's5',
      title: 'La fe práctica de un constructor',
      intro: {
        romanNumeral: 'V',
        title: '"Este Es el Trabajo de Dios — Así que Vamos a Trabajar"',
        paragraphs: [
          'A pesar de sus errores, Brigham Young tenía una teología de la acción que es genuinamente inspiradora y que el mundo moderno necesita.',
        ],
      },
      topics: [
        {
          id: 't5-1',
          title: 'La teología de la acción',
          blocks: [
            {
              type: 'paragraph',
              text: 'La filosofía de Brigham Young era profundamente opuesta al pietismo pasivo: no era "espera a que Dios actúe" sino "actúa tú y Dios completará." Esto se expresó en sus instrucciones de colonización (planten antes de que llegue el siguiente grupo), en su liderazgo del éxodo (el primer grupo parte aunque todos los demás no estén listos), y en su visión del templo (la primera piedra se pone aunque la construcción tome décadas).',
            },
            {
              type: 'steps',
              title: 'Los principios de liderazgo que Brigham demostró',
              steps: [
                'Organizarse primero — decidir después: estructura antes de acción masiva',
                'Delegar con confianza — no controlar todo personalmente',
                'Plantar hoy aunque no veas la cosecha — visión de largo plazo',
                'Reconocer los errores públicamente — la humildad como herramienta de liderazgo',
                'Construir instituciones que sobrevivan al constructor',
              ],
            },
            {
              type: 'note_prompts',
              prompts: [
                { id: 'p1', question: '¿Qué parte del legado de Brigham Young te resulta más inspiradora y por qué?' },
                { id: 'p2', question: '¿Cómo procesas honestamente las partes problemáticas de su legado sin perder lo que fue genuinamente grande?' },
                { id: 'p3', question: '¿Qué "desierto" estás siendo llamado a transformar con la misma energía práctica que Brigham aplicó al Valle del Gran Lago Salado?' },
              ],
            },
          ],
        },
      ],
    },
  ],
}
