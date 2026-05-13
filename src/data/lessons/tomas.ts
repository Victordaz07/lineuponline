import type { Lesson } from '@/types/doctrine'

export const tomas: Lesson = {
  id: 'tomas',
  moduleId: 'personajes-escrituras',
  title: 'Tomás — El Discípulo que Necesitaba Ver',
  subtitle: 'La duda más honesta de los Evangelios',
  description: 'Tomás no estaba cuando Jesús apareció a los once. Dijo que no creería sin ver las heridas. Y cuando Cristo se lo ofreció, su respuesta fue la confesión de fe más alta del Nuevo Testamento. "Señor mío y Dios mío." La duda no fue el fin de su fe sino el camino hacia una fe más profunda.',
  level: 'INTERMEDIO',
  icon: '👁️',
  duration: 50,
  order: 54,
  status: 'PUBLISHED',
  studyBodyPlain: '',
  originalBodyPlain: '',
  studySections: [
    {
      id: 's1',
      title: 'Tomás Antes de la Resurrección',
      intro: { romanNumeral: 'I', heading: 'El Discípulo que Amaba y Seguía', subheading: 'No solo el que dudó' },
      topics: [
        {
          id: 't1',
          title: 'El Tomás que los Evangelios no recuerdan',
          blocks: [
            { type: 'paragraph', id: 'p1', text: 'Tomás aparece en tres episodios antes de la crucifixión. En Juan 11:16, cuando Jesús decide ir a Judea pese al peligro, Tomás dice a los otros discípulos: "Vamos también nosotros, para que muramos con él." No es duda — es valentía. En Juan 14:5, cuando Jesús habla del camino al Padre, Tomás pregunta honestamente: "Señor, no sabemos a dónde vas; ¿cómo, pues, podemos saber el camino?" Esta pregunta motivó la respuesta "Yo soy el camino, la verdad y la vida."' },
            { type: 'doctrine_box', id: 'db1', title: 'Las preguntas que generan revelación', content: 'Las grandes declaraciones de Cristo en el Evangelio de Juan frecuentemente son respuestas a preguntas honestas. "Yo soy el pan de vida" (Juan 6) responde al hambre de la multitud. "Yo soy la resurrección" (Juan 11) responde a Marta. "Yo soy el camino" (Juan 14) responde a Tomás. La duda honesta, cuando se lleva a Cristo, produce revelación. La diferencia entre la duda destructiva y la constructiva es hacia dónde se dirige.' },
          ],
        },
      ],
    },
    {
      id: 's2',
      title: 'La Semana que No Estaba',
      intro: { romanNumeral: 'II', heading: 'Juan 20:24-25 — La Exigencia de Evidencia', subheading: 'Lo que quería ver y por qué' },
      topics: [
        {
          id: 't2',
          title: '"Si no viere, no creeré"',
          blocks: [
            { type: 'highlight_verse', id: 'v1', reference: 'Juan 20:24-25', text: 'Pero Tomás, uno de los doce, llamado Dídimo, no estaba con ellos cuando Jesús vino. Le dijeron, pues, los otros discípulos: Al Señor hemos visto. El les dijo: Si no viere en sus manos la señal de los clavos, y metiere mi dedo en el lugar de los clavos, y metiere mi mano en su costado, no creeré.' },
            { type: 'paragraph', id: 'p2', text: 'La condición de Tomás no era arrogante — era el estándar de un hombre que había perdido a su maestro y no quería ser engañado de nuevo. Los otros diez también necesitaron ver para creer (Juan 20:20: "se regocijaron viendo al Señor"). Tomás simplemente fue honesto sobre su condición cuando los demás ya habían visto. Durante ocho días vivió con la tensión de los testimonios de sus compañeros sin poder verificarlos.' },
          ],
        },
      ],
    },
    {
      id: 's3',
      title: 'La Aparición al Octavo Día',
      intro: { romanNumeral: 'III', heading: '"Pon aquí tu Dedo"', subheading: 'Cristo llegó para Tomás específicamente' },
      topics: [
        {
          id: 't3',
          title: 'La mayor confesión del NT',
          blocks: [
            { type: 'highlight_verse', id: 'v2', reference: 'Juan 20:27-28', text: 'Luego dijo a Tomás: Pon aquí tu dedo, y mira mis manos; y acerca tu mano, y métela en mi costado; y no seas incrédulo, sino creyente. Entonces Tomás respondió y le dijo: ¡Señor mío, y Dios mío!' },
            { type: 'paragraph', id: 'p3', text: 'La confesión de Tomás — "Señor mío y Dios mío" — es la declaración de fe más explícita del Evangelio de Juan. Va más allá de "Maestro" o "Profeta" o incluso "Cristo." Es la identificación directa de Jesús con Dios. Cristo no corrige la afirmación — la acepta. Y luego dice: "Bienaventurados los que no vieron, y creyeron" — sin reprochar a Tomás por haber necesitado ver, sino bendiciendo a quienes creerán después sin ese privilegio.' },
          ],
        },
      ],
    },
    {
      id: 's4',
      title: 'La Fe Después de la Duda',
      intro: { romanNumeral: 'IV', heading: 'Lo que Tomás Hizo Después', subheading: 'India y el martirio del escéptico' },
      topics: [
        {
          id: 't4',
          title: 'La duda como puerta, no como destino',
          blocks: [
            { type: 'paragraph', id: 'p4', text: 'La tradición cristiana sostenida en India atribuye la evangelización del subcontinente a Tomás. La Iglesia de Santo Tomás en Kerala, India, se considera una de las más antiguas del mundo, fundada según la tradición en 52 d.C. El hombre que dijo "no creeré" murió por su fe — según la tradición, alanceado en Mylapore, India. La duda no fue el final de su historia. Fue el umbral.' },
            { type: 'reflection', id: 'r1', prompt: '¿Hay preguntas o dudas sobre tu fe que no te has atrevido a expresar honestamente? ¿Qué te diría el ejemplo de Tomás — que Cristo vino específicamente a él con evidencia — sobre cómo Cristo responde a la duda honesta?' },
          ],
        },
      ],
    },
  ],
}
