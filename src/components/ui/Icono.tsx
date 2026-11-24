import type { NombreIcono } from "@/content/site";

/**
 * Íconos de línea propios (estilo Lucide/Phosphor Light, sin librería).
 * Toman el color del texto (currentColor) y el tamaño de la clase.
 */
const trazos: Record<NombreIcono, React.ReactNode> = {
  limpieza: (
    <>
      <path d="M12 3v7" />
      <path d="M8 10h8l1 4H7l1-4Z" />
      <path d="M7 14l-1 7h12l-1-7" />
      <path d="M10 18v3M14 18v3" />
    </>
  ),
  mantenimiento: (
    <path d="M14.7 6.3a4 4 0 0 0-5.4 5.4L3.5 17.5a1.4 1.4 0 0 0 2 2l5.8-5.8a4 4 0 0 0 5.4-5.4l-2.5 2.5-2-.5-.5-2 2.5-2.5Z" />
  ),
  inspeccion: (
    <>
      <circle cx="11" cy="11" r="6.5" />
      <path d="m20 20-4.2-4.2" />
      <path d="m8.5 11 1.8 1.8L13.8 9.3" />
    </>
  ),
  anuncios: (
    <>
      <rect x="3.5" y="4.5" width="17" height="15" rx="2" />
      <path d="M3.5 9h17" />
      <path d="M8 14.5l2.5-2.5 2 2 3.5-3.5" />
    </>
  ),
  soporte: (
    <>
      <path d="M4.5 13v-1a7.5 7.5 0 0 1 15 0v1" />
      <rect x="3.5" y="13" width="4" height="6" rx="1.5" />
      <rect x="16.5" y="13" width="4" height="6" rx="1.5" />
      <path d="M18.5 19a3 3 0 0 1-3 2.5H13" />
    </>
  ),
  reporte: (
    <>
      <path d="M6.5 3.5h8l4 4v13h-12z" />
      <path d="M14.5 3.5v4h4" />
      <path d="M9.5 17v-3M12.5 17v-5M15.5 17v-2" />
    </>
  ),
};

export function Icono({ nombre, className }: { nombre: NombreIcono; className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      focusable="false"
      className={className}
    >
      {trazos[nombre]}
    </svg>
  );
}
