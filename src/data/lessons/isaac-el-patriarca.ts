import type { Lesson } from '@/types/doctrine'

export const isaacElPatriarca: Lesson = {
  id: 'isaac-el-patriarca',
  moduleId: 'personajes-escrituras',
  title: 'El Patriarca Tranquilo',
  subtitle: 'El más silencioso de los padres fundadores',
  description: 'Isaac no tiene grandes discursos ni aventuras dramáticas. Su grandeza es la constancia: mantuvo los pozos de su padre, renovó los convenios de su padre, transmitió la promesa a sus hijos.',
  level: 'INTERMEDIO',
  icon: '🏕️',
  duration: 15,
  order: 3313,
  status: 'PUBLISHED',
  studyBodyPlain: '',
  originalBodyPlain: '',
  submoduleGroup: 'isaac',
  studySections: [
    {
      id: 's4',
      title: 'Las Bendiciones de Isaac',
      intro: { romanNumeral: 'IV', title: 'El Poder de las Palabras Proféticas', paragraphs: ['Génesis 27 — una bendición que no se puede revocar'] },
      topics: [
        {
          id: 't4',
          title: 'La bendición que cambió la historia',
          blocks: [
            { type: 'paragraph', id: 'p4', text: 'La historia de Jacob robando la bendición de Esaú (Génesis 27) es perturbadora moralmente. Pero revela algo profundo sobre la teología de la bendición patriarcal: Isaac dice "le bendije, y será bendito" (v.33) — incluso después de descubrir el engaño. En la teología hebrea, la bendición pronunciada por un patriarca bajo inspiración tiene peso real. No es simplemente un deseo piadoso — es una declaración profética que el cielo reconoce.' },
            { type: 'reflection', id: 'r1', prompt: '¿Qué "bendición" has recibido de tus padres o ancestros — espiritual, de carácter, de fe — que llevas contigo aunque nunca fue pronunciada formalmente? ¿Cómo honras esa herencia?' },
          ],
        },
      ],
    },
  ],
}
