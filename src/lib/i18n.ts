export const idiomas = ["en", "es"] as const;
export type Idioma = (typeof idiomas)[number];
export const idiomaPorDefecto: Idioma = "en";

/** Cookie donde se guarda el idioma elegido con el selector. */
export const cookieIdioma = "ks_idioma";

/** Un texto con su versión en cada idioma. */
export type Texto = Record<Idioma, string>;

export function esIdioma(valor: string | undefined | null): valor is Idioma {
  return !!valor && (idiomas as readonly string[]).includes(valor);
}

/** Devuelve el texto en el idioma pedido. */
export function t(texto: Texto, idioma: Idioma): string {
  return texto[idioma];
}
