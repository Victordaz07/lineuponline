import type { Lesson } from '@/types/doctrine'

export const mormonElProfeta: Lesson = {
  id: 'mormon-el-profeta',
  moduleId: 'personajes-escrituras',
  title: 'Mormón — El Profeta sin Audiencia',
  subtitle: 'Visitado por el Señor a los 15 años, profetizó a un pueblo que no quería escuchar',
  description:
    'Mormón fue mucho más que un general y compilador: fue un profeta. A los diez años fue elegido por Ammoró. A los quince fue "visitado del Señor." Lleno del Espíritu Santo en medio de un pueblo que había "declinado en incredulidad," predicó sin ser escuchado durante décadas. Su legado doctrinal — especialmente sobre la fe, los milagros, y el poder de Dios — es uno de los más profundos del Libro de Mormón.',
  level: 'AVANZADO',
  icon: '🌟',
  duration: 30,
  order: 7812,
  status: 'PUBLISHED',
  submoduleGroup: 'mormon',
  studyBodyPlain: '',
  originalBodyPlain: '',
  studySections: [
    {
      id: 's1',
      title: 'Llamado por Ammoró — Los Diez Años',
      intro: {
        romanNumeral: 'I',
        title: 'Mormón 1:1-4 — La Elección Divina desde la Niñez',
        paragraphs: [
          'El profetismo de Mormón no comenzó en el campo de batalla ni en las planchas. Comenzó con una visita de un anciano profeta a un niño de diez años que había sido observado desde lejos.',
        ],
      },
      topics: [
        {
          id: 't1',
          title: 'El Profeta que Vio en un Niño',
          blocks: [
            {
              type: 'highlight_verse',
              reference: 'Mormón 1:1-3',
              text: 'Y ahora yo, Mormón, hago un registro de las cosas que he visto y oído, y llamo al libro por mi nombre; y es en el nombre de mi padre; y es obra del hombre llamado Mormón. Y Ammoró instruyó mis padres que yo era un niño sobrio y rápido en observar. Entonces quiso él que yo aprendiera la historia de mi pueblo; y él fue un descendiente de Nefi, cuyo padre era un descendiente de Aminadí.',
            },
            {
              type: 'paragraph',
              text: 'La frase "niño sobrio y rápido en observar" es reveladora: Ammoró no buscó a Mormón porque era el hijo del hombre correcto ni porque tenía el rango social adecuado. Lo observó y reconoció una cualidad específica de carácter — sobriedad y capacidad de atención. Esta es la misma clase de criterio con que Dios eligió a David entre los hijos de Isaí: no el más impresionante exteriormente, sino el que tenía el corazón correcto.',
            },
            {
              type: 'doctrine_box',
              title: '¿Quién era Ammoró y por qué su elección de Mormón importa?',
              body: 'Ammoró era el guardián de los registros sagrados antes de Mormón. Al elegir a Mormón a los diez años, estableció una cadena de custodia profética: los registros no pasarían al hijo mayor o al más rico, sino al que Dios había designado por carácter. Ammoró actuó como profeta-mentor, instruyendo a un niño para una misión que no vería completada en su propia vida. Eso requirió una fe y una visión notables — exactamente el tipo de fe que el registro que custodió enseñaba.',
            },
            {
              type: 'key_points',
              title: 'Lo que Ammoró le instruyó a Mormón',
              points: [
                'Aprender la historia del pueblo nefita — preparación intelectual para la compilación',
                'Memorizar la ubicación de los registros en la colina Shim',
                'No tomar las planchas hasta los 24 años — disciplina y timing divino',
                'Entender el peso de la misión — no solo guardar, sino compilar para el futuro',
              ],
            },
            {
              type: 'reflection',
              prompt: '¿Conoces a alguien que, como Ammoró, invirtió en un joven sin ver el fruto de esa inversión? ¿Cómo cambiaría tu forma de relacionarte con los jóvenes saber que podrías estar preparando a un Mormón?',
            },
          ],
        },
      ],
    },
    {
      id: 's2',
      title: 'Visitado por el Señor a los 15 Años',
      intro: {
        romanNumeral: 'II',
        title: 'Mormón 1:15 — La Experiencia Profética Directa',
        paragraphs: [
          'Mormón 1:15 es uno de los versículos más densos del libro que lleva su nombre. En pocas palabras, describe una experiencia que define toda la vida profética de Mormón.',
        ],
      },
      topics: [
        {
          id: 't2',
          title: 'La Visita del Señor — y el Silencio que Siguió',
          blocks: [
            {
              type: 'highlight_verse',
              reference: 'Mormón 1:13-15',
              text: 'Pero yo era joven, y era grande de tamaño; por lo tanto el pueblo de Nefi me nombró su líder, o el hombre que los guiara en sus guerras. Por lo tanto aconteció que en el año trescientos sesenta y trece, al principio, los nefitas comenzaron una guerra con los lamanitas... Y fui visitado del Señor, y probé su bondad y vi las bondades del Señor. Mas el año siguiente fueron hechas cosas en verdad amargas para mí, porque mis oraciones por mi pueblo eran en vano.',
            },
            {
              type: 'paragraph',
              text: 'La yuxtaposición es brutal: en el mismo año en que fue "visitado del Señor y probó su bondad," también intentó predicar al pueblo y fue silenciado (Mormón 1:16-17). Recibió uno de los dones más altos en la vida espiritual — la visita del Señor — y el mismo año fue prohibido de testificar. La experiencia mística no lo protegió del sufrimiento profético de hablar sin audiencia.',
            },
            {
              type: 'highlight_verse',
              reference: 'Mormón 1:16-17',
              text: 'Y el Espíritu del Señor había dejado de contender con sus padres; y el Señor no quiso que yo predicara a ellos, porque el pueblo había endurecido los corazones; así que el Señor no quiso que fuese testigo entre ellos; sino que si así aconteciera, yo sería castigado según las injusticias del pueblo.',
            },
            {
              type: 'paragraph',
              text: 'Esta restricción — "el Señor no quería que yo fuera testigo entre ellos" — es teológicamente notable. Dios puede silenciar a un profeta. No porque el profeta haya fallado, sino porque el pueblo ha llegado a un punto donde el testimonio profético ya no les ayudaría y solo añadiría condenación. Mormón vivió con ese silencio impuesto — una forma de sufrimiento profético que pocos entienden: tener el testimonio y no poder compartirlo.',
            },
            {
              type: 'doctrine_box',
              title: 'Ser lleno del Espíritu en medio de un pueblo que lo había rechazado',
              body: 'Mormón 1:15 dice que fue "visitado del Señor." Pero el contexto es un pueblo que "dwindled in unbelief" (la traducción al inglés usa esa frase). ¿Cómo puede alguien estar lleno del Espíritu Santo rodeado de quienes lo rechazan? La experiencia de Mormón — y de todos los profetas en sociedades que rechazan el evangelio — muestra que la presencia del Espíritu no depende del entorno. Depende de la fidelidad personal. Mormón fue fiel, y el Espíritu lo sostuvo aunque nadie a su alrededor lo escuchara.',
            },
          ],
        },
      ],
    },
    {
      id: 's3',
      title: 'Profetizando a los que No Quieren Escuchar',
      intro: {
        romanNumeral: 'III',
        title: 'El Lamento Profético — Mormón 5:14-16',
        paragraphs: [
          'Uno de los momentos más personales del libro de Mormón es cuando el compilador rompe la narración para lamentar directamente el estado de su pueblo — no como general frustrado, sino como profeta que entendía lo que se perdía.',
        ],
      },
      topics: [
        {
          id: 't3',
          title: 'El Lamento del Profeta',
          blocks: [
            {
              type: 'highlight_verse',
              reference: 'Mormón 5:16-18',
              text: 'Porque he aquí, el Espíritu del Señor ya ha dejado de esforzarse con sus padres; y son sin Cristo y Dios en el mundo; y son lanzados como paja al viento. Habían quedado pues como si no hubiera redención; el Señor ha retirado su influencia de ellos, porque el Espíritu del Señor no mora en moradas impías. Así que son ahora arrojados de presencia del Señor.',
            },
            {
              type: 'paragraph',
              text: 'Mormón escribe estas palabras mientras el pueblo todavía existe — antes de la batalla de Cumorah. Desde la perspectiva profética, ya ve el final. El Espíritu ha dejado de contender. La influencia divina se ha retirado. Usa la imagen de la paja al viento: sin raíz, sin dirección, llevados por fuerzas que no controlan. Es la imagen del destino de un pueblo que rechazó ser plantado.',
            },
            {
              type: 'deep_dive',
              title: 'La soledad del profeta que ama a su pueblo y lo ve perderse',
              paragraphs: [
                'Mormón ocupa una posición sin paralelo: ama profundamente a su pueblo y también ve con claridad profética que están condenados. No puede cambiar el resultado porque el pueblo ha elegido. Puede solo compilar el registro para que sirva de advertencia a otros.',
                'Esta es la condición más dolorosa del profetismo: no el profeta rechazado que no entiende por qué — sino el profeta que entiende perfectamente. Mormón sabía por qué el pueblo caería. Sabía que podría haber sido diferente. Escribió el registro de su declive con la mano de alguien que los amó.',
                'Jeremías vivió algo similar — predicó a Jerusalén sabiendo que la ciudad caería. Ezequiel fue enviado a predicar a un pueblo de "frente dura y corazón obstinado" (Ezequiel 3:7). El profetismo no garantiza que serás escuchado — garantiza que serás fiel.',
              ],
            },
            {
              type: 'reflection',
              prompt: '¿Has tenido que amar a alguien mientras los veías tomar decisiones que sabías los dañarían? ¿Cómo sostuvo Mormón su fe y su amor en ese contexto? ¿Qué te enseña su ejemplo?',
            },
          ],
        },
      ],
    },
    {
      id: 's4',
      title: 'Sus Contribuciones Doctrinales — La Fe y los Milagros',
      intro: {
        romanNumeral: 'IV',
        title: 'Mormón 9 — El Argumento más Poderoso por los Milagros',
        paragraphs: [
          'Moroni 9 — que su hijo Moroni cita de la teología de Mormón — contiene uno de los argumentos más rigurosos y hermosos del Libro de Mormón: por qué los milagros no han cesado y por qué la fe los produce.',
        ],
      },
      topics: [
        {
          id: 't4',
          title: 'El Argumento de Mormón sobre la Fe y los Milagros',
          blocks: [
            {
              type: 'highlight_verse',
              reference: 'Moroni 9:9, 19',
              text: 'Habla al hombre que no tiene fe, y el que no tiene fe está en peligro de perecer, excepto recuerde de quien él aprendió... Y el motivo por qué él deja de hacer milagros entre los hijos de los hombres es porque ellos se apartan de la fe y no se atreven a pedirle; y tampoco tienen fe.',
            },
            {
              type: 'paragraph',
              text: 'El argumento de Mormón (que Moroni preserva en Moroni 9) es limpio y lógico: Dios no cambia (Moroni 8:18). Si obró milagros antes, puede obrarlos ahora. Si no obra milagros ahora, el problema no es Dios — es la falta de fe del receptor. Los milagros no cesan porque Dios se haya vuelto incapaz; cesan porque los que los necesitan no tienen fe para recibirlos o para pedirlos.',
            },
            {
              type: 'key_points',
              title: 'El argumento de Mormón sobre los milagros — estructura lógica',
              points: [
                'Premisa 1: Dios no cambia — es el mismo ayer, hoy, y siempre (Moroni 8:18)',
                'Premisa 2: Dios obró milagros en el pasado — el registro lo documenta',
                'Premisa 3: Los milagros requieren fe del receptor para manifestarse',
                'Conclusión: Si no hay milagros, no es porque Dios haya cambiado — es porque falta la fe',
                'Implicación: Aumenta la fe, y los milagros vuelven — porque Dios nunca se fue',
              ],
            },
            {
              type: 'doctrine_box',
              title: 'Mormón y la inmortalidad de Dios como fundamento doctrinal',
              body: 'Moroni 8:18 — "Porque sé que Dios no es un Dios parcial, ni un ser mutable; antes bien es inmutable desde toda la eternidad hasta toda la eternidad" — es la base de toda la teología de milagros de Mormón. Si Dios cambia, entonces quizás ya no hace milagros. Pero si Dios es inmutable, entonces cualquier ausencia de milagros debe explicarse por factores del lado humano, no del divino. Esta es una de las contribuciones teológicas más significativas de Mormón al canon de la Restauración.',
            },
            {
              type: 'central_quote',
              text: 'Y el motivo por qué él deja de hacer milagros entre los hijos de los hombres es porque ellos se apartan de la fe y no se atreven a pedirle.',
              attribution: 'Moroni 9:20',
            },
          ],
        },
      ],
    },
  ],
}
