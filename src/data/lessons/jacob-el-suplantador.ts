import type { Lesson } from '@/types/doctrine'

export const jacobElSuplantador: Lesson = {
  id: 'jacob-el-suplantador',
  moduleId: 'personajes-escrituras',
  title: 'El Suplantador',
  subtitle: 'El que compró la primogenitura con lentejas',
  description: 'Jacob era el segundo gemelo — pero desde el vientre luchó por ser el primero. Compró la primogenitura con un plato de lentejas. Engañó a su padre ciego. Y tuvo que huir. ¿Era un villano o un hombre con visión?',
  level: 'INTERMEDIO',
  icon: '🤚',
  duration: 15,
  order: 3410,
  status: 'PUBLISHED',
  studyBodyPlain: '',
  originalBodyPlain: '',
  submoduleGroup: 'jacob-israel',
  studySections: [
    {
      id: 's1',
      title: 'El Suplantador',
      intro: { romanNumeral: 'I', heading: '"Yaaqov" — El que Agarra el Talón', subheading: 'Un nombre que define un carácter' },
      topics: [
        {
          id: 't1',
          title: 'Jacob nació tomando',
          blocks: [
            { type: 'paragraph', id: 'p1', text: 'Jacob nació agarrando el talón de su gemelo Esaú (Génesis 25:26). Su nombre en hebreo, "Yaaqov", significa literalmente "el que agarra el talón" — pero también "el que suplanta" o "el que engaña". Es un nombre profético: toda la primera mitad de su vida, Jacob obtuvo lo que quería por medio de engaño. La primogenitura de Esaú por un plato de lentejas. La bendición de Isaac disfrazado como Esaú. Huyó de las consecuencias.' },
            { type: 'highlight_verse', id: 'v1', reference: 'Génesis 25:31-33', text: 'Y Jacob respondió: Véndeme en este día tu primogenitura. Entonces dijo Esaú: He aquí yo me voy a morir; ¿para qué, pues, me servirá la primogenitura? Y Jacob dijo: Júramelo en este día. Y él le juró, y vendió a Jacob su primogenitura.' },
            { type: 'paragraph', id: 'p2', text: 'Un detalle teológico importante: Esaú "menospreció" su primogenitura (v.34). Hebreos 12:16 lo llamará "profano" por ello. La transacción no fue únicamente un engaño de Jacob — fue la consecuencia de que Esaú mismo no valoraba lo que tenía. La primogenitura conllevaba responsabilidad sacerdotal y patriarcal, no solo herencia material.' },
          ],
        },
      ],
    },
  ],
}
