import type { Lesson } from '@/types/doctrine'

export const mariaMadreLaVisitacion: Lesson = {
  id: 'maria-madre-la-visitacion',
  moduleId: 'personajes-escrituras',
  submoduleGroup: 'maria-madre',
  title: 'El Magníficat',
  subtitle: 'La canción de la madre del Señor',
  author: 'Fuentes: Lucas 1:39-56; 1 Samuel 2:1-10',
  description:
    'María viaja a las montañas de Judea para visitar a su prima Elisabet. Lo que sigue es una de las escenas más íntimas y teológicamente ricas del Nuevo Testamento: dos mujeres embarazadas — una joven y una anciana — se reconocen como protagonistas del plan de salvación. Y entonces María canta. El Magníficat no es solo un poema; es un manifiesto teológico de una joven que conoce las Escrituras, entiende la historia de Israel, y proclama la justicia de Dios.',
  level: 'INTERMEDIO',
  icon: '🌟',
  duration: 30,
  order: 6411,
  status: 'PUBLISHED',
  studyBodyPlain: '',
  originalBodyPlain: '',
  previousLessonId: 'maria-madre-el-anuncio',
  nextLessonId: 'maria-madre-y-jose',
  studySections: [
    {
      id: 's1',
      title: 'La Visitación: dos mujeres y dos milagros',
      intro: {
        romanNumeral: 'I',
        title: 'Lucas 1:39-45 — El encuentro en las montañas de Judea',
        paragraphs: [
          'María emprende un viaje de aproximadamente 130 kilómetros desde Nazaret a la ciudad de Judá para visitar a Elisabet. Viaja "de prisa" — el texto sugiere urgencia, como quien va a compartir una noticia que no puede guardarse.',
        ],
      },
      topics: [
        {
          id: 't1-1',
          title: 'El viaje de María a Ein Kerem',
          blocks: [
            {
              type: 'paragraph',
              text: 'La tradición cristiana ubica la casa de Elisabet y Zacarías en Ein Kerem, un pueblo en las colinas al oeste de Jerusalén. El viaje desde Nazaret cruzaba Samaria o bordeaba el Valle del Jordán — varios días de camino para una joven que acababa de recibir la noticia más extraordinaria de su vida. Lucas dice que partió "de prisa" (gr. "meta spoudēs") — con premura, sin tardar. ¿Por qué tanta urgencia? El ángel le había dicho que Elisabet también estaba embarazada. Ambas llevaban secretos que nadie más podría comprender.',
            },
            {
              type: 'highlight_verse',
              reference: 'Lucas 1:41-44',
              text: 'Y aconteció que cuando oyó Elisabet la salutación de María, la criatura saltó en su vientre; y Elisabet fue llena del Espíritu Santo, y exclamó a gran voz, y dijo: Bendita tú entre las mujeres, y bendito el fruto de tu vientre. ¿Por qué se me concede esto a mí, que la madre de mi Señor venga a mí? Porque tan pronto como llegó la voz de tu salutación a mis oídos, la criatura saltó de alegría en mi vientre.',
            },
            {
              type: 'paragraph',
              text: 'Antes de que María diga una palabra sobre el ángel o su embarazo, Juan el Bautista salta en el vientre de Elisabet. Es el primer acto público de Juan como precursor: reconocer la presencia del Mesías incluso antes de nacer. Elisabet, llena del Espíritu Santo, pronuncia la primera bendición cristológica del Nuevo Testamento. No hay duda, no hay preguntas — solo reconocimiento inmediato. El Espíritu Santo confirmó a Elisabet lo que el ángel había dicho a María.',
            },
            {
              type: 'doctrine_box',
              title: '¿Puede una persona no nacida ser llena del Espíritu Santo?',
              body: 'El ángel Gabriel había dicho a Zacarías sobre Juan: "será lleno del Espíritu Santo, aun desde el vientre de su madre" (Lucas 1:15). El salto de Juan en el vientre de Elisabet al escuchar la salutación de María se interpreta en la tradición cristiana como la manifestación de ese llenado prenatal. La tradición de la Restauración no especula extensamente sobre este punto, pero el principio es consistente con la preexistencia: el espíritu de Juan, que fue Elías (DC 27:7), ya conocía y reverenciaba al Mesías.',
            },
          ],
        },
        {
          id: 't1-2',
          title: 'El saludo de Elisabet y lo que revela de María',
          blocks: [
            {
              type: 'highlight_verse',
              reference: 'Lucas 1:45',
              text: 'Y bienaventurada la que creyó, porque se cumplirán las cosas que le fueron dichas de parte del Señor.',
            },
            {
              type: 'paragraph',
              text: 'Elisabet termina su saludo con una declaración que es tanto elogio como contraste implícito con su propio esposo. Zacarías, el sacerdote con décadas de experiencia en el templo, no creyó y fue castigado con mutismo. María, la joven sin rango ni título, creyó — y por eso es "bienaventurada." El contraste no es accidental. Lucas lo construye deliberadamente para mostrar que la fe no es función del rango, la experiencia, ni la posición religiosa.',
            },
            {
              type: 'dialogue',
              title: 'Imaginando el encuentro entre Elisabet y María',
              lines: [
                {
                  speaker: 'Elisabet',
                  side: 'left',
                  text: '¡Bendita tú entre las mujeres! ¿Por qué se me concede esto, que la madre de mi Señor venga a mí?',
                },
                {
                  speaker: 'María',
                  side: 'right',
                  text: 'Prima, ¿cómo sabes? Acababa de partir. No le dije nada a nadie...',
                },
                {
                  speaker: 'Elisabet',
                  side: 'left',
                  text: 'No necesité que me lo dijeras. El niño saltó de alegría en cuanto escuché tu voz. El Espíritu me lo confirmó. El ángel también vino a Zacarías.',
                },
                {
                  speaker: 'María',
                  side: 'right',
                  text: 'Entonces tú entiendes. Tú eres la única que puede entenderlo.',
                },
              ],
            },
            {
              type: 'reflection',
              prompt: '¿Tienes en tu vida una "Elisabet" — alguien cuya experiencia espiritual puede confirmar y sostener la tuya? ¿Cuán importante es rodearse de personas que puedan reconocer lo que Dios está haciendo en tu vida?',
            },
          ],
        },
      ],
    },
    {
      id: 's2',
      title: 'El Magníficat — Texto y estructura',
      intro: {
        romanNumeral: 'II',
        title: 'Lucas 1:46-55 — La canción más famosa de la historia cristiana',
        paragraphs: [
          'El Magníficat ha sido cantado en las vísperas de la Iglesia Católica todos los días durante más de mil quinientos años. Es el himno mariano por excelencia. Pero ¿qué dice exactamente?',
        ],
      },
      topics: [
        {
          id: 't2-1',
          title: 'El texto del Magníficat',
          blocks: [
            {
              type: 'highlight_verse',
              reference: 'Lucas 1:46-55',
              text: 'Entonces María dijo: Mi alma engrandece al Señor; y mi espíritu se regocija en Dios mi Salvador. Porque ha mirado la bajeza de su sierva; pues he aquí, desde ahora me dirán bienaventurada todas las generaciones. Porque me ha hecho grandes cosas el Poderoso; santo es su nombre. Y su misericordia es de generación en generación a los que le temen. Hizo proezas con su brazo; esparció a los soberbios en el pensamiento de sus corazones. Quitó de los tronos a los poderosos, y exaltó a los humildes. A los hambrientos colmó de bienes, y a los ricos envió vacíos. Socorrió a Israel su siervo, acordándose de la misericordia de la cual habló a nuestros padres, para con Abraham y su descendencia para siempre.',
            },
            {
              type: 'paragraph',
              text: 'El nombre "Magníficat" viene de la primera palabra en latín: "Magnificat anima mea Dominum" — "Engrandece mi alma al Señor." Lucas lo transmite en griego, pero la estructura es claramente semítica — un poema en el estilo de los Salmos y de los himnos de los Rollos del Mar Muerto. Está compuesto de paralelismos, una característica definitoria de la poesía hebrea donde dos líneas expresan la misma idea en palabras diferentes.',
            },
            {
              type: 'steps',
              steps: [
                'Primera estrofa (vv.46-48): Alabanza personal — "mi alma," "mi espíritu," "su sierva." María habla desde lo personal antes de hablar desde lo universal.',
                'Segunda estrofa (vv.49-50): Atributos de Dios — poderoso, santo, misericordioso. La transición del yo a Dios.',
                'Tercera estrofa (vv.51-53): Las inversiones divinas — derribar a los soberbios, exaltar a los humildes, llenar a los hambrientos, enviar vacíos a los ricos.',
                'Cuarta estrofa (vv.54-55): La promesa cumplida — Israel como siervo, Abraham y su descendencia. El cumplimiento del pacto abrahámico.',
              ],
            },
          ],
        },
        {
          id: 't2-2',
          title: 'El Magníficat y el Cántico de Ana',
          blocks: [
            {
              type: 'compare_grid',
              title: 'El Magníficat (Lucas 1) y el Cántico de Ana (1 Samuel 2)',
              left: {
                label: 'Ana — 1 Samuel 2:1-10',
                points: [
                  '"Mi corazón se regocija en Jehová" (v.1)',
                  '"El arco de los fuertes fue quebrado" (v.4)',
                  '"Los saciados se alquilaron por pan" (v.5)',
                  '"Jehová mata, y él da vida" (v.6)',
                  '"Él humilla, y él exalta" (v.7)',
                  '"Él levanta del polvo al pobre" (v.8)',
                ],
              },
              right: {
                label: 'María — Lucas 1:46-55',
                points: [
                  '"Mi alma engrandece al Señor" (v.46)',
                  '"Esparció a los soberbios" (v.51)',
                  '"A los hambrientos colmó de bienes" (v.53)',
                  '"A los ricos envió vacíos" (v.53)',
                  '"Quitó de los tronos a los poderosos" (v.52)',
                  '"Exaltó a los humildes" (v.52)',
                ],
              },
            },
            {
              type: 'paragraph',
              text: 'Las similitudes entre el Magníficat y el Cántico de Ana son demasiado precisas para ser casuales. María no estaba "citando" a Ana en el sentido de la cita académica moderna — estaba orando en la tradición de las mujeres de Israel que habían experimentado la intervención divina contra toda lógica humana. Ana había recibido un hijo cuando era estéril; María había concebido sin varón. Ambas cantaron con el mismo vocabulario porque ambas habían experimentado el mismo Dios.',
            },
            {
              type: 'deep_dive',
              badge: 'TEOLOGÍA BÍBLICA',
              title: 'María como intérprete de las Escrituras',
              paragraphs: [
                'El Magníficat revela que María no era una joven sin educación que apenas conocía las costumbres religiosas de su pueblo. Conocía la Torah, los Salmos, los profetas, y la historia de la salvación. Podía componer, de memoria, un himno teológicamente coherente usando el vocabulario y la estructura de las Escrituras hebreas. Esto no era común — la educación formal de las mujeres en el siglo I era mínima.',
                'La explicación más probable es que María había memorizado extensas porciones de la Escritura en el contexto de la vida litúrgica del hogar y la sinagoga. La piedad judía del período requería que los padres enseñaran la Torah a sus hijos desde la infancia (Deuteronomio 6:6-9). María absorbió ese conocimiento y lo hizo propio — hasta el punto de poder cantarlo espontáneamente en un momento de alabanza.',
                'Esto tiene implicaciones importantes para cómo la vemos. María no es solo la vasija biológica que portó al Salvador. Es la primera intérprete del significado teológico de lo que Dios estaba haciendo. El Magníficat es el primer sermón cristológico — y lo predicó ella.',
              ],
            },
          ],
        },
      ],
    },
    {
      id: 's3',
      title: 'La teología del Magníficat',
      intro: {
        romanNumeral: 'III',
        title: 'Las inversiones divinas — El mundo al revés',
        paragraphs: [
          'El corazón del Magníficat es una proclamación radical: Dios invierte el orden del mundo. Los poderosos son derribados. Los humildes son exaltados. Los hambrientos son saciados. Los ricos son enviados vacíos.',
        ],
      },
      topics: [
        {
          id: 't3-1',
          title: 'Las inversiones divinas en el Magníficat',
          blocks: [
            {
              type: 'paragraph',
              text: 'Los versículos 51-53 del Magníficat son los más desconcertantes y los más discutidos. María habla en tiempo pasado — "hizo," "quitó," "exaltó," "colmó," "envió" — aunque el nacimiento de Jesús todavía no ha ocurrido. Este uso del pasado profético (en hebreo, el "perfecto profético") es una manera de afirmar la certeza absoluta de lo que Dios está a punto de hacer. Para María, la Encarnación ya es una realidad tan segura que puede hablar de sus consecuencias como si ya hubieran sucedido.',
            },
            {
              type: 'key_points',
              title: 'Las cuatro inversiones divinas en Lucas 1:51-53',
              points: [
                'Los soberbios son esparcidos: El orgullo que construye castillos interiores será derribado por la humildad del Encarnado',
                'Los poderosos son quitados de sus tronos: El poder político y económico no es permanente ante el Rey de reyes',
                'Los humildes son exaltados: La humildad que el mundo desprecia es el único camino al verdadero honor divino',
                'Los hambrientos son saciados y los ricos enviados vacíos: La economía de Dios invierte la lógica de la escasez y la acumulación',
              ],
            },
            {
              type: 'paragraph',
              text: 'Esta teología de las inversiones no es únicamente del Nuevo Testamento. Corre por toda la Escritura: Dios elige al más joven antes que al primogénito (Abel, Jacob, José, David). Elige a los esclavos antes que a los faraones. Elige a la estéril para ser madre de los patriarcas. Elige a Nazaret antes que a Jerusalén. El Magníficat es la articulación más concisa de este patrón consistente en el obrar divino: Dios trabaja desde abajo hacia arriba, desde los márgenes hacia el centro.',
            },
            {
              type: 'central_quote',
              text: 'El Magníficat es el himno más subversivo jamás escrito. No habla de reforma gradual sino de inversión radical del orden existente.',
              attribution: 'N.T. Wright — teólogo anglicano',
            },
          ],
        },
        {
          id: 't3-2',
          title: 'María y el pacto abrahámico',
          blocks: [
            {
              type: 'highlight_verse',
              reference: 'Lucas 1:54-55',
              text: 'Socorrió a Israel su siervo, acordándose de la misericordia de la cual habló a nuestros padres, para con Abraham y su descendencia para siempre.',
            },
            {
              type: 'paragraph',
              text: 'El Magníficat cierra con una afirmación del pacto abrahámico. María no concibe la venida de Jesús como un evento aislado sino como el cumplimiento de una promesa hecha a Abraham siglos atrás (Génesis 12:3; 22:18). El niño que lleva en su vientre es la "simiente de Abraham" en quien todas las familias de la tierra serían benditas. María entiende que es el eslabón entre la promesa y el cumplimiento.',
            },
            {
              type: 'doctrine_box',
              title: 'El Magníficat y la doctrina de la Restauración',
              body: 'La Restauración enfatiza el cumplimiento del pacto abrahámico como elemento central de la misión de la Iglesia (Abraham 2:9-11; DC 110:12; DC 132:29-32). El Magníficat de María proclama exactamente este cumplimiento. Desde la perspectiva de la Restauración, María no solo cantó sobre el nacimiento de Jesús — cantó sobre la inauguración de la dispensación de la plenitud de los tiempos, el momento en que todas las promesas del pacto comenzarían a derramarse sobre Israel y todas las naciones.',
            },
            {
              type: 'quiz',
              quizType: 'fill_blank',
              question: 'El cántico de María en Lucas 1:46-55 se llama el ___________.',
              answer: 'Magníficat',
              explanation: 'El Magníficat recibe su nombre de la primera palabra en latín: "Magnificat anima mea Dominum" — "Engrandece mi alma al Señor." Es uno de los tres himnos del período natalicio de Lucas (junto al Benedictus de Zacarías y el Nunc Dimittis de Simeón).',
            },
            {
              type: 'note_prompts',
              prompts: [
                {
                  id: 'p1',
                  question: '¿Qué revelan las palabras del Magníficat sobre el conocimiento bíblico de María?',
                },
                {
                  id: 'p2',
                  question: '¿Cuál de las "inversiones divinas" del Magníficat te resulta más provocadora o desafiante en tu vida actual?',
                },
                {
                  id: 'p3',
                  question: '¿Cómo entiendes la relación entre el Magníficat de María y el pacto abrahámico de la Restauración?',
                },
              ],
            },
          ],
        },
      ],
    },
    {
      id: 's4',
      title: 'María permanece tres meses',
      intro: {
        romanNumeral: 'IV',
        title: 'Lucas 1:56 — Tres meses con Elisabet',
        paragraphs: [
          'Lucas anota que María permaneció con Elisabet aproximadamente tres meses, y luego volvió a su casa. Tres meses en compañía de la única persona que entendía.',
        ],
      },
      topics: [
        {
          id: 't4-1',
          title: 'La comunión espiritual como sustento',
          blocks: [
            {
              type: 'paragraph',
              text: 'Los tres meses de María con Elisabet no son un detalle biográfico menor. Matemáticamente, si Elisabet estaba en su sexto mes cuando llegó María (Lucas 1:36), María habría estado presente para el nacimiento de Juan. Habría visto cómo Dios cumplió la primera parte de la promesa del ángel. Habría escuchado a Zacarías recuperar el habla y pronunciar el Benedictus. Habría tenido tres meses de confirmación experiencial de que lo que el ángel le había dicho era verdad.',
            },
            {
              type: 'paragraph',
              text: 'Cuando María regresó a Nazaret, iba diferente. No porque hubiera cambiado la situación objetiva — seguía siendo una joven soltera visiblemente embarazada en una sociedad que penalizaba eso. Pero había cantado el Magníficat. Había visto nacer a Juan. Había escuchado el testimonio de Elisabet llena del Espíritu Santo. La fe confirmada por la experiencia es más robusta que la fe solo basada en la palabra del ángel.',
            },
            {
              type: 'leader_quote',
              quote: 'María no caminó sola en los primeros meses de su misión más sagrada. Dios le proveyó una compañera que entendía — Elisabet — y en esa relación encontró el sustento espiritual y emocional que necesitaba. Dios siempre provee compañía para las misiones más solitarias.',
              name: 'Élder Dieter F. Uchtdorf',
              role: 'Quórum de los Doce Apóstoles',
            },
            {
              type: 'reflection',
              prompt: 'María necesitó a Elisabet. ¿Quién en tu vida puede ver lo que Dios está haciendo en ti y confirmarlo cuando tú mismo lo dudas? ¿Eres tú "Elisabet" para alguien en tu círculo?',
            },
          ],
        },
      ],
    },
  ],
}
