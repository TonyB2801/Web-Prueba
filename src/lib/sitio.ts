/** URL pública del sitio (sin barra final). Se define en NEXT_PUBLIC_SITE_URL. */
export const urlSitio = (process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000").replace(/\/$/, "");

/**
 * Solo se permite indexar cuando INDEXAR=true (en el dominio final, con los
 * [COMPLETAR] resueltos y el envío del formulario conectado). Por defecto: noindex.
 */
export const permitirIndexar = process.env.INDEXAR === "true";
