import React, { useState, useEffect, useRef, useLayoutEffect } from "react";

import {
  motion,
  useScroll,
  useTransform,
  useMotionValue,
  useSpring,
} from "framer-motion";

import {
  Github,
  Linkedin,
  Mail,
  ExternalLink,
  Terminal,
  Cpu,
  Shield,
  ChevronDown,
  BookOpen,
  Network,
  FileText,
  Database,
  Layers,
  Globe,
} from "lucide-react";

import {
  // Linguaggi & Core
  SiPython,
  SiCplusplus,
  SiTypescript,
  SiPhp,
  SiGnubash,
  SiDart,
  // Frontend & Mobile
  SiFlutter,
  SiVuedotjs,
  SiReact,
  // Backend & DB
  SiNodedotjs,
  SiSymfony,
  SiFlask,
  SiDjango,
  SiPostgresql,
  SiMysql,
  // Tools, Security & Data
  SiDocker,
  SiGit,
  SiLinux,
  SiKalilinux,
  SiNumpy,
  SiPandas,
  SiBurpsuite,
  SiWireshark,
} from "react-icons/si";

import { FaJava } from "react-icons/fa";

import { translations } from "./i18n";
import type { Language } from "./i18n";

// --- DATA: PERSONAL DATA (language-agnostic) ---
const portfolioData = {
  name: "Massimo Fedrigo",
  location: "Cordenons, PN (Italy)",
  social: {
    github: "https://github.com/massimofedrigo",
    linkedin: "https://www.linkedin.com/in/massimo-fedrigo-33424228a/",
    mail: "mailto:massimofedrigo.dev@gmail.com",
  },
};

// --- DATA: SKILLS (icon + tech, language-agnostic) ---
const skillTracks = [
  {
    id: "software" as const,
    icon: <Layers className="text-fuchsia-400" />,
    skills: [
      { name: "Dart", icon: <SiDart />, color: "text-blue-400" },
      { name: "Flutter", icon: <SiFlutter />, color: "text-cyan-400" },
      { name: "TypeScript", icon: <SiTypescript />, color: "text-blue-500" },
      { name: "Node.js", icon: <SiNodedotjs />, color: "text-green-500" },
      { name: "Vue.js", icon: <SiVuedotjs />, color: "text-emerald-400" },
      { name: "React", icon: <SiReact />, color: "text-cyan-300" },
      { name: "PHP", icon: <SiPhp />, color: "text-indigo-400" },
      { name: "Symfony", icon: <SiSymfony />, color: "text-white" },
      { name: "Django", icon: <SiDjango />, color: "text-emerald-700" },
      { name: "Flask", icon: <SiFlask />, color: "text-slate-300" },
    ],
  },
  {
    id: "cs" as const,
    icon: <Terminal className="text-red-400" />,
    skills: [
      { name: "Python", icon: <SiPython />, color: "text-yellow-400" },
      { name: "C / C++", icon: <SiCplusplus />, color: "text-blue-600" },
      { name: "Java", icon: <FaJava />, color: "text-red-500" },
      { name: "Assembly", icon: <Cpu />, color: "text-slate-400" },
      { name: "Kali Linux", icon: <SiKalilinux />, color: "text-blue-400" },
      { name: "Burp Suite", icon: <SiBurpsuite />, color: "text-orange-400" },
      { name: "Wireshark", icon: <SiWireshark />, color: "text-blue-300" },
      { name: "NumPy", icon: <SiNumpy />, color: "text-cyan-600" },
      { name: "Pandas", icon: <SiPandas />, color: "text-purple-300" },
    ],
  },
  {
    id: "infra" as const,
    icon: <Database className="text-cyan-400" />,
    skills: [
      { name: "Docker", icon: <SiDocker />, color: "text-blue-500" },
      { name: "Git", icon: <SiGit />, color: "text-orange-500" },
      { name: "MySQL", icon: <SiMysql />, color: "text-blue-500" },
      { name: "PostgreSQL", icon: <SiPostgresql />, color: "text-blue-300" },
      { name: "Linux Env", icon: <SiLinux />, color: "text-yellow-200" },
      { name: "Bash", icon: <SiGnubash />, color: "text-slate-200" },
    ],
  },
];

type SkillTrackId = (typeof skillTracks)[number]["id"];

