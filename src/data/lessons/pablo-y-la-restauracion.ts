import type { Lesson } from '@/types/doctrine'

export const pabloYLaRestauracion: Lesson = {
  id: 'pablo-y-la-restauracion',
  moduleId: 'personajes-escrituras',
  submoduleGroup: 'pablo',
  title: 'Pablo y la Restauración',
  subtitle: 'El apóstol que predijo la apostasía y señaló la dispensación final',
  description:
    'Pablo no solo construyó la Iglesia primitiva — también predijo su colapso. Y sus cartas contienen textos sobre el bautismo por los muertos, la dispensación del cumplimiento de los tiempos y la apostasía que José Smith citó directamente como fundamento de la obra de los últimos días.',
  level: 'AVANZADO',
  icon: '✨',
  duration: 25,
  order: 5114,
  status: 'PUBLISHED',
  studyBodyPlain: '',
  originalBodyPlain: '',
  studySections: [
    {
      id: 's1',
      title: 'El Bautismo por los Muertos',
      intro: {
        romanNumeral: 'I',
        title: '1 Corintios 15:29 — El Versículo más Misterioso de Pablo',
        paragraphs: [
          'En el corazón del argumento de Pablo sobre la resurrección, aparece una referencia a una práctica que la mayoría del mundo cristiano lleva siglos ignorando o reinterpretando: el bautismo realizado por los vivos en nombre de los muertos.',
        ],
      },
      topics: [
        {
          id: 't1',
          title: '1 Corintios 15:29 y José Smith',
          blocks: [
            {
              type: 'highlight_verse',
              reference: '1 Corintios 15:29',
              text: 'De otro modo, ¿qué harán los que se bautizan por los muertos, si en ninguna manera los muertos resucitan? ¿Por qué, pues, se bautizan por los muertos?',
            },
            {
              type: 'paragraph',
              text: 'Pablo menciona el bautismo por los muertos como argumento en favor de la resurrección: si los muertos no resucitan, ¿qué sentido tiene bautizarse por ellos? El argumento funciona solo si la práctica es real y significativa para los corintios — no es una referencia hipotética. Pablo no instaura la práctica aquí, ni la condena: simplemente la usa como evidencia de que los propios corintios creen en la resurrección de los muertos.',
            },
            {
              type: 'highlight_verse',
              reference: 'DyC 128:17',
              text: 'Y ahora, mis amados hermanos y hermanas, dejadme aseguraros que estas son verdades que el Señor omnipotente me ha dado a conocer, así como el apóstol Pablo también las dio a conocer a los suyos hace mucho tiempo.',
            },
            {
              type: 'doctrine_box',
              title: 'DyC 128 — José Smith y el argumento de Pablo',
              body: 'DyC 128:14-17 es una carta de José Smith en agosto de 1842 que cita directamente 1 Corintios 15:29. José Smith ve en ese versículo la evidencia de que la práctica del bautismo vicario existía en la Iglesia primitiva. El versículo no fue inventado por la Restauración — fue recuperado. Las dos cosas — el texto de Pablo y la práctica restaurada — se confirman mutuamente.',
            },
          ],
        },
      ],
    },
    {
      id: 's2',
      title: 'La Dispensación del Cumplimiento de los Tiempos',
      intro: {
        romanNumeral: 'II',
        title: 'Efesios 1:10 — El Plan Maestro de la Historia',
        paragraphs: [
          'Pablo tiene una visión de la historia humana organizada en dispensaciones. La dispensación final — la del cumplimiento de todos los tiempos — es el momento en que todo lo dispersado será reunido bajo Cristo.',
        ],
      },
      topics: [
        {
          id: 't2',
          title: 'Efesios 1:10 y la visión restauracionista',
          blocks: [
            {
              type: 'highlight_verse',
              reference: 'Efesios 1:9-10',
              text: 'Dándonos a conocer el misterio de su voluntad, según su beneplácito, el cual se había propuesto en sí mismo, de reunir todas las cosas en Cristo, en la dispensación del cumplimiento de los tiempos, así las que están en los cielos, como las que están en la tierra.',
            },
            {
              type: 'paragraph',
              text: 'La palabra griega anakephalaiōsasthai — traducida como "reunir" o "congregar" — significa literalmente "recapitular," poner todo bajo una cabeza. El proyecto de Dios es reunir bajo Cristo todo lo que ha sido dispersado: dispensaciones, llaves, ordenanzas, familias, generaciones de muertos y vivos. Esta es la visión que la Restauración implementa: la obra de los templos, la vinculación de las generaciones, el retorno de las llaves de todas las dispensaciones previas.',
            },
            {
              type: 'deep_dive',
              title: 'Las dispensaciones en la teología paulina',
              paragraphs: [
                'Pablo usa la palabra griega oikonomia — de donde viene "dispensación" — en varios textos clave (Efesios 1:10, 3:2, Colosenses 1:25). El término no significa simplemente "período de tiempo" sino el plan de administración o mayordomía de Dios en la historia.',
                'Efesios 3:2-5 describe la "dispensación de la gracia de Dios" dada a Pablo para predicar a los gentiles, y añade que este "misterio" no fue dado a conocer "a los hijos de los hombres en otras generaciones" como ahora se revela. Pablo tiene conciencia de vivir en un momento singular de la historia de la revelación divina.',
                'La Restauración lleva esta lógica a su conclusión: cada dispensación recibió llaves y revelaciones adaptadas a su tiempo; la dispensación final los recoge todos. DyC 128:18 cita Efesios en este contexto — la "reunión" de Pablo es literalmente la obra de los templos.',
              ],
            },
          ],
        },
      ],
    },
    {
      id: 's3',
      title: 'La Apostasía Predicha por Pablo',
      intro: {
        romanNumeral: 'III',
        title: '2 Tesalonicenses 2 y Hechos 20 — El Profeta que Vio el Colapso',
        paragraphs: [
          'Antes de que la Iglesia primitiva alcanzara su segundo siglo, Pablo ya había predicho que vendría una apostasía. No como posibilidad remota — como certeza que él veía aproximarse.',
        ],
      },
      topics: [
        {
          id: 't3',
          title: '2 Tesalonicenses 2 — el hombre de pecado',
          blocks: [
            {
              type: 'highlight_verse',
              reference: '2 Tesalonicenses 2:3-4',
              text: 'Nadie os engañe en ninguna manera; porque no vendrá sin que antes venga la apostasía, y se manifieste el hombre de pecado, el hijo de perdición, el cual se opone y se levanta contra todo lo que se llama Dios o es objeto de culto; tanto que se sienta en el templo de Dios como Dios, haciéndose pasar por Dios.',
            },
            {
              type: 'paragraph',
              text: 'Pablo está respondiendo a quienes decían que el día del Señor ya había llegado. Su respuesta: no puede haber llegado porque primero tiene que venir la apostasía (apostasia en griego — alejamiento, deserción). Esta no es una apostasía individual — es un alejamiento institucional y doctrinal que vendrá antes del retorno de Cristo. La predicción de Pablo es una de las bases bíblicas de la doctrina de la Gran Apostasía tal como la enseña la Restauración.',
            },
            {
              type: 'highlight_verse',
              reference: 'Hechos 20:29-30',
              text: 'Porque yo sé que después de mi partida entrarán en medio de vosotros lobos rapaces, que no perdonarán al rebaño. Y de vosotros mismos se levantarán hombres que hablen cosas perversas para arrastrar tras sí a los discípulos.',
            },
            {
              type: 'paragraph',
              text: 'Este discurso a los ancianos de Éfeso en Mileto es uno de los más personales de Pablo. Sabe que no volverá a verlos. Y les advierte de dos fuentes de peligro: persecutores externos ("lobos rapaces") y disidentes internos ("de vosotros mismos"). La apostasía vendría desde dentro del liderazgo de la Iglesia, no solo desde las persecuciones del Imperio. Esta predicción encontró su cumplimiento histórico en los siglos II-IV.',
            },
          ],
        },
        {
          id: 't4',
          title: 'La apostasía y la Restauración',
          blocks: [
            {
              type: 'compare_grid',
              title: 'Lo que Pablo predijo y lo que la historia registra',
              left: {
                title: 'Predicción de Pablo',
                items: [
                  'Apostasía antes del retorno de Cristo',
                  'Hombres del propio liderazgo liderarían la desviación',
                  'Lobos rapaces entrarían al rebaño',
                  'Un "hombre de pecado" usurparía la autoridad divina',
                ],
              },
              right: {
                title: 'Cumplimiento histórico',
                items: [
                  'Los credos del siglo IV alteraron la teología trinitaria',
                  'Controversias doctrinales internas fragmentaron la Iglesia',
                  'Persecuciones eliminaron liderazgo apostólico original',
                  'Roma imperial absorbió y redefinió la autoridad eclesiástica',
                ],
              },
            },
            {
              type: 'doctrine_box',
              title: 'Pablo como testigo de la necesidad de la Restauración',
              body: 'Uno de los argumentos más potentes de la Restauración es que usa al propio Nuevo Testamento como evidencia de que la apostasía era inevitable e inminente. Pablo predijo que vendría antes de que él muriera. Pedro hizo lo mismo (2 Pedro 2:1-3). Juan escribió desde el exilio viendo ya las señales. La Restauración no contradice el Nuevo Testamento — cumple las expectativas que el Nuevo Testamento mismo estableció.',
            },
            {
              type: 'reflection',
              prompt: '¿Cómo cambia tu lectura del Nuevo Testamento saber que Pablo y Pedro y Juan ya preveían el colapso que vendría? ¿Qué dice sobre la fidelidad de Dios el hecho de que la Restauración viniera tal como ellos anticiparon?',
            },
          ],
        },
      ],
    },
    {
      id: 's4',
      title: 'Pablo en la Restauración Completa',
      intro: {
        romanNumeral: 'IV',
        title: 'El Apóstol que Regresó — D&C 27 y la Dispensación Final',
        paragraphs: [
          'Pablo no solo escribió sobre la dispensación del cumplimiento de los tiempos — según la doctrina restaurada, participó en su inauguración.',
        ],
      },
      topics: [
        {
          id: 't5',
          title: 'El ministerio de Pablo en la dispensación final',
          blocks: [
            {
              type: 'paragraph',
              text: 'DyC 27:12-13 lista a los personajes que participaron en la restauración del sacerdocio y las llaves: Pedro, Santiago y Juan restituyen el sacerdocio de Melquisedec. Pero DyC 27:12 también menciona que Elías, Juan (el Bautista) y otros han venido o vendrán. En este contexto de restauración de llaves, el ministerio histórico de Pablo — sus cartas, su teología, sus predicciones — funciona como parte de la infraestructura doctrinal de la dispensación final.',
            },
            {
              type: 'central_quote',
              text: 'El espíritu de Elías es un espíritu que nos impulsa hacia nuestros padres. El apóstol Pablo también habló de ello cuando dijo que nuestros padres sin nosotros no pueden ser perfeccionados — ni nosotros sin nuestros padres.',
              attribution: 'José Smith, Enseñanzas del Profeta José Smith, p. 330',
            },
            {
              type: 'key_points',
              title: 'Textos de Pablo fundamentales para la Restauración',
              points: [
                '1 Corintios 15:29 — bautismo por los muertos como práctica primitiva',
                'Efesios 1:10 — la dispensación del cumplimiento de los tiempos como proyecto divino',
                '2 Tesalonicenses 2:3 — la apostasía predicha antes de la segunda venida',
                'Hechos 20:29-30 — el colapso vendría desde dentro del liderazgo',
                '1 Corintios 12 y Efesios 4 — la estructura apostólica-profética como esencial a la Iglesia',
                'Efesios 1:5 — el propósito eterno de la adopción en el pacto divino',
              ],
            },
            {
              type: 'reflection',
              prompt: '¿De qué manera las cartas de Pablo son más comprensibles cuando se leen desde la perspectiva de la Restauración? ¿Hay algún versículo de Pablo que haya cobrado nuevo significado para ti después de entender la doctrina restaurada?',
            },
          ],
        },
      ],
    },
  ],
}
