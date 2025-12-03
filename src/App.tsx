import React, { useState, useEffect } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

// --- ICONE ---
import { 
  Github, Linkedin, Mail, ExternalLink, 
  Terminal, Cpu, Shield, ChevronDown, 
  Code2, BookOpen, Network, FileText, 
  Database, Layers, Globe 
} from 'lucide-react';

import { 
  // Linguaggi & Core
  SiPython, SiCplusplus, SiTypescript, SiPhp, SiGnubash, SiDart,
  // Frontend & Mobile
  SiFlutter, SiVuedotjs, SiReact, SiTailwindcss, SiBootstrap, 
  // Backend & DB
  SiNodedotjs, SiSymfony, SiFlask, SiDjango, SiPostgresql, SiMysql, 
  // Tools, Security & Data
  SiDocker, SiGit, SiLinux, SiKalilinux, SiNumpy, SiPandas, 
  SiBurpsuite, SiWireshark 
} from "react-icons/si";

import { FaJava } from "react-icons/fa";

// --- DATI PERSONALI ---
const portfolioData = {
  name: "Massimo Fedrigo",
  location: "Cordenons, PN (Italy)",
  bio: "Sviluppo architetture software scalabili e studio la matematica dietro gli algoritmi complessi. Attualmente focalizzato su Computational Modelling e Cybersecurity Offensiva.",
  social: {
    github: "https://github.com/massimofedrigo",
    linkedin: "https://www.linkedin.com/in/massimo-fedrigo-33424228a/",
    mail: "mailto:massimofedrigo.dev@gmail.com"
  }
};

// --- DATA: SKILLS (Horizontal Tracks) ---
const skillTracks = [
  {
    title: "Software Engineering & Product",
    subtitle: "Sviluppo Full Stack Web & Mobile",
    icon: <Layers className="text-fuchsia-400" />,
    description: "Lo stack produttivo che utilizzo per costruire piattaforme scalabili, da app mobile cross-platform a backend complessi.",
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
      { name: "Flask", icon: <SiFlask />, color: "text-slate-300" }
    ]
  },
  {
    title: "Computer Science & Offensive Security",
    subtitle: "Basso livello, Algoritmi e Pentesting",
    icon: <Terminal className="text-red-400" />,
    description: "Il lato accademico e offensivo. Dal calcolo numerico ad alte prestazioni all'analisi delle vulnerabilità.",
    skills: [
      { name: "Python", icon: <SiPython />, color: "text-yellow-400" },
      { name: "C / C++", icon: <SiCplusplus />, color: "text-blue-600" },
      { name: "Java", icon: <FaJava />, color: "text-red-500" },
      { name: "Assembly", icon: <Cpu />, color: "text-slate-400" },
      { name: "Kali Linux", icon: <SiKalilinux />, color: "text-blue-400" },
      { name: "Burp Suite", icon: <SiBurpsuite />, color: "text-orange-400" },
      { name: "Wireshark", icon: <SiWireshark />, color: "text-blue-300" },
      { name: "NumPy", icon: <SiNumpy />, color: "text-cyan-600" },
      { name: "Pandas", icon: <SiPandas />, color: "text-purple-300" }
    ]
  },
  {
    title: "Infrastructure & Ecosystem",
    subtitle: "DevOps, Database e Strumenti",
    icon: <Database className="text-cyan-400" />,
    description: "Le fondamenta che garantiscono deployment, persistenza dei dati e versionamento del codice.",
    skills: [
      { name: "Docker", icon: <SiDocker />, color: "text-blue-500" },
      { name: "Git", icon: <SiGit />, color: "text-orange-500" },
      { name: "MySQL", icon: <SiMysql />, color: "text-blue-500" },
      { name: "PostgreSQL", icon: <SiPostgresql />, color: "text-blue-300" },
      { name: "Linux Env", icon: <SiLinux />, color: "text-yellow-200" },
      { name: "Bash", icon: <SiGnubash />, color: "text-slate-200" }
    ]
  }
];

