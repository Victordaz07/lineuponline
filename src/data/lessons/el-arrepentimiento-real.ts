import type { Lesson } from '@/types/doctrine'

export const elArrepentimientoReal: Lesson = {
  id: 'arrepentimiento',
  moduleId: 'doctrina-fundamental',
  title: 'El Arrepentimiento Real',
  subtitle: 'El milagro más grande disponible en la mortalidad',
  author: 'Fuentes principales: El Milagro del Perdón — Spencer W. Kimball · D&C 19 · Alma 36 y 42',
  description:
    'El arrepentimiento no es penitencia, ni vergüenza prolongada, ni sufrimiento autoinfligido. Es la transformación más profunda que un ser humano puede experimentar en la mortalidad — y la única puerta por la que la Expiación de Cristo actúa en favor del pecador.',
  level: 'INTERMEDIO',
  icon: '🔄',
  duration: 90,
  order: 4,
  status: 'PUBLISHED',
  studyBodyPlain: '',
  originalBodyPlain: '',
  studySections: [
    {
      id: 's1',
      title: 'El peso que nadie describe',
      intro: {
        romanNumeral: 'I',
        title: 'Lo que el pecado le hace al alma',
        paragraphs: [
          'Antes de hablar del remedio, hay que entender el problema. No en términos morales abstractos — sino en términos de lo que el pecado hace concretamente al alma humana. Kimball empieza El Milagro del Perdón con una verdad incómoda: la mayoría de las personas no se arrepienten porque nunca entienden de qué se arrepienten.',
        ],
      },
      topics: [
        {
          id: 't1',
          title: 'El pecado no es solo una transgresión de reglas',
          blocks: [
            {
              type: 'paragraph',
              text: 'El pecado tiene tres efectos simultáneos que ocurren independientemente de si la persona los siente o no. El primero es espiritual: la distancia entre el alma y Dios aumenta. El segundo es psicológico: la capacidad de percibir lo sagrado disminuye. El tercero es relacional: los lazos con las personas que amamos se desgastan desde adentro.',
            },
            {
              type: 'highlight_verse',
              reference: 'Mormón 9:3–4',
              text: 'He aquí, ¿hubierais preferido venir ante el trono de Dios con vuestros pecados, siendo conscientes de vuestra culpa? He aquí, entonces os consumiría el conocimiento de vuestra culpa; entonces rehusaríais desear habitar con vuestro Dios.',
            },
            {
              type: 'paragraph',
              text: 'Mormón describe algo devastador: el pecado no resuelto no se queda quieto. Crece. Y en el momento del juicio — o simplemente cuando la conciencia se activa plenamente — produce exactamente lo contrario de lo que el pecador esperaba. No impunidad, sino un dolor tan agudo que el alma preferiría la inexistencia a la presencia de Dios.',
            },
            {
              type: 'doctrine_box',
              title: 'La muerte espiritual — el efecto que nadie ve',
              body: 'La muerte espiritual no es metáfora. Es el estado real de separación del Espíritu de Dios que produce insensibilidad espiritual progresiva. Un alma en muerte espiritual no siente el aguijón de la conciencia no porque esté bien — sino porque ha perdido la capacidad de sentirlo. Kimball: "El pecado insensibiliza el alma de la misma manera que el frío extremo insensibiliza los dedos: primero duele, luego no dueles — y ese es el peligro real."',
            },
            {
              type: 'leader_quote',
              quote: 'No hay paz en la transgresión. La paz es un producto de la justicia. El pecador que no se arrepiente quizá no sienta angustia inmediata — pero vive en un estado de deuda espiritual que se acumula con intereses. El día del cobro llega inevitablemente.',
              name: 'Spencer W. Kimball',
              role: 'El Milagro del Perdón, cap. 1',
            },
            {
              type: 'paragraph',
              text: 'Esta no es una descripción diseñada para aterrorizar — es una descripción diseñada para despertar. Kimball escribe El Milagro del Perdón porque creyó, hasta la médula de sus huesos, que muchas almas están perdiendo eternidades por no entender lo que les está pasando ni lo que tienen disponible para remediarlo.',
            },
          ],
        },
        {
          id: 't2',
          title: 'El error de pensar que el tiempo lo resuelve',
          blocks: [
            {
              type: 'paragraph',
              text: 'Uno de los errores más comunes y más costosos: creer que el tiempo cura el pecado. Que con los años, la culpa se diluye, el daño sana, y el asunto queda resuelto. La doctrina del evangelio es clara en el punto contrario: el tiempo sin arrepentimiento no limpia — acumula.',
            },
            {
              type: 'highlight_verse',
              reference: 'Doctrina y Convenios 82:7',
              text: 'Y ahora bien, en verdad os digo, yo, el Señor, no perdonaré a quien peque contra esta luz y este conocimiento, porque a él no le es posible arrepentirse; y aquel que abandone el pecado no será tentado más de lo que pueda resistir; mas a quien peque, sus pecados anteriores le serán retornados, saith el Señor tu Dios.',
            },
            {
              type: 'paragraph',
              text: 'El principio de DyC 82:7 es severo pero misericordioso en su honestidad: cuando alguien que había abandonado el pecado regresa a él, los pecados anteriores vuelven. El perdón parcial exige fidelidad continua. El tiempo sin cambio no produce ningún efecto espiritual — solo produce distancia mayor de la gracia que podría haber actuado.',
            },
            {
              type: 'reflection',
              prompt: '¿Hay algo en tu vida que llevas esperando que "se arregle solo" con el tiempo? ¿Cuánto tiempo llevas esperando? ¿Qué costaría arreglarlo activamente?',
            },
          ],
        },
      ],
    },
    {
      id: 's2',
      title: 'La tristeza que salva',
      intro: {
        romanNumeral: 'II',
        title: 'No toda tristeza es arrepentimiento',
        paragraphs: [
          'El Apóstol Pablo hace la distinción más importante de toda la doctrina del arrepentimiento en dos frases. Kimball la convierte en el eje central de El Milagro del Perdón: hay una tristeza que mata, y hay una tristeza que salva. La diferencia entre las dos no es la intensidad — es el objeto.',
        ],
      },
      topics: [
        {
          id: 't3',
          title: '2 Corintios 7:10 — la línea que divide',
          blocks: [
            {
              type: 'highlight_verse',
              reference: '2 Corintios 7:10',
              text: 'Porque la tristeza que es según Dios produce arrepentimiento para salvación, de que no hay que arrepentirse; pero la tristeza del mundo produce muerte.',
            },
            {
              type: 'compare_grid',
              title: 'Tristeza del mundo vs. Tristeza según Dios',
              left: {
                title: 'Tristeza del mundo',
                items: [
                  'Me duele porque me atraparon',
                  'Me duele porque hay consecuencias para mí',
                  'Me arrepiento de haber sido descubierto',
                  'Quiero que el dolor pare — no que el pecado pare',
                  'Prometo no volver a hacerlo... mientras duela',
                  'Produce muerte — no cambio',
                ],
              },
              right: {
                title: 'Tristeza según Dios',
                items: [
                  'Me duele porque lastimé a Dios y a personas que amo',
                  'Me duele porque entiendo lo que es el pecado',
                  'Me arrepiento del pecado mismo, no de sus consecuencias',
                  'Quiero que el pecado pare — aunque nadie lo sepa',
                  'El cambio ocurre independientemente de si el dolor para',
                  'Produce arrepentimiento para salvación',
                ],
              },
            },
            {
              type: 'paragraph',
              text: 'La tristeza del mundo es el estado emocional de alguien que está incómodo con las consecuencias de su pecado. La tristeza según Dios es el estado espiritual de alguien que ha visto el pecado tal como es — una ofensa contra el amor de Dios, un daño a su propia alma, un alejamiento del destino para el que fue creado.',
            },
            {
              type: 'leader_quote',
              quote: 'El arrepentimiento genuino incluye una abominación del pecado — una profunda repugnancia hacia lo que se hizo, no solo hacia las consecuencias. Una persona que lamenta haber sido atrapada pero no lamenta el acto mismo, no se ha arrepentido. Ha experimentado incomodidad, no arrepentimiento.',
              name: 'Spencer W. Kimball',
              role: 'El Milagro del Perdón, cap. 7',
            },
          ],
        },
        {
          id: 't4',
          title: 'Alma en Getsemaní de su propia alma — Alma 36',
          blocks: [
            {
              type: 'paragraph',
              text: 'El relato más poderoso de tristeza según Dios en las Escrituras no es el de un profeta anciano — es el de un joven que había dedicado años a destruir la Iglesia de Dios, y que en un momento de visión espiritual súbita entendió exactamente lo que había hecho. Alma el Joven vivió en tres días lo que muchos nunca viven en toda una vida de "arrepentimiento".',
            },
            {
              type: 'highlight_verse',
              reference: 'Alma 36:12–14',
              text: 'Mas yo era atormentado por los tormentos del infierno; vi que había pecado y transgredido las leyes de Dios, y mis pecados me atormentaban grandemente. Y ahora bien, cuando mi mente captó este pensamiento, no pude seguir abriendo mis labios, tan grande era mi asombro; y más aún, tanta era mi angustia por los tormentos de mis pecados que yo pensaba en mi corazón que ojalá pudiera llegar a ser inexistente.',
            },
            {
              type: 'paragraph',
              text: 'Alma deseó dejar de existir. No porque Dios lo estuviera castigando desde afuera — sino porque la visión clara del pecado era insoportable para un alma que, en ese mismo momento, comenzaba a percibir la santidad de lo que había violado. Ese es el efecto de la tristeza según Dios llevada a su punto más agudo.',
            },
            {
              type: 'highlight_verse',
              reference: 'Alma 36:17–19',
              text: 'Y aconteció que mientras era así atormentado por los tormentos del infierno, de repente recordé también haber oído a mi padre profetizar al pueblo acerca de la venida de un Jesucristo, un Hijo de Dios, para expiar los pecados del mundo. Y al recordar esto, ya no pude acordarme más de mis dolores... y no pude acordarme de ningún dolor más.',
            },
            {
              type: 'paragraph',
              text: 'El momento en que Alma volteó su pensamiento al Cristo fue el momento en que la tristeza que salva hizo su obra. No desapareció porque él cambió de tema — sino porque la tristeza según Dios cumplió su propósito: preparar el corazón para recibir la misericordia de Cristo. La tristeza según Dios no es el destino — es el umbral.',
            },
          ],
        },
      ],
    },
    {
      id: 's3',
      title: 'El reconocimiento — ver el pecado tal como es',
      intro: {
        romanNumeral: 'III',
        title: 'El primer paso que la mayoría omite',
        paragraphs: [
          'Kimball dedica casi un tercio de El Milagro del Perdón a un problema que nadie espera: la mayoría de las personas que creen que se han arrepentido, no han empezado siquiera el proceso. No porque sean malas, sino porque nunca han visto su pecado con claridad. Han visto incomodidad. Han visto consecuencias. Pero no han visto el pecado.',
        ],
      },
      topics: [
        {
          id: 't5',
          title: 'Las racionalizaciones que bloquean el arrepentimiento',
          blocks: [
            {
              type: 'paragraph',
              text: 'El ser humano es el animal más creativo del universo cuando se trata de justificar su comportamiento. Kimball cataloga en El Milagro del Perdón las racionalizaciones más comunes con precisión quirúrgica, porque conocía a fondo el alma humana después de décadas entrevistando personas en proceso de arrepentimiento.',
            },
            {
              type: 'key_points',
              title: 'Las racionalizaciones más comunes — Kimball',
              points: [
                '"Todo el mundo lo hace" — la normalización estadística del pecado no lo convierte en correcto',
                '"No lastimé a nadie" — el pecado que parece privado siempre afecta al espíritu, a la familia, a la capacidad de servir',
                '"No fue tan grave" — la comparación con pecados peores no es el estándar divino',
                '"Ya pasé tiempo sin hacerlo" — la abstinencia temporal no es arrepentimiento',
                '"Ya me lo confesé a Dios" — confesar sin cambiar no es arrepentimiento',
                '"Soy buena persona en todo lo demás" — la bondad en un área no compensa la transgresión en otra',
                '"Fue el ambiente / mi crianza / mis circunstancias" — la agencia moral no puede delegarse',
              ],
            },
            {
              type: 'leader_quote',
              quote: 'Mientras el hombre busca razones para explicar su comportamiento en lugar de aceptar la responsabilidad de él, el arrepentimiento no ha comenzado. El primer acto del arrepentimiento genuino es mirar sin parpadear lo que se hizo, llamarlo por su nombre correcto, y asumir plena responsabilidad.',
              name: 'Spencer W. Kimball',
              role: 'El Milagro del Perdón, cap. 5',
            },
            {
              type: 'deep_dive',
              badge: 'DOCTRINA',
              title: 'El arrepentimiento parcial — el peligro más subestimado',
              paragraphs: [
                'Kimball habla extensamente de lo que él llama el "arrepentimiento parcial" — el estado en que una persona ha reducido su pecado, ha modificado sus hábitos, ha sentido culpa genuina, pero no ha completado el proceso. Es el estado más peligroso de todos porque produce una falsa sensación de paz.',
                'La persona que se ha "arrepentido parcialmente" cree que está bien. Ha hecho suficiente. Ha sufrido suficiente. Pero en la terminología del evangelio, la misericordia no puede actuar de forma completa sobre un arrepentimiento incompleto.',
                'Kimball compara esto con una cirugía a medias: "Si el cirujano extirpa el 80% del tumor, el paciente puede sentirse mejor por un tiempo. Pero el 20% que quedó sigue creciendo." El arrepentimiento incompleto no es mejor que la ausencia de arrepentimiento — en ciertos aspectos es peor, porque anestesia la urgencia de terminar el proceso.',
              ],
            },
          ],
        },
        {
          id: 't6',
          title: 'Ver el pecado con los ojos del Espíritu',
          blocks: [
            {
              type: 'paragraph',
              text: 'El reconocimiento genuino del pecado no viene del intelecto — viene del Espíritu Santo. Es el Espíritu quien muestra al alma la brecha entre lo que somos y lo que fuimos creados para ser. Sin su influencia, el reconocimiento es superficial. Con ella, es lo que Alma experimentó en tres días.',
            },
            {
              type: 'highlight_verse',
              reference: 'Moroni 8:26',
              text: 'Y la remisión de pecados produce mansedumbre y humildad; y la mansedumbre y humildad traen consigo la visitación del Espíritu Santo, el cual es el Consolador lleno de esperanza y amor perfecto.',
            },
            {
              type: 'paragraph',
              text: 'El Espíritu no solo consuela al penitente — también le muestra con exactitud qué necesita cambiar. Kimball enseñó que la oración sincera pidiendo al Señor que muestre nuestros pecados tal como son es una de las oraciones más valientes — y más necesarias — que una persona puede hacer.',
            },
            {
              type: 'reflection',
              prompt: '¿Has pedido alguna vez al Señor que te muestre tus pecados tal como él los ve? ¿Tienes el valor de hacerlo ahora? No para hundirte — sino para que puedas ver exactamente qué necesita ser limpiado.',
            },
          ],
        },
      ],
    },
    {
      id: 's4',
      title: 'La confesión — decirlo todo',
      intro: {
        romanNumeral: 'IV',
        title: 'Por qué verbalizarlo importa',
        paragraphs: [
          'Kimball dedica un capítulo entero de El Milagro del Perdón a la confesión — porque en su experiencia pastoral, era el paso que más personas evitaban, y el que más frecuentemente bloqueaba la plenitud del arrepentimiento. La vergüenza que producía confesar era precisamente la señal de que era necesario hacerlo.',
        ],
      },
      topics: [
        {
          id: 't7',
          title: 'Confesión a Dios — siempre, sin excepción',
          blocks: [
            {
              type: 'paragraph',
              text: 'La confesión a Dios es el fundamento de todo arrepentimiento. No como trámite, sino como acto de honestidad total ante el único que ya sabe todo — incluyendo lo que la persona está a punto de decir. El valor de la confesión a Dios no está en informarlo, sino en que el pecador se abre completamente.',
            },
            {
              type: 'highlight_verse',
              reference: 'Doctrina y Convenios 58:42–43',
              text: 'He aquí, el que se ha arrepentido de sus pecados es perdonado; y yo, el Señor, no los recuerdo más. Por esto sabréis si un hombre se arrepiente de sus pecados: he aquí, los confesará y los abandonará.',
            },
            {
              type: 'paragraph',
              text: 'El Señor une inseparablemente dos actos: confesar y abandonar. No uno sin el otro. La confesión sin abandono es actuación. El abandono sin confesión puede ser mejora de conducta, pero no el arrepentimiento pleno que activa la Expiación. Los dos juntos constituyen el corazón del proceso.',
            },
          ],
        },
        {
          id: 't8',
          title: 'Confesión al obispo — cuándo, por qué y cómo',
          blocks: [
            {
              type: 'paragraph',
              text: 'No todos los pecados requieren confesión formal al obispo. Pero los pecados serios — los que el Señor llama transgresiones graves — sí requieren hacerlo. El obispo no es juez moral en el sentido punitivo. Es el médico espiritual que tiene autoridad y guía para administrar el proceso de sanación.',
            },
            {
              type: 'key_points',
              title: 'Pecados que requieren confesión al obispo',
              points: [
                'Violación de la ley de castidad (fornicación, adulterio, pornografía grave)',
                'Transgresiones del templo o convenios del sacerdocio',
                'Apostasía activa o enseñanza de doctrina falsa',
                'Crímenes civiles graves (fraude, violencia, abuso)',
                'Participación indígna en la Santa Cena de manera prolongada',
                'Cualquier pecado que pese tan fuerte que impida la paz espiritual',
              ],
            },
            {
              type: 'leader_quote',
              quote: 'Muchos que cargan con el peso de pecados graves se niegan a confesar al obispo porque temen el juicio de un hombre. Pero el obispo no es su juez — es su médico. Y ningún paciente sano rehúsa ir al médico cuando está enfermo por miedo a que el médico sepa que está enfermo.',
              name: 'Spencer W. Kimball',
              role: 'El Milagro del Perdón, cap. 13',
            },
            {
              type: 'deep_dive',
              badge: 'DOCTRINA',
              title: '¿Por qué el obispo tiene autoridad en este proceso?',
              paragraphs: [
                'El obispo es llamado como juez en Israel — una función doctrinal específica, no solo administrativa. Cuando el Señor reveló el principio de confesión al obispo (D&C 42:88-89), lo hizo porque el proceso de arrepentimiento de ciertos pecados requiere una figura con autoridad del sacerdocio para administrar el juicio misericordioso de Dios.',
                'El obispo puede, bajo guía del Espíritu, determinar si la persona necesita un proceso de membresía formal, restricciones temporales en ciertas responsabilidades, o simplemente orientación espiritual. En todos los casos, su función es facilitar el acceso a la Expiación — no castigar.',
                'Kimball lo expresa así: "El obispo que entiende su llamamiento no ve al pecador como un transgresor que merece castigo, sino como un enfermo que merece sanación. Su función más importante no es determinar la disciplina — es abrirle las puertas del arrepentimiento completo."',
              ],
            },
            {
              type: 'paragraph',
              text: 'La vergüenza de la confesión es parte del proceso, no un obstáculo a él. Kimball enseña que la humildad que produce confesar ante otro ser humano — un representante de Dios con autoridad — es parte del "precio del billete" hacia la paz espiritual completa. Nadie salió de una confesión honesta sintiéndose peor de manera permanente.',
            },
          ],
        },
      ],
    },
    {
      id: 's5',
      title: 'El abandono total',
      intro: {
        romanNumeral: 'V',
        title: 'La línea que no puede cruzarse a medias',
        paragraphs: [
          'Kimball es implacable en este punto. No porque sea severo por naturaleza — sino porque la lógica del arrepentimiento hace que el abandono parcial sea una contradicción en términos. No puedes arrepentirte de algo que sigues haciendo.',
        ],
      },
      topics: [
        {
          id: 't9',
          title: 'Arrepentirse es abandonar, no reducir',
          blocks: [
            {
              type: 'paragraph',
              text: 'La cultura popular del "arrepentimiento" acepta la reducción del pecado como suficiente. Pecar menos. Pecar con menos frecuencia. Pecar con menos intensidad. El evangelio restaurado establece un estándar diferente: el abandono. No porque Dios sea inflexible, sino porque el abandono parcial no activa plenamente la Expiación.',
            },
            {
              type: 'highlight_verse',
              reference: 'Doctrina y Convenios 58:42–43',
              text: 'He aquí, el que se ha arrepentido de sus pecados es perdonado; y yo, el Señor, no los recuerdo más. Por esto sabréis si un hombre se arrepiente de sus pecados: he aquí, los confesará y los abandonará.',
            },
            {
              type: 'leader_quote',
              quote: 'El arrepentimiento requiere una rendición total, incondicional, al programa del Señor. No es suficiente cortar el árbol del mal en la superficie — hay que sacar la raíz. El hombre que reduce su pecado pero lo retiene ha hecho un gran esfuerzo, pero no se ha arrepentido.',
              name: 'Spencer W. Kimball',
              role: 'El Milagro del Perdón, cap. 8',
            },
            {
              type: 'paragraph',
              text: 'Kimball usa la imagen del árbol cortado a nivel del suelo: parece que no está. Pero la raíz sigue viva bajo tierra, y en la primera temporada favorable volverá a crecer. El arrepentimiento que no llega a la raíz — a los patrones de pensamiento, a los ambientes que facilitan el pecado, a las relaciones que lo alimentan — es un árbol cortado, no arrancado.',
            },
            {
              type: 'key_points',
              title: 'Qué implica el abandono total',
              points: [
                'Cese completo del comportamiento pecaminoso — no reducción gradual',
                'Eliminación de las circunstancias que facilitan el pecado (personas, lugares, dispositivos, hábitos)',
                'Cambio de los patrones de pensamiento que preceden al acto',
                'Construcción activa de nuevos hábitos y relaciones que fortalezcan la rectitud',
                'Disposición a pasar incomodidad real por el cambio — no solo incomodidad emocional',
              ],
            },
          ],
        },
        {
          id: 't10',
          title: 'Las recaídas — ¿significan que fallé?',
          blocks: [
            {
              type: 'paragraph',
              text: 'Una de las preguntas más dolorosas y más comunes en el proceso de arrepentimiento: ¿qué significa una recaída? ¿Destruye todo el progreso anterior? ¿Significa que el arrepentimiento no fue real? Kimball responde esta pregunta con precisión y con misericordia.',
            },
            {
              type: 'paragraph',
              text: 'Hay una diferencia crucial entre tropezar y regresar. Tropezar es un fallo en el proceso de cambio que el arrepentido genuino toma como señal de que necesita más ayuda, más estructura, más apoyo. Regresar es volver conscientemente al pecado con la intención de continuar en él. El tropiezo no invalida el arrepentimiento — exige profundizarlo.',
            },
            {
              type: 'highlight_verse',
              reference: 'Moroni 6:8',
              text: 'Pero tan frecuentemente como se arrepentían y buscaban el perdón, con verdadero arrepentimiento, les era concedido el perdón.',
            },
            {
              type: 'doctrine_box',
              title: 'La misericordia de Dios con el que sigue intentándolo',
              body: 'Moroni 6:8 establece un principio que Kimball llama "la gracia del proceso": Dios no requiere perfección instantánea — requiere arrepentimiento genuino cada vez que se necesita. La persona que tropieza, regresa a Dios, trabaja más duro, y eventualmente triunfa, está en el camino correcto. La persona que usa las recaídas como excusa para abandonar el proceso es quien realmente está en peligro.',
            },
            {
              type: 'leader_quote',
              quote: 'Dios es infinitamente paciente con el que genuinamente intenta cambiar. No es paciente con el que usa su paciencia como licencia para no cambiar. La diferencia entre los dos está en la dirección del movimiento, no en la velocidad.',
              name: 'Spencer W. Kimball',
              role: 'El Milagro del Perdón, cap. 9',
            },
          ],
        },
      ],
    },
    {
      id: 's6',
      title: 'La restitución — reparar lo reparable',
      intro: {
        romanNumeral: 'VI',
        title: 'El paso que nadie quiere dar',
        paragraphs: [
          'La restitución es el paso del arrepentimiento que requiere más valentía — y que Kimball insiste en llamar indispensable. No porque la restitución pague el pecado, sino porque sin ella el arrepentimiento sigue siendo incompleto. Es el acto externo que evidencia el cambio interno.',
        ],
      },
      topics: [
        {
          id: 't11',
          title: 'Por qué la restitución es parte del arrepentimiento',
          blocks: [
            {
              type: 'paragraph',
              text: 'Kimball enseña que el arrepentimiento que no incluye un esfuerzo genuino por reparar el daño causado es arrepentimiento a medias. El penitente que está dispuesto a confesar y abandonar, pero no a restaurar lo que tomó, reparar la reputación que dañó, o pedir perdón a quien lastimó, no ha completado el proceso.',
            },
            {
              type: 'steps',
              title: 'Principios de la restitución según Kimball',
              steps: [
                'Devolver lo que fue tomado — bienes, dinero, objetos robados o defraudados',
                'Reparar la reputación dañada — decir la verdad donde antes se mintió, limpiar la fama del difamado',
                'Pedir perdón directamente a quien fue lastimado — cuando hacerlo no causaría más daño',
                'En casos de daño irreparable: hacer todo lo posible como señal de intención genuina',
                'Confesión pública cuando el pecado fue público — no como castigo, sino como restauración de la verdad',
              ],
            },
            {
              type: 'leader_quote',
              quote: 'No se puede verdaderamente arrepentir quien no está dispuesto a restaurar, en la medida de lo posible, la situación al estado en que estaría si no hubiera habido transgresión. Esta es la prueba de la sinceridad del arrepentimiento.',
              name: 'Spencer W. Kimball',
              role: 'El Milagro del Perdón, cap. 11',
            },
          ],
        },
        {
          id: 't12',
          title: 'Cuando la restitución completa es imposible',
          blocks: [
            {
              type: 'paragraph',
              text: 'Kimball es también honesto sobre los límites de la restitución. Hay daños que no pueden deshacerse completamente. Una vida tomada no puede devolverse. Una virginidad perdida no puede restaurarse. Una reputación destruida puede no recuperarse del todo. En estos casos, ¿qué?',
            },
            {
              type: 'paragraph',
              text: 'La respuesta de Kimball es clara: la restitución imposible de completar no exime de intentarla. El esfuerzo genuino de reparar lo que se puede, acompañado de humildad real ante lo que no se puede reparar, es lo que Dios requiere y acepta. La Expiación cubre lo que la restitución no alcanza — pero solo cuando la restitución se ha intentado de verdad.',
            },
            {
              type: 'doctrine_box',
              title: 'La Expiación cubre la brecha',
              body: 'Cristo no solo paga el precio del pecado con respecto a Dios — también cubre la deuda que el pecador no puede pagar completamente con respecto a las personas que lastimó. Esto no significa que las víctimas no sufran consecuencias reales. Significa que Dios, en su justicia perfecta, tiene recursos para hacer completa la justicia que el penitente no pudo completar por sí solo. La restitución incompleta no bloquea el perdón — la restitución no intentada sí.',
            },
            {
              type: 'reflection',
              prompt: '¿Hay alguien a quien le debes una disculpa genuina? ¿Algo que devolver? ¿Una verdad que decir donde dijiste una mentira? ¿Qué te impide dar ese paso esta semana?',
            },
          ],
        },
      ],
    },
    {
      id: 's7',
      title: 'La Expiación actúa — el mecanismo del perdón',
      intro: {
        romanNumeral: 'VII',
        title: 'Cómo Cristo limpia exactamente lo que tú ensuciaste',
        paragraphs: [
          'Llegar a este punto del proceso es llegar al corazón de todo el evangelio. El arrepentimiento no es el mecanismo del perdón — es la condición que permite que el mecanismo real actúe: la Expiación de Jesucristo.',
        ],
      },
      topics: [
        {
          id: 't13',
          title: 'D&C 19 — Cristo describe lo que hizo y por qué',
          blocks: [
            {
              type: 'paragraph',
              text: 'Ningún texto en los anales de la teología cristiana describe la Expiación desde la perspectiva del que la sufrió con tanta precisión como D&C 19. El Salvador no lo describe para producir culpa — lo describe para que el pecador entienda exactamente a qué precio vino disponible su perdón.',
            },
            {
              type: 'highlight_verse',
              reference: 'Doctrina y Convenios 19:15–18',
              text: 'Por tanto, te mando que te arrepientas... Pues he aquí, yo, Dios, sufrí estas cosas por todos, para que ellos no tuviesen que sufrir si se arrepintiesen; Pero si no se arrepintiesen, necesariamente habrán de sufrir aun como yo; El cual sufrimiento me causó, a mí mismo, el más grande de todos, a temblar a causa del dolor, y a sangrar de cada poro, y a sufrir tanto en el cuerpo como en el espíritu, y a desear no beber la copa amarga, y a retroceder — no obstante, me glorío en tu Padre, y no retiré la copa.',
            },
            {
              type: 'paragraph',
              text: 'La lógica es absoluta y binaria: Cristo sufrió "para que ellos NO tuviesen que sufrir SI se arrepintiesen". El arrepentimiento activa retroactivamente el pago que Cristo realizó antes de que el pecado ocurriera. Sin arrepentimiento, el pago no se aplica — y el pecador sufre lo que Cristo ya sufrió, sin ningún beneficio de haberlo sufrido.',
            },
            {
              type: 'doctrine_box',
              title: '¿Por qué Cristo tuvo que sufrir exactamente así?',
              body: 'La justicia divina requiere que cada pecado sea pagado — ya sea por el pecador o por un sustituto calificado. Cristo, siendo el único ser que nunca pecó, fue el único que podía ofrecer un sufrimiento que no era el pago de sus propios pecados, sino un pago voluntario por los de otros. El principio de sustitución requería un sustituto sin deuda propia. Solo Cristo calificaba.',
            },
            {
              type: 'highlight_verse',
              reference: 'Isaías 1:18',
              text: 'Venid ahora, y razonemos, dice Jehová: si vuestros pecados fueren como la grana, como la nieve serán emblanquecidos; si fueren rojos como el carmesí, vendrán a ser como blanca lana.',
            },
            {
              type: 'paragraph',
              text: 'La promesa de Isaías no tiene asteriscos. No dice "si tus pecados no son demasiado graves". No dice "si llevas suficiente tiempo siendo bueno". Dice: venid. Razonemos. El crimson — el rojo más permanente, el tinte que los antiguos usaban porque no desteñía — puede volverse blanco como nieve. Esa es la promesa de la Expiación al penitente genuino.',
            },
          ],
        },
        {
          id: 't14',
          title: 'El cambio poderoso — Alma 5 y Mosíah 4',
          blocks: [
            {
              type: 'paragraph',
              text: 'El arrepentimiento genuino produce un cambio que Alma describe en lenguaje que no deja lugar a interpretaciones suaves. No es que la persona se mejora. Es que se convierte en una persona diferente. La misericordia no solo limpia — transforma.',
            },
            {
              type: 'highlight_verse',
              reference: 'Alma 5:12–14',
              text: 'Y de acuerdo con su fe se obró en ellos un cambio poderoso; y según lo creo, cambiaron de corazón. Y ahora bien, yo os pregunto, hermanos míos de la iglesia: ¿habéis experimentado espiritualmente este cambio de corazón? ¿Podéis mirar hacia arriba a Dios en ese día con un corazón puro y manos limpias? ¿Ha nacido de nuevo la imagen de Dios en vuestro semblante?',
            },
            {
              type: 'paragraph',
              text: 'Alma hace estas preguntas no retóricamente — las hace porque el cambio poderoso es verificable. La persona que lo ha experimentado lo sabe. No porque tenga un documento que lo certifique, sino porque hay una diferencia cualitativa en cómo percibe lo sagrado, cómo ama a las personas, cómo reacciona ante la tentación.',
            },
            {
              type: 'highlight_verse',
              reference: 'Mosíah 4:2–3',
              text: 'Y habían caído a tierra, pues el temor del Señor había descendido sobre ellos. Y habían visto la gran maldad de ellos; se humillaron, y clamaron en voz alta, pidiéndole al Señor que tuviera misericordia de ellos. Y el Espíritu del Señor descendió sobre ellos, y fueron llenos de gozo, habiendo recibido la remisión de sus pecados.',
            },
            {
              type: 'paragraph',
              text: 'El pueblo de Benjamín vivió el proceso completo en un solo discurso: reconocimiento (vieron su maldad), tristeza según Dios (se humillaron), petición de misericordia (clamaron), y el resultado — el Espíritu descendió y fueron llenos de gozo. La remisión de pecados no es un juicio legal abstracto. Es una experiencia espiritual que el Espíritu Santo certifica en el alma del penitente.',
            },
          ],
        },
      ],
    },
    {
      id: 's8',
      title: 'El gozo del perdón',
      intro: {
        romanNumeral: 'VIII',
        title: 'De la agonía al gozo excelente',
        paragraphs: [
          'Alma lo llamó "gozo tan excelente como dolorosa había sido mi angustia". Enos lo describió como una voz del cielo que dijo: tus pecados son perdonados. El pueblo de Benjamín fue lleno de gozo. El arrepentimiento real no termina en vergüenza — termina en el gozo más puro que existe en la mortalidad.',
        ],
      },
      topics: [
        {
          id: 't15',
          title: 'Alma 36 — de la agonía al gozo excelente',
          blocks: [
            {
              type: 'highlight_verse',
              reference: 'Alma 36:19–21',
              text: 'Y aconteció que mientras era así atormentado... de repente recordé haber oído a mi padre profetizar al pueblo acerca de la venida de un Jesucristo... Y mi alma anheló estar con Dios. Oh, me dije, ¡si pudiera ir adonde está mi alma para tener paz! Pero he aquí, mis miembros recibieron su fortaleza de nuevo, y yo me incorporé... y yo pude ver con mis ojos; y comencé a regocijarme con tanto gozo, que tan dolorosa había sido mi angustia.',
            },
            {
              type: 'paragraph',
              text: 'La proporción es exacta y deliberada: el gozo fue tan grande como había sido el dolor. No levemente mayor. No moderadamente consolador. Igual de intenso. Kimball enseña que esta proporción es una ley espiritual: la profundidad del arrepentimiento genuino determina la altura del gozo que sigue. El que nunca sintió la agonía del pecado en toda su gravedad, nunca siente el gozo del perdón en toda su plenitud.',
            },
            {
              type: 'leader_quote',
              quote: 'El milagro del perdón es real. Yo lo he visto obrar en cientos de vidas. He visto a hombres y mujeres que cargaban el peso de años de transgresión, quienes finalmente pasaron por el proceso completo del arrepentimiento, levantarse de sus rodillas con un rostro que solo puede describirse con una palabra: transformados. El gozo que producía en ellos no era alivio. Era gozo.',
              name: 'Spencer W. Kimball',
              role: 'El Milagro del Perdón, Introducción',
            },
          ],
        },
        {
          id: 't16',
          title: 'Enos — la voz que dice: eres perdonado',
          blocks: [
            {
              type: 'paragraph',
              text: 'El relato de Enos es uno de los más cortos y más poderosos de todo el Libro de Mormón. En nueve versículos captura el arco completo del arrepentimiento genuino: desde el hambre espiritual hasta la certificación divina del perdón.',
            },
            {
              type: 'highlight_verse',
              reference: 'Enos 1:2–8',
              text: 'Y he aquí, fui a cazar bestias en los bosques; y las palabras que a menudo había oído a mi padre concernientes a la vida eterna y el gozo de los santos se me grabaron profundamente en el corazón. Y mi alma tenía hambre; y me arrodillé ante mi Hacedor, y le clamé con fervor... Y hubo una voz que llegó a mi mente, diciendo: Enos, tus pecados te son perdonados, y serás bendito.',
            },
            {
              type: 'paragraph',
              text: 'Enos no había caído en transgresiones dramáticas. Era un hombre ordinario con un hambre espiritual genuina. Y Dios respondió a esa hambre de la manera más directa: con una voz a su mente que decía su nombre y le daba la noticia más grande de su vida. El perdón tiene un sonido. No siempre es audible — pero el Espíritu Santo lo certifica de maneras que el penitente reconoce.',
            },
            {
              type: 'dialogue',
              title: 'La pregunta de Enos y la respuesta del Señor',
              lines: [
                {
                  speaker: 'Enos',
                  side: 'left',
                  text: '¿Señor, cómo se hace esto? ¿Cómo me perdonas a mí?',
                },
                {
                  speaker: 'El Señor',
                  side: 'right',
                  text: 'Por tu fe en Cristo, a quien nunca has visto. Y porque tu fe te ha traído aquí, de rodillas, con hambre genuina — tus pecados te son perdonados.',
                },
              ],
            },
            {
              type: 'highlight_verse',
              reference: 'Enos 1:8',
              text: 'Y yo dije: Señor, ¿cómo se hace esto? Y él dijo: Por tu fe en Cristo, a quien nunca has visto ni oído. Y muchos años pasarán antes de que él se manifieste en la carne; por tanto, ve, tu fe te ha hecho íntegro.',
            },
          ],
        },
        {
          id: 't17',
          title: 'D&C 58:42 — Dios no los recuerda más',
          blocks: [
            {
              type: 'paragraph',
              text: 'La promesa final del arrepentimiento genuino es la más extraordinaria de toda la teología cristiana. No que los pecados sean minimizados. No que sean archivados en un expediente divino sellado. Sino que Dios mismo — el omnisciente — elige no recordarlos.',
            },
            {
              type: 'highlight_verse',
              reference: 'Doctrina y Convenios 58:42',
              text: 'He aquí, el que se ha arrepentido de sus pecados es perdonado; y yo, el Señor, no los recuerdo más.',
            },
            {
              type: 'doctrine_box',
              title: '¿Cómo puede un ser omnisciente "no recordar"?',
              body: 'Esta no es una limitación de la omnisciencia de Dios — es una declaración de su voluntad. Dios puede recordar — pero elige no hacerlo. El perdón divino no es amnesia; es una decisión activa y eterna de no tomar en cuenta una transgresión que fue cubierta por la Expiación. El pecado perdonado no define al penitente en la eternidad — fue borrado del registro por el precio que Cristo pagó.',
            },
            {
              type: 'paragraph',
              text: 'Esta promesa tiene una implicación práctica devastadora para el pecador que no puede perdonarse a sí mismo: si Dios no lo recuerda más, ¿con qué derecho lo recuerdas tú? El auto-castigo prolongado después del arrepentimiento genuino no es humildad — es desconfianza en la Expiación. Es decirle a Cristo: tu sacrificio no fue suficiente para este pecado específico.',
            },
            {
              type: 'leader_quote',
              quote: 'Uno de los problemas más comunes que encontré en mi ministerio fue el de personas que habían completado el proceso del arrepentimiento y recibido el perdón del Señor, pero que se negaban a perdonarse a sí mismas. Estas personas no necesitaban más arrepentimiento — necesitaban más fe. Fe en que el sacrificio de Cristo era suficiente. También para ellas.',
              name: 'Spencer W. Kimball',
              role: 'El Milagro del Perdón, cap. 15',
            },
          ],
        },
        {
          id: 't18',
          title: 'La invitación final — el milagro está disponible para ti',
          blocks: [
            {
              type: 'paragraph',
              text: 'Kimball cierra El Milagro del Perdón con una invitación que no tiene condiciones de severidad — solo condiciones de honestidad. El milagro está disponible. No para los que nunca cayeron — esos no lo necesitan. Sino para los que sí cayeron, y que están dispuestos a pasar por el proceso completo, sin atajos.',
            },
            {
              type: 'paragraph',
              text: 'El proceso es real. La tristeza es real. El abandono es difícil. La confesión es humillante. La restitución es costosa. Pero el gozo al final de ese proceso es tan real, tan profundo y tan permanente que Alma, Enos, el pueblo de Benjamín, y millones de personas en los últimos dos siglos han testificado que valió cada gramo de esfuerzo que costó.',
            },
            {
              type: 'highlight_verse',
              reference: 'Isaías 55:7',
              text: 'Deje el impío su camino, y el hombre inicuo sus pensamientos, y vuélvase al Señor, el cual tendrá misericordia de él, y al Dios nuestro, el cual será amplio en perdonar.',
            },
            {
              type: 'leader_quote',
              quote: 'El milagro del perdón está disponible para todos los que realmente lo quieren. "Realmente" es la palabra que importa. No para los que quieren el perdón sin el proceso. No para los que quieren la paz sin el cambio. Sino para los que están dispuestos a hacer lo que sea necesario para estar limpios delante de Dios. Para esos, el milagro es cierto.',
              name: 'Spencer W. Kimball',
              role: 'El Milagro del Perdón, cap. final',
            },
            {
              type: 'reflection',
              prompt: '¿Hay algo en tu vida que has estado posponiendo porque el proceso parece demasiado costoso? ¿Qué perderías si lo pospones indefinidamente? ¿Qué ganarías si comienzas hoy?',
            },
            {
              type: 'key_points',
              title: 'Los pasos del arrepentimiento genuino — resumen',
              points: [
                '1. RECONOCIMIENTO — ver el pecado tal como es, sin racionalizar ni minimizar',
                '2. TRISTEZA SEGÚN DIOS — dolor genuino por el pecado mismo, no solo por sus consecuencias',
                '3. ABANDONO — cese completo del comportamiento, incluyendo las circunstancias que lo facilitan',
                '4. CONFESIÓN — a Dios siempre; al obispo cuando la gravedad del pecado lo requiere',
                '5. RESTITUCIÓN — reparar el daño causado en la medida de lo posible',
                '6. FE EN CRISTO — creer que la Expiación es suficiente, recibir el perdón y no volver a cargarlo',
              ],
            },
          ],
        },
      ],
    },
  ],
}
