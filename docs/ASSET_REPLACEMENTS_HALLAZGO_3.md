# Reemplazos de imágenes — Hallazgo #3 (AUDITORIA_CUMPLIMIENTO.md)

Imágenes generadas por IA que muestran el rostro de Jesucristo de forma realista y protagónica. Este documento es la fuente de verdad de qué imagen reemplaza a cuál, con qué estrategia y en qué estado está cada reemplazo. No reemplaza al catálogo de prompts original (no encontrado en este repositorio) — es una sección separada, específica de esta corrección de cumplimiento.

**Estrategias de reemplazo (Fase 2 — set de 33, aún sin generar):**
- **E1 — De espaldas / perfil lejano:** misma escena, cámara detrás o al lado de Cristo, foco en quienes lo escuchan/observan.
- **E2 — Símbolo central:** reemplaza la figura de Cristo por el elemento simbólico de la escena, con las demás personas reaccionando hacia ese punto fuera de cuadro.
- **E3 — Grupo sin protagonista dominante:** Cristo permanece en el grupo pero como una figura más, sin ser el punto focal.

**Estrategia real usada en Fase 1 — E4 (cambio de estilo, no de composición):** en vez de evitar el protagonismo de Cristo (E1/E2/E3), las 9 imágenes de Fase 1 se generaron en **estilo low-poly/semi-toon** (facetado geométrico triangular aplicado también al rostro y la piel, no solo a ropa/fondo), apoyándose en el criterio de calibración del usuario: una imagen estilizada que no busca parecer una fotografía real no aplica al hallazgo #3, incluso si Cristo es protagonista con el rostro visible. Cada imagen fue verificada visualmente confirmando faceteado facial fuerte y consistente con el resto de la composición antes de aprobarse. Ver hilo de la conversación para el detalle de las iteraciones de prompt que llevaron a este criterio.

**Estados posibles:** `pendiente` · `generada` · `aprobada` · `descartada`

## Fase 1 — Máxima visibilidad (heroes + ícono de módulo)

Las 8 imágenes de heroes/collages quedaron **aprobadas por el usuario** (estilo E4, low-poly/semi-toon). El ícono de módulo fue **rechazado** en su primera versión (retrato) y regenerado como símbolo (cordero) — ver fila final.

| Archivo original | Estrategia | Concepto de reemplazo | Estado | Archivo nuevo |
|---|---|---|---|---|
| `modules/jesus/heroes/module-hero-jesus.webp` | E4 | Jesús en la orilla del mar de Galilea al atardecer, protagonista, estilo low-poly con rostro faceteado; barca y discípulos al fondo | **aprobada** | `modules/jesus/_review/module-hero-jesus.webp` |
| `modules/jesus/heroes/lesson-hero-jesus-el-cristo.webp` | E4 | Jesús de pie en sendero al amanecer, mano extendida, estilo low-poly con rostro faceteado; templo y río al fondo | **aprobada** | `modules/jesus/_review/lesson-hero-jesus-el-cristo.webp` |
| `modules/jesus/heroes/lesson-hero-jesus-el-hombre.webp` | E4 | Jesús caminando por una calle de Nazaret saludando a un niño y vecinos, estilo low-poly con rostro faceteado | **aprobada** | `modules/jesus/_review/lesson-hero-jesus-el-hombre.webp` |
| `modules/jesus/heroes/lesson-hero-resurreccion.webp` | E4 | Cristo resucitado junto al sepulcro abierto, hablando con discípulos y una mujer, estilo low-poly con rostro faceteado | **aprobada** | `modules/jesus/_review/lesson-hero-resurreccion.webp` |
| `modules/jesus/heroes/lesson-hero-yo-soy.webp` | E4 | Collage circular de los 7 símbolos "Yo Soy" alrededor de Jesús protagonista, estilo low-poly con rostro faceteado (regenerada tras primer intento con rostro demasiado suave) | **aprobada** | `modules/jesus/_review/lesson-hero-yo-soy.webp` |
| `modules/jesus/heroes/lesson-hero-biblia-libro-mormon.webp` | E4 | Jesús con brazos abiertos ante multitud americana, estilo low-poly con rostro faceteado; ciudad-templo mesoamericana al fondo | **aprobada** | `modules/jesus/_review/lesson-hero-biblia-libro-mormon.webp` |
| `modules/jesus/heroes/lesson-hero-circulo-de-jesus.webp` | E4 | Jesús en el centro de un círculo de discípulos diversos, estilo low-poly con rostro faceteado | **aprobada** | `modules/jesus/_review/lesson-hero-circulo-de-jesus.webp` |
| `modules/jesus/heroes/module-conclusion.webp` | E4 | Collage de cierre: Jesús protagonista centrado en luz radiante, con viñetas de familia/sepulcro/enseñanza/camino alrededor, estilo low-poly con rostro faceteado | **aprobada** | `modules/jesus/_review/module-conclusion.webp` |
| `modules/jesus/ui/module-icon-jesus.webp` | E4 → **rediseñado** | ~~Medallón-retrato de Jesús, estilo low-poly con rostro faceteado~~ — **rechazado por el usuario**: rompía la consistencia del set (los 6 hermanos son símbolos planos sin rostro) y perdía legibilidad a tamaño de ícono de navegación (24-32px). Reemplazado por un **cordero** (símbolo distintivo de Cristo no usado por los 6 hermanos: corona, sandalias, lámpara, libro, paloma, tumba), mismo marco de soga dorada y fondo con destello radial, sin rostro ni figura humana | **aprobada** | `modules/jesus/_review/module-icon-jesus.webp` |

