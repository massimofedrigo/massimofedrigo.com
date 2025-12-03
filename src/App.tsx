import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, ExternalLink, Terminal, Shield, Cpu, Globe, Network, BookOpen, Crosshair, Lock, Activity, Server, Radio } from 'lucide-react';

// --- DATI ---
const portfolioData = {
  name: "MASSIMO FEDRIGO",
  role: "Red Team Operator & Software Engineer",
  id: "OP-7392-MF",
  location: "Sector: IT-PN",
  social: {
    github: "https://github.com/massimofedrigo",
    linkedin: "https://www.linkedin.com/in/massimo-fedrigo-33424228a/",
    mail: "mailto:massimofedrigo.dev@gmail.com"
  }
};

const stats = [
  { label: "OSCP Status", value: "In Progress", icon: <Lock size={14} className="text-red-500" /> },
  { label: "System", value: "Kali / Arch", icon: <Terminal size={14} className="text-red-500" /> },
  { label: "Network", value: "Secure", icon: <Activity size={14} className="text-red-500" /> },
];

const skills = [
  "Python Scripting", "C/C++ Exploitation", "Network Analysis", 
  "Web App Security", "Active Directory", "Reverse Engineering",
  "React / Node.js", "Docker / DevOps"
];

const projects = [
  {
    title: "SYNTHETIC_PAGES",
    type: "AI AUTOMATION",
    desc: "Automated generator utilizing LLM agents for mass content deployment.",
    link: "https://github.com/massimofedrigo/synthetic-pages",
    tech: "Python // Jinja2",
    icon: <Globe size={20} />
  },
  {
    title: "CYPHERMESH",
    type: "DECENTRALIZED INTEL",
    desc: "P2P network for secure threat intelligence sharing with trust metrics.",
    link: "https://github.com/massimofedrigo/cyphermesh",
    tech: "Flask // P2P Protocol",
    icon: <Network size={20} />
  },
  {
    title: "ALGOWIKI",
    type: "KNOWLEDGE BASE",
    desc: "Complexity analysis and cryptographic algorithm documentation.",
    link: "https://algowiki.dev",
    tech: "MkDocs // MathJax",
    icon: <BookOpen size={20} />
  },
  {
    title: "OVERDIET_ECO",
    type: "FULL STACK OPS",
    desc: "Multi-user platform with automated calculation engines.",
    link: "https://overdiet.com",
    tech: "Flutter // Symfony",
    icon: <Cpu size={20} />
  }
];

// --- COMPONENTI TACTICAL UI ---

const GridBackground = () => (
  <div className="fixed inset-0 pointer-events-none z-0">
    {/* Grid Pattern */}
    <div className="absolute inset-0 bg-[linear-gradient(to_right,#202020_1px,transparent_1px),linear-gradient(to_bottom,#202020_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] opacity-20" />
    {/* Radial Glow */}
    <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[500px] bg-red-900/10 rounded-full blur-[120px]" />
  </div>
);

const TacticalCard = ({ children, title, className = "" }: { children: React.ReactNode, title?: string, className?: string }) => (
  <div className={`relative bg-zinc-900/40 backdrop-blur-sm border border-zinc-800 hover:border-red-900/50 transition-colors group overflow-hidden ${className}`}>
    {/* Corner Markers */}
    <div className="absolute top-0 left-0 w-2 h-2 border-t border-l border-zinc-600 group-hover:border-red-500 transition-colors" />
    <div className="absolute top-0 right-0 w-2 h-2 border-t border-r border-zinc-600 group-hover:border-red-500 transition-colors" />
    <div className="absolute bottom-0 left-0 w-2 h-2 border-b border-l border-zinc-600 group-hover:border-red-500 transition-colors" />
    <div className="absolute bottom-0 right-0 w-2 h-2 border-b border-r border-zinc-600 group-hover:border-red-500 transition-colors" />
    
    {title && (
      <div className="absolute top-0 right-0 bg-zinc-900/80 border-l border-b border-zinc-800 px-3 py-1 text-[10px] uppercase tracking-widest text-zinc-500 font-mono">
        {title}
      </div>
    )}
    <div className="p-6">{children}</div>
  </div>
);

