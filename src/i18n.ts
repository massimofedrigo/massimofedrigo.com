export type Language = "it" | "en";

interface NavbarTexts {
  mainNav: string;
  github: string;
  linkedin: string;
  email: string;
  langToggleLabel: string;
}

interface HeroTexts {
  availability: string;
  roleWords: string[];
  bioPrefix: string;
  bioHighlight: string;
  bioSuffix: string;
  ctaProjects: string;
  ctaCv: string;
  scrollDownLabel: string;
}

interface SectionsTexts {
  skillsTitle: string;
  skillsHighlight: string;
  skillsIntro: string;
  projectsTitle: string;
  projectsHighlight: string;
  projectsIntro: string;
  projectsGithubLink: string;
  aboutTitle: string;
  journeyTitle: string;
  focusTitle: string;
}

interface SkillCategoryTexts {
  title: string;
  subtitle: string;
  description: string;
}

interface SkillsTexts {
  software: SkillCategoryTexts;
  cs: SkillCategoryTexts;
  infra: SkillCategoryTexts;
}

interface ProjectTexts {
  title: string;
  desc: string;
}

interface ProjectsTexts {
  overdiet: ProjectTexts;
  stradella: ProjectTexts;
  syntheticPages: ProjectTexts;
  cyphermesh: ProjectTexts;
  algowiki: ProjectTexts;
}

interface AboutFocusTexts {
  prefix: string;
  highlight1: string;
  middle: string;
  highlight2: string;
  suffix: string;
}

interface AboutTexts {
  intro1Prefix: string;
  intro1Highlight: string;
  intro1Suffix: string;
  intro2: string;
  focus: AboutFocusTexts;
}

export interface ExperienceEntry {
  year: string;
  role: string;
  company: string;
  desc: string;
}

interface FooterTexts {
  builtWith: string;
}

export interface I18nSchema {
  navbar: NavbarTexts;
  hero: HeroTexts;
  sections: SectionsTexts;
  skills: SkillsTexts;
  projects: ProjectsTexts;
  about: AboutTexts;
  experience: ExperienceEntry[];
  footer: FooterTexts;
}

