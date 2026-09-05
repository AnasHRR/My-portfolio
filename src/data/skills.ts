export type SkillCategoryId = "frontend" | "backend" | "database" | "tools" | "development";

export interface Skill {
  name: string;
  /** Simple Icons slug used for the technology logo (served via CDN). */
  icon?: string;
  /** Brand color for the logo. */
  color?: string;
}

export interface SkillCategory {
  id: SkillCategoryId;
  skills: Skill[];
}

export const skillCategories: SkillCategory[] = [
  {
    id: "frontend",
    skills: [
      { name: "HTML5", icon: "html5", color: "#E34F26" },
      { name: "CSS3", icon: "css", color: "#663399" },
      { name: "JavaScript", icon: "javascript", color: "#F7DF1E" },
      { name: "Bootstrap", icon: "bootstrap", color: "#7952B3" },
      { name: "Tailwind CSS", icon: "tailwindcss", color: "#06B6D4" },
      { name: "React.js", icon: "react", color: "#61DAFB" },
    ],
  },
  {
    id: "backend",
    skills: [
      { name: "PHP", icon: "php", color: "#777BB4" },
      { name: "Node.js", icon: "nodedotjs", color: "#5FA04E" },
      { name: "Express.js", icon: "express", color: "#FFFFFF" },
      { name: "Laravel", icon: "laravel", color: "#FF2D20" },
    ],
  },
  {
    id: "database",
    skills: [
      { name: "MySQL", icon: "mysql", color: "#4479A1" },
      { name: "MongoDB", icon: "mongodb", color: "#47A248" },
      { name: "Mongoose", icon: "mongoose", color: "#880000" },
    ],
  },
  {
    id: "tools",
    skills: [
      { name: "Git", icon: "git", color: "#F05032" },
      { name: "GitHub", icon: "github", color: "#FFFFFF" },
      { name: "VS Code", icon: "vscodium", color: "#2F80ED" },
      { name: "npm", icon: "npm", color: "#CB3837" },
      { name: "Composer", icon: "composer", color: "#885630" },
      { name: "XAMPP", icon: "xampp", color: "#FB7A24" },
      { name: "Axios", icon: "axios", color: "#5A29E4" },
      { name: "PHPMailer" },
    ],
  },
  {
    id: "development",
    skills: [
      { name: "REST API" },
      { name: "CRUD" },
      { name: "Authentication" },
      { name: "Responsive Design" },
      { name: "Database Management" },
      { name: "Frontend/Backend Integration" },
    ],
  },
];

/** Technologies highlighted in the hero marquee. */
export const heroStack = [
  "React.js",
  "Laravel",
  "Node.js",
  "Express.js",
  "PHP",
  "MySQL",
  "MongoDB",
  "Tailwind CSS",
  "JavaScript",
  "REST API",
];
