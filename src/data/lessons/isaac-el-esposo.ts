import type { Lesson } from '@/types/doctrine'

export const isaacElEsposo: Lesson = {
  id: 'isaac-el-esposo',
  moduleId: 'personajes-escrituras',
  title: 'Isaac y Rebeca',
  subtitle: 'El matrimonio más inusual del AT',
  description: 'Un siervo fue enviado a buscar esposa para Isaac. Rebeca eligió irse con él sin haberlo visto. El primer matrimonio de convenio en la historia — sellado por fe, no por conveniencia.',
  level: 'INTERMEDIO',
  icon: '💍',
  duration: 15,
  order: 3312,
  status: 'PUBLISHED',
  studyBodyPlain: '',
  originalBodyPlain: '',
  submoduleGroup: 'isaac',
  studySections: [
    {
      id: 's3',
      title: 'La Vida Silenciosa de Isaac',
      intro: { romanNumeral: 'III', title: 'El Patriarca Quieto', paragraphs: ['Su carácter en las pocas escenas que tenemos'] },
      topics: [
        {
          id: 't3',
          title: 'Isaac, el hombre de la meditación',
          blocks: [
            { type: 'paragraph', text: 'Isaac aparece pocas veces en la narrativa pero cada aparición es significativa. En Génesis 24:63, cuando sale a meditar al campo y ve venir a Rebeca, el texto usa el hebreo "lasuach" — un término de meditación o reflexión tranquila. En Génesis 26, cuando los filisteos tapan sus pozos, Isaac no responde con violencia sino que cava nuevos pozos repetidamente hasta encontrar uno donde no hay disputa. Su carácter es de mansedumbre notable.' },
            { type: 'highlight_verse', reference: 'Génesis 26:22', text: 'Y se apartó de allí, y abrió otro pozo, y no disputaron por él; y lo llamó Rehobot, y dijo: Porque ahora Jehová nos ha dado anchura, y fructificaremos en la tierra.' },
          ],
        },
      ],
    },
  ],
}
