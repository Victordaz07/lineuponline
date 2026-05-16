import type { Lesson } from '@/types/doctrine'

export const mormonElGeneral: Lesson = {
  id: 'mormon-el-general',
  moduleId: 'personajes-escrituras',
  title: 'Mormón — El General del Pueblo de Dios',
  subtitle: 'Nombrado comandante a los 15 años, sirvió durante 60 años en guerras cada vez más desesperadas',
  description:
    'Mormón fue nombrado comandante en jefe de los ejércitos nefitas a los 15 años de edad. Durante seis décadas lideró campañas militares defensivas mientras su pueblo se hundía moralmente. Fue un general justo al servicio de un pueblo injusto — uno de los roles de liderazgo más desgarradores en toda la escritura.',
  level: 'AVANZADO',
  icon: '⚔️',
  duration: 35,
  order: 7810,
  status: 'PUBLISHED',
  submoduleGroup: 'mormon',
  studyBodyPlain: '',
  originalBodyPlain: '',
  studySections: [
    {
      id: 's1',
      title: 'El Niño General — Llamado a los 15 Años',
      intro: {
        romanNumeral: 'I',
        title: 'Mormón 2:1-2 — El General Adolescente',
        paragraphs: [
          'No hay precedente en la escritura para lo que le ocurrió a Mormón: a los 15 años, con la nación en estado de guerra, el pueblo le pidió que los liderara en batalla. Mormón aceptó. Este capítulo de su vida define todo lo que vendrá.',
        ],
      },
      topics: [
        {
          id: 't1',
          title: 'El Llamamiento Imposible',
          blocks: [
            {
              type: 'highlight_verse',
              reference: 'Mormón 2:1-2',
              text: 'Y aconteció que en este año el pueblo nefi fue acometido por una tropa de lamanitas y gadiontones... y yo, teniendo solo quince años de edad, siendo de tamaño grande, e instruyéndome por mi padre en todas las cosas de los nefitas, fui hecho comandante jefe sobre los ejércitos de los nefitas.',
            },
            {
              type: 'paragraph',
              text: 'La brevedad del texto es desconcertante: en dos versículos, Mormón pasa de adolescente a comandante en jefe de una nación en guerra. No hay explicación larga de sus credenciales, ni relato de proceso de selección, ni duda registrada. El texto simplemente constata el hecho. Esto era normal para Mormón — fue preparado desde los diez años para este momento, cuando Ammoró le habló de las planchas sagradas y le instruyó para que las encontrara al llegar a la adultez.',
            },
            {
              type: 'doctrine_box',
              title: 'La preparación comenzó a los 10 años',
              body: 'Mormón 1:2-4 narra que cuando Mormón tenía diez años, el profeta Ammoró lo buscó deliberadamente porque lo había observado y reconoció que era "un niño sobrio" y "rápido en todo entendimiento." Le instruyó: cuando llegues a los 24 años, ve a la tierra de Antum y saca las planchas de Nefi. Dios preparó a Mormón para dos misiones simultáneas: militar y profética. El niño que recibió esa instrucción no tardó cinco años en asumir el mando del ejército.',
            },
            {
              type: 'key_points',
              title: 'Por qué eligieron a un adolescente',
              points: [
                'Tamaño físico grande — el texto lo menciona explícitamente como factor',
                'Instrucción en "todas las cosas de los nefitas" — educación integral del padre',
                'Carácter reconocible desde los 10 años — "sobrio" y "rápido en entendimiento"',
                'El pueblo estaba desesperado — los candidatos adultos no bastaban',
                'Dios lo había preparado previamente — la elección no fue solo humana',
              ],
            },
            {
              type: 'reflection',
              prompt: '¿Qué dice de Dios que prepare a alguien desde los 10 años para un llamamiento que recibirá a los 15? ¿Cómo cambia eso la forma en que ves la preparación "prematura" en tu propia vida o en la de tus hijos?',
            },
          ],
        },
      ],
    },
    {
      id: 's2',
      title: '60 Años de Guerra Defensiva',
      intro: {
        romanNumeral: 'II',
        title: 'Mormón 1–6 — Seis Décadas de Combate',
        paragraphs: [
          'Lo que Mormón narra en apenas seis capítulos representa más de 60 años de guerra continua. Victorias seguidas de traiciones morales del pueblo, derrotas seguidas de arrepentimientos superficiales. Mormón estuvo allí en cada etapa — liderando, observando, compilando.',
        ],
      },
      topics: [
        {
          id: 't2',
          title: 'El Patrón que se Repite',
          blocks: [
            {
              type: 'highlight_verse',
              reference: 'Mormón 2:10-11',
              text: 'Y se comenzaron a hacer lamentaciones sobre toda la tierra... y llegué a regocijarme en mi corazón pensando: Quizás se arrepientan... pero he aquí, esta mi alegría fue en vano, porque su lamentación era la lamentación de los condenados; porque no venían a Dios sino que maldecían a Dios y deseaban morir.',
            },
            {
              type: 'paragraph',
              text: 'Mormón describe con precisión la diferencia entre el dolor que lleva al arrepentimiento y el dolor que solo es angustia del alma sin dirección a Dios. El pueblo lamentaba, pero su lamentación era "la lamentación de los condenados" — no el reconocimiento de pecado sino la desesperación de quienes sufren las consecuencias sin cambiar. Esta distinción es crucial: el sufrimiento no es automáticamente arrepentimiento. Solo el sufrimiento dirigido a Dios produce cambio.',
            },
            {
              type: 'timeline',
              items: [
                { label: 'Año 327 d.C.', text: 'Mormón nombrado comandante a los 15 años — primera campaña exitosa', ref: 'Mormón 2:1', color: 'gold' },
                { label: 'Año 345 d.C.', text: 'Tregua de diez años — el pueblo la usa para prepararse para atacar, no para arrepentirse', ref: 'Mormón 3:1', color: 'blue' },
                { label: 'Año 360 d.C.', text: 'Mormón se niega a liderarlos cuando atacan por venganza (Mormón 3:11)', ref: 'Mormón 3:11', color: 'red' },
                { label: 'Año 385 d.C.', text: 'Batalla final de Cumorah — 230,000 nefitas muertos', ref: 'Mormón 6:10-15', color: 'red' },
              ],
            },
            {
              type: 'deep_dive',
              title: 'El general que escribía historia mientras la vivía',
              paragraphs: [
                'Lo que hace único a Mormón entre todos los generales de la antigüedad es que mientras libraba batallas, también compilaba el registro. No hay paralelo exacto en la historia: un comandante en jefe que en los momentos de paz escribía, abreviaba, y editorializaba el registro de su pueblo.',
                'Este doble rol explica por qué el Libro de Mormón tiene la voz que tiene. Mormón no escribía desde la distancia académica — escribía como alguien que estaba en el campo de batalla la semana anterior y volvería la semana siguiente. Su visión pastoral del fracaso de su pueblo es la de alguien que los amó profundamente y los vio declinar con sus propios ojos.',
              ],
            },
          ],
        },
      ],
    },
    {
      id: 's3',
      title: 'El Límite Moral — Cuando Se Negó a Liderarlos',
      intro: {
        romanNumeral: 'III',
        title: 'Mormón 3:11-14 — El General Justo que Dijo No',
        paragraphs: [
          'En el año 360 d.C. ocurre uno de los momentos más sorprendentes del Libro de Mormón: el mejor general que los nefitas tenían se niega a liderarlos en batalla. No por cobardía — sino por principio.',
        ],
      },
      topics: [
        {
          id: 't3',
          title: 'La Decisión que Costó Todo',
          blocks: [
            {
              type: 'highlight_verse',
              reference: 'Mormón 3:11, 13-14',
              text: 'Y me negué de aquí en adelante a ser comandante y líder de este pueblo, a causa de su iniquidad y abominación... Y tres veces entregué a sus ejércitos; pero aconteció que no me arrepentí de haber ido; sí, eran mis enemigos; y me regocijé en su destrucción. Y de esta manera sé que son malos y perversos; que su corazón se ha endurecido.',
            },
            {
              type: 'paragraph',
              text: 'El contexto es crucial: los lamanitas habían atacado y los nefitas los habían repelido exitosamente. En ese momento de victoria, el pueblo decidió contraatacar — no para defenderse sino para vengar las muertes anteriores y "borrar" a los lamanitas. Mormón reconoció que este era un cambio cualitativo: ya no era guerra defensiva. Era guerra de venganza. Y declaró: no voy.',
            },
            {
              type: 'doctrine_box',
              title: 'La guerra justa y sus límites — el criterio de Mormón',
              body: 'Mormón 3:14-16 revela el principio que guiaba la ética militar de Mormón: el Señor había dicho que los nefitas no debían atacar, solo defenderse. Cuando el pueblo pasó de defensa a venganza, cruzaron una línea que Mormón no podía cruzar con ellos. No era solo estrategia — era teología. Dios había definido el tipo de guerra permisible. Mormón fue el único que lo entendió y actuó en consecuencia, aunque significaba dejar de ser útil militarmente a su pueblo.',
            },
            {
              type: 'paragraph',
              text: 'Mormón pasó varios años sin liderar en batalla — un retiro de servicio que debió haberle costado enormemente a un hombre cuya identidad estaba tan vinculada al liderazgo. Sin embargo, el texto no registra amargura ni auto-lástima. Registra que continuó su obra de compilación. Cuando el pueblo finalmente estuvo en desesperación total, Mormón volvió a liderarlos — "sin esperanza" de victoria pero incapaz de abandonarlos a su suerte.',
            },
            {
              type: 'key_points',
              title: 'Lo que enseña el "no" de Mormón',
              points: [
                'El liderazgo tiene límites morales — incluso el más capaz debe saber cuándo negarse',
                'La venganza no es guerra justa — cambiar de defensa a venganza cruzó la línea',
                'El principio por encima del rol — Mormón era el mejor general pero no cualquier guerra merecía su liderazgo',
                'La negativa no fue abandono — siguió entre ellos, compilando, amando, lamentando',
                'Eventualmente regresó — no por esperanza sino por amor, sabiendo que perderían',
              ],
            },
          ],
        },
      ],
    },
    {
      id: 's4',
      title: 'La Batalla Final de Cumorah',
      intro: {
        romanNumeral: 'IV',
        title: 'Mormón 6 — El Fin de Todo',
        paragraphs: [
          'Mormón 6 es el capítulo más oscuro del Libro de Mormón. No porque sea el más violento — sino porque es el más honesto sobre la derrota total: militar, moral, civilizacional.',
        ],
      },
      topics: [
        {
          id: 't4',
          title: 'Mormón el Testigo de la Destrucción',
          blocks: [
            {
              type: 'highlight_verse',
              reference: 'Mormón 6:7-8',
              text: 'Y aconteció que el ejército de los nefitas fue empujado hacia atrás hasta el terreno de Cumorah, y yo, Mormón, puse en el cerro Cumorah todas las planchas que me habían sido entregadas por la mano del Señor, excepto aquellas pocas que entregué a mi hijo Moroni.',
            },
            {
              type: 'paragraph',
              text: 'Antes de la batalla final, Mormón tomó una decisión estratégica que trasciende lo militar: escondió las planchas. Sabía lo que iba a pasar. Sabía que los nefitas perderían. Así que en las horas o días previos a la batalla decisiva, fue al cerro Cumorah y enterró el registro completo — exceptuando las planchas que entregó a Moroni. El general que no podía salvar a su pueblo pudo, al menos, salvar su historia.',
            },
            {
              type: 'highlight_verse',
              reference: 'Mormón 6:16-18',
              text: '¡Oh hermosos hijos e hijas, padres y madres, esposas e hijos e hijas! Y he aquí, todos han caído; y lamento su pérdida. Mi alma fue llena de angustia a causa de los muertos de mi pueblo; y clamo: ¡Oh vosotros, los más hermosos! ¡Oh vosotros los que gustáis de la paz! ¡Oh vosotros que os deleitáis en el servicio de vuestro Dios! ¿Cuánto habéis sufrido por causa de vuestra iniquidad?',
            },
            {
              type: 'paragraph',
              text: 'El lamento de Mormón en Mormón 6:16-22 es uno de los textos más emotivos de toda la escritura. No es el grito del derrotado que no entiende qué pasó — es el lamento del profeta que entendió perfectamente qué pasó y por qué. Llora por los que eligieron bien ("los que gustáis de la paz... los que os deleitáis en el servicio de vuestro Dios") y murieron junto a los que eligieron mal. Llora porque pudo haber sido diferente. Llora porque él los amó.',
            },
            {
              type: 'reflection',
              prompt: '¿Qué significa ser un líder justo en un contexto injusto — cuando tu mejor esfuerzo no puede salvar a quienes sirves? ¿Cómo honró Mormón a su pueblo incluso en su destrucción? ¿Qué enseña eso sobre la fidelidad?',
            },
          ],
        },
      ],
    },
  ],
}
