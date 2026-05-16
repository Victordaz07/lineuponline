import type { Lesson } from '@/types/doctrine'

export const laSalvacionDeLosNoBautizados: Lesson = {
  id: 'la-salvacion-de-los-no-bautizados',
  moduleId: 'temas-profundos',
  title: 'La Salvación de los No Bautizados',
  subtitle: '¿Qué pasa con los que nunca oyeron el evangelio?',
  author: 'Fuentes: DyC 137, 138, 128, 76; 1 Corintios 15:29; 1 Pedro 3:18-20; 4:6; José Smith',
  description:
    'Cerca del 100 mil millones de personas han vivido en la Tierra. La gran mayoría murió sin bautismo ni conocimiento del evangelio restaurado. ¿Las condena Dios? El evangelio tiene una respuesta completa y coherente que el cristianismo tradicional nunca pudo dar — y que establece las bases doctrinales del trabajo de templo.',
  level: 'AVANZADO',
  icon: '🌊',
  duration: 70,
  order: 3,
  status: 'PUBLISHED',
  studyBodyPlain: '',
  originalBodyPlain: '',
  previousLessonId: null,
  nextLessonId: null,
  studySections: [
    {
      id: 's1',
      title: 'La Pregunta que Incomoda',
      intro: {
        romanNumeral: 'I',
        title: 'La Pregunta que Incomoda',
        paragraphs: [
          'Se estima que entre 80 y 108 mil millones de seres humanos han vivido en la Tierra. Si el bautismo es necesario para la salvación, y si solo hay salvación a través de la Iglesia restaurada — ¿qué pasa con todos los que nacieron antes de la Restauración? ¿Con los que vivieron en continentes donde el evangelio nunca llegó? El evangelio restaurado tiene una respuesta. Pero hay que tomarse el tiempo de entenderla bien.',
        ],
      },
      topics: [
        {
          id: 't1',
          title: 'El Problema Real y la Respuesta Incompleta',
          blocks: [
            {
              type: 'compare_grid',
              title: 'La respuesta del cristianismo clásico vs. la Restauración',
              left: {
                label: 'Respuestas del cristianismo tradicional',
                points: [
                  'Calvino: los no elegidos simplemente no se salvan — es la voluntad soberana de Dios',
                  'Católicos: limbo para los niños no bautizados (doctrina revisada en 2007)',
                  'Algunos protestantes: Dios juzga la "luz que recibieron" — vago y no escritural',
                  'Problema común: ninguna respuesta explica cómo el bautismo (necesario) se aplica a quien nunca pudo recibirlo',
                  'Consecuencia teológica: un Dios que condena por circunstancia de nacimiento',
                ],
              },
              right: {
                label: 'La Restauración (DyC 137, 138, 128)',
                points: [
                  'Las ordenanzas son necesarias — pero Dios provee una manera para todos',
                  'El mundo de los espíritus es el campo misional para los que murieron sin el evangelio',
                  'Las ordenanzas vicarias del templo dan acceso a los muertos que aceptan',
                  'Dios juzga sobre lo que la persona "habría hecho" si hubiera tenido la oportunidad (DyC 137:7)',
                  'Un Dios infinitamente justo y misericordioso — nadie condenado por nacimiento',
                ],
              },
            },
            {
              type: 'doctrine_box',
              title: 'Por qué esta doctrina importa fuera de la teología',
              body: 'La doctrina de la salvación de los no bautizados no es solo un tecnicismo doctrinal — es la revelación de la naturaleza del Dios que adoramos. Un Dios que condena a los que nunca oyeron el evangelio no es un Dios al que valga la pena adorar. La Restauración revela un Dios cuya justicia es tan refinada que llega hasta cada alma individual — incluyendo las que vivieron en épocas y lugares donde ningún misionero pudo llegar. Eso transforma la imagen de Dios completamente.',
            },
            {
              type: 'paragraph',
              text: 'Joseph Smith dijo: "La mayor responsabilidad que Dios ha puesto sobre nosotros en este mundo es buscar a nuestros muertos." No como actividad opcional para los entusiastas de la genealogía — como imperativo doctrinal. La salvación de los muertos está entrelazada con la salvación de los vivos. "Ellos sin nosotros no pueden ser hechos perfectos" (DyC 128:15).',
            },
          ],
        },
      ],
    },
    {
      id: 's2',
      title: 'DyC 137 — Alvin en el Cielo',
      intro: {
        romanNumeral: 'II',
        title: 'DyC 137 — Alvin en el Cielo',
        paragraphs: [
          'El 21 de enero de 1836, mientras se realizaba una dedicación de habitaciones en el templo de Kirtland, Joseph Smith recibió una visión. Lo que vio cambió la teología de la salvación: su hermano Alvin — muerto años antes del establecimiento de la Iglesia, sin bautismo — estaba en el reino celestial.',
        ],
      },
      topics: [
        {
          id: 't2',
          title: 'La Visión de Alvin — DyC 137',
          blocks: [
            {
              type: 'media_slot',
              kind: 'image',
              src: undefined,
              alt: 'El templo de Kirtland Ohio — donde José Smith recibió DyC 137 en enero de 1836',
              caption: 'Templo de Kirtland, Ohio — primera dedicación del templo en la Restauración (1836)',
              contextCard: {
                year: '1836',
                place: 'Kirtland, Ohio',
                label: 'no-bautizados-templo-kirtland-dyc137',
              },
            },
            {
              type: 'highlight_verse',
              text: 'Vi al padre Adam y Abraham; y mi padre y mi madre; a mi hermano Alvin, que hacía muchos años que había fallecido, y me maravillé cómo era que él hubiese obtenido un emplazamiento en el reino celestial, sabiendo que él había partido este mundo antes que el Señor hubiera dado los principios del evangelio.',
              reference: 'Doctrina y Convenios 137:5–6',
            },
            {
              type: 'highlight_verse',
              text: 'Todos los que han muerto sin conocimiento de este evangelio, que lo habrían recibido si les hubiera sido permitido permanecer en la carne, serán herederos del reino celestial de Dios; también todos los que mueren de ahora en adelante sin conocimiento de él, que habrían recibido con todo su corazón, serán herederos de ese reino.',
              reference: 'Doctrina y Convenios 137:7–8',
            },
            {
              type: 'doctrine_box',
              title: 'El principio del "habrían recibido" — la clave de todo',
              body: 'DyC 137:7-8 introduce un principio sin precedente en el pensamiento religioso occidental: Dios juzga no solo sobre lo que la persona hizo, sino sobre lo que habría hecho si hubiera tenido la oportunidad. Esto significa que el juicio eterno no es una evaluación de las circunstancias accidentales de nacimiento — es una lectura del corazón. Un honesto habitante de una cultura que nunca oyó el evangelio, cuyo corazón habría respondido con fe, recibe la misma misericordia que quien oyó y creyó. El Dios de la Restauración conoce el corazón, no solo el historial religioso.',
            },
            {
              type: 'paragraph',
              text: 'Alvin Smith murió en 1823, once años antes de que Joseph fundara la Iglesia. No fue bautizado en la Iglesia restaurada — era imposible. Pero Joseph vio que estaba en el reino celestial. La revelación no dice que las ordenanzas no importan — dice que Dios tiene un sistema para proveer esas ordenanzas a todos los que habrían respondido. Ese sistema es el trabajo de templo.',
            },
            {
              type: 'highlight_verse',
              text: 'Pues yo, el Señor, juzgaré a todos los hombres según sus obras, según el deseo de sus corazones.',
              reference: 'Doctrina y Convenios 137:9',
            },
          ],
        },
      ],
    },
    {
      id: 's3',
      title: 'El Bautismo por los Muertos — DyC 128 y 1 Corintios 15',
      intro: {
        romanNumeral: 'III',
        title: 'El Bautismo por los Muertos — DyC 128 y 1 Corintios 15',
        paragraphs: [
          'Si las ordenanzas son necesarias y los muertos no las pueden recibir directamente, la solución lógica es que alguien las reciba en su nombre. Esta práctica — el bautismo por los muertos — no fue inventada por Joseph Smith. Pablo la mencionó en el siglo I. La Restauración la restauró y explicó.',
        ],
      },
      topics: [
        {
          id: 't3',
          title: 'La Práctica Primitiva Restaurada',
          blocks: [
            {
              type: 'highlight_verse',
              text: 'De otro modo, ¿qué harán los que se bautizan por los muertos, si en ninguna manera los muertos resucitan? ¿Por qué, pues, se bautizan por los muertos?',
              reference: '1 Corintios 15:29',
            },
            {
              type: 'deep_dive',
              badge: 'Texto Bíblico',
              title: '1 Corintios 15:29 — el versículo más ignorado de Pablo',
              paragraphs: [
                'En 1 Corintios 15, Pablo argumenta a favor de la resurrección. En el versículo 29, menciona de pasada — como si fuera obvio para sus lectores — que "los que se bautizan por los muertos" existían en la iglesia del siglo I. No explica la práctica ni la defiende; simplemente la usa como argumento lógico para la resurrección.',
                'Los comentaristas bíblicos llevan 1,800 años intentando explicar este versículo sin aceptar su significado literal. El Nuevo Testamento Griego de Erasmus simplemente lo dejó sin comentario. Tertuliano (siglo II) lo mencionó como una práctica existente. Después, gradualmente desapareció de la iglesia primitiva junto con otras doctrinas durante la Gran Apostasía.',
                'La Restauración no inventó el bautismo por los muertos — lo restauró. Y añadió la explicación teológica que el texto de Pablo asume pero no da: los muertos que aceptan el evangelio en el mundo de los espíritus pueden beneficiarse de ordenanzas vicarias realizadas en su nombre en la Tierra.',
              ],
            },
            {
              type: 'highlight_verse',
              text: 'Pues nuestros muertos redimidos pueden ser hechos perfectos sin nosotros, ni nosotros sin nuestros muertos — porque en los días posteriores tiene que venir una obra poderosa que reúna y una a todos los santos y lo que ha sido separado.',
              reference: 'Doctrina y Convenios 128:15 (paráfrasis)',
            },
            {
              type: 'highlight_verse',
              text: 'Y además, ¿qué dirán aquellos que practican el bautismo por sus muertos? ¿Por qué son bautizados por los muertos, a menos que la resurrección de los muertos sea absolutamente cierta?... Los muertos que fallecieron sin un conocimiento de este evangelio, y que la habrían recibido si se les hubiere permitido permanecer, estarán herederos del reino celestial de Dios.',
              reference: 'Doctrina y Convenios 128:17',
            },
            {
              type: 'key_points',
              title: 'Cómo funciona el bautismo por los muertos',
              points: [
                'Un miembro vivo es bautizado en el templo en nombre de un antepasado fallecido',
                'El espíritu del antepasado, en el mundo de los espíritus, puede aceptar o rechazar esa ordenanza libremente',
                'La ordenanza no fuerza la salvación de nadie — abre la puerta sin obligar a entrar',
                'Si el espíritu rechaza el evangelio, la ordenanza no tiene efecto — el libre albedrío está completamente intacto',
                'Lo mismo ocurre con confirmación, endowment, y sellamiento — todas se pueden hacer vicariamente',
              ],
            },
          ],
        },
      ],
    },
    {
      id: 's4',
      title: 'DyC 138 — El Mundo de los Espíritus como Campo Misional',
      intro: {
        romanNumeral: 'IV',
        title: 'DyC 138 — El Mundo de los Espíritus como Campo Misional',
        paragraphs: [
          'Si las ordenanzas vicarias del templo abren la puerta, ¿quién predica el evangelio a los que están detrás de esa puerta? DyC 138 — la visión de Joseph F. Smith en 1918 — revela que el mundo de los espíritus tiene su propio sistema misional activo, organizado por Cristo mismo durante los tres días entre su muerte y resurrección.',
        ],
      },
      topics: [
        {
          id: 't4',
          title: 'La Visión de Joseph F. Smith — 1918',
          blocks: [
            {
              type: 'highlight_verse',
              text: 'Mientras meditaba en el gran trabajo expiatorio del Salvador, cómo ofreció su vida por los pecados del mundo [...] mis ojos fueron abiertos, y mi entendimiento fue iluminado, de modo que vi la hueste de los espíritus de los muertos, tanto pequeños como grandes.',
              reference: 'Doctrina y Convenios 138:11',
            },
            {
              type: 'paragraph',
              text: 'En DyC 138:29-37, Joseph F. Smith ve cómo Cristo, después de su muerte, organizó el trabajo misional en el mundo de los espíritus. No fue directamente a los que estaban en "prisión espiritual" — fue al Paraíso, donde estaban los justos, y los organizó y envió a predicar a los que no habían tenido la oportunidad. Los que habían muerto fieles al evangelio en esta vida se convirtieron en misioneros en el siguiente.',
            },
            {
              type: 'highlight_verse',
              text: 'He aquí que el Redentor pasó, mientras su cuerpo yacía en el sepulcro, a predicar a los espíritus encarcelados; y organizó sus fuerzas y nombró mensajeros, revestidos de poder y autoridad, para salir e impartir la luz del evangelio a todos los que estaban en las tinieblas.',
              reference: 'Doctrina y Convenios 138:29–30',
            },
            {
              type: 'deep_dive',
              badge: 'Pedro y la Tradición Primitiva',
              title: '1 Pedro 3:18-20 — Cristo predicó a los "espíritus en prisión"',
              paragraphs: [
                '1 Pedro 3:18-20 dice: "Cristo también padeció [...] siendo a la verdad muerto en la carne, pero vivificado en espíritu; en el cual también fue y predicó a los espíritus encarcelados, los que en otro tiempo desobedecieron." Y 1 Pedro 4:6 añade: "porque por esto también ha sido predicado el evangelio a los muertos, para que sean juzgados en carne según los hombres, pero vivan en espíritu según Dios."',
                'Pedro estaba describiendo exactamente lo que DyC 138 revela siglos después: Cristo visitó el mundo de los espíritus y predicó a los que no habían tenido la oportunidad en vida. La iglesia primitiva tenía este conocimiento — pero sin el contexto completo de la Restauración, los comentaristas bíblicos lo redujeron a alegoría o lo ignoraron.',
                'DyC 138 no solo confirma 1 Pedro — lo expande: revela que no fue Cristo personalmente quien fue a cada espíritu, sino que organizó a los justos del Paraíso para llevar el mensaje. La obra misional post-mortal es un sistema organizado, no un evento puntual.',
              ],
            },
            {
              type: 'key_points',
              title: 'Quiénes reciben el evangelio en el mundo de los espíritus (DyC 138)',
              points: [
                'Los que "murieron en sus pecados sin conocimiento de la verdad" (v.58)',
                'Los que "hubieran transgredido las leyes habidas" — ignorancia culpable pero no deliberada rechazo',
                '"Toda la raza humana" que no tuvo oportunidad justa (v.57)',
                'Los que rechazan el evangelio en esa etapa permanecen en prisión espiritual — el libre albedrío es total',
                'La oportunidad se extiende a todos — pero no todos la aceptan',
              ],
            },
          ],
        },
      ],
    },
    {
      id: 's5',
      title: 'Los Niños Que Mueren Sin Bautismo',
      intro: {
        romanNumeral: 'V',
        title: 'Los Niños Que Mueren Sin Bautismo',
        paragraphs: [
          'Un caso especial dentro de la doctrina: los niños que mueren antes de la edad de responsabilidad. DyC 137:10 los menciona explícitamente, y Moroni 8 contiene la refutación más directa del Libro de Mormón contra cualquier doctrina que los condene.',
        ],
      },
      topics: [
        {
          id: 't5',
          title: 'Moroni 8 y DyC 137:10',
          blocks: [
            {
              type: 'highlight_verse',
              text: 'Y todos los niños pequeños son vivos en Cristo, y también todos aquellos que están sin ley. Porque el poder de la expiación satisface todos los requisitos en cuanto a los niños pequeños, y los que están sin ley se salvarán por su causa.',
              reference: 'Moroni 8:22',
            },
            {
              type: 'highlight_verse',
              text: 'Y yo vi también que todos los niños que mueren antes de llegar a los años de responsabilidad son salvos en el reino celestial del cielo.',
              reference: 'Doctrina y Convenios 137:10',
            },
            {
              type: 'doctrine_box',
              title: 'Moroni 8 — La carta más contundente del Libro de Mormón',
              body: 'Moroni 8 es una carta de Mormon a su hijo Morón sobre una controversia que había surgido en la iglesia nefiita: algunos argumentaban que los niños necesitaban bautismo. La respuesta de Mormon es la más directa e indignada de cualquier apóstol del Libro de Mormón: "¡Cuán grande es la iniquidad de quien enseña que los niños necesitan bautismo!" (v.15). El argumento: el bautismo es para el arrepentimiento, los niños no tienen pecados de los cuales arrepentirse, y bautizarlos implica que Cristo murió en vano para ellos. DyC 137:10 confirma la doctrina de forma positiva: todos los que mueren antes de la edad de responsabilidad (ocho años, DyC 68:27) son "salvos en el reino celestial."',
            },
            {
              type: 'key_points',
              title: 'Tres categorías especiales cubiertos por la Expiación',
              points: [
                'Niños que mueren antes de los 8 años — salvos automáticamente en el reino celestial (DyC 137:10, Moroni 8:22)',
                'Los que "están sin ley" — personas con capacidades que impiden la responsabilidad moral plena; cubiertos por la Expiación (Moroni 8:22)',
                'Los que "murieron sin conocimiento del evangelio" y lo habrían aceptado — herederos del celestial bajo el principio de DyC 137:7-8',
              ],
            },
            {
              type: 'leader_quote',
              quote: 'La Expiación de Cristo no es un instrumento estrecho que solo funciona para los que tuvieron la suerte de nacer en el tiempo y el lugar correctos. Es un instrumento infinito, capaz de alcanzar a cada alma que Dios ha enviado a la Tierra — incluyendo las que murieron sin haber podido caminar un solo día con plena responsabilidad. La misericordia de Dios no es menor que su justicia: es exactamente tan grande como su justicia lo requiere.',
              name: 'Bruce R. McConkie',
              role: '"Salvation of Little Children", Ensign, abril 1977 (trad.)',
            },
          ],
        },
      ],
    },
    {
      id: 's6',
      title: 'La Responsabilidad de los Que Saben',
      intro: {
        romanNumeral: 'VI',
        title: 'La Responsabilidad de los Que Saben',
        paragraphs: [
          'La doctrina de la salvación de los no bautizados no reduce la importancia del evangelio en esta vida — la amplifica. Cuanto más misericordioso es Dios con los que no tuvieron la oportunidad, mayor es la responsabilidad de los que sí la tienen. El trabajo de templo no es opcional: es el puente entre el mundo de los espíritus y las ordenanzas necesarias.',
        ],
      },
      topics: [
        {
          id: 't6',
          title: 'La Responsabilidad Doble del Santo',
          blocks: [
            {
              type: 'media_slot',
              kind: 'image',
              src: undefined,
              alt: 'Persona en la sala de bautismos para los muertos del templo — pila bautismal sobre toros de bronce',
              caption: 'La pila bautismal del templo — el lugar donde la misericordia de Dios alcanza a los que ya partieron',
              contextCard: {
                label: 'no-bautizados-bautismos-muertos-templo',
              },
            },
            {
              type: 'highlight_verse',
              text: 'Pues nuestros muertos redimidos pueden ser hechos perfectos sin nosotros, ni nosotros sin nuestros muertos; porque en los días posteriores tiene que venir una obra poderosa, de modo que todo el conocimiento sea restaurado para el poder de los últimos días.',
              reference: 'Doctrina y Convenios 128:15',
            },
            {
              type: 'doctrine_box',
              title: '"Ellos sin nosotros no pueden ser hechos perfectos" — y nosotros sin ellos tampoco',
              body: 'DyC 128:15 introduce un principio de interdependencia eterna: los muertos necesitan que los vivos hagan las ordenanzas vicarias; y los vivos necesitan a los muertos para completar la cadena de convenios que une las dispensaciones. La salvación no es un asunto individual — es familiar, generacional, y cósmico. Joseph Smith enseñó que el sellamiento de las generaciones — la cadena ininterrumpida de convenios desde Adán hasta la Segunda Venida — es el propósito central del trabajo de templo. Malaquías 4:5-6: "él volverá el corazón de los padres hacia los hijos, y el corazón de los hijos hacia los padres."',
            },
            {
              type: 'compare_grid',
              title: 'Mayor conocimiento = mayor responsabilidad',
              left: {
                label: 'Los que murieron sin el evangelio',
                points: [
                  'Juzgados según lo que habrían hecho (DyC 137:7)',
                  'Oyen el evangelio en el mundo de los espíritus',
                  'Pueden aceptar o rechazar libremente',
                  'Las ordenanzas vicarias están disponibles para ellos',
                  'Su responsabilidad es proporcional a su conocimiento',
                ],
              },
              right: {
                label: 'Los que tienen el evangelio completo',
                points: [
                  'Juzgados según lo que realmente hicieron',
                  'Responsables de compartir el evangelio',
                  'Responsables del trabajo de templo por sus muertos',
                  'Responsables de vivir los convenios que recibieron',
                  'Mayor conocimiento = mayor expectativa (Lucas 12:48)',
                ],
              },
            },
            {
              type: 'paragraph',
              text: 'Lucas 12:48: "A todo aquel a quien se haya dado mucho, mucho se le demandará." La doctrina de la salvación de los no bautizados no es una invitación a la complacencia espiritual — es un llamado a la urgencia. Cada persona que no ha tenido la oportunidad de oír el evangelio depende, en parte, de los santos vivos: para hacer el trabajo de templo, para compartir el evangelio, para mantener viva la cadena de convenios que conecta las generaciones.',
            },
            {
              type: 'quiz',
              quizType: 'true_false',
              question: 'Según DyC 137:7-8, Dios juzga a los que murieron sin el evangelio según lo que habrían hecho si hubieran tenido la oportunidad de recibirlo.',
              answer: true,
              explanation: 'Correcto. DyC 137:7-8 enseña que "todos los que han muerto sin conocimiento de este evangelio, que lo habrían recibido si les hubiera sido permitido permanecer en la carne, serán herederos del reino celestial." El juicio es sobre el corazón — no sobre las circunstancias accidentales de nacimiento. Esto es lo que Joseph Smith vio al ver a su hermano Alvin en el cielo.',
            },
            {
              type: 'quiz',
              quizType: 'fill_blank',
              question: 'En DyC 128:15, José Smith enseña que los muertos no pueden ser hechos perfectos sin nosotros, ni nosotros sin _____.',
              answer: 'nuestros muertos',
              explanation: '"Nuestros muertos redimidos pueden ser hechos perfectos sin nosotros, ni nosotros sin nuestros muertos." (DyC 128:15). Este principio de interdependencia eterna establece que la salvación no es un asunto puramente individual — los vivos y los muertos están vinculados en una cadena de convenios que debe cerrarse antes de que la obra sea completa.',
            },
            {
              type: 'reflection',
              prompt: '¿Cómo cambia tu imagen de Dios saber que diseñó un sistema para que nadie quede condenado por circunstancias de nacimiento? ¿Has hecho alguna vez trabajo de templo por tus antepasados? ¿Hay alguien en tu árbol genealógico cuyas ordenanzas vicarias están pendientes? Y la pregunta más personal: ¿tu comprensión de la salvación de los no bautizados te hace más urgente en el trabajo de templo o más complaciente — y por qué?',
            },
          ],
        },
      ],
    },
  ],
}