// --- DATA: PROJECTS (icon + tech, language-agnostic) ---
const projects = [
  {
    id: "overdiet" as const,
    icon: <Cpu className="text-pink-400" />,
    link: "https://overdiet.com",
    tech: ["PHP", "Symfony", "Javascript", "Node.js", "Vue.js", "Dart", "Flutter"],
  },
  {
    id: "stradella" as const,
    icon: <Cpu className="text-pink-400" />,
    link: "https://stradellafitness.com",
    tech: ["PHP", "Symfony", "Javascript", "Node.js", "Vue.js", "Dart", "Flutter"],
  },
  {
    id: "syntheticPages" as const,
    icon: <Globe className="text-violet-400" />,
    link: "https://github.com/massimofedrigo/synthetic-pages",
    tech: ["Python", "Jinja2", "OpenAI API"],
  },
  {
    id: "cyphermesh" as const,
    icon: <Network className="text-blue-400" />,
    link: "https://github.com/massimofedrigo/cyphermesh",
    tech: ["Python", "Flask", "C", "P2P"],
  },
  {
    id: "algowiki" as const,
    icon: <BookOpen className="text-emerald-400" />,
    link: "https://algowiki.dev",
    tech: ["Markdown", "Mkdocs", "MathJax"],
  },
];

type ProjectId = (typeof projects)[number]["id"];

// --- COMPONENTI BASE ---

const Section = ({
  children,
  className = "",
  id = "",
}: {
  children: React.ReactNode;
  className?: string;
  id?: string;
}) => (
  <section
    id={id}
    className={`py-24 px-6 md:px-12 max-w-7xl mx-auto relative z-10 ${className}`}
  >
    {children}
  </section>
);

const GlassCard = ({
  children,
  className = "",
  hoverEffect = true,
}: {
  children: React.ReactNode;
  className?: string;
  hoverEffect?: boolean;
}) => (
  <motion.div
    whileHover={
      hoverEffect
        ? {
            y: -5,
            boxShadow: "0 20px 40px -10px rgba(124, 58, 237, 0.15)",
          }
        : {}
    }
    className={`bg-[#11112b]/60 backdrop-blur-xl border border-white/5 p-8 rounded-3xl overflow-hidden relative ${className}`}
  >
    <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
    {children}
  </motion.div>
);

