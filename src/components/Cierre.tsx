import { site } from "@/content/site";
import { t, type Idioma } from "@/lib/i18n";
import { Formulario } from "./Formulario";
import { Revelar } from "./ui/Revelar";

export function Cierre({ idioma }: { idioma: Idioma }) {
  const { cierre } = site;
  const pasos = [cierre.paso1, cierre.paso2, cierre.paso3];

  return (
    <section id="formulario" aria-labelledby="cierre-titulo" className="scroll-mt-6 bg-fondo-oscuro py-seccion text-texto-oscuro">
      <div className="mx-auto grid max-w-contenedor gap-12 px-lateral lg:grid-cols-12 lg:gap-medianil">
        <Revelar className="flex flex-col gap-10 lg:col-span-5">
          <h2 id="cierre-titulo" className="text-h2">
            {t(cierre.titular, idioma)}
          </h2>
          <div className="flex flex-col gap-4">
            <h3 className="font-etiqueta text-etiqueta uppercase text-acento">{t(cierre.pasosTitulo, idioma)}</h3>
            <ol className="flex flex-col">
              {pasos.map((paso, i) => (
                <li key={i} className="flex gap-4 border-t border-linea-oscuro py-4 text-base">
                  <span aria-hidden="true" className="pt-1 font-etiqueta text-etiqueta text-acento">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span>{t(paso, idioma)}</span>
                </li>
              ))}
            </ol>
          </div>
        </Revelar>

        <Revelar orden={1} className="lg:col-span-6 lg:col-start-7">
          <div id="zona-formulario">
            <Formulario idioma={idioma} />
          </div>
        </Revelar>
      </div>
    </section>
  );
}
