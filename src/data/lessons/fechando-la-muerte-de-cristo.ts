import type { Lesson } from '@/types/doctrine'

export const fechandoLaMuerteDeCristo: Lesson = {
  id: 'fechando-la-muerte-de-cristo',
  moduleId: 'temas-profundos',
  title: 'Fechando la Muerte de Jesucristo',
  subtitle: 'Jeffrey R. Chadwick · BYU Studies 54:4 · Jueves 6 de abril, año 30 d.C.',
  description:
    '¿Cuándo murió exactamente Jesús? La respuesta combina astronomía, el calendario judío, los cuatro Evangelios y el Libro de Mormón. El investigador Chadwick examina todas las evidencias y llega a una conclusión que sorprende: no fue viernes — fue jueves. Y la fecha tiene 1800 años de distancia exacta de la Restauración.',
  level: 'AVANZADO',
  icon: '📅',
  duration: 65,
  order: 5,
  status: 'PUBLISHED',
  author: 'Jeffrey R. Chadwick (BYU Studies 54:4) · Scripture Central KnoWhy #300',
  studyBodyPlain: '',
  originalBodyPlain: '',
  studySections: [
    {
      id: 'seccion-1',
      title: 'I. La pregunta más simple con la respuesta más compleja',
      intro: { romanNumeral: 'I', title: 'La pregunta más simple con la respuesta más compleja' },
      topics: [
        {
          id: 'por-que-importa',
          title: 'Por qué la fecha importa más de lo que parece',
          blocks: [
            {
              type: 'paragraph',
              content:
                'A primera vista, la pregunta "¿cuándo murió Jesús?" parece trivial. Pero la respuesta tiene implicaciones que van mucho más allá de la curiosidad histórica: afecta la confiabilidad de los Evangelios, la credibilidad del Libro de Mormón como testigo independiente, y para los miembros de la Iglesia, toca algo profundamente significativo sobre la fecha de la Restauración.',
            },
            {
              type: 'paragraph',
              content:
                'El investigador Jeffrey R. Chadwick de BYU publicó en BYU Studies 54:4 el análisis más completo disponible en la literatura académica restauracionista sobre este problema. Su método: cruzar evidencia del Nuevo Testamento, del Libro de Mormón, del calendario judío del primer siglo, de fuentes misnaicas, y de cálculos astronómicos modernos. Cuando todas las fuentes convergen en la misma respuesta, la certeza aumenta considerablemente.',
            },
            {
              type: 'doctrine_box',
              title: 'Por qué 2000 años de tradición dicen "viernes"',
              content:
                'La tradición cristiana del "Viernes Santo" viene de la interpretación de Marcos 15:42 ("era el día de la preparación, que es el día antes del sábado") como el viernes previo al sábado regular. Pero esta interpretación asume que el "sábado" posterior fue el sábado semanal (sábado = Sabbath). Chadwick demuestra que ese "sábado" era el Gran Sábado de la Pascua — un festival que caía en cualquier día de la semana. En el año 30 d.C., cayó en viernes.',
            },
          ],
        },
        {
          id: 'tres-candidatos',
          title: 'Los tres años candidatos',
          blocks: [
            {
              type: 'paragraph',
              content:
                'Los académicos han limitado la muerte de Cristo a tres años posibles durante el gobierno de Poncio Pilato (26-36 d.C.): el año 27, el año 30, y el año 33. Cada uno tiene sus defensores. La investigación de Chadwick elimina dos de los tres con evidencia convergente.',
            },
            {
              type: 'compare_grid',
              title: 'Los tres años candidatos',
              left: {
                label: 'Año 27 d.C.',
                points: [
                  'Demasiado temprano',
                  'Cristo nació 5-4 a.C.',
                  'Solo daría 30-31 años de vida',
                  'No cuadra con "34 año" del Libro de Mormón',
                  'Prácticamente descartado por académicos',
                ],
              },
              right: {
                label: 'Año 33 d.C.',
                points: [
                  'Tradición protestante dominante',
                  'Daría 36-37 años de vida — demasiado largo',
                  'Tampoco cuadra con el calendario nefita',
                  'Apoyado por algunos académicos del NT',
                  'Eliminado por el Libro de Mormón',
                ],
              },
            },
            {
              type: 'key_points',
              title: 'Por qué el año 30 d.C. gana',
              points: [
                'Más de 2 a 1 de académicos del NT lo prefieren sobre el año 33',
                'Cristo nacido 5-4 a.C. + 33 años completos = año 28-30 d.C.',
                'El "año 34" del calendario nefita (desde el nacimiento de Cristo) apunta exactamente al 30 d.C.',
                'Los cálculos astronómicos del Nisan 14 lo confirman para ese año',
                'La fecha de Pascua en el año 30 solo funciona con jueves como día de crucifixión',
              ],
            },
          ],
        },
      ],
    },
    {
      id: 'seccion-2',
      title: 'II. El Libro de Mormón entra al debate académico',
      intro: { romanNumeral: 'II', title: 'El Libro de Mormón entra al debate académico' },
      topics: [
        {
          id: 'calendario-nefita',
          title: 'El "año 34" del calendario nefita',
          blocks: [
            {
              type: 'paragraph',
              content:
                'El Libro de Mormón registra las señales de la muerte de Cristo como ocurriendo en "el primer mes del año 34" del calendario nefita. Los nefitas llevaban su conteo desde el nacimiento de Cristo (siguiendo las señales proféticas que Samuel el Lamanita había dado con precisión). Si Cristo nació aproximadamente en el año 5-4 a.C., entonces su "año 34" corresponde aproximadamente al año 29-30 d.C. Esto elimina el año 27 (demasiado temprano) y el año 33 (demasiado tarde).',
            },
            {
              type: 'highlight_verse',
              reference: '3 Nefi 8:5',
              text: 'Y ocurrió que en el año treinta y cuatro, en el primer mes, el cuarto día del mes, se levantó una gran tempestad, tal como jamás se había conocido en toda la tierra.',
            },
            {
              type: 'paragraph',
              content:
                'Esta es la contribución única que el Libro de Mormón hace al debate académico sobre la fecha de la muerte de Cristo: un registro independiente, de un continente diferente, de una cultura diferente, que documenta con precisión cronológica cuándo ocurrieron las señales. Ningún manuscrito del Nuevo Testamento proporciona este nivel de anclaje cronológico al nacimiento de Cristo.',
            },
          ],
        },
        {
          id: 'tres-dias-tinieblas',
          title: 'Los tres días de tinieblas y la diferencia de zona horaria',
          blocks: [
            {
              type: 'paragraph',
              content:
                'Aquí está el argumento más poderoso del Libro de Mormón en este debate: las tinieblas de tres días. 3 Nefi 8 documenta que las tinieblas duraron exactamente tres días en las Américas, comenzando cuando Cristo murió en Jerusalén y terminando cuando resucitó.',
            },
            {
              type: 'highlight_verse',
              reference: '3 Nefi 8:22-23',
              text: 'Y no hubo luz en toda esa noche, ni en el día siguiente... y hubo tinieblas durante el espacio de tres días sobre la faz de la tierra.',
            },
            {
              type: 'deep_dive',
              title: 'El problema de zona horaria que resuelve todo',
              content:
                'Jerusalén está aproximadamente 8 horas ADELANTE de Mesoamérica (zona horaria aproximada de las civilizaciones nefitas). Si Cristo murió el viernes a las 3 p.m. (hora de Jerusalén), en las Américas sería el viernes a las 7 a.m. Contando desde el viernes 7 a.m. hasta el domingo amanecer: aproximadamente 2 días y algunas horas. No "tres días." Pero si Cristo murió el jueves a las 3 p.m. (hora de Jerusalén), en las Américas sería el jueves a las 7 a.m. Contando desde el jueves 7 a.m. hasta el domingo amanecer: exactamente tres días completos. Solo la crucifixión del jueves produce tres días de tinieblas en las Américas.',
            },
            {
              type: 'paragraph',
              content:
                'Este cálculo hace que el Libro de Mormón sea un testigo cronológico independiente que, sin diseño humano aparente, confirma la crucifixión del jueves. Si el Libro de Mormón fuera una fabricación del siglo XIX, su autor habría escrito simplemente "dos días de tinieblas" o no habría especificado el número — ya que ningún cristiano del siglo XIX cuestionaba el viernes. El detalle de "tres días" es precisamente el tipo de detalle que produce problemas de traducción y que marca autenticidad.',
            },
          ],
        },
      ],
    },
    {
      id: 'seccion-3',
      title: 'III. ¿Viernes o jueves? — Las evidencias del Nuevo Testamento',
      intro: { romanNumeral: 'III', title: '¿Viernes o jueves? — Las evidencias del Nuevo Testamento' },
      topics: [
        {
          id: 'cleofas-tercer-dia',
          title: 'Lucas 24:21 — el tercer día desde entonces',
          blocks: [
            {
              type: 'paragraph',
              content:
                'El camino a Emaús en Lucas 24 contiene el argumento más directo del Nuevo Testamento para la crucifixión del jueves. Cleofas, hablando con el Cristo resucitado (sin reconocerlo), dice la frase clave en el versículo 21:',
            },
            {
              type: 'highlight_verse',
              reference: 'Lucas 24:21',
              text: 'Pero nosotros esperábamos que él era el que había de redimir a Israel; y ahora, además de todo esto, hoy es ya el tercer día que esto ha acontecido.',
            },
            {
              type: 'paragraph',
              content:
                'La conversación ocurre el domingo de la Resurrección. Cleofas dice "hoy es el tercer día desde que esto aconteció." Contando hacia atrás: domingo = día 3, sábado = día 2, viernes = día 1. Pero si la crucifixión fue el viernes, entonces desde el viernes (día 1) hasta el domingo no son tres días — son dos días y unas horas. Sin embargo, si la crucifixión fue el jueves: jueves = día 1, viernes = día 2, sábado = día 3, domingo = "el tercer día desde entonces." El conteo de Cleofas funciona perfectamente con una crucifixión del jueves.',
            },
          ],
        },
        {
          id: 'signo-de-jonas',
          title: 'Mateo 12:40 — tres días y tres noches',
          blocks: [
            {
              type: 'highlight_verse',
              reference: 'Mateo 12:40',
              text: 'Porque como estuvo Jonás en el vientre del gran pez tres días y tres noches, así estará el Hijo del Hombre en el corazón de la tierra tres días y tres noches.',
            },
            {
              type: 'paragraph',
              content:
                'Este versículo crea un problema serio para la tradición del Viernes Santo: si Cristo murió el viernes al mediodía y resucitó el domingo al amanecer, hay cuando mucho 2 noches (viernes por la noche y sábado por la noche) y 1.5 días. "Tres días y tres noches" en su sentido más natural no puede encajar en viernes-domingo.',
            },
            {
              type: 'paragraph',
              content:
                'Con jueves como día de crucifixión: murió el jueves por la tarde, estuvo en la tumba jueves por la noche (noche 1), viernes (día 2), viernes por la noche (noche 2), sábado (día 3), sábado por la noche (noche 3), y resucitó el domingo al amanecer. Tres días y tres noches — aunque parciales — son contabilizados bajo el sistema judío de contar.',
            },
          ],
        },
        {
          id: 'dos-calendarios',
          title: 'La clave: dos calendarios de Pascua en Jerusalén',
          blocks: [
            {
              type: 'paragraph',
              content:
                'La aparente contradicción entre Juan (Cristo es el cordero pascual, crucificado el día 14 de Nisan) y los Sinópticos (la Última Cena fue una Cena de Pascua) se resuelve con una evidencia histórica fascinante: en el Jerusalén del siglo I existían dos calendarios de Pascua — el calendario oficial fariseo y el calendario esenio.',
            },
            {
              type: 'doctrine_box',
              title: 'Los dos calendarios de Pascua',
              content:
                'Calendario esenio: comenzaba dos días antes del calendario oficial. La Última Cena del martes por la noche fue una Cena de Pascua esenio — la Pascua según el calendario que usaban algunos grupos en Jerusalén. Calendario fariseo (oficial): el 14 de Nisan (día de sacrificar el cordero de la Pascua) cayó ese año en jueves. Cristo fue crucificado el jueves 14 de Nisan — literalmente al mismo tiempo que los corderos pascuales eran sacrificados en el Templo. Juan lo ve y lo dice: "He aquí el Cordero de Dios." Los dos calendarios explican la aparente contradicción entre Juan y los Sinópticos.',
            },
            {
              type: 'steps',
              title: 'La semana de la pasión con dos calendarios',
              items: [
                {
                  step: 'Martes noche',
                  title: 'Última Cena (calendario esenio)',
                  body: 'Jesús celebra la Cena de Pascua según el calendario esenio, dos días antes del calendario oficial. Institución de la Santa Cena. Oración en Getsemaní.',
                },
                {
                  step: 'Miércoles',
                  title: 'Juicio y traición',
                  body: 'Arresto, juicio ante Caifás, Pedro niega. Los líderes judíos no podían entrar al pretorio para no contaminarse antes de la Pascua oficial (Juan 18:28).',
                },
                {
                  step: 'Jueves 14 de Nisan',
                  title: 'Crucifixión — el día del cordero pascual',
                  body: 'Cristo es crucificado el mismo día en que los corderos de la Pascua oficial son sacrificados en el Templo. Muere a las 3 p.m. Juan 19:14 lo confirma: era "el día de la preparación de la pascua" (14 de Nisan).',
                },
                {
                  step: 'Viernes 15 de Nisan',
                  title: 'El Gran Sábado — Pascua oficial',
                  body: 'El primer día de la Pascua oficial era un Yom Tov — un Sábado de festival independiente del día de la semana. En el año 30, cayó en viernes. Este es el "gran día de reposo" de Juan 19:31, no el sábado semanal.',
                },
                {
                  step: 'Domingo',
                  title: 'Resurrección',
                  body: 'El primer día de la semana. Tres días desde la crucifixión del jueves. Tres noches en el sepulcro.',
                },
              ],
            },
          ],
        },
      ],
    },
    {
      id: 'seccion-4',
      title: 'IV. El Gran Sábado explicado',
      intro: { romanNumeral: 'IV', title: 'El Gran Sábado explicado' },
      topics: [
        {
          id: 'high-day',
          title: 'Juan 19:31 — el "gran día de reposo"',
          blocks: [
            {
              type: 'highlight_verse',
              reference: 'Juan 19:31',
              text: 'Entonces los judíos, por cuanto era el día de la preparación, a fin de que los cuerpos no quedasen en la cruz en sábado, pues aquel sábado era un gran día, rogaron a Pilato que se les quebrasen las piernas y fuesen quitados.',
            },
            {
              type: 'paragraph',
              content:
                'Juan especifica que el sábado posterior a la crucifixión era un "gran día" (megalē hē hēmera en griego). Chadwick identifica esto como la traducción del hebreo Yom Tov — el término para los días santos festivos que son "sábados" independientemente del día de la semana en que caigan. El primer día de la Pascua (15 de Nisan) es siempre un Yom Tov.',
            },
            {
              type: 'paragraph',
              content:
                'Si la crucifixión fue el jueves 14 de Nisan (día de preparación para la Pascua), entonces el día siguiente — el "gran sábado" — fue el viernes 15 de Nisan (primer día de la Pascua). Los líderes judíos querían que los cuerpos fueran retirados antes de ese viernes festivo, no necesariamente antes del sábado semanal. Esto reconcilia perfectamente el relato de Juan con la cronología del jueves.',
            },
            {
              type: 'doctrine_box',
              title: 'Por qué esto importa para la Resurrección',
              content:
                'Si el "gran sábado" fue el viernes de Pascua (no el sábado semanal), entonces: las mujeres pudieron comprar especias el sábado regular (Marcos 16:1), llegaron a la tumba el domingo "al amanecer" (primera oportunidad después de dos días de sábado consecutivos — viernes de Pascua y sábado regular), y encontraron la tumba vacía. Toda la narrativa de la Resurrección cuadra perfectamente con la crucifixión del jueves.',
            },
          ],
        },
      ],
    },
    {
      id: 'seccion-5',
      title: 'V. La astronomía confirma',
      intro: { romanNumeral: 'V', title: 'La astronomía confirma' },
      topics: [
        {
          id: 'calculo-astronomico',
          title: 'Humphreys y Waddington — el 14 de Nisan cayó en jueves',
          blocks: [
            {
              type: 'paragraph',
              content:
                'Los físicos Colin Humphreys y W.G. Waddington de la Universidad de Oxford aplicaron cálculos astronómicos precisos a la pregunta: ¿en qué día de la semana cayó el 14 de Nisan durante los años del gobierno de Poncio Pilato? El calendario judío sigue ciclos lunares, y es posible calcular con exactitud cuándo ocurrió cada luna llena en el pasado.',
            },
            {
              type: 'key_points',
              title: 'Los resultados astronómicos para cada año candidato',
              points: [
                'Año 27 d.C.: el 14 de Nisan cayó en miércoles — no hay evidencia evangélica para una crucifixión del miércoles',
                'Año 30 d.C.: el 14 de Nisan cayó en JUEVES, 6 de abril (calendario juliano) — confirma exactamente la tesis de Chadwick',
                'Año 33 d.C.: el 14 de Nisan cayó en viernes — este es el argumento astronómico para el Viernes Santo del año 33',
                'Solo los años 30 y 33 son candidatos serios basados en astronomía',
                'El Libro de Mormón elimina el año 33; la astronomía confirma el año 30',
              ],
            },
            {
              type: 'paragraph',
              content:
                'La convergencia es significativa: los cálculos astronómicos de Humphreys y Waddington, hechos independientemente del Libro de Mormón, producen exactamente el mismo resultado que el Libro de Mormón produce por vía cronológica: el 14 de Nisan, año 30 d.C., cayó en jueves. Los instrumentos independientes convergen en la misma respuesta.',
            },
          ],
        },
        {
          id: 'confirmacion-mishna',
          title: 'Fuentes misnaicas y la práctica del calendario judío',
          blocks: [
            {
              type: 'paragraph',
              content:
                'El calendario judío no era solo un cálculo astronómico. Era determinado por la observación directa de la luna nueva por testigos en Jerusalén. La Mishná documenta este proceso en detalle. Chadwick usa fuentes misnaicas para confirmar que las prácticas de observación del primer siglo son consistentes con los cálculos astronómicos modernos — y que en el año 30 d.C., el Nisan 14 efectivamente fue jueves.',
            },
            {
              type: 'paragraph',
              content:
                'Los Evangelios también son consistentes con los detalles del calendario: "el día de la preparación" (griego: Paraskeue) era el término técnico para el 14 de Nisan, el día en que se sacrificaba el cordero pascual y se preparaba la Pascua. Juan usa este término en 19:14 precisamente porque quiere que sus lectores judíos entiendan que Cristo murió como el Cordero Pascual en el día técnico de "preparación" — el 14 de Nisan.',
            },
            {
              type: 'highlight_verse',
              reference: 'Juan 19:14',
              text: 'Era la preparación de la pascua, y como la hora sexta. Entonces dijo a los judíos: ¡He aquí vuestro Rey!',
            },
          ],
        },
      ],
    },
    {
      id: 'seccion-6',
      title: 'VI. Jueves 6 de abril del año 30 d.C.',
      intro: { romanNumeral: 'VI', title: 'Jueves 6 de abril del año 30 d.C.' },
      topics: [
        {
          id: 'conclusion-convergencia',
          title: 'Cuando todas las líneas de evidencia convergen',
          blocks: [
            {
              type: 'paragraph',
              content:
                'La conclusión de Chadwick es categórica: Jesucristo murió el jueves, 6 de abril del año 30 d.C. (calendario juliano), que corresponde al 14 de Nisan del año judío. Esta conclusión no descansa en una sola evidencia sino en la convergencia de múltiples líneas independientes.',
            },
            {
              type: 'steps',
              title: 'Las seis líneas de evidencia que convergen',
              items: [
                {
                  step: '1',
                  title: 'El Libro de Mormón (cronología nefita)',
                  body: 'El "año 34" del calendario nefita desde el nacimiento de Cristo apunta al año 30 d.C. Además, los "tres días de tinieblas" solo son posibles con una crucifixión del jueves dado el desfase horario.',
                },
                {
                  step: '2',
                  title: 'Astronomía (Humphreys y Waddington)',
                  body: 'El 14 de Nisan en el año 30 d.C. cayó en jueves 6 de abril — este es el único año en el gobierno de Pilato donde el 14 de Nisan es jueves.',
                },
                {
                  step: '3',
                  title: 'Lucas 24:21 (Cleofas en el camino a Emaús)',
                  body: '"Hoy es el tercer día desde que esto aconteció" — dicho el domingo, apunta al jueves como día de crucifixión.',
                },
                {
                  step: '4',
                  title: 'Mateo 12:40 (signo de Jonás)',
                  body: '"Tres días y tres noches" cuadra con jueves-domingo pero no con viernes-domingo.',
                },
                {
                  step: '5',
                  title: 'Juan 19:31 (el gran sábado)',
                  body: 'El "gran día de reposo" posterior a la crucifixión fue el viernes de Pascua (15 Nisan), no el sábado semanal.',
                },
                {
                  step: '6',
                  title: 'Los dos calendarios de Pascua',
                  body: 'La Última Cena del martes (calendario esenio) + crucifixión del jueves (14 Nisan oficial) resuelve la aparente contradicción entre Juan y los Sinópticos.',
                },
              ],
            },
          ],
        },
        {
          id: 'conexion-restauracion',
          title: 'El 6 de abril — 1800 años de distancia exacta',
          blocks: [
            {
              type: 'paragraph',
              content:
                'Para los miembros de La Iglesia de Jesucristo, esta conclusión tiene una dimensión adicional que no puede pasarse por alto. La Iglesia fue organizada el 6 de abril de 1830. D&C 20:1 afirma que ese es el día designado por la voluntad de Dios. Y según la investigación de Chadwick, Cristo murió el 6 de abril del año 30 d.C.',
            },
            {
              type: 'highlight_verse',
              reference: 'D&C 20:1',
              text: 'El día en que fue organizada la Iglesia de Cristo, establecida de nuevo sobre la tierra, en el año de nuestro Señor mil ochocientos treinta, el sexto día de abril.',
            },
            {
              type: 'paragraph',
              content:
                'Desde el 6 de abril del año 30 d.C. hasta el 6 de abril del año 1830: exactamente 1800 años. El día de la muerte del Fundador y el día del establecimiento de su Iglesia restaurada separados por 1800 años exactos. Joseph Smith no era astrónomo ni cronógrafo del primer siglo. La evidencia de que eligió esa fecha basado en su comprensión de la profecía sobre la fecha de la crucifixión añade una capa más de significado a un ya rico conjunto de evidencias.',
            },
            {
              type: 'doctrine_box',
              title: 'Coincidencia o diseño divino',
              content:
                'Desde la perspectiva de la fe, la convergencia del 6 de abril en dos momentos tan cruciales de la historia del Evangelio — la muerte del Salvador y el establecimiento de su Iglesia restaurada — es exactamente el tipo de precisión que caracterizan el diseño divino. Dios trabaja con precisión cronológica: "en la plenitud de los tiempos" (Efesios 1:10), en el momento exactamente correcto, no aproximadamente correcto.',
            },
          ],
        },
        {
          id: 'implicacion-scriptura',
          title: 'Lo que esto dice sobre la confiabilidad de los Evangelios',
          blocks: [
            {
              type: 'paragraph',
              content:
                'La conclusión de la investigación de Chadwick tiene una implicación apologética significativa: los cuatro Evangelios, escritos independientemente por autores diferentes, son suficientemente coherentes en sus detalles cronológicos como para que un análisis moderno produzca una fecha específica confirmada por la astronomía. Eso no es lo que esperarías de una colección de leyendas míticas.',
            },
            {
              type: 'paragraph',
              content:
                'Las aparentes contradicciones entre Juan y los Sinópticos — que por siglos se usaron como evidencia de inconsistencia histórica — se resuelven con una sola clave: dos calendarios de Pascua en el Jerusalén del primer siglo. Ese es el tipo de detalle que conocería alguien que vivió en ese contexto, no alguien que fabricó las narrativas en el siglo I o II.',
            },
            {
              type: 'note_prompts',
              prompts: [
                '¿Cómo cambia tu devoción al Salvador saber que la fecha de su muerte puede determinarse con este nivel de precisión?',
                '¿Qué te dice la convergencia del 6 de abril (muerte de Cristo y establecimiento de la Iglesia) sobre la naturaleza del diseño divino en la historia?',
                '¿Cómo usarías este argumento para fortalecer la credibilidad del Libro de Mormón como testigo histórico independiente?',
                '¿Hay algún aspecto de la pasión y muerte de Cristo que, a la luz de esta cronología revisada, entiendes ahora de manera diferente?',
              ],
            },
          ],
        },
      ],
    },
  ],
}