const GradientText = ({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) => (
  <span
    className={`bg-clip-text text-transparent bg-gradient-to-r from-violet-400 via-fuchsia-400 to-cyan-400 ${className}`}
  >
    {children}
  </span>
);

const TypewriterEffect = ({
  words,
  typingSpeed = 100,
  deletingSpeed = 50,
  pauseTime = 1500,
}: {
  words: string[];
  typingSpeed?: number;
  deletingSpeed?: number;
  pauseTime?: number;
}) => {
  const [index, setIndex] = useState(0);
  const [subIndex, setSubIndex] = useState(0);
  const [reverse, setReverse] = useState(false);
  const [blink, setBlink] = useState(true);

  // Cursore lampeggiante
  useEffect(() => {
    const timeout2 = setTimeout(() => setBlink((prev) => !prev), 500);
    return () => clearTimeout(timeout2);
  }, [blink]);

  // Logica di scrittura
  useEffect(() => {
    if (index >= words.length) {
      setIndex(0);
      return;
    }

    if (subIndex === words[index].length + 1 && !reverse) {
      const timeout = setTimeout(() => setReverse(true), pauseTime);
      return () => clearTimeout(timeout);
    }

    if (subIndex === 0 && reverse) {
      setReverse(false);
      setIndex((prev) => (prev + 1) % words.length);
      return;
    }

    const timeout = setTimeout(
      () => {
        setSubIndex((prev) => prev + (reverse ? -1 : 1));
      },
      reverse ? deletingSpeed : typingSpeed
    );

    return () => clearTimeout(timeout);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [subIndex, index, reverse]);

  return (
    <span className="text-slate-200">
      {words[index].substring(0, subIndex)}
      <span
        className={`${
          blink ? "opacity-100" : "opacity-0"
        } text-violet-500 font-bold ml-1`}
      >
        |
      </span>
    </span>
  );
};

// --- COMPONENTI STRUTTURALI ---

const DynamicBackground = () => {
  // Motion values "grezzi"
  const rawX = useMotionValue(-200);
  const rawY = useMotionValue(-200);

  const x = useSpring(rawX, {
    stiffness: 30,
    damping: 25,
    mass: 1.5,
  });

  const y = useSpring(rawY, {
    stiffness: 30,
    damping: 25,
    mass: 1.5,
  });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const targetX = e.clientX - 200;
      const targetY = e.clientY - 200;
      rawX.set(targetX);
      rawY.set(targetY);
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [rawX, rawY]);

  return (
    <div className="fixed inset-0 z-0 pointer-events-none">
      <div className="absolute top-[-20%] left-[-10%] w-[600px] h-[600px] bg-violet-900/20 rounded-full blur-[120px]" />
      <div className="absolute bottom-[-10%] right-[-10%] w-[500px] h-[500px] bg-cyan-900/10 rounded-full blur-[100px]" />

      <motion.div
        className="absolute w-[400px] h-[400px] bg-indigo-600/10 rounded-full blur-[100px]"
        style={{ x, y }}
      />
    </div>
  );
};

const Navbar = ({
  language,
  onToggleLanguage,
}: {
  language: Language;
  onToggleLanguage: () => void;
}) => {
  const t = translations[language].navbar;

  return (
    <nav
      className="fixed top-0 w-full z-50 px-6 py-6 flex justify-between items-center max-w-7xl mx-auto left-0 right-0"
      role="navigation"
      aria-label={t.mainNav}
    >
      <a
        href="/"
        aria-label={
          language === "it"
            ? "Torna alla homepage di Massimo Fedrigo"
            : "Back to Massimo Fedrigo homepage"
        }
        className="bg-white/5 p-2 rounded-full border border-white/5 backdrop-blur-md hover:bg-white/10 transition-colors shadow-lg shadow-violet-500/10"
      >
        <img
          src="/favicon.svg"
          alt="Logo MF"
          className="w-8 h-8"
          loading="lazy"
        />
      </a>

      <div className="flex gap-4 items-center">
        <a
          href={portfolioData.social.github}
          target="_blank"
          rel="noreferrer"
          aria-label={t.github}
          className="p-2 bg-white/5 rounded-full hover:bg-white/10 hover:text-white transition-colors border border-white/5"
        >
          <Github size={20} />
        </a>
        <a
          href={portfolioData.social.linkedin}
          target="_blank"
          rel="noreferrer"
          aria-label={t.linkedin}
          className="p-2 bg-white/5 rounded-full hover:bg-white/10 hover:text-white transition-colors border border-white/5"
        >
          <Linkedin size={20} />
        </a>
        <a
          href={portfolioData.social.mail}
          aria-label={t.email}
          className="p-2 bg-violet-600/80 text-white rounded-full hover:bg-violet-500 transition-colors shadow-lg shadow-violet-500/20"
        >
          <Mail size={20} />
        </a>

        {/* Language toggle */}
        <button
          type="button"
          onClick={onToggleLanguage}
          aria-label={t.langToggleLabel}
          className="flex items-center text-xs font-mono rounded-full border border-white/10 bg-white/5 px-1 py-0.5 hover:border-violet-400 transition-colors"
        >
          <span
            className={`px-2 py-0.5 rounded-full ${
              language === "it" ? "bg-violet-600 text-white" : "text-slate-400"
            }`}
          >
            IT
          </span>
          <span
            className={`px-2 py-0.5 rounded-full ${
              language === "en" ? "bg-violet-600 text-white" : "text-slate-400"
            }`}
          >
            EN
          </span>
        </button>
      </div>
    </nav>
  );
};

const HeroSection = ({
  opacity,
  scale,
  language,
}: {
  opacity: any;
  scale: any;
  language: Language;
}) => {
  const t = translations[language].hero;

  // Riferimenti ai due bottoni CTA
  const primaryCtaRef = useRef<HTMLAnchorElement | null>(null);
  const secondaryCtaRef = useRef<HTMLAnchorElement | null>(null);
  const [ctaWidth, setCtaWidth] = useState<number | undefined>(undefined);

  // Calcola la larghezza massima dei due bottoni (solo desktop, da sm in su)
  useLayoutEffect(() => {
    if (typeof window === "undefined") return;

    // Su mobile lasciamo stare: bottoni full-width
    if (window.innerWidth < 640) {
      setCtaWidth(undefined);
      return;
    }

    const primaryWidth = primaryCtaRef.current?.offsetWidth ?? 0;
    const secondaryWidth = secondaryCtaRef.current?.offsetWidth ?? 0;
    const max = Math.max(primaryWidth, secondaryWidth);

    if (max > 0) {
      setCtaWidth(max);
    }
  }, [language]); // ricalcola quando cambia lingua

  const sharedCtaStyle = ctaWidth
    ? { width: `${ctaWidth}px` }
    : undefined;

  return (
    <Section className="min-h-screen flex flex-col justify-center items-center text-center pt-24">
      <motion.header
        style={{ opacity, scale }}
        className="space-y-8 max-w-3xl flex flex-col items-center"
      >
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-violet-950/30 border border-violet-500/30 text-violet-300 text-xs font-medium tracking-wider uppercase mb-4"
        >
          <span className="w-2 h-2 rounded-full bg-violet-400 animate-pulse" />
          {t.availability}
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="text-6xl md:text-8xl font-bold text-white tracking-tight leading-none"
        >
          {portfolioData.name.split(" ")[0]} <br />
          <GradientText>{portfolioData.name.split(" ")[1]}</GradientText>
        </motion.h1>

        <div className="text-lg md:text-2xl text-slate-400 h-8">
          <TypewriterEffect words={t.roleWords} />
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-lg md:text-xl text-slate-400 max-w-2xl mx-auto leading-relaxed mt-4"
        >
          {t.bioPrefix}
          <span className="text-white font-medium">
            {t.bioHighlight}
          </span>
          {t.bioSuffix}
        </motion.p>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="flex flex-wrap justify-center gap-4 pt-4 w-full px-4"
        >
          <a
            ref={primaryCtaRef}
            href="#projects"
            style={sharedCtaStyle}
            className="w-full sm:w-auto px-6 py-3 bg-white text-black font-bold rounded-full hover:scale-105 transition-transform flex justify-center items-center whitespace-nowrap"
          >
            {t.ctaProjects}
          </a>

          <a
            ref={secondaryCtaRef}
            href="/cv.pdf"
            download
            style={sharedCtaStyle}
            className="w-full sm:w-auto px-6 py-3 bg-violet-600 hover:bg-violet-500 text-white font-bold rounded-full hover:scale-105 transition-transform flex justify-center items-center gap-2 shadow-lg shadow-violet-900/20 whitespace-nowrap"
          >
            <FileText size={20} /> {t.ctaCv}
          </a>
        </motion.div>
      </motion.header>

      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
        className="absolute bottom-10 text-slate-500"
      >
        <a
          href="#stack"
          className="cursor-pointer hover:text-white transition-colors"
          aria-label={t.scrollDownLabel}
        >
          <ChevronDown size={24} />
        </a>
      </motion.div>
    </Section>
  );
};

const StackSection = ({ language }: { language: Language }) => {
  const t = translations[language];

  return (
    <Section id="stack">
      <div className="flex flex-col items-center mb-16 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
          {t.sections.skillsTitle}{" "}
          <span className="text-violet-500">
            {t.sections.skillsHighlight}
          </span>
        </h2>
        <div className="w-20 h-1.5 bg-gradient-to-r from-violet-500 to-cyan-500 rounded-full mb-6" />
        <p className="text-slate-400 max-w-2xl text-lg">
          {t.sections.skillsIntro}
        </p>
      </div>

      <div className="space-y-8">
        {skillTracks.map((track) => {
          const skillText = t.skills[track.id as SkillTrackId];

          return (
            <GlassCard key={track.id} className="!p-8 group" hoverEffect={false}>
              <div className="flex flex-col lg:flex-row gap-8 items-start lg:items-center">
                {/* Info Categoria */}
                <div className="lg:w-1/3 shrink-0">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="p-2.5 bg-white/5 rounded-xl border border-white/10 text-2xl">
                      {track.icon}
                    </div>
                    <h3 className="text-xl font-bold text-white">
                      {skillText.title}
                    </h3>
                  </div>
                  <p className="text-violet-400 font-mono text-xs uppercase tracking-wider mb-2">
                    {skillText.subtitle}
                  </p>
                  <p className="text-slate-400 text-sm leading-relaxed">
                    {skillText.description}
                  </p>
                </div>

                {/* Griglia Icone */}
                <div className="lg:w-2/3 flex flex-wrap gap-4">
                  {track.skills.map((skill, sIdx) => (
                    <div
                      key={sIdx}
                      className="relative group/icon flex items-center gap-3 px-4 py-3 bg-[#0a0a1a]/50 border border-white/5 rounded-xl hover:border-violet-500/30 hover:bg-violet-900/10 transition-all cursor-default"
                    >
                      <div
                        className={`text-xl text-slate-400 transition-all duration-300 group-hover/icon:${skill.color} group-hover/icon:scale-110`}
                      >
                        {skill.icon}
                      </div>
                      <span className="text-sm font-medium text-slate-300 group-hover/icon:text-white transition-colors">
                        {skill.name}
                      </span>

                      <div className="absolute inset-0 rounded-xl bg-violet-500/5 opacity-0 group-hover/icon:opacity-100 transition-opacity pointer-events-none" />
                    </div>
                  ))}
                </div>
              </div>
            </GlassCard>
          );
        })}
      </div>
    </Section>
  );
};

const ProjectsSection = ({ language }: { language: Language }) => {
  const t = translations[language];

  return (
    <Section id="projects">
      <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-4">
        <div>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            {t.sections.projectsTitle}{" "}
            <span className="text-violet-500">
              {t.sections.projectsHighlight}
            </span>
          </h2>
          <p className="text-slate-400 max-w-lg">
            {t.sections.projectsIntro}
          </p>
        </div>
        <a
          href={portfolioData.social.github}
          target="_blank"
          rel="noreferrer"
          className="flex items-center gap-2 text-violet-400 hover:text-white transition-colors"
          aria-label={t.sections.projectsGithubLink}
        >
          {t.sections.projectsGithubLink} <ExternalLink size={16} />
        </a>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {projects.map((proj) => {
          const projText = t.projects[proj.id as ProjectId];

          return (
            <GlassCard key={proj.id} className="group flex flex-col h-full">
              <div className="flex justify-between items-start mb-6">
                <div className="p-3 bg-white/5 rounded-xl border border-white/10 group-hover:border-violet-500/30 transition-colors">
                  {proj.icon}
                </div>
                <a
                  href={proj.link}
                  target="_blank"
                  rel="noreferrer"
                  className="text-slate-500 hover:text-white transition-colors"
                  aria-label={`${
                    language === "it" ? "Apri il progetto" : "Open project"
                  } ${projText.title}`}
                >
                  <ExternalLink size={20} />
                </a>
              </div>

              <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-violet-300 transition-colors">
                {projText.title}
              </h3>
              <p className="text-slate-400 text-sm leading-relaxed mb-6 flex-grow">
                {projText.desc}
              </p>

              <div className="flex flex-wrap gap-2 pt-4 border-t border-white/5">
                {proj.tech.map((tTech, k) => (
                  <span
                    key={k}
                    className="text-xs font-mono text-violet-300/80 bg-violet-900/20 px-2 py-1 rounded"
                  >
                    {tTech}
                  </span>
                ))}
              </div>
            </GlassCard>
          );
        })}
      </div>
    </Section>
  );
};

const AboutSection = ({ language }: { language: Language }) => {
  const t = translations[language];
  const about = t.about;
  const sections = t.sections;

  return (
    <Section id="about">
      <div className="grid lg:grid-cols-3 gap-12">
        {/* Left Column: Bio */}
        <div className="lg:col-span-1 space-y-6">
          <h2 className="text-3xl font-bold text-white">
            {sections.aboutTitle}
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-violet-500 to-cyan-500 rounded-full" />

          <p className="text-slate-400 leading-relaxed">
            {about.intro1Prefix}
            <span className="text-white">
              {about.intro1Highlight}
            </span>
            {about.intro1Suffix}
          </p>

          <p className="text-slate-400 leading-relaxed">
            {about.intro2}
          </p>

          <GlassCard className="mt-8 !p-6 !bg-gradient-to-br from-violet-900/20 to-transparent border-violet-500/20">
            <h4 className="flex items-center gap-2 text-white font-bold mb-2">
              <Shield size={18} className="text-emerald-400" />{" "}
              {sections.focusTitle}
            </h4>
            <p className="text-sm text-slate-400">
              {about.focus.prefix}
              <strong className="text-white">
                {about.focus.highlight1}
              </strong>
              {about.focus.middle}
              <strong className="text-white">
                {about.focus.highlight2}
              </strong>
              {about.focus.suffix}
            </p>
          </GlassCard>
        </div>

        {/* Right Column: Timeline */}
        <div className="lg:col-span-2">
          <h2 className="text-3xl font-bold text-white mb-8">
            {sections.journeyTitle}
          </h2>
          <div className="space-y-6">
            {t.experience.map((exp, i) => (
              <div
                key={i}
                className="group relative pl-8 border-l border-white/10 hover:border-violet-500/50 transition-colors pb-2"
              >
                <div className="absolute -left-[5px] top-2 w-2.5 h-2.5 rounded-full bg-slate-800 border border-slate-600 group-hover:bg-violet-500 group-hover:border-violet-400 transition-all shadow-[0_0_0_4px_rgba(3,0,20,1)]" />

                <span className="text-xs font-mono text-violet-400 mb-1 block">
                  {exp.year}
                </span>
                <h3 className="text-xl font-bold text-white">
                  {exp.role}
                </h3>
                <div className="text-sm text-slate-500 font-medium mb-2">
                  {exp.company}
                </div>
                <p className="text-slate-400 text-sm max-w-xl">
                  {exp.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Section>
  );
};

const Footer = ({ language }: { language: Language }) => {
  const t = translations[language];

  return (
    <footer className="py-8 border-t border-white/5 bg-[#01010a] text-center mt-8">
      <div className="flex justify-center gap-6 mb-6" aria-label="Social links">
        <a
          href={portfolioData.social.github}
          className="text-slate-500 hover:text-white transition-colors"
          aria-label={language === "it" ? "Profilo GitHub" : "GitHub profile"}
        >
          <Github size={20} />
        </a>
        <a
          href={portfolioData.social.linkedin}
          className="text-slate-500 hover:text-white transition-colors"
          aria-label={
            language === "it" ? "Profilo LinkedIn" : "LinkedIn profile"
          }
        >
          <Linkedin size={20} />
        </a>
        <a
          href={portfolioData.social.mail}
          className="text-slate-500 hover:text-white transition-colors"
          aria-label={language === "it" ? "Invia una email" : "Send an email"}
        >
          <Mail size={20} />
        </a>
      </div>
      <p className="text-slate-600 text-xs font-mono">
        © {new Date().getFullYear()} {portfolioData.name}.{" "}
        {t.footer.builtWith}
      </p>
    </footer>
  );
};

// --- MAIN COMPONENT ---

export default function Portfolio() {
  const { scrollYProgress } = useScroll();
  const heroOpacity = useTransform(scrollYProgress, [0, 0.2], [1, 0]);
  const heroScale = useTransform(scrollYProgress, [0, 0.2], [1, 0.95]);

  const [language, setLanguage] = useState<Language>(() => {
    if (typeof window === "undefined") {
      // SSR / durante build: fallback sicuro
      return "en";
    }

    // 1) Prima scelta: ultima lingua salvata dall'utente
    const stored = window.localStorage.getItem("lang");
    if (stored === "it" || stored === "en") {
      return stored as Language;
    }

    // 2) Se non c'è nulla in localStorage, usa lingua del browser
    const browserLang =
      navigator.language || (navigator.languages && navigator.languages[0]);

    if (browserLang) {
      const code2 = browserLang.slice(0, 2).toLowerCase();
      return code2 === "it" ? "it" : "en";
    }

    // 3) Fallback finale
    return "en";
  });

  // Sincronizza DOM + localStorage ogni volta che language cambia
  useEffect(() => {
    if (typeof window === "undefined") return;
    document.documentElement.lang = language;
    window.localStorage.setItem("lang", language);
  }, [language]);


  const handleToggleLanguage = () => {
    setLanguage((prev) => (prev === "it" ? "en" : "it"));
  };

  return (
    <div className="min-h-screen bg-[#030014] text-slate-300 font-sans overflow-x-hidden selection:bg-violet-500/30 selection:text-white">
      <DynamicBackground />
      <Navbar language={language} onToggleLanguage={handleToggleLanguage} />

      <main>
        <HeroSection
          opacity={heroOpacity}
          scale={heroScale}
          language={language}
        />
        <StackSection language={language} />
        <ProjectsSection language={language} />
        <AboutSection language={language} />
      </main>

      <Footer language={language} />
    </div>
  );
}
