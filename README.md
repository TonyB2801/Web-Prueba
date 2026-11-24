# KeyStays · Landing

Landing de una sola página (EN/ES) para que el propietario solicite el análisis gratuito.
Next.js 16 (App Router) · React 19 · TypeScript · Tailwind CSS v4.

## Cómo correrlo

```bash
npm install
npm run dev        # http://localhost:3000 → redirige a /en o /es
npm run build && npm start
npm run lint
```

## Dónde se edita cada cosa

| Qué | Dónde |
|---|---|
| Todos los textos (EN y ES) | `src/content/site.ts` |
| Colores, fuentes, tamaños, espacios, movimiento | `src/app/globals.css` (variables en `:root`) |
| Fuentes cargadas | `src/app/[lang]/layout.tsx` |
| Idiomas y redirección de `/` | `src/lib/i18n.ts` y `src/proxy.ts` (en Next 16, `middleware.ts` se llama `proxy.ts`) |
| Secciones | `src/components/*.tsx` · piezas comunes en `src/components/ui/` |

Reglas: ningún texto, color, fuente ni tamaño fijo dentro de un componente.
`[COMPLETAR]` = dato pendiente del cliente; se muestra a propósito hasta tenerlo.

## Satoshi

Mientras no esté la licencia, se usa Manrope como respaldo. Para activarla: copiar
`Satoshi-Variable.woff2` en `public/fonts/` y descomentar el `@font-face` de `globals.css`.

## Formulario

Valida y muestra la confirmación, pero **no envía ni guarda nada** todavía.
El punto de conexión está en `src/lib/envio.ts`; las reglas, en `src/lib/validacion.ts`.
No publicar en el dominio final hasta conectar el envío real.

## Estado

Hechas las tareas 1–18 de la ficha: las 9 secciones en celular, formulario con validación,
botón fijo en celular, pie y selector de idioma (arriba y en el pie).
ModalVideo funciona con un marcador hasta que llegue el video.
Pendiente: 19 (ajuste fino de escritorio) a 24 (publicación).
