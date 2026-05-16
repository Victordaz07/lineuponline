import type { Lesson } from '@/types/doctrine'

export const santiagoElLider: Lesson = {
  id: 'santiago-el-lider',
  moduleId: 'personajes-escrituras',
  title: 'Santiago el Líder',
  subtitle: 'El hombre de rodillas callosas que presidió la Iglesia primitiva',
  description: 'Santiago presidió el Concilio de Jerusalén, arbitró el conflicto más importante de la Iglesia primitiva, y mantuvo la unidad entre judeo-cristianos y gentiles. Su apodo "el Justo" era reconocido incluso por sus enemigos. Sus rodillas estaban endurecidas como las de un camello de tanto orar.',
  level: 'AVANZADO',
  icon: '🏛️',
  duration: 35,
  order: 5512,
  status: 'PUBLISHED',
  studyBodyPlain: '',
  originalBodyPlain: '',
  submoduleGroup: 'santiago-justo',
  studySections: [
    {
      id: 's1',
      title: 'El Concilio de Jerusalén',
      intro: {
        romanNumeral: 'I',
        title: 'Hechos 15 — La Primera Gran Crisis Doctrinal',
        paragraphs: [
          'Aproximadamente 49 d.C. La pregunta que determinaría si el evangelio permanecería como una secta judía o se convertiría en una fe universal.',
        ],
      },
      topics: [
        {
          id: 't1',
          title: 'El dictamen sobre los gentiles',
          blocks: [
            {
              type: 'highlight_verse',
              reference: 'Hechos 15:13-15, 19-20',
              text: 'Y después que ellos callaron, Jacobo respondió diciendo: Varones hermanos, oídme. Simón ha contado cómo Dios visitó por primera vez a los gentiles... Por lo cual yo juzgo que no se inquiete a los gentiles que se convierten a Dios, sino que se les escriba que se aparten de las contaminaciones de los ídolos, de fornicación, de ahogado y de sangre.',
            },
            {
              type: 'paragraph',
              text: 'El Concilio de Jerusalén de aproximadamente 49 d.C. fue convocado para resolver la pregunta más explosiva del cristianismo primitivo: ¿debían los gentiles convertidos circuncidarse y guardar la ley de Moisés para ser salvos? Algunos creyentes de tradición farisea insistían en que sí. Pablo y Bernabé, recién llegados de su primer viaje misionero, decían que no. El conflicto era doctrinal, cultural y potencialmente mortal para la unidad de la Iglesia.',
            },
            {
              type: 'paragraph',
              text: 'Santiago presidió el debate. La estructura de Hechos 15 muestra su rol: Pedro habla primero (vv. 7-11), luego Pablo y Bernabé dan testimonio de señales entre los gentiles (v. 12), y finalmente Santiago toma la palabra con la frase "por lo cual yo juzgo" (v. 19) — no una opinión personal sino un dictamen presidencial. Su decisión, apoyada en Amós 9:11-12, fue que los gentiles no debían ser cargados con la ley de Moisés más allá de cuatro requisitos mínimos.',
            },
            {
              type: 'deep_dive',
              title: 'Por Qué el Dictamen de Santiago Fue Revolucionario',
              paragraphs: [
                'Santiago era conocido por su estricta observancia de la ley judía — era más estrictamente judío que muchos fariseos, según el testimonio de Hegesipo. Que precisamente ese hombre dictaminara la liberación de los gentiles del yugo de la circuncisión tiene una dimensión histórica enorme.',
                'Sin esta decisión, el evangelio habría permanecido como un movimiento dentro del judaísmo, accesible solo a quienes aceptaran convertirse en judíos. La apertura a los gentiles sin el requisito de la circuncisión fue el acto fundacional del cristianismo como religión universal. Y fue Santiago quien la consagró.',
                'El decreto apostólico resultante (Hechos 15:23-29) fue enviado a las iglesias gentiles como una carta oficial firmada con la autoridad del concilio. Es el primer documento conciliar de la historia cristiana. Santiago lo presidió.',
              ],
            },
          ],
        },
      ],
    },
    {
      id: 's2',
      title: 'La tensión con Pablo',
      intro: {
        romanNumeral: 'II',
        title: 'Gálatas 2 — El Incidente de Antioquía',
        paragraphs: [
          'Pablo enfrentó a Pedro en público. En el centro del conflicto estaban los emisarios de Santiago. ¿Qué ocurrió realmente?',
        ],
      },
      topics: [
        {
          id: 't2',
          title: 'Los "de parte de Santiago" y la mesa compartida',
          blocks: [
            {
              type: 'highlight_verse',
              reference: 'Gálatas 2:11-12',
              text: 'Pero cuando Pedro vino a Antioquía, le resistí cara a cara, porque era de condenar. Pues antes que viniesen algunos de parte de Jacobo, comía con los gentiles; pero después que vinieron, se retraía y se apartaba, porque tenía miedo de los de la circuncisión.',
            },
            {
              type: 'paragraph',
              text: 'El incidente de Antioquía registrado en Gálatas 2:11-14 es el conflicto más explícito entre apóstoles del Nuevo Testamento. Pedro, que comía libremente con los gentiles, se separó de ellos cuando llegaron emisarios de Jerusalén ("de parte de Jacobo"). Pablo lo confrontó públicamente por hipocresía.',
            },
            {
              type: 'paragraph',
              text: 'La frase "de parte de Jacobo" no necesariamente indica que Santiago los envió con instrucciones de separarse — pudo significar simplemente que procedían de la comunidad de Jerusalén donde Santiago era líder. El texto no dice que Santiago ordenó la separación. Sin embargo, la presencia de estos visitantes bastó para que Pedro cambiara su comportamiento, lo que sugiere que la presión social de la comunidad judeo-cristiana de Jerusalén, encabezada por Santiago, era una fuerza real que incluso Pedro temía.',
            },
            {
              type: 'compare_grid',
              title: 'Las Posiciones en el Conflicto de Antioquía',
              left: {
                title: 'Posición de Pablo',
                items: [
                  'Los gentiles son plenos miembros del pueblo de Dios',
                  'Comer con ellos no contamina',
                  'La separación es hipocresía que niega el evangelio',
                  'La justificación es por fe, no por obras de la ley',
                ],
              },
              right: {
                title: 'Posición de los de Jerusalén',
                items: [
                  'La identidad judía sigue siendo relevante',
                  'Las normas de pureza alimentaria son parte de la fidelidad',
                  'La comunión con gentiles compromete el testimonio ante Israel',
                  'El evangelio no elimina la obligación de la ley para los judíos',
                ],
              },
            },
            {
              type: 'doctrine_box',
              title: 'Santiago y Pablo: ¿Conflicto Real o Complementario?',
              body: 'La relación entre Santiago y Pablo es más matizada de lo que parece a primera vista. En Gálatas 2:9, Pablo llama a Santiago, Pedro y Juan "columnas" que le dieron "la diestra en señal de compañerismo." Hay un acuerdo de base: Santiago misionaría a los judíos, Pablo a los gentiles. El conflicto de Antioquía no fue entre Santiago y Pablo directamente sino sobre cómo implementar ese acuerdo en la práctica de comunidades mixtas. La tensión es real, pero no anula la unidad doctrinal fundamental.',
            },
          ],
        },
      ],
    },
    {
      id: 's3',
      title: 'El Justo — El apodo que lo define',
      intro: {
        romanNumeral: 'III',
        title: 'Josefo y Hegesipo — Un Líder Reconocido por Sus Enemigos',
        paragraphs: [
          'El apodo "el Justo" no lo pusieron sus seguidores. Lo pusieron sus contemporáneos judíos que no creían en Jesús.',
        ],
      },
      topics: [
        {
          id: 't3',
          title: 'La reputación que trasciende los límites de la fe',
          blocks: [
            {
              type: 'paragraph',
              text: 'Hegesipo, historiador cristiano del siglo II cuyas obras solo sobreviven en fragmentos citados por Eusebio, ofrece el retrato más detallado de Santiago como líder. Según Hegesipo, Santiago fue consagrado como "obispo" de Jerusalén desde la época apostólica. Tenía el privilegio de entrar solo al santuario — inusual incluso para un sacerdote — y se arrodillaba en oración con tanta frecuencia que "sus rodillas se habían vuelto como las de un camello, endurecidas y callosas."',
            },
            {
              type: 'paragraph',
              text: 'El apodo "el Justo" (en griego, ho Dikaios; en hebreo, ha-Tzaddik) no era un título eclesiástico — era un reconocimiento de la comunidad más amplia, incluidos judíos no cristianos. Josefo, en su relato de la muerte de Santiago (Antigüedades 20.9.1), señala que los judíos observantes de Jerusalén se indignaron ante su ejecución porque consideraban que había sido injusta. Un líder cristiano cuya muerte indignaba a los judíos estrictos de Jerusalén tenía una reputación de integridad que trascendía las fronteras religiosas.',
            },
            {
              type: 'key_points',
              title: 'Las Características del Liderazgo de Santiago',
              points: [
                'Observancia estricta de la ley judía — respetado incluso por los fariseos',
                'Práctica de oración intensa y sostenida — las rodillas callosas como testimonio físico',
                'Autoridad ejercida por consenso — presidió pero escuchó antes de dictaminar',
                'Reputación de justicia reconocida por creyentes y no creyentes por igual',
                'Mediador entre la tradición judía y la apertura al evangelio universal',
              ],
            },
            {
              type: 'leader_quote',
              quote: 'Santiago el Justo fue la figura más importante de la que no se habla en los libros de historia de la Iglesia. Sin él, la transición del evangelio del mundo judío al mundo greco-romano podría haber fracasado.',
              name: 'James D.G. Dunn',
              role: 'Teólogo del Nuevo Testamento, Universidad de Durham',
            },
          ],
        },
      ],
    },
    {
      id: 's4',
      title: 'La comunidad que construyó',
      intro: {
        romanNumeral: 'IV',
        title: 'La Iglesia de Jerusalén bajo Santiago',
        paragraphs: [
          'En Hechos 21:20, la comunidad cristiana de Jerusalén se describe con un número que sobrepasa cualquier expectativa razonable.',
        ],
      },
      topics: [
        {
          id: 't4',
          title: 'Miles de judíos creyentes y celosos por la ley',
          blocks: [
            {
              type: 'highlight_verse',
              reference: 'Hechos 21:20',
              text: 'Y ellos, habiéndole oído, glorificaron a Dios, y le dijeron: Ya ves, hermano, cuántos miles de judíos hay que han creído; y todos son celosos por la ley.',
            },
            {
              type: 'paragraph',
              text: 'Cuando Pablo llegó a Jerusalén en su última visita, Santiago y los ancianos le reportaron que había "miles de judíos" creyentes en la ciudad. La palabra griega muriades puede significar "decenas de miles." Si es literal, la comunidad cristiana de Jerusalén bajo el liderazgo de Santiago era numerosa comparada con cualquier comunidad mediterránea que Pablo había fundado.',
            },
            {
              type: 'paragraph',
              text: 'Lo que hace notable este número es el contexto: Jerusalén era el centro del judaísmo, el lugar donde Jesús había sido crucificado, donde los sacerdotes que ordenaron su muerte seguían en el poder. Construir una comunidad de fe de miles de personas en ese ambiente — manteniendo al mismo tiempo la identidad judía y la apertura al evangelio universal — fue un logro de liderazgo extraordinario que solo Santiago, con su reputación de justicia e integridad, pudo haber conseguido.',
            },
            {
              type: 'reflection',
              prompt: '¿Qué tipo de liderazgo — doctrinal, práctico, moral, espiritual — te parece más escaso hoy? ¿En cuál de las dimensiones del liderazgo de Santiago te sientes más desafiado a crecer?',
            },
          ],
        },
      ],
    },
    {
      id: 's5',
      title: 'El modelo de liderazgo que dejó',
      intro: {
        romanNumeral: 'V',
        title: 'Las Rodillas Callosas — Liderazgo desde la Oración',
        paragraphs: [
          'La imagen más poderosa de Santiago no es su discurso en el concilio. Son sus rodillas.',
        ],
      },
      topics: [
        {
          id: 't5',
          title: 'El fundamento espiritual de la autoridad',
          blocks: [
            {
              type: 'paragraph',
              text: 'El detalle de las rodillas callosas de Santiago (transmitido por Hegesipo) es uno de los retratos biográficos más vívidos del Nuevo Testamento primitivo. No era un adorno retórico — en el mundo antiguo, las marcas físicas del cuerpo eran consideradas testimonios objetivos de la vida de una persona. Las rodillas callosas de un hombre eran la evidencia irrefutable de tiempo invertido en oración.',
            },
            {
              type: 'steps',
              title: 'Las dimensiones del liderazgo de Santiago',
              steps: [
                'Autoridad por carácter: el apodo "el Justo" vino de la comunidad, no de un cargo',
                'Autoridad por experiencia: era testigo ocular de la Resurrección, no teórico',
                'Autoridad por práctica: sus rodillas callosas demostraban que su liderazgo venía de la oración',
                'Autoridad por consenso: presidió el concilio escuchando a todos antes de dictaminar',
                'Autoridad por integridad: sus enemigos reconocían su justicia incluso al condenarlo',
              ],
            },
            {
              type: 'central_quote',
              text: 'Un hombre cuyas rodillas están callosas de orar tiene una autoridad que ningún título puede otorgar ni ninguna persecución puede quitar.',
              attribution: 'Reflexión sobre el testimonio de Hegesipo',
            },
            {
              type: 'note_prompts',
              prompts: [
                { id: 'np1', question: '¿Qué marcas físicas o prácticas visibles en tu vida demuestran las prioridades de tu corazón?' },
                { id: 'np2', question: '¿Cuál es la diferencia entre liderar desde el cargo y liderar desde el carácter reconocido?' },
                { id: 'np3', question: '¿Qué aprende la Iglesia de hoy del modelo de Santiago: escuchar antes de dictaminar, ser reconocido por todos antes de presidir?' },
              ],
            },
          ],
        },
      ],
    },
  ],
}
