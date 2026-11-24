"use client";

import { forwardRef } from "react";

type ComunProps = {
  id: string;
  etiqueta: string;
  ayuda?: string;
  error?: string | null;
  textoObligatorio: string;
};

/** Ícono de error: el error se comunica con texto e ícono, no solo con color. */
export function IconoError() {
  return (
    <svg viewBox="0 0 24 24" className="mt-px size-4 shrink-0" fill="none" stroke="currentColor" strokeWidth={1.8} aria-hidden="true">
      <circle cx="12" cy="12" r="9" />
      <path d="M12 7.5v5.5M12 16.5v.01" strokeLinecap="round" />
    </svg>
  );
}

function Mensajes({ id, ayuda, error }: { id: string; ayuda?: string; error?: string | null }) {
  return (
    <>
      {ayuda && (
        <p id={`${id}-ayuda`} className="mt-2 text-pequeno text-secundario-oscuro">
          {ayuda}
        </p>
      )}
      <p id={`${id}-error`} className="text-pequeno text-error-oscuro empty:hidden">
        {error && (
          <span className="mt-2 flex items-start gap-2">
            <IconoError />
            {error}
          </span>
        )}
      </p>
    </>
  );
}

function describedBy(id: string, ayuda?: string, error?: string | null) {
  return [ayuda && `${id}-ayuda`, error && `${id}-error`].filter(Boolean).join(" ") || undefined;
}

const linea =
  "w-full border-0 border-b bg-transparent text-base text-texto-oscuro outline-none transition-colors duration-rapido focus:border-b-2 focus:border-acento focus-visible:outline-none";

/** Campo de texto: sin caja, línea inferior y etiqueta flotante (un <label> real). */
export const Campo = forwardRef<
  HTMLInputElement,
  ComunProps & React.InputHTMLAttributes<HTMLInputElement>
>(function Campo({ id, etiqueta, ayuda, error, textoObligatorio, ...input }, ref) {
  return (
    <div>
      <div className="relative">
        <input
          ref={ref}
          id={id}
          placeholder=" "
          required
          aria-invalid={error ? true : undefined}
          aria-describedby={describedBy(id, ayuda, error)}
          className={`peer h-campo pt-5 ${linea} ${error ? "border-error-oscuro" : "border-linea-oscuro"}`}
          {...input}
        />
        <label
          htmlFor={id}
          className="pointer-events-none absolute top-1/2 left-0 origin-left -translate-y-1/2 text-base text-secundario-oscuro transition-all duration-rapido peer-focus:top-1 peer-focus:translate-y-0 peer-focus:text-etiqueta peer-focus:text-acento peer-[:not(:placeholder-shown)]:top-1 peer-[:not(:placeholder-shown)]:translate-y-0 peer-[:not(:placeholder-shown)]:text-etiqueta"
        >
          {etiqueta}
          <span className="sr-only"> ({textoObligatorio})</span>
        </label>
      </div>
      <Mensajes id={id} ayuda={ayuda} error={error} />
    </div>
  );
});
