import type { Lesson } from '@/types/doctrine'

export const elderesEjemploClase: Lesson = {
  id: 'elderes-ejemplo-clase',
  moduleId: 'capacitacion-liderazgo',
  title: 'Clase Modelo — Cuórum de Élderes 25 Minutos',
  subtitle: 'Mensajes de Conferencia General como discipulado, no como tarea',
  description:
    'Ejemplo concreto de cómo estructurar la nueva clase semanal del Cuórum de Élderes de 25 minutos usando mensajes de Conferencia General. El cambio central: de lección magistral a consejo de hermanos.',
  level: 'BÁSICO',
  icon: '🌍',
  duration: 15,
  order: 9313,
  status: 'PUBLISHED',
  studyBodyPlain: '',
  originalBodyPlain: '',
  submoduleGroup: 'elderes-pfj',
  studySections: [
    {
      id: 's1',
      title: 'El Nuevo Rol del Cuórum de Élderes — Cada Semana',
      intro: {
        romanNumeral: 'I',
        title: 'El Nuevo Rol del Cuórum de Élderes — Cada Semana',
        paragraphs: [
          'Antes, el Cuórum de Élderes se reunía cada dos semanas alternando con la Escuela Dominical. A partir del 6 de septiembre, se reúne CADA domingo. Más frecuencia exige más preparación — y un formato diferente.',
        ],
      },
      topics: [
        {
          id: 't1',
          title: 'Qué Cambia y Por Qué Importa',
          blocks: [
            {
              type: 'paragraph',
              text: 'El Cuórum de Élderes pasó de reunirse 2 veces al mes (25 minutos cada vez) a reunirse 4 veces al mes (25 minutos cada vez). Eso es el doble de presencia — y el doble de oportunidad para que los élderes se conviertan en una verdadera fraternidad de discipulado, no solo en un grupo que escucha un sermón cada dos semanas.',
            },
            {
              type: 'key_points',
              points: [
                'El Cuórum de Élderes ya no tiene tiempo para anuncios en clase — comunicar por WhatsApp o correo antes del domingo',
                'La Presidencia del Cuórum selecciona prayerfully el discurso de cada semana según las necesidades del grupo',
                'No es obligatorio seguir el mismo discurso semana a semana — la presidencia puede moverse entre discursos',
                'La clase es un "consejo de hermanos" — no una conferencia',
                'Los élderes deben leer el discurso de la semana en casa antes del domingo',
              ],
            },
            {
              type: 'compare_grid',
              left: {
                title: 'Antes (cuórum alterno, 25 min c/2 sem)',
                points: [
                  'Reunión cada 2 semanas',
                  'A veces con "consejo" de 5-10 min antes de la lección',
                  'Lección magistral de la presidencia',
                  'Sin coordinación anticipada del discurso',
                  'Anuncios en el salón',
                ],
              },
              right: {
                title: 'Nuevo formato (cada domingo, 25 min)',
                points: [
                  'Reunión cada domingo',
                  'Sin consejo previo a la lección — todo es discusión',
                  'Facilitación de la presidencia con preguntas',
                  'Discurso comunicado con anticipación para que los élderes lleguen preparados',
                  'Anuncios por canales digitales',
                ],
              },
            },
          ],
        },
      ],
    },
    {
      id: 's2',
      title: 'Los 25 Minutos — El Formato Concreto',
      intro: {
        romanNumeral: 'II',
        title: 'Los 25 Minutos — El Formato Concreto',
        paragraphs: [
          'Las pautas oficiales de la Iglesia describen el formato con precisión. No es una clase magistral — es un consejo guiado.',
        ],
      },
      topics: [
        {
          id: 't2',
          title: 'El Flujo Oficial de la Clase',
          blocks: [
            {
              type: 'doctrine_box',
              title: 'El formato oficial del Cuórum de Élderes (pautas de la Iglesia)',
              body: 'Un miembro de la Presidencia abre con una bienvenida sencilla e invita a alguien a dar la oración de apertura. Un miembro de la Presidencia o instructor asignado invita a la discusión con una pregunta sobre cómo el mensaje de conferencia ayuda a los miembros a seguir a Jesucristo y a ministrar a otros, incluyendo a los miembros de sus familias. Se eligen unos pocos principios del mensaje que edifican la fe en Jesucristo y que parecen especialmente relevantes para las necesidades de los miembros. Se aconseja sobre cómo se aplican los principios a las vidas de los miembros.',
            },
            {
              type: 'steps',
              title:
                'Ejemplo concreto de clase (25 min) — Discurso: un mensaje de la última Conferencia General',
              steps: [
                '(1 min) Bienvenida simple de la Presidencia + oración',
                '(2 min) La Presidencia dice: "Esta semana estudiamos el discurso de [nombre] porque creemos que habla a algo que varios de nosotros estamos viviendo..."',
                '(3 min) Pregunta de apertura personal: "¿Alguien tuvo una semana difícil o una experiencia relevante al tema del discurso?"',
                '(15 min) Discutir 2-3 preguntas preparadas — "¿Cómo me ayuda este principio a seguir a Cristo?" — con espacio para que varios élderes compartan',
                '(3 min) Aplicación y cierre: "¿Qué compromiso concreto llevamos al hogar hoy?"',
                '(1 min) Oración de cierre',
              ],
            },
            {
              type: 'paragraph',
              text: 'La pregunta que la Presidencia debe responder antes de cada domingo: "¿Qué está viviendo el cuórum ahora mismo?" Un élder que perdió empleo necesita un discurso diferente que uno que está criando hijos adolescentes. La selección prayerful del discurso no es opcional — es el corazón del nuevo sistema.',
            },
          ],
        },
      ],
    },
    {
      id: 's3',
      title: 'Preparar al Cuórum para Cada Domingo',
      intro: {
        romanNumeral: 'III',
        title: 'Preparar al Cuórum para Cada Domingo',
        paragraphs: [
          'Un cuórum que llega habiendo leído el discurso transforma la clase. Un cuórum que llega sin haberlo leído transforma la clase en un resumen de 25 minutos donde solo habla la presidencia.',
        ],
      },
      topics: [
        {
          id: 't3',
          title: 'Cómo Crear la Cultura de Preparación',
          blocks: [
            {
              type: 'steps',
              title: 'Plan semanal de la Presidencia del Cuórum',
              steps: [
                'Lunes: Orar sobre qué discurso usar esta semana — ¿qué necesita el cuórum?',
                'Martes: Seleccionar el discurso y leerlo completamente; elegir 2-3 principios y 2-3 preguntas',
                'Miércoles o jueves: Enviar el discurso al grupo de WhatsApp del cuórum con una línea personal: "Este domingo discutiremos esto porque..."',
                'Domingo (antes): Llegar 5 min antes para organizar el espacio y tener lista la pregunta de apertura',
                'Domingo (durante): Facilitar — no conferencia. Si alguien abre algo importante, crear espacio.',
              ],
            },
            {
              type: 'reflection',
              prompt:
                '¿Cuántos élderes en tu cuórum llegan actualmente a la clase habiendo leído el discurso? ¿Qué harías diferente para que ese número aumente antes del 6 de septiembre?',
            },
            {
              type: 'note_prompts',
              prompts: [
                {
                  id: 'np1',
                  question:
                    '¿Cuál discurso de la última Conferencia General crees que necesita más urgentemente tu cuórum ahora mismo? ¿Por qué ese y no otro?',
                },
                {
                  id: 'np2',
                  question:
                    '¿Cómo vas a comunicar semanalmente el discurso a los élderes? Escribe el mensaje exacto que enviarías este jueves.',
                },
              ],
            },
          ],
        },
      ],
    },
  ],
}
