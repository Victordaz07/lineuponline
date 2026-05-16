import type { Lesson } from '@/types/doctrine'

export const joseSmithElProfeta: Lesson = {
  id: 'jose-smith-el-profeta',
  moduleId: 'personajes-escrituras',
  submoduleGroup: 'jose-smith',
  title: 'El Profeta Restaurador',
  subtitle: 'Sacerdocio, revelaciones, templos, doctrina',
  author: 'Fuentes: DyC 13; 20; 76; 89; 110; 121; 128; 131; 132; JS-H 1:66-75',
  description:
    'En 14 años de ministerio activo (1830-1844), José Smith recibió más de 130 revelaciones registradas, restauró el sacerdocio aarónico y melquisedec, organizó la Iglesia, construyó templos, introdujo las ordenanzas salvadoras de la eternidad, y expandió la comprensión humana de Dios de manera que ningún teólogo del siglo XIX anticipó.',
  level: 'INTERMEDIO',
  icon: '🔑',
  duration: 40,
  order: 8012,
  status: 'PUBLISHED',
  studyBodyPlain: '',
  originalBodyPlain: '',
  previousLessonId: 'jose-smith-el-traductor',
  nextLessonId: 'jose-smith-el-martir',
  studySections: [
    {
      id: 's1',
      title: 'La Restauración del Sacerdocio',
      intro: {
        romanNumeral: 'I',
        title: 'Mayo 1829 — La Autoridad Regresa a la Tierra',
        paragraphs: [
          'Sin sacerdocio, no hay ordenanzas válidas. Sin ordenanzas válidas, no hay convenios eternos. La restauración del sacerdocio fue el acto fundacional que hizo posible todo lo demás.',
        ],
      },
      topics: [
        {
          id: 't1-1',
          title: 'El Sacerdocio Aarónico: Juan el Bautista',
          blocks: [
            {
              type: 'paragraph',
              text: 'El 15 de mayo de 1829, mientras José Smith y Oliver Cowdery trabajaban en la traducción del Libro de Mormón cerca del río Susquehanna en Harmony, Pennsylvania, descendió sobre ellos un mensajero celestial que se identificó como Juan el Bautista. Actuando bajo la dirección de Pedro, Santiago y Juan, les confirió el Sacerdocio Aarónico y les instruyó que se bautizaran mutuamente.',
            },
            {
              type: 'highlight_verse',
              reference: 'DyC 13:1',
              text: 'Sobre vosotros, mis consiervos, en nombre del Mesías, confiero el Sacerdocio de Aarón, el cual posee las llaves del ministerio de ángeles y del evangelio de arrepentimiento y de bautismo por inmersión para la remisión de pecados; y esto no se os quitará jamás, sino que permanecerá mientras el mundo exista.',
            },
            {
              type: 'paragraph',
              text: 'La restauración del Sacerdocio Aarónico no fue un evento abstracto. Oliver Cowdery registró que cuando Juan el Bautista puso sus manos sobre sus cabezas, sintieron el Espíritu Santo en una manera que no habían experimentado antes. Inmediatamente se bautizaron en el río — el primero de una serie de actos que establecerían que las ordenanzas del evangelio restaurado no eran ceremoniales sino reales, con poder divino que fluía a través de ellas.',
            },
            {
              type: 'timeline',
              items: [
                { label: '15 mayo 1829', text: 'Juan el Bautista confiere el Sacerdocio Aarónico; José y Oliver se bautizan en el Susquehanna (DyC 13)', color: 'gold' },
                { label: 'Mayo-junio 1829', text: 'Pedro, Santiago y Juan confieren el Sacerdocio de Melquisedec y las llaves del reino', color: 'gold' },
                { label: '6 abril 1830', text: 'La Iglesia de Jesucristo es organizada formalmente en casa de Peter Whitmer Sr., con 6 miembros', color: 'blue' },
                { label: '1831', text: 'La sede de la Iglesia se traslada a Kirtland, Ohio — comienzo de las grandes revelaciones doctrinales', color: 'blue' },
                { label: '1836', text: 'Dedicación del Templo de Kirtland; visita de Moisés, Elías y Elías (DyC 110)', color: 'green' },
              ],
            },
          ],
        },
        {
          id: 't1-2',
          title: 'El Sacerdocio de Melquisedec y las llaves del reino',
          blocks: [
            {
              type: 'paragraph',
              text: 'Semanas después de recibir el Sacerdocio Aarónico, Pedro, Santiago y Juan — los apóstoles que habían sido los líderes más cercanos de Cristo — confirieron a José Smith y Oliver Cowdery el Sacerdocio de Melquisedec. El relato exacto de este evento no está tan detallado en los registros como el del Sacerdocio Aarónico, pero DyC 27:12-13 lo menciona directamente y José Smith lo confirmó múltiples veces en correspondencia y discursos.',
            },
            {
              type: 'doctrine_box',
              title: '¿Por qué importa la línea del sacerdocio?',
              body: 'La autoridad del sacerdocio no puede ser auto-conferida ni conferida por otros que no la tengan. Esta es la lógica de la "línea de autoridad" que todo portador del sacerdocio en la Iglesia puede trazar de regreso a Pedro, Santiago y Juan, quienes la recibieron de Cristo. La Iglesia afirma que entre la apostasía del primer siglo y 1829, no había ninguna organización en la tierra con autoridad sacerdotal válida — por eso se necesitaba una restauración, no una reforma. Lutero, Calvino y los reformadores eran hombres sinceros que no tenían la autoridad que necesitaban para hacer lo que intentaban hacer.',
            },
            {
              type: 'reflection',
              prompt: '¿Cómo ha cambiado tu comprensión de las ordenanzas que has recibido saber que están ligadas a una línea de autoridad que viene del propio Jesucristo? ¿Sientes las ordenanzas como convenios reales o como rituales simbólicos?',
            },
          ],
        },
      ],
    },
    {
      id: 's2',
      title: 'Las grandes revelaciones doctrinales',
      intro: {
        romanNumeral: 'II',
        title: 'Kirtland y Missouri — La Teología de la Restauración',
        paragraphs: [
          'Entre 1831 y 1838, José Smith recibió las revelaciones que definen la teología única del mormonismo: las tres glorias, la Palabra de Sabiduría, los convenios, la organización del sacerdocio.',
        ],
      },
      topics: [
        {
          id: 't2-1',
          title: 'DyC 76: la visión del cielo',
          blocks: [
            {
              type: 'highlight_verse',
              reference: 'DyC 76:22-24',
              text: 'Y ahora bien, después de las muchas manifestaciones que se nos han hecho, he aquí, testificamos que esto: Que él vive. Pues le vimos, aun a la diestra de Dios; y oímos la voz que hacía el testimonio de que él es el Unigénito del Padre — que por él y por medio de él y de él se hicieron los mundos, y que los habitantes de ellos son hijos engendrados e hijos e hijas de Dios.',
            },
            {
              type: 'paragraph',
              text: 'El 16 de febrero de 1832, en Hiram, Ohio, mientras José Smith y Sidney Rigdon revisaban la traducción del capítulo 5 del Evangelio de Juan, recibieron juntos la revelación conocida como "la Visión" — DyC 76. Fue la más extensa que José Smith había recibido hasta ese momento. En ella vieron literalmente el cielo, el plan de salvación en su totalidad, y los destinos de las almas de la humanidad a través de los tres grados de gloria: celestial, terrestre y telestial.',
            },
            {
              type: 'paragraph',
              text: 'DyC 76 resolvió el problema teológico que más ha atormentado al cristianismo: ¿qué pasa con las personas que no escucharon el evangelio en vida? El cielo telestial — el destino incluso de los "mentirosos, y hechiceros, y adúlteros, y prostitutos" — excede toda descripción humana. La visión reemplazó la doctrina del infierno eterno con un plan de misericordia que honra tanto la justicia como el amor de Dios.',
            },
            {
              type: 'doctrine_box',
              title: 'Las Tres Glorias: la solución al problema del infierno',
              body: 'El cristianismo tradicional ofrece dos destinos: cielo o infierno. DyC 76 revela tres glorias: celestial (para los que aceptan el evangelio y guardan los convenios), terrestre (para los honorables que rechazaron el evangelio en vida), y telestial (para los que cometieron graves pecados pero eventualmente se arrepienten). El "infierno" de la Restauración es el reino de los hijos de perdición — reservado solo para aquellos que tuvieron conocimiento perfecto del Padre y del Hijo y deliberadamente los rechazaron. La extensión de la misericordia divina en DyC 76 es mayor que en cualquier teología anterior.',
            },
          ],
        },
        {
          id: 't2-2',
          title: 'DyC 89: la Palabra de Sabiduría',
          blocks: [
            {
              type: 'highlight_verse',
              reference: 'DyC 89:18-21',
              text: 'Y todos los santos que se acuerden de guardar y hacer estas cosas, andando en obediencia a los mandamientos, recibirán salud en el ombligo y médula en sus huesos; y encontrarán sabiduría y grandes tesoros de conocimiento, aun tesoros escondidos; y correrán y no se cansarán, y andarán y no desmayarán.',
            },
            {
              type: 'paragraph',
              text: 'En febrero de 1833, en Kirtland, Ohio, José Smith recibió la revelación conocida como la Palabra de Sabiduría — DyC 89. La revelación prohibía el tabaco, el alcohol, el café y el té (bebidas calientes), y recomendaba el consumo moderado de carne y el uso abundante de cereales y frutas. En 1833, esta revelación era considerada por muchos como excéntrica. Ciento cincuenta años de medicina y epidemiología han confirmado que las sustancias que prohibía son las más dañinas para la salud humana.',
            },
            {
              type: 'deep_dive',
              badge: 'Dato histórico',
              title: 'La Palabra de Sabiduría y la ciencia del siglo XX',
              paragraphs: [
                'En 1833, los riesgos del tabaco y el alcohol eran objeto de debate, no de consenso científico. El vínculo entre el tabaco y el cáncer no fue establecido firmemente hasta la década de 1950. El impacto del alcohol en la salud hepática se comprendió gradualmente a lo largo del siglo XIX y XX.',
                'La prohibición del café y el té en DyC 89 fue la más debatida de las restricciones. La investigación moderna ha confirmado que la cafeína tiene efectos significativos en el sistema cardiovascular y el sueño. Más notablemente, estudios de gran escala en la Universidad de California Los Ángeles y otras instituciones han documentado que los miembros de la Iglesia SUD que observan la Palabra de Sabiduría tienen tasas de cáncer, enfermedades cardíacas y mortalidad general significativamente más bajas que la población general.',
                'El punto no es que la Iglesia SUD sea la única religión que promueve hábitos saludables. El punto es que en 1833, sin metodología científica moderna, una revelación especificó exactamente las sustancias que los siglos posteriores identificarían como las más dañinas para la salud humana.',
              ],
            },
          ],
        },
        {
          id: 't2-3',
          title: 'DyC 121: desde la Cárcel de Libertad',
          blocks: [
            {
              type: 'paragraph',
              text: 'En el invierno de 1838-1839, José Smith estuvo encarcelado durante más de seis meses en la Cárcel de Libertad (Liberty Jail), Missouri, en condiciones deplorables — con frío extremo, comida corrupta, y sin proceso legal adecuado. En ese contexto, escribió cartas que contenían algunas de las revelaciones más sublimes del Libro de Doctrina y Convenios: DyC 121, 122, y 123.',
            },
            {
              type: 'highlight_verse',
              reference: 'DyC 121:7-8',
              text: 'Hijo mío, paz sea a tu alma; tu adversidad y tus aflicciones no serán más que un momento corto; y luego, si los soportas bien, Dios te exaltará en lo alto; triunfarás sobre todos tus foes.',
            },
            {
              type: 'central_quote',
              text: 'Los principios de la rectitud no están conectados con el sacerdocio; ningún poder o influencia se puede ni se debe mantener por virtud del sacerdocio, sino solo por persuasión, por paciencia, por mansedumbre y humildad, y por amor no fingido.',
              attribution: 'DyC 121:37,41',
            },
            {
              type: 'paragraph',
              text: 'DyC 121:34-46 — el pasaje sobre el uso correcto del sacerdocio — fue escrito por un hombre que en ese momento había perdido todo el poder secular que poseía, estaba encarcelado injustamente, y no tenía fecha de liberación. La claridad con que describe cómo el sacerdocio pierde su efecto cuando se ejerce con compulsión, dominio, o control injusto es la claridad de un hombre que había visto exactamente ese mal en los que lo perseguían — y que eligió definir el sacerdocio por su opuesto.',
            },
          ],
        },
      ],
    },
    {
      id: 's3',
      title: 'El Templo de Kirtland y las llaves restauradas',
      intro: {
        romanNumeral: 'III',
        title: 'Marzo de 1836 — Las Llaves del Cielo Regresan',
        paragraphs: [
          'La dedicación del Templo de Kirtland en 1836 fue seguida por una serie de visitas angelicales que restauraron las llaves dispensacionales del sacerdocio. Sin estas llaves, el trabajo de salvación para los muertos no era posible.',
        ],
      },
      topics: [
        {
          id: 't3-1',
          title: 'DyC 110: Moisés, Elías y Elías',
          blocks: [
            {
              type: 'paragraph',
              text: 'El 3 de abril de 1836, una semana después de la dedicación del Templo de Kirtland, José Smith y Oliver Cowdery se arrodillaron detrás del cortinaje del bautisterio para orar. El Señor Jesucristo se les apareció en el templo — y después vinieron secuencialmente Moisés, Elías y Elías (el profeta bíblico, identificado como el profeta del tiempo del rey Acab). Cada uno restauró llaves específicas del sacerdocio que habían estado ausentes de la tierra desde la apostasía.',
            },
            {
              type: 'highlight_verse',
              reference: 'DyC 110:13-16',
              text: 'Después de esta visión, se nos presentó Elías el profeta, que fue levantado sin probar la muerte... Y nos dijo que la dispensación del evangelio de Abraham... estaba llegando sobre la tierra, para que por esto puedan ser bendecidas todas las generaciones de la tierra... Y vino también Elías el profeta, quien vivió en el tiempo de Acab, y nos dijo que en sus manos las llaves de esa dispensación habían sido confiadas; que la promesa hecha a Abraham se realizaba, que en él y en su posteridad todas las generaciones serían bendecidas.',
            },
            {
              type: 'doctrine_box',
              title: 'Las llaves del Templo: por qué importa Elías',
              body: 'La restauración de las llaves de Elías en DyC 110 completó el marco doctrinal necesario para el trabajo de salvación por los muertos. Malaquías 4:5-6 prometió que Elías "volvería a convertir el corazón de los padres hacia los hijos, y el corazón de los hijos hacia los padres." Sin las llaves de Elías, el bautismo por los muertos, el sellamiento de familias eternas, y todas las ordenanzas del templo carecerían de validez. La restauración de estas llaves en Kirtland fue el hito que hizo posible que toda la obra de salvación — para los vivos y los muertos — pudiera avanzar.',
            },
          ],
        },
      ],
    },
    {
      id: 's4',
      title: 'Nauvoo: la teología del templo completada',
      intro: {
        romanNumeral: 'IV',
        title: '1839-1844 — La Doctrina en su Plenitud',
        paragraphs: [
          'En Nauvoo, Illinois, durante los últimos cinco años de su vida, José Smith recibió y enseñó las doctrinas más profundas de la Restauración: bautismo por los muertos, matrimonio celestial, el endowment, y la naturaleza de Dios.',
        ],
      },
      topics: [
        {
          id: 't4-1',
          title: 'El bautismo por los muertos y la eternidad familiar',
          blocks: [
            {
              type: 'paragraph',
              text: 'En agosto de 1840, en el discurso fúnebre por Seymour Brunson, José Smith introdujo por primera vez públicamente la doctrina del bautismo por los muertos. La promesa de 1 Corintios 15:29 — "de lo contrario, ¿qué harán los que se bautizan por los muertos?" — fue explicada como práctica literal: los vivos podían actuar como proxies en el bautismo de sus antepasados difuntos, ofreciéndoles la oportunidad de aceptar o rechazar el evangelio en el mundo de los espíritus.',
            },
            {
              type: 'highlight_verse',
              reference: 'DyC 128:15',
              text: 'Ni pueden los muertos ser perfeccionados sin nosotros; ni podemos nosotros ser perfeccionados sin los muertos; porque hay que efectuar alguna cosa de beneficio a nuestros muertos que sean; pues así lo requiere la ordenanza del bautismo por los muertos, como prescrita en el libro sagrado... para que ellos, con nosotros, puedan llegar a la perfección.',
            },
            {
              type: 'paragraph',
              text: 'La práctica del bautismo por los muertos y el sellamiento familiar es la razón de ser del trabajo genealógico que los Santos de los Últimos Días realizan globalmente. Más de 1,400 millones de nombres han sido indexados en FamilySearch — la base de datos genealógica más grande del mundo. Lo que para los genealogistas seculares es un recurso de investigación histórica, para los Santos es el fundamento de una promesa: que ningún alma que haya vivido en la tierra quedará sin la oportunidad de escuchar el evangelio y aceptar sus ordenanzas.',
            },
          ],
        },
        {
          id: 't4-2',
          title: 'El matrimonio celestial y la deificación',
          blocks: [
            {
              type: 'highlight_verse',
              reference: 'DyC 131:1-4',
              text: 'En la gloria celestial hay tres cielos o grados; y para obtener el más elevado, un hombre tiene que entrar en esta orden del sacerdocio [lo que quiere decir el nuevo y sempiterno convenio del matrimonio]; y si no lo hace, no puede obtenerlo. Puede entrar en el otro pero eso es el fin de su reino; no puede tener aumento.',
            },
            {
              type: 'paragraph',
              text: 'La doctrina del matrimonio eterno — DyC 132 — fue la revelación más difícil que José Smith recibió y la que más oposición le causó. En su núcleo doctrinal, afirma que las familias unidas por la autoridad del sacerdocio en el templo no terminan con la muerte, sino que continúan en la eternidad. La implicación de DyC 132:20-23 va más allá: los que reciben todas las ordenanzas del sacerdocio y guardan fielmente sus convenios "serán dioses" — es decir, alcanzan el nivel de existencia del Padre. Esta doctrina de la deificación (theosis) no era nueva — estaba en los Padres de la Iglesia — pero nunca había sido articulada con esta claridad teológica.',
            },
            {
              type: 'key_points',
              title: 'Las doctrinas únicas de Nauvoo (1839-1844)',
              points: [
                'Bautismo por los muertos — DyC 124 y 128 — fundamento del trabajo del templo',
                'Matrimonio celestial — DyC 131 y 132 — la familia como unidad eterna',
                'El endowment del templo — instrucción sagrada sobre el plan de salvación',
                'La naturaleza de Dios — Dios fue una vez como nosotros; nosotros podemos llegar a ser como Él (Discurso Rey Follett, 1844)',
                'La organización del sacerdocio —DyC 107— con Quórum de los Doce como cuerpo igual a la Primera Presidencia',
              ],
            },
          ],
        },
        {
          id: 't4-3',
          title: 'El Discurso Rey Follett: la cumbre doctrinal',
          blocks: [
            {
              type: 'paragraph',
              text: 'El 7 de abril de 1844, dos meses antes de su muerte, José Smith pronunció ante más de 20,000 personas en Nauvoo el discurso conocido como "El Discurso Rey Follett" — considerado por teólogos y estudiosos como el sermón más doctrinalmente audaz de su carrera. En él, explicó la naturaleza de Dios con una claridad que el Credo de Nicea nunca alcanzó: Dios no siempre fue Dios de la manera en que lo es ahora; los seres humanos tienen un destino eterno que los hace literalmente de la misma especie que Dios.',
            },
            {
              type: 'central_quote',
              text: 'Si el velo se abriera hoy y el gran Dios que guarda este universo os revelara lo que él es, os diría que él era una vez como vosotros sois ahora, y se encontraba en un estado mortal... Dios mismo fue una vez como nosotros somos ahora, y es un hombre exaltado.',
              attribution: 'José Smith, Discurso Rey Follett, 7 de abril de 1844',
            },
            {
              type: 'reflection',
              prompt: '¿Qué te produce mayor asombro al considerar la cantidad y profundidad de revelaciones que José Smith recibió en solo 14 años de ministerio? ¿Cuál de las doctrinas restauradas ha tenido el mayor impacto en tu comprensión de Dios y de tu propio potencial eterno?',
            },
            {
              type: 'quiz',
              quizType: 'true_false',
              question: 'La doctrina de la deificación — la idea de que los seres humanos pueden llegar a ser como Dios — fue inventada por José Smith sin precedente en el cristianismo histórico.',
              answer: false,
              explanation: 'La doctrina de la theosis o deificación tiene raíces en los Padres de la Iglesia primitiva. Atanasio de Alejandría (siglo IV) escribió: "Dios se hizo hombre para que el hombre pudiera llegar a ser Dios." Ireneo, Clemente de Alejandría y Máximo el Confesor enseñaron variantes de esta doctrina. Lo que hizo José Smith fue articularla con una claridad y especificidad que el teísmo niceno posterior había oscurecido.',
            },
          ],
        },
      ],
    },
    {
      id: 's5',
      title: 'El alcance de la obra',
      intro: {
        romanNumeral: 'V',
        title: 'Un Ministerio sin Paralelo',
        paragraphs: [
          'Ningún otro profeta de la historia registrada recibió tantas revelaciones en tan poco tiempo. El alcance de la obra de José Smith en 14 años desafía cualquier comparación.',
        ],
      },
      topics: [
        {
          id: 't5-1',
          title: 'El volumen de la restauración',
          blocks: [
            {
              type: 'key_points',
              title: 'Lo que José Smith produjo en 14 años de ministerio activo',
              points: [
                '138 secciones del Libro de Doctrina y Convenios — revelaciones y declaraciones',
                '531 páginas del Libro de Mormón — traducción completada en ~65 días',
                'La Perla de Gran Precio — Moisés, Abraham, José Smith-Historia, Los Artículos de Fe',
                'La Traducción de José Smith de la Biblia — correcciones y adiciones al texto bíblico',
                'Organización de la Primera Presidencia, Quórum de los Doce, Setenta, Sumo Consejo',
                'Introducción del endowment del templo, el matrimonio eterno, el bautismo por los muertos',
              ],
            },
            {
              type: 'leader_quote',
              quote: 'No existe en toda la historia religiosa del mundo un ejemplo de un hombre que en tan poco tiempo haya producido un cuerpo doctrinal tan coherente, tan detallado y tan transformador. Ya sea que uno lo llame inspiración divina o genio humano, el fenómeno José Smith exige una explicación.',
              name: 'Harold Bloom',
              role: 'Crítico literario y profesor de Yale (no miembro de la Iglesia)',
            },
            {
              type: 'note_prompts',
              prompts: [
                { id: 'p1', question: '¿Qué revelación o doctrina de la Restauración encuentras más difícil de comprender o integrar? ¿Qué harías para obtener mayor comprensión de ella?' },
                { id: 'p2', question: '¿Cómo cambia la doctrina del bautismo por los muertos la manera en que piensas en tus antepasados que murieron sin conocer el evangelio?' },
                { id: 'p3', question: '¿Qué significa para ti personalmente que Dios sea un "ser exaltado" — que hay continuidad real entre lo que somos y lo que Dios es?' },
              ],
            },
          ],
        },
      ],
    },
  ],
}
