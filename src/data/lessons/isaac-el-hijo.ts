import type { Lesson } from '@/types/doctrine'

export const isaacElHijo: Lesson = {
  id: 'isaac-el-hijo',
  moduleId: 'personajes-escrituras',
  title: 'Isaac — El Hijo Elegido',
  subtitle: '¿Por qué Isaac y no Ismael?',
  description: 'Abraham tuvo dos hijos: Ismael e Isaac. Ambos fueron amados. Solo uno heredó el convenio. La razón trasciende la biología y revela algo profundo sobre cómo Dios elige — y por qué Romanos 9 usó esta historia para explicar la naturaleza de la gracia.',
  level: 'INTERMEDIO',
  icon: '👦',
  duration: 20,
  order: 3310,
  status: 'PUBLISHED',
  studyBodyPlain: '',
  originalBodyPlain: '',
  submoduleGroup: 'isaac',
  studySections: [
    {
      id: 's1',
      title: 'Dos Hijos, Un Convenio',
      intro: { romanNumeral: 'I', title: 'Ismael también era hijo de Abraham', paragraphs: ['La elección de Isaac no fue rechazo de Ismael'] },
      topics: [
        {
          id: 't1',
          title: 'Lo que el texto dice sobre Ismael',
          blocks: [
            {
              type: 'paragraph',
              text: 'Es fácil malinterpretar la historia: como si Dios eligiera a Isaac y descartara a Ismael. El texto no lo permite. En Génesis 17:20, cuando Abraham intercede por Ismael, Dios responde: "En cuanto a Ismael, también te he oído; he aquí que le bendeciré, y le haré fructificar y multiplicar mucho en gran manera... y engrandeceré mucho a Ismael." Doce príncipes, una gran nación. Dios cumplió Su promesa a Ismael con la misma precisión que a Isaac.',
            },
            {
              type: 'highlight_verse',
              reference: 'Génesis 21:12-13',
              text: 'Mas Dios dijo a Abraham: No te parezca grave a causa del muchacho y de tu sierva; en todo lo que te dijere Sara, oye su voz, porque en Isaac te será llamada descendencia. Y también del hijo de la sierva haré una nación, porque es tu simiente.',
            },
            {
              type: 'doctrine_box',
              title: 'Elección no es rechazo',
              body: 'En la teología de la Restauración, "elegido" no significa "único amado". Significa "asignado a una tarea específica". Isaac fue elegido para llevar el linaje del convenio abrahámico — la línea que conduciría a Israel, a los profetas, y finalmente a Jesucristo. Ismael fue elegido para una promesa diferente, igualmente cumplida. El convenio tiene un portador; la bendición de Dios tiene muchos receptores.',
            },
          ],
        },
        {
          id: 't2',
          title: '¿Por qué la distinción?',
          blocks: [
            {
              type: 'paragraph',
              text: 'La diferencia no fue de carácter (el texto no presenta a Ismael como malvado) ni de amor paterno (Abraham amaba a ambos). La diferencia fue de origen: Ismael nació del intento humano de cumplir la promesa divina — Sara cedió su sierva Agar porque "tal vez" Dios usaría ese camino (Génesis 16:2). Isaac nació de lo que era humanamente imposible: el poder de Dios obrando fuera del cálculo humano. Esta distinción importa doctrinalmente.',
            },
            {
              type: 'compare_grid',
              title: 'Ismael e Isaac — la diferencia que Pablo vio',
              rows: [
                { label: 'Madre', a: 'Agar (sierva)', b: 'Sara (libre)' },
                { label: 'Origen', a: 'Concebido según la carne — plan humano', b: 'Concebido por el poder de Dios' },
                { label: 'Llamamiento', a: 'Prometido bendición y una gran nación', b: 'Portador del convenio abrahámico' },
                { label: 'Símbolo (Gál 4)', a: 'Figura de la obra de la ley', b: 'Figura de la obra de la gracia' },
              ],
            },
          ],
        },
      ],
    },
    {
      id: 's2',
      title: 'Romanos 9 — La Elección Soberana',
      intro: { romanNumeral: 'II', title: 'Pablo usó a Isaac para explicar la gracia', paragraphs: ['El argumento más difícil del Nuevo Testamento'] },
      topics: [
        {
          id: 't3',
          title: 'El argumento de Pablo en Romanos 9',
          blocks: [
            {
              type: 'paragraph',
              text: 'En Romanos 9, Pablo enfrenta la pregunta más difícil: si Israel es el pueblo elegido de Dios, ¿por qué muchos israelitas rechazaron al Mesías? Su respuesta usa a Isaac: "Porque no todos los que descienden de Israel son israelitas, ni por ser descendientes de Abraham son todos hijos, sino: En Isaac te será llamada descendencia" (Romanos 9:6-7). Pablo distingue entre descendencia física y descendencia de la promesa. Ser hijo de Abraham biológicamente no garantiza heredar la promesa del convenio.',
            },
            {
              type: 'highlight_verse',
              reference: 'Romanos 9:8',
              text: 'Esto es: No los que son hijos según la carne son los hijos de Dios, sino que los que son hijos según la promesa son contados como descendencia.',
            },
            {
              type: 'paragraph',
              text: 'Para Pablo, Isaac es el prototipo de la elección por gracia: no fue elegido por sus méritos (aún no había nacido cuando Dios hizo la promesa a Abraham), sino por el propósito soberano de Dios. Esta doctrina — que el convenio opera por la iniciativa divina, no por el mérito humano — es la piedra angular de la teología paulina de la gracia.',
            },
          ],
        },
        {
          id: 't4',
          title: 'La aplicación para la Restauración',
          blocks: [
            {
              type: 'paragraph',
              text: 'José Smith enseñó que ser "linaje de Abraham" por adopción — no por sangre — es tan real y vinculante como el linaje biológico. Las bendiciones patriarcales a menudo declaran la tribu de Israel del receptor, y muchos no tienen sangre israelita literal. El principio de Isaac se extiende: el convenio es transferido por Dios a quienes Él designa, independientemente del linaje de nacimiento. "No la carne sino la promesa" es el principio que define quién es heredero del convenio abrahámico en la Restauración.',
            },
            {
              type: 'key_points',
              title: 'El principio de Isaac en la Restauración',
              points: [
                'Las bendiciones patriarcales declaran linaje tribal — adopción espiritual, no solo biológica',
                'DyC 86:8-10: los miembros fieles son "herederos según la promesa" (lenguaje directo de Romanos 9)',
                'Abraham 2:10: "en ti y en tu simiente... serán benditas todas las familias de la tierra" — incluye a todos mediante el convenio',
                'La elección no es exclusiva sino expansiva: Dios busca ampliar el círculo del convenio, no restringirlo',
              ],
            },
          ],
        },
      ],
    },
  ],
}
