# Plantilla: Informe de Álbum — Seeker Gospel Music

Este es el formato que el panel de admin (`/admin/musica` → pestaña "Importar informe")
sabe leer automáticamente. Cada canción va entre `---SONG---` y `---FIN---`. Dentro, cada línea
es `Etiqueta: valor`. El orden de las etiquetas no importa, pero los nombres sí deben ser exactos
(no distingue mayúsculas/minúsculas, pero sí el texto en español).

**Etiquetas reconocidas:** `Título`, `Título EN`, `Personaje`, `Era`, `YouTube`, `Arco`,
`Escrituras`, `Signature Sound`.

**Obligatorias:** `Título` y `YouTube` (con una URL válida). Las demás pueden ir vacías si
todavía no las tienes — puedes completarlas después desde el panel.

---

## Ejemplo con 2 canciones reales de "Mis Otras Ovejas"

```
---SONG---
Título: Estandarte De La Libertad
Título EN: Title of Liberty
Personaje: Capitán Moroni
Era: Guerra y libertad · ~73–64 a.C.
YouTube: https://youtube.com/watch?v=EJEMPLO1
Arco: Un manto rasgado convertido en bandera. No por gloria — por convenio. "Si hubiéramos sido siempre hombres como Moroni..." El comandante que preparaba la paz mientras libraba la guerra.
Escrituras: Alma 46:12–13 · Alma 48:11–17
Signature Sound: Modern folk rock con electronic y melodic techno. 138 BPM. Anthem de estadio pero con corazón de convenio — poderoso sin ser agresivo.
---FIN---

---SONG---
Título: Nunca Dudaron
Título EN: They Did Not Doubt
Personaje: Los 2,000 Guerreros y sus madres
Era: Los 2,000 · Alma 56–57
YouTube: https://youtube.com/watch?v=EJEMPLO2
Arco: Dos mil jóvenes que nunca habían peleado. Ninguno cayó. Su secreto: lo que sus madres les enseñaron. La canción más coral de la temporada — porque ellos nunca estuvieron solos.
Escrituras: Alma 56:47–48 · Alma 57:21–27
Signature Sound: Organic electronic con cinematic indie rock y ambient folk. Las voces de las madres entrando en el puente — el momento más emotivo de la temporada.
---FIN---
```

---

## Reglas prácticas

- **Un párrafo por campo, en una sola línea del archivo de texto.** Si "Arco" es largo, no le des Enter en la mitad — escríbelo todo seguido en esa misma línea (el panel sí soporta que uses varias líneas seguidas para el mismo campo, pero es más fácil de revisar si queda en una).
- **La URL de YouTube puede ser cualquier formato** (`youtube.com/watch?v=`, `youtu.be/`, `youtube.com/shorts/`) — el panel extrae el ID solo.
- **Si te falta un dato todavía** (por ejemplo aún no tienes el "Signature Sound" definido), deja la etiqueta vacía o quítala del bloque — el panel te va a marcar esa canción como incompleta pero te deja guardarla igual y completarla después.
- **Puedes pegar el álbum completo de una sola vez** (las 15 canciones de una temporada, por ejemplo) — el panel las procesa todas juntas y te muestra una vista previa antes de guardar nada.

---

## Si le pides a Claude que te redacte un informe nuevo

Copia y pega esto como instrucción:

> "Redáctame el informe de las canciones de [nombre del álbum] usando EXACTAMENTE este formato,
> un bloque `---SONG---` ... `---FIN---` por canción, con las etiquetas Título, Título EN,
> Personaje, Era, YouTube (déjala vacía si no la tienes todavía), Arco, Escrituras, y Signature
> Sound. [Pega aquí este archivo de plantilla como referencia del formato exacto]."
