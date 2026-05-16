import type { Lesson } from '@/types/doctrine'

export const emmaSmithLaMusica: Lesson = {
  id: 'emma-smith-la-musica',
  moduleId: 'personajes-escrituras',
  submoduleGroup: 'emma-smith',
  title: 'Los Himnos',
  subtitle: 'Emma y la canción del Señor',
  author: 'Fuentes: DyC 25; Historia de la Iglesia; Collection of Sacred Hymns, 1835',
  description:
    'En 1830, Dios encomendó a Emma Smith una tarea singular: compilar el primer himnario de la Iglesia restaurada. El resultado — publicado en 1835 con 90 himnos — moldeó para siempre la adoración de los Santos de los Últimos Días. Esta lección examina la teología de la música como oración, los himnos que Emma seleccionó, y por qué el cántico sagrado sigue siendo, según las escrituras, una forma directa de comunicación con el cielo.',
  level: 'BÁSICO',
  icon: '🎵',
  duration: 25,
  order: 8113,
  status: 'PUBLISHED',
  studyBodyPlain: '',
  originalBodyPlain: '',
  previousLessonId: 'emma-smith-el-sufrimiento',
  nextLessonId: 'emma-smith-y-la-restauracion',
  studySections: [
    {
      id: 's1',
      title: 'El Mandamiento del Himnario',
      intro: {
        romanNumeral: 'I',
        title: 'Julio de 1830 — Dios Encarga a Emma una Tarea Única',
        paragraphs: [
          'Apenas tres meses después de organizarse la Iglesia, el Señor dio a Emma Smith un llamamiento que ninguna mujer había recibido antes en esta dispensación: compilar los himnos del pueblo del convenio.',
        ],
      },
      topics: [
        {
          id: 't1-1',
          title: 'DyC 25:11 — La comisión directa',
          blocks: [
            {
              type: 'highlight_verse',
              reference: 'DyC 25:11-12',
              text: 'Y también te designo la selección de himnos sagrados como el Señor te enseñe; y el cántico de los justos es una oración para mí, y será contestado con una bendición sobre sus cabezas. Por tanto, levántate y exhórtate a tu marido, y exhórtalos a todos para que se fortalezcan y que su corazón se regocije siempre, y que sus mentes formen parte de la alabanza que se envía al cielo como incienso ante Jehová.',
            },
            {
              type: 'paragraph',
              text: 'El mandamiento tiene tres partes inseparables. Primero, Emma es designada como seleccionadora — no como editora mecánica sino como discernidora espiritual: "como el Señor te enseñe." Segundo, el propósito de los himnos se declara con precisión doctrinal: son oración, no decoración litúrgica. Tercero, la metáfora final — las alabanzas que suben al cielo "como incienso ante Jehová" — conecta la práctica moderna con la adoración del Templo antiguo, donde el incienso representaba las oraciones del pueblo que ascendían a la presencia de Dios.',
            },
            {
              type: 'doctrine_box',
              title: 'El Cántico como Oración — Una Teología Completa en un Versículo',
              body: 'La afirmación de DyC 25:12 es radical en su simplicidad: "el cántico de los justos es una oración para mí." No dice que prepare para la oración, ni que sea una forma de expresión de alabanza — dice que es oración en sí misma. Y añade la consecuencia: "será contestado con una bendición sobre sus cabezas." En la teología de la Restauración, la oración sincera recibe respuesta. Si el cántico es oración, entonces el himno cantado con corazón justo recibirá respuesta divina. Emma fue comisionada como guardiana de esta doctrina para toda la Iglesia.',
            },
            {
              type: 'paragraph',
              text: 'La imagen del incienso no es casual. En Apocalipsis 8:3-4, Juan describe ángeles ofreciendo incienso mezclado con las oraciones de los santos ante el trono de Dios. La imagen es de oraciones ascendentes que llegan literalmente a la presencia divina. Que el Señor use esta misma imagen para el canto congregacional eleva la práctica del himno a categoría litúrgica sagrada.',
            },
          ],
        },
        {
          id: 't1-2',
          title: '¿Por qué Emma?',
          blocks: [
            {
              type: 'paragraph',
              text: 'Emma Hale Smith no era simplemente la esposa del profeta. Tenía una educación musical superior a la media de su época. Conocía las tradiciones del protestantismo norteamericano — los himnos de Wesley, los cánticos revivalistas, la tradición de los Salmos cantados. Era capaz de evaluar textos teológicamente. La revelación dice "como el Señor te enseñe" — pero Emma traía capacidades reales al llamamiento.',
            },
            {
              type: 'compare_grid',
              title: 'Emma y el llamamiento del himnario',
              left: {
                label: 'Lo que Emma aportó',
                points: [
                  'Educación musical por encima del promedio de su época',
                  'Conocimiento de las tradiciones protestantes de cánticos',
                  'Capacidad para evaluar contenido teológico',
                  'Fe personal y acceso directo a dirección espiritual',
                  'Autoridad formal conferida por revelación divina',
                ],
              },
              right: {
                label: 'El resultado para la Iglesia',
                points: [
                  'Primer himnario publicado en 1835 — 90 himnos',
                  'Estableció el patrón de adoración congregacional',
                  'Muchos himnos actuales tienen raíces en esa selección',
                  'La doctrina del cántico como oración quedó canonizada',
                  'El llamamiento sigue vigente — DyC 25:16',
                ],
              },
            },
          ],
        },
      ],
    },
    {
      id: 's2',
      title: 'El Himnario de 1835',
      intro: {
        romanNumeral: 'II',
        title: 'Collection of Sacred Hymns — El Fruto del Llamamiento',
        paragraphs: [
          'Cinco años después de recibir el llamamiento, Emma publicó el primer himnario de la Iglesia. No fue un proyecto de fin de semana — fue cinco años de discernimiento, selección, y trabajo editorial.',
        ],
      },
      topics: [
        {
          id: 't2-1',
          title: 'Los 90 himnos y su procedencia',
          blocks: [
            {
              type: 'paragraph',
              text: 'El himnario de 1835, titulado formalmente A Collection of Sacred Hymns for the Church of the Latter Day Saints, contenía 90 himnos seleccionados por Emma. La mayoría provenían de tradiciones protestantes ya existentes — metodistas, presbiterianos, bautistas. Emma los eligió no por su procedencia denominacional sino por su contenido teológico y su capacidad para expresar las verdades de la Restauración. Algunos fueron escritos específicamente por miembros de la Iglesia.',
            },
            {
              type: 'key_points',
              title: 'Características del himnario de Emma (1835)',
              points: [
                '90 himnos en la primera edición publicada',
                'La mayoría tomados de tradiciones protestantes con contenido doctrinalmente compatible',
                'Algunos himnos originales escritos por Santos de los Últimos Días',
                'El himnario no incluía notación musical — solo letras',
                'Fue aprobado formalmente por los líderes de la Iglesia en Kirtland',
                'Sirvió de base para ediciones posteriores durante décadas',
              ],
            },
            {
              type: 'paragraph',
              text: 'Que Emma incluyera himnos protestantes no fue un descuido sino una decisión teológica inteligente. La Restauración no rechaza toda verdad que existía antes — restaura, añade, y purifica. Muchos de esos himnos protestantes contenían verdades del evangelio eterno que merecían preservarse. Emma actuó como discernidora: ¿qué cánticos expresan verdad suficientemente para ser ofrecidos como oración al Señor de la Restauración?',
            },
            {
              type: 'timeline',
              items: [
                { label: 'Jul. 1830', text: 'DyC 25 — Emma recibe el llamamiento de compilar himnos', color: 'gold' },
                { label: '1830-1834', text: 'Años de selección y discernimiento mientras la Iglesia enfrenta persecuciones', color: 'blue' },
                { label: '1835', text: 'Publicación de A Collection of Sacred Hymns — 90 himnos en Kirtland, Ohio', color: 'green' },
                { label: '1836', text: 'El Templo de Kirtland se dedica — los himnos de Emma suenan por primera vez en un templo', color: 'gold' },
                { label: '1841', text: 'Segunda edición revisada del himnario de Emma', color: 'blue' },
              ],
            },
          ],
        },
        {
          id: 't2-2',
          title: 'Los himnos que moldearon la adoración SUD',
          blocks: [
            {
              type: 'paragraph',
              text: 'Entre los himnos que Emma seleccionó o que emergieron de ese primer período se encuentran algunos que los Santos siguen cantando casi doscientos años después. "Come, Come, Ye Saints" (venid, santos, venid) fue escrito por William Clayton en 1846, pero en la tradición establecida por Emma. "Praise to the Man" honra directamente a José Smith. La cultura musical de adoración que Emma inició continúa formando el espíritu de cada reunión sacramental.',
            },
            {
              type: 'central_quote',
              text: 'El cántico de los justos es una oración para mí, y será contestado con una bendición sobre sus cabezas.',
              attribution: 'El Señor Jesucristo a Emma Smith — DyC 25:12',
            },
            {
              type: 'reflection',
              prompt: '¿Has cantado algún himno como oración real — no como ritual, sino como comunicación intencional con Dios? ¿Qué cambia en tu experiencia del culto si tratas el cántico como el Señor lo describió: una oración que recibirá respuesta?',
            },
          ],
        },
      ],
    },
    {
      id: 's3',
      title: 'La Teología del Cántico',
      intro: {
        romanNumeral: 'III',
        title: 'Por Qué la Música No Es Relleno — Es Doctrina',
        paragraphs: [
          'El mandamiento dado a Emma no es una instrucción organizativa secundaria. Articula una teología completa de la adoración musical que la Iglesia ha sostenido desde 1830.',
        ],
      },
      topics: [
        {
          id: 't3-1',
          title: 'Música en la tradición bíblica y restaurada',
          blocks: [
            {
              type: 'paragraph',
              text: 'La Biblia está llena de mandamientos a cantar. Los Salmos — el libro más largo del Antiguo Testamento — son en su mayoría himnos litúrgicos. El rey Josafat envió cantores al frente de su ejército (2 Crónicas 20:21). Pablo instruye a la Iglesia a hablar "entre vosotros con salmos, con himnos y cánticos espirituales, cantando y alabando al Señor en vuestros corazones" (Efesios 5:19). En la noche de la Cena del Señor, Jesús y sus apóstoles cantaron un himno antes de salir al Getsemaní (Mateo 26:30).',
            },
            {
              type: 'deep_dive',
              badge: 'Contexto Escritural',
              title: 'El Himno de Jesús y Sus Apóstoles',
              paragraphs: [
                'Mateo 26:30 registra que después de la Última Cena, "cuando hubieron cantado el himno, salieron al monte de los Olivos." Ese himno — según la tradición judía de la Pascua — probablemente era el Hallel, Salmos 113-118. Jesús cantó camino al Getsemaní.',
                'Si el Hijo de Dios eligió cantar antes de la hora más oscura de su misión terrenal, el himno no es secundario a la adoración — es una forma de preparación del espíritu para lo que viene. Emma fue comisionada para proveer esos cánticos preparatorios a una Iglesia que enfrentaría sus propios Getsemaníes.',
                'La Restauración retoma esta comprensión antigua: el cántico no separa a los seres humanos de lo divino con una actuación — los conecta. La música es el idioma del corazón en presencia de Dios.',
              ],
            },
            {
              type: 'paragraph',
              text: 'La doctrina de DyC 25:12 tiene consecuencias prácticas inmediatas. Si el cántico es oración, entonces cantar sin atención — por costumbre, por hábito social, sin significado — es equivalente a orar mecánicamente. Y cantar con el corazón puesto en el Señor es equivalente a arrodillarse en comunión directa. El nivel de atención que traemos a los himnos cambia su naturaleza espiritual para nosotros.',
            },
          ],
        },
        {
          id: 't3-2',
          title: 'La Sociedad de Socorro y la música',
          blocks: [
            {
              type: 'paragraph',
              text: 'Cuando Emma fundó la Sociedad de Socorro en 1842, la música ocupó un lugar central desde el principio. Las reuniones de la Sociedad de Socorro en Nauvoo abrían y cerraban con himnos. Emma entendía que la música no era solo una actividad — era una forma de construir comunidad espiritual. Las mujeres que cantaban juntas, según la doctrina que Emma personificaba, estaban ofreciendo juntas una oración colectiva ante Dios.',
            },
            {
              type: 'leader_quote',
              quote: 'Emma Smith cumplió su llamamiento de compilar himnos con la misma seriedad con que cumplió todos sus llamimientos. Su trabajo musical fue un servicio a Dios y a los Santos que continúa bendiciendo vidas casi dos siglos después.',
              name: 'Élder Dallin H. Oaks',
              role: 'Primer Consejero de la Primera Presidencia',
            },
            {
              type: 'note_prompts',
              prompts: [
                { id: 'p1', question: '¿Qué himno te ha hablado más directamente en momentos de prueba o de gratitud? ¿Por qué ese himno en particular?' },
                { id: 'p2', question: 'Si el cántico es oración y la oración recibe respuesta, ¿qué bendificaciones prometidas en DyC 25:12 has experimentado en conexión con los himnos?' },
                { id: 'p3', question: '¿Cómo cambia tu actitud hacia los himnos en la reunión sacramental si los piensas como "incienso que sube al cielo" en lugar de como introducción al servicio?' },
              ],
            },
          ],
        },
      ],
    },
    {
      id: 's4',
      title: 'El Legado Vivo de Emma',
      intro: {
        romanNumeral: 'IV',
        title: 'Un Llamamiento que Sigue Vigente',
        paragraphs: [
          'DyC 25:16 declara que los mandamientos dados a Emma son dados "a mis hijos como una ley para todos." El himnario de Emma no fue un proyecto temporal — fue el inicio de una práctica que define la adoración restaurada.',
        ],
      },
      topics: [
        {
          id: 't4-1',
          title: 'El himnario en revisión — continuidad del llamamiento',
          blocks: [
            {
              type: 'paragraph',
              text: 'En años recientes, la Iglesia ha emprendido un proceso de revisión del himnario — el esfuerzo más comprehensivo desde el himnario de Emma de 1835. Se han recibido miles de contribuciones de Santos en todo el mundo. El principio que guía el proceso es el mismo que guió a Emma: selección bajo inspiración divina, atendiendo a la doctrina, la accesibilidad, y la capacidad de los cánticos para servir como oración auténtica.',
            },
            {
              type: 'highlight_verse',
              reference: 'DyC 25:16',
              text: 'Y este mandamiento se da a mis hijos como una ley para todos; y en él hallarán que estoy con ustedes, y que tengo misericordia de ustedes; por tanto, permanezcan en mi paz, hasta que vengan ante mí. Así lo ordena el Señor.',
            },
            {
              type: 'paragraph',
              text: 'La universalización del versículo 16 transforma el llamamiento privado de Emma en principio universal. Lo que fue dado a ella — que los himnos son oración, que deben seleccionarse bajo guía espiritual, que el cántico fortalece corazones y los regocija — no es solo para ella. Es para toda la Iglesia. Emma no solo compiló un himnario: estableció una teología de la adoración musical que la Restauración ha sostenido por casi dos siglos.',
            },
            {
              type: 'reflection',
              prompt: '¿Qué himno añadirías tú al canon si pudieras — y qué dice esa respuesta sobre lo que buscas cuando cantas ante el Señor?',
            },
          ],
        },
      ],
    },
  ],
}
