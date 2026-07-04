import type { Metadata } from "next";
import { GalleryView } from "./gallery-view";

export const metadata: Metadata = {
  title: "Gallery",
  description:
    "Real mobile detailing results across New Jersey & Pennsylvania: Porsche, Ford F-250, RAM TRX, Toyota Supra and more.",
  alternates: { canonical: "/gallery" },
};

export default function GalleryPage() {
  return <GalleryView />;
}
