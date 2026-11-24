import { site } from "@/content/site";
import { t, type Idioma } from "@/lib/i18n";
import { EtiquetaSeccion } from "./ui/EtiquetaSeccion";
import { Revelar } from "./ui/Revelar";

/**
 * Zonas y edificios. Mientras el cliente no confirme en qué zona queda cada
 * edificio, los edificios se listan sin agrupar (no se asigna zona por deducción).
 */
export function Residencias({ idioma }: { idioma: Idioma }) {
  const { residencias } = site;
  return (
    <section id="residencias" aria-labelledby="residencias-titulo" className="tono-claro bg-fondo-claro py-seccion text-texto-claro">
      <div className="mx-auto flex max-w-contenedor flex-col gap-12 px-lateral lg:gap-16">
        <Revelar className="flex max-w-3xl flex-col gap-5">
          <EtiquetaSeccion texto={t(residencias.etiqueta, idioma)} tono="claro" />
          <h2 id="residencias-titulo" className="text-h2">
            {t(residencias.titular, idioma)}
          </h2>
        </Revelar>

        <div className="flex flex-col gap-4">
          <h3 className="font-etiqueta text-etiqueta uppercase text-secundario-claro">
            {t(residencias.zonasTitulo, idioma)}
          </h3>
          <ul className="grid border-t border-linea-claro lg:grid-cols-3">
            {residencias.zonas.map((zona, i) => (
              <Revelar
                as="li"
                key={zona}
                orden={i}
                className={`border-b border-linea-claro py-6 text-tarjeta lg:border-b-0 lg:py-8 ${i > 0 ? "lg:border-l lg:pl-8" : ""}`}
              >
                {zona}
              </Revelar>
            ))}
          </ul>
        </div>

        <div className="flex flex-col gap-4">
          <h3 className="font-etiqueta text-etiqueta uppercase text-secundario-claro">
            {t(residencias.edificiosTitulo, idioma)}
          </h3>
          <ul className="grid gap-x-medianil md:grid-cols-2 lg:grid-cols-3">
            {residencias.edificios.map((edificio, i) => (
              <Revelar
                as="li"
                key={edificio}
                orden={i}
                className="flex items-baseline gap-4 border-b border-linea-claro py-5 text-subtitulo"
              >
                <span aria-hidden="true" className="font-etiqueta text-etiqueta text-acento-texto-claro">
                  {String(i + 1).padStart(2, "0")}
                </span>
                {edificio}
              </Revelar>
            ))}
          </ul>
          <p className="font-etiqueta text-etiqueta text-secundario-claro">{t(residencias.zonaDeEdificio, idioma)}</p>
        </div>
      </div>
    </section>
  );
}
