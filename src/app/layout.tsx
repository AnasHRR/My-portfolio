import type { Metadata, Viewport } from "next";
import type { ReactNode } from "react";
import { Inter, Manrope } from "next/font/google";
import { SiteProvider, themeInitScript } from "@/components/providers/SiteProvider";
import { siteUrl } from "@/data/profile";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope",
  display: "swap",
  weight: ["500", "600", "700", "800"],
});

const title = "Anas Lagziri | Développeur Web Full Stack";
const description =
  "Portfolio professionnel d'Anas Lagziri, Développeur Web Full Stack spécialisé dans la création d'applications web modernes, responsives et performantes.";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: title,
    template: "%s | Anas Lagziri",
  },
  description,
  applicationName: "Anas Lagziri — Portfolio",
  authors: [{ name: "Anas Lagziri", url: siteUrl }],
  creator: "Anas Lagziri",
  keywords: [
    "Anas Lagziri",
    "Développeur Web Full Stack",
    "Full Stack Web Developer",
    "React.js",
    "Laravel",
    "Node.js",
    "PHP",
    "MySQL",
    "MongoDB",
    "Fès",
    "Maroc",
    "Portfolio",
  ],
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: "fr_MA",
    alternateLocale: ["en_US"],
    url: siteUrl,
    siteName: "Anas Lagziri — Portfolio",
    title,
    description,
    images: [
      {
        url: "/images/hero-visual.jpg",
        width: 1254,
        height: 1254,
        alt: "Anas Lagziri — Développeur Web Full Stack",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
    images: ["/images/hero-visual.jpg"],
  },
  robots: { index: true, follow: true },
  icons: { icon: "/icon.svg" },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: [
    { media: "(prefers-color-scheme: dark)", color: "#070b14" },
    { media: "(prefers-color-scheme: light)", color: "#f6f8fc" },
  ],
};

const personJsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Anas Lagziri",
  jobTitle: "Développeur Web Full Stack",
  email: "mailto:anas1lagziri@gmail.com",
  telephone: "+212706200331",
  url: siteUrl,
  address: { "@type": "PostalAddress", addressLocality: "Fès", addressCountry: "MA" },
  knowsAbout: ["React.js", "Laravel", "Node.js", "Express.js", "PHP", "MySQL", "MongoDB", "Tailwind CSS", "REST API"],
  alumniOf: { "@type": "EducationalOrganization", name: "OFPPT — ISTA Al Darissa" },
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="fr" className={`dark ${inter.variable} ${manrope.variable}`} suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeInitScript }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }} />
        <noscript>
          <style>{`.reveal{opacity:1 !important;transform:none !important}`}</style>
        </noscript>
      </head>
      <body className="min-h-screen bg-bg font-sans text-fg antialiased">
        <SiteProvider>{children}</SiteProvider>
      </body>
    </html>
  );
}
