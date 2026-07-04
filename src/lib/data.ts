/**
 * Contenido de Master Wash NJ (bilingüe ES/EN).
 * MENÚ REAL del cliente (2026-06-17): paquetes por tamaño de vehículo,
 * inclusiones completas, add-ons con precios. Reseñas/fotos: ver banderas.
 */
import type { L } from "@/lib/i18n";

export type ContentStatus<T> = { isReal: boolean; items: T };

/* ── Tamaños de vehículo (los 3 reales que cobra el cliente) ─────────────── */
export const VEHICLE_SIZES: { key: "sedan" | "suv" | "truck"; label: L }[] = [
  { key: "sedan", label: { es: "Sedán", en: "Sedan" } },
  { key: "suv", label: { es: "SUV", en: "SUV" } },
  { key: "truck", label: { es: "Camioneta / 3ra fila", en: "Truck / 3rd row" } },
];

/* ── Categorías ──────────────────────────────────────────────────────────── */
export const CATEGORY_LABELS: Record<string, L> = {
  interior: { es: "Interior", en: "Interior" },
  exterior: { es: "Exterior", en: "Exterior" },
  full: { es: "Full Detail", en: "Full Detail" },
  protection: { es: "Protección", en: "Protection" },
  correction: { es: "Corrección", en: "Correction" },
  specialty: { es: "Especialidad", en: "Specialty" },
};
export const CATEGORY_ORDER = ["interior", "exterior", "full", "protection", "correction", "specialty"];

/* ── Servicios (catálogo real) ───────────────────────────────────────────── */
export type Service = { key: string; label: string; category: string; blurb: L; consultation?: boolean };

export const SERVICES: Service[] = [
  { key: "interior_detail", label: "Interior Detail", category: "interior",
    blurb: { es: "Aspirado profundo, vapor, plásticos y cuero acondicionados, vidrios y ambientador.", en: "Deep vacuum, steam, plastics & leather dressed, windows and air freshener." } },
  { key: "exterior_detail", label: "Exterior Detail", category: "exterior",
    blurb: { es: "Prelavado, lavado a mano, cera, ruedas, guardafangos y cauchos con acabado.", en: "Prewash, hand wash, wax, wheels, fender wells and tires dressed." } },
  { key: "full_detail", label: "Full Detail", category: "full",
    blurb: { es: "Interior + exterior con clay bar, descontaminación y protección premium.", en: "Interior + exterior with clay bar, decontamination and premium protection." } },
  { key: "ceramic_coating", label: "Ceramic Coating", category: "protection",
    blurb: { es: "Protección cerámica de 1 a 3 años. Brillo y defensa de larga duración.", en: "1–3 year ceramic protection. Long-lasting shine and defense." }, consultation: true },
  { key: "glass_coating", label: "Glass Coating", category: "protection",
    blurb: { es: "Recubrimiento hidrofóbico para el parabrisas: mejor visibilidad en lluvia.", en: "Hydrophobic windshield coating for better rain visibility." } },
  { key: "wheel_coating", label: "Wheel Coating", category: "protection",
    blurb: { es: "Protección cerámica para rines: repele frenos y suciedad.", en: "Ceramic protection for wheels: repels brake dust and grime." } },
  { key: "paint_correction", label: "Paint Correction", category: "correction",
    blurb: { es: "Pulido de 1 paso que elimina swirls y micro-rayones. Brillo profundo.", en: "1-step polish that removes swirls and micro-scratches. Deep gloss." }, consultation: true },
  { key: "headlight", label: "Headlight Restoration", category: "specialty",
    blurb: { es: "Restauración de faros opacos para más claridad y seguridad.", en: "Restore foggy headlights for more clarity and safety." } },
  { key: "engine_bay", label: "Engine Bay Detail", category: "specialty",
    blurb: { es: "Limpieza y acondicionado del compartimiento del motor.", en: "Engine bay cleaning and dressing." } },
];

