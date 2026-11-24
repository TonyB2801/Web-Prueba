import { site } from "@/content/site";
import { t, type Idioma } from "@/lib/i18n";
import { EtiquetaSeccion } from "./ui/EtiquetaSeccion";
import { Revelar } from "./ui/Revelar";
import { Tarjeta } from "./ui/Tarjeta";

export function Servicios({ idioma }: { idioma: Idioma }) {
  const { servicios } = site;

  return (
    <section
      id="servicios"
      aria-labelledby="servicios-titulo"
      className="bg-fondo-oscuro py-seccion text-texto-oscuro"
    >
      <div className="mx-auto flex max-w-contenedor flex-col gap-10 px-lateral lg:gap-16">
        <Revelar className="flex max-w-3xl flex-col gap-5">
          <EtiquetaSeccion texto={t(servicios.etiqueta, idioma)} />
          <h2 id="servicios-titulo" className="text-h2">
            {t(servicios.titular, idioma)}{" "}
            <span className="font-acento font-normal tracking-normal">{t(servicios.acento, idioma)}</span>
          </h2>
        </Revelar>

        <ul className="grid gap-medianil md:grid-cols-2 lg:grid-cols-3">
          {servicios.items.map((item, i) => (
            <Revelar as="li" key={i} orden={i}>
              <Tarjeta icono={item.icono} titulo={t(item.titulo, idioma)}>
                <p>{t(item.descripcion, idioma)}</p>
              </Tarjeta>
            </Revelar>
          ))}
        </ul>

        <p className="font-etiqueta text-etiqueta text-secundario-oscuro">{t(servicios.fotoEquipo, idioma)}</p>
      </div>
    </section>
  );
}
