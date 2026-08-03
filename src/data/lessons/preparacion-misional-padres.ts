import type { Lesson } from '@/types/doctrine'

export const preparacionMisionalPadres: Lesson = {
  id: 'preparacion-misional-padres',
  moduleId: 'vida-familiar-personal',
  title: 'Preparación Misional: Guía para Padres',
  subtitle: 'Cómo apoyar a un hijo o hija que se prepara para servir',
  author: 'Basado en principios de Predicad Mi Evangelio, discursos de líderes de la Iglesia (parafraseados) y escrituras',
  description:
    'Guía para padres que preparan a un hijo o hija para el servicio misional — cómo apoyar espiritual, financiera y emocionalmente antes, durante y después de la misión: el papel de preparar sin presionar, cultivar una fe propia, habilidades prácticas, actitud de trabajo, finanzas familiares, cartas, dejar ir con fe, apoyo en momentos difíciles y el regreso a casa.',
  level: 'BÁSICO',
  icon: '🤝',
  duration: 90,
  order: 9,
  status: 'PUBLISHED',
  studyBodyPlain: '',
  originalBodyPlain: '',
  previousLessonId: null,
  nextLessonId: null,
  studySections: [
    {
      id: 's1',
      title: 'Su papel: preparar, no presionar',
      intro: {
        romanNumeral: 'I',
        title: 'Su papel: preparar, no presionar',
        paragraphs: ['Su trabajo no es fabricar el deseo de servir — es crear las condiciones para que sea auténtico.'],
      },
      topics: [
        {
          id: 't1',
          title: 'Crear el ambiente donde el deseo pueda nacer',
          blocks: [
            {
              type: 'highlight_verse',
              reference: 'Proverbios 22:6 (versículo ancla)',
              text: '"Instruye al niño en su camino, y aun cuando fuere viejo no se apartará de él."',
            },
            {
              type: 'deep_dive',
              badge: 'La realidad del campo misional',
              title: '¿Decisión propia, o expectativa disfrazada?',
              paragraphs: [
                'Su hijo o hija no va a servir una misión poderosa porque usted lo empujó a la puerta del centro de capacitación. Va a servir una misión poderosa porque, años antes, usted construyó el ambiente donde el deseo de servir pudo nacer y crecer por sí mismo.',
                'La diferencia entre un joven que "cumple" su misión y uno que la vive con todo el corazón casi siempre se remonta a esto: ¿la decisión fue realmente suya, o fue la expectativa de sus padres disfrazada de decisión propia? Su trabajo no es fabricar el deseo — es crear las condiciones para que sea auténtico.',
              ],
            },
            { type: 'highlight_verse', reference: 'Josué 24:15', text: '"Escogeos hoy a quién sirváis... pero yo y mi casa serviremos a Jehová." Josué decide el rumbo de su casa, pero cada persona debe elegir su propia fe.' },
            { type: 'highlight_verse', reference: 'DyC 68:25–28', text: 'Los padres tienen la responsabilidad de enseñar a sus hijos a orar y a caminar rectamente ante el Señor desde temprana edad.' },
            {
              type: 'key_points',
              title: 'Aplicación práctica',
              points: [
                'El deseo de servir debe nacer del joven, no ser impuesto — su papel es crear un ambiente donde ese deseo pueda crecer con naturalidad.',
                'Evite comparar a su hijo o hija con otros jóvenes que ya sirven o sirvieron; cada preparación tiene su propio ritmo.',
                'Hable de la misión como una invitación gozosa, no como una obligación cargada de miedo o culpa.',
                'Si su hijo o hija duda o necesita más tiempo, permita ese proceso — la fecha de graduación no obliga a aplicar de inmediato.',
              ],
            },
            {
              type: 'dialogue',
              title: 'Preguntas y objeciones comunes',
              lines: [
                { speaker: 'Pregunta', side: 'left', text: '¿Qué hago si mi hijo no muestra interés en servir una misión?' },
                { speaker: 'Respuesta', side: 'right', text: 'Enfóquese en fortalecer su relación personal con Dios más que en presionar sobre la misión en sí. Siga orando, invitando y siendo un buen ejemplo, sin ultimátums.' },
              ],
            },
          ],
        },
      ],
    },
    {
      id: 's2',
      title: 'Cultivar una fe propia, no prestada',
      intro: {
        romanNumeral: 'II',
        title: 'Cultivar una fe propia, no prestada',
        paragraphs: ['La fe prestada se rompe en el primer día difícil de la misión.'],
      },
      topics: [
        {
          id: 't2',
          title: 'Ayudar a buscar respuestas propias, no transferir las suyas',
          blocks: [
            {
              type: 'highlight_verse',
              reference: 'Enós 1:1–3 (versículo ancla)',
              text: 'Enós describe que las palabras de su padre, oídas a menudo, quedaron "profundamente grabadas" en su corazón — pero el testimonio se volvió suyo solo hasta que él mismo clamó a Dios en oración personal.',
            },
            {
              type: 'deep_dive',
              badge: 'La realidad del campo misional',
              title: 'Transferir el testimonio no funciona',
              paragraphs: [
                'Es tentador, como padre, sentir que su trabajo es "transferir" su testimonio a su hijo — llevarlo a la Iglesia, hacerlo memorizar escrituras, corregir cada duda de inmediato. Pero la fe prestada se rompe en el primer día difícil de la misión.',
                'Lo que realmente ayuda es enseñarle a su hijo o hija a buscar sus propias respuestas: no responder cada pregunta de inmediato, sino a veces decir "esa es una gran pregunta, ¿qué crees tú? ¿has orado al respecto?" Eso construye músculo espiritual real, no dependencia.',
              ],
            },
            { type: 'highlight_verse', reference: '2 Timoteo 1:5', text: 'Pablo reconoce la fe que primero habitó en la abuela y la madre de Timoteo, y ahora también en él — la fe se transmite, pero debe echar raíz propia.' },
            { type: 'highlight_verse', reference: 'Alma 5:45–46', text: 'Alma testifica que sabe la verdad por sí mismo, por haber ayunado y orado, no porque otro se lo haya dicho.' },
            {
              type: 'key_points',
              title: 'Aplicación práctica',
              points: [
                'Anime a su hijo o hija a leer las escrituras por su cuenta, no solo cuando usted lo dirige o lo recuerda.',
                'Cuando surjan dudas honestas, resista la tentación de dar la respuesta inmediata — ayúdelo a investigar y orar por su cuenta primero.',
                'Comparta sus propias experiencias espirituales en primera persona ("yo sentí...", "a mí me pasó...") en vez de solo enseñar principios abstractos — el testimonio se contagia mejor por experiencia compartida que por instrucción.',
                'Anime el ayuno y la oración personal con un propósito específico relacionado con su preparación misional, no solo como rutina familiar.',
              ],
            },
          ],
        },
      ],
    },
    {
      id: 's3',
      title: 'Habilidades prácticas: caminar, bicicleta y licencia de conducir',
      intro: {
        romanNumeral: 'III',
        title: 'Habilidades prácticas: caminar, bicicleta y licencia de conducir',
        paragraphs: ['Esta no es una tarea del presidente de misión; es una tarea que empieza en casa, meses o años antes.'],
      },
      topics: [
        {
          id: 't3',
          title: 'Resistencia física y movilidad, entrenadas antes de partir',
          blocks: [
            {
              type: 'highlight_verse',
              reference: 'Lucas 10:1, 4 (versículo ancla)',
              text: 'El Señor envía a los setenta de dos en dos a cada ciudad, con instrucciones sencillas y sin bolsa ni alforja — el trabajo misional bíblico siempre ha requerido movilidad y resistencia física.',
            },
            {
              type: 'deep_dive',
              badge: 'La realidad del campo misional',
              title: 'El primer mes no debería ser más difícil de lo necesario',
              paragraphs: [
                'Muchos misioneros nuevos caminan o pedalean más en su primera semana de misión que en todo el último año de su vida en casa. Si su hijo o hija llega sin la resistencia física básica, sin saber andar cómodamente en bicicleta, o sin haber manejado nunca, el primer mes se vuelve mucho más difícil de lo necesario — y ese cansancio extra le resta energía para lo que realmente importa: las personas.',
                'Esta no es una tarea del presidente de misión; es una tarea que empieza en casa, con usted, meses o años antes.',
              ],
            },
            { type: 'highlight_verse', reference: 'DyC 88:124', text: '"Levantaos temprano, para que vuestros cuerpos y mentes puedan ser vigorizados" — la resistencia física se entrena, no aparece de la nada.' },
            {
              type: 'key_points',
              title: 'Aplicación práctica',
              points: [
                'Anime caminatas familiares regulares, de distancias crecientes, meses antes de la misión — construir resistencia real, no solo "estar en forma".',
                'Si su hijo o hija no sabe andar en bicicleta con soltura, dedique tiempo a practicar juntos; en muchas misiones la bicicleta es el medio de transporte principal.',
                'Ayude a su hijo o hija a obtener su licencia de conducir antes de la misión si es posible — algunas asignaciones misionales requieren manejar, y llegar sin experiencia previa añade estrés innecesario.',
                'Practique con ellos cargar una mochila con peso realista durante caminatas — el cuerpo necesita acostumbrarse a cargar sus pertenencias diariamente.',
                'Incluya actividad física regular como hábito familiar, no como un proyecto de última hora antes de la fecha de entrada.',
              ],
            },
          ],
        },
      ],
    },
    {
      id: 's4',
      title: 'Enseñar a hablar con personas: vencer la timidez',
      intro: {
        romanNumeral: 'IV',
        title: 'Enseñar a hablar con personas: vencer la timidez',
        paragraphs: ['Esa habilidad casi nunca aparece de la noche a la mañana en el campo — se entrena en casa, mucho antes de que llegue la placa misionera.'],
      },
      topics: [
        {
          id: 't4',
          title: 'Entrenar la confianza social antes de tocar la primera puerta',
          blocks: [
            {
              type: 'highlight_verse',
              reference: 'Hechos 8:29–31, 35 (versículo ancla)',
              text: 'Felipe se acerca a un extraño en el camino, le pregunta con naturalidad si entiende lo que lee, y a partir de ahí le predica a Jesús — un modelo sencillo de iniciar una conversación con un desconocido.',
            },
            {
              type: 'deep_dive',
              badge: 'La realidad del campo misional',
              title: 'La timidez no es falta de fe, pero sí un obstáculo real',
              paragraphs: [
                'La timidez no es un defecto de carácter ni una señal de poca fe — pero si no se trabaja antes de la misión, se convierte en un obstáculo real todos los días, en cada puerta. Un misionero necesita poder iniciar una conversación con un completo extraño, docenas de veces al día, sin que el miedo al rechazo lo paralice.',
                'Esa habilidad casi nunca aparece de la noche a la mañana en el campo — se entrena en casa, en la tienda, en el trabajo, en el barrio, mucho antes de que llegue la placa misionera.',
              ],
            },
            { type: 'highlight_verse', reference: '1 Timoteo 4:12', text: '"Ninguno tenga en poco tu juventud, sino sé ejemplo... en palabra" — la capacidad de hablar con confianza se menciona junto a otras cualidades a desarrollar activamente.' },
            {
              type: 'key_points',
              title: 'Aplicación práctica',
              points: [
                'Anime (sin forzar) a su hijo o hija a practicar pedir cosas, hacer preguntas, o iniciar pláticas breves con desconocidos en situaciones cotidianas y seguras (una tienda, un evento familiar, el barrio).',
                'Involúcrelo en llamadas telefónicas, trámites, o conversaciones con adultos que normalmente usted haría por él — la práctica de comunicarse con autoridad y respeto se entrena con repetición.',
                'Practique juntos, en casa, presentaciones cortas — cómo saludar a alguien nuevo, cómo mantener contacto visual, cómo recuperarse con gracia de un silencio incómodo.',
                'Anime su participación activa en actividades de la Iglesia y del barrio donde tenga que interactuar con personas de todas las edades, no solo con su grupo de amigos cercano.',
                'Si la timidez es intensa o hay ansiedad social significativa, considere buscar apoyo profesional antes de la misión — es una forma responsable de preparación, no una señal de debilidad.',
              ],
            },
          ],
        },
      ],
    },
    {
      id: 's5',
      title: 'Ayudar a mejorar la actitud: trabajo, responsabilidad y disciplina',
      intro: {
        romanNumeral: 'V',
        title: 'Ayudar a mejorar la actitud: trabajo, responsabilidad y disciplina',
        paragraphs: ['La actitud de trabajo esforzado se puede entrenar como cualquier otro músculo.'],
      },
      topics: [
        {
          id: 't5',
          title: 'Consecuencias reales antes de que los riesgos sean mayores',
          blocks: [
            {
              type: 'highlight_verse',
              reference: 'Eclesiastés 9:10 (versículo ancla)',
              text: '"Todo lo que te viniere a la mano para hacer, hazlo según tus fuerzas" — el hábito del trabajo esforzado se entrena en las tareas pequeñas de cada día.',
            },
            {
              type: 'deep_dive',
              badge: 'La realidad del campo misional',
              title: 'Un choque brutal de expectativas, o un músculo ya entrenado',
              paragraphs: [
                'Un misionero trabaja de lunes a sábado, casi sin días libres, con un horario que empieza temprano y termina tarde, sin la opción de "no tener ganas hoy". Si en casa su hijo o hija está acostumbrado a que le resuelvan todo, a dejar tareas a medias, o a trabajar solo cuando lo supervisan, la misión se convierte en un choque brutal de expectativas.',
                'La buena noticia es que la actitud de trabajo esforzado se puede entrenar como cualquier otro músculo — empezando con tareas domésticas reales, consecuencias reales, y expectativas claras, mucho antes de que llegue el llamamiento.',
              ],
            },
            { type: 'highlight_verse', reference: 'DyC 58:26–28', text: '"El hombre debe ser movido a hacer muchas cosas por su propia voluntad" — la responsabilidad autoiniciada, no la que solo responde a órdenes.' },
            { type: 'highlight_verse', reference: 'Proverbios 22:29', text: '"¿Has visto hombre solícito en su trabajo? Delante de los reyes estará."' },
            {
              type: 'key_points',
              title: 'Aplicación práctica',
              points: [
                'Asigne responsabilidades reales en casa (no solo simbólicas) con consecuencias claras si no se cumplen — un misionero necesita saber terminar lo que empieza sin que nadie lo esté vigilando.',
                'Anime un trabajo de medio tiempo o de verano antes de la misión — trabajar bajo un jefe que no es su padre o madre enseña una responsabilidad distinta a la que se aprende en casa.',
                'Evite rescatar constantemente a su hijo o hija de las consecuencias de la procrastinación o el descuido — dejar que enfrente resultados reales (aunque sean incómodos) construye carácter antes de que los riesgos sean mayores en el campo.',
                'Reconozca y celebre el esfuerzo, no solo el resultado perfecto — esto entrena la actitud de persistir aun cuando el trabajo misional no dé fruto inmediato.',
                'Modele usted mismo una actitud de trabajo esforzado y alegre — los jóvenes imitan la actitud ante el trabajo que ven en casa más de lo que imitan lo que se les dice.',
              ],
            },
          ],
        },
      ],
    },
    {
      id: 's6',
      title: 'Preparación financiera familiar',
      intro: {
        romanNumeral: 'VI',
        title: 'Preparación financiera familiar',
        paragraphs: ['"Que se preparen para las cosas que vendrán" (DyC 118:3) — la preparación anticipada, incluida la financiera, refleja fe con prudencia.'],
      },
      topics: [
        {
          id: 't6',
          title: 'Calcular los gastos antes de edificar la torre',
          blocks: [
            {
              type: 'highlight_verse',
              reference: 'Lucas 14:28 (versículo ancla)',
              text: '"¿Quién de vosotros, queriendo edificar una torre, no se sienta primero y calcula los gastos, a ver si tiene lo que necesita para acabarla?"',
            },
            { type: 'highlight_verse', reference: 'DyC 118:3', text: '"Que se preparen para las cosas que vendrán" — la preparación anticipada, incluida la financiera, refleja fe con prudencia.' },
            {
              type: 'key_points',
              title: 'Aplicación práctica',
              points: [
                'El costo mensual de la misión es el mismo para todos los misioneros del mundo, independientemente del país donde sirvan.',
                'Comience un fondo de ahorro familiar tan pronto como sea posible, idealmente varios años antes.',
                'Anime a su hijo o hija a contribuir con su propio trabajo (empleos de verano, ahorro personal) — fortalece su sentido de propiedad sobre la decisión de servir.',
                'Consulte con el obispo si la familia necesita apoyo del fondo misional del barrio o de la Iglesia.',
                'Planifique también los gastos previos: exámenes médicos, ropa misionera, maletas, pasaporte y visas.',
              ],
            },
          ],
        },
      ],
    },
    {
      id: 's7',
      title: 'Cartas y comunicación durante la misión',
      intro: {
        romanNumeral: 'VII',
        title: 'Cartas y comunicación durante la misión',
        paragraphs: ['Su palabra escrita tiene más peso del que imagina en este momento de su vida — úsela para empujarlo hacia adelante, no hacia atrás.'],
      },
      topics: [
        {
          id: 't7',
          title: 'Anclar hacia adelante, no tirar hacia atrás',
          blocks: [
            {
              type: 'highlight_verse',
              reference: 'Filipenses 4:8 (versículo ancla)',
              text: '"Todo lo que es verdadero... todo lo que es de buen nombre... en esto pensad" — un buen principio para el tono de cada carta que se envía a un hijo o hija en la misión.',
            },
            {
              type: 'deep_dive',
              badge: 'La realidad del campo misional',
              title: 'Cada carta ancla hacia adelante o tira hacia atrás',
              paragraphs: [
                'Cada carta que usted escribe es una oportunidad de anclar a su hijo o hija en el presente de su misión, o de tirar de él hacia atrás, hacia la casa. No es exageración: muchos misioneros que luchan con el desánimo pueden rastrear parte de esa lucha a cartas bien intencionadas pero cargadas de nostalgia.',
                'Su palabra escrita tiene más peso del que imagina en este momento de su vida — úsela para empujarlo hacia adelante, no hacia atrás.',
              ],
            },
            { type: 'highlight_verse', reference: '3 Juan 1:4', text: '"No tengo yo mayor gozo que este, el oír que mis hijos andan en la verdad." El gozo de un padre no depende de tener al hijo cerca, sino de saberlo fiel.' },
            {
              type: 'key_points',
              title: 'Aplicación práctica',
              points: [
                'Escriba con regularidad (generalmente semanal) pero mantenga el tono animoso; evite noticias que generen preocupación innecesaria o nostalgia excesiva salvo que sea información esencial.',
                'Comparta buenas noticias del barrio, de hermanos y amigos, y palabras de aliento específicas sobre su progreso.',
                'Evite preguntar repetidamente "¿cuándo vuelves?" o contar los días.',
                'Ante una dificultad familiar seria, consulte primero con el presidente de misión sobre cómo y cuándo comunicarlo.',
                'Celebre las dificultades que su hijo o hija comparta como señales de crecimiento, no como motivo de alarma.',
              ],
            },
            {
              type: 'dialogue',
              title: 'Preguntas y objeciones comunes',
              lines: [
                { speaker: 'Pregunta', side: 'left', text: '¿Con qué frecuencia puedo comunicarme con mi hijo o hija en la misión?' },
                { speaker: 'Respuesta', side: 'right', text: 'Las políticas de comunicación las determina cada misión bajo la dirección del presidente de misión. Consulte el manual de misionero y las cartas iniciales de la misión.' },
              ],
            },
          ],
        },
      ],
    },
    {
      id: 's8',
      title: 'Dejar ir con fe',
      intro: {
        romanNumeral: 'VIII',
        title: 'Dejar ir con fe',
        paragraphs: ['No está perdiendo a su hijo, está viéndolo convertirse en quien realmente es capaz de ser.'],
      },
      topics: [
        {
          id: 't8',
          title: 'Confiar en algo más grande que el propio deseo de tenerlo cerca',
          blocks: [
            {
              type: 'highlight_verse',
              reference: '1 Samuel 1:27–28 (versículo ancla)',
              text: 'Ana, después de años orando por un hijo, lo lleva al templo y lo entrega al servicio del Señor: "yo, pues, también lo dedico al Señor."',
            },
            {
              type: 'deep_dive',
              badge: 'La realidad del campo misional',
              title: 'El día que algo en usted también cambia',
              paragraphs: [
                'El día que deje a su hijo o hija en el centro de capacitación misional, algo en usted también va a cambiar. Es correcto sentir esa pérdida — no está perdiendo a su hijo, está viéndolo convertirse en quien realmente es capaz de ser, y eso a veces duele tanto como alegra.',
                'Ana no dejó de amar a Samuel cuando lo entregó al templo; lo amó lo suficiente como para confiar en algo más grande que su propio deseo de tenerlo cerca.',
              ],
            },
            { type: 'highlight_verse', reference: 'Salmos 127:3', text: '"He aquí, herencia de Jehová son los hijos" — recordar que en última instancia pertenecen a Dios ayuda a soltar con confianza.' },
            { type: 'highlight_verse', reference: 'Isaías 41:10', text: '"No temas, porque yo estoy contigo" — promesa aplicable tanto al misionero como a los padres que se quedan.' },
            {
              type: 'key_points',
              title: 'Aplicación práctica',
              points: [
                'Es normal sentir tristeza y ansiedad al despedir a un hijo o hija — reconozca esas emociones sin dejar que se conviertan en el mensaje principal que su hijo perciba antes de partir.',
                'Prepare a los hermanos menores para el cambio en la dinámica familiar.',
                'Busque su propio apoyo emocional: cónyuge, amigos, el obispo, otros padres de misioneros — no cargue solo con la adaptación.',
                'Recuerde que "dejar ir" no es lo mismo que "desconectarse" — sigue siendo un padre presente a través de la oración, las cartas y el ejemplo.',
                'Aproveche este tiempo también para su propio crecimiento espiritual — muchos encuentran que la misión de un hijo fortalece su propia fe.',
              ],
            },
          ],
        },
      ],
    },
    {
      id: 's9',
      title: 'Apoyar durante los momentos difíciles',
      intro: {
        romanNumeral: 'IX',
        title: 'Apoyar durante los momentos difíciles',
        paragraphs: ['Su papel más poderoso no es resolver el problema a distancia, sino transmitir una calma sólida.'],
      },
      topics: [
        {
          id: 't9',
          title: 'Confiar en el proceso en vez de rescatar a distancia',
          blocks: [
            {
              type: 'highlight_verse',
              reference: 'Gálatas 6:9 (versículo ancla)',
              text: '"No nos cansemos, pues, de hacer bien; porque a su tiempo segaremos, si no desmayamos."',
            },
            {
              type: 'deep_dive',
              badge: 'La realidad del campo misional',
              title: 'El instinto de rescatar no siempre es lo que más ayuda',
              paragraphs: [
                'Va a recibir una carta o llamada donde su hijo o hija suene desanimado, quizás llorando, quizás cuestionando si puede continuar. Su primer instinto será rescatar — decirle que puede volver a casa si lo necesita. Ese instinto viene del amor, pero no siempre es lo que más ayuda.',
                'La mayoría de las tormentas emocionales de una misión pasan; su papel más poderoso en ese momento no es resolver el problema a distancia, sino transmitir una calma sólida: "confío en ti, confío en tu presidente de misión, y confío en que Dios está contigo ahí mismo donde estás".',
              ],
            },
            { type: 'highlight_verse', reference: '2 Corintios 4:8–9', text: '"Atribulados en todo, mas no angustiados; en apuros, mas no desesperados" — normaliza la dificultad sin negar la fortaleza disponible por medio de Cristo.' },
            {
              type: 'key_points',
              title: 'Aplicación práctica',
              points: [
                'Es normal que un misionero pase por momentos de desánimo, choques con un compañero, o dudas sobre continuar — no entre en pánico ni sugiera inmediatamente "regresar a casa" como primera opción.',
                'Anime a su hijo o hija a hablar primero con su presidente de misión ante dificultades serias.',
                'Si surge un tema de salud mental, tome en serio la comunicación con el presidente de misión y, de ser necesario, los recursos de apoyo de la Iglesia.',
                'Evite minimizar sus luchas ("todos los misioneros pasan por eso") o catastrofizarlas ("¿quieres que hablemos de que regreses?") — valide el sentimiento y refuerce su capacidad de superarlo con ayuda.',
              ],
            },
            {
              type: 'dialogue',
              title: 'Preguntas y objeciones comunes',
              lines: [
                { speaker: 'Pregunta', side: 'left', text: '¿Qué pasa si mi hijo o hija quiere regresar antes de tiempo?' },
                { speaker: 'Respuesta', side: 'right', text: 'Esta decisión se maneja siempre junto con el presidente de misión, quien evalúa la situación específica. No es una decisión que los padres deban tomar a distancia ni presionar por teléfono o carta; el mejor apoyo es confiar en ese proceso y recibir a su hijo o hija sin juicio, sea cual sea el resultado.' },
              ],
            },
          ],
        },
      ],
    },
    {
      id: 's10',
      title: 'Preparar el regreso a casa',
      intro: {
        romanNumeral: 'X',
        title: 'Preparar el regreso a casa',
        paragraphs: ['El regreso puede ser tan desafiante como la salida — su hijo o hija ha cambiado, y la familia también.'],
      },
      topics: [
        {
          id: 't10',
          title: 'Una bienvenida gozosa, sin condiciones ni prisas',
          blocks: [
            {
              type: 'highlight_verse',
              reference: 'Lucas 15:20 (versículo ancla)',
              text: '"Y cuando aún estaba lejos, lo vio su padre, y fue movido a misericordia, y corrió, y se echó sobre su cuello, y le besó." El modelo bíblico de una bienvenida gozosa y sin condiciones.',
            },
            { type: 'highlight_verse', reference: 'Eclesiastés 3:1', text: '"Todo tiene su tiempo, y todo lo que se quiere debajo del cielo tiene su hora" — la transición de vuelta a casa también necesita su propio tiempo de ajuste.' },
            {
              type: 'key_points',
              title: 'Aplicación práctica',
              points: [
                'El regreso puede ser tan desafiante como la salida — su hijo o hija ha cambiado, y la familia también.',
                'Evite la presión inmediata de decisiones grandes (universidad, matrimonio, trabajo) en las primeras semanas.',
                'Pregunte activamente sobre su misión, sus conversos, sus compañeros — muchos misioneros sienten que nadie quiere realmente escuchar los detalles.',
                'Anímelo/a a mantener buenos hábitos desarrollados en la misión, integrándolos naturalmente a la nueva rutina.',
              ],
            },
          ],
        },
      ],
    },
  ],
}