export const translations: Record<Language, I18nSchema> = {
  it: {
    navbar: {
      mainNav: "Navigazione principale",
      github: "Apri il profilo GitHub",
      linkedin: "Apri il profilo LinkedIn",
      email: "Invia una email",
      langToggleLabel: "Cambia lingua",
    },
    hero: {
      availability: "Disponibile",
      roleWords: [
        "Computer Scientist",
        "Full Stack Developer",
        "Cybersecurity Enthusiast",
        "Matematica Computazionale",
      ],
      bioPrefix: "Trasformo complessi problemi matematici in ",
      bioHighlight: "software elegante e sicuro",
      bioSuffix: ".",
      ctaProjects: "Vedi progetti",
      ctaCv: "Scarica CV",
      scrollDownLabel: "Vai alla sezione competenze tecniche",
    },
    sections: {
      skillsTitle: "Competenze",
      skillsHighlight: "Tecniche",
      skillsIntro:
        "Profilo ibrido che unisce ingegneria del software moderna e solide basi di Computer Science, con esperienza su progetti reali in produzione.",
      projectsTitle: "Progetti",
      projectsHighlight: "Rilevanti",
      projectsIntro:
        "Una selezione di lavori che spaziano dal web development alla sicurezza, con focus su prodotti concreti e codice pronto per l’ambiente di produzione.",
      projectsGithubLink: "Vedi tutto su GitHub",
      aboutTitle: "Chi sono",
      journeyTitle: "Percorso",
      focusTitle: "Focus attuale",
    },
    skills: {
      software: {
        title: "Software Engineering & Product",
        subtitle: "Sviluppo Full Stack Web & Mobile",
        description:
          "Lo stack produttivo che utilizzo per costruire piattaforme scalabili, da app mobile cross-platform a backend complessi.",
      },
      cs: {
        title: "Computer Science & Offensive Security",
        subtitle: "Basso livello, Algoritmi e Pentesting",
        description:
          "Il lato accademico e offensivo. Dal calcolo numerico ad alte prestazioni all'analisi delle vulnerabilità.",
      },
      infra: {
        title: "Infrastruttura & Ecosistema",
        subtitle: "DevOps, Database e Strumenti",
        description:
          "Le fondamenta che garantiscono deployment, persistenza dei dati e versionamento del codice.",
      },
    },
    projects: {
      overdiet: {
        title: "Overdiet",
        desc: "Piattaforma Web & Mobile multi-utente per la gestione automatizzata di piani alimentari e protocolli nutrizionali, pensata per studi e professionisti del settore fitness.",
      },
      stradella: {
        title: "Stradella Fitness",
        desc: "Soluzione Web & Mobile dedicata a un singolo brand fitness per la gestione strutturata di piani alimentari, esercizi e percorsi personalizzati dei clienti.",
      },
      syntheticPages: {
        title: "Synthetic Pages",
        desc: "Generatore automatizzato di siti statici che sfrutta LLM e trend di ricerca Google per produrre contenuti SEO-oriented a partire da template dinamici.",
      },
      cyphermesh: {
        title: "Cyphermesh",
        desc: "Rete P2P decentralizzata per la condivisione di Threat Intelligence con sistema di trust e reputazione tra nodi.",
      },
      algowiki: {
        title: "AlgoWiki",
        desc: "Enciclopedia didattica di algoritmi con analisi di complessità, pseudocodice e dimostrazioni, pensata per studenti e sviluppatori che vogliono consolidare la teoria.",
      },
    },
    about: {
      intro1Prefix: "Sono un ",
      intro1Highlight: "Computer Scientist",
      intro1Suffix: " con una forte passione per la matematica applicata.",
      intro2:
        "Mi distinguo per un approccio ibrido: scrivo codice pulito e manutenibile (Ingegneria del Software) e capisco profondamente la teoria sottostante (Computer Science).",
      focus: {
        prefix: "Sto preparando la certificazione offensiva ",
        highlight1: "OSCP",
        middle: " e completando la magistrale in ",
        highlight2: "Computational Mathematics",
        suffix: ".",
      },
    },
    experience: [
      {
        year: "2025 - Presente",
        role: "MSc Computational Mathematics",
        company: "Università di Trieste",
        desc: "Specializzazione in ottimizzazione numerica, machine learning e modellazione stocastica.",
      },
      {
        year: "2023 - Presente",
        role: "Full Stack Developer Freelance",
        company: "Progetti Vari",
        desc: "Sviluppo di piattaforme complesse come Overdiet e Stradella Fitness. Migrazione legacy code, API Design, architetture backend e integrazione Mobile.",
      },
      {
        year: "2021 - 2025",
        role: "BSc Informatica",
        company: "Università di Udine",
        desc: 'Laurea triennale. Tesi: "Algoritmo per il calcolo randomizzato della Singular Value Decomposition (SVD)".',
      },
    ],
    footer: {
      builtWith: "Realizzato con React, Tailwind & Framer Motion.",
    },
  },
  en: {
    navbar: {
      mainNav: "Main navigation",
      github: "Open GitHub profile",
      linkedin: "Open LinkedIn profile",
      email: "Send an email",
      langToggleLabel: "Switch language",
    },
    hero: {
      availability: "Available",
      roleWords: [
        "Computer Scientist",
        "Full Stack Developer",
        "Cybersecurity Enthusiast",
        "Computational Mathematics",
      ],
      bioPrefix: "I turn complex mathematical problems into ",
      bioHighlight: "elegant and secure software",
      bioSuffix: ".",
      ctaProjects: "View projects",
      ctaCv: "Download CV",
      scrollDownLabel: "Go to technical skills section",
    },
    sections: {
      skillsTitle: "Technical",
      skillsHighlight: "Skills",
      skillsIntro:
        "Hybrid profile that combines modern software engineering with solid computer science foundations, built on real-world production projects.",
      projectsTitle: "Selected",
      projectsHighlight: "Projects",
      projectsIntro:
        "A selection of work ranging from web development to security, focused on concrete products and production-ready code.",
      projectsGithubLink: "View all on GitHub",
      aboutTitle: "About",
      journeyTitle: "Journey",
      focusTitle: "Current focus",
    },
    skills: {
      software: {
        title: "Software Engineering & Product",
        subtitle: "Full Stack Web & Mobile Development",
        description:
          "The productive stack I use to build scalable platforms, from cross-platform mobile apps to complex backend systems.",
      },
      cs: {
        title: "Computer Science & Offensive Security",
        subtitle: "Low-level, Algorithms and Pentesting",
        description:
          "The academic and offensive side: from high-performance numerical computing to vulnerability analysis and ethical hacking.",
      },
      infra: {
        title: "Infrastructure & Ecosystem",
        subtitle: "DevOps, Databases and Tooling",
        description:
          "The foundations that guarantee deployment, data persistence and code versioning in real environments.",
      },
    },
    projects: {
      overdiet: {
        title: "Overdiet",
        desc: "Multi-user Web & Mobile platform for automated management of nutrition plans and protocols, designed for fitness professionals and studios.",
      },
      stradella: {
        title: "Stradella Fitness",
        desc: "Web & Mobile solution dedicated to a single fitness brand, managing structured nutrition plans, workouts and personalized client journeys.",
      },
      syntheticPages: {
        title: "Synthetic Pages",
        desc: "Automated static site generator leveraging LLMs and Google search trends to produce SEO-oriented content from dynamic templates.",
      },
      cyphermesh: {
        title: "Cyphermesh",
        desc: "Decentralized P2P network for sharing Threat Intelligence, with a trust and reputation system between nodes.",
      },
      algowiki: {
        title: "AlgoWiki",
        desc: "Didactic encyclopedia of algorithms with complexity analysis, pseudocode and proofs, for students and developers who want to strengthen theory.",
      },
    },
    about: {
      intro1Prefix: "I am a ",
      intro1Highlight: "Computer Scientist",
      intro1Suffix:
        " with a strong passion for applied mathematics.",
      intro2:
        "I stand out for a hybrid approach: I write clean, maintainable production code (Software Engineering) and deeply understand the underlying theory (Computer Science).",
      focus: {
        prefix: "I am preparing for the offensive certification ",
        highlight1: "OSCP",
        middle: " and completing my MSc in ",
        highlight2: "Computational Mathematics",
        suffix: ".",
      },
    },
    experience: [
      {
        year: "2025 - Present",
        role: "MSc Computational Mathematics",
        company: "University of Trieste",
        desc: "Specialization in numerical optimization, machine learning and stochastic modelling.",
      },
      {
        year: "2023 - Present",
        role: "Full Stack Developer (Freelance)",
        company: "Various Projects",
        desc: "End-to-end development of platforms like Overdiet and Stradella Fitness. Legacy code migration, API design, backend architectures and mobile integration.",
      },
      {
        year: "2021 - 2025",
        role: "BSc Computer Science",
        company: "University of Udine",
        desc: 'Bachelor’s degree. Thesis: "Randomized Algorithm for the Computation of the Singular Value Decomposition (SVD)".',
      },
    ],
    footer: {
      builtWith: "Built with React, Tailwind & Framer Motion.",
    },
  },
};
