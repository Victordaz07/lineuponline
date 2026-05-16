import type { Lesson } from '@/types/doctrine'

export const hjEjemploClasePfj: Lesson = {
  id: 'hj-ejemplo-clase-pfj',
  moduleId: 'capacitacion-liderazgo',
  title: 'Clase Modelo PFJ — Cuórum del Sacerdocio Aarónico',
  subtitle: 'Cómo estructurar los 4 domingos del mes con el Capítulo 1',
  description:
    'Ejemplo completo de cómo estructurar las 4 clases del mes de septiembre usando el Capítulo 1 de la guía PFJ: "El plan de Dios es para ti." Basado en las pautas oficiales de la Iglesia para clases de 25 minutos.',
  level: 'BÁSICO',
  icon: '📘',
  duration: 20,
  order: 9113,
  status: 'PUBLISHED',
  submoduleGroup: 'hj-pfj',
  studyBodyPlain: '',
  originalBodyPlain: '',
  studySections: [
    {
      id: 's1',
      title: 'El Arco del Mes — Un Capítulo, Cuatro Domingos',
      intro: {
        romanNumeral: 'I',
        title: 'Un Capítulo, Cuatro Domingos',
        paragraphs: [
          'Las clases de HJ no cubren un tema diferente cada semana — profundizan el MISMO capítulo del PFJ durante todo el mes. Septiembre usa el Capítulo 1: "El plan de Dios es para ti."',
        ],
      },
      topics: [
        {
          id: 't1',
          title: 'La Lógica de un Capítulo por Mes',
          blocks: [
            {
              type: 'paragraph',
              text: 'Explicar que la guía PFJ tiene 12 capítulos, uno por mes. Eso significa que septiembre = Capítulo 1, octubre = Cap. 2, etc. Las 4 clases del mes no son 4 temas diferentes — son 4 perspectivas del mismo tema. Esto permite profundidad real en vez de superficialidad semanal.',
            },
            {
              type: 'compare_grid',
              left: {
                label: 'Formato anterior (alternado)',
                points: [
                  'Clase de HJ cada 2 semanas',
                  'Tema diferente cada clase',
                  'Poca continuidad de un domingo al otro',
                  'Difícil construir sobre lo aprendido',
                ],
              },
              right: {
                label: 'Nuevo formato (semanal)',
                points: [
                  'Clase de HJ cada domingo',
                  'El mismo capítulo todo el mes',
                  'Profundidad creciente semana a semana',
                  'Los jóvenes llegan con el capítulo leído',
                ],
              },
            },
            {
              type: 'key_points',
              points: [
                'Capítulo 1 para septiembre, Capítulo 2 para octubre, y así hasta diciembre',
                'La revista PFJ de septiembre tiene recursos adicionales para el Capítulo 1',
                'Los jóvenes deben leer el capítulo en casa antes de clase',
                'El líder no "enseña" el capítulo — facilita una conversación sobre él',
              ],
            },
          ],
        },
      ],
    },
    {
      id: 's2',
      title: 'Domingo 1 — La Verdad Eterna',
      intro: {
        romanNumeral: 'II',
        title: 'La Verdad Eterna',
        paragraphs: [
          'El primer domingo del mes se centra en UNA verdad eterna del capítulo. No se explica todo el capítulo — se profundiza un principio fundamental.',
        ],
      },
      topics: [
        {
          id: 't2',
          title: 'Cómo Preparar el Primer Domingo',
          blocks: [
            {
              type: 'doctrine_box',
              title: 'El formato del Domingo 1',
              body: 'El líder comparte una experiencia personal conectada a la verdad eterna. Se abren las escrituras en los primeros 5 minutos. Se invita a la discusión con preguntas abiertas. El tono es conversación, no conferencia. Se cierra con un testimonio de la verdad eterna del capítulo. Según el Presidente Freeman: "No es tanto instrucción como una discusión, una conversación."',
            },
            {
              type: 'steps',
              title: 'Domingo 1 — Estructura sugerida (25 min)',
              steps: [
                '(3 min) Oración de apertura',
                '(5 min) Escritura: Alma 22:13 — "¿Qué dice esta escritura sobre el plan de Dios?" leída en voz alta',
                '(10 min) El líder comparte una experiencia personal donde sintió que el plan de Dios era real para él',
                '(5 min) Pregunta: "¿Hubo un momento en tu vida donde sentiste que el plan de Dios era específicamente para TI?"',
                '(2 min) Cierre y testimonio de la verdad eterna: "El plan de Dios es un plan personal, no genérico."',
              ],
            },
            {
              type: 'highlight_verse',
              reference: 'Alma 22:13',
              text: 'Y Aarón le explicó las escrituras desde la creación de Adán, relacionando las caídas del hombre, y la redención que se efectuaría por medio de Cristo...',
            },
          ],
        },
      ],
    },
    {
      id: 's3',
      title: 'Domingos 2 y 3 — Principios y Doctrinas',
      intro: {
        romanNumeral: 'III',
        title: 'Principios y Doctrinas',
        paragraphs: [
          'Las semanas 2 y 3 profundizan los principios y doctrinas del capítulo usando preguntas de la revista PFJ y recursos del Evangelio.',
        ],
      },
      topics: [
        {
          id: 't3',
          title: 'Cómo Usar las Preguntas de la Revista',
          blocks: [
            {
              type: 'paragraph',
              text: 'La revista PFJ de septiembre contiene preguntas de discusión específicas para el Capítulo 1. El líder no necesita inventar preguntas — puede usar las de la revista. También se recomienda la pestaña "Temas del Evangelio" en la aplicación Biblioteca del Evangelio para preparar contexto doctrinal adicional.',
            },
            {
              type: 'steps',
              title: 'Domingos 2 y 3 — Estructura sugerida (25 min)',
              steps: [
                '(2 min) Oración de apertura',
                '(3 min) Recuerda brevemente la verdad eterna del Domingo 1',
                '(15 min) Discusión usando 2-3 preguntas de la revista PFJ de septiembre',
                '(3 min) ¿Cómo aplicamos este principio esta semana?',
                '(2 min) Cierre',
              ],
            },
            {
              type: 'key_points',
              points: [
                'No hay que cubrir todas las preguntas de la revista — elegir 2 o 3 que mejor conecten con tu grupo',
                'Si los jóvenes ya leyeron el capítulo en casa, la conversación fluirá naturalmente',
                'El líder puede ser un joven del cuórum — los presidentes de cuórum pueden facilitar estas clases',
                'En meses con Conferencia General no hay 4 domingos — combinar semanas 2 y 3 si es necesario',
              ],
            },
          ],
        },
      ],
    },
    {
      id: 's4',
      title: 'Domingo 4 — Identidad y Aplicación al Sacerdocio',
      intro: {
        romanNumeral: 'IV',
        title: 'Identidad y Aplicación al Sacerdocio',
        paragraphs: [
          'El cuarto domingo cierra el mes conectando el capítulo con la identidad del portador del sacerdocio y su rol en la obra de Dios.',
        ],
      },
      topics: [
        {
          id: 't4',
          title: 'El Cierre del Mes — ¿Qué Hago Yo con Esto?',
          blocks: [
            {
              type: 'paragraph',
              text: 'Para el Capítulo 1 ("El plan de Dios es para ti"), el Domingo 4 podría explorar: ¿Cómo afecta saber que el plan de Dios es personal a cómo ejerzo el sacerdocio? ¿Qué significa que Dios tiene un plan para mí — para MÍ — mientras llevo la Cena del Señor cada semana?',
            },
            {
              type: 'steps',
              title: 'Domingo 4 — Estructura sugerida (25 min)',
              steps: [
                '(2 min) Oración de apertura',
                '(5 min) Pregunta de apertura: "¿Qué de lo que estudiamos este mes se ha quedado contigo?"',
                '(12 min) Discusión: ¿Cómo cambia tu forma de llevar la Cena del Señor el saber que Dios tiene un plan personal para ti? ¿Qué ejemplo del capítulo 1 te pareció más poderoso?',
                '(4 min) Compromiso: una cosa concreta que aplicaré esta semana',
                '(2 min) Cierre',
              ],
            },
            {
              type: 'reflection',
              prompt:
                '¿Cómo puedes estructurar este mes de septiembre para que tus jóvenes lleguen al Domingo 4 sintiéndose más seguros de quiénes son ante Dios — no solo habiendo "visto" cuatro lecciones?',
            },
            {
              type: 'note_prompts',
              prompts: [
                {
                  id: 'np1',
                  question:
                    '¿Cuál de los 4 domingos te sientes menos preparado para facilitar? ¿Qué necesitas hacer antes del 6 de septiembre para estar listo?',
                },
                {
                  id: 'np2',
                  question:
                    '¿Qué experiencia personal tuya conecta con el Capítulo 1 — "El plan de Dios es para ti"? Escríbela para compartirla el Domingo 1.',
                },
              ],
            },
          ],
        },
      ],
    },
  ],
}
