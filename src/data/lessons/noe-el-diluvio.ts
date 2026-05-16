import type { Lesson } from '@/types/doctrine'

export const noeElDiluvio: Lesson = {
  id: 'noe-el-diluvio',
  moduleId: 'personajes-escrituras',
  title: 'El Diluvio',
  subtitle: '¿Global o local? El debate que importa',
  description: '¿Fue el diluvio realmente global? Las evidencias arqueológicas, geológicas y textuales. Y qué dice la perspectiva restaurada sobre el alcance y propósito del diluvio.',
  level: 'INTERMEDIO',
  icon: '🌊',
  duration: 15,
  order: 3112,
  status: 'PUBLISHED',
  studyBodyPlain: '',
  originalBodyPlain: '',
  submoduleGroup: 'noe',
  studySections: [
    {
      id: 's3',
      title: '¿Global o Local? El Debate del Diluvio',
      intro: { romanNumeral: 'III', title: 'La Pregunta que Importa', paragraphs: ['Evidencia y perspectiva restaurada'] },
      topics: [
        {
          id: 't3',
          title: 'Las dos posiciones y la evidencia',
          blocks: [
            { type: 'compare_grid', id: 'cg1', title: 'Diluvio Global vs. Local', rows: [
              { label: 'Extensión', a: 'Cubre toda la tierra habitable conocida por Noé', b: 'Cubre todo el mundo geológico literal' },
              { label: 'Evidencia geológica', a: 'Estratos locales del Mar Negro (Ryan/Pitman)', b: 'Difícil de reconciliar con geología moderna' },
              { label: 'Texto hebreo', a: '"Eretz" = tierra/región, no necesariamente globo', b: '"Kol" (todo) puede ser hipérbole hebrea' },
              { label: 'Propósito teológico', a: 'Juzgar a toda la humanidad conocida del momento', b: 'Demostrar poder absoluto de Dios sobre la creación' },
            ]},
            { type: 'paragraph', id: 'p4', text: 'La Iglesia no toma posición oficial sobre la extensión geológica del diluvio. Lo que sí es claro doctrinalmente: el diluvio fue un evento real, histórico, de escala suficiente para justificar el arca, y es un tipo del bautismo (1 Pedro 3:20-21 — las aguas del diluvio como tipo del bautismo que "ahora nos salva").' },
          ],
        },
      ],
    },
  ],
}
