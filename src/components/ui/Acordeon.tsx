"use client";

import { useId, useState } from "react";

type Item = { pregunta: string; respuesta: string };

/** Acordeón: una pregunta abierta por vez. "+" pasa a "×". */
export function Acordeon({ items }: { items: Item[] }) {
  const [abierto, setAbierto] = useState<number | null>(null);
  const base = useId();

  return (
    <ul className="border-t border-linea-claro">
      {items.map((item, i) => {
        const estaAbierto = abierto === i;
        const idBoton = `${base}-b${i}`;
        const idPanel = `${base}-p${i}`;
        return (
          <li key={i} className="border-b border-linea-claro">
            <h3>
              <button
                type="button"
                id={idBoton}
                aria-expanded={estaAbierto}
                aria-controls={idPanel}
                onClick={() => setAbierto(estaAbierto ? null : i)}
                className="flex min-h-toque w-full items-center justify-between gap-6 py-6 text-left text-tarjeta"
              >
                <span>{item.pregunta}</span>
                <span
                  aria-hidden="true"
                  className={`shrink-0 font-etiqueta text-subtitulo font-normal text-acento-texto-claro transition-transform duration-[var(--mov-acordeon)] ease-salida ${
                    estaAbierto ? "rotate-45" : ""
                  }`}
                >
                  +
                </span>
              </button>
            </h3>
            <div
              id={idPanel}
              role="region"
              aria-labelledby={idBoton}
              hidden={!estaAbierto}
              className="pb-6 text-base text-secundario-claro"
            >
              <p className="max-w-3xl">{item.respuesta}</p>
            </div>
          </li>
        );
      })}
    </ul>
  );
}
