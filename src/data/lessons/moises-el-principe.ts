import type { Lesson } from '@/types/doctrine'

export const moisesElPrincipe: Lesson = {
  id: 'moises-el-principe',
  moduleId: 'personajes-escrituras',
  title: 'Moisés — El Príncipe y el Esclavo',
  subtitle: 'Un hombre formado por dos mundos en conflicto',
  description: 'Criado como príncipe en el palacio más poderoso del mundo, nacido como hijo de esclavos hebreos. La crisis de identidad que llevó a Moisés del palacio al desierto — y del desierto a la misión más grande de su vida.',
  level: 'INTERMEDIO',
  icon: '🏛️',
  duration: 30,
  order: 3510,
  status: 'PUBLISHED',
  studyBodyPlain: '',
  originalBodyPlain: '',
  submoduleGroup: 'moises',
  studySections: [
    {
      id: 's1',
      title: 'El niño que los dos mundos reclamaban',
      intro: {
        romanNumeral: 'I',
        title: 'La Providencia en la Canasta',
        paragraphs: [
          'Dios usó el sistema de opresión de Egipto para criar al propio libertador de Israel dentro de ese sistema.',
        ],
      },
      topics: [
        {
          id: 't1',
          title: 'Criado en el palacio, nacido en la esclavitud',
          blocks: [
            {
              type: 'paragraph',
              text: 'Moisés nació en el momento más peligroso de la historia de Israel en Egipto: el Faraón había decretado que todo varón hebreo recién nacido fuera arrojado al Nilo (Éxodo 1:22). Su madre Jocabed lo escondió durante tres meses, y cuando ya no pudo ocultarlo, tejió una canasta de juncos, la calafateó con brea, y la colocó entre los carrizos del río. La hija del Faraón lo encontró, lo adoptó, y el niño hebreo fue criado como príncipe en la misma corte que ordenó su muerte.',
            },
            {
              type: 'highlight_verse',
              reference: 'Hechos 7:22',
              text: 'Y fue enseñado Moisés en toda la sabiduría de los egipcios, y era poderoso en sus palabras y obras.',
            },
            {
              type: 'paragraph',
              text: 'Esteban, al resumir la vida de Moisés ante el Sanedrín, destaca que fue educado en "toda la sabiduría de los egipcios." Esto significa que Moisés dominó la escritura jeroglífica, la arquitectura del poder faraónico, los protocolos diplomáticos, los sistemas de gobierno, el idioma, la religión oficial de Egipto — todo el arsenal intelectual y político del mundo más avanzado de su época. Esta educación no fue accidental: era exactamente lo que necesitaría para negociar con el Faraón.',
            },
            {
              type: 'doctrine_box',
              title: 'La Providencia en el Palacio',
              body: 'Este patrón — donde Dios coloca a Sus siervos en el corazón del poder enemigo para prepararlos — se repite en toda la escritura: José en Egipto, Daniel en Babilonia, Ester en la corte persa. El perseguidor involuntariamente entrena a su propio adversario. Dios trabaja dentro de los sistemas que se oponen a Su pueblo, preparando agentes que conocen ese sistema desde adentro.',
            },
          ],
        },
        {
          id: 't2',
          title: 'La doble identidad que lo desgarraba',
          blocks: [
            {
              type: 'paragraph',
              text: 'La madre de Moisés, gracias a la intervención providencial de Miriam su hermana, fue contratada como nodriza del propio niño que había dado a luz (Éxodo 2:7-9). Esto significa que durante los primeros años de vida — los más formativos — Jocabed pudo enseñarle a Moisés su identidad real: que era hebreo, que era del pueblo de Dios, que el Señor de sus padres no era Ra ni Osiris sino el Dios de Abraham, Isaac y Jacob. El niño que era príncipe de Egipto sabía en su corazón que era hijo de Israel.',
            },
            {
              type: 'key_points',
              title: 'La doble formación de Moisés',
              points: [
                'Educación real egipcia: escritura, diplomacia, arquitectura, gobierno, religión',
                'Educación hebrea materna: identidad, historia de los patriarcas, fe en YHWH',
                'Dos idiomas, dos culturas, dos nombres (hebreo y egipcio)',
                'Esta tensión lo haría capaz de hablar a dos pueblos al mismo tiempo',
                'Hechos 7:25 sugiere que Moisés sabía desde joven que Dios lo usaría para liberar a Israel',
              ],
            },
          ],
        },
      ],
    },
    {
      id: 's2',
      title: 'El asesinato y la huida',
      intro: {
        romanNumeral: 'II',
        title: 'Éxodo 2 — El Fin del Palacio',
        paragraphs: [
          'Un acto de justicia mal ejecutado destruyó cuarenta años de preparación. O los preparó de otra manera.',
        ],
      },
      topics: [
        {
          id: 't3',
          title: 'La crisis de los cuarenta años',
          blocks: [
            {
              type: 'paragraph',
              text: 'Hechos 7:23 especifica que Moisés tenía cuarenta años cuando salió a "ver a sus hermanos" — los esclavos hebreos. Al encontrar a un capataz egipcio golpeando a un hebreo, "miró a todas partes, y viendo que no había nadie, mató al egipcio y lo escondió en la arena" (Éxodo 2:12). No fue un impulso momentáneo: fue un acto deliberado. Esteban lo interpreta en Hechos 7:25 como que Moisés pensó que "sus hermanos comprenderían que Dios les daría liberación por medio de él." No lo entendieron.',
            },
            {
              type: 'highlight_verse',
              reference: 'Éxodo 2:14',
              text: '¿Y quién te ha puesto a ti por príncipe y juez sobre nosotros? ¿Piensas matarme como mataste al egipcio? Entonces Moisés tuvo miedo, y dijo: Ciertamente esto ha sido descubierto.',
            },
            {
              type: 'paragraph',
              text: 'El rechazo vino de su propio pueblo — no de los egipcios. Un hebreo lo delató. Esta es la primera vez que Israel rechaza a Moisés; no será la última. El Faraón ordenó su ejecución y Moisés huyó a Madián. A los cuarenta años, perdió todo: el palacio, el título, el ejército, los sirvientes, la posición, la seguridad. Tenía que empezar desde cero — pastor de ovejas en el desierto.',
            },
            {
              type: 'reflection',
              prompt: '¿Has experimentado una situación donde un intento de hacer el bien fue malinterpretado o rechazado por las mismas personas a quienes querías ayudar? ¿Cómo respondiste a ese rechazo?',
            },
          ],
        },
      ],
    },
    {
      id: 's3',
      title: '40 años en el desierto de Madián',
      intro: {
        romanNumeral: 'III',
        title: 'La Escuela de Dios es el Desierto',
        paragraphs: [
          'De príncipe a pastor. De la corte faraónica a las colinas de Madián. Esta fue la preparación real.',
        ],
      },
      topics: [
        {
          id: 't4',
          title: 'Jetro y los cuarenta años olvidados',
          blocks: [
            {
              type: 'paragraph',
              text: 'En Madián, Moisés conoció al sacerdote Jetro (también llamado Reuel), se casó con su hija Séfora, y pasó cuarenta años cuidando el rebaño de su suegro. Hechos 7:30 confirma "cuando se cumplieron cuarenta años." De los 120 años de vida de Moisés, la Biblia cubre con detalle los primeros cuarenta (palacio) y los últimos cuarenta (Éxodo-Deuteronomio); los cuarenta años en Madián se resumen en unas pocas líneas. Sin embargo, fue durante esos años silenciosos donde Moisés aprendió a sobrevivir en el desierto — habilidad crítica para guiar a Israel durante cuarenta años más.',
            },
            {
              type: 'deep_dive',
              title: 'Lo que el desierto enseñó',
              paragraphs: [
                'El desierto de Madián no era un lugar de castigo divino sino una escuela de humildad y habilidad práctica. Moisés aprendió a leer el terreno árido, a encontrar agua, a guiar rebaños por rutas peligrosas — todo lo que necesitaría para guiar a dos millones de israelitas por el mismo tipo de terrain.',
                'Jetro, el sacerdote de Madián, también le enseñó principios de gobierno y delegación (ver Éxodo 18) que Moisés aplicaría para organizar a Israel. Dios preparó a Moisés no solo con visiones sino con décadas de trabajo ordinario y aprendizaje de un suegro sabio.',
                'La tradición rabínica enseña que el desierto también rompió en Moisés la arrogancia de la educación real. Nadie piensa que es el más grande del mundo cuando cuida ovejas cuarenta años. Números 12:3 lo describe como "el hombre más humilde sobre la faz de la tierra" — esa humildad la forjó el desierto.',
              ],
            },
          ],
        },
      ],
    },
    {
      id: 's4',
      title: 'La zarza ardiente y el llamado que rechazó primero',
      intro: {
        romanNumeral: 'IV',
        title: 'Éxodo 3-4 — El Dios que Llama a los que Sienten que No Pueden',
        paragraphs: [
          '"¿Quién soy yo para ir a Faraón?" — la pregunta más importante que Moisés jamás hizo.',
        ],
      },
      topics: [
        {
          id: 't5',
          title: 'El hombre que presentó cinco excusas',
          blocks: [
            {
              type: 'highlight_verse',
              reference: 'Éxodo 3:11',
              text: '¿Quién soy yo para que vaya a Faraón, y saque de Egipto a los hijos de Israel?',
            },
            {
              type: 'paragraph',
              text: 'La respuesta de Moisés al llamado divino desde la zarza es una de las más honestas de toda la escritura. No fingió humildad — genuinamente no se sentía capaz. En los capítulos 3 y 4 del Éxodo, presenta cinco objeciones distintas: "¿Quién soy yo?" (3:11), "¿Cuál es su nombre?" (3:13), "¿Y si no me creen?" (4:1), "Nunca he sido hábil en el habla" (4:10), y finalmente: "Envía, te ruego, por medio de quien debes enviar" — es decir, manda a cualquier otro (4:13). Solo entonces Dios le dio a Aarón como portavoz.',
            },
            {
              type: 'timeline',
              items: [
                { label: '0 años', text: 'Nacimiento en Gosén — decreto de muerte del Faraón', ref: 'Éxodo 1-2', color: 'blue' },
                { label: '40 años', text: 'Mata al capataz egipcio — huye a Madián', ref: 'Éxodo 2:12', color: 'red' },
                { label: '80 años', text: 'La zarza ardiente — el llamado divino', ref: 'Éxodo 3', color: 'gold' },
                { label: '120 años', text: 'Muerte en el monte Nebo — ve la Tierra Prometida', ref: 'Deuteronomio 34', color: 'green' },
              ],
            },
            {
              type: 'doctrine_box',
              title: 'La Respuesta de Dios a "¿Quién soy yo?"',
              body: 'La respuesta de Dios a "¿Quién soy yo?" no fue una lista de credenciales de Moisés. Fue simplemente: "Yo estaré contigo" (Éxodo 3:12). Dios no llama porque el llamado sea calificado — llama porque Dios es suficiente. La pregunta correcta no es "¿Soy yo capaz?" sino "¿Es Dios fiel?" Esta lección define toda la teología del llamado divino desde Abraham hasta José Smith.',
            },
          ],
        },
      ],
    },
  ],
}
