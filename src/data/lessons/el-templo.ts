import type { Lesson } from '@/types/doctrine'

export const elTemplo: Lesson = {
  id: 'templo-casa-del-senor',
  moduleId: 'doctrina-avanzada-carne',
  title: 'El Templo — La Casa del Señor',
  subtitle: 'Donde el tiempo y la eternidad se tocan',
  author: 'Fuentes principales: DyC 84, 110, 128, 131–132; Éxodo 25; Malaquías 4; Russell M. Nelson',
  description:
    'El templo no es el edificio más hermoso de la Iglesia — es el lugar donde Dios hace sus promesas más grandes. Las ordenanzas del templo, el endowment, el sellamiento, el espíritu de Elías, y por qué el presidente Nelson declaró que nuestro futuro espiritual depende completamente de nuestra relación personal con el templo.',
  level: 'AVANZADO',
  icon: '🏛️',
  duration: 90,
  order: 2,
  status: 'PUBLISHED',
  studyBodyPlain: '',
  originalBodyPlain: '',
  previousLessonId: 'sacerdocio-autoridad-poder',
  nextLessonId: 'preexistencia',
  studySections: [
    {
      id: 's1',
      title: 'Por Qué Existe el Templo — La Casa del Señor en la Escritura',
      intro: {
        romanNumeral: 'I',
        title: 'Por Qué Existe el Templo — La Casa del Señor en la Escritura',
        paragraphs: [
          'El templo no es una iglesia más grande con mejores decoraciones. Es el único lugar en la tierra donde Dios ofrece a sus hijos mortales las ordenanzas que hacen posible la exaltación eterna. Sin las ordenanzas del templo, el plan de salvación queda incompleto — no porque Dios sea burocrático, sino porque las ordenanzas son los convenios, y los convenios son los lazos que unen a la humanidad a la divinidad.',
        ],
      },
      topics: [
        {
          id: 't1',
          title: 'El Deseo de Dios: Habitar Entre Su Pueblo',
          subtitle:
            'Desde Moisés hasta nuestros días, el templo ha sido la respuesta de Dios a una sola pregunta: ¿cómo puede lo mortal tocar lo eterno?',
          blocks: [
            {
              type: 'highlight_verse',
              text: 'Y me harán un santuario, y yo habitaré en medio de ellos.',
              reference: 'Éxodo 25:8 · Biblia (RVR)',
            },
            {
              type: 'paragraph',
              text: 'El deseo de Dios es claro y consistente a través de toda la historia sagrada: quiere habitar cerca de Sus hijos. No en distancia mítica — en presencia activa. El tabernáculo de Moisés, el templo de Salomón, el templo de Herodes, el de Kirtland, el de Nauvoo — cada uno fue construido en respuesta a ese mismo deseo divino. El templo moderno no es una innovación de los últimos días. Es la continuación de la institución más antigua de la historia religiosa humana.',
              blockId: 'et-s1-p-0',
            },
            {
              type: 'timeline',
              items: [
                {
                  label: 'Tabernáculo de Moisés (~1440 a.C.)',
                  text: 'La primera estructura portátil diseñada por Dios mismo. Tres zonas de santidad creciente: el atrio exterior, el lugar santo, y el lugar santísimo — donde habitaba la gloria del Señor sobre el arca del convenio.',
                  ref: 'Éxodo 25–27; Éxodo 40:34',
                  color: 'gold',
                },
                {
                  label: 'Templo de Salomón (~957 a.C.)',
                  text: 'El primer templo permanente. Al ser dedicado, "la gloria del Señor llenó la casa de Dios" (2 Crónicas 7:1). Destruido por Babilonia en 586 a.C. como consecuencia de la apostasía de Israel.',
                  ref: '1 Reyes 6–8; 2 Crónicas 7:1-2',
                  color: 'blue',
                },
                {
                  label: 'Templo de Kirtland (1836)',
                  text: 'El primer templo de la Restauración. En su dedicación, el Señor apareció a José Smith y Oliver Cowdery. Elías, Moisés y Elías (Elijah) restauraron llaves esenciales del sacerdocio.',
                  ref: 'DyC 110:1-16',
                  color: 'gold',
                },
                {
                  label: 'Templos modernos (1836–hoy)',
                  text: 'Más de 300 templos en operación, construcción o anunciados en todo el mundo. Cada uno dedicado formalmente como la casa del Señor — el lugar donde el tiempo y la eternidad se tocan.',
                  ref: 'DyC 97:15-17',
                  color: 'blue',
                },
              ],
            },
            {
              type: 'highlight_verse',
              text: 'Por tanto, en las ordenanzas de aquel sacerdocio, se manifiesta el poder de la divinidad. Y sin las ordenanzas del mismo, y la autoridad del sacerdocio, el poder de la divinidad no se manifiesta a los hombres en la carne.',
              reference: 'Doctrina y Convenios 84:20–21',
            },
            {
              type: 'doctrine_box',
              title: 'Por qué las ordenanzas del templo son necesarias — DyC 84:20-21',
              body: 'Este versículo establece uno de los principios doctrinales más importantes de la Restauración: el poder de la divinidad — el poder que transforma a un ser mortal en un ser capaz de la exaltación eterna — no puede manifestarse plenamente sin las ordenanzas del sacerdocio. El templo no es donde "ganamos puntos" con Dios. Es donde hacemos convenios que nos conectan a Su poder transformador, y donde ese poder puede operar en nuestra vida de maneras que no son posibles fuera de esos convenios. Las ordenanzas son los canales que Dios ha designado para transmitir Su poder a Sus hijos.',
            },
            {
              type: 'highlight_verse',
              text: 'Y nuevamente, de cierto os digo, que la casa de vuestro Dios, que habéis edificado, es aceptable a mí, y os lo hago saber; pues el Espíritu Santo es de testigo. Y he aquí, yo he aceptado esta casa, y mi nombre estará aquí.',
              reference: 'Doctrina y Convenios 110:7',
            },
            {
              type: 'leader_quote',
              quote: 'Nuestro futuro espiritual — el vuestro y el mío — depende de nuestra relación personal con el templo. El adversario sabe esto. Por eso trabaja tan activamente para mantenernos alejados del templo, para hacernos sentir que la preparación es demasiado difícil, que el viaje es demasiado lejos, que el tiempo es demasiado corto. Él sabe con exactitud lo que perdemos cuando no vamos, y lo que ganamos cuando sí vamos.',
              name: 'Presidente Russell M. Nelson',
              role: '"El Templo y Tu Fundamento Espiritual", Conferencia General, octubre 2021 · Liahona, noviembre 2021',
            },
            {
              type: 'reflection',
              prompt:
                '¿Cómo describes el templo a alguien que nunca ha entrado a uno? ¿Lo describes como un edificio bello, como un lugar de paz, como un lugar de ordenanzas? ¿Cuál es la descripción que captura mejor lo que el templo realmente es doctrinalmente?',
            },
          ],
        },
      ],
    },
    {
      id: 's2',
      title: 'La Preparación para Entrar — Digno, No Perfecto',
      intro: {
        romanNumeral: 'II',
        title: 'La Preparación para Entrar — Digno, No Perfecto',
        paragraphs: [
          'El templo no requiere perfección — requiere dignidad. Y dignidad es una condición del corazón, no un historial sin faltas. Entender qué significa ser digno del templo, y qué preguntas de la recomendación en realidad preguntan, transforma la preparación de una lista de requisitos en un examen personal de quién eres y a qué te has comprometido.',
        ],
      },
      topics: [
        {
          id: 't2',
          title: '¿Qué Significa Ser Digno del Templo?',
          subtitle:
            'Las preguntas de la entrevista de recomendación revelan los principios que Dios considera fundamentales para entrar a Su casa.',
          blocks: [
            {
              type: 'paragraph',
              text: 'La recomendación del templo no es un certificado de perfección. Es un testigo de que la persona está viviendo los principios del evangelio con honestidad y fe. El obispo y el presidente de estaca no preguntan "¿has cometido alguna vez un pecado?" — preguntan sobre el estado actual del corazón, los convenios actuales, y las relaciones actuales con Dios y Sus líderes.',
              blockId: 'et-s2-p-0',
            },
            {
              type: 'key_points',
              points: [
                '① Fe en Dios el Padre, en Jesucristo, en el Espíritu Santo, y en la Expiación — la base de todo lo demás.',
                '② Testimonio de la Restauración, del profeta José Smith, del Libro de Mormón, y del profeta viviente — compromiso con las fuentes de autoridad de la Iglesia restaurada.',
                '③ Esfuerzo sincero por guardar los mandamientos, incluyendo ser honrado con el prójimo — no perfección, sino disposición genuina.',
                '④ Ley de la castidad — fidelidad en el matrimonio o celibato fuera de él, sin transgresiones graves no resueltas.',
                '⑤ Ley del diezmo — fe suficiente para devolver el diezmo completo, que es el testimonio financiero de la confianza en Dios.',
                '⑥ Ley de la Word of Wisdom — abstinencia de alcohol, tabaco, café, té y sustancias nocivas.',
                '⑦ Relaciones familiares — cumplimiento de las obligaciones hacia la familia, incluyendo pensión alimenticia si aplica.',
                '⑧ Apoyo a los líderes del sacerdocio — no pertenecer a grupos que enseñan doctrinas contrarias a la Iglesia.',
              ],
            },
            {
              type: 'doctrine_box',
              title: 'La recomendación como examen del corazón, no de la conducta externa',
              body: 'El presidente Howard W. Hunter enseñó: "Ser digno del templo es la norma de vida más alta que podemos establecer para nosotros mismos como santos de los últimos días." No se trata de conducta externa visible — se trata de la condición del corazón. Un Santo que comete errores cotidianos pero que tiene el corazón vuelto hacia Dios, que se arrepiente con sinceridad, que cumple sus compromisos con honestidad, es digno del templo. La dignidad es una disposición, no un historial limpio.',
            },
            {
              type: 'highlight_verse',
              text: '¿Quién subirá al monte de Jehová? ¿Y quién estará en su lugar santo? El limpio de manos y puro de corazón; el que no ha elevado su alma a la vanidad, ni jurado con engaño.',
              reference: 'Salmos 24:3–4 · Biblia (RVR)',
            },
            {
              type: 'leader_quote',
              quote: 'El gran desafío de los últimos días es que todos los miembros de la Iglesia sean dignos de tener una recomendación del templo. No porque tengan que usarla todos los días, sino porque la dignidad del templo significa que están viviendo de manera tal que podrían entrar en la presencia de Dios. Ese es el estándar de la vida que se espera de los Santos de los Últimos Días.',
              name: 'Presidente Gordon B. Hinckley',
              role: '"A Temple-Motivated People", Liahona, mayo 1994 (trad.)',
            },
            {
              type: 'deep_dive',
              badge: 'Preparación',
              title: 'Primera vez en el templo — lo que cambia y lo que permanece',
              paragraphs: [
                'Muchos Santos experimentan cierta sorpresa la primera vez que entran al templo para recibir sus propias ordenanzas. El entorno, el lenguaje simbólico, el ritmo de la ceremonia — todo es diferente a lo que conocen de las reuniones dominicales. Esto puede generar incertidumbre si no se espera.',
                'Lo que hay que saber antes: el templo opera con lenguaje simbólico, no literal. Las ordenanzas usan símbolos, vestuario especial, y ceremonias rituales que tienen significado doctrinal profundo. No se entienden completamente en la primera visita — ni en la décima. El templo fue diseñado para ser meditado, no solo experimentado.',
                'Los líderes de la Iglesia han animado consistentemente a los miembros a prepararse estudiando. El Manual "Preparación para la Investidura" publicado por la Iglesia ofrece contexto doctrinal sin revelar las partes sagradas de la ceremonia. Leer también los capítulos del Antiguo Testamento sobre el tabernáculo de Moisés (Éxodo 25-28) ayuda a entender el simbolismo de las vestiduras.',
                'Lo que permanece igual dentro del templo: el amor del Padre, la presencia del Espíritu Santo, y la claridad de que estás haciendo algo eterno. Muchos Santos describen la primera visita al templo como el momento de mayor paz espiritual de sus vidas — incluso sin entender todo lo que ocurre.',
              ],
            },
          ],
        },
      ],
    },
    {
      id: 's3',
      title: 'Las Ordenanzas Sagradas del Templo',
      intro: {
        romanNumeral: 'III',
        title: 'Las Ordenanzas Sagradas del Templo',
        paragraphs: [
          'El templo ofrece ordenanzas que ningún otro lugar en la tierra puede ofrecer. El lavamiento y unción, el endowment y el sellamiento forman juntos el camino completo de regreso a la presencia del Padre. Cada uno tiene un propósito doctrinal específico. No son secretos — son sagrados, y esa distinción importa.',
        ],
      },
      topics: [
        {
          id: 't3',
          title: 'El Endowment — La Investidura de Poder desde lo Alto',
          subtitle:
            'José Smith describió el endowment como una "dotación de poder del cielo" — instrucción, inteligencia y conocimiento divino para quien lo recibe.',
          blocks: [
            {
              type: 'paragraph',
              text: 'La palabra inglesa "endowment" — que se traduce como dotación o investidura — significa literalmente "dotación de poder desde arriba." No es solo una ceremonia religiosa — es el evento en que Dios, a través del sacerdocio, equipa a Sus hijos con el conocimiento, los convenios y el poder que necesitan para regresar a Su presencia y eventualmente llegar a ser como Él.',
              blockId: 'et-s3-p-0',
            },
            {
              type: 'highlight_verse',
              text: 'Y que se purifiquen los pies de todos vosotros, y que seáis limpios de la sangre de esta generación; y que seáis investidos con poder desde lo alto.',
              reference: 'Doctrina y Convenios 38:38',
            },
            {
              type: 'key_points',
              points: [
                '① INSTRUCCIÓN — El endowment enseña el plan de salvación de manera simbólica: la creación, la caída, la Expiación y el camino de regreso a la presencia del Padre. Es la narración más completa del plan de Dios que la Iglesia ofrece.',
                '② CONVENIOS — Se hacen convenios específicos de obediencia a Dios, castidad, consagración de tiempo y recursos, y dedicación al reino de Dios. Estos convenios son bilaterales: Dios promete bendiciones específicas a quienes los guardan.',
                '③ VESTIDURA SAGRADA — Se recibe una vestidura blanca que se usa permanentemente como símbolo de pureza, de convenio con Dios, y de protección espiritual. Es un recordatorio físico y diario del convenio.',
                '④ CONOCIMIENTO SIMBÓLICO — Se enseña conocimiento que el Señor considera sagrado — no secreto en el sentido de que haya algo vergonzoso, sino sagrado en el sentido de que su pleno significado se revela solo a quienes están preparados para recibirlo y meditarlo.',
              ],
            },
            {
              type: 'highlight_verse',
              text: 'El mayor de todos, sin embargo, es la llave de los misterios del reino, así como también la plenitud del conocimiento de Dios. Por tanto, en las ordenanzas de aquel sacerdocio, se manifiesta el poder de la divinidad.',
              reference: 'Doctrina y Convenios 84:19–20',
            },
            {
              type: 'leader_quote',
              quote: 'Yo insto a los miembros de la Iglesia de todo el mundo a que preparen sus vidas para poder ir al templo. Ese es el lugar más sagrado sobre la tierra. Allí se pueden hacer convenios que atan a los hombres al cielo. Allí se puede recibir el poder que Dios quiere dar a Sus hijos. No existe ningún poder mayor disponible a los seres mortales que el que se ofrece en el templo del Señor.',
              name: 'Presidente Ezra Taft Benson',
              role: '"The Sacred Temple", Conferencia General, abril 1985 · Liahona, julio 1985 (trad.)',
            },
          ],
        },
        {
          id: 't4',
          title: 'El Sellamiento — La Familia Eterna',
          subtitle:
            'La pregunta más profunda que el evangelio responde: ¿puede una familia existir para siempre? El sellamiento es la respuesta.',
          blocks: [
            {
              type: 'highlight_verse',
              text: 'Y si os casáis por mí, en mi nombre, conforme a mi ley, y por mi palabra, y por convenio, y os sois mutuamente fieles, vuestro matrimonio será válido para tiempo y para toda la eternidad.',
              reference: 'Doctrina y Convenios 132:19',
            },
            {
              type: 'paragraph',
              text: 'El mundo responde consistentemente a la pregunta sobre la familia eterna: "Hasta que la muerte los separe." El evangelio restaurado responde: depende. Depende de si los lazos fueron establecidos por el poder correcto, bajo las condiciones correctas, y mantenidos con fidelidad. El sellamiento no es un ritual mágico — es la aplicación del poder de las llaves del sacerdocio para ligar en la tierra lo que queda ligado en el cielo.',
              blockId: 'et-s3-p-1',
            },
            {
              type: 'highlight_verse',
              text: 'En la orden celestial de la eternidad, existe en la esfera celestial un matrimonio. Y el que no obtenga esta ordenanza en el mundo no puede tener aumento en la eternidad, sino que será ministrado por los ángeles; y sin ninguna condición específica de inmortalidad, ni de vida eterna.',
              reference: 'Doctrina y Convenios 131:1–4',
            },
            {
              type: 'compare_grid',
              left: {
                title: 'Matrimonio civil o religioso ordinario',
                items: [
                  '"Hasta que la muerte los separe" — válido solo en esta vida',
                  'Los hijos no están sellados a los padres por convenio eterno',
                  'Relación hermosa pero temporalmente limitada',
                  'Sin aumento eterno en el más alto grado del reino celestial',
                  'El amor es real, pero el vínculo no sobrevive la muerte',
                ],
              },
              right: {
                title: 'Matrimonio sellado en el templo',
                items: [
                  '"Por tiempo y por toda la eternidad" — válido más allá de la muerte si son fieles',
                  'Los hijos nacidos bajo el convenio o sellados son familia eterna',
                  'El sellamiento une no solo a los cónyuges sino a generaciones completas',
                  'Aumento eterno posible en el grado más alto del reino celestial (DyC 131:1-4)',
                  'El vínculo sobrevive la muerte y la resurrección — por la fidelidad',
                ],
              },
            },
            {
              type: 'doctrine_box',
              title: '¿Qué significa "aumento eterno"?',
              body: 'DyC 131:1-4 usa la palabra "aumento" para describir lo que es posible solo dentro del más alto grado del reino celestial para los sellados fieles. La teología restaurada enseña que "aumento" es el poder de crear y organizar vida espiritual — la capacidad de ser padre y madre en el sentido eterno y divino, tal como el Padre Celestial y la Madre Celestial lo son para nosotros. Los que no reciben el sellamiento pueden ser "ministrados por ángeles" en la gloria eterna — pero no tienen acceso al aumento que es la característica central de la exaltación.',
            },
            {
              type: 'leader_quote',
              quote: 'Cada vez que un hombre y una mujer son sellados en el templo, Satanás pierde terreno. Cada familia sellada es una familia que potencialmente puede continuar más allá de la muerte — y eso es exactamente lo que él no puede tolerar. Por eso trabaja tan incansablemente para destruir las familias, los matrimonios, y la santidad del templo.',
              name: 'Presidente Russell M. Nelson',
              role: '"Spiritual Treasures", Conferencia General, octubre 2019 · Liahona, noviembre 2019 (trad.)',
            },
          ],
        },
      ],
    },
    {
      id: 's4',
      title: 'El Espíritu de Elías — El Trabajo por los Muertos',
      intro: {
        romanNumeral: 'IV',
        title: 'El Espíritu de Elías — El Trabajo por los Muertos',
        paragraphs: [
          'El templo no es solo para los vivos. La doctrina más única de toda la Restauración puede ser esta: que las ordenanzas del templo pueden realizarse vicariamente por quienes murieron sin haber tenido acceso a ellas. Esta enseñanza hace que Elías, la historia familiar y el sellamiento de generaciones sean inseparables — y hace del templo el lugar donde el presente abraza al pasado para producir un futuro eterno.',
        ],
      },
      topics: [
        {
          id: 't5',
          title: 'Por Qué Dios Ordenó el Trabajo Vicario — y Cómo es Justo',
          subtitle:
            'Malaquías 4, DyC 128, y José Smith explican el fundamento doctrinal de la redención de los muertos.',
          blocks: [
            {
              type: 'highlight_verse',
              text: 'He aquí, yo os envío el profeta Elías, antes que venga el día de Jehová, grande y terrible. Él hará volver el corazón de los padres hacia los hijos, y el corazón de los hijos hacia los padres, no sea que yo venga y hiera la tierra con maldición.',
              reference: 'Malaquías 4:5–6 · Biblia (RVR)',
            },
            {
              type: 'paragraph',
              text: 'Malaquías profetizó que Elías vendría antes del "día grande y terrible del Señor." El 3 de abril de 1836, ese evento ocurrió: Elías se apareció en el Templo de Kirtland a José Smith y Oliver Cowdery y restauró las llaves del sellamiento. Desde ese momento, la obra de unir a los padres con los hijos — a través de las ordenanzas vicarias del templo — se convirtió en el trabajo central de la dispensación de la plenitud de los tiempos.',
              blockId: 'et-s4-p-0',
            },
            {
              type: 'highlight_verse',
              text: 'Y en ese día fui yo, Elías, para que se cumpliese la palabra del profeta Malaquías, tornando el corazón de los padres a los hijos e el corazón de los hijos a los padres, para que el mundo entero no fuera herido con maldición.',
              reference: 'Doctrina y Convenios 110:14–15',
            },
            {
              type: 'highlight_verse',
              text: 'Porque sin nosotros no pueden ser perfeccionados; y tampoco nosotros sin nuestros muertos podemos ser perfeccionados.',
              reference: 'Doctrina y Convenios 128:18',
            },
            {
              type: 'doctrine_box',
              title: 'La exaltación es colectiva, no individual',
              body: 'DyC 128:18 contiene una de las doctrinas más sorprendentes del evangelio restaurado: la perfección es colectiva. No puedes ser completamente exaltado dejando a tus ancestros atrás. Ellos necesitan de ti. Tú necesitas de ellos. La cadena de convenios que une generaciones no es opcional — es el tejido del plan eterno. José Smith enseñó que "la mayor responsabilidad que Dios ha puesto sobre nosotros en este mundo es procurar por nuestros muertos" (Sermón de King Follett, 7 de abril de 1844).',
            },
            {
              type: 'deep_dive',
              badge: 'Pregunta Difícil',
              title: 'La justicia del trabajo vicario — respondiendo la objeción más común',
              paragraphs: [
                'La pregunta obvia es: ¿Es justo que los muertos dependan de que los vivos hagan el trabajo por ellos? ¿Qué pasa con alguien que murió hace mil años y cuyos descendientes nunca fueron miembros de la Iglesia?',
                'La respuesta doctrinal tiene dos partes fundamentales. Primera: el trabajo vicario NO salva automáticamente a nadie. Ofrece la ordenanza — pero la persona en el mundo de los espíritus tiene plena agencia para aceptarla o rechazarla. El bautismo por los muertos no bautiza al muerto en contra de su voluntad. Abre una puerta que antes estaba cerrada. Ellos deciden si cruzan.',
                'Segunda: Dios es perfectamente justo y perfectamente omnisciente. No perderá un alma por un descuido humano. El período milenial — mil años durante los cuales el templo funcionará sin interrupción — está diseñado precisamente para que toda alma que pueda ser alcanzada, sea alcanzada. Mientras tanto, nuestra responsabilidad es hacer lo que podemos con las herramientas que tenemos.',
                'El presidente Nelson enseñó: "El trabajo del templo es el trabajo más importante que hacemos como Santos de los Últimos Días. No existe otra obra que tenga consecuencias tan eternas." (Liahona, mayo 2021)',
              ],
            },
            {
              type: 'leader_quote',
              quote: 'Esta escritura [Malaquías 4:5-6] encierra la más poderosa de las revelaciones jamás dadas. Todo lo que se ha revelado desde los días de Adán sobre las dispensaciones, los evangelios, el bautismo y las alianzas de Dios con Sus hijos — todo converge en este trabajo: unir a los padres con los hijos, y a los hijos con sus padres, a través de las ordenanzas del sacerdocio que trascienden la muerte.',
              name: 'Profeta José Smith',
              role: 'Doctrina y Convenios 128:17–18 · Historia de la Iglesia, vol. 6',
            },
            {
              type: 'reflection',
              prompt:
                '¿Cuándo fue la última vez que asististe al templo para hacer trabajo vicario por tus ancestros — no solo para recibir las tus propias ordenanzas? ¿Tienes nombres de ancestros identificados en FamilySearch que estén esperando sus ordenanzas? ¿Qué cambiaría en tu relación con el templo si lo vieras no como una visita ocasional sino como el lugar donde cumples tu responsabilidad más grande con tus muertos?',
            },
          ],
        },
      ],
    },
    {
      id: 's5',
      title: 'El Templo como Centro de la Vida Espiritual',
      intro: {
        romanNumeral: 'V',
        title: 'El Templo como Centro de la Vida Espiritual',
        paragraphs: [
          'El presidente Nelson ha enseñado que el templo debe ser el centro de la vida espiritual de los Santos, no la periferia. La asistencia regular al templo no es un indicador de nivel de actividad — es el mecanismo por el cual el Señor da poder, protección y revelación personal a Sus hijos que han hecho convenios.',
        ],
      },
      topics: [
        {
          id: 't6',
          title: 'Por Qué la Asistencia Regular al Templo Cambia la Vida',
          subtitle:
            'Las promesas específicas que el Señor hace a quienes convierten el templo en el centro — no la periferia — de su vida espiritual.',
          blocks: [
            {
              type: 'highlight_verse',
              text: 'Sí, y mi presencia también estará allí, porque yo vendré a él, y todas las generaciones santas y puras que habiten en él. Y el nombre de mi gloria reposará sobre él; y será mi casa, una casa de oración, una casa de ayuno, una casa de fe, una casa de aprendizaje, una casa de gloria, una casa de orden, una casa de Dios.',
              reference: 'Doctrina y Convenios 88:119',
            },
            {
              type: 'key_points',
              points: [
                '① REVELACIÓN PERSONAL — El templo es el lugar donde el Espíritu puede comunicarse con mayor claridad. El ruido del mundo no entra. El ambiente sagrado facilita la revelación que en casa o en la calle puede ser más difícil de escuchar.',
                '② FORTALEZA PARA LAS PRUEBAS — Los convenios del templo son promesas de Dios de asistir a quien los guarda. Muchos Santos testifican que en sus momentos más difíciles, la fortaleza para resistir vino de recordar y honrar esos convenios.',
                '③ PERSPECTIVA ETERNA — El templo recuerda físicamente que esta vida es temporal. Las vestiduras blancas, el ambiente separado del mundo, el lenguaje de la eternidad — todo reorienta el corazón hacia lo que realmente importa.',
                '④ SERVICIO A LOS MUERTOS — Cada visita es una oportunidad de abrir puertas eternas para alguien que no puede hacerlo por sí mismo. No hay otro servicio en el mundo con ese alcance temporal.',
                '⑤ PROTECCIÓN ESPIRITUAL — El presidente Nelson enseñó que los convenios del templo "proveen una protección espiritual para toda su vida" (CF, octubre 2021). No porque el templo sea magia, sino porque guardar convenios alinea la vida con la voluntad de Dios, lo que naturalmente produce protección.',
              ],
            },
            {
              type: 'highlight_verse',
              text: 'Y he aquí, yo os digo estas cosas con el propósito de que podáis aprender sabiduría; a fin de que cuando el diablo os envíe sus vientos, sí, sus saetas en el torbellino, sí, cuando todos sus granizos y su poderosa tormenta os azoten, no tengan poder sobre vosotros, para arrastraros a las profundidades de la miseria y al dolor sin fin, a causa de la roca sobre la cual estáis edificados, que es un fundamento seguro.',
              reference: 'Helamán 5:12',
            },
            {
              type: 'quiz',
              id: 'q-1', question: { kind: 'fill_blank',
                prompt: 'Según DyC 131:1-4, ¿qué es imposible sin haber recibido la ordenanza del matrimonio eterno en el más alto grado del reino celestial?',
                options: [
                  'Vivir en la presencia de Dios el Padre',
                  'Recibir el Espíritu Santo como compañero constante',
                  'El aumento eterno — continuar como padre o madre en la eternidad',
                  'La resurrección gloriosa del cuerpo',
                ],
                correctIndex: 2,
                explanation: 'DyC 131:1-4 enseña que en el más alto grado del reino celestial existe el matrimonio, y que quien no obtiene esta ordenanza "no puede tener aumento en la eternidad, sino que será ministrado por los ángeles." El aumento eterno — la capacidad de ser padre o madre eterna — es lo que distingue el más alto grado del celestial de los demás destinos.',
              },
            },
            {
              type: 'quiz',
              id: 'q-2', question: {
                kind: 'fill_blank',
                prompt: '¿Qué ocurrió el 3 de abril de 1836 en el Templo de Kirtland según DyC 110?',
                options: [
                  'Se realizó el primer sellamiento matrimonial de la Restauración',
                  'El Señor, Moisés, Elías y Elías restauraron llaves esenciales del sacerdocio',
                  'José Smith recibió el texto completo del endowment por revelación',
                  'Se realizaron los primeros bautismos por los muertos de la Restauración',
                ],
                correctIndex: 1,
                explanation: 'DyC 110 registra cuatro apariciones en el Templo de Kirtland el 3 de abril de 1836: el Señor aceptó el templo (vv. 7-10), Moisés restauró las llaves de la congregación de Israel (v. 11), Elías restauró el evangelio de Abraham (v. 12), y Elías (Elijah) restauró las llaves del sellamiento prometidas en Malaquías 4:5-6 (vv. 13-16).',
              },
            },
            {
              type: 'leader_quote',
              quote: 'Cuando la tormenta llega a tu vida — y llegará — tus convenios del templo serán tu ancla. No el edificio, no la ceremonia en sí — sino los convenios que hiciste con Dios y los que Dios hizo contigo. En ese momento difícil recordarás lo que prometiste, y recordarás lo que Él prometió. Y eso cambia todo.',
              name: 'Presidente Russell M. Nelson',
              role: '"El Templo y Tu Fundamento Espiritual", Conferencia General, octubre 2021 · Liahona, noviembre 2021',
            },
            {
              type: 'reflection',
              prompt:
                '¿El templo es el centro o la periferia de tu vida espiritual ahora mismo? El presidente Nelson dice que nuestro futuro espiritual depende de nuestra relación personal con el templo. ¿Qué cambiaría en tu vida si lo visitaras con la misma regularidad con que participas en la Santa Cena — semanalmente o al menos mensualmente? ¿Qué obstáculo concreto tienes que resolver para que eso sea posible?',
            },
          ],
        },
      ],
    },
  ],
}
