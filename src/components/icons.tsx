/**
 * Iconos DUOTONO (relleno suave + trazo) — look premium y custom, no genérico.
 * Sin dependencias. El relleno usa currentColor a baja opacidad; el trazo da el detalle.
 */
type P = { className?: string };
const base = (className?: string) => ({
  width: 24,
  height: 24,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.7,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
  className,
});
const F = { fill: "currentColor", fillOpacity: 0.16 } as const;

export const IconCar = ({ className }: P) => (
  <svg {...base(className)}>
    <path {...F} d="M3 13l2-5a2 2 0 0 1 1.9-1.3h10.2A2 2 0 0 1 19 8l2 5H3z" />
    <path d="M3 13h18v4a1 1 0 0 1-1 1h-1a2 2 0 0 1-4 0H9a2 2 0 0 1-4 0H4a1 1 0 0 1-1-1z" />
    <path d="M6.5 16h.01M17.5 16h.01" />
  </svg>
);
export const IconInstagram = ({ className }: P) => (
  <svg {...base(className)}>
    <rect {...F} x="3" y="3" width="18" height="18" rx="5" />
    <circle cx="12" cy="12" r="4" />
    <path d="M17.3 6.7h.01" />
  </svg>
);
export const IconGoogle = ({ className }: P) => (
  <svg {...base(className)}>
    <path {...F} d="M12 11v3h4.2A4.2 4.2 0 1 1 12 8a4 4 0 0 1 2.7 1l2.2-2.2A7.2 7.2 0 1 0 19.2 12c0-.4 0-.7-.1-1z" />
  </svg>
);
export const IconPhone = ({ className }: P) => (
  <svg {...base(className)}>
    <path {...F} d="M5 4h3l1.5 4.5L7.5 10a12 12 0 0 0 6 6l1.5-2 4.5 1.5V19a2 2 0 0 1-2.2 2A16 16 0 0 1 3 6.2 2 2 0 0 1 5 4z" />
  </svg>
);
export const IconMail = ({ className }: P) => (
  <svg {...base(className)}>
    <rect {...F} x="3" y="5" width="18" height="14" rx="2" />
    <path d="M4 7l8 6 8-6" />
  </svg>
);
export const IconWhatsApp = ({ className }: P) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
    <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91c0 1.75.46 3.45 1.32 4.95L2 22l5.25-1.38c1.45.79 3.08 1.21 4.79 1.21 5.46 0 9.91-4.45 9.91-9.91C21.95 6.45 17.5 2 12.04 2zm0 18.15c-1.52 0-3.01-.41-4.3-1.18l-.31-.18-3.12.82.83-3.04-.2-.31a8.2 8.2 0 0 1-1.26-4.36c0-4.54 3.7-8.24 8.24-8.24 4.54 0 8.24 3.7 8.24 8.24 0 4.54-3.7 8.24-8.24 8.24zm4.52-6.16c-.25-.12-1.47-.72-1.69-.81-.23-.08-.39-.12-.56.12-.16.25-.64.81-.79.97-.14.17-.29.19-.54.06-.25-.12-1.05-.39-1.99-1.23-.74-.66-1.23-1.47-1.38-1.72-.14-.25-.02-.38.11-.5.11-.11.25-.29.37-.43.12-.15.16-.25.25-.42.08-.17.04-.31-.02-.43-.06-.12-.56-1.34-.76-1.84-.2-.48-.41-.42-.56-.43h-.48c-.17 0-.43.06-.66.31-.23.25-.87.85-.87 2.07 0 1.22.89 2.4 1.01 2.56.12.17 1.75 2.67 4.25 3.74.59.26 1.05.41 1.41.52.59.19 1.13.16 1.56.1.48-.07 1.47-.6 1.68-1.18.21-.58.21-1.07.14-1.18-.06-.1-.22-.16-.47-.28z" />
  </svg>
);
export const IconSparkle = ({ className }: P) => (
  <svg {...base(className)}>
    <path {...F} d="M12 3l1.6 4.4L18 9l-4.4 1.6L12 15l-1.6-4.4L6 9l4.4-1.6z" />
    <path {...F} d="M18 14l.8 2.2L21 17l-2.2.8L18 20l-.8-2.2L15 17l2.2-.8z" />
  </svg>
);
export const IconShield = ({ className }: P) => (
  <svg {...base(className)}>
    <path {...F} d="M12 3l7 3v5c0 4.5-3 7.5-7 9-4-1.5-7-4.5-7-9V6z" />
    <path d="M9 12l2 2 4-4" />
  </svg>
);
export const IconSeat = ({ className }: P) => (
  <svg {...base(className)}>
    <path {...F} d="M6 4h6a3 3 0 0 1 3 3v7H8a2 2 0 0 1-2-2z" />
    <path d="M6 14v4h11M18 18v-2a2 2 0 0 0-2-2" />
  </svg>
);
export const IconDroplet = ({ className }: P) => (
  <svg {...base(className)}>
    <path {...F} d="M12 3s6 6.5 6 10a6 6 0 0 1-12 0c0-3.5 6-10 6-10z" />
    <path d="M9.5 14a2.5 2.5 0 0 0 2.5 2.5" />
  </svg>
);
export const IconLayers = ({ className }: P) => (
  <svg {...base(className)}>
    <path {...F} d="M12 3l9 5-9 5-9-5z" />
    <path d="M3 13l9 5 9-5M3 16.5l9 5 9-5" />
  </svg>
);
export const IconLightbulb = ({ className }: P) => (
  <svg {...base(className)}>
    <path {...F} d="M12 3a6 6 0 0 0-3.5 10.9c.5.4.5 1 .5 1.6V16h6v-.5c0-.6 0-1.2.5-1.6A6 6 0 0 0 12 3z" />
    <path d="M9 18h6M10 21h4" />
  </svg>
);
export const IconEngine = ({ className }: P) => (
  <svg {...base(className)}>
    <path {...F} d="M5 9h2V7h4v2h3l2 2h2v4h-2l-2 2H7v-2H5a1 1 0 0 1-1-1v-3a1 1 0 0 1 1-1z" />
    <path d="M14 5h3" />
  </svg>
);
export const IconClock = ({ className }: P) => (
  <svg {...base(className)}>
    <circle {...F} cx="12" cy="12" r="9" />
    <path d="M12 7v5l3 2" />
  </svg>
);
export const IconStar = ({ className }: P) => (
  <svg {...base(className)}>
    <path {...F} d="M12 3l2.6 5.3 5.9.9-4.3 4.1 1 5.8L12 16.9 6.8 19l1-5.8L3.5 9l5.9-.9z" />
  </svg>
);
export const IconPin = ({ className }: P) => (
  <svg {...base(className)}>
    <path {...F} d="M12 21s-7-5.3-7-11a7 7 0 0 1 14 0c0 5.7-7 11-7 11z" />
    <circle cx="12" cy="10" r="2.5" />
  </svg>
);
export const IconCalendar = ({ className }: P) => (
  <svg {...base(className)}>
    <rect {...F} x="4" y="5" width="16" height="16" rx="2" />
    <path d="M4 9h16M8 3v4M16 3v4" />
  </svg>
);

/** Mapa paquete (icon key) → icono. */
export function packageIcon(icon: string, className = "h-6 w-6") {
  switch (icon) {
    case "droplet": return <IconDroplet className={className} />;
    case "sparkle": return <IconSparkle className={className} />;
    case "shield": return <IconShield className={className} />;
    default: return <IconSparkle className={className} />;
  }
}

/** Mapa categoría (key) → icono. */
export function serviceIcon(category: string, className = "h-6 w-6") {
  switch (category) {
    case "exterior": return <IconCar className={className} />;
    case "interior": return <IconSeat className={className} />;
    case "full": return <IconSparkle className={className} />;
    case "protection": return <IconShield className={className} />;
    case "correction": return <IconDroplet className={className} />;
    case "specialty": return <IconEngine className={className} />;
    default: return <IconSparkle className={className} />;
  }
}
