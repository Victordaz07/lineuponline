import type { Lesson } from '@/types/doctrine'

export const comoDarUnDiscurso: Lesson = {
  id: 'como-dar-un-discurso',
  moduleId: 'vida-familiar-personal',
  title: 'Cómo Dar un Discurso',
  subtitle: 'Preparar y presentar un mensaje en la reunión sacramental',
  description:
    'Guía práctica para preparar y dar un discurso en la reunión sacramental. Desde el momento en que te asignan el tema hasta las últimas palabras desde el púlpito: estructura, errores comunes, cómo usar las escrituras y cómo dejar que el Espíritu sea el maestro real.',
  level: 'BÁSICO',
  icon: '🎤',
  duration: 20,
  order: 6,
  status: 'PUBLISHED',
  studyBodyPlain: '',
  originalBodyPlain: '',
  studySections: [
    {
      id: 's1',
      title: 'Antes de Escribir una Palabra',
      intro: {
        romanNumeral: 'I',
        title: 'El Propósito Lo Cambia Todo',
        paragraphs: [
          'El mayor error al preparar un discurso es comenzar pensando en qué decir. El lugar correcto para empezar es preguntarse: ¿Para quién es este discurso? La respuesta no eres tú — son las personas que van a escucharte.',
        ],
      },
      topics: [
        {
          id: 't1',
          title: 'Por Qué Existe el Discurso en la Reunión Sacramental',
          blocks: [
            {
              type: 'doctrine_box',
              title: 'El propósito según el Manual General de la Iglesia',
              body: 'La reunión sacramental tiene un propósito espiritual específico: adorar a Dios, renovar convenios y edificar a los miembros. Los discursos no son clases ni conferencias académicas — son mensajes inspirados que invitan al Espíritu y edifican la fe. Un discurso que impresiona sin edificar no cumple su propósito.',
            },
            {
              type: 'key_points',
              points: [
                'El tiempo típico para un miembro es 7 a 10 minutos — planifica en base a eso',
                'Siempre hay un tema asignado — trabaja dentro de ese tema, no alrededor de él',
                'El Espíritu Santo es el verdadero maestro — tu rol es crear las condiciones para que Él enseñe',
                'Un discurso bien preparado respeta el tiempo de los demás',
                'No necesitas saber todo sobre el tema — necesitas compartir lo que el Espíritu te enseñó',
              ],
            },
            {
              type: 'paragraph',
              text: 'Cuando recibes el tema, la primera pregunta útil no es "¿qué sé sobre esto?" sino "¿qué necesita escuchar esta congregación sobre esto?" Esa diferencia de perspectiva es la que separa un discurso memorable de uno olvidable.',
            },
          ],
        },
        {
          id: 't2',
          title: 'Cómo Prepararte Antes de Escribir',
          blocks: [
            {
              type: 'steps',
              title: 'Los pasos de preparación (antes de tocar papel o pantalla)',
              steps: [
                'Ora pidiendo inspiración específica — no solo "ayúdame a hablar bien", sino "muéstrame qué necesita esta gente"',
                'Lee sobre el tema en las escrituras usando la función de búsqueda de la Biblioteca del Evangelio',
                'Busca un discurso de Conferencia General sobre el tema (últimos 5 años funcionan mejor)',
                'Escribe en papel la idea más importante que quieres que alguien lleve al hogar — una sola oración',
                'Reúne 1-2 experiencias personales o historias que ilustren esa idea central',
              ],
            },
            {
              type: 'paragraph',
              text: 'El secreto de los mejores discursantes en la Iglesia no es que hablan bien — es que se preparan con oración. David O. McKay dijo que nunca subía al púlpito sin haber pedido al Señor qué decir. Ese hábito, más que cualquier habilidad retórica, es lo que hace que un discurso toque corazones.',
            },
          ],
        },
      ],
    },
    {
      id: 's2',
      title: 'La Estructura de Tres Partes',
      intro: {
        romanNumeral: 'II',
        title: 'Introducción, Cuerpo, Conclusión',
        paragraphs: [
          'Todo discurso efectivo tiene tres partes: una apertura que engancha, un cuerpo que enseña, y una conclusión que invita. La mayoría de los errores ocurren porque estas partes se mezclan o se omiten.',
        ],
      },
      topics: [
        {
          id: 't3',
          title: 'La Introducción — El Gancho',
          blocks: [
            {
              type: 'compare_grid',
              left: {
                label: 'Aperturas que desconectan',
                points: [
                  '"Hoy me asignaron hablar sobre la fe..."',
                  '"El hermano X nos habló del Espíritu, y yo quiero añadir..."',
                  '"Busqué en el diccionario la definición de gratitud..."',
                  '"No soy muy bueno hablando, pero..."',
                  'Leer el título del discurso de conferencia que usará',
                ],
              },
              right: {
                label: 'Aperturas que conectan',
                points: [
                  'Una pregunta que les hace pensar en su propia vida',
                  'Una historia corta (tuya o de las escrituras) que ilustra el tema',
                  'Un versículo leído con pausa y emoción genuina',
                  'Una observación sobre algo que todos han vivido',
                  'Un dato o contraste que sorprende y abre curiosidad',
                ],
              },
            },
            {
              type: 'paragraph',
              text: 'Los primeros 30 segundos determinan si la congregación te escucha o empieza a pensar en otras cosas. No los uses explicando lo que vas a decir — úsalos diciendo algo que valga la pena escuchar.',
            },
          ],
        },
        {
          id: 't4',
          title: 'El Cuerpo — Doctrina, Escritura, Experiencia',
          blocks: [
            {
              type: 'doctrine_box',
              title: 'La secuencia que construye fe',
              body: 'El cuerpo más efectivo de un discurso sigue este patrón: (1) Declara la verdad o principio con claridad — una oración directa. (2) Apóyala con una escritura que la confirme — léela en voz alta, no solo la menciones. (3) Ilustra con una experiencia real — tuya, de alguien que conoces, o de las escrituras. Repite el ciclo para cada idea. Este patrón — verdad → escritura → experiencia — es cómo el Espíritu Santo enseña.',
            },
            {
              type: 'steps',
              title: 'Cómo usar un discurso de Conferencia General sin solo leerlo',
              steps: [
                'Lee el discurso completo y subraya las 2-3 ideas que más te tocaron',
                'Para cada idea, busca la escritura que el autor usó — o una diferente que también la apoye',
                'Piensa en una experiencia propia o de alguien que conozcas que ilustre esa idea',
                'Cita al autor por su nombre al mencionar su idea — "El Élder Holland enseñó que..."',
                'No leas párrafos largos del discurso — parafrasea y cita solo la línea más poderosa',
              ],
            },
            {
              type: 'key_points',
              points: [
                'Un discurso de 8 minutos puede cubrir 2-3 ideas principales — no más',
                'Cada idea necesita una escritura — los discursos sin escrituras flotan sin ancla',
                'Las historias personales son las más poderosas — pero deben ilustrar doctrina, no reemplazarla',
                'Deja espacio para el silencio — una pausa después de un versículo lo hace aterrizar',
              ],
            },
          ],
        },
        {
          id: 't5',
          title: 'La Conclusión — La Invitación',
          blocks: [
            {
              type: 'paragraph',
              text: 'La conclusión no es un resumen de lo que ya dijiste. Es una invitación. Después de enseñar la verdad y apoyarla, el cierre natural es: "Los invito a..." o "Mi deseo para cada uno de nosotros es que..." seguido de un testimonio breve y directo de lo que sabes.',
            },
            {
              type: 'steps',
              title: 'Cómo terminar bien',
              steps: [
                'No digas "para concluir" — simplemente concluye',
                'Haz una invitación concreta: una cosa que alguien puede hacer esta semana',
                'Comparte tu testimonio en primera persona — "sé que", "creo que", "he visto que"',
                'Termina con "En el nombre de Jesucristo, amén" — siempre',
              ],
            },
          ],
        },
      ],
    },
    {
      id: 's3',
      title: 'Los Errores Más Comunes',
      intro: {
        romanNumeral: 'III',
        title: 'Lo Que Se Puede Evitar Con Preparación',
        paragraphs: [
          'La mayoría de los problemas con los discursos no son de talento — son de hábitos que se pueden cambiar. Conocerlos antes de subir al púlpito es la mitad de la solución.',
        ],
      },
      topics: [
        {
          id: 't6',
          title: 'Los Cinco Errores Más Frecuentes',
          blocks: [
            {
              type: 'compare_grid',
              left: {
                label: 'Error frecuente',
                points: [
                  'Leer del teléfono sin mirar a la congregación',
                  'Hablar más de 12 minutos cuando te pidieron 8',
                  'Contar solo historias personales sin doctrina ni escrituras',
                  'Empezar diciendo "no estoy preparado" o "soy muy nervioso"',
                  'Hablar tan bajo o tan rápido que nadie puede seguirte',
                ],
              },
              right: {
                label: 'La corrección',
                points: [
                  'Usa notas en papel o conoce el discurso lo suficiente para levantar la vista',
                  'Practica en voz alta y cronométrate — siempre es más largo de lo que crees',
                  'Cada historia debe ir acompañada de la verdad que ilustra',
                  'La congregación quiere que te vaya bien — empieza con confianza, no con disculpas',
                  'Habla más despacio de lo que te parece natural — el silencio da peso a las palabras',
                ],
              },
            },
            {
              type: 'reflection',
              prompt: '¿Cuál de estos errores reconoces más en ti mismo? ¿Qué puedes hacer diferente la próxima vez que te asignen un discurso — antes de subir al púlpito?',
            },
            {
              type: 'note_prompts',
              prompts: [
                { id: 'np1', question: 'Escribe en una oración la idea más importante que quieres que alguien lleve al hogar de tu próximo discurso. ¿Toda tu preparación apunta a esa idea?' },
                { id: 'np2', question: '¿Cuál es la experiencia personal más relevante que tienes sobre tu tema? ¿Cómo la conectarías con una escritura?' },
              ],
            },
          ],
        },
      ],
    },
  ],
}
