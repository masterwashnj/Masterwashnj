import type { Metadata } from "next";
import { PrivacyView } from "./privacy-view";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "How Master Wash NJ collects and uses your data.",
  alternates: { canonical: "/privacy" },
  robots: { index: true, follow: true },
};

export default function PrivacyPage() {
  return <PrivacyView />;
}
