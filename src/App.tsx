import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, ExternalLink, Terminal, Database, Shield, Code, ChevronRight, Download } from 'lucide-react';

// --- DATI ESTRATTI DAL TUO CV ---

const skills = [
  "Python", "Java", "C++", "JavaScript/TypeScript", "React & Vue.js", 
  "Flutter", "Node.js", "Symfony", "PostgreSQL", "Docker", "Machine Learning", "Cybersecurity"
];

const projects = [
  {
    title: "Synthetic Pages",
    desc: "Generatore di siti statici basato su LLM e Google Trends. Pipeline completamente automatizzata.",
    tags: ["Python", "Jinja2", "LLM API"],
    link: "https://github.com/massimofedrigo/synthetic-pages", // Inserisci link reale
    type: "AI & Automation"
  },
  {
    title: "Cyphermesh",
    desc: "Rete P2P decentralizzata per la condivisione di Threat Intelligence con sistema di reputazione.",
    tags: ["Python", "Flask", "C", "P2P"],
    link: "https://github.com/massimofedrigo/cyphermesh",
    type: "Security"
  },
  {
    title: "Algowiki.dev",
    desc: "Enciclopedia di algoritmi con analisi di complessità e dimostrazioni matematiche.",
    tags: ["Markdown", "Mkdocs", "CS Theory"],
    link: "https://algowiki.dev",
    external: true,
    type: "Education"
  },
  {
    title: "RS Coaching Platform",
    desc: "Ecosistema Web & Mobile per dietisti. App Flutter cross-platform e dashboard Vue.js.",
    tags: ["Flutter", "Node.js", "Symfony", "MySQL"],
    link: "https://rscoaching.it", 
    external: true,
    type: "Full Stack"
  }
];

const experience = [
  {
    role: "Full Stack Developer",
    company: "Freelance",
    period: "2023 - Presente",
    details: "Sviluppo ecosistemi Web/Mobile complessi (es. Overdiet, Stradellafitness). Migrazione legacy code e design API REST."
  },
  {
    role: "MSc Computational Mathematics",
    company: "Università di Trieste",
    period: "2025 - Presente",
    details: "Focus su algoritmi avanzati, ottimizzazione e modelli di Machine Learning."
  },
  {
    role: "BSc Informatica",
    company: "Università di Udine",
    period: "2021 - 2025",
    details: "Tesi su SVD randomizzato. Laurea con focus su ingegneria del software."
  }
];

// --- COMPONENTI UI ---

const Section = ({ children, id, className = "" }) => (
  <section id={id} className={`py-20 px-6 md:px-20 max-w-7xl mx-auto ${className}`}>
    {children}
  </section>
);

const Card = ({ children, delay = 0 }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.5, delay }}
    className="bg-slate-900/50 backdrop-blur-md border border-slate-800 p-6 rounded-2xl hover:border-teal-500/50 transition-colors group"
  >
    {children}
  </motion.div>
);

