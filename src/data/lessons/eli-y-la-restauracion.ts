import type { Lesson } from '@/types/doctrine'

export const eliYLaRestauracion: Lesson = {
  id: 'eli-y-la-restauracion',
  moduleId: 'personajes-escrituras',
  title: 'Elí y la Restauración',
  subtitle: 'Cuando Dios llama a un niño porque los sacerdotes han fallado',
  description:
    'La historia de Elí y Samuel no es solo una tragedia familiar — es el patrón que Dios usa cuando el sacerdocio se corrompe: lo quita de los indignos y lo entrega a alguien que lo recibirá con humildad. Este patrón se repitió en 1820 cuando un adolescente entró a un bosque con una pregunta honesta.',
  level: 'AVANZADO',
  icon: '🌟',
  duration: 35,
  order: 8514,
  status: 'PUBLISHED',
  studyBodyPlain: '',
  originalBodyPlain: '',
  previousLessonId: null,
  nextLessonId: null,
  studySections: [
    {
      id: 's1',
      title: 'El Patrón del Sacerdocio',
      intro: {
        romanNumeral: 'I',
        title: 'El Patrón del Sacerdocio',
        paragraphs: [
          'La historia del sacerdocio en la Biblia es, en parte, la historia de su corrupción y restauración. Elí y sus hijos no son una excepción — son parte de un patrón que se repite desde Aarón hasta Caifás: los que tienen el sacerdocio pueden abusar de él, y cuando lo hacen, Dios actúa.',
        ],
      },
      topics: [
        {
          id: 'patron',
          title: 'Dios llama a los humildes cuando los poderosos fallan',
          subtitle:
            'En cada ciclo de corrupción sacerdotal, Dios encuentra a alguien inesperado: un niño en el tabernáculo, un pastorcillo en Belén, un carpintero en Galilea, un adolescente en un bosque de Nueva York.',
          blocks: [
            {
              type: 'paragraph',
              text: 'Cuando los hijos de Elí corrompieron el sacerdocio, Dios no lo reformó desde adentro — llamó a un niño de fuera. Samuel no era hijo de Elí ni candidato obvio al liderazgo. Era el hijo de Ana, una mujer estéril que había orado con lágrimas. Y Dios lo eligió.',
              blockId: 'eli5s1p0',
            },
            {
              type: 'highlight_verse',
              text: '"Y Jehová dijo a Samuel: He aquí voy a hacer una cosa en Israel que a quien la oyere, le retiñirán ambos oídos... Y confirmaré contra Elí todas las cosas que he dicho sobre su casa, desde el principio hasta el fin."',
              reference: '1 Samuel 3:11–12',
            },
            {
              type: 'highlight_verse',
              text: '"Y haré que se levante un sacerdote fiel, que haga conforme a mi corazón y a mi alma; y yo le edificaré casa firme, y él andará delante de mi ungido todos los días."',
              reference: '1 Samuel 2:35',
            },
            {
              type: 'key_points',
              title: 'El patrón que Dios usa cuando el sacerdocio falla',
              points: [
                '🔄 Elí / Samuel — El sumo sacerdote corrupto es reemplazado por un niño llamado directamente por Dios. Samuel unge a Saúl y a David.',
                '🔄 Los sacerdotes de Herodes / Juan el Bautista — El sacerdocio del Templo se había politizado. Dios llamó a un profeta en el desierto para preparar el camino.',
                '🔄 Los apóstoles / La apostasía / José Smith — El sacerdocio fue retirado con la muerte de los apóstoles originales. Dios llamó a un adolescente de 14 años en un bosque de Palmyra.',
                '🌱 El principio común — Dios no restaura por reforma institucional cuando la corrupción es sistémica. Comienza de nuevo con alguien humilde, dispuesto y sin agenda propia.',
              ],
            },
            {
              type: 'reflection',
              prompt:
                '¿Por qué Dios elige niños y adolescentes en los momentos de restauración? ¿Qué tiene la humildad y la falta de corrupción previa que Dios busca en sus instrumentos?',
            },
          ],
        },
      ],
    },
    {
      id: 's2',
      title: 'El Sacerdocio como Responsabilidad',
      intro: {
        romanNumeral: 'II',
        title: 'El Sacerdocio como Responsabilidad',
        paragraphs: [
          'La historia de Elí y sus hijos es, en su núcleo, una enseñanza sobre lo que el sacerdocio exige. No es solo autoridad — es responsabilidad. No es solo privilegio — es rendición de cuentas. El sacerdocio puede beneficiar enormemente al que lo porta, o puede destruirlo.',
        ],
      },
      topics: [
        {
          id: 'responsabilidad',
          title: 'El peligro del dominio injusto',
          subtitle:
            'Doctrina y Convenios 121 es la declaración más clara de las escrituras de la Restauración sobre el abuso del sacerdocio — y su diagnóstico cabe perfectamente en Ofni y Finees.',
          blocks: [
            {
              type: 'paragraph',
              text: 'José Smith escribió Doctrina y Convenios 121 desde la cárcel de Liberty en Missouri, en las condiciones más duras de su ministerio. Sus palabras sobre el sacerdocio y el poder son una respuesta directa a lo que los santos estaban viviendo — y una advertencia eterna sobre lo que Elí no supo detener en sus hijos.',
              blockId: 'eli5s2p0',
            },
            {
              type: 'highlight_verse',
              text: '"He aquí, hay muchos que son llamados, pero pocos son los escogidos. ¿Y por qué no son escogidos? Porque sus corazones están puestos en las cosas de este mundo, y aspiran a los honores de los hombres."',
              reference: 'Doctrina y Convenios 121:34–35',
            },
            {
              type: 'highlight_verse',
              text: '"Hemos aprendido por triste experiencia que es la naturaleza y disposición de casi todos los hombres que, tan pronto como obtienen un poco de autoridad, como ellos suponen, comenzarán de inmediato a ejercer injusto dominio."',
              reference: 'Doctrina y Convenios 121:39',
            },
            {
              type: 'doctrine_box',
              title: 'Lo que Elí no hizo — y DyC 121 exige',
              body: 'DyC 121:41–42 describe el único poder verdadero del sacerdocio: "mediante la persuasión, la longanimidad, la mansedumbre y la humildad, y el amor sincero; mediante la bondad y el puro conocimiento, lo que aumentará en gran manera tu influencia sin hipocresía alguna." Ofni y Finees ejercieron lo opuesto: tomaron por la fuerza, intimidaron al pueblo, deshonraron las ordenanzas. Y Elí, que debía corregirlos, prefirió el silencio. La condena de Dios a Elí fue que "honró a sus hijos más que a mí" — exactamente lo que DyC 121:35 describe como la razón por la que los llamados no son escogidos.',
            },
            {
              type: 'reflection',
              prompt:
                '¿Cómo distingues entre el ejercicio legítimo de la autoridad del sacerdocio y el dominio injusto? ¿Qué haría diferente Elí si hubiera leído DyC 121?',
            },
          ],
        },
      ],
    },
    {
      id: 's3',
      title: 'De Siló a Palmyra',
      intro: {
        romanNumeral: 'III',
        title: 'De Siló a Palmyra',
        paragraphs: [
          'Cuando el arca fue capturada y Elí murió, parecía que la historia de Israel había terminado. Pero Dios había anunciado que levantaría "un sacerdote fiel." Samuel fue ese sacerdote. Y la Restauración enseña que el mismo patrón se aplicó en 1830 — con José Smith como el profeta llamado después de la corrupción total del sacerdocio original.',
        ],
      },
      topics: [
        {
          id: 'restauracion',
          title: 'Un adolescente con una pregunta honesta',
          subtitle:
            'Como Samuel en el tabernáculo de Siló, José Smith en el bosque sagrado no buscaba poder ni posición. Tenía una pregunta honesta. Y Dios respondió con una aparición que cambió la historia del mundo.',
          blocks: [
            {
              type: 'paragraph',
              text: 'En el año 421 d.C., Moroni enterró las planchas de oro. Para esa fecha, el sacerdocio original de Jesucristo había desaparecido de la tierra — como el arca en manos filisteas, la autoridad divina había sido "tomada." Por 1,400 años, el patrón de Siló se repitió a escala global: el Icabod de la apostasía.',
              blockId: 'eli5s3p0',
            },
            {
              type: 'highlight_verse',
              text: '"Porque la tierra será desolada a causa de sus moradores, por el fruto de sus obras."',
              reference: 'Miqueas 7:13',
            },
            {
              type: 'paragraph',
              text: 'En la primavera de 1820, un adolescente llamado José Smith leyó Santiago 1:5 — el mismo Santiago que presidió la Iglesia después de que los apóstoles murieran uno a uno. José fue al bosque con una pregunta sencilla: "¿cuál de todas las iglesias es la verdadera?" No pidió poder. No pidió riquezas. Pidió guía. Y como Samuel — fue escuchado directamente por Dios.',
              blockId: 'eli5s3p1',
            },
            {
              type: 'compare_grid',
              title: 'Samuel y José Smith — El mismo patrón',
              columns: ['', 'Samuel', 'José Smith'],
              rows: [
                ['Contexto', 'El sacerdocio corrompido por Ofni y Finees', 'El sacerdocio perdido por 1,400 años de apostasía'],
                ['Su posición', 'Niño al servicio del templo', 'Adolescente de 14 años'],
                ['Su pregunta', '"Habla, Jehová, porque tu siervo oye" (1 Sam 3:10)', '"¿Cuál de todas las sectas es la verdadera?"'],
                ['La respuesta', 'Visión directa de Jehová con mensaje de juicio', 'Aparición del Padre y el Hijo'],
                ['El resultado', 'Sacerdote fiel que restauró el orden en Israel', 'Profeta de la Restauración que recibió el sacerdocio de manos de ángeles'],
              ],
            },
            {
              type: 'highlight_verse',
              text: '"Ahora bien, si alguno de vosotros tiene falta de sabiduría, pídala a Dios, el cual da a todos abundantemente y sin reproche, y le será dada."',
              reference: 'Santiago 1:5',
            },
            {
              type: 'leader_quote',
              quote:
                'El Señor en su sabiduría infinita no buscó a alguien ya formado en las tradiciones religiosas de la época. Buscó a alguien sin prejuicios adquiridos, sin agenda institucional, sin miedo al ridículo — un joven que simplemente quería saber la verdad. En eso se parece profundamente al niño Samuel que dijo: "Habla, porque tu siervo oye."',
              name: 'Élder Neal A. Maxwell · "El Joven José Smith" · Conferencia General, octubre 1992',
            },
            {
              type: 'reflection',
              prompt:
                '¿Qué te dice sobre el carácter de Dios el hecho de que, en los momentos de mayor corrupción religiosa, elige siempre a alguien humilde, joven y sin poder institucional para restaurar su obra? ¿Qué dice eso sobre lo que Dios valora en sus instrumentos?',
            },
          ],
        },
      ],
    },
  ],
}
