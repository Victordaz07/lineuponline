import type { Lesson } from '@/types/doctrine'

export const scPromesaEspiritu: Lesson = {
  id: 'sc-promesa-espiritu',
  moduleId: 'la-santa-cena',
  title: 'La Promesa del Espíritu',
  subtitle: '"Tendréis mi Espíritu consigo" — lo que eso significa de lunes a sábado',
  description:
    'La promesa central de la Santa Cena no es para el domingo por la mañana — es para toda la semana. Esta lección explora qué significa tener al Espíritu Santo como compañero constante, cómo la Santa Cena activa esa promesa, y por qué los minutos de silencio durante la distribución son uno de los momentos de mayor potencial revelador de toda la semana.',
  level: 'INTERMEDIO',
  icon: '🕊️',
  duration: 30,
  order: 6,
  status: 'PUBLISHED',
  studyBodyPlain: '',
  originalBodyPlain: '',
  previousLessonId: null,
  nextLessonId: null,
  studySections: [
    {
      id: 's1',
      title: 'La Promesa más Grande',
      intro: {
        romanNumeral: 'I',
        title: 'La Promesa más Grande',
        paragraphs: [
          '"Tendréis mi Espíritu consigo." El Señor las pronunció en el aposento alto, las repitió en el continente americano, y las inscribió en la oración que se pronuncia cada domingo. Es la mayor promesa que podemos recibir cada semana.',
        ],
      },
      topics: [
        {
          id: 'la-promesa',
          title: '¿Qué significa "tener su Espíritu"?',
          subtitle:
            'La compañía del Espíritu Santo no es una emoción ni un sentimiento pasajero — es una presencia real con funciones específicas que cambia la calidad de cada decisión, cada relación y cada prueba.',
          blocks: [
            {
              type: 'paragraph',
              text: 'En el aposento alto, la noche de la Última Cena, Jesús prometió a sus apóstoles que después de su partida enviaría al Consolador — y describió con precisión lo que haría:',
              blockId: 'sc6s1p0',
            },
            {
              type: 'highlight_verse',
              text: '"Mas el Consolador, el Espíritu Santo, a quien el Padre enviará en mi nombre, él os enseñará todas las cosas, y os recordará todo lo que yo os he dicho."',
              reference: 'Juan 14:26',
            },
            {
              type: 'highlight_verse',
              text: '"Y cuando vengan sobre vosotros estas cosas… hablad los pensamientos que yo os pondré en el corazón, y no os preocupéis de antemano de lo que hablareis; porque se os dará en el mismo momento la palabra."',
              reference: 'Doctrina y Convenios 100:5–6',
            },
            {
              type: 'key_points',
              title: 'Lo que el Espíritu hace cuando lo tenemos como compañero',
              points: [
                '💡 ENSEÑA — Cuando estudiamos las Escrituras, el Espíritu ilumina su significado para nuestra situación específica de hoy.',
                '🧠 RECUERDA — Trae a la mente las palabras del Salvador en los momentos de tentación, presión o decisión difícil.',
                '⚠️ ADVIERTE — Señala el peligro antes de que sea visible para la mente natural. Esa incomodidad antes de tomar una mala decisión es el Espíritu.',
                '🤝 CONSUELA — "El Consolador" — no el que da razones para el dolor, sino el que permanece presente en él.',
                '🗣️ TESTIFICA — Confirma la verdad de las cosas espirituales con un tipo de conocimiento que no viene del intelecto ni de la evidencia.',
                '🌟 SANTIFICA — Obra en el corazón para hacerlo más semejante al de Cristo. Esto es lo que Pablo llama "el fruto del Espíritu": amor, gozo, paz, paciencia, benignidad (Gálatas 5:22–23).',
              ],
            },
            {
              type: 'leader_quote',
              quote:
                'La compañía del Espíritu Santo es el mayor don que podemos recibir en esta vida mortal — más valioso que la salud, la riqueza o el talento. Un hombre con el Espíritu Santo como compañero constante puede navegar cualquier tormenta. Sin Él, navegamos solos.',
              name: 'Élder Boyd K. Packer · "El don del Espíritu Santo" · Conferencia General',
            },
            {
              type: 'reflection',
              prompt:
                '¿En qué área de tu vida más necesitas la compañía del Espíritu esta semana — una decisión, una relación, una tentación, una prueba? ¿Cómo cambia la Santa Cena del próximo domingo saber que esa es la promesa específica que estás renovando?',
            },
          ],
        },
      ],
    },
    {
      id: 's2',
      title: 'El Espíritu en la Vida Diaria',
      intro: {
        romanNumeral: 'II',
        title: 'El Espíritu en la Vida Diaria',
        paragraphs: [
          'La Santa Cena no es el destino del Espíritu — es el punto de partida. Lo que el Señor promete el domingo está diseñado para funcionar el lunes, el martes, el miércoles — en el trabajo, en el matrimonio, en la crianza, en la soledad.',
        ],
      },
      topics: [
        {
          id: 'diario',
          title: 'De la reunión sacramental a la semana real',
          subtitle:
            'El Espíritu como compañero no es una experiencia dominical — es una presencia de 24/7 que transforma las decisiones ordinarias en actos de discipulado.',
          blocks: [
            {
              type: 'paragraph',
              text: 'Lehi vio en su visión que quienes se aferraban a la barra de hierro llegaban al árbol de la vida — pero necesitaban aferrarse durante toda la jornada, a través de la niebla, de las burlas, de la presión social. La barra de hierro es la palabra de Dios; el Espíritu es quien nos ayuda a mantenerla en la mano. La Santa Cena es el punto donde tomamos la barra de nuevo cada semana.',
              blockId: 'sc6s2p0',
            },
            {
              type: 'doctrine_box',
              title: 'La diferencia entre el don y la compañía',
              body: 'Todos los miembros bautizados y confirmados recibieron el DON del Espíritu Santo — la autorización para su compañía. Pero el don no garantiza la compañía constante. La compañía constante se mantiene mediante la obediencia y la renovación del convenio. Como una radio que tiene la capacidad de recibir la señal — pero si no se mantiene sintonizada y con las baterías cargadas, la señal se pierde. La Santa Cena carga las baterías y afina la sintonía cada semana.',
            },
            {
              type: 'steps',
              title: 'Cómo mantener la compañía del Espíritu durante la semana',
              steps: [
                'Domingo — Renovar el convenio en la Santa Cena con plena conciencia de la promesa que estás recibiendo. Salir del templo con un propósito específico para la semana.',
                'Lunes — Oración de la mañana pidiendo específicamente la guía del Espíritu en las decisiones concretas del día.',
                'Estudio diario — Leer las Escrituras con la pregunta: "¿Qué quiere el Señor que entienda hoy?" El Espíritu responde preguntas específicas, no lecturas pasivas.',
                'Decisiones — Antes de actuar en algo importante, detenerse: "¿Qué diría el Espíritu sobre esto? ¿Siento paz o incomodidad?"',
                'Reconocer sus manifestaciones — El Espíritu habla de maneras sutiles: una idea que llega, una incomodidad que advierte, una paz que confirma, un recuerdo oportuno.',
                'Sábado — Autoexamen: ¿Sentí al Espíritu esta semana? ¿Cuándo? ¿Cuándo lo perdí o lo ignoré? ¿Qué necesito renovar el domingo?',
              ],
            },
            {
              type: 'leader_quote',
              quote:
                'Pueden saber que tienen éxito si el Espíritu Santo los acompaña. Pueden perder su trabajo y tener éxito. Pueden tener mala salud y tener éxito. Pero si el Espíritu se retira de vosotros, están en peligro de fracasar donde más importa.',
              name: 'Presidente Henry B. Eyring · Discurso BYU',
            },
            {
              type: 'reflection',
              prompt:
                '¿Hay algo en tu vida actual — un hábito, una actitud, un contenido que consumes — que hace que el Espíritu se retire? ¿Qué cambiaría si lo vieras desde la perspectiva de la promesa que renuevas cada domingo?',
            },
          ],
        },
      ],
    },
    {
      id: 's3',
      title: 'El Silencio como Revelación',
      intro: {
        romanNumeral: 'III',
        title: 'El Silencio como Revelación',
        paragraphs: [
          'El Manual prohíbe la música durante la distribución de la Santa Cena. Ese silencio no es un vacío — es el espacio que el Señor reserva para que su Espíritu hable personalmente a cada persona en el salón.',
        ],
      },
      topics: [
        {
          id: 'silencio',
          title: 'Los minutos más silenciosos de la semana',
          subtitle:
            'En una semana llena de ruido, pantallas y conversaciones, los minutos de distribución de la Santa Cena son uno de los pocos momentos en que el entorno entero se detiene para el silencio. El que aprende a usarlos transforma la calidad espiritual de su semana.',
          blocks: [
            {
              type: 'paragraph',
              text: 'El Manual General establece: "No se debe tocar música mientras se reparte la Santa Cena ni inmediatamente después." Este silencio no es solo reverencia organizacional — es el espacio diseñado por el Señor para que el Espíritu hable personalmente.',
              blockId: 'sc6s3p0',
            },
            {
              type: 'highlight_verse',
              text: '"Y después del terremoto un fuego; pero Jehová no estaba en el fuego. Y después del fuego una voz apacible y delicada."',
              reference: '1 Reyes 19:12',
            },
            {
              type: 'paragraph',
              text: 'Elías buscó a Dios en el viento, en el terremoto, en el fuego — y Dios no estaba en ninguno de ellos. Estaba en la voz apacible y delicada que solo se escucha en el silencio. Los minutos de distribución de la Santa Cena son uno de los pocos momentos de la semana en que el entorno entero crea ese silencio — y el Espíritu puede hablar con claridad.',
              blockId: 'sc6s3p1',
            },
            {
              type: 'key_points',
              title: 'Cómo usar el tiempo de la distribución',
              points: [
                '🙏 Oración interior — Una conversación real con el Padre durante esos minutos. No general — específica. "¿Qué necesito hacer diferente esta semana?"',
                '🤔 Autoexamen — ¿Qué convenio necesito renovar más hoy? ¿Qué estoy prometiendo cuando tomo este pan?',
                '💭 Memoria activa del Salvador — No solo recordar su muerte — recordar su vida, sus palabras, sus ejemplos. Recordarle es traerle a la mente con intención.',
                '👂 Escuchar — Después de hablar internamente, callar y escuchar. El Espíritu no grita — responde al que hace silencio interior.',
                '✍️ Anotar — Muchos reciben impresiones durante la Santa Cena. Llevar un cuaderno pequeño puede cambiar la calidad espiritual de la semana entera.',
              ],
            },
            {
              type: 'leader_quote',
              quote:
                'He aprendido que los momentos de mayor claridad espiritual en mi semana no siempre ocurren durante el estudio de las escrituras ni durante la oración formal — ocurren a veces durante los minutos de silencio de la distribución de la Santa Cena, cuando la sala se aquieta y el Espíritu tiene espacio para hablar.',
              name: 'Élder Richard G. Scott · "Para recibir revelación de Dios" · Conferencia General',
            },
            {
              type: 'reflection',
              prompt:
                '¿Cómo usas actualmente los minutos de la distribución de la Santa Cena? ¿Mente errante, o espacio de revelación? ¿Qué cambiaría si llegaras el próximo domingo con una pregunta específica preparada para hacerle al Señor durante ese silencio?',
            },
          ],
        },
      ],
    },
  ],
}
