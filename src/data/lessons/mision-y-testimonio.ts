import type { Lesson } from '@/types/doctrine'

export const misionYTestimonio: Lesson = {
  id: 'mision-y-testimonio',
  moduleId: 'lideres-misioneros',
  title: 'Misión y Testimonio',
  subtitle: 'Proclamar con claridad y amor',
  author: 'Fuentes principales: DyC 4, 18, 100; Moroni 10:4-5; 2 Nefi 33',
  description:
    'El mandamiento de compartir el evangelio no es opcional. DyC 18:15-16 establece el valor de una sola alma. Moroni 10:4-5 da la metodología del testimonio. DyC 100 y 2 Nefi 33 explican el papel del Espíritu en la enseñanza efectiva.',
  level: 'INTERMEDIO',
  icon: '📣',
  duration: 60,
  order: 2,
  status: 'PUBLISHED',
  studyBodyPlain: '',
  originalBodyPlain: '',
  previousLessonId: null,
  nextLessonId: null,
  studySections: [
    {
      id: 's1',
      title: 'El Valor de una Sola Alma',
      intro: {
        romanNumeral: 'I',
        title: 'El Valor de una Sola Alma',
        paragraphs: [
          'Hay una pregunta que el Señor hace implícitamente en DyC 18: ¿sabes cuánto vale una sola alma? No una congregación. No un número estadístico de conversiones. Una sola alma. La respuesta que da establece el fundamento de toda misión y todo testimonio.',
        ],
      },
      topics: [
        {
          id: 't1',
          title: '¿Cuánto Vale una Sola Alma?',
          blocks: [
            {
              type: 'highlight_verse',
              text: 'Recuerda que el valor de las almas es grande a los ojos de Dios; porque he aquí, el Señor tu Redentor sufrió la muerte en la carne; por tanto sufrió el dolor de todos los hombres, para que todos los hombres se arrepintieran y viniesen a él.',
              reference: 'Doctrina y Convenios 18:10–11',
            },
            {
              type: 'highlight_verse',
              text: 'Y si aconteciere que trabajareis todos vuestros días y le trajeres, si no más que una sola alma a mí, ¡cuán grande será vuestro gozo con ella en el reino de mi Padre!',
              reference: 'Doctrina y Convenios 18:15–16',
            },
            {
              type: 'doctrine_box',
              title: 'El evangelio fue restaurado para llenarse la tierra',
              body: 'DyC 4:1 dice: "He aquí, se presenta una obra maravillosa e imponente." El evangelio restaurado no fue dado para ser guardado en privado — fue restaurado para llenarse la tierra. Cada bautizado lleva una parte de esa responsabilidad. No como obligación ansiosa, sino como oportunidad: si has encontrado algo que transformó tu vida, que dio sentido a tu sufrimiento y esperanza a tu futuro, ¿cómo podrías no compartirlo?',
            },
            {
              type: 'media_slot',
              kind: 'image',
              src: undefined,
              caption: 'La obra misional lleva el mensaje del evangelio a toda nación, tribu y lengua.',
              contextCard: { year: '1830 →', place: 'Toda nación, tribu y lengua', label: 'Obra Misional' },
            },
            {
              type: 'highlight_verse',
              text: 'Por tanto, oh vosotros que os embarcáis en el servicio de Dios, ved que le sirváis con todo vuestro corazón, poder, mente y fuerza, a fin de que estéis al final del día sin culpa ante Dios.',
              reference: 'Doctrina y Convenios 4:2',
            },
          ],
        },
      ],
    },
    {
      id: 's2',
      title: 'Cultivar el Propio Testimonio Primero',
      intro: {
        romanNumeral: 'II',
        title: 'Cultivar el Propio Testimonio Primero',
        paragraphs: [
          'Los hijos de Mosías son el ejemplo por excelencia del misionero preparado. Antes de salir al campo lamanita — uno de los contextos misioneros más desafiantes del Libro de Mormón — hicieron algo específico que explica su éxito extraordinario.',
        ],
      },
      topics: [
        {
          id: 't2',
          title: 'El Secreto de los Hijos de Mosías',
          blocks: [
            {
              type: 'highlight_verse',
              text: 'Eran hombres de sano entendimiento y habían escudriñado diligentemente las escrituras a fin de conocer la palabra de Dios. Mas esto no es todo; habían entregado mucho tiempo a la oración y al ayuno; por lo tanto tenían el espíritu de profecía y el espíritu de revelación, y cuando enseñaban, enseñaban con el poder y la autoridad de Dios.',
              reference: 'Alma 17:2–3',
            },
            {
              type: 'paragraph',
              text: 'Antes de que Amón convirtiera al rey Lamoni, antes de que los hijos de Mosías bautizaran a miles de lamanitas, hicieron cosas ordinarias: estudiaron las escrituras diligentemente, oraron, y ayunaron. El poder de su misión no fue un don repentino — fue el resultado de años de preparación espiritual consistente. Cualquier misionero, formal o informal, puede seguir el mismo patrón.',
              blockId: 'mt-s2-p-0',
            },
            {
              type: 'highlight_verse',
              text: 'Busca diligentemente, enseña con rectitud y con el Espíritu Santo, y tendrás los conocimientos y la sabiduría necesarios.',
              reference: 'Doctrina y Convenios 11:21',
            },
            {
              type: 'key_points',
              title: 'Cómo fortalecer el testimonio antes de compartirlo',
              points: [
                'Estudio diario de las escrituras — no como información sino como conversación con Dios',
                'Oración con pregunta real — pedir confirmación específica de verdades que quieres compartir',
                'Ayuno con propósito misional — los hijos de Mosías ayunaban por sus investigadores',
                'Aplicación antes de enseñar — el testimonio de algo que funciona en tu vida tiene un poder diferente al testimonio teórico',
                'Registro de experiencias espirituales — un diario de manifestaciones del Espíritu construye la certeza acumulativa',
              ],
            },
            {
              type: 'leader_quote',
              quote: 'Hay una diferencia profunda entre enseñar sobre Cristo y testificar de Cristo. Puedes enseñar sobre alguien que no conoces. Solo puedes testificar de alguien que has encontrado personalmente. El poder del testimonio no viene del volumen de las palabras sino de la realidad de la experiencia.',
              name: 'Elder David A. Bednar',
              role: '"Becoming a Missionary", Conferencia General, octubre 2005 (trad.)',
            },
          ],
        },
      ],
    },
    {
      id: 's3',
      title: 'Cómo Hablar con el Espíritu',
      intro: {
        romanNumeral: 'III',
        title: 'Cómo Hablar con el Espíritu',
        paragraphs: [
          'El evangelio se puede enseñar de dos maneras: con el Espíritu, y sin él. La diferencia no está en cuánto sabe el maestro ni en cuán elocuente es — está en si el mensaje llega al corazón o solo a los oídos.',
        ],
      },
      topics: [
        {
          id: 't3',
          title: 'El Espíritu Como Maestro Real',
          blocks: [
            {
              type: 'highlight_verse',
              text: 'Y el Espíritu se os dará mediante la oración de la fe; y si no recibís el Espíritu, no enseñaréis.',
              reference: 'Doctrina y Convenios 42:14',
            },
            {
              type: 'highlight_verse',
              text: 'Y yo, Nefi, no pude escribir todas las cosas que enseñé entre mi pueblo; ni soy poderoso en la escritura como en el hablar; porque cuando un hombre habla por el poder del Espíritu Santo, el poder del Espíritu Santo lleva las palabras de Cristo al corazón de los hijos de los hombres.',
              reference: '2 Nefi 33:1',
            },
            {
              type: 'steps',
              title: 'Tres principios para enseñar con el Espíritu',
              steps: [
                'ESCUCHAR PRIMERO — El Espíritu enseña según las necesidades del oyente. Antes de enseñar lo que preparaste, descubre qué necesita escuchar la persona que tienes delante.',
                'TESTIFICAR, NO SOLO EXPLICAR — Explicar una doctrina da información. Testificar de lo que el Espíritu te ha confirmado da poder. La diferencia la siente el oyente.',
                'CONFIAR EN EL ESPÍRITU PARA COMPLETAR — Tu tarea es plantar la semilla y abrirte. El Espíritu lleva las palabras al corazón (2 Nefi 33:1). No puedes forzar la conversión — pero puedes ser un canal limpio.',
              ],
            },
            {
              type: 'doctrine_box',
              title: 'Diferencia entre explicar y testificar',
              body: 'Explicar: "La expiación funciona así según Alma 42..." Testificar: "Yo sé que la expiación es real porque cuando me arrepentí de [algo específico], el Espíritu me mostró que el perdón era posible." El primero informa. El segundo convida al oyente a tener su propia experiencia. Los investigadores no necesitan más información — necesitan razón para buscar su propia experiencia espiritual.',
            },
            {
              type: 'highlight_verse',
              text: 'Y acordaos de las cosas que os he dicho; pues he aquí, si tratáis la verdad con diligencia, siguiendo el ejemplo que os he dado, cuanto preguntéis el Padre en mi nombre será dado a vosotros. Y esto si pedís con fe creyendo que recibiréis.',
              reference: 'Doctrina y Convenios 50:21–22',
            },
            {
              type: 'leader_quote',
              quote: 'Un testimonio no se gana con debate, ni se protege con silencio. Se gana arrodillándose y pidiendo, y se fortalece compartiéndolo. Cada vez que alguien comparte su testimonio — sin importar cuán simple sea — el Espíritu lo confirma de nuevo.',
              name: 'Jeffrey R. Holland',
              role: '"Missionary Work and the Atonement", Ensign, marzo 2001 (trad.)',
            },
          ],
        },
      ],
    },
    {
      id: 's4',
      title: 'Cómo Manejar Preguntas Difíciles',
      intro: {
        romanNumeral: 'IV',
        title: 'Cómo Manejar Preguntas Difíciles',
        paragraphs: [
          'Toda persona que comparte el evangelio eventualmente enfrentará preguntas para las cuales no tiene respuesta. Cómo reaccionas en ese momento dice más sobre tu testimonio que cualquier respuesta correcta que pudieras dar.',
        ],
      },
      topics: [
        {
          id: 't4',
          title: 'La Respuesta Honesta',
          blocks: [
            {
              type: 'highlight_verse',
              text: 'Buscad diligentemente en la luz de Cristo que está en vuestro interior para conocer la diferencia entre el bien y el mal; y si lo hacéis con sinceridad de corazón, y os rendís al Espíritu, podréis saber acerca de toda cosa.',
              reference: 'Doctrina y Convenios 6:7',
            },
            {
              type: 'compare_grid',
              left: {
                title: 'Respuesta defensiva',
                items: [
                  '"No existe ese problema"',
                  'Cambiar el tema rápidamente',
                  'Dar una respuesta que no convence ni al que habla',
                  'Sentirse amenazado por la pregunta',
                  'Concluir que el investigador tiene mala fe',
                ],
              },
              right: {
                title: 'Respuesta genuina',
                items: [
                  '"Es una pregunta importante. Yo también la he tenido."',
                  'Escuchar completamente antes de responder',
                  'Distinguir lo que sabes de lo que no sabes',
                  'Decir "no sé, pero sé esto" y testificar de lo que sí sabes',
                  'Invitar a buscar la respuesta juntos',
                ],
              },
            },
            {
              type: 'deep_dive',
              badge: 'Principio clave',
              title: 'El poder de "no sé, pero sí sé esto"',
              paragraphs: [
                'Los investigadores y miembros con preguntas no necesitan que tengas respuesta para todo. Necesitan ver que tu testimonio no depende de tener respuesta para todo.',
                'Cuando alguien hace una pregunta difícil, la respuesta más poderosa frecuentemente es: "No tengo respuesta completa para esa pregunta. Pero sé que [algo concreto que has experimentado]. Y eso es suficiente para mí." Eso es más convincente que una respuesta apologética que no te convence ni a ti.',
                'El presidente Uchtdorf ha enseñado que la Iglesia no pide ignorar preguntas — pide traerlas en la bolsa de viaje y seguir caminando. La fe no exige resolución de cada duda antes de poder comprometerse.',
              ],
            },
            {
              type: 'leader_quote',
              quote: 'Si hay algo en la historia de la Iglesia, en su doctrina, o en sus políticas que te causa preguntas o dudas, te invito a acercarte, no a alejarte. No tienes que resolver cada pregunta para confiar en Cristo.',
              name: 'Dieter F. Uchtdorf',
              role: '"Come, Join with Us", Conferencia General, octubre 2013 (trad.)',
            },
          ],
        },
      ],
    },
    {
      id: 's5',
      title: 'La Promesa al Misionero',
      intro: {
        romanNumeral: 'V',
        title: 'La Promesa al Misionero',
        paragraphs: [
          'Los hijos de Mosías partieron a la misión más peligrosa de su tiempo — la tierra lamanita. Antes de partir, algo pasó con ellos que explica cómo sobrevivieron y prosperaron. Y la misma promesa está disponible para todo misionero hoy.',
        ],
      },
      topics: [
        {
          id: 't5',
          title: 'El Misionero Cambia Antes que el Investigador',
          blocks: [
            {
              type: 'highlight_verse',
              text: 'Y he aquí, no podría soportar que un alma humana se perdiera; sí, y doloroso era el pensamiento de que un hombre fuese al juicio eterno, de no haber escuchado las palabras de Cristo; pues así de grande era el deseo de mi alma, de modo que ojalá pudiera yo ser el instrumento de la salvación de muchas almas.',
              reference: 'Mosiah 28:3',
            },
            {
              type: 'highlight_verse',
              text: 'Oh, ojalá fuera un ángel y pudiera tener el deseo de mi corazón, de que clamara arrepentimiento a todo pueblo. Sí, yo diría con la voz del trueno arrepentimiento para que toda nación se despertara y viese sus obras y las contemplara.',
              reference: 'Alma 29:1',
            },
            {
              type: 'paragraph',
              text: 'Cuando Alma desea ser un ángel, el Espíritu lo corrige inmediatamente: no necesitas ser un ángel. Necesitas hacer tu parte en el lugar y tiempo que Dios te asignó. La mayor lección de la misión no es cuántas personas conviertes — es en quién te conviertes tú durante el proceso. Los misioneros más efectivos son los que regresan como personas diferentes, no solo como personas que reclutaron.',
              blockId: 'mt-s5-p-0',
            },
            {
              type: 'key_points',
              title: 'Lo que la misión le hace al misionero',
              points: [
                'Profundiza el testimonio personal — enseñar obliga a saber qué crees y por qué',
                'Desarrolla compasión por personas fuera de tu círculo cultural y social',
                'Entrena la dependencia del Espíritu bajo presión — las circunstancias difíciles obligan a orar de verdad',
                'Forja disciplina espiritual que persiste después de la misión',
                'Confirma que el evangelio es verdadero porque lo ves funcionar en vidas reales',
              ],
            },
            {
              type: 'central_quote',
              text: 'Esta no es obra de hombres. Ningún hombre inventó esto. Ningún hombre podría sostenerlo. Lo que estáis haciendo fue diseñado por Dios para esta hora.',
              attribution: 'Profeta José Smith · Historia de la Iglesia, vol. 4, p. 540 (paráfrasis)',
            },
          ],
        },
      ],
    },
    {
      id: 's6',
      title: 'Aplicación y Reflexión',
      intro: {
        romanNumeral: 'VI',
        title: 'Aplicación y Reflexión',
        paragraphs: [
          'El testimonio no es algo que se tiene o no se tiene — es algo que se cultiva, se ejercita, y se comparte. Estas preguntas y ejercicios están diseñados para pasar de la doctrina a la práctica.',
        ],
      },
      topics: [
        {
          id: 't6',
          title: 'De la Doctrina a la Práctica',
          blocks: [
            {
              type: 'reflection',
              prompt: '¿Cuándo fue la última vez que compartiste tu testimonio con alguien fuera de la Iglesia? ¿Hay alguien en tu vida ahora mismo que podría beneficiarse de conocer lo que tú has encontrado? ¿Qué específicamente te detiene?',
            },
            {
              type: 'quiz',
              id: 'q-1', question: { kind: 'fill_blank',
                prompt: 'Según Alma 17:2–3, el secreto del poder misionero de los hijos de Mosías fue que "habían escudriñado diligentemente las ___ a fin de conocer la palabra de Dios."',
                options: ['enseñanzas de los profetas', 'escrituras', 'revelaciones modernas', 'crónicas de guerra'],
                correctIndex: 1,
                explanation: 'Alma 17:2–3 atribuye el poder de los hijos de Mosías al estudio diligente de las escrituras, combinado con oración y ayuno. Su poder no fue un don instantáneo sino el resultado de preparación consistente.',
              },
            },
            {
              type: 'quiz',
              id: 'q-2', question: {
                kind: 'fill_blank',
                prompt: 'DyC 42:14 enseña que si no recibes el ___, no debes enseñar.',
                options: ['llamamiento', 'Espíritu', 'permiso', 'conocimiento completo'],
                correctIndex: 1,
                explanation: 'DyC 42:14 es directo: "si no recibís el Espíritu, no enseñaréis." El Espíritu no es un complemento opcional a la enseñanza — es el requisito fundamental.',
              },
            },
            {
              type: 'quiz',
              id: 'q-3', question: {
                kind: 'fill_blank',
                prompt: 'Según 2 Nefi 33:1, cuando un hombre habla por el poder del Espíritu Santo, ese poder lleva las palabras de Cristo al ___ de los hijos de los hombres.',
                options: ['entendimiento', 'corazón', 'recuerdo', 'juicio'],
                correctIndex: 1,
                explanation: '2 Nefi 33:1 distingue entre palabras que van a los oídos y palabras que van al corazón. El Espíritu es el que lleva el mensaje al corazón — ningún maestro puede hacer eso por sus propias capacidades.',
              },
            },
          ],
        },
      ],
    },
  ],
}
