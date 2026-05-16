import type { Lesson } from '@/types/doctrine'

export const elPatriarca: Lesson = {
  id: 'el-patriarca',
  moduleId: 'sacerdocio',
  title: 'El Patriarca',
  subtitle: 'El evangelista del Señor — tu mapa personal de la eternidad',
  description:
    'El Patriarca, llamado en cada estaca, da bendiciones patriarcales bajo inspiración del Espíritu Santo. Cada bendición es una revelación personal para el receptor — su herencia, su misión y las promesas de Dios para su vida.',
  level: 'AVANZADO',
  icon: '📜',
  duration: 40,
  order: 9,
  status: 'PUBLISHED',
  studyBodyPlain: '',
  originalBodyPlain: '',
  studySections: [
    {
      id: 's1',
      title: 'El Oficio del Patriarca',
      intro: {
        romanNumeral: 'I',
        title: 'El Oficio del Patriarca',
      },
      topics: [
        {
          id: 'oficio-patriarca',
          title: 'El evangelista del Señor — el oficio más antiguo del sacerdocio',
          subtitle:
            'D&C 107 llama "evangelista" al Patriarca. Es el oficio que el Señor reservó para los ancianos del linaje de su pueblo — los portadores de la promesa de Abraham.',
          blocks: [
            {
              type: 'paragraph',
              text: 'El Patriarca es un oficio del Sacerdocio de Melquisedec llamado específicamente en cada estaca de la Iglesia. La palabra «patriarca» significa literalmente «padre del linaje» — el líder espiritual de la familia extendida. En la Iglesia, el Patriarca tiene un ministerio único: dar bendiciones patriarcales personales bajo la guía del Espíritu Santo.',
            },
            {
              type: 'highlight_verse',
              text: '"Y también, a cada familia le corresponde un presidente, o sea un presidente de sus inmediatos progenitores; es decir, quien es el hombre mayor; y este presidente, o sea el anciano más anciano de la generación, (o de la generación de generaciones) es presidente de todos sus progenitores; así pues, se le llama a Adán el anciano de los ancianos."',
              reference: 'Doctrina y Convenios 107:40',
            },
            {
              type: 'highlight_verse',
              text: '"Y también, el deber del evangelista es que siempre esté con la iglesia; y cuando deba otorgar una bendición a los miembros de la iglesia, deberá imponerle las manos al miembro y darle una bendición patriarcal."',
              reference: 'Doctrina y Convenios 107:39',
            },
            {
              type: 'doctrine_box',
              title: 'Patriarca = Evangelista — ¿por qué el doble nombre?',
              body: 'D&C 107:39 usa «evangelista» y «patriarca» de forma intercambiable. La razón es histórica: en la Iglesia primitiva, el «evangelista» era el que predicaba las buenas nuevas — el evangelio — y lo hacía a través de enseñanza personal e inspirada. El Patriarca moderno hace lo mismo a través de la bendición personal. Su ministerio es el «evangelio personal» de cada miembro que recibe su bendición.',
            },
            {
              type: 'key_points',
              title: 'Lo que hace único al oficio de Patriarca',
              points: [
                'Es un oficio de linaje — históricamente reservado para descendientes de José (hijo de Jacob) o de líneas específicas de sacerdocio patriarcal.',
                'No tiene cuórum — un Patriarca no pertenece a un cuórum de patriarcas. Su ministerio es individual y su llamamiento es para toda la vida.',
                'Su autoridad es la del Sacerdocio de Melquisedec — ordenado como Sumo Sacerdote y luego separado como Patriarca.',
                'El Patriarca de la Iglesia (descendiente de José Smith padre) tiene autoridad patriarcal sobre toda la Iglesia.',
              ],
            },
          ],
        },
      ],
    },
    {
      id: 's2',
      title: 'La Bendición Patriarcal',
      intro: {
        romanNumeral: 'II',
        title: 'La Bendición Patriarcal',
      },
      topics: [
        {
          id: 'bendicion-patriarcal',
          title: 'Tu bendición patriarcal — una revelación personal del Padre Celestial',
          subtitle:
            'No es una predicción del futuro. Es una descripción de quién eres, de qué linaje vienes y de lo que el Padre Celestial ha preparado para ti si eres fiel.',
          blocks: [
            {
              type: 'paragraph',
              text: 'La bendición patriarcal es una revelación inspirada dada por el Patriarca de la estaca mediante la imposición de manos. El Patriarca habla bajo la influencia del Espíritu Santo — las palabras son su voz pero la inspiración es del Cielo. Cada bendición es única, personal e irrepetible.',
            },
            {
              type: 'steps',
              title: '¿Cómo prepararse para recibir una bendición patriarcal?',
              steps: [
                'Preparación espiritual — ayunar el día de la bendición. La bendición patriarcal es un momento sagrado que merece la preparación más profunda.',
                'Entrevista con el obispo — el obispo extiende un «recommend» (recomendación) que certifica la dignidad del miembro.',
                'Contactar al Patriarca — llamarlo o escribirle para hacer una cita. Ir en un estado de reverencia y expectativa espiritual.',
                'La imposición de manos — el Patriarca pone sus manos sobre tu cabeza y habla bajo la guía del Espíritu. La bendición es grabada y luego transcrita.',
                'Recibir la copia — la bendición transcrita se envía a la Iglesia y al miembro. Se guarda como un documento sagrado y personal.',
                'Estudiarla con regularidad — la bendición patriarcal debe leerse periódicamente, especialmente en decisiones importantes.',
              ],
            },
            {
              type: 'deep_dive',
              badge: 'Doctrina',
              title: '¿Qué contiene una bendición patriarcal?',
              paragraphs: [
                'Toda bendición patriarcal declara la TRIBU DE ISRAEL a la que perteneces — ya sea por nacimiento o por adopción mediante el bautismo (D&C 84:33-34). Esto no es simbólico — identifica tu linaje en el pueblo del convenio de Dios.',
                'La bendición puede incluir PROMESAS ESPECÍFICAS ligadas a la fidelidad: promesas de matrimonio, descendencia, salud, trabajo, ministerio. Estas promesas son condicionales a la fidelidad.',
                'Puede incluir ADVERTENCIAS, EXHORTACIONES y GUÍA PERSONAL — áreas específicas donde el Señor quiere que crezcas o donde hay un desafío que enfrentarás.',
                'No declara LA TOTALIDAD DEL FUTURO — el Patriarca da lo que el Espíritu dicta, que puede ser más o menos extenso. La longitud no determina el valor espiritual.',
              ],
            },
            {
              type: 'highlight_verse',
              text: '"Y tengo el propósito de daros más conocimiento que el que habéis tenido acerca de vuestros antepasados, concerniente a las doce tribus de Israel, a los años prometidos, y lo que está reservado para ellos en los últimos días."',
              reference: 'Doctrina y Convenios 128:20',
            },
            {
              type: 'leader_quote',
              quote:
                'Tu bendición patriarcal es un mensaje de tu Padre Celestial para ti. No fue escrita para otra persona. Las promesas son tuyas si eres fiel. Léela regularmente — en tiempos buenos y en tiempos difíciles. Ella te conoce mejor de lo que tú te conoces a ti mismo.',
              name: 'Élder James E. Faust · Conferencia General',
            },
            {
              type: 'reflection',
              prompt:
                'Si ya tienes tu bendición patriarcal, ¿cuándo fue la última vez que la leíste? ¿Hay una promesa específica que el Señor te hizo que estás actualmente viviendo, buscando o esperando ver cumplida? Si aún no la has recibido, ¿qué te ha impedido hacerlo?',
            },
          ],
        },
      ],
    },
    {
      id: 's3',
      title: 'Adán, Abraham y el Linaje del Sacerdocio',
      intro: {
        romanNumeral: 'III',
        title: 'Adán, Abraham y el Linaje del Sacerdocio',
      },
      topics: [
        {
          id: 'linaje-sacerdocio',
          title: 'La cadena patriarcal — de Adán a hoy',
          subtitle:
            'El sacerdocio patriarcal no comenzó en 1830. Comenzó con Adán — y cada bendición que un Patriarca da hoy es un eslabón en esa cadena ininterrumpida.',
          blocks: [
            {
              type: 'paragraph',
              text: 'D&C 107:40-57 describe el «orden patriarcal» del sacerdocio: la cadena de líderes desde Adán hasta Noé que se reunían en asamblea sagrada, cada uno reportando su administración. El profeta José Smith recibió una visión de esa reunión en Adam-ondi-Ahman — el valle donde Adán y Eva vivieron después de su salida del Jardín.',
            },
            {
              type: 'highlight_verse',
              text: '"Tres años antes de la muerte de Adán, él convocó a Set, Enós, Cainán, Mahalaleel, Jarad, Enoc y Matusalén, quienes eran todos sumos sacerdotes, con el residuo de sus descendientes. Y Adán se levantó en medio de ellos, y a pesar de ser agobiado por la vejez, habiendo llenado un período de ciento veintiún años… les impartió sus últimas bendiciones y predicciones."',
              reference: 'Doctrina y Convenios 107:53–55',
            },
            {
              type: 'timeline',
              items: [
                {
                  label: 'Adán',
                  text: 'Primer patriarca — convoca a sus descendientes en Adam-ondi-Ahman. Miguel, el Arcángel, preside el sacerdocio patriarcal en la tierra.',
                  color: 'gold',
                },
                {
                  label: 'Enoc',
                  text: 'Patriarca de su generación — edificó la Ciudad de Sión que fue tomada al cielo. Ejemplo del poder del sacerdocio patriarcal para transformar comunidades.',
                  color: 'blue',
                },
                {
                  label: 'Abraham',
                  text: 'El padre del convenio — la bendición de Abraham define el linaje, las responsabilidades y las promesas del pueblo del convenio hasta hoy (Génesis 12, 15, 17).',
                  color: 'gold',
                },
                {
                  label: 'Jacob/Israel',
                  text: 'Dio bendiciones patriarcales a sus 12 hijos (Génesis 49) — el tipo bíblico más claro de la bendición patriarcal. Cada hijo recibió una revelación personal de su misión.',
                  color: 'red',
                },
                {
                  label: 'Hoy',
                  text: 'El Patriarca de cada estaca continúa la cadena de Adán — identificando el linaje, declarando la herencia y pronunciando las promesas de Dios sobre el pueblo del convenio.',
                  color: 'green',
                },
              ],
            },
            {
              type: 'doctrine_box',
              title: 'La bendición de Abraham y tú',
              body: 'D&C 84:33-40 enseña que quienes reciben el Sacerdocio de Melquisedec y guardan los convenios se convierten en «hijos de Moisés, de Aarón, del sacerdocio» y «descendencia de Abraham». La bendición patriarcal confirma esa herencia. Eres literalmente parte del pueblo del convenio — no por metáfora, sino por adopción divina.',
            },
            {
              type: 'leader_quote',
              quote:
                'Adam-ondi-Ahman no es solo historia antigua. Habrá una reunión futura — antes de la Segunda Venida — en la que Adán, como el Anciano de los Ancianos, recibirá el informe de cada dispensación y entregará las llaves al Salvador. Tú y yo somos parte de esa historia.',
              name: 'Presidente Joseph Fielding Smith · Doctrina de Salvación',
            },
            {
              type: 'reflection',
              prompt:
                '¿Conoces tu tribu de Israel según tu bendición patriarcal? ¿Qué significa para ti ser literalmente descendiente de Abraham — con las responsabilidades y las promesas que eso implica? ¿Cómo vives esa identidad del convenio en tu vida diaria?',
            },
          ],
        },
      ],
    },
  ],
}
