import { NextResponse, type NextRequest } from "next/server";
import { cookieIdioma, esIdioma, idiomaPorDefecto, idiomas, type Idioma } from "@/lib/i18n";

/** Elige el idioma: el guardado en la cookie, el del navegador o el inglés. */
function elegirIdioma(request: NextRequest): Idioma {
  const guardado = request.cookies.get(cookieIdioma)?.value;
  if (esIdioma(guardado)) return guardado;

  const navegador = request.headers.get("accept-language") ?? "";
  for (const parte of navegador.split(",")) {
    const codigo = parte.split(";")[0].trim().slice(0, 2).toLowerCase();
    if (esIdioma(codigo)) return codigo;
  }
  return idiomaPorDefecto;
}

export function proxy(request: NextRequest) {
  const { pathname } = request.nextUrl;
  const tieneIdioma = idiomas.some((i) => pathname === `/${i}` || pathname.startsWith(`/${i}/`));
  if (tieneIdioma) return;

  const url = request.nextUrl.clone();
  url.pathname = `/${elegirIdioma(request)}${pathname === "/" ? "" : pathname}`;
  return NextResponse.redirect(url);
}

export const config = {
  // Todo menos los internos de Next y cualquier archivo con extensión
  // (imágenes, fuentes, icon.svg, sitemap.xml, robots.txt…).
  matcher: ["/((?!_next|.*\\..*).*)"],
};
