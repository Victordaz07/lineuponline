import type { Lesson } from '@/types/doctrine'

export const ammonLaMision: Lesson = {
  id: 'ammon-la-mision',
  moduleId: 'personajes-escrituras',
  submoduleGroup: 'ammon',
  title: 'La Misión Imposible',
  subtitle: 'Un hijo de Mosíah elige servir al rey',
  author: 'Fuentes: Mosíah 27-28; Alma 17:1-25',
  description:
    'Los hijos de Mosíah eran entre los más impíos de su generación — y luego se convirtieron en los misioneros más valientes del Libro de Mormón. Ammón eligió ir a los lamanitas, el pueblo más peligroso del continente, y en lugar de exigir honores por su linaje real eligió ser siervo. Esa elección lo cambió todo.',
  level: 'BÁSICO',
  icon: '🌍',
  duration: 30,
  order: 7310,
  status: 'PUBLISHED',
  studyBodyPlain: '',
  originalBodyPlain: '',
  previousLessonId: null,
  nextLessonId: 'ammon-el-guardian',
  studySections: [
    {
      id: 's1',
      title: 'De los más impíos a los más valientes',
      intro: {
        romanNumeral: 'I',
        title: 'Mosíah 27-28 — La Conversión que lo Cambió Todo',
        paragraphs: [
          'Antes de ser misionero, Ammón fue perseguidor de la Iglesia. La misma conversión que lo transformó fue la que lo envió.',
        ],
      },
      topics: [
        {
          id: 't1-1',
          title: 'Los hijos de Mosíah: de perseguidores a misioneros',
          blocks: [
            {
              type: 'highlight_verse',
              reference: 'Mosíah 27:8-10',
              text: 'Y llegó a ser un hombre muy perverso e idólatra; y fue un gran impedimento para la prosperidad de la iglesia de Dios; robando el corazón del pueblo; haciendo mucho daño a la iglesia, yendo en secreto con los hijos de Mosíah buscando destruir la iglesia y para conducir al pueblo del Señor contra sus preceptos.',
            },
            {
              type: 'paragraph',
              text: 'Ammón, junto con los otros hijos del rey Mosíah, fue contado entre los más rebeldes e impíos de su época. Perseguían activamente a los miembros de la Iglesia, buscaban desacreditarla, y arrastraban corazones lejos de la fe. No eran simplemente incrédulos pasivos — eran activos antagonistas del reino de Dios. Esta es la oscuridad de la que fueron sacados.',
            },
            {
              type: 'paragraph',
              text: 'El ángel que se les apareció (Mosíah 27:11-16) no lo hizo por sus méritos sino por las oraciones incansables del rey Mosíah y de los fieles. La conversión de Ammón no fue autogenerada — fue respuesta a la intercesión de otros. Este principio, que la conversión de alguien puede ser el fruto de las oraciones de otros, es tan verdadero en el siglo XXI como lo fue en la era del Libro de Mormón.',
            },
            {
              type: 'doctrine_box',
              title: 'El Poder del Ángel — y de las Oraciones Detrás del Ángel',
              body: 'Mosíah 27:14 registra que el ángel dijo: "He descendido a declarártelo, pues el Señor ha oído las oraciones de su pueblo, y también las oraciones de su siervo Alma, el cual es tu padre; y ha oído sus oraciones con mucha fe." El ángel no llegó porque Ammón lo merecía. Llegó porque alguien que lo amaba oró con mucha fe. Ninguna conversión ocurre en el vacío. Hay siempre oraciones humanas detrás de los actos divinos.',
            },
            {
              type: 'timeline',
              items: [
                { label: 'Persecución activa', text: 'Ammón y los hijos de Mosíah perseguían a los miembros de la Iglesia (Mosíah 27:8)', color: 'red' },
                { label: 'La visita del ángel', text: 'El ángel apareció y Alma el joven cayó como muerto por tres días (Mosíah 27:11-19)', color: 'gold' },
                { label: 'Conversión profunda', text: 'Alma el joven se levantó convertido; los hijos de Mosíah también se convirtieron (Mosíah 27:32)', color: 'blue' },
                { label: 'La gran decisión', text: 'Los hijos de Mosíah renuncia a la herencia del trono para servir misión (Mosíah 28:1-9)', color: 'green' },
              ],
            },
          ],
        },
        {
          id: 't1-2',
          title: 'Renunciar al trono para predicar el evangelio',
          blocks: [
            {
              type: 'highlight_verse',
              reference: 'Mosíah 28:3',
              text: 'Ahora bien, deseaban que la salvación fuera declarada a todo ser humano, y no podían tolerar que ningún alma humana pereciera; sí, aun el pensamiento de que ninguna alma padecería penas interminables era suficiente para hacerlos estremecer y temblar.',
            },
            {
              type: 'paragraph',
              text: 'La motivación de los hijos de Mosíah fue el amor — no la ambición religiosa ni el deseo de aventura. El texto dice que "no podían tolerar" la posibilidad de que alguien pereciera sin oír el evangelio. Esta intolerancia al sufrimiento eterno del prójimo fue más fuerte que el deseo del trono, más fuerte que la comodidad, más fuerte que el sentido común político. Los hijos del rey renunciaron a su herencia para ir a las tierras más peligrosas del continente.',
            },
            {
              type: 'paragraph',
              text: 'El rey Mosíah preguntó al Señor si debía permitirles ir. La respuesta en Mosíah 28:7 fue: "Déjalos ir, porque muchos creerán en sus palabras, y serán llevados al conocimiento de sus errores. Yo los libraré; sí, y esto será para gran bien para este pueblo." Dios ya sabía el resultado antes de que comenzara la misión. La voluntad de Dios y el deseo del corazón de los misioneros estaban alineados. Esa alineación es la base de toda gran misión.',
            },
            {
              type: 'key_points',
              title: 'Lo que los hijos de Mosíah sacrificaron para ir a los lamanitas',
              points: [
                'La herencia del trono de Zarahemla — uno de los reinos más poderosos de la época',
                'La seguridad física — los lamanitas habían matado misioneros anteriores',
                'El reconocimiento social — ir a los lamanitas era considerado locura por muchos nefitas',
                'El tiempo — la misión duró catorce años (Alma 17:4)',
              ],
            },
            {
              type: 'reflection',
              prompt: '¿Hay algo que el Señor te ha pedido que sacrifiques por amor a otros? ¿Qué es lo que hace que ese sacrificio sea difícil, y qué te ayudaría a ver más claramente su valor eterno?',
            },
          ],
        },
      ],
    },
    {
      id: 's2',
      title: 'La tierra de los lamanitas',
      intro: {
        romanNumeral: 'II',
        title: 'Alma 17:1-13 — Preparados por Catorce Años de Oración',
        paragraphs: [
          'Cuando los misioneros se encontraron con Alma el joven tras catorce años, el texto dice que Alma se regocijó "no con gozo carnal sino con gozo espiritual" — el fruto de años de fe.',
        ],
      },
      topics: [
        {
          id: 't2-1',
          title: 'La preparación de catorce años',
          blocks: [
            {
              type: 'highlight_verse',
              reference: 'Alma 17:2-3',
              text: 'Y lo que los hacía fuertes era que habían emprendido el camino de la instrucción del Señor; sí, habían estado enseñando la palabra de Dios por espacio de catorce años... y habían orado y ayunado mucho para que el Señor les concediera el Espíritu de la profecía y el Espíritu de la revelación.',
            },
            {
              type: 'paragraph',
              text: 'Catorce años de misión entre los lamanitas. Ese número es colosal. La preparación fue igualmente colosal: oraban mucho, ayunaban mucho, estudiaban las escrituras con diligencia. Los milagros que ocurrirían en la misión no cayeron del cielo sin esfuerzo previo — fueron el fruto de años de disciplina espiritual acumulada. El poder que Ammón demostraría en el aguaje de Sedequias era el producto de catorce años de comunión con Dios.',
            },
            {
              type: 'paragraph',
              text: 'Alma 17:9 registra las instrucciones del Señor a los misioneros: "Id entre vuestros hermanos los lamanitas, y estableced mi palabra; mas sed pacientes en vuestros sufrimientos, y aflicciones y privaciones; confortaos en Cristo y llevad a cuestas vuestras cruces." Antes del primer milagro, antes de la primera conversión, Dios ya les advertía que habría sufrimiento. La fe que espera solo éxito es más frágil que la fe que ha sido preparada para el costo del ministerio.',
            },
            {
              type: 'deep_dive',
              badge: 'Contexto histórico',
              title: 'Los lamanitas del tiempo de Ammón — ¿Quiénes eran?',
              paragraphs: [
                'Los lamanitas no eran un pueblo racialmente diferente de los nefitas — eran ramas de la misma familia que habían tomado caminos distintos durante generaciones. La enemistad entre ambos pueblos era profunda, política, cultural y religiosa. Habían estado en guerra intermitente durante siglos. Desde la perspectiva nefita, ir a los lamanitas como misionero era comparable a entrar al campo enemigo sin armas.',
                'La tierra de Ishmael, donde Ammón sería enviado, era uno de los territorios lamanitas más activos. El rey Lamoni, con quien trataría Ammón, era hijo del rey supremo de todos los lamanitas — una figura de enorme poder político. El acceso a este hombre fue, en sí mismo, providencial. Lo que parecía una asignación aleatoria fue una colocación divina.',
                'El texto de Alma 17:13-14 registra que los misioneros se separaron al llegar a los límites de los lamanitas, "encomendándose los unos a los otros a la voluntad del Señor." Esta separación fue dolorosa y valiente — cada uno fue solo a un territorio distinto, sin saber si volvería a ver a sus compañeros.',
              ],
            },
          ],
        },
      ],
    },
    {
      id: 's3',
      title: 'La llegada a Ishmael',
      intro: {
        romanNumeral: 'III',
        title: 'Alma 17:18-25 — Preso, Presentado, y Preguntado',
        paragraphs: [
          'El primer momento de Ammón en la tierra de Ishmael fue ser capturado y llevado ante el rey. Su respuesta a ese momento reveló quién era.',
        ],
      },
      topics: [
        {
          id: 't3-1',
          title: 'Capturado: la primera prueba de la misión',
          blocks: [
            {
              type: 'highlight_verse',
              reference: 'Alma 17:21-22',
              text: 'Y el rey preguntó a Ammón si era su deseo vivir en medio de los lamanitas, o entre su gente. Y Ammón le dijo que deseaba vivir entre ellos hasta el día de su muerte. Y llegó a gustar de Ammón, y Ammón se convirtió en siervo del rey Lamoni.',
            },
            {
              type: 'paragraph',
              text: 'Cuando Ammón fue traído ante Lamoni, el rey tenía el poder absoluto sobre su vida. Podría haberlo ejecutado, encadenado, o expulsado. En cambio, le ofreció una de sus hijas como esposa — una señal de honor y alianza política. Ammón rechazó la oferta. No porque fuera mala, sino porque tenía una misión diferente. Pidió en su lugar ser siervo del rey.',
            },
            {
              type: 'paragraph',
              text: 'La elección de ser siervo en lugar de yerno fue estratégicamente brillante y espiritualmente profunda. Como yerno, Ammón habría sido honorado pero distante del corazón del rey. Como siervo, estaría presente en cada momento del día, accesible, observable. La misión requería cercanía, y la cercanía requería humildad. Ammón eligió el camino de servicio porque era el camino del amor — y el camino que Jesucristo mismo trazó.',
            },
            {
              type: 'compare_grid',
              title: 'Dos caminos ante el rey: yerno o siervo',
              left: {
                label: 'Convertirse en yerno del rey',
                points: [
                  'Honor inmediato y posición social elevada',
                  'Distancia del rey en la vida cotidiana',
                  'Dependencia del favor político de la familia real',
                  'Misión posiblemente comprometida por lazos familiares',
                ],
              },
              right: {
                label: 'Elegir ser siervo del rey',
                points: [
                  'Humildad visible y demostrabie ante todos',
                  'Acceso diario al rey y a su corazón',
                  'Oportunidad de demostrar fidelidad y poder de Dios',
                  'Plataforma para enseñar el evangelio cuando se ganara la confianza',
                ],
              },
            },
            {
              type: 'central_quote',
              text: 'Pero Ammón le dijo: No, sino que seré tu siervo.',
              attribution: 'Alma 17:25',
            },
            {
              type: 'reflection',
              prompt: '¿En qué área de tu vida podrías estar buscando el honor o el estatus cuando el Señor te está llamando al servicio? ¿Qué cambiaría si eligieras intencionalmente el camino más humilde?',
            },
          ],
        },
        {
          id: 't3-2',
          title: 'El servicio como estrategia misionera',
          blocks: [
            {
              type: 'paragraph',
              text: 'La asignación de Ammón fue cuidar los rebaños del rey. No era una tarea gloriosa ni visible — era trabajo diario, monótono, con animales. Pero Alma 17:29 revela lo que Ammón pensó en su corazón al recibir esta asignación: "Este es mi tiempo de demostrar al rey el poder que hay en mí." No vio el trabajo ordinario como un obstáculo a la misión — vio el trabajo ordinario como la misión misma.',
            },
            {
              type: 'doctrine_box',
              title: 'El Servicio Desinteresado como Preparación del Corazón',
              body: 'Alma 18:10 registra las palabras del rey Lamoni a sus siervos: "¿Acaso este individuo no es más que un hombre? Y me dijeron que tenía gran poder. Y me dijeron: Ahora lo creemos, porque acaso no ha vendido nuestros rebaños? ¿Y acaso no ha luchado contra ellos?" La pregunta del rey revela algo crucial: Ammón primero sirvió, luego asombró. El orden importa. El servicio fiel abrió el corazón del rey antes de que hubiera una sola discusión doctrinal.',
            },
            {
              type: 'steps',
              title: 'La estrategia de Ammón en Ishmael — en orden',
              steps: [
                'Llegó a la tierra de Ishmael sin condiciones ni demandas',
                'Fue capturado y llevado ante el rey — respondió con humildad',
                'Eligió ser siervo en lugar de yerno — renunció al honor',
                'Fue asignado a cuidar los rebaños — aceptó el trabajo sin quejarse',
                'Vio el trabajo diario como su oportunidad de demostrar fe y poder',
                'Esperó el momento en que su servicio abriera la puerta al evangelio',
              ],
            },
            {
              type: 'note_prompts',
              prompts: [
                { id: 'p1', question: '¿Qué sacrificó Ammón al elegir ser siervo en lugar de yerno del rey Lamoni?' },
                { id: 'p2', question: '¿Cómo se relaciona la preparación de catorce años de Ammón con los milagros que siguieron?' },
                { id: 'p3', question: '¿De qué manera el ejemplo de Ammón cambia la forma en que ves el servicio en tu propia vida?' },
              ],
            },
          ],
        },
      ],
    },
    {
      id: 's4',
      title: 'El modelo para todo misionero',
      intro: {
        romanNumeral: 'IV',
        title: 'Alma 26:5-7 — La Misión que Preparó el Corazón del Continente',
        paragraphs: [
          'La misión de Ammón no fue un evento aislado. Fue el primer acto de una transformación que afectaría a cientos de miles de personas durante generaciones.',
        ],
      },
      topics: [
        {
          id: 't4-1',
          title: 'Lo que Ammón nos enseña sobre la misión',
          blocks: [
            {
              type: 'paragraph',
              text: 'La misión de Ammón establece un modelo que trasciende su época. No fue un método que se enseñó en seminarios ni una técnica misionera sistemática — fue una forma de vida. Ammón amaba a los lamanitas antes de que respondieran. Los servía antes de que confiaran en él. Los defendía antes de que lo conocieran. El amor precedió a todo lo demás, y ese amor fue la clave que abrió lo que ninguna táctica podría haber abierto.',
            },
            {
              type: 'key_points',
              title: 'Principios misioneros de Ammón aplicables hoy',
              points: [
                'Elegir servir antes de buscar ser servido — la misión comienza con humildad',
                'Ver cada trabajo ordinario como una plataforma para la fe',
                'Amar al pueblo antes de que el pueblo responda — el amor precede a la respuesta',
                'Prepararse espiritualmente durante años para que el momento de crisis encuentre fe ya formada',
                'Confiar en que Dios ya conoce el resultado — ir con paz, no con ansiedad',
              ],
            },
            {
              type: 'leader_quote',
              quote: 'El mayor misionero del Libro de Mormón no convirtió por la elocuencia de sus palabras sino por la consistencia de su servicio. Ammón nos recuerda que la conversión más poderosa comienza con un siervo fiel, no con un predicador elocuente.',
              name: 'Principio del Libro de Mormón',
              role: 'Aplicación de Alma 17-26',
            },
            {
              type: 'quiz',
              quizType: 'true_false',
              question: '¿Los hijos de Mosíah eligieron renunciar al trono para servir misión entre los lamanitas?',
              answer: true,
              explanation: 'Mosíah 28:1-9 registra que los hijos de Mosíah, llenos del deseo de que todos oyeran el evangelio, pidieron al rey permiso para ir a los lamanitas. El rey los dejó ir tras preguntar al Señor.',
            },
            {
              type: 'quiz',
              quizType: 'fill_blank',
              question: 'Cuando el rey Lamoni ofreció a Ammón una de sus hijas como esposa, Ammón respondió que prefería ser _____ del rey.',
              answer: 'siervo',
              explanation: 'Alma 17:25 — Ammón declinó la oferta de ser yerno y pidió en su lugar servir como siervo del rey, eligiendo la humildad sobre el honor para estar más cerca del corazón del rey.',
            },
          ],
        },
      ],
    },
  ],
}
