import type { Lesson } from '@/types/doctrine'

export const pedro: Lesson = {
  id: 'pedro',
  moduleId: 'personajes-escrituras',
  title: 'Pedro — La Roca que Cayó y Se Levantó',
  subtitle: 'De pescador a presidente de la Iglesia de Cristo',
  description: 'Simón Pedro caminó sobre el agua y se hundió. Confesó que Jesús era el Cristo y fue llamado la roca. Negó a Jesús tres veces y lloró amargamente. Y fue él quien presidió la Iglesia primitiva, abrió el evangelio a los gentiles y murió crucificado de cabeza.',
  level: 'INTERMEDIO',
  icon: '🪨',
  duration: 70,
  order: 50,
  status: 'PUBLISHED',
  studyBodyPlain: '',
  originalBodyPlain: '',
  studySections: [
    {
      id: 's1',
      title: 'El Pescador que Dejó Todo',
      intro: { romanNumeral: 'I', heading: '"Sígueme, y Te Haré Pescador de Hombres"', subheading: 'La decisión en la orilla del lago' },
      topics: [
        {
          id: 't1',
          title: 'Lo que Pedro dejó atrás',
          blocks: [
            { type: 'paragraph', id: 'p1', text: 'Mateo 4:18-20 describe el llamamiento de Pedro con una economía brutal: "Y él dijo: Venid en pos de mí, y os haré pescadores de hombres. Ellos entonces, dejando al instante las redes, le siguieron." Las redes no eran una metáfora — eran su medio de vida, su identidad, la herencia familiar. El "dejando al instante" es el texto más radical de los cuatro evangelios sobre el discipulado. No planearon. No negociaron. Dejaron.' },
            { type: 'highlight_verse', id: 'v1', reference: 'Mateo 16:16-18', text: 'Respondiendo Simón Pedro, dijo: Tú eres el Cristo, el Hijo del Dios viviente. Entonces le respondió Jesús: Bienaventurado eres, Simón, hijo de Jonás, porque no te lo reveló carne ni sangre, sino mi Padre que está en los cielos. Y yo también te digo, que tú eres Pedro, y sobre esta roca edificaré mi iglesia.' },
          ],
        },
      ],
    },
    {
      id: 's2',
      title: 'El Hombre que Caminó sobre el Agua',
      intro: { romanNumeral: 'II', heading: 'Mateo 14 — La Fe que Funciona y la que Falla', subheading: 'La única persona además de Cristo que caminó sobre el agua' },
      topics: [
        {
          id: 't2',
          title: 'Pedro pidió lo imposible — y lo recibió',
          blocks: [
            { type: 'paragraph', id: 'p2', text: 'En Mateo 14:28, cuando los discípulos vieron a Jesús caminar sobre el agua, Pedro hizo la petición más audaz de los Evangelios: "Señor, si eres tú, mándame ir a ti sobre las aguas." Jesús dijo: "Ven." Y Pedro bajó del barco. Caminó sobre el agua. Y luego miró el viento, tuvo miedo, y comenzó a hundirse. Este episodio resume toda la vida espiritual de Pedro: capaz de lo imposible cuando mantiene los ojos en Cristo; se hunde cuando los desvía.' },
            { type: 'doctrine_box', id: 'db1', title: 'Por qué Pedro ES el Modelo del Discípulo', content: 'Pedro no es el modelo porque sea perfecto — es el modelo porque falla visiblemente y se levanta visiblemente. El discípulo que caminó sobre el agua es el mismo que se hundió. El que confesó a Cristo es el mismo que lo negó. El que lloró amargamente es el mismo que presidió la Iglesia primitiva. Su historia dice: la grandeza espiritual no requiere no caer. Requiere seguir levantándose.' },
          ],
        },
      ],
    },
    {
      id: 's3',
      title: 'Las Tres Negaciones',
      intro: { romanNumeral: 'III', heading: 'La Noche más Oscura de Pedro', subheading: 'Juan 18 — y por qué Jesús lo miró' },
      topics: [
        {
          id: 't3',
          title: 'El gallo y las lágrimas',
          blocks: [
            { type: 'highlight_verse', id: 'v2', reference: 'Lucas 22:61-62', text: 'Entonces, vuelto el Señor, miró a Pedro; y Pedro se acordó de la palabra del Señor... Y Pedro, saliendo fuera, lloró amargamente.' },
            { type: 'paragraph', id: 'p3', text: 'Lucas añade un detalle que los otros evangelios omiten: "vuelto el Señor, miró a Pedro." En el momento de la tercera negación, Jesús giró y lo vio. No con juicio — con amor que conoce. Ese miró desencadenó el recuerdo y el arrepentimiento. La restauración de Pedro (Juan 21:15-17) es simétrica perfecta: tres veces negó, tres veces afirmó. "¿Me amas?" "Señor, tú sabes todas las cosas; tú sabes que te amo."' },
          ],
        },
      ],
    },
    {
      id: 's4',
      title: 'El Presidente de la Iglesia Primitiva',
      intro: { romanNumeral: 'IV', heading: 'Hechos — El Mismo Pedro Transformado', subheading: 'Pentecostés y la apertura a los gentiles' },
      topics: [
        {
          id: 't4',
          title: 'La transformación de Pentecostés',
          blocks: [
            { type: 'paragraph', id: 'p4', text: 'Hechos 2: Pedro, el mismo que había negado a Cristo tres veces ante una sirvienta, se puso de pie ante miles en Jerusalén en el día de Pentecostés y predicó sin miedo el primer sermón misionero de la historia cristiana. Tres mil se bautizaron. Hechos 10: Pedro recibió la visión de la manta con animales impuros y fue instruido para llevar el evangelio a los gentiles — una decisión que cambió la dirección de toda la historia cristiana.' },
            { type: 'key_points', id: 'kp1', title: 'Pedro como restaurador del sacerdocio', points: [
              'Con Santiago y Juan, confirmaron el Sacerdocio de Melquisedec a José Smith en mayo de 1829',
              'La restauración de las llaves apostólicas pasó a través de Pedro como el apóstol principal',
              'La cadena de autoridad de la Iglesia restaurada conecta directamente con Pedro',
              'Su testimonio registrado en 1 Pedro y 2 Pedro confirmó el conocimiento de la preexistencia y la deificación',
            ]},
            { type: 'reflection', id: 'r1', prompt: '¿En qué aspecto de tu vida espiritual te identificas más con Pedro: la fe audaz que camina sobre el agua, o la debilidad que se hunde mirando el viento? ¿Cómo ha "mirado" Cristo a ti en tus momentos de fracaso?' },
          ],
        },
      ],
    },
  ],
}
