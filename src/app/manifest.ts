import type { MetadataRoute } from "next";
import { SITE } from "@/lib/site";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: `${SITE.name} — Premium Mobile Auto Detailing`,
    short_name: SITE.name,
    description:
      "Premium mobile auto detailing in New Jersey & Pennsylvania. We come to you — booked in seconds.",
    start_url: "/",
    display: "standalone",
    background_color: "#0a0a0c",
    theme_color: "#e01624",
    icons: [
      { src: "/icon.png", sizes: "512x512", type: "image/png" },
      { src: "/icon.png", sizes: "192x192", type: "image/png" },
    ],
  };
}
