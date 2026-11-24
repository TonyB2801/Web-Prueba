/**
 * TODOS los textos del sitio, en inglés (en) y español (es).
 * Fuente: ficha técnica, sección 5 (oferta_irresistible.md y briefing).
 *
 * Convenciones:
 *  - [COMPLETAR] = falta el dato del cliente. Se muestra tal cual en la página.
 *  - Comentario "(propuesta)" = texto nuestro, pendiente de aprobación.
 *  - No se inventan cifras, garantías, testimonios, plazos, edificios ni zonas.
 */
import type { Texto } from "@/lib/i18n";

type Dato = { valor: Texto; etiqueta: Texto };
type Servicio = { icono: NombreIcono; titulo: Texto; descripcion: Texto };
type Pregunta = { pregunta: Texto; respuesta: Texto };
type Resena = { texto: Texto; nombre: string };
type Imagen = { src: string | null; alt: Texto };

export type NombreIcono =
  | "limpieza"
  | "mantenimiento"
  | "inspeccion"
  | "anuncios"
  | "soporte"
  | "reporte";

const igual = (texto: string): Texto => ({ en: texto, es: texto });

export const edificios = [
  "District 225",
  "The Crosby", // [COMPLETAR: confirmar si es "The Crossby"]
  "501 First Residences",
  "Gale",
  "NoMad Wynwood",
  "Quadro Building",
  "72 Park",
] as const;

