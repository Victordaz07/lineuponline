import type { Lesson } from '@/types/doctrine'

export const elMinisterioEnElHogar: Lesson = {
  id: 'ministerio-en-el-hogar',
  moduleId: 'vida-familiar-personal',
  title: 'El Ministerio en el Hogar',
  subtitle: 'Cuidar como Cristo cuidó',
  author: 'Fuentes principales: Russell M. Nelson (2018), Lucas 15, Moroni 6',
  description:
    'El ministerio no es una asignación — es una forma de ser. Cómo el Señor cuida a las personas una por una, y cómo nosotros podemos hacer lo mismo por quienes el Señor ha puesto en nuestra vida.',
  level: 'BÁSICO',
  icon: '❤️',
  duration: 50,
  order: 4,
  status: 'PUBLISHED',
  studyBodyPlain: '',
  originalBodyPlain: '',
  previousLessonId: 'estudio-escrituras',
  nextLessonId: null,
  studySections: [
    // ─── SECCIÓN I ───────────────────────────────────────────────────────────
    {
      id: 's1',
      title: 'Qué Cambió y Por Qué',
      intro: {
        romanNumeral: 'I',
        title: 'Qué Cambió y Por Qué',
        paragraphs: [
          'En abril de 2018, el presidente Russell M. Nelson anunció el fin de la "enseñanza en el hogar" y su reemplazo por algo diferente: el ministerio. Fue un cambio de nombre — pero sobre todo fue un cambio de corazón. El mensaje era claro: el Señor quiere que nos cuidemos los unos a los otros como Él cuida, no como empleados que cumplen una cuota mensual.',
        ],
      },
      topics: [
        {
          id: 't1',
          title: 'De la Enseñanza en el Hogar al Ministerio',
          blocks: [
            {
              type: 'compare_grid',
              left: {
                title: 'Enseñanza en el hogar (antes)',
                items: [
                  'Visita mensual con un mensaje asignado',
                  'Meta: porcentaje de visitas completadas',
                  'Mensaje estándar para todas las familias',
                  'Reporte mensual numérico',
                  'Enfoque: cumplir la asignación',
                ],
              },
              right: {
                title: 'Ministerio (ahora)',
                items: [
                  'Cuidado genuino, personalizado, sin horario fijo',
                  'Meta: que nadie se sienta solo o abandonado',
                  'Atención a las necesidades reales del individuo',
                  'Reporte cualitativo: ¿cómo están realmente?',
                  'Enfoque: amar como Cristo ama',
                ],
              },
            },
            {
              type: 'leader_quote',
              quote: 'El ministerio es la antigua forma de cuidar que siempre ha sido la esencia del evangelio. No se trata de visitas ni de estadísticas. Se trata de amar a las personas — su progreso espiritual, sus necesidades temporales, su bienestar. Ministrar es seguir el patrón perfecto de Jesucristo.',
              name: 'Russell M. Nelson',
              role: '"Ministering with the Power and Authority of God", Conferencia General, abril 2018 (trad.)',
            },
            {
              type: 'paragraph',
              text: 'El cambio no fue arbitrario. Respondía a un problema real que el Señor veía: personas que recibían visitas mensuales con un mensaje enlatado, pero cuyas verdaderas necesidades — espirituales, emocionales, prácticas — nunca eran tocadas. El ministerio dice: conócelos de verdad. Sé su amigo de verdad. Cuídalos de la manera que los cuida el Señor.',
            },
            {
              type: 'highlight_verse',
              text: 'Y se tenía cuidado de ellos conforme a sus necesidades y sus deseos, según lo que era justo.',
              reference: 'Alma 1:27',
            },
          ],
        },
      ],
    },

    // ─── SECCIÓN II ──────────────────────────────────────────────────────────
    {
      id: 's2',
      title: 'El Modelo de Cristo',
      intro: {
        romanNumeral: 'II',
        title: 'El Modelo de Cristo',
        paragraphs: [
          'Si quieres entender el ministerio, no mires el manual de Menfis. Mira a Cristo. Toda su vida fue un ejemplo de cómo tratar a las personas: una por una, donde estaban, con lo que necesitaban. Nunca procesó a la gente en masa. Nunca dio un mensaje genérico. Siempre supo exactamente qué necesitaba la persona frente a él.',
        ],
      },
      topics: [
        {
          id: 't2',
          title: 'La Oveja Perdida — El Principio de la Una',
          blocks: [
            {
              type: 'highlight_verse',
              text: '¿Qué hombre de vosotros, teniendo cien ovejas, si pierde una de ellas, no deja las noventa y nueve en el desierto, y va tras la que se perdió, hasta encontrarla? Y cuando la encuentra, la pone sobre sus hombros gozoso; y al llegar a casa, reúne a sus amigos y vecinos, diciéndoles: Alegraos conmigo, porque he encontrado mi oveja que se había perdido.',
              reference: 'Lucas 15:4–6',
            },
            {
              type: 'paragraph',
              text: 'La parábola no dice que el pastor envía a alguien a buscar la oveja. Va él mismo. No dice que la oveja recibe un mensaje mensual pregrabado. La pone sobre sus hombros — contacto personal, esfuerzo real. No dice que cuando la encuentra reporta el número de ovejas recuperadas. Se regocija. El ministerio efectivo opera en exactamente esa misma frecuencia: personal, presente, y lleno de genuina alegría cuando hay progreso.',
            },
            {
              type: 'doctrine_box',
              title: 'Los tres en Lucas 15 — el mismo principio',
              body: 'Lucas 15 tiene tres parábolas seguidas: la oveja perdida, la moneda perdida, y el hijo pródigo. Las tres tienen el mismo patrón: algo valioso se pierde → alguien lo busca activamente → cuando se encuentra hay alegría que se comparte. Cristo no contó estas parábolas para hablar de objetos perdidos. Las contó porque los fariseos se quejaban de que Él pasaba tiempo con pecadores. Su respuesta: así es exactamente como funciona el amor del Padre. Eso es el ministerio.',
            },
            {
              type: 'highlight_verse',
              text: 'Porque el Hijo del Hombre vino a buscar y a salvar lo que se había perdido.',
              reference: 'Lucas 19:10',
            },
            {
              type: 'leader_quote',
              quote: 'La misión del Salvador fue ministrar a las personas — no solo a las multitudes, sino a los individuos. Zacheo. La mujer del pozo. El ciego Bartimeo. María Magdalena. Ninguna de estas personas fue un caso estadístico para Cristo. Cada una fue vista, conocida, y amada específicamente. Eso es lo que se nos pide cuando ministramos.',
              name: 'Jeffrey R. Holland',
              role: '"Ministerio", Conferencia General, abril 2018 (trad.)',
            },
          ],
        },
        {
          id: 't3',
          title: 'La Iglesia Primitiva como Modelo Vivo',
          blocks: [
            {
              type: 'highlight_verse',
              text: 'Y los que habían recibido el bautismo eran visitados y nutridos por la buena palabra de Dios, a fin de mantenerlos en el buen camino, a fin de guardarlos en la fe en lo que habían recibido, a fin de que no hubiera iniquidad entre ellos; y así se cuidaba de ellos.',
              reference: 'Moroni 6:4',
            },
            {
              type: 'paragraph',
              text: 'Moroni describe la iglesia del Libro de Mormón como una comunidad donde todos eran "visitados y nutridos." Las dos palabras son importantes: visitar implica presencia física; nutrir implica alimentación espiritual real. No bastaba con aparecer. Era necesario realmente alimentar. El ministerio moderno recoge ese mismo mandato: presencia + nutrición real.',
            },
            {
              type: 'highlight_verse',
              text: 'Sobrellevad los unos las cargas de los otros, y cumplid así la ley de Cristo.',
              reference: 'Gálatas 6:2',
            },
          ],
        },
      ],
    },

    // ─── SECCIÓN III ─────────────────────────────────────────────────────────
    {
      id: 's3',
      title: 'Cómo Ministrar de Verdad',
      intro: {
        romanNumeral: 'III',
        title: 'Cómo Ministrar de Verdad',
        paragraphs: [
          'El ministerio efectivo no es complicado — pero requiere intencionalidad. Requiere que rompas el piloto automático y realmente pienses en la persona que se te ha confiado. ¿Qué la preocupa? ¿Qué le da gozo? ¿Cuándo fue la última vez que alguien la escuchó de verdad?',
        ],
      },
      topics: [
        {
          id: 't4',
          title: 'Del Deber al Amor — El Cambio Interno',
          blocks: [
            {
              type: 'paragraph',
              text: 'La diferencia entre el ministerio que transforma y el que es solo una obligación cumplida está completamente en el interior del ministro. Cuando visitas porque te sientes culpable de no haberlo hecho, la persona lo siente. Cuando visitas porque genuinamente te importa, eso también se siente. El Espíritu no acompaña al deber — acompaña al amor.',
            },
            {
              type: 'key_points',
              title: 'Cinco prácticas del ministerio efectivo',
              points: [
                'Conoce a la persona — sus intereses, preocupaciones, familia, trabajo; no puedes cuidar a alguien que no conoces',
                'Sintoniza el Espíritu antes de ir — pide saber qué necesitan esa día, no qué planeabas decirles',
                'Escucha más de lo que hablas — las personas no necesitan un discurso; necesitan ser escuchadas',
                'Actúa sobre lo que sientes — si sientes que debes llamar o ir, hazlo; el Espíritu no repite siempre',
                'Hazlo en momentos inesperados — el ministerio más poderoso llega cuando nadie lo está esperando',
              ],
            },
            {
              type: 'deep_dive',
              badge: 'Profundizar',
              title: 'El ministerio en los momentos de crisis',
              paragraphs: [
                'El ministerio más importante casi nunca ocurre en la visita mensual planificada. Ocurre cuando alguien llama a las 11 de la noche porque su matrimonio se está derrumbando. Cuando alguien pierde su trabajo y no sabe cómo decírselo a su cónyuge. Cuando un hijo se va de la Iglesia y los padres no saben a quién acudir.',
                'Estar disponible en esos momentos requiere haber construido una relación de confianza antes de que llegue la crisis. Si la única interacción que has tenido con alguien es la visita mensual con el mensaje del Ensign, no te llamarán cuando las cosas se pongan difíciles. Llaman a las personas que conocen, que los escuchan, que les importan.',
                'Elder Jeffrey R. Holland enseñó que el Señor necesita personas que estén disponibles para ser usadas como instrumentos en Sus manos en el momento exacto en que alguien más necesita ayuda. Eso requiere estar cerca, estar conectado, y estar sintonizado. El ministerio es el mecanismo que hace eso posible dentro de la estructura de la Iglesia.',
              ],
            },
            {
              type: 'leader_quote',
              quote: 'El ministerio genuino significa que amamos a las personas suficientemente como para interesarnos en su vida entera: sus alegrías y sus cargas, su salud espiritual y sus necesidades temporales, su fe y sus dudas. No somos auditores. Somos compañeros en el camino.',
              name: 'Russell M. Nelson',
              role: '"Ministering", Ensign, mayo 2018 (trad.)',
            },
          ],
        },
      ],
    },

    // ─── SECCIÓN IV ──────────────────────────────────────────────────────────
    {
      id: 's4',
      title: 'El Ministerio en la Familia',
      intro: {
        romanNumeral: 'IV',
        title: 'El Ministerio en la Familia',
        paragraphs: [
          'El ministerio no empieza en las personas que tienes asignadas en la Iglesia. Empieza en tu propia familia. El cónyuge, los hijos, los padres que envejecen — estas son las primeras personas que el Señor te ha encomendado. Antes de preguntar cómo ministrar a los de afuera, pregunta: ¿cómo estoy ministrando a los de adentro?',
        ],
      },
      topics: [
        {
          id: 't5',
          title: 'El Hogar como la Primera Congregación',
          blocks: [
            {
              type: 'highlight_verse',
              text: 'Y vosotros, maridos, igualmente, vivid con ellas sabiamente, dando honor a la mujer como a vaso más frágil, y como a coherederas de la gracia de la vida, para que vuestras oraciones no tengan estorbo.',
              reference: '1 Pedro 3:7',
            },
            {
              type: 'paragraph',
              text: 'Pedro conecta directamente el trato al cónyuge con la efectividad de la oración. Un hombre que no ministra bien a su esposa tiene sus oraciones estorbadas. La Proclamación sobre la Familia habla de los esposos que presiden "en amor y justicia" — eso es ministerio. Las madres que nutren a sus hijos — eso es ministerio. Los hijos que honran a sus padres envejeciendo — eso es ministerio.',
            },
            {
              type: 'doctrine_box',
              title: 'La noche de hogar como ministerio familiar',
              body: 'La noche de hogar fue revelada en 1915, reenfatizada en 1965 y 2003, y prometida por el Señor: "Si los padres de este pueblo hacen esto en el espíritu de amor... los hijos se verán bendecidos." No es solo una actividad familiar. Es el mecanismo semanal de ministerio interno: el padre y la madre ministrando a sus hijos con enseñanza del evangelio, atención personal, y tiempo protegido de las distracciones del mundo.',
            },
            {
              type: 'leader_quote',
              quote: 'El hogar es la unidad de ministerio más importante en la Iglesia. Antes de preocuparte por las familias que tienes asignadas en el ministerio, pregúntate: ¿estoy ministrando a mi propia familia como el Señor lo haría? ¿Saben mis hijos que me importan más que cualquier otra asignación de la Iglesia?',
              name: 'Henry B. Eyring',
              role: '"The Family", Conferencia General, octubre 1998 (trad.)',
            },
          ],
        },
      ],
    },

    // ─── SECCIÓN V ───────────────────────────────────────────────────────────
    {
      id: 's5',
      title: 'El Ministerio como Estilo de Vida',
      intro: {
        romanNumeral: 'V',
        title: 'El Ministerio como Estilo de Vida',
        paragraphs: [
          'El ministerio más poderoso no tiene horario, no tiene formulario, y no termina con un reporte al obispado. Ocurre en los intersticios de la vida ordinaria: en el estacionamiento de la capilla, en una llamada a mitad de semana, en una nota manuscrita, en una comida que alguien lleva sin que se la pidieran. Es la forma en que el amor de Cristo se filtra a través de personas ordinarias.',
        ],
      },
      topics: [
        {
          id: 't6',
          title: 'El Ministerio Invisible — La Forma más Poderosa',
          blocks: [
            {
              type: 'highlight_verse',
              text: 'Y el Rey les responderá y dirá: De cierto os digo que en cuanto lo hicisteis a uno de estos mis hermanos más pequeños, a mí lo hicisteis.',
              reference: 'Mateo 25:40',
            },
            {
              type: 'paragraph',
              text: 'Los de la derecha en Mateo 25 no sabían que estaban ministrando al Señor. Preguntaron sorprendidos: "¿Cuándo te vimos hambriento y te alimentamos?" No lo hicieron para ser vistos ni reportados. Lo hicieron porque amaban. El ministerio invisible — el que nadie cuenta, nadie aplaude, nadie registra — es exactamente el que el Señor valora más.',
            },
            {
              type: 'timeline',
              items: [
                {
                  label: 'Conocer',
                  text: 'Conocer genuinamente a la persona: su historia, sus cargas, lo que la hace reír',
                  ref: 'Lucas 15:4',
                  color: 'gold',
                },
                {
                  label: 'Sintonizar',
                  text: 'Pedir al Espíritu guía sobre qué necesitan — no solo asumir',
                  ref: 'Moroni 6:4',
                  color: 'blue',
                },
                {
                  label: 'Actuar',
                  text: 'Hacer lo que el Espíritu indica — llamar, visitar, ayudar — cuando lo indica',
                  ref: 'Gálatas 6:2',
                  color: 'gold',
                },
                {
                  label: 'Estar presente',
                  text: 'En los momentos difíciles: hospital, funeral, desempleo, crisis de fe',
                  ref: 'Mateo 25:36',
                  color: 'blue',
                },
                {
                  label: 'Celebrar',
                  text: 'Alegrarse con ellos en sus victorias — el ministerio no es solo para la crisis',
                  ref: 'Lucas 15:6',
                  color: 'gold',
                },
              ],
            },
            {
              type: 'leader_quote',
              quote: 'La Iglesia de Jesucristo no puede funcionar solo con programas. Funciona porque hay personas que aman a otras personas. Cuando el ministerio es real — cuando hay amor genuino fluyendo entre los santos — la Iglesia es lo que el Señor diseñó que fuera: una familia, no una organización.',
              name: 'Russell M. Nelson',
              role: '"Ministering", Conferencia General, abril 2018 (trad.)',
            },
            {
              type: 'reflection',
              prompt: '¿A quién el Señor ha puesto específicamente en tu vida para que cuides de ella? ¿Sabes lo que realmente está viviendo en este momento — no lo que dice en el pasillo de la capilla, sino lo que está viviendo de verdad? ¿Qué puedes hacer esta semana que no sea una visita obligatoria, sino un acto genuino de amor?',
            },
          ],
        },
      ],
    },
  ],
}
