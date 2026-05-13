import type { Lesson } from '@/types/doctrine'

export const elMundoDeLoEspiritus: Lesson = {
  id: 'el-mundo-de-los-espiritus',
  moduleId: 'temas-profundos',
  title: 'El Mundo de los Espíritus',
  subtitle: 'El reino intermedio entre la muerte y la resurrección',
  description: 'Entre la muerte y la resurrección existe un reino habitado por espíritus de hombres y mujeres que esperan el día de la resurrección. No es el cielo definitivo. No es el infierno final. Es un lugar de aprendizaje, predicación, reunión y preparación. La Restauración reveló más sobre este reino que ninguna otra tradición cristiana.',
  level: 'AVANZADO',
  icon: '🌌',
  duration: 95,
  order: 21,
  status: 'PUBLISHED',
  studyBodyPlain: '',
  originalBodyPlain: '',
  studySections: [
    {
      id: 's1',
      title: 'La Geografía del Reino Intermedio',
      intro: {
        romanNumeral: 'I',
        heading: 'Paraíso y Prisión Espiritual — Un Solo Mundo, Dos Condiciones',
        subheading: 'La arquitectura del espacio entre la muerte y la resurrección',
      },
      topics: [
        {
          id: 't1',
          title: 'El mundo de los espíritus no es el cielo ni el infierno',
          blocks: [
            {
              type: 'paragraph',
              id: 'p1',
              text: 'El mundo de los espíritus es el estado intermedio entre la muerte física y la resurrección. No es el destino final de nadie. No es el cielo — el cielo definitivo (la exaltación) requiere un cuerpo resucitado, glorificado, que nadie ha recibido aún salvo Cristo. No es el infierno — el infierno definitivo (el segundo muerte, la perdición) tampoco ha sido aplicado a nadie aún. El mundo de los espíritus es la sala de espera de la eternidad: un reino real, estructurado, habitado, donde los hombres y mujeres continúan siendo exactamente quienes eran al morir — con memoria, personalidad, preferencias, talentos, defectos — pero sin cuerpo físico.',
            },
            {
              type: 'highlight_verse',
              id: 'v1',
              reference: 'Alma 40:11-12',
              text: 'Y entonces sucederá que los espíritus de los que son justos son recibidos en un estado de felicidad, que se llama paraíso, un estado de descanso, un estado de paz, donde reposarán de todos sus afanes y de toda pena.',
            },
            {
              type: 'paragraph',
              id: 'p2',
              text: 'El profeta Alma, en su exposición a su hijo Coriántum (Alma 40), estructura el mundo de los espíritus en dos zonas: el paraíso y la prisión espiritual. No son dos planetas distintos ni dos dimensiones sin comunicación — la visión de DyC 138 revela que son, en algún sentido, el mismo espacio organizado bajo condiciones diferentes. La división no es geográfica sino espiritual: unos están en estado de "descanso y paz", otros en "tinieblas exteriores". La separación la mantiene Dios, no muros físicos.',
            },
            {
              type: 'doctrine_box',
              id: 'db1',
              title: '¿Cuándo Ocurre la Separación?',
              content: 'Alma 40:21 especifica que la separación entre los justos y los inicuos ocurre en el momento de la muerte. El espíritu no vagabundea ni "elige" hacia dónde ir. Es recibido — recogido — por seres que esperan. Los justos son "recibidos en un estado de felicidad." Los inicuos son "echados afuera en tinieblas exteriores." La imagen es de una recepción activa, no de un viaje individual solitario.',
            },
            {
              type: 'paragraph',
              id: 'p3',
              text: 'El paraíso es descrito por Alma como un estado de "descanso, paz y felicidad." Pero cuidado con la imagen de inactividad que la palabra "descanso" puede sugerir en español. En el contexto de las escrituras restauradas, "descanso" significa cesación de la lucha, no cesación de la actividad. Alma 40:12 lo confirma: es un estado donde los espíritus reposan "de todos sus afanes y de toda pena" — no de toda labor. La visión de DyC 138 presenta el paraíso como un lugar de actividad intensa: enseñanza, organización, reuniones, predicación.',
            },
            {
              type: 'key_points',
              id: 'kp1',
              title: 'Las Dos Zonas del Mundo de los Espíritus',
              points: [
                'PARAÍSO: para los que murieron con fe y convenios activos. Estado de descanso, paz y continuación del aprendizaje. Acceso completo a la luz del Espíritu.',
                'PRISIÓN ESPIRITUAL: para los que murieron sin los convenios necesarios o en rebelión activa. Estado de espera, enseñanza, y posibilidad de cambio.',
                'AMBAS ZONAS son temporales — terminan con la resurrección y el juicio final.',
                'LA SEPARACIÓN no es permanente mientras no se ha recibido la resurrección. El evangelio se predica en ambas zonas.',
                'NO HAY SEGUNDO MUERTE aún. Nadie en el mundo de los espíritus ha sido condenado definitivamente.',
              ],
            },
          ],
        },
        {
          id: 't2',
          title: 'La prisión espiritual — tinieblas, no tormento final',
          blocks: [
            {
              type: 'paragraph',
              id: 'p4',
              text: 'La prisión espiritual es frecuentemente mal entendida como el infierno definitivo. No lo es. DyC 76:73-74 describe a los que irán al reino telestial: "son espíritus que no recibieron el testimonio de Jesús en la carne, sino que después lo rechazaron... que habrán sufrido la venganza del fuego eterno." Esta sugerencia de sufrimiento en el mundo de los espíritus no es equivalente a la perdición — es purificación posible, no condena irrevocable. El "fuego eterno" en esta referencia alude a la justicia de Dios, no a llamas literales.',
            },
            {
              type: 'highlight_verse',
              id: 'v2',
              reference: 'DyC 76:73-74',
              text: 'Estos son los que no recibieron el testimonio de Jesús en la carne, sino que después lo recibieron. Estos son los que son honrados entre los hombres mas no lo fueron en lo que pertenece al evangelio.',
            },
            {
              type: 'paragraph',
              id: 'p5',
              text: 'Brigham Young describió la prisión espiritual como un lugar donde los espíritus "están tan acostumbrados a sus malos hábitos que no los pueden abandonar fácilmente." No es un lugar de tortura física — es un lugar donde el carácter que una persona desarrolló en vida persiste, y donde la influencia de Satanás aún tiene acceso relativo. La "tiniebla" de Alma 40:13-14 es tiniebla espiritual: ausencia de la plena presencia de Dios, no una cámara de sufrimiento físico eterno.',
            },
          ],
        },
      ],
    },
    {
      id: 's2',
      title: 'DyC 138 — La Gran Visión de José F. Smith',
      intro: {
        romanNumeral: 'II',
        heading: '3 de Octubre de 1918 — El Velo Más Transparente',
        subheading: 'La revelación más completa sobre el mundo de los espíritus en las escrituras modernas',
      },
      topics: [
        {
          id: 't3',
          title: 'El contexto de la visión',
          blocks: [
            {
              type: 'paragraph',
              id: 'p6',
              text: 'José F. Smith era el sexto presidente de la Iglesia. Tenía 80 años. Era octubre de 1918 — la Primera Guerra Mundial estaba en sus últimas semanas; habían muerto decenas de millones. Su propio hijo Hyrum, de 45 años, había muerto en ese mismo año. Smith pasaba los últimos meses de su vida debilitado, reflexionando sobre las escrituras. El 3 de octubre, mientras meditaba en 1 Pedro 3:18-20 — la referencia de Pedro al Cristo que "fue y predicó a los espíritus que estaban en prisión" — recibió una visión extensa y detallada del mundo de los espíritus.',
            },
            {
              type: 'paragraph',
              id: 'p7',
              text: 'Murió el 19 de noviembre de ese mismo año. DyC 138 fue la última revelación de su vida — y una de las más ricas en el canon restaurado. Fue presentada al Quórum de los Doce y los Primeros Presidentes de los Setenta en octubre de 1918, aceptada unánimemente, y canonizada en 1976 como parte de la Doctrina y Convenios.',
            },
            {
              type: 'central_quote',
              id: 'cq1',
              quote: 'Vi la gran congregación de los justos que habían partido de esta vida — la hueste de mis redimidos, que habían recibido el evangelio de Cristo... Todos esperaban ansiosamente la partida del Hijo de Dios para ir a los espíritus en la prisión.',
              attribution: 'DyC 138:12',
            },
          ],
        },
        {
          id: 't4',
          title: 'Lo que vio Smith en la visión',
          blocks: [
            {
              type: 'paragraph',
              id: 'p8',
              text: 'La visión describe que entre la muerte de Cristo en la cruz y su resurrección — tres días según el calendario mortal — Cristo visitó el mundo de los espíritus. No visitó la prisión espiritual directamente. José F. Smith vio que Cristo fue al paraíso — "la congregación de los justos" — y ahí organizó una misión: designó mensajeros de entre los espíritus justos para llevar el evangelio a los que estaban en la prisión. Esta es una revelación teológicamente significativa: Cristo no vino a predicar personalmente en la prisión; envió misioneros espirituales. La obra misional en el mundo de los espíritus está organizada exactamente como en el mundo mortal.',
            },
            {
              type: 'highlight_verse',
              id: 'v3',
              reference: 'DyC 138:29-30',
              text: 'Y así fue instituida la organización de la iglesia de entre los espíritus de los muertos para enseñar el evangelio a todos los que eran dignos de recibirlo. Así fue hecha posible la redención de todos los que habían muerto en ignorancia de la ley del evangelio.',
            },
            {
              type: 'paragraph',
              id: 'p9',
              text: 'Smith vio a personajes específicos en el paraíso: Adán, Eva, Abel, Set, Noé, Sem, Abraham, Isaac, Jacob, Moisés, Isaías, Ezequiel, Daniel, Elías, Malaquías. También vio a Ana (la profetisa del Templo que reconoció al niño Cristo), a la reina de Sabá, a Ester, a Ruth. La lista no es exhaustiva — es representativa. Establece que los grandes personajes de la historia bíblica estaban activos, juntos, esperando y trabajando. No en estado latente o dormido.',
            },
            {
              type: 'doctrine_box',
              id: 'db2',
              title: '¿Por Qué Cristo No Fue a la Prisión Directamente?',
              content: 'DyC 138:29-37 explica que Cristo "no fue en persona entre los inicuos y los desobedientes que habían rechazado la verdad, sino que designó mensajeros, revestidos de poder y autoridad, y los comisionó para ir... para enseñar los principios del evangelio." La razón implícita es la misma por la que Dios usa a hombres mortales para predicar en lugar de aparecerse personalmente: la fe, el libre albedrío, y el tipo de conversión que resulta de elegir creer basado en el testimonio de otro, no solo en la presencia directa de la divinidad. El diseño de la salvación es consistente en todos los reinos.',
            },
            {
              type: 'paragraph',
              id: 'p10',
              text: 'La visión también revela algo sobre el tiempo en el mundo de los espíritus. Tres días en el tiempo mortal dieron suficiente tiempo para que Cristo organizara una misión completa, reuniera a multitudes de espíritus, los instruyera, los comisionara, y estableciera la estructura de predicación en la prisión. O el tiempo funciona de manera diferente en ese reino, o la capacidad de comunicación espiritual es infinitamente más eficiente que la comunicación mortal.',
            },
          ],
        },
      ],
    },
    {
      id: 's3',
      title: 'El Estado de los Espíritus — Memoria, Conciencia y Carácter',
      intro: {
        romanNumeral: 'III',
        heading: '¿Quiénes Son los Muertos? — La Continuidad del Yo',
        subheading: 'La revelación restaurada sobre la conciencia después de la muerte',
      },
      topics: [
        {
          id: 't5',
          title: 'Los espíritus recuerdan quiénes son',
          blocks: [
            {
              type: 'paragraph',
              id: 'p11',
              text: 'Una de las enseñanzas más distintivas de la Restauración sobre el mundo de los espíritus es la continuidad de la identidad. Los espíritus no son almas anónimas flotantes. Son personas — con el mismo nombre, el mismo carácter, los mismos recuerdos, las mismas relaciones, las mismas disposiciones que tenían en vida. DyC 130:18 dice que "todo conocimiento, inteligencia, fidelidad y virtud que adquirimos en esta vida resucitará con nosotros." Lo que resucita con el cuerpo estaba antes preservado en el espíritu.',
            },
            {
              type: 'highlight_verse',
              id: 'v4',
              reference: 'DyC 130:18-19',
              text: 'Sea lo que sea que logremos en conocimiento en esta vida se alzará con nosotros en la resurrección. Y si una persona adquiere más conocimiento e inteligencia en esta vida mediante su diligencia y obediencia que la otra persona, tendrá tanta ventaja en el mundo venidero.',
            },
            {
              type: 'paragraph',
              id: 'p12',
              text: 'Alma 34:34 es una de las escrituras más directas sobre la continuidad del carácter: "Ese mismo espíritu que posee vuestros cuerpos en el momento en que salís de esta vida, ese mismo espíritu tendrá poder para poseer vuestro cuerpo en el mundo eterno." No hay reset. No hay amnesia. El hombre que murió enojado con Dios, llegará al mundo de los espíritus enojado con Dios. El hombre que murió amando el evangelio, llegará amando el evangelio. Las disposiciones internas no cambian automáticamente con la muerte.',
            },
            {
              type: 'doctrine_box',
              id: 'db3',
              title: 'Alma 34:34 — La Advertencia más Directa',
              content: '"No os procrastinéis el día de vuestro arrepentimiento hasta el fin; porque después de este día de vida, que se nos ha dado para prepararnos para la eternidad, he aquí, si no nos mejoramos en este tiempo, entonces viene la noche de la oscuridad, en la cual no puede hacerse ninguna labor." Esta no es una declaración de que no hay esperanza después de la muerte. Es una advertencia de que el carácter que desarrollamos en vida es el carácter con que entramos al mundo de los espíritus. Cambiar ese carácter ahí será más difícil, no más fácil — exactamente como es más difícil cambiar hábitos profundos a los 70 que a los 30.',
            },
            {
              type: 'paragraph',
              id: 'p13',
              text: 'El espíritu humano tiene forma. DyC 77:2 dice que el espíritu "tiene la forma y la silueta del hombre." DyC 131:7-8 enseña que la materia espiritual es "materia más refinada y pura" — no es invisible, simplemente no visible con ojos mortales no refinados. Las visiones consistentemente muestran que los espíritus aparecen como personas reconocibles. José Smith vio a su hermano Alvin en el cielo celestial (DyC 137:5). Smith vio personajes específicos en su visión. La continuidad de la forma facilita la continuidad de la identidad.',
            },
          ],
        },
        {
          id: 't6',
          title: 'El tiempo en el mundo de los espíritus',
          blocks: [
            {
              type: 'paragraph',
              id: 'p14',
              text: 'DyC 130:4-5 ofrece una perspectiva única sobre el tiempo: "El tiempo solo se mide para los hombres... todo pasado, presente y futuro está ante Él [Dios] continuamente." Brigham Young y otros líderes han enseñado que el tiempo en el mundo de los espíritus fluye de manera diferente al tiempo mortal. No sabemos exactamente cómo — si los días son más largos, si el tiempo es menos lineal, si las percepciones son distintas. Lo que sí sabemos es que mil años de historia mortal pueden ser experimentados de manera muy diferente desde ese lado del velo.',
            },
            {
              type: 'paragraph',
              id: 'p15',
              text: 'Para los que mueren jóvenes, hay consuelo implícito en esta doctrina. Un niño que muere a los tres años no permanece como niño espiritual para siempre. José Smith enseñó que "los niños serán resucitados como niños y después crecerán." No hay claridad absoluta sobre cómo ocurre el desarrollo de los infantes en el mundo de los espíritus — pero la doctrina implica crecimiento continuo, no congelamiento en el estado de muerte.',
            },
            {
              type: 'reflection',
              id: 'r1',
              prompt: '¿Cómo cambia tu perspectiva sobre la muerte de un ser querido saber que esa persona, ahora en el mundo de los espíritus, sigue siendo la misma persona — con sus mismos valores, su mismo humor, sus mismas relaciones — simplemente sin cuerpo físico y en un estado de espera? ¿Qué aspectos de tu carácter actual te gustaría que "resucitaran contigo"?',
            },
          ],
        },
      ],
    },
    {
      id: 's4',
      title: 'La Misión en el Mundo de los Espíritus',
      intro: {
        romanNumeral: 'IV',
        heading: 'La Obra Misional Más Grande de la Historia',
        subheading: 'Predicar el evangelio a los que murieron sin oírlo — el corazón de la obra de salvación',
      },
      topics: [
        {
          id: 't7',
          title: 'La misión más grande de la historia',
          blocks: [
            {
              type: 'paragraph',
              id: 'p16',
              text: 'Si la obra misional en el mundo mortal parece grande — millones de miembros, decenas de miles de misioneros, cientos de países — la obra misional en el mundo de los espíritus es incomparablemente más grande. Desde la muerte de Abel hasta el presente, aproximadamente 108 mil millones de seres humanos han vivido en la tierra. La gran mayoría murió sin haber oído el evangelio restaurado, sin haber tenido la oportunidad de recibir las ordenanzas necesarias para la exaltación. Todos ellos están en el mundo de los espíritus esperando. Todos ellos son potencialmente receptores de la enseñanza.',
            },
            {
              type: 'highlight_verse',
              id: 'v5',
              reference: '1 Pedro 4:6',
              text: 'Porque para esto también ha sido predicado el evangelio a los muertos, para que sean juzgados en carne según los hombres, pero vivan en espíritu según Dios.',
            },
            {
              type: 'paragraph',
              id: 'p17',
              text: 'DyC 138:30-34 describe el alcance de la predicación en el mundo de los espíritus: el evangelio se predica "a todos los que habían muerto en sus pecados, sin un conocimiento de la verdad, o en transgresión, después de haber rechazado a los profetas." Incluso los que rechazaron a los profetas en vida tienen la oportunidad de recibir el evangelio en el mundo de los espíritus. La pregunta de si ese rechazo posterior a la resurrección también cierra esa puerta no está completamente resuelta en las escrituras — pero la puerta está abierta, al menos inicialmente, para todos.',
            },
            {
              type: 'doctrine_box',
              id: 'db4',
              title: '¿Tienen Libre Albedrío los Espíritus?',
              content: 'Sí. La predicación del evangelio en el mundo de los espíritus no garantiza la aceptación. Los espíritus retienen su agencia exactamente como los mortales. Pueden aceptar o rechazar el evangelio cuando se les enseña. Esta es la razón por la cual el trabajo por los muertos en los templos no "salva automáticamente" a nadie: la ordenanza vicaria (el bautismo por los muertos, por ejemplo) otorga a la persona muerta la opción de aceptar o rechazar. La decisión es de ellos. Los muertos no son forzados a ningún convenio.',
            },
            {
              type: 'paragraph',
              id: 'p18',
              text: 'Heber C. Kimball vio en visión a George Albert Smith, recientemente fallecido, trabajando activamente en el mundo de los espíritus: "Apareció muy activo, enseñando a los que habían partido antes que él." Lorenzo Snow describió a su hermana que vio brevemente el otro lado: lo que más la impresionó fue la actividad — "todos están trabajando allá, igual que aquí." Los relatos de experiencias cercanas a la muerte frecuentemente incluyen impresiones similares: un reino organizado, activo, con propósito.',
            },
          ],
        },
        {
          id: 't8',
          title: 'La connexión entre el templo y la misión espiritual',
          blocks: [
            {
              type: 'paragraph',
              id: 'p19',
              text: 'La misión en el mundo de los espíritus y el trabajo de templo en el mundo mortal son inseparables. Los espíritus que aceptan el evangelio en el mundo de los espíritus no pueden recibir las ordenanzas allá — las ordenanzas son físicas por naturaleza y requieren un cuerpo. Deben ser realizadas vicariamente por personas vivas en los templos. Esto crea una relación de dependencia mutua: los muertos dependen de los vivos para las ordenanzas; los vivos dependen de los registros genealógicos para conocer los nombres de los muertos.',
            },
            {
              type: 'highlight_verse',
              id: 'v6',
              reference: 'DyC 128:15',
              text: 'Porque sin nosotros no pueden ser perfeccionados; ni tampoco podemos ser perfeccionados sin nuestros muertos; porque tiene que haber en todas las cosas un vínculo que los una.',
            },
            {
              type: 'paragraph',
              id: 'p20',
              text: 'DyC 128:18 describe esta doctrina como "las cadenas que ligan los corazones de los padres a los hijos y de los hijos a los padres." La genealogía no es un hobby interesante. Es el sistema mediante el cual la obra de salvación de los muertos se conecta con la obra en el templo. Elías, que apareció a José Smith y Oliver Cowdery en el Templo de Kirtland el 3 de abril de 1836, trajo "las llaves de este dispensación" para que la obra por los muertos pudiera comenzar formalmente. Malaquías 4:5-6 predijo ese momento.',
            },
            {
              type: 'steps',
              id: 'st1',
              title: 'El Proceso Completo de Redención de los Muertos',
              steps: [
                { step: 1, title: 'Muerte y llegada al mundo de los espíritus', description: 'La persona muere y su espíritu es recibido en el paraíso o la prisión espiritual según su estado de convenio.' },
                { step: 2, title: 'Predicación en la prisión espiritual', description: 'Misioneros espirituales (organizados según DyC 138) enseñan el evangelio a los que no lo conocieron en vida o no lo recibieron.' },
                { step: 3, title: 'Aceptación o rechazo del espíritu', description: 'El espíritu retiene su agencia y elige si acepta el evangelio enseñado. Nadie es forzado.' },
                { step: 4, title: 'Ordenanza vicaria en el templo', description: 'Un descendiente vivo o un miembro voluntario realiza el bautismo, confirmación, sacerdocio y sellamiento por el muerto en el templo.' },
                { step: 5, title: 'Aceptación o rechazo de la ordenanza', description: 'La persona muerta, en el mundo de los espíritus, puede aceptar o rechazar la ordenanza realizada en su nombre. La salvación no es automática.' },
                { step: 6, title: 'Resurrección y juicio', description: 'Cuando llegue la resurrección, cada espíritu recibe su cuerpo glorificado y enfrenta el juicio final con todas las oportunidades recibidas en cuenta.' },
              ],
            },
          ],
        },
      ],
    },
    {
      id: 's5',
      title: 'Casos Especiales — Niños, Paganos y los Sin Ley',
      intro: {
        romanNumeral: 'V',
        heading: 'La Justicia de Dios ante los que Nunca Pudieron Elegir',
        subheading: 'Cómo responde la Restauración a las preguntas más difíciles sobre la salvación',
      },
      topics: [
        {
          id: 't9',
          title: 'Los niños que mueren antes de la responsabilidad',
          blocks: [
            {
              type: 'paragraph',
              id: 'p21',
              text: 'Una de las preguntas más urgentes de la teología cristiana es: ¿qué ocurre con los niños que mueren antes de poder ejercer fe o arrepentimiento? El mundo cristiano tradicional ha dado respuestas que varían del horror (la doctrina agustiniana del limbo) al consuelo vago. La Restauración es directa: Moroni 8:12 declara que los niños pequeños que mueren están "vivos en Cristo." DyC 137:10 extiende esto: "Todos los niños que mueren antes de llegar a los años de responsabilidad son salvos en el reino celestial del cielo."',
            },
            {
              type: 'highlight_verse',
              id: 'v7',
              reference: 'DyC 137:10',
              text: 'Y también que todos los niños que mueren antes de llegar a los años de responsabilidad son salvos en el reino celestial del cielo.',
            },
            {
              type: 'paragraph',
              id: 'p22',
              text: 'Esta declaración es parte de la visión del cielo celestial que recibió José Smith el 21 de enero de 1836. No hay calificación sobre la religión de los padres, la nación, la época histórica o la raza. Los niños que mueren jóvenes — en cualquier tiempo, en cualquier lugar — son salvos en el reino más alto. El criterio de salvación para ellos no es la fe ni el arrepentimiento (que requieren comprensión moral que los niños pequeños no tienen) sino la expiación de Cristo que cubre automáticamente a quienes no tienen capacidad de comprometerse.',
            },
            {
              type: 'doctrine_box',
              id: 'db5',
              title: '¿Qué es la "Edad de Responsabilidad"?',
              content: 'DyC 68:25 establece que los niños deben ser bautizados a los ocho años. La edad de ocho años es entendida en la doctrina restaurada como el umbral de responsabilidad moral — no porque tenga magia inherente, sino porque fue revelada como la edad en que comienza la capacidad del niño para entender y ejercer arrepentimiento genuino. Moroni 8 argumenta que bautizar bebés es innecesario e incorrecto: "los pequeñitos son redimidos por medio de mí." La extensión de esta doctrina al mundo de los espíritus es que los niños no necesitan ningún trabajo de templo adicional — están cubiertos por la expiación de Cristo.',
            },
          ],
        },
        {
          id: 't10',
          title: 'Los que nunca oyeron el evangelio',
          blocks: [
            {
              type: 'paragraph',
              id: 'p23',
              text: 'La pregunta más difícil que enfrenta cualquier teología exclusivista — una que afirma que solo a través de sus ritos se obtiene la salvación — es la cuestión de los que nunca tuvieron acceso. ¿Qué ocurre con los millones de personas que vivieron y murieron en continentes que no conocían el evangelio? ¿Con los que vivieron antes de Cristo? ¿Con los que vivieron en comunidades sin acceso a misioneros? La respuesta estándar del protestantismo clásico es: "solo Dios sabe" — vaga e insatisfactoria.',
            },
            {
              type: 'paragraph',
              id: 'p24',
              text: 'La Restauración tiene una respuesta estructurada: el mundo de los espíritus. DyC 137:7-9 establece el principio en el contexto de la visión de Alvin Smith: José vio a su hermano Alvin — que murió en 1823, antes de que la Iglesia fuera organizada y antes de que existieran los convenios restaurados — en el reino celestial. Dios le explicó el principio: "Todos los que han muerto sin conocimiento de este evangelio, que lo habrían recibido si se les hubiera permitido permanecer, serán herederos del reino celestial."',
            },
            {
              type: 'highlight_verse',
              id: 'v8',
              reference: 'DyC 137:7-8',
              text: 'Todo el que haya muerto sin el conocimiento de este evangelio, que lo hubiera recibido si se le hubiera dejado permanecer, será heredero del reino celestial. Además, también todos los que mueran de ahora en adelante sin el conocimiento de él, que lo hubieran recibido con todo su corazón, serán herederos de ese reino.',
            },
            {
              type: 'paragraph',
              id: 'p25',
              text: 'El principio revelado es el contrafactual divino: Dios juzga no solo por lo que la persona eligió, sino por lo que habría elegido si hubiera tenido la oportunidad. Esto no es misericordia arbitraria — es justicia perfecta. Un Dios omnisciente conoce los corazones y las disposiciones de todos sus hijos con precisión infinita. Sabe quién, con plena información, habría elegido el evangelio. Ese conocimiento informa el juicio final. Para los que habrían rechazado incluso con plena información, el mundo de los espíritus provee la enseñanza real; para los que habrían aceptado, la expiación de Cristo cubre la brecha de la oportunidad.',
            },
            {
              type: 'compare_grid',
              id: 'cg1',
              title: 'Teologías Comparadas — ¿Qué Pasa con los que No Oyeron?',
              columns: ['Posición', 'Teología', 'Veredicto'],
              rows: [
                ['Catolicismo clásico', 'Limbo para niños, posible salvación extra-eclesial solo por "bautismo de deseo"', 'Ambiguo, se ha suavizado desde el Concilio Vaticano II'],
                ['Protestantismo calvinista', 'Predestinación: Dios eligió quién se salva independientemente de la oportunidad', 'Dios elige soberanamente; la falta de oportunidad es irrelevante'],
                ['Protestantismo inclusivista', 'Cristo salva a todos los que responden a la gracia en cualquier forma, incluso sin nombre', 'Optimista pero doctrinalmente vago'],
                ['Restauración (SUD)', 'Mundo de los espíritus: oportunidad real de oír el evangelio post-muerte; ordenanzas vicarias en el templo', 'Justo, estructurado, con agencia preservada'],
              ],
            },
          ],
        },
        {
          id: 't11',
          title: 'Los hijos de perdición — el único caso sin esperanza',
          blocks: [
            {
              type: 'paragraph',
              id: 'p26',
              text: 'Con toda la misericordia del sistema descrito — la enseñanza en el mundo de los espíritus, las ordenanzas vicarias, el juicio contrafactual — existe un grupo para quien la puerta sí está cerrada: los hijos de perdición. DyC 76:31-38 los describe como los que "habiendo conocido el poder de Dios, y habiendo sido hechos partícipes de él, y después le permitieron ser vencidos por el poder del diablo, y niegan la verdad y desafían tu poder." Son los que tuvieron pleno testimonio — incluyendo el testimonio del Espíritu Santo — y deliberadamente lo rechazaron.',
            },
            {
              type: 'highlight_verse',
              id: 'v9',
              reference: 'DyC 76:34-35',
              text: 'Pues han rehusado arrepentirse en el momento en que, siendo aún espíritus en el mundo premortal, obtuvieron un testimonio de Jesucristo; de modo que si pusiéremos ante ellos una condición de arrepentimiento, no querrían hacerlo.',
            },
            {
              type: 'paragraph',
              id: 'p27',
              text: 'La condena de los hijos de perdición no es arbitraria ni injusta — es la consecuencia de una elección perfectamente informada, sostenida, irrevocable. No es que Dios les cierra la puerta; es que ellos mismos, con plena comprensión, eligieron cerrarla. José Smith enseñó que "casi nadie" llega a este estado — que el bar de conocimiento y deliberación requerido es tan alto que los comunes pecadores, incluso los más viles, no califican. La perdición requiere haber recibido el pleno testimonio del Espíritu Santo y después elegir deliberadamente el mal.',
            },
          ],
        },
      ],
    },
    {
      id: 's6',
      title: 'Testimonios Modernos — El Velo que se Adelgaza',
      intro: {
        romanNumeral: 'VI',
        heading: 'Revelaciones, Visiones y Relatos de los Profetas',
        subheading: 'El peso del testimonio sobre el mundo de los espíritus en la era de la Restauración',
      },
      topics: [
        {
          id: 't12',
          title: 'Las enseñanzas directas de José Smith',
          blocks: [
            {
              type: 'paragraph',
              id: 'p28',
              text: 'José Smith habló extensamente sobre el mundo de los espíritus, especialmente en el contexto de muertes en la comunidad primitiva. Cuando murió su amigo James Adams en agosto de 1843, José dijo en el discurso funerario: "El espíritu de Adams... no está muerto — sino que ha ido a ese mundo de espíritus que está aquí en la tierra... El espíritu, la mente del hombre — ¿a dónde va? Se aleja a ese mundo donde los espíritus de los muertos viven, y donde conversan juntos, lo mismo que nosotros aquí en la carne." La imagen es de continuidad, no de ruptura.',
            },
            {
              type: 'leader_quote',
              id: 'lq1',
              quote: 'Los espíritus de los justos están exaltados a un lugar de mayor felicidad y paz cuando mueren... Los que han muerto en la fe están felices; y los que están felices, [están] más en el gozo ahora que lo que estaban antes de morir.',
              attribution: 'José Smith, Diario de Andrew Ehat y Lyndon Cook, p. 196',
            },
            {
              type: 'paragraph',
              id: 'p29',
              text: 'José también enseñó que los ángeles que ministran frecuentemente son familiares — personas que conocemos que han fallecido y han sido comisionadas para servir. "Cuando el velo se quita del ojo de nuestra mente y vemos la realidad de las cosas, descubrimos que los ángeles son a menudo personas que hemos amado y que nos han amado." Esta enseñanza conecta el mundo de los espíritus con la experiencia cotidiana de las personas que reciben ayuda espiritual.',
            },
            {
              type: 'paragraph',
              id: 'p30',
              text: 'La visión del cielo celestial (DyC 137) establece que José Smith vio a su padre y su madre en visión. También vio a su hermano Alvin, muerto en 1823, "en el reino celestial de Dios." Este fue el detonante de la revelación sobre los que "habrían recibido el evangelio si hubieran podido permanecer." La teología no emergió de la especulación — emergió del consuelo de una familia devastada por la pérdida de un hijo.',
            },
          ],
        },
        {
          id: 't13',
          title: 'Brigham Young, Lorenzo Snow y los testimonios apostólicos',
          blocks: [
            {
              type: 'paragraph',
              id: 'p31',
              text: 'Brigham Young fue explícito sobre la geografía del mundo de los espíritus: "¿Dónde está el espíritu de un hombre cuando el cuerpo muere? ¿Adónde va? Viene aquí — a esta misma tierra. El espíritu de los muertos permanece en este mundo." Esta afirmación — que el mundo de los espíritus no está en una dimensión lejana sino superpuesto a este mismo mundo — es consistente con la experiencia de quienes reportan ver o sentir la presencia de los muertos en los mismos lugares donde vivieron.',
            },
            {
              type: 'leader_quote',
              id: 'lq2',
              quote: '¿Creéis que los espíritus de los muertos están separados de nosotros? Hay simplemente un velo entre ellos y nosotros... Nuestros difuntos están aquí. Son más numerosos que nosotros.',
              attribution: 'Brigham Young, Diario de Discursos 3:369',
            },
            {
              type: 'paragraph',
              id: 'p32',
              text: 'Lorenzo Snow tuvo una experiencia en el Templo de Salt Lake que involucró a su hermana Eliza R. Snow — que había muerto — que se le apareció con un mensaje de consuelo y dirección. Esta experiencia fue privada durante mucho tiempo pero fue posteriormente relatada por su nieta. Wilford Woodruff reportó múltiples visitas de los Padres Fundadores de los Estados Unidos, pidiéndole que realizara su trabajo de templo — que había sido neglected por la Iglesia. Este evento motivó directamente el trabajo por los muertos de figuras históricas.',
            },
            {
              type: 'paragraph',
              id: 'p33',
              text: 'Spencer W. Kimball, en "Las Maravillas de Dios para Sus Hijos," describió que los espíritus en el mundo de los espíritus son capaces de "ver y conocer los pensamientos y actos de los que están en esta tierra mortal." Esto sugiere que el velo, aunque opaco desde este lado, puede ser más transparente desde el otro. Los muertos pueden conocer mejor nuestra situación que nosotros la suya.',
            },
          ],
        },
        {
          id: 't14',
          title: 'La preparación que comienza ahora',
          blocks: [
            {
              type: 'paragraph',
              id: 'p34',
              text: 'La doctrina del mundo de los espíritus no es solo teología abstracta. Tiene implicaciones prácticas directas. Si el carácter que llevamos a la muerte es el carácter con que habitamos el mundo de los espíritus, entonces la preparación para ese reino comienza hoy. Los hábitos de estudio, de oración, de servicio, de arrepentimiento que cultivamos ahora son exactamente los hábitos que llevamos al otro lado. Un hombre que no ha desarrollado la capacidad de recibir impresiones espirituales en esta vida difícilmente las desarrollará fácilmente en la siguiente.',
            },
            {
              type: 'paragraph',
              id: 'p35',
              text: 'Amulek dice en Alma 34:32-34: "Este mundo es el tiempo del hombre para prepararse para la eternidad." No dice que sea el único tiempo — el mundo de los espíritus ofrece continuación del aprendizaje. Pero dice que es el tiempo. La urgencia del arrepentimiento en esta vida no proviene de que sea imposible cambiar después — proviene de que los cambios más fundamentales del carácter son más difíciles cuando los patrones están profundamente establecidos. La vida mortal es el período de mayor flexibilidad espiritual.',
            },
            {
              type: 'paragraph',
              id: 'p36',
              text: 'El trabajo de templo por los muertos no es opcional para los miembros que entienden la doctrina. DyC 128:15 es explícito: "sin nosotros no pueden ser perfeccionados; ni tampoco podemos ser perfeccionados sin nuestros muertos." La salvación es un proyecto comunitario que une generaciones a través del velo. Las familias que realizan investigación genealógica y trabajo de templo están literalmente completando la obra de salvación para sus antepasados que esperan en el mundo de los espíritus. Este es uno de los propósitos centrales de la Restauración.',
            },
            {
              type: 'reflection',
              id: 'r2',
              prompt: '¿Cómo cambia tu actitud hacia el trabajo de templo saber que hay personas específicas — tus antepasados — que pueden estar esperando activamente en el mundo de los espíritus, habiendo aceptado el evangelio cuando se les enseñó, esperando que alguien de tu familia complete su ordenanza vicaria? ¿Hay nombres en tu árbol genealógico que todavía no han recibido ese trabajo?',
            },
            {
              type: 'deep_dive',
              id: 'dd1',
              title: 'La Pregunta que No Tiene Respuesta Completa: ¿Cuánto Tiempo Se Pasa Ahí?',
              content: 'Nadie sabe con certeza cuánto tiempo — en términos de experiencia subjetiva — pasan los espíritus en el mundo de los espíritus. La resurrección de los justos ocurre al inicio del Milenio; la resurrección del resto ocurre al final del Milenio (DyC 76:64-65, 76:85). Eso significa que los que mueren hoy y son relativamente justos esperarán — en algún sentido — hasta el comienzo del Milenio. Los que son menos justos esperarán hasta el final. Pero si el tiempo funciona de manera diferente en ese reino, mil años de espera pueden sentirse de manera muy diferente. Las escrituras no resuelven esto. Sí establecen que el mundo de los espíritus no es un lugar de aburrimiento — es un lugar de actividad, aprendizaje y misión.',
            },
          ],
        },
      ],
    },
    {
      id: 's7',
      title: 'Resurrección — El Final del Mundo de los Espíritus',
      intro: {
        romanNumeral: 'VII',
        heading: 'Cuando el Velo Se Rompe para Siempre',
        subheading: 'La resurrección como culminación — no inicio — del plan de salvación',
      },
      topics: [
        {
          id: 't15',
          title: 'La resurrección termina el mundo de los espíritus para cada persona',
          blocks: [
            {
              type: 'paragraph',
              id: 'p37',
              text: 'El mundo de los espíritus es un estado temporal. Termina, para cada individuo, en la resurrección. Cristo fue el primero en resucitar (1 Corintios 15:20) y muchos espíritus justos resucitaron con él (Mateo 27:52-53, DyC 133:54-55). La primera resurrección — la resurrección de los justos — ocurre al comienzo del Milenio. La segunda resurrección ocurre al final del Milenio. Entre estas dos resurrecciones están los que heredarán el reino telestial y los hijos de perdición.',
            },
            {
              type: 'highlight_verse',
              id: 'v10',
              reference: 'Alma 11:43-44',
              text: 'El espíritu y el cuerpo serán reunidos de nuevo en su forma perfecta; así como una coyuntura, un hueso, un cabello de la cabeza no se perderá; sino que todo se restaurará a su perfecta forma, así como es ahora o en el cuerpo, y es traído y congregado en presencia de Dios.',
            },
            {
              type: 'paragraph',
              id: 'p38',
              text: 'La reunión del espíritu con un cuerpo glorificado no es el regreso a la mortalidad — es la elevación del espíritu a una condición de perfección que la mortalidad solo puede intuir. DyC 88:28-32 describe que el cuerpo resucitado es "espiritual y mortal" a la vez — no perecerá, no se enferma, no tiene limitaciones mortales. La forma de la resurrección — telestial, terrestre o celestial — corresponde al grado de gloria que la persona heredará. El espíritu que habitó el mundo de los espíritus durante años o milenios, finalmente, recibe su cuerpo y su destino eterno.',
            },
            {
              type: 'paragraph',
              id: 'p39',
              text: 'El mundo de los espíritus, entonces, no es el destino — es el camino. Es la sala de preparación, de enseñanza, de espera, de oportunidad adicional. La Restauración lo presenta no como un lugar de miedo sino como un lugar de continuación — de la identidad, de las relaciones, del aprendizaje, de la misión. Para los que han vivido fielmente, es "un estado de descanso, un estado de paz" (Alma 40:12). Para los que aún tienen aprendizaje pendiente, es un lugar donde ese aprendizaje puede ocurrir.',
            },
            {
              type: 'key_points',
              id: 'kp2',
              title: 'Resumen Doctrinal — El Mundo de los Espíritus',
              points: [
                'ES REAL: No es metáfora. Es un estado literal de existencia para espíritus reales, con conciencia, memoria e identidad continuada.',
                'ES TEMPORAL: Termina con la resurrección. Nadie permanece ahí para siempre.',
                'ES JUSTO: Los que nunca oyeron el evangelio tienen oportunidad real de oírlo y aceptarlo.',
                'REQUIERE AGENCIA: Nadie es forzado a aceptar el evangelio en el mundo de los espíritus. La decisión es libre.',
                'CONECTA CON EL TEMPLO: La obra vicaria en los templos provee las ordenanzas necesarias para los que aceptan el evangelio en el mundo de los espíritus.',
                'ES ACTIVO: No es un estado de latencia o sueño. Es un reino de aprendizaje, misión y preparación.',
                'PRESERVA EL CARÁCTER: El yo que entra al mundo de los espíritus es el mismo yo que salió del mundo mortal — para bien o para mal.',
              ],
            },
            {
              type: 'reflection',
              id: 'r3',
              prompt: '¿Qué te produce más consuelo de esta doctrina — que los que has amado y perdido siguen siendo ellos mismos, que hay oportunidad para los que murieron sin el evangelio, o que el tiempo en ese reino no es oscuro sino activo y con propósito? ¿Hay algo en la doctrina que todavía te resulta difícil de reconciliar?',
            },
          ],
        },
      ],
    },
  ],
}
