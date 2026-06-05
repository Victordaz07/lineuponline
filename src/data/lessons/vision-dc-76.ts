import type { Lesson } from '@/types/doctrine'

export const visionDC76: Lesson = {
  id: 'vision-dc-76',
  moduleId: 'discursos-sermones-clasicos',
  title: 'La Visión — Doctrina y Convenios 76',
  subtitle: 'Hiram, Ohio, 16 de febrero de 1832',
  author: 'Fuentes primarias: DyC 76; History of the Church, vol. 1; Philo Dibble (eyewitness)',
  description:
    'El 16 de febrero de 1832, Joseph Smith y Sidney Rigdon recibieron la revelación más expansiva del movimiento de la Restauración. Cinco visiones en una tarde que desmontaron siglos de teología cristiana sobre el cielo y el infierno.',
  level: 'AVANZADO',
  icon: '🌌',
  duration: 70,
  order: 2,
  status: 'PUBLISHED',
  studyBodyPlain: '',
  originalBodyPlain: '',
  previousLessonId: null,
  nextLessonId: null,
  studySections: [
    {
      id: 's1',
      title: 'El Momento Histórico',
      intro: { romanNumeral: 'I', title: 'El Momento Histórico', paragraphs: ['Para entender DyC 76, hay que entender el momento en que llegó. No fue revelada en el vacío — fue recibida en medio de un proyecto de traducción de la Biblia, en la granja de un carpintero en Ohio, con un testigo adicional presente.'] },
      topics: [{
        id: 't1', title: 'Hiram, Ohio — 16 de Febrero de 1832',
        blocks: [
          { type: 'timeline', items: [
            { label: 'Enero 1832', text: 'Joseph Smith y Sidney Rigdon se instalan en la granja de John Johnson en Hiram, Ohio, para trabajar en la Traducción Inspirada de la Biblia.', color: 'blue' },
            { label: '16 feb, mañana', text: 'Trabajan en Juan 5:29 — el versículo sobre resurrección de vida vs. resurrección de condenación. La meditación en ese texto abre la visión.', ref: 'Juan 5:29', color: 'gold' },
            { label: '16 feb, tarde', text: 'Cinco visiones distintas se suceden durante más de una hora. Philo Dibble, presente en la habitación, observa el proceso externamente.', color: 'blue' },
            { label: 'Registro inmediato', text: 'La revelación es dictada y enviada a W.W. Phelps para publicación en The Evening and Morning Star.', color: 'green' },
            { label: 'Impacto duradero', text: 'DyC 76 destruye el sistema binario cielo/infierno y revela una arquitectura de destinos eternos proporcional a la rectitud y conocimiento de cada persona.', color: 'gold' },
          ] },
          { type: 'media_slot', kind: 'image', src: undefined, caption: 'La granja de John Johnson en Hiram, Ohio — donde José Smith y Sidney Rigdon recibieron D&C 76 el 16 de febrero de 1832.', contextCard: { year: '16 feb 1832', place: 'Hiram, Ohio', label: 'D&C 76' } },
          { type: 'paragraph', text: 'Philo Dibble estuvo presente durante la recepción de la visión. Décadas después recordó: "Joseph se paró en pie durante toda la entrevista, excepto por breves períodos... Sydney, sin embargo, cayó al suelo y estuvo fuera por un tiempo. El aspecto de Joseph al recibir la visión era brillante y radiante." (Philo Dibble, "Early Scenes in Church History," Juvenile Instructor, mayo 1892).', blockId: 'dc76-s1-p-0' },
          { type: 'highlight_verse', text: 'Pues hemos escuchado su voz, hemos visto su faz, y el poder y la gloria con que él mismo se ha manifestado ante nosotros.', reference: 'Doctrina y Convenios 76:14' },
          { type: 'deep_dive', badge: 'Contexto bíblico', title: 'Por qué comenzó con Juan 5:29', paragraphs: ['Juan 5:29 habla de "los que hicieron lo bueno" saliendo a "resurrección de vida," y "los que hicieron lo malo" a "resurrección de condenación." Durante siglos, el cristianismo interpretó este versículo como confirmación de un sistema binario: cielo o infierno, sin matices.', 'Joseph y Sidney estaban meditando precisamente en esa división cuando la visión comenzó. La primera cosa que el Señor les mostró no fue los reinos de gloria — fue al Hijo en la diestra del Padre.', 'DyC 76 no comienza respondiendo "¿a dónde van los muertos?" Comienza con "¿quién es Cristo?" El orden es deliberado: la comprensión de los reinos eternos solo tiene sentido dentro de la comprensión del Redentor.'] },
        ],
      }],
    },
    {
      id: 's2',
      title: 'Los Hijos de Perdición',
      intro: { romanNumeral: 'II', title: 'Los Hijos de Perdición', paragraphs: ['La segunda visión de DyC 76 es también la más oscura: el destino de Lucifer y de quienes lo siguen hasta el final. Es el único destino sin posibilidad de redención.'] },
      topics: [{
        id: 't2', title: 'La Única Condena Sin Redención',
        blocks: [
          { type: 'highlight_verse', text: 'Y nosotros contemplamos el tormento del perverso; porque el castigo del Señor descansa sobre ellos para siempre; y se les llama hijos de perdición.', reference: 'Doctrina y Convenios 76:44–47' },
          { type: 'doctrine_box', title: 'Los cuatro requisitos exactos para ser hijo de perdición', body: 'DyC 76:31-35 establece con precisión quién califica: (1) Haber conocido el poder de Dios — no creído, sino conocido, con confirmación espiritual directa. (2) Haber sido partícipe de ese poder — haber recibido el Espíritu Santo y sus dones activamente. (3) Haber "dejado la diestra de Dios" — voluntariamente rechazarlo después de ese conocimiento. (4) Haber negado al Hijo después de haberlo recibido — y haber crucificado a Cristo para sí mismos.' },
          { type: 'highlight_verse', text: 'Son los únicos sobre quienes el Segundo Muerte tendrá poder; sí, y únicamente ellos no serán redimidos en el tiempo señalado del Señor.', reference: 'Doctrina y Convenios 76:37–38' },
          { type: 'deep_dive', badge: 'Doctrina importante', title: '¿Puede alguien ir realmente a la tiniebla exterior?', paragraphs: ['La respuesta de Joseph Smith fue clara: hay muy pocos que califican, y en su experiencia como profeta, nunca conoció a uno directamente. Los requisitos son tan específicos que prácticamente ninguna persona ordinaria puede cumplirlos.', 'El élder Joseph Fielding Smith escribió: "En cuanto a quiénes serán los hijos de perdición, no tenemos que preocuparnos mucho. Serán pocos, si es que hay alguno, entre los que vivimos."', 'El peligro real no es para quien duda o cuestiona — es para quien ha recibido confirmación plena e irrefutable del Espíritu y luego deliberadamente la rechaza. Dudar no es negar.'] },
        ],
      }],
    },
    {
      id: 's3',
      title: 'El Reino Celestial en Detalle',
      intro: { romanNumeral: 'III', title: 'El Reino Celestial en Detalle', paragraphs: ['La tercera visión es la del reino más alto: el celestial. DyC 76:50-70 describe quiénes lo heredan, qué reciben, y qué significa la presencia del Padre. DyC 131:1-4 agrega la estructura interna del reino.'] },
      topics: [{
        id: 't3', title: 'El Reino del Padre',
        blocks: [
          { type: 'highlight_verse', text: 'Estos son los que recibieron el testimonio de Jesús, y creyeron en su nombre, y fueron bautizados después de la manera de su entierro, siendo sepultados en el agua en su nombre.', reference: 'Doctrina y Convenios 76:51–52' },
          { type: 'highlight_verse', text: 'Estos son los que superaron por la fe, y son los que están sellados por el Espíritu Santo de la promesa, el cual el Padre derrama sobre todos los que son justos y fieles.', reference: 'Doctrina y Convenios 76:53' },
          { type: 'key_points', title: 'Quiénes heredan el reino celestial — DyC 76:51-70', points: ['Recibieron el testimonio de Jesús y creyeron en su nombre', 'Fueron bautizados y confirmados — ordenanzas del sacerdocio recibidas', 'Vencieron por la fe — no por perfección, sino por perseverancia', 'Sellados por el Espíritu Santo de la promesa — su obediencia fue confirmada divinamente', 'Son hechos sacerdotes y reyes / sacerdotisas y reinas — ven al Padre y son hechos perfectos en Cristo'] },
          { type: 'highlight_verse', text: 'En el orden celestial hay tres grados; y para obtener el grado más elevado, el hombre ha de entrar en este orden del sacerdocio [significando el nuevo y sempiterno convenio del matrimonio]; y si no lo hace, no puede obtenerlo.', reference: 'Doctrina y Convenios 131:1–4' },
          { type: 'doctrine_box', title: 'Los tres grados dentro del reino celestial', body: 'DyC 131:1-4 introduce una distinción crucial dentro del celestial mismo: hay tres grados. El más alto requiere el ordenamiento del matrimonio eterno — el nuevo y sempiterno convenio. Esto explica por qué el templo no es opcional para la exaltación.' },
          { type: 'leader_quote', quote: 'El reino celestial no es solo un destino — es una descripción de lo que puedes llegar a ser. Ver al Padre y al Hijo, vivir en su presencia, ser "sacerdotes y reyes" no son metáforas.', name: 'Dallin H. Oaks', role: '"Partakers of the Divine Nature", BYU Devotional, enero 1994 (trad.)' },
        ],
      }],
    },
    {
      id: 's4',
      title: 'Los Reinos Terrestre y Teleste',
      intro: { romanNumeral: 'IV', title: 'Los Reinos Terrestre y Teleste', paragraphs: ['Las visiones cuarta y quinta revelan dos reinos de gloria distintos del celestial. La doctrina restaurada rompe el paradigma: incluso fuera del reino más alto, la existencia eterna es gloriosa — solo que en grados diferentes.'] },
      topics: [{
        id: 't4', title: 'La Arquitectura de la Gracia',
        blocks: [
          { type: 'highlight_verse', text: 'He aquí, estos son los que murieron sin ley; y también los que son los espíritus de los hombres retenidos en prisión, quienes el Hijo fue a visitarles y a predicarles el evangelio.', reference: 'Doctrina y Convenios 76:72–74' },
          { type: 'compare_grid', left: { title: 'Reino Terrestre', items: ['Personas honorables que rechazaron el evangelio completo', 'Mártires espirituales — murieron sin ley o con ley incompleta', 'Reciben la presencia del Hijo pero no del Padre', 'Gloria comparada a la luna (1 Cor 15:41)', 'El evangelio les fue predicado en el mundo espíritus'] }, right: { title: 'Reino Telestial', items: ['Los que no aceptaron el evangelio, que vivieron en el pecado', 'Mentirosos, adúlteros, hechiceros, asesinos (DyC 76:103)', 'No reciben presencia del Padre ni del Hijo — pero sí del Espíritu Santo', 'Gloria comparada a las estrellas (1 Cor 15:41)', 'Deben sufrir antes de ser redimidos — después de los mil años'] } },
          { type: 'highlight_verse', text: 'Y la gloria del telestial es una que supera todo entendimiento; y ningún hombre la conoce excepto a quien Dios la ha revelado.', reference: 'Doctrina y Convenios 76:89–90' },
          { type: 'doctrine_box', title: 'Incluso el telestial supera toda comprensión', body: 'DyC 76:89-90 hace una afirmación asombrosa: incluso el reino más bajo de gloria "supera todo entendimiento." La doctrina de los tres reinos no es un castigo para la mayoría — es evidencia de que la misericordia de Dios excede cualquier sistema que los humanos diseñaríamos.' },
        ],
      }],
    },
    {
      id: 's5',
      title: 'Lo Que No Pudo Escribirse',
      intro: { romanNumeral: 'V', title: 'Lo Que No Pudo Escribirse', paragraphs: ['DyC 76 termina con una admisión extraordinaria: lo que Joseph y Sidney vieron excedió lo que podían comunicar con palabras. El texto que tenemos es solo una parte de lo que fue revelado.'] },
      topics: [{
        id: 't5', title: 'La Revelación Fue Mayor que las Palabras',
        blocks: [
          { type: 'highlight_verse', text: 'Mas los grandes y maravillosos obras que el Señor hará para los hijos de los hombres, ni el ojo ha visto, ni el oído ha oído, ni jamás han penetrado en el corazón del hombre; y el Señor mandó a nosotros que no lo escribamos mientras todavía estamos en el mundo.', reference: 'Doctrina y Convenios 76:114–116' },
          { type: 'deep_dive', badge: 'Reflexión', title: '¿Qué no fue escrito y por qué?', paragraphs: ['El mandamiento de no escribir más de lo escrito tiene al menos dos posibles razones. Primera: había cosas que los hombres de 1832 simplemente no tenían vocabulario ni marco conceptual para expresar. La realidad de la vida eterna puede exceder el lenguaje humano.', 'Segunda: posiblemente el Señor reservó ciertas verdades para revelación personal a quienes se hagan dignos — para el corazón puro, no para la página impresa.', 'Joseph Smith comentó sobre DyC 76 años después: "Podría explicar cien veces más si pudiera salir ahora y predicar al mundo."'] },
          { type: 'leader_quote', quote: 'Cuando escuché la doctrina de DyC 76 por primera vez, me pareció tan grande que me tomó tiempo aceptarla. No porque fuera difícil de creer sino porque era demasiado buena. Cuando finalmente la acepté, cambió mi imagen de Dios para siempre.', name: 'Élder Brigham Young', role: 'Citado en "History of the Church", vol. 5, p. 215 (paráfrasis)' },
        ],
      }],
    },
    {
      id: 's6',
      title: 'Impacto, Aplicación y Verificación',
      intro: { romanNumeral: 'VI', title: 'Impacto, Aplicación y Verificación', paragraphs: ['DyC 76 no es solo teología abstracta. Cambia cómo ves a las personas a tu alrededor, cómo entiendes la justicia de Dios, y qué tan urgente es la obra misional y de templo.'] },
      topics: [{
        id: 't6', title: 'La Revolución Teológica de DyC 76',
        blocks: [
          { type: 'compare_grid', left: { title: 'Teología cristiana clásica (1832)', items: ['Cielo o infierno — solo dos destinos', 'Condenación eterna para la mayoría', 'El infierno es eterno sin posibilidad de salida', 'Salvación solo para quienes mueren con fe cristiana', 'El destino se decide en el momento de la muerte'] }, right: { title: 'La doctrina restaurada (DyC 76)', items: ['Tres reinos de gloria + tiniebla exterior', 'La mayoría hereda algún grado de gloria', 'Solo los hijos de perdición no son redimidos', 'El evangelio se predica en el mundo espíritus', 'El trabajo vicario permite ordenanzas póstumas'] } },
          { type: 'reflection', prompt: '¿Cómo cambia DyC 76 tu imagen de Dios? ¿Y cómo cambia cómo ves a personas que no son miembros de la Iglesia — sabiendo que Dios tiene un destino apropiado para cada uno según su rectitud y conocimiento?' },
          { type: 'quiz', id: 'q-1', question: { kind: 'fill_blank', prompt: 'DyC 76 comenzó mientras Joseph Smith y Sidney Rigdon meditaban en ___ 5:29, sobre la resurrección de vida y la resurrección de condenación.', options: ['Mateo', 'Juan', 'Romanos', 'Apocalipsis'], correctIndex: 1, explanation: 'La visión comenzó mientras estudiaban Juan 5:29 durante la Traducción Inspirada de la Biblia.' } },
          { type: 'quiz', id: 'q-2', question: { kind: 'fill_blank', prompt: 'Según DyC 76:31-35, para ser hijo de perdición una persona debe haber recibido el Espíritu Santo y luego ___ al Hijo después de haberlo recibido.', options: ['olvidado', 'negado', 'cuestionado', 'desobedecido temporalmente'], correctIndex: 1, explanation: 'DyC 76:35 especifica que deben haber "negado al Hijo después de haberlo recibido." No basta con dudar o alejarse.' } },
          { type: 'quiz', id: 'q-3', question: { kind: 'fill_blank', prompt: 'DyC 76:89-90 afirma que la gloria del reino ___ "supera todo entendimiento" — incluso la del destino más bajo de gloria.', options: ['celestial', 'telestial', 'terrestre', 'perdición'], correctIndex: 1, explanation: 'DyC 76:89-90 dice que "la gloria del telestial es una que supera todo entendimiento."' } },
        ],
      }],
    },
  ],
}