export default function Portfolio() {
  return (
    <div className="min-h-screen bg-[#0a0a0a] text-slate-300 font-sans selection:bg-teal-500/30 selection:text-teal-200">
      
      {/* BACKGROUND ELEMENTS */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[500px] h-[500px] bg-teal-600/10 rounded-full blur-[120px]" />
        <div className="absolute bottom-[10%] right-[-5%] w-[400px] h-[400px] bg-blue-600/10 rounded-full blur-[120px]" />
      </div>

      {/* NAVBAR */}
      <nav className="fixed top-0 w-full z-50 bg-[#0a0a0a]/80 backdrop-blur-lg border-b border-white/5">
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          <span className="font-bold text-xl text-white tracking-tighter">MF<span className="text-teal-500">.</span></span>
          <div className="flex gap-6 text-sm font-medium">
            <a href="#projects" className="hover:text-teal-400 transition-colors">Progetti</a>
            <a href="#about" className="hover:text-teal-400 transition-colors">About</a>
            <a href="#contact" className="hover:text-teal-400 transition-colors">Contatti</a>
          </div>
        </div>
      </nav>

      {/* HERO SECTION */}
      <Section className="pt-40 md:pt-60 min-h-[90vh] flex flex-col justify-center relative z-10">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="flex items-center gap-2 text-teal-500 font-mono mb-4 text-sm tracking-wide">
            <Terminal size={16} />
            <span>SOFTWARE ENGINEER & COMPUTER SCIENTIST</span>
          </div>
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 tracking-tight leading-tight">
            Massimo <br className="md:hidden"/>Fedrigo
          </h1>
          <p className="max-w-xl text-lg text-slate-400 leading-relaxed mb-8">
            Costruisco architetture backend scalabili, interfacce moderne e studio la matematica degli algoritmi. 
            Attualmente focalizzato su <span className="text-white font-medium">Computational Modelling</span> e <span className="text-white font-medium">Cybersecurity</span>.
          </p>
          
          <div className="flex flex-wrap gap-4">
            <a href="#projects" className="px-6 py-3 bg-teal-600 hover:bg-teal-500 text-white font-medium rounded-lg transition-all flex items-center gap-2">
              Vedi Lavori <ChevronRight size={18} />
            </a>
            <a href="https://github.com/massimofedrigo" target="_blank" rel="noreferrer" className="px-6 py-3 border border-slate-700 hover:border-slate-500 text-white font-medium rounded-lg transition-all flex items-center gap-2">
              <Github size={18} /> GitHub
            </a>
          </div>
        </motion.div>
      </Section>

      {/* TECH STACK (Marquee style or Grid) */}
      <div className="border-y border-white/5 bg-white/5 backdrop-blur-sm z-10 relative">
        <div className="max-w-7xl mx-auto px-6 py-8">
          <p className="text-center text-xs font-mono text-slate-500 mb-6 uppercase tracking-widest">Stack Tecnologico</p>
          <div className="flex flex-wrap justify-center gap-3 md:gap-6">
            {skills.map((skill, i) => (
              <span key={i} className="px-3 py-1 text-sm md:text-base text-slate-300 bg-slate-800/50 rounded-md border border-slate-700/50 hover:border-teal-500/30 hover:text-teal-400 transition-colors cursor-default">
                {skill}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* PROJECTS SECTION */}
      <Section id="projects">
        <div className="flex items-center justify-between mb-12">
          <h2 className="text-3xl font-bold text-white">Progetti Selezionati</h2>
          <Code className="text-teal-600 opacity-50" />
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.map((project, i) => (
            <Card key={i} delay={i * 0.1}>
              <div className="flex justify-between items-start mb-4">
                <div className="text-xs font-mono text-teal-500 mb-2">{project.type}</div>
                <div className="flex gap-3">
                  {project.link && (
                    <a href={project.link} target="_blank" rel="noreferrer" className="text-slate-400 hover:text-white transition-colors">
                      {project.external ? <ExternalLink size={20} /> : <Github size={20} />}
                    </a>
                  )}
                </div>
              </div>
              <h3 className="text-xl font-bold text-white mb-2 group-hover:text-teal-400 transition-colors">
                {project.title}
              </h3>
              <p className="text-slate-400 text-sm mb-6 leading-relaxed">
                {project.desc}
              </p>
              <div className="flex flex-wrap gap-2 mt-auto">
                {project.tags.map((tag, t) => (
                  <span key={t} className="text-xs px-2 py-1 rounded bg-slate-800 text-slate-300 font-mono">
                    {tag}
                  </span>
                ))}
              </div>
            </Card>
          ))}
        </div>
      </Section>

      {/* EXPERIENCE & EDUCATION SECTION */}
      <Section id="about" className="bg-[#0f0f0f]/50">
        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <h2 className="text-3xl font-bold text-white mb-8 flex items-center gap-3">
              <Database size={24} className="text-teal-500" /> Percorso
            </h2>
            <div className="space-y-8 border-l border-slate-800 pl-8 relative">
              {experience.map((exp, i) => (
                <div key={i} className="relative">
                  <span className="absolute -left-[37px] top-1 h-4 w-4 rounded-full bg-slate-900 border-2 border-teal-600"></span>
                  <span className="text-xs font-mono text-teal-500 block mb-1">{exp.period}</span>
                  <h4 className="text-lg font-bold text-white">{exp.role}</h4>
                  <p className="text-slate-400 text-sm mb-2">{exp.company}</p>
                  <p className="text-slate-500 text-sm">{exp.details}</p>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h2 className="text-3xl font-bold text-white mb-8 flex items-center gap-3">
              <Shield size={24} className="text-teal-500" /> Focus Attuale
            </h2>
            <Card>
              <p className="text-slate-300 leading-relaxed mb-6">
                Oltre allo sviluppo software, sto approfondendo la <strong>Cybersecurity Offensiva</strong> (preparazione OSCP) e i modelli matematici computazionali.
              </p>
              <p className="text-slate-300 leading-relaxed">
                Partecipo a sfide CTF su <strong>HackTheBox</strong> e competitive programming su <strong>Codeforces</strong>. 
                Credo fermamente che un buon ingegnere debba padroneggiare sia l'astrazione matematica che l'implementazione pratica.
              </p>
              
              <div className="mt-8 pt-8 border-t border-slate-800">
                 <h4 className="text-white font-bold mb-4">Interessi Personali</h4>
                 <div className="flex gap-4 text-slate-400 text-sm">
                    <span>📚 Lettura</span>
                    <span>🏋️ Calisthenics</span>
                    <span>🎨 Disegno</span>
                 </div>
              </div>
            </Card>
          </div>
        </div>
      </Section>

      {/* FOOTER */}
      <footer id="contact" className="py-12 border-t border-slate-800 bg-[#050505]">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-center md:text-left">
            <h3 className="text-white font-bold text-lg">Massimo Fedrigo</h3>
            <p className="text-slate-500 text-sm">Software Engineer & Computer Scientist</p>
          </div>
          
          <div className="flex gap-6">
             <a href="mailto:massimofedrigo.dev@gmail.com" className="text-slate-400 hover:text-teal-400 transition-transform hover:-translate-y-1">
               <Mail size={24} />
             </a>
             <a href="https://linkedin.com/in/massimo-fedrigo-33424228a/" target="_blank" rel="noreferrer" className="text-slate-400 hover:text-teal-400 transition-transform hover:-translate-y-1">
               <Linkedin size={24} />
             </a>
             <a href="https://github.com/massimofedrigo" target="_blank" rel="noreferrer" className="text-slate-400 hover:text-teal-400 transition-transform hover:-translate-y-1">
               <Github size={24} />
             </a>
          </div>
        </div>
        <div className="text-center text-slate-700 text-xs mt-8 font-mono">
          &copy; 2025 Massimo Fedrigo. Built with React & Tailwind.
        </div>
      </footer>
    </div>
  );
}