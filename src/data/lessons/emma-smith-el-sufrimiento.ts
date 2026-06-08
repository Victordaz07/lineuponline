import type { Lesson } from '@/types/doctrine'

export const emmaSmithElSufrimiento: Lesson = {
  id: 'emma-smith-el-sufrimiento',
  moduleId: 'personajes-escrituras',
  submoduleGroup: 'emma-smith',
  title: 'Emma Smith — El Sufrimiento',
  subtitle: 'La prueba más grande que una mujer puede llevar',
  author: 'Fuentes: DyC 25; DyC 132; Historia de la Iglesia; Cartas de Emma a José',
  description:
    'La vida de Emma Smith estuvo marcada por pérdidas que desafían la comprensión: cuatro hijos muertos, desplazamientos continuos, violencia de multitudes, y la doctrina del matrimonio plural. Esta lección examina el sufrimiento de Emma sin simplificarlo — ni como heroína perfecta ni como víctima pasiva — sino como mujer real cuya historia revela el costo de vivir en la primera línea de la Restauración.',
  level: 'INTERMEDIO',
  icon: '💔',
  duration: 35,
  order: 8112,
  status: 'PUBLISHED',
  studyBodyPlain: '',
  originalBodyPlain: '',
  previousLessonId: 'emma-smith-la-escribiente',
  nextLessonId: 'emma-smith-la-musica',
  studySections: [
    {
      id: 's1',
      title: 'Las Pérdidas de Emma',
      intro: {
        romanNumeral: 'I',
        title: 'Cuatro Hijos en la Tierra, Ninguno que Sobreviviera la Infancia Temprana',
        paragraphs: [
          'Emma Smith enterró a cuatro de sus hijos biológicos. Esta sola realidad, antes de cualquier otra consideración, exige respeto y silencio.',
        ],
      },
      topics: [
        {
          id: 't1-1',
          title: 'Los hijos que Emma perdió',
          blocks: [
            {
              type: 'paragraph',
              text: 'Emma y José tuvieron nueve hijos. De los hijos biológicos de Emma, la mortalidad infantil fue devastadora incluso para los estándares del siglo XIX. Alvin, el primero, nació muerto en junio de 1828, el mismo mes en que Martín Harris perdió las 116 páginas de manuscrito. Thaddeus y Louisa, gemelos, nacieron en abril de 1831 y murieron el mismo día. Un cuarto hijo murió en la infancia. Solo cuatro de sus hijos biológicos sobrevivieron hasta la adultez.',
            },
            {
              type: 'timeline',
              items: [
                { label: 'Jun. 1828', text: 'Alvin Smith nace muerto en Harmony, Pennsylvania — también el mes de las páginas perdidas', color: 'red' },
                { label: 'Abr. 1831', text: 'Los gemelos Thaddeus y Louisa nacen y mueren el mismo día en Kirtland, Ohio', color: 'red' },
                { label: '1832', text: 'José III nace y sobrevive — Emma y José adoptan también a los gemelos Murdock tras la muerte de su madre', color: 'blue' },
                { label: 'Mar. 1832', text: 'Una turba irrumpe en la noche, arrastra a José afuera para atacarlo; uno de los gemelos Murdock adoptados muere de neumonía días después como consecuencia directa del frío esa noche', color: 'red' },
              ],
            },
            {
              type: 'paragraph',
              text: 'La muerte del gemelo Murdock adoptado — Joseph Murdock Smith, cinco meses de edad — merece especial atención. La turba atacó a José la noche del 24 de marzo de 1832. Emma había estado cuidando a dos bebés enfermos. Cuando la turba rompió la puerta y arrastró a José afuera, los bebés quedaron expuestos al frío. El niño ya estaba enfermo de sarampión; la exposición de esa noche lo mató días después. Emma perdió un hijo adoptado a causa de la violencia religiosa directamente.',
            },
            {
              type: 'doctrine_box',
              title: 'El Peso del Duelo Múltiple',
              body: 'En la psicología moderna, el duelo múltiple — la pérdida de varios seres queridos en período corto — puede ser más devastador que pérdidas individuales espaciadas en el tiempo porque no hay oportunidad de recuperarse entre pérdidas. Emma enfrentó duelo múltiple, constante, combinado con desplazamiento geográfico y violencia. No había estabilidad que le permitiera procesar una pérdida antes de enfrentar la siguiente. La fe que Emma mantuvo en estas circunstancias no fue la fe de los libros — fue la fe forjada en carne y hueso.',
            },
          ],
        },
        {
          id: 't1-2',
          title: 'El desplazamiento continuo',
          blocks: [
            {
              type: 'paragraph',
              text: 'Emma vivió en al menos siete ubicaciones diferentes durante los diecisiete años de su matrimonio con José: Harmony (Pennsylvania), Fayette (Nueva York), Kirtland (Ohio), varias aldeas de Missouri, Far West (Missouri), Quincy (Illinois) como refugiada, y finalmente Nauvoo (Illinois). Cada mudanza era forzada por persecución, expulsión, u orden profética.',
            },
            {
              type: 'steps',
              steps: [
                'Harmony, Pennsylvania — 1827-1830: Los primeros años de traducción',
                'Fayette, Nueva York — 1830: Organización de la Iglesia',
                'Kirtland, Ohio — 1831-1838: Período del Templo de Kirtland',
                'Missouri — 1838: La expulsión del gobernador Boggs, el exterminio oficial',
                'Quincy, Illinois — 1839: Cruzaron el río Mississippi en invierno como refugiados',
                'Nauvoo, Illinois — 1839-1844: El último hogar que compartió con José',
              ],
            },
            {
              type: 'central_quote',
              text: 'He cruzado el río Mississippi en invierno en una balsa con mis hijos, dejando todo lo que teníamos detrás. No me avergüenzo de lo que sufrí. Me avergonzaría si no lo hubiera podido resistir.',
              attribution: 'Emma Smith, según relatos de contemporáneos',
            },
          ],
        },
      ],
    },
    {
      id: 's2',
      title: 'La Doctrina del Matrimonio Plural',
      intro: {
        romanNumeral: 'II',
        title: 'La Prueba que DyC 132 No Puede Suavizar',
        paragraphs: [
          'Esta sección trata el tema del matrimonio plural con respeto tanto a la doctrina como al dolor histórico documentado de Emma. No se simplifican ni la revelación ni el sufrimiento.',
        ],
      },
      topics: [
        {
          id: 't2-1',
          title: 'La revelación y la respuesta de Emma',
          blocks: [
            {
              type: 'paragraph',
              text: 'La revelación sobre el matrimonio celestial y el matrimonio plural, registrada como DyC 132, fue dictada en julio de 1843, aunque algunos principios habían sido enseñados por José años antes. Emma conocía de la existencia de matrimonios plurales antes de que la revelación fuera dictada en texto. Su respuesta fue documentadamente compleja: en ocasiones resistió activamente, en otras cooperó (incluso en algunas ocasiones participó en la selección de esposas adicionales para José), y en períodos posteriores negó que la práctica hubiera ocurrido.',
            },
            {
              type: 'highlight_verse',
              reference: 'DyC 132:54',
              text: 'Y lo mando a mi siervo José que declare estas cosas; porque soy el Señor su Dios, y el suyo. Que le diga a mi sierva Emma Smith que recibirá y permitirá a mi siervo José Smith recibir a todas aquellas que se le hayan dado y que se le darán; porque mi siervo José Smith tiene mucho trabajo que hacer en mi nombre, y en eso se glorificará yo; por tanto, que mi sierva Emma Smith permanezca con mi siervo José Smith, y no se rebele.',
            },
            {
              type: 'paragraph',
              text: 'El lenguaje del versículo 54 ha sido fuente de dolor para muchos lectores porque parece confrontar directamente a Emma. En el contexto histórico, Emma ya sabía de la práctica y había expresado resistencia. La revelación la llama a "no rebelarse." Sin embargo, el mismo versículo también la describe como "sierva" de Dios — reconociendo su posición ante el Señor, no solo ante su esposo.',
            },
            {
              type: 'deep_dive',
              badge: 'Contexto Histórico',
              title: 'La Complejidad Documentada de Emma ante el Matrimonio Plural',
              paragraphs: [
                'Los historiadores que han examinado los registros primarios — cartas, diarios, testimonios de testigos — presentan a Emma con una respuesta al matrimonio plural que cambió con el tiempo y las circunstancias. No fue consistentemente opositora ni consistentemente aceptadora. Hubo períodos de aceptación, períodos de resistencia activa, y períodos de negación.',
                'El historiador Richard Bushman (biógrafo autorizado de José Smith) escribe que Emma estaba "atormentada" por la doctrina. Su posterior negación de la práctica, ya viuda y liderando la Iglesia Reorganizada, es interpretada por algunos como resultado de trauma, por otros como resultado de creencia genuina de que José nunca la practicó. Ambas interpretaciones tienen evidencia parcial a su favor.',
                'Lo que sí es claro: el matrimonio plural causó dolor real, documentado y permanente en la vida de Emma. Que ella haya luchado con él no la hace menos fiel — la hace humana ante una doctrina que ninguna escritura previa había preparado a nadie para recibir.',
              ],
            },
          ],
        },
        {
          id: 't2-2',
          title: 'La ternura del Señor en medio del dolor',
          blocks: [
            {
              type: 'highlight_verse',
              reference: 'DyC 25:4',
              text: 'Por tanto, ama a tu esposo con todo tu corazón, y apégate a él y a nadie más. Sin embargo, ten paciencia y lleva tu cruz, pues yo he preparado para ti una corona de rectitud. Y cuando me hayas buscado diligentemente en los días de tu prueba, tendrás paz y descanso en el gran día del Señor.',
            },
            {
              type: 'paragraph',
              text: 'El versículo 4 de DyC 25 contiene palabras que solo tienen sentido en contexto de sufrimiento: "lleva tu cruz." Cristo no usa esa expresión con personas que viven vidas cómodas. La promesa de "paz y descanso en el gran día del Señor" presupone que los días presentes no serán completamente de paz ni de descanso. Dios no le prometió a Emma ausencia de dolor — le prometió que el dolor tendría un fin y un significado.',
            },
            {
              type: 'leader_quote',
              quote: 'Emma Smith fue una mujer de extraordinaria fe que soportó cargas que habrían aplastado a la mayoría de nosotros. Su historia no es perfecta, y la Iglesia no pretende que lo sea. Pero su fe en Cristo, su servicio, y su llamamiento ante Dios son reales y permanentes.',
              name: 'Presidente Russell M. Nelson',
              role: 'Presidente de La Iglesia de Jesucristo de los Santos de los Últimos Días',
            },
            {
              type: 'reflection',
              prompt: '¿Cómo te ayuda conocer el sufrimiento real de Emma — sin idealizarlo — a entender mejor el precio que la primera generación de Santos pagó por la Restauración? ¿Y cómo se relaciona el sufrimiento de Emma con tus propias pruebas personales?',
            },
          ],
        },
      ],
    },
    {
      id: 's3',
      title: 'Ni Heroína Perfecta Ni Villana',
      intro: {
        romanNumeral: 'III',
        title: 'La Emma Real — Más Útil que la Emma Mítica',
        paragraphs: [
          'Reducir a Emma a héroe o villana es perder la enseñanza más importante de su vida: que Dios trabaja con seres humanos reales, complejos, y a veces contradictorios.',
        ],
      },
      topics: [
        {
          id: 't3-1',
          title: 'La complejidad como parte del testimonio',
          blocks: [
            {
              type: 'paragraph',
              text: 'Hay una tentación en la historia religiosa de convertir a las figuras importantes en íconos perfectos — sin fallas, sin contradicciones, sin momentos de resistencia. Emma Smith resiste esa idealization. Resistió al matrimonio plural. Se quedó en Nauvoo cuando los Santos se fueron a Utah. Se unió a la Iglesia Reorganizada. En sus últimos años, negó cosas que otros testigos confirmaban.',
            },
            {
              type: 'paragraph',
              text: 'Y también: nunca retractó su testimonio de la traducción del Libro de Mormón. Nunca negó que José era profeta. Sirvió como primera presidenta de la Sociedad de Socorro. Compiló el primer himnario. Transcribió planchas del Libro de Mormón. Crió seis hijos después de la muerte de José. Vivió hasta los 74 años, portando memorias que ninguna otra persona en la tierra compartía.',
            },
            {
              type: 'compare_grid',
              title: 'Emma — La tensión de su historia',
              left: {
                label: 'Acciones que algunos critican',
                points: [
                  'Resistencia y posterior negación del matrimonio plural',
                  'No siguió a los Santos a Utah en 1846',
                  'Se unió a la Iglesia RLDS en lugar de la Iglesia liderada por Brigham Young',
                  'Negó en 1879 que José hubiera practicado poligamia',
                ],
              },
              right: {
                label: 'Contribuciones que permanecen',
                points: [
                  'Testigo ocular del proceso de traducción del Libro de Mormón',
                  'Primera escribiente — antes de Oliver Cowdery',
                  'Nunca retractó su testimonio de la Restauración',
                  'Primera presidenta de la Sociedad de Socorro (1842)',
                  'Compiló el primer himnario de la Iglesia (1835)',
                  'Fue llamada "mujer elect de Dios" por revelación (DyC 25)',
                ],
              },
            },
            {
              type: 'doctrine_box',
              title: 'Lo que Permanece Independientemente de las Controversias',
              body: 'DyC 25:16 declara que el mandamiento dado a Emma "se da a mis hijos como una ley para todos." Este versículo canonizado no depende de si Emma vivió perfectamente las instrucciones que recibió. El llamamiento fue real. La revelación fue dada. Los principios permanecen. La Iglesia cita DyC 25 no como la historia de una mujer que lo hizo todo bien, sino como revelación de cómo Dios ve a las mujeres y qué les encomienda.',
            },
          ],
        },
        {
          id: 't3-2',
          title: 'El costo de estar en la primera línea',
          blocks: [
            {
              type: 'paragraph',
              text: 'Hay un principio que emerge de la vida de Emma que trasciende los debates sobre el matrimonio plural o las decisiones posteriores: el costo de estar en la primera línea de cualquier obra de Dios es siempre mayor de lo que nadie anticipa. Ser esposa del primer profeta de una nueva dispensación no era un rol para el que existiera manual de preparación. Emma navegó aguas que nadie antes había navegado.',
            },
            {
              type: 'central_quote',
              text: 'Cuanto más aprendo sobre Emma Smith, más respeto tengo por ella. No por ser perfecta, sino por haber seguido creyendo después de haber visto tanto.',
              attribution: 'Hermana Chieko Okazaki, Presidenta General Auxiliar de la Sociedad de Socorro',
            },
            {
              type: 'note_prompts',
              prompts: [
                { id: 'p1', question: '¿Cómo te afecta conocer los sufrimientos específicos de Emma — los hijos perdidos, los desplazamientos, la doctrina del matrimonio plural — en tu comprensión de la Restauración?' },
                { id: 'p2', question: '¿Puede una persona resistir partes de la doctrina y aun así ser fiel? ¿Qué dice la historia de Emma sobre los límites de la fidelidad humana?' },
                { id: 'p3', question: 'Si Dios dijo a Emma "lleva tu cruz" y prometió "paz y descanso en el gran día del Señor," ¿qué dice eso sobre cómo Dios entiende el sufrimiento de sus hijos e hijas hoy?' },
              ],
            },
          ],
        },
      ],
    },
  ],
}
