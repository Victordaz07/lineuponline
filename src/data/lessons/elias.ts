import type { Lesson } from '@/types/doctrine'

export const elias: Lesson = {
  id: 'elias',
  moduleId: 'personajes-escrituras',
  title: 'Elías — El Fuego del Cielo y la Segunda Venida',
  subtitle: 'El profeta que regresó en el Templo de Kirtland',
  description: 'Elías convocó fuego del cielo, derrotó a 450 profetas de Baal, y luego huyó de una mujer asustado. DyC 110 registra su aparición en Kirtland en 1836. Malaquías 4:5-6 lo promete para los últimos días.',
  level: 'AVANZADO',
  icon: '⚡',
  duration: 75,
  order: 41,
  status: 'PUBLISHED',
  studyBodyPlain: '',
  originalBodyPlain: '',
  studySections: [
    {
      id: 's1',
      title: 'Elías vs. 450 Profetas de Baal',
      intro: { romanNumeral: 'I', heading: 'El Monte Carmelo — El Gran Duelo', subheading: '1 Reyes 18 — el momento más dramático del AT' },
      topics: [
        {
          id: 't1',
          title: 'La apuesta más arriesgada de la historia',
          blocks: [
            { type: 'paragraph', id: 'p1', text: 'En 1 Reyes 18, Elías desafía a 450 profetas de Baal a un duelo público: el dios que responde con fuego es el verdadero Dios. Los profetas de Baal pasaron toda la mañana gritando, danzando y cortándose — sin respuesta. Elías, con humor sarcástico, sugirió que quizás su dios estaba dormido o en viaje. Luego empapó su propio altar con agua tres veces — haciendo más difícil el milagro deliberadamente — y oró brevemente. Cayó fuego del cielo que consumió el holocausto, la leña, las piedras, el polvo y el agua.' },
            { type: 'highlight_verse', id: 'v1', reference: '1 Reyes 18:36-37', text: 'Acercóse entonces Elías a todos y dijo: Señor Dios de Abraham, de Isaac y de Israel, sea hoy manifiesto que tú eres Dios en Israel, y que yo soy tu siervo, y que por mandato tuyo he hecho todas estas cosas. Respóndeme, Jehová, respóndeme, para que conozca este pueblo que tú, oh Jehová, eres el Dios.' },
          ],
        },
      ],
    },
    {
      id: 's2',
      title: 'El Profeta que Huyó',
      intro: { romanNumeral: 'II', heading: 'La Depresión del Hombre más Valiente', subheading: '1 Reyes 19 — la humanidad detrás del milagro' },
      topics: [
        {
          id: 't2',
          title: 'De la victoria al colapso en 24 horas',
          blocks: [
            { type: 'highlight_verse', id: 'v2', reference: '1 Reyes 19:4', text: 'Y él se fue por el desierto un día de camino, y vino y se sentó debajo de un enebro; y deseando morirse, dijo: Basta ya, oh Jehová, quítame la vida, pues no soy yo mejor que mis padres.' },
            { type: 'paragraph', id: 'p2', text: 'El día después de su mayor triunfo, Elías quería morir. La reina Jezabel lo amenazó y huyó. Este pasaje es uno de los más honestos de toda la Biblia sobre la psicología del profeta: el agotamiento emocional que sigue a la crisis espiritual intensa. La respuesta de Dios no fue un sermón — fue comida y descanso. "Levántate y come, porque largo camino te resta." El ángel le dio de comer dos veces antes de pedirle algo.' },
            { type: 'doctrine_box', id: 'db1', title: 'La Voz Apacible y Delicada', content: '1 Reyes 19:11-12: Dios pasó. Vino un gran viento, un terremoto, y fuego — y Dios no estaba en ninguno de ellos. Después del fuego vino una "voz apacible y delicada" (en hebreo: qol demamah daqah — literalmente "la voz del silencio fino"). Elías, que acababa de ver el fuego del cielo, encontró a Dios en el susurro. Esta es la lección más profunda de su historia: los grandes milagros demuestran poder, pero Dios habla en el silencio.' },
          ],
        },
      ],
    },
    {
      id: 's3',
      title: 'Elías en la Transfiguración y en Kirtland',
      intro: { romanNumeral: 'III', heading: 'El Profeta que Nunca Murió', subheading: 'Apariciones que definen la historia' },
      topics: [
        {
          id: 't3',
          title: 'La confusión entre Elías y "Elias"',
          blocks: [
            { type: 'paragraph', id: 'p3', text: 'Uno de los puntos más complicados de la doctrina de la Restauración: DyC 110 distingue entre "Elías" (un mensajero que restauró el evangelio de Abraham, posiblemente Noé/Gabriel) y "Elías" el profeta del Carmelo. La Restauración usa "Elías" también como un título de oficio — el que prepara el camino. En Mateo 17 (la Transfiguración), es el Elías histórico del Carmelo quien aparece junto a Moisés para confirmar la autoridad de Cristo.' },
            { type: 'highlight_verse', id: 'v3', reference: 'DyC 110:13-16', text: 'Después de este, Elías apareció y dijo: He aquí, se ha cumplido el tiempo, según lo que fue dicho por boca de Malaquías, el cual testificó que él sería enviado antes que llegue el día grande y terrible del Señor... para volver el corazón de los padres a los hijos y el corazón de los hijos a los padres, no sea que toda la tierra sea herida con maldición.' },
            { type: 'paragraph', id: 'p4', text: 'El 3 de abril de 1836 en el Templo de Kirtland, Elías apareció a José Smith y Oliver Cowdery y les confirió "las llaves de la dispensación del evangelio de Abraham". Esta aparición restauró la autoridad de los sellamientos —la capacidad de unir familias por la eternidad — que se había perdido durante la apostasía.' },
          ],
        },
      ],
    },
    {
      id: 's4',
      title: 'Malaquías 4 — La Promesa Pendiente',
      intro: { romanNumeral: 'IV', heading: 'Volver el Corazón de los Padres', subheading: 'La misión que define los últimos días' },
      topics: [
        {
          id: 't4',
          title: 'La genealogía como obra de salvación',
          blocks: [
            { type: 'highlight_verse', id: 'v4', reference: 'Malaquías 4:5-6', text: 'He aquí, yo os envío el profeta Elías, antes que venga el día de Jehová, grande y terrible. Él hará volver el corazón de los padres hacia los hijos, y el corazón de los hijos hacia los padres, no sea que yo venga y hiera la tierra con maldición.' },
            { type: 'paragraph', id: 'p5', text: 'Este es el único versículo que aparece en los cuatro cánones de la Restauración: la Biblia, el Libro de Mormón (3 Nefi 25:5-6), DyC 2, y JS-H 1:38-39. Moroni lo citó a José Smith en 1823. La promesa de Elías es inseparable del trabajo de salvación por los muertos: volver el corazón de los hijos hacia sus padres es hacer el trabajo del templo para los antepasados que no pudieron recibirlo en vida.' },
            { type: 'reflection', id: 'r1', prompt: '¿Has sentido el "corazón vuelto hacia tus padres" al explorar tu genealogía o al ir al templo? ¿Qué nombres de antepasados llevas en tu corazón hoy?' },
          ],
        },
      ],
    },
  ],
}
