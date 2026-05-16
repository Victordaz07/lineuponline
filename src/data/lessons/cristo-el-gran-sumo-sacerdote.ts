import type { Lesson } from '@/types/doctrine'

export const cristoElGranSumoSacerdote: Lesson = {
  id: 'cristo-el-gran-sumo-sacerdote',
  moduleId: 'sacerdocio',
  title: 'Cristo — El Gran Sumo Sacerdote',
  subtitle: 'Cada oficio del sacerdocio es un tipo de Él',
  description:
    'El Sacerdocio de Melquisedec lleva ese nombre para evitar la demasiado frecuente repetición del nombre del Hijo de Dios. Hebreos 4-9 es el tratado más profundo del Nuevo Testamento sobre el sacerdocio — y Jesucristo es su conclusión. Cada oficio que has estudiado apunta a Él.',
  level: 'AVANZADO',
  icon: '⚜️',
  duration: 70,
  order: 15,
  status: 'PUBLISHED',
  studyBodyPlain: '',
  originalBodyPlain: '',
  studySections: [
    {
      id: 's1',
      title: 'El Sacerdocio que Lleva Su Nombre',
      intro: {
        romanNumeral: 'I',
        title: '"El Orden del Hijo de Dios"',
        paragraphs: ['Por qué se llama de Melquisedec'],
      },
      topics: [
        {
          id: 't1',
          title: 'El nombre que es demasiado sagrado para repetir',
          blocks: [
            {
              type: 'highlight_verse',
              id: 'v1',
              reference: 'DyC 107:3-4',
              text: 'Antes, se llamaba el Santo Sacerdocio, según el Orden del Hijo de Dios. Pero para evitar la demasiado frecuente repetición de su nombre, se le llama el Sacerdocio de Melquisedec.',
            },
            {
              type: 'paragraph',
              id: 'p1',
              text: 'Esta revelación dice algo profundo sobre la relación entre el sacerdocio y Cristo: el nombre original del sacerdocio de Melquisedec es "el Santo Sacerdocio, según el Orden del Hijo de Dios." Melquisedec es un alias utilizado por reverencia al nombre de Cristo. Cada vez que se ordena a un hombre al Sacerdocio de Melquisedec, se lo está ordenando al Orden del Hijo de Dios.',
            },
            {
              type: 'paragraph',
              id: 'p2',
              text: 'Esta realidad transforma la perspectiva de quien sostiene este sacerdocio. No tiene una credencial institucional — tiene una participación en el tipo de autoridad que el propio Cristo ejerció. El Élder, el Sumo Sacerdote, el Apóstol — todos ejercen una porción de lo que Cristo posee en su plenitud.',
            },
          ],
        },
      ],
    },
    {
      id: 's2',
      title: 'Hebreos — El Tratado del Sacerdocio',
      intro: {
        romanNumeral: 'II',
        title: 'El Argumento de Pablo',
        paragraphs: ['Capítulos 4 al 9: la obra maestra teológica'],
      },
      topics: [
        {
          id: 't2',
          title: 'El Gran Sumo Sacerdote que pasó por los cielos',
          blocks: [
            {
              type: 'highlight_verse',
              id: 'v2',
              reference: 'Hebreos 4:14-16',
              text: 'Por tanto, teniendo un gran sumo sacerdote que traspasó los cielos, Jesús el Hijo de Dios, retengamos nuestra profesión. Porque no tenemos un sumo sacerdote que no pueda compadecerse de nuestras debilidades, sino uno que fue tentado en todo según nuestra semejanza, pero sin pecado. Acerquémonos, pues, confiadamente al trono de la gracia.',
            },
            {
              type: 'paragraph',
              id: 'p3',
              text: 'Pablo argumenta que Cristo califica como Sumo Sacerdote supremo por dos razones aparentemente contradictorias: (1) traspasó los cielos — es decir, su ministerio es infinito, celestial, sin límites terrenales; y (2) fue tentado en todo según nuestra semejanza — es decir, conoce nuestra experiencia desde adentro. Solo alguien que ha experimentado la debilidad humana puede compadecerse de ella. Solo alguien que superó esa debilidad puede interceder con autoridad.',
            },
          ],
        },
        {
          id: 't3',
          title: 'El Día de la Expiación como tipo',
          blocks: [
            {
              type: 'paragraph',
              id: 'p4',
              text: 'El argumento central de Hebreos 9: el Yom Kippur (Día de la Expiación) del Antiguo Testamento era un tipo anual del evento único de la Expiación de Cristo. En Yom Kippur, el Sumo Sacerdote entraba solo al Lugar Santísimo (el Santo de los Santos) con la sangre de animales. Cristo entró "al lugar santísimo de una vez para siempre, no por la sangre de machos cabríos ni de becerros, sino por su propia sangre, habiendo obtenido eterna redención." (Hebreos 9:12)',
            },
            {
              type: 'compare_grid',
              id: 'cg1',
              title: 'El Tipo y el Antitipo',
              rows: [
                {
                  label: 'Sacerdocio',
                  a: 'El Sumo Sacerdote de Aarón — mortal, imperfecto',
                  b: 'Cristo — Sumo Sacerdote perfecto y eterno',
                },
                {
                  label: 'Ofrenda',
                  a: 'Sangre de animales — repetida cada año',
                  b: 'Su propia sangre — una vez para siempre',
                },
                {
                  label: 'Lugar',
                  a: 'El Lugar Santísimo del tabernáculo terrenal',
                  b: 'El tabernáculo celestial — el original',
                },
                {
                  label: 'Efecto',
                  a: 'Expiación temporal y ritual para Israel',
                  b: 'Redención eterna para toda la humanidad',
                },
              ],
            },
          ],
        },
      ],
    },
    {
      id: 's3',
      title: 'Melquisedec como Tipo de Cristo',
      intro: {
        romanNumeral: 'III',
        title: 'Sin Padre, Sin Madre, Sin Genealogía',
        paragraphs: ['Hebreos 7 y Alma 13'],
      },
      topics: [
        {
          id: 't4',
          title: 'El misterio de Melquisedec',
          blocks: [
            {
              type: 'highlight_verse',
              id: 'v3',
              reference: 'Hebreos 7:3',
              text: 'Sin padre, sin madre, sin genealogía; que no tiene principio de días ni fin de vida, sino hecho semejante al Hijo de Dios, permanece sacerdote para siempre.',
            },
            {
              type: 'paragraph',
              id: 'p5',
              text: 'Pablo no está diciendo que Melquisedec literalmente no tenía padre, madre ni génesis — eso sería biológicamente absurdo. Está usando el silencio del registro genealógico (Melquisedec aparece en Génesis 14 sin que se mencione su linaje) para señalar que su sacerdocio no depende de la genealogía como el de Aarón. El sacerdocio de Melquisedec — a diferencia del levítico — no es hereditario. Es conferido por ordenación basada en rectitud.',
            },
            {
              type: 'paragraph',
              id: 'p6',
              text: 'Alma 13 añade la perspectiva del Libro de Mormón: los sumos sacerdotes fueron "llamados y preparados desde la fundación del mundo según el preconocimiento de Dios, a causa de su excepcional fe y buenas obras... escogidos para ese sagrado llamamiento desde que el mundo fue establecido." El sacerdocio de Melquisedec es eterno, premortal, y basado en la rectitud personal — exactamente como el de Cristo.',
            },
          ],
        },
      ],
    },
    {
      id: 's4',
      title: 'Cristo — El Tipo Supremo de Cada Oficio',
      intro: {
        romanNumeral: 'IV',
        title: 'Cada Oficio, Una Faceta de Él',
        paragraphs: ['El sacerdocio como teología de Cristo'],
      },
      topics: [
        {
          id: 't5',
          title: 'Todos los oficios apuntan a uno',
          blocks: [
            {
              type: 'paragraph',
              id: 'p7',
              text: 'Si has seguido el módulo del sacerdocio desde el Diácono hasta el Presidente de la Iglesia, has estado estudiando facetas del ministerio de Cristo. Cada oficio revela algo de quién es Él y cómo sirve. Esta es la razón más profunda para estudiar el sacerdocio: no para entender una organización institucional, sino para conocer mejor a Jesucristo.',
            },
            {
              type: 'key_points',
              id: 'kp1',
              title: 'Cristo como tipo supremo de cada oficio',
              points: [
                'DIÁCONO: Cristo prepara el camino y ministra con humildad (Marcos 10:45 "no para ser servido, sino para servir")',
                'MAESTRO: Cristo enseña con autoridad y vela que no haya contención (Juan 13:35, Mateo 7:29)',
                'PRESBÍTERO: Cristo ofrece el sacrificio perfecto y administra las ordenanzas de salvación (Hebreos 9:14)',
                'ÉLDER: Cristo sana a los enfermos, levanta a los muertos, llama al arrepentimiento (Lucas 4:18)',
                'SUMO SACERDOTE: Cristo preside en perfecta santidad ante el Padre (Hebreos 5:5)',
                'PATRIARCA: Cristo pronuncia bendiciones eternas sobre Sus hijos (Juan 17:1-26)',
                'OBISPO: Cristo es el Buen Pastor y el Juez de toda la tierra (1 Pedro 2:25, Hechos 17:31)',
                'APÓSTOL: Cristo es el Enviado supremo del Padre (Hebreos 3:1 "el Apóstol... de nuestra profesión")',
                'PRESIDENTE: Cristo preside sobre todo — ahora y en la eternidad (Apocalipsis 19:16)',
              ],
            },
          ],
        },
      ],
    },
    {
      id: 's5',
      title: 'El Intercesor Eterno',
      intro: {
        romanNumeral: 'V',
        title: 'Vive Siempre para Interceder',
        paragraphs: ['Hebreos 7:25 — la promesa más grande del sacerdocio'],
      },
      topics: [
        {
          id: 't6',
          title: 'Cristo intercede ahora mismo',
          blocks: [
            {
              type: 'highlight_verse',
              id: 'v4',
              reference: 'Hebreos 7:25',
              text: 'Por lo cual puede también salvar perpetuamente a los que por él se acercan a Dios, viviendo siempre para interceder por ellos.',
            },
            {
              type: 'paragraph',
              id: 'p8',
              text: 'La Expiación no terminó en el Jardín ni en la Cruz. Cristo resucitado vive ahora mismo y su función sacerdotal continúa: intercede por nosotros ante el Padre. Cada vez que ore con sinceridad, cada vez que intentes aplicar la Expiación en tu vida, Cristo está activamente mediando ese proceso ante el Padre. El sacerdocio no es un sistema burocrático — es la estructura a través de la cual Cristo extiende su ministerio eterno a la tierra.',
            },
            {
              type: 'leader_quote',
              id: 'lq1',
              author: 'Élder Bruce R. McConkie',
              source: 'El Mesías Prometido, 1978',
              text: 'Cristo es el Sumo Sacerdote eterno. Su sacrificio fue una vez y para siempre, pero su ministerio sacerdotal no ha terminado. Está sentado a la diestra del Padre en el cielo, intercediendo perpetuamente por nosotros. Cada hombre que recibe el sacerdocio de Melquisedec recibe una porción de este ministerio eterno de Cristo.',
            },
          ],
        },
        {
          id: 't7',
          title: 'El significado de sostener el sacerdocio',
          blocks: [
            {
              type: 'paragraph',
              id: 'p9',
              text: 'Si el Sacerdocio de Melquisedec es el Orden del Hijo de Dios, entonces sostener ese sacerdocio significa participar en el ministerio eterno de Cristo. Cada bendición de sanación es Cristo sanando a través de tus manos. Cada bautismo es Cristo sumergiendo en las aguas a través de tu autoridad. Cada ordenanza del templo es Cristo sellando en el cielo lo que se sella en la tierra.',
            },
            {
              type: 'doctrine_box',
              id: 'db1',
              title: 'El Sacerdocio como Participación en Cristo',
              body: 'D&C 84:35-38 establece que quien recibe el sacerdocio recibe al que lo confirió, y que quien recibe a los siervos de Dios recibe a Dios mismo. La cadena es directa: sostener el sacerdocio es estar en la cadena que conecta con Cristo. Ejercerlo rectamente es ejercer la autoridad de Cristo. Abusar de él es abusar de la confianza de Cristo mismo.',
            },
            {
              type: 'reflection',
              id: 'r1',
              prompt: 'Habiendo estudiado cada oficio del sacerdocio, ¿cuál faceta del ministerio de Cristo te resulta más significativa personalmente? ¿Cómo cambia tu perspectiva entender que el sacerdocio que sostienes es literalmente el Orden del Hijo de Dios?',
            },
          ],
        },
      ],
    },
    {
      id: 's6',
      title: 'Epílogo — El Módulo Completo como Cristología',
      intro: {
        romanNumeral: 'VI',
        title: 'Todo el Sacerdocio es una Revelación de Cristo',
        paragraphs: ['La conclusión del módulo'],
      },
      topics: [
        {
          id: 't8',
          title: 'Del Diácono al Presidente: un solo retrato',
          blocks: [
            {
              type: 'paragraph',
              id: 'p10',
              text: 'Has estudiado nueve oficios del sacerdocio y varias funciones clave. Cada uno revela una faceta diferente del ministerio de Jesucristo. El Diácono que distribuye la Santa Cena con reverencia está actuando como Cristo sirvió en la última cena. El Obispo que escucha una confesión con amor está actuando como Cristo que recibe al pródigo. El Apóstol que testifica en todo el mundo está actuando como el Enviado supremo del Padre. Y el Presidente de la Iglesia habla como Cristo habla — porque es el portavoz autorizado del Señor en la tierra.',
            },
            {
              type: 'paragraph',
              id: 'p11',
              text: 'Estudiar el sacerdocio sin estudiar a Cristo es como estudiar el sol a través de sus rayos sin mirar nunca la fuente. Los rayos son reales y nos dan vida — pero el sol es la fuente. Cristo es la fuente de todo el sacerdocio, la razón de su existencia, el tipo perfecto de cada oficio, y el beneficio final de cada ordenanza que confiere.',
            },
            {
              type: 'highlight_verse',
              id: 'v5',
              reference: 'DyC 84:35-38',
              text: 'Y también, todo aquel que recibe este sacerdocio, recibe a mí, dice el Señor; Porque el que recibe a mis siervos, a mí me recibe; Y el que me recibe, recibe a aquel que me envió; Y el que recibe a mi Padre, recibe el reino de mi Padre; por tanto, todo lo que tiene mi Padre será dado a él.',
            },
          ],
        },
      ],
    },
  ],
}