// --- DATA: PROJECTS ---
const projects = [
  {
    title: "Overdiet",
    desc: "Piattaforma Web & Mobile multiutente per la gestione di piani alimentari automatizzati.",
    tech: ["PHP", "Symfony", "Javascript", "Node.js", "VUE.js", "Dart", "Flutter"],
    link: "https://overdiet.com",
    icon: <Cpu className="text-pink-400" />
  },
  {
    title: "Stradella Fitness",
    desc: "Piattaforma Web & Mobile monoutente per la gestione di piani alimentari automatizzati.",
    tech: ["PHP", "Symfony", "Javascript", "Node.js", "VUE.js", "Dart", "Flutter"],
    link: "https://stradellafitness.com",
    icon: <Cpu className="text-pink-400" />
  },
  {
    title: "Synthetic Pages",
    desc: "Generatore automatizzato di siti statici basato su LLM e trend di ricerca Google.",
    tech: ["Python", "Jinja2", "OpenAI API"],
    link: "https://github.com/massimofedrigo/synthetic-pages",
    icon: <Globe className="text-violet-400" />
  },
  {
    title: "Cyphermesh",
    desc: "Rete P2P decentralizzata per la condivisione di Threat Intelligence con trust system.",
    tech: ["Python", "Flask", "C", "P2P"],
    link: "https://github.com/massimofedrigo/cyphermesh",
    icon: <Network className="text-blue-400" />
  },
  {
    title: "Algowiki.dev",
    desc: "Enciclopedia didattica di algoritmi con analisi di complessità e dimostrazioni.",
    tech: ["Markdown", "Mkdocs", "MathJax"],
    link: "https://algowiki.dev",
    icon: <BookOpen className="text-emerald-400" />
  }
];

// --- DATA: EXPERIENCE ---
const experience = [
  {
    year: "2023 - Presente",
    role: "Full Stack Developer Freelance",
    company: "Progetti Vari",
    desc: "Sviluppo di piattaforme complesse come Overdiet e Stradella Fitness. Migrazione legacy code, API Design e Mobile App development."
  },
  {
    year: "2025 - Presente",
    role: "MSc Computational Mathematics",
    company: "Università di Trieste",
    desc: "Specializzazione in ottimizzazione numerica, machine learning e modellazione stocastica."
  },
  {
    year: "2021 - 2025",
    role: "BSc Informatica",
    company: "Università di Udine",
    desc: "Laurea triennale. Tesi: 'Algoritmo per il calcolo randomizzato della Singular Value Decomposition (SVD)'."
  }
];

// --- COMPONENTI UI ---

const Section = ({ children, className = "", id = "" }) => (
  <section id={id} className={`py-24 px-6 md:px-12 max-w-7xl mx-auto relative z-10 ${className}`}>
    {children}
  </section>
);

const GlassCard = ({ children, className = "", hoverEffect = true }) => (
  <motion.div 
    whileHover={hoverEffect ? { y: -5, boxShadow: "0 20px 40px -10px rgba(124, 58, 237, 0.15)" } : {}}
    className={`bg-[#11112b]/60 backdrop-blur-xl border border-white/5 p-8 rounded-3xl overflow-hidden relative ${className}`}
  >
    <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
    {children}
  </motion.div>
);

const GradientText = ({ children, className = "" }) => (
  <span className={`bg-clip-text text-transparent bg-gradient-to-r from-violet-400 via-fuchsia-400 to-cyan-400 ${className}`}>
    {children}
  </span>
);

// --- COMPONENTE: Typewriter Effect ---
const TypewriterEffect = ({ words }) => {
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
      setTimeout(() => setReverse(true), 1500);
      return;
    }

    if (subIndex === 0 && reverse) {
      setReverse(false);
      setIndex((prev) => (prev + 1) % words.length);
      return;
    }

    const timeout = setTimeout(() => {
      setSubIndex((prev) => prev + (reverse ? -1 : 1));
    }, reverse ? 50 : 100);

    return () => clearTimeout(timeout);
  }, [subIndex, index, reverse, words]);

  return (
    <span className="text-slate-200">
      {words[index].substring(0, subIndex)}
      <span className={`${blink ? "opacity-100" : "opacity-0"} text-violet-500 font-bold ml-1`}>|</span>
    </span>
  );
};

