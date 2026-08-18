import type { Lesson } from '@/types/doctrine'

export const elMinisterioEnElHogar: Lesson = {
  id: 'ministerio-en-el-hogar',
  moduleId: 'vida-familiar-personal',
  title: 'El Ministerio en el Hogar',
  subtitle: 'Cómo enseñar el evangelio en casa con sencillez y Espíritu',
  author: 'Fuentes principales: DyC 68, Deuteronomio 6, 2 Nefi 25 y 33, Come Follow Me 2019',
  description:
    'El hogar no es el lugar donde los miembros esperan entre sesiones de Iglesia — es el centro del aprendizaje del evangelio. DyC 68 manda a los padres enseñar. Deuteronomio 6 muestra cómo. El Espíritu es el maestro real. Y la sencillez — no la complejidad — es la clave.',
  level: 'BÁSICO',
  icon: '❤️',
  duration: 60,
  order: 4,
  status: 'PUBLISHED',
  studyBodyPlain: '',
  originalBodyPlain: '',
  previousLessonId: 'estudio-escrituras',
  nextLessonId: null,
  studySections: [
    {
      id: 's1',
      title: 'El Hogar como Centro — No la Iglesia',
      intro: {
        romanNumeral: 'I',
        title: 'El Hogar como Centro — No la Iglesia',
        paragraphs: [
          'Por generaciones, los miembros trataron el domingo como el principal momento del aprendizaje del evangelio — el hogar era donde descansaban entre semana. En 2018, el presidente Nelson invirtió esa estructura: el hogar es el centro del aprendizaje del evangelio. La Iglesia es el soporte. El cambio no fue administrativo — fue revelado.',
        ],
      },
      topics: [
        {
          id: 't1',
          title: 'El Mandato Divino de Enseñar en Casa',
          blocks: [
            {
              type: 'highlight_verse',
              text: 'Y de nuevo digo a vosotros que se os manda criar a vuestros hijos en luz y verdad. [...] Y también enseñad a vuestros hijos a orar, y a andar rectamente ante el Señor.',
              reference: 'Doctrina y Convenios 68:25, 28',
            },
            {
              type: 'paragraph',
              text: 'DyC 68 no es una sugerencia. Es un mandato. "Se os manda" — el mismo lenguaje que el Señor usa para los mandamientos más serios. Los padres son la primera línea de enseñanza del evangelio, no el maestro de la clase de la Escuela Dominical ni el instructor de la clase de los jóvenes. El hogar es primero. La Iglesia refuerza lo que el hogar establece.',
            },
            {
              type: 'highlight_verse',
              text: 'Y estas palabras que yo te mando hoy, estarán sobre tu corazón; y las repetirás a tus hijos, y hablarás de ellas estando en tu casa, y andando por el camino, y al acostarte, y cuando te levantes.',
              reference: 'Deuteronomio 6:6–7',
            },
            {
              type: 'doctrine_box',
              title: '¿Qué significa "centrado en el hogar, apoyado por la Iglesia"?',
              body: 'El presidente Nelson anunció en 2018 una nueva estructura: dos horas de bloque dominical + un currículo (Come Follow Me) diseñado para estudiarse en el hogar durante la semana. El mensaje implícito es poderoso: la Iglesia puede reforzar lo que el hogar enseña, pero no puede reemplazarlo. Un hijo que solo aprende el evangelio en los 2 horas del domingo recibirá 2 horas de evangelio por semana. Un hijo que lo aprende en el hogar tiene la posibilidad de vivir rodeado de él todos los días.',
            },
            {
              type: 'leader_quote',
              quote: 'Queremos que el hogar sea el centro del aprendizaje del evangelio. La Iglesia y sus programas están diseñados para apoyar el hogar, no para reemplazarlo. El poder espiritual que necesitamos en esta época de la historia del mundo no puede obtenerse solo en dos horas el domingo — debe fluir de corazones que se nutren diariamente de la palabra de Dios en el contexto del hogar.',
              name: 'Russell M. Nelson',
              role: '"Becoming Exemplary Latter-day Saints", Conferencia General, octubre 2018 (trad.)',
            },

            {
              type: 'media_slot',
              kind: 'image',
              src: '/assets/modules/vida-familiar-personal/lessons/ministerio-en-el-hogar/01-hogar-centro-del-aprendizaje.webp',
              alt: 'Padres e hijos estudian las Escrituras en la mesa del hogar con una capilla al fondo.',
              caption: 'El aprendizaje del evangelio encuentra su centro en el hogar y el apoyo en la Iglesia.',
            },
          ],
        },
      ],
    },
    {
      id: 's2',
      title: 'La Sencillez como Virtud',
      intro: {
        romanNumeral: 'II',
        title: 'La Sencillez como Virtud',
        paragraphs: [
          'El obstáculo más común para enseñar el evangelio en el hogar no es la falta de tiempo — es la convicción de que para enseñar bien se necesita saber mucho. Esa convicción es falsa. Cristo enseñó con parábolas sobre semillas y ovejas. Nefi usó las experiencias de su familia. La sencillez no es pobreza de contenido — es claridad al servicio de la verdad.',
        ],
      },
      topics: [
        {
          id: 't2',
          title: 'Hablar de Cristo — El Modelo de Nefi',
          blocks: [
            {
              type: 'highlight_verse',
              text: 'Y hablamos de Cristo, nos regocijamos en Cristo, predicamos de Cristo, profetizamos de Cristo, y escribimos según nuestras profecías, a fin de que nuestros hijos sepan a qué fuente pueden acudir para obtener la remisión de sus pecados.',
              reference: '2 Nefi 25:26',
            },
            {
              type: 'paragraph',
              text: 'Nefi describe la enseñanza del evangelio en el hogar en cuatro verbos: hablar, regocijarse, predicar, profetizar. Cuatro verbos que pueden ocurrir en la cena, en el camino al colegio, en una conversación antes de dormir. No requieren una pizarra, ni una guía de estudio, ni preparación de una hora. Requieren que Cristo sea el tema central de la conversación ordinaria de la familia.',
            },
            {
              type: 'compare_grid',
              left: {
                title: 'Enseñanza complicada',
                items: [
                  'Necesito preparar una lección formal',
                  'Los niños deben estar sentados y atentos',
                  'Sigo un currículo punto por punto',
                  'Si no salió "bien", fue un fracaso',
                  'El padre o la madre es el experto',
                ],
              },
              right: {
                title: 'Enseñanza sencilla',
                items: [
                  'Una escritura, una pregunta, una historia personal',
                  'La conversación ocurre mientras se vive',
                  'El Espíritu guía hacia lo que la familia necesita',
                  'Cualquier momento de conexión espiritual cuenta',
                  'Todos enseñan y todos aprenden — incluidos los padres',
                ],
              },
            },
            {
              type: 'key_points',
              title: 'Cinco formas de hablar de Cristo en lo cotidiano',
              points: [
                'La cena: "¿Qué hicieron hoy que creen que le agradó al Señor?"',
                'El viaje en coche: escuchar un himno y preguntar qué les dice',
                'La crisis familiar: conectar lo que está pasando con una escritura o principio del evangelio',
                'El éxito: atribuir los dones y logros a Dios — sin fingir, genuinamente',
                'La oración en familia: orar específico, no genérico — eso enseña que Dios conoce los detalles',
              ],
            },
            {
              type: 'leader_quote',
              quote: 'No necesitáis ser un experto en teología para enseñar el evangelio a vuestros hijos. Necesitáis ser honestos sobre lo que creéis y por qué lo creéis. Un padre que comparte sus dudas con fe, su testimonio imperfecto con sinceridad, y su amor a Cristo con genuinidad, enseña más que cien lecciones formales perfectamente preparadas.',
              name: 'Jeffrey R. Holland',
              role: '"A Prayer for the Children", Conferencia General, abril 2003 (trad.)',
            },

            {
              type: 'media_slot',
              kind: 'image',
              src: '/assets/modules/vida-familiar-personal/lessons/ministerio-en-el-hogar/02-hablar-de-cristo-cotidiano.webp',
              alt: 'Una madre conversa con su hija mientras ambas preparan pan en la cocina.',
              caption: 'Hablar de Cristo puede integrarse con naturalidad en los momentos más sencillos del día.',
            },
          ],
        },
      ],
    },
    {
      id: 's3',
      title: 'El Espíritu — El Maestro Real',
      intro: {
        romanNumeral: 'III',
        title: 'El Espíritu — El Maestro Real',
        paragraphs: [
          'La diferencia entre información religiosa y conversión real no es la calidad del maestro humano — es la presencia del Espíritu Santo. DyC 42:14 lo establece con claridad absoluta: si no hay Espíritu, no hay verdadera enseñanza. Esto se aplica al aula, al púlpito, y a la mesa de la cocina.',
        ],
      },
      topics: [
        {
          id: 't3',
          title: 'Cómo el Espíritu Enseña en el Hogar',
          blocks: [
            {
              type: 'highlight_verse',
              text: 'Y el Espíritu se os dará mediante la oración de la fe; y si no recibís el Espíritu, no enseñaréis.',
              reference: 'Doctrina y Convenios 42:14',
            },
            {
              type: 'highlight_verse',
              text: 'Y yo, Nefi, no pude escribir todas las cosas que enseñé entre mi pueblo; ni soy poderoso en la escritura como en el hablar; porque cuando un hombre habla por el poder del Espíritu Santo, el poder del Espíritu Santo lleva las palabras de Cristo al corazón de los hijos de los hombres.',
              reference: '2 Nefi 33:1',
            },
            {
              type: 'paragraph',
              text: 'Nefi distingue entre hablar y escribir, entre transmitir información y llegar al corazón. El Espíritu es quien transporta las palabras hasta el corazón del oyente. El padre o la madre más elocuente del mundo no puede producir ese efecto por sí solo. Pero un padre imperfecto, que ora con sinceridad antes de hablar con sus hijos, tiene acceso al poder que puede llevar la verdad directamente al corazón de ese hijo.',
            },
            {
              type: 'deep_dive',
              badge: 'Profundizar',
              title: 'Los momentos espontáneos vs. la lección formal',
              paragraphs: [
                'Investigaciones en educación familiar religiosa consistentemente muestran que los hijos recuerdan más los momentos espontáneos de enseñanza espiritual que las lecciones formales planificadas. La noche de hogar importa — pero el momento en que tu padre se detuvo a un lado del camino y te explicó cómo el Señor lo había ayudado en un momento de crisis importa más.',
                'El Espíritu Santo es más libre para operar en esos momentos porque no hay agenda, no hay prisa por terminar la "lección," y la vulnerabilidad del maestro es real. Cuando un padre comparte su testimonio en un momento inesperado — en el hospital esperando noticias, en el funeral de un abuelo, en una conversación tardía sobre dudas — el Espíritu puede usar esa apertura de maneras que un domingo formal raramente permite.',
                'La implicación práctica: no esperes al lunes de noche de hogar para enseñar lo que el Señor te está mostrando hoy. El momento espontáneo, cuando el Espíritu lo impulsa, es generalmente el momento de mayor impacto.',
              ],
            },
            {
              type: 'key_points',
              title: 'Tres pasos para invitar el Espíritu al hogar antes de enseñar',
              points: [
                'Oración personal del maestro — antes de la noche de hogar, antes de la conversación difícil, pedir al Señor qué necesita esta persona específica hoy',
                'Vivir lo que enseñas — el Espíritu no puede confirmar lo que tu propio ejemplo contradice',
                'Silencio + escucha — dejar espacio para que el Espíritu hable, no llenar cada momento con palabras',
              ],
            },

            {
              type: 'media_slot',
              kind: 'image',
              src: '/assets/modules/vida-familiar-personal/lessons/ministerio-en-el-hogar/03-momento-espontaneo.webp',
              alt: 'Un padre se arrodilla para escuchar y consolar a su hija en un pasillo del hogar.',
              caption: 'Los momentos espontáneos abren espacio para que el Espíritu enseñe con ternura.',
            },
          ],
        },
      ],
    },
    {
      id: 's4',
      title: 'La Noche de Hogar y Come Follow Me',
      intro: {
        romanNumeral: 'IV',
        title: 'La Noche de Hogar y Come Follow Me',
        paragraphs: [
          'La Iglesia ha dado a las familias herramientas concretas para estructurar la enseñanza en el hogar. La Noche de Hogar lleva más de un siglo de existencia. Come Follow Me lleva desde 2019. Ninguna de las dos funciona si se trata como una obligación de reporte — ambas funcionan cuando se viven como lo que son: instrumentos de revelación familiar.',
        ],
      },
      topics: [
        {
          id: 't4',
          title: 'Las Herramientas que la Iglesia Ha Dado',
          blocks: [
            {
              type: 'paragraph',
              text: 'La Noche de Hogar fue instituida formalmente en 1915 por el presidente Joseph F. Smith, reenfatizada por David O. McKay en 1965, y renovada en el nuevo currículo de Come Follow Me en 2019. La promesa ha sido consistente a través de presidentes: las familias que guardan la noche de hogar serán bendecidas con unidad, protección del adversario, y crecimiento espiritual. No es una actividad opcional — es una ordenanza informal del hogar.',
            },
            {
              type: 'highlight_verse',
              text: 'Y además os ordeno que os enseñéis unos a otros el evangelio de Dios, con todo su poder, con toda la inteligencia del cielo que poseáis.',
              reference: 'Doctrina y Convenios 88:77',
            },
            {
              type: 'key_points',
              title: 'Cómo hacer que la noche de hogar realmente funcione',
              points: [
                'Misma hora, misma noche — la consistencia vale más que la perfección de la lección',
                'Breve cuando los niños son pequeños — 15 minutos de atención es suficiente; no tortures a los de 4 años',
                'Deja que los hijos enseñen — un niño que prepara una lección aprende el doble que uno que la escucha',
                'Incluir testimonio personal — qué aprendiste esta semana, qué viste que te recuerda a Dios',
                'Cerrar con actividad familiar — la conexión emocional ancla el aprendizaje espiritual',
              ],
            },
            {
              type: 'doctrine_box',
              title: 'Come Follow Me — El currículo del hogar',
              body: 'El currículo Come Follow Me (2019) fue diseñado específicamente para ser estudiado en el hogar, no solo en el aula. La guía del maestro de la Escuela Dominical es un suplemento al estudio que la familia ya hizo durante la semana. La secuencia es: leer las escrituras en el hogar → reflexionar → discutir en familia → el domingo refuerza lo que el hogar ya sembró. Cuando la secuencia se invierte — se espera al domingo para que la Iglesia enseñe — la promesa del currículo no puede cumplirse.',
            },
            {
              type: 'leader_quote',
              quote: 'El mayor trabajo que harás jamás se hará dentro de las paredes de tu propio hogar. El mundo quiere que creas que el trabajo importante sucede afuera — en la oficina, en la capilla, en el servicio público. El Señor dice que el trabajo más eterno y transformador ocurre en la cena familiar, en las oraciones de la mañana, en las conversaciones al acostar a los hijos.',
              name: 'Harold B. Lee',
              role: 'Charla en Conferencia General, 1973 (trad.)',
            },

            {
              type: 'media_slot',
              kind: 'image',
              src: '/assets/modules/vida-familiar-personal/lessons/ministerio-en-el-hogar/04-noche-de-hogar-sencilla.webp',
              alt: 'Una familia participa relajada en una actividad de noche de hogar alrededor de la mesa.',
              caption: 'La noche de hogar edifica cuando es sencilla, constante y adecuada a la familia real.',
            },
          ],
        },
      ],
    },
    {
      id: 's5',
      title: 'El Ministerio en los Momentos Ordinarios',
      intro: {
        romanNumeral: 'V',
        title: 'El Ministerio en los Momentos Ordinarios',
        paragraphs: [
          'Deuteronomio 6:7 no dice "enseña a tus hijos el evangelio el lunes en la noche." Dice: "cuando estés en tu casa, y cuando andes por el camino, y al acostarte, y cuando te levantes." El evangelio en el hogar no es un programa — es una presencia constante en todos los momentos del día.',
        ],
      },
      topics: [
        {
          id: 't5',
          title: 'Cuando te Sientes, Cuando Camines, Cuando te Acuestes',
          blocks: [
            {
              type: 'highlight_verse',
              text: 'Y las repetirás a tus hijos, y hablarás de ellas estando en tu casa, y andando por el camino, y al acostarte, y cuando te levantes. Y las atarás como una señal en tu mano, y estarán como frontales entre tus ojos.',
              reference: 'Deuteronomio 6:7–8',
            },
            {
              type: 'paragraph',
              text: 'Moisés describe una forma de vida en la que la verdad de Dios no está compartimentada en una sesión semanal — está integrada en todos los momentos del día. No requiere una pizarra. Requiere padres que hablan de Dios con naturalidad, que conectan los eventos del día con principios del evangelio, que oran de manera específica y visible para que sus hijos vean cómo funciona la relación con el Padre.',
            },
            {
              type: 'timeline',
              items: [
                {
                  label: 'La mañana',
                  text: 'Oración familiar y un versículo breve — establecer el tono espiritual antes de que el mundo entre',
                  ref: 'Deut 6:7',
                  color: 'gold',
                },
                {
                  label: 'El camino',
                  text: 'El viaje al colegio, al trabajo — un himno, una conversación sobre gratitud, qué desafíos enfrentarán hoy',
                  ref: '2 Nefi 25:26',
                  color: 'blue',
                },
                {
                  label: 'La mesa',
                  text: 'La cena familiar: bendición específica, "¿dónde viste la mano de Dios hoy?", enseñanza espontánea',
                  ref: 'DyC 88:77',
                  color: 'gold',
                },
                {
                  label: 'La crisis',
                  text: 'El momento difícil — convertirlo en oportunidad de mostrar cómo el evangelio responde a la vida real',
                  ref: 'Josué 1:8',
                  color: 'blue',
                },
                {
                  label: 'La noche',
                  text: 'Oración personal con los hijos — la oración íntima antes de dormir que forma testimonios en silencio',
                  ref: 'Deut 6:7',
                  color: 'gold',
                },
              ],
            },
            {
              type: 'leader_quote',
              quote: 'Los hijos no necesitan padres perfectos — necesitan padres presentes. No padres que sepan todas las respuestas — padres que busquen las respuestas con ellos. No padres que finjan no tener dudas — padres que modelen cómo se vive con fe en medio de la incertidumbre. Eso es ministerio en el hogar.',
              name: 'Henry B. Eyring',
              role: '"The Family", Conferencia General, octubre 1998 (trad.)',
            },
            {
              type: 'reflection',
              prompt: '¿En qué momento del día tiene tu familia mayor apertura espiritual — la mañana, la cena, la noche? ¿Estás usando ese momento? ¿Qué conversación sobre el evangelio has estado postergando con alguno de tus hijos o con tu cónyuge? ¿Qué pasaría si la tuvieras esta semana, simple, sin agenda, solo presente?',
            },

            {
              type: 'media_slot',
              kind: 'image',
              src: '/assets/modules/vida-familiar-personal/lessons/ministerio-en-el-hogar/05-ensenar-en-el-camino.webp',
              alt: 'Un padre conversa con sus hijos mientras caminan juntos hacia el atardecer.',
              caption: 'El ministerio familiar ocurre al caminar, conversar y compartir la vida cotidiana.',
            },
          ],
        },
      ],
    },
  ],
}
