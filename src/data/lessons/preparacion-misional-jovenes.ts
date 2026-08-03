import type { Lesson } from '@/types/doctrine'

export const preparacionMisionalJovenes: Lesson = {
  id: 'preparacion-misional-jovenes',
  moduleId: 'lideres-misioneros',
  title: 'Preparación Misional para Jóvenes',
  subtitle: 'Espíritu, carácter, cuerpo y corazón antes de servir',
  author: 'Basado en Predicad Mi Evangelio, el Manual General de la Iglesia y anuncios oficiales (última actualización de edades: noviembre de 2025)',
  description:
    'Guía profunda para el joven o señorita que se prepara para consagrar un tiempo definido a predicar el evangelio de Jesucristo: requisitos y edades actuales, conversión personal, dignidad, obediencia y sacrificio, preparación física, despedidas, autodisciplina, amor por los extraños, manejo del rechazo, y el proceso de solicitud paso a paso.',
  level: 'INTERMEDIO',
  icon: '🎒',
  duration: 100,
  order: 4,
  status: 'PUBLISHED',
  studyBodyPlain: '',
  originalBodyPlain: '',
  previousLessonId: null,
  nextLessonId: null,
  studySections: [
    {
      id: 's1',
      title: '¿Estoy listo? Requisitos y edades actuales',
      intro: {
        romanNumeral: 'I',
        title: '¿Estoy listo? Requisitos y edades actuales',
        paragraphs: ['El primer requisito no es perfección, es el deseo sincero de servir.'],
      },
      topics: [
        {
          id: 't1',
          title: 'Edades, duración y dónde verificar los requisitos vigentes',
          blocks: [
            {
              type: 'highlight_verse',
              reference: 'DyC 4:3 (versículo ancla)',
              text: '"Si tenéis deseos de servir a Dios, sois llamados a la obra" — el primer requisito no es perfección, es el deseo sincero de servir.',
            },
            { type: 'highlight_verse', reference: 'DyC 4:2–6', text: 'Cualidades pedidas a quien se dedica a la obra de Dios: corazón, alma, mente y fuerza, además de fe, virtud, conocimiento, templanza, paciencia y diligencia.' },
            { type: 'highlight_verse', reference: '1 Timoteo 4:12', text: '"Ninguno tenga en poco tu juventud, sino sé ejemplo... en palabra, conducta, amor, espíritu, fe y pureza."' },
            {
              type: 'key_points',
              title: 'Aplicación práctica',
              points: [
                'Según los cambios anunciados por la Primera Presidencia en noviembre de 2025, tanto jóvenes como señoritas pueden comenzar su servicio a los 18 años, tras graduarse de preparatoria o su equivalente.',
                'Los jóvenes varones suelen servir 24 meses; las señoritas suelen servir 18 meses.',
                'El servicio misional sigue siendo un deber del sacerdocio para los jóvenes varones dignos y capaces, y una oportunidad opcional para las señoritas.',
                'Verifica siempre los requisitos más recientes en el Portal Misionero (missionary.churchofjesuschrist.org).',
              ],
            },
          ],
        },
      ],
    },
    {
      id: 's2',
      title: 'Conversión personal: de saber a ser',
      intro: {
        romanNumeral: 'II',
        title: 'Conversión personal: de saber a ser',
        paragraphs: ['No basta con saber la doctrina de memoria. En dos años vas a estar frente a personas que nunca han oído hablar de José Smith, y lo que ellos van a sentir no es tu conocimiento — es tu convicción.'],
      },
      topics: [
        {
          id: 't2',
          title: 'Cuando el testimonio se vuelve identidad',
          blocks: [
            {
              type: 'highlight_verse',
              reference: 'Alma 5:14, 26 (versículo ancla)',
              text: '"¿Habéis experimentado este cambio poderoso en vuestros corazones?... ¿podéis sentir así ahora?" Alma pregunta si el testimonio se ha vuelto identidad, no solo conocimiento.',
            },
            {
              type: 'deep_dive',
              badge: 'La realidad del campo misional',
              title: 'Conocimiento contra convicción',
              paragraphs: [
                'No basta con saber la doctrina de memoria. En dos años vas a estar frente a personas que nunca han oído hablar de José Smith, y lo que ellos van a sentir no es tu conocimiento — es tu convicción.',
                'La diferencia entre un misionero que "cumple el horario" y uno que transforma vidas casi siempre es esta: uno sabe que es verdad, el otro lo ha hecho parte de quién es.',
              ],
            },
            { type: 'highlight_verse', reference: 'Alma 17:2–3', text: 'Los hijos de Mosíah se habían fortalecido "en el conocimiento de la verdad" por medio del ayuno, la oración y el estudio constante.' },
            { type: 'highlight_verse', reference: 'Enós 1:1–4', text: 'Enós describe cómo las palabras de su padre, sembradas desde joven, lo llevaron a una oración profunda y personal — no heredada, sino propia.' },
            { type: 'highlight_verse', reference: 'Mosíah 26:15–16', text: 'El Señor promete que quien crea de corazón y confiese será perdonado — la fe genuina se conoce por el fruto, no por la repetición de palabras.' },
            {
              type: 'key_points',
              title: 'Aplicación práctica',
              points: [
                'Antes de la misión, deja de estudiar el evangelio solo para "saber respuestas" y empieza a estudiarlo para transformarte — pregúntate después de cada capítulo: "¿qué tengo que cambiar yo con esto?"',
                'Practica orar sin lista de peticiones — solo hablar con Dios como con alguien real, en silencio y con honestidad, aunque sea incómodo al principio.',
                'Busca al menos una experiencia espiritual que puedas describir con tus propias palabras (no las de otra persona) antes de entrar a la misión — algo que sepas que fue real porque te pasó a ti.',
                'Lee el Libro de Mormón completo al menos una vez, y el manual Predicad Mi Evangelio, capítulo 1, antes de entrar al centro de capacitación misional.',
              ],
            },
          ],
        },
      ],
    },
    {
      id: 's3',
      title: 'Dignidad y entrevistas de recomendación',
      intro: {
        romanNumeral: 'III',
        title: 'Dignidad y entrevistas de recomendación',
        paragraphs: ['El arrepentimiento no descalifica para siempre — está diseñado para restaurar.'],
      },
      topics: [
        {
          id: 't3',
          title: 'Honestidad, arrepentimiento y el proceso con el obispo',
          blocks: [
            { type: 'highlight_verse', reference: 'Salmos 24:3–4 (versículo ancla)', text: '"¿Quién subirá al monte de Jehová?... El limpio de manos y puro de corazón."' },
            { type: 'highlight_verse', reference: 'Isaías 1:18', text: 'Aunque los pecados sean como escarlata, pueden ser emblanquecidos — el arrepentimiento sincero abre el camino a servir con dignidad.' },
            { type: 'highlight_verse', reference: 'DyC 121:45', text: '"Que virtud engalane tus pensamientos incesantemente; entonces tu confianza se fortalecerá en la presencia de Dios."' },
            {
              type: 'key_points',
              title: 'Aplicación práctica',
              points: [
                'Si hay algo sin resolver, busca al obispo cuanto antes — el proceso de arrepentimiento lleva tiempo; es mejor comenzarlo temprano.',
                'Las entrevistas evalúan testimonio, dignidad moral, salud física y emocional, y disposición para servir el tiempo completo.',
                'Sé completamente honesto; ocultar algo solo retrasa tu propia sanación.',
                'El arrepentimiento no descalifica para siempre — está diseñado para restaurar.',
              ],
            },
            {
              type: 'dialogue',
              title: 'Preguntas y objeciones comunes',
              lines: [
                { speaker: 'Pregunta', side: 'left', text: '¿Un error del pasado significa que no podré servir una misión?' },
                { speaker: 'Respuesta', side: 'right', text: 'No necesariamente. La mayoría de los errores se resuelven con un proceso de arrepentimiento guiado por el obispo. Lo importante es ser honesto y comenzar pronto.' },
              ],
            },
          ],
        },
      ],
    },
    {
      id: 's4',
      title: 'La actitud del corazón consagrado: obediencia y sacrificio',
      intro: {
        romanNumeral: 'IV',
        title: 'La actitud del corazón consagrado: obediencia y sacrificio',
        paragraphs: ['Una misión es un entrenamiento intensivo de dos años para dejar de vivir para ti mismo.'],
      },
      topics: [
        {
          id: 't4',
          title: 'Obedecer aunque no se entienda todo el porqué',
          blocks: [
            {
              type: 'highlight_verse',
              reference: 'Mosíah 3:19 (versículo ancla)',
              text: 'El hombre natural es enemigo de Dios... a menos que se someta a las persuasiones del Espíritu Santo, se despoje del hombre natural, y llegue a ser como un niño: sumiso, manso, humilde, paciente, lleno de amor.',
            },
            {
              type: 'deep_dive',
              badge: 'La realidad del campo misional',
              title: 'La escuela de dejar de vivir para uno mismo',
              paragraphs: [
                'Una misión no es un viaje con reglas incómodas — es un entrenamiento intensivo de dos años para dejar de vivir para ti mismo. Vas a obedecer horarios que no elegiste, vas a comer lo que te sirvan, vas a trabajar con un compañero que no escogiste, en un lugar que no pediste. Esa es literalmente la escuela.',
                'Cada "sacrificio pequeño" —despertarte a las 6:30, no ver tu teléfono libremente, seguir un programa diario— está diseñado para una sola cosa: quitarte el enfoque de ti mismo y ponerlo en Dios y en la gente. Los misioneros que luchan más son los que tratan de negociar su independencia. Los que más crecen son los que deciden, desde el primer día, "voy a obedecer aunque no entienda todo el porqué".',
              ],
            },
            { type: 'highlight_verse', reference: 'Lucas 9:23', text: '"Si alguno quiere venir en pos de mí, niéguese a sí mismo, y tome su cruz cada día, y sígame."' },
            { type: 'highlight_verse', reference: '1 Samuel 15:22', text: '"El obedecer es mejor que los sacrificios" — la obediencia como el sacrificio más alto que se puede ofrecer.' },
            { type: 'highlight_verse', reference: 'Mateo 16:24–25', text: '"El que pierde su vida por causa de mí, la hallará" — la paradoja del sacrificio que produce plenitud, no pérdida.' },
            {
              type: 'key_points',
              title: 'Aplicación práctica',
              points: [
                'Practica la obediencia en cosas pequeñas ahora — cumplir un horario que no te gusta, hacer una tarea sin que nadie te supervise, terminar lo que empiezas aunque te aburra.',
                'Empieza a soltar el control: deja que otros decidan un plan, un menú, una actividad, sin quejarte — es un músculo que necesitas entrenado antes de la misión.',
                'Reflexiona en oración qué significa "perder tu vida" por un tiempo — no es una frase poética, es literal: horario, teléfono, ropa, independencia, todo se consagra por dos años.',
                'Pregúntate honestamente: ¿obedezco solo cuando estoy de acuerdo, o también cuando no lo estoy? Esa respuesta predice mucho de cómo te irá en el campo.',
              ],
            },
            {
              type: 'dialogue',
              title: 'Preguntas y objeciones comunes',
              lines: [
                { speaker: 'Pregunta', side: 'left', text: '¿No es la obediencia ciega peligrosa?' },
                { speaker: 'Respuesta', side: 'right', text: 'La obediencia que se pide no es "sin pensar", es "con confianza aun sin entender todo". Se espera que preguntes, que ores, que busques entender — pero mientras tanto, actúes con fe. Es diferente de la sumisión ciega: es confianza probada en un Dios y en líderes que has llegado a conocer como dignos de confianza.' },
              ],
            },
          ],
        },
      ],
    },
    {
      id: 's5',
      title: 'Tu cuerpo como instrumento: preparación física real',
      intro: {
        romanNumeral: 'V',
        title: 'Tu cuerpo como instrumento: preparación física real',
        paragraphs: ['Cuidar tu cuerpo hoy es una forma real de prepararte espiritualmente para mañana.'],
      },
      topics: [
        {
          id: 't5',
          title: 'Ejercicio, sueño y salud antes de entrar al campo',
          blocks: [
            {
              type: 'highlight_verse',
              reference: '1 Corintios 6:19–20 (versículo ancla)',
              text: '"¿O ignoráis que vuestro cuerpo es templo del Espíritu Santo?... Glorificad, pues, a Dios en vuestro cuerpo."',
            },
            {
              type: 'deep_dive',
              badge: 'La realidad del campo misional',
              title: 'El cansancio físico se convierte en cansancio espiritual',
              paragraphs: [
                'Un misionero camina o pedalea kilómetros todos los días, carga su propia mochila, sube escaleras, toca puertas bajo sol y lluvia, y muchas veces come diferente a lo que está acostumbrado.',
                'Si tu cuerpo no está preparado, el cansancio físico se convierte en cansancio espiritual — es difícil sentir el Espíritu cuando estás agotado, deshidratado o enfermo por falta de condición física. Este no es un tema secundario: cuidar tu cuerpo hoy es una forma real de prepararte espiritualmente para mañana.',
              ],
            },
            { type: 'highlight_verse', reference: 'DyC 88:124', text: '"Levantaos temprano, para que vuestros cuerpos y mentes puedan ser vigorizados."' },
            { type: 'highlight_verse', reference: 'Lucas 2:52', text: '"Y Jesús crecía en sabiduría y en estatura, y en gracia" — el desarrollo físico forma parte del patrón divino de crecimiento.' },
            {
              type: 'key_points',
              title: 'Aplicación práctica',
              points: [
                'Empieza una rutina de ejercicio cardiovascular moderado (caminar, correr, andar en bicicleta) al menos 3–4 veces por semana varios meses antes de entrar.',
                'Practica levantarte temprano de forma consistente — el horario misionero (despertar cerca de las 6:30 a. m.) es un choque fuerte si no te has entrenado en ello.',
                'Completa exámenes médicos y dentales con mucha anticipación; resuelve tratamientos pendientes (ortodoncia, cirugías, vacunas) antes de aplicar.',
                'Aprende a cocinar algunas comidas simples y nutritivas, y a comer con moderación variedad de alimentos — te ayudará a adaptarte a la comida de otras culturas o compañeros.',
                'Practica dormir en horarios regulares y evita la costumbre de acostarte muy tarde; tu cuerpo necesita descanso consistente, no solo cantidad de horas.',
              ],
            },
          ],
        },
      ],
    },
    {
      id: 's6',
      title: 'Despedidas: familia, novia/novio y lo que se queda atrás',
      intro: {
        romanNumeral: 'VI',
        title: 'Despedidas: familia, novia/novio y lo que se queda atrás',
        paragraphs: ['No se trata de dejar de amar — se trata de aprender a amar con los pies bien plantados en el presente.'],
      },
      topics: [
        {
          id: 't6',
          title: 'Soltar con honestidad, sin fingir que no duele',
          blocks: [
            {
              type: 'highlight_verse',
              reference: 'Mateo 19:29 (versículo ancla)',
              text: '"Todo el que haya dejado casas, o hermanos, o hermanas, o padre, o madre, o mujer, o hijos, o tierras, por causa de mi nombre, recibirá cien veces más, y heredará la vida eterna."',
            },
            {
              type: 'deep_dive',
              badge: 'La realidad del campo misional',
              title: 'Amar con los pies plantados en el presente',
              paragraphs: [
                'Nadie te prepara emocionalmente para el momento de decir adiós a tu mamá en el aeropuerto, o para dejar en pausa una relación de novios que quizás no sobreviva los dos años. Es real, y está bien que duela.',
                'La actitud madura no es fingir que no importa, sino decidir con anticipación qué lugar va a ocupar cada relación durante tu servicio. Un misionero que carga emocionalmente con "extraño a mi novia" o "me preocupa mi familia" cada día, tiene menos capacidad real de estar presente para las personas que Dios pone en su camino. No se trata de dejar de amar — se trata de aprender a amar con los pies bien plantados en el presente.',
              ],
            },
            { type: 'highlight_verse', reference: 'Génesis 12:1', text: 'Dios le pide a Abraham dejar su tierra, su parentela y la casa de su padre para ir a un lugar que Él le mostraría — el primer llamado misional de la escritura implica desapego.' },
            { type: 'highlight_verse', reference: 'Eclesiastés 3:1, 5', text: '"Todo tiene su tiempo... tiempo de abrazar, y tiempo de abstenerse de abrazar" — hay estaciones legítimas para pausar ciertas relaciones.' },
            {
              type: 'key_points',
              title: 'Aplicación práctica',
              points: [
                'Habla con honestidad, antes de partir, con tu novio o novia sobre expectativas realistas — muchas relaciones de noviazgo no continúan durante la misión, y está bien nombrarlo abiertamente en vez de fingir certeza.',
                'Practica, en los meses antes de tu misión, reducir gradualmente el tiempo en redes sociales y mensajes constantes — te ayudará a acostumbrarte a la disponibilidad limitada de comunicación en el campo.',
                'Escribe una carta o graba un mensaje para tu familia antes de partir, expresando lo que quizás sea difícil decir en la despedida en persona.',
                'Decide con anticipación, en oración, cómo vas a manejar los pensamientos de nostalgia cuando aparezcan — tener un plan (orar, enfocarte en el trabajo, hablar con tu compañero) es mejor que improvisarlo en el momento.',
                'Recuerda que extrañar a alguien no es debilidad ni falta de fe — es humano; lo que se entrena es la capacidad de sentirlo y seguir avanzando.',
              ],
            },
            {
              type: 'dialogue',
              title: 'Preguntas y objeciones comunes',
              lines: [
                { speaker: 'Pregunta', side: 'left', text: '¿Es egoísta pedirle a mi novio/a que "me espere" durante la misión?' },
                { speaker: 'Respuesta', side: 'right', text: 'La mayoría de los líderes aconsejan no hacer promesas formales de espera antes de servir — la misión funciona mejor cuando el corazón y la mente están completamente disponibles para el trabajo, sin la presión de mantener un compromiso a distancia. Es más sano dejar la relación abierta y honesta que atarla con expectativas que ninguno de los dos puede garantizar.' },
              ],
            },
          ],
        },
      ],
    },
    {
      id: 's7',
      title: 'Autodisciplina: vivir sin la supervisión de tus padres',
      intro: {
        romanNumeral: 'VII',
        title: 'Autodisciplina: vivir sin la supervisión de tus padres',
        paragraphs: ['¿Quién eres cuando nadie te está mirando? Esa es la prueba real.'],
      },
      topics: [
        {
          id: 't7',
          title: 'Ser fiel a los convenios, supervisado o no',
          blocks: [
            { type: 'highlight_verse', reference: 'Proverbios 25:28 (versículo ancla)', text: '"Como ciudad derribada y sin muro, es el hombre cuyo espíritu no tiene rienda."' },
            {
              type: 'deep_dive',
              badge: 'La realidad del campo misional',
              title: 'Quién eres cuando nadie te está mirando',
              paragraphs: [
                'En casa, tus padres probablemente aún te recuerdan cosas: levántate, ora, estudia, no llegues tarde. En la misión, nadie va a hacer eso por ti excepto tu compañero, que tiene sus propios retos. El presidente de misión no está ahí para microgestionarte todos los días — confía en que tú vas a hacer lo correcto sin que te vigilen.',
                'Esa es la prueba real: ¿quién eres cuando nadie te está mirando? Los mejores misioneros no son los que tienen más talento, son los que decidieron, mucho antes de entrar, que iban a ser fieles a sus convenios estén o no supervisados.',
              ],
            },
            { type: 'highlight_verse', reference: 'Gálatas 5:22–23', text: 'El dominio propio (autocontrol) es fruto del Espíritu, no un talento natural con el que se nace — se cultiva.' },
            { type: 'highlight_verse', reference: 'DyC 58:26–28', text: '"Porque el poder está en ellos, por lo cual son agentes por sí mismos" — se espera que actúen por decisión propia, no solo por mandato constante.' },
            {
              type: 'key_points',
              title: 'Aplicación práctica',
              points: [
                'Practica ahora, en casa, cumplir compromisos personales sin que nadie te lo recuerde: hacer tu oración, tu estudio, tus tareas, sin depender de un padre que te avise.',
                'Fíjate metas pequeñas y cúmplelas por ti mismo durante varias semanas seguidas — construye evidencia de que puedes confiar en tu propia palabra.',
                'Reduce la dependencia de que otros validen tus decisiones; practica decidir y actuar, y luego evaluar el resultado con honestidad.',
                'Reflexiona: si nadie más lo supiera, ¿seguirías haciendo lo correcto? Esa pregunta, respondida con sinceridad, es el mejor termómetro de tu preparación real.',
              ],
            },
          ],
        },
      ],
    },
    {
      id: 's8',
      title: 'Aprender a amar a extraños: el corazón del misionero',
      intro: {
        romanNumeral: 'VIII',
        title: 'Aprender a amar a extraños: el corazón del misionero',
        paragraphs: ['Ese amor no nace de la personalidad, nace de practicar ver a la gente como hijos e hijas de Dios, uno a la vez.'],
      },
      topics: [
        {
          id: 't8',
          title: 'Ver a cada persona como Dios la ve',
          blocks: [
            {
              type: 'highlight_verse',
              reference: 'Mosíah 28:3 (versículo ancla)',
              text: 'Los hijos de Mosíah no soportaban la idea de que ni una sola alma pereciera; el pensar en la angustia eterna de otros les causaba temblar de dolor por ellos.',
            },
            {
              type: 'deep_dive',
              badge: 'La realidad del campo misional',
              title: 'El verdadero entrenamiento del corazón',
              paragraphs: [
                'Vas a tocar cientos, quizás miles de puertas. La mayoría te va a decir que no, algunos con amabilidad, otros no tanto. La pregunta que define a un misionero no es "¿cuántos me rechazaron hoy?" sino "¿logré ver a esta persona como Dios la ve, aunque solo hablamos treinta segundos?"',
                'Ese es el verdadero entrenamiento: desarrollar la capacidad de amar genuinamente a un extraño en la puerta de su casa, sin necesitar nada de vuelta, ni siquiera que te escuchen. Ese amor no nace de la personalidad, nace de practicar ver a la gente como hijos e hijas de Dios, uno a la vez.',
              ],
            },
            { type: 'highlight_verse', reference: 'Juan 13:34–35', text: '"Un mandamiento nuevo os doy: que os améis unos a otros... en esto conocerán todos que sois mis discípulos."' },
            { type: 'highlight_verse', reference: 'Alma 26:1–3, 37', text: 'Amón se regocija en el Señor por cada alma alcanzada, atribuyendo el éxito no a su propia fuerza sino al poder de Dios obrando en él.' },
            {
              type: 'key_points',
              title: 'Aplicación práctica',
              points: [
                'Practica hoy hablar con desconocidos con genuino interés (un cajero, un vecino, alguien en el autobús) — no para "entrenar técnica misional", sino para entrenar el hábito de ver personas, no obstáculos.',
                'Sirve activamente en tu barrio y comunidad antes de la misión — el servicio desinteresado construye el músculo del amor que después usarás con investigadores.',
                'Antes de dormir, ora específicamente por personas que aún no conoces pero conocerás en tu misión — empieza a amarlas antes de verlas.',
                'Cuando sientas rechazo (real o anticipado), practica preguntarte: "¿qué necesita esta persona, más allá de lo que yo quería de ella?" — cambia el enfoque de tu ego al bienestar del otro.',
              ],
            },
          ],
        },
      ],
    },
    {
      id: 's9',
      title: 'Manejar el rechazo, la crítica y el desánimo',
      intro: {
        romanNumeral: 'IX',
        title: 'Manejar el rechazo, la crítica y el desánimo',
        paragraphs: ['La diferencia entre rendirse y perseverar casi nunca es sentir menos dolor — es decidir seguir de pie un día más.'],
      },
      topics: [
        {
          id: 't9',
          title: 'Seguir de pie aunque el sentimiento no haya cambiado',
          blocks: [
            {
              type: 'highlight_verse',
              reference: '2 Corintios 4:8–9 (versículo ancla)',
              text: '"Atribulados en todo, mas no angustiados; en apuros, mas no desesperados; perseguidos, mas no desamparados; derribados, pero no destruidos."',
            },
            {
              type: 'deep_dive',
              badge: 'La realidad del campo misional',
              title: 'Ni siquiera Amón se libró del desánimo',
              paragraphs: [
                'Vas a llorar en algún momento de tu misión. Vas a tener días donde te preguntes si vale la pena. Eso no significa que algo salió mal contigo — significa que estás haciendo algo real y difícil.',
                'Incluso Amón, uno de los misioneros más exitosos de todo el Libro de Mormón, admite que él y sus hermanos casi desmayaron de desánimo antes de ver el fruto de su trabajo. La diferencia entre rendirse y perseverar casi nunca es sentir menos dolor — es decidir seguir de pie un día más, aunque el sentimiento no haya cambiado todavía.',
              ],
            },
            { type: 'highlight_verse', reference: 'Alma 26:27, 29–30', text: 'Amón reconoce que él y sus hermanos también sintieron desánimo profundo en su misión, pero no se rindieron — el desánimo no es señal de fracaso ni de falta de fe.' },
            { type: 'highlight_verse', reference: 'Hebreos 12:1–3', text: 'Considerar a Cristo, quien soportó la contradicción de pecadores, para no cansarse ni desmayar en el ánimo.' },
            {
              type: 'key_points',
              title: 'Aplicación práctica',
              points: [
                'Antes de la misión, identifica cómo sueles reaccionar al rechazo o la crítica en tu vida diaria — ese patrón probablemente se repetirá en el campo, así que es mejor conocerlo ahora.',
                'Practica una respuesta interna estándar para el rechazo: una oración corta, una escritura memorizada, una frase que te recuerde tu propósito — tenerla lista de antemano ayuda en el momento difícil.',
                'Aprende a diferenciar la crítica que señala algo real que debes mejorar, del rechazo que simplemente refleja que la otra persona no está lista — no todo rechazo es sobre ti.',
                'Habla abiertamente con tu futuro compañero, tu presidente de misión, o tus padres cuando el desánimo se vuelva persistente — pedir ayuda a tiempo es fortaleza, no debilidad.',
              ],
            },
          ],
        },
      ],
    },
    {
      id: 's10',
      title: 'El proceso de solicitud paso a paso',
      intro: {
        romanNumeral: 'X',
        title: 'El proceso de solicitud paso a paso',
        paragraphs: ['"Enviad la palabra... segad mientras es de día... obrad con toda vuestra alma" (DyC 33:8–10).'],
      },
      topics: [
        {
          id: 't10',
          title: 'De la primera entrevista con el obispo al llamamiento',
          blocks: [
            {
              type: 'highlight_verse',
              reference: 'DyC 33:8–10 (versículo ancla)',
              text: '"Enviad la palabra... segad mientras es de día... obrad con toda vuestra alma."',
            },
            {
              type: 'timeline',
              items: [
                { label: '~6 meses antes', text: 'Comienza el proceso con tu obispo; inicia exámenes médicos, dentales y cualquier documento (pasaporte).', color: 'gold' },
                { label: 'Entrevistas', text: 'Entrevista con el obispo, luego con el presidente de estaca; ambos recomiendan al candidato en el sistema en línea.', color: 'blue' },
                { label: 'Solicitud en línea', text: 'Se completa el formulario en el Portal Misionero: información personal, salud, idiomas, disponibilidad.', color: 'gold' },
                { label: 'Llamamiento', text: 'La asignación de misión y fecha de entrada la determinan líderes inspirados; llega por carta o correo electrónico oficial.', color: 'green' },
                { label: 'Antes de entrar', text: 'Compras (ropa, maletas), bendición patriarcal (si aún no la tiene), despedida en el barrio, entrevista final.', color: 'gold' },
              ],
            },
            {
              type: 'key_points',
              title: 'Aplicación práctica',
              points: [
                'Recibe tu bendición patriarcal antes de aplicar si aún no la tienes.',
                'Ten listo tu pasaporte con mucha anticipación; los trámites pueden tardar semanas o meses.',
                'Sé honesto y detallado en la sección de salud del formulario.',
                'Confía en que el llamamiento refleja inspiración, aunque lo emitan líderes humanos.',
              ],
            },
          ],
        },
      ],
    },
  ],
}
