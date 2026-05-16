import type { Lesson } from '@/types/doctrine'

export const enoc: Lesson = {
  id: 'enoc',
  moduleId: 'personajes-escrituras',
  title: 'Enoc — La Ciudad que Dios Arrebató',
  subtitle: 'El hombre que construyó Sión',
  description: 'Enoc era "tardo en el habla" cuando Dios lo llamó. Construyó la ciudad más justa que jamás existió — y Dios la arrebató de la Tierra. Moisés 6-7 y DyC 45 revelan detalles que la Biblia no tiene.',
  level: 'AVANZADO',
  icon: '🏙️',
  duration: 70,
  order: 30,
  status: 'PUBLISHED',
  studyBodyPlain: '',
  originalBodyPlain: '',
  studySections: [
    {
      id: 's1',
      title: 'El Llamamiento de un Hombre Inseguro',
      intro: { romanNumeral: 'I', title: '"Soy Tardo en el Habla"', paragraphs: ['Moisés 6:31'] },
      topics: [
        {
          id: 't1',
          title: 'El llamamiento inesperado',
          blocks: [
            { type: 'paragraph', text: 'Cuando Dios llamó a Enoc, la respuesta del joven fue de completa inseguridad: "¿Por qué tu siervo ha hallado gracia ante tus ojos, siendo tan solo un muchacho, y todos me aborrecen, pues soy tardo en el habla?" (Moisés 6:31). El patrón se repite con Moisés, Jeremías, Pablo — Dios llama a quienes se sienten insuficientes, no a quienes se sienten capaces.' },
            { type: 'highlight_verse', reference: 'Moisés 6:34', text: 'Y el Señor dijo a Enoc: Abre tu boca y ella será llenada, y te daré elocuencia, porque todas las carnes están en mis manos, y haré lo que sea mi voluntad.' },
            { type: 'paragraph', text: 'La promesa es directa: no "te haré más listo" sino "abre la boca y la llenaré". El poder de Enoc no vino de su preparación personal sino de su disposición a hablar cuando Dios lo pedía. Esa es la diferencia entre el orador natural y el profeta.' },
          ],
        },
      ],
    },
    {
      id: 's2',
      title: 'El Vidente que Vio Todo',
      intro: { romanNumeral: 'II', title: 'La Visión de la Eternidad', paragraphs: ['Moisés 7 — lo que ningún otro vio'] },
      topics: [
        {
          id: 't2',
          title: 'Enoc vio el plan completo',
          blocks: [
            { type: 'paragraph', text: 'En Moisés 7, Enoc recibe una de las visiones más expansivas de toda la escritura. Ve la historia de la humanidad desde Adán hasta la Segunda Venida. Ve el diluvio. Ve la vida mortal de Cristo, su crucifixión. Ve la resurrección. Ve la reunión de Sión con la tierra en los últimos días. Todo antes de que sucediera nada de ello.' },
            { type: 'highlight_verse', reference: 'Moisés 7:47', text: 'Y Enoc contempló al día del Hijo del Hombre en la carne, y su alma se regocijó, diciendo: El Justo es levantado, y el Cordero es muerto desde la fundación del mundo.' },
            { type: 'doctrine_box', title: 'Dios Llora — Moisés 7:28-29', body: 'Enoc ve algo que lo desconcierta profundamente: Dios llora. "¿Cómo es posible que llores, viendo que eres santo?", pregunta. La respuesta de Dios revela una teología de la emoción divina única en toda la escritura: Dios llora por Sus hijos que se pierden. La Restauración devuelve un Dios que siente, que ama, que sufre con Sus hijos — no el Primer Motor Inmóvil de Aristóteles.' },
          ],
        },
      ],
    },
    {
      id: 's3',
      title: 'La Ciudad de Sión',
      intro: { romanNumeral: 'III', title: 'Un Solo Corazón y Una Sola Mente', paragraphs: ['El logro más grande de la historia humana'] },
      topics: [
        {
          id: 't3',
          title: '¿Qué hizo diferente a Sión?',
          blocks: [
            { type: 'highlight_verse', reference: 'Moisés 7:18', text: 'Y el Señor llamó a su pueblo SIÓN, porque eran de un corazón y una mente, y habitaban en justicia; y no había pobres entre ellos.' },
            { type: 'paragraph', text: 'Tres marcas de Sión: (1) unidad de corazón y mente, (2) justicia en la vida diaria, (3) ningún pobre entre ellos. No es un programa social — es la consecuencia de una transformación espiritual colectiva. Cuando la gente ama a Dios con todo el corazón, naturalmente ama al prójimo como a sí misma, y las consecuencias económicas y sociales son inevitables.' },
            { type: 'key_points', title: '¿Por qué Dios arrebató la ciudad?', points: ['La tierra se volvió tan malvada que Sión ya no podía existir en ella', 'Dios la preservó para que vuelva en los últimos días (DyC 45:11-14)', 'Su regreso es parte del orden de eventos de la Segunda Venida', 'La ciudad de Enoc y la nueva Sión terrenal se "besarán" en el milenio'] },
          ],
        },
      ],
    },
    {
      id: 's4',
      title: 'El Regreso de Enoc',
      intro: { romanNumeral: 'IV', title: 'DyC 45 — La Promesa del Milenio', paragraphs: ['Sión vuelve'] },
      topics: [
        {
          id: 't4',
          title: 'La promesa pendiente',
          blocks: [
            { type: 'highlight_verse', reference: 'DyC 45:11-12', text: 'Y con Enoc y su pueblo, que se aguardarán hasta una temporada; y la tierra descansará. Y luego será levantada y coronada con gloria, incluso con la presencia de Dios el Padre.' },
            { type: 'paragraph', text: 'La historia de Enoc no terminó cuando su ciudad fue arrebatada. DyC 45 revela que Enoc y su pueblo están esperando — preservados — hasta el día en que la nueva Sión terrenal esté lista para recibirlos. El proyecto de Sión que Enoc comenzó es el mismo que los Santos de los Últimos Días están construyendo hoy.' },
            { type: 'reflection', prompt: '¿Qué haría falta en tu comunidad local para que fuera una Sión? ¿Qué cambio comenzaría en ti?' },
          ],
        },
      ],
    },
  ],
}