/* ── Add-ons reales (con rangos de precio) ───────────────────────────────── */
export type AddOn = { label: L; price: string; group: "interior" | "exterior" | "premium" };
export const ADD_ONS: AddOn[] = [
  { group: "interior", price: "$50+", label: { es: "Remoción de pelo de mascota", en: "Pet Hair Removal" } },
  { group: "interior", price: "$50+", label: { es: "Remoción de manchas profundas", en: "Deep Stain Removal" } },
  { group: "interior", price: "$60", label: { es: "Tratamiento de olores", en: "Odor Treatment" } },
  { group: "interior", price: "$80", label: { es: "Limpieza a vapor", en: "Steam Cleaning" } },
  { group: "interior", price: "$60", label: { es: "Acondicionado de cuero", en: "Leather Conditioning" } },
  { group: "interior", price: "$100", label: { es: "Champú de alfombras y asientos", en: "Carpet & Seat Shampoo" } },
  { group: "exterior", price: "$60", label: { es: "Detail del compartimiento del motor", en: "Engine Bay Detail" } },
  { group: "exterior", price: "$100", label: { es: "Restauración de faros", en: "Headlight Restoration" } },
  { group: "exterior", price: "$100", label: { es: "Tratamiento con clay bar", en: "Clay Bar Treatment" } },
  { group: "exterior", price: "$60", label: { es: "Remoción de hierro", en: "Iron Removal" } },
  { group: "exterior", price: "$60", label: { es: "Restauración de molduras", en: "Trim Restoration" } },
  { group: "exterior", price: "$80", label: { es: "Limpieza de bajos (undercarriage)", en: "Undercarriage Cleaning" } },
  { group: "premium", price: "$120", label: { es: "Glass Coating", en: "Glass Coating" } },
  { group: "premium", price: "$150", label: { es: "Wheel Coating", en: "Wheel Coating" } },
  { group: "premium", price: "$400+", label: { es: "Corrección de pintura (1 paso)", en: "Paint Correction (1 Step)" } },
  { group: "premium", price: "$899+", label: { es: "Ceramic Coating", en: "Ceramic Coating" } },
];

/* ── Paquetes (PRECIOS REALES por tamaño de vehículo) ────────────────────── */
export type Pkg = {
  key: string;
  label: string;
  for: L;
  duration: string;
  icon: "droplet" | "sparkle" | "shield";
  prices: { sedan: string; suv: string; truck: string };
  includes: L[];
  recommended?: boolean;
};

export const PACKAGES: ContentStatus<Pkg[]> = {
  isReal: true, // idéntico al Square del cliente
  items: [
    {
      key: "maintenance",
      label: "Maintenance Detail",
      for: { es: "Mantenimiento / clientes recurrentes", en: "Maintenance / returning customers" },
      duration: "2 h",
      icon: "droplet",
      prices: { sedan: "$80", suv: "$100", truck: "$120" },
      includes: [
        { es: "Lavado a mano", en: "Hand wash" },
        { es: "Ruedas limpias + tire shine", en: "Wheels cleaned + tire shine" },
        { es: "Marcos de puertas", en: "Door jamb wipe down" },
        { es: "Aspirado interior", en: "Interior vacuum" },
        { es: "Tablero y portavasos", en: "Dashboard & cupholders" },
        { es: "Vidrios interiores", en: "Interior windows" },
        { es: "Ambientador", en: "Air freshener" },
      ],
    },
    {
      key: "standard",
      label: "Standard Detail",
      for: { es: "Vehículos moderadamente sucios", en: "Best for moderately dirty vehicles" },
      duration: "3 h",
      icon: "sparkle",
      prices: { sedan: "$150", suv: "$180", truck: "$210" },
      recommended: true,
      includes: [
        { es: "Todo lo del Maintenance, más:", en: "Everything in Maintenance, plus:" },
        { es: "Protección con cera en spray", en: "Spray wax protection" },
        { es: "Aspirado profundo + maletero", en: "Deep vacuum + trunk" },
        { es: "Asientos y paneles de puerta", en: "Seats & door panels cleaned" },
        { es: "Tratamiento ligero de manchas", en: "Light stain treatment" },
        { es: "Plásticos exteriores acondicionados", en: "Exterior plastics dressed" },
        { es: "Limpieza interior más detallada", en: "More detailed interior cleaning" },
      ],
    },
    {
      key: "full",
      label: "Full Detail",
      for: { es: "Muy sucios / restauración total", en: "Heavily dirty / full restoration feel" },
      duration: "4 h",
      icon: "shield",
      prices: { sedan: "$280", suv: "$320", truck: "$360" },
      includes: [
        { es: "Todo lo del Standard, más:", en: "Everything in Standard, plus:" },
        { es: "Tratamiento con clay bar", en: "Clay bar treatment" },
        { es: "Descontaminación de pintura", en: "Paint decontamination" },
        { es: "Champú de alfombras y asientos", en: "Carpet & seat shampoo" },
        { es: "Limpieza a vapor", en: "Steam cleaning" },
        { es: "Remoción de pelo de mascota", en: "Pet hair removal" },
        { es: "Acondicionado de cuero", en: "Leather conditioning" },
        { es: "Limpieza del compartimiento del motor", en: "Engine bay wipe down" },
        { es: "Protección premium", en: "Premium protection" },
      ],
    },
  ],
};

