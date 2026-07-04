import type { Metadata } from "next";
import { Sora, Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { StickyCTA } from "@/components/sticky-cta";
import { ScrollProgress } from "@/components/scroll-progress";
import { QuickBookProvider } from "@/components/quick-book";
import { LangProvider } from "@/components/lang-context";
import { SITE } from "@/lib/site";

const sora = Sora({
  variable: "--font-sora",
  subsets: ["latin"],
  weight: ["600", "700", "800"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const jetbrains = JetBrains_Mono({
  variable: "--font-jetbrains",
  subsets: ["latin"],
  weight: ["400", "500"],
});

const DESC =
  "Premium mobile auto detailing across New Jersey & Pennsylvania: interior, exterior, full detail, engine clean and ceramic coating. We come to you — booked in seconds.";
const OG_TITLE = `${SITE.name} — Premium Mobile Auto Detailing`;

export const metadata: Metadata = {
  metadataBase: new URL(SITE.url),
  title: {
    default: `${SITE.name} — Premium Mobile Auto Detailing in NJ & PA`,
    template: `%s · ${SITE.name}`,
  },
  description: DESC,
  applicationName: SITE.name,
  keywords: [
    "mobile car detailing NJ", "auto detailing New Jersey", "ceramic coating NJ",
    "car detailing Mercer County", "mobile detailing Pennsylvania", "auto detailing near me",
  ],
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    siteName: SITE.name,
    title: OG_TITLE,
    description: DESC,
    url: SITE.url,
    locale: "en_US",
    images: [{ url: "/og.jpg", width: 1200, height: 630, alt: SITE.name }],
  },
  twitter: {
    card: "summary_large_image",
    title: OG_TITLE,
    description: DESC,
    images: ["/og.jpg"],
  },
  robots: { index: true, follow: true },
};

/** Structured data (schema.org) para SEO local en Google. */
const jsonLd = {
  "@context": "https://schema.org",
  "@type": "AutoWash",
  name: SITE.name,
  description: DESC,
  url: SITE.url,
  image: `${SITE.url}/og.jpg`,
  telephone: SITE.phone,
  email: SITE.email,
  priceRange: "$$",
  address: {
    "@type": "PostalAddress",
    addressLocality: SITE.city,
    addressRegion: "NJ",
    addressCountry: "US",
  },
  areaServed: SITE.serviceAreas.map((a) => {
    const t = /new jersey|pennsylvania/i.test(a) ? "State" : /county/i.test(a) ? "AdministrativeArea" : "City";
    return { "@type": t, name: a };
  }),
  sameAs: [SITE.instagram],
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en"
      className={`${sora.variable} ${inter.variable} ${jetbrains.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <LangProvider>
          <QuickBookProvider>
            <ScrollProgress />
            <Header />
            <main className="flex-1 pb-16 md:pb-0">{children}</main>
            <Footer />
            <StickyCTA />
          </QuickBookProvider>
        </LangProvider>
      </body>
    </html>
  );
}
