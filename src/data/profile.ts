/**
 * Core profile information — single source of truth.
 * Only verified data from the CV is present here.
 */
export const profile = {
  name: "Anas Lagziri",
  firstName: "Anas",
  lastName: "Lagziri",
  initials: "AL",
  location: { fr: "Fès, Maroc", en: "Fez, Morocco" },
  phone: "0706200331",
  phoneHref: "tel:+212706200331",
  whatsappNumber: "+212706200331",
  whatsappHref: "https://wa.me/212706200331",
  cvPath: "/cv/Anas-Lagziri-CV.pdf",
  /**
   * Social links — only rendered when a URL is provided.
   * Leave `url` empty until the real profile URL is known (never invent one).
   */
  socials: [
    { id: "github", label: "GitHub", url: "" },
    { id: "linkedin", label: "LinkedIn", url: "" },
    { id: "instagram", label: "Instagram", url: "" },
  ] as { id: "github" | "linkedin" | "instagram"; label: string; url: string }[],
} as const;

export const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000";
