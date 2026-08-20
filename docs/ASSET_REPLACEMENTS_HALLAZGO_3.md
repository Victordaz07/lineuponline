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
| `modules/jesus/ui/module-icon-jesus.webp` | E4 → **rediseñado** | ~~Medallón-retrato de Jesús, estilo low-poly con rostro faceteado~~ — **rechazado por el usuario**: rompía la consistencia del set (los 6 hermanos son símbolos planos sin rostro) y perdía legibilidad a tamaño de ícono de navegación (24-32px). Reemplazado por un **cordero** (símbolo distintivo de Cristo no usado por los 6 hermanos: corona, sandalias, lámpara, libro, paloma, tumba), mismo marco de soga dorada y fondo con destello radial, sin rostro ni figura humana | generada (pendiente confirmación final) | `modules/jesus/_review/module-icon-jesus.webp` |

## Fase 2 — Set de lecciones (`modules/jesus/lessons/**`, 33 imágenes)

| Archivo original | Estrategia | Concepto de reemplazo | Estado | Archivo nuevo |
|---|---|---|---|---|
| `jesus-el-hombre/01-nazaret-taller.webp` | E1 | Taller visto desde atrás de Cristo — foco en María y José al fondo, manos trabajando la madera en primer plano | pendiente | — |
| `jesus-el-hombre/02-pozo-jacob.webp` | E1 | Plano amplio del pozo al atardecer, Cristo de espaldas/perfil lejano; la mujer acercándose es el foco | pendiente | — |
| `jesus-el-hombre/03-tormenta-barca.webp` | E2 | La tormenta y la barca como protagonistas; Cristo como bulto envuelto/silueta durmiendo en la proa, discípulos luchando con las velas en primer plano | pendiente | — |
| `jesus-el-hombre/04-llanto-lazaro.webp` | E1 | Grupo de espaldas/perfil ante la tumba de Lázaro; el llanto de Marta y María es el foco emocional | pendiente | — |
| `jesus-el-hombre/05-getsemani.webp` | E1 | De espaldas, orando bajo el olivo, luz de luna (ya validado por referencia del usuario) | pendiente | — |
| `jesus-el-cristo/01-bautismo.webp` | E2 | Cámara desde detrás de Juan el Bautista y Cristo (ambos de espaldas o muy de perfil), foco en la paloma y el rayo de luz sobre el agua | pendiente | — |
| `jesus-el-cristo/02-transfiguracion.webp` | E2 | Foco en la luz/nube brillante en la cima del monte y las tres siluetas a contraluz (sin rasgos faciales distinguibles); discípulos tapándose los ojos en primer plano | pendiente | — |
| `jesus-el-cristo/03-poder-sobre-muerte.webp` | E1 | Escena vista desde atrás/lateral de Cristo; foco en el rostro de asombro de María ante la tumba | pendiente | — |
| `jesus-el-cristo/04-autoridad-ensenanza.webp` | E3 | Plano abierto de la multitud sentada en el patio del templo; Cristo como una figura más, de espaldas o muy lejana | pendiente | — |
| `jesus-el-cristo/05-confesion-testigos.webp` | E1 | Grupo de apóstoles de frente; Cristo de espaldas/perfil, foco en la reacción de Pedro | pendiente | — |
| `biblia-libro-mormon/03-sermon-biblia.webp` | E3 | Plano desde atrás del círculo de oyentes; Cristo como silueta lejana al centro, foco en los rostros de quienes escuchan | pendiente | — |
| `biblia-libro-mormon/04-ensenanza-templo.webp` | E2 | Luz descendente sobre la plaza del templo americano como elemento central; multitud arrodillada reaccionando, Cristo en silueta a contraluz | pendiente | — |
| `biblia-libro-mormon/05-abundancia.webp` | E1 | Foco en las manos extendidas de la gente recibiendo; Cristo de espaldas/perfil parcial | pendiente | — |
| `biblia-libro-mormon/06-paralelo-ensenanzas.webp` | E3 | Círculo de discípulos visto desde atrás de Cristo, foco en el paisaje y los rostros de los oyentes | pendiente | — |
| `circulo-de-jesus/01-familia.webp` | E1 | Patio de la casa visto de perfil/espaldas de Cristo; foco en el rostro sonriente de la mujer | pendiente | — |
| `circulo-de-jesus/02-llamamiento-pescadores.webp` | E1 | Misma orilla, Cristo de espaldas mirando hacia el mar/barca; foco en los pescadores reaccionando | pendiente | — |
| `circulo-de-jesus/03-mujeres-discipulas.webp` | E3 | Círculo de mujeres visto desde atrás de Cristo, foco en sus rostros | pendiente | — |
| `circulo-de-jesus/04-betania.webp` | E1 | Escena de sobremesa vista de perfil lejano/espaldas; foco en la fruta compartida y los rostros de los anfitriones | pendiente | — |
| `circulo-de-jesus/05-nicodemo.webp` | E2 | Nocturna con la ciudad iluminada de fondo; Cristo en silueta a contraluz de la luna, foco en el rostro pensativo de Nicodemo | pendiente | — |
| `circulo-de-jesus/06-nefitas.webp` | E3 | Multitud reunida vista desde atrás; Cristo como silueta lejana entre el grupo, luz irradiando desde el centro | pendiente | — |
| `yo-soy/01-pan-de-vida.webp` | E1 | Círculo de discípulos junto al lago, Cristo de espaldas/perfil, foco en la canasta de pan y peces | pendiente | — |
| `yo-soy/02-luz-del-mundo.webp` | E2 | Interior nocturno con lámparas encendidas como protagonistas; Cristo en silueta a contraluz de la ventana | pendiente | — |
| `yo-soy/03-la-puerta.webp` | E1 | Redil y puerta de madera como centro de la composición; Cristo de espaldas junto a la puerta, ovejas como foco | pendiente | — |
| `yo-soy/04-buen-pastor.webp` | E2 | Oveja en brazos y cayado como elemento central; Cristo de espaldas/perfil parcial mirando el rebaño | pendiente | — |
| `yo-soy/05-resurreccion-y-vida.webp` | E1 | Tumba y flores en primer plano; Cristo de espaldas/perfil hablando con las mujeres | pendiente | — |
| `yo-soy/06-camino-verdad-vida.webp` | E3 | Multitud vista desde atrás de Cristo, camino y templo al fondo como elementos centrales | pendiente | — |
| `yo-soy/07-vid-verdadera.webp` | E2 | Viñedo con uvas en primer plano como protagonista; Cristo de espaldas/perfil señalando la vid | pendiente | — |
| `yo-soy/08-antes-de-abraham.webp` | E1 | Plaza del templo vista de perfil lejano; foco en los sacerdotes/ancianos reaccionando | pendiente | — |
| `resurreccion/01-sepultura.webp` | E2 | Foco en el lienzo y las manos de José de Arimatea/Nicodemo envolviendo el cuerpo; rostro de Cristo fuera de cuadro o cubierto por el lienzo | pendiente | — |
| `resurreccion/04-maria-magdalena.webp` | E1 | Jardín del sepulcro visto de espaldas/perfil de Cristo; foco total en el rostro de asombro de María | pendiente | — |
| `resurreccion/06-emaus.webp` | E3 | Camino visto desde atrás de los tres caminantes; Cristo como una figura más entre los discípulos, sin ser el foco | pendiente | — |
| `resurreccion/07-aparicion-discipulos.webp` | E1 | Interior en penumbra, Cristo de espaldas/perfil lejano hablando a los discípulos sentados (ya validado por referencia del usuario) | pendiente | — |
| `resurreccion/08-tomas.webp` | E2 | Foco en la mano de Tomás tocando la herida; Cristo de perfil parcial o con el rostro fuera de cuadro | pendiente | — |

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
