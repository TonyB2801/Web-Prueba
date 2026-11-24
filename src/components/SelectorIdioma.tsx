"use client";

import { site } from "@/content/site";
import { cookieIdioma, idiomas, t, type Idioma } from "@/lib/i18n";

/** id de la sección más cercana al borde superior, para no perder la posición. */
function seccionVisible(): string | null {
  const secciones = Array.from(document.querySelectorAll<HTMLElement>("main section[id]"));
  let actual: string | null = null;
  for (const s of secciones) {
    if (s.getBoundingClientRect().top <= window.innerHeight * 0.3) actual = s.id;
  }
  return actual;
}

/** "EN · ES": enlaces a /en y /es. Guarda el idioma y mantiene la sección actual. */
export function SelectorIdioma({ idioma }: { idioma: Idioma }) {
  const nombres: Record<Idioma, string> = {
    en: t(site.idioma.nombreEn, idioma),
    es: t(site.idioma.nombreEs, idioma),
  };

  return (
    <nav aria-label={t(site.idioma.aria, idioma)}>
      <ul className="flex items-center font-etiqueta text-etiqueta">
        {idiomas.map((codigo, i) => {
          const activo = codigo === idioma;
          return (
            <li key={codigo} className="flex items-center">
              {i > 0 && (
                <span aria-hidden="true" className="text-secundario-oscuro">
                  ·
                </span>
              )}
              <a
                href={`/${codigo}`}
                hrefLang={codigo}
                lang={codigo}
                aria-current={activo ? "true" : undefined}
                onClick={(e) => {
                  document.cookie = `${cookieIdioma}=${codigo}; path=/; max-age=31536000; samesite=lax`;
                  const id = seccionVisible();
                  if (id) e.currentTarget.href = `/${codigo}#${id}`;
                }}
                className={`flex min-h-toque min-w-toque items-center justify-center text-texto-oscuro transition-opacity duration-rapido ${
                  activo ? "" : "opacity-50 hover:opacity-100"
                }`}
              >
                {t(site.idioma[codigo], idioma)}
                <span className="sr-only"> {nombres[codigo]}</span>
              </a>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
