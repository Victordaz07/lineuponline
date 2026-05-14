import type { Lesson } from '@/types/doctrine'

export const esterElDecreto: Lesson = {
  id: 'ester-el-decreto',
  moduleId: 'personajes-escrituras',
  submoduleGroup: 'ester',
  title: 'El Decreto',
  subtitle: 'El genocidio firmado con el anillo del rey',
  author: 'Fuentes: Ester 3–4; historia del antisemitismo en la antigüedad',
  description: 'Amán, el favorito del rey, ordena exterminar a todos los judíos del Imperio Persa porque un solo hombre — Mardoqueo — se niega a arrodillarse ante él. El decreto, sellado con el anillo real, es irrevocable. Y llega a Ester una petición que podría costarle la vida.',
  level: 'INTERMEDIO',
  icon: '📜',
  duration: 35,
  order: 6212,
  status: 'PUBLISHED',
  studyBodyPlain: '',
  originalBodyPlain: '',
  previousLessonId: 'ester-la-reina',
  nextLessonId: 'ester-el-valor',
  studySections: [
    {
      id: 's1',
      title: 'Amán — el antagonista',
      intro: {
        romanNumeral: 'I',
        title: 'Ester 3 — El Hombre que Odiaba a un Pueblo',
        paragraphs: [
          'El libro de Ester no tarda en introducir su villano. Amán el agagueo es elevado por el rey sobre todos los príncipes. Y Mardoqueo no se inclina.',
        ],
      },
      topics: [
        {
          id: 't1-1',
          title: 'El rechazo que desató la ira',
          blocks: [
            {
              type: 'highlight_verse',
              reference: 'Ester 3:1-2',
              text: 'Después de estas cosas el rey Asuero engrandeció a Amán hijo de Hamedata agagueo, y lo honró, y puso su silla sobre todos los príncipes que estaban con él. Y todos los siervos del rey que estaban a la puerta del rey se arrodillaban y se inclinaban ante Amán, porque así lo había mandado el rey; pero Mardoqueo ni se arrodillaba ni se humillaba.',
            },
            {
              type: 'paragraph',
              text: 'La designación de Amán como "agagueo" es teológicamente cargada para cualquier lector judío de la época. Agag era el rey amalecita que el profeta Samuel había ordenado matar al rey Saúl — y Saúl se había negado, desobedeciendo la orden divina (1 Samuel 15). Mardoqueo era del linaje de Benjamín, la misma tribu de Saúl. El conflicto entre Mardoqueo y Amán tiene, en la teología del libro de Ester, resonancias de una enemistad histórica no resuelta.',
            },
            {
              type: 'paragraph',
              text: 'El texto no explica por qué Mardoqueo se negaba a arrodillarse. Cuando sus colegas le preguntaron repetidamente, él les declaró que era judío (Ester 3:4). Esta es la primera vez que Mardoqueo declara públicamente su identidad. Su negativa puede interpretarse de varias maneras: rechazo de una reverencia que consideraba idolátrica (algunos comentaristas señalan que el gesto ante un favorito del rey podía tener connotaciones de adoración), o simplemente una postura de dignidad personal ante alguien que consideraba moralmente indigno.',
            },
            {
              type: 'deep_dive',
              badge: 'CONTEXTO',
              title: 'Amalec en la memoria de Israel',
              paragraphs: [
                'La enemistad entre Israel y Amalec tiene raíces en el éxodo. Amalec atacó a los israelitas por la retaguardia cuando salían de Egipto (Éxodo 17:8-16), atacando específicamente a los débiles y cansados. Dios declaró guerra perpetua contra Amalec (Deuteronomio 25:17-19).',
                'El rey Saúl fue ordenado a destruir completamente a Amalec (1 Samuel 15:3). Se negó a matar a Agag, el rey amalecita. Samuel lo ejecutó personalmente. Ese acto de desobediencia de Saúl le costó el reino. Siglos después, en el libro de Ester, la enemistad se reanuda: el descendiente de Saúl (Mardoqueo) y el descendiente de Agag (Amán) se enfrentan de nuevo.',
                'El lector israelita entendía que Ester no era simplemente la historia de una reina y su pueblo — era el capítulo final de una guerra espiritual que venía desde el Éxodo. La lectura de este libro durante la fiesta de Purim celebra precisamente este triunfo sobre un enemigo ancestral.',
              ],
            },
          ],
        },
        {
          id: 't1-2',
          title: 'La respuesta desproporcionada',
          blocks: [
            {
              type: 'highlight_verse',
              reference: 'Ester 3:5-6',
              text: 'Y vio Amán que Mardoqueo ni se arrodillaba ni se humillaba delante de él; y se llenó de ira. Pero tuvo en poco poner mano en Mardoqueo solamente, pues ya le habían declarado cuál era el pueblo de Mardoqueo; y procuró Amán destruir a todos los judíos que había en el reino de Asuero, al pueblo de Mardoqueo.',
            },
            {
              type: 'paragraph',
              text: 'La progresión del versículo es importante: Amán podría haber castigado solo a Mardoqueo. Podría haberlo destituido, humillado, encarcelado. Pero la ira de Amán escala de inmediato al exterminio colectivo — no solo el hombre que lo ofendió, sino todo su pueblo. Esta escalada irracional es característica del pensamiento antisemita en todas las épocas: el odio al individuo se transforma en odio al grupo; el agravio personal se convierte en justificación para el exterminio.',
            },
            {
              type: 'quiz',
              quizType: 'true_false',
              question: 'Amán quería castigar únicamente a Mardoqueo por no arrodillarse ante él.',
              answer: false,
              explanation: 'No. Aunque Mardoqueo fue el catalizador, Amán decidió destruir a todos los judíos del Imperio Persa (Ester 3:6). La respuesta de Amán fue radicalmente desproporcionada al agravio personal que sufrió.',
            },
          ],
        },
      ],
    },
    {
      id: 's2',
      title: 'El sorteo y el decreto',
      intro: {
        romanNumeral: 'II',
        title: 'El Pur — El Dado que Decide el Destino de un Pueblo',
        paragraphs: [
          'Antes de actuar, Amán consultó el pur — el sorteo por el que se elegía el momento más propicio para su plan. El nombre de la fiesta de Purim preserva para siempre el recuerdo de este dado.',
        ],
      },
      topics: [
        {
          id: 't2-1',
          title: 'El sorteo y la lógica del decreto',
          blocks: [
            {
              type: 'highlight_verse',
              reference: 'Ester 3:7',
              text: 'En el mes primero, que es el mes de Nisán, en el año duodécimo del rey Asuero, fue echada Pur, esto es, la suerte, delante de Amán, suerte para cada día y cada mes del año duodécimo, y salió el mes duodécimo, que es el mes de Adar.',
            },
            {
              type: 'paragraph',
              text: 'El pur era un dado de cuatro caras usado en la adivinación babilónica para determinar momentos propicios. Amán lo usó para elegir el mes más favorable para la masacre. El sorteo cayó en el mes de Adar — el último mes del año hebreo, casi doce meses en el futuro desde el momento en que se lanzó el dado. Esto significaba que los judíos tendrían casi un año de vida... y que también habría casi un año para que la providencia actuara.',
            },
            {
              type: 'paragraph',
              text: 'La ironía es profunda: el hombre que usó la superstición para planificar el exterminio de Israel eligió sin saberlo el mes que se convertiría en la mayor celebración de la supervivencia de Israel. El pur que Amán lanzó para destruir a los judíos dio nombre a la fiesta que los judíos celebran hasta hoy en conmemoración de su salvación.',
            },
            {
              type: 'doctrine_box',
              title: 'El pur y la providencia',
              body: 'El uso del sorteo para planificar genocidio es una de las imágenes más perturbadoras del libro de Ester. Sin embargo, el texto implica que la misma "suerte" que Amán creyó controlar estaba siendo dirigida por una providencia que él no podía ver. La fiesta de Purim — cuyo nombre deriva de pur — celebra precisamente esto: que las herramientas del mal no están fuera del alcance de la providencia de Dios.',
            },
          ],
        },
        {
          id: 't2-2',
          title: 'El decreto ante el rey',
          blocks: [
            {
              type: 'highlight_verse',
              reference: 'Ester 3:8-9',
              text: 'Y dijo Amán al rey Asuero: Hay un pueblo esparcido y distribuido entre los pueblos en todas las provincias de tu reino, y sus leyes son diferentes de las de todo pueblo, y no guardan las leyes del rey, y al rey nada le beneficia consentirlos. Si place al rey, decrete que sean destruidos; y yo pesaré diez mil talentos de plata a los que manejan el negocio, para que los traigan a los tesoros del rey.',
            },
            {
              type: 'paragraph',
              text: 'El discurso de Amán ante el rey es un modelo del discurso antisemita: el pueblo judío es presentado como "esparcido y distribuido" (una amenaza difusa e infiltrada), sus leyes son "diferentes" (incompatibles con la sociedad), y no obedecen al rey (una acusación de deslealtad). No menciona el nombre del pueblo. No presenta evidencia. Y ofrece financiamiento personal para la operación — diez mil talentos de plata, una suma astronómica equivalente a más de la mitad de los ingresos anuales del Imperio.',
            },
            {
              type: 'timeline',
              items: [
                { label: 'Mes 1, Día 13', text: 'Amán lanza el pur; el decreto es escrito y enviado a todas las provincias', ref: 'Ester 3:12', color: 'red' },
                { label: 'Mes 1, Días siguientes', text: 'Mardoqueo se viste de cilicio y ceniza; llanto en todas las comunidades judías', ref: 'Ester 4:1-3', color: 'blue' },
                { label: 'Mes 1 (mismos días)', text: 'Ester se entera por sus sirvientas y envía mensajero a Mardoqueo', ref: 'Ester 4:4-5', color: 'gold' },
                { label: 'Mes 12, Día 13', text: 'Día señalado para la masacre — once meses en el futuro', ref: 'Ester 3:13', color: 'red' },
              ],
            },
            {
              type: 'paragraph',
              text: 'El rey Asuero aprobó el plan sin pedir saber el nombre del pueblo condenado: "El dinero sea dado a ti, y también el pueblo, para que hagas de él lo que bien te parezca" (Ester 3:11). Y sellaron el decreto con el anillo del rey — el sello que hacía irrevocable cualquier decreto real según la ley persa (Daniel 6:8). El decreto fue enviado "a todas las provincias del rey por medio de correos veloces" en el idioma de cada provincia: destruir, matar y exterminar a todos los judíos, jóvenes y ancianos, niños y mujeres, en un solo día.',
            },
          ],
        },
      ],
    },
    {
      id: 's3',
      title: 'El llanto de Mardoqueo',
      intro: {
        romanNumeral: 'III',
        title: 'Ester 4 — La Noticia Llega a la Reina',
        paragraphs: [
          'Mientras el rey y Amán se sentaban a beber, la ciudad de Susa estaba conmocionada. El luto de Mardoqueo llegó a los oídos de Ester.',
        ],
      },
      topics: [
        {
          id: 't3-1',
          title: 'El luto de Mardoqueo y el mensaje a Ester',
          blocks: [
            {
              type: 'highlight_verse',
              reference: 'Ester 4:1-3',
              text: 'Cuando supo Mardoqueo todo lo que había acontecido, rasgó sus vestidos, se vistió de cilicio y de ceniza, y se fue por la ciudad clamando con grande y amargo clamor. Y vino hasta delante de la puerta del rey; pues no era lícito pasar adentro de la puerta del rey con vestido de cilicio... Y en cada provincia y lugar donde el mandamiento del rey y su decreto llegaba, había entre los judíos gran luto, ayuno, lloro y lamentación.',
            },
            {
              type: 'paragraph',
              text: 'El cilicio y la ceniza eran los signos tradicionales de duelo extremo en la cultura del Oriente Próximo antiguo. Mardoqueo no llora en privado — clama en voz alta en la ciudad, hace visible su dolor. Era una forma de llamar la atención pública sobre una injusticia, de obligar a la ciudad a ver lo que prefería ignorar. Que un hombre de la administración imperial se presentara así en la puerta del palacio era un escándalo público deliberado.',
            },
            {
              type: 'paragraph',
              text: 'Las sirvientas de Ester le informaron del estado de Mardoqueo. Ella envió ropa para que se la pusiera — quería que cesara el escándalo visible, quería quizás que volviera a la normalidad. Mardoqueo rechazó la ropa. El luto no era un accidente ni una reacción descontrolada — era una declaración. Y necesitaba que Ester lo entendiera.',
            },
            {
              type: 'dialogue',
              title: 'El intercambio de mensajes entre Mardoqueo y Ester',
              lines: [
                { speaker: 'Mardoqueo (mensaje a Ester)', side: 'left', text: 'Todo lo acontecido le declaró, y la suma de dinero que Amán había dicho que pesaría para destruir a los judíos. También le dio la copia del decreto que había sido dado en Susa para que fuera destruido, a fin de que la mostrase a Ester y se lo declarase, y le encargara que fuese ante el rey a suplicarle y a interceder delante de él por su pueblo (Ester 4:7-8).' },
                { speaker: 'Ester (mensaje a Mardoqueo)', side: 'right', text: 'Todos los siervos del rey, y el pueblo de las provincias del rey, saben que cualquier hombre o mujer que entra en el patio interior para ver al rey, sin ser llamado, una sola ley hay respecto a él: ha de morir; salvo aquel a quien el rey extendiere el cetro de oro, el cual vivirá. Y yo no he sido llamada para ver al rey estos treinta días (Ester 4:11).' },
              ],
            },
          ],
        },
        {
          id: 't3-2',
          title: 'La enormidad de lo que se le pide a Ester',
          blocks: [
            {
              type: 'paragraph',
              text: 'La respuesta de Ester a Mardoqueo es a menudo leída como resistencia cobarde. Merece una lectura más cuidadosa. Ester no estaba exagerando el peligro — estaba describiendo con precisión la ley persa. El derecho de presentarse ante el rey sin ser convocado no existía para nadie, incluyendo a la reina. El precedente de Vasti — una reina destituida por desobedecer al rey — era reciente. Y Ester no había sido llamada por el rey en treinta días, lo que podría indicar una pérdida de favor.',
            },
            {
              type: 'key_points',
              title: 'Los riesgos reales que Ester enfrentaba',
              points: [
                'La ley persa prohibía acercarse al rey sin ser llamado, bajo pena de muerte',
                'La única excepción era si el rey extendía su cetro de oro — una gracia arbitraria',
                'Ester no había sido llamada por el rey en treinta días — posible señal de pérdida de favor',
                'Si el rey la rechazaba, moriría antes de poder presentar su petición',
                'Si el rey descubría su identidad judía en ese contexto, el peligro se multiplicaría',
              ],
            },
            {
              type: 'reflection',
              prompt: '¿Alguna vez te has encontrado en una posición donde lo correcto implicaba un riesgo real y no solo un incomodidad? ¿Cómo distingues entre la prudencia legítima ante el peligro y el miedo que paraliza la obediencia?',
            },
          ],
        },
      ],
    },
    {
      id: 's4',
      title: 'La ciudad que vio el decreto',
      intro: {
        romanNumeral: 'IV',
        title: '"La Ciudad de Susa Estaba Conmocionada"',
        paragraphs: [
          'El libro de Ester registra un detalle que a menudo pasa desapercibido: no solo los judíos lloraban. La ciudad entera estaba perturbada.',
        ],
      },
      topics: [
        {
          id: 't4-1',
          title: 'El decreto y la conciencia de los persas',
          blocks: [
            {
              type: 'highlight_verse',
              reference: 'Ester 3:15',
              text: 'Los correos salieron apresuradamente por mandato del rey, y el edicto fue dado en Susa capital del reino. Y el rey y Amán se sentaron a beber; pero la ciudad de Susa estaba conmocionada.',
            },
            {
              type: 'paragraph',
              text: 'El contraste del versículo final del capítulo 3 es devastador en su sobriedad: el rey y Amán beben. La ciudad está conmocionada. El poder que decreta el exterminio se sienta a celebrar. El pueblo que sabe lo que eso significa llora. La indiferencia de quienes tienen el poder ante el sufrimiento de los vulnerables es uno de los temas más persistentes de la historia humana.',
            },
            {
              type: 'paragraph',
              text: 'Que la ciudad de Susa —no solo la comunidad judía— estuviera conmocionada indica que el decreto no fue recibido con entusiasmo popular. Los judíos eran vecinos, colegas, comerciantes conocidos. Un decreto de exterminio masivo perturbaba la vida colectiva más allá de sus víctimas directas. Este detalle pequeño pero significativo anticipa el apoyo que los persas en general darían a los judíos cuando la situación se revierta (Ester 8:17).',
            },
            {
              type: 'note_prompts',
              prompts: [
                { id: 'p1', question: '¿Qué te dice del carácter de Amán el hecho de que pudiera sentarse a beber mientras una ciudad lloraba por un decreto que él había iniciado?' },
                { id: 'p2', question: '¿Qué responsabilidad tienen quienes tienen acceso a información sobre injusticias — como Ester — cuando esa información podría costarles cara?' },
                { id: 'p3', question: 'El decreto era "irrevocable" según la ley persa. ¿Cómo actúas cuando te enfrentas a una situación que parece irrevocable? ¿Qué te enseña la fe en la providencia sobre los límites del poder humano?' },
              ],
            },
          ],
        },
      ],
    },
  ],
}
