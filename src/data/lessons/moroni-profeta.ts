import type { Lesson } from '@/types/doctrine'

export const moroniProfeta: Lesson = {
  id: 'moroni-profeta',
  moduleId: 'personajes-escrituras',
  title: 'Moroni — El Último Profeta del Libro de Mormón',
  subtitle: 'Solo, sin familia, guardando las planchas para nosotros',
  description: 'Moroni vio a su pueblo destruido por su propia iniquidad. Sobrevivió solo durante décadas, finalizando el registro de su padre Mormón. Enterró las planchas. 1,400 años después las entregó a José Smith. Sus palabras finales son el testamento más personal de toda la escritura restaurada.',
  level: 'INTERMEDIO',
  icon: '📜',
  duration: 60,
  order: 77,
  status: 'PUBLISHED',
  studyBodyPlain: '',
  originalBodyPlain: '',
  studySections: [
    {
      id: 's1',
      title: 'El Sobreviviente',
      intro: { romanNumeral: 'I', title: 'Mormón 8 — La Voz desde el Polvo', paragraphs: ['El único nefita que quedó'] },
      topics: [
        {
          id: 't1',
          title: 'Escribir para nosotros',
          blocks: [
            { type: 'highlight_verse', reference: 'Mormón 8:3,5', text: 'Mi padre fue muerto en batalla, y todos mis familiares, y no he tenido amigos ni adonde ir; y cuánto tiempo viviré no lo sé... Y no sé cuándo escribiré más; pero tengo pocas cosas que escribir acerca de mi pueblo.' },
            { type: 'paragraph', text: 'Moroni escribió Mormón 8 creyendo que sería su última entrada. Su padre había muerto en la batalla final de Cumorah junto a 230,000 nefitas. Moroni era el sobreviviente solitario de una civilización. Sin familia, sin comunidad, sin destino conocido, escribe para una audiencia que no conocerá: los que lean el registro "en los postreros días." Escribe sabiendo que sus palabras traspasarán los siglos.' },
          ],
        },
      ],
    },
    {
      id: 's2',
      title: 'La Profecía para Nuestra Época',
      intro: { romanNumeral: 'II', title: 'Mormón 8:26-41 — "A Vosotros Hablo"', paragraphs: ['Moroni vio nuestro tiempo con especificidad asombrosa'] },
      topics: [
        {
          id: 't2',
          title: 'El diagnóstico de nuestra época',
          blocks: [
            { type: 'highlight_verse', reference: 'Mormón 8:35-37', text: 'He aquí, yo os hablo a vosotros como si estuvierais presente, y sin embargo no estáis; pero he aquí, Jesucristo os ha mostrado, y conozco vuestras obras. Y sé que andaréis en orgullo de vuestros corazones; sí, incluso os gloriaréis en vuestros ropajes, y no os conduciréis a los pobres y a los necesitados, a los enfermos y a los afligidos.' },
            { type: 'paragraph', text: 'El capítulo más desconcertante del Libro de Mormón es Mormón 8: Moroni describe con precisión la época en que el libro sería traducido — una época de guerras, contaminación, secreto, orgullo en la ropa, iglesias que no reverencian la santidad de Cristo. Ha visto nuestra época. Nos habla directamente. No como predicción histórica distante sino como interpelación personal: "¿Por qué habéis contaminado la santa iglesia de Dios?"' },
          ],
        },
      ],
    },
    {
      id: 's3',
      title: 'La Promesa de Moroni',
      intro: { romanNumeral: 'III', title: 'Moroni 10:3-5 — El Versículo que Prueba el Libro', paragraphs: ['La invitación a la verificación personal'] },
      topics: [
        {
          id: 't3',
          title: 'Cómo saber',
          blocks: [
            { type: 'highlight_verse', reference: 'Moroni 10:4-5', text: 'Y cuando recibáis estas cosas, quisiera exhortaros a que preguntéis a Dios, el Padre Eterno, en el nombre de Cristo, si no son verdaderas estas cosas; y si pedís con un corazón sincero, con real intención, teniendo fe en Cristo, os manifestará la verdad de ellas por el poder del Espíritu Santo. Y por el poder del Espíritu Santo podréis conocer la verdad de todas las cosas.' },
            { type: 'paragraph', text: 'Moroni 10:3-5 es el último testamento de un hombre que sobrevivió la destrucción de su mundo. No concluye con un argumento intelectual ni con evidencia histórica — concluye con una invitación a la experiencia personal. El "experimento de fe" que Alma 32 describe teóricamente, Moroni lo invita a practicar con el libro que escribió. La promesa no es para los académicos que estudian el texto — es para quien "recuerde cuán misericordioso ha sido el Señor" y pregunte con sinceridad.' },
          ],
        },
      ],
    },
    {
      id: 's4',
      title: 'El Ángel que Entregó las Planchas',
      intro: { romanNumeral: 'IV', title: 'De las Planchas a Joseph — 1,400 Años', paragraphs: ['El guardián que cumplió su misión'] },
      topics: [
        {
          id: 't4',
          title: 'La entrega a José Smith',
          blocks: [
            { type: 'paragraph', text: 'El 21 de septiembre de 1823, Moroni — ahora un ser glorificado — apareció tres veces a José Smith en una sola noche. Le mostró el lugar donde estaban las planchas. Instruyó a José durante cuatro años antes de permitirle tomarlas. Recuperó las planchas después de la traducción. Todo el proceso de la Restauración del Libro de Mormón pasó a través de la custodia de Moroni, quien había esperado 1,400 años para entregar el registro que compiló su padre y que él había guardado como testamento final de su pueblo.' },
            { type: 'reflection', prompt: '¿Qué significa para ti que Moroni vio tu época específicamente y te habló directamente? ¿Cuál de las condiciones de su diagnóstico en Mormón 8 reconoces más claramente en tu contexto actual?' },
          ],
        },
      ],
    },
  ],
}
