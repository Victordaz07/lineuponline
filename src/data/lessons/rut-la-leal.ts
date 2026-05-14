import type { Lesson } from '@/types/doctrine'

export const rutLaLeal: Lesson = {
  id: 'rut-la-leal',
  moduleId: 'personajes-escrituras',
  submoduleGroup: 'rut',
  title: '"Donde tú vayas"',
  subtitle: 'La declaración de lealtad más hermosa de la Biblia',
  author: 'Fuentes: Rut 1:14-22; Mateo 1:5',
  description: 'Rut 1:16-17 es uno de los textos más citados de la Biblia entera. Pero suele leerse como poesía sin contexto. Este estudio examina lo que la declaración de Rut realmente costó, qué la distingue de la decisión igualmente válida de Orpá, qué significa la palabra hebrea hesed, y por qué Noemí llegó a Belén amargada mientras Rut llegó con los ojos abiertos.',
  level: 'BÁSICO',
  icon: '💛',
  duration: 30,
  order: 6111,
  status: 'PUBLISHED',
  studyBodyPlain: '',
  originalBodyPlain: '',
  previousLessonId: 'rut-la-moabita',
  nextLessonId: 'rut-en-los-campos',
  studySections: [
    {
      id: 's1',
      title: 'La escena del camino — el momento de la decisión',
      intro: {
        romanNumeral: 'I',
        title: 'La Encrucijada de las Tres Viudas',
        paragraphs: [
          'Rut 1:8-18 describe uno de los momentos más cargados de todo el Antiguo Testamento: tres mujeres en un camino de tierra, cada una frente a la elección más importante de su vida.',
        ],
      },
      topics: [
        {
          id: 't1-1',
          title: 'Noemí insiste: "Volved a vuestra madre"',
          blocks: [
            {
              type: 'highlight_verse',
              reference: 'Rut 1:8-9',
              text: 'Y Noemí dijo a sus dos nueras: Andad, volveos cada una a la casa de su madre; Jehová haga con vosotras misericordia, como la habéis hecho con los muertos y conmigo. Os conceda Jehová que halléis descanso, cada una en casa de su marido. Luego las besó, y ellas alzaron su voz y lloraron.',
            },
            {
              type: 'paragraph',
              text: 'Noemí les pide a sus nueras que regresen a "la casa de su madre" — una frase inusual, ya que lo normal sería "la casa de su padre." Esto puede indicar que los padres de Orpá y Rut ya habían muerto, y la figura familiar disponible era la madre. La bendición que Noemí les pronuncia es genuina: invoca el hesed del Señor sobre ellas, el mismo hesed que ellas han mostrado a los muertos y a Noemí.',
            },
            {
              type: 'paragraph',
              text: 'Lo que Noemí les ofrece al pedir que regresen es la única cosa que puede ofrecerles: la posibilidad de un nuevo matrimonio, de una nueva familia, de seguridad. Sabe que en Moab, como mujeres moabitas, tienen ese futuro. En Belén, con ella, no hay ningún futuro visible. Su generosidad al liberarlas es real — no es una prueba, no es retórica. Genuinamente quiere que se vayan.',
            },
          ],
        },
        {
          id: 't1-2',
          title: 'La decisión de Orpá — sabia, comprensible, correcta',
          blocks: [
            {
              type: 'highlight_verse',
              reference: 'Rut 1:14',
              text: 'Y alzaron otra vez su voz y lloraron; y Orpá besó a su suegra, mas Rut se quedó con ella.',
            },
            {
              type: 'paragraph',
              text: 'El texto es explícito: Orpá llora. No se va fríamente, no abandona a Noemí con indiferencia. La besa, llora, y se va. La tradición rabínica posterior trató duramente a Orpá — en algunos textos midrásicos se convierte en abuela de Goliat, el enemigo de David. Pero el texto bíblico mismo no la condena. Su decisión era la decisión razonable, esperada y humanamente sensata.',
            },
            {
              type: 'compare_grid',
              title: 'Orpá y Rut — dos decisiones, dos futuros',
              left: {
                label: 'Orpá',
                points: [
                  'Regresa a Moab — la elección racional',
                  'Busca nuevo marido en tierra conocida',
                  'Mantiene su identidad cultural y religiosa',
                  'El texto no la condena — llora al despedirse',
                  'Desaparece del relato bíblico',
                ],
              },
              right: {
                label: 'Rut',
                points: [
                  'Se queda con Noemí — la elección asombrosa',
                  'Renuncia a la posibilidad de nuevo matrimonio en Moab',
                  'Adopta una identidad cultural y religiosa nueva',
                  'El texto la convierte en la protagonista',
                  'Entra en la genealogía del Mesías',
                ],
              },
            },
            {
              type: 'paragraph',
              text: 'La comparación con Orpá no existe para degradar a Orpá. Existe para medir la magnitud de lo que Rut hizo. Cuando el texto dice que "Rut se quedó con ella," el verbo hebreo utilizado es el mismo de Génesis 2:24 — dabaq — que describe al hombre que "se unirá" a su mujer en el matrimonio. El apego de Rut a Noemí tiene la densidad del pacto nupcial.',
            },
          ],
        },
      ],
    },
    {
      id: 's2',
      title: 'Las palabras de Rut — el texto completo',
      intro: {
        romanNumeral: 'II',
        title: '"Donde tú fueres, iré yo"',
        paragraphs: [
          'Rut 1:16-17 es quizás el texto más citado de toda la Biblia sobre la fidelidad. Merece ser leído completo, sin saltar al versículo favorito.',
        ],
      },
      topics: [
        {
          id: 't2-1',
          title: 'La declaración completa',
          blocks: [
            {
              type: 'highlight_verse',
              reference: 'Rut 1:16-17',
              text: 'Respondió Rut: No me ruegues que te deje, y me aparte de ti; porque a dondequiera que tú fueres, iré yo, y dondequiera que vivieres, viviré. Tu pueblo será mi pueblo, y tu Dios mi Dios. Donde tú murieres, moriré yo, y allí seré sepultada; así me haga Jehová, y aun me añada, que sólo la muerte hará separación entre nosotras dos.',
            },
            {
              type: 'paragraph',
              text: 'El discurso de Rut tiene una estructura poética precisa: avanza en cinco movimientos que escalan en compromiso. (1) Ir contigo — presencia cotidiana. (2) Vivir donde vivas — permanencia, no solo acompañamiento temporal. (3) Tu pueblo será mi pueblo — abandono de identidad étnica. (4) Tu Dios será mi Dios — conversión religiosa. (5) Donde mueras, moriré — hasta el lugar de la sepultura. Cada línea es más radical que la anterior.',
            },
            {
              type: 'doctrine_box',
              title: 'El juramento por el nombre divino',
              body: 'El versículo 17 termina con una fórmula de juramento: "Así me haga el Señor, y aun me añada." Esta es la fórmula legal de juramento más solemne del Antiguo Testamento — la misma que Saúl, David y Jonatán usaron en situaciones de máximo compromiso. Rut no está pronunciando una declaración poética: está haciendo un juramento vinculante ante Dios. La ruptura de ese juramento requeriría la intervención punitiva divina. Rut pone en juego su bienestar bajo el nombre de Dios — el Dios de Israel, no el dios de Moab.',
            },
            {
              type: 'paragraph',
              text: '"Tu Dios será mi Dios." Esta línea transforma el discurso de una declaración de lealtad personal a una conversión religiosa. Rut está renunciando a Quemos, el dios nacional de Moab (Números 21:29; 1 Reyes 11:33), y adoptando al Señor, el Dios de Israel. No por coacción, no por estrategia — por elección libre ante una suegra que le está diciendo activamente que se vaya.',
            },
          ],
        },
        {
          id: 't2-2',
          title: 'Lo que la declaración realmente costó',
          blocks: [
            {
              type: 'paragraph',
              text: 'Es fácil leer Rut 1:16-17 como poesía hermosa sin calcular el precio real de cada palabra. "Tu pueblo será mi pueblo" significaba: dejar atrás a su familia biológica en Moab, su red social, su idioma materno, sus costumbres y las personas que la conocían. Llegar a Belén como la "moabita" — el apelativo que el texto repetirá en múltiples ocasiones — era llegar como extranjera en un mundo que tenía razones legales y culturales para excluirla.',
            },
            {
              type: 'steps',
              title: 'El costo concreto de la declaración de Rut',
              steps: [
                'Pérdida de la familia biológica — sin regreso posible si Noemí moría',
                'Pérdida de la posibilidad de nuevo matrimonio en Moab, con hombres de su propio pueblo',
                'Llegada a Belén como extranjera en situación de pobreza extrema',
                'Sujeción a las leyes israelitas, incluidas las que podían discriminarla como moabita',
                'Dependencia total de la bondad de desconocidos para sobrevivir',
                'Sin red de apoyo de ningún tipo — solo Noemí, anciana y amargada',
              ],
            },
            {
              type: 'leader_quote',
              quote: 'Rut dio todo lo que tenía sin garantía de recibir nada a cambio. Eso es la fe. No el salto al vacío dramático — el primer paso ordinario del camino que no tiene garantías visibles.',
              name: 'Chieko N. Okazaki',
              role: 'Primera Consejera, Sociedad de Socorro General (1990-1997)',
            },
          ],
        },
      ],
    },
    {
      id: 's3',
      title: 'El hesed — la palabra que lo explica todo',
      intro: {
        romanNumeral: 'III',
        title: 'La Palabra Hebrea Sin Traducción Perfecta',
        paragraphs: [
          'En Rut 1:8, Noemí bendice a sus nueras pidiendo que el Señor haga con ellas hesed — la misma palabra que el libro de Rut usa tres veces más para describir las acciones de Rut y de Boaz. Entender hesed es entender el libro entero.',
        ],
      },
      topics: [
        {
          id: 't3-1',
          title: '¿Qué es el hesed?',
          blocks: [
            {
              type: 'paragraph',
              text: 'El hebreo hesed (חֶסֶד) es uno de los términos teológicos más ricos del Antiguo Testamento y uno de los más difíciles de traducir. Las traducciones varían: "misericordia" (RVR 1960), "amor fiel" (NVI), "amor leal" (NBLH), "bondad" (algunas versiones inglesas: "lovingkindness", "steadfast love"). Ninguna lo captura por completo.',
            },
            {
              type: 'key_points',
              title: 'Los componentes del hesed',
              points: [
                'Lealtad de pacto — cumplir lo prometido aunque nadie te obligue',
                'Amor activo — no sentimiento, sino acción concreta',
                'Generosidad que va más allá de la obligación estricta',
                'Persistencia — el hesed no se rinde cuando la situación se complica',
                'Gratuidad — no depende de que el otro lo merezca',
              ],
            },
            {
              type: 'paragraph',
              text: 'En Rut 3:10, Boaz dirá de Rut: "Has hecho mayor tu postrer hesed que el primero." En Rut 2:20, Noemí reconocerá el hesed del Señor en la providencia de que Rut llegara al campo de Boaz. El libro de Rut es, en su conjunto, una demostración narrativa de lo que el hesed se ve en la vida real: no en declaraciones, sino en decisiones concretas bajo presión.',
            },
            {
              type: 'central_quote',
              text: 'El hesed de Rut no fue lo que sintió por Noemí — fue lo que hizo por Noemí cuando lo más fácil era irse.',
              attribution: 'Principio del estudio',
            },
          ],
        },
      ],
    },
    {
      id: 's4',
      title: 'Noemí — la amargura y la fe simultáneas',
      intro: {
        romanNumeral: 'IV',
        title: '"Llamadme Mara"',
        paragraphs: [
          'Noemí llega a Belén pidiendo que la llamen "Amarga." El libro de Rut no resuelve rápidamente su dolor. Lo sostiene, lo deja estar — y continúa la historia.',
        ],
      },
      topics: [
        {
          id: 't4-1',
          title: 'La teología del lamento',
          blocks: [
            {
              type: 'highlight_verse',
              reference: 'Rut 1:20-22',
              text: 'Y ella les respondía: No me llaméis Noemí, sino llamadme Mara; porque en grande amargura me ha puesto el Todopoderoso. Yo me fui llena, pero Jehová me ha vuelto con las manos vacías. ¿Por qué me llamaréis Noemí, ya que Jehová ha dado testimonio contra mí, y el Todopoderoso me ha afligido? Así volvió Noemí, y Rut la moabita su nuera con ella, la cual volvió de los campos de Moab. Y llegaron a Belén al comienzo de la siega de la cebada.',
            },
            {
              type: 'paragraph',
              text: 'Noemí habla de Dios con el nombre Shaddai — el Todopoderoso — no el nombre del pacto (Yahvé). Es el nombre que Job también utiliza en sus lamentos más intensos. La elección de nombre es teológicamente precisa: Noemí reconoce el poder de Dios pero no, en este momento, su amor. Siente el poder sin la bondad.',
            },
            {
              type: 'paragraph',
              text: 'Y sin embargo — ella está de regreso. Noemí no abandonó a su Dios: lo enfrenta. Volvió a Belén, no a Moab. En medio de su acusación a Dios de haberla afligido, sigue en el camino hacia la tierra del pacto, con su nuera moabita al lado. La fe de Noemí no es la fe de los himnos de alabanza en este momento — es la fe que sigue moviéndose mientras acusa.',
            },
            {
              type: 'dialogue',
              title: 'La llegada a Belén — lo que el texto no dice',
              lines: [
                { speaker: 'Mujeres de Belén', side: 'left', text: '¿No es esta Noemí? ¡Has vuelto!' },
                { speaker: 'Noemí', side: 'right', text: 'No me llaméis Noemí. Llamadme Mara — el Todopoderoso me ha llenado de amargura.' },
                { speaker: 'Mujeres de Belén', side: 'left', text: '¿Y quién es esta joven contigo?' },
                { speaker: 'Noemí', side: 'right', text: 'Es Rut la moabita, mi nuera. Vino conmigo desde los campos de Moab.' },
              ],
            },
            {
              type: 'reflection',
              prompt: 'Noemí acusa a Dios de haberla afligido y al mismo tiempo sigue caminando hacia la tierra del pacto. ¿Has experimentado la fe como movimiento en medio del enojo con Dios, en lugar de como paz o certeza? ¿Qué dice esta narrativa sobre lo que Dios acepta de nosotros?',
            },
          ],
        },
      ],
    },
    {
      id: 's5',
      title: 'La siega de cebada — la providencia escondida',
      intro: {
        romanNumeral: 'V',
        title: 'El Detalle que lo Cambia Todo',
        paragraphs: [
          'El capítulo 1 termina con un versículo que parece un simple detalle de calendario. No lo es.',
        ],
      },
      topics: [
        {
          id: 't5-1',
          title: '"Llegaron al comienzo de la siega de cebada"',
          blocks: [
            {
              type: 'paragraph',
              text: 'Rut 1:22 termina con esta nota: "llegaron a Belén al comienzo de la siega de la cebada." La siega de cebada en Judea comenzaba en Nisán (marzo-abril), antes de la siega del trigo. El tiempo es crucial porque era el momento del año en que la ley del rebusco era más efectiva — los pobres podían seguir a los segadores y recoger lo que quedaba. Sin esa ley, Rut y Noemí habrían llegado en el peor momento posible.',
            },
            {
              type: 'paragraph',
              text: 'El narrador no dice "fue una coincidencia afortunada." Tampoco dice "Dios las guió." Simplemente registra el hecho. Esta es la técnica narrativa del libro de Rut para la providencia: el texto no señala la intervención divina con fanfarria — la deja visible para el lector que está prestando atención. Dios obra en los detalles de calendario, en las rutas que se toman, en los campos que se encuentran. La providencia raramente anuncia su nombre.',
            },
            {
              type: 'note_prompts',
              prompts: [
                { id: 'p1', question: '¿Puedes recordar un momento en que, mirando atrás, reconociste la providencia en algo que en su momento pareció pura coincidencia de tiempo o lugar?' },
                { id: 'p2', question: '¿Qué aspecto de la declaración de Rut — "donde tú vayas, iré yo... tu Dios será mi Dios" — te parece más difícil de aplicar en tu propia vida y por qué?' },
                { id: 'p3', question: 'El hesed de Rut fue un acto, no una emoción. ¿Qué acto de hesed — amor leal que va más allá de la obligación — podrías hacer esta semana por alguien en tu vida?' },
              ],
            },
            {
              type: 'quiz',
              quizType: 'fill_blank',
              question: 'El verbo hebreo que describe el apego de Rut a Noemí (dabaq) es el mismo que aparece en Génesis 2:24 para describir al hombre que _______ a su mujer en el matrimonio.',
              answer: 'se unirá',
              explanation: 'El término dabaq en Génesis 2:24 describe la unión matrimonial ("el hombre dejará a su padre y a su madre, y se unirá a su mujer"). El mismo verbo en Rut 1:14 para Rut sugiere que su apego a Noemí tenía la densidad y el carácter de un vínculo de pacto.',
            },
          ],
        },
      ],
    },
  ],
}
