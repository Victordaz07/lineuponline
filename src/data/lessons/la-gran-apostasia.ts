import type { Lesson } from '@/types/doctrine'

export const laGranApostasia: Lesson = {
  id: 'gran-apostasia',
  moduleId: 'historia-restauracion',
  title: 'La Gran Apostasía',
  subtitle: 'Por qué la Restauración era necesaria',
  author: 'Fuentes principales: Amós 8, Hechos 3, DyC 1, James E. Talmage',
  description:
    'La apostasía general de la iglesia primitiva no fue una caída moral — fue la pérdida de la autoridad del sacerdocio y las llaves de revelación. Entender qué se perdió es entender por qué la Restauración era la única solución posible.',
  level: 'BÁSICO',
  icon: '🕯️',
  duration: 55,
  order: 2,
  status: 'PUBLISHED',
  studyBodyPlain: '',
  originalBodyPlain: '',
  previousLessonId: 'primera-vision',
  nextLessonId: 'libro-de-mormon-reliquia',
  studySections: [
    {
      id: 's1',
      title: 'Las Profecías de la Apostasía',
      intro: {
        romanNumeral: 'I',
        title: 'Las Profecías de la Apostasía',
        paragraphs: [
          'La apostasía no tomó a Dios por sorpresa. Fue profetizada siglos antes de que ocurriera — por Amós, por Isaías, por el mismo Pablo, por Pedro. Los apóstoles la advirtieron durante sus propias vidas. No fue el fracaso del plan de Dios: fue la razón por la cual una Restauración, y no simplemente una reforma, era lo que el mundo necesitaba.',
        ],
      },
      topics: [
        {
          id: 't1',
          title: 'Lo que los Profetas Vieron Venir',
          blocks: [
            {
              type: 'highlight_verse',
              text: 'He aquí, vienen días, dice el Señor Dios, en que enviaré hambre a la tierra: no hambre de pan, ni sed de agua, sino de oír las palabras del Señor. E irán errantes de mar a mar; desde el norte hasta el oriente discurrirán buscando la palabra del Señor, y no la encontrarán.',
              reference: 'Amós 8:11–12',
            },
            {
              type: 'paragraph',
              text: 'Amós profetizó una hambruna de un tipo específico: no de alimento, sino de la palabra viva del Señor. No la falta de Biblias — habría abundancia de Biblias. La falta de revelación continua, de profetas vivos, y de la voz de Dios guiando a Su pueblo. Eso es exactamente lo que ocurrió durante los siglos de la Gran Apostasía.',
            },
            {
              type: 'highlight_verse',
              text: 'Acercaos a mí este pueblo, con su boca y con sus labios me honra, pero su corazón está lejos de mí, y su temor de mí no es más que un mandamiento de hombres que les ha sido enseñado; por tanto, he aquí que nuevamente excitaré yo la admiración de este pueblo con un prodigio grande y espantoso; porque perecerá la sabiduría de sus sabios, y se desvanecerá la inteligencia de sus entendidos.',
              reference: 'Isaías 29:13–14',
            },
            {
              type: 'paragraph',
              text: 'Isaías 29:13-14 fue citado por Cristo mismo contra los fariseos (Mateo 15:8-9). Pero la profecía tiene un alcance mayor: describe un estado donde la religión se convierte en "mandamiento de hombres" — en lugar de revelación divina. La respuesta de Dios a ese estado es un "prodigio grande y espantoso" — el mismo lenguaje que José Smith usaría siglos después para describir la Restauración.',
            },
            {
              type: 'highlight_verse',
              text: 'Porque el tiempo vendrá cuando no sufrirán la sana doctrina, sino que teniendo comezón de oír, se amontonarán maestros conforme a sus propias concupiscencias, y apartarán de la verdad el oído y se volverán a las fábulas.',
              reference: '2 Timoteo 4:3–4',
            },
            {
              type: 'highlight_verse',
              text: 'Porque yo sé que después de mi partida entrarán en medio de vosotros lobos rapaces, que no perdonarán al rebaño. Y de vosotros mismos se levantarán hombres que hablen cosas perversas para arrastrar tras sí a los discípulos.',
              reference: 'Hechos 20:29–30',
            },
            {
              type: 'doctrine_box',
              title: 'Pedro predijo la Restauración, no solo la Apostasía',
              body: 'En Hechos 3:19-21, Pedro no solo advierte de la apostasía que vendría — describe su solución: "la restauración de todas las cosas." La palabra griega apocatástasis significa devolver algo a su estado original. No una reforma del sistema existente. No una mejora gradual. Una restauración completa — recuperar lo que se había perdido enteramente. Pedro sabía, por revelación, que el cielo tendría que intervenir de nuevo.',
            },
            {
              type: 'highlight_verse',
              text: 'Arrepentíos, pues, y convertíos para que sean borrados vuestros pecados; [...] a quien de cierto es necesario que el cielo reciba hasta los tiempos de la restauración de todas las cosas, de que habló Dios por boca de sus santos profetas.',
              reference: 'Hechos 3:19–21',
            },
          ],
        },
      ],
    },
    {
      id: 's2',
      title: 'Cómo Ocurrió — El Proceso Histórico',
      intro: {
        romanNumeral: 'II',
        title: 'Cómo Ocurrió — El Proceso Histórico',
        paragraphs: [
          'La apostasía no ocurrió de un día para otro. Fue un proceso gradual de décadas y siglos. Comprender ese proceso — la muerte de los apóstoles, la influencia de la filosofía griega, los concilios que redefinieron la doctrina — es esencial para entender por qué la iglesia que existía en el siglo XIX no podía simplemente reformarse para recuperar lo que se había perdido.',
        ],
      },
      topics: [
        {
          id: 't2',
          title: 'De la Iglesia Apostólica a los Concilios',
          blocks: [
            {
              type: 'timeline',
              items: [
                {
                  label: 'ca. 64–100 d.C.',
                  text: 'Muerte de los apóstoles originales: Pedro y Pablo en Roma (ca. 64-67), Santiago el Menor (62), Juan el último (ca. 100). Con ellos mueren las llaves apostólicas activas y el derecho de añadir escritura canónica.',
                  ref: 'Hechos 20:29-30',
                  color: 'gold',
                },
                {
                  label: 'Siglo II',
                  text: 'Los Padres Apostólicos comienzan a incorporar conceptos de la filosofía griega (platonismo, estoicismo) en la teología cristiana para hacer el evangelio más comprensible al mundo grecorromano.',
                  ref: 'Justino Mártir, Clemente',
                  color: 'blue',
                },
                {
                  label: '325 d.C.',
                  text: 'Concilio de Nicea: Convocado por el emperador Constantino. 318 obispos debaten y votan la naturaleza de Cristo. Se adopta el término homoousios ("de la misma sustancia") para describir la relación entre el Padre y el Hijo.',
                  ref: 'Historia eclesiástica',
                  color: 'gold',
                },
                {
                  label: '381 d.C.',
                  text: 'Concilio de Constantinopla: Se añade el Espíritu Santo a la fórmula trinitaria. La Trinidad — tres personas, una sustancia — queda definida como dogma oficial, con base en conceptos filosóficos griegos sin paralelo directo en el Nuevo Testamento.',
                  ref: 'Credo Niceno-Constantinopolitano',
                  color: 'blue',
                },
                {
                  label: '553 d.C.',
                  text: 'Segundo Concilio de Constantinopla condena la preexistencia del alma — una doctrina enseñada por Orígenes y otros Padres primitivos. El canon doctrinal se va cerrando contra enseñanzas que eran originalmente parte del pensamiento cristiano.',
                  ref: 'Historia del dogma',
                  color: 'gold',
                },
              ],
            },
            {
              type: 'doctrine_box',
              title: 'El problema de los concilios — ¿quién tiene autoridad para decidir la doctrina?',
              body: 'La Iglesia Católica, la Ortodoxa y el Protestantismo tienen perspectivas diferentes sobre qué autoridad tiene un concilio. Pero todos comparten un problema fundamental: un concilio de obispos o teólogos puede debatir, votar, y decidir la doctrina — pero eso no es lo mismo que revelación divina. Cuando 318 obispos en Nicea votaron sobre la naturaleza de Cristo, lo que produjeron fue el consenso de 318 hombres con diferentes formaciones filosóficas y presiones políticas, no una revelación del cielo. La diferencia entre consenso humano y revelación divina es exactamente la diferencia entre la apostasía y la restauración.',
            },
            {
              type: 'paragraph',
              text: 'El Concilio de Nicea fue convocado por Constantino — un emperador romano, no un profeta. Su interés era la unidad política del Imperio, no la verdad doctrinal. La facción que ganó el debate en Nicea (los seguidores de Atanasio) lo hizo por un estrecho margen y con el respaldo imperial. La facción perdedora (los arrianos, que creían que el Hijo era inferior al Padre) fue exiliada. La doctrina cristiana sobre la naturaleza de Dios quedó definida, en parte, por la política imperial del siglo IV.',
            },
          ],
        },
      ],
    },
    {
      id: 's3',
      title: 'Qué Se Perdió Exactamente',
      intro: {
        romanNumeral: 'III',
        title: 'Qué Se Perdió Exactamente',
        paragraphs: [
          'La apostasía no significa que los cristianos de los siglos II al XIX eran malas personas. Significa que la iglesia que Cristo estableció perdió elementos esenciales que no podían recuperarse sin intervención divina directa. Entender qué se perdió y cómo se perdió es la clave para entender por qué las reformas no bastaban.',
        ],
      },
      topics: [
        {
          id: 't3',
          title: 'Los Cuatro Elementos Perdidos',
          blocks: [
            {
              type: 'key_points',
              title: 'Lo que se perdió en la Apostasía — los cuatro elementos esenciales',
              points: [
                'La autoridad del sacerdocio: el poder de actuar en nombre de Dios, que solo puede conferirse por manos autorizadas — no por estudio, fe, elección congregacional, ni decreto papal',
                'Las llaves de revelación continua: el derecho de recibir revelación para guiar a la Iglesia, que pertenece a apóstoles y profetas vivos — no a concilios o teólogos',
                'Las ordenanzas completas y correctas: el bautismo (forma y autoridad), la confirmación, y las ordenanzas del templo — varias fueron alteradas (bautismo de infantes, aspersión en lugar de inmersión)',
                'La doctrina pura sobre la naturaleza de Dios: sin revelación continua, la cristología y la doctrina trinitaria se fueron moldeando por la filosofía griega hasta crear una Trinidad no respaldada por el Nuevo Testamento leído literalmente',
              ],
            },
            {
              type: 'compare_grid',
              left: {
                title: 'La Iglesia Primitiva (Nuevo Testamento)',
                items: [
                  'Dios y Cristo como seres separados (Juan 17:3, Hechos 7:55-56)',
                  'Bautismo por inmersión de adultos con fe',
                  'Apóstoles con autoridad directa de Cristo',
                  'Revelación continua a través de profetas y apóstoles',
                  'Preexistencia del alma como parte del pensamiento primitivo',
                ],
              },
              right: {
                title: 'La Iglesia Post-Apostólica (siglos III-IV)',
                items: [
                  'Trinidad: tres personas una sustancia (término filosófico griego homoousios)',
                  'Bautismo de infantes como norma universal',
                  'Sucesión apostólica sin la autoridad original',
                  'Los cánones cerrados reemplazan la revelación continua',
                  'Preexistencia condenada en el Concilio del 553 d.C.',
                ],
              },
            },
            {
              type: 'highlight_verse',
              text: 'Esteban, lleno del Espíritu Santo, puestos los ojos en el cielo, vio la gloria de Dios, y a Jesús que estaba a la diestra de Dios, y dijo: He aquí, veo los cielos abiertos, y al Hijo del Hombre que está a la diestra de Dios.',
              reference: 'Hechos 7:55–56',
            },
            {
              type: 'paragraph',
              text: 'Hechos 7:55-56 es uno de los textos más importantes sobre la naturaleza de Dios en el Nuevo Testamento. Esteban ve dos seres distintos — Dios y Jesús — en dos lugares distintos. No una sustancia en tres modos de ser. Dos seres personales separados. La doctrina de la Trinidad elaborada en Nicea no puede derivarse de este pasaje leído en sentido literal. Pero ese pasaje ya estaba en la Biblia — y fue leído a través de filtros filosóficos que alteraron su significado evidente.',
            },
            {
              type: 'leader_quote',
              quote: 'La apostasía no fue principalmente moral — fue institucional. Las personas buenas que amaban a Cristo siguieron existiendo durante la Gran Apostasía. Lo que no existía era la autoridad restaurada del sacerdocio, las llaves de las ordenanzas, y la revelación continua para guiar a la Iglesia como un todo. Una reforma podía mejorar la moralidad — solo una restauración podía devolver lo que se había perdido.',
              name: 'James E. Talmage',
              role: '"The Great Apostasy", 1909, capítulo 1 (trad.)',
            },
          ],
        },
      ],
    },
    {
      id: 's4',
      title: 'Los Padres de la Iglesia — Testigos del Declive',
      intro: {
        romanNumeral: 'IV',
        title: 'Los Padres de la Iglesia — Testigos del Declive',
        paragraphs: [
          'Una de las evidencias más poderosas de la apostasía no viene de los críticos externos del cristianismo — viene de los propios Padres de la Iglesia de los siglos II y III. Sus escritos muestran que ellos mismos eran conscientes de que algo se estaba perdiendo, que los dones espirituales habían disminuido, y que la unidad doctrinal se estaba fragmentando.',
        ],
      },
      topics: [
        {
          id: 't4',
          title: 'Lo que los Padres Primitivos Sabían y Dijeron',
          blocks: [
            {
              type: 'paragraph',
              text: 'Justino Mártir (ca. 100-165 d.C.) escribió que el Padre y el Hijo eran "numéricamente distintos" — dos seres separados. Esta era la posición del pensamiento cristiano primitivo antes de que los debates filosóficos del siglo IV introdujeran el lenguaje de la sustancia única. Justino no era un heterodoxo marginal — era uno de los apologistas más respetados del siglo II.',
            },
            {
              type: 'doctrine_box',
              title: 'Orígenes y la preexistencia — eliminada en 553 d.C.',
              body: 'Orígenes de Alejandría (185-253 d.C.) — posiblemente el teólogo más influyente de la iglesia primitiva después de Pablo — enseñó explícitamente la preexistencia del alma. Para Orígenes, las almas existían antes de nacer en cuerpos mortales y habían hecho elecciones en ese estado premortal. Esta enseñanza no fue inventada por José Smith. Existió en la teología cristiana temprana, fue debatida durante siglos, y finalmente fue condenada como herejía en el Segundo Concilio de Constantinopla en 553 d.C. — más de 500 años después de Cristo. La Restauración no introdujo una idea extraña al cristianismo. Restauró una que fue removida.',
            },
            {
              type: 'paragraph',
              text: 'Clemente de Alejandría (ca. 150-215 d.C.) describía una "gnosis" o conocimiento superior disponible a los verdaderos iniciados en Cristo — un lenguaje que recuerda las enseñanzas del templo. Tertuliano (ca. 155-240 d.C.) sostuvo que el Padre, el Hijo, y el Espíritu eran tres "personas" distintas — usando la palabra latina persona, que en el teatro romano significaba "máscara" o "rol." El lenguaje filosófico con que se describía a Dios cambió significativamente a lo largo de estos siglos.',
            },
            {
              type: 'deep_dive',
              badge: 'Apologética',
              title: 'Los dones espirituales — ¿cuándo cesaron y por qué?',
              paragraphs: [
                'En el Nuevo Testamento los dones espirituales — profecía, sanación, lenguas, revelación — eran manifestaciones comunes de la iglesia. Para el siglo III, teólogos como Crisóstomo y Agustín explicaban que estos dones habían "cesado" porque ya no eran necesarios — la Iglesia tenía la Biblia y los sacramentos.',
                'Pero esta explicación tiene un problema: ninguna escritura enseña que los dones espirituales cesarían. 1 Corintios 13:8-10 dice que cesarán "cuando lo perfecto haya llegado" — un evento que los Padres interpretaban como el establecimiento del canon bíblico, pero que en la Restauración se entiende como el Milenio y la Segunda Venida.',
                'Talmage documenta que ya en el siglo II, el montanismo — un movimiento que enfatizaba la profecía continua — fue declarado herejía. En otras palabras: el cese de los dones espirituales no fue el fin natural de algo temporal. Fue la supresión de algo que incomodaba a una institución que se estaba volviendo más jerárquica y menos pneumática.',
              ],
            },
            {
              type: 'key_points',
              title: 'Cuatro cambios documentados en los primeros tres siglos',
              points: [
                'La naturaleza de Dios: de dos seres distintos (Hechos 7:55) a una sustancia en tres personas (Nicea 325)',
                'Las ordenanzas: el bautismo por inmersión de adultos se va reemplazando por aspersión de infantes — documentado desde el siglo II',
                'La estructura: de apóstoles con autoridad apostólica directa a obispos con sucesión sin la autoridad original',
                'La revelación: de profecía activa y añadir escritura a canon cerrado y dones declarados cesantes — teológicamente necesitaban que cesaran para no desestabilizar la estructura',
              ],
            },
            {
              type: 'media_slot',
              kind: 'image',
              src: undefined,
              alt: 'Ancient stone ruins of an early Christian basilica or council hall, dramatic light through broken arches, historical atmosphere, sense of loss and passage of time',
              caption: 'Los concilios del siglo IV redefinieron doctrinas originalmente establecidas por revelación divina',
              contextCard: { year: 'Siglo IV d.C.', label: 'La doctrina redefinida por concilios' },
            },
          ],
        },
      ],
    },
    {
      id: 's5',
      title: 'Reforma vs. Restauración',
      intro: {
        romanNumeral: 'V',
        title: 'Reforma vs. Restauración',
        paragraphs: [
          'La Reforma Protestante del siglo XVI fue un movimiento valioso. Lutero, Calvino, Zwinglio, y los otros reformadores corrigieron abusos reales y devolvieron la Biblia al pueblo. Pero ninguno de ellos reclamó autoridad divina restaurada. Y sin esa autoridad, la fragmentación era inevitable — como lo demuestra el hecho de que hoy existen más de 30.000 denominaciones protestantes.',
        ],
      },
      topics: [
        {
          id: 't5',
          title: 'Por Qué la Reforma Era Necesaria Pero Insuficiente',
          blocks: [
            {
              type: 'compare_grid',
              left: {
                title: 'Lo que la Reforma podía hacer',
                items: [
                  'Corregir abusos morales y financieros del clero',
                  'Devolver la Biblia al pueblo en idiomas vernáculos',
                  'Reducir la corrupción institucional de Roma',
                  'Enfatizar la gracia sobre las obras de penitencia',
                  'Simplificar la liturgia y los sacramentos',
                ],
              },
              right: {
                title: 'Lo que solo una Restauración podía hacer',
                items: [
                  'Restaurar la autoridad del sacerdocio desde el cielo',
                  'Restaurar las llaves apostólicas y proféticas activas',
                  'Restaurar las ordenanzas con forma y autoridad correctas',
                  'Restaurar doctrinas perdidas que ningún concilio humano podía recuperar',
                  'Restaurar la revelación continua como fuente de guía divina',
                ],
              },
            },
            {
              type: 'paragraph',
              text: 'Lutero nunca reclamó ser un profeta con autoridad divina. Su reforma se basaba en sola scriptura — la Biblia como única autoridad. Esto era un paso hacia la verdad (recuperar el texto), pero no podía resolver el problema fundamental: si no hay nadie con autoridad apostólica viva para interpretar y administrar las escrituras, el resultado es 30.000 interpretaciones diferentes — cada una igualmente válida bajo el principio de sola scriptura.',
            },
            {
              type: 'deep_dive',
              badge: 'Pregunta difícil',
              title: '¿Si había personas buenas y sinceras, por qué no bastaba su sinceridad?',
              paragraphs: [
                'Esta es la pregunta que muchos hacen: si Lutero, Calvino, Wesley, y los otros reformadores eran hombres sinceros que amaban a Cristo, ¿por qué su sinceridad no era suficiente para recuperar el evangelio? La respuesta doctrinal es precisa: la autoridad del sacerdocio no se genera internamente — no puede ser producida por sinceridad, fe, o estudio. Tiene que venir del cielo.',
                'Un ejemplo bíblico: Uzza era un hombre con buenas intenciones. Cuando el arca del pacto estaba a punto de caer, extendió la mano para estabilizarla — y murió al instante (2 Samuel 6:6-7). Su intención era buena. Pero la autoridad para manejar el arca no era suya. La autoridad divina no se compra con buenas intenciones.',
                'La Gran Apostasía no fue la historia de los malvados destruyendo la iglesia. Fue la historia de personas con buenas intenciones tomando decisiones razonables sin la autoridad necesaria para hacerlas. Y el resultado acumulado de generaciones de esas decisiones razonables fue una iglesia radicalmente diferente de la que Cristo estableció.',
              ],
            },
            {
              type: 'highlight_verse',
              text: 'Llamado el decimocuarto año después del nacimiento de Cristo, el Señor se ha aparecido a José Smith Hijo, y lo ha llamado [...] para que sea mensajero de salvación, para dar a todos los hombres la plenitud del evangelio.',
              reference: 'Doctrina y Convenios 1:17–23 (paráfrasis)',
            },
            {
              type: 'leader_quote',
              quote: 'No pretendo menospreciar la bondad de aquellos hombres que trataron de reformar el cristianismo. Eran hombres de Dios en muchos sentidos. Pero ninguno de ellos tenía la autoridad que Cristo había dado a Sus apóstoles. Y sin esa autoridad, su trabajo — por sincero que fuera — no podía restaurar lo que solo el cielo podía devolver.',
              name: 'Gordon B. Hinckley',
              role: '"The Marvelous Foundation of Our Faith", Conferencia General, octubre 2002 (trad.)',
            },
          ],
        },
      ],
    },
    {
      id: 's6',
      title: 'La Dispensación de la Plenitud de los Tiempos',
      intro: {
        romanNumeral: 'VI',
        title: 'La Dispensación de la Plenitud de los Tiempos',
        paragraphs: [
          'Entender la apostasía hace que la Restauración sea inevitable. Si la autoridad del sacerdocio se perdió y no puede auto-generarse, la única forma de recuperarla es que regrese del cielo. Eso es exactamente lo que ocurrió. Y el resultado no es una iglesia más — es la "dispensación de la plenitud de los tiempos" que Pablo profetizó: el momento en que Dios reúne todas las dispensaciones anteriores en una última y definitiva antes de la Segunda Venida.',
        ],
      },
      topics: [
        {
          id: 't6',
          title: 'La Restauración como Cumplimiento Profético',
          blocks: [
            {
              type: 'highlight_verse',
              text: 'Para que en la dispensación del cumplimiento de los tiempos, él reúna todas las cosas en Cristo, tanto las que están en los cielos como las que están en la tierra.',
              reference: 'Efesios 1:10',
            },
            {
              type: 'paragraph',
              text: 'Pablo describe una "dispensación del cumplimiento de los tiempos" — un período en que Dios reunirá todo en Cristo. Cada dispensación anterior restauró algo: Adán, Enoc, Noé, Abraham, Moisés, Cristo — cada una añadió llaves, ordenanzas, y verdades. La dispensación de la plenitud no añade una más: las recoge todas, combina todas las llaves de todas las dispensaciones, y prepara la tierra para la Segunda Venida. José Smith recibió de cada dispensación anterior.',
            },
            {
              type: 'timeline',
              items: [
                {
                  label: '1820',
                  text: 'Primera Visión — apertura de la dispensación; el Padre y el Hijo se aparecen a José Smith. La naturaleza de Dios clarificada de nuevo.',
                  ref: 'JS—H 1:17',
                  color: 'gold',
                },
                {
                  label: '1829',
                  text: 'Juan el Bautista restaura el Sacerdocio Aarónico; Pedro, Santiago y Juan restauran el Sacerdocio de Melquisedec.',
                  ref: 'DyC 13; 27:12',
                  color: 'blue',
                },
                {
                  label: '1830',
                  text: 'Organización de la Iglesia, 6 de abril. El Libro de Mormón publicado. DyC 1 declara que el evangelio "ha de ir a toda criatura".',
                  ref: 'DyC 1; 21',
                  color: 'gold',
                },
                {
                  label: '1836',
                  text: 'Templo de Kirtland dedicado. Moisés, Elías y Elías restauran las llaves de la congregación de Israel, del evangelio de Abraham, y del poder sellador del templo.',
                  ref: 'DyC 110',
                  color: 'blue',
                },
                {
                  label: 'Hoy',
                  text: 'La Iglesia con autoridad y ordenanzas completas en todos los continentes — preparando la Segunda Venida con templos, misiones, y trabajo por los muertos.',
                  ref: 'DyC 1:30',
                  color: 'gold',
                },
              ],
            },
            {
              type: 'media_slot',
              kind: 'image',
              src: undefined,
              alt: 'The Sacred Grove in upstate New York, dappled spring morning light through tall trees, peaceful and sacred atmosphere, soft mist on the ground',
              caption: 'El Bosquecillo Sagrado, 1820 — apertura de la dispensación de la plenitud de los tiempos',
              contextCard: { year: '1820', place: 'Manchester, Nueva York', label: 'La Restauración comienza' },
            },
            {
              type: 'quiz',
              id: 'q-apost-nicea',
              question: {
                kind: 'true_false',
                statement: 'El Concilio de Nicea (325 d.C.) fue convocado por el apóstol principal de la iglesia para aclarar doctrina por revelación divina.',
                correctAnswer: false,
                explanation: 'El Concilio de Nicea fue convocado por el emperador romano Constantino, cuyo interés principal era la unidad política del Imperio. Fue una asamblea de obispos que debatieron y votaron la doctrina — no un concilio presidido por un profeta con revelación directa.',
              },
            },
            {
              type: 'quiz',
              id: 'q-apost-reforma',
              question: {
                kind: 'fill_blank',
                prompt: 'La razón principal por la que la Reforma Protestante no podía restaurar el evangelio es que ningún reformador...',
                options: [
                  'amaba sinceramente a Cristo',
                  'reclamó tener autoridad del sacerdocio restaurada desde el cielo',
                  'tenía acceso a las Escrituras en idiomas modernos',
                ],
                correctIndex: 1,
              },
            },
            {
              type: 'reflection',
              prompt: '¿Qué diferencia hace en tu vida diaria saber que perteneces a una iglesia con autoridad restaurada del sacerdocio? ¿Cómo cambia tu relación con las ordenanzas que has recibido — bautismo, confirmación, endowment, sellamiento — saber que provienen de una cadena que llegó del cielo, no de una tradición humana? ¿Cómo explicarías la diferencia entre la apostasía y la Restauración a alguien que nunca ha escuchado esta doctrina?',
            },
          ],
        },
      ],
    },
  ],
}
