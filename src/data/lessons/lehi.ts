import type { Lesson } from '@/types/doctrine'

export const lehi: Lesson = {
  id: 'lehi',
  moduleId: 'personajes-escrituras',
  title: 'Lehi — El Patriarca que Dejó Todo',
  subtitle: 'El padre que guió a su familia al desierto por revelación',
  description: 'Lehi era un próspero ciudadano de Jerusalén cuando tuvo la visión que cambió su vida. Dejó su oro y su plata, su casa y su tierra. Sus hijos cuestionaron, se rebelaron, intentaron matarlo. Y él siguió guiándolos hacia una tierra prometida que nunca vería en vida. Su visión del árbol de la vida es la alegoría más profunda del Libro de Mormón.',
  level: 'INTERMEDIO',
  icon: '🌳',
  duration: 65,
  order: 70,
  status: 'PUBLISHED',
  studyBodyPlain: '',
  originalBodyPlain: '',
  studySections: [
    {
      id: 's1',
      title: 'El Llamado en Jerusalén',
      intro: { romanNumeral: 'I', heading: '1 Nefi 1 — El Profeta en la Ciudad Condenada', subheading: 'Profetizó a Jerusalén y nadie lo escuchó' },
      topics: [
        {
          id: 't1',
          title: 'La primera visión de Lehi',
          blocks: [
            { type: 'paragraph', id: 'p1', text: '1 Nefi 1:6-7 describe la visión inaugural de Lehi: "Aconteció que mientras oraba al Señor, hubo una columna de fuego que habitó sobre una roca que estaba ante él... Y vio y oyó mucho." La reacción física fue casi idéntica a la de Juan en Apocalipsis o de Pablo en el camino a Damasco: Lehi se postró. Luego tuvo otra visión donde recibió un libro y lo leyó: la destrucción de Jerusalén. Salió a proclamarlo. El pueblo intentó matarlo.' },
            { type: 'highlight_verse', id: 'v1', reference: '1 Nefi 2:4', text: 'Y aconteció que siendo obediente a la palabra del Señor, salió al desierto. Y dejó su casa y la tierra de su herencia, y su oro y su plata y sus cosas preciosas, y no llevó nada, excepto su familia y provisiones y tiendas, y se fue al desierto.' },
          ],
        },
      ],
    },
    {
      id: 's2',
      title: 'La Visión del Árbol de la Vida',
      intro: { romanNumeral: 'II', heading: '1 Nefi 8 — La Alegoría más Rica del Libro de Mormón', subheading: 'Un sueño que es un mapa espiritual' },
      topics: [
        {
          id: 't2',
          title: 'El árbol, la barra, la niebla y el edificio',
          blocks: [
            { type: 'paragraph', id: 'p2', text: 'La visión de Lehi en 1 Nefi 8 es la alegoría central del Libro de Mormón. El árbol de fruto blanco y dulcísimo = el amor de Dios. La barra de hierro = la palabra de Dios. La niebla de oscuridad = las tentaciones del diablo. El edificio grande y espacioso = el orgullo del mundo. Los caminos que llevan al edificio. Las personas que se aferran a la barra y llegan al árbol. Las que llegan y luego se avergüenzan por las burlas desde el edificio. Lehi vio a algunos de sus hijos llegar al árbol — y a otros alejarse.' },
            { type: 'doctrine_box', id: 'db1', title: 'El Corazón de un Padre', content: '1 Nefi 8:37-38 es uno de los pasajes más emotivos del Libro de Mormón: "Y Lehi los exhortó con toda la energía de su alma, y con todas las palabras que podía decir, para que se acercaran y comieran del fruto. Y después que les hubo dicho estas cosas, exhaló su espíritu con estas palabras." Lehi usó sus últimas energías en llamar a sus hijos. La paternidad espiritual al precio máximo.' },
          ],
        },
      ],
    },
    {
      id: 's3',
      title: 'Las Bendiciones Patriarcales',
      intro: { romanNumeral: 'III', heading: '2 Nefi 1-4 — Las Palabras Finales de Lehi', subheading: 'Un padre que bendice a cada hijo' },
      topics: [
        {
          id: 't3',
          title: 'Las últimas palabras como herencia',
          blocks: [
            { type: 'highlight_verse', id: 'v2', reference: '2 Nefi 1:15', text: 'Pero he aquí, el Señor ha redimido mi alma del infierno; he visto su gloria, y he quedado envuelto perpetuamente en los brazos de su amor.' },
            { type: 'paragraph', id: 'p3', text: '2 Nefi 1-4 registra las bendiciones patriarcales de Lehi a sus hijos y nietos. A Lamanita y Lemuel, que se habían rebelado, les extiende amor paterno y exhortación. A Nefi, le augura liderazgo. A Jacob, le enseña la doctrina de la redención. A José, le habla de la promesa a su ancestro José de Egipto. El patrón de Génesis 49 (las bendiciones de Jacob a sus doce hijos) se repite en una tierra nueva.' },
          ],
        },
      ],
    },
    {
      id: 's4',
      title: 'El Legado de Lehi',
      intro: { romanNumeral: 'IV', heading: 'El Padre que Creó un Pueblo', subheading: 'Todo el Libro de Mormón nace de su obediencia' },
      topics: [
        {
          id: 't4',
          title: 'Una decisión que cambió una civilización',
          blocks: [
            { type: 'paragraph', id: 'p4', text: 'Cuando Lehi obedeció y salió al desierto, no sabía que su acto de fe crearía un pueblo entero en un continente nuevo durante mil años. El Libro de Mormón es el registro de sus descendientes. Las naciones nefita y lamanita, el pueblo de Mulek, la civilización Jaredita — toda la historia del hemisferio occidental sagrado pasa a través de la decisión de ese hombre de dejar su casa en Jerusalén y confiar en la voz de Dios.' },
            { type: 'reflection', id: 'r1', prompt: '¿Hay una "tierra prometida" — un destino espiritual, una dirección de vida — hacia la que Dios te ha llamado pero que aún no puedes ver claramente? ¿Qué parte de tu "oro y plata" (seguridad material, comodidad, status) te resulta más difícil dejar?' },
          ],
        },
      ],
    },
  ],
}
