import { notFound } from "next/navigation";
import { BarraDatos } from "@/components/BarraDatos";
import { Hero } from "@/components/Hero";
import { SeccionPendiente } from "@/components/SeccionPendiente";
import { Servicios } from "@/components/Servicios";
import { site } from "@/content/site";
import { esIdioma, t } from "@/lib/i18n";

export default async function Pagina({ params }: PageProps<"/[lang]">) {
  const { lang } = await params;
  if (!esIdioma(lang)) notFound();
  const aviso = t(site.accesibilidad.pendiente, lang);

  return (
    <>
      <a
        href="#formulario"
        className="sr-only z-50 rounded-boton bg-boton px-6 py-3 text-boton text-boton-texto focus:not-sr-only focus:fixed focus:top-4 focus:left-4"
      >
        {t(site.accesibilidad.saltarFormulario, lang)}
      </a>
      <main>
        {/* 1–3 · oscuro */}
        <Hero idioma={lang} />
        <BarraDatos idioma={lang} />
        <Servicios idioma={lang} />

        {/* 4–9 · marcadores temporales (tareas 10 a 18) */}
        <SeccionPendiente id="residencias" tono="claro" etiqueta={t(site.residencias.etiqueta, lang)} titulo={t(site.residencias.titular, lang)} aviso={aviso} />
        <SeccionPendiente id="como-funciona" tono="claro" etiqueta={t(site.proceso.etiqueta, lang)} titulo={t(site.proceso.titular, lang)} aviso={aviso} />
        <SeccionPendiente id="pruebas" tono="oscuro" etiqueta={t(site.pruebas.etiqueta, lang)} titulo={t(site.pruebas.titular, lang)} aviso={aviso} />
        <SeccionPendiente id="preguntas" tono="claro" etiqueta={t(site.faq.etiqueta, lang)} titulo={t(site.faq.titular, lang)} aviso={aviso} />
        <SeccionPendiente id="formulario" tono="oscuro" etiqueta={t(site.cta.principal, lang)} titulo={t(site.cierre.titular, lang)} aviso={aviso} />
      </main>
    </>
  );
}
