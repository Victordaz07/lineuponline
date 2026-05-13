import type { Lesson } from '@/types/doctrine'

export const elPresbitero: Lesson = {
  id: 'el-presbitero',
  moduleId: 'sacerdocio',
  title: 'El Presbítero',
  subtitle: 'El oficio más alto del Sacerdocio Aarónico',
  description:
    'El Presbítero es la cima del Sacerdocio Aarónico. Bendice la Santa Cena, bautiza y puede ordenar a otros. Su autoridad es la de un ministro de convenios.',
  level: 'INTERMEDIO',
  icon: '🙏',
  duration: 40,
  order: 5,
  status: 'PUBLISHED',
  studyBodyPlain: '',
  originalBodyPlain: '',
  studySections: [
    {
      id: 's1',
      title: 'El Oficio del Presbítero',
      intro: {
        romanNumeral: 'I',
        title: 'El mayor oficio del Sacerdocio Aarónico — la puerta a Melquisedec',
        paragraphs: [
          'El Presbítero ya no solo sirve — administra. Puede administrar la Santa Cena, bautizar y ordenar. Es la primera vez que el Señor confía esas responsabilidades a un joven.',
        ],
      },
      topics: [
        {
          id: 'oficio-presbitero',
          title: 'El mayor oficio del Sacerdocio Aarónico — la puerta a Melquisedec',
          subtitle:
            'El Presbítero ya no solo sirve — administra. Puede administrar la Santa Cena, bautizar y ordenar. Es la primera vez que el Señor confía esas responsabilidades a un joven.',
          blocks: [
            {
              type: 'paragraph',
              text: 'A los 16 años, un joven digno puede ser ordenado al oficio de Presbítero — el más alto del Sacerdocio Aarónico. La palabra «presbítero» viene del griego presbuteros — anciano o líder respetado. En la Iglesia restaurada, el presbítero tiene autoridad para administrar ordenanzas que ningún otro oficio aarónico puede realizar.',
            },
            {
              type: 'highlight_verse',
              text: '«El deber de los presbíteros es predicar, enseñar, exponer, exhortar y bautizar, y administrar la Santa Cena, y visitar a los miembros de la iglesia, exhortándoles a orar vocal y secretamente y a atender a todos los deberes de la familia; también ordenar a otros presbíteros, maestros y diáconos.»',
              reference: 'Doctrina y Convenios 20:46–48',
            },
            {
              type: 'doctrine_box',
              title: 'Los poderes únicos del Presbítero',
              body: 'El Presbítero tiene cuatro capacidades que no tiene ningún otro oficio aarónico: (1) BENDECIR la Santa Cena — pronunciar las oraciones reveladas arrodillado ante la mesa. (2) BAUTIZAR — realizar la primera ordenanza de salvación. (3) ORDENAR a otros Presbíteros, Maestros y Diáconos — administrar el sacerdocio a otros. (4) TOMAR LA DELANTERA en las reuniones cuando no hay autoridad del Sacerdocio de Melquisedec.',
            },
            {
              type: 'key_points',
              title: 'El Presbítero como ministro de convenios',
              points: [
                'El bautismo que administra el Presbítero es la puerta a todos los demás convenios — templo, endowment, sellamiento. Cada vez que un Presbítero bautiza, está abriendo esa puerta.',
                'La bendición de la Santa Cena que pronuncia es el lenguaje del convenio mismo — palabras reveladas que expresan los términos del contrato eterno entre el hombre y Dios.',
                'Al ordenar a un Diácono o Maestro, el Presbítero está transmitiendo la autoridad recibida a través de Juan el Bautista — una cadena ininterrumpida desde 1829.',
                'D&C 107:87 indica que el Presbítero preside su cuórum y actúa bajo la dirección del obispo.',
              ],
            },
            {
              type: 'leader_quote',
              quote: 'Cuando un Presbítero se arrodilla ante la mesa sacramental, está haciendo lo que Pedro hizo, lo que Pablo hizo. La autoridad es la misma. Las palabras son las mismas. El convenio es el mismo. Solo ha cambiado el siglo.',
              name: 'Élder Jeffrey R. Holland · Conferencia General',
            },
          ],
        },
      ],
    },
    {
      id: 's2',
      title: 'Bendecir la Santa Cena',
      intro: {
        romanNumeral: 'II',
        title: 'Arrodillarse ante el Señor — el momento más sagrado del domingo',
        paragraphs: [
          'El Presbítero que bendice la Santa Cena no recita palabras. Pronuncia el lenguaje del convenio en nombre de toda la congregación ante el Padre Celestial.',
        ],
      },
      topics: [
        {
          id: 'presbitero-santa-cena',
          title: 'Arrodillarse ante el Señor — el momento más sagrado del domingo',
          subtitle:
            'El Presbítero que bendice la Santa Cena no recita palabras. Pronuncia el lenguaje del convenio en nombre de toda la congregación ante el Padre Celestial.',
          blocks: [
            {
              type: 'paragraph',
              text: 'De todas las responsabilidades del Presbítero, ninguna es más solemne y visible que bendecir la Santa Cena. Cada domingo, el Presbítero se arrodilla ante la mesa, inclina la cabeza y pronuncia las palabras exactas que el Señor reveló para hacer el convenio con el Padre. No son sugerencias — son el texto preciso del contrato eterno.',
            },
            {
              type: 'highlight_verse',
              text: '«Oh Dios, Padre Eterno, en el nombre de Jesucristo, tu Hijo, te pedimos que bendigas y santifiques este pan para las almas de todos los que participen de él, para que lo coman en memoria del cuerpo de tu Hijo, y testifiquen ante ti, oh Dios, Padre Eterno, que están dispuestos a tomar sobre sí el nombre de tu Hijo, y a recordarle siempre, y a guardar sus mandamientos que él les ha dado, para que siempre puedan tener su Espíritu consigo. Amén.»',
              reference: 'Doctrina y Convenios 20:77 — Oración del Pan',
            },
            {
              type: 'deep_dive',
              badge: 'Doctrina',
              title: '¿Por qué el Presbítero y no el Élder bendice la Santa Cena?',
              paragraphs: [
                'Es una pregunta que muchos se hacen: si el Sacerdocio de Melquisedec es más alto, ¿por qué normalmente el Presbítero (no el Élder) bendice la Santa Cena?',
                'El Manual General indica que cuando hay suficientes poseedores del Sacerdocio Aarónico, son ellos quienes cumplen estas funciones. Esto es deliberado: el Sacerdocio Aarónico administra las ordenanzas de la Santa Cena como parte de su llamamiento específico.',
                'El Élder y el Sumo Sacerdote PUEDEN bendecir la Santa Cena cuando no hay suficientes poseedores del Sacerdocio Aarónico — pero no es su función habitual. Este diseño preserva el ministerio específico de los jóvenes del Sacerdocio Aarónico.',
              ],
            },
            {
              type: 'key_points',
              title: 'Preparación espiritual para bendecir',
              points: [
                'El élder Dallin H. Oaks enseñó: "Los que ofrecen las oraciones sacramentales deben pronunciar las palabras lenta y claramente, conscientes de que hablan en nombre de la congregación al Padre Celestial."',
                'La preparación comienza el sábado: autoexamen, oración, resolución de conflictos. No se puede pronunciar el lenguaje del convenio con ligereza.',
                'Si hay un error en las palabras y el Presbítero no se corrige, el obispo le pedirá con amabilidad que repita la oración. La exactitud importa porque el convenio importa.',
                'El Presbítero que bendice con preparación espiritual actúa como mediador entre la congregación y el Padre — un rol que requiere humildad y reverencia profundas.',
              ],
            },
            {
              type: 'reflection',
              prompt: '¿Si has bendecido la Santa Cena, cómo te preparas espiritualmente antes? ¿Hay una diferencia en cómo sientes ese momento cuando te preparas la noche anterior versus cuando llegas sin preparación? ¿Qué haría diferente tu preparación esta semana?',
            },
          ],
        },
      ],
    },
    {
      id: 's3',
      title: 'Bautizar',
      intro: {
        romanNumeral: 'III',
        title: 'El bautismo — la puerta que el Presbítero puede abrir',
        paragraphs: [
          'Cada bautismo que realiza un Presbítero es la apertura de la puerta a la vida eterna para alguien que ha elegido seguir a Cristo.',
        ],
      },
      topics: [
        {
          id: 'presbitero-bautismo',
          title: 'El bautismo — la puerta que el Presbítero puede abrir',
          subtitle:
            'Cada bautismo que realiza un Presbítero es la apertura de la puerta a la vida eterna para alguien que ha elegido seguir a Cristo.',
          blocks: [
            {
              type: 'paragraph',
              text: 'El Presbítero es el primer oficio del sacerdocio con autoridad para bautizar. Esta es una responsabilidad enorme: el bautismo es la primera ordenanza de salvación, la puerta a todos los convenios del evangelio y el inicio del camino hacia la exaltación.',
            },
            {
              type: 'highlight_verse',
              text: '«Jesús le respondió: De cierto, de cierto te digo, que el que no naciere de agua y del Espíritu, no puede entrar en el reino de Dios.»',
              reference: 'Juan 3:5',
            },
            {
              type: 'highlight_verse',
              text: '«Y ahora bien, si alguien desea entrar en este orden de Dios, ¿qué impedirá que sea bautizado? He aquí que el agua es apta. Y ahora bien, si alguien tiene fe en mí, será bautizado; en verdad, todo aquel que sea bautizado y tenga fe en mí, se salvará.»',
              reference: '2 Nefi 31:14 · Libro de Mormón',
            },
            {
              type: 'steps',
              title: 'Cómo realizar un bautismo (Manual General)',
              steps: [
                'El que bautiza debe tener el Sacerdocio Aarónico (oficio de Presbítero) o el Sacerdocio de Melquisedec.',
                'Decir la oración autorizada: "Habiendo recibido autoridad en Jesucristo, te bautizo en el nombre del Padre, y del Hijo, y del Espíritu Santo. Amén."',
                'Sumergir completamente al que se bautiza en el agua — incluyendo la ropa y los extremos del cuerpo.',
                'Si alguna parte no se sumergió por completo, el bautismo debe repetirse.',
                'Dos testigos del Sacerdocio de Melquisedec verifican que el bautismo se realizó correctamente.',
              ],
            },
            {
              type: 'doctrine_box',
              title: '¿Por qué la inmersión completa?',
              body: 'El bautismo por inmersión no es solo una costumbre — tiene un significado simbólico preciso. Pablo enseñó en Romanos 6:3–4 que el bautismo es una sepultura (descender en el agua = muerte del hombre viejo) y una resurrección (salir del agua = nueva vida en Cristo). El modo importa porque el significado importa.',
            },
            {
              type: 'key_points',
              points: [
                'El Presbítero puede bautizar a un familiar, a un amigo, a un investigador — a cualquier persona que ha manifestado voluntad de seguir a Cristo y ha sido aprobada por el obispo.',
                'Realizar un bautismo es uno de los momentos más sagrados en la vida de un Presbítero fiel. El Espíritu Santo siempre está presente cuando se abren las puertas del reino.',
                'El Presbítero que bautiza no realiza un trámite — está participando en el nacimiento espiritual de una persona. Esa persona recordará su nombre para siempre.',
              ],
            },
            {
              type: 'reflection',
              prompt: '¿A quién has bautizado o visto bautizar? ¿Qué sintió el Espíritu en ese momento? Si aún no has tenido esa experiencia, ¿qué harías para prepararte para que alguien en tu familia o círculo de amigos tenga acceso a ese convenio?',
            },
          ],
        },
      ],
    },
    {
      id: 's4',
      title: 'El Puente entre los Sacerdocios',
      intro: {
        romanNumeral: 'IV',
        title: 'Del Presbítero al Élder — el tránsito más importante del sacerdocio',
        paragraphs: [
          'El joven que fue fiel en el Sacerdocio Aarónico está listo para el Sacerdocio de Melquisedec. El puente se cruzó servicio por servicio.',
        ],
      },
      topics: [
        {
          id: 'presbitero-puente',
          title: 'Del Presbítero al Élder — el tránsito más importante del sacerdocio',
          subtitle:
            'El joven que fue fiel en el Sacerdocio Aarónico está listo para el Sacerdocio de Melquisedec. El puente se cruzó servicio por servicio.',
          blocks: [
            {
              type: 'paragraph',
              text: 'El oficio del Presbítero es la antesala del Sacerdocio de Melquisedec. El joven que fue puntual en preparar la mesa, reverente al bendecir la Santa Cena y fiel en bautizar, ya demostró que puede ser confiado con la plenitud del sacerdocio.',
            },
            {
              type: 'compare_grid',
              title: 'Sacerdocio Aarónico → Sacerdocio de Melquisedec',
              left: {
                title: 'El Presbítero aprende a...',
                items: [
                  'Preparar (Maestro)',
                  'Velar activamente (Maestro)',
                  'Administrar la Santa Cena (Presbítero)',
                  'Bautizar (Presbítero)',
                  'Ordenar dentro del Sacerdocio Aarónico (Presbítero)',
                ],
              },
              right: {
                title: 'El Élder hará...',
                items: [
                  'Administrar todas las ordenanzas',
                  'Dar bendiciones de sanación',
                  'Presidir reuniones',
                  'Servir misión',
                  'Recibir las ordenanzas del templo',
                ],
              },
            },
            {
              type: 'highlight_verse',
              text: '«Y así como yo dije que anhelaba que fuerais limpios de toda mancha de sangre, pero no podía serlo hasta que hubierais purificado vuestros corazones ante mí, también ahora digo que anhelaba que fuerais limpios de toda mancha de sangre.»',
              reference: 'Doctrina y Convenios 88:74–75',
            },
            {
              type: 'leader_quote',
              quote: 'El Sacerdocio Aarónico no es un trampolín. Es una escuela. El joven que lo tomó en serio — cada domingo, cada servicio, cada bendición — es el hombre que está listo para llevar el nombre del Señor al mundo.',
              name: 'Élder M. Russell Ballard · Conferencia General',
            },
            {
              type: 'reflection',
              prompt: '¿Cuándo recibiste el Sacerdocio de Melquisedec? ¿Qué experiencias del Sacerdocio Aarónico te prepararon para ese momento? ¿Hay algo que desearías haber tomado más en serio cuando eras Presbítero?',
            },
          ],
        },
      ],
    },
  ],
}
