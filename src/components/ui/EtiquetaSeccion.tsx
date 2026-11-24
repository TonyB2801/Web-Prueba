export type Tono = "oscuro" | "claro";

/** Etiqueta monoespaciada en mayúsculas con una línea de 24px delante. */
export function EtiquetaSeccion({ texto, tono = "oscuro" }: { texto: string; tono?: Tono }) {
  const color = tono === "oscuro" ? "text-acento" : "text-acento-texto-claro";
  return (
    <p className={`flex items-center gap-3 font-etiqueta text-etiqueta uppercase ${color}`}>
      <span aria-hidden="true" className="h-px w-6 bg-current" />
      {texto}
    </p>
  );
}
