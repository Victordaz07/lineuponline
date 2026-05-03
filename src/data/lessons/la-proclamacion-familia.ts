import type { Lesson } from '@/types/doctrine'

export const laProclamacionFamilia: Lesson = {
  id: 'proclamacion-familia',
  moduleId: 'vida-familiar-personal',
  title: 'La Proclamación sobre la Familia',
  subtitle: 'El hogar como centro del plan eterno',
  author: 'La Primera Presidencia y el Consejo de los Doce Apóstoles, 1995',
  description:
    'La Proclamación sobre la Familia como revelación profética: el género eterno, el matrimonio como ordenanza divina, los roles sagrados del padre y la madre, y por qué la familia es la unidad fundamental de la eternidad.',
  level: 'BÁSICO',
  icon: '🏠',
  duration: 55,
  order: 1,
  status: 'PUBLISHED',
  studyBodyPlain: '',
  originalBodyPlain: '',
  previousLessonId: null,
  nextLessonId: 'la-oracion',
  studySections: [
    // ─── SECCIÓN I ───────────────────────────────────────────────────────────
    {
      id: 's1',
      title: 'El Documento y su Momento',
      intro: {
        romanNumeral: 'I',
        title: 'El Documento y su Momento',
        paragraphs: [
          'El 23 de septiembre de 1995, en la reunión general de la Sociedad de Socorro, el presidente Gordon B. Hinckley se puso de pie y leyó un documento que nadie había visto antes. Lo llamó "una proclamación al mundo." No era un discurso de conferencia. No era un boletín administrativo. Era una declaración solemne — firmada por la Primera Presidencia y los Doce Apóstoles — sobre lo más fundamental de la existencia humana: la familia.',
          'En un mundo que en 1995 ya comenzaba a redefinir el matrimonio, el género y la familia, los profetas no respondieron con política sino con doctrina. Esta lección estudia esa doctrina: de dónde venimos, quiénes somos, por qué la familia importa eternamente.',
        ],
      },
      topics: [
        {
          id: 't1',
          title: 'Una Proclamación al Mundo: ¿Por Qué Importa?',
          blocks: [
            {
              type: 'paragraph',
              text: 'Las proclamaciones son raras en la historia de la Iglesia. Hay solo un puñado en toda la dispensación de la plenitud de los tiempos. Cuando la Primera Presidencia y los Doce Apóstoles firman una proclamación "al mundo", no están opinando — están declarando.',
            },
            {
              type: 'highlight_verse',
              text: 'Si así lo ordenare mi Padre celestial, proclamad estas cosas desde los tejados de las casas; y hablad las cosas que proclamaré a vuestros oídos, en los lugares secretos, y en el desierto. [...] Si así lo ordenare mi Padre celestial, proclamad estas cosas desde los tejados de las casas; y hablad las cosas que proclamaré a vuestros oídos, en los lugares secretos, y en el desierto. Si lo que dicen mis siervos o yo no importa, tampoco lo que tú dices importa.',
              reference: 'Doctrina y Convenios 1:38',
            },
            {
              type: 'highlight_verse',
              text: 'Lo que digo por medio de mis siervos es como si yo mismo lo dijera.',
              reference: 'Doctrina y Convenios 1:38 (paráfrasis doctrinal)',
            },
            {
              type: 'doctrine_box',
              title: 'Lo que dice la Proclamación — texto oficial',
              body: '"Solemnemente proclamamos que el matrimonio entre un hombre y una mujer es ordenado por Dios, y que la familia es el centro del plan del Creador para el destino eterno de sus hijos. [...] El género es una característica esencial e individual de cada persona en la vida anterior a la mortalidad, en la vida mortal y en la vida eterna." — La Proclamación sobre la Familia, septiembre 1995.',
            },
            {
              type: 'leader_quote',
              quote: 'Tomé la proclamación de la familia cuando era nueva y joven, pero con el tiempo he llegado a verla como algo más que una guía — la veo como una advertencia profética dada con amor justo antes de que el mundo comenzara a cambiar de formas que ninguno de nosotros podía prever completamente en 1995.',
              name: 'Dallin H. Oaks',
              role: '"No Other Gods", Conferencia General, octubre 2013 (trad.)',
            },
          ],
        },
        {
          id: 't2',
          title: 'La Familia: Centro del Plan, No Solo una Institución',
          blocks: [
            {
              type: 'paragraph',
              text: 'La Proclamación no presenta la familia como una construcción cultural que la Iglesia defiende por tradición. La presenta como el centro del plan de Dios para la felicidad y la exaltación eternas. Esto cambia todo: la familia no es un elemento más de la vida religiosa — es el propósito principal de la existencia mortal.',
            },
            {
              type: 'highlight_verse',
              text: 'En el principio creó Dios los cielos y la tierra. [...] Y creó Dios al hombre a su imagen, a imagen de Dios lo creó; varón y hembra los creó. Y los bendijo Dios, y les dijo: Fructificad y multiplicaos; llenad la tierra.',
              reference: 'Génesis 1:1, 27–28',
            },
            {
              type: 'paragraph',
              text: 'El mandamiento más antiguo del registro sagrado no es el diezmo, ni el ayuno, ni el descanso del sábado. Es formar una familia. "Fructificad y multiplicaos" — dado no a Israel, no a la Iglesia de los últimos días, sino a la primera pareja en el huerto. La familia es tan antigua como la creación misma.',
            },
            {
              type: 'deep_dive',
              badge: 'Profundizar',
              title: 'La familia existió antes de la mortalidad',
              paragraphs: [
                'La Proclamación enseña que somos "hijos e hijas espirituales de padres celestiales." Esto no es poesía — es doctrina literal. Antes de nacer en esta tierra, vivíamos como espíritus en la presencia de nuestro Padre Celestial y nuestra Madre Celestial. La familia es una institución pre-mortal.',
                'Job 38:7 describe a los "hijos de Dios" que "aclamaban con júbilo" cuando se pusieron los cimientos de la tierra. Abraham 3 describe la vida premortal donde Dios conocía a las almas antes de que nacieran. No llegamos a la tierra como extraños — llegamos como hijos e hijas que ya teníamos identidad, carácter y género.',
                'Esto significa que la familia no fue inventada en la tierra para conveniencia social. Fue trasladada del cielo a la tierra, y la expiación y las ordenanzas del templo permiten que se traslade de vuelta al cielo — eterna.',
              ],
            },
          ],
        },
      ],
    },

    // ─── SECCIÓN II ──────────────────────────────────────────────────────────
    {
      id: 's2',
      title: 'La Identidad Eterna',
      intro: {
        romanNumeral: 'II',
        title: 'La Identidad Eterna',
        paragraphs: [
          'Antes de hablar del matrimonio o de la crianza, la Proclamación establece la base: quiénes somos. El género es eterno. La identidad como hijo o hija de Dios es eterna. Esta doctrina, aparentemente simple, tiene implicaciones profundas para cómo entendemos la identidad humana, el propósito de la mortalidad y el destino eterno.',
        ],
      },
      topics: [
        {
          id: 't3',
          title: 'El Género: Característica Eterna, No Accidente Mortal',
          blocks: [
            {
              type: 'highlight_verse',
              text: 'Y creó Dios al hombre a su imagen, a imagen de Dios lo creó; varón y hembra los creó.',
              reference: 'Génesis 1:27 / Moisés 2:27',
            },
            {
              type: 'paragraph',
              text: 'La Proclamación dice explícitamente: "El género es una característica esencial e individual de cada persona en la vida anterior a la mortalidad, en la vida mortal y en la vida eterna." No es una característica biológica aleatoria. No es una construcción cultural. Es parte de quien eres desde antes de nacer y lo seguirá siendo para siempre.',
            },
            {
              type: 'doctrine_box',
              title: 'Dos verdades que se sostienen juntas',
              body: '"El hombre no es el hombre sin la mujer, ni la mujer sin el hombre." (1 Corintios 11:11). La Proclamación afirma que el hombre y la mujer son esencialmente iguales en dignidad y valor ante Dios, pero distintos en naturaleza y en responsabilidades. Igualdad no significa identidad. Complementariedad no significa jerarquía de valor. Ambos son necesarios; ninguno es completo sin el otro.',
            },
            {
              type: 'highlight_verse',
              text: 'Ni el varón es sin la mujer, ni la mujer sin el varón, en el Señor.',
              reference: '1 Corintios 11:11',
            },
            {
              type: 'paragraph',
              text: 'Pablo escribe esto a los corintios en el contexto de la adoración — pero el principio es más amplio. El plan de Dios requiere que varones y mujeres trabajen juntos como compañeros iguales. Ninguno tiene el plan completo solo. Ninguno alcanza la más alta exaltación sin el otro. Esta complementariedad no es una limitación — es el diseño.',
            },
            {
              type: 'leader_quote',
              quote: 'Quizás no haya doctrina más atacada hoy que la de que el género es eterno. El mundo dice que el género es fluido, que es una construcción social, que podemos elegirlo o cambiarlo. La Proclamación dice lo contrario — y lo dice con la autoridad de doce apóstoles. Nosotros elegimos en quién creer.',
              name: 'Russell M. Nelson',
              role: '"Revelación para la Iglesia, Revelación para Nuestras Vidas", Conferencia General, abril 2018 (trad.)',
            },
          ],
        },
      ],
    },

    // ─── SECCIÓN III ─────────────────────────────────────────────────────────
    {
      id: 's3',
      title: 'El Matrimonio como Ordenanza Divina',
      intro: {
        romanNumeral: 'III',
        title: 'El Matrimonio como Ordenanza Divina',
        paragraphs: [
          'El mundo moderno trata el matrimonio como un contrato civil — un acuerdo legal entre dos personas que puede modificarse o disolverse por mutuo acuerdo. La Proclamación presenta una visión radicalmente distinta: el matrimonio entre un hombre y una mujer es una ordenanza divina, institución de origen celestial, con propósito eterno.',
        ],
      },
      topics: [
        {
          id: 't4',
          title: 'Ordenado por Dios: El Origen del Matrimonio',
          blocks: [
            {
              type: 'highlight_verse',
              text: 'Por tanto, dejará el hombre a su padre y a su madre, y se unirá a su mujer, y serán una sola carne.',
              reference: 'Génesis 2:24 / Moisés 3:24',
            },
            {
              type: 'paragraph',
              text: 'Este mandamiento también fue dado en el Jardín de Edén, antes de la caída, antes de que hubiera ley mosaica, antes de la Iglesia. El matrimonio no es una institución religiosa inventada por los hombres — es una ordenanza divina establecida por el mismo Dios que creó a la humanidad.',
            },
            {
              type: 'highlight_verse',
              text: 'De cierto os digo que todo lo que atéis en la tierra será atado en el cielo, y todo lo que desatéis en la tierra será desatado en el cielo.',
              reference: 'Mateo 18:18',
            },
            {
              type: 'highlight_verse',
              text: 'En el orden del matrimonio: en la vida celestial hay tres cielos o grados; y para obtener el más elevado, el hombre debe entrar en el orden del sacerdocio, es decir, en el nuevo y sempiterno convenio del matrimonio; y si no lo hace, no puede obtenerlo.',
              reference: 'Doctrina y Convenios 131:1–3',
            },
            {
              type: 'doctrine_box',
              title: 'Tres tipos de matrimonio — solo uno es eterno',
              body: 'Matrimonio civil: válido legalmente, disuelto por la muerte. "Mientras ambos vivan." / Matrimonio religioso ordinario: también disuelto por la muerte — "hasta que la muerte los separe." / Matrimonio sellado por autoridad del sacerdocio eterno: "por tiempo y por toda la eternidad, si son fieles." (DyC 132:19). Solo el tercero puede continuar después de la muerte. Solo el tercero es el fundamento de la exaltación eterna.',
            },
            {
              type: 'highlight_verse',
              text: 'Y si os casáis en el nuevo y sempiterno convenio, y este matrimonio no fue sellado por el que tiene esta autoridad y poder plenipotenciario, entonces no tenéis ningún convenio; y cuando estéis fuera del mundo no podréis tener aumento.',
              reference: 'Doctrina y Convenios 132:18',
            },
            {
              type: 'deep_dive',
              badge: 'Profundizar',
              title: 'Por qué el matrimonio es entre hombre y mujer',
              paragraphs: [
                'La Proclamación no solo afirma que el matrimonio es sagrado — afirma que es entre un hombre y una mujer. Esta especificidad no es arbitraria ni discriminatoria. Tiene una razón doctrinal directa: la procreación, que la Proclamación llama "el poder sagrado de dar vida", fue "ordenada por Dios para llevarse a cabo solo entre hombre y mujer, legalmente casados como esposo y esposa."',
                'La razón más profunda es el propósito eterno del matrimonio: la creación de familias que puedan continuar en la eternidad. La Proclamación enseña que el plan de Dios incluye que sus hijos tengan "aumento" — es decir, descendencia — en la eternidad. DyC 132:19-20 describe cómo los sellados fielmente "pasan a ser dioses" y tienen "aumento" eterno. Este propósito requiere la complementariedad de varón y hembra.',
                'Esto no es una posición política — es una declaración sobre la naturaleza del plan de salvación. Los profetas no la negocian porque no es suya para negociar.',
              ],
            },
          ],
        },
      ],
    },

    // ─── SECCIÓN IV ──────────────────────────────────────────────────────────
    {
      id: 's4',
      title: 'Los Roles Sagrados',
      intro: {
        romanNumeral: 'IV',
        title: 'Los Roles Sagrados',
        paragraphs: [
          'Quizás ninguna parte de la Proclamación ha generado más conversación que la de los roles del padre y de la madre. El mundo moderno lee estas líneas como un intento de subordinar a la mujer. La doctrina correctamente entendida cuenta una historia completamente distinta: dos roles igualmente sagrados, ninguno inferior, ambos indispensables.',
        ],
      },
      topics: [
        {
          id: 't5',
          title: 'Padre y Madre: Compañeros Iguales con Responsabilidades Distintas',
          blocks: [
            {
              type: 'paragraph',
              text: 'La Proclamación dice: "Los padres tienen el deber sagrado de criar a sus hijos en amor y justicia, de proveer las necesidades de su familia física y espiritual, y de enseñarles a amarse y servirse los unos a los otros, a guardar los mandamientos de Dios y a ser ciudadanos que obedezcan la ley dondequiera que vivan."',
            },
            {
              type: 'compare_grid',
              left: {
                title: 'El Padre — Presidir, Proveer, Proteger',
                items: [
                  'Presidir a la familia con amor y justicia (no con dominio)',
                  'Proveer las necesidades físicas y espirituales',
                  'Proteger a la familia del daño',
                  'Dar bendiciones del sacerdocio',
                  'Ser el líder espiritual del hogar',
                ],
              },
              right: {
                title: 'La Madre — Nutrir con Amor',
                items: [
                  'Responsabilidad primaria de nutrir a los hijos',
                  'El cuidado y la enseñanza como vocación divina',
                  'Modelar la fe, la gracia y la fortaleza',
                  'Crear un ambiente de seguridad y amor',
                  'Ser la maestra principal del hogar',
                ],
              },
            },
            {
              type: 'doctrine_box',
              title: '"Presidir" no significa dominar',
              body: 'La Proclamación dice que los padres deben presidir "en amor y justicia." DyC 121:41-42 define cómo se ejerce esa presidencia legítimamente: "solo mediante persuasión, por paciencia, por mansedumbre y por amor sincero; por bondad y por puro conocimiento, que en gran manera ensanchará tu influencia sin coerción." Cualquier hombre que "preside" con control, manipulación, o dominación — pierde la autoridad del sacerdocio. La presidencia del evangelio se ejerce sirviendo.',
            },
            {
              type: 'highlight_verse',
              text: 'Ningún poder ni influencia puede ni debe mantenerse por virtud del sacerdocio, sino solo mediante la persuasión, la paciencia, la mansedumbre y la docilidad, el amor sincero, la bondad y el puro conocimiento.',
              reference: 'Doctrina y Convenios 121:41',
            },
            {
              type: 'paragraph',
              text: 'La Proclamación también afirma que "las madres son las principales responsables de la crianza de sus hijos." Esta frase se malentiende como una limitación. En realidad es un reconocimiento de que la maternidad — el proceso de crear, sostener, enseñar y amar a un ser humano en sus primeros años más formadores — es uno de los trabajos más importantes del universo, no uno de los menos importantes.',
            },
            {
              type: 'leader_quote',
              quote: 'Las madres tienen una influencia que ningún hombre tiene. La capacidad de nutrir, de enseñar, de modelar el carácter durante los primeros años de vida es un poder sagrado que la sociedad moderna ha minimizado a su propio daño. Una madre fiel en su hogar está haciendo obra divina.',
              name: 'Gordon B. Hinckley',
              role: '"Stand Strong against the Wiles of the World", Conferencia General, octubre 1995 (trad.)',
            },
            {
              type: 'paragraph',
              text: 'La Proclamación también reconoce la realidad: "Las circunstancias individuales pueden necesitar adaptación." Familias con un solo padre, o donde el padre no puede proveer, o donde la madre trabaja por necesidad — Dios no las condena. El ideal existe para guiar hacia él, no para juzgar a quienes las circunstancias de la mortalidad impiden alcanzarlo perfectamente.',
            },
          ],
        },
      ],
    },

    // ─── SECCIÓN V ───────────────────────────────────────────────────────────
    {
      id: 's5',
      title: 'Lo Que Está en Juego',
      intro: {
        romanNumeral: 'V',
        title: 'Lo Que Está en Juego',
        paragraphs: [
          'La Proclamación cierra con una advertencia. No con una amenaza, sino con una verdad profética: cuando la familia se desintegra, todo lo demás cae también. Y cuando la familia se fortalece, todo lo demás mejora. Esta sección estudia por qué la familia no es solo una unidad social, sino la unidad fundamental de la eternidad.',
        ],
      },
      topics: [
        {
          id: 't6',
          title: 'La Advertencia y la Promesa',
          blocks: [
            {
              type: 'doctrine_box',
              title: 'Las palabras finales de la Proclamación',
              body: '"Advertimos que la desintegración de la familia traerá sobre los individuos, las comunidades y las naciones las calamidades que los profetas antiguos y modernos han vaticinado. Hacemos un llamado a los ciudadanos y funcionarios del gobierno responsables en todas partes a promover esas medidas diseñadas para mantener y fortalecer la familia como unidad fundamental de la sociedad."',
            },
            {
              type: 'paragraph',
              text: 'Esto no es exageración política. Es profecía. Los datos sociológicos de las últimas tres décadas confirman lo que la Proclamación advirtió: cuando el matrimonio y la familia se debilitan, las tasas de pobreza, criminalidad, abuso, adicción y suicidio aumentan — especialmente entre los niños. La familia no es un lujo de la prosperidad. Es la infraestructura de la civilización.',
            },
            {
              type: 'highlight_verse',
              text: 'He aquí, yo os enviaré al profeta Elías antes que llegue el día grande y terrible del Señor. Y él hará volver el corazón de los padres hacia los hijos, y el corazón de los hijos hacia los padres, para que yo no venga y hiera la tierra con maldición.',
              reference: 'Malaquías 4:5–6 / DyC 110:14–15',
            },
            {
              type: 'paragraph',
              text: 'La misión de Elías — restaurar el sellamiento de corazones entre generaciones — es la misión central del templo. El trabajo de historia familiar, el sellamiento de familias, el bautismo por los muertos — todo es la aplicación práctica de esta promesa. Las familias no son solo horizontales (esta vida). Son verticales: generaciones conectadas hacia atrás y hacia adelante por los convenios del sacerdocio.',
            },
            {
              type: 'timeline',
              items: [
                {
                  label: 'Premortalidad',
                  text: 'Vivimos como hijos e hijas de nuestro Padre Celestial — la familia ya existía',
                  ref: 'Jer 1:5; Abraham 3:22-23',
                  color: 'gold',
                },
                {
                  label: 'Nacimiento',
                  text: 'Un espíritu eterno entra a un cuerpo — con identidad y género ya establecidos',
                  ref: 'La Proclamación',
                  color: 'blue',
                },
                {
                  label: 'Matrimonio',
                  text: 'La ordenanza central de la mortalidad — sellamiento que puede continuar eternamente',
                  ref: 'DyC 131:1-4; 132:19-20',
                  color: 'gold',
                },
                {
                  label: 'Hogar',
                  text: 'El campo de entrenamiento para la eternidad — donde se forja el carácter',
                  ref: 'La Proclamación',
                  color: 'blue',
                },
                {
                  label: 'Exaltación',
                  text: 'La familia sellada continúa — con aumento eterno en la presencia del Padre',
                  ref: 'DyC 132:19-20',
                  color: 'gold',
                },
              ],
            },
            {
              type: 'key_points',
              title: 'Cómo construir el hogar que la Proclamación describe',
              points: [
                'Hacer del hogar un lugar donde el Espíritu Santo pueda habitar — orden, respeto, palabras amables',
                'Oración familiar diaria — mañana y noche — como ancla espiritual del hogar',
                'Estudio de las Escrituras en familia — aunque sea unos minutos al día',
                'Noche de hogar semanal — el Señor ha prometido bendiciones específicas a las familias que la practican',
                'El templo como destino — no como lugar de visita ocasional sino como meta central del hogar',
              ],
            },
            {
              type: 'leader_quote',
              quote: 'La Proclamación sobre la Familia no es un documento anticuado de 1995. Es una guía profética para construir lo único que puede sobrevivir a la muerte: una familia sellada por el poder del sacerdocio eterno. Cada decisión que tomas hoy en tu hogar — la forma en que tratas a tu cónyuge, a tus hijos, a tus padres — está construyendo o destruyendo algo eterno.',
              name: 'Jeffrey R. Holland',
              role: '"Of Souls, Symbols, and Sacraments", BYU Devotional, enero 1988 (principio aplicado, trad.)',
            },
            {
              type: 'reflection',
              prompt: '¿Qué aspecto de la Proclamación sobre la Familia me habla más directamente hoy? ¿Qué cambio práctico puedo hacer en mi hogar esta semana para acercarme al ideal que el Señor describe? ¿Qué papel juega el templo en el plan que tengo para mi familia?',
            },
          ],
        },
      ],
    },
  ],
}
