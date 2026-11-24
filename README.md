# KeyStays · Landing

Landing de una sola página, en inglés y español, para que el propietario de una residencia
en Miami **solicite el análisis gratuito**.

Next.js 16 (App Router) · React 19 · TypeScript · Tailwind CSS v4 · `next/font`. Sin otras librerías.

## Cómo correrlo

Requisitos: Node.js 20.9 o superior.

```bash
npm install
cp .env.example .env.local   # y completar los valores
npm run dev                  # http://localhost:3000 → redirige a /en o /es
```

Otros comandos:

```bash
npm run build && npm start   # versión de producción
npm run lint                 # ESLint
```

## Variables de entorno

| Variable | Para qué |
|---|---|
| `NEXT_PUBLIC_SITE_URL` | URL pública, sin barra final. Se usa en canonical, hreflang, sitemap y Open Graph. |
| `INDEXAR` | `true` solo en el dominio final. Con cualquier otro valor la página va con `noindex` y `robots.txt` bloquea todo. |

## Dónde se edita cada cosa

| Qué | Dónde |
|---|---|
| **Todos los textos (EN y ES)** | `src/content/site.ts` |
| Colores, fuentes, tamaños, espacios, movimiento | `src/app/globals.css` (variables en `:root`) |
| Fuentes cargadas | `src/app/[lang]/layout.tsx` |
| Metadatos, hreflang, Open Graph | `src/app/[lang]/layout.tsx` |
| Datos estructurados (`LocalBusiness`) | `src/app/[lang]/page.tsx` |
| Idiomas y redirección de `/` | `src/lib/i18n.ts` y `src/proxy.ts` (en Next 16, `middleware.ts` se llama `proxy.ts`) |
| Reglas del formulario | `src/lib/validacion.ts` |
| Envío del formulario (hoy vacío) | `src/lib/envio.ts` |
| Secciones | `src/components/*.tsx` · piezas comunes en `src/components/ui/` |
| Imágenes, video, fuentes, logo | `public/images`, `public/video`, `public/fonts`, `public/brand` |

### Reglas del proyecto

- Ningún texto escrito dentro de un componente: todo sale de `site.ts`, con `en` y `es`.
- Ningún color, fuente ni tamaño fijo dentro de un componente: todo sale de `globals.css`.
- No se inventan cifras, garantías, testimonios, plazos, edificios ni zonas.
  `[COMPLETAR]` = dato pendiente del cliente; se muestra a propósito hasta tenerlo.
- Un solo botón principal visible por pantalla (el botón fijo de celular se oculta en el hero y en el formulario).
- `prefers-reduced-motion` se respeta siempre.

## Cómo cargar lo que falta

- **Foto del hero:** copiarla a `public/images/` y poner la ruta en `site.hero.imagen.src`.
- **Video:** copiarlo a `public/video/` con los `.vtt` y completar `site.video`.
- **Imagen para redes:** `public/images/og.jpg` (1200 × 630) y ponerla en `site.seo.imagenOg`.
- **Satoshi:** copiar `Satoshi-Variable.woff2` en `public/fonts/` y descomentar el `@font-face` de `globals.css`.
  Mientras tanto se usa Manrope como respaldo.
- **Logo:** reemplazar `src/app/icon.svg` (favicon provisional) y el nombre en texto del Hero y del Pie.
- **Testimonio de propietario:** completar `site.pruebas.propietario` y el bloque aparece solo.

## Formulario

Valida y muestra la confirmación, pero **no envía ni guarda nada** todavía.
Para la etapa de envío real: conectar el destino en `src/lib/envio.ts`, sumar el campo trampa
anti-spam y enlazar el aviso de privacidad. No publicar en el dominio final hasta hacerlo.

## Calidad

Revisado en 320, 390, 768, 1024 y 1440 px, en EN y ES:

- Lighthouse (celular): accesibilidad 100, buenas prácticas 100, rendimiento 95.
  SEO da 66 solo porque el sitio está en `noindex` a propósito.
- axe (WCAG 2.2 AA): 0 violaciones, también con el acordeón abierto, los errores del formulario a la vista y el modal abierto.
- Teclado completo, foco visible, enlace "Saltar al formulario" como primer foco, errores con texto e ícono.

## Pendientes

Ver `PENDIENTES_CLIENTE.md`.
