"use client";

import { useRef, useState } from "react";
import { site } from "@/content/site";
import { t, type Idioma } from "@/lib/i18n";
import type { Tono } from "./EtiquetaSeccion";
import { ModalVideo } from "./ModalVideo";

/** Enlace con ícono de reproducción que abre el video "How it works". */
export function AccionSecundaria({
  texto,
  duracion,
  idioma,
  tono = "oscuro",
}: {
  texto: string;
  duracion?: string;
  idioma: Idioma;
  tono?: Tono;
}) {
  const dialogo = useRef<HTMLDialogElement>(null);
  const [abierto, setAbierto] = useState(false);
  const color = tono === "oscuro" ? "text-texto-oscuro" : "text-texto-claro";
  const secundario = tono === "oscuro" ? "text-secundario-oscuro" : "text-secundario-claro";

  return (
    <>
      <button
        type="button"
        aria-haspopup="dialog"
        onClick={() => {
          setAbierto(true);
          dialogo.current?.showModal();
        }}
        className={`group inline-flex min-h-toque items-center gap-3 text-boton ${color}`}
      >
        <span
          aria-hidden="true"
          className="flex size-10 items-center justify-center rounded-boton border border-current"
        >
          <svg viewBox="0 0 24 24" className="size-4 translate-x-px" fill="currentColor">
            <path d="M8 5.5v13l10.5-6.5L8 5.5Z" />
          </svg>
        </span>
        <span className="underline-offset-4 group-hover:underline">{texto}</span>
        {duracion && <span className={`font-etiqueta text-pequeno ${secundario}`}>{duracion}</span>}
      </button>
      <ModalVideo
        ref={dialogo}
        idioma={idioma}
        abierto={abierto}
        onCerrar={() => setAbierto(false)}
        titulo={t(site.video.titulo, idioma)}
        textoCerrar={t(site.accesibilidad.cerrar, idioma)}
        src={site.video.src}
        subtitulosEn={site.video.subtitulosEn}
        subtitulosEs={site.video.subtitulosEs}
        textoPendiente={t(site.video.pendiente, idioma)}
      />
    </>
  );
}
