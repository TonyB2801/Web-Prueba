"use client";

import { useEffect, useState } from "react";
import { BotonPrincipal } from "./BotonPrincipal";

/**
 * Barra inferior solo en celular. Aparece cuando el botón del hero sale de
 * pantalla y se oculta mientras se ve el formulario: nunca hay dos botones
 * principales visibles a la vez.
 */
export function BotonFijoCelular({ texto }: { texto: string }) {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const heroCta = document.getElementById("cta-hero");
    const formulario = document.getElementById("zona-formulario");
    if (!heroCta || !formulario) return;

    const estado = { hero: true, formulario: false, pasoElHero: false };
    const observador = new IntersectionObserver((entradas) => {
      for (const e of entradas) {
        if (e.target === heroCta) {
          estado.hero = e.isIntersecting;
          estado.pasoElHero = !e.isIntersecting && e.boundingClientRect.top < 0;
        } else {
          estado.formulario = e.isIntersecting;
        }
      }
      setVisible(estado.pasoElHero && !estado.hero && !estado.formulario);
    });
    observador.observe(heroCta);
    observador.observe(formulario);
    return () => observador.disconnect();
  }, []);

  return (
    <div
      inert={!visible}
      aria-hidden={!visible}
      className={`fixed inset-x-0 bottom-0 z-40 border-t border-linea-oscuro bg-fondo-oscuro px-lateral pt-3 pb-[max(var(--espacio-base),env(safe-area-inset-bottom))] transition-transform duration-rapido ease-salida md:hidden ${
        visible ? "translate-y-0" : "translate-y-full"
      }`}
    >
      <BotonPrincipal href="#formulario">{texto}</BotonPrincipal>
    </div>
  );
}
