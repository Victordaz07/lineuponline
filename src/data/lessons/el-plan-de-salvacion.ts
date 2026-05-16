import type { Lesson } from '@/types/doctrine'

export const elPlanDeSalvacion: Lesson = {
  id: 'plan-de-salvacion',
  moduleId: 'doctrina-avanzada-carne',
  title: 'El Plan de Salvación',
  subtitle: 'La arquitectura de la eternidad',
  author: 'Fuentes principales: Alma 42, 2 Nefi 2, DyC 76, 93, 138; Abraham 3; Moisés 4–5',
  description:
    'El plan de salvación no es un esquema religioso — es la arquitectura completa de la existencia eterna. De dónde venimos, por qué estamos aquí, a dónde vamos. El consejo en los cielos, la Caída, la Expiación, el mundo de los espíritus, la resurrección y los tres destinos eternos — todo en un marco coherente que revela la magnitud del amor del Padre Celestial.',
  level: 'AVANZADO',
  icon: '🗺️',
  duration: 90,
  order: 4,
  status: 'PUBLISHED',
  studyBodyPlain: '',
  originalBodyPlain: '',
  previousLessonId: 'preexistencia',
  nextLessonId: 'justicia-y-misericordia',
  studySections: [
    {
      id: 's1',
      title: 'El Consejo en los Cielos — El Origen del Plan',
      intro: {
        romanNumeral: 'I',
        title: 'El Consejo en los Cielos — El Origen del Plan',
        paragraphs: [
          'Antes de que existiera la tierra, antes de que el tiempo comenzara tal como lo conocemos, hubo un consejo en los cielos. El Padre presentó su plan. Hubo debate. Hubo guerra. Y nosotros — cada uno de los que habitamos la tierra — elegimos un bando. Esa elección nos trajo aquí.',
        ],
      },
      topics: [
        {
          id: 't1',
          title: 'El Plan del Padre y la Oposición de Lucifer',
          subtitle:
            'Moisés 4 y Abraham 3 narran el evento más antiguo de nuestra historia personal: el momento en que se presentó el plan y en que elegimos.',
          blocks: [
            {
              type: 'highlight_verse',
              text: 'Y ahora bien, yo, el Señor Dios, te digo estas cosas. Satanás, es decir, aquel a quien llamé Lucifer, aquel que cayó del cielo; y vino ante mí, diciendo: He aquí, aquí estoy yo, envíame a mí, yo seré tu hijo y redimiré a todo el género humano, de modo que ni un alma se perderá, y sin duda alguna yo lo haré; por tanto, dame tu honor.',
              reference: 'Moisés 4:1',
            },
            {
              type: 'highlight_verse',
              text: 'Mas he aquí, mi Amado Hijo, el cual era uno como yo desde el principio, dijo: Padre, sea hecha tu voluntad, y sea la gloria tuya para siempre.',
              reference: 'Moisés 4:2',
            },
            {
              type: 'paragraph',
              text: 'El contraste no podría ser más nítido. Lucifer propone un plan centrado en su propia gloria y en la eliminación del libre albedrío. Cristo propone someterse al plan del Padre, cediendo toda gloria al Padre. En esa diferencia — agencia versus compulsión, servicio versus ambición — está el núcleo de todo el plan de salvación.',
              blockId: 'ps-s1-p-0',
            },
            {
              type: 'compare_grid',
              left: {
                title: 'El Plan de Lucifer',
                items: [
                  'Redimir a todos por compulsión — ninguna alma se perdería',
                  'Eliminar el libre albedrío para garantizar la obediencia',
                  'La gloria sería para Lucifer, no para el Padre',
                  'Sin caída real, sin oposición, sin crecimiento genuino',
                  'Produciría seres sin carácter forjado por la elección propia',
                ],
              },
              right: {
                title: 'El Plan del Padre',
                items: [
                  'La agencia es sagrada e inviolable — cada alma elige libremente',
                  'Cristo como Redentor — la misericordia resuelve lo que la justicia requiere',
                  'La gloria es para el Padre y para Sus hijos exaltados',
                  'La experiencia mortal con oposición produce carácter eterno real',
                  'El objetivo: que los hijos lleguen a ser lo que el Padre es',
                ],
              },
            },
            {
              type: 'highlight_verse',
              text: 'Y hubo guerra en el cielo; Miguel y sus ángeles combatían contra el dragón. Y el dragón y sus ángeles también combatían, pero no prevalecieron, ni se halló ya su lugar en el cielo. Y fue lanzado fuera el gran dragón, la serpiente antigua, que se llama el Diablo y Satanás, el cual engaña al mundo entero.',
              reference: 'Apocalipsis 12:7–9 · Biblia (RVR)',
            },
            {
              type: 'doctrine_box',
              title: 'Por qué el plan de Lucifer no podía funcionar',
              body: 'Si el plan de Lucifer se hubiera adoptado, los hijos de Dios habrían existido por la eternidad sin crecer — sin carácter genuino, sin fe probada, sin gozo real. El plan del Padre produce hijos que llegan a ser como Él POR ELECCIÓN PROPIA, no por compulsión. Un ser "exaltado" por la fuerza no es divino — es una máquina. Brigham Young enseñó que la diferencia entre el plan del Padre y el de Lucifer es la misma diferencia entre la luz y las tinieblas: uno produce seres eternos capaces de gozo infinito; el otro habría producido marionetas eternas. Solo el plan del Padre produce dioses reales.',
            },
            {
              type: 'highlight_verse',
              text: 'Y ahora bien, Abraham, estas son las inteligencias que fueron organizadas antes de que el mundo fuera; y entre todas estas había muchas de las grandes y nobles; y Dios vio que esas almas eran buenas, y se puso en medio de ellas, y dijo: Seré tu gobernante — pues él se encontraba entre las que eran espíritus, y vio que eran buenos; y me dijo: Abraham, tú eres uno de ellas; tú fuiste elegido antes de que nacieras.',
              reference: 'Abraham 3:22–23',
            },
            {
              type: 'leader_quote',
              quote: 'El plan de nuestro Padre Celestial recibe varios nombres en las escrituras: "el plan de salvación" (Alma 24:14), "el plan de redención" (Alma 12:25), "el plan de misericordia" (Alma 42:15) y "el gran plan de felicidad" (Alma 42:8). Cada nombre revela una faceta distinta. Pero el que más me llama la atención es el último: el plan de FELICIDAD. No es el plan de la supervivencia espiritual. No es el plan de la prueba severa. Es un plan diseñado por un Padre que quiere que sus hijos sean felices — no solo en la eternidad, sino comenzando ahora mismo.',
              name: 'Élder Dallin H. Oaks',
              role: '"El Gran Plan", Conferencia General, abril 2020 · Liahona, mayo 2020',
            },
            {
              type: 'reflection',
              prompt:
                'Sabemos que antes de nacer estabas entre los que "aclamaron con júbilo" cuando se pusieron los fundamentos de la tierra (Job 38:7). Eso significa que conociste el plan, conociste los riesgos de la mortalidad, y dijiste que sí. ¿Cómo cambia la forma en que enfrentas tus pruebas actuales saber que viniste aquí con plena conciencia de lo que implicaba?',
            },
          ],
        },
      ],
    },
    {
      id: 's2',
      title: 'La Arquitectura Completa — Las Etapas de la Existencia',
      intro: {
        romanNumeral: 'II',
        title: 'La Arquitectura Completa — Las Etapas de la Existencia',
        paragraphs: [
          'El plan de salvación abarca la totalidad de la existencia: antes del nacimiento, la mortalidad, el mundo de los espíritus, la resurrección, el juicio y los destinos eternos. Cada etapa tiene un propósito específico y no puede ser entendida aislada de las demás. Ver el plan completo cambia la manera en que se vive cada momento de la etapa en que estamos.',
        ],
      },
      topics: [
        {
          id: 't2',
          title: 'De la Premortalidad a la Eternidad',
          subtitle:
            'Las seis etapas de la existencia forman un arco completo — cada una prepara para la siguiente.',
          blocks: [
            {
              type: 'timeline',
              items: [
                {
                  label: '1 · Premortalidad',
                  text: 'Vivimos como hijos espirituales del Padre Celestial. Desarrollamos carácter real, recibimos el plan en el Consejo, y elegimos venir a la tierra. Algunos destacaron como "grandes y nobles" (Abraham 3:22-23). El carácter que traemos a esta vida fue forjado allí.',
                  ref: 'Abraham 3:22-26; DyC 93:29',
                  color: 'gold',
                },
                {
                  label: '2 · Nacimiento y Mortalidad',
                  text: 'El espíritu se une a un cuerpo físico. Es el período más corto de la existencia eterna, pero de importancia incomparable: aquí se reciben las ordenanzas del sacerdocio, se desarrolla la fe bajo el velo, y se forja el carácter que determina el destino eterno.',
                  ref: '2 Nefi 2:25-27; Abraham 3:24-26',
                  color: 'blue',
                },
                {
                  label: '3 · Muerte Física',
                  text: 'Separación temporal del espíritu y el cuerpo. No es el fin — es la transición. El espíritu mantiene su identidad, memoria, personalidad y carácter intactos. Para los justos es el inicio del descanso; para los impíos, el inicio de una conciencia más aguda de sus elecciones.',
                  ref: 'Alma 40:11-14; DyC 138:18',
                  color: 'blue',
                },
                {
                  label: '4 · Mundo de los Espíritus',
                  text: 'Estado intermedio antes de la resurrección. Los justos en paraíso, los demás en prisión espiritual. No es un estado estático: la obra misional continúa, los bautismos vicarios abren el camino a quienes no recibieron el evangelio en vida, y el progreso es posible.',
                  ref: 'DyC 138:11-18, 57-59; 1 Pedro 3:18-20',
                  color: 'gold',
                },
                {
                  label: '5 · Resurrección y Juicio',
                  text: 'Reunión permanente y eterna del espíritu con un cuerpo glorificado. Universal — todos resucitan sin excepción (1 Cor 15:22). El juicio final evalúa el uso de la agencia, los convenios recibidos, y la aplicación de la Expiación a lo largo de toda la existencia.',
                  ref: 'Alma 11:43-44; DyC 76; 1 Cor 15:40-42',
                  color: 'gold',
                },
                {
                  label: '6 · Destinos Eternos',
                  text: 'Tres reinos de gloria (celestial, terrestre, telestial) más las tinieblas de afuera para los hijos de perdición. Cada destino refleja perfectamente la justicia y la misericordia de Dios: cada alma recibe exactamente el grado de gloria que es capaz de tolerar y disfrutar.',
                  ref: 'DyC 76:70-113',
                  color: 'blue',
                },
              ],
            },
            {
              type: 'highlight_verse',
              text: 'El espíritu y el cuerpo son el alma del hombre. Y la resurrección de los muertos es la redención del alma; y la redención, sin la resurrección del cuerpo, no hay alma perfecta.',
              reference: 'Doctrina y Convenios 88:15–16',
            },
            {
              type: 'doctrine_box',
              title: 'El cuerpo físico: parte esencial del plan, no un obstáculo',
              body: 'En muchas tradiciones filosóficas y religiosas el cuerpo es visto como una jaula del alma — algo que hay que superar o abandonar para alcanzar la divinidad. La doctrina restaurada enseña lo opuesto: el cuerpo físico es una de las bendiciones más grandes de la mortalidad. DyC 93:33 enseña que "el espíritu y el cuerpo son el alma del hombre." La gloria plena del Padre requiere un cuerpo resucitado y glorificado — incluso Lucifer envidia los cuerpos de los mortales (DyC 138:50). La resurrección permanente y gloriosa no es el escape del plan; es su culminación.',
            },
            {
              type: 'highlight_verse',
              text: 'El hombre es espíritu. Los elementos son eternos, y el espíritu y el elemento, inseparablemente conectados, reciben una plenitud de gozo; y cuando son separados, el hombre no puede recibir una plenitud de gozo.',
              reference: 'Doctrina y Convenios 93:33–34',
            },
            {
              type: 'leader_quote',
              quote: 'El plan de felicidad no sería el plan de felicidad si no incluyera el cuerpo. La mortalidad no es un paréntesis en la existencia eterna — es una etapa esencial. La resurrección es el regalo más universal de Cristo: el don incondicional que revierte la muerte física para toda la humanidad sin excepción. Dios siempre quiso que Sus hijos tuvieran cuerpos, porque Él mismo tiene uno. En ese sentido, la resurrección no solo restaura — confirma el diseño original del plan.',
              name: 'Élder Jeffrey R. Holland',
              role: '"El Cristo de las Escrituras" · Conferencia del Sistema Educativo de la Iglesia, agosto 1998',
            },
            {
              type: 'reflection',
              prompt:
                '¿Cuál de las seis etapas de la existencia entiendes menos? ¿El mundo de los espíritus, el juicio, los reinos de gloria? Identifica la etapa sobre la que tienes más preguntas y busca esta semana una escritura específica que responda una de esas preguntas.',
            },
          ],
        },
      ],
    },
    {
      id: 's3',
      title: 'La Caída — Necesaria, No Accidental',
      intro: {
        romanNumeral: 'III',
        title: 'La Caída — Necesaria, No Accidental',
        paragraphs: [
          'La Caída de Adán y Eva es interpretada en el mundo cristiano tradicional como la catástrofe que arruinó el plan perfecto de Dios — el error que forzó una solución de emergencia llamada Expiación. La doctrina restaurada presenta una perspectiva radicalmente distinta y liberadora: la Caída fue necesaria, fue prevista, fue parte del plan desde el principio. Sin ella, ninguno de nosotros podría existir, y la exaltación sería imposible.',
        ],
      },
      topics: [
        {
          id: 't3',
          title: 'La Naturaleza de la Caída y su Necesidad Doctrinal',
          subtitle:
            'Lehi, Alma, Moisés y Pablo enseñan la misma doctrina desde ángulos distintos: la Caída no fue el problema — fue la condición necesaria del plan.',
          blocks: [
            {
              type: 'highlight_verse',
              text: 'Y he aquí, si Adán no hubiera transgredido, no habría caído, mas habría permanecido en el jardín del Edén. Y todas las cosas que fueron criadas habrían permanecido en el mismo estado en que se hallaban después de haber sido formadas; y no habrían tenido fin. Y no habrían tenido hijos; por consiguiente, habrían permanecido en un estado de inocencia, sin experimentar el gozo, porque no conocían la miseria; sin hacer el bien, porque no conocían el pecado. Pero he aquí, todas las cosas han sido hechas según la sabiduría de aquel que todo lo sabe. Adán cayó para que los hombres existiesen; y los hombres existen para que tengan gozo.',
              reference: '2 Nefi 2:22–25',
            },
            {
              type: 'paragraph',
              text: 'Lehi identifica tres consecuencias del estado edénico pre-Caída que lo habrían hecho imposible dentro del plan eterno: (1) no habría hijos — ninguno de nosotros existiría; (2) no habría gozo real — sin contraste con la miseria, el gozo es conceptualmente vacío; (3) no habría crecimiento moral — sin conocimiento experiencial del pecado, el bien no puede ser elegido conscientemente. La Caída introdujo los tres opuestos necesarios para que el plan produjera seres capaces de exaltación.',
              blockId: 'ps-s3-p-0',
            },
            {
              type: 'highlight_verse',
              text: 'Y Adán bendijo a Dios y fue lleno del Espíritu Santo, y comenzó a profetizar acerca de todas las familias de la tierra, diciendo: Bendito sea el nombre de Dios, pues a causa de mi transgresión mis ojos son abiertos, y en esta vida tendré gozo, y de nuevo en la carne veré a Dios. Y Eva, su esposa, oyó todas estas cosas y se regocijó, diciendo: Si no fuera por nuestra transgresión, nunca habríamos tenido simiente, ni nunca habríamos conocido el bien y el mal, ni el gozo de nuestra redención, ni la vida eterna que Dios da a todos los obedientes.',
              reference: 'Moisés 5:10–11',
            },
            {
              type: 'doctrine_box',
              title: 'Dos Caídas, no una — y dos victorias de Cristo',
              body: 'La teología restaurada enseña que la Caída tuvo dos dimensiones inseparables, cada una resuelta por Cristo de manera distinta:\n\n① La Caída FÍSICA — introdujo la mortalidad, la enfermedad, el envejecimiento y la muerte del cuerpo. Cristo la revierte mediante la RESURRECCIÓN, que es universal e incondicional para toda la humanidad.\n\n② La Caída ESPIRITUAL — introdujo la separación de Dios causada por el pecado personal. Cristo la revierte mediante la EXPIACIÓN, que es condicional y disponible para quienes la aplican mediante fe, arrepentimiento y ordenanzas.\n\nEntender estas dos dimensiones clarifica por qué el plan requiere TANTO la resurrección como la Expiación — son dos victorias distintas sobre dos consecuencias distintas de la Caída.',
            },
            {
              type: 'deep_dive',
              badge: 'Doctrina Clave',
              title: '¿Pecó Adán o transgredió? La distinción importa doctrinalmente',
              paragraphs: [
                'Los textos de la Restauración usan consistentemente la palabra "transgresión" para describir lo que hicieron Adán y Eva, no "pecado" en el sentido moral pleno. El Artículo de Fe 2 es explícito: "Creemos que los hombres serán castigados por sus propios pecados, y no por la transgresión de Adán." La distinción es teológicamente crucial.',
                'Un PECADO es la violación deliberada de una ley conocida con plena comprensión de su maldad moral. Una TRANSGRESIÓN es la violación de una regla que produce consecuencias necesarias, pero no desde un estado de rebeldía maliciosa. Adán y Eva estaban ante dos mandamientos que no podían cumplir simultáneamente: "no coman del fruto" y "sed fecundos y multiplicaos." Su elección fue una transgresión necesaria, no una rebelión contra Dios.',
                'El élder Dallin H. Oaks enseñó: "Algunos pueden preguntar por qué hacemos esa distinción entre pecado y transgresión. La respuesta es que la distinción es importante porque ayuda a entender la naturaleza de la Caída de Adán y Eva. Si se hubieran negado a actuar, nunca se hubiera movido el plan hacia adelante." ("Grandes Propósitos de la Vida", Conferencia General, octubre 1993).',
                'La consecuencia práctica: no heredamos la culpa de Adán. Sí heredamos las consecuencias físicas (mortalidad, enfermedad, muerte). Pero cada alma es responsable de sus propios pecados — no de los de nuestros primeros padres. Esto elimina la doctrina del pecado original tal como existe en otras tradiciones cristianas.',
              ],
            },
            {
              type: 'compare_grid',
              left: {
                title: 'Visión tradicional cristiana de la Caída',
                items: [
                  'Catástrofe moral que arruinó el plan perfecto de Dios',
                  'La naturaleza humana quedó corrompida por el "pecado original"',
                  'Heredamos la culpa y la corrupción moral de Adán',
                  'Dios tuvo que improvisar la Expiación como respuesta de emergencia',
                  'La humanidad cae en un estado de depravación total e irreparable',
                ],
              },
              right: {
                title: 'Visión restaurada de la Caída',
                items: [
                  'Acto necesario y previsto — parte esencial del plan eterno desde el principio',
                  'Introduce mortalidad y oposición, que son herramientas esenciales del crecimiento',
                  'No heredamos el pecado de Adán — solo las consecuencias físicas de la mortalidad',
                  'La Expiación fue preparada antes de la fundación del mundo (1 Pedro 1:19-20)',
                  'El ser humano tiene un potencial divino real e infinito — puede llegar a ser como el Padre',
                ],
              },
            },
            {
              type: 'leader_quote',
              quote: 'La Caída fue un paso adelante — hacia la mortalidad, que era el ambiente que el plan de Dios requería. No fue una catástrofe sin esperanza. Fue el primer gran paso de una jornada diseñada para producir seres eternamente felices. Comprender la Caída correctamente nos libera de la culpa irracional y nos llena de gratitud por la Expiación, que no fue una reparación de emergencia sino la pieza central que siempre estuvo en el diseño original.',
              name: 'Presidente Russell M. Nelson',
              role: '"La Expiación", Conferencia General, octubre 1996 · Liahona, enero 1997',
            },
            {
              type: 'reflection',
              prompt:
                'Lehi dice en 2 Nefi 2:25 que "los hombres existen para que tengan gozo." No para sobrevivir. No para pasar una prueba. Para tener gozo. ¿Dónde estás encontrando ese gozo en tu vida actual? ¿Hay áreas donde estás viviendo el plan como si fuera un obstáculo a superar en lugar de un camino hacia la felicidad?',
            },
          ],
        },
      ],
    },
    {
      id: 's4',
      title: 'La Mortalidad y el Mundo de los Espíritus',
      intro: {
        romanNumeral: 'IV',
        title: 'La Mortalidad y el Mundo de los Espíritus',
        paragraphs: [
          'La mortalidad es el período más corto de la existencia eterna — un destello en comparación con la eternidad anterior y posterior. Pero en términos de importancia es incomparable: es el único tiempo en que podemos recibir ordenanzas del sacerdocio, ejercer fe genuina bajo el velo, y forjar el carácter que determinará nuestro destino eterno. El mundo de los espíritus es la continuación — donde la obra de salvación alcanza a quienes no recibieron el evangelio durante la vida mortal.',
        ],
      },
      topics: [
        {
          id: 't4',
          title: 'Para Qué Estamos Aquí — y Qué Pasa Cuando Partimos',
          subtitle:
            'Los propósitos específicos de la mortalidad y la revelación del mundo de los espíritus en DyC 138.',
          blocks: [
            {
              type: 'highlight_verse',
              text: 'Y veremos si ellos harán todas las cosas que el Señor su Dios les mande; y probaremos así si son dignos de guardar su segundo estado.',
              reference: 'Abraham 3:25',
            },
            {
              type: 'key_points',
              points: [
                '① RECIBIR UN CUERPO FÍSICO — El cuerpo no es una prisión; es un regalo esencial del plan. Sin cuerpo resucitado y glorificado, la gloria plena del Padre es inalcanzable. DyC 93:33 enseña que espíritu y cuerpo juntos constituyen el alma completa del ser humano.',
                '② SER PROBADOS Y PROBAR QUIÉNES SOMOS — "Para ver si harán todas las cosas que el Señor su Dios les mande" (Abraham 3:25). No para que Dios descubra algo que no sabe — Él ya lo sabe. La prueba es para que NOSOTROS desarrollemos el carácter que solo la experiencia real bajo el velo puede forjar.',
                '③ RECIBIR LAS ORDENANZAS DEL SACERDOCIO — El bautismo, la confirmación, el endowment y el sellamiento solo pueden recibirse en la carne (o por ordenanzas vicarias en el templo por los muertos). Estas ordenanzas son los convenios que ligan al hombre a la divinidad de manera eterna.',
                '④ APRENDER A DISCERNIR EL BIEN DEL MAL POR EXPERIENCIA — Sin oposición real no hay aprendizaje moral real. Lehi enseña que sin la Caída "no habría hecho el bien, porque no conocería el pecado" (2 Nefi 2:23). La mortalidad produce seres capaces de elegir el bien por instinto forjado en la experiencia, no solo en el conocimiento teórico.',
                '⑤ CREAR Y FORTALECER LA FAMILIA ETERNA — La familia es la unidad organizativa del plan eterno. La experiencia de ser hijo, cónyuge, padre o madre en mortalidad es preparatoria para la paternidad y maternidad eterna que es el destino de los exaltados.',
              ],
            },
            {
              type: 'doctrine_box',
              title: 'El velo del olvido — una misericordia, no un obstáculo',
              body: 'El velo que cubre nuestra memoria premortal es frecuentemente visto como una restricción frustrante. La doctrina restaurada lo presenta como una misericordia necesaria para que el plan funcione: si recordáramos perfectamente la presencia del Padre Celestial y nuestra existencia premortal, la fe sería imposible — porque la fe requiere actuar sin certeza visual completa. El velo hace posible que el ejercicio de la fe sea genuino, y por lo tanto hace posible el crecimiento espiritual real que el plan requiere. "El estado mortal es un estado de prueba, y el velo es lo que hace posible la prueba" (Doctrinas de Salvación, vol. 1, Joseph Fielding Smith).',
            },
            {
              type: 'deep_dive',
              badge: 'DyC 138',
              title: 'La Visión del Mundo de los Espíritus — Presidente Joseph F. Smith, 3 de octubre de 1918',
              paragraphs: [
                'El 3 de octubre de 1918, mientras meditaba en las escrituras, el presidente Joseph F. Smith recibió una de las revelaciones más expansivas de la historia de la Restauración sobre el estado de los muertos. Tenía 79 años y moriría semanas después. La visión fue canonizada en 1976 como sección 138 de Doctrina y Convenios.',
                'Lo que vio: los justos en el mundo de los espíritus estaban en un estado de paz y reposo activo — no de sueño inconsciente. Reconoció a Adán, Eva, Abel, Set, Noé, Abraham, Isaac, Jacob, Moisés, Isaías, Ezequiel, Daniel, Elías, Malaquías y muchos más. Eran seres con personalidad, memoria, propósito y esperanza viva.',
                'El elemento más sorprendente: Cristo visitó el mundo de los espíritus entre su muerte y su resurrección. Pero NO fue personalmente a los presos (quienes habían desobedecido). En cambio, organizó a los justos para que ELLOS fueran a predicar (DyC 138:29-30). Esto resuelve la aparente contradicción de 1 Pedro 3:18-19 — Cristo "fue y predicó a los espíritus en prisión" a través de sus mensajeros, exactamente como opera la obra misional en la tierra.',
                'Implicación doctrinal central: la obra de redención de los muertos no es opcional ni periférica en el plan. Es parte esencial. "La responsabilidad mayor que Dios ha puesto sobre nosotros en este mundo es procurar por nuestros muertos" (José Smith, Sermón de King Follett, 7 de abril de 1844).',
              ],
            },
            {
              type: 'highlight_verse',
              text: 'Vi que se organizaba entre los justos una hueste de mensajeros y se les encomendaba que fuesen y llevaran la luz del evangelio a los que estaban en las tinieblas, hasta los espíritus de todos los hombres; y así fue predicado el evangelio a los muertos.',
              reference: 'Doctrina y Convenios 138:30',
            },
            {
              type: 'highlight_verse',
              text: 'A los que habían muerto sin conocimiento de este evangelio, que no hubieran recibido el pleno testimonio de él en la carne, el cual incluía la fe en Dios, arrepentimiento de pecados, bautismo vicario por los que habían muerto, el don del Espíritu Santo mediante la imposición de manos, y fidelidad a la ley de Cristo hasta el fin.',
              reference: 'Doctrina y Convenios 138:32–33',
            },
            {
              type: 'leader_quote',
              quote: 'Vi el inmenso concurso de los espíritus de los justos, que habían sido fieles en el testimonio de Jesús mientras vivían en la mortalidad. Todos estos habían abandonado el mundo de los mortales y se hallaban felices en el mundo de los espíritus. Y contemplé cómo el Salvador hizo su aparición en ese mundo y fue recibido de ellos con gozo y regocijo.',
              name: 'Presidente Joseph F. Smith',
              role: 'Doctrina y Convenios 138:11–12 · Visión recibida el 3 de octubre de 1918',
            },
          ],
        },
      ],
    },
    {
      id: 's5',
      title: 'La Expiación — El Eje que Sostiene Todo el Plan',
      intro: {
        romanNumeral: 'V',
        title: 'La Expiación — El Eje que Sostiene Todo el Plan',
        paragraphs: [
          'Sin la Expiación, el plan de salvación se derrumba completamente. La Caída introdujo dos problemas que ningún ser humano puede resolver por sí mismo: la muerte física y el pecado personal. La Expiación de Jesucristo es la solución a ambos — y cada pieza del plan depende de ella. No fue una improvisación de emergencia. Fue el plan A desde antes de que el mundo fuera formado.',
        ],
      },
      topics: [
        {
          id: 't5',
          title: 'El Doble Problema de la Caída y la Única Solución',
          subtitle:
            'Alma 42 es el documento doctrinal más preciso del Libro de Mormón sobre cómo funciona la Expiación dentro del plan — y por qué era la única solución posible.',
          blocks: [
            {
              type: 'highlight_verse',
              text: 'Por tanto, el plan de redención no se podía llevar a cabo sino por medio de la expiación; por consiguiente, Dios mismo expiará por los pecados del mundo, para efectuar el plan de misericordia, para aplacar las exigencias de la justicia, a fin de que Dios pueda ser un Dios perfecto y justo, y también un Dios misericordioso.',
              reference: 'Alma 42:15',
            },
            {
              type: 'paragraph',
              text: 'Alma 42 es la respuesta de un padre a su hijo Coriántum, que cuestionaba si era justo que los pecadores sufrieran. Alma no responde con autoridad pastoral — explica con precisión doctrinal por qué el sufrimiento tiene sentido dentro del plan. La respuesta implica entender la naturaleza de la justicia y la misericordia como principios eternos, no como preferencias personales de Dios.',
              blockId: 'ps-s5-p-0',
            },
            {
              type: 'highlight_verse',
              text: 'Y ahora bien, la obra de la justicia no podía ser destruida; si así fuera, Dios dejaría de ser Dios. Y así vemos que toda la humanidad estaba caída y en las garras de la justicia; sí, la justicia de Dios, que los consignaba para siempre para ser cortados de su presencia. Y fue por consiguiente la piedad de Dios que redimió el plan de la misericordia.',
              reference: 'Alma 42:13, 15',
            },
            {
              type: 'doctrine_box',
              title: 'Por qué Dios no puede simplemente "perdonar" sin proceso',
              body: 'Alma enseña un principio que muchos encuentran difícil al principio: la justicia es un principio eterno, no solo una preferencia de Dios. Si Dios simplemente ignorara el pecado sin consecuencias, dejaría de ser Dios — porque la confiabilidad de Sus leyes es parte de lo que lo hace omnipotente y digno de fe. La Expiación NO elimina las consecuencias del pecado — las TRANSFIERE: Cristo las tomó sobre Sí mismo, voluntariamente, para que la misericordia pueda actuar sin violar la justicia. Es el movimiento más preciso de toda la teología restaurada: la deuda se paga, la justicia se satisface, y la misericordia queda libre para actuar con quien se arrepiente.',
            },
            {
              type: 'highlight_verse',
              text: 'Porque he aquí, yo, Dios, he sufrido estas cosas por todos, a fin de que ellos no tengan que sufrir si se arrepintieren; pero si no se arrepintieren, tendrán que sufrir como yo he sufrido; lo cual sufrimiento causó que yo, aun Dios, el mayor de todos, temblara de dolor, y sangrara de cada poro, y sufriera tanto en cuerpo como en espíritu, y deseara que no bebiese la copa amarga y me retirara — sin embargo, gloria sea al Padre, y bebí, y terminé mis preparativos para los hijos de los hombres.',
              reference: 'Doctrina y Convenios 19:16–19',
            },
            {
              type: 'compare_grid',
              left: {
                title: 'Resurrección — El don UNIVERSAL de la Expiación',
                items: [
                  'Resuelve la Caída física: la muerte del cuerpo',
                  'Incondicional — todos resucitan sin excepción (1 Cor 15:22)',
                  'No requiere fe ni ordenanzas de parte del receptor',
                  'El cuerpo resucitado es perfecto, glorificado e inmortal para siempre',
                  'Cristo lo conquistó al resucitar el tercer día después de la muerte',
                ],
              },
              right: {
                title: 'Remisión de Pecados — El don CONDICIONAL de la Expiación',
                items: [
                  'Resuelve la Caída espiritual: la separación de Dios por el pecado personal',
                  'Condicional — requiere fe, arrepentimiento, bautismo y Espíritu Santo',
                  'La limpieza del alma es progresiva y continúa durante toda la vida',
                  'La Santa Cena renueva semanalmente el acceso a este don para los dignos',
                  'Cristo lo conquistó en Getsemaní y en la Cruz: sufrió por cada pecado específico',
                ],
              },
            },
            {
              type: 'deep_dive',
              badge: 'Escritura Clave',
              title: '¿Por qué solo Cristo podía realizar la Expiación?',
              paragraphs: [
                'La Expiación requería a alguien que cumpliera condiciones simultáneas imposibles para cualquier otro ser en el universo. El presidente Boyd K. Packer enseñó: "Había que pagar una deuda que ninguno de nosotros podía pagar. El que la pagó tenía que ser capaz de sufrir dolor real, o la pena no sería genuina. Pero también tenía que ser infinito, o no cubriría a toda la humanidad para siempre."',
                'Cristo era el único ser que cumplía ambas condiciones al mismo tiempo: (1) MORTAL — capaz de sufrir dolor real, tentación real, muerte real. Heredó la mortalidad de su madre María, lo que le permitió morir. (2) INMORTAL E INFINITO — sin pecado propio, ninguna consecuencia de la justicia podía reclamarlo por cuenta propia. Era el único ser que podía morir voluntariamente. Heredó el poder sobre la muerte de su Padre eterno (Juan 10:17-18).',
                '"Nadie me la quita [mi vida], sino que yo de mí mismo la pongo. Tengo poder para ponerla, y tengo poder para volverla a tomar" (Juan 10:18). La muerte de Cristo no fue una ejecución — fue una elección soberana. Esa es la razón por la que su sacrificio tiene poder para todos: fue libre, fue consciente, y fue infinito.',
                'Adicionalmente, al haber vivido la mortalidad completa — con todas sus tentaciones, dolores, soledades y limitaciones — Cristo puede consolar y sanar no solo el pecado sino también el sufrimiento inocente. El Élder Neal A. Maxwell enseñó que la Expiación incluye no solo los pecados sino también "las enfermedades, las penas, los fracasos, las imperfecciones y las injusticias de la mortalidad." (Conference Report, octubre 1985)',
              ],
            },
            {
              type: 'leader_quote',
              quote: 'Hay un deudor en aprietos. Tiene una obligación que no puede pagar. Tiene que ir a la cárcel. Hay un amigo, un hombre adinerado y bueno, que se acerca y dice: "Yo pagaré la deuda. Libérenlo." El hombre es liberado. Eso es lo que Cristo hizo por toda la humanidad. Pero si el deudor no quiere salir de la cárcel — si no acepta la ayuda — el benefactor no puede forzarlo. La misericordia tiene sus condiciones. No puede violar la agencia. Solo puede ofrecerse.',
              name: 'Presidente Boyd K. Packer',
              role: '"El Mediador", Conferencia General, mayo 1977 · Liahona, julio 1977',
            },
            {
              type: 'reflection',
              prompt:
                'DyC 19:16-19 describe en primera persona lo que Cristo sufrió. Léelo despacio. Luego lee el versículo 19 completo: "bebí, y terminé mis preparativos para los hijos de los hombres." ¿Qué significa para ti personalmente que la Expiación no fue un evento general y abstracto, sino que incluye cada uno de tus pecados específicos, cada uno de tus dolores únicos y cada una de tus imperfecciones particulares?',
            },
          ],
        },
      ],
    },
    {
      id: 's6',
      title: 'Los Destinos Eternos — El Juicio y los Reinos de Gloria',
      intro: {
        romanNumeral: 'VI',
        title: 'Los Destinos Eternos — El Juicio y los Reinos de Gloria',
        paragraphs: [
          'El 16 de febrero de 1832 en Hiram, Ohio, José Smith y Sidney Rigdon recibieron la revelación más expansiva de la Restauración sobre el destino eterno del alma humana. En horas, DyC 76 desmontó siglos de teología cristiana binaria — cielo o infierno — y reveló una arquitectura de gloria que refleja perfectamente la justicia y la misericordia de un Padre que no quiere condenar a sus hijos, sino exaltarlos al nivel más alto que cada uno sea capaz de recibir.',
        ],
      },
      topics: [
        {
          id: 't6',
          title: 'Los Tres Reinos de Gloria y los Hijos de Perdición',
          subtitle:
            'DyC 76 y 1 Corintios 15 presentan la misma arquitectura eterna desde dos perspectivas: una revelada directamente, la otra tipológica.',
          blocks: [
            {
              type: 'highlight_verse',
              text: 'Hay cuerpos celestiales, y cuerpos terrestres; pero una es la gloria de los celestiales, y otra la de los terrestres. Una es la gloria del sol, y otra la gloria de la luna, y otra la gloria de las estrellas; porque una estrella difiere de otra en gloria. Así también es la resurrección de los muertos.',
              reference: '1 Corintios 15:40–42 · Biblia (RVR)',
            },
            {
              type: 'paragraph',
              text: 'Durante siglos 1 Corintios 15:40-42 fue interpretado como pura metáfora poética de Pablo. Cuando José Smith y Sidney Rigdon recibieron DyC 76 el 16 de febrero de 1832, descubrieron que Pablo estaba describiendo con precisión tres estados de gloria reales — el mismo sistema que el Señor estaba revelando ese día en Ohio. Las escrituras se confirman mutuamente a través de siglos y dispensaciones.',
              blockId: 'ps-s6-p-0',
            },
            {
              type: 'steps',
              steps: [
                'REINO CELESTIAL — Gloria del Sol (DyC 76:50-70, 92-96). Los que recibieron el testimonio de Jesús, se arrepintieron, fueron bautizados con autoridad, recibieron el Espíritu Santo y guardaron los mandamientos. "Estos son los que moran en la presencia de Dios y su Cristo para siempre" (DyC 76:62). Dentro del reino celestial existe el grado más alto — la exaltación — reservada para quienes hicieron y guardaron el convenio del matrimonio eterno sellado en el templo (DyC 131:1-4). Los exaltados se convierten en dioses: tienen la plenitud del Padre y progresan eternamente.',
                'REINO TERRESTRE — Gloria de la Luna (DyC 76:71-80). Los honorables de la tierra que "fueron cegados por la astucia de los hombres" y rechazaron el pleno evangelio, o no vivieron con suficiente fidelidad para el celestial. Incluye a los miembros de la Iglesia que no fueron "valientes en el testimonio de Jesús" (DyC 76:79). Recibirán la presencia del Hijo (Cristo) pero no la plenitud del Padre. Es un estado gloriosos — pero su progresión tiene un límite que el celestial no tiene.',
                'REINO TELESTIAL — Gloria de las Estrellas (DyC 76:81-112). Los que rechazaron el evangelio, vivieron en maldad, y sufrirán en el mundo de los espíritus hasta la segunda resurrección. "Su número es como la arena del mar." Al final de su sufrimiento, recibirán una gloria que "excede toda comprensión" (DyC 76:89) — pero no recibirán la presencia del Padre ni del Hijo; solo el ministerio del Espíritu Santo. Este dato es crucial: ni el menor de los tres reinos es un "infierno" de tormento eterno.',
                'LAS TINIEBLAS DE AFUERA — Los hijos de perdición (DyC 76:31-49). Solo quienes tuvieron un conocimiento perfecto de Dios por el poder del Espíritu Santo, y después negaron deliberadamente ese conocimiento y se rebelaron. La escritura es explícita: es la condición más restrictiva posible y "el número de ellos es conocido solo de Dios" (DyC 76:45). NO es la condición de los impíos ordinarios, los ateos, ni los que vivieron en pecado sin ese conocimiento perfecto.',
              ],
            },
            {
              type: 'highlight_verse',
              text: 'Y así vimos la gloria del reino celestial, que excede en todas las cosas — donde Dios, sí, el Padre, reina en su trono para siempre; ante cuyo trono todo se dobla en reverente homenaje y le da gloria para siempre y para siempre.',
              reference: 'Doctrina y Convenios 76:92–93',
            },
            {
              type: 'doctrine_box',
              title: '¿Qué determina en cuál reino habitarás?',
              body: 'El juicio no es arbitrario ni sorpresivo. DyC 76 y 88 revelan que cada persona será asignada al reino para el cual ESTÁ PREPARADA — el reino que puede tolerar, recibir y disfrutar. No es un premio o castigo externo impuesto desde fuera: es una realidad de compatibilidad espiritual. Brigham Young enseñó: "Si la gloria del reino celestial descendiera ahora sobre una persona que no ha sido fiel y obediente, le sería insoportable." El juicio final es la revelación de lo que cada alma ha llegado a SER — no solo de lo que hizo o dijo.',
            },
            {
              type: 'highlight_verse',
              text: 'Y el que no puede soportar la ley de un reino celestial no puede soportar la gloria celestial; por tanto, no es digno de un reino celestial. Y el que no puede soportar la ley de un reino terrestre no puede soportar la gloria terrestre; por tanto, no es digno de un reino terrestre.',
              reference: 'Doctrina y Convenios 88:22–23',
            },
            {
              type: 'deep_dive',
              badge: 'Perspectiva',
              title: 'El reino telestial excede toda comprensión — y eso es profundamente esperanzador',
              paragraphs: [
                'DyC 76:89 dice que la gloria del reino telestial — el menor de los tres — "excede toda comprensión." Esta declaración es doctrinal y tiene implicaciones enormes: no existe en el plan de Dios un "infierno eterno de tormento" para la mayoría de la humanidad.',
                'Brigham Young enseñó que si pudiéramos ver el reino telestial ahora mismo, muchos miembros de la Iglesia estarían dispuestos a morir para llegar allí de inmediato — tan gloriosa es esa condición comparada con la mortalidad que conocemos. El punto de comparación no es el telestial contra el celestial; es el telestial contra lo que los humanos mortales pueden imaginar o experimentar.',
                'La implicación teológica mayor: el plan de salvación NO es un sistema diseñado para condenar a la mayoría de los hijos de Dios. Es un sistema diseñado para elevar a TODOS tan alto como su elección y disposición lo permitan. "Todo hombre recibirá de acuerdo con sus propias obras, su propio dominio en las mansiones que están preparadas" (DyC 76:111). Dios no quiere perder a ninguno — y Su plan garantiza que nadie reciba menos de lo que puede tolerar en gloria.',
              ],
            },
            {
              type: 'leader_quote',
              quote: 'La revelación de los tres reinos de gloria es una de las joyas doctrinales más brillantes de la Restauración. Revela un Dios cuya misericordia es tan vasta como su justicia — un Padre que no está interesado en condenar a sus hijos sino en exaltarlos al máximo que cada uno sea capaz de recibir. Este es el plan de FELICIDAD: no el plan de la supervivencia de los mejores, sino el plan de la máxima bendición posible para cada uno de los hijos del Padre Celestial.',
              name: 'Presidente Gordon B. Hinckley',
              role: '"This Is the Work of the Master", Conferencia General, abril 1995 (trad.) · Liahona, julio 1995',
            },
            {
              type: 'quiz', id: 'q-1', question: { kind: 'fill_blank',
                prompt: '¿Cuál de los siguientes NO es uno de los nombres del plan de salvación que aparece en Alma 42?',
                options: [
                  'Plan de felicidad',
                  'Plan de misericordia',
                  'Plan de redención',
                  'Plan de perfección',
                ],
                correctIndex: 3,
                explanation: 'Alma 42 menciona "plan de redención" (v. 11), "plan de misericordia" (v. 15) y "plan de felicidad" (v. 8). "Plan de perfección" no aparece en las escrituras canónicas de la Restauración — el término utilizado es "plan de salvación" o los ya mencionados.',
              },
            },
            {
              type: 'quiz', id: 'q-2', question: {
                kind: 'fill_blank',
                prompt: 'Según DyC 88:22-23, ¿qué determina en cuál reino de gloria habitará un alma?',
                options: [
                  'La cantidad de buenas obras realizadas durante la mortalidad',
                  'La ley que el alma es capaz de soportar y tolerar',
                  'La decisión arbitraria del juicio final de Dios',
                  'El número de ordenanzas del sacerdocio recibidas',
                ],
                correctIndex: 1,
                explanation: 'DyC 88:22-23 enseña que quien "no puede soportar la ley" de un reino no puede "soportar la gloria" de ese reino y por lo tanto no es digno de él. El destino eterno no es un premio externo impuesto — es una realidad de compatibilidad espiritual: cada alma hereda el reino que puede tolerar y disfrutar.',
              },
            },
            {
              type: 'quiz', id: 'q-3', question: {
                kind: 'fill_blank',
                prompt: '¿Cuál es la distinción entre el don UNIVERSAL y el don CONDICIONAL de la Expiación de Cristo?',
                options: [
                  'La resurrección es universal; la remisión de pecados requiere fe, arrepentimiento y ordenanzas',
                  'La remisión de pecados es universal; la resurrección requiere bautismo por inmersión',
                  'Ambos son universales para todos los seres humanos sin excepción',
                  'Ambos son condicionales y requieren haber recibido las ordenanzas del templo',
                ],
                correctIndex: 0,
                explanation: 'La resurrección es el regalo incondicional de Cristo — todos resucitarán independientemente de su fe o comportamiento (1 Cor 15:22). La remisión de pecados es condicional: requiere fe en Cristo, arrepentimiento, bautismo con autoridad del sacerdocio y recibir el don del Espíritu Santo. Esta distinción es fundamental en la teología restaurada.',
              },
            },
            {
              type: 'reflection',
              prompt:
                'Imagina que pudieras explicar el plan de salvación completo a alguien que nunca lo ha escuchado, en cinco minutos. ¿Cuáles serían los tres puntos que elegirías para comunicar? ¿Qué diría esa selección sobre lo que más valoras del plan? ¿Hay algún aspecto del plan que aún te genera preguntas o que te cuesta explicar?',
            },
          ],
        },
      ],
    },
  ],
}