**✅ Fase 1 cerrada — 9/9 filas en estado `aprobada` (20 ago 2026).**

## Fase 2 — Set de lecciones (`modules/jesus/lessons/**`, 33 imágenes)

**Cambio de estrategia (20 ago 2026):** las 33 imágenes pasan de E1/E2/E3 (composición que evita el protagonismo de Cristo) a **E4** — el mismo criterio ya validado y aprobado en Fase 1: Cristo se mantiene como figura protagónica de cada escena, tal como estaba planeado en el concepto original de cada lección, renderizado en **estilo low-poly geométrico facetado** (superficies triangulares planas formando volumen y sombra, sin fotorrealismo, sin textura de piel/pelaje realista, paleta cálida dorada/tierra, iluminación radiante — facetado aplicado también a piel y rostro, no solo a ropa y fondo). No se rediseña la composición de cada escena, solo el estilo de render.

| Archivo original | Estrategia | Concepto de reemplazo (escena original, Cristo protagonista, estilo E4) | Estado | Archivo nuevo |
|---|---|---|---|---|
| `jesus-el-hombre/01-nazaret-taller.webp` | E4 | Jesús joven en el taller de carpintería de Nazaret, con José y María cerca | pendiente | — |
| `jesus-el-hombre/02-pozo-jacob.webp` | E4 | Jesús conversando con la mujer samaritana junto al pozo de Jacob | pendiente | — |
| `jesus-el-hombre/03-tormenta-barca.webp` | E4 | Jesús calmando la tormenta en la barca, junto a los discípulos | pendiente | — |
| `jesus-el-hombre/04-llanto-lazaro.webp` | E4 | Jesús llorando ante la tumba de Lázaro, con Marta y María | pendiente | — |
| `jesus-el-hombre/05-getsemani.webp` | E4 | Jesús orando en el huerto de Getsemaní — **muestra piloto** (ver abajo) | generada | `modules/jesus/_review/jesus-el-hombre/05-getsemani.webp` |
| `jesus-el-cristo/01-bautismo.webp` | E4 | El bautismo de Jesús por Juan el Bautista en el Jordán, paloma y luz descendiendo | pendiente | — |
| `jesus-el-cristo/02-transfiguracion.webp` | E4 | La transfiguración de Jesús en el monte, ante Pedro, Santiago y Juan | pendiente | — |
| `jesus-el-cristo/03-poder-sobre-muerte.webp` | E4 | Jesús mostrando poder sobre la muerte (resurrección de Lázaro) | pendiente | — |
| `jesus-el-cristo/04-autoridad-ensenanza.webp` | E4 | Jesús enseñando con autoridad a la multitud | pendiente | — |
| `jesus-el-cristo/05-confesion-testigos.webp` | E4 | Pedro confesando que Jesús es el Cristo | pendiente | — |
| `biblia-libro-mormon/03-sermon-biblia.webp` | E4 | Jesús enseñando el Sermón del Monte | pendiente | — |
| `biblia-libro-mormon/04-ensenanza-templo.webp` | E4 | Jesús enseñando a la multitud nefita en el templo americano — **muestra piloto** (ver abajo). Faceteado facial algo más suave que las otras 3 muestras (rostro pequeño en plano general, riesgo bajo) — revisar si se repite en el resto del lote. | generada | `modules/jesus/_review/biblia-libro-mormon/04-ensenanza-templo.webp` |
| `biblia-libro-mormon/05-abundancia.webp` | E4 | Jesús bendiciendo y sanando en abundancia entre el pueblo nefita | pendiente | — |
| `biblia-libro-mormon/06-paralelo-ensenanzas.webp` | E4 | Jesús enseñando — paralelo entre sus enseñanzas bíblicas y del Libro de Mormón | pendiente | — |
| `circulo-de-jesus/01-familia.webp` | E4 | Jesús en el círculo familiar, con María | pendiente | — |
| `circulo-de-jesus/02-llamamiento-pescadores.webp` | E4 | Jesús llamando a Pedro y Andrés a ser pescadores de hombres | pendiente | — |
| `circulo-de-jesus/03-mujeres-discipulas.webp` | E4 | Jesús con sus discípulas mujeres | pendiente | — |
| `circulo-de-jesus/04-betania.webp` | E4 | Jesús en la casa de Betania, con Marta, María y Lázaro | pendiente | — |
| `circulo-de-jesus/05-nicodemo.webp` | E4 | Jesús conversando de noche con Nicodemo | pendiente | — |
| `circulo-de-jesus/06-nefitas.webp` | E4 | Jesús con los discípulos nefitas | pendiente | — |
| `yo-soy/01-pan-de-vida.webp` | E4 | Jesús como el Pan de Vida, con la multitud | pendiente | — |
| `yo-soy/02-luz-del-mundo.webp` | E4 | Jesús como la Luz del Mundo, escena nocturna con lámparas — **muestra piloto** (ver abajo) | generada | `modules/jesus/_review/yo-soy/02-luz-del-mundo.webp` |
| `yo-soy/03-la-puerta.webp` | E4 | Jesús como la Puerta, junto al redil | pendiente | — |
| `yo-soy/04-buen-pastor.webp` | E4 | Jesús como el Buen Pastor, con el rebaño | pendiente | — |
| `yo-soy/05-resurreccion-y-vida.webp` | E4 | Jesús como la Resurrección y la Vida, junto al sepulcro | pendiente | — |
| `yo-soy/06-camino-verdad-vida.webp` | E4 | Jesús como el Camino, la Verdad y la Vida | pendiente | — |
| `yo-soy/07-vid-verdadera.webp` | E4 | Jesús como la Vid Verdadera, en el viñedo | pendiente | — |
| `yo-soy/08-antes-de-abraham.webp` | E4 | Jesús declarando "antes que Abraham fuese, yo soy" | pendiente | — |
| `resurreccion/01-sepultura.webp` | E4 | La sepultura de Jesús | pendiente | — |
| `resurreccion/04-maria-magdalena.webp` | E4 | Jesús resucitado apareciendo a María Magdalena | pendiente | — |
| `resurreccion/06-emaus.webp` | E4 | Jesús caminando con los discípulos camino a Emaús — **muestra piloto** (ver abajo) | generada | `modules/jesus/_review/resurreccion/06-emaus.webp` |
| `resurreccion/07-aparicion-discipulos.webp` | E4 | Jesús apareciendo a los discípulos | pendiente | — |
| `resurreccion/08-tomas.webp` | E4 | Jesús mostrando sus heridas a Tomás | pendiente | — |