/* ── Proceso ─────────────────────────────────────────────────────────────── */
export const PROCESS: { n: string; title: L; text: L }[] = [
  { n: "01", title: { es: "Reservas en segundos", en: "Book in seconds" }, text: { es: "Eliges tu servicio y horario online, o pides una cotización para ceramic coating.", en: "Choose your service and time online, or request a ceramic coating quote." } },
  { n: "02", title: { es: "Vamos a tu ubicación", en: "We come to you" }, text: { es: "Detallado móvil: llegamos a tu casa u oficina en NJ con todo el equipo.", en: "Mobile detailing: we arrive at your home or office in NJ with all the gear." } },
  { n: "03", title: { es: "Detallamos con precisión", en: "We detail with precision" }, text: { es: "Productos premium y técnica de nivel profesional. Sin atajos.", en: "Premium products and pro-level technique. No shortcuts." } },
  { n: "04", title: { es: "Tu auto, impecable", en: "Your car, flawless" }, text: { es: "Acabado impecable en tu propia entrada. Te enviamos el antes/después.", en: "A flawless finish right in your driveway. We send you the before/after." } },
];

/* ── Reseñas (placeholder) ───────────────────────────────────────────────── */
export type Review = { name: string; text: L; rating: number };
export const REVIEWS: ContentStatus<Review[]> = {
  isReal: false,
  items: [
    { name: "—", rating: 5, text: { es: "Aquí aparecerán las reseñas reales de Google de tus clientes.", en: "Your real Google reviews will appear here." } },
    { name: "—", rating: 5, text: { es: "El diseño muestra calificación, nombre y comentario reales.", en: "The layout shows real rating, name and comment." } },
    { name: "—", rating: 5, text: { es: "Se conectan directo desde tu Google Business Profile.", en: "Pulled directly from your Google Business Profile." } },
  ],
};

/* ── Estadísticas de confianza (placeholder) ─────────────────────────────── */
export const TRUST_STATS: ContentStatus<{ num: string; label: L }[]> = {
  isReal: false,
  items: [
    { num: "300+", label: { es: "Autos detallados", en: "Cars detailed" } },
    { num: "3+", label: { es: "Años de experiencia", en: "Years of experience" } },
    { num: "5.0", label: { es: "Calificación Google", en: "Google rating" } },
    { num: "100%", label: { es: "Satisfacción", en: "Satisfaction" } },
  ],
};

