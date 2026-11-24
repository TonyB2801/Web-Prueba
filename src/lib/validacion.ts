/**
 * Reglas del formulario (ficha técnica, sección 8).
 * Devuelven la CLAVE del error en site.form, o null si el valor es válido.
 */
import { edificios } from "@/content/site";

export const OTRO_EDIFICIO = "otro";

export type Campos = { nombre: string; correo: string; telefono: string; edificio: string };
export type NombreCampo = keyof Campos;
export type ClaveError =
  | "errorVacio"
  | "errorNombre"
  | "errorCorreo"
  | "errorTelefono"
  | "errorEdificio";

const correoValido = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
const telefonoPermitido = /^\+?[\d\s\-()]+$/;

export function validarCampo(campo: NombreCampo, valorCrudo: string): ClaveError | null {
  const valor = valorCrudo.trim();

  switch (campo) {
    case "nombre":
      if (!valor) return "errorVacio";
      return valor.length < 2 ? "errorNombre" : null;

    case "correo":
      if (!valor) return "errorVacio";
      return correoValido.test(valor) ? null : "errorCorreo";

    case "telefono": {
      if (!valor) return "errorVacio";
      const digitos = valor.replace(/\D/g, "").length;
      const formaValida = telefonoPermitido.test(valor) && valor.indexOf("+") <= 0;
      return formaValida && digitos >= 7 && digitos <= 15 ? null : "errorTelefono";
    }

    case "edificio": {
      const opciones: string[] = [...edificios, OTRO_EDIFICIO];
      return opciones.includes(valor) ? null : "errorEdificio";
    }
  }
}

export const ordenCampos: NombreCampo[] = ["nombre", "correo", "telefono", "edificio"];

export function validarTodo(campos: Campos): Partial<Record<NombreCampo, ClaveError>> {
  const errores: Partial<Record<NombreCampo, ClaveError>> = {};
  for (const campo of ordenCampos) {
    const error = validarCampo(campo, campos[campo]);
    if (error) errores[campo] = error;
  }
  return errores;
}
