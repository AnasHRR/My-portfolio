import type { Locale } from "@/lib/i18n";

export type Localized = Record<Locale, string>;

export interface Project {
  id: string;
  name: string;
  tagline: Localized;
  description: Localized;
  features: Localized[];
  technologies: string[];
  image: string;
  imageAlt: Localized;
  featured?: boolean;
  /** Leave empty when the real URL is not known — the UI shows a placeholder state. */
  githubUrl: string;
  liveUrl: string;
  year: string;
}

export const projects: Project[] = [
  {
    id: "electratech",
    name: "ElectraTech",
    featured: true,
    year: "2025",
    tagline: { fr: "Site e-commerce Full Stack", en: "Full Stack e-commerce website" },
    description: {
      fr: "Plateforme e-commerce moderne dédiée à la vente de produits électroniques, avec gestion des produits, catégories et marques, interface responsive et architecture Front-End / Back-End.",
      en: "Modern e-commerce platform dedicated to selling electronic products, with product, category and brand management, a responsive interface and a decoupled Front-End / Back-End architecture.",
    },
    features: [
      { fr: "Gestion des produits, catégories et marques", en: "Product, category and brand management" },
      { fr: "Fiches produits et pages de détails", en: "Product cards and detail pages" },
      { fr: "Panier d'achat et liste de souhaits", en: "Shopping cart and wishlist" },
      { fr: "Authentification des utilisateurs", en: "User authentication" },
      { fr: "API REST consommée via Axios", en: "REST API consumed with Axios" },
      { fr: "Base de données MySQL intégrée", en: "Integrated MySQL database" },
      { fr: "Architecture d'administration des produits", en: "Admin / product management architecture" },
      { fr: "Interface entièrement responsive", en: "Fully responsive UI" },
    ],
    technologies: ["React.js", "Laravel", "PHP", "MySQL", "REST API", "Axios", "JavaScript", "HTML/CSS"],
    image: "/images/projects/electratech.png",
    imageAlt: {
      fr: "Aperçu de la boutique en ligne ElectraTech",
      en: "Preview of the ElectraTech online store",
    },
    githubUrl: "",
    liveUrl: "",
  },
  {
    id: "cabinet-dentaire",
    name: "Cabinet Dentaire",
    year: "2025",
    tagline: { fr: "Site web de cabinet dentaire", en: "Dental clinic website" },
    description: {
      fr: "Application web pour cabinet dentaire permettant de présenter les services et de gérer les interactions avec les patients.",
      en: "Web application for a dental clinic to showcase its services and manage patient interactions.",
    },
    features: [
      { fr: "Interface responsive", en: "Responsive interface" },
      { fr: "Présentation du cabinet et des services", en: "Clinic and service presentation" },
      { fr: "Système de contact / réservation", en: "Contact / booking system" },
      { fr: "Back-end PHP et base de données MySQL", en: "PHP back-end with MySQL database" },
      { fr: "Envoi d'e-mails avec PHPMailer", en: "Email delivery with PHPMailer" },
    ],
    technologies: ["HTML", "CSS", "JavaScript", "NoSQL", "React.js", "Node.js", "Express.js"],
    image: "/images/projects/cabinet dentaire.jpeg",
    imageAlt: {
      fr: "Aperçu du site web du cabinet dentaire",
      en: "Preview of the dental clinic website",
    },
    githubUrl: "",
    liveUrl: "",
  },
  {
    id: "portfolio",
    name: "Portfolio Personnel",
    year: "2026",
    tagline: { fr: "Portfolio professionnel", en: "Professional portfolio" },
    description: {
      fr: "Portfolio professionnel responsive présentant les compétences, projets et parcours du développeur.",
      en: "Responsive professional portfolio presenting the developer's skills, projects and background.",
    },
    features: [
      { fr: "Design responsive et interface moderne", en: "Responsive design and modern UI" },
      { fr: "Présentation des compétences", en: "Skills presentation" },
      { fr: "Vitrine de projets", en: "Project showcase" },
      { fr: "Section contact avec formulaire", en: "Contact section with form" },
      { fr: "Profil professionnel", en: "Professional profile" },
    ],
    technologies: ["React.js", "Next.js", "Tailwind CSS", "TypeScript", "PostgreSQL"],
    image: "/images/projects/portfolio.jpg",
    imageAlt: {
      fr: "Aperçu du portfolio personnel",
      en: "Preview of the personal portfolio",
    },
    githubUrl: "",
    liveUrl: "/",
  },
];