/* ── Galería (FOTOS Y VIDEOS REALES del cliente) ──────────────────────────── */
export type GalleryItem = { caption: L; src?: string; video?: string; poster?: string };
export const GALLERY: ContentStatus<GalleryItem[]> = {
  isReal: true,
  items: [
    // Frentes primero
    { caption: { es: "Porsche 911 Targa GTS", en: "Porsche 911 Targa GTS" }, src: "/img/porsche-911-2.jpg" },
    { caption: { es: "BMW X6 M", en: "BMW X6 M" }, src: "/img/bmw-x6m.jpg" },
    { caption: { es: "Ford F-150 Raptor", en: "Ford F-150 Raptor" }, src: "/img/raptor.jpg" },
    { caption: { es: "Ford F-250 Platinum", en: "Ford F-250 Platinum" }, src: "/img/ford-f250-2.jpg" },
    { caption: { es: "RAM TRX", en: "RAM TRX" }, src: "/img/ram-trx-2.jpg" },
    { caption: { es: "Toyota Supra MK4", en: "Toyota Supra MK4" }, src: "/img/toyota-supra-2.jpg" },
    // Traseras después
    { caption: { es: "Porsche 911 Targa GTS", en: "Porsche 911 Targa GTS" }, src: "/img/porsche-911.jpg" },
    { caption: { es: "Ford F-250 Platinum", en: "Ford F-250 Platinum" }, src: "/img/ford-f250.jpg" },
    { caption: { es: "Toyota Supra MK4", en: "Toyota Supra MK4" }, src: "/img/toyota-supra.jpg" },
    // Videos al final
    { caption: { es: "Lamborghini Gallardo", en: "Lamborghini Gallardo" }, video: "/img/lambo-1.mp4", poster: "/img/lambo-1.jpg" },
    { caption: { es: "Lamborghini Gallardo", en: "Lamborghini Gallardo" }, video: "/img/lambo-2.mp4", poster: "/img/lambo-2.jpg" },
  ],
};

/* ── FAQ ─────────────────────────────────────────────────────────────────── */
export const FAQ: { q: L; a: L }[] = [
  { q: { es: "¿Van a mi casa?", en: "Do you come to me?" }, a: { es: "Sí. Master Wash es detallado móvil: llegamos a tu casa o trabajo en New Jersey con todo el equipo. Tú no te mueves.", en: "Yes. Master Wash is mobile detailing: we come to your home or job in New Jersey with all the equipment. You don't move." } },
  { q: { es: "¿Cuánto cuesta un detallado?", en: "How much is a detail?" }, a: { es: "Maintenance desde $80, Standard desde $150 y Full Detail desde $280 (sedán). SUV y camioneta/3ra fila tienen precio mayor — lo ves en la tabla. Ceramic coating y corrección se cotizan aparte.", en: "Maintenance from $80, Standard from $150 and Full Detail from $280 (sedan). SUV and truck/3rd row are priced higher — see the table. Ceramic coating and correction are quoted separately." } },
  { q: { es: "¿Necesitan agua y luz?", en: "Do you need water & power?" }, a: { es: "Es preferible tener agua y electricidad disponibles, pero no siempre es necesario. Pregúntanos al reservar.", en: "Water and power available is preferred, but not always required. Just ask when you book." } },
  { q: { es: "¿Cómo reservo?", en: "How do I book?" }, a: { es: "Pulsa “Reservar ahora”, eliges tu servicio y horario, y vamos a ti. Para ceramic coating o corrección, pide una cotización.", en: "Tap “Book now”, choose your service and time, and we come to you. For ceramic coating or correction, request a quote." } },
  { q: { es: "¿Qué zona cubren?", en: "What area do you cover?" }, a: { es: "Servicio móvil en todo New Jersey y Pennsylvania (Mercer County, Princeton, Hamilton, Ewing, Bordentown y alrededores). Indícanos tu ubicación al reservar.", en: "Mobile service across New Jersey and Pennsylvania (Mercer County, Princeton, Hamilton, Ewing, Bordentown and nearby). Share your location when booking." } },
  { q: { es: "¿Qué métodos de pago aceptan?", en: "What payment methods do you accept?" }, a: { es: "Procesamos reservas y pagos de forma segura a través de Square.", en: "We process bookings and payments securely through Square." } },
];
