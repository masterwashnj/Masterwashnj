/**
 * Logo Master Wash NJ — logo REAL del cliente, recortado (fondo transparente).
 * Archivo: public/img/logo.png (PNG transparente → flota sobre cualquier fondo).
 */

/** Compacto para el header. */
export function Logo({ className = "" }: { className?: string }) {
  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      src="/img/logo.png"
      alt="Master Wash NJ — Car Detailing"
      className={`h-11 w-auto sm:h-12 ${className}`}
    />
  );
}

/** Lockup completo (footer). */
export function LogoFull({ className = "" }: { className?: string }) {
  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      src="/img/logo.png"
      alt="Master Wash NJ — Car Detailing"
      className={`h-28 w-auto ${className}`}
    />
  );
}
