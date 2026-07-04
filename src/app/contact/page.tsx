import type { Metadata } from "next";
import { ContactView } from "./contact-view";

export const metadata: Metadata = {
  title: "Contact",
  description: "Request a quote or book your mobile detailing in New Jersey & Pennsylvania. We come to you.",
  alternates: { canonical: "/contact" },
};

export default function ContactPage() {
  // El form oculto para Netlify Forms vive en public/__forms.html (requerido por
  // el runtime de Next v5). El envío real lo hace el form multi-paso por fetch.
  return <ContactView />;
}