### Muestra piloto (4 de 33) — validación de consistencia antes de escalar

Cubren las 4 variantes de escena pedidas (interior, multitud, paisaje, close-up) en 4 módulos distintos:

| Archivo | Módulo | Tipo de escena |
|---|---|---|
| `jesus-el-hombre/05-getsemani.webp` | Jesús el Hombre | Close-up / íntimo |
| `biblia-libro-mormon/04-ensenanza-templo.webp` | Biblia/Libro de Mormón | Multitud |
| `yo-soy/02-luz-del-mundo.webp` | Yo Soy | Interior |
| `resurreccion/06-emaus.webp` | Resurrección | Paisaje |

**✅ Muestra piloto generada y verificada (20 ago 2026)** — las 4 pasan el criterio de faceteado facial establecido en Fase 1. Única observación: en `biblia-libro-mormon/04-ensenanza-templo.webp` el rostro sale con faceteado algo más suave que en las otras 3 (riesgo bajo por ser un plano general con el rostro pequeño en el encuadre) — a vigilar si se repite en el resto del lote de 33. Pendiente de confirmación final del usuario antes de escalar a las 29 restantes.

**Total: 9 (Fase 1) + 33 (Fase 2) = 42 imágenes.**

## Referencia — imágenes que NO requieren reemplazo (Categoría B/C dentro del set de 38)

| Archivo | Categoría | Motivo |
|---|---|---|
| `biblia-libro-mormon/01-vision-natividad.webp` | B | Bebé Jesús, ojos cerrados, no es el foco de la composición (María lo es) |
| `biblia-libro-mormon/02-samuel-lamanita.webp` | C | No aparece Cristo |
| `resurreccion/02-guardia-sepulcro.webp` | C | No aparece Cristo |
| `resurreccion/03-mujeres-sepulcro.webp` | C | No aparece Cristo |
| `resurreccion/05-pedro-juan-sepulcro.webp` | C | Escena de Pedro y Juan; Cristo no aparece en el relato bíblico de este momento |

## Cobertura ampliada (Tarea A) — sin nuevos hallazgos Categoría A

Revisados y clasificados como **C** (no aplica) o fuera de alcance:

| Grupo | Resultado |
|---|---|
| `camino/retos/nt-doce-apostoles.webp` | C — mismo estilo low-poly que `camino/personajes/jesus.webp`; no fotorrealista |
| `camino/mapas/*.webp` (5 archivos) | C — cartografía ilustrada, sin figuras humanas |
| `camino/medallas/*.webp` (3 archivos) | C — símbolos (libro, estrella, llama), sin rostro |
| `camino/avatar/*.webp` (24 archivos) | C — avatares genéricos de peregrino (hombre/mujer), estilo low-poly/3D estilizado, no representan a Cristo |
| `modules/david/**` (todos) | Fuera de alcance — representan a David, no a Cristo; el hallazgo #3 es específico sobre el rostro de Jesucristo |
| `games/scripture-quest-card.webp`, `memoria-card.webp`, `adivina-palabra-card.webp` | C — sin figura humana |

No se encontraron imágenes Categoría A adicionales fuera de las 42 ya listadas.
