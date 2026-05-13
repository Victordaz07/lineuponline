import type { Lesson } from '@/types/doctrine'

export const daniel: Lesson = {
  id: 'daniel',
  moduleId: 'personajes-escrituras',
  title: 'Daniel — En el Foso de los Leones',
  subtitle: 'El joven que gobernó Babilonia sin comprometerse',
  description: 'Daniel fue llevado cautivo a Babilonia a los 15 años y llegó a ser el segundo del Imperio más poderoso de su época — sin comer la comida del rey, sin inclinarse ante la estatua, sin dejar de orar tres veces al día. Sus visiones del capítulo 7 son la base de Adán-ondi-Ahmán.',
  level: 'AVANZADO',
  icon: '🦁',
  duration: 75,
  order: 44,
  status: 'PUBLISHED',
  studyBodyPlain: '',
  originalBodyPlain: '',
  studySections: [
    {
      id: 's1',
      title: 'Fidelidad en el Corazón del Enemigo',
      intro: { romanNumeral: 'I', title: 'Babilonia no Pudo Cambiarle', paragraphs: ['La comida del rey y los límites de la asimilación'] },
      topics: [
        {
          id: 't1',
          title: 'La primera negativa — y su resultado',
          blocks: [
            { type: 'paragraph', text: 'Daniel 1: Los jóvenes hebreos más prometedores fueron seleccionados para un programa de adoctrinamiento en la corte babilónica — nuevo idioma, nueva cultura, nuevos nombres. Nabucodonosor quería borrar su identidad israelita. Daniel aceptó la educación y los nombres babilónicos, pero en lo que concernía a la ley de Dios (las leyes de alimentos) se negó. Propuso un experimento de 10 días con vegetales y agua. Resultado: eran más sanos que todos los demás.' },
            { type: 'highlight_verse', reference: 'Daniel 1:8', text: 'Y Daniel propuso en su corazón no contaminarse con la porción de la comida del rey, ni con el vino que él bebía; pidió, por tanto, al jefe de los eunucos que no se le obligase a contaminarse.' },
            { type: 'doctrine_box', title: 'La Ley de la Salud como Principio de Fidelidad', body: 'La decisión de Daniel no era simplemente sobre dieta — era sobre hasta dónde podía llegar la asimilación. El principio: hay cosas sobre las que se puede negociar (idioma, nombre, educación) y cosas sobre las que no (fidelidad a las leyes de Dios). Daniel aprendió a distinguir entre adaptación cultural y compromiso espiritual. Esta distinción es relevante para cualquier Santo en una cultura secular.' },
          ],
        },
      ],
    },
    {
      id: 's2',
      title: 'La Estatua de Nabucodonosor',
      intro: { romanNumeral: 'II', title: 'Daniel 2 — La Piedra sin Manos', paragraphs: ['La profecía más directa sobre la Restauración'] },
      topics: [
        {
          id: 't2',
          title: 'Los cuatro imperios y la Iglesia',
          blocks: [
            { type: 'highlight_verse', reference: 'Daniel 2:44', text: 'Y en los días de estos reyes el Dios del cielo levantará un reino que no será jamás destruido, ni será el reino dejado a otro pueblo; desmenuzará y consumirá a todos estos reinos, pero él permanecerá para siempre.' },
            { type: 'paragraph', text: 'La estatua de Daniel 2 representa cuatro imperios mundiales: Babilonia (oro), Medo-Persia (plata), Grecia (bronce), Roma (hierro). La piedra cortada sin manos que destruye la estatua y llena toda la tierra es — según la Restauración — la Iglesia de Jesucristo de los Santos de los Últimos Días. José Smith citó explícitamente Daniel 2 al describir el propósito de la Restauración. La piedra que comenzó pequeña en 1830 está destinada a llenar la tierra.' },
          ],
        },
      ],
    },
    {
      id: 's3',
      title: 'Daniel 7 y Adán-ondi-Ahmán',
      intro: { romanNumeral: 'III', title: 'El Anciano de Días', paragraphs: ['La visión que DyC 116 conecta con Adán'] },
      topics: [
        {
          id: 't3',
          title: 'El Anciano de Días y el Hijo del Hombre',
          blocks: [
            { type: 'highlight_verse', reference: 'Daniel 7:13-14', text: 'Miraba yo en la visión de la noche, y he aquí con las nubes del cielo venía uno como un hijo de hombre, que vino hasta el Anciano de días, y le hicieron acercarse delante de él. Y le fue dado dominio, gloria y reino, para que todos los pueblos, naciones y lenguas le sirvieran; su dominio es dominio eterno, que nunca pasará, y su reino uno que no será destruido.' },
            { type: 'paragraph', text: 'Daniel 7 introduce dos figuras: el "Anciano de Días" (en arameo Attiq Yomin) y el "Hijo del Hombre". La Restauración identifica al Anciano de Días con Adán/Miguel (DyC 116, 138:38). En la visión de Daniel, el Hijo del Hombre (Cristo) se acerca al Anciano de Días y recibe su dominio eterno. Esto es Adán-ondi-Ahmán: el consejo donde todos los dispensadores entregan sus llaves a Adán, quien las entrega a Cristo justo antes de la Segunda Venida.' },
          ],
        },
      ],
    },
    {
      id: 's4',
      title: 'El Foso y la Confianza',
      intro: { romanNumeral: 'IV', title: 'Las Tres Veces al Día que lo Pusieron en Riesgo', paragraphs: ['La oración como acto de resistencia'] },
      topics: [
        {
          id: 't4',
          title: 'Orar cuando orar cuesta la vida',
          blocks: [
            { type: 'highlight_verse', reference: 'Daniel 6:10', text: 'Cuando Daniel supo que el edicto había sido firmado, entró en su casa, y abiertas las ventanas de su cámara que daban hacia Jerusalén, se arrodillaba tres veces al día, y oraba y daba gracias delante de su Dios, como lo solía hacer antes.' },
            { type: 'paragraph', text: 'El detalle crucial: "como lo solía hacer antes." Daniel no hizo una declaración heroica ni organizó una protesta pública. Simplemente continuó haciendo lo que siempre había hecho — orar tres veces al día mirando hacia Jerusalén. La fidelidad rutinaria frente a la persecución es más poderosa que el heroísmo dramático. El foso de los leones fue la consecuencia de negarse a interrumpir un hábito de oración.' },
            { type: 'reflection', prompt: '¿Hay hábitos espirituales en tu vida — oración, estudio de escrituras, asistencia al templo — que mantienes incluso cuando el entorno los hace incómodos o inconvenientes? ¿Qué costo has pagado o pagarías por mantenerlos?' },
          ],
        },
      ],
    },
  ],
}
