import { site } from "@/content/site";
import { t, type Idioma } from "@/lib/i18n";
import { EtiquetaSeccion } from "./ui/EtiquetaSeccion";
import { Revelar } from "./ui/Revelar";

/** Reseñas de huéspedes, cada una rotulada. El testimonio de propietario solo aparece si existe. */
export function Pruebas({ idioma }: { idioma: Idioma }) {
  const { pruebas } = site;
  const propietario = pruebas.propietario;

  return (
    <section id="pruebas" aria-labelledby="pruebas-titulo" className="bg-fondo-oscuro py-seccion text-texto-oscuro">
      <div className="mx-auto flex max-w-contenedor flex-col gap-10 px-lateral lg:gap-16">
        <Revelar className="flex max-w-3xl flex-col gap-5">
          <EtiquetaSeccion texto={t(pruebas.etiqueta, idioma)} />
          <h2 id="pruebas-titulo" className="text-h2">
            {t(pruebas.titular, idioma)}
          </h2>
        </Revelar>

        {propietario && (
          <Revelar>
            <figure className="flex flex-col gap-6 border-y border-linea-oscuro py-10">
              <p className="font-etiqueta text-etiqueta uppercase text-acento">{t(pruebas.rotuloPropietario, idioma)}</p>
              <blockquote className="font-acento text-h2 font-normal tracking-normal">{t(propietario.texto, idioma)}</blockquote>
              <figcaption className="text-pequeno text-secundario-oscuro">{propietario.nombre}</figcaption>
            </figure>
          </Revelar>
        )}

        <ul className="grid gap-medianil lg:grid-cols-3">
          {pruebas.resenas.map((resena, i) => (
            <Revelar as="li" key={i} orden={i}>
              <figure className="flex h-full flex-col gap-6 rounded-tarjeta bg-tarjeta-oscuro p-tarjeta">
                <p className="font-etiqueta text-etiqueta uppercase text-acento">{t(pruebas.rotulo, idioma)}</p>
                <blockquote className="flex-1 text-subtitulo">{t(resena.texto, idioma)}</blockquote>
                <figcaption className="text-pequeno text-secundario-oscuro">{resena.nombre}</figcaption>
              </figure>
            </Revelar>
          ))}
        </ul>
      </div>
    </section>
  );
}
