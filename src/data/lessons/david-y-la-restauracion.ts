import type { Lesson } from '@/types/doctrine'
import { davidAssets } from '@/data/davidAssets'

export const davidYLaRestauracion: Lesson = {
  id: 'david-y-la-restauracion',
  moduleId: 'personajes-escrituras',
  submoduleGroup: 'david',
  title: 'David y la Restauración',
  subtitle: 'El pacto eterno, el Mesías prometido y el destino final del rey-poeta',
  description:
    'Dios hizo a David un pacto eterno: su trono duraría para siempre. Cada profecía del Nuevo Testamento sobre el "hijo de David" cumple ese pacto en Cristo. La Restauración añade el retrato más completo: DyC 113 identifica al Vástago de Isaí, y la misericordia de Dios sobre David tiene precisión doctrinal que la Biblia sola no puede dar.',
  level: 'AVANZADO',
  icon: '✨',
  iconImage: davidAssets.lessons.restauracion.icon,
  heroImage: {
    url: davidAssets.lessons.restauracion.hero,
    alt: 'El pacto eterno de David y su cumplimiento en Cristo',
  },
  duration: 25,
  order: 4214,
  status: 'PUBLISHED',
  studyBodyPlain: '',
  originalBodyPlain: '',
  studySections: [
    {
      id: 's1',
      title: 'El pacto eterno de David',
      intro: {
        romanNumeral: 'I',
        title: '2 Samuel 7 — La promesa que cambió la historia de la salvación',
        paragraphs: [
          'David quería construir un templo para Dios. Dios respondió con algo más grande: no David construiría una casa para Dios, sino que Dios construiría una casa — una dinastía — para David. El pacto davídico de 2 Samuel 7 es el fundamento sobre el que descansa toda la esperanza mesiánica del Antiguo Testamento.',
        ],
      },
      topics: [
        {
          id: 't1-1',
          title: 'El pacto que Dios hizo con David',
          blocks: [
            {
              type: 'highlight_verse',
              reference: '2 Samuel 7:12-13, 16',
              text: 'Y cuando tus días sean cumplidos, y duermas con tus padres, yo levantaré después de ti a uno de tu linaje, el cual procederá de tus entrañas, y afirmaré su reino. Él edificará casa a mi nombre, y yo afirmaré para siempre el trono de su reino... Y será afirmada tu casa y tu reino para siempre delante de tu rostro, y tu trono será estable eternamente.',
            },
            {
              type: 'paragraph',
              text: 'El pacto de Dios con David tiene dos niveles. El primero es inmediato: Salomón, el hijo de David, construirá el templo y su reino será establecido. El segundo trasciende lo histórico: el trono de David será eterno. Salomón eventualmente murió y su reino se dividió — lo cual revela que el cumplimiento pleno del pacto apunta a alguien más. El judaísmo antiguo entendió esto: el Mesías sería el "hijo de David" que cumpliría la promesa eterna.',
            },
            {
              type: 'key_points',
              title: 'Los elementos del pacto davídico',
              points: [
                'Dios establecería la "casa" — la dinastía — de David permanentemente',
                'Un descendiente de David construiría un templo para el nombre de Dios',
                'Ese descendiente tendría una relación especial padre-hijo con Dios',
                'Si pecaba, sería disciplinado — pero la misericordia no se apartaría de él',
                'El trono de David sería "estable eternamente" — una promesa sin fecha de expiración',
              ],
            },
            {
              type: 'media_slot',
              kind: 'image',
              src: davidAssets.lessons.restauracion.covenantTree,
              alt: 'Árbol del pacto davídico: de David a Cristo',
              caption: 'El pacto davídico — de la promesa a Salomón hasta su cumplimiento pleno en Cristo.',
              markers: [
                { x: 50, y: 88, label: 'David — 2 Samuel 7:12-16' },
                { x: 28, y: 55, label: 'Salomón — construye el templo', align: 'left' },
                { x: 50, y: 15, label: 'Cristo — "su reino no tendrá fin" (Lucas 1:33)' },
              ],
            },
            {
              type: 'deep_dive',
              title: 'El pacto davídico como eje de la historia de salvación del AT',
              paragraphs: [
                'Después de 2 Samuel 7, la pregunta que organiza el resto del Antiguo Testamento es: ¿cómo se cumplirá esta promesa? Cuando Israel fue llevado cautivo a Babilonia, los Salmos de lamento preguntaron: "¿Dónde están las antiguas misericordias de David?" (Salmo 89:49). El trono davídico había caído. ¿Había fallado la promesa de Dios?',
                'Los profetas respondieron con esperanza: Isaías prometió que del "tronco de Isaí" saldría un retoño (Isaías 11:1). Jeremías prometió un "vástago justo" que reinaría con sabiduría (Jeremías 23:5). Ezequiel prometió que Dios mismo establecería a "David mi siervo" como pastor eterno (Ezequiel 34:23-24). Todos apuntaban al mismo cumplimiento futuro.',
                'La tradición del Segundo Templo cristalizó estas esperanzas en el concepto del Mesías — el Ungido — que sería el descendiente de David que restauraría el reino eterno. Cuando los ángeles anunciaron a María que su hijo "reinará sobre la casa de Jacob para siempre, y su reino no tendrá fin" (Lucas 1:33), estaban usando exactamente el lenguaje del pacto davídico.',
              ],
            },
          ],
        },
      ],
    },
    {
      id: 's2',
      title: 'Cristo como cumplimiento de cada promesa a David',
      intro: {
        romanNumeral: 'II',
        title: 'El "hijo de David" en el Nuevo Testamento',
        paragraphs: [
          'El Nuevo Testamento abre con la genealogía de "Jesucristo, hijo de David, hijo de Abraham" (Mateo 1:1). No es una introducción genealógica accidental — es una declaración teológica: este es el hombre que cumple los dos pactos fundamentales del Antiguo Testamento. Y luego, cada vez que alguien llama a Jesús "hijo de David", está reclamando esa promesa.',
        ],
      },
      topics: [
        {
          id: 't2-1',
          title: 'Las referencias al "hijo de David" en el NT',
          blocks: [
            {
              type: 'paragraph',
              text: 'La frase "hijo de David" aparece 17 veces en el Nuevo Testamento — casi siempre como un título mesiánico dirigido a Jesús, y casi siempre por personas que estaban pidiendo sanidad o misericordia. Dos ciegos en el camino a Jericó (Mateo 20:30-31), la mujer cananea (Mateo 15:22), el ciego Bartimeo (Marcos 10:47-48). El título no era protocolo — era fe: la creencia de que el descendiente prometido de David tenía el poder y la autoridad para actuar.',
            },
            {
              type: 'highlight_verse',
              reference: 'Hechos 2:29-32',
              text: 'Varones hermanos, se os puede decir libremente del patriarca David, que murió y fue sepultado, y su sepulcro está con nosotros hasta el día de hoy. Pero siendo profeta, y sabiendo que con juramento Dios le había jurado que de su linaje, en cuanto a la carne, levantaría al Cristo para que se sentase en su trono; viéndolo antes, habló de la resurrección de Cristo, que su alma no fue dejada en el Hades, ni su carne vio corrupción.',
            },
            {
              type: 'paragraph',
              text: 'Pedro en Pentecostés hace el argumento definitivo: David murió, fue sepultado, y su tumba está todavía en Jerusalén. El Salmo 16, donde David dice "no dejarás mi alma en el Seol, ni permitirás que tu santo vea corrupción" — ese salmo no podía ser sobre David mismo, porque David sí vio corrupción. Tenía que ser una profecía sobre alguien más: Cristo, que resucitó antes de que su cuerpo se corrompiera. David profetizó la resurrección sin saberlo completamente.',
            },
            {
              type: 'key_points',
              title: 'Cómo Jesús cumplió el pacto davídico',
              points: [
                'Genealogía real — descendiente biológico de David a través de María (Lucas 3) y legal a través de José (Mateo 1)',
                'El Mesías ungido — "Cristo" significa "ungido", como David fue ungido por Samuel',
                'El trono eterno — "su reino no tendrá fin" (Lucas 1:33) cumple "tu trono será estable eternamente"',
                'El templo — Jesús afirmó ser el templo en persona (Juan 2:19-21)',
                'La relación padre-hijo — Mateo 3:17 y Salmo 2:7 ("Mi hijo eres tú, yo te he engendrado hoy")',
              ],
            },
            {
              type: 'doctrine_box',
              title: 'DyC 113:1-6 — La Restauración identifica al Vástago de Isaí',
              body: 'En DyC 113, el Señor le revela a José Smith la identidad del "vástago" del tronco de Isaí (Isaías 11:1). El versículo 4 dice: "He aquí, así dice el Señor: Es Cristo." El "tronco de Isaí" es el grupo de personas justas que serán como raíz o soporte para el mundo — el pueblo de la Restauración. Cristo mismo es el vástago que sale de esa raíz. La Restauración no solo confirma que Jesús es el cumplimiento del pacto davídico — da un detalle profético adicional que el texto bíblico solo sugería.',
            },
          ],
        },
      ],
    },
    {
      id: 's3',
      title: 'El destino eterno de David según la Restauración',
      intro: {
        romanNumeral: 'III',
        title: 'Misericordia precisa — lo que la Restauración añade al cuadro',
        paragraphs: [
          'La Restauración tiene sobre David algo que ninguna otra tradición religiosa tiene: revelación específica sobre su destino eterno. No es solo teología de la misericordia general — es doctrina precisa. Y esa precisión no elimina la esperanza; la define.',
        ],
      },
      topics: [
        {
          id: 't3-1',
          title: 'El veredicto de DyC y la esperanza de la resurrección',
          blocks: [
            {
              type: 'paragraph',
              text: 'DyC 132:39 establece que David perdió sus sellamientos conyugales. Hechos 2:29-34, interpretado por el profeta José Smith, indica que David no alcanzó la exaltación. Pero la Restauración también enseña que todos los hijos de Dios serán resucitados — y que la resurrección misma es un regalo que no puede ser revocado por el pecado. David será resucitado. Su destino en la resurrección pertenece al juicio preciso y misericordioso de un Dios que lo conoce completamente.',
            },
            {
              type: 'highlight_verse',
              reference: 'Hechos 13:22',
              text: 'Quitado éste, les levantó por rey a David, de quien dio también testimonio diciendo: He hallado a David hijo de Isaí, varón conforme a mi corazón, quien hará todo lo que yo quiero.',
            },
            {
              type: 'paragraph',
              text: 'Pablo, en Antioquía de Pisidia, cita las palabras de Dios sobre David: "varón conforme a mi corazón." Esto es notable porque Pablo lo dice después de la caída de David, después de DyC 132:39, en el marco del sermón sobre la resurrección de Cristo. Dios no retiró esa descripción de David. La caída no borró quién era David en su corazón — cambió las consecuencias eternas pero no el afecto de Dios hacia él.',
            },
            {
              type: 'deep_dive',
              title: 'Los Salmos de David en el culto de la Iglesia restaurada',
              paragraphs: [
                'Aunque la Restauración tiene revelación adicional sobre David, los Salmos siguen siendo parte del canon de la Iglesia y se usan en el estudio de las Escrituras, en las clases del Instituto y en el currículo de Come, Follow Me.',
                'El Salmo 22, el Salmo 23, el Salmo 51 y el Salmo 110 son estudiados regularmente en el contexto del Antiguo Testamento. La Iglesia restaurada enseña que los Salmos son Escritura inspirada — lo que significa que el poeta que los escribió, aunque caído, fue genuinamente inspirado por el Espíritu Santo en el proceso de componerlos.',
                'Esto plantea una pregunta doctrinal interesante: ¿puede Dios inspirar a alguien que eventualmente caerá de su exaltación? La respuesta de la Restauración parece ser sí — la inspiración y la posición eterna son cosas distintas. El don no garantiza la fidelidad final; la fidelidad final no es la única condición para recibir el don.',
              ],
            },
            {
              type: 'central_quote',
              text: 'He hallado a David hijo de Isaí, varón conforme a mi corazón, quien hará todo lo que yo quiero.',
              attribution: 'Dios sobre David — citado por Pablo en Hechos 13:22',
            },
            {
              type: 'doctrine_box',
              title: 'Lo que la historia de David enseña que ninguna otra enseña',
              body: 'La historia de David es única en la Escritura porque combina todos los elementos que importan: el llamamiento divino sin mérito aparente, la fe que actúa bajo presión, la creatividad espiritual en los Salmos, la caída desde la cima del poder, el arrepentimiento genuino, y las consecuencias eternas que persisten. Ningún otro personaje bíblico tiene todos estos elementos juntos con tanta documentación. Por eso David es irreemplazable en la comprensión del evangelio: porque en su historia están contenidas las tensiones fundamentales de la vida humana y la respuesta de Dios a ellas.',
            },
            {
              type: 'reflection',
              prompt: '¿Qué parte de la historia de David — el elegido, el guerrero, el poeta, el caído, o el tipo mesiánico — te habla más directamente en este momento de tu vida? ¿Por qué?',
            },
          ],
        },
      ],
    },
  ],
}
