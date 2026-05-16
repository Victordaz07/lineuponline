import type { Lesson } from '@/types/doctrine'

export const danielElCautivo: Lesson = {
  id: 'daniel-el-cautivo',
  moduleId: 'personajes-escrituras',
  title: 'El Cautivo Fiel',
  subtitle: 'Deportado a Babilonia a los 15 años',
  description: 'En el año 605 a.C., Nabucodonosor tomó la primera deportación de Judá — no esclavos comunes, sino la élite intelectual y aristocrática del reino. Daniel tenía unos 15 años cuando llegó a Babilonia. Su primera decisión en tierra extraña — no contaminarse con la comida del rey — definió todo lo que vendría después.',
  level: 'INTERMEDIO',
  icon: '🏛️',
  duration: 30,
  order: 4410,
  status: 'PUBLISHED',
  studyBodyPlain: '',
  originalBodyPlain: '',
  submoduleGroup: 'daniel',
  studySections: [
    {
      id: 's1',
      title: 'El contexto histórico — 605 a.C.',
      intro: {
        romanNumeral: 'I',
        title: 'La Primera Deportación de Judá',
        paragraphs: [
          'Daniel 1 describe un evento histórico precisamente datado: el primer año del reinado de Nabucodonosor II, cuando comenzó el desmembramiento de Judá.',
        ],
      },
      topics: [
        {
          id: 't1',
          title: 'Babilonia y la élite de Judá',
          blocks: [
            {
              type: 'highlight_verse',
              reference: 'Daniel 1:1-4',
              text: 'En el año tercero del reinado de Joacim rey de Judá, vino Nabucodonosor rey de Babilonia a Jerusalén, y la sitió. Y el Señor entregó en sus manos a Joacim rey de Judá, y parte de los utensilios de la casa de Dios; y los trajo a tierra de Sinar, a la casa de su dios, y colocó los utensilios en la casa del tesoro de su dios. Y dijo el rey a Aspenaz, jefe de sus eunucos, que trajese de los hijos de Israel, del linaje real de los príncipes, muchachos en quienes no hubiese tacha alguna, de buen parecer, enseñados en toda sabiduría, sabios en ciencia y de buen entendimiento.',
            },
            {
              type: 'paragraph',
              text: 'La política de Nabucodonosor era sofisticada: no simplemente conquistar y esclavizar, sino tomar la élite intelectual y aristocrática de los pueblos conquistados y reentrenarla para servir al Imperio Babilónico. Esto era más efectivo que la esclavitud brutal: creaba administradores altamente capaces que conocían tanto la cultura conquistada como la babilónica, leales al Imperio porque su prosperidad dependía de él.',
            },
            {
              type: 'paragraph',
              text: 'Los criterios de selección son precisos: sin defecto físico, de buen aspecto, con educación en sabiduría, ciencia y entendimiento, del linaje real o de los príncipes. Daniel, Ananías, Misael y Azarías (después Sadrac, Mesac y Abed-nego) cumplían todos estos criterios. Tenían probablemente entre 14 y 16 años. Fueron separados de sus familias, de su tierra, de su cultura — y llevados a entrenarse por tres años en la lengua y la literatura de los caldeos.',
            },
            {
              type: 'timeline',
              items: [
                { label: '605 a.C.', text: 'Primera deportación: Daniel y sus compañeros llevados a Babilonia', ref: 'Daniel 1:1', color: 'gold' },
                { label: '597 a.C.', text: 'Segunda deportación: Ezequiel es llevado a Babilonia', ref: '2 Reyes 24:14', color: 'blue' },
                { label: '586 a.C.', text: 'Tercera deportación: Destrucción de Jerusalén y el templo', ref: '2 Reyes 25', color: 'red' },
                { label: '539 a.C.', text: 'Ciro de Persia conquista Babilonia; Daniel aún vive', ref: 'Daniel 5', color: 'green' },
              ],
            },
          ],
        },
      ],
    },
    {
      id: 's2',
      title: 'La primera decisión — la comida del rey',
      intro: {
        romanNumeral: 'II',
        title: 'El Primer Acto de Fidelidad de Daniel',
        paragraphs: [
          'El programa de asimilación babilónica era total. Daniel eligió qué podía ceder y qué no.',
        ],
      },
      topics: [
        {
          id: 't2',
          title: 'La línea que Daniel no cruzaría',
          blocks: [
            {
              type: 'highlight_verse',
              reference: 'Daniel 1:8',
              text: 'Y Daniel propuso en su corazón no contaminarse con la porción de la comida del rey, ni con el vino que él bebía; pidió, por tanto, al jefe de los eunucos que no se le obligase a contaminarse.',
            },
            {
              type: 'paragraph',
              text: 'El texto señala tres cosas que Daniel aceptó del programa de adoctrinamiento: (1) un nuevo nombre babilónico (Baltasar), (2) tres años de educación en literatura y lengua caldea, (3) vivir en la corte del rey. Y una que rechazó: la comida y el vino del rey. La comida real probablemente violaba las leyes de alimentos de la Torá (animales no kosher, comida ofrecida primero a los dioses babilónicos).',
            },
            {
              type: 'doctrine_box',
              title: 'Adaptación cultural vs. compromiso espiritual',
              body: 'La decisión de Daniel revela un principio de discernimiento vital: en el exilio babilónico, había cosas negociables y cosas no negociables. Idioma, nombre, educación secular — negociable. Fidelidad a las leyes de Dios — no negociable. Este principio tiene aplicación directa para los Santos en cualquier cultura secular: la adaptación cultural es necesaria e incluso sabia; el compromiso espiritual es donde se traza la línea. La dificultad está en saber dónde está la línea.',
            },
            {
              type: 'paragraph',
              text: 'El método de Daniel es notable: no hizo una declaración dramática ni organizó una protesta. Simplemente "pidió" al jefe de los eunucos. Y cuando el jefe expresó temor por las consecuencias, Daniel propuso un experimento de 10 días — verificable, empírico, no amenazante. La fidelidad de Daniel fue inteligente, no combativa.',
            },
          ],
        },
      ],
    },
    {
      id: 's3',
      title: 'La prueba de 10 días',
      intro: {
        romanNumeral: 'III',
        title: 'Legumbres y Agua contra la Mesa del Rey',
        paragraphs: [
          'La "prueba" de Daniel no fue un milagro instantáneo — fue un experimento de 10 días que podría haber fallado.',
        ],
      },
      topics: [
        {
          id: 't3',
          title: 'El resultado del experimento',
          blocks: [
            {
              type: 'highlight_verse',
              reference: 'Daniel 1:14-16',
              text: 'Consintió, pues, en esto, y probó con ellos diez días. Y al cabo de los diez días pareció el rostro de ellos mejor y más robusto que el de los otros muchachos que comían de la porción de la comida del rey. Así, pues, Melsar sustraía la porción de la comida de ellos y el vino que habían de beber, y les daba legumbres.',
            },
            {
              type: 'paragraph',
              text: 'El resultado no fue inmediato ni garantizado por revelación. Daniel simplemente propuso el experimento y confió en que la fidelidad a la ley de Dios tendría consecuencias positivas. Los 10 días son un período real de observación, no un número simbólico. El resultado fue lo suficientemente claro para convencer al funcionario de continuar el acuerdo durante todo el período de entrenamiento.',
            },
            {
              type: 'paragraph',
              text: 'Daniel 1:17-20 registra el resultado final del período de entrenamiento: "A estos cuatro muchachos Dios les dio conocimiento e inteligencia en todas las letras y ciencias; y Daniel tuvo entendimiento en toda visión y sueños. Y al cabo de los días que el rey había dicho que los trajesen, el jefe de los eunucos los trajo delante de Nabucodonosor... y el rey habló con ellos, y no fueron hallados entre todos ellos otros como Daniel, Ananías, Misael y Azarías." El resultado fue diez veces superior al de sus compañeros.',
            },
            {
              type: 'deep_dive',
              title: 'La inteligencia como don de la fidelidad',
              paragraphs: [
                'Daniel 1:17 atribuye la sabiduría de los cuatro jóvenes directamente a Dios: "Dios les dio conocimiento e inteligencia." El texto no presenta esto como resultado natural de su buena dieta o de su carácter superior — es un don divino.',
                'Esto plantea un principio que la Restauración desarrolla extensamente: la fidelidad a las leyes de Dios (incluyendo la ley de la salud, DyC 89:18-21) abre la capacidad mental y espiritual. No como magia automática, sino como patrón general — el cuerpo cuidado es más receptivo a la revelación, y la mente disciplinada por principios divinos funciona con mayor claridad.',
                'En el contexto babilónico, donde la "sabiduría" era astrologíaa, adivinación y manipulación política, la sabiduría de Daniel era de naturaleza diferente: incluía el don de interpretar visiones. Esto lo haría indispensable en una corte donde los sueños del rey eran asuntos de estado.',
              ],
            },
          ],
        },
      ],
    },
    {
      id: 's4',
      title: 'El ascenso a la corte babilónica',
      intro: {
        romanNumeral: 'IV',
        title: 'El Cautivo Que Gobernó el Imperio',
        paragraphs: [
          'De los escalones más bajos de la administración babilónica, Daniel ascendería hasta ser el segundo del Imperio más poderoso de su época.',
        ],
      },
      topics: [
        {
          id: 't4',
          title: 'Fidelidad como camino al liderazgo',
          blocks: [
            {
              type: 'paragraph',
              text: 'El resto del libro de Daniel traza el arco de una carrera extraordinaria. Daniel sirvió bajo Nabucodonosor (605-562 a.C.), Evil-merodac (562-560 a.C.), Nabónido/Belsasar (556-539 a.C.) y Darío el Medo (539-538 a.C.) — cuatro décadas de liderazgo bajo cuatro regímenes diferentes, sobreviviendo transiciones que mataron a muchos de sus contemporáneos.',
            },
            {
              type: 'paragraph',
              text: 'Daniel 6:3 describe su posición al final de su vida: "Daniel mismo era superior a estos sátrapas y gobernadores, porque había en él un espíritu superior; y el rey pensaba en ponerlo sobre todo el reino." Este hombre, deportado de su tierra como adolescente, llegó a ser el funcionario más poderoso del mundo de su época. Su ascenso no fue por asimilación o compromiso — fue a pesar de haberse negado a comprometerse en los puntos decisivos.',
            },
            {
              type: 'key_points',
              title: 'Principios del liderazgo de Daniel',
              points: [
                'Distinguir entre lo negociable (cultura, idioma, educación) y lo no negociable (fidelidad a las leyes de Dios)',
                'Proponer soluciones alternativas en lugar de simplemente resistir',
                'Mantener la excelencia en el trabajo secular como parte del testimonio',
                'La humildad al atribuir sus capacidades a Dios, no a sí mismo (Daniel 2:28)',
                'La constancia en hábitos espirituales independientemente de las consecuencias',
                'Gobernar con integridad que hace imposible la acusación justificada (Daniel 6:4)',
              ],
            },
            {
              type: 'reflection',
              prompt: '¿En qué entornos de tu vida — laboral, académico, social — te encuentras en una situación similar a la de Daniel en Babilonia: rodeado de una cultura que no comparte tus valores? ¿Qué ha resultado ser "negociable" y qué ha resultado ser "no negociable" en esos entornos?',
            },
          ],
        },
      ],
    },
  ],
}
