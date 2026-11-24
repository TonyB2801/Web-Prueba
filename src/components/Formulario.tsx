"use client";

import { useRef, useState } from "react";
import { edificios, site } from "@/content/site";
import { enviarSolicitud } from "@/lib/envio";
import { t, type Idioma } from "@/lib/i18n";
import {
  OTRO_EDIFICIO,
  ordenCampos,
  validarCampo,
  validarTodo,
  type Campos,
  type ClaveError,
  type NombreCampo,
} from "@/lib/validacion";
import { BotonPrincipal } from "./ui/BotonPrincipal";
import { Campo } from "./ui/Campo";
import { CampoLista } from "./ui/CampoLista";

const vacio: Campos = { nombre: "", correo: "", telefono: "", edificio: "" };

export function Formulario({ idioma }: { idioma: Idioma }) {
  const { form } = site;
  const [valores, setValores] = useState<Campos>(vacio);
  const [errores, setErrores] = useState<Partial<Record<NombreCampo, ClaveError>>>({});
  const [anuncio, setAnuncio] = useState("");
  const [estado, setEstado] = useState<"editando" | "enviando" | "enviado" | "fallo">("editando");
  const refs = useRef<Partial<Record<NombreCampo, HTMLInputElement | HTMLSelectElement | null>>>({});
  const confirmacion = useRef<HTMLDivElement>(null);

  const textoError = (campo: NombreCampo) => {
    const clave = errores[campo];
    return clave ? t(form[clave], idioma) : null;
  };

  const cambiar = (campo: NombreCampo, valor: string) => {
    setValores((v) => ({ ...v, [campo]: valor }));
    // Si ya había error, se revalida mientras escribe para quitarlo apenas se corrige.
    if (errores[campo]) setErrores((e) => ({ ...e, [campo]: validarCampo(campo, valor) ?? undefined }));
  };

  const salir = (campo: NombreCampo) => {
    if (campo !== "edificio" && !valores[campo]) return; // no regañar por pasar de largo un campo vacío
    setErrores((e) => ({ ...e, [campo]: validarCampo(campo, valores[campo]) ?? undefined }));
  };

  const enviar = async (evento: React.FormEvent) => {
    evento.preventDefault();
    const encontrados = validarTodo(valores);
    setErrores(encontrados);

    const primero = ordenCampos.find((c) => encontrados[c]);
    if (primero) {
      const mensajes = ordenCampos
        .filter((c) => encontrados[c])
        .map((c) => t(form[encontrados[c]!], idioma));
      setAnuncio(`${t(form.erroresResumen, idioma)} ${mensajes.join(" ")}`);
      refs.current[primero]?.focus();
      return;
    }

    setEstado("enviando");
    try {
      await enviarSolicitud({ ...valores, nombre: valores.nombre.trim(), correo: valores.correo.trim() });
      setEstado("enviado");
      setValores(vacio);
      requestAnimationFrame(() => confirmacion.current?.focus());
    } catch {
      setEstado("fallo");
      setAnuncio(t(form.errorEnvio, idioma));
    }
  };

  if (estado === "enviado") {
    return (
      <div
        ref={confirmacion}
        tabIndex={-1}
        role="status"
        className="flex flex-col gap-4 rounded-tarjeta bg-tarjeta-oscuro p-tarjeta outline-none focus-visible:outline-2"
      >
        <p className="font-acento text-h2 font-normal tracking-normal">{t(form.confirmacionTitulo, idioma)}</p>
        <p className="text-subtitulo text-secundario-oscuro">{t(form.confirmacion, idioma)}</p>
      </div>
    );
  }

  const obligatorio = t(form.obligatorio, idioma);
  const comunes = (campo: NombreCampo) => ({
    id: `campo-${campo}`,
    name: campo,
    value: valores[campo],
    error: textoError(campo),
    textoObligatorio: obligatorio,
    onBlur: () => salir(campo),
  });

  return (
    <form noValidate onSubmit={enviar} className="flex flex-col gap-8">
      <Campo
        {...comunes("nombre")}
        ref={(el) => {
          refs.current.nombre = el;
        }}
        type="text"
        autoComplete="name"
        etiqueta={t(form.nombre, idioma)}
        onChange={(e) => cambiar("nombre", e.target.value)}
      />
      <Campo
        {...comunes("correo")}
        ref={(el) => {
          refs.current.correo = el;
        }}
        type="email"
        inputMode="email"
        autoComplete="email"
        etiqueta={t(form.correo, idioma)}
        ayuda={t(form.correoAyuda, idioma)}
        onChange={(e) => cambiar("correo", e.target.value)}
      />
      <Campo
        {...comunes("telefono")}
        ref={(el) => {
          refs.current.telefono = el;
        }}
        type="tel"
        inputMode="tel"
        autoComplete="tel"
        etiqueta={t(form.telefono, idioma)}
        ayuda={t(form.telefonoAyuda, idioma)}
        onChange={(e) => cambiar("telefono", e.target.value)}
      />
      <CampoLista
        {...comunes("edificio")}
        ref={(el) => {
          refs.current.edificio = el;
        }}
        etiqueta={t(form.edificio, idioma)}
        textoVacio={t(form.edificioVacio, idioma)}
        opciones={[
          ...edificios.map((e) => ({ valor: e, texto: e })),
          { valor: OTRO_EDIFICIO, texto: t(form.otroEdificio, idioma) },
        ]}
        onChange={(e) => cambiar("edificio", e.target.value)}
      />

      <div className="flex flex-col gap-4 pt-2">
        <BotonPrincipal type="submit">{t(form.enviar, idioma)}</BotonPrincipal>
        <p className="text-pequeno text-secundario-oscuro">{t(form.privacidad, idioma)}</p>
      </div>

      <p aria-live="polite" className={estado === "fallo" ? "text-pequeno text-error-oscuro" : "sr-only"}>
        {anuncio}
      </p>
    </form>
  );
}
