import type { Lesson } from '@/types/doctrine'

export const elderesMentoresJovenes: Lesson = {
  id: 'elderes-mentores-jovenes',
  moduleId: 'capacitacion-liderazgo',
  title: 'Élderes como Mentores Misioneros',
  subtitle: 'Invitar élderes a compartir en las clases de jóvenes',
  description:
    'Cuando un élder que sirvió misión comparte su experiencia en la clase de jóvenes, no está dando una conferencia — está poniendo un rostro humano sobre el discipulado. Esta lección ayuda a los líderes del Cuórum de Élderes a entender qué significa ser mentor misionero: qué hacer, cómo hacerlo, y qué evitar para que la experiencia sea genuina y edificante.',
  level: 'INTERMEDIO',
  icon: '🤝',
  duration: 20,
  order: 9202,
  status: 'PUBLISHED',
  studyBodyPlain: '',
  originalBodyPlain: '',
  studySections: [
    {
      id: 's1',
      title: 'Qué Es un Mentor Misionero',
      intro: {
        romanNumeral: 'I',
        title: 'Compartir, No Predicar',
        paragraphs: [
          'Un mentor misionero no es un orador invitado ni un experto en doctrina. Es un discípulo que ha vivido algo que los jóvenes aún no han vivido, y que está dispuesto a compartir esa experiencia con vulnerabilidad y honestidad. La diferencia entre predicar y compartir puede determinar si la visita de un élder abre el corazón de un joven o lo cierra.',
        ],
      },
      topics: [
        {
          id: 't1',
          title: 'La Diferencia Entre Predicar y Compartir',
          blocks: [
            {
              type: 'paragraph',
              text: 'Cuando un élder va a una clase de jóvenes con la mentalidad de "enseñar" o "convencer", el resultado es generalmente una conferencia que los jóvenes escuchan con cortesía pero que no les mueve. Cuando va con la mentalidad de "contar algo real", ocurre algo diferente: los jóvenes se reconocen en esa historia, se hacen preguntas, y conectan la experiencia del élder con su propia vida.',
            },
            {
              type: 'compare_grid',
              left: {
                label: 'Predicar (cerrar corazones)',
                points: [
                  '"Cuando sirvan una misión, van a entender que..."',
                  '"Lo más importante es la obediencia — yo aprendí eso muy rápido"',
                  '"Los jóvenes de hoy tienen muchas distracciones que no existían antes"',
                  'Hablar más de lo que se escucha',
                  'Dar respuestas antes de que se hagan preguntas',
                ],
              },
              right: {
                label: 'Compartir (abrir corazones)',
                points: [
                  '"Hubo un momento en mi misión que cambió todo — ¿puedo contarles?"',
                  '"Lo más difícil para mí fue... y así lo atravesé"',
                  '"¿Qué preguntas tienen sobre la misión que nadie les ha respondido honestamente?"',
                  'Escuchar activamente las respuestas y preguntas de los jóvenes',
                  'Admitir lo que fue difícil, no solo lo glorioso',
                ],
              },
            },
            {
              type: 'doctrine_box',
              title: 'El poder de la experiencia compartida',
              body: 'Alma 26:22 dice que Dios "concede a los hombres según sus deseos, ya sean para la vida o para la muerte." Un élder que comparte sus deseos reales — incluyendo sus dudas, dificultades, y el proceso por el que pasó para resolverlas — le dice a un joven: "es válido tener ese proceso." Eso es infinitamente más útil que una presentación perfecta de la misión como ideal sin fricción.',
            },
          ],
        },
        {
          id: 't2',
          title: 'Qué Historia Contar — Conectar con el Capítulo del Mes',
          blocks: [
            {
              type: 'paragraph',
              text: 'La participación de un élder en una clase de jóvenes es más eficaz cuando está conectada con el capítulo específico que se está estudiando ese mes. Si el capítulo es sobre identidad y propósito, el élder puede compartir una experiencia misionera donde su sentido de identidad fue probado o confirmado. Si es sobre relaciones, puede compartir cómo esos principios se vivieron en la misión.',
            },
            {
              type: 'steps',
              steps: [
                'Habla con el líder de jóvenes dos o tres semanas antes para saber qué capítulo estudiarán ese mes',
                'Identifica una sola experiencia misionera o de tu vida que conecte genuinamente con ese capítulo',
                'Prepara no más de cinco minutos de historia — deja el resto al tiempo de preguntas y respuestas',
                'Escribe las preguntas que harías tú si fueras el joven escuchando esta historia',
                'Termina siempre con una pregunta abierta para los jóvenes — no con una conclusión cerrada',
              ],
            },
            {
              type: 'reflection',
              prompt: '¿Cuál es la experiencia más honesta y transformadora de tu misión — no la más gloriosa, sino la que más te cambió por dentro? ¿Estarías dispuesto a compartir esa historia con los jóvenes de tu barrio?',
            },
          ],
        },
      ],
    },
    {
      id: 's2',
      title: 'Qué No Hacer — Los Errores Comunes',
      intro: {
        romanNumeral: 'II',
        title: 'El Élder que No Debería Ir',
        paragraphs: [
          'No toda participación de un élder en una clase de jóvenes es beneficiosa. Existen patrones de comportamiento que, con las mejores intenciones, pueden dañar la relación de un joven con la idea de servir misión. Reconocerlos es parte de ser un buen mentor.',
        ],
      },
      topics: [
        {
          id: 't3',
          title: 'Los Tres Errores Más Comunes',
          blocks: [
            {
              type: 'paragraph',
              text: 'Los errores de los mentores misioneros generalmente no provienen de malas intenciones — provienen de no haber pensado en la diferencia entre lo que el élder necesita expresar y lo que el joven necesita recibir. Esas son con frecuencia cosas distintas.',
            },
            {
              type: 'key_points',
              points: [
                'Error 1 — Dominar el tiempo: El élder habla durante 20 de los 25 minutos. Los jóvenes quedan como audiencia pasiva de algo que no eligieron escuchar.',
                'Error 2 — Glorificar sin matices: Solo contar lo extraordinario y espiritual, sin la fricción real. Los jóvenes que tienen dudas o miedos sobre la misión sienten que no hay espacio para su experiencia.',
                'Error 3 — Presionar indirectamente: Comentarios como "a tu edad yo ya sabía que iba a servir" o "los jóvenes que sirven misión tienen más éxito en la vida" — aunque sean bien intencionados — generan presión, no inspiración.',
              ],
            },
            {
              type: 'doctrine_box',
              title: 'Inspirar es diferente de presionar',
              body: '2 Nefi 2:27 enseña que los hombres son libres para "elegir la libertad y la vida eterna" o lo contrario. Un mentor misionero eficaz preserva esa libertad al compartir — no la reduce con expectativas implícitas. El objetivo no es que el joven decida servir una misión esa tarde. Es que sienta que la misión es algo que una persona real como él puede hacer, y que si decide ir, tendrá apoyo.',
            },
          ],
        },
        {
          id: 't4',
          title: 'El Rol Después de la Clase',
          blocks: [
            {
              type: 'paragraph',
              text: 'La visita de un élder a la clase de jóvenes no termina cuando sale del salón. Un mentor efectivo está disponible después: para responder preguntas que el joven no se atrevió a hacer en público, para compartir recursos adicionales, para una conversación individual si el joven lo busca. Esa disponibilidad continua es la diferencia entre una visita y una mentoría.',
            },
            {
              type: 'leader_quote',
              quote: 'El mayor regalo que le puedes dar a un joven que está pensando en servir una misión no es contarle cuán maravillosa fue la tuya. Es hacerle saber que estás disponible para escuchar sus preguntas reales — las que no le hace al obispo porque no quiere parecer poco espiritual.',
              name: 'Líder Misional de Barrio',
              role: 'Orientación para mentores misioneros, 2026',
            },
            {
              type: 'note_prompts',
              prompts: [
                { id: 'np1', question: '¿Qué preguntas hubiera querido hacerle a un élder cuando tenía 15 años y estaba pensando en la misión?' },
                { id: 'np2', question: '¿Hay algún joven de mi barrio que necesita específicamente ese tipo de conversación ahora mismo?' },
                { id: 'np3', question: '¿Cómo puedo asegurarme de que mi participación en la clase sea un apoyo para el líder de jóvenes, no una interrupción de su plan?' },
              ],
            },
          ],
        },
      ],
    },
    {
      id: 's3',
      title: 'El Cuórum Como Red de Mentores',
      intro: {
        romanNumeral: 'III',
        title: 'No es un Élder — es un Cuórum',
        paragraphs: [
          'La mentoría misionera no debería recaer en uno o dos élderes entusiastas del cuórum. Es una responsabilidad colectiva que se distribuye según los dones, experiencias, y disponibilidad de cada miembro del cuórum.',
        ],
      },
      topics: [
        {
          id: 't5',
          title: 'Construir una Red de Mentores en el Cuórum',
          blocks: [
            {
              type: 'paragraph',
              text: 'Cada capítulo de la guía PFJ puede conectarse con un élder diferente del cuórum. El capítulo sobre identidad puede traer a un élder que tuvo una crisis de identidad en su misión y la resolvió. El capítulo sobre relaciones puede traer a un élder cuya misión le cambió la perspectiva sobre el matrimonio. Esta distribución enriquece la experiencia de los jóvenes y distribuye la responsabilidad entre todo el cuórum.',
            },
            {
              type: 'key_points',
              points: [
                'Mapea los 12 capítulos de la guía PFJ contra los élderes del cuórum que tienen experiencias relevantes',
                'No solo élderes "exitosos" — también los que atravesaron dificultades reales y salieron fortalecidos',
                'Incluye élderes recién regresados y élderes con décadas de experiencia',
                'Prepara a cada élder antes de su visita — no solo invítalo con poco tiempo',
                'Debriefa con el líder de jóvenes después de cada visita para mejorar el proceso',
              ],
            },
            {
              type: 'central_quote',
              text: 'Un joven que ve a diez élderes distintos compartir sus historias misioneras recibe algo que ningún manual puede dar: evidencia de que personas reales, con vidas reales, vivieron esos principios.',
              attribution: 'Orientación para el Cuórum de Élderes, 2026',
            },
          ],
        },
      ],
    },
  ],
}
