import type { Metadata } from "next";
import { PricingView } from "./pricing-view";

export const metadata: Metadata = {
  title: "Pricing",
  description:
    "Clear pricing by vehicle size — Maintenance from $80, Standard from $150, Full Detail from $280. Mobile detailing in NJ & PA.",
  alternates: { canonical: "/pricing" },
};

export default function PricingPage() {
  return <PricingView />;
}
