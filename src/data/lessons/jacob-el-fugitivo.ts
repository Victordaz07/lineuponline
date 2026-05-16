import type { Lesson } from '@/types/doctrine'

export const jacobElFugitivo: Lesson = {
  id: 'jacob-el-fugitivo',
  moduleId: 'personajes-escrituras',
  title: 'La Escalera al Cielo',
  subtitle: 'La visión en la noche de la huida',
  description: 'Huyendo de su hermano en la oscuridad, Jacob durmió con una piedra por almohada — y vio una escalera que llegaba al cielo con ángeles subiendo y bajando. Dios renovó la promesa de Abraham en el peor momento.',
  level: 'INTERMEDIO',
  icon: '🌙',
  duration: 15,
  order: 3411,
  status: 'PUBLISHED',
  studyBodyPlain: '',
  originalBodyPlain: '',
  submoduleGroup: 'jacob-israel',
  studySections: [
    {
      id: 's2',
      title: 'El Amor que Esperó 14 Años',
      intro: { romanNumeral: 'II', title: 'Raquel — La Lección del Tiempo', paragraphs: ['Génesis 29 — el amor que cuesta'] },
      topics: [
        {
          id: 't2',
          title: 'Siete años como pocos días',
          blocks: [
            { type: 'highlight_verse', reference: 'Génesis 29:20', text: 'Así sirvió Jacob por Raquel siete años; y le parecieron como pocos días, porque la amaba.' },
            { type: 'paragraph', text: 'Jacob trabajó 7 años para casarse con Raquel y fue engañado en la noche de bodas con Lea — una justicia poética: el engañador fue engañado. Trabajó otros 7 años por Raquel. Ese total de 14 años de espera y trabajo por amor a una mujer es uno de los relatos más tiernos del AT. El hombre que siempre tomó atajos, en este caso pagó el precio completo.' },
          ],
        },
      ],
    },
  ],
}
