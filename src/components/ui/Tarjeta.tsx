import type { NombreIcono } from "@/content/site";
import type { Tono } from "./EtiquetaSeccion";
import { Icono } from "./Icono";

/** Tarjeta plana: sin borde ni sombra, separada por contraste de fondo. */
export function Tarjeta({
  tono = "oscuro",
  icono,
  titulo,
  children,
}: {
  tono?: Tono;
  icono?: NombreIcono;
  titulo: string;
  children?: React.ReactNode;
}) {
  const fondo =
    tono === "oscuro" ? "bg-tarjeta-oscuro text-texto-oscuro" : "bg-tarjeta-claro text-texto-claro";
  const secundario = tono === "oscuro" ? "text-secundario-oscuro" : "text-secundario-claro";
  const acento = tono === "oscuro" ? "text-acento" : "text-acento-texto-claro";

  return (
    <article className={`flex h-full flex-col gap-4 rounded-tarjeta p-tarjeta ${fondo}`}>
      {icono && <Icono nombre={icono} className={`size-6 ${acento}`} />}
      <h3 className="text-tarjeta">{titulo}</h3>
      {children && <div className={`text-base ${secundario}`}>{children}</div>}
    </article>
  );
}
