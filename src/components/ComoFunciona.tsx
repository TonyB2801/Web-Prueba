import { site } from "@/content/site";
import { t, type Idioma } from "@/lib/i18n";
import { AccionSecundaria } from "./ui/AccionSecundaria";
import { EtiquetaSeccion } from "./ui/EtiquetaSeccion";
import { Revelar } from "./ui/Revelar";

const dosCifras = (n: number) => String(n).padStart(2, "0");
const rellenar = (plantilla: string, n: number, total: number, formato = dosCifras) =>
  plantilla.replace("{n}", formato(n)).replace("{total}", formato(total));

/** Separa "Título: descripción" para destacar el título del paso. */
function partirPaso(texto: string) {
  const i = texto.indexOf(":");
  return i === -1 ? { titulo: texto, detalle: "" } : { titulo: texto.slice(0, i), detalle: texto.slice(i + 1).trim() };
}

export function ComoFunciona({ idioma }: { idioma: Idioma }) {
  const { proceso } = site;
  const total = proceso.pasos.length;

  return (
    <section id="como-funciona" aria-labelledby="como-funciona-titulo" className="tono-claro bg-fondo-claro pb-seccion text-texto-claro">
      <div className="mx-auto flex max-w-contenedor flex-col gap-12 border-t border-linea-claro px-lateral pt-seccion lg:gap-16">
        <Revelar className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div className="flex max-w-3xl flex-col gap-5">
            <EtiquetaSeccion texto={t(proceso.etiqueta, idioma)} tono="claro" />
            <h2 id="como-funciona-titulo" className="text-h2">
              {t(proceso.titular, idioma)}{" "}
              <span className="font-acento font-normal tracking-normal">{t(proceso.acento, idioma)}</span>
            </h2>
          </div>
          <AccionSecundaria idioma={idioma} tono="claro" texto={t(proceso.video, idioma)} duracion={t(site.hero.duracionVideo, idioma)} />
        </Revelar>

        <ol className="grid gap-x-medianil md:grid-cols-2 lg:grid-cols-3">
          {proceso.pasos.map((paso, i) => {
            const { titulo, detalle } = partirPaso(t(paso, idioma));
            return (
              <Revelar
                as="li"
                key={i}
                orden={i}
                className="flex flex-col gap-3 border-t border-linea-claro py-8 lg:pb-12"
              >
                <span className="font-etiqueta text-etiqueta text-acento-texto-claro">
                  <span aria-hidden="true">{rellenar(t(proceso.contador, idioma), i + 1, total)}</span>
                  <span className="sr-only">{rellenar(t(proceso.pasoAria, idioma), i + 1, total, String)}</span>
                </span>
                <h3 className="text-tarjeta">{titulo}</h3>
                {detalle && <p className="text-base text-secundario-claro">{detalle}</p>}
              </Revelar>
            );
          })}
        </ol>
      </div>
    </section>
  );
}
