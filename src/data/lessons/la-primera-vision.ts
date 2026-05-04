import type { Lesson } from '@/types/doctrine'

export const laPrimeraVision: Lesson = {
  id: 'primera-vision',
  moduleId: 'historia-restauracion',
  title: 'La Primera Visión',
  subtitle: 'La apertura de la última dispensación',
  author: 'José Smith — Historia 1; cinco relatos; Holland, Hinckley, Talmage',
  description:
    'La primavera de 1820: un adolescente de 14 años entra a un bosque con una pregunta y sale con el Padre y el Hijo. Quién era José antes del bosque, el contexto del Segundo Gran Despertar, lo que ocurrió ese mañana, los cinco relatos y por qué sus diferencias confirman autenticidad, y las doctrinas que esa visión cambió para siempre.',
  level: 'INTERMEDIO',
  icon: '✨',
  duration: 90,
  order: 1,
  status: 'PUBLISHED',
  studyBodyPlain: '',
  originalBodyPlain: '',
  previousLessonId: null,
  nextLessonId: 'gran-apostasia',
  studySections: [
    {
      id: 's1',
      title: 'Quién Era José — El Joven Improbable',
      intro: {
        romanNumeral: 'I',
        title: 'Quién Era José — El Joven Improbable',
        paragraphs: [
          'Dios no eligió a un erudito, a un clérigo establecido, ni a un hombre de influencia. Eligió a un adolescente sin educación formal, de una familia pobre que había cambiado de estado tres veces en diez años. Entender quién era José antes del bosque es entender por qué lo que salió de ese bosque no pudo haber sido fabricado.',
        ],
      },
      topics: [
        {
          id: 't1',
          title: 'Una Familia Que Buscaba a Dios',
          blocks: [
            {
              type: 'highlight_verse',
              text: 'Nació el 23 de diciembre de 1805 en la aldea de Sharon, condado de Windsor, estado de Vermont. [...] En el año de nuestro Señor 1820, mi padre Joseph Smith, padre, era un labrador de Vermont. En ese año, mi familia se trasladó al condado de Ontario, estado de Nueva York.',
              reference: 'José Smith — Historia 1:3',
            },
            {
              type: 'paragraph',
              text: 'La familia Smith era pobre por las razones más dignas: la tierra de Vermont no daba suficiente, el ginseng que cosecharon fue robado en el viaje al mercado, y las malas temporadas se acumulaban. Joseph Smith padre era un hombre de carácter profundo y honesto — tenía visiones y sueños proféticos documentados por su esposa Lucy — pero nunca encontró una iglesia que le convenciera del todo. Lucy Mack Smith, la madre, era devota, inteligente, y de fe tenaz. Cuatro de sus hijos — Hyrum, Samuel Harrison, Sophronia, y Lucy — eventualmente se unieron a la Iglesia Presbiteriana. José no pudo.',
            },
            {
              type: 'highlight_verse',
              text: 'Mi padre era proselyto a la fe Presbiteriana, y cuatro de sus miembros se unieron a esa iglesia, a saber, mi madre Lucy; mis hermanos Hyrum y Samuel Harrison; y mi hermana Sophronia. Durante este tiempo de gran agitación religiosa, mi mente estuvo seriamente afectada por los temas de la religión.',
              reference: 'José Smith — Historia 1:7–8',
            },
            {
              type: 'doctrine_box',
              title: 'La cirugía que forjó el carácter',
              body: 'En 1813, cuando José tenía 7 años, contrajo fiebre tifoidea que derivó en osteomielitis — infección del hueso de la pierna izquierda. Los médicos querían amputar. Lucy se negó. Se convocaron cirujanos del Colegio de Medicina de Dartmouth para operar sin anestesia. Cuando le ofrecieron alcohol para el dolor, José se negó. Cuando intentaron atarlo, José pidió que fuera su padre quien lo sostuviera. Soportó la cirugía con una ecuanimidad que los médicos encontraron extraordinaria. Caminó con muletas por tres años. Esta historia, documentada por Lucy en su autobiografía, revela algo esencial: José tenía una fortaleza de carácter que no se improvisa. Fue forjada desde los 7 años.',
            },
            {
              type: 'paragraph',
              text: 'Hay otro evento familiar que marcó a José profundamente: la muerte de Alvin Smith (1798–1823), su hermano mayor, amado y respetado por toda la familia. Alvin murió de envenenamiento por calomel — el medicamento que le recetó un médico negligente. Después del funeral, el ministro local Rev. Benjamin Stockton insinuó que Alvin había ido al infierno porque no estaba bautizado. La familia quedó devastada. Esta herida — la posibilidad de que un hombre bueno estuviera perdido por un accidente de circunstancias — nunca abandonó a José. Es la raíz profunda de la doctrina de las ordenanzas vicarias y de la visión del reino celestial (DyC 137), donde el Señor le reveló que Alvin estaba ahí.',
            },
          ],
        },
      ],
    },
    {
      id: 's2',
      title: 'El Mundo en Llamas — El Distrito Quemado',
      intro: {
        romanNumeral: 'II',
        title: 'El Mundo en Llamas — El Distrito Quemado',
        paragraphs: [
          'El oeste de Nueva York en 1820 no era un lugar religiosamente tranquilo. Era una zona que los historiadores llaman el "Burned-over District" — el Distrito Quemado — porque los fuegos de los avivamientos religiosos habían pasado por él tan repetidamente que parecía haberse agotado. Metodistas, bautistas, presbiterianos, adventistas y decenas de sectas más competían ferozmente por los mismos feligreses. José creció en medio de esa guerra.',
        ],
      },
      topics: [
        {
          id: 't2',
          title: 'El Segundo Gran Despertar y Sus Consecuencias',
          blocks: [
            {
              type: 'highlight_verse',
              text: 'Había en la región donde vivíamos gran agitación religiosa. Comenzó entre los metodistas, pero pronto se tornó general entre todas las sectas de aquella región del país. En efecto, todo el distrito parecía afectado por ello, y grande era la multitud que se unía a las diferentes congregaciones religiosas, lo cual dio origen a ninguna pequeña conmoción y división entre el pueblo.',
              reference: 'José Smith — Historia 1:5',
            },
            {
              type: 'paragraph',
              text: 'El Segundo Gran Despertar (1790–1840) fue uno de los movimientos religiosos más intensos de la historia norteamericana. Sus predicadores convocaban a multitudes de miles en campamentos al aire libre. Las conversiones eran emocionales, físicas, dramáticas — personas que lloraban, caían al suelo, gritaban, convulsionaban. Los críticos lo llamaban histeria colectiva; los creyentes lo llamaban el poder del Espíritu Santo. José creció en el epicentro geográfico de este fenómeno, en la región de Palmyra-Manchester, Nueva York.',
            },
            {
              type: 'highlight_verse',
              text: 'Pues tan grande era la confusión y el altercado entre las diferentes denominaciones que era imposible para un joven tal como yo, inexperimentado en discusiones religiosas, llegar a alguna conclusión definitiva sobre quién tenía razón y quién estaba equivocado. Mi mente quedó confundida y agitada con gran inquietud.',
              reference: 'José Smith — Historia 1:8',
            },
            {
              type: 'compare_grid',
              left: {
                title: 'Lo que las iglesias prometían',
                items: [
                  'Cada denominación decía tener la verdad',
                  'Los ministros citaban las mismas Escrituras con conclusiones opuestas',
                  'La salvación dependía de unirse a la denominación correcta',
                  'La revelación directa de Dios era cosa del pasado',
                  'La autoridad derivaba de la tradición humana',
                ],
              },
              right: {
                title: 'Lo que José observaba',
                items: [
                  'Las denominaciones se atacaban entre sí con las mismas Escrituras',
                  'El fruto de sus predicadores no era consistentemente diferente',
                  'Los convertidos de hoy eran los apóstatas de mañana',
                  'Nadie parecía tener acceso a Dios directamente',
                  'La pregunta "¿cuál iglesia es correcta?" no tenía respuesta humana',
                ],
              },
            },
            {
              type: 'highlight_verse',
              text: 'Y mientras así me hallaba en las dificultades y angustias que me rodeaban, y mientras reflexionaba sobre esas cosas, leí en la epístola de Santiago el primer capítulo y el quinto versículo: Y si alguno de vosotros tiene falta de sabiduría, pídala a Dios, el cual da a todos abundantemente y sin reproche, y le será dada.',
              reference: 'José Smith — Historia 1:11',
            },
            {
              type: 'paragraph',
              text: '"Jamás pasaje alguno de las Escrituras ejerció mayor poder sobre el corazón de un hombre que éste sobre el mío en aquella época," escribió José. No fue lectura casual. Santiago 1:5 respondía a la pregunta exacta que lo angustiaba: ¿cómo puede saber un hombre cuál iglesia es la correcta? Respuesta de Santiago: pregúntale a Dios. Dios da respuestas. Da generosamente. No reprende al que pregunta. Esta promesa le pareció demasiado directa para ignorarla. Decidió probarla literalmente.',
            },
          ],
        },
      ],
    },
    {
      id: 's3',
      title: 'La Mañana — Oscuridad, Luz y Dos Personajes',
      intro: {
        romanNumeral: 'III',
        title: 'La Mañana — Oscuridad, Luz y Dos Personajes',
        paragraphs: [
          'Era la primavera de 1820. José tenía 14 años. Se dirigió a una arboleda cercana a la granja de la familia en Manchester, Nueva York. Lo que ocurrió en esos minutos es el evento más significativo en la historia religiosa occidental desde la Resurrección — si es verdad. Y esa condicional lo es todo.',
        ],
      },
      topics: [
        {
          id: 't3',
          title: 'La Oscuridad Que Llegó Primero',
          blocks: [
            {
              type: 'highlight_verse',
              text: 'Me disponía a hacer el esfuerzo supremo para pedir a Dios, cuando me vi repentinamente apoderado de algún poder que me tenía completamente ligado y sujeto, de manera que no podía hablar. Una densa oscuridad se congregó alrededor de mí, y durante un momento me pareció que estaba destinado a la destrucción repentina. Pero ejerciendo todos mis poderes para invocar a Dios y quitarme ese poder que me tenía ligado, en el momento preciso de mi mayor alarma, vi en el aire arriba de mí una columna de luz que excedía el brillo del sol en el mediodía.',
              reference: 'José Smith — Historia 1:15–16',
            },
            {
              type: 'paragraph',
              text: 'La oscuridad antes de la luz no es un adorno literario. Es uno de los elementos más teológicamente significativos del relato. En Getsemaní, el Señor enfrentó primero el peso máximo de la oscuridad espiritual. En el Calvario, la oscuridad cubrió la tierra tres horas. En la Primera Visión, la oscuridad atacó antes de que la luz descendiera. El adversario sabía lo que José no podía saber aún: esta oración tenía el potencial de abrir una dispensación completa. Aplicó su poder máximo para detenerla. No pudo.',
            },
            {
              type: 'leader_quote',
              quote: 'El que un adolescente de 14 años incluya esta oscuridad en su relato es en sí mismo un argumento a favor de la autenticidad. Un fabricante de historias religiosas no inventa esa oscuridad — inventa una visión limpia, luminosa, con ángeles acogedores desde el principio. José describe terror antes de gloria. Ese patrón no es el patrón de la invención — es el patrón de toda la historia sagrada.',
              name: 'Jeffrey R. Holland',
              role: '"Safety for the Soul", Conferencia General, octubre 2009 (trad.)',
            },
          ],
        },
        {
          id: 't4',
          title: 'Lo Que Vio y Lo Que Le Dijeron',
          blocks: [
            {
              type: 'highlight_verse',
              text: 'Cuando la luz se asentó sobre mí, vi en el aire arriba de mí a dos Personajes, cuyo brillo y gloria desafían toda descripción. Uno de ellos me habló, llamándome por mi nombre, y dijo, señalando al otro: Éste es mi Hijo Amado. Escúchale.',
              reference: 'José Smith — Historia 1:17',
            },
            {
              type: 'key_points',
              title: 'Las cinco revelaciones contenidas en un solo versículo',
              points: [
                'Dios el Padre y Jesucristo son dos Personajes distintos y separados — no una Trinidad abstracta',
                'Ambos tienen forma definida, glorificada, tangible — no son espíritus incorpóreos',
                'Dios el Padre habla, actúa, y se interesa personalmente por Sus hijos mortales',
                'La autoridad de Cristo es confirmada directamente por el Padre — no es auto-proclamada',
                'El Padre llama a José "por su nombre" — Dios conoce a este adolescente específicamente',
              ],
            },
            {
              type: 'highlight_verse',
              text: 'Se me respondió que no me uniera a ninguna de ellas, pues todas estaban en error; y que todos sus credos eran una abominación a sus ojos; que aquellos profesores eran todos corruptos; que se acercaban a Dios con sus labios, mas sus corazones estaban muy lejos de Él.',
              reference: 'José Smith — Historia 1:19',
            },
            {
              type: 'paragraph',
              text: '"Una abominación a sus ojos" — estas son las palabras más controversiales de toda la visión, y también las más incomprendidas. No es una condena de las personas que pertenecen a otras iglesias. Es una condena de los credos — los sistemas de doctrina construidos en los concilios de Nicea (325 d.C.), Calcedonia (451 d.C.), y Constantinopla que definieron a Dios como una Trinidad abstracta sin cuerpo, sin partes, sin pasiones. Esos credos eran una abominación porque eran falsos. Las personas que los profesaban sinceramente eran capaces de tanta rectitud como cualquier ser humano. Pero el sistema de creencias que los ataba era incorrecto.',
            },
            {
              type: 'deep_dive',
              badge: 'Profundizar',
              title: 'Lo que el relato de 1832 añade: el perdón de pecados',
              paragraphs: [
                'El relato más temprano de la Primera Visión — escrito de puño y letra de José Smith en 1832, 12 años después del evento — incluye un elemento que el relato canonizado (1838) no enfatiza: el perdón de los pecados. José escribe: "el Señor abrió los cielos sobre mí y vi al Señor y Él me habló diciendo, José, mi hijo, tus pecados te son perdonados."',
                'Este detalle es teológicamente crucial y personalmente revelador. El joven que entró a ese bosque no solo llevaba una pregunta sobre qué iglesia era la correcta — llevaba el peso de sus propios errores y la ansiedad de si era suficientemente bueno para recibir respuesta de Dios. La primera cosa que el Señor hizo no fue responder la pregunta teológica — fue atender la necesidad espiritual más profunda del joven que estaba frente a Él.',
                'Esta secuencia es consistente con el carácter de Cristo en todo el canon: antes de enseñar, cuida. Antes de revelar doctrina, restaura al individuo. El perdón que José recibió ese mañana no es un detalle menor — es la declaración de que la Expiación es personal, específica, y accesible a un adolescente de 14 años en un bosque de Nueva York.',
              ],
            },
            {
              type: 'highlight_verse',
              text: 'Me preguntó cuál de las sectas tenía razón. Y respondí que no pertenecía a ninguna, mas preguntaba cuál era la correcta y cuál me debería unir.',
              reference: 'José Smith — Historia 1:18',
            },
          ],
        },
      ],
    },
    {
      id: 's4',
      title: 'Los Cinco Relatos — Evidencia, No Escándalo',
      intro: {
        romanNumeral: 'IV',
        title: 'Los Cinco Relatos — Evidencia, No Escándalo',
        paragraphs: [
          'Existen cinco relatos principales de la Primera Visión, escritos entre 1832 y 1842. Los críticos presentan sus diferencias como evidencia de fabricación. Los estudiosos de testimonio auténtico reconocen exactamente lo contrario: las variaciones naturales son la marca de los testimonios reales. Los testimonios perfectamente consistentes son los inventados.',
        ],
      },
      topics: [
        {
          id: 't5',
          title: 'Los Cinco Relatos y Lo Que Cada Uno Añade',
          blocks: [
            {
              type: 'timeline',
              items: [
                {
                  label: '1832 — El más personal',
                  text: 'Escrito de puño y letra en su diario. Énfasis en el perdón de pecados. No publicado. El más íntimo y menos formal. Escrito 12 años después del evento.',
                  ref: 'JS Letterbook 1, Archivo Histórico de la Iglesia',
                  color: 'gold',
                },
                {
                  label: '1835 — El relato a Robert Matthews',
                  text: 'Narrado a un visitante. Menciona "ángeles" — algunos estudiosos ven esto como referencia a los seres divinos en lenguaje bíblico amplio. Contexto informal.',
                  ref: 'Diarios de José Smith, 9 nov. 1835',
                  color: 'blue',
                },
                {
                  label: '1838 — El canonizado (JS—H)',
                  text: 'Escrito como parte del registro histórico de la Iglesia. El más completo y detallado. Canonizado en La Perla de Gran Precio. Escrito 18 años después del evento.',
                  ref: 'José Smith — Historia 1:1-26',
                  color: 'gold',
                },
                {
                  label: '1842 — Carta de Wentworth',
                  text: 'Resumen breve para John Wentworth, editor de un periódico de Chicago. "Vi dos Gloriosos Personajes." Audiencia no miembro, propósito informativo.',
                  ref: 'Times and Seasons, 1 mar. 1842',
                  color: 'blue',
                },
                {
                  label: '1842 — Relato de Orson Pratt',
                  text: 'Resumen de Orson Pratt basado en lo que José le narró. Primera versión publicada ampliamente. Consistente con los relatos anteriores en los elementos esenciales.',
                  ref: '"Interesting Account", Orson Pratt, 1840',
                  color: 'gold',
                },
              ],
            },
            {
              type: 'doctrine_box',
              title: 'Por qué las diferencias confirman en lugar de contradecir',
              body: 'Los cinco relatos difieren en énfasis, no en hechos esenciales. El núcleo es idéntico en todos: (1) José oró, (2) Fue atacado por una fuerza oscura, (3) Apareció una columna de luz, (4) Ser(es) divino(s) se le aparecieron, (5) Le dijeron que no se uniera a ninguna iglesia. Las variaciones son de énfasis: qué se sintió más significativo en ese contexto y audiencia específica. Si José hubiera contado la misma historia idénticamente verbatim durante 22 años a audiencias diferentes, eso sería la señal de una narrativa ensayada y construida — no de un recuerdo vivo.',
            },
            {
              type: 'paragraph',
              text: 'La psicología del testimonio auténtico es bien documentada: cuando una persona cuenta la misma experiencia en diferentes contextos, su relato varía. Enfatiza diferentes elementos según el propósito. Añade detalles que en ese momento parecen relevantes. Esta es la firma de la experiencia real, no de la fabricación. Los testimonios inventados son perfectamente consistentes porque fueron diseñados para serlo. Los testimonios reales tienen las variaciones naturales de una experiencia vivida, recordada a través del tiempo.',
            },
            {
              type: 'leader_quote',
              quote: 'Yo no le pido que pretenda tener sentimientos que no tiene, ni que actúe como si la historia de la Iglesia no tuviera problemas. Pero sí le pido que guarde sus convenios y no abandone lo que sabe que es verdad por lo que todavía no entiende. He estudiado los cinco relatos. He ponderado las diferencias. Y les digo con toda solemnidad que esas diferencias no me quitan el sueño — porque el Espíritu que los acompaña a todos es el mismo.',
              name: 'Jeffrey R. Holland',
              role: '"Safety for the Soul", Conferencia General, octubre 2009 (trad.)',
            },
          ],
        },
        {
          id: 't6',
          title: 'El Argumento del Mártir',
          blocks: [
            {
              type: 'highlight_verse',
              text: 'Así que por lo que a mí toca, hice real la visión. Había realizado un acto que no podía negar, y pensé que con el tiempo llegué a saber que Dios sabía que no lo podía negar tampoco, y así no me atreví a hacerlo; porque sabía que había visto una visión, sabía que había ocurrido, y no podía retractarme de ella.',
              reference: 'José Smith — Historia 1:25',
            },
            {
              type: 'paragraph',
              text: 'José tenía 14 años cuando vivió la Primera Visión. Tenía 17 cuando el ángel Moroni comenzó a visitarlo. Tenía 24 cuando fue condenado a muerte por primera vez (Missouri, 1833). Tenía 38 años, 6 meses y 27 días cuando fue asesinado en Carthage, Illinois, el 27 de junio de 1844. Durante 24 años de presión social, persecución, pérdida de bienes, prisión, amenazas de muerte continuadas — nunca retiró su testimonio de la Primera Visión. Nunca. Las personas no mueren por historias que saben que inventaron.',
            },
            {
              type: 'key_points',
              title: 'El costo de decir "vi al Padre y al Hijo"',
              points: [
                '1820: el ministro local rechazó su relato y lo llamó obra del diablo — a los 14 años',
                '1833: expulsión violenta de Missouri — hogares destruidos, familias dispersadas',
                '1838: José encarcelado en Liberty Jail, Missouri, durante el invierno, sin juicio',
                '1839-1844: huida de Missouri a Illinois, construcción de Nauvoo bajo amenaza constante',
                '1844: asesinado en la cárcel de Carthage — tuvo múltiples oportunidades de retractarse para salvar su vida',
              ],
            },
          ],
        },
      ],
    },
    {
      id: 's5',
      title: 'El Terremoto Teológico',
      intro: {
        romanNumeral: 'V',
        title: 'El Terremoto Teológico',
        paragraphs: [
          'En treinta segundos de visión, José Smith deshizo 1.400 años de teología oficial cristiana. No lo hizo con argumentos filosóficos ni con erudición académica. Lo hizo con una descripción. "Vi en el aire arriba de mí a dos Personajes." Esa oración sola es suficiente para destruir el Credo Niceno y reconfigurar todo lo que el mundo cristiano creía sobre la naturaleza de Dios.',
        ],
      },
      topics: [
        {
          id: 't7',
          title: 'Lo Que Una Mañana Cambió Para Siempre',
          blocks: [
            {
              type: 'compare_grid',
              left: {
                title: 'La teología cristiana en 1820',
                items: [
                  'Dios es una Trinidad: Padre, Hijo y Espíritu Santo — un solo ser, tres personas',
                  'Dios es incorpóreo, sin partes, sin pasiones (Credo Niceno, 325 d.C.)',
                  'La revelación directa cesó con el cierre del canon bíblico',
                  'La salvación depende de la gracia + correcta doctrina de tu denominación',
                  'El cielo o el infierno son los únicos destinos eternos',
                ],
              },
              right: {
                title: 'Lo que la Primera Visión reveló',
                items: [
                  'El Padre y el Hijo son dos Seres distintos, glorificados, con forma tangible',
                  'Dios tiene un cuerpo de carne y huesos perfecto y exaltado (DyC 130:22)',
                  'La revelación directa es parte del carácter eterno de Dios — nunca cesó',
                  'La plenitud del evangelio requería Restauración, no reforma',
                  'Hay múltiples destinos eternos de gloria, cada uno más vasto de lo que el mundo imaginaba',
                ],
              },
            },
            {
              type: 'paragraph',
              text: 'El Credo Niceno (325 d.C.) definió a Dios como "una sustancia, tres personas" — omoousios, de la misma sustancia. Por 1.500 años, el mundo cristiano adoró a un Dios sin cuerpo, sin partes, sin pasiones — una abstracción filosófica más cercana al Dios de Platón que al Dios de Abraham. La Primera Visión no solo revela que esa doctrina es incorrecta — revela al Dios que realmente es: un Padre que tiene forma, que habla, que llama a sus hijos por nombre, que le importa la pregunta de un adolescente de 14 años lo suficiente como para aparecerse personalmente a responderla.',
            },
            {
              type: 'deep_dive',
              badge: 'Profundizar',
              title: 'La cascada: la Primera Visión como detonante',
              paragraphs: [
                'La Primera Visión no es un evento aislado — es el primer dominó en una secuencia que cambió el mundo religioso. Sin la Primera Visión, no hay Ángel Moroni (1823). Sin Moroni, no hay planchas de oro. Sin las planchas, no hay Libro de Mormón (1830). Sin el Libro de Mormón, no hay restauración del sacerdocio (Juan el Bautista, Pedro, Santiago, Juan — 1829). Sin el sacerdocio, no hay organización de la Iglesia (6 de abril de 1830). Sin la Iglesia, no hay templos. Sin los templos, no hay convenios eternos. Sin los convenios, no hay exaltación.',
                'Cada elemento del evangelio restaurado está conectado a lo que ocurrió ese mañana de 1820. Holland lo expresó exactamente: "Es el pivot sobre el que toda la Restauración gira." Por eso el adversario atacó a José antes de que pudiera hablar. Sabía lo que estaba en juego.',
                'Para el santo de los últimos días, la Primera Visión no es solo una historia de apertura de dispensación. Es la garantía de que cada convenio que ha hecho, cada ordenanza que ha recibido, cada promesa del templo, descansa sobre un evento real. Si ese bosque fue real, todo lo que siguió es real. Si no fue real, nada de lo que vino después lo es.',
              ],
            },
            {
              type: 'leader_quote',
              quote: 'Que José Smith vio al Padre y al Hijo esa mañana de 1820 es la declaración sobre la que toda esta Iglesia descansa. No es una de varias declaraciones fundacionales — es la declaración fundacional. Si es verdad, entonces la Restauración es verdad. Si la Restauración es verdad, entonces las ordenanzas del sacerdocio son válidas. Si son válidas, entonces los convenios del templo son eternos. Si son eternos, entonces lo que hacemos en esta Iglesia importa con una importancia que ninguna otra institución en la tierra puede reclamar.',
              name: 'Gordon B. Hinckley',
              role: '"The Symbol of Our Faith", Conferencia General, abril 2005 (trad.)',
            },
          ],
        },
      ],
    },
    {
      id: 's6',
      title: 'Tu Propia Primera Visión',
      intro: {
        romanNumeral: 'VI',
        title: 'Tu Propia Primera Visión',
        paragraphs: [
          'Santiago 1:5 no fue escrito solo para José Smith. Fue escrito para todo el que tenga "falta de sabiduría" — que es todos nosotros, en diferentes momentos. La promesa que llevó a José al bosque es la misma que está disponible para ti. El mismo Dios que respondió a un adolescente en Palmyra puede responderte a ti.',
        ],
      },
      topics: [
        {
          id: 't8',
          title: 'La Promesa que Todavía Está en Pie',
          blocks: [
            {
              type: 'highlight_verse',
              text: 'Y si alguno de vosotros tiene falta de sabiduría, pídala a Dios, el cual da a todos abundantemente y sin reproche, y le será dada. Pero pida con fe, no dudando nada; porque el que duda es semejante a la onda del mar, que es arrastrada por el viento y echada de una parte a otra.',
              reference: 'Santiago 1:5–6',
            },
            {
              type: 'paragraph',
              text: 'La condición que Santiago pone es fe, no perfección. No dice "el que no tenga pecados, pida." Dice "el que tiene falta de sabiduría, pida." José era un adolescente con errores y dudas — lo dice él mismo. Lo que tenía no era perfección. Tenía la disposición de creer que Dios podría responder. Probó la promesa literalmente. Funcionó. La promesa no ha vencido.',
            },
            {
              type: 'highlight_verse',
              text: 'Si tenéis fe en mí, tendréis poder para hacer cuanto sea expediente para mí. Porque he aquí, yo soy el Padre, y todo lo que pedís al Padre en mi nombre os será dado.',
              reference: '3 Nefi 27:15',
            },
            {
              type: 'key_points',
              title: 'Tres formas de obtener tu propio testimonio de la Primera Visión',
              points: [
                'Leer JS—H 1:1-26 completo — no el resumen, el texto completo, una sola vez, sin interrupciones; pedir al Espíritu que te dé discernimiento mientras lees',
                'Visitar la arboleda sagrada (o ver imágenes, videos del lugar) con oración — la geografía real del evento tiene poder espiritual específico',
                'Preguntar directamente al Padre, en nombre de Cristo, si José Smith vio lo que dijo haber visto — y estar dispuesto a aceptar la respuesta',
              ],
            },
            {
              type: 'leader_quote',
              quote: 'Yo tengo mi propio testimonio de la Primera Visión. No el de mis padres. No el de mi obispo. El mío. Y les digo que cuando el Espíritu Santo confirmó esa verdad en mi corazón, todo cambió. No solo creía la historia — sabía que era verdad. Hay una diferencia entre esas dos cosas que solo se entiende cuando se experimenta. Eso es lo que Santiago 1:5 promete. Es una promesa real.',
              name: 'Jeffrey R. Holland',
              role: '"Safety for the Soul", Conferencia General, octubre 2009 (trad.)',
            },
            {
              type: 'reflection',
              prompt: '¿Tienes un testimonio personal de la Primera Visión — tuyo, no heredado? ¿Cuándo fue la última vez que pediste al Señor esa confirmación específica? ¿Hay alguna duda sobre este evento que has evitado llevar directamente a Dios? Santiago 1:5 dice que Él da "a todos abundantemente y sin reproche." ¿Qué te detiene de probarlo?',
            },
          ],
        },
      ],
    },
  ],
}
