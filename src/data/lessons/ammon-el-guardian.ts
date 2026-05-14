import type { Lesson } from '@/types/doctrine'

export const ammonElGuardian: Lesson = {
  id: 'ammon-el-guardian',
  moduleId: 'personajes-escrituras',
  submoduleGroup: 'ammon',
  title: 'Los Brazos',
  subtitle: 'La batalla de los rebaños en el agua de Sedequias',
  author: 'Fuentes: Alma 17:26-39; Alma 18:1-11',
  description:
    'En el aguaje de Sedequias, Ammón tuvo que elegir entre huir y luchar. Eligió luchar — no por sí mismo sino por su señor. Lo que siguió fue uno de los episodios más dramáticos del Libro de Mormón: brazos cortados, siervos aterrizados, y un rey lamanita preguntándose si estaba ante el Gran Espíritu.',
  level: 'BÁSICO',
  icon: '💪',
  duration: 30,
  order: 7311,
  status: 'PUBLISHED',
  studyBodyPlain: '',
  originalBodyPlain: '',
  previousLessonId: 'ammon-la-mision',
  nextLessonId: 'ammon-el-maestro',
  studySections: [
    {
      id: 's1',
      title: 'El ataque en Sedequias',
      intro: {
        romanNumeral: 'I',
        title: 'Alma 17:26-35 — Los que Dispersaron los Rebaños',
        paragraphs: [
          'Los rebaños del rey Lamoni eran atacados regularmente en el aguaje de Sedequias. Para los siervos, perder los rebaños significaba muerte. Para Ammón, significó una oportunidad.',
        ],
      },
      topics: [
        {
          id: 't1-1',
          title: 'El ataque y el terror de los siervos',
          blocks: [
            {
              type: 'highlight_verse',
              reference: 'Alma 17:27-29',
              text: 'Cuando Ammón y sus hermanos siervos del rey fueron llevando sus rebaños a abrevarlos al lugar llamado de Sebus, he aquí una multitud de lamanitas, quienes habitaban en esta tierra... diseminó sus rebaños por todas partes; y los siervos de Ammón comenzaron a lamentarse en voz muy alta, diciendo: He aquí, nuestros rebaños se han esparcido; y mira, los ladrones son los que los han esparcido.',
            },
            {
              type: 'paragraph',
              text: 'El aguaje de Sedequias era un punto estratégico y peligroso. Grupos de lamanitas lo usaban para dispersar los rebaños del rey — no para robar los animales, sino aparentemente para castigar a los siervos. Alma 17:28 explica el terror de los siervos: habían visto previamente a sus compañeros ser ejecutados por el rey cuando los rebaños se dispersaban. Era una situación sin salida visible.',
            },
            {
              type: 'paragraph',
              text: 'El texto de Alma 17:29 es notable por lo que revela del estado mental de Ammón: "Ahora bien, los compañeros de Ammón habían comenzado a lamentarse en voz muy alta; sin embargo, Ammón era firme y no temía." Mientras los demás lloraban, Ammón evaluaba. El contraste no es para glorificar la frialdad emocional — es para ilustrar que la fe entrenada durante catorce años de oración y ayuno produce una calma que el pánico natural no puede lograr.',
            },
            {
              type: 'doctrine_box',
              title: 'La Calma ante la Crisis: el Fruto de la Fe Practicada',
              body: 'Alma 17:29 dice que Ammón "era firme y no temía." Este estado no fue espontáneo — fue el producto de años de comunión con Dios. La fe madura no elimina el peligro; elimina el pánico ante el peligro. Los siervos que lloraban no eran cobardes — eran hombres que no tenían los recursos espirituales que Ammón había acumulado. El miedo es proporcional a la distancia de Dios; la calma es proporcional a la intimidad con Él.',
            },
            {
              type: 'timeline',
              items: [
                { label: 'Los ladrones atacan', text: 'Un grupo de lamanitas diseminó los rebaños del rey Lamoni en el aguaje de Sedequias (Alma 17:27)', color: 'red' },
                { label: 'Los siervos se lamentan', text: 'Los compañeros de Ammón lloraron, temiendo ser ejecutados por el rey (Alma 17:28)', color: 'red' },
                { label: 'Ammón actúa con calma', text: 'Ammón era firme y no temía — vio la oportunidad de demostrar el poder de Dios (Alma 17:29)', color: 'gold' },
                { label: 'Reagrupan los rebaños', text: 'Ammón ordenó a los siervos reunir los rebaños mientras él se enfrentaba a los ladrones (Alma 17:33)', color: 'blue' },
                { label: 'Victoria en Sedequias', text: 'Los brazos de los atacantes fueron cortados; los rebaños volvieron al rey ilesos (Alma 17:36-38)', color: 'green' },
              ],
            },
          ],
        },
        {
          id: 't1-2',
          title: 'El gozo de Ammón ante la oportunidad',
          blocks: [
            {
              type: 'highlight_verse',
              reference: 'Alma 17:29',
              text: 'Ahora bien, Ammón viendo este asunto, su corazón se regocijó dentro de sí mismo, diciendo: Ahora demostraré al rey el poder que hay en mí, para ganar su corazón a fin de que crea en mis palabras.',
            },
            {
              type: 'paragraph',
              text: 'La reacción de Ammón ante la crisis fue regocijo — no euforia bélica, sino reconocimiento de una oportunidad divina. Había estado buscando cómo abrir el corazón del rey Lamoni al evangelio. El ataque de Sedequias, que era para los siervos una catástrofe, fue para Ammón la plataforma que necesitaba. El hombre de fe puede ver lo que el hombre de pánico no puede: que Dios está en el desorden.',
            },
            {
              type: 'paragraph',
              text: 'Es crucial observar la motivación de Ammón: no quería demostrar su poder por orgullo personal. El texto específicamente dice que quería "ganar el corazón" del rey — una frase que implica afecto, confianza y amor, no dominación. Ammón no buscaba impresionar a Lamoni; buscaba que Lamoni confiara lo suficiente en él para escuchar las palabras de Cristo. El poder era un medio, no un fin.',
            },
            {
              type: 'reflection',
              prompt: '¿Hay alguna "crisis" actual en tu vida que podrías reencuadrar como Ammón lo hizo — no como obstáculo sino como oportunidad de demostrar fe y ganar confianza? ¿Qué cambiaría si cambiara tu interpretación del evento?',
            },
          ],
        },
      ],
    },
    {
      id: 's2',
      title: 'La batalla',
      intro: {
        romanNumeral: 'II',
        title: 'Alma 17:33-39 — Los Brazos como Evidencia',
        paragraphs: [
          'Ammón defendió los rebaños con espada y honda. Los brazos cortados de sus oponentes se convirtieron en el testimonio que abrió el corazón del rey.',
        ],
      },
      topics: [
        {
          id: 't2-1',
          title: 'La defensa: espada, honda, y brazo de Dios',
          blocks: [
            {
              type: 'highlight_verse',
              reference: 'Alma 17:36-38',
              text: 'Pero he aquí, en cada individuo que levantaba su espada para matarle, cortaba Ammón su brazo con la espada; porque él resistía sus golpes, hiriendo sus brazos con la filosa espada de él; y ellos huyeron ante Ammón... habiéndoles cortado los brazos, y habiendo matado a varios; y los demás que huyeron se fueron a decirle al rey todo lo que había acontecido.',
            },
            {
              type: 'paragraph',
              text: 'La batalla en Sedequias fue breve pero decisiva. Ammón utilizó tanto espada como honda — primero la honda para derribar a los que atacaban desde distancia, luego la espada para los que se acercaban. El texto menciona que cortó los brazos de quienes levantaron sus espadas contra él. No fue una ejecución masiva — fue una respuesta quirúrgica que dejó a los atacantes vivos pero desarmados, literalmente.',
            },
            {
              type: 'paragraph',
              text: 'Los siervos del rey reunieron los brazos cortados como evidencia (Alma 17:39). Este detalle aparentemente brutal tiene una función narrativa crucial: los brazos eran prueba verificable de lo que había ocurrido. Cuando los siervos los presentaron al rey, Lamoni no podía dudar de que algo extraordinario había sucedido. No era una historia — era evidencia física de un poder sobrehumano.',
            },
            {
              type: 'deep_dive',
              badge: 'Contexto bíblico',
              title: '¿Por qué los brazos? — El simbolismo bíblico del brazo cortado',
              paragraphs: [
                'En el mundo bíblico del Antiguo Cercano Oriente, el brazo era símbolo de poder y acción. "El brazo del Señor" era una metáfora estándar para el poder divino (Éxodo 15:16; Isaías 53:1). Cortar el brazo del enemigo no era solo incapacitarlo físicamente — en el lenguaje simbólico de esa cultura, era negar su poder.',
                'Que Ammón cortara los brazos de quienes lo atacaron era — en el imaginario simbólico que el pueblo lamanita podría haber compartido — una demostración de que el poder de Ammón era superior al de ellos. No era simplemente una táctica de combate: era un signo. Lamoni lo interpretó como evidencia de que Ammón era el "Gran Espíritu" o al menos un representante suyo.',
                'El Libro de Mormón usa este episodio para establecer que Dios puede usar la fuerza física al servicio de propósitos espirituales — no para glorificar la violencia, sino para ilustrar que el poder de Dios se puede manifestar en cualquier contexto, incluso en un campo de batalla, cuando el motivo del corazón es el amor y no la destrucción.',
              ],
            },
          ],
        },
        {
          id: 't2-2',
          title: 'El informe al rey: "¿Acaso es el Gran Espíritu?"',
          blocks: [
            {
              type: 'highlight_verse',
              reference: 'Alma 18:2-3',
              text: 'Y uno de ellos le dijo al rey: Hemos razón para creer que este hombre es el Gran Espíritu, o sea un agente enviado del Gran Espíritu; porque él no puede ser muerto; y tampoco puede sus siervos ser muertos por él.',
            },
            {
              type: 'paragraph',
              text: 'El informe de los siervos al rey Lamoni fue cargado de interpretación teológica lamanita. Dentro de su cosmovisión, la única explicación para lo que había ocurrido era sobrenatural: este hombre era el Gran Espíritu o un enviado suyo. El rey quedó asombrado — y el texto dice que no se atrevió a llamar a Ammón (Alma 18:5). El poder demostrado en Sedequias había creado en Lamoni una reverencia que ninguna predicación hubiera podido producir en ese momento.',
            },
            {
              type: 'dialogue',
              title: 'El rey Lamoni y sus siervos tras el informe',
              lines: [
                { speaker: 'Siervo del rey', side: 'left', text: 'Oh rey, este Ammón no puede ser muerto. Cortó los brazos de todos los que levantaron espada contra él.' },
                { speaker: 'Rey Lamoni', side: 'right', text: '¿Todos los brazos que me trajiste son de los que trataron de matar a mis siervos en el aguaje de Sebus?' },
                { speaker: 'Siervo del rey', side: 'left', text: 'Así es. Y nadie pudo hacerle daño a él. Creemos que es el Gran Espíritu.' },
                { speaker: 'Rey Lamoni', side: 'right', text: 'Si es así, entonces ¿por qué lo envié a cuidar mis rebaños? Hubiera sido más que cualquier rey. Tememos haberle ofendido.' },
              ],
            },
            {
              type: 'paragraph',
              text: 'La pregunta del rey Lamoni — si Ammón era el Gran Espíritu — era una pregunta sincera dentro de su marco de referencia religioso. No era simple superstición; era el intento de su mente de categorizar lo que sus ojos le presentaban. Ammón, cuando tuvo oportunidad de hablar con el rey, no aprovechó la confusión para afirmarse como deidad. Dijo la verdad: era un hombre, un siervo de Dios, y quería enseñarle la verdad sobre el Gran Espíritu (Alma 18:24-35).',
            },
          ],
        },
      ],
    },
    {
      id: 's3',
      title: 'Ammón preparando los corazones',
      intro: {
        romanNumeral: 'III',
        title: 'Alma 18:8-9 — El Siervo que No Buscaba Recompensa',
        paragraphs: [
          'Cuando Ammón terminó de atender los caballos del rey, el rey lo mandó llamar. Lo que dijo a continuación reveló el verdadero corazón del misionero.',
        ],
      },
      topics: [
        {
          id: 't3-1',
          title: 'Atendiendo los caballos: la consistencia del siervo',
          blocks: [
            {
              type: 'highlight_verse',
              reference: 'Alma 18:8-9',
              text: 'Y le dijo uno de sus siervos: ¿Dónde está Ammón? Pues he aquí que el rey desea hablarle... Y el siervo vino donde se hallaba Ammón, y le dijo que el rey deseaba hablar con él. Y Ammón preparó los caballos y los carruajes del rey... y luego fue a presentarse ante el rey.',
            },
            {
              type: 'paragraph',
              text: 'Después de la batalla, cuando el rey quería verlo, Ammón estaba — atendiendo los caballos. No estaba celebrando su victoria. No estaba esperando ser reconocido. Estaba haciendo su trabajo. Esta consistencia en el servicio ordinario, incluso después de un evento extraordinario, es una de las marcas más claras del carácter de Ammón. El servicio no era para él una táctica — era su forma de vida.',
            },
            {
              type: 'paragraph',
              text: 'Cuando finalmente llegó ante el rey, Lamoni guardó silencio durante una hora (Alma 18:14). Estaba procesando todo lo que había visto y escuchado. Ammón esperó. No presionó. No llenó el silencio con palabras. La espera paciente en el silencio del otro es en sí misma una forma de respeto — y Ammón lo sabía. Cuando el rey finalmente habló, su primera pregunta fue: "¿Acaso te sientes satisfecho con los rebaños de Lamoni mi padre?"',
            },
            {
              type: 'key_points',
              title: 'Lo que el comportamiento de Ammón después de la batalla reveló',
              points: [
                'No buscó reconocimiento inmediato — regresó al trabajo sin esperar ser llamado al honor',
                'Completó sus responsabilidades ordinarias incluso después de un evento extraordinario',
                'Esperó pacientemente en silencio cuando el rey no hablaba — respetó el proceso del otro',
                'No explotó la admiración del rey para su propio beneficio',
                'Mantuvo su identidad de siervo incluso cuando todos lo veían como el Gran Espíritu',
              ],
            },
          ],
        },
        {
          id: 't3-2',
          title: 'El corazón del misionero: no busca recompensa',
          blocks: [
            {
              type: 'highlight_verse',
              reference: 'Alma 18:23',
              text: 'Y Ammón comenzó a hablar con él con valentía, y le dijo: ¿Crees tú que existe un Dios? Y él le respondió: No sé qué significa eso. Y entonces Ammón dijo: ¿Crees que hay un Gran Espíritu? Y él dijo: Sí. Y Ammón le dijo: Este es Dios.',
            },
            {
              type: 'paragraph',
              text: 'La primera pregunta doctrinal de Ammón al rey fue simple y directa: "¿Crees que existe un Dios?" El rey respondió que no sabía lo que significaba esa palabra. Ammón tradujo: "¿Crees en un Gran Espíritu?" El rey dijo sí. Ammón dijo: "Este es Dios." Esta metodología — partir del marco de referencia del interlocutor, no del propio — es una de las herramientas más poderosas del ministerio.',
            },
            {
              type: 'note_prompts',
              prompts: [
                { id: 'p1', question: '¿Por qué Ammón eligió comenzar con la pregunta "¿Crees que existe un Dios?" en lugar de presentar el Libro de Mormón directamente?' },
                { id: 'p2', question: '¿Qué reveló el comportamiento de Ammón después de la batalla (atendiendo los caballos) sobre su motivación verdadera?' },
                { id: 'p3', question: '¿Cómo usa Ammón el lenguaje del rey Lamoni (el "Gran Espíritu") para conectar con su cosmovisión sin comprometer la verdad?' },
              ],
            },
            {
              type: 'quiz',
              quizType: 'true_false',
              question: 'Después de la batalla en el aguaje de Sedequias, Ammón buscó inmediatamente al rey para recibir su reconocimiento y recompensa.',
              answer: false,
              explanation: 'Alma 18:8-9 muestra que después de la batalla, Ammón volvió a sus responsabilidades ordinarias: preparar los caballos y carruajes del rey. Fue el siervo del rey quien tuvo que ir a buscarlo para decirle que el rey quería verlo.',
            },
            {
              type: 'quiz',
              quizType: 'fill_blank',
              question: 'El rey Lamoni y sus siervos creyeron que Ammón era el _____, un ser sobrenatural de su cosmovisión lamanita.',
              answer: 'Gran Espíritu',
              explanation: 'Alma 18:2-3 — Los siervos del rey informaron que creían que Ammón era el Gran Espíritu o un enviado suyo, porque ningún arma pudo hacerle daño en la batalla de Sedequias.',
            },
          ],
        },
      ],
    },
  ],
}
