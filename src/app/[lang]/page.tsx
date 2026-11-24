import { notFound } from "next/navigation";
import { BarraDatos } from "@/components/BarraDatos";
import { Cierre } from "@/components/Cierre";
import { ComoFunciona } from "@/components/ComoFunciona";
import { Hero } from "@/components/Hero";
import { Pie } from "@/components/Pie";
import { Preguntas } from "@/components/Preguntas";
import { Pruebas } from "@/components/Pruebas";
import { Residencias } from "@/components/Residencias";
import { Servicios } from "@/components/Servicios";
import { BotonFijoCelular } from "@/components/ui/BotonFijoCelular";
import { site } from "@/content/site";
import { esIdioma, t } from "@/lib/i18n";

export default async function Pagina({ params }: PageProps<"/[lang]">) {
  const { lang } = await params;
  if (!esIdioma(lang)) notFound();

  return (
    <>
      <a
        href="#formulario"
        className="sr-only z-50 rounded-boton bg-boton px-6 py-3 text-boton text-boton-texto focus:not-sr-only focus:fixed focus:top-4 focus:left-4"
      >
        {t(site.accesibilidad.saltarFormulario, lang)}
      </a>
      <main>
        {/* Ritmo de fondos: oscuro (1–3) → claro (4–5) → oscuro (6) → claro (7) → oscuro (8–9) */}
        <Hero idioma={lang} />
        <BarraDatos idioma={lang} />
        <Servicios idioma={lang} />
        <Residencias idioma={lang} />
        <ComoFunciona idioma={lang} />
        <Pruebas idioma={lang} />
        <Preguntas idioma={lang} />
        <Cierre idioma={lang} />
      </main>
      <Pie idioma={lang} />
      <BotonFijoCelular texto={t(site.cta.principal, lang)} />
    </>
  );
}
