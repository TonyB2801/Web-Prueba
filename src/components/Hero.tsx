import Image from "next/image";
import { site } from "@/content/site";
import { t, type Idioma } from "@/lib/i18n";
import { AccionSecundaria } from "./ui/AccionSecundaria";
import { BotonPrincipal } from "./ui/BotonPrincipal";
import { Revelar } from "./ui/Revelar";
import { SelectorIdioma } from "./SelectorIdioma";

export function Hero({ idioma }: { idioma: Idioma }) {
  const { hero } = site;

  return (
    <section
      id="inicio"
      aria-labelledby="hero-titulo"
      className="relative isolate flex min-h-svh flex-col bg-fondo-oscuro text-texto-oscuro"
    >
      {/* Fondo: foto de Miami con velo oscuro. Mientras no llegue, un degradado. */}
      <div aria-hidden={hero.imagen.src ? undefined : true} className="absolute inset-0 -z-10">
        {hero.imagen.src ? (
          <Image
            src={hero.imagen.src}
            alt={t(hero.imagen.alt, idioma)}
            fill
            priority
            sizes="100vw"
            className="object-cover"
          />
        ) : (
          <div className="size-full bg-[radial-gradient(ellipse_at_70%_20%,var(--color-tarjeta-oscuro),var(--color-fondo-oscuro)_70%)]" />
        )}
        <div className="absolute inset-0 bg-linear-to-b from-[var(--color-velo-hero-arriba)] to-[var(--color-velo-hero-abajo)]" />
      </div>

      <header className="mx-auto flex w-full max-w-contenedor items-center justify-between px-lateral pt-2">
        <a
          href={`/${idioma}`}
          aria-label={t(site.marca.logoAlt, idioma)}
          className="flex min-h-toque items-center font-titular text-tarjeta tracking-tight"
        >
          {site.marca.nombre}
        </a>
        <SelectorIdioma idioma={idioma} />
      </header>

      <div className="mx-auto flex w-full max-w-contenedor flex-1 flex-col justify-end px-lateral pt-16 pb-16 lg:justify-center lg:pb-24">
        <div className="flex flex-col gap-6 lg:gap-8">
          <Revelar orden={0}>
            <p className="font-etiqueta text-etiqueta uppercase text-acento">{t(hero.zonas, idioma)}</p>
          </Revelar>

          <Revelar orden={1}>
            <h1 id="hero-titulo" className="text-hero">
              <span className="block">{t(hero.titular1, idioma)}</span>
              <span className="block font-acento font-normal tracking-normal">
                {t(hero.titular2, idioma)}
              </span>
            </h1>
          </Revelar>

          <Revelar orden={2}>
            <p className="max-w-2xl text-subtitulo text-secundario-oscuro">{t(hero.subtitulo, idioma)}</p>
          </Revelar>

          <Revelar orden={3} className="flex flex-col gap-4 pt-2 md:flex-row md:items-center md:gap-8">
            <BotonPrincipal href="#formulario" id="cta-hero">
              {t(site.cta.principal, idioma)}
            </BotonPrincipal>
            <AccionSecundaria
              idioma={idioma}
              texto={t(hero.secundaria, idioma)}
              duracion={t(hero.duracionVideo, idioma)}
            />
          </Revelar>

          <Revelar orden={4}>
            <p className="text-pequeno text-secundario-oscuro">{t(site.cta.apoyo, idioma)}</p>
          </Revelar>
        </div>

        {!hero.imagen.src && (
          <p className="mt-10 font-etiqueta text-etiqueta text-secundario-oscuro">
            {t(hero.imagenPendiente, idioma)}
          </p>
        )}
      </div>
    </section>
  );
}
