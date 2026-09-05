import type { Locale } from "@/lib/i18n";

type Localized = Record<Locale, string>;

export interface ExperienceItem {
  id: string;
  period: string;
  role: Localized;
  company: string;
  location: Localized;
  type: Localized;
  responsibilities: Localized[];
}

export const experiences: ExperienceItem[] = [
  {
    id: "sofrebak",
    period: "2025 – 2026",
    role: { fr: "Agent / Assistant en Bureautique", en: "Office Administration Assistant" },
    company: "Sofrebak",
    location: { fr: "Fès, Maroc", en: "Fez, Morocco" },
    type: { fr: "Expérience administrative", en: "Administrative experience" },
    responsibilities: [
      { fr: "Saisie et traitement de documents administratifs", en: "Data entry and processing of administrative documents" },
      { fr: "Création et mise en forme de documents professionnels", en: "Creation and formatting of professional documents" },
      { fr: "Utilisation de Microsoft Word, Excel et PowerPoint", en: "Use of Microsoft Word, Excel and PowerPoint" },
      { fr: "Gestion et organisation des fichiers et documents", en: "File and document management and organisation" },
      { fr: "Classement et archivage", en: "Filing and archiving" },
      { fr: "Gestion et stockage des informations", en: "Information management and storage" },
      { fr: "Assistance dans les tâches administratives quotidiennes", en: "Support with daily administrative tasks" },
    ],
  },
];

export interface EducationItem {
  id: string;
  period: string;
  title: Localized;
  subtitle: Localized;
  school: Localized;
  highlight?: boolean;
}

export const education: EducationItem[] = [
  {
    id: "ts-dev-digital",
    period: "2024 – 2026",
    highlight: true,
    title: { fr: "Diplôme de Technicien Spécialisé", en: "Specialised Technician Diploma" },
    subtitle: {
      fr: "Développement Digital — Option Web Full Stack",
      en: "Digital Development — Web Full Stack option",
    },
    school: { fr: "OFPPT — ISTA Al Darissa", en: "OFPPT — ISTA Al Darissa" },
  },
  {
    id: "bcmos",
    period: "2023 – 2024",
    title: {
      fr: "Bureauticien Certifié — Microsoft Office Specialist (BCMOS)",
      en: "Certified Office Technician — Microsoft Office Specialist (BCMOS)",
    },
    subtitle: { fr: "Formation en Bureautique", en: "Office automation training" },
    school: { fr: "OFPPT — ISTA Al Darissa", en: "OFPPT — ISTA Al Darissa" },
  },
  {
    id: "bac",
    period: "2022 – 2023",
    title: { fr: "Baccalauréat — Sciences Physiques", en: "Baccalaureate — Physical Sciences" },
    subtitle: { fr: "Enseignement secondaire", en: "Secondary education" },
    school: { fr: "Maroc", en: "Morocco" },
  },
];

export interface SoftSkill {
  id: string;
  icon: "compass" | "users" | "layers" | "clock" | "search" | "flame" | "book";
  title: Localized;
  description: Localized;
}

export const softSkills: SoftSkill[] = [
  {
    id: "autonomy",
    icon: "compass",
    title: { fr: "Autonomie", en: "Autonomy" },
    description: { fr: "Capable d'avancer seul sur une tâche et de trouver des solutions.", en: "Able to move forward independently and find solutions." },
  },
  {
    id: "teamwork",
    icon: "users",
    title: { fr: "Esprit d'équipe", en: "Teamwork" },
    description: { fr: "Collaboration fluide et communication claire au sein d'un groupe.", en: "Smooth collaboration and clear communication within a team." },
  },
  {
    id: "organisation",
    icon: "layers",
    title: { fr: "Organisation", en: "Organisation" },
    description: { fr: "Travail structuré, priorités claires et suivi rigoureux.", en: "Structured work, clear priorities and rigorous follow-up." },
  },
  {
    id: "punctuality",
    icon: "clock",
    title: { fr: "Ponctualité", en: "Punctuality" },
    description: { fr: "Respect des délais et des engagements.", en: "Respect for deadlines and commitments." },
  },
  {
    id: "analysis",
    icon: "search",
    title: { fr: "Esprit d'analyse", en: "Analytical mindset" },
    description: { fr: "Décomposer un problème pour le résoudre méthodiquement.", en: "Breaking a problem down to solve it methodically." },
  },
  {
    id: "motivation",
    icon: "flame",
    title: { fr: "Motivation", en: "Motivation" },
    description: { fr: "Engagement réel et envie de bien faire.", en: "Genuine commitment and the drive to do things well." },
  },
  {
    id: "learning",
    icon: "book",
    title: { fr: "Capacité d'apprentissage", en: "Fast learner" },
    description: { fr: "Curiosité et adaptation rapide aux nouvelles technologies.", en: "Curiosity and quick adaptation to new technologies." },
  },
];

export interface LanguageItem {
  id: string;
  name: Localized;
  level: Localized;
  /** 1–3 visual level (native = 3). Not a percentage. */
  strength: 1 | 2 | 3;
}

export const languages: LanguageItem[] = [
  { id: "ar", name: { fr: "Arabe", en: "Arabic" }, level: { fr: "Langue maternelle", en: "Native" }, strength: 3 },
  { id: "fr", name: { fr: "Français", en: "French" }, level: { fr: "Intermédiaire", en: "Intermediate" }, strength: 2 },
  { id: "en", name: { fr: "Anglais", en: "English" }, level: { fr: "Intermédiaire / avancé", en: "Intermediate / advanced" }, strength: 2 },
];

export const interests: { id: string; label: Localized; icon: "code" | "cpu" | "monitor" | "football" }[] = [
  { id: "web", icon: "code", label: { fr: "Développement Web", en: "Web development" } },
  { id: "tech", icon: "cpu", label: { fr: "Technologies numériques", en: "Digital technologies" } },
  { id: "it", icon: "monitor", label: { fr: "Informatique", en: "Computer science" } },
  { id: "football", icon: "football", label: { fr: "Football", en: "Football" } },
];
