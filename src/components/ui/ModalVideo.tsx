"use client";

import { forwardRef } from "react";

type Props = {
  titulo: string;
  textoCerrar: string;
  idioma: "en" | "es";
  src: string | null;
  subtitulosEn: string | null;
  subtitulosEs: string | null;
  textoPendiente: string;
  abierto: boolean;
  onCerrar: () => void;
};

/**
 * Video "How it works" en un <dialog> nativo: Esc lo cierra y el navegador
 * devuelve el foco al botón que lo abrió. Nunca se reproduce solo, y el
 * <video> solo se monta cuando el modal está abierto (carga diferida).
 */
export const ModalVideo = forwardRef<HTMLDialogElement, Props>(function ModalVideo(
  { titulo, textoCerrar, idioma, src, subtitulosEn, subtitulosEs, textoPendiente, abierto, onCerrar },
  ref,
) {
  return (
    <dialog
      ref={ref}
      aria-label={titulo}
      onClose={onCerrar}
      onClick={(e) => {
        if (e.target === e.currentTarget) e.currentTarget.close();
      }}
      className="m-auto w-[calc(100%-2*var(--margen-lateral))] max-w-contenedor bg-transparent p-0 text-texto-oscuro"
    >
      <div className="flex flex-col gap-4">
        <form method="dialog" className="flex justify-end">
          <button
            className="min-h-toque rounded-boton px-4 text-boton text-texto-oscuro underline-offset-4 hover:underline"
            aria-label={textoCerrar}
          >
            {textoCerrar} ×
          </button>
        </form>
        <div className="aspect-video w-full overflow-hidden rounded-tarjeta bg-tarjeta-oscuro">
          {abierto && src ? (
            <video controls preload="metadata" className="size-full" src={src}>
              {subtitulosEn && (
                <track kind="subtitles" srcLang="en" label="English" src={subtitulosEn} default={idioma === "en"} />
              )}
              {subtitulosEs && (
                <track kind="subtitles" srcLang="es" label="Español" src={subtitulosEs} default={idioma === "es"} />
              )}
            </video>
          ) : (
            <p className="flex size-full items-center justify-center p-tarjeta text-center font-etiqueta text-pequeno text-secundario-oscuro">
              {textoPendiente}
            </p>
          )}
        </div>
      </div>
    </dialog>
  );
});
