import type { Metadata } from "next";
import { ServicesView } from "./services-view";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Mobile auto detailing across New Jersey & Pennsylvania: maintenance, exterior, interior, full detail, engine clean and ceramic coating.",
  alternates: { canonical: "/services" },
};

export default function ServicesPage() {
  return <ServicesView />;
}
