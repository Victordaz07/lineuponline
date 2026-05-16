import type { Lesson } from '@/types/doctrine'

export const mariaMagdalenaElMito: Lesson = {
  id: 'maria-magdalena-el-mito',
  moduleId: 'personajes-escrituras',
  submoduleGroup: 'maria-magdalena',
  title: 'El Mito',
  subtitle: 'Cómo una homilía de 591 d.C. desfiguró a una discípula durante 1,400 años',
  description:
    'En el año 591, el Papa Gregorio I fusionó en un solo sermón a tres mujeres distintas del Nuevo Testamento y creó el personaje de "María Magdalena la prostituta arrepentida." No tenía ningún fundamento bíblico. El error duró catorce siglos y todavía contamina la comprensión popular de quien fue esta mujer.',
  level: 'INTERMEDIO',
  icon: '🔍',
  duration: 30,
  order: 5310,
  status: 'PUBLISHED',
  studyBodyPlain: '',
  originalBodyPlain: '',
  studySections: [
    {
      id: 's1',
      title: 'Las Tres Mujeres que Gregorio Fusionó',
      intro: {
        romanNumeral: 'I',
        title: 'Tres Personas Distintas — Un Solo Error Catastrófico',
        paragraphs: [
          'El Nuevo Testamento presenta a tres mujeres que la homilía XXXIII del Papa Gregorio I identificó erróneamente como una sola persona. Entender a las tres es el primer paso para recuperar a la real María Magdalena.',
        ],
      },
      topics: [
        {
          id: 't1',
          title: 'Las tres mujeres del error',
          blocks: [
            {
              type: 'paragraph',
              text: 'Las tres mujeres que Gregorio I confundió son: (1) María de Magdala, mencionada por nombre en Lucas 8:2, Marcos 15:40, Juan 20:1-18 — la discípula de Galilea de quien Jesús expulsó siete demonios; (2) la "mujer pecadora" sin nombre de Lucas 7:36-50 que ungió los pies de Jesús y los secó con sus cabellos en casa de Simón el fariseo; (3) María de Betania, hermana de Marta y Lázaro, que ungió los pies de Jesús en Juan 12:3. Tres mujeres, tres escenas, tres textos completamente distintos.',
            },
            {
              type: 'compare_grid',
              title: 'Tres mujeres — tres identidades distintas',
              left: {
                title: 'María de Magdala (real)',
                items: [
                  'De Magdala, ciudad de Galilea',
                  'Liberada de siete demonios (Lucas 8:2)',
                  'Patrocinadora del ministerio de Jesús',
                  'Primera testigo de la resurrección (Juan 20)',
                ],
              },
              right: {
                title: 'La pecadora sin nombre (Lucas 7)',
                items: [
                  'Sin nombre en el texto — nunca identificada',
                  'Se describe como "una mujer que era pecadora en la ciudad"',
                  'Estaba en Galilea, no en Judea',
                  'No hay ninguna conexión textual con María Magdalena',
                ],
              },
            },
            {
              type: 'doctrine_box',
              title: 'La homilía XXXIII de Gregorio I — 591 d.C.',
              body: 'El Papa Gregorio I dijo en su homilía XXXIII: "Ella a quien Lucas llama la mujer pecadora, a quien Juan llama María, nosotros creemos que es María de quien Marcos dice que se expulsaron siete demonios." Esta identificación triple no tenía ningún fundamento textual. Gregorio no cita un texto bíblico que apoye la fusión — simplemente la afirma con la autoridad pontificia. Y durante 1,400 años, esa autoridad fue suficiente.',
            },
          ],
        },
      ],
    },
    {
      id: 's2',
      title: 'Lo que Lucas 8:1-3 Dice Realmente',
      intro: {
        romanNumeral: 'II',
        title: 'Los Siete Demonios No Son Pecados',
        paragraphs: [
          'El texto de Lucas 8:2 dice que de María Magdalena "habían salido siete demonios." Gregorio I interpretó esto como pecados sexuales. No hay ninguna base textual para esa interpretación.',
        ],
      },
      topics: [
        {
          id: 't2',
          title: 'Siete demonios — enfermedad, no pecado',
          blocks: [
            {
              type: 'highlight_verse',
              reference: 'Lucas 8:1-3',
              text: 'Aconteció después, que Jesús iba por todas las ciudades y aldeas, predicando y anunciando el evangelio del reino de Dios, y los doce con él, y algunas mujeres que habían sido sanadas de espíritus malos y de enfermedades: María, que se llamaba Magdalena, de la que habían salido siete demonios, y Juana, mujer de Chuza intendente de Herodes, y Susana, y otras muchas que le servían de sus bienes.',
            },
            {
              type: 'paragraph',
              text: 'Lucas 8:2 coloca la posesión de María Magdalena en la categoría de "espíritus malos y enfermedades" — es una condición de sufrimiento, no un juicio moral. En los Evangelios, la posesión demoníaca está consistentemente asociada con sufrimiento físico y mental: ceguera (Mateo 12:22), epilepsia (Marcos 9:17-22), incapacidad para hablar (Marcos 9:17). Nunca está asociada con actividad sexual pecaminosa. La interpretación de Gregorio no es exégesis — es proyección cultural.',
            },
            {
              type: 'deep_dive',
              title: 'El número siete en el simbolismo bíblico',
              paragraphs: [
                'El número siete en el contexto de la posesión puede simplemente indicar severidad — "completamente" poseída, no poseída por exactamente siete seres contables. El número siete en el mundo bíblico connota plenitud o totalidad. "Siete demonios" describe una condición de sufrimiento extremo e integral.',
                'El paralelo más cercano en los Evangelios es María de Magdala comparada con el hombre poseído por una legión en Marcos 5 — ambos son casos de posesión severa, y en ambos casos la liberación transforma radicalmente la vida del afectado. En ninguno de los dos casos se implica pecado moral.',
                'La sexualización de los siete demonios de María Magdalena refleja los prejuicios de la Europa medieval sobre las mujeres, no los presupuestos del texto griego del Nuevo Testamento.',
              ],
            },
          ],
        },
        {
          id: 't3',
          title: 'Las mujeres que financiaban el ministerio',
          blocks: [
            {
              type: 'paragraph',
              text: 'Lucas 8:3 dice que María Magdalena, Juana, Susana y "otras muchas" servían a Jesús "de sus bienes" (ek tōn hyparchontōn autais). En el siglo primero, esto significa que estas mujeres financiaban el grupo: las comidas, el alojamiento, probablemente el transporte. Juana era la esposa del administrador de la hacienda de Herodes Antipas — una mujer de recursos significativos. María Magdalena estaba en esa categoría. Era una patrocinadora del ministerio, no una penitente.',
            },
            {
              type: 'doctrine_box',
              title: 'El significado económico de Lucas 8:3',
              body: 'Que Lucas mencione a estas mujeres como sostén económico del grupo de Jesús es históricamente inusual y significativo. En la cultura del siglo primero, los grupos religiosos itinerantes dependían de patronos. Lucas dice que los patronos de Jesús eran mujeres. Esto implica una relación de confianza, responsabilidad y estatus dentro del grupo muy diferente de la imagen de seguidoras pasivas o penitentes que la tradición posterior construyó.',
            },
          ],
        },
      ],
    },
    {
      id: 's3',
      title: 'La Corrección de 1969',
      intro: {
        romanNumeral: 'III',
        title: 'La Iglesia Católica Reconoció el Error — Catorce Siglos Después',
        paragraphs: [
          'En 1969, el Vaticano revisó el Calendario Romano y separó oficialmente las fiestas de María Magdalena, María de Betania y la pecadora de Lucas 7. El error de Gregorio I fue reconocido formalmente. La pregunta es por qué tardó 1,400 años.',
        ],
      },
      topics: [
        {
          id: 't4',
          title: 'La corrección oficial y sus implicaciones',
          blocks: [
            {
              type: 'paragraph',
              text: 'La reforma litúrgica de 1969 fue importante pero discreta. El Vaticano no emitió una declaración de error histórico — simplemente asignó días festivos separados. Para el gran público, el mito de María Magdalena como penitente sexual persistió en la cultura popular, en el arte y en la predicación mucho más allá de la corrección oficial. La separación litúrgica no borró catorce siglos de iconografía, literatura y predicación.',
            },
            {
              type: 'timeline',
              items: [
                {
                  label: '591 d.C.',
                  text: 'Gregorio I fusiona a las tres mujeres en su homilía XXXIII. El mito nace con autoridad pontificia.',
                  color: 'red',
                },
                {
                  label: 'Edad Media',
                  text: 'El arte europeo representa a María Magdalena con el frasco de ungüento y el cabello suelto — símbolo de penitencia sexual.',
                  color: 'red',
                },
                {
                  label: '1969',
                  text: 'El Vaticano separa oficialmente los días festivos de las tres mujeres. Reconocimiento tácito del error.',
                  color: 'blue',
                },
                {
                  label: '2016',
                  text: 'El Papa Francisco eleva la festividad de María Magdalena al rango de fiesta, igual que los apóstoles. Llama a acabar con el mito.',
                  color: 'gold',
                },
              ],
            },
            {
              type: 'reflection',
              prompt: '¿Qué dice sobre la importancia de leer los textos directamente el hecho de que un error sin fundamento bíblico duró 1,400 años simplemente por la autoridad de quien lo dijo? ¿En qué otras áreas podríamos estar aceptando tradiciones sin examinar su fundamento textual?',
            },
          ],
        },
      ],
    },
    {
      id: 's4',
      title: 'Por qué Importa para la Historia',
      intro: {
        romanNumeral: 'IV',
        title: 'El Error Distorsionó el Papel de la Mujer en el Evangelio',
        paragraphs: [
          'El mito de María Magdalena no es un error académico menor. Cambió la forma en que el mundo cristiano entendió el papel de la mujer en el ministerio de Jesús.',
        ],
      },
      topics: [
        {
          id: 't5',
          title: 'Las consecuencias del mito',
          blocks: [
            {
              type: 'paragraph',
              text: 'Cuando María Magdalena fue redefinida como penitente sexual, su rol de discípula, patrocinadora y primera testigo de la resurrección quedó oscurecido. Las mujeres en el evangelio pasaron de ser agentes activos del ministerio de Jesús a ser objetos de su misericordia. El cambio no es trivial: Lucas 8:1-3 describe a mujeres que viajaban con Jesús y los doce, que sostenían económicamente el movimiento, que estaban presentes en los momentos más críticos. El mito de Gregorio convirtió a la más prominente de ellas en una pecadora redimida en lugar de una discípula comprometida.',
            },
            {
              type: 'key_points',
              title: 'Lo que dicen realmente los Evangelios sobre María Magdalena',
              points: [
                'Liberada de siete demonios por Jesús — sufrimiento severo, no pecado sexual',
                'Viajaba con Jesús y los doce — no era una figura periférica sino central',
                'Patrocinadora del ministerio — contribuía con sus recursos personales',
                'Presente en la crucifixión cuando los apóstoles huyeron',
                'Primera testigo de la resurrección — encargada por Cristo de llevar la noticia',
                'No hay ningún texto que la asocie con prostitución o pecado sexual',
              ],
            },
            {
              type: 'central_quote',
              text: 'María Magdalena es la apóstola de los apóstoles. Merece ser honrada con ese título.',
              attribution: 'Papa Francisco, decreto que eleva su festividad, 2016',
            },
          ],
        },
      ],
    },
  ],
}
