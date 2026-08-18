import type { Lesson } from '@/types/doctrine'

export const comoDarUnTestimonio: Lesson = {
  id: 'como-dar-un-testimonio',
  moduleId: 'vida-familiar-personal',
  title: 'Cómo Dar un Testimonio',
  subtitle: 'El día de ayuno y testimonio — qué decir y cómo decirlo',
  description:
    'Muchos miembros confunden compartir un testimonio con contar una historia o dar un sermón. Esta lección explica qué ES un testimonio, qué NO es, cómo estructurarlo en 2-3 minutos, y cómo vencer el miedo a levantarte por primera vez.',
  level: 'BÁSICO',
  icon: '🕊️',
  duration: 15,
  order: 7,
  status: 'PUBLISHED',
  studyBodyPlain: '',
  originalBodyPlain: '',
  studySections: [
    {
      id: 's1',
      title: 'Qué ES y Qué NO ES un Testimonio',
      intro: {
        romanNumeral: 'I',
        title: 'La Diferencia que Pocos Conocen',
        paragraphs: [
          'La reunión de ayuno y testimonio es una de las más sagradas del mes. Pero también es la que más frecuentemente se malentiende. La confusión más común: pensar que compartir experiencias, contar viajes o expresar gratitud es dar un testimonio.',
        ],
      },
      topics: [
        {
          id: 't1',
          title: 'La Definición Que Lo Cambia Todo',
          blocks: [
            {
              type: 'central_quote',
              text: 'Un testimonio consiste en declarar verdades conocidas, no relatar experiencias personales. Compartir impresiones espirituales, experiencias de servicio o expresar gratitud son cosas valiosas, pero no son un testimonio.',
              attribution: 'Élder Dallin H. Oaks, Conferencia General',
            },
            {
              type: 'compare_grid',
              left: {
                label: 'Esto NO es un testimonio',
                points: [
                  'Contar las vacaciones donde sentiste el Espíritu',
                  'Agradecer a tu familia, líderes o amigos',
                  'Dar un sermón sobre un principio del evangelio',
                  'Describir una respuesta a tus oraciones',
                  'Hacer un anuncio disfrazado de testimonio',
                ],
              },
              right: {
                label: 'Esto SÍ es un testimonio',
                points: [
                  '"Sé que Dios vive y que nos ama."',
                  '"Testigo de que Jesucristo es el Salvador."',
                  '"Sé que el Libro de Mormón es la palabra de Dios."',
                  '"Sé que José Smith fue un profeta de Dios."',
                  '"Sé que esta es la Iglesia verdadera del Salvador."',
                ],
              },
            },
            {
              type: 'paragraph',
              text: 'Puedes incluir una breve experiencia SI ilustra la verdad que declaras — pero la experiencia nunca es el testimonio en sí. El testimonio es la declaración. La experiencia es, a lo mucho, el contexto que la hace personal.',
            },
            {
              type: 'key_points',
              points: [
                'Un testimonio es una declaración de lo que SABES o CREES — no de lo que viviste',
                '2 a 3 minutos es el tiempo apropiado — más no es mejor, es menos',
                'La reunión de ayuno y testimonio es para testimonios, no para sermones improvisados',
                'Los niños también pueden compartir testimonios — simples y directos son los más poderosos',
                'No hay que tener un testimonio "perfecto" para compartirlo — compartirlo lo fortalece',
              ],
            },

            {
              type: 'media_slot',
              kind: 'image',
              src: '/assets/modules/vida-familiar-personal/lessons/como-dar-un-testimonio/01-testimonio-sincero.webp',
              alt: 'Una mujer expresa con serenidad su testimonio ante una congregación atenta.',
              caption: 'Un testimonio es una declaración sencilla y sincera de la verdad recibida por el Espíritu.',
            },
          ],
        },
      ],
    },
    {
      id: 's2',
      title: 'Cómo Estructurar un Testimonio Sólido',
      intro: {
        romanNumeral: 'II',
        title: 'Tres Partes, Dos Minutos, Una Verdad',
        paragraphs: [
          'Un testimonio efectivo no necesita ser largo ni elocuente — necesita ser real. La estructura más poderosa es también la más simple.',
        ],
      },
      topics: [
        {
          id: 't2',
          title: 'La Estructura de Tres Partes',
          blocks: [
            {
              type: 'doctrine_box',
              title: 'Las tres partes de un testimonio que edifica',
              body: '(1) DECLARACIÓN DIRECTA — Empieza con "Sé que..." o "Quiero declarar que..." seguido de una verdad concreta del evangelio. No esperes hasta el final para decir lo que crees — dilo primero.\n\n(2) POR QUÉ PERSONAL (breve, opcional) — Una oración o dos que expliquen brevemente por qué sabes lo que declaras. Una escritura, una experiencia concreta, o un momento específico.\n\n(3) CIERRE — Una expresión breve de amor o invitación, y terminar "En el nombre de Jesucristo, amén."',
            },
            {
              type: 'steps',
              title: 'Ejemplo concreto de un testimonio de 90 segundos',
              steps: [
                '"Hermanos, quiero compartir mi testimonio."',
                '"Sé que Jesucristo vive y que Su Expiación es real."',
                '"Esta semana, mientras leía 2 Nefi 2, entendí algo que no había comprendido antes: que sin Él, no habría gozo."',
                '"Les invito a leer ese capítulo esta semana."',
                '"Lo digo con amor, en el nombre de Jesucristo, amén."',
              ],
            },
            {
              type: 'highlight_verse',
              reference: 'Moroni 10:4–5',
              text: 'Y cuando recibáis estas cosas, quisiera exhortaros a que preguntéis a Dios, el Eterno Padre, en el nombre de Cristo, si no son verdaderas estas cosas; y si pedís con un corazón sincero, con verdadera intención, teniendo fe en Cristo, él os manifestará la verdad de ellas por el poder del Espíritu Santo.',
            },
            {
              type: 'paragraph',
              text: 'Moroni 10:4-5 no es solo la promesa del Libro de Mormón — es la descripción del proceso por el que cada testimonio nace: preguntar con sinceridad, recibir por el Espíritu, y luego declarar lo que se sabe. Compartir tu testimonio completa ese ciclo.',
            },

            {
              type: 'media_slot',
              kind: 'image',
              src: '/assets/modules/vida-familiar-personal/lessons/como-dar-un-testimonio/02-tres-partes-del-testimonio.webp',
              alt: 'Una mujer comparte una convicción personal mientras la luz alcanza a quienes la escuchan.',
              caption: 'La experiencia, la verdad doctrinal y el testimonio directo se unen para edificar a otros.',
            },
          ],
        },
        {
          id: 't3',
          title: 'Prepara Tu Testimonio Antes del Domingo',
          blocks: [
            {
              type: 'paragraph',
              text: 'La reunión de ayuno y testimonio no es para improvisar — es para declarar. Los mejores testimonios son los que se han pensado con anticipación. Eso no los hace menos auténticos; los hace más claros.',
            },
            {
              type: 'steps',
              title: 'Cómo prepararte durante la semana',
              steps: [
                'El jueves o viernes, identifica UNA verdad del evangelio que quieras declarar este domingo',
                'Escríbela en una oración directa que empiece con "Sé que..." o "Creo con todo mi corazón que..."',
                'Piensa en una experiencia breve o una escritura que la haga personal para ti',
                'Practica decirlo en voz alta — al espejo, en tu auto — para que el día de ayuno fluya',
                'El día de ayuno: levántate apenas el micrófono esté disponible — no esperes "el momento perfecto"',
              ],
            },

            {
              type: 'media_slot',
              kind: 'image',
              src: '/assets/modules/vida-familiar-personal/lessons/como-dar-un-testimonio/03-preparar-el-testimonio.webp',
              alt: 'Una joven ora junto a un cuaderno y unas Escrituras abiertas durante su preparación personal.',
              caption: 'Prepararse durante la semana ayuda a expresar con claridad lo que el Espíritu ya ha confirmado.',
            },
          ],
        },
      ],
    },
    {
      id: 's3',
      title: 'Cómo Levantarte y Hablar',
      intro: {
        romanNumeral: 'III',
        title: 'El Testimonio Se Fortalece al Compartirlo',
        paragraphs: [
          'El mayor obstáculo para compartir un testimonio no es no saber qué decir — es el miedo a levantarse. Y ese miedo tiene un solo antídoto: levantarte.',
        ],
      },
      topics: [
        {
          id: 't4',
          title: 'Vencer el Miedo a Subir al Micrófono',
          blocks: [
            {
              type: 'central_quote',
              text: 'La manera de adquirir un testimonio es declararlo. No te quedes esperando tener un testimonio perfecto antes de compartirlo. Compártelo y crecerá.',
              attribution: 'Presidente Spencer W. Kimball',
            },
            {
              type: 'paragraph',
              text: 'La mayoría espera sentir algo antes de levantarse. Kimball enseñó exactamente lo contrario: el sentimiento viene después de levantarse, no antes. El primer paso siempre es físico — ponerse de pie — y el Espíritu hace el resto.',
            },
            {
              type: 'steps',
              title: 'Los pasos concretos del día de ayuno',
              steps: [
                'Decide antes de llegar a la capilla que vas a compartir tu testimonio hoy',
                'Cuando el obispo abra la reunión, identifica cuándo el micrófono quedará disponible',
                'Levántate apenas lo esté — no esperes "el momento perfecto" porque no existe',
                'Camina con calma al micrófono, respira, y empieza: "Hermanos..." o "Quiero compartir mi testimonio"',
                'Di lo que preparaste — con sencillez y claridad',
                'Termina con "En el nombre de Jesucristo, amén" y regresa a tu asiento',
              ],
            },
            {
              type: 'reflection',
              prompt: '¿Cuál es la verdad del evangelio de la que estás más seguro ahora mismo — la que sabes con certeza? Escríbela en una oración que empiece con "Sé que..." Ese es tu testimonio para el próximo día de ayuno.',
            },
            {
              type: 'note_prompts',
              prompts: [
                { id: 'np1', question: '¿Cuándo fue la última vez que compartiste tu testimonio en la reunión de ayuno? ¿Qué te ha impedido hacerlo si ha pasado mucho tiempo?' },
                { id: 'np2', question: 'Escribe el testimonio completo que compartirías este domingo — en 5 oraciones o menos. Guárdalo en tu teléfono para tenerlo listo.' },
              ],
            },

            {
              type: 'media_slot',
              kind: 'image',
              src: '/assets/modules/vida-familiar-personal/lessons/como-dar-un-testimonio/04-vencer-el-miedo.webp',
              alt: 'Un joven camina desde su asiento hacia un micrófono con el apoyo silencioso de la congregación.',
              caption: 'El valor para compartir el testimonio crece cuando damos el primer paso y nos levantamos.',
            },
          ],
        },
      ],
    },
  ],
}