// --- MAIN COMPONENT ---
export default function Portfolio() {
  const { scrollYProgress } = useScroll();
  const opacity = useTransform(scrollYProgress, [0, 0.2], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.2], [1, 0.95]);

  // Background blobs animation
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  useEffect(() => {
    const handleMouseMove = (e) => setMousePosition({ x: e.clientX, y: e.clientY });
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <div className="min-h-screen bg-[#030014] text-slate-300 font-sans overflow-x-hidden selection:bg-violet-500/30 selection:text-white">
      
      {/* DYNAMIC BACKGROUND */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <div className="absolute top-[-20%] left-[-10%] w-[600px] h-[600px] bg-violet-900/20 rounded-full blur-[120px]" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[500px] h-[500px] bg-cyan-900/10 rounded-full blur-[100px]" />
        
        <motion.div 
          className="absolute w-[400px] h-[400px] bg-indigo-600/10 rounded-full blur-[100px]"
          animate={{ x: mousePosition.x - 200, y: mousePosition.y - 200 }}
          transition={{ type: "spring", damping: 30, stiffness: 50 }}
        />
      </div>

      {/* NAVBAR */}
      <nav className="fixed top-0 w-full z-50 px-6 py-6 flex justify-between items-center max-w-7xl mx-auto left-0 right-0">
        
        {/* Favicon Logo */}
        <a href="#" className="bg-white/5 p-2 rounded-full border border-white/5 backdrop-blur-md hover:bg-white/10 transition-colors shadow-lg shadow-violet-500/10">
          <img src="/favicon.svg" alt="MF Logo" className="w-8 h-8" />
        </a>

        <div className="flex gap-4">
          <a href={portfolioData.social.github} target="_blank" rel="noreferrer" className="p-2 bg-white/5 rounded-full hover:bg-white/10 hover:text-white transition-colors border border-white/5"><Github size={20}/></a>
          <a href={portfolioData.social.linkedin} target="_blank" rel="noreferrer" className="p-2 bg-white/5 rounded-full hover:bg-white/10 hover:text-white transition-colors border border-white/5"><Linkedin size={20}/></a>
          <a href={portfolioData.social.mail} className="p-2 bg-violet-600/80 text-white rounded-full hover:bg-violet-500 transition-colors shadow-lg shadow-violet-500/20"><Mail size={20}/></a>
        </div>
      </nav>

      {/* HERO SECTION */}
      <Section className="min-h-screen flex flex-col justify-center items-center text-center pt-20">
        <motion.div style={{ opacity, scale }} className="space-y-8 max-w-3xl flex flex-col items-center">
          <motion.div 
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-violet-950/30 border border-violet-500/30 text-violet-300 text-xs font-medium tracking-wider uppercase mb-4"
          >
            <span className="w-2 h-2 rounded-full bg-violet-400 animate-pulse"></span>
            Disponibile
          </motion.div>

          <motion.h1 
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.1 }}
            className="text-6xl md:text-8xl font-bold text-white tracking-tight leading-none"
          >
            Massimo <br />
            <GradientText>Fedrigo</GradientText>
          </motion.h1>

          {/* Typewriter Effect */}
          <div className="text-lg md:text-2xl text-slate-400 h-8">
            <TypewriterEffect words={[
              "Computer Scientist", 
              "Software Engineer", 
              "Cybersecurity Enthusiast", 
              "Math Geek"
            ]} />
          </div>

          <motion.p 
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.8, delay: 0.2 }}
            className="text-lg md:text-xl text-slate-400 max-w-2xl mx-auto leading-relaxed mt-4"
          >
            Trasformo complessi problemi matematici in <span className="text-white font-medium">software elegante e sicuro</span>.
          </motion.p>
          
          <motion.div 
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.4 }}
            className="flex flex-wrap justify-center gap-4 pt-4 w-full px-4"
          >
             <a 
               href="#projects" 
               className="w-full sm:w-44 px-6 py-3 bg-white text-black font-bold rounded-full hover:scale-105 transition-transform flex justify-center items-center"
             >
               Vedi Progetti
             </a>
             
             <a 
               href="/cv.pdf" 
               download
               className="w-full sm:w-44 px-6 py-3 bg-violet-600 hover:bg-violet-500 text-white font-bold rounded-full hover:scale-105 transition-transform flex justify-center items-center gap-2 shadow-lg shadow-violet-900/20"
             >
               <FileText size={20} /> Scarica CV
             </a>
          </motion.div>
        </motion.div>
        
        <motion.div 
          animate={{ y: [0, 10, 0] }} transition={{ repeat: Infinity, duration: 2 }}
          className="absolute bottom-10 text-slate-500"
        >
          <a href="#stack" className="cursor-pointer hover:text-white transition-colors">
            <ChevronDown size={24} />
          </a>
        </motion.div>
      </Section>

      {/* STACK SECTION (HORIZONTAL TRACKS) */}
      <Section id="stack">
        <div className="flex flex-col items-center mb-16 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Competenze <span className="text-violet-500">Tecniche</span>
          </h2>
          <div className="w-20 h-1.5 bg-gradient-to-r from-violet-500 to-cyan-500 rounded-full mb-6"></div>
          <p className="text-slate-400 max-w-2xl text-lg">
            Un profilo ibrido che unisce l'ingegneria del software moderna con solide basi di computer science.
          </p>
        </div>

        <div className="space-y-8">
          {skillTracks.map((track, idx) => (
            <GlassCard key={idx} className="!p-8 group" hoverEffect={false}>
              <div className="flex flex-col lg:flex-row gap-8 items-start lg:items-center">
                
                {/* Info Categoria */}
                <div className="lg:w-1/3 shrink-0">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="p-2.5 bg-white/5 rounded-xl border border-white/10 text-2xl">
                      {track.icon}
                    </div>
                    <h3 className="text-xl font-bold text-white">{track.title}</h3>
                  </div>
                  <p className="text-violet-400 font-mono text-xs uppercase tracking-wider mb-2">
                    {track.subtitle}
                  </p>
                  <p className="text-slate-400 text-sm leading-relaxed">
                    {track.description}
                  </p>
                </div>

                {/* Griglia Icone */}
                <div className="lg:w-2/3 flex flex-wrap gap-4">
                  {track.skills.map((skill, sIdx) => (
                    <div 
                      key={sIdx} 
                      className="relative group/icon flex items-center gap-3 px-4 py-3 bg-[#0a0a1a]/50 border border-white/5 rounded-xl hover:border-violet-500/30 hover:bg-violet-900/10 transition-all cursor-default"
                    >
                      <div className={`text-xl text-slate-400 transition-colors duration-300 group-hover/icon:${skill.color} group-hover/icon:scale-110`}>
                        {skill.icon}
                      </div>
                      <span className="text-sm font-medium text-slate-300 group-hover/icon:text-white transition-colors">
                        {skill.name}
                      </span>
                      
                      {/* Glow effect on hover */}
                      <div className="absolute inset-0 rounded-xl bg-violet-500/5 opacity-0 group-hover/icon:opacity-100 transition-opacity pointer-events-none" />
                    </div>
                  ))}
                </div>

              </div>
            </GlassCard>
          ))}
        </div>
      </Section>

      {/* PROJECTS SECTION */}
      <Section id="projects">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-4">
          <div>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Progetti <span className="text-violet-500">Rilevanti</span></h2>
            <p className="text-slate-400 max-w-lg">Una selezione di lavori che spaziano dal web development alla sicurezza informatica e algoritmica.</p>
          </div>
          <a href="https://github.com/massimofedrigo" target="_blank" rel="noreferrer" className="flex items-center gap-2 text-violet-400 hover:text-white transition-colors">
            Vedi tutto su GitHub <ExternalLink size={16} />
          </a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.map((proj, i) => (
            <GlassCard key={i} className="group flex flex-col h-full">
              <div className="flex justify-between items-start mb-6">
                <div className="p-3 bg-white/5 rounded-xl border border-white/10 group-hover:border-violet-500/30 transition-colors">
                  {proj.icon}
                </div>
                <a href={proj.link} target="_blank" rel="noreferrer" className="text-slate-500 hover:text-white transition-colors">
                  <ExternalLink size={20} />
                </a>
              </div>
              
              <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-violet-300 transition-colors">{proj.title}</h3>
              <p className="text-slate-400 text-sm leading-relaxed mb-6 flex-grow">{proj.desc}</p>
              
              <div className="flex flex-wrap gap-2 pt-4 border-t border-white/5">
                {proj.tech.map((t, k) => (
                  <span key={k} className="text-xs font-mono text-violet-300/80 bg-violet-900/20 px-2 py-1 rounded">
                    {t}
                  </span>
                ))}
              </div>
            </GlassCard>
          ))}
        </div>
      </Section>

      {/* ABOUT & TIMELINE SECTION */}
      <Section id="about">
        <div className="grid lg:grid-cols-3 gap-12">
          
          {/* Left Column: Bio */}
          <div className="lg:col-span-1 space-y-6">
            <h2 className="text-3xl font-bold text-white">Chi Sono</h2>
            <div className="w-16 h-1 bg-gradient-to-r from-violet-500 to-cyan-500 rounded-full"></div>
            <p className="text-slate-400 leading-relaxed">
              Sono un <span className="text-white">Computer Scientist</span> con una forte passione per la matematica applicata. 
            </p>
            <p className="text-slate-400 leading-relaxed">
              Mi distinguo per un approccio ibrido: so scrivere codice di produzione pulito (Ingegneria del Software) ma capisco profondamente la teoria sottostante (Computer Science).
            </p>
            
            <GlassCard className="mt-8 !p-6 !bg-gradient-to-br from-violet-900/20 to-transparent border-violet-500/20">
              <h4 className="flex items-center gap-2 text-white font-bold mb-2">
                <Shield size={18} className="text-emerald-400" /> Focus Attuale
              </h4>
              <p className="text-sm text-slate-400">
                Sto preparando la certificazione offensiva <strong className="text-white">OSCP</strong> e completando la magistrale in <strong className="text-white">Computational Mathematics</strong>.
              </p>
            </GlassCard>
          </div>

          {/* Right Column: Timeline */}
          <div className="lg:col-span-2">
            <h2 className="text-3xl font-bold text-white mb-8">Percorso</h2>
            <div className="space-y-6">
              {experience.map((exp, i) => (
                <div key={i} className="group relative pl-8 border-l border-white/10 hover:border-violet-500/50 transition-colors pb-2">
                  <div className="absolute -left-[5px] top-2 w-2.5 h-2.5 rounded-full bg-slate-800 border border-slate-600 group-hover:bg-violet-500 group-hover:border-violet-400 transition-all shadow-[0_0_0_4px_rgba(3,0,20,1)]"></div>
                  
                  <span className="text-xs font-mono text-violet-400 mb-1 block">{exp.year}</span>
                  <h3 className="text-xl font-bold text-white">{exp.role}</h3>
                  <div className="text-sm text-slate-500 font-medium mb-2">{exp.company}</div>
                  <p className="text-slate-400 text-sm max-w-xl">{exp.desc}</p>
                </div>
              ))}
            </div>
          </div>

        </div>
      </Section>

      {/* FOOTER */}
      <footer className="py-8 border-t border-white/5 bg-[#01010a] text-center">
        <div className="flex justify-center gap-6 mb-6">
             <a href={portfolioData.social.github} className="text-slate-500 hover:text-white transition-colors"><Github size={20}/></a>
             <a href={portfolioData.social.linkedin} className="text-slate-500 hover:text-white transition-colors"><Linkedin size={20}/></a>
             <a href={portfolioData.social.mail} className="text-slate-500 hover:text-white transition-colors"><Mail size={20}/></a>
        </div>
        <p className="text-slate-600 text-xs font-mono">
          © 2025 Massimo Fedrigo. Built with React, Tailwind & Framer Motion.
        </p>
      </footer>

    </div>
  );
}