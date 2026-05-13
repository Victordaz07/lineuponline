import type { Lesson } from '@/types/doctrine'

export const permanecerParaSiempre: Lesson = {
  id: 'permanecer-para-siempre',
  moduleId: 'discursos-sermones-clasicos',
  title: 'Permanecer para Siempre',
  subtitle: 'Lawrence E. Corbridge · Devocional BYU, 22 de enero de 2019',
  description:
    'Un General de la Iglesia que leyó todo el material antagonista sobre el Evangelio — y no cayó. Cuatro preguntas que lo son todo. Cuatro métodos de conocimiento. Y una promesa: si conoces las respuestas correctas a las preguntas correctas, permanecerás para siempre.',
  level: 'INTERMEDIO',
  icon: '🔍',
  duration: 65,
  order: 5,
  status: 'PUBLISHED',
  author: 'Lawrence E. Corbridge',
  studyBodyPlain: '',
  originalBodyPlain: '',
  studySections: [
    {
      id: 'seccion-1',
      title: 'I. Un General que leyó todo el antagonismo',
      intro: { romanNumeral: 'I', title: 'Un General que leyó todo el antagonismo' },
      topics: [
        {
          id: 'el-encargo',
          title: 'El encargo inusual',
          blocks: [
            {
              type: 'paragraph',
              content:
                'Lawrence E. Corbridge, Setenta de la Iglesia, recibió un encargo poco común para un General: leer todo el material antagonista disponible sobre la Iglesia y sus fundadores, y preparar respuestas escritas a las acusaciones más serias. No fue como investigador escéptico — fue como creyente con voluntad de mirar de frente lo más difícil.',
            },
            {
              type: 'paragraph',
              content:
                'Su conclusión después de ese proceso no fue una crisis de fe. Fue una convicción más profunda. Pero lo que más le impactó no fueron las respuestas que encontró — fue algo que sintió de manera consistente mientras leía el material crítico: una sensación de penumbra. "La lectura de ese material siempre me dejó con una sensación de penumbra", dijo. Esa experiencia se convirtió en la premisa central de su devocional de enero de 2019 en BYU.',
            },
            {
              type: 'doctrine_box',
              title: '¿Qué significa "permanecer para siempre"?',
              content:
                'El título viene del profeta Daniel: "el Dios del cielo levantará un reino que no será jamás destruido ni será dejado el reino a otro pueblo" (Daniel 2:44). El reino resistirá. La pregunta no es si la Iglesia permanecerá — es si tú permanecerás con ella. Corbridge dirigió su discurso a los que enfrentan dudas, contradicciones históricas, y el diluvio de información antagonista del siglo XXI.',
            },
            {
              type: 'highlight_verse',
              reference: 'Daniel 2:44',
              text: 'El Dios del cielo levantará un reino que no será jamás destruido ni será dejado el reino a otro pueblo.',
            },
          ],
        },
        {
          id: 'el-engano-de-nuestros-tiempos',
          title: 'El engaño como señal profética',
          blocks: [
            {
              type: 'highlight_verse',
              reference: 'Mateo 24:24',
              text: 'Porque se levantarán falsos Cristos y falsos profetas, y harán grandes señales y prodigios, de tal manera que engañarán, si fuera posible, aun a los escogidos.',
            },
            {
              type: 'paragraph',
              content:
                'Cristo advirtió que el engaño sería la señal característica de los últimos días — no la persecución abierta, sino la confusión sutil. Pablo lo confirmó: "Ahora vemos por espejo, oscuramente" (1 Cor 13:12). Vivimos en tiempos de información masiva pero no necesariamente de verdad masiva. El volumen de datos disponibles no garantiza la calidad del conocimiento.',
            },
            {
              type: 'key_points',
              title: 'El espectro del engaño actual',
              points: [
                'Ataques directos a José Smith y al Libro de Mormón',
                'Afirmaciones de que la Iglesia ha apostatado de sus fundamentos',
                'Desacuerdos doctrinales con interpretaciones personales',
                'Falsas visiones y revelaciones alternativas',
                'Distracciones infinitas: información sin valor espiritual que ocupa el tiempo y la mente',
              ],
            },
            {
              type: 'paragraph',
              content:
                'Corbridge introduce una distinción crucial: el problema no es la brecha entre creencia y comportamiento — eso es el problema de la hipocresía, y tiene una solución relativamente sencilla. El problema más profundo es la brecha entre creencia y verdad. Puedes ser perfectamente sincero en tus creencias y estar perfectamente equivocado. La sinceridad no produce verdad.',
            },
          ],
        },
      ],
    },
    {
      id: 'seccion-2',
      title: 'II. Las cuatro preguntas que lo son todo',
      intro: { romanNumeral: 'II', title: 'Las cuatro preguntas que lo son todo' },
      topics: [
        {
          id: 'preguntas-principales',
          title: 'Principales vs. secundarias — la distinción que salva',
          blocks: [
            {
              type: 'paragraph',
              content:
                'Esta es la contribución más práctica del discurso de Corbridge. Distingue entre preguntas principales — aquellas cuya respuesta determina todo lo demás — y preguntas secundarias, que son infinitas, complejas, y que pueden ocupar una vida entera sin resolverse.',
            },
            {
              type: 'key_points',
              title: 'Las cuatro preguntas principales',
              points: [
                '¿Hay un Dios que es nuestro Padre Celestial?',
                '¿Es Jesucristo el Hijo de Dios, el Salvador del mundo?',
                '¿Fue José Smith un profeta de Dios?',
                '¿Es La Iglesia de Jesucristo de los Santos de los Últimos Días el Reino de Dios sobre la tierra?',
              ],
            },
            {
              type: 'doctrine_box',
              title: 'Las preguntas secundarias son infinitas',
              content:
                'Historia de la poligamia, el sacerdocio y los afroamericanos, la traducción del Libro de Mormón, el ADN y los pueblos del Libro de Mormón, el matrimonio entre personas del mismo sexo, las múltiples versiones de la Primera Visión, la Mountain Meadows Massacre, las prácticas financieras de la Iglesia... La lista no tiene fin. Puedes pasar toda tu vida buscando resolver las preguntas secundarias y nunca terminarlo. Pero si conoces las respuestas a las cuatro preguntas principales, las secundarias cambian de categoría: se convierten en curiosidades a explorar, no en amenazas que destruyen.',
            },
          ],
        },
        {
          id: 'si-las-conoces',
          title: 'El principio de Mateo 16',
          blocks: [
            {
              type: 'highlight_verse',
              reference: 'Mateo 16:16-18',
              text: 'Tú eres el Cristo, el Hijo del Dios viviente. Bienaventurado eres, Simón, hijo de Jonás, porque no te lo reveló carne ni sangre, sino mi Padre que está en los cielos. Y yo también te digo que tú eres Pedro, y sobre esta roca edificaré mi iglesia; y las puertas del Hades no prevalecerán contra ella.',
            },
            {
              type: 'paragraph',
              content:
                'Pedro sabía la respuesta a las preguntas principales. Sabía quién era Cristo. Por eso Cristo le dice que las puertas del infierno no prevalecerán contra esa roca — la roca de la revelación personal. Corbridge concluye: si conocemos las respuestas a las cuatro preguntas principales con la misma certeza con que Pedro sabía quién era Cristo, permaneceremos para siempre.',
            },
            {
              type: 'compare_grid',
              title: 'Preguntas principales vs. secundarias',
              left: {
                label: 'Preguntas principales',
                points: [
                  'Son cuatro — finitas y manejables',
                  'Se responden a través de los cuatro métodos de conocimiento',
                  'Su respuesta determina la postura ante las secundarias',
                  'Pueden conocerse con certeza real',
                  'La roca sobre la que Cristo edificó su Iglesia',
                ],
              },
              right: {
                label: 'Preguntas secundarias',
                points: [
                  'Son infinitas — imposible responderlas todas',
                  'Requieren contexto histórico, lingüístico y cultural',
                  'Responderlas sin las principales primero produce confusión',
                  'Pueden tener respuestas incompletas — y eso está bien',
                  'La arena movediza donde muchos pierden la fe',
                ],
              },
            },
            {
              type: 'reflection',
              question: '¿Conoces las respuestas a las cuatro preguntas principales? ¿A través de qué método llegaste a esas respuestas? ¿Es esa base lo suficientemente sólida como para resistir cualquier pregunta secundaria?',
            },
          ],
        },
      ],
    },
    {
      id: 'seccion-3',
      title: 'III. El método científico de la fe',
      intro: { romanNumeral: 'III', title: 'El método científico de la fe' },
      topics: [
        {
          id: 'alma-32-experimento',
          title: 'Alma 32 y el experimento espiritual',
          blocks: [
            {
              type: 'paragraph',
              content:
                'Corbridge describe cuatro métodos de conocimiento. El primero es el método científico aplicado a la verdad espiritual. La estructura es idéntica a la ciencia formal: hipótesis, experimento, observación, conclusión. Alma 32 es la formulación más completa de este método en todas las Escrituras.',
            },
            {
              type: 'highlight_verse',
              reference: 'Alma 32:27',
              text: 'Pero he aquí, si despertáis y acrecentáis vuestros deseos de creer, y si ejercéis un poco de fe, sí, aunque no sea más que un deseo de creer, dejad que este deseo obre en vosotros.',
            },
            {
              type: 'steps',
              title: 'El método científico espiritual',
              items: [
                {
                  step: '1',
                  title: 'Hipótesis',
                  body: 'Propón que la palabra de Dios es verdadera. No necesitas certeza al inicio — solo necesitas suficiente deseo para hacer el experimento.',
                },
                {
                  step: '2',
                  title: 'Experimento',
                  body: 'Vive los principios del Evangelio. La fe se activa a través de la obediencia, no precede a ella. "El que quiera hacer la voluntad de él conocerá si la doctrina es de Dios" (Juan 7:17).',
                },
                {
                  step: '3',
                  title: 'Observación',
                  body: 'Observa qué ocurre en tu vida cuando aplicas los principios. ¿Produce luz? ¿Aumenta tu conocimiento? ¿Produce paz genuina? Los efectos son observables.',
                },
                {
                  step: '4',
                  title: 'Conclusión',
                  body: 'Las evidencias acumuladas a través de la experiencia vivida producen conocimiento real, no solo creencia. "Si es bueno para ellos para su edificación, es de Dios" (D&C 50:22).',
                },
              ],
            },
            {
              type: 'highlight_verse',
              reference: 'Juan 7:17',
              text: 'El que quiera hacer la voluntad de Dios conocerá si la doctrina es de Dios o si yo hablo por mi propia cuenta.',
            },
          ],
        },
        {
          id: 'diferencia-experimento',
          title: 'Por qué este experimento es diferente a todos los otros',
          blocks: [
            {
              type: 'paragraph',
              content:
                'En la ciencia convencional, el experimento no cambia al observador. Puedes medir la temperatura de un gas sin que eso te transforme. El experimento espiritual es radicalmente diferente: el experimento cambia al experimentador. Vivir el Evangelio no produce datos externos sobre los que reflexionas con distancia — te convierte en alguien diferente, con una naturaleza diferente, con una capacidad diferente para percibir la verdad.',
            },
            {
              type: 'doctrine_box',
              title: 'El conocimiento espiritual va con nosotros',
              content:
                'D&C 130:18-19: "Todo lo que adquiramos en esta vida, en cuanto a inteligencia y conocimiento, se levantará con nosotros en la resurrección. Y toda persona que gane más conocimiento y más inteligencia en esta vida mediante su diligencia y obediencia, tendrá tanta ventaja en el mundo venidero." El conocimiento ganado a través de la experiencia vivida del Evangelio es el único tipo de conocimiento que literalmente va contigo para siempre.',
            },
          ],
        },
      ],
    },
    {
      id: 'seccion-4',
      title: 'IV. El método analítico y el método académico',
      intro: { romanNumeral: 'IV', title: 'El método analítico y el método académico' },
      topics: [
        {
          id: 'metodo-analitico',
          title: 'El método analítico — estudiar antes de preguntar',
          blocks: [
            {
              type: 'paragraph',
              content:
                'El segundo método es el analítico: reunir evidencia relevante, organizarla, sopesarla cuidadosamente, y llegar a conclusiones basadas en ese proceso. No es teología ni oración — es pensamiento disciplinado.',
            },
            {
              type: 'highlight_verse',
              reference: 'D&C 9:7-8',
              text: 'He aquí, no has entendido; has supuesto que yo te lo concedería cuando no pensaste sino en pedirme. Pero he aquí, te digo que debes estudiarlo en tu mente; entonces has de preguntarme si está bien.',
            },
            {
              type: 'paragraph',
              content:
                'La instrucción al escribano Oliver Cowdery es un principio universal: Dios espera que traigamos nuestra mente completamente comprometida al proceso de buscar la verdad ANTES de pedir confirmación divina. No es fe pasiva — es la combinación de máximo esfuerzo intelectual con disposición a recibir revelación.',
            },
            {
              type: 'deep_dive',
              title: 'El principio de "estudia en tu mente"',
              content:
                'Muchos creyentes cometen un error inverso al de los escépticos: los escépticos analizan sin orar. Los creyentes a veces oran sin analizar. El Señor rechazó ambos extremos. Oliver Cowdery esperaba que Dios le revelara la respuesta sin que él se esforzara. La respuesta divina fue clara: debes pensar primero, luego confirmar. La revelación completa el trabajo intelectual — no lo reemplaza.',
            },
          ],
        },
        {
          id: 'metodo-academico',
          title: 'El método académico — el poder de la palabra',
          blocks: [
            {
              type: 'highlight_verse',
              reference: 'D&C 21:6',
              text: 'Pues he aquí que él que atesore mis palabras no será engañado.',
            },
            {
              type: 'paragraph',
              content:
                'El tercer método es el estudio académico de las Escrituras — no como literatura ni como historia, sino como la palabra viva de Dios que tiene un poder protector único. Corbridge cita que la palabra de Dios es más poderosa contra el engaño, el miedo, la adicción y la pornografía que cualquier otra herramienta.',
            },
            {
              type: 'highlight_verse',
              reference: 'Helamán 3:29',
              text: 'La palabra de Dios guía al hombre de Cristo por un sendero estrecho y angosto a través de este mundo de tentación y de pecado.',
            },
            {
              type: 'paragraph',
              content:
                'El estudio académico de las Escrituras no es simplemente adquisición de información. Es exposición repetida a la influencia del Espíritu Santo que acompaña la palabra de Dios. Cada sesión de estudio genuino es una sesión de protección contra el engaño. La persona que atesora consistentemente la palabra de Dios desarrolla una sensibilidad espiritual que le permite distinguir la verdad del error antes de que el análisis formal llegue a una conclusión.',
            },
          ],
        },
      ],
    },
    {
      id: 'seccion-5',
      title: 'V. El método divino — la revelación',
      intro: { romanNumeral: 'V', title: 'El método divino — la revelación' },
      topics: [
        {
          id: 'espiritu-de-dios',
          title: 'Las cosas de Dios, conocidas solo por el Espíritu de Dios',
          blocks: [
            {
              type: 'paragraph',
              content:
                'El cuarto método incorpora los otros tres pero los trasciende. Corbridge lo llama el método divino: conocimiento que viene a través del poder y la guía del Espíritu Santo. Es el método que Pablo enseñó cuando dijo: "Las cosas de Dios nadie las conoció sino el Espíritu de Dios" (1 Cor 2:11).',
            },
            {
              type: 'highlight_verse',
              reference: 'Moroni 10:5',
              text: 'Y por el poder del Espíritu Santo podréis conocer la verdad de todas las cosas.',
            },
            {
              type: 'highlight_verse',
              reference: 'D&C 50:23-24',
              text: 'Lo que no edifica no es de Dios y es tinieblas. Lo que es de Dios es luz; y el que recibe luz, y persevera en Dios, recibe más luz; y esa luz se hace cada vez más brillante hasta el día perfecto.',
            },
            {
              type: 'paragraph',
              content:
                'El Espíritu Santo opera fundamentalmente como luz — y como ausencia de luz. Cuando Corbridge leía material antagonista y sentía "una sensación de penumbra", eso no era sesgo cognitivo ni reacción emocional a la incomodidad. Era la ausencia del Espíritu, que es en sí mismo un dato sobre la naturaleza de ese material.',
            },
          ],
        },
        {
          id: 'prueba-de-la-oscuridad',
          title: 'La prueba de la oscuridad — el estupor de pensamiento',
          blocks: [
            {
              type: 'highlight_verse',
              reference: 'D&C 9:9',
              text: 'Mas si no es correcto, no tendrás tales sentimientos, sino que tendrás un estupor de pensamiento que te hará olvidar lo que sea que sea incorrecto.',
            },
            {
              type: 'doctrine_box',
              title: 'La oscuridad como dato espiritual',
              content:
                'El "estupor de pensamiento" no es solo la ausencia de confirmación positiva. Es información negativa activa: el Espíritu indica que algo no es correcto. Corbridge aplica este principio a su experiencia con el material antagonista: la sensación de penumbra que acompañaba consistentemente esa lectura no era evidencia de que las críticas fueran incorrectas en todos los detalles. Era evidencia de que el Espíritu de Dios no acompañaba ese contenido. Lo que no edifica es de tinieblas — no necesariamente falso en todo dato, pero oscuro en su propósito y efecto.',
            },
            {
              type: 'paragraph',
              content:
                'Esta es una de las afirmaciones más radicales del discurso: algunos contenidos pueden contener datos factuales correctos y aun así ser oscuros espiritualmente, porque su propósito, tono y espíritu no viene de Dios. La pregunta no es solo "¿es esto factualmente correcto?" sino "¿edifica este contenido? ¿Trae luz o tinieblas?"',
            },
            {
              type: 'reflection',
              question: '¿Has sentido la diferencia entre contenido que trae luz y contenido que trae penumbra? ¿Qué haces con esa sensación cuando aparece?',
            },
          ],
        },
      ],
    },
    {
      id: 'seccion-6',
      title: 'VI. Lo que no edifica es tinieblas',
      intro: { romanNumeral: 'VI', title: 'Lo que no edifica es tinieblas' },
      topics: [
        {
          id: 'no-por-eliminacion',
          title: 'No puedes aprender la verdad por eliminación',
          blocks: [
            {
              type: 'paragraph',
              content:
                'Una de las estrategias más comunes pero más ineficaces para responder a las críticas es intentar refutar cada acusación individual. Corbridge lo llama el método de aprendizaje por eliminación: si derroto este argumento, y luego este, y luego este, finalmente lo que queda debe ser verdad.',
            },
            {
              type: 'paragraph',
              content:
                'El problema es matemático: las preguntas secundarias son literalmente infinitas. Cada respuesta genera nuevas preguntas. No existe un punto de llegada a través de la eliminación. Y más fundamentalmente, la verdad positiva no puede establecerse simplemente derrotando errores. La ausencia de evidencia en contra no es evidencia de verdad.',
            },
            {
              type: 'doctrine_box',
              title: 'Se requiere una afirmación positiva',
              content:
                'Para conocer que Dios existe, no basta con refutar el ateísmo. Para conocer que Cristo resucitó, no basta con demostrar que los apóstoles no mintieron. Para conocer que José Smith fue un profeta, no basta con responder cada crítica histórica. Se requiere una afirmación positiva — el conocimiento que viene a través de la experiencia, el análisis, el estudio y, especialmente, la revelación del Espíritu Santo. La Iglesia de Jesucristo está "fundada sobre la roca de la revelación." Solo la revelación produce esa roca.',
            },
            {
              type: 'highlight_verse',
              reference: 'Mateo 16:18',
              text: 'Sobre esta roca edificaré mi iglesia; y las puertas del Hades no prevalecerán contra ella.',
            },
          ],
        },
        {
          id: 'para-dios-todo-es-posible',
          title: 'Creer que para Dios todo es posible',
          blocks: [
            {
              type: 'paragraph',
              content:
                'Corbridge hace una observación filosófica profunda: los creyentes a menudo subestiman lo extraordinario de lo ordinario. La sanación de una mano herida es asombrosa — pero no tanto como la existencia de la mano. La resurrección de un muerto es extraordinaria — pero no más que el nacimiento original.',
            },
            {
              type: 'leader_quote',
              author: 'Lawrence E. Corbridge',
              quote: 'La sanación de una mano herida no es tan sorprendente como la existencia de la mano. Más fenomenal que la resurrección es el nacimiento. Un corazón silencioso que vuelve a latir no es tan asombroso como el corazón que late.',
              source: 'Devocional BYU, 22 de enero de 2019',
            },
            {
              type: 'paragraph',
              content:
                'Si aceptamos lo ordinario — la existencia misma, la conciencia, la vida — sin cuestionarlo, entonces las afirmaciones del Evangelio sobre revelación, profecía y Resurrección son continuaciones coherentes de la misma maravilla subyacente. El Dios que creó la existencia desde la nada puede ciertamente hablar a un joven en un bosque.',
            },
          ],
        },
      ],
    },
    {
      id: 'seccion-7',
      title: 'VII. Dudas vs. preguntas — una distinción vital',
      intro: { romanNumeral: 'VII', title: 'Dudas vs. preguntas — una distinción vital' },
      topics: [
        {
          id: 'preguntas-sin-dudas',
          title: 'Tener preguntas sin tener dudas',
          blocks: [
            {
              type: 'paragraph',
              content:
                'En la conclusión del discurso, Corbridge hace una declaración personal que resume toda la tesis: "Tengo muchas preguntas. No tengo dudas." Esta distinción es fundamental para entender cómo puede alguien como él leer todo el material antagonista disponible y emerger con su fe intacta.',
            },
            {
              type: 'highlight_verse',
              reference: 'D&C 6:36',
              text: 'Mira hacia mí en todo pensamiento; no dudes; no temas.',
            },
            {
              type: 'doctrine_box',
              title: 'La diferencia entre preguntas y dudas',
              content:
                'Preguntas: "¿Cómo se reconcilia X con Y? ¿Qué evidencia existe para Z? ¿Por qué ocurrió W en la historia de la Iglesia?" Las preguntas son búsqueda activa desde una posición de confianza básica. Dudas: "No creo que Dios exista. No creo que Cristo resucitó. No creo que José Smith fue un profeta." Las dudas son afirmaciones negativas sobre las preguntas principales. Corbridge puede tener infinitas preguntas secundarias sin tener ninguna duda sobre las cuatro preguntas principales, porque las conoce — no solo las cree.',
            },
            {
              type: 'paragraph',
              content:
                'La diferencia entre conocer y creer es la diferencia entre la roca y la arena. La roca puede aguantar preguntas, críticas, argumentos y tormentas. La arena puede colapsar con la primera ola. El objetivo del discurso es invitar a los oyentes a pasar de creer las respuestas a las cuatro preguntas principales a conocerlas — a través de los cuatro métodos.',
            },
          ],
        },
      ],
    },
    {
      id: 'seccion-8',
      title: 'VIII. El testimonio que permanece',
      intro: { romanNumeral: 'VIII', title: 'El testimonio que permanece' },
      topics: [
        {
          id: 'testimonio-cuadripartito',
          title: 'El testimonio de cuatro partes',
          blocks: [
            {
              type: 'paragraph',
              content:
                'Corbridge concluye el discurso con un testimonio personal de las cuatro preguntas principales, usando exactamente los mismos cuatro métodos que describió. Es un modelo de cómo puede verse un testimonio maduro — no una emoción pasajera, sino el producto de experiencia, evidencia, estudio y revelación del Espíritu Santo.',
            },
            {
              type: 'leader_quote',
              author: 'Lawrence E. Corbridge',
              quote: 'Hay un Dios en el cielo que es nuestro Padre Eterno. Yo lo sé. Lo sé por mi experiencia — toda mi experiencia. Lo sé por las evidencias, y las evidencias son contundentes. Lo sé por el estudio y, con mayor certeza, lo sé por la guía y el poder del Espíritu Santo.',
              source: 'Devocional BYU, 22 de enero de 2019',
            },
            {
              type: 'paragraph',
              content:
                'El mismo patrón de cuatro pilares (experiencia, evidencias, estudio, Espíritu Santo) lo aplica a su conocimiento de que Jesucristo es el Hijo de Dios y Redentor, de que José Smith fue un profeta, y de que La Iglesia de Jesucristo de los Santos de los Últimos Días es el reino de Dios sobre la tierra. No son cuatro afirmaciones basadas en una experiencia emocional — son cuatro certezas construidas sobre los cuatro métodos.',
            },
          ],
        },
        {
          id: 'la-promesa',
          title: 'La promesa: las puertas del infierno no prevalecerán',
          blocks: [
            {
              type: 'paragraph',
              content:
                'La promesa que da título al discurso es de Cristo mismo: las puertas del infierno no prevalecerán contra la Iglesia edificada sobre la roca de la revelación. Corbridge la aplica al individuo: si estás fundado sobre esa misma roca — si conoces las respuestas a las cuatro preguntas principales — las puertas del infierno no prevalecerán contra ti tampoco.',
            },
            {
              type: 'leader_quote',
              author: 'Lawrence E. Corbridge',
              quote: 'Sé todo lo que necesito saber a fin de permanecer para siempre.',
              source: 'Devocional BYU, 22 de enero de 2019',
            },
            {
              type: 'paragraph',
              content:
                'No dijo que sabe todo. No dijo que tiene todas las respuestas. Dijo que sabe todo lo que NECESITA saber. Hay una diferencia enorme. El discurso completo es una invitación a identificar qué necesitas saber para permanecer para siempre — y luego a conocerlo, no solo a creerlo.',
            },
            {
              type: 'note_prompts',
              prompts: [
                '¿Cuáles de las cuatro preguntas principales puedes decir que "conoces" vs. que solo "crees"? ¿Qué método de conocimiento has usado para llegar a esa certeza?',
                '¿Hay alguna pregunta secundaria que actualmente está ocupando más espacio mental que las cuatro preguntas principales? ¿Cómo cambias el orden de prioridad?',
                '¿Cuándo fue la última vez que experimentaste "la sensación de penumbra" de Corbridge? ¿Y la última vez que experimentaste el tipo de luz que describe D&C 50:24?',
                'Escribe tu propio testimonio de las cuatro preguntas principales usando el patrón de Corbridge: ¿qué sabes, cómo lo sabes, a través de qué método llegaste a saberlo?',
              ],
            },
          ],
        },
      ],
    },
  ],
}
