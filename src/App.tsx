import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, ExternalLink, Terminal, Shield, Cpu, Globe, Network, BookOpen, ChevronRight, Hash, Command } from 'lucide-react';

// --- DATI ---
const portfolioData = {
  name: "Massimo Fedrigo",
  role: "Software Engineer & Security Researcher",
  location: "Cordenons, PN (Italy)",
  social: {
    github: "https://github.com/massimofedrigo",
    linkedin: "https://www.linkedin.com/in/massimo-fedrigo-33424228a/",
    mail: "mailto:massimofedrigo.dev@gmail.com"
  }
};

const skills = [
  "Python", "C/C++", "Assembly x86", "Bash/Shell", 
  "React", "Node.js", "Cryptography", "Network Security", "OSCP Prep"
];

const projects = [
  {
    title: "Synthetic_Pages",
    type: "AI / Automation",
    desc: "Automated static site generator via LLM & Google Trends analysis.",
    link: "https://github.com/massimofedrigo/synthetic-pages",
    icon: <Globe size={18} />
  },
  {
    title: "Cyphermesh",
    type: "P2P / Security",
    desc: "Decentralized P2P threat intelligence sharing network.",
    link: "https://github.com/massimofedrigo/cyphermesh",
    icon: <Network size={18} />
  },
  {
    title: "AlgoWiki",
    type: "Education / CS",
    desc: "Algorithm encyclopedia with complexity analysis.",
    link: "https://algowiki.dev",
    icon: <BookOpen size={18} />
  },
  {
    title: "Overdiet_Platform",
    type: "Full Stack",
    desc: "Complex web/mobile ecosystem for diet management.",
    link: "https://overdiet.com",
    icon: <Cpu size={18} />
  }
];

// --- COMPONENTI UI HACKER ---

const Scanline = () => (
  <div className="fixed inset-0 pointer-events-none z-50 bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.25)_50%),linear-gradient(90deg,rgba(255,0,0,0.06),rgba(0,255,0,0.02),rgba(0,0,255,0.06))] bg-[length:100%_4px,6px_100%] opacity-20" />
);

const TerminalWindow = ({ children, title = "bash" }: { children: React.ReactNode, title?: string }) => (
  <div className="w-full max-w-4xl bg-black border border-green-900 rounded-sm overflow-hidden shadow-[0_0_20px_rgba(34,197,94,0.1)] font-mono mb-12">
    <div className="bg-green-900/20 border-b border-green-900/50 px-4 py-1 flex items-center justify-between">
      <div className="flex gap-2">
        <div className="w-3 h-3 rounded-full bg-red-900/50"></div>
        <div className="w-3 h-3 rounded-full bg-yellow-900/50"></div>
        <div className="w-3 h-3 rounded-full bg-green-900/50"></div>
      </div>
      <div className="text-green-700 text-xs tracking-widest uppercase select-none">{title}</div>
      <div className="w-10"></div>
    </div>
    <div className="p-6 text-green-500">
      {children}
    </div>
  </div>
);

const Typewriter = ({ text, delay = 0 }: { text: string, delay?: number }) => {
  const [displayedText, setDisplayedText] = useState('');
  
  useEffect(() => {
    let i = 0;
    const startTimeout = setTimeout(() => {
      const interval = setInterval(() => {
        setDisplayedText(text.slice(0, i + 1));
        i++;
        if (i > text.length) clearInterval(interval);
      }, 30); // Velocità digitazione
      return () => clearInterval(interval);
    }, delay * 1000);
    return () => clearTimeout(startTimeout);
  }, [text, delay]);

  return <span>{displayedText}</span>;
};

const SectionHeader = ({ title, num }: { title: string, num: string }) => (
  <div className="flex items-end gap-4 mb-8 border-b border-green-900/50 pb-2">
    <span className="text-green-700 text-sm font-bold">./0{num}</span>
    <h2 className="text-2xl md:text-3xl font-bold text-green-400 uppercase tracking-tighter">{title}</h2>
  </div>
);

