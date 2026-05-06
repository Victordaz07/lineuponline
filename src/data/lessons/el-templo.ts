import type { Lesson } from '@/types/doctrine'

export const elTemplo: Lesson = {
  id: 'templo-casa-del-senor',
  moduleId: 'doctrina-avanzada-carne',
  title: 'El Templo — La Casa del Señor',
  subtitle: 'Donde el tiempo y la eternidad se tocan',
  author: 'Fuentes principales: DyC 84, 110, 131-132; Russell M. Nelson',
  description:
    'El templo no es el edificio más hermoso de la Iglesia — es el lugar donde Dios hace sus promesas más grandes. Las ordenanzas del templo, el endowment, el sellamiento, y por qué Nelson dijo que nuestro futuro espiritual depende de nuestra relación con el templo.',
  level: 'AVANZADO',
  icon: '🏛️',
  duration: 75,
  order: 2,
  status: 'PUBLISHED',
  studyBodyPlain: '',
  originalBodyPlain: '',
  previousLessonId: 'sacerdocio-autoridad-poder',
  nextLessonId: 'preexistencia',
  studySections: [
    // ─── SECCIÓN I ──────────────────────────────────────────────────────────────
    {
      id: 's1',
      title: 'Historia del Templo — De Moisés a Hoy',
      intro: {
        romanNumeral: 'I',
        title: 'Historia del Templo — De Moisés a Hoy',
        paragraphs: [
          'El templo no apareció en la historia de la salvación con la Restauración. Desde que Dios le dijo a Moisés "constrúyeme un santuario y habitaré en medio de ellos," el principio ha sido el mismo: un espacio sagrado donde el cielo y la tierra se tocan, donde los convenios se hacen, donde el poder del sacerdocio se manifiesta en toda su plenitud. Entender la línea histórica del templo es entender que Dios nunca ha querido separarse de su pueblo.',
        ],
      },
      topics: [
        {
          id: 't1-1',
          title: 'La Línea del Tiempo del Templo',
          blocks: [
            {
              type: 'highlight_verse',
              text: 'Y me harán un santuario, y yo habitaré en medio de ellos.',
              reference: 'Éxodo 25:8',
            },
            {
              type: 'paragraph',
              text: 'El tabernáculo portátil de Moisés, el templo de Salomón, el segundo templo de Herodes, el Templo de Kirtland, el de Nauvoo, y los más de 350 templos de hoy — todos son expresiones del mismo principio divino: Dios desea morar entre los suyos y darles acceso a las ordenanzas que hacen posible la exaltación. La línea histórica no es accidental; es el relato de cómo Dios ha buscado sin descanso restaurar esa conexión sagrada.',
            },
            {
              type: 'timeline',
              items: [
                {
                  label: 'c. 1440 a.C. — Tabernáculo',
                  text: 'Moisés construye el tabernáculo portátil en el desierto. Primera casa de Dios entre Su pueblo con ordenanzas sagradas, el arca del convenio y el lugar santísimo.',
                  ref: 'Éxodo 25–27',
                  color: 'gold',
                },
                {
                  label: 'c. 960 a.C. — Templo de Salomón',
                  text: 'Salomón edifica el primer templo permanente en Jerusalén. La gloria de Dios lo llena al dedicarlo. Destruido por Babilonia en 586 a.C.',
                  ref: '1 Reyes 6–8',
                  color: 'gold',
                },
                {
                  label: '1836 — Templo de Kirtland',
                  text: 'Primer templo de la dispensación restaurada. El Señor aparece. Moisés, Elías y Elías restituyen las llaves del sacerdocio (DyC 110). La Restauración culmina aquí.',
                  ref: 'DyC 109–110',
                  color: 'blue',
                },
                {
                  label: '1846 — Templo de Nauvoo',
                  text: 'Los Santos reciben el endowment completo antes del éxodo al oeste. José Smith había introducido las ordenanzas del templo desde 1842.',
                  ref: 'DyC 124:40–41',
                  color: 'blue',
                },
                {
                  label: 'Hoy — Templos modernos',
                  text: 'Más de 350 templos anunciados, en construcción o dedicados en todo el mundo. El presidente Nelson ha acelerado la construcción a un ritmo sin precedentes en la historia de la Iglesia.',
                  ref: 'Russell M. Nelson, 2018–2025',
                  color: 'gold',
                },
              ],
            },
          ],
        },
        {
          id: 't1-2',
          title: 'La Gran Revelación de Kirtland — DyC 110',
          blocks: [
            {
              type: 'doctrine_box',
              title: 'Por qué Kirtland lo cambió todo',
              body: 'El 3 de abril de 1836, José Smith y Oliver Cowdery se postraron en oración tras la cortina del templo de Kirtland. Lo que ocurrió a continuación fue la más concentrada restitución de llaves de sacerdocio en la historia moderna: el Señor Jesucristo apareció. Moisés restauró las llaves de la congregación de Israel. Elías restauró las llaves del evangelio de Abrahán. Y Elías (el profeta del Antiguo Testamento) restauró las llaves del sellamiento — el poder de sellar en la tierra y que sea sellado en el cielo.',
            },
            {
              type: 'highlight_verse',
              text: 'Vimos al Señor estar de pie sobre el parapeto del púlpito, ante nosotros; y debajo de sus pies había un suelo de oro puro, de apariencia muy hermosa. [...] Sus ojos eran como llama de fuego; el cabello de su cabeza era blanco como la nieve pura; su rostro brillaba más que el sol.',
              reference: 'Doctrina y Convenios 110:2–3',
            },
            {
              type: 'highlight_verse',
              text: 'He aquí, el tiempo ha llegado completamente, el gran día del Señor está cerca, y ¿quién podrá soportar la venida de él? [...] He aquí, os envío a Elías el profeta, antes que venga el grande y terrible día del Señor. Y él hará volver el corazón de los padres a los hijos, y el corazón de los hijos a sus padres.',
              reference: 'Doctrina y Convenios 110:14, 15–16',
            },
            {
              type: 'highlight_verse',
              text: 'Por tanto, en las ordenanzas de aquel sacerdocio, se manifiesta el poder de la divinidad. Y sin las ordenanzas del mismo, y la autoridad del sacerdocio, el poder de la divinidad no se manifiesta a los hombres en la carne.',
              reference: 'Doctrina y Convenios 84:20–21',
            },
            {
              type: 'paragraph',
              text: 'DyC 84:20-21 es la declaración doctrinal fundamental sobre el templo: sin las ordenanzas del sacerdocio, el poder de la divinidad no puede manifestarse plenamente en la vida de un ser mortal. El templo no es una institución religiosa opcional. Es el único canal a través del cual ciertas categorías del poder de Dios fluyen hacia Sus hijos.',
            },
          ],
        },
      ],
    },

    // ─── SECCIÓN II ─────────────────────────────────────────────────────────────
    {
      id: 's2',
      title: 'Dignidad, No Perfección — El Acceso al Templo',
      intro: {
        romanNumeral: 'II',
        title: 'Dignidad, No Perfección — El Acceso al Templo',
        paragraphs: [
          'Uno de los malentendidos más comunes sobre el templo es que está reservado para los perfectos, para los que tienen todo resuelto, para los que nunca tropiezan. Nada más alejado de la verdad doctrinal. La recomendación al templo no es un certificado de perfección — es una declaración de que una persona ha hecho los convenios del evangelio y los está honrando con sinceridad. Existe una diferencia crucial entre dignidad y perfección, y confundirlas mantiene afuera a personas que deberían estar adentro.',
        ],
      },
      topics: [
        {
          id: 't2-1',
          title: 'Lo Que Realmente Pregunta la Entrevista',
          blocks: [
            {
              type: 'key_points',
              title: 'Las preguntas de la entrevista para la recomendación al templo',
              points: [
                'Fe en Dios el Padre Eterno, en Jesucristo y en el Espíritu Santo; y en la expiación de Cristo',
                'Testimonio de la Restauración y del papel del profeta viviente como presidente de la Iglesia',
                'Esfuerzo sincero por cumplir los mandamientos, incluyendo los relacionados con el diezmo y la ley de castidad',
                'Apoyo al liderazgo de la Iglesia y ausencia de enseñanzas contrarias a sus doctrinas',
                'Honestidad en las relaciones con los demás y vida de acuerdo con las enseñanzas del evangelio',
                'Llevar las vestiduras sagradas del templo correctamente (para los que ya han recibido el endowment)',
                'Cumplimiento de las responsabilidades familiares',
              ],
            },
            {
              type: 'compare_grid',
              left: {
                title: 'Lo que la gente cree que requiere el templo',
                items: [
                  'No haber cometido pecados serios nunca',
                  'Tener una fe perfecta sin dudas',
                  'Tener un matrimonio y familia modelo',
                  'Ser respetado en el barrio como ejemplo impecable',
                  'Haber hecho una misión de tiempo completo',
                  'No tener problemas emocionales ni luchas personales',
                ],
              },
              right: {
                title: 'Lo que realmente requiere el templo',
                items: [
                  'Tener fe sincera en Cristo y en la Restauración',
                  'Vivir honestamente los convenios del bautismo',
                  'Pagar diezmo fiel y ofrecer lo que se puede dar',
                  'Esforzarse por cumplir la ley de castidad',
                  'No enseñar doctrinas contrarias a la Iglesia',
                  'Ser honesto con Dios, con uno mismo y con el obispo',
                ],
              },
            },
            {
              type: 'doctrine_box',
              title: 'Dignidad significa ser limpio de pecado no arrepentido — no ausencia de debilidades',
              body: 'La dignidad para el templo no es un estado de perfección moral alcanzado. Es un estado de convenio activo: la persona está honrando los convenios del evangelio, y cuando cae, se levanta mediante el arrepentimiento y sigue adelante. Las debilidades, las dudas, los tropiezos que se están trabajando activamente no impiden el acceso al templo. Solo el pecado no arrepentido que uno ha decidido mantener cierra la puerta. La diferencia entre dignidad e indignidad no es la ausencia de imperfecciones — es la dirección del corazón.',
            },
            {
              type: 'leader_quote',
              quote: 'No vayan al templo pensando que deben ser perfectos. Vayan como son — con sus luchas, con sus preguntas, con sus debilidades. El templo es el lugar donde el Señor los transforma. No tienen que estar transformados para entrar. Tienen que estar dispuestos a serlo.',
              name: 'Harold B. Lee',
              role: 'Decimoprimero Presidente de la Iglesia (paráfrasis de enseñanzas sobre la dignidad del templo)',
            },
          ],
        },
        {
          id: 't2-2',
          title: 'Quién Debe Empezar a Prepararse Ahora',
          blocks: [
            {
              type: 'paragraph',
              text: 'Para los que están fuera del templo o que llevan tiempo sin ir: la puerta de la preparación no requiere meses de espera. Requiere una conversación honesta con el obispo, un corazón dispuesto al arrepentimiento donde sea necesario, y la decisión de honrar los convenios que ya se han hecho. Para la mayoría de los miembros activos que se mantienen alejados del templo por sentirse "no suficientemente buenos," la realidad doctrinal es que ya califican — solo necesitan creerlo.',
            },
            {
              type: 'reflection',
              prompt: '¿Hay algo que te hace sentir que no eres "suficientemente bueno" para el templo? ¿Es eso un pecado no arrepentido (que tiene solución) o es una percepción equivocada de lo que Dios requiere? ¿Cuándo fue la última vez que hablaste honestamente con tu obispo sobre tu dignidad para el templo?',
            },
          ],
        },
      ],
    },

    // ─── SECCIÓN III ────────────────────────────────────────────────────────────
    {
      id: 's3',
      title: 'El Endowment y el Sellamiento',
      intro: {
        romanNumeral: 'III',
        title: 'El Endowment y el Sellamiento',
        paragraphs: [
          'El templo ofrece ordenanzas que ningún otro lugar en la tierra puede ofrecer. El endowment y el sellamiento no son rituales religiosos ordinarios. Son los convenios más elevados que un ser mortal puede hacer con Dios en esta vida: una dotación de poder desde lo alto, y la posibilidad de que los lazos más sagrados de la familia duren para siempre. Entender qué son y qué hacen es entender el corazón del plan de exaltación.',
        ],
      },
      topics: [
        {
          id: 't3-1',
          title: 'El Endowment — La Dotación de Poder desde lo Alto',
          blocks: [
            {
              type: 'highlight_verse',
              text: 'Y si vuestros ojos están puestos solamente en mi gloria, todo el cuerpo estará lleno de luz, y no habrá tinieblas en vosotros; y el cuerpo que está lleno de luz comprende todas las cosas. Por tanto, santificaos a fin de que vuestra mente esté limpia, a fin de que podáis testificar del Pacto del Padre que os enviará desde ahora.',
              reference: 'Doctrina y Convenios 88:67–68',
            },
            {
              type: 'paragraph',
              text: 'La palabra "endowment" — que en español se traduce como dotación o investidura — significa literalmente "ser dotado de poder desde arriba." José Smith describió su propósito con claridad: el endowment es una dotación de inteligencia, instrucción y poder divinos que capacita al receptor para cumplir su misión eterna. No es solo instrucción religiosa — es una transformación espiritual documentada en convenios.',
            },
            {
              type: 'highlight_verse',
              text: 'Por tanto, en las ordenanzas de aquel sacerdocio, se manifiesta el poder de la divinidad. Y sin las ordenanzas del mismo, y la autoridad del sacerdocio, el poder de la divinidad no se manifiesta a los hombres en la carne. Y sin los poderes del sacerdocio de Melquisedec, y sus llaves, ningún hombre puede ver la faz de Dios, ni vivir.',
              reference: 'Doctrina y Convenios 84:19–22',
            },
            {
              type: 'key_points',
              title: 'Lo que el endowment ofrece espiritualmente',
              points: [
                'Instrucción simbólica sobre el plan de salvación: la creación, la caída, la expiación y el retorno a la presencia de Dios',
                'Convenios de obediencia a la ley de Dios, castidad, consagración y dedicación al evangelio',
                'Una nueva vestidura sagrada como símbolo externo del convenio y del poder que viene con él',
                'Conocimiento simbólico de la manera de regresar a la presencia del Padre — los "puntos de acceso" del viaje eterno',
                'Poder espiritual que fluye a través del cumplimiento fiel de los convenios del templo a lo largo de la vida',
              ],
            },
            {
              type: 'leader_quote',
              quote: 'Yo llevo mis vestiduras sagradas del templo. Son un recordatorio diario de mis convenios con Dios. Cada vez que me las pongo, recuerdo quién soy, cuál es mi propósito, y a quién le pertenezco. Las vestiduras no son superstición ni magia — son un símbolo de que elegí seguir a Jesucristo con toda mi vida.',
              name: 'Russell M. Nelson',
              role: '"The Temple and Your Spiritual Foundation", Conferencia General, octubre 2021 (trad.)',
            },
          ],
        },
        {
          id: 't3-2',
          title: 'El Sellamiento — La Familia Eterna',
          blocks: [
            {
              type: 'highlight_verse',
              text: 'En el orden celestial existen tres grados. Y a fin de obtener el más elevado, un hombre tiene que entrar en este orden del sacerdocio [es decir, en el nuevo y sempiterno convenio del matrimonio]; y si no lo hace, no puede obtenerlo. Puede entrar en el otro, pero eso concluye su reino; no puede tener aumento.',
              reference: 'Doctrina y Convenios 131:1–4',
            },
            {
              type: 'highlight_verse',
              text: 'Y si os casáis en el nuevo y sempiterno convenio, y este matrimonio no fue sellado por el que tiene esta autoridad y poder plenipotenciario, entonces no tenéis ningún convenio; y cuando estéis fuera del mundo no podréis tener aumento.',
              reference: 'Doctrina y Convenios 132:18',
            },
            {
              type: 'highlight_verse',
              text: 'Y si os casáis por mí, en mi nombre, conforme a mi ley, y por mi palabra, y por convenio, y sois mutuamente fieles, vuestro matrimonio será válido para tiempo y para toda la eternidad.',
              reference: 'Doctrina y Convenios 132:19–20',
            },
            {
              type: 'paragraph',
              text: 'DyC 131 no es solo una doctrina del matrimonio. Es una doctrina de la exaltación: el grado más alto del reino celestial — el único donde hay "aumento" (vida, progreso, creación eternas) — requiere que la persona haya hecho el convenio del matrimonio eterno. No porque Dios excluya arbitrariamente a los solteros, sino porque la exaltación misma es un estado de relación eterna que solo puede iniciarse con ese convenio en esta vida.',
            },
            {
              type: 'compare_grid',
              left: {
                title: 'Matrimonio civil o religioso ordinario',
                items: [
                  '"Hasta que la muerte los separe"',
                  'Válido solo dentro de los límites de esta vida mortal',
                  'Los hijos no están sellados eternamente a los padres',
                  'No confiere "aumento" eterno según DyC 131',
                  'Un contrato entre personas — reconocido por el Estado',
                ],
              },
              right: {
                title: 'Matrimonio sellado en el templo',
                items: [
                  '"Por tiempo y por toda la eternidad"',
                  'Válido más allá de la muerte si ambos son fieles a los convenios',
                  'Los hijos nacidos en el convenio o sellados quedan ligados eternamente',
                  'Abre el acceso al grado más alto del reino celestial (DyC 131)',
                  'Un convenio con Dios — sellado por quien tiene la autoridad plenipotenciaria',
                ],
              },
            },
            {
              type: 'deep_dive',
              badge: 'Profundizar',
              title: '¿Qué significa teológicamente "el poder de sellar"?',
              paragraphs: [
                'El poder de sellar no es simplemente una ceremonia religiosa con más permanencia. Es el poder de que los actos realizados en la tierra tengan efecto vinculante en el cielo — lo que Jesucristo llamó "atar en la tierra" y "será atado en los cielos" (Mateo 16:19). Este poder fue ejercido por profetas desde Adán, fue restaurado a través de Elías en Kirtland (DyC 110:13-16), y hoy reside en el Presidente de la Iglesia, quien lo delega a los selladores del templo.',
                'Lo que hace que el sellamiento sea teológicamente único no es solo la fórmula pronunciada — es la autoridad del que la pronuncia. Un matrimonio sellado por quien tiene la plenitud de esta autoridad tiene un estatuto eterno que ningún matrimonio sin esa autoridad puede tener. Esto no condena a los que se casaron sin el sello — hay provisiones para ellos. Pero sí explica por qué la Iglesia da al templo la prioridad que le da.',
                'El sello también se puede recibir después de la muerte vicariamente — lo que significa que ninguna persona justa que murió sin acceso al templo está permanentemente excluida. La misericordia de Dios siempre opera dentro del marco de Su justicia, no fuera de él.',
              ],
            },
          ],
        },
      ],
    },

    // ─── SECCIÓN IV ─────────────────────────────────────────────────────────────
    {
      id: 's4',
      title: 'El Espíritu de Elías y el Trabajo Vicario',
      intro: {
        romanNumeral: 'IV',
        title: 'El Espíritu de Elías y el Trabajo Vicario',
        paragraphs: [
          'El templo no es solo para los vivos. La doctrina más exclusiva y más audaz de la Restauración puede ser esta: que las ordenanzas del templo pueden hacerse vicariamente — por representación — por quienes murieron sin tener acceso a ellas. Esta enseñanza hace que Elías, la historia familiar y el sellamiento de generaciones sean inseparables. Y convierte el templo en el único lugar del mundo donde los vivos y los muertos colaboran activamente en la obra de la salvación.',
        ],
      },
      topics: [
        {
          id: 't4-1',
          title: 'La Promesa de Elías — Malaquías y Kirtland',
          blocks: [
            {
              type: 'highlight_verse',
              text: 'He aquí, yo os envío al profeta Elías, antes que venga el día grande y terrible del Señor. Y él hará volver el corazón de los padres hacia los hijos, y el corazón de los hijos hacia los padres, para que yo no venga a herir la tierra con maldición.',
              reference: 'Malaquías 4:5–6',
            },
            {
              type: 'paragraph',
              text: 'Esta profecía de Malaquías, citada por el ángel Moroni a José Smith desde la primera noche (JS-H 1:38), anunciaba algo más que un evento histórico: anunciaba el principio del trabajo redentor por los muertos que caracterizaría los últimos días. El "corazón de los padres hacia los hijos" es el vínculo que hace inseparables a las generaciones — y el templo es el único lugar donde ese vínculo puede sellarse eternamente.',
            },
            {
              type: 'highlight_verse',
              text: 'He aquí, el tiempo ha llegado, en verdad ha llegado, en el cual las grandes cosas que fueron prometidas a vosotros se han de cumplir. [...] El Señor Jesucristo apareció ante José y Oliver en el Templo de Kirtland. Moisés apareció y encomendó las llaves de la congregación de Israel. [...] Elías el profeta apareció y dijo: He aquí, el tiempo ha llegado completamente. [...] Y el espíritu, el poder y el llamamiento de Elías que se han cumplido en vuestros días.',
              reference: 'Doctrina y Convenios 110:14, 11, 14, 16',
            },
            {
              type: 'doctrine_box',
              title: 'La distinción entre Elías y Elías (Elijah)',
              body: 'En DyC 110, dos figuras distintas aparecen con nombres similares. "Elías" en el versículo 12 es el personaje del Antiguo Testamento conocido como Elijah (en el original hebreo) — el profeta que fue llevado sin morir, que retiene el poder de sellar. Él restauró las llaves del sellamiento del templo. "Elías" en el versículo 11 es una figura diferente — probablemente el Elías del tiempo de Abrahán — que restauró las llaves del evangelio de Abrahán (las promesas de posteridad y el sacerdocio patriarcal). La aparición de ambos en Kirtland completó el cuadro de llaves necesarias para el trabajo del templo.',
            },
          ],
        },
        {
          id: 't4-2',
          title: 'La Salvación Es Colectiva — DyC 128:18',
          blocks: [
            {
              type: 'highlight_verse',
              text: 'Porque sin nosotros no pueden ser perfeccionados; y tampoco nosotros sin nuestros muertos podemos ser perfeccionados.',
              reference: 'Doctrina y Convenios 128:18',
            },
            {
              type: 'paragraph',
              text: 'Esta escritura contiene una de las doctrinas más profundas del evangelio restaurado: la perfección es colectiva, no individual. No puedes ser completamente exaltado dejando a tus antepasados atrás. Ellos te necesitan. Tú los necesitas a ellos. La cadena de convenios que une las generaciones — desde Adán hasta el último niño que nacerá — es el tejido del plan eterno. Cortar esa cadena por descuido o indiferencia no es solo un error personal; es una ruptura en el propósito redentor de Dios.',
            },
            {
              type: 'key_points',
              title: 'Por qué el trabajo vicario es único en la historia del cristianismo',
              points: [
                'Ofrece las ordenanzas salvadoras a los que murieron sin acceso a ellas — sin forzarlos: la aceptación es voluntaria en el mundo de los espíritus',
                'Resuelve el problema teológico más difícil del cristianismo: ¿qué pasa con los millones que nunca escucharon el evangelio?',
                'Hace que la historia familiar no sea un hobby genealógico sino una misión espiritual con consecuencias eternas',
                'Conecta a los vivos con sus muertos en un servicio que transforma tanto al servidor como al que recibe',
                'Provee la base doctrinal del período milenial: mil años de trabajo del templo para llegar a toda alma que pueda ser alcanzada',
              ],
            },
            {
              type: 'deep_dive',
              badge: 'Profundizar',
              title: '¿Es justo el trabajo vicario? Respondiendo la pregunta más difícil',
              paragraphs: [
                'La pregunta más frecuente es esta: ¿es justo que los muertos dependan de que los vivos hagan trabajo por ellos? ¿Qué pasa con los ancestros de alguien que nunca tuvo familia activa en la Iglesia? ¿Se quedan sin ordenanzas para siempre?',
                'La respuesta doctrinal tiene dos partes esenciales. Primera: el trabajo vicario no salva automáticamente a nadie. Ofrece la ordenanza — pero la persona en el mundo de los espíritus conserva su plena agencia. Puede aceptar o rechazar la ordenanza hecha en su nombre. No se impone la salvación a nadie. La ordenanza solo se vuelve efectiva si la persona la acepta.',
                'Segunda: Dios es perfectamente justo y perfectamente misericordioso a la vez. No perderá un alma por un descuido humano. El período milenial — mil años durante los cuales el templo funcionará sin interrupción con recursos y tecnología que no podemos imaginar hoy — está diseñado precisamente para alcanzar a toda alma que pueda y quiera ser alcanzada. La justicia de Dios no depende de que los humanos sean perfectamente eficientes.',
                'Mientras tanto, nuestra responsabilidad es hacer lo que podemos. El Espíritu de Elías — el impulso que lleva a las personas a buscar sus raíces, a construir árboles genealógicos, a sentir amor por personas que nunca conocieron — fue prometido para los últimos días precisamente porque Dios quiere que este trabajo se haga ahora.',
              ],
            },
            {
              type: 'reflection',
              prompt: '¿Cuándo fue la última vez que fuiste al templo para hacer trabajo vicario — no para una boda ni para recibir tus propias ordenanzas, sino para servir por nombre a un ancestro específico? ¿Tienes nombres pendientes? ¿Qué haría falta cambiar en tu vida para que el templo fuera un destino regular, no una visita ocasional?',
            },
          ],
        },
      ],
    },

    // ─── SECCIÓN V ──────────────────────────────────────────────────────────────
    {
      id: 's5',
      title: 'El Templo como Centro Espiritual de Tu Vida',
      intro: {
        romanNumeral: 'V',
        title: 'El Templo como Centro Espiritual de Tu Vida',
        paragraphs: [
          'El presidente Russell M. Nelson ha hecho del templo el eje central de su llamado profético. No como una tradición que preservar, sino como una necesidad espiritual urgente para cada miembro de la Iglesia en los tiempos que vivimos. Su mensaje es repetido, deliberado y específico: el templo no debe ser el destino de tus grandes ocasiones. Debe ser tu refugio habitual. Tus problemas más difíciles, tus decisiones más importantes, tu paz más profunda — todas se encuentran ahí.',
        ],
      },
      topics: [
        {
          id: 't5-1',
          title: 'La Llamada Profética de Nelson',
          blocks: [
            {
              type: 'leader_quote',
              quote: 'Nuestro futuro espiritual — el vuestro y el mío — depende de nuestra relación personal con el templo. El diablo sabe esto. Por eso trabaja tan activamente para mantenernos alejados del templo, para hacernos sentir que la preparación es demasiado difícil, que el viaje es demasiado lejos, que el tiempo es demasiado escaso. Él sabe lo que perdemos cuando no vamos.',
              name: 'Russell M. Nelson',
              role: '"The Temple and Your Spiritual Foundation", Conferencia General, octubre 2021 (trad.)',
            },
            {
              type: 'paragraph',
              text: 'Nelson no habla del templo como una recompensa para los santos avanzados. Habla de él como el fundamento espiritual sin el cual no hay suficiente poder para sobrevivir los últimos días. Los "tiempos sin precedentes" que él menciona requieren poder espiritual sin precedentes — y ese poder, según la revelación moderna, fluye a través de las ordenanzas y convenios del templo.',
            },
            {
              type: 'leader_quote',
              quote: 'Si quieren que su futuro sea diferente de vuestro pasado, vayan al templo. Hagan del templo la piedra angular de vuestra vida. Si la gente se burla de vosotros por ir al templo con regularidad, dejad que se burlen. Sabrán, cuando el tiempo llegue, lo que vosotros ya sabéis ahora.',
              name: 'Russell M. Nelson',
              role: '"Visita al Templo", instrucción general (trad.)',
            },
          ],
        },
        {
          id: 't5-2',
          title: 'Lo Que el Templo Regular Hace por Ti',
          blocks: [
            {
              type: 'key_points',
              title: '5 beneficios espirituales de la asistencia regular al templo',
              points: [
                'Claridad doctrinal: cada visita al templo refuerza la comprensión del plan de salvación — propósito, identidad, destino eterno — de una manera que ninguna clase ni sermón puede replicar',
                'Fortaleza contra la tentación: las vestiduras sagradas y el recuerdo activo de los convenios crean una barrera espiritual real contra el pecado y la distracción mundana',
                'Paz en medio del caos: el templo es el único lugar en el mundo moderno diseñado específicamente para apartar el ruido del mundo y crear espacio para la revelación personal',
                'Conexión con los muertos: servir vicariamente por nombre a un ancestro crea un vínculo espiritual que trasciende la muerte y refuerza el sentido de propósito familiar eterno',
                'Poder espiritual acumulado: los santos que van al templo regularmente reportan consistentemente mayor capacidad para escuchar el Espíritu, tomar decisiones correctas y resistir las pruebas que los que no van',
              ],
            },
            {
              type: 'doctrine_box',
              title: 'El templo y la revelación personal',
              body: 'El presidente Nelson ha enseñado específicamente que las respuestas a las preguntas más difíciles de la vida llegan en el templo. No porque el templo sea un oráculo, sino porque en el templo el Espíritu puede hablar sin competencia: sin teléfonos, sin redes sociales, sin el ruido constante que llena la vida moderna. El templo fue diseñado como el espacio óptimo para la comunicación divina. Quienes lo visitan con preguntas específicas y mente preparada reportan con frecuencia recibir las respuestas que buscaban.',
            },
            {
              type: 'quiz',
              id: 'q-templo-1',
              question: {
                kind: 'true_false',
                statement: 'La recomendación al templo es esencialmente un certificado de perfección moral: se otorga a quienes han alcanzado un nivel suficientemente alto de santidad personal.',
                correctAnswer: false,
                explanation: 'Falso. La recomendación al templo no es un certificado de perfección, sino una declaración de que la persona está honrando sus convenios del evangelio con sinceridad. La dignidad para el templo se basa en el arrepentimiento activo y la fidelidad a los convenios, no en la ausencia de debilidades o imperfecciones.',
              },
            },
            {
              type: 'quiz',
              id: 'q-templo-2',
              question: {
                kind: 'fill_blank',
                prompt: 'Según DyC 128:18, "sin nosotros no pueden ser perfeccionados; y tampoco nosotros sin nuestros ________ podemos ser perfeccionados."',
                options: ['líderes', 'antepasados / muertos', 'hijos', 'misioneros'],
                correctIndex: 1,
              },
            },
            {
              type: 'reflection',
              prompt: '¿Cuál es tu relación actual con el templo? ¿Es un destino regular o una visita ocasional para grandes eventos? Basándote en lo que has aprendido en esta lección, ¿qué cambiaría si hicieras del templo el centro espiritual de tu vida — no como una obligación religiosa más, sino como la fuente deliberada del poder que necesitas para los desafíos que enfrentas?',
            },
          ],
        },
      ],
    },
  ],
}
