import type { Lesson } from '@/types/doctrine'

export const santiagoLaEpistola: Lesson = {
  id: 'santiago-la-epistola',
  moduleId: 'personajes-escrituras',
  title: 'La Epístola de Santiago',
  subtitle: 'La teología práctica más exigente del Nuevo Testamento',
  description: 'La epístola de Santiago detonó la Primera Visión con Santiago 1:5. Enfrenta la aparente contradicción con Pablo sobre la fe y las obras. Habla de la lengua, la riqueza y la oración con una precisión incómoda. Lutero quería eliminarla del canon. ¿Por qué incomodaba tanto?',
  level: 'AVANZADO',
  icon: '📜',
  duration: 30,
  order: 5513,
  status: 'PUBLISHED',
  studyBodyPlain: '',
  originalBodyPlain: '',
  submoduleGroup: 'santiago-justo',
  studySections: [
    {
      id: 's1',
      title: 'Santiago 1:5 — El versículo que cambió la historia',
      intro: {
        romanNumeral: 'I',
        title: 'El Versículo que Abrió los Cielos',
        paragraphs: [
          'Un adolescente de catorce años leyó Santiago 1:5 en 1820. Lo que ocurrió después cambió el mundo.',
        ],
      },
      topics: [
        {
          id: 't1',
          title: 'La promesa de la sabiduría divina',
          blocks: [
            {
              type: 'highlight_verse',
              reference: 'Santiago 1:5',
              text: 'Y si alguno de vosotros tiene falta de sabiduría, pídala a Dios, el cual da a todos abundantemente y sin reproche, y le será dada.',
            },
            {
              type: 'paragraph',
              text: 'Santiago 1:5 es uno de los versículos más simples gramaticalmente del Nuevo Testamento y uno de los más explosivos en sus implicaciones. La promesa tiene tres características notables: es universal ("alguno de vosotros" — no solo los perfectos o los instruidos), es incondicional en cuanto al receptor ("sin reproche" — Dios no avergüenza al que pide), y es abundante ("a todos abundantemente" — no a cuentagotas). No hay calificaciones sobre quién puede pedir ni sobre cuánto se dará.',
            },
            {
              type: 'paragraph',
              text: 'En el contexto de la epístola, el versículo aparece dentro de una sección sobre las pruebas y la constancia (Santiago 1:2-8). Santiago exhorta a los creyentes a considerar las pruebas como ocasión de gozo porque producen paciencia. Pero reconoce que en medio de las pruebas, la sabiduría para entender lo que Dios está haciendo puede faltar. La respuesta a esa falta no es esfuerzo mayor sino oración directa a Dios.',
            },
            {
              type: 'doctrine_box',
              title: 'Santiago 1:5 en la Historia de la Restauración',
              body: 'José Smith escribió en Historia de José Smith 1:11-12: "Al examinar las Escrituras ... encontré este pasaje de Santiago: \'Y si alguno de vosotros tiene falta de sabiduría, pídala a Dios\'. Nunca ningún pasaje de las Escrituras llegó con mayor poder al corazón de un hombre que éste llegó entonces al mío. Parecía penetrar con gran fuerza en todos los rincones de mi corazón." La Primera Visión fue la respuesta directa a la oración que Santiago 1:5 detonó. Un versículo de una epístola del siglo primero abrió la Restauración del siglo XIX.',
            },
          ],
        },
      ],
    },
    {
      id: 's2',
      title: 'Fe y obras — La aparente contradicción con Pablo',
      intro: {
        romanNumeral: 'II',
        title: 'Santiago 2:17-26 vs. Romanos 3-4 — ¿Se Contradicen?',
        paragraphs: [
          'Martín Lutero llamó a Santiago "una epístola de paja." Quería eliminarla del canon. ¿Por qué? ¿Tenía razón?',
        ],
      },
      topics: [
        {
          id: 't2',
          title: 'La fe muerta y la fe viva',
          blocks: [
            {
              type: 'highlight_verse',
              reference: 'Santiago 2:17-18',
              text: 'Así también la fe, si no tiene obras, es muerta en sí misma. Pero alguno dirá: Tú tienes fe, y yo tengo obras. Muéstrame tu fe sin tus obras, y yo te mostraré mi fe por mis obras.',
            },
            {
              type: 'highlight_verse',
              reference: 'Romanos 3:28',
              text: 'Concluimos, pues, que el hombre es justificado por fe sin las obras de la ley.',
            },
            {
              type: 'paragraph',
              text: 'La tensión entre Santiago y Pablo sobre la justificación ha generado más debate teológico que casi cualquier otro tema del Nuevo Testamento. A primera vista, parecen decir lo opuesto: Pablo dice que la justificación es por fe "sin las obras de la ley"; Santiago dice que "la fe sin obras es muerta." ¿Cuál de los dos tiene razón?',
            },
            {
              type: 'deep_dive',
              title: 'La Resolución de la Aparente Contradicción',
              paragraphs: [
                'La clave está en identificar a qué audiencia habla cada uno y qué problema está resolviendo. Pablo en Romanos y Gálatas escribe a comunidades que enfrentan la presión de adoptar la circuncisión y las obras rituales de la ley judía como condición para la salvación. Su argumento es que la justificación — la declaración de Dios de que uno es justo — viene por la fe en Cristo, no por el cumplimiento ritual de la ley de Moisés.',
                'Santiago escribe a una audiencia diferente: personas que ya afirman tener fe pero cuya vida práctica no ha cambiado. Su problema no es el legalismo sino el quietismo — la idea de que con solo creer correctamente es suficiente. Su argumento es que la fe auténtica se demuestra en las obras. Una fe que no produce ningún fruto práctico no es fe real — es mera creencia intelectual.',
                'Los dos apóstoles hablan de "justificación" en sentidos distintos: Pablo habla de la justificación ante Dios (cómo Dios nos declara justos), Santiago habla de la justificación ante los hombres (cómo demostramos que nuestra fe es real). Y la "fe" que Santiago condena no es la fe de Pablo — es una fe sin obediencia, lo que Pablo mismo llamaría "fe muerta." En el fondo, Pablo y Santiago están de acuerdo: la fe genuina produce frutos; los frutos no producen fe.',
              ],
            },
            {
              type: 'dialogue',
              title: 'El diálogo imaginado entre Pablo y Santiago',
              lines: [
                { speaker: 'Pablo', side: 'left', text: '¿Estás diciendo que las obras nos salvan? ¿Que sin obras no hay salvación?' },
                { speaker: 'Santiago', side: 'right', text: 'No. Estoy diciendo que la fe que no produce obras no es fe real. ¿Qué tipo de fe es la que no cambia nada en la vida de alguien?' },
                { speaker: 'Pablo', side: 'left', text: 'Estoy de acuerdo. Yo llamo a eso "fe muerta" también. Lo que combato es creer que las obras de la ley ritual nos hacen justos ante Dios.' },
                { speaker: 'Santiago', side: 'right', text: 'Y lo que combato yo es que alguien crea tener fe mientras un hermano tiene hambre y frío, y solo le diga "ve en paz, caliéntate y sáciate."' },
                { speaker: 'Pablo', side: 'left', text: 'En eso estamos completamente de acuerdo. La fe sin amor es nada (1 Corintios 13:2).' },
                { speaker: 'Santiago', side: 'right', text: 'Entonces no nos contradecimos. Hablamos del mismo árbol: la fe es la raíz, las obras son el fruto.' },
              ],
            },
          ],
        },
      ],
    },
    {
      id: 's3',
      title: 'La lengua, la riqueza y la oración',
      intro: {
        romanNumeral: 'III',
        title: 'La Ética Práctica de Santiago',
        paragraphs: [
          'Santiago no es una epístola de doctrina abstracta. Es una guía de conducta concreta y exigente.',
        ],
      },
      topics: [
        {
          id: 't3',
          title: 'Los tres temas que incomodan',
          blocks: [
            {
              type: 'paragraph',
              text: 'La epístola de Santiago tiene una estructura temática que recorre los aspectos más difíciles de la vida cristiana práctica. Tres temas dominan: la lengua (Santiago 3:1-12), la riqueza y la pobreza (Santiago 2:1-9; 5:1-6), y la oración (Santiago 5:13-18). Los tres comparten una característica: son áreas donde la fe puede declinar en hipocresía sin que el creyente lo note fácilmente.',
            },
            {
              type: 'highlight_verse',
              reference: 'Santiago 3:5-6',
              text: 'Así también la lengua es un miembro pequeño, pero se jacta de grandes cosas. He aquí, ¡cuán grande bosque enciende una pequeña llama! Y la lengua es un fuego, un mundo de maldad. La lengua está puesta entre nuestros miembros, y contamina todo el cuerpo, e inflama la rueda de la creación, y ella misma es inflamada del infierno.',
            },
            {
              type: 'key_points',
              title: 'Los Tres Grandes Temas de la Epístola',
              points: [
                'La lengua (Santiago 3:1-12): pequeña pero capaz de contaminar toda la vida — elogia a Dios y maldice a los hombres hechos a imagen de Dios',
                'La riqueza (Santiago 2:1-9; 5:1-6): acepción de personas según posición económica; el oro corrompido como testimonio contra los ricos que explotan',
                'La oración eficaz (Santiago 5:13-18): la oración del justo puede mucho; Elías como modelo; la unción de enfermos con aceite',
              ],
            },
            {
              type: 'highlight_verse',
              reference: 'Santiago 5:14-15',
              text: '¿Está alguno enfermo entre vosotros? Llame a los ancianos de la iglesia, y oren por él, ungiéndole con aceite en el nombre del Señor. Y la oración de fe salvará al enfermo, y el Señor lo levantará; y si hubiere cometido pecados, le serán perdonados.',
            },
            {
              type: 'paragraph',
              text: 'Santiago 5:14-15 es uno de los textos fundacionales de la práctica de la unción de enfermos. La estructura de la instrucción es notable: no es el enfermo quien ora solo — debe llamar a los ancianos (plural) de la iglesia. La oración es colectiva y presencial. Y el efecto prometido es doble: sanación física ("lo levantará") y remisión de pecados. En la Iglesia restaurada, este principio se practica en la bendición de enfermos por quienes tienen el sacerdocio.',
            },
            {
              type: 'reflection',
              prompt: '¿En cuál de los tres temas — la lengua, la riqueza, o la oración — sientes que la epístola de Santiago te desafía con más fuerza? ¿Por qué Lutero quería eliminar precisamente este libro que habla tan directamente de la vida práctica?',
            },
          ],
        },
      ],
    },
    {
      id: 's4',
      title: 'La calidad literaria de la epístola',
      intro: {
        romanNumeral: 'IV',
        title: 'Una Epístola con Raíces en la Sabiduría Judía',
        paragraphs: [
          'La epístola de Santiago es, en muchos aspectos, el texto más judío del Nuevo Testamento — y uno de los más bellos literariamente.',
        ],
      },
      topics: [
        {
          id: 't4',
          title: 'Forma y fondo de una obra maestra',
          blocks: [
            {
              type: 'paragraph',
              text: 'La epístola de Santiago está escrita en un griego de calidad literaria notable — más elegante, en opinión de muchos eruditos, que el de Pablo. Esto ha llevado a algunos a proponer que un secretario instruido la redactó en nombre de Santiago. Pero hay otra explicación: Santiago creció en una Galilea bilingüe, donde el griego era la lengua del comercio y la administración, y pudo haber adquirido una educación helenística sólida además de su formación judía.',
            },
            {
              type: 'paragraph',
              text: 'En cuanto a su forma, la epístola utiliza la diatribe — un género de enseñanza filosófica griega que incluye objeciones imaginarias ("Pero alguno dirá...") y respuestas a ellas. También utiliza extensamente las imágenes naturales — el mar agitado, el espejo, el freno del caballo, el timón del barco, el higo y la oliva, la niebla que aparece y desaparece. Estas imágenes tienen raíces tanto en la tradición de sabiduría judía (Proverbios, Eclesiástico) como en la enseñanza de Jesús (los evangelios sinópticos registran paralelismos entre la enseñanza de Jesús y la de Santiago).',
            },
            {
              type: 'deep_dive',
              title: 'Santiago y la Enseñanza de Jesús',
              paragraphs: [
                'Una de las observaciones más interesantes sobre la epístola de Santiago es la cantidad de paralelos con el Sermón del Monte. Investigadores como John Drane han contado más de veinte puntos de contacto entre Santiago y Mateo 5-7.',
                'Santiago 1:2 / Mateo 5:12: gozo en las pruebas. Santiago 2:13 / Mateo 5:7: la misericordia triunfa sobre el juicio. Santiago 3:12 / Mateo 7:16: no puede una higuera dar aceitunas. Santiago 4:11-12 / Mateo 7:1: no juzguéis. Santiago 5:2 / Mateo 6:19-20: las riquezas que se corrompen.',
                'Esto no debería sorprender: Santiago escuchó a Jesús enseñar durante años en Nazaret, incluso antes de creer en él. Su epístola es, en cierto sentido, la mejor prueba de que la enseñanza de Jesús penetró en él profundamente incluso antes de su conversión — y que la aparición del Resucitado activó toda esa enseñanza latente.',
              ],
            },
            {
              type: 'note_prompts',
              prompts: [
                { id: 'np1', question: '¿En qué se parece la epístola de Santiago al Sermón del Monte? ¿Qué te dice eso sobre cómo Santiago absorbió las enseñanzas de su hermano?' },
                { id: 'np2', question: '¿Qué significa para ti que Santiago 1:5 detonó la Primera Visión? ¿Cómo cambia tu lectura de esa epístola?' },
                { id: 'np3', question: '¿Cuál es el pasaje de la epístola de Santiago que te resulta más difícil de vivir hoy? ¿Por qué?' },
              ],
            },
          ],
        },
      ],
    },
  ],
}
