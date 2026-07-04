/**
 * Configuración central de Master Wash NJ.
 * Sitio web de Master Wash NJ.
 *
 * Nota: lo marcado pendiente es dato del cliente que aún NO tenemos.
 * Hoy lleva un valor de ejemplo (placeholder) para la prueba de campo; debe
 * reemplazarse por el dato REAL antes de publicar. Nunca presentar como real
 * un precio/reseña/métrica de ejemplo.
 *
 * Lo que SÍ es real y verificado: nombre, estado (NJ), Instagram, y el link de
 * reservas de Square (se mantiene como agendador — no se reemplaza).
 */
export const SITE = {
  name: "Master Wash NJ",
  // URL pública del sitio. pendiente: cambiar al dominio final del cliente cuando se compre.
  // Por ahora el subdominio de Netlify o lo que defina el deploy.
  url: "https://masterwashnj.netlify.app",
  // REAL (de su Instagram): detallado MÓVIL — van a la casa del cliente en NJ.
  tagline: "Detallado Móvil Premium",
  signature: "Acabado impecable, hasta tu puerta",
  state: "New Jersey",
  instagram: "https://www.instagram.com/masterwashnj",
  instagramHandle: "@masterwashnj",
  // pendiente: reemplazar por el link directo del Google Business Profile (write-a-review).
  // Por ahora cae a una búsqueda de Google Maps del negocio (funciona, pero no es el perfil oficial).
  googleReviews: "https://www.google.com/maps/search/Master+Wash+NJ+detailing+Trenton",
  squareBooking:
    "https://book.squareup.com/appointments/onzjf9kd0drqs7/location/LYXNZ8FZZWM1F/services?utm_source=website&utm_medium=referral&utm_content=book_cta",
  serviceMode: "mobile" as "shop" | "mobile" | "both", // REAL: "Mobile Detailing", "Serving NJ"
  // REAL (confirmado por el cliente, 2026-06-17):
  city: "Trenton", // base
  county: "Mercer County",
  region: "New Jersey & Pennsylvania",
  serviceAreas: ["New Jersey", "Pennsylvania", "Mercer County", "Princeton", "Hamilton", "Ewing", "Bordentown"],
  phone: "+16093417834",
  phoneDisplay: "(609) 341-7834",
  email: "Masterwashnj@gmail.com", // REAL
  // pendiente — aún por confirmar:
  address: "", // mobile: sin dirección de local
  hours: [] as { day: string; time: string }[], // pendiente
} as const;

export const NAV_LINKS = [
  { href: "/", label: "Inicio" },
  { href: "/services", label: "Servicios" },
  { href: "/gallery", label: "Galería" },
  { href: "/pricing", label: "Precios" },
  { href: "/contact", label: "Contacto" },
] as const;

/** Link de reservas de Square con UTM opcional por origen. */
export function bookLink(source?: string): string {
  if (!source) return SITE.squareBooking;
  const u = new URL(SITE.squareBooking);
  u.searchParams.set("utm_content", source);
  return u.toString();
}

/** Link click-to-call (vacío si aún no hay teléfono real → el CTA cae a reservar). */
export function telLink(): string | null {
  const digits = SITE.phone.replace(/[^\d+]/g, "");
  return digits ? `tel:${digits}` : null;
}

/** Link de WhatsApp (wa.me) con mensaje pre-llenado. Usa el mismo número del negocio. */
export function waLink(lang: "es" | "en" = "en"): string | null {
  const digits = SITE.phone.replace(/[^\d]/g, "");
  if (!digits) return null;
  const msg = lang === "es"
    ? "Hola Master Wash, quiero info sobre un detallado."
    : "Hi Master Wash, I'd like info about a detailing.";
  return `https://wa.me/${digits}?text=${encodeURIComponent(msg)}`;
}
