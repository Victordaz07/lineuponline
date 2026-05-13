import type { Lesson } from '@/types/doctrine'

export const elSacerdocio: Lesson = {
  id: 'sacerdocio-autoridad-poder',
  moduleId: 'doctrina-avanzada-carne',
  title: 'El Sacerdocio — Autoridad y Poder',
  subtitle: 'Las dos mitades que la mayoría confunde',
  author: 'Fuentes principales: DyC 121, Russell M. Nelson (2018), Alma 13',
  description:
    'El sacerdocio restaurado tiene dos mitades: la autoridad (la llave de actuar en el nombre de Dios) y el poder (la capacidad de hacer que esa autoridad funcione). Millones tienen la primera pero pocos desarrollan la segunda. Esta lección estudia la diferencia y por qué importa eternamente.',
  level: 'AVANZADO',
  icon: '🔑',
  duration: 70,
  order: 1,
  status: 'PUBLISHED',
  studyBodyPlain: '',
  originalBodyPlain: '',
  previousLessonId: null,
  nextLessonId: 'preexistencia',
  studySections: [
    {
      id: 's1',
      title: 'Autoridad vs. Poder — La Distinción Crucial',
      intro: {
        romanNumeral: 'I',
        title: 'Autoridad vs. Poder — La Distinción Crucial',
        paragraphs: [
          'En abril de 2016, el presidente Russell M. Nelson hizo una distinción que reorganizó la manera en que la Iglesia entera pensaba sobre el sacerdocio. La autoridad del sacerdocio, dijo, es el permiso de actuar en el nombre de Dios. El poder del sacerdocio es la capacidad real de que esa acción produzca efectos espirituales. Estas dos cosas no son lo mismo.',
        ],
      },
      topics: [
        {
          id: 't1',
          title: 'La Diferencia que Cambia Todo',
          blocks: [
            {
              type: 'leader_quote',
              quote: 'Existe una diferencia importante entre la autoridad del sacerdocio y el poder del sacerdocio. La autoridad del sacerdocio se recibe mediante la ordenación. El poder del sacerdocio se obtiene mediante la rectitud personal y la fidelidad a los convenios. Un hombre puede ser ordenado al sacerdocio y tener la autoridad — pero si no vive de manera fiel, su poder en el sacerdocio puede ser muy limitado.',
              name: 'Russell M. Nelson',
              role: '"The Price of Priesthood Power", Conferencia General, abril 2016 (trad.)',
            },
            {
              type: 'compare_grid',
              left: {
                title: 'Autoridad del Sacerdocio',
                items: [
                  'Se recibe mediante ordenación por imposición de manos',
                  'Condición: ser digno en el momento de la ordenación',
                  'Puede tenerse sin usarse efectivamente',
                  'Se confiere en un momento específico',
                  'Se puede tener y desperdiciar',
                ],
              },
              right: {
                title: 'Poder del Sacerdocio',
                items: [
                  'Se desarrolla a través de la vida recta y los convenios',
                  'Requiere fidelidad continua — no solo en la ordenación',
                  'Es lo que hace que las ordenanzas tengan efecto real',
                  'Crece con la fe, la obediencia y la comunión con el Espíritu',
                  'Se puede desarrollar ilimitadamente',
                ],
              },
            },
            {
              type: 'highlight_verse',
              text: 'Ningún poder ni influencia puede ni debe mantenerse por virtud del sacerdocio, sino solo mediante la persuasión, la paciencia, la mansedumbre y la docilidad, el amor sincero, la bondad y el puro conocimiento, que en gran manera ensanchará tu influencia sin coerción alguna.',
              reference: 'Doctrina y Convenios 121:41–42',
            },
            {
              type: 'paragraph',
              text: 'DyC 121 no está describiendo simplemente buenas maneras de liderazgo. Está describiendo la única forma en que el poder del sacerdocio puede fluir: a través del carácter, no de la posición. Un hombre que intenta usar la autoridad del sacerdocio a través del dominio o la coacción — "en el momento que lo intenta, he aquí, su sacerdocio le abandona" (v.37). La autoridad sin el carácter pierde el poder.',
              blockId: 'sa-s1-p-0',
            },
            {
              type: 'media_slot',
              kind: 'image',
              src: undefined,
              caption: 'La restauración del sacerdocio — Juan el Bautista confiere el Sacerdocio Aarónico a José Smith y Oliver Cowdery en mayo de 1829.',
              contextCard: { year: 'Mayo 1829', place: 'Río Susquehanna', label: 'Restauración del Sacerdocio' },
            },
          ],
        },
      ],
    },
    {
      id: 's2',
      title: 'Los Dos Sacerdocios',
      intro: {
        romanNumeral: 'II',
        title: 'Los Dos Sacerdocios',
        paragraphs: [
          'La Iglesia restaurada opera con dos sacerdocios: el Aarónico y el de Melquisedec. No son simplemente dos niveles de una organización religiosa. Son dos tipos fundamentalmente diferentes de autoridad, con propósitos distintos, cada uno esencial para la operación completa del evangelio.',
        ],
      },
      topics: [
        {
          id: 't2',
          title: 'El Sacerdocio Aarónico y el de Melquisedec',
          blocks: [
            {
              type: 'highlight_verse',
              text: 'El segundo sacerdocio se llama el Sacerdocio Aarónico, porque fue conferido a Aarón y a su simiente en todo su linaje. Este sacerdocio comprende las llaves del ministerio de ángeles, y el evangelio preparatorio, que es el evangelio del arrepentimiento y del bautismo, y la remisión de pecados.',
              reference: 'Doctrina y Convenios 107:13–14, 20',
            },
            {
              type: 'paragraph',
              text: 'El Sacerdocio Aarónico no es inferior — es preparatorio. Sus ordenanzas (bautismo, la Santa Cena) son las puertas de entrada al evangelio. Su "llave del ministerio de los ángeles" es única: los que lo poseen tienen el derecho de ser ministrados por ángeles cuando sea necesario para su labor. Juan el Bautista, que lo restauró, era el mayor entre los nacidos de mujer en su dispensación.',
              blockId: 'sa-s2-p-0',
            },
            {
              type: 'highlight_verse',
              text: 'El Mayor de todos, es la llave de los misterios del reino, así como también la plenitud del conocimiento de Dios. Por lo tanto, en las ordenanzas del mismo sacerdocio, se manifiesta el poder de la piedad para los hombres, tanto en esta vida como en la venidera.',
              reference: 'Doctrina y Convenios 84:19–20',
            },
            {
              type: 'doctrine_box',
              title: '¿Qué hace al Sacerdocio de Melquisedec "el mayor"?',
              body: 'DyC 84:19 dice que en las ordenanzas de este sacerdocio "se manifiesta el poder de la divinidad." Las ordenanzas del templo — el endowment, el sellamiento — solo son posibles a través del Sacerdocio de Melquisedec. El objetivo final de estas ordenanzas es lo que la escritura llama "la plenitud del conocimiento de Dios" — no información sobre Dios, sino conocimiento en el sentido bíblico: relación íntima, coexistencia, divinidad.',
            },
            {
              type: 'highlight_verse',
              text: 'Ningún hombre recibe las ordenanzas más altas y más santas del sacerdocio sin hacer convenios que le atan a Dios para la eternidad. Y ninguna bendición del sacerdocio puede ser recibida sino sobre la base de la obediencia a las leyes y ordenanzas del evangelio.',
              reference: 'Doctrina y Convenios 84:33–34',
            },
            {
              type: 'highlight_verse',
              text: 'Ahora el sumo sacerdocio de esta santa orden fue establecido, y fue llamado, preparado y ordenado desde antes de la fundación del mundo, según la presciencia de Dios, a causa de su fe y obras excesivamente buenas.',
              reference: 'Alma 13:3',
            },
            {
              type: 'deep_dive',
              badge: 'Alma 13',
              title: 'El sacerdocio fue establecido antes del mundo — la perspectiva de Alma',
              paragraphs: [
                'Alma 13 ofrece una perspectiva única sobre el sacerdocio: fue establecido antes de la fundación del mundo, y los sumos sacerdotes fueron llamados "de acuerdo con la presciencia de Dios, a causa de su fe y obras excesivamente buenas" en la premortalidad.',
                'Esto conecta directamente con la doctrina de la preexistencia: la preparación premortal de algunos para el sacerdocio en la mortalidad. No es que el sacerdocio sea exclusivo por capricho — es que Dios ve el corazón de cada espíritu y llama a quienes han demostrado fidelidad.',
                'Alma 13:6-7 agrega que estos sumos sacerdotes fueron llamados con "un llamamiento santo" para que "el pueblo pudiera saber de qué manera depositar su fe en el Hijo de Dios para la remisión de sus pecados." El propósito final del sacerdocio no es el poder institucional sino apuntar a Cristo.',
              ],
            },
          ],
        },
      ],
    },
    {
      id: 's3',
      title: 'Las Llaves del Sacerdocio',
      intro: {
        romanNumeral: 'III',
        title: 'Las Llaves del Sacerdocio',
        paragraphs: [
          'Hay una tercera dimensión del sacerdocio que pocas personas entienden bien: las llaves. Un hombre puede tener autoridad del sacerdocio sin tener las llaves para usarla en ciertas funciones. Las llaves son el derecho de presidir y dirigir el uso del sacerdocio.',
        ],
      },
      topics: [
        {
          id: 't3',
          title: 'Autoridad, Poder y Llaves — Los Tres Elementos',
          blocks: [
            {
              type: 'doctrine_box',
              title: 'Autoridad, poder y llaves — los tres elementos',
              body: 'Autoridad: el permiso de actuar en el nombre de Dios. Poder: la capacidad espiritual de que la acción produzca efectos reales. Llaves: el derecho de presidir y dirigir cómo y cuándo se usa la autoridad dentro de un área o función específica. Un diácono tiene autoridad de sacerdocio pero no las llaves del obispado. Un obispo tiene las llaves de su barrio pero no las del sistema completo. Solo el Presidente de la Iglesia tiene todas las llaves del sacerdocio activas sobre toda la tierra.',
            },
            {
              type: 'timeline',
              items: [
                {
                  label: 'Mayo 1829',
                  text: 'Juan el Bautista restaura las llaves del Sacerdocio Aarónico a José Smith y Oliver Cowdery.',
                  ref: 'DyC 13',
                  color: 'gold',
                },
                {
                  label: 'Junio 1829',
                  text: 'Pedro, Santiago y Juan restauran las llaves del Sacerdocio de Melquisedec.',
                  ref: 'DyC 27:12',
                  color: 'blue',
                },
                {
                  label: 'Abril 1836',
                  text: 'Moisés, Elías y Elías restauran en el Templo de Kirtland las llaves de reunión de Israel, del evangelio de Abraham, y de sellamientos del templo.',
                  ref: 'DyC 110:11-16',
                  color: 'gold',
                },
                {
                  label: 'Hoy',
                  text: 'El Presidente de la Iglesia tiene todas las llaves activas. Los Doce Apóstoles tienen todas las llaves pero solo las ejercen cuando el Presidente muere.',
                  ref: 'DyC 107:23-24',
                  color: 'blue',
                },
              ],
            },
            {
              type: 'highlight_verse',
              text: 'Por tanto, las llaves del reino de Dios son confiadas al hombre en la tierra, y de allí los elementos y el cuerpo del Señor, aun la Iglesia y reino, es la llave mediante la cual el evangelio puede ser sellado en el corazón del hombre sin final.',
              reference: 'Doctrina y Convenios 65:2',
            },
            {
              type: 'leader_quote',
              quote: 'El sacerdocio de Melquisedec no fue dado primariamente para administrar la iglesia — fue dado para exaltar a los hombres. Es el mecanismo por el cual los hombres mortales pueden llegar a ser como el Padre. Cada ordenanza del templo es un paso en ese camino.',
              name: 'Bruce R. McConkie',
              role: '"The Mortal Messiah", vol. 1 (trad.)',
            },
          ],
        },
      ],
    },
    {
      id: 's4',
      title: 'El Sacerdocio y las Mujeres',
      intro: {
        romanNumeral: 'IV',
        title: 'El Sacerdocio y las Mujeres',
        paragraphs: [
          'Una pregunta que muchas personas hacen honestamente: ¿por qué las mujeres no son ordenadas al sacerdocio? La respuesta requiere entender que el acceso al poder del sacerdocio y la ordenación al sacerdocio no son la misma cosa.',
        ],
      },
      topics: [
        {
          id: 't4',
          title: 'Acceso al Poder, No Solo a la Ordenación',
          blocks: [
            {
              type: 'leader_quote',
              quote: 'Las mujeres de la Iglesia también tienen acceso al poder del sacerdocio. Cuando una madre pone sus manos sobre la cabeza de un hijo enfermo para bendecirlo, está invocando el poder del sacerdocio. Cuando una hermana da servicio guiada por el Espíritu Santo, está operando bajo ese poder. Las mujeres no son ordenadas al sacerdocio — pero tienen completo acceso a sus bendiciones y a su poder.',
              name: 'Russell M. Nelson',
              role: '"Spiritual Treasures", Conferencia General, octubre 2019 (trad.)',
            },
            {
              type: 'doctrine_box',
              title: 'Tres verdades sobre las mujeres y el sacerdocio',
              body: '(1) Las mujeres reciben todas las ordenanzas del templo — el endowment y el sellamiento — que son las ordenanzas más altas del sacerdocio. (2) Las mujeres líderes (presidencias de organizaciones auxiliares, misiones) ejercen autoridad con el respaldo del sacerdocio. (3) El poder del sacerdocio fluye a través de la unidad del matrimonio eterno — el hombre y la mujer juntos, sellados en el templo, tienen acceso a ese poder de maneras que ninguno de los dos tiene individualmente.',
            },
            {
              type: 'paragraph',
              text: 'El presidente Dallin H. Oaks ha enseñado que la pregunta no es "¿tienen las mujeres acceso al sacerdocio?" — claramente sí, a través de las ordenanzas del templo y del poder que fluye de ellas. La pregunta más precisa es "¿son ordenadas al sacerdocio?" — y la respuesta es que Dios no ha revelado por qué el sacerdocio se ordena a los hombres. La Iglesia enseña fidelidad a lo revelado y confianza en que el Señor tiene razones que no siempre explica.',
              blockId: 'sa-s4-p-0',
            },
            {
              type: 'key_points',
              title: 'Lo que las mujeres sí reciben a través del sacerdocio',
              points: [
                'El endowment del templo — la dotación completa de instrucción espiritual y convenios',
                'El sellamiento eterno — la ordenanza más alta del sacerdocio para el matrimonio eterno',
                'Bendiciones del sacerdocio — cualquier miembro puede recibir bendiciones del sacerdocio',
                'El don del Espíritu Santo — conferido por la autoridad del sacerdocio, disponible para todos',
                'La presidencia de organizaciones — con autoridad respaldada por las llaves del sacerdocio',
              ],
            },
          ],
        },
      ],
    },
    {
      id: 's5',
      title: 'Cómo Crecer en Poder del Sacerdocio',
      intro: {
        romanNumeral: 'V',
        title: 'Cómo Crecer en Poder del Sacerdocio',
        paragraphs: [
          'La pregunta más práctica sobre el sacerdocio no es "¿qué es?" sino "¿cómo se desarrolla su poder en mi vida?" El presidente Nelson fue específico: hay prácticas que aumentan el poder del sacerdocio.',
        ],
      },
      topics: [
        {
          id: 't5',
          title: 'El Precio del Poder del Sacerdocio',
          blocks: [
            {
              type: 'highlight_verse',
              text: 'Porque quien es fiel a la obtención de estos dos sacerdocios de que he hablado, y al amplificar sus llamados, está santificado por el Espíritu para la renovación de su cuerpo. Se convierte en el hijo de Moisés y de Aarón, y de la simiente de Abrahán, y de la Iglesia y reino y el elegido de Dios.',
              reference: 'Doctrina y Convenios 84:33–34',
            },
            {
              type: 'steps',
              title: 'Prácticas que desarrollan el poder del sacerdocio — según el presidente Nelson',
              steps: [
                'ESTUDIO DIARIO DE LAS ESCRITURAS — No como deber sino como comunión: buscando en el texto lo que el Espíritu quiere enseñar, no solo completando páginas.',
                'ORACIÓN PERSONAL PROFUNDA — No recitaciones sino conversaciones genuinas. El presidente Nelson dijo que muchas de las revelaciones más importantes de su ministerio llegaron durante el tiempo de oración personal.',
                'AYUNO CON PROPÓSITO — Ayunar con una pregunta, una bendición específica, una persona en mente. El ayuno vago produce poco; el ayuno con intención abre el cielo.',
                'ASISTENCIA AL TEMPLO CON REGULARIDAD — Cada visita al templo renueva los convenios y trae el Espíritu Santo con mayor poder. No como obligación sino como fuente de poder.',
                'DIGNIDAD CONTINUA EN LOS CONVENIOS — La dignidad no es perfección; es orientación del corazón. Un hombre que arrepentido y en convenio activo puede ejercer un poder que ninguna ordenación sola produce.',
              ],
            },
            {
              type: 'central_quote',
              text: 'El precio del poder del sacerdocio es alto. Se paga en obediencia, en rectitud, y en estudio diligente. Pero su fruto es la capacidad de mover el cielo en nombre de quienes amas.',
              attribution: 'Russell M. Nelson · "The Price of Priesthood Power" · Conferencia General, abril 2016 (paráfrasis)',
            },
          ],
        },
      ],
    },
    {
      id: 's6',
      title: 'Reflexión y Verificación',
      intro: {
        romanNumeral: 'VI',
        title: 'Reflexión y Verificación',
        paragraphs: [
          'La doctrina del sacerdocio no es solo información — es una invitación a crecer. Estas preguntas y quizzes están diseñados para consolidar lo aprendido y aplicarlo.',
        ],
      },
      topics: [
        {
          id: 't6',
          title: 'Aplicación Personal',
          blocks: [
            {
              type: 'reflection',
              prompt: '¿Cómo cambia tu relación con tu obispo, tu presidente de estaca, y el Presidente de la Iglesia cuando entiendes el principio de las llaves? ¿De qué manera práctica puedes desarrollar más poder en el sacerdocio (o alinearte con su poder) en tu vida diaria?',
            },
            {
              type: 'quiz',
              id: 'q-1', question: { kind: 'fill_blank',
                prompt: 'Según el presidente Nelson, la autoridad del sacerdocio se recibe mediante la ___, pero el poder del sacerdocio se obtiene mediante la rectitud personal.',
                options: ['fe', 'ordenación', 'oración', 'confirmación'],
                correctIndex: 1,
                explanation: 'Nelson enseñó en 2016: "La autoridad del sacerdocio se recibe mediante la ordenación. El poder del sacerdocio se obtiene mediante la rectitud personal y la fidelidad a los convenios." Son dos cosas distintas.',
              },
            },
            {
              type: 'quiz',
              id: 'q-2', question: {
                kind: 'fill_blank',
                prompt: 'DyC 84:19-20 enseña que en las ordenanzas del Sacerdocio de Melquisedec "se manifiesta el poder de ___."',
                options: ['la autoridad', 'la divinidad', 'la Iglesia', 'los convenios'],
                correctIndex: 1,
                explanation: 'DyC 84:19-20 dice que en las ordenanzas del Sacerdocio de Melquisedec "se manifiesta el poder de la divinidad." Este sacerdocio no solo administra — es el vehículo para que los hombres mortales lleguen a ser como Dios.',
              },
            },
            {
              type: 'quiz',
              id: 'q-3', question: {
                kind: 'fill_blank',
                prompt: 'Según Alma 13:3, el sumo sacerdocio fue establecido ___, antes de la fundación del mundo.',
                options: [
                  'por voto popular',
                  'según la presciencia de Dios a causa de la fe y obras de los llamados',
                  'por orden de nacimiento',
                  'de manera aleatoria',
                ],
                correctIndex: 1,
                explanation: 'Alma 13:3 enseña que los sumos sacerdotes fueron llamados "de acuerdo con la presciencia de Dios, a causa de su fe y obras excesivamente buenas" en la premortalidad — conectando el sacerdocio con la preparación premortal.',
              },
            },
          ],
        },
      ],
    },
  ],
}
