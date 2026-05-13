import type { Lesson } from '@/types/doctrine'

export const mariaLaMadre: Lesson = {
  id: 'maria-la-madre',
  moduleId: 'personajes-escrituras',
  title: 'María — La Madre del Hijo de Dios',
  subtitle: '"Hágase conmigo conforme a tu palabra"',
  description: 'María tenía probablemente 14-16 años cuando Gabriel le dijo que sería la madre del Hijo de Dios. Su respuesta fue fiat — consentimiento puro. Cargó a Dios en su vientre. Guardó todas estas cosas en su corazón. Estuvo al pie de la cruz. Su Magnificat es uno de los más grandes poemas bíblicos.',
  level: 'INTERMEDIO',
  icon: '🕊️',
  duration: 60,
  order: 64,
  status: 'PUBLISHED',
  studyBodyPlain: '',
  originalBodyPlain: '',
  studySections: [
    {
      id: 's1',
      title: 'La Anunciación',
      intro: { romanNumeral: 'I', title: 'Lucas 1 — Gabriel y la Joven de Nazaret', paragraphs: ['El consentimiento que hizo posible la Encarnación'] },
      topics: [
        {
          id: 't1',
          title: 'La respuesta más importante de la historia',
          blocks: [
            { type: 'paragraph', text: 'Gabriel se apareció a María con el anuncio que cambiaría el mundo. Lucas 1:29 dice que "se turbó" y discurrió qué tipo de salutación era esa — reacción completamente humana. Su primera pregunta fue práctica: "¿Cómo será esto? pues no conozco varón." Cuando Gabriel explicó que el Espíritu Santo vendría sobre ella y el poder del Altísimo la cubriría, María dijo una de las palabras más grandes de la historia: "He aquí la sierva del Señor; hágase conmigo conforme a tu palabra."' },
            { type: 'highlight_verse', reference: 'Lucas 1:38', text: 'Entonces María dijo: He aquí la sierva del Señor; hágase conmigo conforme a tu palabra. Y el ángel se fue de su presencia.' },
          ],
        },
      ],
    },
    {
      id: 's2',
      title: 'El Magnificat',
      intro: { romanNumeral: 'II', title: 'Lucas 1:46-55 — El Cántico de María', paragraphs: ['La teología más profunda en el corazón de la más joven'] },
      topics: [
        {
          id: 't2',
          title: 'Una teóloga sin credenciales',
          blocks: [
            { type: 'highlight_verse', reference: 'Lucas 1:46-49', text: 'Entonces María dijo: Engrandece mi alma al Señor; y mi espíritu se regocija en Dios mi Salvador. Porque ha mirado la bajeza de su sierva; pues he aquí, desde ahora me dirán bienaventurada todas las generaciones. Porque me ha hecho grandes cosas el Poderoso; y Santo es su nombre.' },
            { type: 'paragraph', text: 'El Magnificat de María (Lucas 1:46-55) es teología pura en forma poética. Una adolescente de Nazaret, sin educación rabínica, pronuncia un poema que integra a Elías, Ana (1 Samuel 2), los Salmos, y los Profetas. Su comprensión del carácter de Dios — que exalta a los humildes y derriba a los poderosos, que llena de bienes a los hambrientos — refleja una formación espiritual profunda. Los espirituales latinos lo han cantado diariamente por 1,500 años.' },
          ],
        },
      ],
    },
    {
      id: 's3',
      title: 'Guardar en el Corazón',
      intro: { romanNumeral: 'III', title: 'Lucas 2 — "Guardaba Todas estas Cosas"', paragraphs: ['La madre que no entendía todo pero confiaba'] },
      topics: [
        {
          id: 't3',
          title: 'La fe sin comprensión total',
          blocks: [
            { type: 'paragraph', text: 'Lucas 2 usa dos veces la misma frase sobre María: "guardaba todas estas cosas en su corazón" (2:19, 2:51). En el primer caso, después del anuncio de los pastores. En el segundo, después de que el niño de doce años se quedó en el templo y respondió: "¿No sabíais que en los negocios de mi Padre me es necesario estar?" Lucas añade: "ellos no entendieron las palabras que les habló." María no lo entendía todo. Pero lo guardaba. La fidelidad no requiere comprensión completa — requiere preservar lo que se recibe.' },
          ],
        },
      ],
    },
    {
      id: 's4',
      title: 'Al Pie de la Cruz',
      intro: { romanNumeral: 'IV', title: 'Juan 19 — "Madre, ahí tienes a tu Hijo"', paragraphs: ['La lealtad que permaneció hasta el final'] },
      topics: [
        {
          id: 't4',
          title: 'El cumplimiento de la profecía de Simeón',
          blocks: [
            { type: 'paragraph', text: 'Cuando el niño Jesús fue presentado en el templo, Simeón profetizó a María: "y una espada traspasará tu misma alma" (Lucas 2:35). Juan 19:25-27 registra el cumplimiento: María estaba al pie de la cruz. Jesús, muriendo, se preocupó por ella: encomendó su cuidado al discípulo amado. La mujer que consintió traer al mundo al Salvador del mundo presenció la muerte de ese Salvador. La misma fe que dijo "hágase conmigo" sostuvo de pie debajo de la cruz.' },
            { type: 'reflection', prompt: '¿Hay algún consentimiento que Dios te pide — un "hágase conmigo conforme a tu palabra" — que requiere fe sin comprensión completa de las implicaciones? ¿Qué te enseña el ejemplo de María sobre dar ese consentimiento?' },
          ],
        },
      ],
    },
  ],
}
