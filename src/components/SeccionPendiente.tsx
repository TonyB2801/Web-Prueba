import type { Tono } from "./ui/EtiquetaSeccion";
import { EtiquetaSeccion } from "./ui/EtiquetaSeccion";

/** Marcador temporal para las secciones de las tareas 10 a 18. Se elimina al construirlas. */
export function SeccionPendiente({
  id,
  etiqueta,
  titulo,
  aviso,
  tono,
}: {
  id: string;
  etiqueta: string;
  titulo: string;
  aviso: string;
  tono: Tono;
}) {
  const clases =
    tono === "oscuro"
      ? "bg-fondo-oscuro text-texto-oscuro"
      : "tono-claro bg-fondo-claro text-texto-claro";
  const secundario = tono === "oscuro" ? "text-secundario-oscuro" : "text-secundario-claro";
  return (
    <section id={id} aria-labelledby={`${id}-titulo`} className={`py-seccion ${clases}`}>
      <div className="mx-auto flex max-w-contenedor flex-col gap-5 px-lateral">
        <EtiquetaSeccion texto={etiqueta} tono={tono} />
        <h2 id={`${id}-titulo`} className="max-w-3xl text-h2">
          {titulo}
        </h2>
        <p className={`font-etiqueta text-etiqueta ${secundario}`}>{aviso}</p>
      </div>
    </section>
  );
}
