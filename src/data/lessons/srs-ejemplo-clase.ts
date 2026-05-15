import type { Lesson } from '@/types/doctrine'

export const srsEjemploClase: Lesson = {
  id: 'srs-ejemplo-clase',
  moduleId: 'capacitacion-liderazgo',
  title: 'Clase Modelo — Sociedad de Socorro 25 Minutos',
  subtitle: 'Mensajes de Conferencia General como conversación, no como lección',
  description:
    'Ejemplo de cómo estructurar la nueva clase de Sociedad de Socorro de 25 minutos usando mensajes de la Conferencia General. El cambio clave: de clase magistral a consejo entre hermanas.',
  level: 'BÁSICO',
  icon: '💐',
  duration: 15,
  order: 9510,
  status: 'PUBLISHED',
  submoduleGroup: 'srs-pfj',
  studyBodyPlain: '',
  originalBodyPlain: '',
  studySections: [
    {
      id: 's1',
      title: 'El Cambio de Paradigma — De Clase a Consejo',
      intro: {
        romanNumeral: 'I',
        title: 'De Clase a Consejo',
        paragraphs: [
          'La mayor diferencia no es el tiempo — es la mentalidad. La Sociedad de Socorro pasa de "clase magistral" a "consejo de hermanas." La maestra no enseña — facilita. La pregunta no es "¿qué enseño?" sino "¿sobre qué counselamos juntas?"',
        ],
      },
      topics: [
        {
          id: 't1',
          title: 'Qué Significa "Counselar Juntas"',
          blocks: [
            {
              type: 'paragraph',
              text: 'Las pautas oficiales de la Iglesia dicen que la clase de SRS es un espacio de "consejo", no de "lección." La maestra trae "buenas preguntas y guía las respuestas" — pero las hermanas son quienes counselan. Este modelo viene del patrón de la Sociedad de Socorro primitiva donde las hermanas se reunían a hablar de sus vidas, sus necesidades y cómo el evangelio se aplicaba a ambas.',
            },
            {
              type: 'compare_grid',
              left: {
                label: 'Formato anterior (50 min, magistral)',
                points: [
                  'Maestra prepara 30+ minutos de material',
                  'Cubre todos los puntos del discurso',
                  'Poco tiempo para que las hermanas hablen',
                  'Anuncios al principio (10 min)',
                  'Las hermanas toman notas',
                ],
              },
              right: {
                label: 'Nuevo formato (25 min, consejo)',
                points: [
                  'Presidencia elige el discurso con las necesidades del grupo en mente',
                  'La maestra prepara 2-3 preguntas clave',
                  'La mayoría del tiempo es conversación de las hermanas',
                  'Anuncios por WhatsApp/email',
                  'Las hermanas salen sintiendo que fueron escuchadas',
                ],
              },
            },
            {
              type: 'doctrine_box',
              title: 'Cómo selecciona la Presidencia el discurso',
              body: 'Las pautas oficiales indican que la Presidencia de SRS selecciona prayerfully (con oración) los discursos de la conferencia más reciente, "teniendo en mente las necesidades y preocupaciones de las hermanas." La maestra no tiene que seguir el mismo discurso semana tras semana — puede moverse entre discursos según lo que el grupo necesite. Lo importante: comunicar el discurso de la semana con anticipación para que las hermanas puedan leerlo en casa.',
            },
          ],
        },
      ],
    },
    {
      id: 's2',
      title: 'Los 25 Minutos — Estructura Concreta',
      intro: {
        romanNumeral: 'II',
        title: 'Estructura Concreta',
        paragraphs: [
          'Con solo 25 minutos, cada momento cuenta. No hay lugar para un preámbulo largo.',
        ],
      },
      topics: [
        {
          id: 't2',
          title: 'El Flujo de la Clase de SRS',
          blocks: [
            {
              type: 'steps',
              title: 'Estructura sugerida (25 min)',
              steps: [
                '(1 min) Bienvenida simple de la Presidencia + oración de apertura',
                '(2 min) La maestra nombra el discurso de hoy y dice en una oración por qué lo eligieron para este grupo esta semana',
                '(3 min) Pregunta de apertura — algo personal que engancha antes de hablar del discurso: "¿Alguien puede compartir una experiencia esta semana donde necesitó las palabras de un profeta?"',
                '(15 min) Discusión sobre 2-3 principios del discurso usando preguntas preparadas',
                '(3 min) Cierre: "¿Qué llevamos a casa hoy?"',
                '(1 min) Oración de cierre',
              ],
            },
            {
              type: 'paragraph',
              text: 'Los anuncios ya no van en la clase de SRS. Las pautas oficiales son explícitas: "Los canales alternativos de comunicación (email, textos, WhatsApp, folletos, redes sociales) deben manejar la información rutinaria, maximizando el tiempo de discusión dominical." Esto es un cambio cultural importante — las hermanas deben saber que los anuncios llegaron ya antes de que entraran al salón.',
            },
            {
              type: 'key_points',
              points: [
                'Comunicar el discurso de la semana por WhatsApp el jueves o viernes anterior',
                'Las hermanas que llegan habiendo leído el discurso transforman la clase',
                'La maestra no necesita "cubrir" el discurso — elige los principios más relevantes para ESE grupo',
                'Si una hermana comparte algo doloroso, dejar espacio — no redirigir inmediatamente hacia la doctrina',
                'La Presidencia puede participar también — no es solo la maestra quien habla',
              ],
            },
          ],
        },
      ],
    },
    {
      id: 's3',
      title: 'Preguntas que Generan Consejo Real',
      intro: {
        romanNumeral: 'III',
        title: 'Preguntas que Generan Consejo Real',
        paragraphs: [
          'La calidad de la discusión depende enteramente de la calidad de las preguntas. Una buena pregunta abre conversación durante 15 minutos sin esfuerzo.',
        ],
      },
      topics: [
        {
          id: 't3',
          title: 'Cómo Preparar Preguntas para SRS',
          blocks: [
            {
              type: 'compare_grid',
              left: {
                label: 'Preguntas que no generan consejo',
                points: [
                  '"¿Qué dijo el Hermano X en este punto del discurso?"',
                  '"¿Están de acuerdo con este principio?"',
                  '"¿Alguna pregunta sobre lo que leyeron?"',
                  '"¿Cómo podemos ser mejores madres/esposas/líderes?"',
                ],
              },
              right: {
                label: 'Preguntas que generan consejo real',
                points: [
                  '"¿Qué parte de este discurso les habló directamente a algo que están viviendo?"',
                  '"¿Cómo suena este principio en la vida real — no en el ideal?"',
                  '"¿Alguien ha visto a alguien vivir esto de una manera que les inspiró?"',
                  '"¿Qué sería diferente en su semana si aplicaran esto mañana en la mañana?"',
                ],
              },
            },
            {
              type: 'reflection',
              prompt:
                '¿Cuál es la necesidad más urgente de las hermanas en tu grupo ahora mismo? ¿Qué discurso de la conferencia más reciente habla más directamente a esa necesidad? Empieza ahí.',
            },
            {
              type: 'note_prompts',
              prompts: [
                {
                  id: 'np1',
                  question:
                    '¿Qué discurso de la última Conferencia General te movió más personalmente? ¿Cómo lo convertirías en una pregunta que abra conversación real en tu grupo?',
                },
                {
                  id: 'np2',
                  question:
                    '¿Cómo vas a comunicar el discurso de cada semana a las hermanas antes del domingo? Escribe el plan concreto.',
                },
              ],
            },
          ],
        },
      ],
    },
  ],
}