export const site = {
  marca: {
    nombre: "KeyStays",
    // Hasta tener el logo en SVG se muestra el nombre como texto.
    logoAlt: { en: "KeyStays home", es: "Inicio de KeyStays" },
  },

  seo: {
    titulo: {
      en: "KeyStays | Miami Property Management", // (propuesta)
      es: "KeyStays | Gestión de propiedades en Miami",
    },
    descripcion: igual("[COMPLETAR]"),
  },

  cta: {
    principal: { en: "Request your free analysis", es: "Solicita tu análisis gratuito" },
    apoyo: { en: "Free, no commitment.", es: "Gratis y sin compromiso." },
  },

  accesibilidad: {
    saltarFormulario: { en: "Skip to the form", es: "Saltar al formulario" }, // (propuesta)
    cerrar: { en: "Close", es: "Cerrar" }, // (propuesta)
  },

  idioma: {
    en: igual("EN"),
    es: igual("ES"),
    aria: { en: "Change language", es: "Cambiar idioma" },
    nombreEn: { en: "English", es: "Inglés" },
    nombreEs: { en: "Spanish", es: "Español" },
  },

  hero: {
    zonas: igual("DOWNTOWN MIAMI · WYNWOOD · MIAMI BEACH"),
    titular1: { en: "Your Miami residence.", es: "Tu residencia en Miami." },
    titular2: { en: "Managed by our own team.", es: "Gestionada por un equipo propio." },
    subtitulo: {
      en: "Full-service management for your residence, with our own housekeeping and maintenance teams.",
      es: "Gestión integral de tu residencia, con equipos propios de limpieza y mantenimiento.",
    },
    secundaria: { en: "See how it works", es: "Ver cómo funciona" },
    duracionVideo: igual("1:30"),
    imagen: {
      src: null, // [COMPLETAR: foto de Miami con licencia → public/images/]
      alt: {
        en: "Miami skyline with residential towers and palm trees", // (propuesta)
        es: "Vista de Miami con torres residenciales y palmeras", // (propuesta)
      },
    } satisfies Imagen,
    imagenPendiente: igual("[COMPLETAR: foto del hero y su licencia]"),
  },

  datos: [
    { valor: igual("24/7"), etiqueta: { en: "Support", es: "Soporte" } },
    // [COMPLETAR: confirmar la cifra "3+"]
    { valor: igual("3+"), etiqueta: { en: "Platforms", es: "Plataformas" } },
    { valor: { en: "In-house", es: "Propio" }, etiqueta: { en: "Own team", es: "Equipo propio" } },
    { valor: { en: "Monthly", es: "Mensual" }, etiqueta: { en: "Owner report", es: "Reporte" } },
  ] satisfies Dato[],

  servicios: {
    etiqueta: { en: "SERVICES", es: "SERVICIOS" },
    titular: igual("[COMPLETAR]"),
    acento: { en: "Managed in-house.", es: "Gestionado por nuestro equipo." },
    fotoEquipo: igual("[COMPLETAR: foto del equipo]"),
    items: [
      {
        icono: "limpieza",
        titulo: { en: "In-house housekeeping", es: "Limpieza con equipo propio" },
        descripcion: igual("[COMPLETAR]"),
      },
      {
        icono: "mantenimiento",
        titulo: { en: "In-house maintenance", es: "Mantenimiento con equipo propio" },
        descripcion: igual("[COMPLETAR]"),
      },
      {
        icono: "inspeccion",
        titulo: { en: "Quality inspections", es: "Inspecciones de calidad" },
        descripcion: igual("[COMPLETAR]"),
      },
      {
        icono: "anuncios",
        titulo: {
          en: "Listings & dynamic pricing (Airbnb, Booking.com, Vrbo)",
          es: "Anuncios y precios dinámicos (Airbnb, Booking.com, Vrbo)",
        },
        descripcion: igual("[COMPLETAR]"),
      },
      {
        icono: "soporte",
        titulo: {
          en: "24/7 guest support & concierge",
          es: "Atención a huéspedes 24/7 y concierge",
        },
        descripcion: igual("[COMPLETAR]"),
      },
      {
        icono: "reporte",
        titulo: {
          en: "Monthly financial report: rental income, occupancy, management fees and expenses",
          es: "Reporte financiero mensual: ingresos por alquiler, ocupación, comisiones de gestión y gastos",
        },
        descripcion: igual("[COMPLETAR]"),
      },
    ] satisfies Servicio[],
  },

  residencias: {
    etiqueta: { en: "RESIDENCES", es: "RESIDENCIAS" }, // (propuesta)
    titular: igual("[COMPLETAR]"),
    zonas: ["Downtown Miami", "Wynwood", "Miami Beach"],
    edificios,
    zonaDeEdificio: igual("[COMPLETAR: zona de cada edificio]"),
    zonasTitulo: { en: "Areas", es: "Zonas" }, // (propuesta)
    edificiosTitulo: { en: "Buildings", es: "Edificios" }, // (propuesta)
  },

  proceso: {
    etiqueta: { en: "HOW IT WORKS", es: "CÓMO FUNCIONA" }, // (propuesta)
    titular: igual("[COMPLETAR]"),
    acento: igual("[COMPLETAR]"),
    contador: { en: "{n} / {total}", es: "{n} / {total}" },
    pasoAria: { en: "Step {n} of {total}", es: "Paso {n} de {total}" }, // (propuesta)
    video: { en: "See how it works", es: "Ver cómo funciona" },
    pasos: [
      {
        en: "Management agreement: services, responsibilities and terms.",
        es: "Acuerdo de gestión: servicios, responsabilidades y términos.",
      },
      {
        en: "Onboarding & inspection: walkthrough, inventory and evaluation against our standards.",
        es: "Incorporación e inspección: recorrido, inventario y evaluación frente a nuestros estándares.",
      },
      {
        en: "Enhancement & preparation: aesthetic and furnishing recommendations; our team gets it ready.",
        es: "Mejoras y preparación: recomendaciones de estética y mobiliario; nuestro equipo deja la residencia lista.",
      },
      {
        en: "Photography & listing: professional photos and an optimized listing.",
        es: "Fotografía y anuncio: fotos profesionales y anuncio optimizado.",
      },
      {
        en: "Activation & launch: published on the platforms with dynamic pricing.",
        es: "Activación y lanzamiento: publicación en las plataformas con precios dinámicos.",
      },
      {
        en: "Full-service management: guests, bookings, housekeeping, maintenance and monthly report.",
        es: "Gestión integral: huéspedes, reservas, limpieza, mantenimiento y reporte mensual.",
      },
    ] satisfies Texto[],
  },

  video: {
    titulo: { en: "How it works", es: "Cómo funciona" },
    src: null as string | null, // [COMPLETAR: video 1:30 en alta resolución]
    subtitulosEn: null as string | null, // [COMPLETAR: .vtt EN]
    subtitulosEs: null as string | null, // [COMPLETAR: .vtt ES]
    pendiente: igual("[COMPLETAR: video «How it works» y subtítulos EN/ES]"),
  },

  pruebas: {
    etiqueta: { en: "GUEST REVIEWS", es: "RESEÑAS DE HUÉSPEDES" },
    rotulo: { en: "Guest review", es: "Reseña de huésped" }, // (propuesta) cada reseña va rotulada
    rotuloPropietario: { en: "Owner", es: "Propietario" }, // (propuesta)
    titular: igual("[COMPLETAR]"),
    resenas: [
      { texto: igual("[COMPLETAR: texto, nombre de pila y permiso de publicación]"), nombre: "[COMPLETAR]" },
      { texto: igual("[COMPLETAR: texto, nombre de pila y permiso de publicación]"), nombre: "[COMPLETAR]" },
      { texto: igual("[COMPLETAR: texto, nombre de pila y permiso de publicación]"), nombre: "[COMPLETAR]" },
    ] satisfies Resena[],
    // Vacío: el bloque de testimonio de propietario no se muestra.
    propietario: null as Resena | null,
  },

  faq: {
    etiqueta: { en: "FAQ", es: "PREGUNTAS FRECUENTES" }, // (propuesta)
    titular: igual("[COMPLETAR]"),
    items: [
      {
        pregunta: {
          en: "What does full-service management include?",
          es: "¿Qué incluye la gestión?",
        },
        respuesta: {
          en: "In-house housekeeping and maintenance, quality inspections, listings and dynamic pricing on Airbnb, Booking.com and Vrbo, 24/7 guest support and concierge, and a monthly financial report. [COMPLETAR: los 11 servicios]",
          es: "Limpieza y mantenimiento con equipo propio, inspecciones de calidad, anuncios y precios dinámicos en Airbnb, Booking.com y Vrbo, atención a huéspedes 24/7 y concierge, y un reporte financiero mensual. [COMPLETAR: los 11 servicios]",
        },
      },
      {
        pregunta: { en: "Who cleans and repairs my residence?", es: "¿Quién limpia y quién repara?" },
        respuesta: {
          en: "Our own housekeeping and maintenance team, not third parties.",
          es: "Nuestro propio equipo de limpieza y mantenimiento, no terceros.",
        },
      },
      {
        pregunta: { en: "How much do you charge, and how?", es: "¿Cuánto cobran y cómo?" },
        respuesta: igual("[COMPLETAR]"),
      },
      {
        pregunta: {
          en: "Which platforms and how do you set prices?",
          es: "¿Qué plataformas usan y cómo fijan los precios?",
        },
        respuesta: {
          en: "Airbnb, Booking.com and Vrbo, with dynamic pricing.",
          es: "Airbnb, Booking.com y Vrbo, con precios dinámicos.",
        },
      },
      {
        pregunta: {
          en: "What if there's damage or a problem with a guest?",
          es: "¿Qué pasa si hay un daño o un problema con un huésped?",
        },
        respuesta: igual("[COMPLETAR]"),
      },
      {
        pregunta: {
          en: "How often do I get updates, and what's in them?",
          es: "¿Cada cuánto recibo información y qué dice?",
        },
        respuesta: {
          en: "A monthly financial report: rental income, occupancy, management fees and expenses.",
          es: "Un reporte financiero mensual: ingresos por alquiler, ocupación, comisiones de gestión y gastos.",
        },
      },
      {
        pregunta: { en: "Which buildings do you work in?", es: "¿En qué edificios trabajan?" },
        respuesta: {
          en: "District 225, The Crosby, 501 First Residences, Gale, NoMad Wynwood, Quadro Building and 72 Park, in Downtown Miami, Wynwood and Miami Beach.",
          es: "District 225, The Crosby, 501 First Residences, Gale, NoMad Wynwood, Quadro Building y 72 Park, en Downtown Miami, Wynwood y Miami Beach.",
        },
      },
      {
        pregunta: {
          en: "What does the free analysis include, and how long does it take?",
          es: "¿Qué incluye el análisis gratuito y cuánto tarda?",
        },
        respuesta: igual("[COMPLETAR]"),
      },
    ] satisfies Pregunta[],
  },

  cierre: {
    titular: {
      en: "Ready for your residence to work for you?",
      es: "¿Listo para que tu residencia trabaje por ti?",
    },
    paso1: { en: "Complete a short form.", es: "Completa un formulario corto." },
    paso2: {
      en: "We review your residence and get back to you within [COMPLETAR: plazo].",
      es: "Revisamos tu residencia y te escribimos en [COMPLETAR: plazo].",
    },
    paso3: { en: "You receive your analysis and decide.", es: "Recibes el análisis y decides." },
    pasosTitulo: { en: "What happens next", es: "Qué pasa después" }, // (propuesta)
  },

  form: {
    nombre: { en: "Name", es: "Nombre" },
    correo: { en: "Email", es: "Correo electrónico" },
    correoAyuda: { en: "We'll send your analysis here.", es: "Te enviaremos el análisis aquí." },
    telefono: { en: "Phone", es: "Teléfono" },
    telefonoAyuda: { en: "Include country code.", es: "Con código de país." },
    edificio: {
      en: "Which building is your residence in?",
      es: "¿En qué edificio está tu residencia?",
    },
    obligatorio: { en: "required", es: "obligatorio" }, // (propuesta) solo para lectores de pantalla
    erroresResumen: {
      en: "Please review the highlighted fields.",
      es: "Revisa los campos marcados.",
    }, // (propuesta)
    edificioVacio: { en: "Choose your building", es: "Elige tu edificio" }, // (propuesta)
    otroEdificio: { en: "Other building", es: "Otro edificio" }, // (propuesta, decidido)
    enviar: { en: "Request your free analysis", es: "Solicita tu análisis gratuito" },
    privacidad: {
      en: "Free, no commitment. We only use your details to prepare your analysis.",
      es: "Gratis y sin compromiso. Usamos tus datos solo para preparar tu análisis.",
    },
    confirmacionTitulo: { en: "Thank you.", es: "Gracias." }, // (propuesta)
    confirmacion: {
      en: "We've received your request. We'll review your residence and get back to you within [COMPLETAR: plazo].",
      es: "Recibimos tu solicitud. Vamos a revisar tu residencia y te escribiremos en [COMPLETAR: plazo].",
    },
    errorVacio: {
      en: "Please fill in this field to continue.",
      es: "Completa este campo para continuar.",
    },
    errorNombre: {
      en: "Please enter your full name.", // (propuesta)
      es: "Escribe tu nombre completo.", // (propuesta)
    },
    errorCorreo: {
      en: "Please check your email. Something seems to be missing.",
      es: "Revisa tu correo. Parece que falta algo.",
    },
    errorTelefono: {
      en: "Please check your phone number and include the country code.",
      es: "Revisa tu teléfono e incluye el código de país.",
    },
    errorEdificio: { en: "Choose your building.", es: "Elige tu edificio." },
    errorEnvio: {
      en: "We couldn't send your request. Please try again or contact us at [COMPLETAR: contacto].",
      es: "No pudimos enviar tu solicitud. Inténtalo de nuevo o escríbenos a [COMPLETAR: contacto].",
    },
  },

  pie: {
    contacto: igual("[COMPLETAR: correo y teléfono]"),
    contactoTitulo: { en: "Contact", es: "Contacto" }, // (propuesta)
    zonasTitulo: { en: "Areas", es: "Zonas" }, // (propuesta)
    privacidadPendiente: igual("[COMPLETAR: enlace]"),
    privacidad: { en: "Privacy policy", es: "Política de privacidad" },
    privacidadEnlace: null as string | null, // [COMPLETAR: enlace]
    marca: igual("© KeyStays Residences"),
    lema: {
      en: "Your residence. Our responsibility.",
      es: "Tu residencia. Nuestra responsabilidad.",
    },
  },
};
