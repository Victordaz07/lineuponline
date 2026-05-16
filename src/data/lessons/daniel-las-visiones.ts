import type { Lesson } from '@/types/doctrine'

export const danielLasVisiones: Lesson = {
  id: 'daniel-las-visiones',
  moduleId: 'personajes-escrituras',
  title: 'Las Visiones de Daniel',
  subtitle: 'La estatua, las bestias y las 70 semanas',
  description:
    'Daniel recibió cuatro visiones que abarcan la historia del mundo desde Nabucodonosor hasta la Segunda Venida. La estatua de metales (Daniel 2), las cuatro bestias y el Hijo del Hombre (Daniel 7), las 70 semanas del Mesías (Daniel 9) y el varón de lino (Daniel 10) forman el corpus profético más citado en los documentos de la Restauración.',
  level: 'AVANZADO',
  icon: '👁️',
  duration: 35,
  order: 4412,
  status: 'PUBLISHED',
  submoduleGroup: 'daniel',
  studyBodyPlain: '',
  originalBodyPlain: '',
  studySections: [
    {
      id: 's1',
      title: 'Daniel 2 — La Estatua de Metales',
      intro: {
        romanNumeral: 'I',
        title: 'Cuatro Imperios y la Piedra sin Manos',
        paragraphs: [
          'El sueño de Nabucodonosor en Daniel 2 es la primera de las grandes visiones proféticas del libro — y la que José Smith citó más directamente al describir el propósito de la Restauración.',
        ],
      },
      topics: [
        {
          id: 't1',
          title: 'La estructura de la estatua',
          blocks: [
            {
              type: 'highlight_verse',
              reference: 'Daniel 2:31-33',
              text: 'Tú, oh rey, veías, y he aquí una gran imagen. Esta imagen, que era muy grande, y cuya gloria era muy sublime, estaba en pie delante de ti, y su aspecto era terrible. La cabeza de esta imagen era de oro fino; su pecho y sus brazos, de plata; su vientre y sus muslos, de bronce; sus piernas, de hierro; sus pies, en parte de hierro y en parte de barro cocido.',
            },
            {
              type: 'paragraph',
              text: 'La estatua representa una sucesión de imperios mundiales. La identificación clásica en el judaísmo, el cristianismo y la Restauración es: cabeza de oro = Babilonia (Nabucodonosor); pecho y brazos de plata = Medo-Persia; vientre y muslos de bronce = Grecia (Alejandro y sus sucesores); piernas de hierro y pies mezclados = Roma y sus divisiones. La degradación del material (oro → plata → bronce → hierro → barro) indica una progresiva pérdida de unidad y poder — pero también una progresiva extensión geográfica.',
            },
            {
              type: 'timeline',
              items: [
                { label: 'Oro — Babilonia', text: 'Nabucodonosor II, el rey más poderoso de su época (605-562 a.C.)', ref: 'Daniel 2:38', color: 'gold' },
                { label: 'Plata — Medo-Persia', text: 'Ciro el Grande conquista Babilonia en 539 a.C.', ref: 'Daniel 5:28', color: 'blue' },
                { label: 'Bronce — Grecia', text: 'Alejandro Magno y el helenismo (336-63 a.C.)', ref: 'Daniel 8:21', color: 'green' },
                { label: 'Hierro — Roma', text: 'El Imperio Romano y sus divisiones posteriores', ref: 'Daniel 2:40', color: 'red' },
              ],
            },
            {
              type: 'doctrine_box',
              title: 'La Piedra sin Manos — La Restauración',
              body: 'Daniel 2:44-45 describe una piedra "cortada del monte, no con mano de hombre" que derriba la estatua y crece hasta llenar toda la tierra. José Smith enseñó explícitamente que esta piedra era la Iglesia de Jesucristo de los Santos de los Últimos Días, restaurada en 1830. La Iglesia comenzó pequeña en el noreste de Estados Unidos — la piedra que golpeó los pies de la estatua — y está destinada a llenar la tierra antes de la Segunda Venida.',
            },
            {
              type: 'highlight_verse',
              reference: 'Daniel 2:44-45',
              text: 'Y en los días de estos reyes el Dios del cielo levantará un reino que no será jamás destruido, ni será el reino dejado a otro pueblo; desmenuzará y consumirá a todos estos reinos, pero él permanecerá para siempre. De la manera que viste que del monte fue cortada una piedra, no con mano, la cual desmenuzó el hierro, el bronce, el barro, la plata y el oro.',
            },
          ],
        },
      ],
    },
    {
      id: 's2',
      title: 'Daniel 7 — Las Cuatro Bestias y el Hijo del Hombre',
      intro: {
        romanNumeral: 'II',
        title: 'El Consejo Celestial y Adán-ondi-Ahmán',
        paragraphs: [
          'Si Daniel 2 describe los imperios desde la perspectiva humana (una estatua gloriosa), Daniel 7 los describe desde la perspectiva divina: cuatro bestias violentas que salen del mar. Y sobre todo, una escena celestial que la Restauración identifica con Adán-ondi-Ahmán.',
        ],
      },
      topics: [
        {
          id: 't2',
          title: 'El Anciano de Días y el Hijo del Hombre',
          blocks: [
            {
              type: 'highlight_verse',
              reference: 'Daniel 7:13-14',
              text: 'Miraba yo en la visión de la noche, y he aquí con las nubes del cielo venía uno como un hijo de hombre, que vino hasta el Anciano de días, y le hicieron acercarse delante de él. Y le fue dado dominio, gloria y reino, para que todos los pueblos, naciones y lenguas le sirvieran; su dominio es dominio eterno, que nunca pasará, y su reino uno que no será destruido.',
            },
            {
              type: 'paragraph',
              text: 'La escena de Daniel 7:9-14 describe una corte celestial presidida por el "Anciano de Días" (en arameo Attiq Yomin — literalmente "el Anciano de Días"). Millares de millares le servían. Los libros fueron abiertos. El Anciano de Días presidió el juicio y entregó el dominio eterno al "Hijo del Hombre." La Restauración identifica al Anciano de Días con Adán/Miguel (DyC 116; DyC 138:38) y al Hijo del Hombre con Jesucristo.',
            },
            {
              type: 'doctrine_box',
              title: 'Adán-ondi-Ahmán — DyC 116',
              body: 'DyC 116, recibida el 19 de mayo de 1838, identifica el lugar llamado Adán-ondi-Ahmán (en el condado de Daviess, Missouri) como el sitio donde Adán bendijo a su posteridad antes de morir (DyC 107:53-56) y donde se reunirá el gran consejo final. En ese consejo, todos los que han tenido llaves de dispensación las rendirán a Adán, quien las entregará a Cristo. Esto es el cumplimiento literal de Daniel 7: el Anciano de Días recibiendo el reino antes de entregarlo al Hijo del Hombre.',
            },
            {
              type: 'reflection',
              prompt: '¿Cómo cambia tu comprensión del papel de Adán en el plan de salvación saber que es él quien presidirá el gran consejo final antes de la Segunda Venida? ¿Qué dice esto sobre la importancia de las "llaves" en el sacerdocio?',
            },
          ],
        },
      ],
    },
    {
      id: 's3',
      title: 'Daniel 9 — Las 70 Semanas',
      intro: {
        romanNumeral: 'III',
        title: 'La Cronología del Mesías',
        paragraphs: [
          'Daniel 9:24-27 contiene la profecía cronológica más precisa del Antiguo Testamento — y su punto de partida histórico permite calcular el tiempo del ministerio de Cristo.',
        ],
      },
      topics: [
        {
          id: 't3',
          title: 'El decreto de Artajerjes y el Mesías',
          blocks: [
            {
              type: 'highlight_verse',
              reference: 'Daniel 9:24-25',
              text: 'Setenta semanas están determinadas sobre tu pueblo y sobre tu santa ciudad, para terminar la prevaricación, y poner fin al pecado, y expiar la iniquidad, para traer la justicia perdurable, y sellar la visión y la profecía, y ungir al Santo de los santos. Sabe, pues, y entiende, que desde la salida de la orden para restaurar y edificar a Jerusalén hasta el Mesías Príncipe, habrá siete semanas, y sesenta y dos semanas.',
            },
            {
              type: 'paragraph',
              text: 'Las "semanas" de Daniel son grupos de siete años (shavuim en hebreo). Las 70 semanas = 490 años. La primera subdivisión (7+62 semanas = 69 semanas = 483 años) desde el decreto para restaurar Jerusalén hasta el Mesías. Si se cuenta desde el decreto de Artajerjes I en el año 458/457 a.C. (Esdras 7), 483 años llegan precisamente al comienzo del ministerio de Cristo — el año 26/27 d.C., cuando fue bautizado y ungido como Mesías.',
            },
            {
              type: 'deep_dive',
              title: 'Las 70 Semanas — Interpretaciones y Discusiones',
              paragraphs: [
                'La "semana 70" de Daniel 9:27 ha sido el pasaje más debatido de toda la literatura profética. Las tradiciones de interpretación incluyen: (1) la aplicación histórica — se refiere a la desolación del templo por Antíoco IV Epífanes en 168 a.C.; (2) la aplicación cristológica — se refiere al ministerio de Cristo y la destrucción del templo en 70 d.C.; (3) la aplicación futurista — la semana 70 se "interrumpe" y se cumplirá en los últimos días.',
                'La Restauración no tiene una posición oficial definida sobre la "semana 70." Pero lo que sí es claro es que las primeras 69 semanas de Daniel 9 funcionan como una cronología del Mesías que apunta precisamente a Cristo — lo cual es evidencia de la profecía inspirada.',
                'El texto también menciona que el Mesías sería "quitado" (karat en hebreo — cortado, ejecutado) y que "se pondrá fin al sacrificio y a la ofrenda" a la mitad de la semana 70. La interpretación cristológica ve en esto la muerte de Cristo y la consumación del sistema sacrificial levítico — cumplido cuando el velo del templo se rasgó de arriba abajo (Mateo 27:51).',
              ],
            },
          ],
        },
      ],
    },
    {
      id: 's4',
      title: 'Daniel 10 — El Varón de Lino',
      intro: {
        romanNumeral: 'IV',
        title: 'La Visión más Intensa de Daniel',
        paragraphs: [
          'Daniel 10 contiene la descripción de un ser celestial que es la más detallada y la más sobrecogiente del libro — y plantea preguntas sobre la lucha espiritual entre potestades invisibles.',
        ],
      },
      topics: [
        {
          id: 't4',
          title: 'La apariencia del mensajero celestial',
          blocks: [
            {
              type: 'highlight_verse',
              reference: 'Daniel 10:5-9',
              text: 'Alcé mis ojos y miré, y he aquí un varón vestido de lino, y ceñidos sus lomos de oro fino de Ufaz. Su cuerpo era como de berilo, y su rostro parecía un relámpago, y sus ojos como antorchas de fuego, y sus brazos y sus pies como de color de bronce bruñido, y el sonido de sus palabras como el estruendo de una multitud. Y solo yo, Daniel, vi aquella visión, y no la vieron los hombres que estaban conmigo, sino que se apoderó de ellos un gran temor, y huyeron y se escondieron. Quedé, pues, yo solo, y vi esta gran visión, y no quedó fuerza en mí, antes mi fuerza se cambió en desfallecimiento.',
            },
            {
              type: 'paragraph',
              text: 'La descripción del varón de lino en Daniel 10 es casi idéntica a la visión del "Hijo del Hombre" glorificado en Apocalipsis 1:13-16: cabellos blancos, ojos como llama de fuego, pies como bronce bruñido, voz como el sonido de muchas aguas. Muchos eruditos ven en Daniel 10 una teofanía — la aparición del Señor premortal — mientras otros identifican al mensajero como el arcángel Gabriel o Miguel.',
            },
            {
              type: 'key_points',
              title: 'Principios revelados en Daniel 10',
              points: [
                'La oración de tres semanas de Daniel (10:2-3) precedió a la visión — la petición tardó en ser respondida, no porque Dios no oyera, sino por resistencia de "el príncipe del reino de Persia" (10:13)',
                'Existen potestades espirituales que influyen en las naciones — "el príncipe de Grecia vendrá" (10:20)',
                'Miguel (Adán) es identificado como defensor de Israel: "Miguel, uno de los principales príncipes, vino para ayudarme" (10:13)',
                'Daniel quedó sin fuerzas ante la visión — como los hermanos de José en Egipto, como Juan en Patmos, como el joven José Smith',
                'La visión abarca "lo que ha de venir a tu pueblo en los postreros días" (10:14) — vinculando a Daniel con la era mesiánica',
              ],
            },
            {
              type: 'reflection',
              prompt: '¿Cómo interpreta tu fe el concepto de "príncipes espirituales" que luchan sobre las naciones? ¿Qué impacto tiene en tu vida de oración saber que la respuesta a veces no llega de inmediato no por falta de fe sino por razones que están más allá de tu alcance visible?',
            },
          ],
        },
      ],
    },
    {
      id: 's5',
      title: 'Daniel en la Tradición Restaurada',
      intro: {
        romanNumeral: 'V',
        title: 'El Profeta más Citado después de Isaías',
        paragraphs: [
          'Los primeros documentos de la Restauración citan a Daniel más que a cualquier otro profeta excepto Isaías. Comprender por qué es fundamental para entender la visión de la Iglesia.',
        ],
      },
      topics: [
        {
          id: 't5',
          title: 'Daniel y la cosmovisión de la Restauración',
          blocks: [
            {
              type: 'paragraph',
              text: 'José Smith predicó sobre Daniel 2 en múltiples ocasiones. En el Discurso de la Roca (1843), declaró que la piedra de Daniel 2 era la Iglesia de Jesucristo de los Santos de los Últimos Días. En el Discurso del Rey Follett (1844), citó Daniel 7 en su discusión sobre la naturaleza del Padre y del Hijo. Las secciones 27, 107, 116 y 138 de DyC hacen referencia directa a conceptos desarrollados en Daniel.',
            },
            {
              type: 'compare_grid',
              left: {
                label: 'Daniel profetizó',
                points: [
                  'Una piedra que llenaría la tierra (Daniel 2:35)',
                  'El Anciano de Días reunido con el Hijo del Hombre (Daniel 7:13)',
                  'Un tiempo de angustia sin precedente seguido de resurrección (Daniel 12:1-2)',
                  'El sellamiento de la profecía hasta los últimos días (Daniel 12:4)',
                ],
              },
              right: {
                label: 'La Restauración cumplió / cumplirá',
                points: [
                  'La Iglesia restaurada en 1830 creciendo hasta llenar la tierra',
                  'Adán-ondi-Ahmán — el gran consejo final (DyC 116)',
                  'La tribulación y la Segunda Venida de Cristo',
                  'El libro sellado fue abierto — el Libro de Mormón (2 Nefi 27)',
                ],
              },
            },
            {
              type: 'leader_quote',
              quote: 'El libro de Daniel está repleto de profecía concerniente a nuestro tiempo. No podemos entender plenamente la misión de la Restauración sin entender a Daniel.',
              name: 'Bruce R. McConkie',
              role: 'Apóstol del Señor Jesucristo',
            },
          ],
        },
      ],
    },
  ],
}
