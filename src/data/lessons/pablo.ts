import type { Lesson } from '@/types/doctrine'

export const pablo: Lesson = {
  id: 'pablo',
  moduleId: 'personajes-escrituras',
  title: 'Pablo — El Perseguidor que Se Convirtió en Apóstol',
  subtitle: 'De Saulo de Tarso a arquitecto del mundo cristiano',
  description: 'Saulo persiguió y mató cristianos — y luego encontró a Cristo en el camino a Damasco. Sus cartas son la mitad del Nuevo Testamento. Su teología de la gracia, la justificación y el cuerpo de Cristo forma la columna vertebral de la doctrina cristiana.',
  level: 'INTERMEDIO',
  icon: '⚔️',
  duration: 70,
  order: 51,
  status: 'PUBLISHED',
  studyBodyPlain: '',
  originalBodyPlain: '',
  studySections: [
    {
      id: 's1',
      title: 'El Camino a Damasco',
      intro: { romanNumeral: 'I', title: 'Hechos 9 — La Conversión más Dramática de la Biblia', paragraphs: ['El enemigo de Cristo se convierte en su mayor defensor'] },
      topics: [
        {
          id: 't1',
          title: 'Saulo el perseguidor',
          blocks: [
            { type: 'paragraph', text: 'Antes del camino a Damasco, Saulo no era simplemente indiferente al evangelio — era su enemigo activo. Hechos 8:3: "Saulo asolaba la iglesia, y entrando casa por casa, arrastraba a hombres y a mujeres, y los entregaba en la cárcel." Estuvo presente y aprobó la lapidación de Esteban (Hechos 7:58). Era fariseo de fariseos, educado a los pies de Gamaliel, el mejor erudito de su generación. Sabía exactamente lo que hacía cuando perseguía a los cristianos.' },
            { type: 'highlight_verse', reference: 'Hechos 9:3-5', text: 'Más yendo por el camino, aconteció que al llegar cerca de Damasco, repentinamente le rodeó un resplandor de luz del cielo; y cayendo en tierra, oyó una voz que le decía: Saulo, Saulo, ¿por qué me persigues? Y él dijo: ¿Quién eres, Señor? Y le dijo: Yo soy Jesús, a quien tú persigues.' },
          ],
        },
      ],
    },
    {
      id: 's2',
      title: 'La Teología de la Gracia',
      intro: { romanNumeral: 'II', title: 'Romanos y Gálatas — La Justificación por la Fe', paragraphs: ['La revelación que cambió la historia del pensamiento cristiano'] },
      topics: [
        {
          id: 't2',
          title: 'Gracia, fe y obras',
          blocks: [
            { type: 'paragraph', text: 'La contribución teológica central de Pablo es la doctrina de la justificación por la fe. Romanos 3:28: "Concluimos, pues, que el hombre es justificado por fe sin las obras de la ley." Esto no elimina las obras — Pablo insiste en Efesios 2:10 que "somos hechura suya, creados en Cristo Jesús para buenas obras." El punto es que las obras no compran la salvación; la gracia de Cristo la dona, y las obras son la respuesta a esa gracia, no el precio.' },
            { type: 'doctrine_box', title: 'Pablo y la Doctrina Restaurada', body: 'La Restauración reconcilia la tensión entre la gracia de Pablo y las obras de Santiago: ambas son necesarias pero en su lugar correcto. La gracia es la fuente; las ordenanzas y la obediencia son el canal de la gracia. 2 Nefi 25:23 — "es por la gracia que somos salvos, después de todo lo que podemos hacer" — no contradice a Pablo sino que los integra.' },
          ],
        },
      ],
    },
    {
      id: 's3',
      title: 'El Cuerpo de Cristo',
      intro: { romanNumeral: 'III', title: '1 Corintios 12 — La Eclesiología de Pablo', paragraphs: ['Una sola Iglesia con muchos miembros y dones'] },
      topics: [
        {
          id: 't3',
          title: 'La metáfora del cuerpo',
          blocks: [
            { type: 'highlight_verse', reference: '1 Corintios 12:27-28', text: 'Vosotros, pues, sois el cuerpo de Cristo, y miembros cada uno en particular. Y a unos puso Dios en la iglesia, primeramente apóstoles, luego profetas, lo tercero maestros, luego los que hacen milagros, después los que sanan, los que ayudan, los que administran, los que tienen don de lenguas.' },
            { type: 'paragraph', text: 'La eclesiología de Pablo es fundamental para entender por qué la Restauración era necesaria. La lista de 1 Corintios 12:28 — apóstoles, profetas, maestros — describe la estructura organizacional que Cristo estableció. Efesios 4:11-13 explica el propósito: "a fin de perfeccionar a los santos... hasta que todos lleguemos a la unidad de la fe." Cuando esta estructura desapareció, la unidad de la fe se fragmentó en miles de denominaciones.' },
          ],
        },
      ],
    },
    {
      id: 's4',
      title: 'El Sufrimiento del Apóstol',
      intro: { romanNumeral: 'IV', title: '2 Corintios 11 — El Catálogo del Dolor', paragraphs: ['Lo que costó predicar el evangelio'] },
      topics: [
        {
          id: 't4',
          title: 'Una vida de servicio a precio de sangre',
          blocks: [
            { type: 'highlight_verse', reference: '2 Corintios 11:24-27', text: 'De los judíos cinco veces he recibido cuarenta azotes menos uno. Tres veces he sido azotado con varas; una vez apedreado; tres veces he padecido naufragio; una noche y un día he estado como náufrago en alta mar; en caminos muchas veces; en peligros de ríos, peligros de ladrones... en trabajo y fatiga, en muchos desvelos, en hambre y sed, en muchos ayunos, en frío y en desnudez.' },
            { type: 'paragraph', text: 'Este catálogo no es propaganda — es la vida real de un apóstol en el siglo primero. Pablo no predicó desde posición de seguridad. Su motivación no puede explicarse por beneficio personal. La "espina en la carne" (2 Corintios 12:7) — no identificada en el texto — fue su compañera constante, y Dios la permitió para que su fortaleza se perfeccionara en la debilidad.' },
            { type: 'reflection', prompt: '¿Qué precio has pagado personalmente por tu fe? ¿Cómo cambia tu perspectiva ver que Pablo, el mayor teólogo del NT, pagó ese precio con su propio cuerpo durante décadas?' },
          ],
        },
      ],
    },
  ],
}
