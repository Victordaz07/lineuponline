import type { Lesson } from '@/types/doctrine'

export const mariaMagdalena: Lesson = {
  id: 'maria-magdalena',
  moduleId: 'personajes-escrituras',
  title: 'María Magdalena — La Primera Testigo',
  subtitle: 'La mujer que vio al Cristo resucitado antes que nadie',
  description: 'De los siete demonios que Jesús expulsó, a la primera testigo de la resurrección. María Magdalena estuvo al pie de la cruz, fue a la tumba en la oscuridad, y fue la primera persona en hablar con el Cristo resucitado. Jesús dijo su nombre.',
  level: 'INTERMEDIO',
  icon: '🌹',
  duration: 55,
  order: 53,
  status: 'PUBLISHED',
  studyBodyPlain: '',
  originalBodyPlain: '',
  studySections: [
    {
      id: 's1',
      title: 'La Que Fue Liberada',
      intro: { romanNumeral: 'I', title: 'Lucas 8 — Siete Demonios', paragraphs: ['La oscuridad de donde vino y lo que Cristo hizo'] },
      topics: [
        {
          id: 't1',
          title: 'De la posesión al discipulado',
          blocks: [
            { type: 'paragraph', text: 'Lucas 8:2 la introduce con una sola línea: "María, que se llamaba Magdalena, de la que habían salido siete demonios." No sabemos qué significaba eso en términos experienciales. Sí sabemos que fue un sufrimiento severo y que Jesús intervino directamente. De ese punto en adelante, ella fue una de las mujeres que "le servían de sus bienes" — viajando con Jesús y los doce, financiando el ministerio. Su devoción nació de una liberación real.' },
            { type: 'doctrine_box', title: 'Lo que María Magdalena no era', body: 'Durante siglos, la tradición popular identificó erróneamente a María Magdalena con la "mujer pecadora" de Lucas 7 que ungió los pies de Jesús. Esto no tiene ningún fundamento textual. La confusión fue popularizada por el Papa Gregorio I en el siglo VI pero nunca tuvo base bíblica. Los textos son claros: María Magdalena era discípula, patrocinadora del ministerio, y primera testigo de la resurrección.' },
          ],
        },
      ],
    },
    {
      id: 's2',
      title: 'Al Pie de la Cruz',
      intro: { romanNumeral: 'II', title: 'Juan 19 — Mientras los Discípulos Huían', paragraphs: ['Las mujeres que se quedaron'] },
      topics: [
        {
          id: 't2',
          title: 'La lealtad que los hombres no tuvieron',
          blocks: [
            { type: 'paragraph', text: 'Cuando Jesús fue arrestado, los doce discípulos varones huyeron (Marcos 14:50). Solo Juan regresó a la cruz. Las mujeres — María Magdalena, María madre de Jacobo, Salomé — permanecieron hasta el final (Marcos 15:40). Ellas observaron dónde fue sepultado. Fueron las primeras en ir al sepulcro el domingo por la mañana. La fidelidad de las mujeres durante la pasión contrasta marcadamente con la cobardía de los hombres.' },
            { type: 'highlight_verse', reference: 'Juan 19:25', text: 'Pero estaban junto a la cruz de Jesús su madre, y la hermana de su madre, María mujer de Cleofas, y María Magdalena.' },
          ],
        },
      ],
    },
    {
      id: 's3',
      title: 'La Mañana del Primer Día',
      intro: { romanNumeral: 'III', title: 'Juan 20 — En el Huerto', paragraphs: ['La primera resurrección de la historia'] },
      topics: [
        {
          id: 't3',
          title: '"María"',
          blocks: [
            { type: 'highlight_verse', reference: 'Juan 20:15-16', text: 'Jesús le dijo: Mujer, ¿por qué lloras? ¿A quién buscas? Ella, pensando que era el hortelano, le dijo: Señor, si tú lo has llevado, dime dónde lo has puesto, y yo lo llevaré. Jesús le dijo: ¡María! Volviéndose ella, le dijo: ¡Raboni! (que quiere decir, Maestro).' },
            { type: 'paragraph', text: 'El momento más tierno de los relatos de la resurrección: María no reconoce al Cristo resucitado hasta que él dice su nombre. Una sola palabra — "María" — pronunciada con la voz que la conocía. Este es el primero de todos los testimonios de la resurrección. Antes de Pedro, antes de los once, antes de Santiago: fue una mujer que había sido poseída por siete demonios quien dijo "He visto al Señor" (Juan 20:18).' },
          ],
        },
      ],
    },
    {
      id: 's4',
      title: 'La Apóstol de los Apóstoles',
      intro: { romanNumeral: 'IV', title: 'El Testimonio que Nadie Creyó al Principio', paragraphs: ['Y por qué eso hace la historia más auténtica, no menos'] },
      topics: [
        {
          id: 't4',
          title: 'La evidencia más inconveniente',
          blocks: [
            { type: 'paragraph', text: 'En el siglo primero, el testimonio de una mujer no era admisible en un tribunal judío. Si los primeros cristianos hubieran inventado los relatos de la resurrección, no habrían elegido a una mujer como primer testigo — especialmente una con historia de posesión demoníaca. El hecho de que los cuatro Evangelios registren el descubrimiento de la tumba vacía por mujeres, con María Magdalena al frente, es precisamente lo que hace el relato históricamente creíble. Los falsificadores habrían elegido a Pedro.' },
            { type: 'reflection', prompt: '¿Qué te dice sobre el carácter de Cristo el hecho de que eligiera aparecer primero a una mujer — y específicamente a una mujer que había tenido una historia de sufrimiento severo? ¿Qué dice eso sobre a quién busca Cristo primero?' },
          ],
        },
      ],
    },
  ],
}
