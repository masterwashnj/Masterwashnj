"use client";

import { motion, useReducedMotion } from "framer-motion";

/**
 * Fondo futurista del hero (sin video): grid en perspectiva tipo Tron,
 * orbs de glow rojo en movimiento y partículas flotantes. Solo transform/opacity
 * → muy liviano. Respeta reduce-motion.
 */
export function HeroFX() {
  const reduce = useReducedMotion();
  const dots = [
    { l: "12%", t: "30%", d: 0 }, { l: "82%", t: "22%", d: 0.8 },
    { l: "24%", t: "64%", d: 1.6 }, { l: "70%", t: "58%", d: 0.4 },
    { l: "48%", t: "18%", d: 1.2 }, { l: "90%", t: "70%", d: 2 },
  ];

  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden="true">
      {/* grid Tron en el piso */}
      <div className="fx-grid" />

      {/* orbs de glow */}
      <motion.div
        className="absolute left-1/2 top-[36%] h-[460px] w-[760px] -translate-x-1/2 rounded-full"
        style={{ background: "radial-gradient(circle, rgba(224,22,36,0.32), transparent 62%)", filter: "blur(50px)" }}
        animate={reduce ? undefined : { opacity: [0.5, 0.85, 0.5], scale: [1, 1.08, 1] }}
        transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute right-[8%] top-[12%] h-56 w-56 rounded-full"
        style={{ background: "radial-gradient(circle, rgba(120,140,255,0.18), transparent 65%)", filter: "blur(40px)" }}
        animate={reduce ? undefined : { y: [0, 26, 0], opacity: [0.4, 0.7, 0.4] }}
        transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* partículas flotantes */}
      {!reduce && dots.map((p, i) => (
        <motion.span
          key={i}
          className="absolute h-1 w-1 rounded-full bg-accent-bright/70"
          style={{ left: p.l, top: p.t, boxShadow: "0 0 8px 2px rgba(255,59,70,0.5)" }}
          animate={{ y: [0, -18, 0], opacity: [0.2, 0.9, 0.2] }}
          transition={{ duration: 4 + i, repeat: Infinity, ease: "easeInOut", delay: p.d }}
        />
      ))}

      {/* vignette + scanlines sutiles */}
      <div className="absolute inset-0" style={{ background: "radial-gradient(120% 80% at 50% 0%, transparent 52%, rgba(0,0,0,0.65) 100%)" }} />
      <div className="fx-scan opacity-40" />
      <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-b from-transparent to-base" />
    </div>
  );
}
