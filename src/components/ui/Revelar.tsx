"use client";

import { useEffect, useRef } from "react";

/**
 * Entrada suave (opacidad + 20px) al aparecer en pantalla, una sola vez.
 * El estilo vive en globals.css (.revelar) y se anula con prefers-reduced-motion.
 * `orden` escalona la entrada en múltiplos de --mov-escalonado.
 */
export function Revelar({
  children,
  orden = 0,
  className = "",
  as: Etiqueta = "div",
}: {
  children: React.ReactNode;
  orden?: number;
  className?: string;
  as?: "div" | "li";
}) {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observador = new IntersectionObserver(
      ([entrada]) => {
        if (entrada.isIntersecting) {
          el.dataset.visible = "true";
          observador.disconnect();
        }
      },
      { rootMargin: "0px 0px -10% 0px" },
    );
    observador.observe(el);
    return () => observador.disconnect();
  }, []);

  return (
    <Etiqueta
      ref={ref as React.Ref<never>}
      className={`revelar ${className}`}
      style={{ "--orden": orden } as React.CSSProperties}
    >
      {children}
    </Etiqueta>
  );
}
