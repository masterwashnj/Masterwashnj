/**
 * i18n ligero (sin dependencias) — ES / EN.
 * El sitio es bilingüe: el negocio atiende NJ (inglés) y base hispana (Luis).
 * `L` = string localizado { es, en }. `pick(L, lang)` devuelve el idioma activo.
 */
export type Lang = "es" | "en";
export type L = { es: string; en: string };

export const pick = (s: L, lang: Lang) => s[lang];

/** Diccionario de strings de interfaz (no de contenido — eso vive en data.ts). */
export const UI = {
  // Nav
  nav_home: { es: "Inicio", en: "Home" },
  nav_services: { es: "Servicios", en: "Services" },
  nav_gallery: { es: "Galería", en: "Gallery" },
  nav_pricing: { es: "Precios", en: "Pricing" },
  nav_contact: { es: "Contacto", en: "Contact" },

  // CTAs
  book_now: { es: "Reservar ahora", en: "Book now" },
  view_pricing: { es: "Ver precios", en: "View pricing" },
  get_quote: { es: "Pedir cotización", en: "Get a quote" },
  book: { es: "Reservar", en: "Book" },
  call: { es: "Llamar", en: "Call" },
  contact_us: { es: "Contáctanos", en: "Contact us" },

  // Hero
  hero_pill_mobile: { es: "Detallado móvil", en: "Mobile detailing" },
  hero_pill_serving: { es: "New Jersey & Pennsylvania", en: "New Jersey & Pennsylvania" },
  hero_pill_premium: { es: "Acabado premium", en: "Premium finish" },
  hero_title_a: { es: "Detallado premium,", en: "Premium detailing," },
  hero_title_b: { es: "a tu puerta.", en: "at your door." },
  hero_sub: {
    es: "Detallado móvil premium en New Jersey: interior, exterior, engine clean y ceramic coating. Nosotros vamos a ti — reservado en segundos.",
    en: "Premium mobile detailing in New Jersey: interior, exterior, engine clean and ceramic coating. We come to you — booked in seconds.",
  },
  hero_trust_secure: { es: "Reservas seguras vía Square", en: "Secure booking via Square" },
  hero_trust_fast: { es: "Respuesta rápida", en: "Fast response" },

  // Sections
  services_eyebrow: { es: "Servicios", en: "Services" },
  services_title: { es: "Todo lo que tu auto necesita", en: "Everything your car needs" },
  services_sub: { es: "Desde un lavado de mantenimiento hasta protección cerámica de larga duración.", en: "From a maintenance wash to long-lasting ceramic protection." },
  why_a_t: { es: "Acabado impecable", en: "Flawless finish" },
  why_a_d: { es: "Productos premium y técnica de detalle. Sin atajos.", en: "Premium products and detailing technique. No shortcuts." },
  why_b_t: { es: "Protección real", en: "Real protection" },
  why_b_d: { es: "Ceramic coating que cuida y prolonga el brillo de tu auto.", en: "Ceramic coating that protects and prolongs your shine." },
  why_c_t: { es: "Reserva sin fricción", en: "Frictionless booking" },
  why_c_d: { es: "Agenda online en segundos, cuando te quede bien.", en: "Book online in seconds, whenever works for you." },
  why_d_t: { es: "Vamos a ti", en: "We come to you" },
  why_d_d: { es: "Detallado móvil: llegamos a tu casa u oficina en NJ.", en: "Mobile detailing: we come to your home or office in NJ." },
  process_eyebrow: { es: "Cómo trabajamos", en: "How it works" },
  process_title: { es: "Simple, claro, impecable", en: "Simple, clear, flawless" },
  ba_eyebrow: { es: "Antes / Después", en: "Before / After" },
  ba_title: { es: "La diferencia se ve", en: "The difference shows" },
  ba_sub: { es: "Arrastra para comparar. Próximamente con fotos reales de nuestro trabajo.", en: "Drag to compare. Real photos of our work coming soon." },
  ba_full_gallery: { es: "Ver galería completa", en: "View full gallery" },
  reviews_eyebrow: { es: "Reseñas", en: "Reviews" },
  reviews_title: { es: "Lo que dicen nuestros clientes", en: "What our clients say" },
  reviews_placeholder: { es: "Diseño de reseñas — se conectará con tu Google Business Profile real.", en: "Reviews layout — will connect to your real Google Business Profile." },
  reviews_google: { es: "Ver reseñas en Google", en: "See Google reviews" },
  reviews_leave: { es: "Déjanos tu reseña", en: "Leave us a review" },
  reviews_rating_label: { es: "Calificación promedio", en: "Average rating" },

  // Instagram / gallery
  ig_eyebrow: { es: "En vivo en Instagram", en: "Live on Instagram" },
  ig_title: { es: "Síguenos en Instagram", en: "Follow us on Instagram" },
  ig_sub: { es: "La mejor galería es nuestro Instagram: ahí publicamos cada auto, antes y después, en carrusel y video.", en: "Our best gallery is Instagram — every car, before and after, in carousels and video." },
  ig_follow: { es: "Seguir @masterwashnj", en: "Follow @masterwashnj" },
  ig_see_more: { es: "Ver más en Instagram", en: "See more on Instagram" },
  pricing_eyebrow: { es: "Paquetes", en: "Packages" },
  pricing_title: { es: "Precios claros, sin sorpresas", en: "Clear pricing, no surprises" },
  pricing_sub: { es: "Detallado móvil — vamos a tu casa en NJ. El ceramic coating se cotiza tras una breve evaluación.", en: "Mobile detailing — we come to you in NJ. Ceramic coating is quoted after a quick assessment." },
  pricing_note: { es: "Elige el tamaño de tu vehículo para ver tu precio. Ceramic coating y corrección de pintura se cotizan aparte. Agua y luz disponibles preferible.", en: "Pick your vehicle size to see your price. Ceramic coating and paint correction are quoted separately. Water & power available preferred." },
  pricing_size_label: { es: "Tamaño de tu vehículo", en: "Your vehicle size" },
  addons_title: { es: "Add-ons disponibles", en: "Available add-ons" },
  addons_sub: { es: "Súmalos a cualquier paquete. Precios según el estado del vehículo.", en: "Add to any package. Prices vary with vehicle condition." },
  addons_interior: { es: "Interior", en: "Interior" },
  addons_exterior: { es: "Exterior", en: "Exterior" },
  addons_premium: { es: "Servicios premium", en: "Premium services" },
  faq_eyebrow: { es: "Preguntas frecuentes", en: "FAQ" },
  faq_title: { es: "Resolvemos tus dudas", en: "Your questions, answered" },
  faq_help_sub: { es: "Todo lo que necesitas saber antes de reservar. ¿Otra pregunta? Escríbenos o reserva y lo vemos.", en: "Everything you need before booking. Another question? Message us or just book." },
  faq_help_title: { es: "¿Aún con dudas?", en: "Still have questions?" },
  faq_help_text: { es: "Te respondemos rápido.", en: "We reply fast." },
  faq_help_ig: { es: "Escríbenos en Instagram", en: "Message us on Instagram" },
  final_title: { es: "¿Listo para que tu auto luzca como nuevo?", en: "Ready for your car to look brand new?" },
  final_sub: { es: "Reserva tu cita en segundos o pide una cotización para ceramic coating.", en: "Book your appointment in seconds or request a ceramic coating quote." },
  recommended: { es: "Recomendado", en: "Most popular" },
  from: { es: "desde", en: "from" },

  // Quick book
  qb_eyebrow: { es: "Reserva rápida", en: "Quick book" },
  qb_title: { es: "Agenda en segundos", en: "Book in seconds" },
  qb_q1: { es: "¿Qué servicio?", en: "Which service?" },
  qb_q2: { es: "Tamaño de vehículo", en: "Vehicle size" },
  qb_optional: { es: "(opcional)", en: "(optional)" },
  qb_go: { es: "Reservar ahora →", en: "Book now →" },
  qb_via: { es: "Reservas vía Square", en: "Booking via Square" },
  qb_call: { es: "o llámanos", en: "or call us" },
  qb_b1: { es: "Acabado premium", en: "Premium finish" },
  qb_b2: { es: "Reserva segura", en: "Secure booking" },
  qb_b3: { es: "60 segundos", en: "60 seconds" },

  // Footer
  footer_about: { es: "Detallado automotriz móvil en New Jersey & Pennsylvania. Acabado impecable, en tu propia entrada.", en: "Mobile auto detailing across New Jersey & Pennsylvania. A flawless finish, right in your driveway." },
  footer_nav: { es: "Navegación", en: "Navigation" },
  footer_contact: { es: "Contacto", en: "Contact" },
  footer_book: { es: "Reserva", en: "Book" },
  footer_book_note: { es: "Reservas seguras vía Square.", en: "Secure booking via Square." },
  footer_rights: { es: "Todos los derechos reservados.", en: "All rights reserved." },

  // Contact
  contact_eyebrow: { es: "Contacto", en: "Contact" },
  contact_title: { es: "Pide tu cotización", en: "Request your quote" },
  contact_sub: { es: "Cuéntanos qué necesitas y te respondemos rápido. ¿Ya sabes lo que quieres? Reserva directo.", en: "Tell us what you need and we'll reply fast. Already know? Book directly." },
  contact_direct_title: { es: "Reserva directa", en: "Book directly" },
  contact_direct_text: { es: "¿Servicio estándar? Agenda tu cita en segundos a través de Square.", en: "Standard service? Book your appointment in seconds via Square." },
  contact_other: { es: "Otras formas de contacto", en: "Other ways to reach us" },

  // Lead form
  lf_step: { es: "Paso", en: "Step" },
  lf_of: { es: "de", en: "of" },
  lf_q_service: { es: "¿Qué necesitas?", en: "What do you need?" },
  lf_select_service: { es: "Selecciona un servicio", en: "Select a service" },
  lf_vehicle_size: { es: "Tamaño de tu vehículo", en: "Your vehicle size" },
  lf_select: { es: "Selecciona", en: "Select" },
  lf_continue: { es: "Continuar", en: "Continue" },
  lf_back: { es: "Atrás", en: "Back" },
  lf_when: { es: "¿Cuándo te gustaría?", en: "When would you like it?" },
  lf_name: { es: "Nombre", en: "Name" },
  lf_your_name: { es: "Tu nombre", en: "Your name" },
  lf_phone: { es: "Teléfono", en: "Phone" },
  lf_email: { es: "Email", en: "Email" },
  lf_submit: { es: "Enviar solicitud", en: "Send request" },
  lf_no_spam: { es: "Te responderemos lo antes posible. Sin spam.", en: "We'll get back to you ASAP. No spam." },
  lf_done_title: { es: "¡Solicitud recibida!", en: "Request received!" },
  lf_done_text: { es: "Gracias. Te contactaremos muy pronto con tu cotización. Mientras tanto, puedes reservar tu cita.", en: "Thanks. We'll contact you soon with your quote. Meanwhile, you can book your appointment." },

  // Services page
  sp_title: { es: "Detallado para cada necesidad", en: "Detailing for every need" },
  sp_sub: { es: "Desde mantenimiento frecuente hasta protección premium de larga duración. Detallado móvil en NJ.", en: "From frequent maintenance to long-lasting premium protection. Mobile detailing across NJ." },
  sp_addons: { es: "Extras disponibles", en: "Available add-ons" },

  // Gallery page
  gp_title: { es: "Nuestro trabajo habla", en: "Our work speaks for itself" },
  gp_sub: { es: "Arrastra cada imagen para comparar el antes y el después. Próximamente con fotos reales de NJ.", en: "Drag each image to compare before and after. Real NJ photos coming soon." },
  gp_cta: { es: "Quiero estos resultados — Reservar", en: "I want these results — Book" },
} as const;
