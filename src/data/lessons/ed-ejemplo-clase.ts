import type { Lesson } from '@/types/doctrine'

export const edEjemploClase: Lesson = {
  id: 'ed-ejemplo-clase',
  moduleId: 'capacitacion-liderazgo',
  title: 'Clase Modelo — Escuela Dominical 25 Minutos',
  subtitle: 'Cómo enseñar Ven, Sígueme en la mitad del tiempo con el doble de profundidad',
  description:
    'Ejemplo concreto de cómo preparar y facilitar la Escuela Dominical de 25 minutos bajo el nuevo formato. Ven, Sígueme sigue siendo el currículo — el reto es elegir bien qué enseñar en tiempo reducido.',
  level: 'BÁSICO',
  icon: '📖',
  duration: 15,
  order: 9412,
  status: 'PUBLISHED',
  submoduleGroup: 'ed-pfj',
  studyBodyPlain: '',
  originalBodyPlain: '',
  studySections: [
    {
      id: 's1',
      title: 'El Principio Central: Menos Es Más',
      intro: {
        romanNumeral: 'I',
        title: 'Menos Es Más',
        paragraphs: [
          'La Iglesia es explícita: no intentes cubrir todo el material de Ven, Sígueme en 25 minutos. Elige 1 a 3 principios y profundiza. El resto lo estudian en casa.',
        ],
      },
      topics: [
        {
          id: 't1',
          title: 'Por Qué NO cubrir todo',
          blocks: [
            {
              type: 'paragraph',
              text: 'Explica el riesgo del maestro que intenta cubrir todo en 25 min: la clase se convierte en un resumen de la escritura, no en una conversación que transforma. El maestro habla los 25 minutos y los alumnos escuchan. Nadie lleva nada al hogar porque no hubo tiempo de conectar.',
            },
            {
              type: 'compare_grid',
              left: {
                label: 'La tentación: cubrir todo',
                points: [
                  'Resumir todos los versículos del bloque',
                  'Mencionar todos los principios',
                  '25 minutos de exposición sin preguntas',
                  'Los miembros salen con más información',
                  'Nadie tuvo tiempo de reflexionar',
                ],
              },
              right: {
                label: 'La pauta oficial: 1-3 principios',
                points: [
                  'Elegir un principio que conecte con las vidas del grupo',
                  'Profundizar con una pregunta poderosa',
                  '15 minutos de discusión real',
                  'Los miembros salen con algo que les toca el corazón',
                  'La escritura se convierte en espejo, no en historia',
                ],
              },
            },
            {
              type: 'doctrine_box',
              title: 'La pauta oficial de la Iglesia',
              body: 'Las guías oficiales del nuevo horario indican: "Identifiquen 1 a 3 verdades eternas más relevantes y aplíquenlas a la vida diaria." No es "cubrir" el bloque — es "conectar" el bloque con quienes están en el salón.',
            },
          ],
        },
        {
          id: 't2',
          title: 'Cómo Elegir Qué Enseñar',
          blocks: [
            {
              type: 'steps',
              title: 'Preparación del maestro de ED (20 min de estudio semanal)',
              steps: [
                'Lee el bloque completo de Ven, Sígueme de la semana',
                'Identifica 3 principios potenciales que emergen de la lectura',
                'Piensa en tu clase específica — ¿cuál de esos 3 conecta con algo que alguien en el salón está viviendo?',
                'Elige 1 (máximo 2) principios',
                'Prepara 1-2 preguntas abiertas que inviten a la conversación — no preguntas de sí/no',
                'Ten lista una escritura clave y una experiencia personal o historia breve de apertura',
              ],
            },
            {
              type: 'key_points',
              points: [
                'La pregunta más importante que el maestro se hace: "¿Qué principio de esta escritura necesita alguien en mi salón esta semana?"',
                'Los maestros no necesitan impresionar — necesitan crear espacio para que el Espíritu enseñe',
                'Ven, Sígueme es un currículo de hogar — la clase dominical profundiza, no reemplaza',
                'Si la clase tiene jóvenes y adultos juntos, elegir preguntas que conecten con ambos grupos',
              ],
            },
          ],
        },
      ],
    },
    {
      id: 's2',
      title: 'Estructura del Tiempo — Los 25 Minutos',
      intro: {
        romanNumeral: 'II',
        title: 'Los 25 Minutos',
        paragraphs: [
          'Un esquema de tiempo concreto ayuda a que la clase fluya sin que el maestro tenga que improvisar el orden.',
        ],
      },
      topics: [
        {
          id: 't3',
          title: 'Los 25 Minutos en Detalle',
          blocks: [
            {
              type: 'steps',
              title: 'Estructura sugerida (25 min exactos)',
              steps: [
                '(2 min) Oración de apertura',
                '(3 min) Apertura: una pregunta o imagen que enganche — no explicar el contexto histórico todavía',
                '(5 min) Leer juntos la escritura central (1-3 versículos, no el capítulo completo)',
                '(12 min) Discusión: 2 preguntas abiertas sobre el principio elegido, con tiempo para que varios respondan',
                '(2 min) Aplicación: "¿Cómo puedo vivir esto esta semana?"',
                '(1 min) Cierre y oración',
              ],
            },
            {
              type: 'paragraph',
              text: 'El mayor error de tiempo es empezar dando contexto histórico. En 25 minutos, si usas 10 minutos explicando quién era Isaías y cuándo vivió, solo te quedan 15 para la discusión real. Empieza con la pregunta que engancha, no con el contexto. El contexto se menciona brevemente SI es necesario para entender el principio.',
            },
            {
              type: 'reflection',
              prompt:
                '¿Cuál es tu tendencia como maestro de ED — hablar demasiado o crear demasiado silencio? ¿Cómo cambias esa tendencia en 25 minutos?',
            },
          ],
        },
      ],
    },
    {
      id: 's3',
      title: 'El Maestro Como Facilitador, No Conferenciante',
      intro: {
        romanNumeral: 'III',
        title: 'Facilitador, No Conferenciante',
        paragraphs: [
          'En el nuevo formato, el maestro de ED no es quien más habla — es quien más escucha.',
        ],
      },
      topics: [
        {
          id: 't4',
          title: 'Preguntas que Abren, No que Cierran',
          blocks: [
            {
              type: 'compare_grid',
              left: {
                label: 'Preguntas que cierran la discusión',
                points: [
                  '"¿Quién puede decirme cuál es la moraleja de esta historia?"',
                  '"¿Verdad que esta escritura nos enseña X?"',
                  '"¿Alguien sabe qué significa esta palabra?"',
                  '"¿Estamos de acuerdo en que debemos hacer Y?"',
                ],
              },
              right: {
                label: 'Preguntas que abren la discusión',
                points: [
                  '"¿Qué de esta escritura les sorprendió o les tocó el corazón?"',
                  '"¿Cómo describirían este principio con sus propias palabras?"',
                  '"¿Alguien ha vivido algo parecido a lo que describe este versículo?"',
                  '"¿Qué cambiaría en tu semana si vivieras este principio?"',
                ],
              },
            },
            {
              type: 'note_prompts',
              prompts: [
                {
                  id: 'np1',
                  question:
                    'Escribe las 2 preguntas que usarás en tu próxima clase de ED. ¿Son preguntas abiertas que invitan a la reflexión o preguntas que ya tienen respuesta?',
                },
                {
                  id: 'np2',
                  question:
                    '¿Cuál es el principio de Ven, Sígueme de esta semana que más te tocó personalmente? Empieza tu preparación desde ahí.',
                },
              ],
            },
          ],
        },
      ],
    },
  ],
}
