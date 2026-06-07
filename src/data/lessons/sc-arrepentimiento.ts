import type { Lesson } from '@/types/doctrine'

export const scArrepentimiento: Lesson = {
  id: 'sc-arrepentimiento',
  moduleId: 'la-santa-cena',
  title: 'La Santa Cena y el Arrepentimiento',
  subtitle: 'El mecanismo semanal de acceso a la misericordia de Cristo',
  description:
    'La Santa Cena no es para los que no han pecado esta semana — es para los que sí han pecado y desean renovar su convenio. Esta lección explora la remisión semanal de pecados, qué significa realmente ser "indigno", y cómo prepararse durante la semana para ese momento del domingo.',
  level: 'BÁSICO',
  icon: '🤍',
  duration: 35,
  order: 4,
  status: 'PUBLISHED',
  studyBodyPlain: '',
  originalBodyPlain: '',
  previousLessonId: null,
  nextLessonId: null,
  studySections: [
    {
      id: 's1',
      title: 'La Remisión Semanal de Pecados',
      intro: {
        romanNumeral: 'I',
        title: 'La Remisión Semanal de Pecados',
        paragraphs: [
          'El bautismo lava los pecados de una vez. La Santa Cena renueva esa limpieza cada semana. Es el mecanismo más frecuente — y más accesible — de acceso a la Expiación de Cristo.',
        ],
      },
      topics: [
        {
          id: 'remision',
          title: 'Acceso semanal a la Expiación',
          subtitle:
            'No necesitamos esperar años para saber que nuestros pecados son perdonados. La remisión puede renovarse cada domingo. Esa es la majestad de esta ordenanza.',
          blocks: [
            {
              type: 'paragraph',
              text: 'En el bautismo, cada miembro recibió la remisión de sus pecados pasados. Pero la vida continúa — y con ella, las caídas, las tentaciones, los fracasos diarios. ¿Qué mecanismo diseñó el Señor para los pecados que cometemos después del bautismo? La respuesta más profunda de la doctrina restaurada es la Santa Cena semanal.',
              blockId: 'sc4s1p0',
            },
            {
              type: 'highlight_verse',
              text: '"Y todos los que se arrepientan y se bauticen en el nombre de Jesucristo, y perseveren en la fe hasta el fin, recibirán la remisión de sus pecados."',
              reference: 'Doctrina y Convenios 20:25',
            },
            {
              type: 'leader_quote',
              quote:
                'Si participamos de la Santa Cena semanalmente con un corazón verdaderamente arrepentido y un sincero propósito de guardar los mandamientos, no necesitamos esperar años para saber que nuestros pecados son perdonados. La remisión puede ser renovada cada domingo. Esa es la majestad de esta ordenanza: el acceso constante a la misericordia de Cristo.',
              name: 'Élder David A. Bednar · "Siempre retener una remisión de vuestros pecados" · Conferencia General, abril 2016',
            },
            {
              type: 'doctrine_box',
              title: 'El ciclo semanal de gracia',
              body: 'Lunes a sábado: vivimos, fallamos, tentamos, caemos, nos arrepentimos — o intentamos hacerlo. El domingo: renovamos el convenio, prometemos de nuevo, y recibemos la promesa del Espíritu. Lunes: comenzamos con ese Espíritu como compañero. Este es el ciclo que el Señor diseñó — no para que vivamos en culpa permanente, sino para que tengamos un punto de reinicio semanal. La Santa Cena no es el final del arrepentimiento — es la puerta de regreso a la gracia cada semana.',
            },
            {
              type: 'highlight_verse',
              text: '"Si confesamos nuestros pecados, él es fiel y justo para perdonar nuestros pecados, y limpiarnos de toda maldad."',
              reference: '1 Juan 1:9',
            },
            {
              type: 'reflection',
              prompt:
                '¿Usas la semana para prepararte para la Santa Cena del domingo, o solo piensas en ella cuando ya estás en la reunión? ¿Qué cambiaría si comenzaras el martes a reflexionar en qué convenios quieres renovar el próximo domingo?',
            },
          ],
        },
      ],
    },
    {
      id: 's2',
      title: 'Indigno vs. Imperfecto',
      intro: {
        romanNumeral: 'II',
        title: 'Indigno vs. Imperfecto',
        paragraphs: [
          'Una de las confusiones más dañinas en la doctrina de la Santa Cena: muchos santos se abstienen por sentirse "imperfectos." Pero "indigno" e "imperfecto" no son lo mismo — y esa confusión ha alejado a personas honestas de una ordenanza que las necesita.',
        ],
      },
      topics: [
        {
          id: 'indigno',
          title: '¿Qué significa "comer indignamente"?',
          subtitle:
            'Pablo advirtió en 1 Corintios 11. El Señor fue preciso en 3 Nefi 18. "Indigno" tiene un significado específico — y no es ser imperfecto.',
          blocks: [
            {
              type: 'highlight_verse',
              text: '"Por tanto, pruébese cada uno a sí mismo, y coma así del pan, y beba de la copa. Porque el que come y bebe indignamente, sin discernir el cuerpo del Señor, juicio come y bebe para sí."',
              reference: '1 Corintios 11:28–29',
            },
            {
              type: 'paragraph',
              text: '"Sin discernir el cuerpo del Señor" — esta frase es la clave. Pablo no dice "sin ser perfecto." Dice "sin discernir" — sin reconocer qué es lo que se está tomando, sin honestidad de corazón sobre lo que se está prometiendo. La indignidad no es la imperfección humana inevitable. Es la deshonestidad deliberada.',
              blockId: 'sc4s2p0',
            },
            {
              type: 'key_points',
              title: '¿Cuándo abstenerse de la Santa Cena?',
              points: [
                '⚠️ Transgresiones graves sin resolver — El obispo puede restringir formalmente hasta que haya arrepentimiento genuino y reconciliación. Este es un proceso de curación, no de castigo.',
                '🤔 Cuando no puedes hacer un convenio sincero — Si sabes que no vas a intentar guardar los mandamientos esta semana, la honestidad requiere abstención temporal. El convenio exige sinceridad.',
                '✅ NO por "no ser perfecto" — Todos fallamos. El convenio no dice "seré perfecto." Dice "guardaré sus mandamientos." El intento sincero y honesto es suficiente para recibir dignamente.',
                '📖 DyC 46:4–5 — "No desecharéis de vuestros servicios sacramentales a nadie que sinceramente esté buscando el reino." El sincero buscador — con dudas, con heridas, con fallos — siempre es bienvenido.',
              ],
            },
            {
              type: 'leader_quote',
              quote:
                'La dignidad para recibir la Santa Cena no es la perfección — es la honestidad de corazón. El que viene con un espíritu contrito y un genuino propósito de enmienda puede acercarse con confianza al trono de la gracia. El que participa fingiendo un convenio que no tiene intención de guardar, ese come y bebe condenación para sí mismo.',
              name: 'Presidente Dallin H. Oaks · "La Santa Cena y la Expiación" · Conferencia General, octubre 2015',
            },
            {
              type: 'compare_grid',
              title: 'Imperfecto vs. Indigno',
              columns: ['', 'Imperfecto', 'Indigno'],
              rows: [
                ['Condición', 'Todos los seres mortales (Romanos 3:23)', 'El que participa sin discernir ni honrar el convenio'],
                ['Santa Cena', 'Debe recibirla con arrepentimiento sincero', 'Debe abstenerse hasta reconciliarse'],
                ['Actitud', 'Voy sabiendo que fallé y quiero hacer mejor', 'Voy sin intención real de cambiar'],
                ['Resultado', 'Renovación, gracia, promesa del Espíritu', '"Juicio come y bebe para sí" (1 Cor 11:29)'],
              ],
            },
            {
              type: 'reflection',
              prompt:
                '¿Alguna vez te has abstenido de la Santa Cena por sentirte "no suficientemente bueno"? ¿Qué enseñan estas escrituras sobre ese sentimiento? ¿Qué diferencia hace entender que imperfecto no es lo mismo que indigno?',
            },
          ],
        },
      ],
    },
    {
      id: 's3',
      title: 'El Sábado como Preparación',
      intro: {
        romanNumeral: 'III',
        title: 'El Sábado como Preparación',
        paragraphs: [
          'La Santa Cena no comienza cuando nos sentamos en la reunión. El Presidente Nelson enseñó que comienza la noche del sábado — y que el domingo entero es el contexto de esta ordenanza.',
        ],
      },
      topics: [
        {
          id: 'sabado',
          title: 'Prepararse para renovar el convenio',
          subtitle:
            'Un convenio no se firma de improviso. Llegar preparado al domingo transforma la Santa Cena de un trámite en el clímax de una semana de discipulado.',
          blocks: [
            {
              type: 'highlight_verse',
              text: '"Y para que más íntegramente te conserves sin mancha del mundo, irás a la casa de oración y ofrecerás tus sacramentos en mi día santo."',
              reference: 'Doctrina y Convenios 59:9',
            },
            {
              type: 'paragraph',
              text: 'El Señor llama al domingo "mi día santo." En ese día, la ordenanza central es la Santa Cena. El sábado es el umbral que nos lleva a ese día: el tiempo de revisión personal, de oración, de propósito de enmienda. Los que llegan al domingo preparados reciben la Santa Cena de manera cualitativamente diferente.',
              blockId: 'sc4s3p0',
            },
            {
              type: 'steps',
              title: 'El ciclo completo del convenio semanal',
              steps: [
                'Domingo — La Santa Cena: renuevas el convenio, recibes la promesa del Espíritu, comienzas la semana con gracia renovada.',
                'Lunes–viernes — La vida real: tomas decisiones, fallas en algunas, te arrepientes, usas el Espíritu prometido para guiarte en lo ordinario.',
                'Sábado — La preparación: reflexión personal, revisión honesta de la semana, propósito de enmienda, guardar el día como sagrado.',
                'Sábado por la noche — Preguntas de preparación: ¿Qué convenio necesito renovar más esta semana? ¿Qué quiero pedirle al Señor durante la Santa Cena mañana?',
                'Domingo — La Santa Cena de nuevo: llegas con un corazón preparado, no de improviso. El convenio se renueva con plenitud de intención.',
              ],
            },
            {
              type: 'leader_quote',
              quote:
                'Cuando comprendemos que el día de reposo pertenece al Señor y decidimos actuar de acuerdo a esa comprensión, la Santa Cena se convierte en el clímax de una semana de discipulado, no en un trámite del domingo.',
              name: 'Presidente Russell M. Nelson · "Domingo: El mejor día de la semana" · Conferencia General, abril 2015',
            },
            {
              type: 'reflection',
              prompt:
                '¿Cómo utilizas el sábado actualmente? ¿Llegas al domingo preparado para la Santa Cena o llegas de improviso? ¿Qué cambio concreto podrías hacer este sábado para que el próximo domingo sea diferente?',
            },
          ],
        },
      ],
    },
  ],
}
