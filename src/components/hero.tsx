"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import { motion, useMotionValue, useReducedMotion, useScroll, useSpring, useTransform } from "framer-motion";
import { QuickBookButton } from "@/components/quick-book";
import { useLang } from "@/components/lang-context";
import { UI, pick } from "@/lib/i18n";
import { IconCar, IconPin, IconStar, IconShield, IconClock } from "@/components/icons";

/**
 * Hero: video en loop de fondo + logo real transparente con glow rojo,
 * entrada animada, flotación y tilt 3D al mover el mouse.
 *
 * Rendimiento: el video se PAUSA cuando el hero sale de la pantalla
 * (IntersectionObserver) para no gastar CPU/GPU al hacer scroll, y se
 * desactiva por completo si el usuario pidió "reduce motion" (se usa el
 * poster). Sin escalado del video al scroll (era lo más costoso).
 */
export function Hero() {
  const { lang } = useLang();
  const t = (k: keyof typeof UI) => pick(UI[k], lang);
  const reduce = useReducedMotion();

  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const rotateX = useSpring(useTransform(my, [-50, 50], [7, -7]), { stiffness: 150, damping: 18 });
  const rotateY = useSpring(useTransform(mx, [-50, 50], [-9, 9]), { stiffness: 150, damping: 18 });

  // Parallax ligero al hacer scroll (solo logo y contenido; el video NO escala).
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: sectionRef, offset: ["start start", "end start"] });
  const videoY = useTransform(scrollYProgress, [0, 1], ["0%", "14%"]);
  const logoY = useTransform(scrollYProgress, [0, 1], [0, -80]);
  const contentOpacity = useTransform(scrollYProgress, [0, 0.7], [1, 0]);

  // Pausar los videos (móvil + desktop) cuando el hero no está visible → ahorra CPU/GPU.
  useEffect(() => {
    const sec = sectionRef.current;
    if (!sec) return;
    const vids = Array.from(sec.querySelectorAll("video")) as HTMLVideoElement[];
    if (reduce) { vids.forEach((v) => v.pause()); return; }
    const io = new IntersectionObserver(
      ([e]) => vids.forEach((v) => { if (e.isIntersecting) v.play().catch(() => {}); else v.pause(); }),
      { threshold: 0.05 }
    );
    io.observe(sec);
    return () => io.disconnect();
  }, [reduce]);

  const onMove = (e: React.MouseEvent<HTMLElement>) => {
    if (reduce) return;
    const r = e.currentTarget.getBoundingClientRect();
    mx.set(((e.clientX - r.left) / r.width - 0.5) * 100);
    my.set(((e.clientY - r.top) / r.height - 0.5) * 100);
  };
  const onLeave = () => { mx.set(0); my.set(0); };

  const fade = (d: number) => ({
    initial: { opacity: 0, y: 18 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6, delay: d, ease: "easeOut" as const },
  });

  return (
    <section ref={sectionRef} className="relative overflow-hidden border-b border-line" onMouseMove={onMove} onMouseLeave={onLeave}>
      {/* Fondo en video (BMW M4 detailing). Responsive: vertical en móvil, horizontal en desktop.
          Se pausa fuera de pantalla. Reduce-motion → poster estático. */}
      {!reduce ? (
        <>
          <motion.video
            style={{ y: videoY, willChange: "transform" }}
            className="absolute inset-0 h-full w-full object-cover opacity-60 sm:hidden"
            autoPlay muted loop playsInline preload="metadata" aria-hidden="true"
            poster="/hero-poster-mobile.jpg"
          >
            <source src="/hero-mobile.mp4" type="video/mp4" />
          </motion.video>
          <motion.video
            style={{ y: videoY, willChange: "transform" }}
            className="absolute inset-0 hidden h-full w-full object-cover opacity-60 sm:block"
            autoPlay muted loop playsInline preload="metadata" aria-hidden="true"
            poster="/hero-poster.jpg"
          >
            <source src="/hero-desktop.mp4" type="video/mp4" />
          </motion.video>
        </>
      ) : (
        // eslint-disable-next-line @next/next/no-img-element
        <img src="/hero-poster.jpg" alt="" aria-hidden="true" className="absolute inset-0 h-full w-full object-cover opacity-60" />
      )}
      {/* overlay para legibilidad (el logo y el texto resaltan sobre el video) */}
      <div className="absolute inset-0 bg-gradient-to-b from-base/75 via-base/40 to-base" />

      {/* sparkles */}
      <span className="pointer-events-none absolute left-[14%] top-[22%] z-10 text-xl text-gold/70">✦</span>
      <span className="pointer-events-none absolute right-[18%] top-[28%] z-10 text-base text-accent-bright/70">✦</span>

      <motion.div style={{ opacity: contentOpacity }} className="relative z-10 mx-auto flex max-w-5xl flex-col items-center px-5 py-16 text-center sm:py-20">
        <motion.div {...fade(0)} className="flex flex-wrap justify-center gap-2">
          <span className="pill"><IconCar className="h-3.5 w-3.5 text-accent-bright" /> {t("hero_pill_mobile")}</span>
          <span className="pill"><IconPin className="h-3.5 w-3.5 text-accent-bright" /> {t("hero_pill_serving")}</span>
          <span className="pill"><IconStar className="h-3.5 w-3.5 text-gold" /> {t("hero_pill_premium")}</span>
        </motion.div>

        {/* LOGO con tilt 3D + glow + parallax al scroll */}
        <motion.div className="relative mt-8 w-full" style={{ perspective: 1100, y: logoY }}>
          <motion.div
            className="pointer-events-none absolute left-1/2 top-1/2 h-[60%] w-[70%] -translate-x-1/2 -translate-y-1/2 rounded-full"
            style={{ background: "radial-gradient(circle, rgba(224,22,36,0.5), transparent 65%)", filter: "blur(34px)" }}
            animate={reduce ? undefined : { opacity: [0.55, 0.9, 0.55], scale: [1, 1.07, 1] }}
            transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut" }}
          />
          <motion.div style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
            initial={{ opacity: 0, scale: 0.9, y: 24 }} animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/img/logo.png" alt="Master Wash NJ — Car Detailing"
              className="float-y relative mx-auto w-full max-w-2xl drop-shadow-[0_25px_50px_rgba(224,22,36,0.45)]" />
          </motion.div>
        </motion.div>

        <motion.h1 {...fade(0.25)} className="mt-6 max-w-2xl text-2xl font-bold leading-tight sm:text-4xl">
          {t("hero_title_a")} <span className="text-grad">{t("hero_title_b")}</span>
        </motion.h1>
        <motion.p {...fade(0.35)} className="mt-4 max-w-xl text-base text-silver sm:text-lg">{t("hero_sub")}</motion.p>

        <motion.div {...fade(0.45)} className="mt-8 flex flex-col gap-3 sm:flex-row">
          <QuickBookButton source="hero" className="btn btn-primary text-base" />
          <Link href="/pricing" className="btn btn-ghost text-base">{t("view_pricing")}</Link>
        </motion.div>

        <motion.div {...fade(0.55)} className="mt-7 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-sm text-steel">
          <span className="inline-flex items-center gap-1.5"><IconShield className="h-4 w-4 text-accent-bright" /> {t("hero_trust_secure")}</span>
          <span className="inline-flex items-center gap-1.5"><IconClock className="h-4 w-4 text-accent-bright" /> {t("hero_trust_fast")}</span>
        </motion.div>
      </motion.div>
    </section>
  );
}
