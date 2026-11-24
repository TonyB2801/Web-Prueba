type Props = {
  children: React.ReactNode;
  /** Con href es un enlace (p. ej. "#formulario"); sin href es un botón. */
  href?: string;
  type?: "button" | "submit";
  id?: string;
  className?: string;
};

/** Botón principal: pastilla clara con flecha. Uno solo visible por pantalla. */
export function BotonPrincipal({ children, href, type = "button", id, className = "" }: Props) {
  const clases = `group inline-flex min-h-toque w-full items-center justify-center gap-3 rounded-boton bg-boton px-7 py-4 text-boton text-boton-texto transition-colors duration-rapido ease-salida hover:bg-boton-hover md:w-auto ${className}`;
  const contenido = (
    <>
      <span>{children}</span>
      <span
        aria-hidden="true"
        className="transition-transform duration-rapido ease-salida group-hover:translate-x-1"
      >
        →
      </span>
    </>
  );

  if (href) {
    return (
      <a href={href} id={id} className={clases}>
        {contenido}
      </a>
    );
  }
  return (
    <button type={type} id={id} className={clases}>
      {contenido}
    </button>
  );
}
