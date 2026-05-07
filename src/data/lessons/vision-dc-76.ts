import type { Lesson } from '@/types/doctrine'

export const visionDC76: Lesson = {
  id: 'vision-dc-76',
  moduleId: 'discursos-sermones-clasicos',
  title: 'La Visión — Doctrina y Convenios 76',
  subtitle: 'Hiram, Ohio, 16 de febrero de 1832',
  author: 'Fuentes primarias: DyC 76; History of the Church, vol. 1; Philo Dibble (eyewitness)',
  description:
    'El 16 de febrero de 1832, Joseph Smith y Sidney Rigdon recibieron la revelación más expansiva del movimiento de la Restauración. Cinco visiones en una tarde que desmontaron siglos de teología cristiana sobre el cielo y el infierno. Estudio del texto, del contexto histórico y de la recepción del documento.',
  level: 'AVANZADO',
  icon: '🌌',
  duration: 70,
  order: 2,
  status: 'PUBLISHED',
  studyBodyPlain: '',
  originalBodyPlain: '',
  previousLessonId: null,
  nextLessonId: null,
  studySections: [
    {
      id: 's1',
      title: 'El Momento Histórico',
      intro: {
        romanNumeral: 'I',
        title: 'El Momento Histórico',
        paragraphs: [
          'Para entender DyC 76, hay que entender el momento en que llegó. No fue revelada en el vacío — fue recibida en medio de un proyecto de traducción de la Biblia, en la granja de un carpintero en Ohio, con un testigo adicional presente. Los detalles históricos son parte del mensaje.',
        ],
      },
      topics: [
        {
          id: 't1',
          title: 'Hiram, Ohio — 16 de Febrero de 1832',
          blocks: [
            {
              type: 'media_slot',
              kind: 'image',
              src: undefined,
              alt: 'Joseph Smith y Sidney Rigdon recibiendo la visión en Hiram Ohio',
              caption: 'Joseph y Sidney en la granja de John Johnson — la visión duró más de una hora',
              contextCard: {
                year: '1832',
                place: 'Hiram, Ohio',
                label: 'vision-dc76-joseph-sidney-receiving',
              },
            },
            {
              type: 'paragraph',
              text: 'Joseph Smith y Sidney Rigdon se encontraban trabajando en la Traducción Inspirada de la Biblia en la granja de John Johnson en Hiram, Ohio. Estaban revisando el Evangelio de Juan cuando llegaron a Juan 5:29 — el versículo sobre "la resurrección de vida" y "la resurrección de condenación." Fue mientras meditaban en ese texto que los cielos se abrieron.',
            },
            {
              type: 'highlight_verse',
              text: 'Por la fe contemplamos el honor y la majestad del Padre; y recibimos de su plenitud y su gracia; y él ha demostrado ser fiel en darnos un testimonio de su Hijo. Y hemos visto, mientras aún éramos en el Espíritu, al Señor nuestro Salvador a la diestra del Padre.',
              reference: 'Doctrina y Convenios 76:19–20',
            },
            {
              type: 'paragraph',
              text: 'Philo Dibble estaba presente en la habitación durante la recepción de la visión. Su testimonio es el único relato de primera mano de un testigo externo: "Joseph se paró en pie durante toda la entrevista, excepto por breves períodos... Sydney, sin embargo, cayó al suelo y estuvo fuera por un tiempo. El aspecto de Joseph al recibir la visión era brillante y radiante. La visión continuó durante más de una hora." (Philo Dibble, "Early Scenes in Church History," Juvenile Instructor, mayo 1892)',
            },
            {
              type: 'deep_dive',
              badge: 'Contexto',
              title: 'Por qué comenzó con Juan 5:29',
              paragraphs: [
                'Juan 5:29 habla de "los que hicieron lo bueno" saliendo a "resurrección de vida," y "los que hicieron lo malo" a "resurrección de condenación." Durante siglos, el cristianismo interpretó este versículo como confirmación de un sistema binario: cielo o infierno, punto final.',
                'Joseph y Sidney estaban meditando precisamente en esa división cuando la visión comenzó. La primera cosa que el Señor les mostró no fue los reinos de gloria — fue al Hijo en la diestra del Padre. El fundamento antes que la arquitectura.',
                'DyC 76 no comienza respondiendo la pregunta "¿a dónde van los muertos?" Comienza con "¿quién es Cristo?" El orden es deliberado: la comprensión de los reinos eternos solo tiene sentido dentro de la comprensión de quién es el Redentor.',
              ],
            },
            {
              type: 'highlight_verse',
              text: 'Ofrecemos nuestro testimonio de que él vive; pues le vimos, y aunque este testimonio es el último de todos; no obstante es verdadero; y todo que oiga puede regocijarse.',
              reference: 'Doctrina y Convenios 76:22–24',
            },
          ],
        },
      ],
    },
    {
      id: 's2',
      title: 'Las Cinco Visiones',
      intro: {
        romanNumeral: 'II',
        title: 'Las Cinco Visiones',
        paragraphs: [
          'DyC 76 no es una sola visión continua — es una secuencia de al menos cinco visiones distintas, cada una revelando un nivel diferente de la realidad eterna. La estructura interna del texto revela su arquitectura deliberada.',
        ],
      },
      topics: [
        {
          id: 't2',
          title: 'La Estructura de la Revelación',
          blocks: [
            {
              type: 'timeline',
              items: [
                {
                  label: 'Primera visión: El Padre y el Hijo',
                  text: 'Vv. 19-24 — Ven al Padre y al Hijo. La base teológica: Cristo es el Redentor de los mundos, y ellos son dos Personas distintas. Este es el corazón de todo lo que sigue.',
                  ref: 'DyC 76:19-24',
                  color: 'gold',
                },
                {
                  label: 'Segunda visión: Satanás y los hijos de perdición',
                  text: 'Vv. 25-49 — El origen y destino del adversario. El único destino sin redención posible. Las condiciones exactas que llevan a este estado son descritas con precisión.',
                  ref: 'DyC 76:25-49',
                  color: 'blue',
                },
                {
                  label: 'Tercera visión: El reino celestial',
                  text: 'Vv. 50-70 — Quiénes lo heredan, qué reciben, el nivel más alto de gloria. Incluye descripción de los "dioses" — exaltación plena.',
                  ref: 'DyC 76:50-70',
                  color: 'gold',
                },
                {
                  label: 'Cuarta visión: El reino terrestre',
                  text: 'Vv. 71-80 — Los honorables de la tierra que rechazaron el evangelio completo, o lo recibieron sin suficiente diligencia. Incluye a "valerosos en el testimonio de Jesús" que no llegaron más.',
                  ref: 'DyC 76:71-80',
                  color: 'blue',
                },
                {
                  label: 'Quinta visión: El reino telestial',
                  text: 'Vv. 81-106 — La multitud de los que no aceptaron el evangelio en esta vida ni en el mundo espíritus. Aun este reino "sobrepasa todo entendimiento" (v.89).',
                  ref: 'DyC 76:81-106',
                  color: 'blue',
                },
              ],
            },
            {
              type: 'highlight_verse',
              text: 'Y oímos la voz que decía: Escribid la visión, porque he aquí, ese es el fin de la visión de los sufrimientos de los impíos. Y también, de los que no han de ser redimidos de entre los muertos, antes de que llegue la resurrección de Cristo.',
              reference: 'Doctrina y Convenios 76:47–50',
            },
            {
              type: 'highlight_verse',
              text: 'Estos son los que recibieron el testimonio de Jesús, y creyeron en su nombre, y fueron bautizados después de la manera de su entierro, y se les perdonaron sus pecados; que habían de recibir corona de rectitud.',
              reference: 'Doctrina y Convenios 76:51–53',
            },
            {
              type: 'doctrine_box',
              title: 'Lo que no pudo escribirse',
              body: 'DyC 76:114-116 registra algo extraordinario: "Pero los grandes y maravillosos obras que el Señor hará para los hijos de los hombres, ni el ojo ha visto ni el oído ha escuchado... El Señor mandó a nosotros que no lo escribamos mientras estemos todavía en el mundo." La revelación es más grande que el texto que la registra. Lo que Joseph y Sidney vieron esa tarde excedió lo que podían comunicar con palabras — lo que está escrito en DyC 76 es ya lo más expansivo del canon restaurado, pero no es todo lo que vieron.',
            },
          ],
        },
      ],
    },
    {
      id: 's3',
      title: 'La Recepción y el Impacto',
      intro: {
        romanNumeral: 'III',
        title: 'La Recepción y el Impacto',
        paragraphs: [
          'DyC 76 no fue recibida sin controversia. Para los santos del siglo XIX — educados en un mundo donde el cielo y el infierno eran las únicas opciones — la revelación de tres reinos de gloria fue un terremoto teológico. Las reacciones fueron reveladoras.',
        ],
      },
      topics: [
        {
          id: 't3',
          title: 'Cómo Reaccionaron los Santos y Por Qué Importa',
          blocks: [
            {
              type: 'paragraph',
              text: 'William McLellin, uno de los primeros apóstoles, escribió en su diario que la revelación lo perturbó profundamente. Le parecía que casi nadie iría al infierno — lo cual chocaba con sus presuposiciones protestantes. Brigham Young, por su parte, describió su reacción inicial: cuando escuchó la revelación por primera vez, le parecía demasiado grande para creerla — demasiado gloriosa para ser verdad. Le tomó tiempo en oración y reflexión llegar a aceptarla.',
            },
            {
              type: 'paragraph',
              text: 'Joseph Smith escribió después de la visión: "Podría explicar cien veces más si pudiera salir ahora y predicar al mundo." Sidney Rigdon añadió: "Nunca habría imaginado o soñado que algo tan grande fuera revelado. La visión expandió mi alma de tal forma que puedo ahora entender cosas que antes no podía ni imaginar." (paráfrasis del relato de Philo Dibble). La visión no solo reveló doctrina — transformó la comprensión de sus testigos.',
            },
            {
              type: 'key_points',
              title: 'Por qué DyC 76 es doctrinalmente revolucionaria',
              points: [
                'Destruye el sistema binario cielo/infierno que dominó la teología cristiana por siglos',
                'Establece que el destino eterno es proporcional al conocimiento y rectitud — la justicia de Dios es más matizada que una sola línea',
                'Revela que aun el reino más bajo de gloria (telestial) "sobrepasa todo entendimiento" (DyC 76:89)',
                'Abre una comprensión de la salvación que honra tanto la justicia como la misericordia de Dios',
                'Sitúa a Cristo como el Redentor no solo de la Tierra sino de "mundos sin número" (DyC 76:24)',
              ],
            },
            {
              type: 'leader_quote',
              quote: 'Cuando yo tenía diecinueve años y escuché la doctrina de los tres reinos por primera vez, mi corazón saltó de alegría. No porque significara que "casi nadie iría al infierno," sino porque revelaba un Dios cuya justicia es más grande que yo había imaginado — un Dios que da a cada hijo exactamente lo que puede recibir, sin desperdiciar a ninguno. Eso cambió mi imagen de Dios permanentemente.',
              name: 'Jeffrey R. Holland',
              role: '"The Grandeur of God", Conferencia General, octubre 2003 (trad.)',
            },
          ],
        },
      ],
    },
    {
      id: 's4',
      title: 'Los Hijos de Perdición — El Límite Exacto',
      intro: {
        romanNumeral: 'IV',
        title: 'Los Hijos de Perdición — El Límite Exacto',
        paragraphs: [
          'Ninguna doctrina de DyC 76 genera más confusión — ni más miedo innecesario — que la de los hijos de perdición. El texto es preciso: las condiciones para este destino son tan específicas que la revelación los llama "los únicos que no serán redimidos." Entender las condiciones exactas es entender por qué casi nadie califica.',
        ],
      },
      topics: [
        {
          id: 't4',
          title: 'DyC 76:31-38 — Las Condiciones Exactas',
          blocks: [
            {
              type: 'highlight_verse',
              text: 'Así el fin de los que perecen es este: Son aquellos que el Padre le ha dado al poder del diablo; que niegan al Hijo después de que el Padre lo ha testificado; y así los que niegan al Espíritu Santo después de haberlo recibido, y haber negado al Unigénito Hijo del Padre, habiendo crucificadolo para sí mismos y poniéndolo en abierta vergüenza.',
              reference: 'Doctrina y Convenios 76:31–35',
            },
            {
              type: 'doctrine_box',
              title: 'Tres condiciones simultáneas y extremas',
              body: 'El texto requiere que la persona: (1) haya recibido el testimonio del Padre de que Jesús es el Cristo — no simplemente haber oído el evangelio, sino haber tenido un conocimiento perfecto por el poder del Espíritu Santo; (2) haber recibido el Espíritu Santo y sus dones plenamente; (3) después de todo eso, conscientemente rechazar y negar a Cristo. Las Escrituras añaden: "es imposible que los que una vez fueron iluminados y gustaron del don celestial, y fueron hechos partícipes del Espíritu Santo... y recayeren, sean otra vez renovados para arrepentimiento." (Hebreos 6:4-6). No es pecado, no es duda, no es apostasía ordinaria — es el rechazo deliberado de una certeza perfecta.',
            },
            {
              type: 'compare_grid',
              title: 'Apostasía común vs. hijos de perdición',
              left: {
                label: 'Apostasía / alejarse de la Iglesia',
                points: [
                  'Dejar de creer o practicar',
                  'Resultado de dudas, ofensas, o falta de fe',
                  'Puede incluir rechazo activo del evangelio',
                  'Aún cubre la Expiación',
                  'Destino: reino telestial o terrestre',
                ],
              },
              right: {
                label: 'Hijos de perdición (DyC 76:31-38)',
                points: [
                  'Requiere haber tenido conocimiento perfecto y certeza absoluta',
                  'No duda — sino rechazo consciente de lo que se sabe que es verdad',
                  'Requiere haber recibido el Espíritu Santo en plenitud',
                  'Literalmente "imposible renovar para arrepentimiento"',
                  'Destino: las tinieblas de afuera — fuera de toda gloria',
                ],
              },
            },
            {
              type: 'paragraph',
              text: 'Joseph Smith aclaró: "Todos los pecados serán perdonados al hombre excepto el pecado contra el Espíritu Santo; pues Jesús murió para salvar al mundo, y a los que hubieran cometido cualquier pecado excepto el pecado contra el Espíritu Santo, y ningún hombre tiene el conocimiento del evangelio como para ser condenado así excepto que se salga del camino después de haber tenido ese conocimiento." (History of the Church 1:316). La categoría existe — pero sus condiciones son tan extraordinarias que casi nadie en la mortalidad puede calificar.',
            },
            {
              type: 'key_points',
              title: 'Lo que DyC 76 enseña sobre los hijos de perdición',
              points: [
                '"Mejor les fuera no haber nacido" (v.32) — lenguaje de Judas Iscariote en los Evangelios',
                'Son los únicos que no serán redimidos en la plenitud de los tiempos (v.38)',
                'Conocen el poder de Dios y aun así lo niegan — no por debilidad sino por elección perfectamente informada',
                'Son muy pocos — la categoría existe doctrinalmente pero raramente aplica a personas reales',
                'Satanás y sus ángeles también son hijos de perdición (v.25-29)',
              ],
            },
          ],
        },
      ],
    },
    {
      id: 's5',
      title: 'Los Tres Reinos — Mapa Completo',
      intro: {
        romanNumeral: 'V',
        title: 'Los Tres Reinos — Mapa Completo',
        paragraphs: [
          'DyC 76 describe cada reino con precisión. No son categorías vagas de "cielo inferior, medio y superior" — son destinos cualitativamente diferentes con habitantes específicos, experiencias específicas, y niveles de presencia divina específicos. El texto es una guía, no una metáfora.',
        ],
      },
      topics: [
        {
          id: 't5',
          title: 'Celestial, Terrestre, Telestial — Texto y Teología',
          blocks: [
            {
              type: 'media_slot',
              kind: 'image',
              src: undefined,
              alt: 'Diagrama artístico de los tres reinos de gloria — celestial, terrestre, telestial',
              caption: 'La gloria de cada reino difiere como la del sol, la luna y las estrellas (1 Corintios 15:40-42)',
              contextCard: {
                label: 'vision-dc76-three-kingdoms-diagram',
              },
            },
            {
              type: 'compare_grid',
              title: 'Los tres reinos según DyC 76',
              left: {
                label: 'Reino Celestial (vv.50-70)',
                points: [
                  'Quiénes: los que recibieron el evangelio y guardan los convenios (v.51-53)',
                  'Presencia: el Padre y el Hijo moran con ellos (v.62)',
                  'Gloria: como el sol — la más alta (v.70)',
                  'Exaltación plena: se convierten en "dioses" (v.58)',
                  '"Ángeles que están ante el trono de Dios" son el nivel más bajo del celestial (v.67)',
                ],
              },
              right: {
                label: 'Reino Terrestre (vv.71-80)',
                points: [
                  'Quiénes: honorables que rechazaron el evangelio en vida (v.75); miembros que no fueron suficientemente diligentes (v.79)',
                  'Presencia: Cristo visita, pero no el Padre (v.77)',
                  'Gloria: como la luna — intermedia (v.78)',
                  'Incluye "valientes en el testimonio de Jesús" que no recibieron plenitud (v.79)',
                  'No hay "dioses" aquí — crecimiento limitado',
                ],
              },
            },
            {
              type: 'doctrine_box',
              title: 'El reino telestial — el más incomprendido',
              body: 'DyC 76:81-89 describe el reino telestial: sus habitantes son "impíos," mentirosos, adúlteros, prostitutas, "los que no quisieron recibir el evangelio de Cristo ni el testimonio de Jesús" (v.82). Sufren en el mundo espíritus hasta la resurrección final. Pero luego viene algo inesperado: "Y el número de ellos es grande como la arena del mar" (v.109), y su gloria "sobrepasa todo entendimiento" (v.89). El "infierno" del imaginario cristiano medieval no existe como destino eterno — incluso los que sufren más acaban en una gloria que excede lo que podemos comprender.',
            },
            {
              type: 'highlight_verse',
              text: 'Y así vimos la gloria del reino telestial, que sobrepasa todo entendimiento; y ningún hombre sabe, excepto aquel a quien Dios lo ha revelado.',
              reference: 'Doctrina y Convenios 76:89–90',
            },
            {
              type: 'doctrine_box',
              title: 'Los grados dentro del reino celestial',
              body: 'DyC 131:1-4 (revelado en 1843) añade un detalle crucial: dentro del reino celestial hay tres grados. El más alto requiere el matrimonio eterno — el sellamiento en el templo. "En el grado más alto del reino celestial se obtiene el más alto grado de gloria. En el grado más alto existe el matrimonio eterno." Esto explica por qué el templo no es simplemente "opcional" para los miembros avanzados — es la puerta al más alto grado del reino más alto.',
            },
            {
              type: 'quiz',
              quizType: 'true_false',
              question: 'Según DyC 76:89, la gloria del reino telestial "sobrepasa todo entendimiento."',
              answer: true,
              explanation: 'Correcto. Incluso el reino más bajo de gloria excede lo que la mente mortal puede comprender plenamente. El texto es DyC 76:89: "la gloria del reino telestial sobrepasa todo entendimiento." Esto hace imposible el argumento de que "el telestial es básicamente el infierno" — el texto lo contradice directamente.',
            },
            {
              type: 'quiz',
              quizType: 'fill_blank',
              question: 'DyC 76:62 dice que en el reino celestial el _____ y el _____ moran con sus habitantes.',
              answer: 'Padre / Hijo',
              explanation: 'En el reino celestial, la Presencia plena de Dios el Padre y Jesucristo está con los habitantes. En el terrestre, solo Cristo visita (v.77). En el telestial, el Espíritu Santo administra (v.86) pero no el Padre ni el Hijo directamente.',
            },
          ],
        },
      ],
    },
    {
      id: 's6',
      title: 'Cristo — Redentor de Mundos Sin Número',
      intro: {
        romanNumeral: 'VI',
        title: 'Cristo — Redentor de Mundos Sin Número',
        paragraphs: [
          'DyC 76 contiene uno de los enunciados cosmológicos más audaces del canon restaurado: Cristo no es solo el Redentor de este planeta — es el Redentor de "mundos sin número." Esta declaración, tomada junto con Moisés 1:33-35 y DyC 76:24, cambia la escala de la Expiación. No es un evento local — es un acontecimiento cósmico.',
        ],
      },
      topics: [
        {
          id: 't6',
          title: 'La Escala Cósmica de la Expiación',
          blocks: [
            {
              type: 'media_slot',
              kind: 'image',
              src: undefined,
              alt: 'Cristo como luz en el cosmos — mundos sin número brillando alrededor de su figura',
              caption: '"El Creador de mundos sin número, el Dios de todo" — DyC 76:24',
              contextCard: {
                label: 'vision-dc76-christ-redeemer-cosmos',
              },
            },
            {
              type: 'highlight_verse',
              text: 'Que por él y a través de él y de él se crearon y se hicieron los mundos, y los moradores de los mismos son engendrados hijos e hijas a Dios; y que él es el primogénito de entre muchos hermanos y el Redentor y Salvador de todos ellos.',
              reference: 'Doctrina y Convenios 76:24',
            },
            {
              type: 'highlight_verse',
              text: 'Y mundos sin número he creado; y también los he creado a ellos para mí mismo; y en ningún lugar de todo esto he dicho fin, pues no hay ningún fin para mis obras, ni tampoco a mis palabras.',
              reference: 'Moisés 1:33',
            },
            {
              type: 'deep_dive',
              badge: 'Teología',
              title: '¿Qué significa que Cristo redimió "mundos sin número"?',
              paragraphs: [
                'La implicación directa es que la Expiación no fue un acontecimiento limitado a la Tierra. Un ser de capacidad finita no podría expiar por infinitos mundos — pero el Señor Jesucristo, como Ser divino con poder eterno, realizó una Expiación cuyo alcance es infinito (2 Nefi 9:7: "una expiación infinita e eterna").',
                'Esto conecta con la doctrina de la Gloria de Dios: "porque esta es mi obra y mi gloria — llevar a cabo la inmortalidad y la vida eterna del hombre" (Moisés 1:39). Si hay mundos sin número con hijos de Dios, entonces la obra de Dios es igualmente sin número — y la Expiación es el instrumento de esa obra.',
                'Los estudiosos no han especulado extensamente sobre "¿cómo funciona la Expiación en otros mundos?" — el texto nos dice el hecho pero no los mecanismos. Lo que sí queda claro es que Cristo no es simplemente el Dios de la Tierra o de Israel. Es el Redentor del cosmos entero.',
                'Esta perspectiva cambia cómo vemos el sacrificio de Getsemaní y Gólgota: no fue solo para los 8 mil millones de personas que han vivido en la Tierra, sino para un número que "sobrepasa todo entendimiento" — la familia eterna de Dios en toda su extensión cósmica.',
              ],
            },
            {
              type: 'doctrine_box',
              title: 'La cosmología de la Restauración vs. la cosmología cristiana tradicional',
              body: 'El cristianismo tradicional coloca a la Tierra como el centro del drama cósmico: Dios creó el universo, colocó a la humanidad en la Tierra, el pecado corrompió esa humanidad, Cristo vino a redimirla. La escala es planetaria. La Restauración expande radicalmente ese marco: hay "mundos sin número," todos creados por y para Cristo, todos con hijos de Dios, todos dentro del alcance de la Expiación. La escala es cósmica e infinita. Esto no hace la Expiación menos personal — la hace más personal, porque el Ser que la realizó tenía poder suficiente para hacerlo por todos, incluyendo específicamente a ti.',
            },
            {
              type: 'leader_quote',
              quote: 'La expiación de Jesucristo fue, es, y siempre será infinita. No hay pecado demasiado grande, no hay herida demasiado profunda, no hay vida demasiado destruida para quedar fuera de su alcance. Y si el mismo Cristo redimió mundos sin número, ciertamente tiene poder para redimirte a ti.',
              name: 'Neal A. Maxwell',
              role: '"The Infinite Atonement", BYU Devotional, 1978 (trad.)',
            },
            {
              type: 'quiz',
              quizType: 'true_false',
              question: 'DyC 76 enseña que Jesucristo es el Redentor de múltiples mundos, no solo de la Tierra.',
              answer: true,
              explanation: 'Correcto. DyC 76:24 declara que Cristo es "el Redentor y Salvador de todos ellos" — refiriéndose a los moradores de mundos sin número. Moisés 1:33 confirma que Dios creó "mundos sin número." Esta es una de las doctrinas más distintivas y audaces de la Restauración.',
            },
            {
              type: 'quiz',
              quizType: 'fill_blank',
              question: 'Según Moisés 1:39, la obra y la gloria de Dios es llevar a cabo la _____ y la _____ del hombre.',
              answer: 'inmortalidad / vida eterna',
              explanation: '"Esta es mi obra y mi gloria — llevar a cabo la inmortalidad y la vida eterna del hombre." (Moisés 1:39). Este versículo define el propósito completo de la creación, la Expiación, y los reinos de gloria descritos en DyC 76 — todo orientado a la inmortalidad y exaltación de los hijos de Dios.',
            },
            {
              type: 'reflection',
              prompt: '¿Cómo cambia tu percepción de Cristo saber que DyC 76 lo presenta como Redentor de mundos sin número? ¿Y cómo cambia tu autocomprensión saber que ese mismo Ser infinito realizó la Expiación específicamente para ti? ¿Qué sección de DyC 76 — los reinos, los hijos de perdición, Cristo como Redentor cósmico — genera más preguntas en ti, y por qué?',
            },
          ],
        },
      ],
    },
  ],
}
