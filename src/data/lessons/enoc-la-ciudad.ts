import type { Lesson } from '@/types/doctrine'

export const enocLaCiudad: Lesson = {
  id: 'enoc-la-ciudad',
  moduleId: 'personajes-escrituras',
  title: 'La Ciudad de Sión',
  subtitle: 'Un solo corazón y una sola mente',
  description: 'Enoc construyó la única ciudad en la historia humana que Dios llamó Sión: de un corazón, de una mente, sin pobres. No fue un programa social — fue una transformación espiritual colectiva.',
  level: 'AVANZADO',
  icon: '🏛️',
  duration: 15,
  order: 3012,
  status: 'PUBLISHED',
  studyBodyPlain: '',
  originalBodyPlain: '',
  submoduleGroup: 'enoc',
  studySections: [
    {
      id: 's3',
      title: 'La Ciudad de Sión',
      intro: { romanNumeral: 'III', heading: 'Un Solo Corazón y Una Sola Mente', subheading: 'El logro más grande de la historia humana' },
      topics: [
        {
          id: 't3',
          title: '¿Qué hizo diferente a Sión?',
          blocks: [
            { type: 'highlight_verse', id: 'v3', reference: 'Moisés 7:18', text: 'Y el Señor llamó a su pueblo SIÓN, porque eran de un corazón y una mente, y habitaban en justicia; y no había pobres entre ellos.' },
            { type: 'paragraph', id: 'p4', text: 'Tres marcas de Sión: (1) unidad de corazón y mente, (2) justicia en la vida diaria, (3) ningún pobre entre ellos. No es un programa social — es la consecuencia de una transformación espiritual colectiva. Cuando la gente ama a Dios con todo el corazón, naturalmente ama al prójimo como a sí misma, y las consecuencias económicas y sociales son inevitables.' },
            { type: 'key_points', id: 'kp1', title: '¿Por qué Dios arrebató la ciudad?', points: ['La tierra se volvió tan malvada que Sión ya no podía existir en ella', 'Dios la preservó para que vuelva en los últimos días (DyC 45:11-14)', 'Su regreso es parte del orden de eventos de la Segunda Venida', 'La ciudad de Enoc y la nueva Sión terrenal se "besarán" en el milenio'] },
          ],
        },
      ],
    },
  ],
}
