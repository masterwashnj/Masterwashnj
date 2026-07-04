"use client";

import { useLang } from "@/components/lang-context";
import { SITE } from "@/lib/site";

const UPDATED = "2026-06-27";

export function PrivacyView() {
  const { lang } = useLang();
  const es = lang === "es";

  const sections = es
    ? [
        ["Quiénes somos", `${SITE.name} es un servicio de detallado automotriz móvil que opera en ${SITE.region}. Puedes contactarnos en ${SITE.email} o al ${SITE.phoneDisplay}.`],
        ["Qué datos recopilamos", "Cuando usas nuestro formulario de cotización o reservas una cita, podemos recopilar: tu nombre, teléfono, correo electrónico, el servicio y tamaño de vehículo que eliges, y la fecha deseada. No recopilamos datos de pago en este sitio."],
        ["Cómo usamos tus datos", "Usamos tu información únicamente para responder a tu solicitud, agendar tu servicio y comunicarnos contigo sobre tu cita. No vendemos ni alquilamos tus datos a terceros."],
        ["Reservas y pagos (Square)", "Las reservas y pagos se procesan de forma segura a través de Square. El manejo de tus datos de pago se rige por la política de privacidad de Square."],
        ["Servicios de terceros", "Este sitio se aloja en Netlify y los formularios se procesan con Netlify Forms. Usamos enlaces a Instagram y Google. Cada plataforma tiene su propia política de privacidad."],
        ["Cookies y almacenamiento", "No usamos cookies de seguimiento publicitario. Solo guardamos tu preferencia de idioma en tu navegador (almacenamiento local) para mejorar tu experiencia."],
        ["Tus derechos", "Puedes pedirnos acceder, corregir o eliminar tus datos personales escribiéndonos a " + SITE.email + "."],
        ["Cambios a esta política", "Podemos actualizar esta política. La fecha de última actualización aparece abajo."],
      ]
    : [
        ["Who we are", `${SITE.name} is a mobile auto detailing service operating in ${SITE.region}. You can reach us at ${SITE.email} or ${SITE.phoneDisplay}.`],
        ["What we collect", "When you use our quote form or book an appointment, we may collect: your name, phone, email, the service and vehicle size you choose, and your preferred date. We do not collect payment data on this site."],
        ["How we use your data", "We use your information only to respond to your request, schedule your service and communicate about your appointment. We never sell or rent your data to third parties."],
        ["Booking & payments (Square)", "Bookings and payments are processed securely through Square. Handling of your payment data is governed by Square's privacy policy."],
        ["Third-party services", "This site is hosted on Netlify and forms are processed via Netlify Forms. We link to Instagram and Google. Each platform has its own privacy policy."],
        ["Cookies & storage", "We do not use advertising tracking cookies. We only store your language preference in your browser (local storage) to improve your experience."],
        ["Your rights", "You may ask us to access, correct or delete your personal data by writing to " + SITE.email + "."],
        ["Changes to this policy", "We may update this policy. The last updated date appears below."],
      ];

  return (
    <div className="mx-auto max-w-3xl px-5 py-16">
      <p className="eyebrow mb-3">{es ? "Legal" : "Legal"}</p>
      <h1 className="text-3xl font-bold sm:text-4xl">{es ? "Política de privacidad" : "Privacy Policy"}</h1>
      <p className="mt-4 text-silver">
        {es
          ? "Tu privacidad nos importa. Aquí explicamos qué datos recopilamos y cómo los usamos."
          : "Your privacy matters. Here we explain what data we collect and how we use it."}
      </p>

      <div className="mt-10 space-y-8">
        {sections.map(([title, body]) => (
          <section key={title}>
            <h2 className="text-lg font-bold text-snow">{title}</h2>
            <p className="mt-2 text-sm leading-relaxed text-silver">{body}</p>
          </section>
        ))}
      </div>

      <p className="mt-12 text-xs text-steel">
        {es ? "Última actualización: " : "Last updated: "}{UPDATED}
      </p>
    </div>
  );
}
