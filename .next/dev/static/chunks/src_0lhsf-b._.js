(globalThis["TURBOPACK"] || (globalThis["TURBOPACK"] = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/src/lib/i18n.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "defaultLocale",
    ()=>defaultLocale,
    "dictionaries",
    ()=>dictionaries,
    "getDictionary",
    ()=>getDictionary,
    "locales",
    ()=>locales
]);
const locales = [
    "fr",
    "en"
];
const defaultLocale = "fr";
const fr = {
    meta: {
        title: "Anas Lagziri | Développeur Web Full Stack",
        description: "Portfolio professionnel d'Anas Lagziri, Développeur Web Full Stack spécialisé dans la création d'applications web modernes, responsives et performantes."
    },
    nav: {
        home: "Accueil",
        about: "À propos",
        skills: "Compétences",
        projects: "Projets",
        experience: "Expérience",
        education: "Formation",
        contact: "Contact",
        menu: "Ouvrir le menu",
        close: "Fermer le menu",
        theme: "Changer de thème",
        lang: "Changer de langue",
        skipToContent: "Aller au contenu"
    },
    hero: {
        available: "Disponible pour un stage, un emploi ou une mission freelance",
        greeting: "Bonjour, je suis",
        subtitle: "FULL STACK WEB DEVELOPER",
        title: "Développeur Web Full Stack",
        text: "I build modern, responsive and scalable web applications with clean interfaces and powerful backend systems.",
        textFr: "Je conçois des applications web modernes, responsives et évolutives, avec des interfaces soignées et des systèmes back-end robustes.",
        ctaProjects: "Voir mes projets",
        ctaContact: "Me contacter",
        ctaCv: "Télécharger mon CV",
        based: "Basé à Fès, Maroc",
        scroll: "Défiler",
        stackLabel: "Stack principale",
        cardFrontend: "Front-end",
        cardBackend: "Back-end",
        cardDatabase: "Bases de données"
    },
    about: {
        eyebrow: "À propos",
        title: "À propos de moi",
        lead: "Développeur Web Full Stack",
        p1: "Développeur Web Full Stack titulaire d'un Diplôme de Technicien Spécialisé en Développement Digital, option Web Full Stack. Je suis passionné par la conception et le développement d'applications web modernes et responsives, de l'interface utilisateur jusqu'à l'API et la base de données.",
        p2: "J'aime construire des interfaces claires, des systèmes back-end fiables, des API REST bien structurées et des solutions e-commerce complètes. Sérieux, motivé, autonome et doté d'un bon esprit d'équipe, je souhaite mettre mes compétences techniques au service d'une entreprise dynamique.",
        focusTitle: "Ce que je développe",
        focus: [
            {
                title: "Interfaces modernes",
                text: "React.js, Tailwind CSS et Bootstrap pour des UI rapides et élégantes."
            },
            {
                title: "Back-end & API",
                text: "Laravel, PHP, Node.js et Express.js pour des API REST robustes."
            },
            {
                title: "Bases de données",
                text: "Modélisation et gestion de données avec MySQL et MongoDB."
            },
            {
                title: "E-commerce",
                text: "Catalogue, panier, authentification et administration produits."
            }
        ],
        stats: [
            {
                value: "3+",
                label: "Projets réalisés"
            },
            {
                value: "Full Stack",
                label: "Front-end & Back-end"
            },
            {
                value: "React · Laravel · Node",
                label: "Stack principale"
            },
            {
                value: "MySQL · MongoDB",
                label: "Bases de données"
            }
        ]
    },
    skills: {
        eyebrow: "Compétences",
        title: "Technologies & compétences",
        text: "Un socle technique complet pour concevoir une application web de bout en bout : interface, logique serveur, API et données.",
        categories: {
            frontend: {
                title: "Front-end",
                text: "Interfaces responsives et composants réutilisables."
            },
            backend: {
                title: "Back-end",
                text: "Logique métier, API et authentification."
            },
            database: {
                title: "Bases de données",
                text: "Modélisation relationnelle et NoSQL."
            },
            tools: {
                title: "Outils",
                text: "Environnement de développement et productivité."
            },
            development: {
                title: "Développement",
                text: "Pratiques et concepts maîtrisés."
            }
        }
    },
    projects: {
        eyebrow: "Projets",
        title: "Projets sélectionnés",
        text: "Des applications concrètes qui illustrent ma capacité à livrer un produit complet, du front-end à la base de données.",
        featured: "Projet phare",
        features: "Fonctionnalités clés",
        stack: "Technologies",
        github: "GitHub",
        live: "Démo en ligne",
        view: "Voir le projet",
        soon: "Lien bientôt disponible",
        other: "Autres projets"
    },
    experience: {
        eyebrow: "Expérience",
        title: "Expérience professionnelle",
        text: "Une première expérience en entreprise qui a renforcé ma rigueur, mon organisation et mon sens du service.",
        responsibilities: "Missions"
    },
    education: {
        eyebrow: "Formation",
        title: "Parcours de formation",
        text: "Un parcours orienté vers le numérique, de la bureautique certifiée au développement web full stack.",
        current: "En cours"
    },
    soft: {
        eyebrow: "Savoir-être",
        title: "Qualités professionnelles"
    },
    languages: {
        eyebrow: "Langues",
        title: "Langues"
    },
    interests: {
        eyebrow: "Centres d'intérêt",
        title: "Centres d'intérêt"
    },
    contact: {
        eyebrow: "Contact",
        title: "Construisons quelque chose ensemble.",
        text: "Vous avez un projet web, une opportunité professionnelle ou simplement une idée à partager ? N'hésitez pas à me contacter.",
        location: "Localisation",
        phone: "Téléphone",
        whatsapp: "WhatsApp",
        ctaTitle: "Discutons sur WhatsApp",
        ctaText: "La façon la plus rapide de me joindre. Écrivez-moi directement, je réponds vite.",
        ctaButton: "Message sur WhatsApp",
        ctaHint: "Ou appelez-moi au"
    },
    footer: {
        tagline: "Développeur Web Full Stack",
        navigation: "Navigation",
        contact: "Contact",
        social: "Réseaux",
        socialSoon: "Liens à venir",
        rights: "© 2026 Anas Lagziri. Tous droits réservés.",
        built: "Conçu et développé avec Next.js, React et Tailwind CSS.",
        top: "Retour en haut"
    }
};
const en = {
    meta: {
        title: "Anas Lagziri | Full Stack Web Developer",
        description: "Professional portfolio of Anas Lagziri, Full Stack Web Developer specialised in building modern, responsive and high-performance web applications."
    },
    nav: {
        home: "Home",
        about: "About",
        skills: "Skills",
        projects: "Projects",
        experience: "Experience",
        education: "Education",
        contact: "Contact",
        menu: "Open menu",
        close: "Close menu",
        theme: "Toggle theme",
        lang: "Switch language",
        skipToContent: "Skip to content"
    },
    hero: {
        available: "Open to internships, jobs and freelance projects",
        greeting: "Hi, I'm",
        subtitle: "FULL STACK WEB DEVELOPER",
        title: "Full Stack Web Developer",
        text: "I build modern, responsive and scalable web applications with clean interfaces and powerful backend systems.",
        textFr: "I build modern, responsive and scalable web applications with clean interfaces and powerful backend systems.",
        ctaProjects: "View my projects",
        ctaContact: "Contact me",
        ctaCv: "Download my CV",
        based: "Based in Fez, Morocco",
        scroll: "Scroll",
        stackLabel: "Core stack",
        cardFrontend: "Front-end",
        cardBackend: "Back-end",
        cardDatabase: "Databases"
    },
    about: {
        eyebrow: "About",
        title: "About me",
        lead: "Full Stack Web Developer",
        p1: "Full Stack Web Developer holding a Specialised Technician Diploma in Digital Development, Web Full Stack option. I'm passionate about designing and building modern, responsive web applications — from the user interface down to the API and the database.",
        p2: "I enjoy crafting clear interfaces, reliable back-end systems, well-structured REST APIs and complete e-commerce solutions. Serious, motivated, autonomous and a genuine team player, I'm looking to put my technical skills to work for a dynamic company.",
        focusTitle: "What I build",
        focus: [
            {
                title: "Modern interfaces",
                text: "React.js, Tailwind CSS and Bootstrap for fast, elegant UIs."
            },
            {
                title: "Back-end & APIs",
                text: "Laravel, PHP, Node.js and Express.js for robust REST APIs."
            },
            {
                title: "Databases",
                text: "Data modelling and management with MySQL and MongoDB."
            },
            {
                title: "E-commerce",
                text: "Catalogue, cart, authentication and product administration."
            }
        ],
        stats: [
            {
                value: "3+",
                label: "Projects built"
            },
            {
                value: "Full Stack",
                label: "Front-end & Back-end"
            },
            {
                value: "React · Laravel · Node",
                label: "Core stack"
            },
            {
                value: "MySQL · MongoDB",
                label: "Databases"
            }
        ]
    },
    skills: {
        eyebrow: "Skills",
        title: "Technologies & skills",
        text: "A complete technical foundation to build a web application end-to-end: interface, server logic, API and data.",
        categories: {
            frontend: {
                title: "Front-end",
                text: "Responsive interfaces and reusable components."
            },
            backend: {
                title: "Back-end",
                text: "Business logic, APIs and authentication."
            },
            database: {
                title: "Databases",
                text: "Relational and NoSQL data modelling."
            },
            tools: {
                title: "Tools",
                text: "Development environment and productivity."
            },
            development: {
                title: "Development",
                text: "Practices and concepts I work with."
            }
        }
    },
    projects: {
        eyebrow: "Projects",
        title: "Selected projects",
        text: "Real applications that demonstrate my ability to ship a complete product, from the front-end to the database.",
        featured: "Featured project",
        features: "Key features",
        stack: "Technologies",
        github: "GitHub",
        live: "Live demo",
        view: "View project",
        soon: "Link coming soon",
        other: "Other projects"
    },
    experience: {
        eyebrow: "Experience",
        title: "Professional experience",
        text: "A first professional experience that strengthened my rigour, organisation and sense of service.",
        responsibilities: "Responsibilities"
    },
    education: {
        eyebrow: "Education",
        title: "Education",
        text: "A path focused on digital skills, from certified office automation to full stack web development.",
        current: "Ongoing"
    },
    soft: {
        eyebrow: "Soft skills",
        title: "Professional qualities"
    },
    languages: {
        eyebrow: "Languages",
        title: "Languages"
    },
    interests: {
        eyebrow: "Interests",
        title: "Interests"
    },
    contact: {
        eyebrow: "Contact",
        title: "Let's build something together.",
        text: "Do you have a web project, a professional opportunity or simply an idea to share? Feel free to get in touch.",
        location: "Location",
        phone: "Phone",
        whatsapp: "WhatsApp",
        ctaTitle: "Let's chat on WhatsApp",
        ctaText: "The fastest way to reach me. Message me directly — I reply quickly.",
        ctaButton: "Message me on WhatsApp",
        ctaHint: "Or call me at"
    },
    footer: {
        tagline: "Full Stack Web Developer",
        navigation: "Navigation",
        contact: "Contact",
        social: "Social",
        socialSoon: "Links coming soon",
        rights: "© 2026 Anas Lagziri. All rights reserved.",
        built: "Designed and built with Next.js, React and Tailwind CSS.",
        top: "Back to top"
    }
};
const dictionaries = {
    fr,
    en
};
function getDictionary(locale) {
    return dictionaries[locale] ?? dictionaries[defaultLocale];
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/providers/SiteProvider.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "LOCALE_KEY",
    ()=>LOCALE_KEY,
    "SiteProvider",
    ()=>SiteProvider,
    "THEME_KEY",
    ()=>THEME_KEY,
    "themeInitScript",
    ()=>themeInitScript,
    "useSite",
    ()=>useSite
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$i18n$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/i18n.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature(), _s1 = __turbopack_context__.k.signature();
"use client";
;
;
const SiteContext = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createContext"])(null);
const LOCALE_KEY = "al-portfolio-locale";
const THEME_KEY = "al-portfolio-theme";
function SiteProvider({ children }) {
    _s();
    const [locale, setLocaleState] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$i18n$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["defaultLocale"]);
    const [theme, setTheme] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("dark");
    // Hydrate preferences from storage (theme class is already applied by the inline script).
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "SiteProvider.useEffect": ()=>{
            try {
                const storedLocale = window.localStorage.getItem(LOCALE_KEY);
                if (storedLocale === "fr" || storedLocale === "en") setLocaleState(storedLocale);
                setTheme(document.documentElement.classList.contains("dark") ? "dark" : "light");
            } catch  {
            /* storage unavailable */ }
        }
    }["SiteProvider.useEffect"], []);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "SiteProvider.useEffect": ()=>{
            document.documentElement.lang = locale;
        }
    }["SiteProvider.useEffect"], [
        locale
    ]);
    const setLocale = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "SiteProvider.useCallback[setLocale]": (next)=>{
            setLocaleState(next);
            try {
                window.localStorage.setItem(LOCALE_KEY, next);
            } catch  {
            /* ignore */ }
        }
    }["SiteProvider.useCallback[setLocale]"], []);
    const toggleTheme = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "SiteProvider.useCallback[toggleTheme]": ()=>{
            setTheme({
                "SiteProvider.useCallback[toggleTheme]": (prev)=>{
                    const next = prev === "dark" ? "light" : "dark";
                    const root = document.documentElement;
                    root.classList.toggle("dark", next === "dark");
                    try {
                        window.localStorage.setItem(THEME_KEY, next);
                    } catch  {
                    /* ignore */ }
                    return next;
                }
            }["SiteProvider.useCallback[toggleTheme]"]);
        }
    }["SiteProvider.useCallback[toggleTheme]"], []);
    const value = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "SiteProvider.useMemo[value]": ()=>({
                locale,
                setLocale,
                t: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$i18n$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getDictionary"])(locale),
                theme,
                toggleTheme
            })
    }["SiteProvider.useMemo[value]"], [
        locale,
        setLocale,
        theme,
        toggleTheme
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(SiteContext.Provider, {
        value: value,
        children: children
    }, void 0, false, {
        fileName: "[project]/src/components/providers/SiteProvider.tsx",
        lineNumber: 68,
        columnNumber: 10
    }, this);
}
_s(SiteProvider, "0OKodsyVoAZoVjMuGv5w0S8ANCA=");
_c = SiteProvider;
function useSite() {
    _s1();
    const ctx = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useContext"])(SiteContext);
    if (!ctx) throw new Error("useSite must be used within <SiteProvider>");
    return ctx;
}
_s1(useSite, "/dMy7t63NXD4eYACoT93CePwGrg=");
const themeInitScript = `(function(){try{var k="${THEME_KEY}";var s=localStorage.getItem(k);var d=s?s==="dark":true;document.documentElement.classList.toggle("dark",d);}catch(e){document.documentElement.classList.add("dark");}})();`;
var _c;
__turbopack_context__.k.register(_c, "SiteProvider");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=src_0lhsf-b._.js.map