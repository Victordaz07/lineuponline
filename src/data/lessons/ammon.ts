import type { Lesson } from '@/types/doctrine'

export const ammon: Lesson = {
  id: 'ammon',
  moduleId: 'personajes-escrituras',
  title: 'Ammón — El Misionero que Cortó Brazos',
  subtitle: 'Amor por los lamanitas, armas fuera, corazones abiertos',
  description: 'Ammón era príncipe nefita. Eligió ir a los lamanitas — los enemigos de su pueblo — como misionero. Se hizo sirviente del rey. Cortó los brazos de los ladrones que atacaron los rebaños del rey. Y esa demostración de poder abrió el corazón del rey Lamoni para recibir el evangelio. Es la misión más dramática del Libro de Mormón.',
  level: 'INTERMEDIO',
  icon: '🛡️',
  duration: 55,
  order: 73,
  status: 'PUBLISHED',
  studyBodyPlain: '',
  originalBodyPlain: '',
  studySections: [
    {
      id: 's1',
      title: 'La Elección del Servicio',
      intro: { romanNumeral: 'I', title: 'Alma 17 — "Iré al Rey Lamoni"', paragraphs: ['Un príncipe que eligió ser siervo'] },
      topics: [
        {
          id: 't1',
          title: 'El método misionero de Ammón',
          blocks: [
            { type: 'paragraph', text: 'Cuando los hijos de Mosíah llegaron a la tierra de los lamanitas, el rey les preguntó qué querían. Alma 17:24-25: Ammón dijo que quería vivir entre ellos "quizá hasta el día de mi muerte." El rey le ofreció una de sus hijas como esposa. Ammón declinó y pidió ser su siervo. Fue asignado a cuidar los rebaños. La estrategia misionera no fue empezar con doctrina — fue empezar con servicio.' },
            { type: 'doctrine_box', title: 'El Servicio como Lenguaje del Amor', body: 'Alma 17:29 explica el pensamiento de Ammón: "Y pensó esto en su corazón: Iré a él con mi poder, y le mostraré el poder que hay en mí." No el poder de las armas ni de la elocuencia — el poder del servicio fiel. Cuando el rey Lamoni preguntó más tarde por qué Ammón no quería recompensa, Ammón respondió que lo único que quería era que el rey escuchara las palabras de Cristo (Alma 18:23). El servicio desinteresado abrió la puerta que la predicación sola no hubiera abierto.' },
          ],
        },
      ],
    },
    {
      id: 's2',
      title: 'Los Brazos en el Tesoro',
      intro: { romanNumeral: 'II', title: 'Alma 17:36-39 — El Aguaje de Sebus', paragraphs: ['Fuerza al servicio del amor'] },
      topics: [
        {
          id: 't2',
          title: 'La defensa de los rebaños del rey',
          blocks: [
            { type: 'highlight_verse', reference: 'Alma 18:3', text: 'Y le dijeron que Amón se podía conocer fácilmente que era un gran espíritu, y así, siendo fiel, no sería muerto; y si fuera gran espíritu, lo dejarían ir preso; pero no osaría matarlo. Y así fue que Ammón resistió y mató a muchos de ellos con la espada; y a otros los golpeó con el cayado de su honda. Y es así como su poder fue manifestado.' },
            { type: 'paragraph', text: 'Cuando los ladrones intentaron dispersar los rebaños del rey, los sirvientes estaban aterrorizados — había precedentes de muerte para quien perdía los rebaños. Ammón ordenó a los sirvientes que reunieran los rebaños mientras él defendía la entrada al aguaje. Cortó los brazos de los que levantaron las espadas contra él. Los brazos fueron presentados al rey. El rey Lamoni quedó asombrado — y preguntó quién era este hombre.' },
          ],
        },
      ],
    },
    {
      id: 's3',
      title: 'La Conversión del Rey Lamoni',
      intro: { romanNumeral: 'III', title: 'Alma 18-19 — El Corazón del Rey', paragraphs: ['La preparación que precedió a la revelación'] },
      topics: [
        {
          id: 't3',
          title: 'De pregunta en pregunta hasta la fe',
          blocks: [
            { type: 'paragraph', text: 'El diálogo entre Ammón y el rey Lamoni en Alma 18 es uno de los más ricos del Libro de Mormón pedagógicamente. Ammón comenzó preguntando: "¿Crees tú que hay un Dios?" El rey dijo no saber — pero quería saber. Ammón respondió: "Bienaventurado eres porque de tal fe, traeré el gozo al corazón de mi hermano." Y le enseñó desde la creación hasta la redención. El rey creyó y cayó "como si estuviera muerto" — superado por el Espíritu.' },
          ],
        },
      ],
    },
    {
      id: 's4',
      title: 'El Gozo Desbordante',
      intro: { romanNumeral: 'IV', title: 'Alma 26 — El Cántico de Ammón', paragraphs: ['El regocijo que escandalizó a su hermano'] },
      topics: [
        {
          id: 't4',
          title: '"¿No Tenemos Gran Motivo de Gozarnos?"',
          blocks: [
            { type: 'highlight_verse', reference: 'Alma 26:11-12', text: 'Pero Ammón respondió: No me glorío en mi propia fortaleza, ni en mi propia sabiduría; mas he aquí, mi gozo es pleno, sí, mi corazón rebosa de gozo, y me regocijaré en mi Dios. Sí, sé que no soy nada; en cuanto a mi fortaleza yo soy débil; por tanto no me gloriaré en mí mismo, sino que me gloriaré en mi Dios.' },
            { type: 'paragraph', text: 'Cuando Ammón expresó su gozo, su hermano Aarón lo reprendió: "Temo que tu gozo te lleve a la jactancia." Ammón respondió con una de las declaraciones más claras del Libro de Mormón sobre la gracia y el ministerio: no se gloría en sí mismo sino en Dios. Todo lo que logró fue por el poder de Cristo que obraba a través de él. El gozo no era orgullo — era gratitud desbordante por haber sido instrumento en manos de Dios.' },
            { type: 'reflection', prompt: '¿Hay alguien en tu vida — un "lamanita," alguien que consideras improbable para el evangelio, quizás incluso un enemigo histórico o cultural — a quien Dios te podría estar llamando a servir en lugar de predicarle directamente? ¿Cómo cambiaría tu enfoque?' },
          ],
        },
      ],
    },
  ],
}
