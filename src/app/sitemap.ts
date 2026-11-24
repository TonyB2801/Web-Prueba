import type { MetadataRoute } from "next";
import { idiomas } from "@/lib/i18n";
import { urlSitio } from "@/lib/sitio";

export default function sitemap(): MetadataRoute.Sitemap {
  const alternativas = Object.fromEntries(idiomas.map((i) => [i, `${urlSitio}/${i}`]));
  return idiomas.map((idioma) => ({
    url: `${urlSitio}/${idioma}`,
    changeFrequency: "monthly",
    priority: 1,
    alternates: { languages: alternativas },
  }));
}
