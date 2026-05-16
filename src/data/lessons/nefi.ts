import type { Lesson } from '@/types/doctrine'

export const nefi: Lesson = {
  id: 'nefi',
  moduleId: 'personajes-escrituras',
  title: 'Nefi — "Iré y Haré"',
  subtitle: 'El joven que fue conducido sin saber de antemano',
  description: '"Iré y haré las cosas que el Señor ha mandado, porque sé que el Señor no da mandamientos a los hijos de los hombres a no ser que les prepare un camino." Nefi nunca sabía de antemano cómo obedecería. Solo sabía que obedecería. Su historia es el modelo del discipulado en el Libro de Mormón.',
  level: 'INTERMEDIO',
  icon: '⚡',
  duration: 65,
  order: 71,
  status: 'PUBLISHED',
  studyBodyPlain: '',
  originalBodyPlain: '',
  studySections: [
    {
      id: 's1',
      title: '"Iré y Haré"',
      intro: { romanNumeral: 'I', title: '1 Nefi 3:7 — El Versículo más Citado del Libro de Mormón', paragraphs: ['Obediencia sin hoja de ruta'] },
      topics: [
        {
          id: 't1',
          title: 'La promesa que precedió al plan',
          blocks: [
            { type: 'highlight_verse', id: 'v1', reference: '1 Nefi 3:7', text: 'Y aconteció que yo, Nefi, dije a mi padre: Iré y haré las cosas que el Señor ha mandado, porque sé que el Señor no da mandamientos a los hijos de los hombres a no ser que les prepare un camino para que puedan cumplir lo que les manda.' },
            { type: 'paragraph', id: 'p1', text: 'Este versículo se pronunció antes de que Nefi supiera cómo obtener las planchas de bronce de Labán. Había fallado dos veces: el primer intento fue rechazado con palabras, el segundo con espadas. El principio que Nefi enuncia no es una garantía de éxito sin esfuerzo — es la convicción de que Dios provee caminos para los mandamientos que da. La tercera vez, fue "conducido por el Espíritu, sin saber de antemano las cosas que haría" (1 Nefi 4:6).' },
          ],
        },
      ],
    },
    {
      id: 's2',
      title: 'La Visión del Árbol de la Vida',
      intro: { romanNumeral: 'II', title: '1 Nefi 11-14 — La Expansión de la Visión de Lehi', paragraphs: ['El joven que quiso entender, no solo recibir'] },
      topics: [
        {
          id: 't2',
          title: 'Creer para ver',
          blocks: [
            { type: 'paragraph', id: 'p2', text: 'Después de escuchar la visión del árbol de la vida de su padre, Nefi quiso ver y entender las mismas cosas. 1 Nefi 11:1: "Y aconteció que después que yo, Nefi, hubiera deseado esto en mi corazón, he aquí que fui arrebatado en el Espíritu del Señor, sí, a un monte muy alto." La condición para la visión fue desear comprenderla. El Espíritu preguntó primero: "¿Crees tú que tu padre vio el árbol del que habló?" La respuesta: "Sí, lo creo." El creer precedió al ver.' },
            { type: 'doctrine_box', id: 'db1', title: 'La Expansión de la Visión', body: 'La visión de Nefi en 1 Nefi 11-14 toma la visión de su padre y la expande con explicación interpretativa: el árbol = el amor de Dios y María que da a luz al Hijo de Dios; la barra de hierro = la palabra de Cristo; el edificio = el orgullo del mundo; los ríos de agua sucia = la inmundicia del infierno. Nefi recibe no solo la visión sino la hermenéutica para interpretar cada símbolo.' },
          ],
        },
      ],
    },
    {
      id: 's3',
      title: 'El Lamento de Nefi',
      intro: { romanNumeral: 'III', title: '2 Nefi 4:17-35 — "Oh Alma Miserable"', paragraphs: ['El pasaje más humano del más heroico de los profetas'] },
      topics: [
        {
          id: 't3',
          title: 'La oscilación entre debilidad y alabanza',
          blocks: [
            { type: 'highlight_verse', id: 'v2', reference: '2 Nefi 4:17,19', text: 'No obstante, en quién me gocé son las cosas del Señor; y no debo regocijarme en mi carne. Mi alma alaba a Dios; sí, y clamará a Dios mientras viva... Sin embargo, sé en quién he confiado.' },
            { type: 'paragraph', id: 'p3', text: '2 Nefi 4:17-35, el "Salmo de Nefi," es el texto más íntimo del Libro de Mormón. Nefi — el mismo que mató a Labán, construyó un navío, vio a Cristo — lamenta sus propias debilidades: "¡Oh alma miserable! ¿Por qué cediste al pecado? ¿Por qué me enojé a causa de mi enemigo?" No hay indicación de qué pecado específico pesaba sobre él. Hay el testimonio de que la lucha espiritual no termina con la grandeza lograda.' },
          ],
        },
      ],
    },
    {
      id: 's4',
      title: 'El Constructor de Naciones',
      intro: { romanNumeral: 'IV', title: 'Nefi como Fundador de Civilización', paragraphs: ['Del desierto al templo'] },
      topics: [
        {
          id: 't4',
          title: 'El legado constructivo',
          blocks: [
            { type: 'paragraph', id: 'p4', text: 'Nefi no solo fue profeta — fue constructor. 2 Nefi 5 describe la Ciudad de Nefi: el templo construido "a la manera del templo de Salomón" con materiales preciosos de la nueva tierra, las leyes establecidas, las artes y oficios enseñados. De un grupo de familia refugiada en tierra nueva, Nefi creó una civilización. El mismo principio que aplicó a la obediencia — "haré" — aplicó a la construcción de un pueblo.' },
            { type: 'reflection', id: 'r1', prompt: '¿Hay un mandamiento o dirección que Dios te ha dado donde todavía estás esperando saber "cómo" antes de decir "iré y haré"? ¿Qué cambiaría si primero dijeras "iré" y luego confiaran en que el camino aparecerá?' },
          ],
        },
      ],
    },
  ],
}
