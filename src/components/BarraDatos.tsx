import { site } from "@/content/site";
import { t, type Idioma } from "@/lib/i18n";
import { Revelar } from "./ui/Revelar";

/** Cuatro señales de control. Datos fijos, sin contadores animados. */
export function BarraDatos({ idioma }: { idioma: Idioma }) {
  return (
    <section id="datos" aria-label={site.datos.map((d) => t(d.etiqueta, idioma)).join(", ")} className="bg-fondo-oscuro text-texto-oscuro">
      <div className="mx-auto max-w-contenedor px-lateral">
        <dl className="grid grid-cols-2 border-y border-linea-oscuro lg:grid-cols-4">
          {site.datos.map((dato, i) => (
            <Revelar
              key={i}
              orden={i}
              className={`flex flex-col-reverse gap-2 py-8 lg:py-10 ${
                i % 2 === 1 ? "border-l border-linea-oscuro pl-5 md:pl-8" : "pr-5 md:pr-8"
              } ${i >= 2 ? "border-t border-linea-oscuro lg:border-t-0" : ""} ${
                i === 2 ? "lg:border-l lg:pl-8" : ""
              }`}
            >
              <dt className="font-etiqueta text-etiqueta uppercase text-secundario-oscuro">
                {t(dato.etiqueta, idioma)}
              </dt>
              <dd className="text-dato">{t(dato.valor, idioma)}</dd>
            </Revelar>
          ))}
        </dl>
      </div>
    </section>
  );
}
