"use client";

import { WorkGallery } from "@/components/work-gallery";
import { InstagramCTA } from "@/components/instagram-cta";
import { QuickBookButton } from "@/components/quick-book";
import { useLang } from "@/components/lang-context";
import { UI, pick } from "@/lib/i18n";

export function GalleryView() {
  const { lang } = useLang();
  const t = (k: keyof typeof UI) => pick(UI[k], lang);

  return (
    <div className="mx-auto max-w-6xl px-5 py-16">
      <p className="eyebrow mb-3">{t("nav_gallery")}</p>
      <h1 className="text-3xl font-bold sm:text-4xl">{t("gp_title")}</h1>
      <p className="mt-4 max-w-2xl text-silver">
        {lang === "es"
          ? "Fotos reales de nuestro trabajo de detallado móvil en New Jersey & PA. Síguenos en Instagram para ver todos nuestros trabajos."
          : "Real photos of our mobile detailing work in New Jersey & PA. Follow us on Instagram to see all our work."}
      </p>

      <div className="mt-10">
        <WorkGallery lang={lang} />
      </div>

      <div className="mt-14">
        <InstagramCTA lang={lang} />
      </div>

      <div className="mt-12 text-center">
        <QuickBookButton source="gallery_cta" className="btn btn-primary">
          {t("gp_cta")}
        </QuickBookButton>
      </div>
    </div>
  );
}
