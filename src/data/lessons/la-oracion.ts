import type { Lesson } from '@/types/doctrine'

export const laOracion: Lesson = {
  id: 'la-oracion',
  moduleId: 'vida-familiar-personal',
  title: 'La Oración',
  subtitle: 'El don más sublime — comunicación con el Padre',
  author: 'Fuentes principales: Alma 34, 3 Nefi 18, Holland, Scott, Bednar',
  description:
    'La oración no es un ritual — es una conversación real con el Ser Supremo del universo que es tu Padre. Cómo orar, qué esperar, qué hacer cuando el cielo parece cerrado, y cómo vivir en oración continua.',
  level: 'BÁSICO',
  icon: '🕯️',
  duration: 65,
  order: 2,
  status: 'PUBLISHED',
  studyBodyPlain: '',
  originalBodyPlain: '',
  previousLessonId: 'proclamacion-familia',
  nextLessonId: null,
  studySections: [
    // ─── SECCIÓN I ───────────────────────────────────────────────────────────
    {
      id: 's1',
      title: 'El Don más Sublime',
      intro: {
        romanNumeral: 'I',
        title: 'El Don más Sublime',
        paragraphs: [
          'Antes de aprender cómo orar, hay que entender con quién estamos hablando. La oración no es un ejercicio de relajación ni un mantra espiritual. Es comunicación directa con el Ser más poderoso del universo — que resulta ser literalmente tu Padre.',
          'Richard G. Scott lo expresó mejor que nadie: "Piénsalo: el Ser Supremo absoluto, el personaje que más todo lo sabe, todo lo ve y todo lo puede, te alienta a ti y a mí, insignificantes como somos, a conversar con Él como nuestro Padre." Esa es la oración.',
        ],
      },
      topics: [
        {
          id: 't1',
          title: 'No una Obligación — un Don',
          blocks: [
            {
              type: 'leader_quote',
              quote: 'La oración es un don sublime de nuestro Padre Celestial para cada alma. Piénsalo: el Ser Supremo absoluto, el personaje que más todo lo sabe, todo lo ve y todo lo puede, te alienta a ti y a mí, insignificantes como somos, a conversar con Él como nuestro Padre. No necesitamos cita previa. Nuestra súplica puede ser breve o puede ocupar todo el tiempo que sea necesario.',
              name: 'Richard G. Scott',
              role: '"Using the Supernal Gift of Prayer", Conferencia General, abril 2007 (trad.)',
            },
            {
              type: 'paragraph',
              text: 'Un don — no un deber. Un privilegio — no una obligación. Scott describe cómo Dios "ha creado innumerables cosmos y los ha poblado con mundos", y sin embargo tú y yo podemos hablarle personalmente y Él siempre responderá. No hay fila de espera. No hay jerarquía de acceso. El hijo del rey más pobre de la tierra tiene acceso directo al Rey del universo en cualquier momento.',
            },
            {
              type: 'highlight_verse',
              text: 'Orad siempre, y yo derramaré mi Espíritu sobre vosotros, y grande será vuestra bendición — sí, aun más de lo que sois capaces de soportar.',
              reference: 'Doctrina y Convenios 19:38',
            },
            {
              type: 'leader_quote',
              quote: 'Nuestras oraciones son nuestra hora más dulce, nuestro más sincero deseo, nuestra forma de adoración más simple y más pura. Dios escucha cada oración que ofrecemos y responde a cada una de ellas según el camino que ha trazado para nuestra perfección.',
              name: 'Jeffrey R. Holland',
              role: '"Motions of a Hidden Fire", Conferencia General, abril 2024 (trad.)',
            },
            {
              type: 'paragraph',
              text: 'Holland pronunció ese discurso habiendo sobrevivido una crisis médica seria que lo hospitalizó durante semanas — ocurrida apenas 48 horas después del funeral de su esposa Pat. Lo que lo sostuvo durante esas semanas fue exactamente lo que estaba describiendo: la oración como la hora más dulce, el lugar donde Dios te responde. Esas palabras no vinieron de la teoría.',
            },
          ],
        },
        {
          id: 't2',
          title: '¿Por Qué Ordenó Dios la Oración?',
          blocks: [
            {
              type: 'paragraph',
              text: 'Si Dios ya lo sabe todo, ¿para qué sirve que oremos? Bruce R. McConkie respondió esta pregunta directamente en su artículo "Por qué el Señor Ordenó la Oración" (Ensign, enero 1976): Dios no ordenó la oración porque necesita información. La ordenó porque nosotros necesitamos el canal. La oración no cambia a Dios — nos cambia a nosotros.',
            },
            {
              type: 'doctrine_box',
              title: '¿Por qué Dios ordenó la oración? — McConkie',
              body: 'Dios ordenó la oración para darnos un canal de comunicación con Él. Para ayudarnos a desarrollar fe. Para alinear nuestra voluntad con la Suya. Y para darnos el mecanismo por el cual podemos recibir revelación y confirmación. La oración no viola nuestra agencia — es precisamente el mecanismo por el cual invitamos la intervención divina en nuestra vida. "Hemos de resolver nuestros propios problemas y luego aconsejar con el Señor en oración y recibir confirmación espiritual de que nuestras decisiones son correctas." — Bruce R. McConkie, Ensign, enero 1976.',
            },
            {
              type: 'highlight_verse',
              text: 'He aquí, te digo que debes estudiar esto en tu mente; luego debes preguntarme si es correcto, y si es correcto te haré sentir que tu pecho arderá dentro de ti; por tanto, sentirás que es correcto.',
              reference: 'Doctrina y Convenios 9:8',
            },
            {
              type: 'paragraph',
              text: 'Este es el modelo de DyC 9: primero tú piensas, estudias, decides — luego llevas eso a Dios. La oración no reemplaza el esfuerzo mental y espiritual del individuo. Lo corona. Lo valida. Lo dirige. Bednar lo resumió: "La oración significativa requiere tanto comunicación santa como trabajo consagrado."',
            },
          ],
        },
      ],
    },

    // ─── SECCIÓN II ──────────────────────────────────────────────────────────
    {
      id: 's2',
      title: 'El Modelo del Salvador',
      intro: {
        romanNumeral: 'II',
        title: 'El Modelo del Salvador',
        paragraphs: [
          'Nadie enseñó sobre la oración como lo hizo Jesucristo — no porque haya dado conferencias teológicas sobre ella, sino porque vivió en oración. Cada enseñanza suya sobre el tema viene empapada de experiencia personal. Él mismo oraba de madrugada, en soledad, toda la noche antes de grandes decisiones, y en Getsemaní hasta sudar sangre.',
        ],
      },
      topics: [
        {
          id: 't3',
          title: 'Lo Que Cristo Enseñó sobre la Oración — 3 Nefi 18',
          blocks: [
            {
              type: 'highlight_verse',
              text: 'He aquí, en verdad, en verdad os digo que debéis velar y orar siempre, no sea que entréis en tentación; porque Satanás desea poseeros para zarandearos como a trigo. Por tanto, siempre debéis orar al Padre en mi nombre.',
              reference: '3 Nefi 18:18–19',
            },
            {
              type: 'paragraph',
              text: '"Zarandearos como a trigo" — esta imagen no es decorativa. En la era agrícola, zarandear el trigo significaba lanzarlo al aire para que el viento separara el grano de la paja. El grano que cae queda. La paja se va. Satanás quiere hacerte eso a ti: lanzarte al aire con pruebas y tentaciones para ver si te quedas o te vas. Cristo dice que la oración es la respuesta. No la actitud positiva. No el esfuerzo humano. La oración.',
            },
            {
              type: 'highlight_verse',
              text: 'Y cualquier cosa que pidáis al Padre en mi nombre, si es justa, creyendo que recibiréis, he aquí, os será concedida. Orad al Padre en vuestras familias, siempre en mi nombre, para que sean bendecidos vuestras esposas y vuestros hijos.',
              reference: '3 Nefi 18:20–21',
            },
            {
              type: 'leader_quote',
              quote: 'Debemos emplear la oración como un escudo contra la tentación. Y si en algún momento sentimos que no queremos orar, podemos estar seguros de que esa vacilación no viene de Dios, quien anhela comunicarse con sus hijos en todo momento y en todo lugar.',
              name: 'Jeffrey R. Holland',
              role: '"Motions of a Hidden Fire", Conferencia General, abril 2024 (trad.)',
            },
            {
              type: 'doctrine_box',
              title: 'La Oración del Señor — Modelo en seis partes',
              body: 'Mateo 6:9-13 no es una oración para recitar mecánicamente — es un modelo estructural. (1) "Padre nuestro que estás en los cielos" — reconocer quién es Dios y tu relación con Él. (2) "Santificado sea tu nombre" — adoración y reverencia. (3) "Venga tu reino... tu voluntad" — alinear tu voluntad con la de Él. (4) "El pan nuestro de cada día" — presentar necesidades concretas. (5) "Perdona nuestras deudas, como nosotros perdonamos" — confesar y comprometerse. (6) "Líbranos del mal" — petición de protección. Cada oración que vale algo tiene estas seis dimensiones.',
            },
          ],
        },
        {
          id: 't4',
          title: 'Getsemaní — La Oración que lo Cambió Todo',
          blocks: [
            {
              type: 'highlight_verse',
              text: 'Y él se apartó de ellos a distancia como de un tiro de piedra; y puesto de rodillas oraba, diciendo: Padre, si quieres, pasa de mí esta copa; pero no se haga mi voluntad, sino la tuya.',
              reference: 'Lucas 22:41–42',
            },
            {
              type: 'paragraph',
              text: 'Esta es la oración más importante de la historia humana. Y lo que la hace única no es que fue respondida con "sí" — sino que fue respondida con "no". El Hijo de Dios pidió que pasara la copa. El Padre dijo que no. Y el Hijo se sometió. "No se haga mi voluntad, sino la tuya" — esas palabras no son debilidad. Son la cumbre de la fe.',
            },
            {
              type: 'paragraph',
              text: 'Getsemaní nos enseña que la oración no es un mecanismo para que Dios haga lo que nosotros queremos. Es el proceso de transformar lo que nosotros queremos en lo que Dios quiere. La oración perfecta no termina con nuestra petición siendo cumplida exactamente como la pedimos. Termina con nosotros siendo transformados para poder aceptar Su respuesta con fe.',
            },
            {
              type: 'deep_dive',
              badge: 'Profundizar',
              title: 'La Primera Visión — la oración que abrió la dispensación',
              paragraphs: [
                'José Smith tenía 14 años y una pregunta: ¿cuál iglesia es verdadera? Santiago 1:5 le dijo que pidiera a Dios. Fue al bosque y oró. Lo que siguió —antes de la visión— es lo que Holland describe en "No pierdas tu confianza": "Apenas había comenzado a elevar su primera oración cuando sintió que un poder de asombrosa influencia se apoderaba de él... una densa oscuridad le cerró por todos lados."',
                'José no recibió la visión inmediatamente. Primero vino la oscuridad. Primero vino la oposición. Y justo cuando estaba a punto de abandonar —"en el momento mismo de gran alarma"— vio la columna de luz descender. Holland enseña que ese patrón se repite: antes de los grandes momentos espirituales, casi siempre hay oscuridad. Si dejamos de orar cuando llega la oscuridad, nos perdemos exactamente el momento en que la luz estaba a punto de llegar.',
                'La Primera Visión es la respuesta a una oración de un adolescente. Toda la dispensación de la plenitud de los tiempos comenzó porque un muchacho creyó que Santiago 1:5 era real y actuó en consecuencia.',
              ],
            },
          ],
        },
      ],
    },

    // ─── SECCIÓN III ─────────────────────────────────────────────────────────
    {
      id: 's3',
      title: 'Amulek — La Oración Sin Límites',
      intro: {
        romanNumeral: 'III',
        title: 'Amulek — La Oración Sin Límites',
        paragraphs: [
          'Alma 34 contiene la enseñanza más exhaustiva sobre la oración en toda la escritura. Amulek —el hombre que dejó riquezas, familia y posición social para seguir a Alma— describe la oración no como un acto sino como un estado de ser. Su lista no tiene final porque la oración tampoco debería tenerlo.',
        ],
      },
      topics: [
        {
          id: 't5',
          title: 'Clamad a Él por Todo, en Todo Lugar, Todo el Tiempo',
          blocks: [
            {
              type: 'highlight_verse',
              text: 'Clamad a él cuando estéis en vuestros campos, sí, por todos vuestros rebaños. Clamad a él en vuestras casas, sí, por todos los de vuestra casa, tanto por la mañana, como al mediodía y al atardecer. Sí, clamad a él contra el poder de vuestros enemigos. Sí, clamad a él contra el diablo, que es el enemigo de toda rectitud.',
              reference: 'Alma 34:20–23',
            },
            {
              type: 'highlight_verse',
              text: 'Mas esto no es todo; debéis derramar vuestra alma en vuestros aposentos, en vuestros sitios secretos y en vuestros yermos. Sí, y cuando no estéis clamando al Señor, dejad que rebosen vuestros corazones, entregados continuamente en oración a él por vuestro bienestar, así como por el bienestar de los que os rodean.',
              reference: 'Alma 34:26–27',
            },
            {
              type: 'paragraph',
              text: 'La lista de Amulek — campos, rebaños, casas, mañana, mediodía, tarde, sitios secretos, yermos — es deliberadamente exhaustiva. No está tratando de cubrir cada caso posible. Está demostrando que no hay un caso que no esté cubierto. Y el versículo 27 es el remate: incluso cuando no estás orando activamente, deja que tu corazón rebose continuamente. La oración es un estado de orientación, no solo un acto de comunicación.',
            },
            {
              type: 'leader_quote',
              quote: 'La oración mañanera significativa es un elemento importante en la creación espiritual de cada día — y precede a la creación temporal, o sea, la ejecución real del día. Así como la creación temporal fue continuación de la espiritual, las oraciones de la mañana y de la tarde están unidas entre sí — no son eventos aislados y separados. Están conectadas a través de días, semanas, meses, y hasta años.',
              name: 'David A. Bednar',
              role: '"Pray Always", Conferencia General, octubre 2008 (trad.)',
            },
            {
              type: 'deep_dive',
              badge: 'Profundizar',
              title: 'La oración de gratitud sin petición',
              paragraphs: [
                'Bednar cuenta en "Pray Always" (2008) la historia de una familia que enfrentaba una crisis grave. Un miembro de la Doce les aconsejó que en esa oración familiar no pidieran nada — solo expresaran gratitud. Solo reconocieran las bendiciones que ya tenían.',
                'Al terminar esa oración de pura gratitud, la familia se dio cuenta de que durante la oración habían recibido inspiración sobre las mismas preguntas urgentes que no habían mencionado. No porque Dios no los hubiera escuchado la semana anterior — sino porque esa noche, al soltar el control y simplemente agradecer, se pusieron en la postura correcta para recibir.',
                '"La oración se vuelve más significativa cuando expresamos gratitud sincera de corazón." Hay una diferencia entre agradecer mecánicamente al principio de la oración y dedicar toda una oración a la gratitud. La segunda postura dice: "Dios, confío en ti lo suficiente para no pedirte nada esta vez. Solo quiero reconocer lo que ya has hecho."',
              ],
            },
          ],
        },
      ],
    },

    // ─── SECCIÓN IV ──────────────────────────────────────────────────────────
    {
      id: 's4',
      title: 'Cuando el Cielo Parece Cerrado',
      intro: {
        romanNumeral: 'IV',
        title: 'Cuando el Cielo Parece Cerrado',
        paragraphs: [
          'Hay momentos en que oramos y el silencio parece la única respuesta. Momentos en que preguntamos si Dios nos escucha, si le importamos, si la oración sirve de algo. Jeffrey R. Holland —hablando desde experiencia personal de oscuridad— tiene cosas que decir sobre estos momentos que ningún argumento teológico puede reemplazar.',
        ],
      },
      topics: [
        {
          id: 't6',
          title: 'Las Promesas que se Sostienen en la Oscuridad',
          blocks: [
            {
              type: 'leader_quote',
              quote: 'Mientras trabajamos y esperamos juntos las respuestas a algunas de nuestras oraciones, os ofrezco mi promesa apostólica: son escuchadas y son respondidas, aunque quizás no en el momento ni de la manera que queríamos. Pero siempre son respondidas en el momento y de la manera en que un padre omnisciente y eternamente compasivo debe responderlas.',
              name: 'Jeffrey R. Holland',
              role: '"Waiting on the Lord", Conferencia General, octubre 2020 (trad.)',
            },
            {
              type: 'leader_quote',
              quote: 'Por razones que solo Dios conoce, las oraciones se responden de manera diferente a lo que esperamos — pero yo os prometo que son escuchadas y que son respondidas según Su amor infalible y Su cronograma cósmico. No hay límites en cuándo, dónde, ni sobre qué orar, si uno lo hace sin pedirlo equivocadamente.',
              name: 'Jeffrey R. Holland',
              role: '"Motions of a Hidden Fire", Conferencia General, abril 2024 (trad.)',
            },
            {
              type: 'highlight_verse',
              text: 'Si cualquiera de vosotros carece de sabiduría, pídala a Dios, el cual da a todos abundantemente y sin reproche, y le será dada.',
              reference: 'Santiago 1:5',
            },
            {
              type: 'leader_quote',
              quote: 'Antes de grandes momentos, y ciertamente antes de grandes momentos espirituales, puede venir la adversidad, la oposición y la oscuridad. Con cualquier decisión importante hay precauciones y consideraciones que tomar, pero una vez que ha habido iluminación, cuídate de la tentación de retroceder. Si estaba bien cuando oraste al respecto y confiaste en ello y viviste para ello, está bien ahora. No pierdas tu confianza. No olvides cómo te sentiste. No desconfíes de la experiencia que tuviste.',
              name: 'Jeffrey R. Holland',
              role: '"Cast Not Away Therefore Your Confidence", BYU, 2 de marzo de 1999 / Ensign, marzo 2000 (trad.)',
            },
            {
              type: 'paragraph',
              text: 'Holland no está hablando de teoría. Está describiendo el patrón de la Primera Visión: José Smith "apenas había comenzado su primera oración" cuando una oscuridad de poder asombroso lo envolvió. La resistencia no fue señal de que la oración era equivocada — fue señal de que era importante. El adversario no manda su artillería pesada contra oraciones vacías.',
            },
            {
              type: 'leader_quote',
              quote: 'Enfrenta tus dudas. Domina tus miedos. "No pierdas, pues, vuestra confianza." Mantén el rumbo y mira cómo se despliega ante ti la belleza de la vida.',
              name: 'Jeffrey R. Holland',
              role: '"Cast Not Away Therefore Your Confidence", BYU, 2 de marzo de 1999 (trad.) — cita Hebreos 10:35',
            },
            {
              type: 'leader_quote',
              quote: 'Preguntar con fe requiere honestidad, esfuerzo, compromiso y persistencia. La oración significativa requiere tanto comunicación santa como trabajo consagrado. Pedir con fe incluye la necesidad no solo de expresar sino de hacer, la doble obligación de suplicar y de actuar, el requisito de comunicar y de obrar.',
              name: 'David A. Bednar',
              role: '"Ask in Faith", Conferencia General, abril 2008 (trad.)',
            },
            {
              type: 'doctrine_box',
              title: 'Cuándo la oración "no funciona"',
              body: 'Scott enseñó que si sientes que Dios se ha alejado, puede haber muchas razones — y continúa: "Cualquiera que sea la causa, al seguir suplicando ayuda, Él te guiará a hacer lo que restaurará tu confianza en que Él está cerca." La distancia que sentimos no es de Dios alejándose. Es nuestra percepción nublada por el dolor, el pecado no resuelto, o simplemente la fatiga espiritual. "No te preocupes por los sentimientos que expresas torpemente. Simplemente habla con tu compasivo y comprensivo Padre." — Richard G. Scott.',
            },
          ],
        },
      ],
    },

    // ─── SECCIÓN V ───────────────────────────────────────────────────────────
    {
      id: 's5',
      title: 'La Oración como Estilo de Vida',
      intro: {
        romanNumeral: 'V',
        title: 'La Oración como Estilo de Vida',
        paragraphs: [
          'Hasta aquí hemos estudiado qué es la oración, cómo enseñó Cristo a orar, la visión de Amulek de orar sin límites, y qué hacer cuando el cielo parece cerrado. Esta última sección es la más práctica: cómo pasar de hacer oraciones a vivir en oración.',
        ],
      },
      topics: [
        {
          id: 't7',
          title: 'Vigilantes en Oración — El Escudo Espiritual',
          blocks: [
            {
              type: 'highlight_verse',
              text: 'Y también os exhorto... a que seáis vigilantes en la oración continuamente, para que no seáis seducidos por las tentaciones del diablo.',
              reference: 'Moroni 6:4',
            },
            {
              type: 'leader_quote',
              quote: 'Se requiere vigilancia constante para contrarrestar la complacencia y la casualidad. Os prometo que las bendiciones de la preparación efectiva y la protección espiritual fluirán a vuestra vida cuando seáis vigilantes en oración, diligente y continuamente.',
              name: 'David A. Bednar',
              role: '"Watchful unto Prayer Continually", Conferencia General, octubre 2019 (trad.)',
            },
            {
              type: 'paragraph',
              text: 'Bednar nota que el diablo trabaja activamente para alejarnos de la oración — no solo para que pequemos, sino primero para que dejemos de orar. Porque sabe que una persona que ora regularmente tiene acceso a un recurso que él no puede replicar. La oración vigilante y continua no es solo una disciplina espiritual buena. Es una defensa activa contra el adversario.',
            },
            {
              type: 'leader_quote',
              quote: 'Oren más de lo que oran. Por mucho que hayan orado, oren más. Y en todos los lugares donde hayan orado, oren en más lugares. No hay límites en cuándo, dónde ni sobre qué orar.',
              name: 'Jeffrey R. Holland',
              role: '"Motions of a Hidden Fire", Conferencia General, abril 2024 (trad.)',
            },
            {
              type: 'key_points',
              title: 'Siete hábitos de una vida de oración poderosa',
              points: [
                'Ora vocalmente cuando tengas privacidad — la voz involucra todo el ser, no solo la mente',
                'Encuentra un lugar secreto — un lugar específico de oración condiciona el espíritu (Mateo 6:6)',
                'Ora de rodillas cuando sea posible — la postura del cuerpo refleja la postura del corazón',
                'Conecta la oración de la mañana con la de la noche — son partes del mismo diálogo con Dios (Bednar)',
                'No te preocupes por la elocuencia — habla con honestidad con tu Padre (Scott)',
                'Incluye períodos de solo gratitud, sin peticiones — pon a Dios primero',
                'Oración familiar diaria — Cristo lo mandó específicamente (3 Nefi 18:21)',
              ],
            },
            {
              type: 'timeline',
              items: [
                {
                  label: 'Mañana',
                  text: 'Creación espiritual del día — orientar el corazón antes de enfrentar el mundo',
                  ref: 'Bednar, "Pray Always"',
                  color: 'gold',
                },
                {
                  label: 'Durante el día',
                  text: 'Oraciones breves y sinceras — "que rebosen vuestros corazones continuamente"',
                  ref: 'Alma 34:27',
                  color: 'blue',
                },
                {
                  label: 'Familia',
                  text: 'Oración familiar en nombre de Cristo — bendición prometida para cónyuge e hijos',
                  ref: '3 Nefi 18:21',
                  color: 'gold',
                },
                {
                  label: 'Lugar secreto',
                  text: '"Derramad vuestra alma en vuestros aposentos, en vuestros sitios secretos"',
                  ref: 'Alma 34:26; Mateo 6:6',
                  color: 'blue',
                },
                {
                  label: 'Noche',
                  text: 'Rendir cuentas y recibir paz — completar el ciclo que comenzó en la mañana',
                  ref: 'Bednar, "Pray Always"',
                  color: 'gold',
                },
              ],
            },
            {
              type: 'leader_quote',
              quote: 'Nuestra oración debería ser vocal cuando tengamos la privacidad para ofrecerla así. Si eso no es práctico, debe llevarse como expresión silenciosa en el corazón. Nuestras oraciones "deben ofrecerse" — según el mismo Salvador — al Dios Padre Eterno en el nombre de Su Unigénito Hijo.',
              name: 'Jeffrey R. Holland',
              role: '"Motions of a Hidden Fire", Conferencia General, abril 2024 (trad.)',
            },
            {
              type: 'reflection',
              prompt: '¿Cómo describirías honestamente tu vida de oración ahora mismo? ¿Qué diferencia hay entre hacer oraciones y vivir en oración? ¿Hay una oración que llevas tiempo queriendo hacer y no has hecho? ¿Qué te detiene?',
            },
          ],
        },
      ],
    },
  ],
}
