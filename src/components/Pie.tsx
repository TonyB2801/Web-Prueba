import { site } from "@/content/site";
import { t, type Idioma } from "@/lib/i18n";
import { SelectorIdioma } from "./SelectorIdioma";

export function Pie({ idioma }: { idioma: Idioma }) {
  const { pie } = site;
  return (
    // pb extra en celular para que la barra fija no tape el pie
    <footer className="bg-fondo-oscuro pt-16 pb-28 text-texto-oscuro md:pb-16">
      <div className="mx-auto flex max-w-contenedor flex-col gap-12 border-t border-linea-oscuro px-lateral pt-12">
        <div className="grid gap-10 md:grid-cols-3">
          <div className="flex flex-col gap-3">
            <a href={`/${idioma}`} aria-label={t(site.marca.logoAlt, idioma)} className="flex min-h-toque items-center self-start font-titular text-tarjeta tracking-tight">
              {site.marca.nombre}
            </a>
            <p className="font-acento text-subtitulo text-secundario-oscuro">{t(pie.lema, idioma)}</p>
          </div>
          <div className="flex flex-col gap-3">
            <h2 className="font-etiqueta text-etiqueta uppercase text-acento">{t(pie.zonasTitulo, idioma)}</h2>
            <ul className="flex flex-col gap-1 text-base">
              {site.residencias.zonas.map((z) => (
                <li key={z}>{z}</li>
              ))}
            </ul>
          </div>
          <div className="flex flex-col gap-3">
            <h2 className="font-etiqueta text-etiqueta uppercase text-acento">{t(pie.contactoTitulo, idioma)}</h2>
            <p className="text-base">{t(pie.contacto, idioma)}</p>
          </div>
        </div>

        <div className="flex flex-col gap-4 border-t border-linea-oscuro pt-6 text-pequeno text-secundario-oscuro md:flex-row md:items-center md:justify-between">
          <p>{t(pie.marca, idioma)}</p>
          {pie.privacidadEnlace ? (
            <a href={pie.privacidadEnlace} className="flex min-h-toque items-center underline-offset-4 hover:underline">
              {t(pie.privacidad, idioma)}
            </a>
          ) : (
            <p>
              {t(pie.privacidad, idioma)}: {t(pie.privacidadPendiente, idioma)}
            </p>
          )}
          <SelectorIdioma idioma={idioma} />
        </div>
      </div>
    </footer>
  );
}
