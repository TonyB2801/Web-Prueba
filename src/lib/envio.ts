import type { Campos } from "./validacion";

/**
 * Punto de conexión del envío. EN ESTA ETAPA NO ENVÍA NI GUARDA NADA.
 * Para la etapa de envío real: conectar aquí el destino [COMPLETAR: correo, CRM u otro],
 * sumar el campo trampa anti-spam y lanzar un error si falla
 * (el formulario mostrará form.errorEnvio).
 */
export async function enviarSolicitud(datos: Campos): Promise<void> {
  void datos;
}
