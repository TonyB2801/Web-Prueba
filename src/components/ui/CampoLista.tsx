"use client";

import { forwardRef } from "react";
import { IconoError } from "./Campo";

type Opcion = { valor: string; texto: string };

/** Lista nativa (<select>) con el mismo estilo que Campo. La etiqueta queda arriba. */
export const CampoLista = forwardRef<
  HTMLSelectElement,
  {
    id: string;
    etiqueta: string;
    textoVacio: string;
    opciones: Opcion[];
    error?: string | null;
    textoObligatorio: string;
  } & React.SelectHTMLAttributes<HTMLSelectElement>
>(function CampoLista({ id, etiqueta, textoVacio, opciones, error, textoObligatorio, ...select }, ref) {
  return (
    <div>
      <div className="relative">
        <label htmlFor={id} className="pointer-events-none absolute top-1 left-0 text-etiqueta text-secundario-oscuro">
          {etiqueta}
          <span className="sr-only"> ({textoObligatorio})</span>
        </label>
        <select
          ref={ref}
          id={id}
          required
          aria-invalid={error ? true : undefined}
          aria-describedby={error ? `${id}-error` : undefined}
          className={`h-campo w-full appearance-none border-0 border-b bg-transparent pt-5 pr-8 text-base text-texto-oscuro outline-none transition-colors duration-rapido focus:border-b-2 focus:border-acento focus-visible:outline-none ${
            error ? "border-error-oscuro" : "border-linea-oscuro"
          }`}
          {...select}
        >
          <option value="" className="bg-fondo-oscuro">
            {textoVacio}
          </option>
          {opciones.map((o) => (
            <option key={o.valor} value={o.valor} className="bg-fondo-oscuro">
              {o.texto}
            </option>
          ))}
        </select>
        <svg viewBox="0 0 24 24" aria-hidden="true" className="pointer-events-none absolute right-0 bottom-4 size-4 text-secundario-oscuro" fill="none" stroke="currentColor" strokeWidth={1.8}>
          <path d="m6 9 6 6 6-6" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </div>
      <p id={`${id}-error`} className="text-pequeno text-error-oscuro empty:hidden">
        {error && (
          <span className="mt-2 flex items-start gap-2">
            <IconoError />
            {error}
          </span>
        )}
      </p>
    </div>
  );
});
