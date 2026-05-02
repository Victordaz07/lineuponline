import type { Lesson } from '@/types/doctrine'

export const elDonDelEspirituSanto: Lesson = {
  id: 'don-espiritu-santo',
  moduleId: 'doctrina-fundamental',
  title: 'El Don del Espíritu Santo',
  subtitle: 'El mayor don que Dios da a sus hijos en mortalidad',
  author: 'Iglesia de Jesucristo de los Santos de los Últimos Días',
  description:
    'El tercer miembro de la Divinidad, sus funciones como Consolador, Testigo y Santificador, la diferencia crítica entre su influencia y su don, y cómo cultivar su compañía constante.',
  level: 'BÁSICO',
  icon: '🕊️',
  duration: 60,
  order: 3,
  status: 'PUBLISHED',
  studyBodyPlain: '',
  originalBodyPlain: '',
  previousLessonId: 'bautismo',
  nextLessonId: null,
  studySections: [
    // ─── SECCIÓN I ────────────────────────────────────────────────────────────
    {
      id: 's1',
      title: 'La naturaleza del Espíritu Santo',
      intro: {
        romanNumeral: 'I',
        title: 'La naturaleza del Espíritu Santo',
        paragraphs: [
          'El Espíritu Santo es el tercer miembro de la Divinidad — un ser distinto del Padre y del Hijo, con una naturaleza única que le permite cumplir su misión de habitar en nosotros.',
        ],
      },
      topics: [
        {
          id: 'la-naturaleza-del-espiritu-santo',
          title: 'Un personaje de Espíritu — el tercer miembro de la Divinidad',
          subtitle:
            'Entender quién es el Espíritu Santo — no solo lo que hace — es fundamental para recibir su don con comprensión y gratitud.',
          blocks: [
            {
              type: 'paragraph',
              text: 'La mayoría de los cristianos hablan del "Espíritu Santo" como una fuerza, una influencia, o una manifestación de Dios. La Restauración trajo una revelación precisa: el Espíritu Santo es un personaje — el tercer miembro de la Divinidad, un ser individual y distinto, con una naturaleza específica que hace posible su misión única.',
              blockId: 'desh-s1-p-0',
            },
            {
              type: 'highlight_verse',
              text: '"El Padre tiene un cuerpo de carne y huesos tan tangible como el del hombre; asimismo el Hijo; pero el Espíritu Santo no tiene cuerpo de carne y huesos, sino que es un personaje de Espíritu. De no ser así, el Espíritu Santo no podría morar en nosotros."',
              reference: 'Doctrina y Convenios 130:22–23 · Revelación al Profeta José Smith',
            },
            {
              type: 'paragraph',
              text: 'Esta distinción lo cambia todo: el Padre y el Hijo tienen cuerpos glorificados y no pueden estar simultáneamente en más de un lugar. El Espíritu Santo, como personaje de Espíritu, puede habitar en cada persona fiel de manera personal y directa. Su naturaleza misma es el mecanismo por el cual la Divinidad puede tener comunicación íntima e individual con cada uno de sus hijos.',
              blockId: 'desh-s1-p-1',
            },
            {
              type: 'paragraph',
              text: 'Antes de su crucifixión, el Salvador prometió a sus apóstoles que no los dejaría huérfanos. Lo que les estaba prometiendo era el don más grande que podía dejarles — la presencia constante del tercer miembro de la Divinidad:',
              blockId: 'desh-s1-p-2',
            },
            {
              type: 'highlight_verse',
              text: '"Y yo rogaré al Padre, y os dará otro Consolador, para que esté con vosotros para siempre: el Espíritu de verdad, al cual el mundo no puede recibir, porque no le ve, ni le conoce; pero vosotros le conocéis, porque mora con vosotros, y estará en vosotros."',
              reference: 'Juan 14:16–17 · Biblia (RVR) · El Salvador a sus apóstoles',
            },
            {
              type: 'highlight_verse',
              text: '"Mas el Consolador, el Espíritu Santo, a quien el Padre enviará en mi nombre, él os enseñará todas las cosas, y os recordará todo lo que yo os he dicho."',
              reference: 'Juan 14:26 · Biblia (RVR)',
            },
            {
              type: 'highlight_verse',
              text: '"Pero cuando venga el Espíritu de verdad, él os guiará a toda la verdad; porque no hablará por su propia cuenta, sino que hablará todo lo que oyere, y os hará saber las cosas que habrán de venir."',
              reference: 'Juan 16:13 · Biblia (RVR)',
            },
            {
              type: 'doctrine_box',
              title: 'Los tres miembros de la Divinidad — naturaleza y función',
              body: 'Dios el Padre (Elohim): Padre de nuestros espíritus; cuerpo glorificado de carne y huesos; el Creador del plan. Jesucristo (Jehová): El Unigénito del Padre en la carne; Redentor y Mediador del convenio; cuerpo glorificado resucitado. El Espíritu Santo: Personaje de Espíritu; puede morar en nosotros; Testigo, Consolador y Santificador; mensajero de la mente y voluntad del Padre y del Hijo. Son tres seres separados y distintos, pero perfectamente unidos en propósito, voluntad y testimonio.',
            },
            {
              type: 'leader_quote',
              quote:
                'El don del Espíritu Santo se adapta a todos los órganos y atributos del hombre. Vivifica todas las facultades intelectuales; aumenta, amplía, expande y purifica todas las pasiones y afecciones naturales, adaptándolas por el don de la sabiduría a su uso legítimo. Inspira, desarrolla, cultiva y madura todas las finas simpatías, alegrías, sentimientos y afecciones de nuestra naturaleza. Inspira virtud, bondad, ternura, gentileza y caridad hacia todos. Desarrolla belleza de persona y semblante. Tiende hacia la salud, el vigor, la animación y el sentimiento social. Desarrolla e intensifica todas las facultades del hombre físico e intelectual.',
              name: 'Apóstol Parley P. Pratt · "Clave para la Ciencia de la Teología" · Capítulo 10 · 1855',
            },
            {
              type: 'deep_dive',
              badge: 'Doctrina Fundamental',
              title: 'Tres realidades distintas: Luz de Cristo, influencia del Espíritu y el Don',
              paragraphs: [
                'La Restauración distingue tres realidades espirituales que el mundo frecuentemente confunde:',
                '① La Luz de Cristo — también llamada "conciencia" — es el poder o influencia que procede de Cristo y está presente en todo ser viviente (D&C 88:11-13; Moroni 7:16). Es lo que permite a toda persona distinguir el bien del mal, sentir remordimiento, y reconocer la bondad. Está disponible para toda la humanidad, independientemente de creencias o bautismo.',
                '② La Influencia del Espíritu Santo — este miembro de la Divinidad puede tocar momentáneamente a personas que no han sido confirmadas, cuando el Padre lo determina. Por eso una persona no miembro puede sentir el testimonio de la verdad al escuchar las Escrituras o la voz de los misioneros. Es temporal, por invitación.',
                '③ El Don del Espíritu Santo — conferido por la imposición de manos después del bautismo — es el derecho a la compañía constante del Espíritu Santo. No es un toque momentáneo, sino una presencia continua disponible a quienes son dignos. Esta es la distinción más importante de la teología restaurada.',
              ],
            },
            {
              type: 'reflection',
              prompt:
                '¿Has sentido la diferencia entre momentos en que el Espíritu te visitó brevemente y períodos en que su compañía fue constante? ¿Qué marcó la diferencia en esos períodos?',
            },
          ],
        },
      ],
    },
    // ─── SECCIÓN II ───────────────────────────────────────────────────────────
    {
      id: 's2',
      title: 'El Don y la Influencia — la distinción más importante',
      intro: {
        romanNumeral: 'II',
        title: 'El Don y la Influencia — la distinción más importante',
        paragraphs: [
          'Ningún otro principio del evangelio restaurado distingue más claramente nuestra doctrina del resto del mundo cristiano que este: el Don del Espíritu Santo no es lo mismo que su influencia.',
        ],
      },
      topics: [
        {
          id: 'el-don-vs-la-influencia',
          title: 'La compañía constante como derecho de convenio',
          subtitle:
            'El mundo puede sentir su influencia. Solo los que han recibido el don tienen el derecho — y la responsabilidad — de su presencia constante.',
          blocks: [
            {
              type: 'paragraph',
              text: 'Pedro, en el día de Pentecostés, hizo una promesa que el mundo cristiano por siglos no ha comprendido completamente. No dijo solo "arrepentíos y sed bautizados." Añadió una tercera cosa, específica, que se recibe por una ordenanza separada:',
              blockId: 'desh-s2-p-0',
            },
            {
              type: 'highlight_verse',
              text: '"Pedro les dijo: Arrepentíos, y bautícese cada uno de vosotros en el nombre de Jesucristo para perdón de los pecados; y recibiréis el don del Espíritu Santo."',
              reference: 'Hechos 2:38 · Biblia (RVR) · Pedro en el día de Pentecostés',
            },
            {
              type: 'paragraph',
              text: 'El Profeta José Smith lo articuló con su característica claridad: "Bien podéis bautizar a un saco de arena como a un hombre, si no se hace en vista de la remisión de los pecados y la obtención del Espíritu Santo. El bautismo por agua no es más que la mitad del bautismo, y no vale nada sin la otra mitad — es decir, el bautismo del Espíritu Santo." Estas palabras no son hiperbólicas — son la doctrina correcta.',
              blockId: 'desh-s2-p-1',
            },
            {
              type: 'compare_grid',
              left: {
                title: 'La Influencia del Espíritu Santo',
                items: [
                  'Disponible para toda la humanidad',
                  'Temporal — visitas, no residencia',
                  'No requiere bautismo ni confirmación',
                  'Su propósito principal: testificar la verdad e invitar al arrepentimiento',
                  'Puede retirarse cuando la persona rechaza la verdad',
                  'Ejemplo: el investigador que siente que el Libro de Mormón es verdadero',
                ],
              },
              right: {
                title: 'El Don del Espíritu Santo',
                items: [
                  'Exclusivo para los confirmados con autoridad del sacerdocio',
                  'Constante — compañía permanente para el digno',
                  'Requiere bautismo válido + confirmación por sacerdocio',
                  'Su propósito: santificar, guiar, revelar, fortalecer y consolar',
                  'Se mantiene por fidelidad; se aleja por indignidad',
                  'Ejemplo: la guía constante del miembro fiel en cada decisión',
                ],
              },
            },
            {
              type: 'highlight_verse',
              text: '"Ahora bien, este es el mandamiento: arrepentíos, todos los extremos de la tierra, y venid a mí y sed bautizados en mi nombre, para que seáis santificados por la recepción del Espíritu Santo, a fin de que podáis estar en pie sin mancha ante mí en el último día."',
              reference: '3 Nefi 27:20 · Libro de Mormón · El Salvador a los nefitas',
            },
            {
              type: 'doctrine_box',
              title: 'Lo que el Don del Espíritu Santo confiere — y sus condiciones',
              body: 'El don confiere: el derecho a la compañía constante del Espíritu, revelación personal para guía de vida, santificación progresiva del alma, acceso a los dones espirituales, y el sello de aprobación sobre las ordenanzas recibidas. Sus condiciones: dignidad de vida, obediencia a los mandamientos, arrepentimiento cuando se peca, oración constante, y participación en las ordenanzas de renovación (Santa Cena). El don no se pierde en un instante de debilidad — se va apagando gradualmente cuando vivimos en conflicto con sus enseñanzas.',
            },
            {
              type: 'leader_quote',
              quote:
                'El mandamiento de recibir el Espíritu Santo es una de las instrucciones más importantes dadas a los miembros de la Iglesia. No recibimos ni experimentamos al Espíritu Santo simplemente por existir ni por inercia espiritual. Debemos aprender la doctrina, comprender el propósito, y crear activamente las condiciones en nuestra vida que le invitan a permanecer. El don no es automático — es una relación que se cultiva.',
              name: 'Élder David A. Bednar · "Recibid el Espíritu Santo" · Conferencia General, octubre 2010',
            },
            {
              type: 'key_points',
              points: [
                '🙏 Orar con fe: El Espíritu se invita, no se impone. La oración sincera abre la puerta a su presencia.',
                '📖 Estudiar las escrituras: Su voz habla a través de las palabras sagradas. No puede instruirnos en lo que no hemos estudiado.',
                '🍷 Renovar los convenios: La Santa Cena renueva cada semana el derecho a su compañía. "Para que siempre tengan su Espíritu consigo" es una promesa condicional.',
                '⚡ Evitar lo que lo ofende: El Espíritu es sensible. Medios de entretenimiento, lenguaje, pensamientos y actitudes contrarios al evangelio lo alejan gradualmente.',
                '🤲 Servir a otros: El Espíritu habita donde hay caridad activa. El servicio es uno de los imanes más poderosos de su presencia.',
              ],
            },
            {
              type: 'reflection',
              prompt:
                'El Profeta José Smith dijo que el bautismo sin el don del Espíritu Santo es "solo la mitad del bautismo." ¿Cuánto peso le das en tu vida diaria al don que recibiste en tu confirmación? ¿Lo tratas como el mayor regalo que has recibido?',
            },
          ],
        },
      ],
    },
    // ─── SECCIÓN III ──────────────────────────────────────────────────────────
    {
      id: 's3',
      title: 'El Consolador — sus funciones',
      intro: {
        romanNumeral: 'III',
        title: 'El Consolador — sus funciones',
        paragraphs: [
          'El Señor no dejó ambigüedad sobre qué hace el Espíritu Santo. Juan 14–16 y las escrituras restauradas detallan sus funciones específicas con precisión doctrinal.',
        ],
      },
      topics: [
        {
          id: 'las-funciones-del-consolador',
          title: 'Las siete funciones del Espíritu Santo',
          subtitle:
            'El Espíritu Santo no es simplemente "una buena sensación." Las escrituras definen sus funciones con precisión: testifica, enseña, guía, recuerda, consuela, santifica y revela.',
          blocks: [
            {
              type: 'paragraph',
              text: 'Los discursos de despedida del Salvador en Juan 14–16 son la fuente más rica de doctrina sobre el Espíritu Santo en los Evangelios. En el espacio de tres capítulos, el Señor describió con precisión qué haría el Espíritu por sus discípulos. La Restauración añadió capas de comprensión que completan este cuadro extraordinario.',
              blockId: 'desh-s3-p-0',
            },
            {
              type: 'highlight_verse',
              text: '"Pero cuando venga el Consolador, a quien yo os enviaré del Padre, el Espíritu de verdad, el cual procede del Padre, él dará testimonio acerca de mí."',
              reference: 'Juan 15:26 · Biblia (RVR) · Función #1: Testificar de Cristo',
            },
            {
              type: 'highlight_verse',
              text: '"Mas el Consolador, el Espíritu Santo, a quien el Padre enviará en mi nombre, él os enseñará todas las cosas, y os recordará todo lo que yo os he dicho."',
              reference: 'Juan 14:26 · Biblia (RVR) · Función #2: Enseñar y recordar',
            },
            {
              type: 'highlight_verse',
              text: '"Pero cuando venga el Espíritu de verdad, él os guiará a toda la verdad; porque no hablará por su propia cuenta, sino que hablará todo lo que oyere, y os hará saber las cosas que habrán de venir."',
              reference: 'Juan 16:13 · Biblia (RVR) · Función #3: Guiar a toda verdad',
            },
            {
              type: 'highlight_verse',
              text: '"Sí, te hablaré a la mente y al corazón por el Espíritu Santo, que vendrá sobre ti y morará en tu corazón."',
              reference: 'Doctrina y Convenios 8:2 · Función #4: Revelación personal',
            },
            {
              type: 'highlight_verse',
              text: '"Porque he aquí, de nuevo os digo que si entráis por el camino y recibís el Espíritu Santo, él os mostrará todas las cosas que debéis hacer."',
              reference: '2 Nefi 32:5 · Libro de Mormón · El Profeta Nefi · Función #5: Guía práctica de vida',
            },
            {
              type: 'highlight_verse',
              text: '"Y cuando recibáis estas cosas, quisiera exhortaros a que preguntéis a Dios el Padre Eterno, en el nombre de Cristo, si no son verdaderas estas cosas; y si pedís con un corazón sincero, con verdadera intención, teniendo fe en Cristo, él os manifestará la verdad de ellas por el poder del Espíritu Santo. Y por el poder del Espíritu Santo podéis saber la verdad de todas las cosas."',
              reference: 'Moroni 10:4–5 · Libro de Mormón · Moroni · Función #6: Manifestar la verdad de todas las cosas',
            },
            {
              type: 'key_points',
              points: [
                '① Testificar de Cristo — Su misión central es crear y fortalecer el testimonio de que Jesucristo es el Salvador. Ningún hombre puede decir verdaderamente "Jesús es el Señor" sino por el Espíritu Santo (1 Corintios 12:3).',
                '② Enseñar todas las cosas — No solo principios espirituales; el Espíritu puede iluminar toda verdad que el Padre desea que conozcamos, incluyendo cómo resolver problemas prácticos de vida.',
                '③ Recordar — Activa el conocimiento que ya tenemos. Por eso estudiar las escrituras antes de orar o de decisiones importantes no es ritual — es preparar la memoria del Espíritu.',
                '④ Guiar a toda verdad — El futuro, las consecuencias de decisiones, las advertencias de peligro. El Espíritu habla al futuro para proteger a los fieles.',
                '⑤ Revelar — Habla "a la mente y al corazón" (D&C 8:2). Estas dos formas de comunicación son distintas y ambas son válidas: los pensamientos que iluminan y las sensaciones que confirman.',
                '⑥ Mostrar qué hacer — "Os mostrará todas las cosas que debéis hacer" (2 Nefi 32:5). La guía práctica diaria — qué decir, cuándo actuar, cómo servir — viene del Espíritu.',
                '⑦ Santificar — Por la recepción del Espíritu Santo somos santificados (3 Nefi 27:20). La limpieza del alma de la impureza del pecado es obra del Espíritu, no solo del tiempo.',
              ],
            },
            {
              type: 'leader_quote',
              quote:
                'Ningún hombre puede recibir el Espíritu Santo sin recibir revelaciones. El Espíritu Santo es un revelador. Es imposible tener al Espíritu Santo sin recibir revelaciones — de lo contrario, no tendríamos al Espíritu Santo en absoluto. Cada miembro de la Iglesia tiene el derecho de recibir revelación para su propia esfera: el padre de familia para su familia, el fiel para su vida personal, el líder para quienes sirve.',
              name: 'Profeta José Smith · "Enseñanzas del Profeta José Smith" · Compilado por Joseph Fielding Smith · p. 328',
            },
            {
              type: 'deep_dive',
              badge: 'Práctica Espiritual',
              title: '¿Cómo reconocer la voz del Espíritu?',
              paragraphs: [
                'El Señor describió la comunicación del Espíritu con precisión en D&C 8:2: "te hablaré a la mente y al corazón." Son dos canales distintos: pensamientos que aparecen con claridad y paz (mente), y sensaciones de confirmación, paz o incomodidad (corazón). Ambos son válidos. El error es esperar solo uno.',
                'D&C 9:8 añade otro principio: "debes estudiar en tu mente... y luego debes preguntarme si es correcto." El Espíritu raramente llena el vacío de quien no ha pensado, orado y actuado. Confirma a quienes trabajan; no sustituye el esfuerzo humano.',
                'Las señales de que el Espíritu habla: paz que "sobrepasa todo entendimiento" (Filipenses 4:7), pensamientos claros que aparecen sin forzarlos, impulsos de hacer el bien que son más fuertes que la inercia, y a veces — no siempre — una sensación de ardor en el pecho (D&C 9:8). Pero el Espíritu también puede hablar en "una voz apacible y delicada" (1 Reyes 19:12) que requiere silencio y atención para escuchar.',
                'Una advertencia de Elder Bednar: no confundir las emociones intensas con el Espíritu. El Espíritu edifica, ilumina y da paz. Las emociones intensas son parte de la experiencia humana, pero no son por sí mismas evidencia de la presencia del Espíritu. La señal definitiva es el fruto: ¿este mensaje me lleva hacia Cristo o hacia mí mismo?',
              ],
            },
            {
              type: 'reflection',
              prompt:
                'Nefi dice que el Espíritu "os mostrará todas las cosas que debéis hacer." ¿Cuándo fue la última vez que actuaste en respuesta a un impuso del Espíritu? ¿Qué pasó cuando seguiste ese impulso? ¿Y cuando no lo hiciste?',
            },
          ],
        },
      ],
    },
    // ─── SECCIÓN IV ───────────────────────────────────────────────────────────
    {
      id: 's4',
      title: 'Los dones del Espíritu',
      intro: {
        romanNumeral: 'IV',
        title: 'Los dones del Espíritu',
        paragraphs: [
          'El Espíritu Santo no solo acompaña — también dota. A cada miembro de la Iglesia se le dan dones específicos del Espíritu, no para gloria personal, sino para beneficiar a todos.',
        ],
      },
      topics: [
        {
          id: 'los-dones-del-espiritu',
          title: 'Dones dados a cada uno para beneficio de todos',
          subtitle:
            'Pablo, Moroni y el Señor en D&C 46 describen un catálogo de dones espirituales. Cada miembro tiene al menos uno. El propósito siempre es el mismo: beneficiar al conjunto del cuerpo de Cristo.',
          blocks: [
            {
              type: 'paragraph',
              text: 'Los dones del Espíritu no son exclusivos de líderes o apóstoles. Pablo fue explícito: "a cada uno le es dada la manifestación del Espíritu para provecho." El "cada uno" no tiene excepciones. Todo miembro fiel de la Iglesia ha recibido al menos un don del Espíritu — y el problema frecuente no es que no los tengamos, sino que no los hemos identificado ni los estamos usando.',
              blockId: 'desh-s4-p-0',
            },
            {
              type: 'highlight_verse',
              text: '"Pero a cada uno le es dada la manifestación del Espíritu para provecho. Porque a éste es dada por el Espíritu palabra de sabiduría; a otro, palabra de ciencia según el mismo Espíritu; a otro, fe por el mismo Espíritu; y a otro, dones de sanidades por el mismo Espíritu. A otro, el hacer milagros; a otro, profecía; a otro, discernimiento de espíritus; a otro, diversos géneros de lenguas; y a otro, interpretación de lenguas. Pero todas estas cosas las hace uno y el mismo Espíritu, repartiendo a cada uno en particular como él quiere."',
              reference: '1 Corintios 12:7–11 · Biblia (RVR) · El Apóstol Pablo',
            },
            {
              type: 'highlight_verse',
              text: '"Y también yo os exhorto, mis hermanos, a que no neguéis los dones de Dios, porque son muchos; y vienen del mismo Dios. Y hay diferentes formas de dones, pero el mismo Dios obra todo en todos; y se dan por las manifestaciones del Espíritu de Dios a los hombres para su provecho."',
              reference: 'Moroni 10:8 · Libro de Mormón · Moroni',
            },
            {
              type: 'highlight_verse',
              text: '"Porque a todos se les dan dones por el Espíritu de Dios, para que se beneficien; y a algunos se les da uno, y a otros se les da otro, a fin de que todos puedan beneficiarse."',
              reference: 'Doctrina y Convenios 46:11–12',
            },
            {
              type: 'highlight_verse',
              text: '"Por lo tanto, guardaos de que no os engañen; y a fin de que no seáis engañados, buscad con fervor los mejores dones, teniendo siempre en mente para qué se dan."',
              reference: 'Doctrina y Convenios 46:8',
            },
            {
              type: 'key_points',
              points: [
                '🔎 Don de testimonio — Saber que Jesucristo es el Salvador y Redentor del mundo (D&C 46:13). El don más fundamental y el que apoya a todos los demás.',
                '🛡️ Don de fe para sanar — La fe que produce milagros de sanidad, tanto en quien bendice como en quien es bendecido (D&C 46:19–20; Moroni 10:11).',
                '⚡ Don de hacer milagros — Actuar como instrumento para obras que trascienden lo natural, en los momentos y formas que el Señor determina (Moroni 10:12).',
                '🗣️ Don de profecía — Hablar por inspiración del Espíritu; incluye la capacidad de testificar con poder, no solo predecir el futuro (Moroni 10:13; D&C 46:22).',
                '👁️ Don de discernimiento de espíritus — Reconocer la influencia de Dios vs. la del adversario; protección contra el engaño en tiempos de confusión espiritual (D&C 46:23).',
                '💡 Don de sabiduría y de ciencia — Sabiduría: saber cómo aplicar la verdad. Ciencia: recibir conocimiento por revelación. Son dones distintos (D&C 46:17–18).',
                '🌍 Don de lenguas e interpretación — Comunicar el evangelio a través de barreras lingüísticas; históricamente central en el trabajo misional (Moroni 10:15–16).',
                '❤️ Don de caridad — El don más grande (Moroni 10:20; 1 Corintios 13:13). Sin él, todos los otros dones "de nada me aprovechan" (1 Corintios 13:1–3).',
              ],
            },
            {
              type: 'doctrine_box',
              title: 'El propósito de los dones — y el error de buscarlos para uno mismo',
              body: 'D&C 46:9 advierte: busca los dones "teniendo siempre en mente para qué se dan." Se dan para beneficio de la Iglesia y del prójimo — no para el engrandecimiento personal, no para demostrar espiritualidad, no para ser usados como prueba de favoritismo divino. El que busca los dones para exaltarse a sí mismo no los recibirá. El que los ejerce para servir los verá crecer. Esta es una ley del reino de Dios tan invariable como la de la gravedad.',
            },
            {
              type: 'leader_quote',
              quote:
                'El don del Espíritu Santo eleva al hombre a una condición que ningún don natural o educación humana puede alcanzar. Hay hombres brillantes sin el Espíritu que son incapaces de comprender las verdades espirituales más simples. Y hay personas sin educación formal que, por el poder del Espíritu Santo, ven con claridad celestial verdades que los sabios del mundo no pueden alcanzar. La diferencia no está en el intelecto — está en el canal.',
              name: 'Apóstol Parley P. Pratt · "Clave para la Ciencia de la Teología" · 1855',
            },
            {
              type: 'deep_dive',
              badge: 'Para todos',
              title: 'Identificar tus propios dones del Espíritu',
              paragraphs: [
                'Muchos miembros de la Iglesia llegan a la adultez sin haber identificado sus dones espirituales específicos. Esto es una pérdida real — no solo personal, sino para la Iglesia que los necesita. President Gordon B. Hinckley enseñó que cada miembro tiene un lugar único en la obra que nadie más puede llenar exactamente de la misma manera.',
                'Tres preguntas para identificar tus dones: ¿Qué haces que produce edificación constante en otros? ¿Qué haces de manera natural que otros encuentran difícil espiritualmente? ¿En qué momentos sientes con más fuerza que estás siendo usado como instrumento en las manos del Señor?',
                'Los dones también pueden pedirse en oración. D&C 46:8 dice "buscad con fervor los mejores dones." El Señor no prometió solo que los que buscan encuentran en lo temporal — también en lo espiritual. Una oración sincera: "Padre, ¿qué dones me has dado? ¿Cómo puedo desarrollarlos para beneficiar a los que están a mi alrededor?" es una oración que el Señor responde.',
              ],
            },
            {
              type: 'reflection',
              prompt:
                'Pablo dice que los dones se dan "para provecho" de todos. ¿Cuál crees que es tu don más fuerte del Espíritu? ¿Cómo lo estás usando actualmente para beneficiar a tu familia, quórum o congregación? ¿Qué podrías hacer diferente?',
            },
          ],
        },
      ],
    },
    // ─── SECCIÓN V ────────────────────────────────────────────────────────────
    {
      id: 's5',
      title: 'El Espíritu como compañero constante',
      intro: {
        romanNumeral: 'V',
        title: 'El Espíritu como compañero constante',
        paragraphs: [
          'D&C 121 contiene una de las promesas más solemnes de todas las escrituras: "El Espíritu Santo será tu constante compañero." Esta es la culminación de todo lo que el evangelio restaurado promete en mortalidad.',
        ],
      },
      topics: [
        {
          id: 'el-companero-constante',
          title: 'Cultivar la compañía permanente del Espíritu',
          subtitle:
            'El objetivo no es sentir el Espíritu en la reunión del domingo — es tenerlo como compañero en el trabajo, en el hogar, en las decisiones difíciles y en los momentos de tentación.',
          blocks: [
            {
              type: 'paragraph',
              text: 'La promesa de D&C 121 se da en un contexto extraordinario: José Smith la recibe desde la cárcel de Liberty, en las condiciones más oscuras de su vida. El Señor le promete que incluso allí — en la oscuridad, la injusticia y el sufrimiento — hay una presencia disponible que ningún carcelero puede quitar. Esta es la mayor promesa temporal disponible a un ser mortal:',
              blockId: 'desh-s5-p-0',
            },
            {
              type: 'highlight_verse',
              text: '"Que tus entrañas se llenen de caridad hacia todos los hombres y para con la familia de la fe, y que la virtud adorne tus pensamientos sin cesar; entonces tu confianza será firme en la presencia de Dios; y la doctrina del sacerdocio destilará sobre tu alma como el rocío de los cielos. El Espíritu Santo será tu constante compañero, y tu cetro, un cetro invariable de justicia y de verdad; y tu dominio será un dominio eterno, y sin coerción fluirá hacia ti por siempre jamás."',
              reference: 'Doctrina y Convenios 121:45–46 · Revelación desde la Cárcel de Liberty, 1839',
            },
            {
              type: 'paragraph',
              text: 'La promesa no es incondicional — está precedida de condiciones precisas: caridad hacia todos, virtud en los pensamientos, confianza pura ante Dios. Esto no es para desanimar sino para clarificar: la compañía constante del Espíritu no es un estado pasivo que ocurre automáticamente después de la confirmación. Es el resultado de una vida dirigida activamente hacia Dios.',
              blockId: 'desh-s5-p-1',
            },
            {
              type: 'compare_grid',
              left: {
                title: '✦ Lo que invita al Espíritu',
                items: [
                  'Oración sincera y consistente, especialmente por su dirección específica',
                  'Estudio de las escrituras — preparar la "memoria" que Él activa',
                  'Servicio desinteresado y caridad activa hacia los demás',
                  'Adoración en el templo y renovación de convenios en la Santa Cena',
                  'Pensamientos puros y medios de entretenimiento edificantes',
                  'Gratitud genuina por sus manifestaciones, por pequeñas que sean',
                ],
              },
              right: {
                title: '✗ Lo que aleja al Espíritu',
                items: [
                  'Entretenimiento que glorifica el pecado, la violencia o la impureza',
                  'Lengua sucia, chismes, crítica destructiva',
                  'Orgullo espiritual — creer que el Espíritu se debe a nuestros méritos',
                  'Desobedecer conociendo la verdad — la "transgresión deliberada"',
                  'Descuidar la oración y las escrituras por períodos prolongados',
                  'Contristar al Espíritu con ira, resentimiento o falta de perdón',
                ],
              },
            },
            {
              type: 'highlight_verse',
              text: '"Y si los hombres vienen a mí, yo les mostraré su debilidad. Doy a los hombres la debilidad para que sean humildes; y mi gracia es suficiente para todos los hombres que se humillan ante mí; porque si se humillan ante mí, y tienen fe en mí, entonces haré que las cosas débiles sean fuertes para ellos."',
              reference: 'Éter 12:27 · Libro de Mormón · El Señor a Moroni',
            },
            {
              type: 'paragraph',
              text: 'El Espíritu Santo es el agente principal a través del cual las "cosas débiles" se vuelven "fuertes." No son fuertes por esfuerzo propio, ni por educación, ni por fuerza de voluntad — son fuertes porque el Espíritu que mora en nosotros es más poderoso que cualquier debilidad humana. Esta es la docrina de la santificación: un proceso lento, profundo, y obra del Espíritu.',
              blockId: 'desh-s5-p-2',
            },
            {
              type: 'highlight_verse',
              text: '"Y sucedió que después que el rey Benjamín hubo terminado de hablar... clamaron todos a una voz, diciendo: ¡Oh, ten misericordia, y aplica la sangre expiatoria de Cristo para que recibamos el perdón de nuestros pecados, y nuestros corazones sean purificados!... Y ahora decían: La fe en Cristo nos ha cambiado el corazón; no sentimos más disposición para hacer el mal, sino para hacer el bien continuamente."',
              reference: 'Mosiah 5:2 · Libro de Mormón · El pueblo del Rey Benjamín',
            },
            {
              type: 'timeline',
              items: [
                {
                  label: 'Confirmación — el inicio',
                  text: 'El don se confiere. No hay sensación automática garantizada — es un derecho que debe activarse por fidelidad y búsqueda activa.',
                  color: 'blue',
                },
                {
                  label: 'Reconocimiento temprano',
                  text: 'Aprendemos a distinguir su voz: paz en decisiones correctas, incomodidad cuando nos alejamos, pensamientos que iluminan en el estudio.',
                  color: 'gold',
                },
                {
                  label: 'Confianza creciente',
                  text: 'Con años de fidelidad, su comunicación se vuelve más clara y frecuente. Los que conocen su voz la reconocen sin esfuerzo.',
                  color: 'gold',
                },
                {
                  label: 'Compañía constante',
                  text: 'El estado prometido en D&C 121: no visitas ocasionales sino presencia habitual. La virtud constante en pensamientos produce acceso constante al Espíritu.',
                  color: 'green',
                },
                {
                  label: 'Santificación — la meta',
                  text: '"Para estar en pie sin mancha" ante el Señor (3 Nefi 27:20). El Espíritu transforma al hombre natural en un hombre santo — obra de toda una vida.',
                  color: 'red',
                },
              ],
            },
            {
              type: 'leader_quote',
              quote:
                'El don del Espíritu Santo es el mayor don que Dios puede dar a un ser mortal. Sin él, no podemos conocer con certeza las verdades eternas. Sin él, no podemos ser santificados. Sin él, no podemos estar completamente seguros de que nuestras decisiones están alineadas con la voluntad del Padre. Con él — y solo con él — podemos reclamar la promesa que el Salvador hizo en la víspera de su muerte: "No os dejaré huérfanos."',
              name: 'Presidente Boyd K. Packer · "El Don del Espíritu Santo — Lo que Todo Miembro Debe Saber" · Liahona, agosto 2006',
            },
            {
              type: 'deep_dive',
              badge: 'Doctrina de la Eternidad',
              title: 'El Espíritu Santo y el principio eterno de la santificación',
              paragraphs: [
                'La santificación no es un evento — es un proceso continuo. Y el Espíritu Santo es su agente. Desde Adán (Moisés 6:52-68) hasta los santos de los últimos días, la santificación ha seguido el mismo patrón: fe, arrepentimiento, bautismo de agua, y luego la obra continua del Espíritu que limpia, purifica y transforma.',
                'El Profeta Brigham Young enseñó que ninguna persona puede ser exaltada sin haber sido santificada, y que la santificación es imposible sin el Espíritu Santo morando en nosotros. Esto revela la urgencia de tenerlo constantemente — no solo para la guía diaria, sino porque es el proceso mismo por el cual nos hacemos aptos para vivir en la presencia de Dios.',
                'La buena noticia del evangelio es que este proceso no requiere perfección previa — requiere humildad, dirección y fidelidad. Éter 12:27 dice que la debilidad no es un obstáculo a la santificación — es el punto de partida. El Espíritu santifica al que se humilla y busca, no al que ya está perfecto. La gracia de Cristo, administrada por el Espíritu, toma lo roto y lo hace entero.',
              ],
            },
            {
              type: 'reflection',
              prompt:
                'D&C 121 promete que el Espíritu "será tu constante compañero" — pero condiciona esta promesa a que la virtud adorne "tus pensamientos sin cesar." ¿Cuál es el pensamiento o hábito más frecuente en tu vida que podría estar obstaculizando esa compañía constante? ¿Qué harías diferente esta semana?',
            },
          ],
        },
      ],
    },
  ],
}
