import type { Lesson } from '@/types/doctrine'

export const melquisedecLaCiudad: Lesson = {
  id: 'melquisedec-la-ciudad',
  moduleId: 'personajes-escrituras',
  title: 'La Ciudad de Paz',
  subtitle: 'Salem — la ciudad que Melquisedec salvó',
  description: 'Alma 13 revela lo que la Biblia omite: Melquisedec convirtió a su pueblo de la maldad y construyó una ciudad de paz. Era un tipo del trabajo de Enoc.',
  level: 'AVANZADO',
  icon: '🏙️',
  duration: 15,
  order: 3211,
  status: 'PUBLISHED',
  studyBodyPlain: '',
  originalBodyPlain: '',
  submoduleGroup: 'melquisedec',
  studySections: [
    {
      id: 's2',
      title: 'Hebreos 7 — El Argumento de Pablo',
      intro: { romanNumeral: 'II', title: 'Superior al Levítico', paragraphs: ['Por qué el sacerdocio de Melquisedec supera al de Aarón'] },
      topics: [
        {
          id: 't2',
          title: 'El argumento de la superioridad',
          blocks: [
            { type: 'highlight_verse', reference: 'Hebreos 7:4,7', text: 'Considerad, pues, cuán grande era éste, a quien aun Abraham el patriarca dio diezmos del botín... Y sin discusión alguna, el menor es bendecido por el mayor.' },
            { type: 'paragraph', text: 'Pablo construye su argumento en capas: (1) Abraham le pagó diezmos a Melquisedec — en la lógica hebrea, el que recibe los diezmos es superior al que los paga; (2) Melquisedec bendijo a Abraham — el que bendice es mayor que el bendecido; (3) Leví, el antepasado de los sacerdotes levíticos, estaba "en los lomos de Abraham" cuando esto ocurrió — por tanto los sacerdotes levíticos pagaron diezmos a Melquisedec a través de su antepasado. El sacerdocio de Melquisedec es superioral levítico en todo sentido.' },
          ],
        },
      ],
    },
  ],
}
