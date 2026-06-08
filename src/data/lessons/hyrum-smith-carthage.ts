import type { Lesson } from '@/types/doctrine'

export const hyrumSmithCarthage: Lesson = {
  id: 'hyrum-smith-carthage',
  moduleId: 'personajes-escrituras',
  submoduleGroup: 'hyrum-smith',
  title: 'Hyrum Smith en Carthage',
  subtitle: 'El que eligió morir con su hermano',
  author: 'Fuentes: DyC 135; Relato de John Taylor; Historia de la Iglesia Vol. 6-7; Testimonios de testigos presenciales',
  description:
    'El 27 de junio de 1844, en la cárcel de Carthage, Illinois, Hyrum Smith fue asesinado a balazos junto a su hermano José. Hyrum tenía opciones reales de escapar. Eligió quedarse. Esta lección examina los días que llevaron a Carthage, la última noche en la cárcel, los momentos del martirio según el relato de John Taylor, y la significancia teológica del doble martirio que DyC 135 llama "sellado con su propia sangre."',
  level: 'INTERMEDIO',
  icon: '🕊️',
  duration: 35,
  order: 8213,
  status: 'PUBLISHED',
  studyBodyPlain: '',
  originalBodyPlain: '',
  previousLessonId: 'hyrum-smith-la-integridad',
  nextLessonId: 'hyrum-smith-y-la-restauracion',
  studySections: [
    {
      id: 's1',
      title: 'Los Días que Precedieron Carthage',
      intro: {
        romanNumeral: 'I',
        title: 'Junio de 1844 — La Crisis del Expositor',
        paragraphs: [
          'El camino a Carthage comenzó con una decisión que provocó la crisis final: la orden del Concejo de la Ciudad de Nauvoo de destruir la prensa del Nauvoo Expositor, un periódico que publicó ataques contra José Smith y la Iglesia.',
        ],
      },
      topics: [
        {
          id: 't1-1',
          title: 'El Nauvoo Expositor y las acusaciones',
          blocks: [
            {
              type: 'paragraph',
              text: 'En junio de 1844, un grupo de disidentes publicó el único número del Nauvoo Expositor, un periódico que acusaba a José Smith de enseñar el matrimonio plural en secreto, de corrupción política, y de ambiciones de poder. El Concejo de la Ciudad de Nauvoo — donde José Smith servía como alcalde — declaró el periódico una "perturbación pública" y ordenó destruir la prensa. Esta acción, aunque jurídicamente cuestionable, fue ejecutada.',
            },
            {
              type: 'paragraph',
              text: 'La destrucción de la prensa desató una tormenta. Los propietarios del Expositor presentaron cargos criminales contra José y otros. El gobernador Thomas Ford exigió que José se entregara para juicio. Fuera de Nauvoo, la prensa y los políticos de Illinois clamaban por acción contra los "Mormones." El ambiente era de violencia inminente.',
            },
            {
              type: 'timeline',
              items: [
                { label: '7 Jun. 1844', text: 'Se publica el único número del Nauvoo Expositor — José y líderes declaran la prensa perturbación pública', color: 'red' },
                { label: '10 Jun. 1844', text: 'La prensa del Expositor es destruida por orden del Concejo de la Ciudad', color: 'red' },
                { label: '12-17 Jun. 1844', text: 'José inicialmente huye al oeste del Mississippi — considera no entregarse', color: 'blue' },
                { label: '23 Jun. 1844', text: 'José decide regresar — "Si muero, muero" — y decide ir a Carthage', color: 'gold' },
                { label: '24 Jun. 1844', text: 'José, Hyrum y otros parten para Carthage a entregarse a las autoridades', color: 'gold' },
                { label: '27 Jun. 1844', text: 'La turba ataca la cárcel de Carthage — José e Hyrum son asesinados', color: 'red' },
              ],
            },
          ],
        },
        {
          id: 't1-2',
          title: 'Hyrum tenía opciones',
          blocks: [
            {
              type: 'paragraph',
              text: 'Este punto es crítico para entender el martirio de Hyrum: los cargos criminales eran contra José, no contra Hyrum. Hyrum no estaba legalmente obligado a entregarse. Tenía esposa — Mary Fielding Smith, con quien llevaba seis años casado — e hijos. Mary estaba en Nauvoo. Hyrum podría haberse quedado con su familia mientras José enfrentaba los cargos.',
            },
            {
              type: 'paragraph',
              text: 'Hyrum eligió ir. Cuando José intentó disuadirlo — sabiendo el peligro — Hyrum respondió con palabras que los historiadores citan consistentemente: "Sería una cobardía de mi parte dejarte ir solo." No fue un impulso de momento. Fue la decisión deliberada de un hombre que entendía lo que significaba ir a Carthage en ese clima político.',
            },
            {
              type: 'central_quote',
              text: 'Sería una cobardía de mi parte dejarte ir solo. Estaré a tu lado.',
              attribution: 'Hyrum Smith a José Smith, 24 de junio de 1844 — según relatos de testigos presentes',
            },
            {
              type: 'doctrine_box',
              title: 'La Valentía Elegida — No el Destino Inevitable',
              body: 'El martirio de Hyrum no fue inevitable. El de José, dado que los cargos eran contra él, quizás tenía una lógica trágica. Pero Hyrum eligió activamente estar presente. No fue llevado por las circunstancias — caminó hacia Carthage con plena consciencia de lo que podría ocurrir. La diferencia entre ser víctima de las circunstancias y ser mártir es exactamente esta: la elección. Hyrum eligió.',
            },
          ],
        },
      ],
    },
    {
      id: 's2',
      title: 'La Última Noche en Carthage Jail',
      intro: {
        romanNumeral: 'II',
        title: '"Un Pobre Peregrino en la Tierra" — El Himno de la Última Noche',
        paragraphs: [
          'La noche del 26 de junio de 1844, los prisioneros en Carthage Jail cantaron. Lo que cantaron, y quién lo pidió, es uno de los momentos más memorables en la historia de la Iglesia.',
        ],
      },
      topics: [
        {
          id: 't2-1',
          title: 'El himno de John Taylor',
          blocks: [
            {
              type: 'paragraph',
              text: 'El apóstol John Taylor estaba con José e Hyrum en Carthage Jail esa noche. Uno de los presentes — según los relatos de Taylor y de otros — pidió que Taylor cantara un himno. El himno que cantó fue "A Poor Wayfaring Man of Grief" ("Un Pobre Peregrino en la Tierra"), basado en el poema de James Montgomery. Cantó todas las estrofas. Cuando terminó, le pidieron que lo cantara de nuevo, y lo cantó una segunda vez.',
            },
            {
              type: 'central_quote',
              text: 'Un pobre peregrino en la tierra encontré; estaba al borde del camino, hambriento, solo, herido y sin amparo. Le di de comer y bebida. Una vez más lo encontré, en un río impetuoso. Le tendí la mano y lo salvé... "Ven a compartir mi trono eterno; quien a mí sirve, ese amo yo."',
              attribution: 'James Montgomery, "A Poor Wayfaring Man of Grief" — cantado por John Taylor en Carthage Jail, 26 de junio de 1844',
            },
            {
              type: 'paragraph',
              text: 'El himno narra encuentros con un extraño necesitado a quien el narrador ayuda en diversas situaciones — hambre, sed, peligro, enfermedad, aprisionamiento. Al final, el extraño resulta ser Cristo, que recompensa el servicio al prójimo con morada celestial. Que este himno fuera cantado la noche antes del martirio, con plena consciencia de lo que vendría al día siguiente, tiene una resonancia que los Santos han sentido por generaciones.',
            },
            {
              type: 'deep_dive',
              badge: 'El Himno',
              title: 'Por Qué "A Poor Wayfaring Man of Grief" es Inseparable de Carthage',
              paragraphs: [
                'El himno fue solicitado en un momento en que todos en la habitación sabían que el peligro era real. El gobernador Ford había retirado la milicia que protegía la cárcel ese día. Los prisioneros podían escuchar ruido en las afueras. No era ignorancia lo que les hacía cantar — era fe.',
                'El himno tiene siete estrofas. Taylor cantó todas. Cuando terminó, pidió que no lo cantara de nuevo — estaba demasiado afectado emocionalmente. José le pidió que lo repitiera. Taylor obedeció. Dos veces el mismo himno, la misma noche, antes de que la turba llegara al día siguiente.',
                'El himno no figura en todos los himnarios de la Iglesia modernos, pero su historia es conocida por la mayoría de los Santos. Se canta con frecuencia en Carthage mismo, como memorial. Es un ejemplo de cómo la música puede ser — exactamente como DyC 25 dice — una oración. La última oración cantada de los mártires.',
              ],
            },
          ],
        },
        {
          id: 't2-2',
          title: 'Las últimas horas',
          blocks: [
            {
              type: 'paragraph',
              text: 'Al día siguiente, 27 de junio de 1844, la milicia que debía proteger la cárcel fue despedida por el gobernador Ford para un supuesto recorrido. En la tarde, una turba con las caras pintadas de negro —para dificultar su identificación — se acercó a Carthage Jail. Hyrum, José, John Taylor, y Willard Richards estaban en la habitación del segundo piso.',
            },
            {
              type: 'paragraph',
              text: 'Los atacantes comenzaron a disparar a través de la puerta. Una bala atravesó la puerta y golpeó a Hyrum en la nariz, pasando hacia la parte posterior de su cabeza. Otra bala —disparada desde la ventana— lo golpeó al mismo tiempo. Hyrum cayó diciendo: "¡Soy un hombre muerto!" Fueron las últimas palabras que pronunció. Murió antes que su hermano.',
            },
            {
              type: 'central_quote',
              text: '¡Oh Señor, mi Dios!',
              attribution: 'José Smith — sus últimas palabras al caer de la ventana de Carthage Jail, 27 de junio de 1844',
            },
            {
              type: 'paragraph',
              text: 'Cuando José vio caer a Hyrum, John Taylor describe que su reacción fue de dolor profundo: "¡Oh, pobre Hyrum!" En segundos, José también fue alcanzado por varias balas y cayó de la ventana al patio exterior. John Taylor recibió cuatro balas y sobrevivió. Willard Richards no fue alcanzado. El martirio fue rápido — los atacantes huyeron ante la llegada de la milicia.',
            },
          ],
        },
      ],
    },
    {
      id: 's3',
      title: 'DyC 135 — El Obituario de los Mártires',
      intro: {
        romanNumeral: 'III',
        title: 'John Taylor Escribe el Canon',
        paragraphs: [
          'DyC 135, escrita por John Taylor, es el único capítulo en la Doctrina y Convenios escrito por alguien distinto a José Smith. Es el obituario oficial de los mártires, canonizado como escritura.',
        ],
      },
      topics: [
        {
          id: 't3-1',
          title: 'DyC 135 — Lo que el canon dice',
          blocks: [
            {
              type: 'highlight_verse',
              reference: 'DyC 135:1',
              text: 'Para sellarse el testimonio de este libro y el Book of Commandments, hemos de saber que en el martirio del profeta Joseph Smith y el patriarca Hyrum Smith. Ellos vivieron por la gloria de Dios, murieron por la gloria de Dios; y su obra es terminada, y ellos han dejado de sus empresas en este mundo, y su testimonio permanecerá para siempre para la condenación de aquellos que traten de anularlos, porque su sangre ha clamado al cielo con testimonio contra quienes los mataron.',
            },
            {
              type: 'highlight_verse',
              reference: 'DyC 135:3',
              text: 'Joseph Smith, el profeta y vidente del Señor, ha hecho más, excepto solamente Jesús, por la salvación de los hombres en este mundo, que ningún otro hombre que jamás haya vivido en él. En el corto espacio de veinte años, ha traído el libro de Mormón, que reunió multitudes; revelado las escrituras del Antiguo Testamento; traducido el Nuevo Testamento; publicado el libro de Doctrina y Convenios; reunido miles de los santos; edificado un magnífico templo; y sentado el fundamento de una gran iglesia.',
            },
            {
              type: 'paragraph',
              text: 'DyC 135 nombra a Hyrum junto a José como mártires — no como víctima colateral. El canon no dice "José murió y Hyrum también." Dice que ambos "sellaron su testimonio con su propia sangre." En la teología legal del siglo XIX — y en la tradición jurídica romana que informa el lenguaje de las escrituras — un testamento sellado con sangre es irrevocable. El testimonio de los mártires no puede ser desdicho porque ellos murieron antes de poder retractarlo.',
            },
          ],
        },
        {
          id: 't3-2',
          title: 'La significancia teológica del doble martirio',
          blocks: [
            {
              type: 'paragraph',
              text: 'Que tanto el profeta como el patriarca murieran juntos no fue coincidencia — fue, según la perspectiva de la Iglesia, providencial. El profeta y el patriarca sostenían las llaves más importantes de la dispensación. Su martirio simultáneo tiene el efecto de sellar dos testimonios al mismo tiempo. Como lo describe John Taylor: "Ambos sellaron su testimonio con su propia sangre."',
            },
            {
              type: 'doctrine_box',
              title: 'El Principio del Testimonio Sellado con Sangre',
              body: 'Hebreos 9:16-17 establece: "Donde hay testamento, es necesario que intervenga muerte del testador. Porque el testamento con la muerte se confirma." El uso de la palabra "testamento" en el Nuevo Testamento (griego: diatheke) implica que un convenio o declaración adquiere su fuerza irrevocable con la muerte del que la hizo. Cuando José e Hyrum murieron, sus testimonios de la Restauración quedaron sellados de manera que ningún poder terrenal puede revertir. Esta es la doctrina del martirio que DyC 135 invoca.',
            },
            {
              type: 'leader_quote',
              quote: 'La muerte de Joseph e Hyrum Smith no fue el fin de la Restauración — fue su confirmación. Ellos no murieron como fracasados. Murieron como testigos que sellaron con su vida lo que habían afirmado con su boca. Ese testimonio ahora es eterno.',
              name: 'Presidente Gordon B. Hinckley',
              role: 'Decimoquinto Presidente de La Iglesia de Jesucristo de los Santos de los Últimos Días',
            },
          ],
        },
      ],
    },
    {
      id: 's4',
      title: 'El Relato de John Taylor',
      intro: {
        romanNumeral: 'IV',
        title: 'El Testigo Sobreviviente',
        paragraphs: [
          'John Taylor fue el único testigo presencial que sobrevivió y dejó un registro detallado de los últimos momentos en Carthage Jail. Su cuenta forma parte de DyC 135 y de sus memorias personales.',
        ],
      },
      topics: [
        {
          id: 't4-1',
          title: 'Lo que John Taylor vio',
          blocks: [
            {
              type: 'paragraph',
              text: 'John Taylor llegó a Carthage Jail como visitante voluntario — nadie lo obligó a estar allí. Cuando la turba atacó, Taylor intentó usar un bastón para desviar las pistolas que se asomaban por la puerta. Recibió cuatro balas. Una de ellas golpeó su reloj de bolsillo y detuvo la bala que habría matado. Taylor sobrevivió.',
            },
            {
              type: 'paragraph',
              text: 'Años después, Taylor escribió sobre esas horas con precisión: la posición de cada hombre, el orden de los disparos, los movimientos de Hyrum al caer, las palabras finales de José. Su cuenta es el registro primario de los momentos del martirio. Su descripción de Hyrum cayendo y diciendo "¡Soy un hombre muerto!" ha sido citada por presidentes de la Iglesia desde entonces.',
            },
            {
              type: 'highlight_verse',
              reference: 'DyC 135:2',
              text: 'Hyrum Smith fue asesinado el mismo día y casi al mismo tiempo. Hyrum era un hombre de Dios y noble, y como José, víctima de una turba traicionera y asesina. En el momento de su martirio, dio testimonio de la veracidad del trabajo que Dios le había encomendado; y al sellarlo con su sangre, demostró que era un hombre de integridad.',
            },
            {
              type: 'paragraph',
              text: 'El versículo 2 de DyC 135 es la cita más definitiva sobre Hyrum en el canon: "demostró que era un hombre de integridad." En el momento final, la integridad que DyC 124:15 describía como la razón del amor de Dios por Hyrum quedó sellada con su muerte. Su vida entera culminó en ese punto: la integridad probada al límite máximo posible.',
            },
          ],
        },
        {
          id: 't4-2',
          title: 'Lo que Carthage significa para nosotros hoy',
          blocks: [
            {
              type: 'paragraph',
              text: 'Carthage no es solo un evento histórico — es un punto de referencia teológico. Cuando los Santos enfrentan dudas sobre si la Restauración es real, el martirio de Carthage ofrece una perspectiva específica: José e Hyrum murieron sin retractarse. No bajo coacción favorable — bajo presión de muerte inminente. No era el momento para mantener una mentira cómoda. Era el momento en que cualquier fraude se habría revelado.',
            },
            {
              type: 'paragraph',
              text: 'El argumento del martirio como evidencia no es infalible — personas han muerto por causas falsas. Pero en el contexto de toda la evidencia combinada — los testigos, las planchas, los documentos, el Libro de Mormón — el hecho de que dos hombres que conocían la verdad de dentro muriesen sin retractarse añade un peso que es difícil desestimar.',
            },
            {
              type: 'reflection',
              prompt: '¿Qué aspecto del martirio de Hyrum te afecta más personalmente — su elección de quedarse aunque podría haberse ido, el himno de la última noche, sus palabras finales, o la canonización de su muerte en DyC 135? ¿Por qué ese aspecto en particular?',
            },
            {
              type: 'note_prompts',
              prompts: [
                { id: 'p1', question: '¿Por qué crees que Hyrum dijo "sería una cobardía de mi parte dejarte ir solo"? ¿Qué valores estaba eligiendo activamente?' },
                { id: 'p2', question: 'El himno "A Poor Wayfaring Man of Grief" fue cantado dos veces la noche antes del martirio. ¿Qué papel tiene la música en los momentos de mayor prueba espiritual, según tu experiencia?' },
                { id: 'p3', question: 'DyC 135 dice que Hyrum "demostró que era un hombre de integridad" al morir. ¿Qué crees que significa "demostrar" la integridad — y en qué momentos de tu propia vida has tenido que demostrarla?' },
              ],
            },
          ],
        },
      ],
    },
  ],
}
