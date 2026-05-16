import type { Lesson } from '@/types/doctrine'

export const joseSmithElTraductor: Lesson = {
  id: 'jose-smith-el-traductor',
  moduleId: 'personajes-escrituras',
  submoduleGroup: 'jose-smith',
  title: 'El Libro de Mormón',
  subtitle: 'Cómo se tradujo el libro más importante del siglo XIX',
  author: 'Fuentes: JS-H 1:27-60; DyC 3; 5; 10; 17; Historia de la Iglesia 1:7-88',
  description:
    'Entre 1823 y 1830, José Smith obtuvo planchas de oro de un mensajero angelical, las tradujo por el don y poder de Dios, y publicó el Libro de Mormón — 531 páginas dictadas en aproximadamente 65 días de trabajo activo. La velocidad, coherencia y complejidad del texto desafían la explicación natural.',
  level: 'INTERMEDIO',
  icon: '📜',
  duration: 35,
  order: 8011,
  status: 'PUBLISHED',
  studyBodyPlain: '',
  originalBodyPlain: '',
  previousLessonId: 'jose-smith-la-primera-vision',
  nextLessonId: 'jose-smith-el-profeta',
  studySections: [
    {
      id: 's1',
      title: 'Moroni y las planchas',
      intro: {
        romanNumeral: 'I',
        title: 'JS-H 1:27-54 — El Mensajero de la Noche',
        paragraphs: [
          'El 21 de septiembre de 1823, un ángel llamado Moroni visitó a José Smith tres veces en una sola noche. Lo que le dijo esa noche tardó cuatro años en materializarse.',
        ],
      },
      topics: [
        {
          id: 't1-1',
          title: 'La visita de Moroni: septiembre 21-22, 1823',
          blocks: [
            {
              type: 'paragraph',
              text: 'JS-H 1:27-30 describe cómo en la noche del 21 de septiembre de 1823, tres años después de la Primera Visión, José Smith estaba en cama orando cuando apareció en su habitación un ser de luz extraordinaria. El ser se identificó como Moroni, un mensajero de la presencia de Dios. Le habló de unas planchas de oro enterradas en una colina cercana — planchas que contenían el registro de los habitantes ancestrales del continente americano y la plenitud del evangelio eterno.',
            },
            {
              type: 'highlight_verse',
              reference: 'José Smith — Historia 1:33-34',
              text: 'Me dijo que era un mensajero enviado de la presencia de Dios, y que se llamaba Moroni; que Dios tenía una obra para mí que hacer, y que mi nombre sería conocido para bien y para mal entre todas las naciones, tribus y lenguas, o que se hablaría de él entre toda nación bajo el cielo. Me dijo que había un libro depositado escrito sobre planchas de oro, que daba cuenta de los habitantes anteriores de este continente y su procedencia.',
            },
            {
              type: 'paragraph',
              text: 'La visita no fue única. Moroni repitió el mismo mensaje tres veces esa noche, con adiciones y variaciones cada vez — posiblemente para asegurar que José lo recordara con precisión. A la mañana siguiente, mientras trabajaba en el campo con su padre, desmayó de agotamiento. Moroni apareció de nuevo, le pidió que contara todo a su padre, y Joseph Smith Sr. respondió inmediatamente que lo que había visto era del cielo.',
            },
            {
              type: 'timeline',
              items: [
                { label: '21-22 sept., 1823', text: 'Tres visitas nocturnas de Moroni; cuarta visita al día siguiente en el campo (JS-H 1:27-47)', color: 'gold' },
                { label: '22 sept., 1823', text: 'José Smith ve las planchas por primera vez en la colina Cumorah — se le impide tomarlas', color: 'blue' },
                { label: 'Sept. 22, 1824', text: 'Primera visita anual a la colina Cumorah — se le sigue negando las planchas', color: 'red' },
                { label: 'Sept. 22, 1825-1826', text: 'Segunda y tercera visitas anuales — instrucción continua de Moroni', color: 'red' },
                { label: '22 sept., 1827', text: 'José Smith recibe las planchas de Moroni en la colina Cumorah (JS-H 1:59)', color: 'green' },
              ],
            },
          ],
        },
        {
          id: 't1-2',
          title: '¿Por qué cuatro años de espera?',
          blocks: [
            {
              type: 'paragraph',
              text: 'La pregunta que los estudiosos y creyentes han formulado durante dos siglos es: ¿por qué Moroni instruyó a José Smith a ir a la colina cada 22 de septiembre durante cuatro años antes de entregarle las planchas? La respuesta más directa está en JS-H 1:53-54, donde Moroni le dijo explícitamente que no debía buscar las planchas para enriquecerse y que su único motivo debía ser la gloria de Dios y el bien de sus semejantes.',
            },
            {
              type: 'doctrine_box',
              title: 'Los cuatro años de preparación: refinamiento del carácter',
              body: 'El período 1823-1827 fue de formación intensa. José Smith vivió pobreza real, trabajó como jornalero para William Lawrence en Harmony, Pennsylvania, conoció a Emma Hale y se casó con ella en enero de 1827, y durante todo ese tiempo Moroni continuó instruyéndolo anualmente. Los críticos han señalado que durante este período José Smith también fue acusado de buscar tesoros enterrados — una práctica común en la zona pero reñida con la seriedad de la misión que se le encomendaba. El contraste entre el hombre de 1823 y el que recibió las planchas en 1827 es precisamente el punto: cuatro años de instrucción divina transformaron a un adolescente impulsivo en un hombre capaz de custodiar y traducir una obra sagrada.',
            },
            {
              type: 'reflection',
              prompt: '¿Has experimentado períodos de "preparación" en tu vida — tiempo que sentiste improductivo pero que después reconociste como esencial? ¿Cómo ves ahora los años de espera de José Smith?',
            },
          ],
        },
      ],
    },
    {
      id: 's2',
      title: 'La traducción',
      intro: {
        romanNumeral: 'II',
        title: '1828-1829 — Del Libro al Texto',
        paragraphs: [
          'El proceso de traducción del Libro de Mormón es uno de los eventos más estudiados y debatidos de la historia religiosa americana. Lo que los testigos describen desafía tanto la credulidad ingenua como el escepticismo reflejo.',
        ],
      },
      topics: [
        {
          id: 't2-1',
          title: 'El testimonio de Emma Smith sobre la traducción',
          blocks: [
            {
              type: 'paragraph',
              text: 'Emma Smith fue la primera escriba de su esposo y la testigo más cercana al proceso de traducción. Su testimonio, dado décadas después en una entrevista con su hijo Joseph Smith III en 1879, es uno de los documentos más vívidos sobre el evento. Emma describió que las planchas frecuentemente estaban sobre la mesa envueltas en un paño de lino mientras José dictaba — a veces ella podía sentir la forma de las láminas individuales a través del paño.',
            },
            {
              type: 'central_quote',
              text: 'Él [José] nunca se permitía mirar las páginas ya escritas para continuar con la siguiente sección de la traducción. Si alguna vez le interrumpían, cuando reanudaba la traducción era exactamente donde había dejado, sin pedir que nadie le volviera a leer lo que se había tomado.',
              attribution: 'Emma Smith, entrevista con Joseph Smith III, febrero de 1879',
            },
            {
              type: 'paragraph',
              text: 'Este detalle — que José retomaba exactamente donde había dejado sin revisar el texto anterior — es particularmente significativo para los estudiosos de la composición literaria. Cualquier autor humano que dicte 531 páginas necesita revisar constantemente para mantener la coherencia de nombres, genealogías, cronologías y tramas narrativas. El Libro de Mormón tiene decenas de líneas narrativas entretejidas; la idea de que José la construyó sin notas y sin revisiones es extraordinaria.',
            },
            {
              type: 'deep_dive',
              badge: 'Evidencia textual',
              title: 'El quiasmo y otros marcadores de autenticidad antigua',
              paragraphs: [
                'En 1967, el erudito John W. Welch descubrió que el Libro de Mormón contiene quiasmos — estructuras poéticas hebraicas de espejo (A-B-C-B-A) que eran desconocidas para los lectores anglosajones de 1830. El más complejo es Alma 36, donde la narrativa completa de la conversión de Alma se estructura en quiasmo perfecto con la expiación de Cristo en el centro.',
                'Los quiasmos no son dispositivos literarios que un joven de Nueva York de los 1820s habría conocido ni podido imitar deliberadamente. Fueron descubiertos por académicos del siglo XX que estudiaban la poética hebrea del Antiguo Testamento. Su presencia en el Libro de Mormón es consistente con un texto que fue originalmente compuesto en un idioma con tradición poética semítica.',
                'Adicionalmente, nombres propios del Libro de Mormón como Sariah, Alma (como nombre masculino), Chemish, y Pahoran no tenían paralelos conocidos en textos del siglo XIX. Investigaciones arqueológicas y epigráficas del siglo XX han encontrado estos nombres en textos del Cercano Oriente antiguo — confirmando que son auténticamente semíticos, no inventados.',
              ],
            },
          ],
        },
        {
          id: 't2-2',
          title: 'Oliver Cowdery y los 65 días',
          blocks: [
            {
              type: 'highlight_verse',
              reference: 'DyC 6:14-17',
              text: 'Bendito eres por lo que has hecho; porque has inquirido de mí, y he aquí, como frecuentemente como has inquirido has recibido instrucción de mi Espíritu. Si no hubiese sido así, no habrías venido al lugar donde ahora te encuentras en este tiempo... ¿No he hablado paz a tu mente acerca de este asunto? ¿Qué mayor testimonio puedes tener que el de Dios?',
            },
            {
              type: 'paragraph',
              text: 'Oliver Cowdery llegó a Harmony, Pennsylvania, el 5 de abril de 1829. Era maestro de escuela que había escuchado del Libro de Mormón a través de la familia Smith y había orado para saber si era verdad. El 7 de abril comenzó a trabajar como escriba principal de José Smith. En aproximadamente 65 días de trabajo activo — interrumpidos por el trabajo agrícola necesario para subsistir — produjeron un manuscrito de 531 páginas equivalentes en inglés moderno.',
            },
            {
              type: 'compare_grid',
              title: 'La velocidad de composición: ¿qué significa?',
              left: {
                label: 'Para comparación: escritura humana convencional',
                points: [
                  'Tolstói tardó 6 años en escribir Guerra y Paz (580.000 palabras)',
                  'Dickens tomaba años por novela con revisiones extensas',
                  'Un autor moderno produce 1.000-2.000 palabras/día con investigación',
                  'Cualquier texto histórico complejo requiere acceso a fuentes y revisión',
                  'Los errores de continuidad son inevitables sin notas extensas',
                ],
              },
              right: {
                label: 'El Libro de Mormón (aprox. 274.000 palabras)',
                points: [
                  'Aproximadamente 65 días de dictado activo (abril-junio 1829)',
                  'Sin notas, sin revisión del manuscrito anterior al dictado',
                  'Cronologías, genealogías y tramas entretejidas sin errores de continuidad significativos',
                  'Publicado con correcciones mínimas de gramática (no de contenido)',
                  'Oliver Cowdery confirmó el proceso bajo juramento hasta su muerte',
                ],
              },
            },
          ],
        },
      ],
    },
    {
      id: 's3',
      title: 'Los Testigos',
      intro: {
        romanNumeral: 'III',
        title: 'Las Once Personas que Vieron las Planchas',
        paragraphs: [
          'A diferencia de la mayoría de las experiencias religiosas fundacionales, la existencia de las planchas del Libro de Mormón fue atestiguada por once personas en testimonios formales firmados — y ninguno los recantó.',
        ],
      },
      topics: [
        {
          id: 't3-1',
          title: 'Los Tres Testigos: visión angelical',
          blocks: [
            {
              type: 'paragraph',
              text: 'Oliver Cowdery, David Whitmer y Martin Harris fueron los Tres Testigos que vieron las planchas de oro en una visión divina en el verano de 1829, cerca de la granja Whitmer en Fayette, Nueva York. El ángel Moroni les mostró las planchas, y escucharon la voz de Dios declarar que el libro había sido traducido correctamente y que debían testificar de ello. Su testimonio firmado aparece al frente del Libro de Mormón.',
            },
            {
              type: 'highlight_verse',
              reference: 'Testimonio de los Tres Testigos (Libro de Mormón)',
              text: 'Sea conocido por todas las naciones, tribus, lenguas y pueblos a quienes llegue esta obra: Que nosotros, mediante la gracia de Dios el Padre y de nuestro Señor Jesucristo, hemos visto las planchas que contienen este registro... y también que las planchas han sido traducidas por el don y poder de Dios, porque su voz nos lo ha declarado; por lo tanto sabemos de cierto que la obra es verdadera.',
            },
            {
              type: 'deep_dive',
              badge: 'Dato histórico crítico',
              title: 'Los tres testigos que abandonaron la Iglesia — y nunca recantaron',
              paragraphs: [
                'Oliver Cowdery, David Whitmer y Martin Harris tuvieron conflictos graves con José Smith en años posteriores y fueron excomulgados o se separaron de la Iglesia (aunque Oliver Cowdery y Martin Harris regresaron antes de morir). Sus desavenencias con José fueron reales, documentadas, y en algunos casos profundas.',
                'Lo que nunca hicieron fue recantar su testimonio de haber visto las planchas y oído la voz de Dios. David Whitmer, que nunca regresó a la Iglesia y en varios aspectos fue un crítico de su desarrollo posterior, pasó décadas respondiendo las mismas preguntas sobre el testimonio y siempre respondió lo mismo: que lo que había visto era real y que lo llevaría hasta su tumba.',
                'La lógica del testimonio de los Tres Testigos es poderosa precisamente por su contexto de conflicto. Hombres que tenían razones personales para desacreditar a José Smith — y que en algunos casos lo hicieron en otros aspectos — no fueron capaces de negar el evento fundamental. Los impostores mienten cuando tienen razón para hacerlo; los tres testigos no lo hicieron.',
              ],
            },
          ],
        },
        {
          id: 't3-2',
          title: 'Los Ocho Testigos: evidencia táctil',
          blocks: [
            {
              type: 'paragraph',
              text: 'A diferencia de los Tres Testigos, que tuvieron una experiencia angélica y visionaria, los Ocho Testigos (Christian, Jacob, John y Peter Whitmer Jr.; Hiram Page; y Joseph Smith padre, Hyrum y Samuel Harrison Smith) manejaron físicamente las planchas en circunstancias ordinarias. JS-H 1:50-51 describe que las tocaron, las hojearon, y confirmaron que pesaban como metal y que los caracteres grabados en ellas eran reales.',
            },
            {
              type: 'key_points',
              title: 'Por qué el testimonio de los Ocho Testigos es único',
              points: [
                'No fue una visión angelical sino una experiencia física ordinaria a plena luz del día',
                'Ocho personas de cuatro familias diferentes, con intereses independientes',
                'Pudieron "tener en sus manos" y "hojear" las planchas con libertad',
                'Ninguno recantó, aunque al menos Hiram Page tuvo diferencias doctrinales con José Smith',
                'Su experiencia complementa la de los Tres Testigos: planchas físicamente reales, no solo visión',
              ],
            },
            {
              type: 'quiz',
              quizType: 'fill_blank',
              question: 'El Libro de Mormón fue producido en aproximadamente _____ días de dictado activo, entre abril y junio de 1829.',
              answer: '65',
              explanation: 'Oliver Cowdery llegó el 5 de abril de 1829 como escriba principal y el manuscrito estuvo completo en junio. Deduciendo los días necesarios para trabajo agrícola y otras interrupciones, los investigadores estiman aproximadamente 65 días de dictado activo para las 531 páginas del libro.',
            },
          ],
        },
      ],
    },
    {
      id: 's4',
      title: 'La publicación y su impacto',
      intro: {
        romanNumeral: 'IV',
        title: '26 de Marzo de 1830 — El Libro Llega al Mundo',
        paragraphs: [
          'El Libro de Mormón se publicó seis días antes de que se organizara la Iglesia. No fue una producción menor de un grupo marginal — fue un texto que desafió el pensamiento religioso y filosófico de su época desde el primer día.',
        ],
      },
      topics: [
        {
          id: 't4-1',
          title: 'La publicación: marzo 26, 1830',
          blocks: [
            {
              type: 'paragraph',
              text: 'La primera edición del Libro de Mormón fue impresa por E.B. Grandin en Palmyra, Nueva York. Martín Harris firmó la hipoteca de su granja para financiar los 3,000 dólares necesarios para imprimir 5,000 copias. El libro apareció en la librería de Grandin el 26 de marzo de 1830. La recepción fue inmediata y polarizante: los periódicos locales lo atacaron antes de que muchos lo hubieran leído; sus defensores lo describieron como una obra que "respondía las preguntas que la Biblia dejaba abiertas."',
            },
            {
              type: 'paragraph',
              text: 'La reacción del mundo académico y religioso al Libro de Mormón en 1830 es en sí misma un testimonio indirecto de su poder. Los críticos no lo ignoraron — lo atacaron con urgencia. Alexander Campbell, el fundador del movimiento restauracionista de las Iglesias de Cristo, escribió una refutación detallada apenas meses después de la publicación. Este nivel de atención de parte de un intelectual religioso significativo sugería que algo en el texto merecía una respuesta seria.',
            },
            {
              type: 'doctrine_box',
              title: '¿Qué tipo de libro es el Libro de Mormón?',
              body: 'El Libro de Mormón es simultáneamente: un registro histórico de pueblos del continente americano (c. 600 a.C. – 421 d.C.), una obra teológica con el tratamiento más extenso de la Expiación fuera del Nuevo Testamento, una colección de sermones y enseñanzas de profetas pre-colombinos que citan a Isaías extensivamente, y un testamento de que Jesucristo es el Salvador del mundo. DyC 84:57 lo llamó "el libro de Mormón y los mandamientos que he dado a ellos" como el nuevo convenio. Moroni 10:4 ofrece la promesa central: quien lo lea con corazón sincero puede recibir una respuesta espiritual directa de su autenticidad.',
            },
          ],
        },
        {
          id: 't4-2',
          title: 'Las apuestas: si es verdad, cambia todo',
          blocks: [
            {
              type: 'highlight_verse',
              reference: 'Moroni 10:4-5',
              text: 'Y cuando recibáis estas cosas, os exhorto a que preguntéis a Dios, el Padre Eterno, en el nombre de Cristo, si estas cosas no son verdaderas; y si pedís con un corazón sincero, con verdadera intención, teniendo fe en Cristo, él os manifestará la verdad de ello por el poder del Espíritu Santo. Y por el poder del Espíritu Santo podréis conocer la verdad de todas las cosas.',
            },
            {
              type: 'central_quote',
              text: 'El Libro de Mormón es la piedra angular de nuestra religión... Un hombre se acercará más a Dios al leer el Libro de Mormón que con cualquier otro libro.',
              attribution: 'José Smith (History of the Church, 4:461)',
            },
            {
              type: 'reflection',
              prompt: '¿Cuándo fue la última vez que leíste el Libro de Mormón con la pregunta de Moroni 10:4 en mente — no como texto conocido sino como desafío activo a tu fe? ¿Qué parte del libro te ha resultado más personalmente significativa y por qué?',
            },
            {
              type: 'quiz',
              quizType: 'true_false',
              question: 'Los Tres Testigos del Libro de Mormón —Oliver Cowdery, David Whitmer y Martin Harris— todos recantaron su testimonio antes de morir.',
              answer: false,
              explanation: 'Ninguno de los Tres Testigos recantó su testimonio de haber visto las planchas, a pesar de que los tres tuvieron conflictos con José Smith y al menos David Whitmer nunca regresó a la Iglesia. Esta consistencia en el testimonio a pesar de las tensiones personales es históricamente significativa.',
            },
          ],
        },
      ],
    },
    {
      id: 's5',
      title: 'El problema histórico del Libro de Mormón',
      intro: {
        romanNumeral: 'V',
        title: 'Las Críticas y las Respuestas',
        paragraphs: [
          'Dos siglos de crítica al Libro de Mormón han producido teorías elaboradas sobre su origen. Ninguna ha podido dar cuenta de todos los hechos con la misma economía que la explicación que dio José Smith.',
        ],
      },
      topics: [
        {
          id: 't5-1',
          title: 'Las principales teorías de origen natural',
          blocks: [
            {
              type: 'paragraph',
              text: 'Las teorías más serias sobre el origen no divino del Libro de Mormón incluyen: que José Smith lo compuso de su propia imaginación, posiblemente ayudado por ideas de la época sobre los orígenes de los indígenas americanos; que lo basó en el manuscrito de Solomon Spaulding; que fue compuesto por Oliver Cowdery o Sidney Rigdon; o que fue producido por un proceso psicológico de escritura automática. Cada teoría ha sido respondida por estudiosos tanto creyentes como no creyentes.',
            },
            {
              type: 'compare_grid',
              title: 'La explicación de José Smith vs. las alternativas naturales',
              left: {
                label: 'Traducción divina (José Smith)',
                points: [
                  'Explica la velocidad y coherencia sin notas ni revisión',
                  'Explica quiasmos y estructuras semíticas desconocidas en 1830',
                  'Explica nombres propios con paralelos en textos del Cercano Oriente antiguo',
                  'Consistente con el testimonio unánime de los once testigos',
                  'Consistente con el testimonio de Emma Smith como escriba',
                ],
              },
              right: {
                label: 'Composición humana (teorías críticas)',
                points: [
                  'No explica la velocidad sin notas de consulta',
                  'No explica el quiasmo ni otras estructuras hebraicas',
                  'No explica nombres propios que solo aparecieron en textos arqueológicos del siglo XX',
                  'Requiere que al menos once personas mintieran consistentemente hasta la muerte',
                  'Ninguna teoría específica sobrevive examen exhaustivo de todos los hechos',
                ],
              },
            },
            {
              type: 'note_prompts',
              prompts: [
                { id: 'p1', question: '¿Qué aspecto del origen del Libro de Mormón — la velocidad de la traducción, el testimonio de los testigos, las estructuras hebraicas — encuentras más convincente como evidencia de su autenticidad?' },
                { id: 'p2', question: '¿Cómo responderías a alguien que argumenta que José Smith simplemente era un genio literario que compuso el libro él mismo?' },
                { id: 'p3', question: '¿Has aplicado la promesa de Moroni 10:4 personalmente? ¿Qué ocurrió?' },
              ],
            },
          ],
        },
      ],
    },
  ],
}
