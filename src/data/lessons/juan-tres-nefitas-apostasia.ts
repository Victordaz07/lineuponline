import type { Lesson } from '@/types/doctrine'

export const juanTresNefitasApostasia: Lesson = {
  id: 'juan-tres-nefitas-apostasia',
  moduleId: 'temas-profundos',
  title: 'Juan el Amado y los Tres Nefitas durante la Apostasía',
  subtitle: '¿Por qué no la restauraron ellos?',
  author: 'Fuentes: D&C 7, 27, 77; 3 Nefi 28; J.F. Smith, H.B. Lee, Oaks, Nelson, Millet (BYU)',
  description:
    'Si Juan el Amado y los Tres Nefitas estaban vivos y con autoridad del sacerdocio durante toda la apostasía, ¿por qué Dios declaró que no había autoridad en la tierra? La respuesta requiere entender la diferencia entre poseer el sacerdocio y tener las llaves de jurisdicción — y revela que Juan ya participó en la Restauración.',
  level: 'AVANZADO',
  icon: '🔑',
  duration: 80,
  order: 1,
  status: 'PUBLISHED',
  studyBodyPlain: '',
  originalBodyPlain: '',
  previousLessonId: null,
  nextLessonId: null,
  studySections: [
    {
      id: 's1',
      title: 'La Paradoja Central',
      intro: {
        romanNumeral: 'I',
        title: 'La Paradoja Central',
        paragraphs: [
          'Es una de las preguntas más incómodas de la teología restaurada — y una de las más honestas. La Iglesia enseña que la Gran Apostasía ocurrió porque los apóstoles murieron y la autoridad del sacerdocio fue retirada de la tierra. Pero la misma Iglesia enseña que Juan el Amado está traducido y vivo — que los Tres Nefitas están traducidos y vivos — y que todos ellos tienen el sacerdocio. ¿Qué pasó exactamente?',
        ],
      },
      topics: [
        {
          id: 't1',
          title: 'Dos Verdades que Parecen Contradecirse',
          blocks: [
            {
              type: 'highlight_verse',
              text: 'Juan, mi amado, ¿qué deseas?... Y yo le dije: Señor, dame poder sobre la muerte, para que viva y traiga almas a ti. Y el Señor me dijo: De cierto, de cierto te digo, que porque deseas esto, permanecerás hasta que yo venga en mi gloria, y profetizarás ante naciones, tribus, lenguas y pueblos.',
              reference: 'Doctrina y Convenios 7:1–3',
            },
            {
              type: 'highlight_verse',
              text: 'Y son como los ángeles de Dios, y si oraren al Padre en nombre de Jesús, pueden mostrarse a cualesquier hombre que sea bueno... Y ministrarán a todas las naciones, tribus, lenguas y pueblos, preparando el camino antes de la Segunda Venida.',
              reference: '3 Nefi 28:30',
            },
            {
              type: 'doctrine_box',
              title: 'La pregunta exacta que necesita respuesta',
              body: 'Si solo se necesitan dos portadores del sacerdocio para conferir y recibir autoridad — y Juan tenía el sacerdocio, y los Tres Nefitas tenían el sacerdocio — ¿por qué no restauraron ellos mismos la Iglesia durante los 1,700 años de apostasía? ¿Y si no lo hicieron, en qué sentido puede decirse que "la autoridad fue retirada de la tierra"? Esta pregunta no es una trampa anticristiana — es una pregunta doctrinal legítima que los estudiantes serios merecen ver respondida con honestidad y profundidad.',
            },
            {
              type: 'media_slot',
              kind: 'image',
              src: '/images/juan-tres-nefitas/juan-amado-patmos.png',
              alt: 'Juan el Amado como ser traducido — el apóstol que permaneció',
              caption: 'Juan el Amado: único apóstol que no murió mártir, preservado como ser traducido para la dispensación final. D&C 7:1–3.',
              contextCard: { year: 'c. 96 d.C. → 1829', place: 'Patmos → ríos de Susquehanna', label: 'Juan el Amado' },
            },
            {
              type: 'paragraph',
              text: 'La respuesta no es una evasión ni una contradicción. Requiere entender una distinción doctrinal precisa que el presidente Henry B. Eyring articuló con claridad: "Los Apóstoles, después de la Ascensión de Cristo, continuaron ejerciendo las llaves que Él les dejó. Pero a causa de la desobediencia y la pérdida de fe de los miembros, los Apóstoles murieron sin que las llaves fueran transmitidas a sucesores. Llamamos a ese trágico episodio \'la Apostasía\'." La clave no es quién tenía sacerdocio — es quién tenía las llaves de presidencia y jurisdicción universal sobre la Iglesia.',
            },
          ],
        },
      ],
    },
    {
      id: 's2',
      title: 'La Distinción Más Importante: Poseer vs. Ejercer con Jurisdicción',
      intro: {
        romanNumeral: 'II',
        title: 'La Distinción Más Importante: Poseer vs. Ejercer con Jurisdicción',
        paragraphs: [
          'El corazón de la respuesta es una distinción teológica que los presidentes Nelson y Oaks han articulado con precisión legal: hay una diferencia entre poseer el sacerdocio y tener las llaves que autorizan su ejercicio para dirigir la Iglesia de manera universal. Durante la apostasía, lo primero existía en unos pocos seres; lo segundo no existía en nadie sobre la tierra.',
        ],
      },
      topics: [
        {
          id: 't2',
          title: 'Autoridad vs. Llaves — La Distinción que Lo Explica Todo',
          blocks: [
            {
              type: 'highlight_verse',
              text: 'La autoridad del sacerdocio se ha conferido sobre los varones poseedores del sacerdocio, mas el uso de esa autoridad es gobernado por aquellos que tienen sus llaves. El servicio sacerdotal requiere tanto preparación como permiso. Las llaves autorizan el desempeño de ese servicio.',
              reference: 'Russell M. Nelson, Liahona, octubre 2005',
            },
            {
              type: 'leader_quote',
              quote: 'La función de las llaves del sacerdocio amplía y a la vez limita. Amplía al autorizar el ejercicio de la autoridad del sacerdocio, y limita al señalar quién puede ejercer esa autoridad y a qué propósitos puede dedicarse.',
              name: 'Dallin H. Oaks',
              role: '"Las llaves y la autoridad del sacerdocio", Conferencia General, abril 2014',
            },
            {
              type: 'paragraph',
              text: 'Esta distinción opera directamente para Juan y los Tres Nefitas: retuvieron sacerdocio en el sentido personal, pero carecían tanto del mandato como de la jurisdicción para gobernar la Iglesia universal o iniciar una dispensación. El presidente Joseph Fielding Smith lo articuló de manera definitiva al hablar de los doce discípulos nefitas — incluyendo a los Tres que fueron trasladados:',
            },
            {
              type: 'leader_quote',
              quote: 'Aunque en cada caso los Doce nefitas son llamados discípulos, el hecho permanece de que habían sido investidos con autoridad divina para ser testigos especiales de Cristo entre su propio pueblo. Por lo tanto, eran virtualmente apóstoles para la raza nefita, aunque su jurisdicción debía estar eventualmente sujeta a la autoridad y jurisdicción de Pedro y los Doce escogidos en Palestina.',
              name: 'Joseph Fielding Smith',
              role: 'Doctrines of Salvation, vol. 3, pág. 158',
            },
            {
              type: 'paragraph',
              text: 'Conclusión decisiva: incluso entre los apóstoles había jerarquía jurisdiccional. Los Tres Nefitas tenían sacerdocio, pero su jurisdicción estaba sujeta a la de Pedro y los Doce de Palestina. Cuando los Doce de Jerusalén fueron martirizados sin sucesores válidos, las llaves de presidencia universal salieron de la tierra — aunque hubiera portadores individuales con sacerdocio personal.',
            },
            {
              type: 'key_points',
              title: 'Lo que existió vs. lo que no existió durante la apostasía',
              points: [
                'SÍ EXISTIÓ: Posesión personal del sacerdocio — Juan, los Tres Nefitas, posiblemente entre las Diez Tribus',
                'NO EXISTIÓ: Autorización para ejercer el sacerdocio en la administración pública de la Iglesia para toda la humanidad',
                'NO EXISTIÓ: Las llaves de presidencia universal sobre la Iglesia — perdidas con el martirio de los apóstoles sin sucesión válida',
                'NO EXISTIÓ: El mandato divino de restaurar la Iglesia abiertamente — reservado a un profeta llamado en la dispensación final',
                'SÍ EXISTIÓ: Ministración angélica, Luz de Cristo, providencia general — el Padre nunca abandonó la tierra',
              ],
            },
          ],
        },
      ],
    },
    {
      id: 's3',
      title: 'La Misión Específica de Juan — Lo Que Hizo y Lo Que No',
      intro: {
        romanNumeral: 'III',
        title: 'La Misión Específica de Juan — Lo Que Hizo y Lo Que No',
        paragraphs: [
          'La sección 7 de Doctrina y Convenios es literalmente la respuesta a una consulta directa. En abril de 1829, José Smith y Oliver Cowdery discreparon sobre si Juan el Apóstol había muerto o continuaba vivo. Para resolverlo consultaron al Señor mediante el Urim y Tumim, y recibieron la revelación — la traducción de un pergamino escrito y ocultado por el propio Juan. Lo que revela es específico y delimitado.',
        ],
      },
      topics: [
        {
          id: 't3',
          title: 'La Misión de Juan Según el Señor y José Smith',
          blocks: [
            {
              type: 'highlight_verse',
              text: 'Y le dije a él, el Señor: Porque deseabas esto de mí, te será concedido; y serás como mi ministro, para que permanezcas hasta que yo venga en mi gloria, y profetizarás ante naciones, tribus, lenguas y pueblos. Y para ello te haré un fuego ardiente y ángel ministrante; ministrarás para aquellos que serán herederos de la salvación que moran en la tierra.',
              reference: 'Doctrina y Convenios 7:3–6',
            },
            {
              type: 'paragraph',
              text: 'Tres elementos de la misión de Juan: (1) Ministrar a los herederos de la salvación que moran en la tierra — individuos, no la Iglesia como institución. (2) Profetizar ante naciones, tribus, lenguas y pueblos. (3) Trabajar entre las Diez Tribus de Israel preparándolas para el recogimiento. No hay mandato de presidir la Iglesia, ordenar apóstoles, o dirigir el trabajo salvífico para toda la humanidad.',
            },
            {
              type: 'leader_quote',
              quote: 'El Espíritu del Señor descendió sobre José de manera inusual, y profetizó que Juan el Revelador estaba entonces entre las Diez Tribus de Israel que habían sido llevadas por Salmanasar, rey de Asiria, para prepararlos para su retorno de su larga dispersión, para que poseyeran nuevamente la tierra de sus padres.',
              name: 'José Smith',
              role: 'Historia de la Iglesia, vol. 1, pág. 176 — Conferencia del 3 de junio de 1831',
            },
            {
              type: 'highlight_verse',
              text: 'Y el libro pequeño que comió Juan [en Apocalipsis 10] fue una misión y una ordenanza para él recoger las tribus de Israel.',
              reference: 'Doctrina y Convenios 77:14',
            },
            {
              type: 'paragraph',
              text: 'Es decir, la misión jurisdiccional de Juan se ejerce primordialmente entre el Israel disperso — no en el orbe cristiano-occidental durante los siglos de la apostasía. No tenía mandato para reorganizar la Iglesia entre los gentiles. Tenía mandato para preparar al Israel disperso para el recogimiento de los últimos días.',
            },
            {
              type: 'leader_quote',
              quote: 'Muchos han supuesto que la doctrina de la translación era una doctrina por la cual los hombres eran llevados inmediatamente a la presencia de Dios, y a una plenitud eterna, pero esto es una idea equivocada. Su lugar de habitación es el del orden terrestre, un lugar preparado para tales personajes que Él tenía en reserva para ser ángeles ministrantes.',
              name: 'José Smith',
              role: 'Teachings of the Prophet Joseph Smith, pág. 170',
            },
          ],
        },
      ],
    },
    {
      id: 's4',
      title: 'Los Tres Nefitas — Lo Que Joseph Fielding Smith Dijo Claramente',
      intro: {
        romanNumeral: 'IV',
        title: 'Los Tres Nefitas — Lo Que Joseph Fielding Smith Dijo Claramente',
        paragraphs: [
          'La declaración más precisa y autorizada sobre la relación entre los seres traducidos y la apostasía proviene de una conversación que Harold B. Lee documentó en "Stand Ye in Holy Places" — una conversación con el propio Joseph Fielding Smith. Lo que Smith dijo resuelve el asunto de manera directa y sin evasiones.',
        ],
      },
      topics: [
        {
          id: 't4',
          title: 'La Declaración de Joseph Fielding Smith',
          blocks: [
            {
              type: 'highlight_verse',
              text: 'Son como los ángeles de Dios, y si oraren al Padre en nombre de Jesús, pueden mostrarse a cualesquier hombre que sea bueno... Y ministrarán a todas las tribus dispersas de Israel, y a todas las naciones, tribus, lenguas y pueblos, y sacarán de ellos a muchos para el Señor.',
              reference: '3 Nefi 28:29–30',
            },
            {
              type: 'leader_quote',
              quote: 'Creo que nunca ha habido un momento desde la creación en que Dios haya abandonado la tierra a Satanás. Siempre ha habido alguien sosteniendo el sacerdocio en la tierra para mantener a Satanás en jaque... He pensado en los Tres Nefitas. ¿Por qué fueron trasladados y se les permitió quedarse? ¿Para qué propósito?... Eso no significa que el reino de Dios siempre haya estado presente, porque estos hombres no tenían la autoridad para administrar las ordenanzas salvíficas del Evangelio al mundo. Pero estos individuos fueron trasladados para un propósito conocido por el Señor.',
              name: 'Joseph Fielding Smith',
              role: 'Citado por Harold B. Lee en "Stand Ye in Holy Places", págs. 161–162',
            },
            {
              type: 'doctrine_box',
              title: 'La formulación doctrinal más clara que existe sobre este tema',
              body: 'Esta declaración distingue con precisión quirúrgica entre: (A) Presencia continua de portadores del sacerdocio en la tierra — que SÍ existió. Los Tres Nefitas, Juan, posiblemente seres entre las Diez Tribus. (B) Presencia del Reino de Dios — la Iglesia organizada con jurisdicción para ofrecer las ordenanzas salvíficas a toda la familia humana — que NO existió durante la apostasía. El presidente Smith usa la palabra exacta: "no tenían la autoridad para administrar las ordenanzas salvíficas al mundo." No dice que no tenían sacerdocio. Dice que no tenían la autorización para esa función específica.',
            },
            {
              type: 'media_slot',
              kind: 'image',
              src: '/images/juan-tres-nefitas/tres-nefitas-naciones.png',
              alt: 'Los Tres Nefitas ministrando entre las naciones — seres de orden terrestre con misión angelical',
              caption: 'Los Tres Nefitas: traducidos para ministrar entre las naciones dispersas, no para gobernar la Iglesia universal. 3 Nefi 28:29–30.',
              contextCard: { year: 'c. 34 d.C. — Presente', place: 'Naciones dispersas de Israel', label: 'Los Tres Nefitas' },
            },
            {
              type: 'leader_quote',
              quote: 'Encontrarán que muchos distritos donde los élderes de Israel no pueden llegar serán penetrados por estos hombres que tienen poder sobre la muerte... están yendo entre las naciones de la tierra ante el rostro de sus hijos, y están preparando los corazones de los hombres para recibir el Evangelio, así como el agricultor prepara la tierra para recibir la semilla.',
              name: 'Élder John W. Taylor',
              role: 'Conferencia General, octubre 1902',
            },
            {
              type: 'leader_quote',
              quote: 'Los Tres Nefitas están obrando entre las tribus perdidas y en otros lugares. Juan el Revelador está haciendo su obra, y creo que el momento llegará de repente, antes de que estemos preparados para ello.',
              name: 'Presidente Joseph F. Smith',
              role: 'Life of Joseph F. Smith, pág. 244',
            },
          ],
        },
      ],
    },
    {
      id: 's5',
      title: 'El Giro Más Poderoso: Juan YA Participó en la Restauración',
      intro: {
        romanNumeral: 'V',
        title: 'El Giro Más Poderoso: Juan YA Participó en la Restauración',
        paragraphs: [
          'Aquí está el punto que pocos estudiantes conocen — y que disuelve la paradoja completamente. No es que Juan tuviera sacerdocio durante la apostasía y lo "guardara en la gaveta" esperando que alguien más lo recuperara. Es que Juan USÓ ese sacerdocio en el momento exacto para el que había sido preservado: la Restauración de 1829.',
        ],
      },
      topics: [
        {
          id: 't5',
          title: 'Pedro, Santiago — y el JUAN Traducido',
          blocks: [
            {
              type: 'highlight_verse',
              text: 'Y también con Pedro, y Santiago, y Juan, a quienes conferí las llaves de mi reino, y de una dispensación del evangelio para los postreros tiempos; y para la plenitud de los tiempos — en cuyo tiempo él reunirá todas las cosas, tanto las que están en el cielo como las que están en la tierra.',
              reference: 'Doctrina y Convenios 27:12–13',
            },
            {
              type: 'media_slot',
              kind: 'image',
              src: '/images/juan-tres-nefitas/restauracion-sacerdocio-melquisedec.jpg',
              alt: 'Pedro, Santiago y Juan restaurando el Sacerdocio de Melquisedec a José Smith y Oliver Cowdery, 1829',
              caption: 'La restauración del Sacerdocio de Melquisedec: Pedro, Santiago — y el Juan traducido — le confieren las llaves a José Smith en 1829. D&C 27:12.',
              contextCard: { year: 'Mayo-junio 1829', place: 'Río Susquehanna, Pennsylvania', label: 'Restauración del Sacerdocio de Melquisedec' },
            },
            {
              type: 'paragraph',
              text: 'El Pedro, Santiago y Juan que le restauraron el Sacerdocio de Melquisedec a José Smith en 1829 — ese Juan es el Juan traducido. El mismo Juan que estaba "vivo" durante toda la apostasía. El mismo Juan que mantuvo el sacerdocio durante 1,700 años no para reemplazar el orden eclesiástico sino para participar en el momento de restauración. La autoridad fue preservada específicamente para este propósito. No era sacerdocio inútil — era sacerdocio en espera del momento señalado.',
            },
            {
              type: 'highlight_verse',
              text: 'Y la voz de Miguel, el arcángel; la voz de Gabriel y de Rafael, y de otros ángeles desde Adán hasta el presente tiempo, todos declarando sus dispensaciones, sus derechos, sus llaves, sus honores, su majestad y gloria, y la potestad de su sacerdocio.',
              reference: 'Doctrina y Convenios 128:21',
            },
            {
              type: 'deep_dive',
              badge: 'El punto más profundo',
              title: 'La lógica completa de la preservación',
              paragraphs: [
                'Esto resuelve la paradoja con elegancia teológica: Dios no dejó sacerdocio en la tierra porque no lo necesitaba. Lo dejó porque SÍ lo necesitaba — para el momento de la Restauración. El Juan traducido no era el "respaldo de emergencia" de una institución que colapsó. Era el depositario de las llaves apostólicas que serían devueltas en el momento exacto que el Padre había señalado desde antes de la fundación del mundo.',
                'La diferencia es entre una autoridad que está inactiva por circunstancias adversas y una autoridad que está en reserva por diseño divino. Los Tres Nefitas y Juan no eran sobrevivientes de una Iglesia que murió — eran los ángeles enviados por el Padre para custodiar lo que sería devuelto cuando estuviera todo listo: el profeta correcto, el tiempo correcto, la dispensación final.',
                'Robert L. Millet, del BYU Religious Studies Center, lo articula así: "La restauración de la autoridad divina a través de José Smith en 1829 fue por tanto necesaria para que la Iglesia restaurada pudiera ser edificada sobre el fundamento de apóstoles y profetas. La apertura de una dispensación es un acto soberano y revelado del Salvador — no un acto delegable a portadores individuales por su mera tenencia del sacerdocio." (BYU Religious Studies Center, Deseret Book, 2011)',
              ],
            },
            {
              type: 'leader_quote',
              quote: 'El Señor nos ha dado a todos, como poseedores del sacerdocio, cierta autoridad de Sí mismo, pero sólo podemos aprovechar los poderes del cielo sobre la base de nuestra rectitud personal. El sacerdocio efectivo no es magia depositada en cuerpos — es relación pactual con el cielo bajo la dirección de quien tiene las llaves.',
              name: 'Spencer W. Kimball',
              role: 'Ensign, mayo 1976, pág. 45',
            },
          ],
        },
      ],
    },
    {
      id: 's6',
      title: 'La Sabiduría del Padre — Por Qué Este Fue el Plan',
      intro: {
        romanNumeral: 'VI',
        title: 'La Sabiduría del Padre — Por Qué Este Fue el Plan',
        paragraphs: [
          'La paradoja completamente resuelta revela algo profundo sobre cómo Dios opera: nunca abandonó la tierra, pero permitió que el Reino organizado estuviera ausente porque esa ausencia era necesaria para preparar el escenario de la restauración más completa de toda la historia.',
        ],
      },
      topics: [
        {
          id: 't6',
          title: 'Por Qué La Apostasía Fue Parte del Plan',
          blocks: [
            {
              type: 'leader_quote',
              quote: 'La apostasía no sólo fue una pérdida de autoridad — fue también una pérdida de doctrina íntegra. Una restauración auténtica requería mucho más que la transmisión silenciosa de sacerdocio entre individuos ocultos: requería un profeta nuevo, escrituras nuevas, una nueva organización eclesiástica, y la confirmación visible de mensajeros celestiales que entregaran las llaves dispensacionales una por una.',
              name: 'Dallin H. Oaks',
              role: '"Apostasía y Restauración", Conferencia General, abril 1995',
            },
            {
              type: 'paragraph',
              text: 'El período de la apostasía no fue un paréntesis sin propósito. Fue el contexto que hizo posibles el Renacimiento, la Reforma protestante, la traducción de la Biblia a lenguas vernáculas, el surgimiento de la libertad religiosa, y la Constitución de los Estados Unidos. Todos estos elementos prepararon el escenario para que José Smith pudiera recibir, proclamar, e institucionalizar la Restauración sin ser eliminado de inmediato. La apostasía fue providencialmente necesaria para que la dispensación final pudiera prosperar.',
            },
            {
              type: 'key_points',
              title: 'Lo que hace única la lógica de la Restauración',
              points: [
                'No fue una reforma — fue una restauración. Lutero nunca reclamó tener autoridad divina para administrar ordenanzas; solo reformar doctrinas y prácticas',
                'Requirió seres celestiales reales entregando llaves reales — no una "reforma espiritual" silenciosa',
                'El Juan traducido fue el vínculo vivo entre la dispensación meridiana y la dispensación final — el mismo testigo de Cristo en ambas',
                'Los Tres Nefitas prepararon corazones entre el Israel disperso — millones de almas predispuestas para recibir el evangelio restaurado',
                'La apertura de una dispensación es un acto soberano del Señor, no un acto que un portador de sacerdocio puede ejecutar por iniciativa propia',
              ],
            },
            {
              type: 'leader_quote',
              quote: 'La Iglesia de Jesucristo de los Santos de los Últimos Días no es una reforma — es una restauración. No vino del cielo para mejorar lo que los hombres habían construido. Vino del cielo para reemplazar lo que los hombres habían perdido. Esa es la diferencia que define todo lo que esta Iglesia es.',
              name: 'Gordon B. Hinckley',
              role: '"The Symbol of Our Faith", Conferencia General, abril 2005 (trad.)',
            },
            {
              type: 'deep_dive',
              badge: 'Síntesis final',
              title: 'Las dos proposiciones que no se contradicen',
              paragraphs: [
                'Proposición A — Durante la Gran Apostasía la autoridad del sacerdocio para administrar la Iglesia y sus ordenanzas para toda la familia humana se retiró de la tierra, junto con las llaves apostólicas de presidencia. Esta proposición es verdadera.',
                'Proposición B — Juan el Amado y los Tres Nefitas permanecieron en la tierra como seres traducidos con sacerdocio personal, cumpliendo una misión angélica especial bajo mandato divino específico — preparar a las Diez Tribus, ministrar a herederos individuales de la salvación, mantener a Satanás en jaque, y eventualmente participar como mensajeros restauradores cuando llegara la dispensación final. Esta proposición también es verdadera.',
                'Estas dos proposiciones no son contradictorias. Son complementarias. El "conflicto" entre ellas desaparece cuando se entiende que la autoridad de la que habla A (las llaves de presidencia universal) es diferente del sacerdocio del que habla B (sacerdocio personal sin mandato de dirección eclesiástica universal). La paradoja no era una contradicción — era una pregunta que esperaba una respuesta precisa.',
              ],
            },
            {
              type: 'reflection',
              prompt: '¿Cómo cambia tu comprensión de la Restauración saber que Juan el Amado — el mismo que estuvo con Cristo en Getsemaní — fue uno de los que le devolvieron el sacerdocio a José Smith en 1829? ¿Y qué implica para tu fe saber que Dios nunca abandonó la tierra, sino que preservó con cuidado lo que sería devuelto en el momento exacto? ¿Hay alguna área de tu vida donde estás esperando que Dios actúe y necesitas confiar en que Él también tiene todo en reserva para el momento correcto?',
            },
          ],
        },
      ],
    },
  ],
}
