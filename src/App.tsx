import { useState } from 'react';
import { contactLinks, navItems, projects, skillGroups } from './data/site';
import type { Project } from './lib/types';

function ProjectBlock({ project }: { project: Project }) {
  return (
    <div className="flex flex-col font-mono">
      {/* Prompt Section */}
      <div className="mb-6 md:mb-12">
        <div className="flex items-center gap-2 text-xs md:text-sm">
          <span className="text-textInverse">~/zenodefault</span>
          <span className="text-signal">▸</span>
        </div>
        <div className="mt-3 md:mt-4 flex items-center gap-3 text-base md:text-lg font-bold">
          <span className="text-white">cat ./projects/{project.name.toLowerCase().replace(/[\s\(\)]+/g, '-')}</span>
        </div>
      </div>

      <div className="space-y-8 md:space-y-12">
        <div className="space-y-4 md:space-y-6">
          <h3 className="text-lg md:text-xl">
            <span className="font-bold text-signal">{project.name.toLowerCase()}</span>
          </h3>
          <p className="max-w-4xl text-base md:text-xl leading-relaxed text-textPrimary/80">
            {project.summary}
          </p>
        </div>

        {/* Stats Row */}
        {project.stats && (
          <div className="flex flex-wrap gap-x-8 md:gap-x-16 gap-y-4 md:gap-y-8">
            {project.stats.map((stat) => (
              <div key={stat.label} className="flex flex-col gap-1 md:gap-2">
                <span className="text-2xl md:text-3xl font-bold text-signal glow-text">{stat.value}</span>
                <span className="text-[8px] md:text-[10px] font-bold uppercase tracking-[0.2em] text-textSecondary">
                  {stat.label}
                </span>
              </div>
            ))}
          </div>
        )}

        {/* Terminal Window */}
        <div className="max-w-3xl overflow-hidden border border-white/5 bg-[#0a0a0a] shadow-2xl">
          <div className="relative flex items-center bg-white/5 px-4 py-2 md:py-3">
            <div className="flex gap-1.5 md:gap-2">
              <div className="h-2 w-2 rounded-full bg-[#ff5f56]" />
              <div className="h-2 w-2 rounded-full bg-[#ffbd2e]" />
              <div className="h-2 w-2 rounded-full bg-[#27c93f]" />
            </div>
            <div className="ml-4 text-[9px] md:text-[10px] text-textSecondary/60 tracking-wider truncate pr-4">
              {project.name.toLowerCase()} — output.log
            </div>
          </div>

          <div className="p-4 md:p-8 space-y-4 text-[11px] md:text-[13px] leading-relaxed">
            <div className="flex gap-3">
              <span className="text-signal">$</span>
              <span className="text-white truncate">./{project.name.toLowerCase().replace(/[\s\(\)]+/g, '-')} --init</span>
            </div>
            <div className="text-textSecondary/60">
              ✓ build successful — ready for execution
            </div>
            
            <div className="pt-2 md:pt-4 space-y-2 md:space-y-3">
              {project.highlights?.map((highlight, i) => {
                const content = highlight.replace(/^\/\/\s*/, '');
                return (
                  <div key={i} className="flex gap-3 md:gap-4">
                    <span className="text-textSecondary/40 leading-none shrink-0">//</span>
                    <span className="text-textPrimary/90 break-words">
                      {content.includes('@') ? (
                        content.split(/(@\w+)/).map((part, index) => 
                          part.startsWith('@') ? <span key={index} className="text-textInverse">{part}</span> : part
                        )
                      ) : content}
                    </span>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* Links */}
        <div className="flex items-center gap-8 pt-2 md:pt-4">
          <a 
            href={project.href} 
            target="_blank" 
            rel="noreferrer" 
            className="text-xs md:text-signal hover:underline underline-offset-8 decoration-signal/30 transition-all hover:glow-text"
          >
            {project.href.replace('https://', '')}
          </a>
        </div>
      </div>
    </div>
  );
}

function App() {
  return (
    <div className="relative min-h-screen overflow-x-hidden bg-ink text-textPrimary lowercase selection:bg-signal selection:text-ink">
      {/* CRT Overlays */}
      <div className="scanlines fixed inset-0 z-50 pointer-events-none" />
      <div className="vignette fixed inset-0 z-50 pointer-events-none" />
      
      <div className="relative mx-auto max-w-6xl px-4 py-8 md:px-12 md:py-20 animate-flicker">
        {/* Header */}
        <header className="mb-16 md:mb-32 flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <div className="font-mono text-base md:text-lg font-bold tracking-tighter text-signal glow-text">
            zenodefault_
          </div>
          <nav className="flex flex-wrap gap-4 md:gap-8 font-mono text-xs md:text-sm text-textSecondary">
            {navItems.map((item) => (
              <a
                key={item.id}
                href={`#${item.id}`}
                className="transition-colors hover:text-signal"
              >
                {item.label}
              </a>
            ))}
          </nav>
        </header>

        <main className="space-y-24 md:space-y-48">
          {/* Hero Section */}
          <section id="about" className="scroll-mt-32">
            <div className="mb-8 md:mb-12 flex flex-col items-start text-signal glow-text overflow-hidden">
              <pre className="whitespace-pre font-mono text-[0.25rem] leading-[1.1] min-[400px]:text-[0.35rem] sm:text-[0.6rem] md:text-[0.7rem] lg:text-[0.8rem]">
                {`███████╗███████╗███╗   ██╗ ██████╗ ██████╗ ███████╗███████╗ █████╗ ██╗   ██╗██╗  ████████╗
╚══███╔╝██╔════╝████╗  ██║██╔════██╗██╔══██╗██╔════╝██╔════╝██╔══██╗██║   ██║██║  ╚══██╔══╝
  ███╔╝ █████╗  ██╔██╗ ██║██║   ██║██║  ██║█████╗  █████╗  ███████║██║   ██║██║     ██║   
 ███╔╝  ██╔══╝  ██║╚██╗██║██║   ██║██║  ██║██╔══╝  ██╔══╝  ██╔══██║██║   ██║██║     ██║   
███████╗███████╗██║ ╚████║╚██████╔╝██████╔╝███████╗██║     ██║  ██║╚██████╔╝███████╗██║   
╚══════╝╚══════╝╚═╝  ╚═══╝ ╚═════╝ ╚═════╝ ╚══════╝╚═╝     ╚═╝  ╚═╝ ╚═════╝ ╚══════╝╚═╝`}
              </pre>
            </div>
            
            <div className="max-w-3xl space-y-6 md:space-y-8">
              <p className="font-mono text-lg leading-relaxed text-white md:text-2xl">
                Hey, I'm a <span className="text-signal glow-text">2nd-year engineering student</span> from <span className="text-textInverse">Bangalore</span>, carving my own path in tech—one commit at a
                time. I learn by building: every project is a playground for curiosity, and the idea that my code can
                create real, <span className="text-signal glow-text">tangible impact</span> is what keeps me shipping.
              </p>
              
              <div className="flex flex-wrap items-center gap-x-6 gap-y-3 font-mono text-[9px] md:text-[10px] uppercase tracking-[0.2em] text-textSecondary">
                <div className="flex items-center gap-2 text-signal">
                  <span className="h-1.5 w-1.5 rounded-full bg-signal shadow-[0_0_8px_rgb(var(--color-signal))]" />
                  <span>operational</span>
                </div>
                <span>naveed</span>
                <span>bangalore, india</span>
                <span>pid 777</span>
              </div>
            </div>
          </section>

          {/* Projects Section */}
          <section id="projects" className="scroll-mt-32 space-y-24 md:space-y-40">
            {projects.map((project) => (
              <ProjectBlock key={project.name} project={project} />
            ))}
          </section>

          {/* Skills Section */}
          <section id="skills" className="scroll-mt-32">
            <div className="mb-8 md:mb-12 font-mono text-xs md:text-sm">
              <div className="flex items-center gap-2 text-textInverse">
                <span>~/zenodefault</span>
                <span className="text-signal">▸</span>
              </div>
              <div className="mt-2 text-base md:text-lg font-bold text-white">
                env --capabilities
              </div>
            </div>

            <div className="grid gap-12 md:gap-20 md:grid-cols-2 lg:grid-cols-3">
              {skillGroups.map((group) => (
                <div key={group.title} className="space-y-4 md:space-y-6">
                  <h3 className="font-mono text-[9px] md:text-[10px] uppercase tracking-[0.3em] text-textSecondary border-b border-signal/10 pb-2">
                    {group.title}
                  </h3>
                  <div className="flex flex-wrap gap-4 md:gap-6">
                    {group.items.map((item) => {
                      const Icon = typeof item === 'string' ? null : item.icon;
                      const name = typeof item === 'string' ? item : item.name;
                      return (
                        <div key={name} className="group relative flex items-center gap-3 font-mono text-xs md:text-sm text-textPrimary hover:text-signal transition-colors">
                          {Icon && <Icon className="h-4 w-4 md:h-5 md:w-5 text-textSecondary transition-colors group-hover:text-signal group-hover:drop-shadow-signal-glow" />}
                          <span>{name.toLowerCase()}</span>
                        </div>
                      );
                    })}
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Contact Section */}
          <section id="contact" className="scroll-mt-32 pb-24 md:pb-48">
            <div className="mb-8 md:mb-12 font-mono text-xs md:text-sm">
              <div className="flex items-center gap-2 text-textInverse">
                <span>~/zenodefault</span>
                <span className="text-signal">▸</span>
              </div>
              <div className="mt-2 text-base md:text-lg font-bold text-white">
                ping operator --socials
              </div>
            </div>

            <div className="flex flex-wrap gap-8 md:gap-20">
              {contactLinks.map((link) => {
                const Icon = link.icon;
                return (
                  <a
                    key={link.label}
                    href={link.href}
                    target="_blank"
                    rel="noreferrer"
                    className="group flex items-center gap-4 font-mono text-xs md:text-sm text-textSecondary transition-all hover:text-signal"
                  >
                    <Icon className="h-6 w-6 md:h-8 md:w-8 transition-transform group-hover:scale-110 group-hover:drop-shadow-signal-glow" />
                    <span className="text-[9px] md:text-[10px] font-bold uppercase tracking-[0.3em]">
                      {link.label.split('/')[0]}
                    </span>
                  </a>
                );
              })}
            </div>

            <div className="mt-16 md:mt-32 border-t border-signal/10 pt-8 md:pt-12 font-mono">
              <p className="max-w-2xl text-base md:text-lg italic leading-relaxed text-white/60">
                "Open to internships, hackathons, and building purposeful software with fellow creators."
              </p>
              <div className="mt-6 md:mt-8 flex items-center gap-3">
                <span className="text-[9px] md:text-[10px] font-bold tracking-[0.2em] text-signal uppercase">Status:</span>
                <span className="text-xs md:text-sm text-white">LISTENING_FOR_PINGS</span>
                <span className="inline-block h-4 w-2 animate-blink bg-signal align-middle" />
              </div>
            </div>
          </section>
        </main>
      </div>
    </div>
  );
}

export default App;
