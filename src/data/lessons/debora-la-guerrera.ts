import type { Lesson } from '@/types/doctrine'

export const deboraLaGuerrera: Lesson = {
  id: 'debora-la-guerrera',
  moduleId: 'personajes-escrituras',
  submoduleGroup: 'debora',
  title: 'La Batalla',
  subtitle: '900 carros de hierro que no sirvieron de nada',
  author: 'Fuentes: Jueces 4:12-16; Jueces 5:19-22; historia militar del Bronce Final',
  description: 'Diez mil soldados de infantería israelita contra novecientos carros de hierro en la llanura más grande de Canaán. La orden de Débora — "levántate, porque este es el día" — pone en marcha una batalla cuyo resultado solo puede explicarse si Dios estaba en medio de ella.',
  level: 'INTERMEDIO',
  icon: '⚔️',
  duration: 30,
  order: 6312,
  status: 'PUBLISHED',
  studyBodyPlain: '',
  originalBodyPlain: '',
  previousLessonId: 'debora-la-profetisa',
  nextLessonId: 'debora-y-jael',
  studySections: [
    {
      id: 's1',
      title: 'La concentración de fuerzas',
      intro: {
        romanNumeral: 'I',
        title: 'Jueces 4:12-13 — El Ejército de Sísara en Movimiento',
        paragraphs: [
          'La noticia de que Barac subía al Monte Tabor llegó a Sísara. Reunió sus novecientos carros de hierro y a todo su pueblo desde Haroset-goim hasta el río Quisón. El enfrentamiento era inevitable.',
        ],
      },
      topics: [
        {
          id: 't1-1',
          title: 'El movimiento de Sísara — análisis estratégico',
          blocks: [
            {
              type: 'highlight_verse',
              reference: 'Jueces 4:12-13',
              text: 'Y dieron aviso a Sísara de que Barac hijo de Abinoam había subido al monte Tabor. Y Sísara reunió todos sus carros, novecientos carros herrados, y a todo el pueblo que estaba consigo, desde Haroset-goim hasta el río Quisón.',
            },
            {
              type: 'paragraph',
              text: 'Haroset-goim era la base militar de Sísara, ubicada probablemente en la entrada occidental de la llanura de Esdraelón, cerca del paso del Carmelo. El río Quisón cruzaba la llanura de este a oeste. La estrategia de Sísara era lógicamente impecable: reunir todos sus carros en el terreno abierto de la llanura, donde su superioridad tecnológica sería aplastante.',
            },
            {
              type: 'paragraph',
              text: 'Los novecientos carros de Sísara no eran simplemente un símbolo de poder — eran una máquina de guerra funcionalmente diferente de todo lo que Israel podía oponer. Cada carro llevaba un auriga y un guerrero. En campo abierto y plano, podían romper una formación de infantería como una ola rompe la arena. La táctica estándar era cargar frontalmente para desorganizar las filas enemigas, luego rodear y cortar las líneas de retirada.',
            },
            {
              type: 'media_slot',
              kind: 'image',
              alt: 'Reconstrucción de un carro de guerra del Bronce Final similar al tipo usado por Sísara',
              caption: 'Los carros de hierro del período representaban la máxima tecnología militar disponible. La plataforma de hierro los hacía más resistentes que los de bronce, y más lentos con la lluvia.',
              contextCard: {
                year: 'c. 1125 a.C.',
                place: 'Llanura de Esdraelón, Canaán',
                label: 'Haroset-goim — base de los carros de Sísara',
              },
            },
          ],
        },
        {
          id: 't1-2',
          title: 'El ejército de Israel en el Monte Tabor',
          blocks: [
            {
              type: 'paragraph',
              text: 'Mientras Sísara concentraba sus carros en la llanura, Barac había concentrado sus diez mil hombres en el Monte Tabor — terreno elevado donde los carros no podían operar. La elección del Monte Tabor como punto de concentración fue brillante, aunque su origen era la instrucción de Débora: en la montaña, la superioridad numérica de los carros se neutralizaba. El problema era que para llegar al enemigo, tendrían que bajar a la llanura.',
            },
            {
              type: 'doctrine_box',
              title: 'La estrategia divina — usar el terreno como arma',
              body: 'La instrucción de concentrar a Israel en el Monte Tabor antes de descender a la batalla tenía una lógica que solo se revelaría completamente cuando llegara la lluvia. Los carros de hierro eran devastadores en terreno firme. En terreno inundado — tierra arcillosa mezclada con agua — sus ruedas se hundían. El río Quisón desbordado convirtió la ventaja tecnológica de Sísara en trampa mortal. Dios usó la geografía y el clima como armas donde Israel no tenía ninguna.',
            },
            {
              type: 'key_points',
              title: 'Ventajas y desventajas de cada ejército',
              points: [
                'Sísara: 900 carros — aplastante en terreno plano y seco; inútil en lodo',
                'Barac: 10.000 infantes — sin ventaja tecnológica; terreno elevado les protegía',
                'La llanura de Esdraelón: ideal para carros cuando está seca; trampa cuando está inundada',
                'El río Quisón: normalmente tranquilo; desbordado por lluvia torrencial en el momento de la batalla',
                'El resultado: lo que parecía una ventaja decisiva de Sísara se convirtió en su perdición',
              ],
            },
          ],
        },
      ],
    },
    {
      id: 's2',
      title: '"Levántate — este es el día"',
      intro: {
        romanNumeral: 'II',
        title: 'Jueces 4:14 — La Orden que Cambió la Historia',
        paragraphs: [
          'En el momento en que el ejército de Israel estaba formado en el Monte Tabor y el de Sísara en la llanura, Débora recibió la señal divina. La orden que pronunció ese día es uno de los momentos más dramáticos del libro de Jueces.',
        ],
      },
      topics: [
        {
          id: 't2-1',
          title: 'La orden de ataque — el kairos profético',
          blocks: [
            {
              type: 'highlight_verse',
              reference: 'Jueces 4:14',
              text: 'Y Débora dijo a Barac: Levántate, porque este es el día en que Jehová ha entregado a Sísara en tus manos. ¿No ha salido Jehová delante de ti? Y Barac descendió del monte Tabor, y diez mil hombres en pos de él.',
            },
            {
              type: 'paragraph',
              text: 'La frase "este es el día" — ha-yom hazeh — es una fórmula que aparece en contextos de acción decisiva a lo largo de la Biblia. Cuando David encuentra a Saúl dormido en la cueva y sus hombres dicen "este es el día del que te habló Jehová" (1 Samuel 24:4), el lenguaje es el mismo. La fórmula identifica un momento singular en que la ventana de la acción divina está abierta — y el que actúa en ese momento actúa en sincronía con el propósito de Dios.',
            },
            {
              type: 'paragraph',
              text: 'Débora no era una comandante militar dando una orden táctica. Era una profetisa identificando el momento en que la promesa de Dios debía reclamarse con acción. La pregunta retórica que sigue — "¿no ha salido Jehová delante de ti?" — recuerda a Barac que el verdadero comandante de la batalla ya estaba en el campo. Israel simplemente debía seguirle.',
            },
            {
              type: 'central_quote',
              text: 'Levántate, porque este es el día en que Jehová ha entregado a Sísara en tus manos.',
              attribution: 'Débora — Jueces 4:14',
            },
          ],
        },
        {
          id: 't2-2',
          title: 'El papel de Débora en la batalla',
          blocks: [
            {
              type: 'paragraph',
              text: 'Que Débora estuviera físicamente presente en la batalla es uno de los detalles más notables de la historia. El texto señala en el capítulo anterior que ella fue con Barac a Cedes (Jueces 4:9), y el cántico del capítulo 5 la describe como participante activa: "Hasta que yo Débora me levanté, me levanté como madre en Israel" (Jueces 5:7). No hay indicación de que se quedara en retaguardia o en un lugar seguro.',
            },
            {
              type: 'paragraph',
              text: 'En el mundo del Oriente Próximo antiguo, los comandantes combatientes eran comunes — los reyes asirios y egipcios son representados constantemente en batalla con sus ejércitos. Pero una mujer en el campo de batalla militar, ejerciendo función de dirección profética mientras el ejército avanzaba, no tiene paralelo en los textos de ninguna cultura vecina de Israel. El texto de Jueces no lo enfatiza porque para el narrador no era lo que necesitaba explicación: la presencia de Débora era simplemente parte de los hechos.',
            },
            {
              type: 'quiz',
              quizType: 'true_false',
              question: 'Débora se quedó en Ramá mientras Barac lideraba el ejército desde el Monte Tabor.',
              answer: false,
              explanation: 'No. Débora acompañó personalmente a Barac hasta Cedes (Jueces 4:9) y estuvo presente en el campo de batalla. El cántico de Jueces 5 la describe participando activamente en los eventos de la liberación.',
            },
          ],
        },
      ],
    },
    {
      id: 's3',
      title: 'El río Quisón — el arma que nadie esperaba',
      intro: {
        romanNumeral: 'III',
        title: 'Jueces 4:15-16 y Jueces 5:19-22 — Cuando el Río Trabajó para Israel',
        paragraphs: [
          'La derrota de Sísara no fue simplemente el resultado de la valentía de Israel. El texto — especialmente el cántico del capítulo 5 — deja claro que fue el río Quisón desbordado quien neutralizó los carros. Dios usó la naturaleza como su arma.',
        ],
      },
      topics: [
        {
          id: 't3-1',
          title: 'La batalla — lo que el texto narrativo dice',
          blocks: [
            {
              type: 'highlight_verse',
              reference: 'Jueces 4:15-16',
              text: 'Y Jehová quebrantó a Sísara, y a todos sus carros, y a todo su ejército, a filo de espada delante de Barac; y Sísara descendió del carro, y huyó a pie. Y Barac siguió los carros y el ejército hasta Haroset-goim, y todo el ejército de Sísara cayó a filo de espada, sin quedar ni uno.',
            },
            {
              type: 'paragraph',
              text: 'La narrativa del capítulo 4 es sobria: Jehová quebrantó al ejército, Sísara huyó a pie, todo el ejército cayó sin quedar ni uno. El texto no describe la batalla en detalle — describe el resultado. La huida de Sísara a pie es significativa: un comandante que abandona su carro y huye a pie está dejando el símbolo más poderoso de su autoridad militar. El general de los 900 carros huye como cualquier infante.',
            },
            {
              type: 'paragraph',
              text: 'El detalle de que Sísara "descendió del carro" sugiere que el carro se volvió inutilizable. No abandonó su ventaja táctica voluntariamente — se la quitaron las circunstancias. La pregunta es: ¿qué circunstancias hicieron inutilizables los carros? El cántico del capítulo 5 responde.',
            },
          ],
        },
        {
          id: 't3-2',
          title: 'El cántico — lo que el poema revela',
          blocks: [
            {
              type: 'highlight_verse',
              reference: 'Jueces 5:19-22',
              text: 'Vinieron reyes y pelearon; entonces pelearon los reyes de Canaán en Taanac, junto a las aguas de Meguido, mas no llevaron ganancia de plata. Desde los cielos pelearon las estrellas; desde sus órbitas pelearon contra Sísara. El torrente de Quisón los arrastró, el antiguo torrente, el torrente de Quisón. Marcha, oh alma mía, con poder. Entonces resonaron los cascos de los caballos por el galopar, por el galopar de sus valientes.',
            },
            {
              type: 'paragraph',
              text: 'El cántico de Débora añade una dimensión que la narrativa del capítulo 4 omite: la participación del cosmos mismo en la batalla. "Desde los cielos pelearon las estrellas; desde sus órbitas pelearon contra Sísara." Esta es poesía, no astronomía literal — pero describe un fenómeno real: lluvia torrencial que desbordó el río Quisón, inundó la llanura y convirtió la tierra arcillosa de Esdraelón en lodo que inmovilizó los carros de hierro.',
            },
            {
              type: 'deep_dive',
              badge: 'ARQUEOLOGÍA Y GEOGRAFÍA',
              title: 'El Quisón desbordado — historia y geología',
              paragraphs: [
                'El río Quisón es normalmente un arroyo estacional que casi se seca en verano. Pero cuando lluvia torrencial cae en las colinas del Carmelo y de Galilea, puede transformarse en cuestión de horas en un río rápido que desborda sus orillas y convierte los campos circundantes en pantanos.',
                'La tierra arcillosa de la llanura de Esdraelón, cuando está saturada de agua, es extraordinariamente pegajosa. Las ruedas de los carros se hundiría inmediatamente. Los caballos perderían tracción. El arma que hacía invencible a Sísara se transformaría en trampa — su propio peso y el del carro trabajarían contra él.',
                'El cántico de Débora en Jueces 5:21 llama al Quisón "antiguo torrente" — posiblemente una referencia a su reputación histórica de desbordarse. Si Sísara conocía este riesgo y aun así eligió enfrentar a Israel en la llanura, confió demasiado en su superioridad tecnológica. Si no lo conocía, fue una falla de inteligencia táctica. En cualquier caso, el resultado fue providencial.',
              ],
            },
            {
              type: 'doctrine_box',
              title: 'La estrategia de Dios: usar las fuerzas naturales',
              body: 'La Escritura registra varios momentos en que Dios usó fenómenos naturales como instrumentos de liberación: el Mar Rojo (Éxodo 14), el granizo sobre los amoritas (Josué 10), la oscuridad sobre Egipto (Éxodo 10). La inundación del Quisón en tiempos de Débora sigue este patrón: Dios no necesita crear un milagro espectacular cuando la naturaleza misma, en el momento correcto, sirve a sus propósitos. La fe de Débora y Barac de actuar según la instrucción divina fue lo que los colocó en posición de beneficiarse de lo que el Señor ya había preparado.',
            },
          ],
        },
      ],
    },
    {
      id: 's4',
      title: 'Lo que la batalla enseña sobre la estrategia divina',
      intro: {
        romanNumeral: 'IV',
        title: 'Fe, Obediencia y el Momento Exacto',
        paragraphs: [
          'La batalla del Quisón es un estudio en la mecánica de la fe operativa: cómo Dios dirige a personas reales con recursos limitados para lograr resultados que exceden toda probabilidad humana.',
        ],
      },
      topics: [
        {
          id: 't4-1',
          title: 'Los principios de la estrategia divina en la batalla',
          blocks: [
            {
              type: 'steps',
              title: 'Cómo se desarrolló la intervención divina',
              steps: [
                'Instrucción específica antes de la batalla: punto de concentración (Monte Tabor), números (10.000), tribus (Neftalí y Zabulón)',
                'Posicionamiento estratégico: el Monte Tabor neutralizaba los carros en la primera fase',
                'La señal profética exacta: "este es el día" — Débora identificó el momento preciso de actuar',
                'La acción humana en fe: Barac descendió del Tabor con los 10.000 al momento indicado',
                'La intervención natural: la lluvia torrencial inundó el Quisón y atrapó los carros',
                'El resultado: el ejército de Sísara destruido sin quedar ninguno',
              ],
            },
            {
              type: 'paragraph',
              text: 'El patrón de la batalla del Quisón se repite en toda la Escritura: Dios proporciona instrucción específica, el obediente actúa en el momento señalado, y las circunstancias se alinean de maneras que el obediente no podría haber producido solo. La fe activa no es pasividad esperando el milagro — es acción en obediencia que coloca al fiel en posición de experimentar lo que Dios ya ha preparado.',
            },
            {
              type: 'leader_quote',
              quote: 'La fe es una esperanza en lo que no se ve, pero también es confianza activa que impulsa a la acción. La fe sin obra es muerta. Los santos que actuaron en fe hicieron cosas que el mundo consideraba imposibles — no porque eliminaran el riesgo, sino porque confiaron en el que controla todas las circunstancias.',
              name: 'Russell M. Nelson',
              role: 'Presidente de La Iglesia de Jesucristo de los Santos de los Últimos Días',
            },
          ],
        },
        {
          id: 't4-2',
          title: 'Reflexión — los carros de hierro de tu vida',
          blocks: [
            {
              type: 'paragraph',
              text: 'La imagen de los 900 carros de hierro ha perdurado en la memoria colectiva de Israel precisamente porque captura algo universal: la experiencia de enfrentar una fuerza que, humanamente, no puede vencerse. Los carros representaban el poder tecnológico, militar y político del mundo cananeo — todo lo que Israel no tenía y que hacía la opresión parecer permanente.',
            },
            {
              type: 'reflection',
              prompt: '¿Cuáles son los "carros de hierro" en tu vida — las situaciones o fuerzas que parecen tecnológicamente superiores a tu capacidad de enfrentarlas? ¿Qué te enseña la estrategia de Débora sobre cómo responder cuando la desventaja es abrumadora?',
            },
            {
              type: 'note_prompts',
              prompts: [
                { id: 'p1', question: '¿En qué momentos de tu vida has visto a Dios usar circunstancias o recursos que tú no podrías haber producido — el "río Quisón" que cambió la situación cuando actuaste en fe?' },
                { id: 'p2', question: 'Débora dio la orden "levántate" en el momento exacto. ¿Cómo aprendes a escuchar ese tipo de señal en tu propia vida? ¿Qué prácticas espirituales te mantienen sensible al momento correcto?' },
                { id: 'p3', question: 'El texto dice que "Jehová quebrantó a Sísara." ¿Cómo equilibras el reconocimiento de que Dios actúa con la responsabilidad de actuar tú también? ¿Cuándo la fe requiere que te lances al campo de batalla?' },
              ],
            },
          ],
        },
      ],
    },
  ],
}
