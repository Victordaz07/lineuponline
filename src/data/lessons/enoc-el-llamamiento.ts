import type { Lesson } from '@/types/doctrine'

export const enocElLlamamiento: Lesson = {
  id: 'enoc-el-llamamiento',
  moduleId: 'personajes-escrituras',
  title: 'Enoc — El Llamamiento',
  subtitle: 'Tardo en el habla, grande en fe',
  description: 'Enoc era joven e inseguro cuando Dios lo llamó. Su respuesta — \'Soy tardo en el habla\' — es el patrón de todo llamamiento profético. Dios prometió llenar su boca. Y lo hizo.',
  level: 'AVANZADO',
  icon: '🏙️',
  duration: 15,
  order: 3010,
  status: 'PUBLISHED',
  studyBodyPlain: '',
  originalBodyPlain: '',
  submoduleGroup: 'enoc',
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
  ],
}
