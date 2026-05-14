import type { Lesson } from '@/types/doctrine'

export const joseSmithYLaRestauracion: Lesson = {
  id: 'jose-smith-y-la-restauracion',
  moduleId: 'personajes-escrituras',
  submoduleGroup: 'jose-smith',
  title: 'José Smith y la Restauración',
  subtitle: 'Su lugar en la dispensación de la plenitud',
  author: 'Fuentes: DyC 27:12-13; 110; 128; 135:3; 138:53-55; Efesios 1:9-10; JS-H 1:33; Apocalipsis 14:6',
  description:
    'José Smith no es simplemente un fundador religioso más — es el instrumento central de la dispensación de la plenitud de los tiempos, la culminación de todas las dispensaciones anteriores. DyC 135:3 hace la afirmación más audaz del canon cristiano: que hizo más por la salvación de los hombres que cualquier ser humano excepto Jesucristo. Esta lección examina qué significa esa afirmación y por qué es verdadera.',
  level: 'AVANZADO',
  icon: '✨',
  duration: 30,
  order: 8014,
  status: 'PUBLISHED',
  studyBodyPlain: '',
  originalBodyPlain: '',
  previousLessonId: 'jose-smith-el-martir',
  nextLessonId: null,
  studySections: [
    {
      id: 's1',
      title: 'La dispensación de la plenitud',
      intro: {
        romanNumeral: 'I',
        title: 'Efesios 1:9-10 — La Clave de Todo',
        paragraphs: [
          'El apóstol Pablo escribió a los efesios sobre el plan de Dios de "reunir en Cristo todas las cosas" en la dispensación de la plenitud de los tiempos. José Smith es el profeta de esa dispensación.',
        ],
      },
      topics: [
        {
          id: 't1-1',
          title: 'La dispensación de la plenitud: qué significa',
          blocks: [
            {
              type: 'highlight_verse',
              reference: 'Efesios 1:9-10',
              text: 'Haciéndonos conocer el misterio de su voluntad, según su beneplácito, el cual se había propuesto en sí mismo, de reunir todas las cosas en Cristo, en la dispensación del cumplimiento de los tiempos, así las que están en los cielos, como las que están en la tierra.',
            },
            {
              type: 'paragraph',
              text: 'El concepto de "dispensación" en la teología de la Restauración es diferente al uso común de la palabra. No es simplemente un período de tiempo — es un período en que Dios confía llaves, autoridad y conocimiento específicos a líderes humanos. Adán tuvo una dispensación. Enoc tuvo una. Noé, Abraham, Moisés, Elías, los apóstoles del Nuevo Testamento. Cada uno recibió un conjunto de llaves y doctrinas apropiadas para su época.',
            },
            {
              type: 'paragraph',
              text: 'Lo que hace la dispensación de José Smith cualitativamente diferente a todas las anteriores no es simplemente que fue la última — es que fue la que debía reunir y culminar todo lo que las dispensaciones anteriores habían introducido. DyC 128:18 lo declara: "Una dispensación en la que todas las cosas serán reveladas que han sido ocultas desde la fundación del mundo hasta ahora." Esto requería que todas las llaves de todas las dispensaciones anteriores fueran restauradas a la tierra — y así fue.',
            },
            {
              type: 'timeline',
              items: [
                { label: 'Adán', text: 'Primera dispensación — el sacerdocio original; DyC 107:53-56', color: 'gold' },
                { label: 'Abraham', text: 'El convenio abrahámico y las llaves de la bendición a las naciones (DyC 110:12)', color: 'blue' },
                { label: 'Moisés', text: 'Las llaves del recogimiento de Israel (DyC 110:11)', color: 'blue' },
                { label: 'Elías / Elías', text: 'Las llaves del sellamiento y del evangelio de Abraham (DyC 110:13-16)', color: 'blue' },
                { label: 'Pedro, Santiago y Juan', text: 'El Sacerdocio de Melquisedec y las llaves del reino (DyC 27:12-13)', color: 'blue' },
                { label: 'José Smith', text: 'La dispensación de la plenitud: todas las llaves reunidas en un solo profeta', color: 'green' },
              ],
            },
          ],
        },
        {
          id: 't1-2',
          title: 'El recogimiento de todas las llaves',
          blocks: [
            {
              type: 'paragraph',
              text: 'La teología de la Restauración sostiene que en la visita al Templo de Kirtland en 1836, más de cinco mensajeros angelicales visitaron a José Smith y Oliver Cowdery, cada uno restaurando llaves específicas que habían sido retenidas del mundo durante siglos o milenios. Esta concentración de autoridad sacerdotal en manos de un solo hombre en un período breve es sin paralelo en la historia sagrada registrada.',
            },
            {
              type: 'compare_grid',
              title: 'Las dispensaciones anteriores vs. la dispensación de la plenitud',
              left: {
                label: 'Dispensaciones anteriores',
                points: [
                  'Cada una recibió un conjunto limitado de llaves y doctrinas',
                  'El trabajo de cada dispensación fue preparatorio — abría el camino',
                  'Las revelaciones eran parciales: "por parte conocemos y por parte profetizamos" (1 Cor. 13:9)',
                  'El trabajo de salvación se limitaba a los vivos',
                  'Ninguna tuvo todas las llaves necesarias para la salvación completa de toda la humanidad',
                ],
              },
              right: {
                label: 'Dispensación de la plenitud (José Smith)',
                points: [
                  'Recibe todas las llaves de todas las dispensaciones anteriores',
                  'Completa el trabajo preparado por cada dispensación anterior',
                  'Las revelaciones alcanzan la plenitud doctrinal: la naturaleza de Dios, el plan de salvación completo',
                  'El trabajo de salvación se extiende a todos los muertos de todos los tiempos',
                  'Esta es la última dispensación antes de la Segunda Venida de Cristo',
                ],
              },
            },
            {
              type: 'doctrine_box',
              title: 'Por qué ESTA dispensación es la última',
              body: 'DyC 27:13 y otras revelaciones establecen que la dispensación de la plenitud no será seguida por otra apostasía. Esto es una afirmación de singularidad histórica: todas las dispensaciones anteriores terminaron en apostasía porque las llaves del sacerdocio y la autoridad divina se perdieron o fueron corrompidas. La Restauración a través de José Smith es diferente: las llaves serán transferidas de apóstol en apóstol hasta que Cristo regrese a presidir personalmente su reino en la tierra. La Iglesia SUD afirma que ese proceso está actualmente en curso.',
            },
          ],
        },
      ],
    },
    {
      id: 's2',
      title: 'José Smith en los consejos premortales',
      intro: {
        romanNumeral: 'II',
        title: 'DyC 138:53-55 — Ordenado Antes de Nacer',
        paragraphs: [
          'La doctrina de la premortalidad sugiere que José Smith no fue elegido para su papel simplemente en el momento de la Primera Visión. Fue ordenado en el mundo premortal, como lo fueron todos los profetas.',
        ],
      },
      topics: [
        {
          id: 't2-1',
          title: 'La visión del mundo de los espíritus: DyC 138',
          blocks: [
            {
              type: 'highlight_verse',
              reference: 'DyC 138:53-55',
              text: 'El Profeta José Smith, y mi padre, Hyrum Smith, Brigham Young, John Taylor, Wilford Woodruff y otros elegidos espíritus que estaban guardados para venir en la plenitud de los tiempos para tomar parte en el establecimiento del gran reino de Dios en la tierra para preparar a mi pueblo para la venida del Señor.',
            },
            {
              type: 'paragraph',
              text: 'DyC 138, recibida por el Presidente Joseph F. Smith el 3 de octubre de 1918, documenta una visión del mundo de los espíritus. En ella, Joseph F. Smith vio a los profetas que habían habitado la tierra desde Adán, todos reunidos y aguardando la resurrección. Entre los identificados está el profeta José Smith — presentado como uno de los "elegidos espíritus" que estaban reservados para los últimos días.',
            },
            {
              type: 'paragraph',
              text: 'La doctrina de la ordenación premortal no es periférica en la teología de la Restauración — es fundamental. Abraham 3:22-23 establece que antes de la creación del mundo, Dios mostró a Abraham "las almas que eran nobles y grandes... que habían sido elegidas en el principio para ser gobernantes en la Iglesia de Dios." Si Jeremías fue ordenado profeta antes de nacer (Jeremías 1:5), y si Abraham vio almas premortales eligidas para ser líderes, entonces la ordenación premortal de José Smith es doctrinalmente coherente y canónicamente sólida.',
            },
            {
              type: 'deep_dive',
              badge: 'Teología avanzada',
              title: 'La doctrina de la premortalidad y lo que revela sobre la identidad humana',
              paragraphs: [
                'La doctrina de la premortalidad — que las almas humanas existieron con Dios antes de nacer en la tierra — es la contribución teológica más distintiva de la Restauración y la que tiene más implicaciones para la comprensión de la identidad humana.',
                'Si cada ser humano existió como espíritu antes de nacer, entonces la vida mortal no es el comienzo de la existencia sino una etapa en una existencia más larga. El olvido de la premortalidad no es evidencia de que no ocurrió — es parte del diseño del plan de salvación que requiere que el aprendizaje de la fe en la mortalidad sea genuino, sin el beneficio de la memoria directa del mundo celestial.',
                'Para José Smith, esta doctrina tiene implicaciones autobiográficas: si fue "ordenado" antes de nacer para ser el profeta de la Restauración, entonces la Primera Visión no fue el inicio de su misión — fue el momento en que esa misión, acordada antes del tiempo, comenzó a desplegarse en el tiempo. Esta perspectiva transforma cada dificultad de su vida en algo diferente: no obstáculos imprevistos sino parte del aprendizaje que una alma pre-asignada a una misión difícil necesitaba.',
              ],
            },
          ],
        },
      ],
    },
    {
      id: 's3',
      title: 'JS-H 1:33 — Su nombre conocido para bien y para mal',
      intro: {
        romanNumeral: 'III',
        title: 'La Profecía que se Cumplió Globalmente',
        paragraphs: [
          'Cuando Moroni visitó al adolescente José Smith en 1823, le dijo algo que debió parecer absurdo en ese momento: que su nombre sería conocido "para bien y para mal entre todas las naciones, tribus y lenguas."',
        ],
      },
      topics: [
        {
          id: 't3-1',
          title: 'La profecía de Moroni y su cumplimiento',
          blocks: [
            {
              type: 'highlight_verse',
              reference: 'José Smith — Historia 1:33',
              text: 'Me dijo que era un mensajero enviado de la presencia de Dios, y que se llamaba Moroni... y que mi nombre sería conocido para bien y para mal entre todas las naciones, tribus y lenguas, o que se hablaría de él entre toda nación bajo el cielo.',
            },
            {
              type: 'paragraph',
              text: 'En 1823, José Smith era el hijo mayor superviviente de una familia de granjeros pobres en Nueva York. Su padre no podía mantener la hipoteca de la granja. Ni siquiera había terminado la escuela primaria. La idea de que su nombre sería conocido "entre toda nación bajo el cielo" era, en términos humanos, ridícula. Doscientos años después, más de 17 millones de personas se identifican como miembros de la Iglesia que él fundó, en más de 160 países. Su nombre es pronunciado con veneración por sus seguidores y con hostilidad por sus críticos — en exactamente todos los idiomas del mundo.',
            },
            {
              type: 'paragraph',
              text: 'La profecía de JS-H 1:33 es una de las más verificables del canon de la Restauración. No requiere interpretación espiritual — requiere un periódico. El nombre de José Smith es conocido en cada país de la tierra, exactamente como Moroni prometió que lo sería. Sus críticos más acerbos y sus admiradores más devotos comparten al menos un punto de acuerdo: que el hombre fue extraordinario, para bien o para mal.',
            },
            {
              type: 'central_quote',
              text: 'El profeta mormón fue el más nativo y genuino de los profetas americanos. La americanidad de su obra no está en cuestión. Lo que está en cuestión es si detrás de esa americanidad había algo más.',
              attribution: 'Harold Bloom, The American Religion (1992)',
            },
          ],
        },
        {
          id: 't3-2',
          title: 'El ángel Moroni y Apocalipsis 14:6',
          blocks: [
            {
              type: 'highlight_verse',
              reference: 'Apocalipsis 14:6',
              text: 'Vi volar por en medio del cielo a otro ángel, que tenía el evangelio eterno para predicarlo a los que moran en la tierra, y a toda nación, tribu, lengua y pueblo.',
            },
            {
              type: 'paragraph',
              text: 'La Iglesia SUD identifica al ángel de Apocalipsis 14:6 con Moroni — el mensajero que trajo a José Smith el registro del Libro de Mormón y, con él, "el evangelio eterno para predicarlo a los que moran en la tierra." Esta identificación no es arbitraria: el lenguaje de Apocalipsis 14:6 — "toda nación, tribu, lengua y pueblo" — es casi idéntico al que Moroni usó en JS-H 1:33 al describir la misión futura de José Smith.',
            },
            {
              type: 'paragraph',
              text: 'Si esta identificación es correcta, entonces Juan el Revelador en el siglo I vio a Moroni en visión antes de que Moroni naciera, y registró que este ángel llevaría el evangelio eterno al mundo entero. El cumplimiento de esa visión comenzó en 1820-1827 en las colinas del estado de Nueva York. La escala de esa afirmación es difícil de sobreestimar: la Restauración no es simplemente la fundación de una nueva denominación — es el cumplimiento de la profecía apocalíptica del Nuevo Testamento.',
            },
            {
              type: 'reflection',
              prompt: '¿Cómo cambia tu comprensión de la Restauración el saber que Juan el Revelador la vio en profecía siglos antes? ¿Qué significa para ti personalmente ser parte de la generación que vive en "la dispensación de la plenitud de los tiempos"?',
            },
          ],
        },
      ],
    },
    {
      id: 's4',
      title: 'La salvación para los muertos: el regalo más grande',
      intro: {
        romanNumeral: 'IV',
        title: 'DyC 128 — La Plenitud del Evangelio para Todo el Género Humano',
        paragraphs: [
          'La razón principal por la que DyC 135:3 afirma que José Smith hizo más por la salvación de los hombres que cualquier otro ser humano es esta: él restauró el mecanismo por el cual la salvación puede alcanzar a toda persona que haya vivido en la tierra.',
        ],
      },
      topics: [
        {
          id: 't4-1',
          title: 'El problema sin solución del cristianismo tradicional',
          blocks: [
            {
              type: 'paragraph',
              text: 'El problema teológico más perturbador del cristianismo tradicional es este: si la fe en Jesucristo y el bautismo son necesarios para la salvación, ¿qué ocurre con los miles de millones de seres humanos que vivieron y murieron sin haber escuchado el nombre de Jesucristo? Los teólogos han luchado con este problema durante siglos sin encontrar una solución completamente satisfactoria.',
            },
            {
              type: 'paragraph',
              text: 'La teología del catolicismo romano introdujo el purgatorio como solución parcial. El protestantismo, en su mayoría, concedió ese problema a la soberanía de Dios y lo declaró misterio irresoluble. Solo la Restauración ofreció una respuesta doctrinal específica, fundamentada en una escritura del Nuevo Testamento (1 Corintios 15:29) y en una lógica coherente con los atributos de un Dios perfectamente justo y misericordioso.',
            },
            {
              type: 'doctrine_box',
              title: 'La solución de la Restauración: salvación para los muertos',
              body: 'DyC 138:57-59 establece que el evangelio es predicado en el mundo de los espíritus a todos los que no lo recibieron en vida. DyC 128:18 establece que los vivos pueden actuar como proxies en las ordenanzas salvadoras para sus antepasados difuntos. Juntos, estos principios significan que ningún ser humano quedará sin la oportunidad de aceptar o rechazar el evangelio — ya sea en vida o después de la muerte. El trabajo de los Santos en el templo no fuerza a nadie: ofrece la ordenanza; la persona fallecida tiene la libertad de aceptarla o rechazarla.',
            },
          ],
        },
        {
          id: 't4-2',
          title: 'El volumen de la obra de salvación',
          blocks: [
            {
              type: 'highlight_verse',
              reference: 'DyC 128:18',
              text: 'Ni pueden los muertos ser perfeccionados sin nosotros; ni podemos nosotros ser perfeccionados sin los muertos; porque hay que efectuar alguna cosa de beneficio a nuestros muertos que sean... pues así lo requiere la ordenanza del bautismo por los muertos, como prescrita en el libro sagrado.',
            },
            {
              type: 'paragraph',
              text: 'La implicación práctica de la doctrina del bautismo por los muertos es asombrosa en su escala: para que la salvación alcance a toda la humanidad, los Santos deben realizar ordenanzas de proxy para cada ser humano que haya vivido. FamilySearch, la plataforma genealógica de la Iglesia, tiene más de 1,400 millones de nombres registrados — y el número crece diariamente. La visión de José Smith sobre la salvación de los muertos se ha convertido en el proyecto genealógico más grande de la historia humana.',
            },
            {
              type: 'paragraph',
              text: 'Esta escala es parte de la evidencia interna de la obra. Ningún hombre que simplemente buscara poder político o religioso habría diseñado un sistema que requería de sus seguidores décadas de trabajo genealógico, viajes al templo, y dedicación sostenida por generaciones — sin que hubiera recompensa visible o inmediata. El diseño de la obra de salvación para los muertos tiene la marca de alguien que veía la eternidad con claridad y diseñó en consecuencia.',
            },
          ],
        },
        {
          id: 't4-3',
          title: 'El alcance cuantitativo: más que cualquier otro',
          blocks: [
            {
              type: 'paragraph',
              text: 'La afirmación de DyC 135:3 puede evaluarse cuantitativamente. Un profeta de una sola dispensación —Moisés, Isaías, Pablo— afectó la salvación de los seres humanos de su época y de quienes después de ellos aceptaron su mensaje. José Smith, al restaurar la autoridad del sacerdocio, las llaves del sellamiento, y las ordenanzas del templo, hizo posible que la salvación alcanzara no solo a los vivos de su época sino a cada ser humano de todas las épocas. El alcance de su obra, si es real, es literalmente infinito en su extensión histórica.',
            },
            {
              type: 'key_points',
              title: 'Por qué DyC 135:3 puede ser verdad',
              points: [
                'Restauró las llaves de todas las dispensaciones anteriores — ningún otro profeta tuvo todas',
                'Sus revelaciones establecieron el mecanismo de salvación para los muertos de todas las épocas',
                'Introdujo las ordenanzas del templo que extienden el evangelio más allá de la mortalidad',
                'El Libro de Mormón añadió un segundo testigo de Cristo disponible para todo ser humano',
                'Fundó una Iglesia que ahora opera en 160+ países con 17+ millones de miembros',
                'El trabajo genealógico iniciado bajo su dirección ha registrado más de 1,400 millones de nombres',
              ],
            },
          ],
        },
      ],
    },
    {
      id: 's5',
      title: 'Testimonios de profetas modernos',
      intro: {
        romanNumeral: 'V',
        title: 'Lo que los Sucesores Dijeron sobre José Smith',
        paragraphs: [
          'Los profetas que sucedieron a José Smith — quienes lo conocieron personalmente o heredaron su obra — dejaron testimonios que clarifican su lugar en la historia sagrada.',
        ],
      },
      topics: [
        {
          id: 't5-1',
          title: 'El testimonio de los que lo conocieron',
          blocks: [
            {
              type: 'leader_quote',
              quote: 'Yo no vi a José Smith hacer un milagro. Pero vi algo más extraordinario: vi a un hombre que sabía que iba a morir, y que murió de todas formas porque no estaba dispuesto a negar lo que había visto. Para mí, eso es suficiente.',
              name: 'Brigham Young',
              role: 'Segundo Presidente de la Iglesia',
            },
            {
              type: 'leader_quote',
              quote: 'José Smith fue un hombre imperfecto que recibió un evangelio perfecto. Esa combinación — imperfección humana y verdad divina — es exactamente lo que esperaríamos de Dios, que elige vasos de barro para llevar su tesoro.',
              name: 'Jeffrey R. Holland',
              role: 'Quórum de los Doce Apóstoles',
            },
            {
              type: 'paragraph',
              text: 'El patrón de los testimonios de los sucesores de José Smith es notable: ninguno de los profetas que lo siguieron —Brigham Young, John Taylor, Wilford Woodruff, Lorenzo Snow, Joseph F. Smith, Heber J. Grant, George Albert Smith, David O. McKay— intentó matizar o relativizar la afirmación de DyC 135:3. Al contrario, cada generación de líderes ha reafirmado que José Smith fue el instrumento elegido de Dios para la Restauración y que esa Restauración fue el evento más significativo en la historia religiosa del mundo desde la resurrección de Cristo.',
            },
          ],
        },
        {
          id: 't5-2',
          title: 'La producción literaria y reveladora: los números',
          blocks: [
            {
              type: 'paragraph',
              text: 'Para evaluar la afirmación de DyC 135:3 también ayuda considerar el volumen bruto de la producción espiritual de José Smith. En 14 años de ministerio activo (1830-1844), un hombre con educación formal mínima produjo un cuerpo documental que incluye el Libro de Mormón, 138 secciones del Libro de Doctrina y Convenios, el Libro de Moisés, el Libro de Abraham, la Historia de José Smith (JS-H), los Artículos de Fe, la Traducción de José Smith de la Biblia, miles de páginas de correspondencia doctrinal, y discursos como el Rey Follett que siguen siendo estudiados por filósofos y teólogos.',
            },
            {
              type: 'key_points',
              title: 'El output total del ministerio de José Smith (1830-1844)',
              points: [
                '138 secciones del Libro de Doctrina y Convenios (revelaciones, epístolas, declaraciones)',
                '531 páginas del Libro de Mormón — traducidas por don y poder de Dios',
                'Libro de Moisés (Perla de Gran Precio) — visiones de Moisés sobre la creación y Enoc',
                'Libro de Abraham (Perla de Gran Precio) — papiros egipcios traducidos por inspiración',
                'Traducción de José Smith de la Biblia — más de 3,400 versículos clarificados o restaurados',
                'Artículos de Fe — 13 declaraciones doctrinales publicadas en 1842',
                'Discurso Rey Follett (1844) — la exposición más profunda de la naturaleza de Dios en la Restauración',
              ],
            },
            {
              type: 'reflection',
              prompt: '¿Cómo has llegado a tu propio conocimiento de si José Smith fue un profeta verdadero? ¿Qué combinación de evidencia histórica, estudio de las escrituras, y experiencia espiritual personal te resulta más convincente?',
            },
          ],
        },
        {
          id: 't5-3',
          title: 'La pregunta final: ¿quién fue José Smith?',
          blocks: [
            {
              type: 'paragraph',
              text: 'Gordon B. Hinckley articuló con claridad lo que los historiadores y los teólogos de todas las posiciones reconocen: el fenómeno José Smith no admite respuestas templadas. Era o lo que afirmaba ser — el profeta de la Restauración, instrumento de Dios para la dispensación de la plenitud — o era el mayor impostor de la historia religiosa americana. Las opciones intermedias —"era un hombre sincero pero equivocado," "era un genio literario que confundió su imaginación con revelación"— no se sostienen ante la evidencia de una vida vivida bajo persecución constante sin recantación.',
            },
            {
              type: 'central_quote',
              text: 'O es el profeta de Dios — verdaderamente. O es un fraude. No hay en medio ningún terreno seguro para quedarse parado. El hombre lo exige todo o no merece nada.',
              attribution: 'Gordon B. Hinckley, General Conference, octubre de 1998',
            },
            {
              type: 'paragraph',
              text: 'Para los Santos de los Últimos Días, la respuesta a la pregunta sobre José Smith no es solo histórica ni intelectual — es personal y espiritual. Moroni 10:4 ofrece la ruta de acceso que José Smith mismo señaló: preguntar a Dios con corazón sincero y verdadera intención. Millones han tomado esa ruta y han regresado con un conocimiento que ninguna evidencia externa puede dar ni quitar. Ese conocimiento personal es, en última instancia, el fundamento más sólido del testimonio de que José Smith fue lo que afirmó ser.',
            },
            {
              type: 'note_prompts',
              prompts: [
                { id: 'p1', question: '¿En qué sentido personal te ha afectado la Restauración a través de José Smith — en tu familia, en tu comprensión de Dios, en tu esperanza sobre la muerte y la eternidad?' },
                { id: 'p2', question: '¿Qué significa para ti que la dispensación de la plenitud esté actualmente en curso — que vivimos en el momento final antes de la Segunda Venida?' },
                { id: 'p3', question: '¿Cómo explicarías a alguien que nunca ha escuchado del mormonismo por qué José Smith importa para ellos personalmente, incluso si no son miembros de la Iglesia?' },
              ],
            },
            {
              type: 'quiz',
              quizType: 'true_false',
              question: 'La doctrina del bautismo por los muertos fue inventada por José Smith sin ningún precedente en las escrituras bíblicas.',
              answer: false,
              explanation: '1 Corintios 15:29 pregunta: "De lo contrario, ¿qué harán los que se bautizan por los muertos?" — esta referencia de Pablo es evidencia de que la práctica existía en la Iglesia primitiva del Nuevo Testamento. José Smith no la inventó; la restauró.',
            },
            {
              type: 'quiz',
              quizType: 'fill_blank',
              question: 'Según DyC 138:53-55, José Smith estaba entre los "elegidos espíritus que estaban guardados para venir en la plenitud de los tiempos para tomar parte en el establecimiento del gran _____ de Dios en la tierra."',
              answer: 'reino',
              explanation: 'DyC 138:53-55 identifica a José Smith entre los espíritus elegidos reservados para la dispensación de la plenitud, "para tomar parte en el establecimiento del gran reino de Dios en la tierra para preparar a mi pueblo para la venida del Señor."',
            },
          ],
        },
      ],
    },
    {
      id: 's6',
      title: 'El legado que continúa',
      intro: {
        romanNumeral: 'VI',
        title: 'Lo que la Restauración Significa para Ti',
        paragraphs: [
          'La Restauración no es una historia que terminó en 1844. Es una obra en proceso. El legado de José Smith no es un museo — es un movimiento vivo.',
        ],
      },
      topics: [
        {
          id: 't6-1',
          title: 'La Restauración como obra en proceso',
          blocks: [
            {
              type: 'paragraph',
              text: 'En el discurso de la conferencia de abril de 2020, el Presidente Russell M. Nelson declaró que la Restauración es una obra continua — no un evento del pasado. Esto es teológicamente consistente con la promesa de Moroni 10:5 de que el Espíritu Santo puede manifestar la verdad de todas las cosas y con la promesa del Señor en DyC 1:38 de que su voz y la voz de sus siervos "es lo mismo." La Restauración que comenzó con José Smith no terminó con él.',
            },
            {
              type: 'paragraph',
              text: 'Para los Santos individuales, el legado de José Smith no es solo doctrinal ni histórico — es personal. El sacerdocio que él restauró está en las manos de los obispos y presidentes de rama de cada barrio y rama del mundo. Las llaves del sellamiento que volvieron con Elías en 1836 son las que unen a las familias en los templos cada semana. El Libro de Mormón que él tradujo es el libro que los misioneros llevan a 160 países. La obra de José Smith está literalmente en las manos de cada Santo activo.',
            },
            {
              type: 'leader_quote',
              quote: 'La Restauración que comenzó con el Profeta José Smith continuará hasta que se hayan cumplido todos los propósitos de Dios. Y cada uno de nosotros tiene un papel en esa continuación. El manto del profeta no murió con él en Carthage — se distribuyó entre todos los que aceptaron el convenio.',
              name: 'Russell M. Nelson',
              role: 'Decimoséptimo Presidente de la Iglesia',
            },
            {
              type: 'reflection',
              prompt: '¿De qué manera específica estás participando activamente en la obra de la Restauración que José Smith inició? ¿Hay algo que sientes que Dios te está llamando a hacer para avanzar esa obra en tu esfera de influencia?',
            },
            {
              type: 'note_prompts',
              prompts: [
                { id: 'p1', question: '¿Cómo has cambiado como resultado de estudiar la vida y obra de José Smith en estas cinco lecciones?' },
                { id: 'p2', question: '¿Qué pregunta sobre José Smith todavía no tienes resuelta? ¿Cuál es tu plan para buscar esa respuesta?' },
              ],
            },
          ],
        },
      ],
    },
  ],
}
