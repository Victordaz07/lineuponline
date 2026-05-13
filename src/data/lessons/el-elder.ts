import type { Lesson } from '@/types/doctrine'

export const elElder: Lesson = {
  id: 'el-elder',
  moduleId: 'sacerdocio',
  title: 'El Élder',
  subtitle: 'El primer oficio del Sacerdocio de Melquisedec',
  description:
    'El Élder recibe la plenitud del sacerdocio con autoridad para administrar todas las ordenanzas de salvación, dar bendiciones de sanación, servir misión y presidir en la Iglesia.',
  level: 'INTERMEDIO',
  icon: '🔑',
  duration: 45,
  order: 7,
  status: 'PUBLISHED',
  studyBodyPlain: '',
  originalBodyPlain: '',
  studySections: [
    {
      id: 's1',
      title: 'El Élder: El Primer Oficio del Sacerdocio de Melquisedec',
      intro: {
        romanNumeral: 'I',
        title: 'El Élder: El Primer Oficio del Sacerdocio de Melquisedec',
      },
      topics: [
        {
          id: 'oficio-elder',
          title: 'La plenitud del sacerdocio — la transición más importante de la vida',
          subtitle:
            'Cuando un joven es ordenado Élder, recibe autoridad para administrar todas las ordenanzas de salvación. No es una promoción — es una consagración.',
          blocks: [
            {
              type: 'paragraph',
              text: 'El Élder es el primer oficio del Sacerdocio de Melquisedec. La palabra «élder» viene del griego presbuteros — anciano — y en la Iglesia primitiva identificaba a los líderes y ministros de las congregaciones (Hechos 14:23, Tito 1:5). En la Iglesia restaurada, el Élder tiene autoridad completa para administrar todas las ordenanzas del evangelio.',
            },
            {
              type: 'highlight_verse',
              text: '"El deber de un élder es administrar en asuntos espirituales; y de conformidad con los convenios y mandamientos de la iglesia, de efectuar el oficio de maestro, también el de sacerdote, es decir, predicar, enseñar, exponer, exhortar, bautizar y velar sobre la iglesia; y confirmar a los de la iglesia mediante la imposición de manos, y dar el Espíritu Santo."',
              reference: 'Doctrina y Convenios 20:42–44',
            },
            {
              type: 'doctrine_box',
              title: 'Lo que puede hacer el Élder que no podía el Presbítero',
              body: '(1) Conferir el Espíritu Santo — imposición de manos después del bautismo. (2) Dar bendiciones de sanación — al enfermo, al afligido, al atribulado. (3) Bendecir bebés — consagrar su nombre ante el Señor. (4) Ordenar a Élderes y a otros oficios del Sacerdocio Aarónico. (5) Dirigir todas las reuniones de la Iglesia. (6) Recibir y administrar todas las ordenanzas del templo.',
            },
            {
              type: 'compare_grid',
              title: 'De Presbítero a Élder',
              left: {
                title: 'Presbítero (Aarónico)',
                items: [
                  'Administra la Santa Cena',
                  'Bautiza',
                  'Ordena dentro del Sacerdocio Aarónico',
                  'Conduce reuniones en ausencia de autoridad superior',
                  'Clave de ministerio de ángeles',
                ],
              },
              right: {
                title: 'Élder (Melquisedec)',
                items: [
                  'Todo lo del Presbítero, más...',
                  'Confiere el Espíritu Santo',
                  'Da bendiciones de sanación',
                  'Ordena a Élderes y Sumos Sacerdotes',
                  'Recibe todas las ordenanzas del templo',
                  'Puede presidir congregaciones',
                ],
              },
            },
            {
              type: 'timeline',
              items: [
                {
                  label: 'Mayo–Junio 1829',
                  text: 'Pedro, Santiago y Juan restauran el Sacerdocio de Melquisedec a José Smith y Oliver Cowdery.',
                  color: 'gold',
                },
                {
                  label: '6 de abril de 1830',
                  text: 'Se organiza la Iglesia. José Smith y Oliver Cowdery se ordenan mutuamente como primeros Élderes.',
                  color: 'blue',
                },
                {
                  label: '1831',
                  text: 'La conferencia de la Iglesia ordena Élderes misioneros. El sacerdocio se expande con la Iglesia.',
                  color: 'green',
                },
                {
                  label: 'Hoy',
                  text: 'Millones de Élderes activos en todo el mundo. Cada misión, cada barrio, cada bendición — el sacerdocio continúa.',
                  color: 'gold',
                },
              ],
            },
          ],
        },
      ],
    },
    {
      id: 's2',
      title: 'La Restauración del Sacerdocio de Melquisedec',
      intro: {
        romanNumeral: 'II',
        title: 'La Restauración del Sacerdocio de Melquisedec',
      },
      topics: [
        {
          id: 'restauracion-melquisedec',
          title: 'Pedro, Santiago y Juan — la cadena desde el Señor mismo',
          subtitle:
            'El Sacerdocio de Melquisedec fue restaurado por aquellos a quienes Cristo mismo lo confirió. La cadena de autoridad es directa e ininterrumpida.',
          blocks: [
            {
              type: 'paragraph',
              text: 'Mientras el Sacerdocio Aarónico fue restaurado por Juan el Bautista en mayo de 1829, el Sacerdocio de Melquisedec fue restaurado por Pedro, Santiago y Juan — los tres apóstoles que Jesucristo mismo llamó y ordenó durante su ministerio terrenal. Ellos aparecieron a José Smith y Oliver Cowdery en junio de 1829.',
            },
            {
              type: 'highlight_verse',
              text: '"Y también con Pedro, Santiago y Juan, a quienes he conferido las llaves de mi reino y un ministerio de ángeles; que no os fué quitado con el tiempo, sino que fue confirmado; y también el convenio, que ha de ser cumplido en el último tiempo, incluso el regreso de los Judíos y toda la casa de Israel."',
              reference: 'Doctrina y Convenios 27:12–13',
            },
            {
              type: 'deep_dive',
              badge: 'Historia',
              title: '¿Por qué Pedro, Santiago y Juan?',
              paragraphs: [
                'Jesús eligió a estos tres apóstoles para los momentos más sagrados de su ministerio: la Transfiguración (Mateo 17:1-9), donde recibieron la confirmación divina del reino, y Getsemaní (Mateo 26:37), donde fueron los compañeros más cercanos en la hora más oscura.',
                'En la Transfiguración, Moisés y Elías aparecieron y entregaron llaves — incluyendo las llaves de la dispensación de los últimos días. Pedro, Santiago y Juan fueron testigos y receptores de esas llaves.',
                'Cuando restauraron el Sacerdocio de Melquisedec a José y Oliver, no estaban transmitiendo solo la autoridad de su propio llamamiento — estaban transmitiendo las llaves de la dispensación de la plenitud de los tiempos.',
              ],
            },
            {
              type: 'highlight_verse',
              text: '"Quisiera que supieseis qué gran lucha tengo por vosotros… para que sean consolados sus corazones, unidos en amor, hasta alcanzar todas las riquezas de pleno entendimiento, a fin de conocer el misterio de Dios el Padre, y de Cristo."',
              reference: 'Colosenses 2:1–2',
            },
            {
              type: 'leader_quote',
              quote:
                'La cadena de autoridad del sacerdocio es real y verificable. De Cristo a Pedro. De Pedro a José. De José a los apóstoles de hoy. Ningún eslabón se ha roto.',
              name: 'Presidente Russell M. Nelson',
            },
          ],
        },
      ],
    },
    {
      id: 's3',
      title: 'Los Deberes del Élder',
      intro: {
        romanNumeral: 'III',
        title: 'Los Deberes del Élder',
      },
      topics: [
        {
          id: 'deberes-elder',
          title: 'Enseñar, bendecir, confirmar — el ministro de Cristo',
          subtitle:
            'El Élder no solo tiene autoridad — tiene responsabilidad de ejercerla en servicio activo a su familia, su barrio y el mundo.',
          blocks: [
            {
              type: 'paragraph',
              text: 'La ordenación al oficio de Élder no es el final del camino — es el comienzo del ministerio adulto. D&C 107:11-12 enseña que los Élderes forman un cuórum presidido por uno de ellos, y su función es administrar los asuntos espirituales de la Iglesia.',
            },
            {
              type: 'steps',
              title: 'Ministerios del Élder en la Iglesia y la familia',
              steps: [
                'DAR BENDICIONES DE SANACIÓN — Jacobo 5:14: «¿Está alguno enfermo entre vosotros? Llame a los ancianos de la iglesia.» El Élder unge con aceite, sella la unción y pronuncia una bendición bajo la guía del Espíritu.',
                'CONFIRMAR Y CONFERIR EL ESPÍRITU SANTO — Después del bautismo, el Élder impone manos y da el don del Espíritu Santo, la primera ordenanza del Sacerdocio de Melquisedec.',
                'BENDECIR BEBÉS — En la reunión sacramental, el Élder consagra el nombre del hijo ante el Señor y pronuncia una bendición de padre o padre en la fe.',
                'SERVIR MISIÓN — Los Élderes son llamados a llevar el evangelio al mundo. La misión de tiempo completo es la expresión más plena del ministerio del Élder joven.',
                'PRESIDIR LA FAMILIA — El Élder preside en su hogar como patriarca: noche de hogar, oración familiar, bautizar a sus hijos, bendecirlos en enfermedad.',
                'MINISTRAR EN EL BARRIO — Como ministro asignado, visitar a sus miembros, fortalecerles espiritualmente y reportar sus necesidades al obispo.',
              ],
            },
            {
              type: 'highlight_verse',
              text: '"¿Está alguno enfermo entre vosotros? Llame a los ancianos de la iglesia, y oren sobre él, ungiéndole con aceite en el nombre del Señor. Y la oración de fe salvará al enfermo, y el Señor lo levantará."',
              reference: 'Santiago 5:14–15',
            },
            {
              type: 'doctrine_box',
              title: 'La bendición de sanación — cómo se realiza',
              body: 'Un Élder digno usa aceite de oliva consagrado. El procedimiento tiene dos partes: (1) UNGIR — se pone una gota de aceite en la cabeza y se pronuncia una bendición breve "en el nombre de Jesucristo, unjo esta cabeza con aceite consagrado." (2) SELLAR LA UNCIÓN y DAR LA BENDICIÓN — otro Élder o el mismo pone sus manos y en una oración selladora pronuncia las palabras que el Espíritu dicte. La fe del enfermo y del bendecidor son esenciales.',
            },
            {
              type: 'reflection',
              prompt:
                '¿Cuándo fue la última vez que diste una bendición de sanación? ¿Con qué frecuencia ejerces activamente el poder de tu sacerdocio? ¿Hay alguien en tu familia o círculo cercano que necesita una bendición de sacerdocio esta semana?',
            },
          ],
        },
      ],
    },
    {
      id: 's4',
      title: 'El Élder en la Familia y en el Mundo',
      intro: {
        romanNumeral: 'IV',
        title: 'El Élder en la Familia y en el Mundo',
      },
      topics: [
        {
          id: 'elder-familia-mundo',
          title: 'El patriarca del hogar y el misionero del Señor',
          subtitle:
            'El Élder lleva el sacerdocio a dos lugares: su hogar y el mundo. En ambos, el poder del sacerdocio transforma vidas.',
          blocks: [
            {
              type: 'paragraph',
              text: 'El oficio de Élder tiene dos expresiones principales: el ministerio en el hogar y el ministerio en el mundo. En ambos espacios, el Élder ejerce la misma autoridad — pero con modos y alcances distintos.',
            },
            {
              type: 'key_points',
              title: 'El Élder como patriarca del hogar',
              points: [
                'El Élder preside su hogar «en amor y rectitud» (D&C 121:41-43) — no por dominación, sino por ejemplo y servicio.',
                'Tiene responsabilidad de enseñar el evangelio en el hogar — noche de hogar, oración familiar, estudio de escrituras.',
                'Puede bendecir a sus hijos en cualquier momento: en enfermedades, en decisiones importantes, al inicio del año escolar.',
                'La mesa del Señor en el hogar (el estudio de escrituras, la oración en familia) es tan sagrada como la mesa sacramental del domingo.',
              ],
            },
            {
              type: 'key_points',
              title: 'El Élder en la misión de tiempo completo',
              points: [
                'Los misioneros son llamados como "Élderes" — porque ejercen la autoridad del Sacerdocio de Melquisedec para enseñar y bautizar.',
                'Cada conversión, cada bautismo, cada confirmación del Espíritu Santo que realiza un misionero es el ejercicio real de la autoridad del Élder.',
                'El Señor llama misioneros de tiempo completo como una extensión del oficio — no como una asignación administrativa separada.',
                'Los miembros activos que no sirvieron misión de tiempo completo pueden ejercer plenamente el mismo sacerdocio en el ministerio local.',
              ],
            },
            {
              type: 'leader_quote',
              quote:
                'El oficio de Élder es el más común y al mismo tiempo el más extraordinario de la Iglesia. Es el sacerdocio del misionero, del padre, del maestro ministrante. Es el sacerdocio del hombre que ama a su familia y a su Dios con todo lo que tiene.',
              name: 'Presidente Gordon B. Hinckley',
            },
            {
              type: 'reflection',
              prompt:
                '¿Qué significa para ti ejercer el sacerdocio de Élder? ¿En qué aspecto de tu ministerio — en el hogar, en el barrio, con amigos fuera de la Iglesia — podrías ejercer más activamente el poder que ya tienes?',
            },
          ],
        },
      ],
    },
  ],
}
