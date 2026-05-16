import type { Lesson } from '@/types/doctrine'

export const mjEnsenar25Minutos: Lesson = {
  id: 'mj-ensenar-25-minutos',
  moduleId: 'capacitacion-liderazgo',
  title: 'Clases Semanales de 25 Minutos',
  subtitle: 'De alternas a semanales — el regalo del tiempo',
  description:
    'El cambio más práctico del nuevo programa: las Mujeres Jóvenes pasan de clases alternadas a reunirse cada domingo. Esta lección ayuda a las líderes a aprovechar ese tiempo de 25 minutos con un formato claro, involucrar a las jóvenes en la enseñanza, y preparar lecciones que produzcan discipulado diario — no solo conocimiento dominical.',
  level: 'INTERMEDIO',
  icon: '⏱️',
  duration: 20,
  order: 9102,
  status: 'PUBLISHED',
  studyBodyPlain: '',
  originalBodyPlain: '',
  studySections: [
    {
      id: 's1',
      title: 'El Cambio de Frecuencia — Qué Significa',
      intro: {
        romanNumeral: 'I',
        title: 'De Alternadas a Cada Domingo',
        paragraphs: [
          'El cambio de clases alternadas a clases semanales puede parecer logístico, pero es teológicamente significativo. La consistencia semanal forma hábitos. Los hábitos forman el carácter. El carácter forma discípulos.',
        ],
      },
      topics: [
        {
          id: 't1',
          title: 'Por Qué la Frecuencia Importa',
          blocks: [
            {
              type: 'paragraph',
              text: 'Cuando las clases son alternadas, el principio enseñado un domingo tiene dos semanas para enfriarse antes de ser retomado. Con clases semanales, cada domingo es una oportunidad de construir sobre lo que se vivió la semana anterior. La continuidad cambia la naturaleza del aprendizaje: de episódico a progresivo.',
            },
            {
              type: 'doctrine_box',
              title: 'El principio de la línea sobre línea',
              body: 'Isaías 28:10 y Doctrina y Convenios 98:12 enseñan el principio de "línea sobre línea, precepto sobre precepto." El aprendizaje espiritual genuino no ocurre en destellos aislados — ocurre cuando cada verdad se construye sobre la anterior. Las clases semanales hacen posible ese proceso de una manera que las alternadas no pueden.',
            },
            {
              type: 'compare_grid',
              left: {
                label: 'Clases alternadas (antes)',
                points: [
                  'Dos semanas entre lecciones del mismo tema',
                  'Difícil construir continuidad doctrinal',
                  'El impacto emocional de una clase se diluye antes de la siguiente',
                  'Las jóvenes llegan sin recordar el hilo de la lección anterior',
                  'La líder planifica cada clase como evento aislado',
                ],
              },
              right: {
                label: 'Clases semanales (nuevo)',
                points: [
                  'Cada domingo conecta con el anterior',
                  'Posible profundizar un capítulo a lo largo de 4 semanas',
                  'Las jóvenes desarrollan el hábito de esperar y prepararse',
                  'Las conversaciones del domingo continúan en la semana',
                  'La líder puede planificar un arco mensual completo',
                ],
              },
            },
          ],
        },
        {
          id: 't2',
          title: 'Planificar un Mes, no Solo un Domingo',
          blocks: [
            {
              type: 'paragraph',
              text: 'Con un capítulo de la guía PFJ por mes y cuatro domingos disponibles, cada mes tiene una arquitectura natural. La primera semana puede introducir el principio doctrinal. La segunda puede explorar escrituras relacionadas. La tercera puede llevar a la aplicación personal. La cuarta puede ser una clase enseñada por las propias jóvenes.',
            },
            {
              type: 'steps',
              steps: [
                'Semana 1 — Fundamento doctrinal: ¿Qué verdad enseña este capítulo sobre quiénes somos?',
                'Semana 2 — Escrituras: ¿Dónde vemos este principio en la vida de personas reales de las Escrituras?',
                'Semana 3 — Aplicación: ¿Cómo se vive este principio en las decisiones de esta semana?',
                'Semana 4 — Las jóvenes enseñan: una o dos jóvenes preparan y comparten su perspectiva del capítulo',
              ],
            },
            {
              type: 'reflection',
              prompt: '¿Cuál de estas cuatro semanas te parece más desafiante de preparar? ¿Cuál crees que tendrá mayor impacto en tus jóvenes? ¿Por qué?',
            },
          ],
        },
      ],
    },
    {
      id: 's2',
      title: 'El Formato de 25 Minutos — Estructura Clara',
      intro: {
        romanNumeral: 'II',
        title: 'Tres Partes, Un Propósito',
        paragraphs: [
          '25 minutos parece poco. En realidad, es suficiente si la clase tiene una estructura clara. Una clase bien diseñada no necesita ser larga para ser poderosa — necesita ser enfocada.',
        ],
      },
      topics: [
        {
          id: 't3',
          title: 'La Estructura de Tres Partes',
          blocks: [
            {
              type: 'paragraph',
              text: 'La estructura probada para enseñar principios del evangelio en tiempo limitado sigue tres movimientos: doctrina (qué enseña el Señor), principio (qué significa en la vida real), y aplicación (qué haré esta semana). Esta estructura no es artificial — refleja el patrón de cómo el Espíritu Santo enseña: primero ilumina la verdad, luego la aplica al corazón, luego inspira a actuar.',
            },
            {
              type: 'key_points',
              points: [
                'Doctrina (7-8 min): Una verdad doctrinal clara del capítulo — no tres, una',
                'Principio (10-12 min): Discusión guiada sobre cómo esa doctrina se vive — preguntas, no respuestas',
                'Aplicación (5-7 min): Una invitación específica y personal para la semana',
              ],
            },
            {
              type: 'doctrine_box',
              title: 'El error más común: intentar cubrir demasiado',
              body: 'La presión de "cubrir el capítulo" lleva a lecciones largas, superficiales e impersonales. Una clase de 25 minutos bien ejecutada que profundiza en una sola verdad doctrinalmente sólida produce más discipulado que una clase de una hora que repasa diez puntos. La profundidad, no la extensión, es lo que cambia corazones.',
            },
          ],
        },
        {
          id: 't4',
          title: 'Involucrar a las Jóvenes en la Enseñanza',
          blocks: [
            {
              type: 'paragraph',
              text: 'Las personas aprenden mejor cuando enseñan. Cuando una joven de 14 años prepara y comparte una verdad del evangelio con sus compañeras, la procesa a un nivel mucho más profundo que cuando solo la escucha. Involucrar a las jóvenes en la enseñanza no es una estrategia pedagógica — es un acto de confianza que las prepara para una vida de discipulado activo.',
            },
            {
              type: 'steps',
              steps: [
                'Identifica a las jóvenes que tienen el don de la enseñanza — pero también invita a las que no se perciben así',
                'Da la asignación con anticipación suficiente — al menos dos semanas antes',
                'Ofrece una reunión de preparación corta con la joven que va a enseñar',
                'Estate presente durante su enseñanza para apoyar, no para corregir',
                'Después de la clase, ofrece retroalimentación específica y alentadora — no solo "fue muy bien"',
              ],
            },
            {
              type: 'leader_quote',
              quote: 'Cuando una joven enseña a sus compañeras, algo cambia en ella. Deja de ser receptora pasiva del evangelio y empieza a ser dueña de él. Ese cambio no se puede enseñar — tiene que vivirse. Tu trabajo como líder es crear la oportunidad para que ocurra.',
              name: 'Presidencia General de Mujeres Jóvenes',
              role: 'Orientación para líderes, 2026',
            },
            {
              type: 'note_prompts',
              prompts: [
                { id: 'np1', question: '¿Qué jóvenes de mi grupo están listas para enseñar este mes?' },
                { id: 'np2', question: '¿Qué joven se beneficiaría más de la experiencia de preparar y enseñar, aunque no sea la más confiada?' },
                { id: 'np3', question: '¿Cómo puedo preparar a las jóvenes que enseñen sin que sientan que están "rindiendo un examen"?' },
              ],
            },
          ],
        },
      ],
    },
    {
      id: 's3',
      title: 'Aplicación Diaria — El Verdadero Objetivo',
      intro: {
        romanNumeral: 'III',
        title: 'Lo Que Ocurre el Lunes',
        paragraphs: [
          'El objetivo de la clase del domingo no es que las jóvenes salgan sabiendo más. Es que salgan viviendo de manera diferente. La medida del éxito de una clase no es el nivel de participación el domingo — es lo que ocurre entre el lunes y el sábado.',
        ],
      },
      topics: [
        {
          id: 't5',
          title: 'Preparar Jóvenes Para Aplicar el Evangelio a Diario',
          blocks: [
            {
              type: 'paragraph',
              text: 'Cada clase debería terminar con una invitación específica, no genérica. "Haz algo bueno esta semana" no es una invitación — es un deseo. Una invitación específica suena así: "Esta semana, cuando tengas que tomar una decisión difícil, detente cinco segundos y pregúntate: ¿qué haría una hija de Dios en este momento? Luego actúa conforme a esa respuesta." Lo específico es lo que se recuerda y se vive.',
            },
            {
              type: 'key_points',
              points: [
                'La invitación final debe ser accionable — algo que se puede hacer esta semana',
                'Debe ser personal — conectada con lo que se vivió en clase, no copiada de un manual',
                'Debe ser verificable — la joven debe poder saber si lo hizo o no',
                'Puede ser colectiva — "todas nos comprometemos a..." crea responsabilidad mutua',
                'Puede retomarse la semana siguiente — "la semana pasada nos comprometimos a... ¿qué pasó?"',
              ],
            },
            {
              type: 'central_quote',
              text: 'El discipulado para toda la vida comienza con el discipulado diario.',
              attribution: 'Presidente Timothy L. Farnes',
            },
          ],
        },
      ],
    },
  ],
}
