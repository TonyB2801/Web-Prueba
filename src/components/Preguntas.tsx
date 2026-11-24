import { site } from "@/content/site";
import { t, type Idioma } from "@/lib/i18n";
import { Acordeon } from "./ui/Acordeon";
import { EtiquetaSeccion } from "./ui/EtiquetaSeccion";
import { Revelar } from "./ui/Revelar";

export function Preguntas({ idioma }: { idioma: Idioma }) {
  const { faq } = site;
  return (
    <section id="preguntas" aria-labelledby="preguntas-titulo" className="tono-claro bg-fondo-claro py-seccion text-texto-claro">
      <div className="mx-auto grid max-w-contenedor gap-10 px-lateral xl:grid-cols-12 xl:gap-medianil">
        <Revelar className="flex flex-col gap-5 xl:col-span-4">
          <EtiquetaSeccion texto={t(faq.etiqueta, idioma)} tono="claro" />
          <h2 id="preguntas-titulo" className="text-h2">
            {t(faq.titular, idioma)}
          </h2>
        </Revelar>
        <Revelar orden={1} className="xl:col-span-8">
          <Acordeon
            items={faq.items.map((item) => ({
              pregunta: t(item.pregunta, idioma),
              respuesta: t(item.respuesta, idioma),
            }))}
          />
        </Revelar>
      </div>
    </section>
  );
}