export default function Portfolio() {
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);
  if (!mounted) return null;

  return (
    <div className="min-h-screen bg-[#050505] text-zinc-300 font-sans selection:bg-red-900/30 selection:text-white overflow-x-hidden">
      <GridBackground />

      {/* TOP BAR */}
      <nav className="fixed top-0 w-full z-50 border-b border-zinc-800/50 bg-[#050505]/80 backdrop-blur-md h-14 flex items-center px-6 justify-between">
        <div className="flex items-center gap-2 text-xs font-mono tracking-widest text-red-500">
          <Radio size={14} className="animate-pulse" />
          <span>SYSTEM_ONLINE</span>
        </div>
        <div className="hidden md:flex gap-8 text-xs font-bold tracking-widest text-zinc-500">
          <a href="#projects" className="hover:text-white transition-colors">MODULES</a>
          <a href="#about" className="hover:text-white transition-colors">LOGS</a>
          <a href="#contact" className="hover:text-white transition-colors">COMMS</a>
        </div>
      </nav>

      <main className="relative z-10 pt-32 pb-20 px-6 max-w-7xl mx-auto">
        
        {/* HERO: TACTICAL DASHBOARD */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-24">
          
          {/* Main ID Card */}
          <div className="lg:col-span-2">
            <TacticalCard className="h-full flex flex-col justify-center">
              <div className="mb-4 inline-flex items-center gap-2 px-2 py-1 bg-red-500/10 border border-red-500/20 text-red-500 text-[10px] font-mono uppercase tracking-wider rounded-sm">
                <Crosshair size={12} /> Priority Target
              </div>
              <h1 className="text-5xl md:text-7xl font-bold text-white mb-4 tracking-tight">
                {portfolioData.name}
              </h1>
              <p className="text-xl text-zinc-400 max-w-xl leading-relaxed">
                <span className="text-red-500 font-mono">{'>'}</span> {portfolioData.role}
              </p>
              <p className="mt-4 text-sm text-zinc-500 font-mono">
                ID: {portfolioData.id} // LOC: {portfolioData.location}
              </p>

              <div className="mt-8 flex gap-4">
                <a href="#projects" className="px-6 py-3 bg-white text-black text-sm font-bold uppercase tracking-wide hover:bg-zinc-200 transition-colors">
                  View Loadout
                </a>
                <a href={portfolioData.social.github} target="_blank" className="px-6 py-3 border border-zinc-700 text-white text-sm font-bold uppercase tracking-wide hover:border-white transition-colors flex items-center gap-2">
                  <Github size={16} /> GitHub
                </a>
              </div>
            </TacticalCard>
          </div>

          {/* Status Sidebar */}
          <div className="space-y-6">
            <TacticalCard title="STATUS_MONITOR">
              <div className="space-y-4">
                {stats.map((stat, i) => (
                  <div key={i} className="flex justify-between items-center border-b border-zinc-800/50 pb-2 last:border-0">
                    <div className="flex items-center gap-3 text-sm text-zinc-400">
                      {stat.icon}
                      {stat.label}
                    </div>
                    <div className="text-sm font-mono text-white">{stat.value}</div>
                  </div>
                ))}
              </div>
            </TacticalCard>

            <TacticalCard title="ARSENAL">
              <div className="flex flex-wrap gap-2">
                {skills.map((skill, i) => (
                  <span key={i} className="px-2 py-1 bg-zinc-800/50 text-zinc-300 text-[10px] font-mono uppercase border border-zinc-700/50">
                    {skill}
                  </span>
                ))}
              </div>
            </TacticalCard>
          </div>
        </div>

        {/* PROJECTS GRID */}
        <section id="projects" className="mb-32">
          <div className="flex items-end justify-between mb-8 border-b border-zinc-800 pb-4">
            <h2 className="text-2xl font-bold text-white flex items-center gap-3">
              <Server className="text-red-500" size={24} /> DEPLOYED_MODULES
            </h2>
            <span className="text-xs font-mono text-zinc-600 hidden md:block">/// ACCESSING DATABASE...</span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {projects.map((proj, i) => (
              <TacticalCard key={i} className="group hover:bg-zinc-900/60">
                <div className="flex justify-between items-start mb-6">
                  <div className="p-3 bg-zinc-800 text-white rounded-sm group-hover:bg-red-600 transition-colors">
                    {proj.icon}
                  </div>
                  <a href={proj.link} target="_blank" className="text-zinc-500 hover:text-white transition-colors">
                    <ExternalLink size={20} />
                  </a>
                </div>
                
                <div className="text-[10px] font-mono text-red-500 mb-2 uppercase tracking-widest">{proj.type}</div>
                <h3 className="text-xl font-bold text-white mb-3">{proj.title}</h3>
                <p className="text-sm text-zinc-400 leading-relaxed mb-6">{proj.desc}</p>
                
                <div className="pt-4 border-t border-zinc-800/50 flex items-center gap-2 text-xs font-mono text-zinc-500">
                  <Terminal size={12} /> {proj.tech}
                </div>
              </TacticalCard>
            ))}
          </div>
        </section>

        {/* LOGS / ABOUT */}
        <section id="about" className="max-w-4xl mx-auto">
          <div className="border-l-2 border-zinc-800 pl-8 space-y-12">
            <div className="relative">
              <div className="absolute -left-[39px] top-0 w-5 h-5 bg-[#050505] border-2 border-red-500 rounded-full flex items-center justify-center">
                <div className="w-1.5 h-1.5 bg-red-500 rounded-full"></div>
              </div>
              <h3 className="text-lg font-bold text-white mb-2">CURRENT OPERATIONS</h3>
              <p className="text-zinc-400 leading-relaxed">
                Attualmente focalizzato sul conseguimento della certificazione <span className="text-white font-bold">OSCP</span> e sull'avanzamento accademico (MSc). 
                La mia metodologia combina il rigore matematico dell'ingegneria del software con la mentalità laterale del Red Teaming.
              </p>
            </div>

            <div className="relative">
              <div className="absolute -left-[39px] top-0 w-5 h-5 bg-[#050505] border-2 border-zinc-700 rounded-full"></div>
              <h3 className="text-lg font-bold text-white mb-2">PROFESSIONAL BACKGROUND</h3>
              <p className="text-zinc-400 leading-relaxed">
                Operativo come Full Stack Engineer Freelance dal 2023. Specializzato in ecosistemi complessi (Web & Mobile), progettazione API sicure e ottimizzazione delle performance.
              </p>
            </div>
          </div>
        </section>

        {/* FOOTER */}
        <footer id="contact" className="mt-32 pt-12 border-t border-zinc-900 text-center">
          <div className="flex justify-center gap-8 mb-8">
             <a href={portfolioData.social.mail} className="text-zinc-500 hover:text-red-500 transition-colors"><Mail size={24}/></a>
             <a href={portfolioData.social.linkedin} className="text-zinc-500 hover:text-red-500 transition-colors"><Linkedin size={24}/></a>
             <a href={portfolioData.social.github} className="text-zinc-500 hover:text-red-500 transition-colors"><Github size={24}/></a>
          </div>
          <div className="text-[10px] font-mono text-zinc-700 uppercase tracking-widest">
            End of Line // {new Date().getFullYear()}
          </div>
        </footer>

      </main>
    </div>
  );
}