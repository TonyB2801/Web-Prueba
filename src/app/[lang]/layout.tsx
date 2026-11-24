import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { IBM_Plex_Mono, Instrument_Serif, Manrope } from "next/font/google";
import { site } from "@/content/site";
import { esIdioma, idiomaPorDefecto, idiomas, t } from "@/lib/i18n";
import { permitirIndexar, urlSitio } from "@/lib/sitio";
import "../globals.css";

// Respaldo de Satoshi mientras se confirma su licencia (sans geométrica libre).
const respaldoSans = Manrope({
  subsets: ["latin"],
  variable: "--font-respaldo-sans",
  display: "swap",
});

// (propuesta) Serif cursiva de acento.
const instrumentSerif = Instrument_Serif({
  subsets: ["latin"],
  weight: "400",
  style: "italic",
  variable: "--font-instrument-serif",
  display: "swap",
});

// (propuesta) Monoespaciada para etiquetas.
const plexMono = IBM_Plex_Mono({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-plex-mono",
  display: "swap",
});

export function generateStaticParams() {
  return idiomas.map((lang) => ({ lang }));
}

export async function generateMetadata({
  params,
}: LayoutProps<"/[lang]">): Promise<Metadata> {
  const { lang } = await params;
  if (!esIdioma(lang)) return {};
  const titulo = t(site.seo.titulo, lang);
  const descripcion = t(site.seo.descripcion, lang);
  const otro = idiomas.find((i) => i !== lang)!;

  return {
    metadataBase: new URL(urlSitio),
    title: titulo,
    description: descripcion,
    alternates: {
      canonical: `/${lang}`,
      languages: { en: "/en", es: "/es", "x-default": `/${idiomaPorDefecto}` },
    },
    openGraph: {
      type: "website",
      siteName: site.marca.nombre,
      title: titulo,
      description: descripcion,
      url: `/${lang}`,
      locale: t(site.seo.localeOg, lang),
      alternateLocale: t(site.seo.localeOg, otro),
      ...(site.seo.imagenOg && {
        images: [{ url: site.seo.imagenOg, width: 1200, height: 630, alt: t(site.hero.imagen.alt, lang) }],
      }),
    },
    robots: permitirIndexar ? { index: true, follow: true } : { index: false, follow: false },
  };
}

export default async function LangLayout({ children, params }: LayoutProps<"/[lang]">) {
  const { lang } = await params;
  if (!esIdioma(lang)) notFound();

  return (
    <html
      lang={lang}
      className={`${respaldoSans.variable} ${instrumentSerif.variable} ${plexMono.variable}`}
      suppressHydrationWarning
    >
      <head>
        {/* Activa las animaciones de entrada solo si hay JavaScript */}
        <script
          dangerouslySetInnerHTML={{ __html: "document.documentElement.classList.add('js')" }}
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
