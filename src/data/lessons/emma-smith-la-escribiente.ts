import type { Lesson } from '@/types/doctrine'

export const emmaSmithLaEscribiente: Lesson = {
  id: 'emma-smith-la-escribiente',
  moduleId: 'personajes-escrituras',
  submoduleGroup: 'emma-smith',
  title: 'La Primera Escribiente',
  subtitle: 'La mujer que transcribió el Libro de Mormón',
  author: 'Fuentes: JS-H 1; Testimonios de Emma Smith; Historia de la Iglesia Vol. 1',
  description:
    'Antes de Oliver Cowdery, fue Emma Smith quien sirvió como escribiente durante la traducción del Libro de Mormón. Su testimonio del proceso de traducción — la piedra vidente, las planchas envueltas en lino, la reanudación exacta sin repaso — es uno de los relatos de testigo presencial más detallados y convincentes de la Restauración.',
  level: 'INTERMEDIO',
  icon: '✍️',
  duration: 30,
  order: 8111,
  status: 'PUBLISHED',
  studyBodyPlain: '',
  originalBodyPlain: '',
  previousLessonId: 'emma-smith-la-elegida',
  nextLessonId: 'emma-smith-el-sufrimiento',
  studySections: [
    {
      id: 's1',
      title: 'Emma — La Primera Escribiente',
      intro: {
        romanNumeral: 'I',
        title: 'Antes de Oliver, Estuvo Emma',
        paragraphs: [
          'La historia popular de la traducción del Libro de Mormón comienza con Oliver Cowdery. Pero Emma Smith fue escribiente antes que Oliver — y su testimonio del proceso es irreemplazable.',
        ],
      },
      topics: [
        {
          id: 't1-1',
          title: 'El proceso de traducción — lo que Emma vio',
          blocks: [
            {
              type: 'paragraph',
              text: 'Cuando José Smith comenzó a traducir el Libro de Mormón en Harmony, Pennsylvania, en el otoño de 1827, Emma fue su primera ayudante. Oliver Cowdery no llegó hasta abril de 1829. Durante los meses previos, Emma sirvió como escribiente mientras José dictaba la traducción. Esto la coloca en la habitación durante el proceso — no como observadora distante sino como participante directa que escuchaba cada palabra dictada.',
            },
            {
              type: 'paragraph',
              text: 'La posición de Emma era única: ella era la única persona además de José que estaba presente de forma constante en las primeras etapas de la traducción. Mientras Oliver Cowdery pudo dar testimonio de los meses de abril a junio de 1829, Emma da testimonio de un período anterior, más privado, antes de que la obra ganara cualquier impulso público.',
            },
            {
              type: 'highlight_verse',
              reference: 'DyC 25:5-6',
              text: 'Y también te designo ser traductora y escribiente para mi siervo José Smith, hijo, y que asistieses a él en la transcripción de las traducciones, sí.',
            },
            {
              type: 'doctrine_box',
              title: 'El Alcance de la Contribución de Emma',
              body: 'Las páginas 116 de manuscrito perdidas — que Martín Harris llevó a casa y nunca devolvió — correspondían a los primeros meses de traducción con Martín como escribiente. Emma comenzó a servir como escribiente durante los meses posteriores, antes de que llegara Oliver. Esto significa que partes del texto que hoy leemos pueden haber pasado primero por las manos de Emma. La Palabra de Mormón, Mosíah, y posiblemente otros textos fueron transcritos con Emma al otro lado de la mesa.',
            },
          ],
        },
        {
          id: 't1-2',
          title: 'Las planchas en la habitación',
          blocks: [
            {
              type: 'paragraph',
              text: 'Emma describió en varias ocasiones la presencia física de las planchas en el hogar. No las vio abiertamente — pero las tocó. Movió la pila envuelta mientras limpiaba la mesa. Describió el peso, la textura metálica irregular bajo el lino, el sonido de las láminas al desplazarse. Para quien duda de la realidad física de las planchas, el testimonio de Emma es el más cotidiano y menos dramático — y por ello, uno de los más convincentes.',
            },
            {
              type: 'central_quote',
              text: 'Las planchas yacían sobre la mesa sin ninguna cubierta especial, solo una ligera cubierta de lino, tal como yo podría colocar mi delantal sobre ellas. Mientras yo limpiaba la parte de la habitación, las movía de un lado a otro; y debajo de esta cubierta podía sentir que eran algo sólido, algo diferente a cualquier otra cosa que hubiese sentido antes.',
              attribution: 'Emma Smith, entrevista con Edmund C. Briggs, 1856',
            },
            {
              type: 'paragraph',
              text: 'La especificidad del testimonio de Emma es notable: no dice simplemente que las planchas existían — describe su textura bajo la tela, el sonido al moverlas, el peso irregular de láminas individuales. Este nivel de detalle sensorial es difícil de fabricar y no tiene el sabor de una historia creada para impresionar. Es el recuerdo de alguien que interactuó con un objeto físico de manera ordinaria y cotidiana.',
            },
          ],
        },
      ],
    },
    {
      id: 's2',
      title: 'El Testimonio del Proceso de Traducción',
      intro: {
        romanNumeral: 'II',
        title: 'Lo que Emma Describió que Ningún Fabricante de Historias Inventaría',
        paragraphs: [
          'El testimonio de Emma sobre el método de traducción es técnicamente específico, internamente consistente, y coincide con los testimonios de otros testigos — incluyendo detalles que un fraude habría evitado mencionar.',
        ],
      },
      topics: [
        {
          id: 't2-1',
          title: 'La reanudación exacta sin repaso',
          blocks: [
            {
              type: 'paragraph',
              text: 'Uno de los aspectos más sorprendentes del proceso de traducción, según Emma, era la capacidad de José para reanudar la dictado exactamente donde lo había dejado — incluso después de interrupciones de horas o días. Emma describió cómo él podía salir a comer, volver a la habitación, y retomar la dictado desde la palabra exacta donde había parado — sin releer el manuscrito previo.',
            },
            {
              type: 'central_quote',
              text: 'Cuando él regresaba después de descansar o comer, si yo estaba escribiendo para él, nunca pedía que le leyera lo último que había escrito, sino que comenzaba exactamente donde lo había dejado, sin vacilar; y cuando le hacía correcciones, siempre corregía la gramática sin alterar el sentido. Y su lengua no estaba preparada para hablar tan correctamente en términos teológicos, como lo hacía él en la traducción.',
              attribution: 'Emma Smith, entrevista con Joseph Smith III, 1879',
            },
            {
              type: 'paragraph',
              text: 'Este detalle específico — retomar sin repaso — es uno que un fabricante de historias habría omitido porque complica la narrativa en lugar de simplificarla. Si José estaba inventando el texto, necesitaría releer lo anterior para mantener coherencia. La consistencia sin repaso es evidencia de una fuente externa al proceso mental ordinario de José.',
            },
            {
              type: 'quiz',
              quizType: 'true_false',
              question: 'Según el testimonio de Emma, José Smith siempre releía el manuscrito anterior antes de reanudar la dictado.',
              answer: false,
              explanation: 'Emma testificó explícitamente lo contrario: José nunca pedía que le leyeran lo último escrito, sino que retomaba exactamente donde había parado, sin vacilar.',
            },
          ],
        },
        {
          id: 't2-2',
          title: 'La piedra vidente y el método',
          blocks: [
            {
              type: 'paragraph',
              text: 'Emma también describió el uso de la piedra vidente. En los últimos testimonios (1879), confirmó que José colocaba la piedra en un sombrero, hundía su rostro en él para bloquear la luz, y dictaba el texto que aparecía. Las planchas a veces estaban en la habitación, a veces cubiertas, a veces ausentes. Esto concuerda con los testimonios de Oliver Cowdery, Emma Bidamon (Emma en sus últimos años), y el testimonio de David Whitmer.',
            },
            {
              type: 'key_points',
              title: 'Elementos consistentes en el testimonio de Emma sobre la traducción',
              points: [
                'José usaba la piedra vidente en el proceso de traducción',
                'Las planchas estaban presentes pero a veces cubiertas con lino',
                'José nunca repasaba el manuscrito previo antes de reanudar',
                'El texto fluía sin correcciones mayores de doctrina, solo de gramática ocasional',
                'La capacidad de José para traducir era claramente más allá de su educación',
                'El proceso era regular, no dramático — más como dictado que como visión',
              ],
            },
            {
              type: 'deep_dive',
              badge: 'Investigación Histórica',
              title: 'La Credibilidad del Testimonio Tardío de Emma',
              paragraphs: [
                'El testimonio más completo de Emma fue dado en 1879, cuando tenía 74 años, poco antes de su muerte. Algunos han cuestionado su credibilidad alegando que fue influenciada por la Iglesia Reorganizada (RLDS) a la que pertenecía. Sin embargo, varios factores apoyan su confiabilidad.',
                'Primero, Emma tenía intereses que la habrían motivado a distanciarse del relato de la traducción si fuera posible hacerlo honestamente — ella rechazaba la poligamia y tenía tensión con la Iglesia en Utah. Si hubiera querido demoler la credibilidad de José, negar la traducción habría sido una herramienta poderosa. En cambio, afirmó la traducción con detalle y firmeza.',
                'Segundo, los detalles técnicos que Emma provee — la reanudación sin repaso, el uso de la piedra en el sombrero, la presencia de las planchas bajo lino — coinciden con fuentes independientes de diferentes décadas. La consistencia entre testigos que no se coordinaron es uno de los criterios históricos más confiables de veracidad.',
              ],
            },
          ],
        },
      ],
    },
    {
      id: 's3',
      title: 'Emma como Testigo de la Restauración',
      intro: {
        romanNumeral: 'III',
        title: 'La Testigo que No Firmó una Declaración',
        paragraphs: [
          'Los Tres Testigos y los Ocho Testigos firmaron declaraciones impresas en el Libro de Mormón. Emma nunca firmó ninguna. Y sin embargo, su testimonio es más íntimo y detallado que el de muchos de los que sí firmaron.',
        ],
      },
      topics: [
        {
          id: 't3-1',
          title: 'Por qué el testimonio de Emma importa especialmente',
          blocks: [
            {
              type: 'paragraph',
              text: 'Emma vivió con el profeta. Nadie tenía acceso más cercano ni durante más tiempo. Si la Restauración fuera un fraude, Emma habría sido la primera persona en posición de detectarlo. Conocía las limitaciones de José — su educación fragmentada, su personalidad, sus hábitos de trabajo. Su afirmación de que el texto del Libro de Mormón estaba más allá de lo que José podría haber producido por sí solo es el juicio de quien más lo conocía.',
            },
            {
              type: 'central_quote',
              text: 'Mi creencia es que el Libro de Mormón es la palabra de Dios. Cuánto no puedo decir, pues he pensado mucho sobre esto. Mi esposo solía hacerme a mí, y a sus amigos íntimos, las preguntas que le hacían. Muchos se iban bien satisfechos con sus respuestas. José Smith no habría podido dictar el texto que dictó. Era un hombre notablemente ignorante en ese tiempo, y yo habría sabido si hubiese intentado engañarme.',
              attribution: 'Emma Smith, entrevista con Joseph Smith III, 1879',
            },
            {
              type: 'paragraph',
              text: 'La frase clave es: "yo habría sabido si hubiese intentado engañarme." Emma no era crédula. Era observadora, educada, y tenía acceso total al proceso. Su creencia en el Libro de Mormón no fue nunca retractada — ni siquiera en los años difíciles después de la muerte de José, cuando tenía razones personales para distanciarse de partes del legado de su esposo.',
            },
            {
              type: 'reflection',
              prompt: '¿Qué peso tiene para ti el testimonio de alguien que tenía razones personales para no creer, y que sin embargo creyó de todas formas? ¿Cómo se compara el testimonio de Emma con tu propio proceso de convicción?',
            },
          ],
        },
        {
          id: 't3-2',
          title: 'El legado de la primera escribiente',
          blocks: [
            {
              type: 'paragraph',
              text: 'La contribución de Emma a la Restauración como escribiente no fue menor porque duró menos tiempo que la de Oliver Cowdery. Fue diferente: fue la contribución de una persona que amaba al profeta y que, al hacer ese trabajo cotidiano — sentarse al otro lado de una mesa y escribir lo que él dictaba — añadió su testimonio personal a uno de los documentos más importantes de la dispensación.',
            },
            {
              type: 'steps',
              steps: [
                'Emma sirvió como escribiente antes de Oliver Cowdery — en los primeros meses de traducción en Harmony',
                'Vivió con las planchas en su hogar — las tocó sin verlas, dando un testimonio físico único',
                'Atestiguó la reanudación exacta sin repaso — evidencia de fuente externa al proceso humano normal',
                'Nunca retractó su creencia en la Restauración, incluso cuando tuvo razones personales para hacerlo',
                'Su llamamiento formal como escribiente fue confirmado en DyC 25:5',
              ],
            },
            {
              type: 'note_prompts',
              prompts: [
                { id: 'p1', question: '¿Qué detalle del testimonio de Emma sobre la traducción encuentras más convincente y por qué?' },
                { id: 'p2', question: 'Emma creyó en la Restauración mientras tenía acceso total al proceso y conocía las limitaciones de José. ¿Qué dice eso sobre la naturaleza de su fe?' },
                { id: 'p3', question: '¿Cómo fortalece o complica tu propio testimonio del Libro de Mormón saber que Emma — quien más conocía a José — nunca retractó el suyo?' },
              ],
            },
          ],
        },
      ],
    },
  ],
}
