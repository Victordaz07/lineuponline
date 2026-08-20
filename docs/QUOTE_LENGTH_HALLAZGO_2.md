# Diagnóstico — Hallazgo #2 (AUDITORIA_CUMPLIMIENTO.md): longitud de citas de Conferencia General

**Estado:** diagnóstico completo, sin ediciones de contenido todavía.

## Escenario: (a) — problema de contenido, no de plantilla

- `LeaderQuoteBlock.tsx` y `CentralQuoteBlock.tsx` renderizan `quote`/`text` sin ninguna condición de longitud.
- `src/lib/lessonRichUtils.ts` no tiene ninguna función de conteo de palabras, truncado o validación de citas.
- No se encontró ninguna función `truncate`/`maxWords`/`wordLimit` huérfana en `src/` ni `scripts/`.
- Re-verificado contra `main`: 109 citas explícitas de "Conferencia General", 96 superan 30 palabras (88.1%).

Cada autor de contenido escribió la cita completa directamente en el campo `quote`/`text`. La corrección es lección por lección.

## Muestra de 10 (para validar criterio antes de aplicar a las 346)

Ver detalle completo en el mensaje de la conversación del 20 ago 2026. Resumen: 9 de 10 casos se resuelven recortando a la frase más citable (≤30 palabras) manteniendo el formato de cita textual; 1 de 10 (`la-oracion.ts`, cita de "Pray Always" de David A. Bednar) requiere conversión a paráfrasis narrativa porque el argumento depende de una comparación de dos partes que no cabe en el límite sin perder sentido.

## Discursos citados más de una vez (346 lecciones)

21 discursos distintos tienen más de una cita en el catálogo. En 20 de 21, cada repetición es un fragmento distinto del mismo discurso (válido en principio). **Una excepción:** "La Santa Cena y la Expiación" de Dallin H. Oaks aparece con el mismo texto exacto de 59 palabras copiado en `santa-cena.ts` y `sc-arrepentimiento.ts` — requiere decidir si variar el fragmento entre ambas lecciones.

Ver tabla completa en el mensaje de la conversación.

## Próximo paso

Pendiente de que el usuario valide el criterio de la muestra de 10 antes de aplicar recorte/paráfrasis a las 96 instancias restantes.
