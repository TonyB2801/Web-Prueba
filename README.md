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

## Estado

Hechas las tareas 1–9 de la ficha (base, fuentes, rutas, selector de idioma, componentes `ui`,
Revelar, Hero, BarraDatos, Servicios). ModalVideo funciona de forma básica (tarea 12 parcial).
Las secciones 4–9 son marcadores temporales (`SeccionPendiente`).
