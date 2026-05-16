import type { Lesson } from '@/types/doctrine'

export const sara: Lesson = {
  id: 'sara',
  moduleId: 'personajes-escrituras',
  title: 'Sara — La Madre de las Naciones',
  subtitle: 'La fe de una mujer que esperó 90 años',
  description: 'Sara esperó un hijo prometido durante décadas, vio pasar su fertilidad, y al final rió — con risa de incredulidad primero, y de gozo después. Hebreos 11 la incluye en el salón de la fe. Su historia es sobre esperar lo imposible sin perder la identidad.',
  level: 'INTERMEDIO',
  icon: '👑',
  duration: 55,
  order: 60,
  status: 'PUBLISHED',
  studyBodyPlain: '',
  originalBodyPlain: '',
  studySections: [
    {
      id: 's1',
      title: 'La Promesa a una Mujer Estéril',
      intro: { romanNumeral: 'I', title: 'Génesis 12 — "Tu descendencia heredará esta tierra"', paragraphs: ['Sara escuchó la promesa pero no fue nombrada'] },
      topics: [
        {
          id: 't1',
          title: 'La mujer detrás del llamado de Abram',
          blocks: [
            { type: 'paragraph', id: 'p1', text: 'Cuando Dios llamó a Abram a dejar Ur, Sara partió con él. Génesis 11:30 ya había advertido: "Mas Sarai era estéril, y no tenía hijo." La promesa de una descendencia numerosa llegó a un matrimonio sin hijos. A lo largo de Génesis 12-17, Dios renueva la promesa varias veces a Abram — pero Sara debe confiar sin recibir la misma comunicación directa. Fe secundaria, basada en el testimonio de su esposo sobre las promesas recibidas, durante décadas.' },
            { type: 'highlight_verse', id: 'v1', reference: 'Génesis 17:15-16', text: 'Dijo también Dios a Abraham: A Sarai tu mujer no la llamarás Sarai, mas Sara será su nombre. Y la bendeciré, y también te daré de ella hijo; sí, la bendeciré, y vendrá a ser madre de naciones; reyes de pueblos vendrán de ella.' },
          ],
        },
      ],
    },
    {
      id: 's2',
      title: 'La Risa de Sara',
      intro: { romanNumeral: 'II', title: 'Génesis 18 — Los Tres Visitantes', paragraphs: ['La risa que pasó de la incredulidad al gozo'] },
      topics: [
        {
          id: 't2',
          title: 'Reír ante lo imposible',
          blocks: [
            { type: 'paragraph', id: 'p2', text: 'Cuando los tres visitantes anunciaron que Sara tendría un hijo, ella estaba escuchando en la entrada de la tienda. Tenía noventa años. Abraham tenía cien. Génesis 18:12: "Se rió, pues, Sara entre sí, diciendo: ¿Después que he envejecido tendré deleite?" El visitante lo oyó — y dijo: "¿Hay para Dios alguna cosa difícil?" La risa de Sara fue un momento de humanidad auténtica: la mente racional encontrando el límite de su capacidad para creer. No fue descalificada por ello.' },
            { type: 'doctrine_box', id: 'db1', title: 'Isaac — "Risa"', body: 'Cuando nació el hijo, Sara dijo: "Dios me ha hecho reír, y cualquiera que lo oyere, se reirá conmigo" (Génesis 21:6). El nombre Isaac en hebreo significa "risa" o "él ríe." Sara tomó el momento de su mayor vergüenza — reírse de Dios — y lo transformó en el nombre del cumplimiento. Lo que empezó como risa de incredulidad terminó como risa de gozo. El niño mismo portaba el testimonio de la transformación.' },
          ],
        },
      ],
    },
    {
      id: 's3',
      title: 'La Fe de Sara en el Hall de la Fe',
      intro: { romanNumeral: 'III', title: 'Hebreos 11 — Entre los Gigantes', paragraphs: ['La única mujer nombrada individualmente'] },
      topics: [
        {
          id: 't3',
          title: 'Reconocida por su fe',
          blocks: [
            { type: 'highlight_verse', id: 'v2', reference: 'Hebreos 11:11', text: 'Por la fe también la misma Sara, siendo estéril, recibió fuerza para concebir; y dio a luz aun fuera del tiempo de la edad, porque creyó que era fiel quien lo había prometido.' },
            { type: 'paragraph', id: 'p3', text: 'Hebreos 11 nombra a Sara específicamente entre los héroes de la fe — junto a Abel, Enoc, Noé, Abraham, Moisés. Es la única mujer nombrada individualmente en este catálogo. El autor de Hebreos recuerda su risa como fe, no como incredulidad. La interpretación inspirada transforma el momento de debilidad de Sara en el momento definitorio de su fe: confió en que Dios era fiel aunque su cuerpo dijo que era imposible.' },
          ],
        },
      ],
    },
    {
      id: 's4',
      title: 'La Identidad de Sara en la Restauración',
      intro: { romanNumeral: 'IV', title: 'DyC 132 — El Convenio Eterno', paragraphs: ['Sara como modelo del convenio celestial'] },
      topics: [
        {
          id: 't4',
          title: 'Su nombre en la doctrina restaurada',
          blocks: [
            { type: 'paragraph', id: 'p4', text: 'DyC 132:65 menciona a Sara en el contexto del matrimonio celestial: las esposas de Abraham "fueron dadas a él de Dios y a él pertenecían bajo la ley del sacerdocio." Sara no fue simplemente la esposa de Abraham — fue participante del convenio eterno que forjó la línea de Israel. La restauración eleva su papel de sujeto pasivo de la promesa a participante activa del convenio eterno.' },
            { type: 'reflection', id: 'r1', prompt: '¿En qué ámbito de tu vida estás esperando un cumplimiento prometido que parece imposible dado donde estás ahora? ¿Cómo cambia el ejemplo de Sara — noventa años de espera, una risa de incredulidad, y aun así recibió — tu perspectiva sobre esa espera?' },
          ],
        },
      ],
    },
  ],
}
