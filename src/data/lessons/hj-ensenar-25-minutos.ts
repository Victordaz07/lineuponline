import type { Lesson } from '@/types/doctrine'

export const hjEnsenar25Minutos: Lesson = {
  id: 'hj-ensenar-25-minutos',
  moduleId: 'capacitacion-liderazgo',
  title: 'Enseñar en 25 Minutos',
  subtitle: 'El formato doctrina → principio → aplicación',
  description:
    'Veinticinco minutos es poco tiempo y suficiente tiempo. El formato doctrina → principio → aplicación da estructura al espíritu: empieza con lo que Dios ha declarado, pasa a lo que eso significa para la vida real, y termina con una decisión concreta. Este es el arte de enseñar con propósito.',
  level: 'INTERMEDIO',
  icon: '⏱️',
  duration: 20,
  order: 2,
  status: 'PUBLISHED',
  studyBodyPlain: '',
  originalBodyPlain: '',
  studySections: [
    {
      id: 's1',
      title: 'El Formato de 25 Minutos',
      intro: {
        romanNumeral: 'I',
        title: 'El Formato de 25 Minutos',
        paragraphs: [
          'A partir del 6 de septiembre de 2026, los jóvenes tendrán 25 minutos para su clase dominical. No es mucho tiempo — pero tampoco poco. La clave es la estructura. Un formato claro libera al maestro de improvisar y al alumno de perderse.',
        ],
      },
      topics: [
        {
          id: 't1-formato',
          title: 'Doctrina → Principio → Aplicación',
          blocks: [
            {
              type: 'paragraph',
              text: 'El formato recomendado para la clase de 25 minutos tiene tres movimientos. El primero establece qué ha dicho Dios. El segundo conecta esa declaración divina con la vida real de los jóvenes. El tercero invita a una decisión o acción concreta antes del próximo domingo.',
            },
            {
              type: 'doctrine_box',
              title: 'Los tres movimientos de la clase',
              body: '(1) DOCTRINA (≈ 5–7 min): ¿Qué enseñan las escrituras y los profetas sobre este tema? Inicia con un versículo, una declaración de la guía PFJ o una pregunta que lleve al texto. (2) PRINCIPIO (≈ 8–10 min): ¿Cómo cambia este principio la forma en que vivo? Discusión participativa — los jóvenes deben hablar, no solo el maestro. (3) APLICACIÓN (≈ 8–10 min): ¿Qué voy a hacer de manera diferente esta semana porque creo esto? Una decisión específica, no una intención vaga.',
            },
            {
              type: 'steps',
              steps: [
                'Minutos 1–2: Bienvenida breve y pregunta de apertura que conecta con el tema (no lectura de anuncios)',
                'Minutos 3–8: Doctrina — leer juntos el versículo o la sección de la guía PFJ; el maestro enseña con brevedad y convicción',
                'Minutos 9–18: Principio — preguntas abiertas que invitan a los jóvenes a conectar la doctrina con su vida; el maestro escucha más de lo que habla',
                'Minutos 19–24: Aplicación — cada joven identifica una acción concreta para la semana; el maestro puede pedirles que la escriban',
                'Minuto 25: Cierre con testimonio breve y oración',
              ],
            },
            {
              type: 'central_quote',
              text: 'El maestro que habla durante 20 de los 25 minutos ha enseñado solo a sí mismo. La enseñanza ocurre cuando el alumno piensa, habla y decide.',
              attribution: 'Principio de enseñanza del evangelio',
            },
          ],
        },
        {
          id: 't1-doctrina',
          title: 'El primer movimiento: anclar en la doctrina',
          blocks: [
            {
              type: 'paragraph',
              text: 'La doctrina es el ancla de la clase. Sin ella, la discusión se convierte en opiniones. Con ella, los jóvenes saben que lo que se enseña no es la perspectiva del líder sino la verdad revelada. El maestro debe dominar el versículo o la declaración que usará como ancla antes de llegar a clase.',
            },
            {
              type: 'key_points',
              points: [
                'Elige un solo texto doctrinal central — no tres versículos, uno. La profundidad supera la amplitud en 25 minutos.',
                'Lee el texto en voz alta con la clase — no lo resumas, léelo. Hay poder en las palabras exactas de las escrituras.',
                'Haz una pregunta de comprensión simple: "¿Qué nos está diciendo el Señor en este versículo?"',
                'Resiste la tentación de explicar todo — el Espíritu también enseña mientras los jóvenes piensan.',
                'Si el texto es de la guía PFJ, muéstrales dónde está en la app para que puedan volver a él durante la semana.',
              ],
            },
            {
              type: 'highlight_verse',
              reference: 'DyC 88:122',
              text: '"Designad a uno para presidir la reunión, y que sea presentado a Dios por oración de los fieles. Designad a un maestro, y que no todos sean maestros ni todos sean oradores a la misma vez."',
            },
          ],
        },
      ],
    },
    {
      id: 's2',
      title: 'El Arte de Enseñar con Preguntas',
      intro: {
        romanNumeral: 'II',
        title: 'El Arte de Enseñar con Preguntas',
        paragraphs: [
          'El corazón de los 25 minutos está en el movimiento de principio. Aquí el maestro deja de presentar y empieza a facilitar. La herramienta principal no es la explicación — es la pregunta. Una buena pregunta hace más que diez minutos de conferencia.',
        ],
      },
      topics: [
        {
          id: 't2-preguntas',
          title: 'Preguntas que abren y preguntas que cierran',
          blocks: [
            {
              type: 'paragraph',
              text: 'No todas las preguntas son iguales. Las preguntas que se responden con "sí" o "no" cierran la conversación. Las preguntas que invitan a pensar en la propia experiencia abren el corazón. El maestro eficaz prepara sus preguntas con tanta atención como prepara su enseñanza doctrinal.',
            },
            {
              type: 'compare_grid',
              left: {
                label: 'Preguntas que cierran',
                points: [
                  '"¿Es importante ser honesto?" (sí/no)',
                  '"¿Deben leer las escrituras todos los días?" (sí/no)',
                  '"¿Han visto cómo el Espíritu ayuda?" (pausa incómoda)',
                  '"¿Están de acuerdo con este principio?" (sí/no)',
                  '"¿Alguien quiere comentar?" (silencio)',
                ],
              },
              right: {
                label: 'Preguntas que abren',
                points: [
                  '"¿En qué situación de esta semana necesitarías ser honesto aunque fuera difícil?"',
                  '"¿Qué diferencia notas en tu día cuando lees las escrituras vs cuando no?"',
                  '"¿Cómo describirías el Espíritu a alguien que nunca lo ha sentido?"',
                  '"¿Qué parte de este principio te resulta más difícil aplicar y por qué?"',
                  '"¿Cuál de estos ejemplos se parece más a algo que tú hayas vivido?"',
                ],
              },
            },
            {
              type: 'key_points',
              points: [
                'Prepara 3–4 preguntas antes de clase — no improvises las preguntas aunque sí improvises las respuestas',
                'Después de hacer una pregunta, espera. El silencio no es fracaso — es pensamiento.',
                'No corrijas inmediatamente una respuesta incompleta — haz otra pregunta: "¿Alguien quiere agregar algo?"',
                'Valida las respuestas honestas aunque sean incómodas — la honestidad de los jóvenes es un regalo',
                'Comparte tu propia respuesta solo después de que ellos hayan hablado — no antes, para no cerrar la discusión',
              ],
            },
          ],
        },
        {
          id: 't2-aplicacion',
          title: 'El tercer movimiento: de la clase a la semana',
          blocks: [
            {
              type: 'paragraph',
              text: 'La aplicación es el momento más fácil de omitir y el más importante de mantener. Sin ella, la clase termina en buenas ideas sin consecuencias. Con ella, el joven sale con algo específico que hacer antes del próximo domingo.',
            },
            {
              type: 'steps',
              steps: [
                'Devuelve el tema al individuo: "Basándonos en lo que hemos aprendido hoy, ¿qué es una cosa que tú — no todos en general, sino tú específicamente — podrías hacer diferente esta semana?"',
                'Da tiempo para pensar — 60 segundos de silencio mientras los jóvenes escriben o reflexionan',
                'Invita a 2–3 voluntarios a compartir su aplicación personal (no obligues — invita)',
                'El maestro comparte la suya también, con sinceridad',
                'Cierra recordando que el próximo domingo pueden compartir si pusieron en práctica lo que decidieron',
              ],
            },
            {
              type: 'doctrine_box',
              title: 'La diferencia entre intención y decisión',
              body: '"Voy a tratar de ser más paciente esta semana" es una intención. "Esta semana, cuando mi hermano menor me moleste, voy a respirar antes de responder" es una decisión. El maestro que ayuda a los jóvenes a pasar de intenciones vagas a decisiones concretas está haciendo la obra del discipulado.',
            },
            {
              type: 'reflection',
              prompt: 'Piensa en la última clase que enseñaste o en la que participaste. ¿Terminó con una decisión concreta o con una intención vaga? ¿Qué cambiaría si las últimas preguntas de cada clase fueran siempre: "¿Qué voy a hacer?" y "¿Cuándo?"',
            },
          ],
        },
      ],
    },
    {
      id: 's3',
      title: 'Lo que No Hacer en 25 Minutos',
      intro: {
        romanNumeral: 'III',
        title: 'Lo que No Hacer en 25 Minutos',
        paragraphs: [
          'Saber qué hacer es solo la mitad del arte. Saber qué evitar es igualmente importante. Los 25 minutos se pierden de maneras previsibles — y reconocerlas de antemano permite proteger el tiempo.',
        ],
      },
      topics: [
        {
          id: 't3-errores',
          title: 'Los errores más comunes en la clase',
          blocks: [
            {
              type: 'paragraph',
              text: 'Los siguientes errores no son señal de mal carácter — son tendencias naturales que cualquier maestro puede caer sin notarlo. Reconocerlos es el primer paso para evitarlos.',
            },
            {
              type: 'key_points',
              points: [
                'Empezar con anuncios: los anuncios pertenecen al inicio de la reunión sacramental o a un mensaje de texto previo, no a los 25 minutos de clase',
                'Hablar más de lo que escuchan los jóvenes: si el maestro habla más del 40% del tiempo, algo está mal',
                'Omitir la aplicación porque "se acabó el tiempo": si falta tiempo, acorta la doctrina — nunca la aplicación',
                'Responder las propias preguntas: si nadie responde en 10 segundos, el maestro siente la urgencia de llenar el silencio — resiste esa urgencia',
                'Cubrir demasiado material: un capítulo tiene muchas ideas; elige una y profundiza en ella en lugar de tocar diez superficialmente',
                'Enseñar el mismo estilo para todos los jóvenes: algunos responden mejor a preguntas personales, otros a trabajo en parejas, otros a escribir — varía el método',
              ],
            },
            {
              type: 'central_quote',
              text: 'No enseñes todo lo que sabes. Enseña lo que el Espíritu confirma que necesitan escuchar hoy.',
              attribution: 'Principio de enseñanza del evangelio',
            },
            {
              type: 'note_prompts',
              prompts: [
                { id: 'np1', question: '¿Cuál de los errores mencionados es el que más cometía en mis clases anteriores?' },
                { id: 'np2', question: '¿Qué cambio concreto haré en mi próxima clase para proteger el tiempo de aplicación?' },
                { id: 'np3', question: '¿Qué pregunta abierta prepararé para la próxima clase que invite a los jóvenes a conectar la doctrina con su vida real?' },
              ],
            },
          ],
        },
        {
          id: 't3-espiritu',
          title: 'Cuando el Espíritu cambia el plan',
          blocks: [
            {
              type: 'paragraph',
              text: 'Toda la preparación y estructura son una plataforma de lanzamiento, no una jaula. El Espíritu puede redirigir una clase en cualquier momento — un comentario inesperado de un joven, una pregunta que abre un tema más urgente, un silencio que invita a quedarse ahí. La estructura sirve al Espíritu; el Espíritu no sirve a la estructura.',
            },
            {
              type: 'highlight_verse',
              reference: 'DyC 84:85',
              text: '"No penséis de antemano lo que diréis; mas guardad siempre en vuestras mentes los tesoros de la vida eterna que se os han dado mediante la veracidad del gran Espíritu de Dios."',
            },
            {
              type: 'doctrine_box',
              title: 'Preparación + sensibilidad al Espíritu',
              body: 'El maestro que no se prepara deja todo al Espíritu — y eso no es fe, es descuido. El maestro que se prepara tanto que no puede apartarse del plan deja al Espíritu sin espacio. La virtud está en el centro: prepararse con profundidad y luego tener las manos abiertas. Como dijo el élder Eyring: "He aprendido a nunca terminar una clase exactamente como la planeé."',
            },
            {
              type: 'reflection',
              prompt: '¿Has sentido alguna vez que el Espíritu quería que te quedaras más tiempo en un tema que no habías planeado desarrollar tanto? ¿Qué hiciste? ¿Qué harías diferente ahora?',
            },
          ],
        },
      ],
    },
  ],
}
