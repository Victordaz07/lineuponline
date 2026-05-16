import type { Lesson } from '@/types/doctrine'

export const mjConectarHogar: Lesson = {
  id: 'mj-conectar-hogar',
  moduleId: 'capacitacion-liderazgo',
  title: 'Conectar el Hogar con el Domingo',
  subtitle: 'Que lo que enseñamos no se quede en el salón',
  description:
    'El aprendizaje del domingo cobra su verdadero poder cuando se conecta con lo que ocurre en el hogar durante la semana. Esta lección ayuda a las líderes de Mujeres Jóvenes a tender puentes entre la clase del domingo, el estudio en el hogar con Ven y Sígueme, y la guía PFJ — involucrando a los padres sin convertir el principio en tarea.',
  level: 'INTERMEDIO',
  icon: '🏠',
  duration: 15,
  order: 9103,
  status: 'PUBLISHED',
  studyBodyPlain: '',
  originalBodyPlain: '',
  studySections: [
    {
      id: 's1',
      title: 'El Triángulo Hogar-Iglesia-Joven',
      intro: {
        romanNumeral: 'I',
        title: 'Dos Instituciones, Una Joven',
        paragraphs: [
          'La Iglesia enseña que el hogar es el centro del aprendizaje espiritual y la Iglesia su complemento. En la práctica, muchas jóvenes viven esas dos realidades como separadas. Tu trabajo como líder es ayudarlas a ver que son una sola.',
        ],
      },
      topics: [
        {
          id: 't1',
          title: 'Ven y Sígueme + PFJ — Una Sinfonía, No Dos Instrumentos',
          blocks: [
            {
              type: 'paragraph',
              text: 'El programa de estudio del hogar "Ven y Sígueme" sigue el ciclo de las Escrituras. La guía PFJ estudia principios de discipulado. Lejos de competir, estos dos programas se complementan: las Escrituras proveen el contexto narrativo e histórico, mientras la guía PFJ convierte esas verdades en principios de decisión actuales. El hogar es el lugar donde esa síntesis puede ocurrir con más profundidad.',
            },
            {
              type: 'doctrine_box',
              title: 'El hogar como santuario del aprendizaje',
              body: 'Doctrina y Convenios 68:25 ordena a los padres "enseñar a sus hijos la luz y la verdad." El programa de estudio en el hogar no es una sustitución de esa responsabilidad — es un apoyo estructurado para que los padres la cumplan. Cuando una líder conecta el domingo con el hogar, está respetando y fortaleciendo esa responsabilidad paterna, no reemplazándola.',
            },
            {
              type: 'key_points',
              points: [
                'Ven y Sígueme: narrativa bíblica y doctrina en contexto histórico',
                'PFJ: principios de decisión para la vida real de hoy',
                'La clase del domingo: profundización comunitaria y aplicación práctica',
                'El hogar: síntesis personal en conversación con los padres',
                'La joven: el punto de unión de todas estas corrientes',
              ],
            },
          ],
        },
        {
          id: 't2',
          title: 'Involucrar a los Padres Sin Crear Más Tareas',
          blocks: [
            {
              type: 'paragraph',
              text: 'Muchos padres quieren participar en el aprendizaje espiritual de sus hijos pero no saben cómo. La solución no es enviarles un manual o una lista de temas cubiertos — es darles una sola pregunta para conversar en la cena. Una buena pregunta abre más puertas que diez puntos de doctrina correctamente articulados.',
            },
            {
              type: 'steps',
              steps: [
                'Al final de cada clase, prepara una pregunta de conversación para el hogar — una sola, bien pensada',
                'Envíala a los padres por mensaje de texto o correo electrónico el domingo en la tarde',
                'Formula la pregunta para que invite conversación, no para que tenga respuesta correcta',
                'La semana siguiente, puedes preguntar en clase si alguien tuvo esa conversación — sin presión',
                'Cuando un padre comenta que tuvo esa charla con su hija, hazle saber que eso importa',
              ],
            },
            {
              type: 'central_quote',
              text: 'El hogar no es la extensión de la Iglesia. La Iglesia es el apoyo del hogar.',
              attribution: 'Presidencia General de Mujeres Jóvenes, orientación 2026',
            },
          ],
        },
      ],
    },
    {
      id: 's2',
      title: 'La Pregunta Como Puente',
      intro: {
        romanNumeral: 'II',
        title: 'Una Conversación, No una Tarea',
        paragraphs: [
          'La diferencia entre una tarea y una conversación es la diferencia entre obligación y conexión. Las jóvenes no necesitan más cosas que hacer — necesitan más conversaciones auténticas con personas que las aman. Como líder, puedes diseñar esas conversaciones.',
        ],
      },
      topics: [
        {
          id: 't3',
          title: 'Qué Hace a una Pregunta Buena',
          blocks: [
            {
              type: 'paragraph',
              text: 'Una buena pregunta de conexión hogar-domingo no tiene respuesta "correcta." Invita a compartir experiencias, perspectivas, y sentimientos. Hace que tanto la joven como el padre o madre aprendan algo el uno del otro. Y está conectada directamente con lo que se vivió en clase ese domingo.',
            },
            {
              type: 'compare_grid',
              left: {
                label: 'Preguntas que cierran la conversación',
                points: [
                  '¿Qué aprendiste hoy en la clase?',
                  '¿Entendiste lo que explicó la hermana?',
                  '¿Estuviste atenta en la clase?',
                  '¿Cuál fue el tema de hoy?',
                ],
              },
              right: {
                label: 'Preguntas que abren la conversación',
                points: [
                  '¿Cuándo fue la última vez que tomaste una decisión que te costó algo?',
                  '¿Qué haría más difícil o más fácil vivir este principio en tu escuela?',
                  '¿Hay alguien que admiras que vive así? ¿Por qué la admiras?',
                  '¿Qué crees que diría el Señor si pudieras preguntarle sobre esto?',
                ],
              },
            },
            {
              type: 'note_prompts',
              prompts: [
                { id: 'np1', question: '¿Qué pregunta me gustaría que mi padre o madre me hubiera hecho cuando yo tenía 15 años?' },
                { id: 'np2', question: '¿Qué conversación quiero que mis jóvenes tengan con sus padres este mes?' },
                { id: 'np3', question: '¿Qué haré si una joven no tiene un padre o madre con quien tener esa conversación en casa?' },
              ],
            },
          ],
        },
        {
          id: 't4',
          title: 'Jóvenes que No Tienen un Hogar de Apoyo',
          blocks: [
            {
              type: 'paragraph',
              text: 'No todas las jóvenes tienen padres miembros activos, o padres presentes, o un hogar donde el evangelio es el idioma familiar. Para ellas, la clase del domingo puede ser el único espacio de formación espiritual intencional. Esto no es un problema a resolver — es una responsabilidad sagrada que llevas como líder.',
            },
            {
              type: 'doctrine_box',
              title: 'La hermandad como familia extendida',
              body: 'Cuando una joven no tiene ese apoyo en casa, la hermandad de su clase puede ser su familia extendida espiritual. Las compañeras que se cuidan, que continúan las conversaciones del domingo durante la semana, que se envían mensajes de apoyo el miércoles cuando la semana se pone difícil — esas son las conexiones que llenan el vacío. Tu trabajo es cultivar ese tipo de cultura en tu grupo.',
            },
            {
              type: 'reflection',
              prompt: '¿Cuáles de tus jóvenes tienen hogares donde el evangelio es practicado activamente? ¿Cuáles no? ¿Cómo adaptas tu estrategia de conexión hogar-domingo para servir a todas igualmente?',
            },
          ],
        },
      ],
    },
  ],
}
