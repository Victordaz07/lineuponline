import type { Lesson } from '@/types/doctrine'

export const ammonElPadre: Lesson = {
  id: 'ammon-el-padre',
  moduleId: 'personajes-escrituras',
  submoduleGroup: 'ammon',
  title: 'El Padre de Lamoni',
  subtitle: 'La conversión en cadena que nadie planeó',
  author: 'Fuentes: Alma 20:1-27; Alma 22:1-26',
  description:
    'La misión de Ammón entre los lamanitas produjo una consecuencia que nadie había planificado: la conversión del rey de todos los lamanitas — el padre de Lamoni. El encuentro comenzó con hostilidad y una orden de matar a su propio hijo. Terminó con un rey postrado en tierra, orando con palabras que quizás son la oración más honesta del Libro de Mormón: "Si hay un Dios..." Su conversión abrió las puertas para la misión de Aaron en toda la tierra lamanita.',
  level: 'INTERMEDIO',
  icon: '👑',
  duration: 35,
  order: 7313,
  status: 'PUBLISHED',
  studyBodyPlain: '',
  originalBodyPlain: '',
  previousLessonId: 'ammon-el-maestro',
  nextLessonId: 'ammon-y-la-restauracion',
  studySections: [
    {
      id: 's1',
      title: 'El encuentro en el camino — padre contra hijo',
      intro: {
        romanNumeral: 'I',
        title: 'Alma 20:1-15 — El Rey que Ordenó Matar a su Propio Hijo',
        paragraphs: [
          'Ammón recibió instrucción divina para ir a liberar a sus hermanos prisioneros. En el camino, encontró al padre de Lamoni — el rey de todos los lamanitas — y la confrontación que siguió cambió la historia de dos naciones.',
        ],
      },
      topics: [
        {
          id: 't1-1',
          title: 'La instrucción divina y el encuentro inesperado',
          blocks: [
            {
              type: 'highlight_verse',
              reference: 'Alma 20:2-4',
              text: 'Y aconteció que cuando Ammón hubo dicho estas palabras, el Señor habló a Ammón, diciendo: No irás a la tierra de Middoni; porque he aquí, tu hermano Aarón, y también Muloki y Cumeni, están en prisión en la tierra de Middoni; y yo te libraré a ti y a ellos de la mano de sus enemigos. Así pues, Ammón fue con Lamoni.',
            },
            {
              type: 'paragraph',
              text: 'El plan original de Ammón era ir directamente a Middoni a liberar a sus hermanos. El Señor intervino con una instrucción diferente: ir primero con Lamoni. Esto es providencial — en el camino, Lamoni y Ammón encontrarían al rey supremo de los lamanitas, el padre de Lamoni. La detención divina no fue un obstáculo al plan de Ammón sino la preparación del encuentro más importante del viaje.',
            },
            {
              type: 'highlight_verse',
              reference: 'Alma 20:8-11',
              text: 'Y he aquí, el padre de Lamoni era el rey sobre toda la tierra de los nefitas; y cuando hubo visto a Ammón, se enojó contra Lamoni, y le dijo: ¿Por qué no fuiste al festín de la Navidad, tú y los de tu casa? Y también, ¿quién es este nefita, que es uno de los hijos de un mentiroso? Y sucedió que Lamoni le relató todos los asuntos concernientes a Ammón y la bendición del Señor que había venido sobre sus pueblos por medio de él.',
            },
            {
              type: 'paragraph',
              text: 'El rey supremo lamanita tenía dos motivos de ira simultáneos: Lamoni había faltado al festín real, y además viajaba en compañía de un nefita. La hostilidad hacia los nefitas era profunda y política — "uno de los hijos de un mentiroso" hace referencia a la narrativa lamanita que presentaba a Nefi como alguien que robó el derecho de primogenitura a Laman. Siglos de historia familiar reelaborada como ideología política habían producido una enemistad visceral.',
            },
          ],
        },
        {
          id: 't1-2',
          title: 'La orden de matar a Lamoni',
          blocks: [
            {
              type: 'highlight_verse',
              reference: 'Alma 20:14-17',
              text: 'Pero Lamoni dijo al rey: Yo no negaré a este hombre, porque él ha sido fiel a mí por mis palabras. Y el rey le dijo: ¿Vas a arriesgar tu reino por la causa de este hombre? Y él le dijo: Sí. Y entonces el rey mandó que mataran a Lamoni, y también a Ammón; y empuñó su espada para matar a Lamoni su hijo.',
            },
            {
              type: 'paragraph',
              text: 'El momento en que el rey levanta su espada para matar a su propio hijo es uno de los más dramáticamente cargados del Libro de Mormón. Lamoni había declarado su lealtad a Ammón ante su padre — una decisión que el padre interpretó como traición a la autoridad real. El rey estaba dispuesto a matar a su hijo por defender un principio de autoridad política y cultural. La conversión de Lamoni había reordenado sus lealtades de manera que su propio padre no podía comprender.',
            },
            {
              type: 'paragraph',
              text: 'Ammón intervino entre el rey y Lamoni. Cuando el rey volvió su espada contra Ammón, Ammón lo bloqueó — hiriendo su brazo. El rey quedó aterrado. Lo que había visto hacer a Ammón en el aguaje de Sedequias ahora lo experimentaba en su propio cuerpo: el poder de este hombre era real y era superior al suyo. El texto dice que el rey "puso su mano contra Ammón, y quiso matarle; mas fue golpeado por el brazo de Ammón" (Alma 20:20).',
            },
            {
              type: 'dialogue',
              title: 'La confrontación entre Ammón y el rey supremo lamanita',
              lines: [
                { speaker: 'Rey supremo', side: 'left', text: '¿Qué quieres de mí? Este nefita es uno de los hijos de un mentiroso. Lamoni, ¡mata a este hombre!' },
                { speaker: 'Lamoni', side: 'right', text: 'Padre, no lo haré. Este hombre me ha protegido y ha sido fiel a mis palabras. No lo negaré.' },
                { speaker: 'Rey supremo', side: 'left', text: '¿Arriesgas tu reino por este nefita? ¡Mataré a mi propio hijo si es necesario para mantener el orden!' },
                { speaker: 'Ammón', side: 'right', text: 'No tocarás a Lamoni. Detendré tu mano.' },
                { speaker: 'Rey supremo', side: 'left', text: '¿Quién eres que puedes hacer esto? Tu poder es grande... ¿Qué quieres de mí?' },
              ],
            },
          ],
        },
      ],
    },
    {
      id: 's2',
      title: '"¿Qué quieres de mí?" — la apertura del corazón',
      intro: {
        romanNumeral: 'II',
        title: 'Alma 20:23-27 — De la Ira a la Súplica',
        paragraphs: [
          'El rey supremo, cuyo brazo había sido herido por Ammón, se encontraba ahora en una posición de completa vulnerabilidad. La pregunta que hizo fue la más honesta que había pronunciado en su vida.',
        ],
      },
      topics: [
        {
          id: 't2-1',
          title: 'La pregunta del rey: "¿Qué quieres de mí?"',
          blocks: [
            {
              type: 'highlight_verse',
              reference: 'Alma 20:23-24',
              text: 'Ahora bien, cuando vio el rey que Ammón no podía ser destruido, y que Ammón no quería tampoco destruirlo, le dijo: ¿Quién eres tú? ¿Eres tú un Gran Espíritu? ¿Eres tú ese Gran Espíritu que conoce todas las cosas? Ammón le respondió y le dijo: Soy hombre; y el hombre fue creado a la imagen de Dios. Así pues, soy el espejo en que tú ves el poder de Dios.',
            },
            {
              type: 'paragraph',
              text: 'La pregunta del rey — "¿Quién eres tú? ¿Eres el Gran Espíritu?" — es la misma que hizo Lamoni antes de su conversión. Los lamanitas interpretaban el poder de Ammón dentro de su marco religioso: solo un ser sobrenatural podía hacer lo que él hacía. Ammón corrigió esta interpretación en ambos casos con la misma precisión: "Soy hombre, y el hombre fue creado a imagen de Dios." No es Ammón el poderoso — es el Dios a cuya imagen fue creado Ammón.',
            },
            {
              type: 'highlight_verse',
              reference: 'Alma 20:26-27',
              text: 'Entonces el rey dijo: Seré tu siervo. Y Ammón le dijo: No, sino que voy a soltar a tus hijos que han sido encarcelados en la cárcel; y entonces nos iremos a la tierra de Ishmael. Y el rey consintió en que fueran librados Ammón y sus hermanos.',
            },
            {
              type: 'paragraph',
              text: 'La disposición del rey a convertirse en siervo de Ammón — el mismo rol que Ammón había elegido ante Lamoni — es una inversión poética. El rey más poderoso de los lamanitas ofrece someterse voluntariamente al hombre que acababa de herirlo. No es derrota deshonrosa sino reconocimiento genuino de un poder superior. Y Ammón, consistente con su carácter, rechazó la oferta de poder sobre el rey y pidió solo la liberación de sus hermanos.',
            },
          ],
        },
        {
          id: 't2-2',
          title: 'El corazón del rey fue preparado para Aaron',
          blocks: [
            {
              type: 'paragraph',
              text: 'El encuentro entre Ammón y el rey supremo no resultó en la conversión inmediata del rey. Pero preparó su corazón. Cuando Aarón y sus compañeros fueron liberados y llegaron al palacio del rey supremo (Alma 22), el rey los recibió con una predisposición que el encuentro con Ammón había producido. El asombro ante el poder de Dios manifestado en Ammón había abierto una grieta en la armadura cultural del rey.',
            },
            {
              type: 'key_points',
              title: 'Lo que el encuentro con Ammón preparó en el rey',
              points: [
                'El rey reconoció que existe un poder superior al suyo — el poder de Dios manifestado en un hombre',
                'Su armadura cultural de odio al nefita fue perforada por la experiencia directa',
                'La disposición a decir "¿Qué quieres de mí?" es el primer paso de todo arrepentimiento genuino',
                'El rey liberó a los hermanos de Ammón — una acción de misericordia que preparó su corazón para recibir',
                'Cuando Aaron llegó, el rey ya tenía preguntas activas, no solo suposiciones heredadas',
              ],
            },
          ],
        },
      ],
    },
    {
      id: 's3',
      title: 'Aaron enseña al rey — "Si hay un Dios"',
      intro: {
        romanNumeral: 'III',
        title: 'Alma 22:1-18 — La Oración Más Honesta del Libro de Mormón',
        paragraphs: [
          'Cuando Aarón llegó al palacio del rey supremo, encontró a un hombre preparado para escuchar. La enseñanza que siguió — y la oración que generó — son de las más extraordinarias del Libro de Mormón.',
        ],
      },
      topics: [
        {
          id: 't3-1',
          title: 'Aarón enseña al rey desde la creación',
          blocks: [
            {
              type: 'highlight_verse',
              reference: 'Alma 22:7-8',
              text: 'Y el rey dijo: ¿Qué es el Espíritu del Señor? ¿Acaso no estoy yo aquí en la presencia de él? Y así, el rey no había podido dormir por el resto de la noche a causa de las cosas de las que Ammón le había hablado. Y él dijo: Cuéntame algo acerca de esto. Y Aarón le dijo: ¿Crees tú que hay un Dios? Y el rey dijo: No sé.',
            },
            {
              type: 'paragraph',
              text: 'La respuesta del rey a la pregunta de Aarón — "¿Crees que hay un Dios?" — fue la más honesta posible: "No sé." No afirmó lo que no creía; no negó lo que tal vez era verdad. Simplemente reconoció su ignorancia. Este tipo de honestidad intelectual — decir "no sé" cuando no se sabe — es el primer requisito del verdadero aprendizaje espiritual. Los que afirman saber lo que no saben no pueden recibir la verdad que los corregiría.',
            },
            {
              type: 'paragraph',
              text: 'Aarón usó el mismo patrón pedagógico que Ammón: comenzó desde donde el rey estaba (su concepto del Gran Espíritu), avanzó hacia la creación, la Caída, y el plan de redención (Alma 22:12-14). Este patrón — que podríamos llamar la "narrativa de la salvación desde la creación hasta Cristo" — aparece en múltiples contextos del Libro de Mormón. No es una técnica misionera improvisada; es el patrón que Dios mismo usa para llevar almas a la comprensión de su obra.',
            },
          ],
        },
        {
          id: 't3-2',
          title: 'La oración del rey — "Si hay un Dios, danos a conocer"',
          blocks: [
            {
              type: 'highlight_verse',
              reference: 'Alma 22:16-18',
              text: 'Y aconteció que cuando Aarón vio que el rey respondería al evangelio, comenzó desde la creación de Adán, leyéndole las Escrituras, explicándole la caída del hombre, y el plan de redención que fue preparado de antemano, hablando de la venida de Cristo, y también de la resurrección de los muertos, y de que puede haber ninguna redención para la humanidad, sólo por la muerte y los sufrimientos de Cristo y la expiación de su sangre... Y el rey dijo: ¿Qué debo hacer para que pueda tener esta vida eterna de la que me has hablado? Aun desterraré todos mis pecados para conocerte, y para ser levantado en el último día.',
            },
            {
              type: 'highlight_verse',
              reference: 'Alma 22:18',
              text: 'Oh Dios, Aarón me ha dicho que existe un Ser llamado Dios; y si es así, y si hay un Dios, te ruego que me des a conocer, y daré mi pecado a conocer para que yo pueda ser conocido por ti, y ser levantado en el último día. Amén.',
            },
            {
              type: 'paragraph',
              text: 'La oración del rey en Alma 22:18 es extraordinaria por su honestidad condicional: "si hay un Dios, te ruego que me des a conocer." No pretende creer lo que no cree todavía. Ora desde la incertidumbre, no desde la certeza. Este tipo de oración — que reconoce la duda pero actúa a pesar de ella — es exactamente lo que el Libro de Mormón llama a hacer en Moroni 10:3-5. Dios puede trabajar con la honestidad de la duda que busca; no puede trabajar con la pretensión de la certeza que no tiene.',
            },
            {
              type: 'central_quote',
              text: 'Oh Dios, si hay un Dios, te ruego que me des a conocer, y daré mi pecado a conocer para que yo pueda ser conocido por ti.',
              attribution: 'El rey, padre de Lamoni — Alma 22:18',
            },
          ],
        },
      ],
    },
    {
      id: 's4',
      title: 'La conversión y el decreto real — un continente abierto',
      intro: {
        romanNumeral: 'IV',
        title: 'Alma 22:19-26 — La Caída del Rey y el Decreto que Abrió Todo',
        paragraphs: [
          'El rey oró, cayó como muerto, se levantó convertido. Su primera acción como creyente fue usar todo su poder político para proteger la obra misionera en toda la tierra lamanita.',
        ],
      },
      topics: [
        {
          id: 't4-1',
          title: 'La caída del rey y la conversión',
          blocks: [
            {
              type: 'highlight_verse',
              reference: 'Alma 22:18-23',
              text: 'Y aconteció que cuando Aarón hubo dicho estas palabras, el rey cayó a la tierra como si fuera un muerto... Y aconteció que después de haber sido administrado por sus siervos, se levantó y dijo: ¡Bendito sea el nombre del Señor Dios, y bendito sea el nombre de su Hijo Jesucristo y del Espíritu Santo! Y mi alma se ha regocijado en sus grandes cosas. Amén.',
            },
            {
              type: 'paragraph',
              text: 'El rey cayó como muerto al orar — el mismo fenómeno que ocurrió con Lamoni y su reina. Pero la narrativa registra un detalle adicional: la reina, al verlo caído, temió que sus siervos hubieran matado a su esposo y llamó a que los ejecutaran. Aarón intervino y extendió su mano hacia el rey — quien se levantó. La cadena de conversiones que comenzó con Ammón y Lamoni ahora llegaba al nivel más alto de poder político en la tierra lamanita.',
            },
            {
              type: 'paragraph',
              text: 'Cuando el rey se levantó, su primera acción no fue buscar poder ni defender su trono — fue alabar a Dios. "¡Bendito sea el nombre del Señor Dios!" Las primeras palabras del hombre que había querido matar a su propio hijo horas antes eran ahora palabras de adoración. La conversión genuina no es incremental — es una reordenación total de las lealtades y del vocabulario del corazón.',
            },
          ],
        },
        {
          id: 't4-2',
          title: 'El decreto real — toda la tierra abierta a los misioneros',
          blocks: [
            {
              type: 'highlight_verse',
              reference: 'Alma 22:26-27',
              text: 'Y aconteció que el rey envió una proclamación a todo su pueblo, que no debían herir a los hijos de Mosíah, ni echarlos de sus tierras, sino que debían tener libre acceso a sus casas, y también a sus templos, y a sus santuarios. Y así podían ir a toda parte entre los lamanitas a predicar la palabra de Dios.',
            },
            {
              type: 'paragraph',
              text: 'El decreto real del padre de Lamoni es el resultado político más extraordinario de toda la misión jaredita. El rey más poderoso de los lamanitas usó su autoridad política al servicio del evangelio: garantizó la seguridad de todos los misioneros nefitas en toda la tierra lamanita. Abrió las casas, los templos, y los santuarios. Creó las condiciones para la misión que produciría el pueblo de Ammón, los Anti-Nefi-Lehíes, y eventualmente los 2,060 guerreros jóvenes.',
            },
            {
              type: 'timeline',
              items: [
                { label: 'Ammón herida al rey', text: 'El encuentro en el camino — Ammón hiende el brazo del rey para proteger a Lamoni (Alma 20:20)', color: 'red' },
                { label: '¿Qué quieres de mí?', text: 'El rey se rinde ante el poder de Ammón y ofrece hacerse su siervo (Alma 20:23)', color: 'gold' },
                { label: 'Aarón enseña', text: 'Aarón llega al palacio y enseña al rey desde la creación hasta Cristo (Alma 22:1-16)', color: 'blue' },
                { label: 'La oración condicional', text: 'El rey ora: "Si hay un Dios, te ruego que me des a conocer" (Alma 22:18)', color: 'gold' },
                { label: 'La conversión del rey', text: 'Cae como muerto, se levanta y proclama: "¡Bendito sea el nombre del Señor!" (Alma 22:23)', color: 'green' },
                { label: 'El decreto real', text: 'El rey garantiza libre acceso para los misioneros en toda la tierra lamanita (Alma 22:26)', color: 'green' },
              ],
            },
            {
              type: 'note_prompts',
              prompts: [
                { id: 'p1', question: '¿Por qué el encuentro entre Ammón y el padre de Lamoni fue providencial en lugar de accidental? ¿Qué te dice eso sobre cómo Dios orquesta las misiones?' },
                { id: 'p2', question: '¿Qué hace que la oración del rey en Alma 22:18 sea extraordinaria? ¿Cuándo fue la última vez que oraste con ese nivel de honestidad sobre tus dudas?' },
                { id: 'p3', question: '¿Cómo cambió el decreto real del padre de Lamoni las posibilidades de la misión? ¿Qué "decretos" de tu vida podrías emitir para abrir más puertas al evangelio?' },
              ],
            },
            {
              type: 'quiz',
              quizType: 'true_false',
              question: 'El padre de Lamoni fue convertido inmediatamente cuando Ammón lo desarmó en el camino.',
              answer: false,
              explanation: 'El encuentro con Ammón preparó el corazón del padre de Lamoni pero no produjo su conversión inmediata. La conversión ocurrió más tarde, cuando Aarón llegó al palacio del rey y le enseñó el evangelio. El rey oró en Alma 22:18 y cayó como muerto antes de levantarse convertido.',
            },
            {
              type: 'quiz',
              quizType: 'fill_blank',
              question: 'Tras su conversión, el padre de Lamoni emitió una proclamación garantizando _____ acceso para los misioneros en toda la tierra lamanita.',
              answer: 'libre',
              explanation: 'Alma 22:26 registra que el rey envió una proclamación de que los misioneros debían tener "libre acceso a sus casas, y también a sus templos, y a sus santuarios." Este decreto real abrió toda la tierra lamanita para la obra misionera.',
            },
          ],
        },
      ],
    },
  ],
}