export default function Portfolio() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <div className="min-h-screen bg-black text-green-500 font-mono selection:bg-green-900 selection:text-white overflow-x-hidden">
      <Scanline />
      
      {/* HEADER / STATUS BAR */}
      <nav className="fixed top-0 w-full z-40 bg-black/90 border-b border-green-900/50 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-6 h-12 flex justify-between items-center text-xs md:text-sm">
          <div className="flex gap-4">
            <span className="text-green-700">root@massimofedrigo:~$</span>
            <span className="animate-pulse">_</span>
          </div>
          <div className="flex gap-6 opacity-70">
            <a href="#projects" className="hover:text-white hover:underline decoration-green-500 underline-offset-4 transition-all">./PROJECTS</a>
            <a href="#about" className="hover:text-white hover:underline decoration-green-500 underline-offset-4 transition-all">./ABOUT</a>
            <a href="#contact" className="hover:text-white hover:underline decoration-green-500 underline-offset-4 transition-all">./CONTACT</a>
          </div>
        </div>
      </nav>

      <main className="pt-32 px-6 max-w-7xl mx-auto pb-20">
        
        {/* HERO SECTION: SIMULATED TERMINAL */}
        <section className="min-h-[80vh] flex flex-col justify-center items-center">
          <TerminalWindow title="sh — 80x24">
            <div className="space-y-4">
              <div>
                <span className="text-green-700">root@massimofedrigo:~$</span> <span className="text-white">./init_portfolio.sh --verbose</span>
              </div>
              
              <div className="opacity-70 text-sm space-y-1 pl-4 border-l-2 border-green-900/30">
                <div>[INFO] Loading kernel modules... <span className="text-white">DONE</span></div>
                <div>[INFO] Mounting file systems... <span className="text-white">DONE</span></div>
                <div>[INFO] Initializing user interface... <span className="text-white">DONE</span></div>
                <div>[INFO] Target identified: <span className="text-green-300 font-bold">Massimo Fedrigo</span></div>
              </div>

              <div className="py-6">
                <h1 className="text-4xl md:text-6xl font-bold text-white mb-2 tracking-tighter">
                  <Typewriter text="MASSIMO FEDRIGO" delay={1.5} />
                </h1>
                <p className="text-lg md:text-xl text-green-400">
                  <span className="text-green-700">{'>'}</span> <Typewriter text="Computer Scientist. Software Engineer. Pentester." delay={2.5} />
                </p>
              </div>

              <div className="flex flex-wrap gap-3 pt-4">
                <a href="#projects" className="px-4 py-2 border border-green-600 hover:bg-green-600 hover:text-black transition-colors text-sm font-bold flex items-center gap-2 group">
                  <Terminal size={16} /> EXECUTE_PROJECTS
                </a>
                <a href={portfolioData.social.github} target="_blank" className="px-4 py-2 border border-green-900 text-green-700 hover:border-green-600 hover:text-green-500 transition-colors text-sm font-bold flex items-center gap-2">
                  <Github size={16} /> GITHUB_REPO
                </a>
              </div>
            </div>
          </TerminalWindow>
        </section>

        {/* SKILLS SECTION (SYSTEM SPECS) */}
        <section className="mb-32">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 border-t border-green-900/50 pt-4">
            <div className="text-green-700 text-xs uppercase tracking-widest">System_Capabilities</div>
            <div className="md:col-span-3 flex flex-wrap gap-x-8 gap-y-2">
              {skills.map((skill, i) => (
                <div key={i} className="flex items-center gap-2">
                  <span className="text-green-700">[+]</span>
                  <span className="hover:text-white transition-colors cursor-crosshair">{skill}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* PROJECTS SECTION */}
        <section id="projects" className="mb-32">
          <SectionHeader title="Target_List (Projects)" num="1" />
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {projects.map((proj, i) => (
              <motion.a 
                href={proj.link}
                target="_blank"
                key={i}
                whileHover={{ scale: 1.02 }}
                className="block bg-black border border-green-900/60 p-6 hover:border-green-500 hover:shadow-[0_0_15px_rgba(34,197,94,0.2)] transition-all group relative overflow-hidden"
              >
                {/* Corner Accents */}
                <div className="absolute top-0 left-0 w-2 h-2 border-t border-l border-green-500 opacity-50 group-hover:opacity-100"></div>
                <div className="absolute top-0 right-0 w-2 h-2 border-t border-r border-green-500 opacity-50 group-hover:opacity-100"></div>
                <div className="absolute bottom-0 left-0 w-2 h-2 border-b border-l border-green-500 opacity-50 group-hover:opacity-100"></div>
                <div className="absolute bottom-0 right-0 w-2 h-2 border-b border-r border-green-500 opacity-50 group-hover:opacity-100"></div>

                <div className="flex justify-between items-start mb-4">
                  <div className="p-2 bg-green-900/20 text-green-400 rounded-sm">
                    {proj.icon}
                  </div>
                  <ExternalLink size={16} className="text-green-800 group-hover:text-green-400" />
                </div>
                
                <div className="text-xs text-green-700 mb-1 font-bold tracking-wider">{proj.type}</div>
                <h3 className="text-xl font-bold text-white mb-2 group-hover:text-green-400 group-hover:underline decoration-wavy underline-offset-4">{proj.title}</h3>
                <p className="text-sm text-green-600/80 leading-relaxed">{proj.desc}</p>
              </motion.a>
            ))}
          </div>
        </section>

        {/* EXPERIENCE / ABOUT */}
        <section id="about" className="mb-32">
          <SectionHeader title="Kernel_Log (About)" num="2" />
          
          <div className="grid md:grid-cols-2 gap-12">
            <div className="space-y-6 text-sm leading-relaxed text-green-400/90">
              <p>
                <span className="text-white font-bold">{`>>`}</span> Subject: <span className="text-white">Massimo Fedrigo</span>
              </p>
              <p>
                Computer Scientist ibrido con focus su Ingegneria del Software e Sicurezza Offensiva. 
                Attualmente in fase di upgrade accademico (MSc Computational Mathematics) e certificazione <span className="bg-green-900/30 text-white px-1">OSCP</span>.
              </p>
              <p>
                Approccio analitico alla risoluzione dei problemi: scompongo sistemi complessi in primitive gestibili.
              </p>
              
              <div className="mt-8 p-4 border border-green-900/50 bg-green-900/10 text-xs">
                <div className="flex items-center gap-2 mb-2 text-green-300 font-bold">
                  <Shield size={14} /> CURRENT_OBJECTIVE
                </div>
                <p className="opacity-70">
                  Acquisizione certificazione Offensive Security Certified Professional (OSCP). 
                  Status: In Progress [||||||....]
                </p>
              </div>
            </div>

            <div className="space-y-0">
               <div className="flex items-center gap-2 mb-6 text-green-700 text-xs uppercase tracking-widest">
                 <Command size={14} /> Execution_History
               </div>
               
               <div className="relative border-l border-green-900/50 pl-8 space-y-8">
                 <div className="relative">
                   <div className="absolute -left-[37px] top-1 w-4 h-4 bg-black border border-green-500 rounded-full flex items-center justify-center">
                     <div className="w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse"></div>
                   </div>
                   <div className="text-xs text-green-700 font-bold">2025 — PRESENT</div>
                   <div className="text-white font-bold">MSc Computational Mathematics</div>
                   <div className="text-xs text-green-600">Università di Trieste</div>
                 </div>

                 <div className="relative">
                   <div className="absolute -left-[37px] top-1 w-4 h-4 bg-black border border-green-900 rounded-full"></div>
                   <div className="text-xs text-green-700 font-bold">2023 — PRESENT</div>
                   <div className="text-white font-bold">Full Stack Engineer (Freelance)</div>
                   <div className="text-xs text-green-600">Web & Mobile Ecosystems</div>
                 </div>

                 <div className="relative">
                   <div className="absolute -left-[37px] top-1 w-4 h-4 bg-black border border-green-900 rounded-full"></div>
                   <div className="text-xs text-green-700 font-bold">2021 — 2025</div>
                   <div className="text-white font-bold">BSc Informatica</div>
                   <div className="text-xs text-green-600">Università di Udine</div>
                 </div>
               </div>
            </div>
          </div>
        </section>

        {/* FOOTER / CONTACT */}
        <section id="contact" className="border-t border-green-900/50 pt-12 text-center">
          <h3 className="text-xl font-bold text-white mb-8 flex justify-center items-center gap-2">
            <Hash size={20} className="text-green-600"/> INITIATE_HANDSHAKE
          </h3>
          
          <div className="flex justify-center gap-8 mb-12">
            <a href={portfolioData.social.mail} className="flex flex-col items-center gap-2 group">
              <div className="p-4 border border-green-900 rounded-sm group-hover:bg-green-600 group-hover:text-black transition-all">
                <Mail size={24} />
              </div>
              <span className="text-xs text-green-700 group-hover:text-green-500">SEND_MAIL</span>
            </a>
            <a href={portfolioData.social.linkedin} className="flex flex-col items-center gap-2 group">
              <div className="p-4 border border-green-900 rounded-sm group-hover:bg-green-600 group-hover:text-black transition-all">
                <Linkedin size={24} />
              </div>
              <span className="text-xs text-green-700 group-hover:text-green-500">LINKEDIN</span>
            </a>
            <a href={portfolioData.social.github} className="flex flex-col items-center gap-2 group">
              <div className="p-4 border border-green-900 rounded-sm group-hover:bg-green-600 group-hover:text-black transition-all">
                <Github size={24} />
              </div>
              <span className="text-xs text-green-700 group-hover:text-green-500">GITHUB</span>
            </a>
          </div>
          
          <p className="text-xs text-green-900 font-mono">
            root@massimofedrigo:~# logout<br/>
            Connection closed.
          </p>
        </section>

      </main>
    </div>
  );
}