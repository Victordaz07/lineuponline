import type { Lesson } from '@/types/doctrine'

export const edNuevoHorario: Lesson = {
  id: 'ed-nuevo-horario',
  moduleId: 'capacitacion-liderazgo',
  title: 'El Nuevo Horario Dominical',
  subtitle: 'Qué cambia el 6 de septiembre y de quién es la responsabilidad',
  description:
    'A partir del 6 de septiembre de 2026, el bloque dominical tiene una estructura nueva. La Presidencia de la Escuela Dominical es responsable de implementar y coordinar ese horario. Esta lección explica el antes y el después, los roles de cada parte, y los pasos concretos para una transición sin fricciones.',
  level: 'BÁSICO',
  icon: '🗓️',
  duration: 20,
  order: 9410,
  status: 'PUBLISHED',
  studyBodyPlain: '',
  originalBodyPlain: '',
  studySections: [
    {
      id: 's1',
      title: 'El Cambio de Estructura',
      intro: {
        romanNumeral: 'I',
        title: 'Antes y Después del 6 de Septiembre',
        paragraphs: [
          'El formato dominical que la mayoría de los barrios usaba — con Escuela Dominical alternando cada dos semanas — termina el 31 de agosto de 2026. A partir del 6 de septiembre, la estructura es nueva, consistente y semanal. La Presidencia de la Escuela Dominical es la que coordina ese cambio.',
        ],
      },
      topics: [
        {
          id: 't1',
          title: 'El Horario Anterior vs. el Nuevo',
          blocks: [
            {
              type: 'compare_grid',
              left: {
                label: 'Formato anterior',
                points: [
                  'Reunión sacramental — todos',
                  'Escuela Dominical (Ven, Sígueme) — semanas alternas',
                  'SRS / Cuórum de Élderes — semanas alternas',
                  'Jóvenes participaban en la Escuela Dominical con adultos',
                  'Primaria — 55 min (sin cambio)',
                ],
              },
              right: {
                label: 'Nuevo formato (desde 6 sept 2026)',
                points: [
                  'Reunión sacramental — todos (sin cambio)',
                  'Escuela Dominical 25 min — TODOS, cada domingo',
                  'Jóvenes 12–17 → 25 min clase PFJ (separados)',
                  'Adultos 18+ → 25 min SRS / Cuórum de Élderes',
                  'Primaria — 55 min (sin cambio)',
                ],
              },
            },
            {
              type: 'paragraph',
              text: 'El cambio más visible: la Escuela Dominical deja de ser alterna y pasa a ser cada domingo. El segundo cambio: los jóvenes ya no comparten ese segundo bloque con los adultos — tienen su propio espacio de 25 minutos con la guía PFJ.',
            },
            {
              type: 'doctrine_box',
              title: '¿Por qué cada domingo?',
              body: 'El propósito del cambio es crear continuidad de estudio. Cuando la Escuela Dominical era alterna, el ritmo de aprendizaje de Ven, Sígueme se interrumpía cada dos semanas. Con Escuela Dominical cada domingo, la doctrina se construye de manera sostenida y los miembros pueden profundizar semana a semana en el mismo bloque temático del mes.',
            },
          ],
        },
        {
          id: 't2',
          title: 'El Rol Central de la Presidencia de la Escuela Dominical',
          blocks: [
            {
              type: 'paragraph',
              text: 'Este cambio de horario no es responsabilidad de las organizaciones de jóvenes ni de los cuórum — es responsabilidad directa de la Presidencia de la Escuela Dominical, bajo la dirección del Obispado. Las organizaciones de Hombres Jóvenes, Mujeres Jóvenes y Élderes se enfocan en su contenido; la ED gestiona la arquitectura del tiempo dominical.',
            },
            {
              type: 'key_points',
              points: [
                'La Escuela Dominical pasa de alterna a semanal — ED coordina ese bloque',
                'La ED no gestiona la clase PFJ de los jóvenes — solo coordina el espacio y el tiempo',
                'Los maestros de ED siguen enseñando Ven, Sígueme a adultos y jóvenes juntos en ese primer bloque',
                'El segundo bloque (PFJ vs. SRS/Élderes) lo gestionan las organizaciones respectivas',
                'La Presidencia de ED debe conocer el horario completo para responder preguntas del barrio',
              ],
            },
            {
              type: 'timeline',
              items: [
                {
                  label: '3 de mayo de 2026',
                  text: 'Inicia el maratón de lectura PFJ (@forstrengthofyouth). Oportunidad para que la ED comunique el cambio próximo con entusiasmo.',
                  color: 'gold',
                },
                {
                  label: '30 de agosto de 2026',
                  text: 'Quinto domingo — reunión especial de toda la unidad (jóvenes, padres, líderes). El último domingo antes del nuevo horario.',
                  color: 'blue',
                },
                {
                  label: '6 de septiembre de 2026',
                  text: 'Primer domingo con el nuevo horario. Escuela Dominical cada semana. Jóvenes a su clase de PFJ. La ED implementa y sostiene.',
                  color: 'green',
                },
              ],
            },
          ],
        },
      ],
    },
    {
      id: 's2',
      title: 'Implementación Práctica',
      intro: {
        romanNumeral: 'II',
        title: 'Cómo Preparar el Barrio para Septiembre',
        paragraphs: [
          'La transición más suave es la que el barrio entiende antes de vivirla. La Presidencia de la Escuela Dominical tiene un papel clave en comunicar, preparar y sostener el nuevo formato.',
        ],
      },
      topics: [
        {
          id: 't3',
          title: 'Pasos de Preparación',
          blocks: [
            {
              type: 'steps',
              title: 'Lista de acción para la Presidencia de Escuela Dominical',
              steps: [
                'Reunirse con el Obispado para confirmar el horario local exacto (algunos barrios pueden variar 5–10 min)',
                'Preparar un diagrama visual del nuevo horario para presentarlo el 30 de agosto',
                'Coordinar con HJ y MJ quién es responsable de cada espacio físico durante el bloque de los jóvenes',
                'Asignar maestros de Escuela Dominical para cada domingo de septiembre en adelante',
                'Comunicar el cambio a los miembros antes del 6 de septiembre — en folleto, pantalla o anuncio oral',
              ],
            },
            {
              type: 'paragraph',
              text: 'La coordinación de espacios físicos es frecuentemente lo más olvidado: si el barrio tiene pocos salones, la ED debe acordar con HJ y MJ cuál salón usa cada grupo en el segundo bloque. Esto no lo resuelve el Obispado solo — requiere una reunión de coordinación entre las presidencias.',
            },
            {
              type: 'reflection',
              prompt: '¿Tienes ya una imagen clara de cómo se verá el flujo de personas en tu capilla el 6 de septiembre? ¿Quién va a qué salón, cuándo salen de sacramental, quién los recibe? Escribe el flujo paso a paso para tu barrio específico.',
            },
          ],
        },
        {
          id: 't4',
          title: 'El Quinto Domingo — 30 de Agosto',
          blocks: [
            {
              type: 'paragraph',
              text: 'El 30 de agosto de 2026 es el último domingo antes del nuevo horario y la Iglesia lo ha designado como un evento especial unificador. Habrá materiales de video producidos por la Iglesia para guiar la reunión. La Presidencia de la Escuela Dominical, junto con el Obispado, es responsable de organizar y facilitar ese evento en el barrio.',
            },
            {
              type: 'doctrine_box',
              title: 'Qué es el quinto domingo del 30 de agosto',
              body: 'Es una reunión donde toda la unidad — adultos, jóvenes y familias — se reúne junta para prepararse para el inicio del nuevo programa. No es una sesión administrativa. Es una experiencia espiritual de preparación. Los videos de la Iglesia guían la reunión; la ED facilita el espacio y la logística para que ese espíritu fluya sin distracciones.',
            },
            {
              type: 'key_points',
              points: [
                'La Iglesia provee videos instructivos — no hay que preparar la agenda desde cero',
                'Toda la unidad junta: jóvenes, padres, líderes y miembros adultos',
                'Duración estimada: usa el tiempo de bloque dominical normal',
                'La ED facilita la logística; el contenido lo ponen los videos de la Iglesia',
                'Es el momento ideal para que el barrio llegue al 6 de septiembre ya preparado',
              ],
            },
            {
              type: 'note_prompts',
              prompts: [
                { id: 'np1', question: '¿Quién en tu barrio no sabe todavía que el horario dominical cambia en septiembre? ¿Cómo puedes asegurarte de que llegue esa información a todos antes del 30 de agosto?' },
                { id: 'np2', question: '¿Qué logística específica del 30 de agosto necesitas coordinar con el Obispado esta semana?' },
              ],
            },
          ],
        },
      ],
    },
  ],
}
