import type { Lesson } from '@/types/doctrine'

export const mjEjemploClasePfj: Lesson = {
  id: 'mj-ejemplo-clase-pfj',
  moduleId: 'capacitacion-liderazgo',
  title: 'Clase Modelo PFJ — Mujeres Jóvenes',
  subtitle: 'Los 4 domingos de septiembre con el Capítulo 1: "El plan de Dios es para ti"',
  description:
    'Ejemplo concreto de cómo estructurar los 4 domingos de septiembre usando el Capítulo 1 del PFJ. Basado en el formato oficial presentado por la Presidenta General Emily Belle Freeman: verdad eterna, principios, doctrinas, e identidad del convenio.',
  level: 'BÁSICO',
  icon: '💜',
  duration: 20,
  order: 9214,
  status: 'PUBLISHED',
  studyBodyPlain: '',
  originalBodyPlain: '',
  submoduleGroup: 'mj-pfj',
  studySections: [
    {
      id: 's1',
      title: 'Antes de Empezar — Lo Que Cambia en la Clase de MJ',
      intro: {
        romanNumeral: 'I',
        title: 'Antes de Empezar — Lo Que Cambia en la Clase de MJ',
        paragraphs: [
          'La clase de Mujeres Jóvenes tiene cambios específicos además del nuevo currículo. Conocerlos antes del 6 de septiembre evita sorpresas el primer domingo.',
        ],
      },
      topics: [
        {
          id: 't1',
          title: 'Los Cambios de Formato (Además del Currículo)',
          blocks: [
            {
              type: 'key_points',
              points: [
                'El Tema de MJ se recita en actividades semanales, campamentos y conferencias — NO en la apertura de la clase del domingo',
                'Los ejercicios de apertura quedan discontinuados en la clase del domingo',
                'Las escrituras deben abrirse dentro de los primeros 5 minutos de clase',
                'La clase puede ser dirigida por una líder adulta, un adulto con una joven, o una joven sola',
                'El tono es "conversación y discusión" no instrucción — Presidenta Freeman: "No es tanto instrucción como una discusión, una conversación."',
              ],
            },
            {
              type: 'compare_grid',
              left: {
                title: 'Antes (formato anterior)',
                points: [
                  'El Tema de MJ se recita al inicio de la clase',
                  'Ejercicios de apertura (himno, anuncio, etc.)',
                  'Maestro adulto que "enseña" la lección',
                  'Material alternado con la Escuela Dominical',
                  'Las jóvenes escuchan principalmente',
                ],
              },
              right: {
                title: 'Nuevo formato (desde sept 2026)',
                points: [
                  'El Tema de MJ se recita en actividades y campamentos',
                  'Sin ejercicios de apertura — directo a las escrituras',
                  'Líder que facilita una conversación',
                  'PFJ cada domingo (no alterno)',
                  'Las jóvenes participan, discuten, comparten',
                ],
              },
            },
            {
              type: 'paragraph',
              text: 'El primer domingo de septiembre, cuando las jóvenes entren al salón, no habrá himno de apertura ni recitación del Tema antes de la lección. En su lugar: oración y escrituras dentro de los primeros 5 minutos. Este cambio puede sorprender — prepáralo con anticipación conversando con tus jóvenes antes del 6 de septiembre.',
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
        title: 'Domingo 1 — La Verdad Eterna',
        paragraphs: [
          'El primer domingo del mes se centra en UNA verdad eterna del capítulo. La líder comparte una experiencia personal. El tono es íntimo, no formal.',
        ],
      },
      topics: [
        {
          id: 't2',
          title: 'Ejemplo — Domingo 1 con el Capítulo 1',
          blocks: [
            {
              type: 'doctrine_box',
              title: 'La estructura del Domingo 1 (oficial)',
              body: 'Según las pautas de la Iglesia para el nuevo formato MJ: (1) Oración. (2) Escritura abierta dentro de los primeros 5 minutos. (3) La líder comparte una experiencia personal conectada a la verdad eterna del capítulo. (4) Invitar a la conversación — no a un debate doctrinal, sino a un intercambio auténtico. (5) Cierre con testimonio de la verdad eterna.',
            },
            {
              type: 'steps',
              title: 'Domingo 1 — Plan concreto para Capítulo 1 (25 min)',
              steps: [
                '(2 min) Oración de apertura',
                '(3 min) Escritura: Moisés 1:39 — "Mi obra y mi gloria es llevar a cabo la inmortalidad y la vida eterna del hombre." Leerla juntas',
                '(10 min) La líder comparte: "Hubo un momento en mi vida donde dudé de si el plan de Dios incluía también a mí. Aquí está esa historia..."',
                '(8 min) Conversación: "¿Alguna vez sintieron que el plan de Dios era para todos menos para ustedes? ¿Qué cambió eso?"',
                '(2 min) Testimonio: "El plan de Dios no es genérico — es personal. Tiene tu nombre."',
              ],
            },
            {
              type: 'reflection',
              prompt:
                '¿Cuál es tu experiencia personal con el Capítulo 1 — "El plan de Dios es para ti"? ¿Hubo un momento donde eso dejó de ser doctrina abstracta y se volvió algo real? Escríbela antes del primer domingo — esa historia es el corazón de la clase.',
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
        title: 'Domingos 2 y 3 — Principios y Doctrinas',
        paragraphs: [
          'Las semanas 2 y 3 profundizan los principios y doctrinas del capítulo. La revista PFJ de septiembre contiene preguntas específicas para facilitar estas discusiones.',
        ],
      },
      topics: [
        {
          id: 't3',
          title: 'Cómo Usar la Revista PFJ en Clase',
          blocks: [
            {
              type: 'paragraph',
              text: 'La revista PFJ (disponible en la app Biblioteca del Evangelio y en formato impreso) contiene preguntas de discusión preparadas para el líder, guías de preparación, y recursos doctrinales adicionales. Para el Capítulo 1, la revista de septiembre 2026 incluye preguntas basadas en el plan de salvación, la identidad divina de los jóvenes, y cómo ese conocimiento influye en las decisiones de la vida diaria.',
            },
            {
              type: 'steps',
              title: 'Domingos 2 y 3 — Plan concreto (25 min)',
              steps: [
                '(2 min) Oración de apertura',
                '(3 min) Recordar brevemente la verdad eterna del Domingo 1 con una pregunta: "¿Alguien llevó algo de la semana pasada al hogar?"',
                '(15 min) Discutir 2-3 preguntas de la revista PFJ de septiembre — deja que las jóvenes guíen',
                '(3 min) ¿Cómo aplico esto esta semana?',
                '(2 min) Cierre',
              ],
            },
            {
              type: 'key_points',
              points: [
                'No hay que usar todas las preguntas de la revista — elige las que mejor conecten con tu grupo específico',
                'Si una joven abre algo vulnerable, crea espacio — no redirigir inmediatamente',
                'El Domingo 3 puede explorar el mismo principio desde un ángulo diferente o pasar a uno nuevo del mismo capítulo',
                'En meses con Conferencia General, combinar los Domingos 2 y 3 en uno',
              ],
            },
          ],
        },
      ],
    },
    {
      id: 's4',
      title: 'Domingo 4 — Identidad del Convenio',
      intro: {
        romanNumeral: 'IV',
        title: 'Domingo 4 — Identidad del Convenio',
        paragraphs: [
          'El cuarto domingo cierra el mes con un enfoque en la identidad de las jóvenes como hijas del convenio. Incluye la primera línea del Tema de MJ más una declaración mensual nueva, y el estudio de una mujer de las escrituras.',
        ],
      },
      topics: [
        {
          id: 't4',
          title: 'El Cierre del Mes — Quiénes Son Ante Dios',
          blocks: [
            {
              type: 'doctrine_box',
              title: 'La estructura oficial del Domingo 4',
              body: 'La Iglesia especifica que el Domingo 4 incluye: (1) Recitar la primera línea del Tema de Mujeres Jóvenes. (2) Leer la nueva declaración mensual correspondiente al capítulo del mes. (3) Estudiar las escrituras sobre una mujer que ejemplifica ese principio. Para septiembre (Capítulo 1: "El plan de Dios es para ti"), la declaración y la mujer ejemplar serían provistas en la revista PFJ de septiembre.',
            },
            {
              type: 'steps',
              title: 'Domingo 4 — Plan concreto (25 min)',
              steps: [
                '(2 min) Oración de apertura',
                '(3 min) Recitar la primera línea del Tema: "Soy hija de Dios celestial, que me ama, y yo lo amo a Él..." + la nueva declaración mensual del capítulo 1',
                '(5 min) Introducir a la mujer de las escrituras del mes (provista en la revista)',
                '(10 min) Discusión: "¿Cómo ejemplifica esta mujer que el plan de Dios era específicamente para ella? ¿Qué podemos aprender de cómo respondió?"',
                '(3 min) Cierre: ¿Qué declaras tú sobre ti misma al terminar este mes?',
                '(2 min) Cierre y oración',
              ],
            },
            {
              type: 'highlight_verse',
              reference: 'Moisés 1:39',
              text: 'Porque he aquí, esta es mi obra y mi gloria: llevar a cabo la inmortalidad y la vida eterna del hombre.',
            },
          ],
        },
      ],
    },
    {
      id: 's5',
      title: 'Planificación del Mes Completo',
      intro: {
        romanNumeral: 'V',
        title: 'Planificación del Mes Completo',
        paragraphs: [
          'Una vista de pájaro de los 4 domingos permite prepararlos con anticipación, no improvisar semana a semana.',
        ],
      },
      topics: [
        {
          id: 't5',
          title: 'El Plan de Septiembre — Un Solo Capítulo, Cuatro Conversaciones',
          blocks: [
            {
              type: 'steps',
              title: 'Tu plan para septiembre (Capítulo 1)',
              steps: [
                'Domingo 7 sept — Verdad Eterna: El plan de Dios es personal. Comparte tu experiencia.',
                'Domingo 14 sept — Principios: ¿Cómo cambia mi vida saber que tengo un plan divino? (preguntas de la revista)',
                'Domingo 21 sept — Doctrinas: ¿Qué dicen las escrituras sobre el plan de salvación y mi lugar en él?',
                'Domingo 28 sept — Convenio: Primera línea del Tema + declaración mensual + mujer de las escrituras del cap. 1.',
              ],
            },
            {
              type: 'note_prompts',
              prompts: [
                {
                  id: 'np1',
                  question:
                    '¿Cuál de los 4 domingos te genera más incertidumbre? ¿Qué necesitas leer o preparar antes del 6 de septiembre para sentirte lista?',
                },
                {
                  id: 'np2',
                  question:
                    '¿Qué joven específica en tu grupo necesita más escuchar que "el plan de Dios es para TI"? ¿Cómo puedes preparar el Domingo 1 pensando en ella?',
                },
              ],
            },
          ],
        },
      ],
    },
  ],
}
