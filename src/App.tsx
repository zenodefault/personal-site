import { CommandPalette } from './components/CommandPalette';
import { Section } from './components/Section';
import { TerminalWindow } from './components/TerminalWindow';
import { contactLinks, navItems, projects, skillGroups } from './data/site';

function App() {
  return (
    <div className="relative min-h-screen overflow-hidden bg-ink text-textPrimary">
      <div className="pointer-events-none absolute inset-0 bg-grid bg-[size:32px_32px] opacity-[0.08]" />
      <div className="scanlines pointer-events-none absolute inset-0 opacity-30" />

      <div className="relative mx-auto flex min-h-screen w-full max-w-7xl flex-col px-4 pb-20 pt-4 sm:px-6 lg:px-8">
        <header className="sticky top-4 z-30 mb-8 bg-panel/80 backdrop-blur-xl">
          <div className="flex flex-col gap-4 px-5 py-4 md:flex-row md:items-center md:justify-between">
            <div className="flex items-center gap-4">
              <div className="flex h-11 w-11 items-center justify-center bg-muted font-mono text-md text-signal">
                &gt;_
              </div>
              <div>
                <p className="font-mono text-xs uppercase tracking-[0.2em] text-signal">zenodefault</p>
                <p className="font-mono text-sm text-textSecondary">operator dashboard</p>
              </div>
            </div>

            <nav className="hidden items-center gap-5 md:flex">
              {navItems.map((item) => (
                <a
                  key={item.id}
                  href={`#${item.id}`}
                  className="font-mono text-xs uppercase tracking-[0.2em] text-textSecondary transition duration-instant hover:text-textPrimary"
                >
                  {item.label}
                </a>
              ))}
            </nav>

            <CommandPalette items={navItems} />
          </div>
        </header>

        <main className="flex-1">
          <Section
            id="about"
            kicker="profile"
            title="About section placeholder."
            summary="This is temporary about content for layout and styling only. Replace it with a real introduction later."
            aside={<div className="bg-muted px-4 py-3 font-mono text-xs uppercase tracking-[0.2em] text-signal">about.txt</div>}
          >
            <TerminalWindow title="about.md" subtitle="placeholder copy">
              <div className="space-y-4 text-md text-textSecondary">
                <p>Dummy paragraph one for the about section.</p>
                <p>Dummy paragraph two for the about section.</p>
                <p>Dummy paragraph three for the about section.</p>
              </div>
            </TerminalWindow>
          </Section>

          <Section
            id="projects"
            kicker="featured work"
            title="Projects section placeholder."
            summary="Temporary project cards for testing spacing, hierarchy, and terminal-style presentation."
          >
            <div className="grid gap-6 lg:grid-cols-3">
              {projects.map((project, index) => (
                <TerminalWindow
                  key={project.name}
                  title={project.name}
                  subtitle={project.status}
                  className="motion-safe:animate-reveal"
                >
                  <div style={{ animationDelay: `${index * 120}ms` }} className="space-y-5">
                    <p className="text-md text-textSecondary">{project.summary}</p>
                    <div className="flex flex-wrap gap-2">
                      {project.stack.map((item) => (
                        <span key={item} className="bg-muted px-3 py-1 font-mono text-xs uppercase tracking-[0.2em] text-textPrimary">
                          {item}
                        </span>
                      ))}
                    </div>
                    <p className="font-mono text-xs uppercase tracking-[0.2em] text-signal">{project.status}</p>
                  </div>
                </TerminalWindow>
              ))}
            </div>
          </Section>

          <Section
            id="skills"
            kicker="capabilities"
            title="Skills section placeholder."
            summary="Temporary skill groups to help shape the final content layout."
          >
            <div className="grid gap-6 md:grid-cols-3">
              {skillGroups.map((group) => (
                <TerminalWindow key={group.title} title={group.title} subtitle="active toolset">
                  <ul className="space-y-3 font-mono text-sm text-textSecondary">
                    {group.items.map((item) => (
                      <li key={item} className="flex items-start gap-3">
                        <span className="mt-2 h-1.5 w-1.5 rounded-full bg-signal" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </TerminalWindow>
              ))}
            </div>
          </Section>

          <Section
            id="contact"
            kicker="comms"
            title="Contact section placeholder."
            summary="Temporary contact information for structure only. Replace with real links and availability details later."
          >
            <div className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
              <TerminalWindow title="ping.operator" subtitle="open channels">
                <div className="space-y-5">
                  {contactLinks.map((link) => (
                    <a
                      key={link.label}
                      href={link.href}
                      target={link.href.startsWith('http') ? '_blank' : undefined}
                      rel={link.href.startsWith('http') ? 'noreferrer' : undefined}
                      className="flex items-center justify-between gap-4 bg-muted px-4 py-4 transition duration-instant hover:bg-panel focus:outline-none"
                    >
                      <div>
                        <p className="font-mono text-xs uppercase tracking-[0.2em] text-signal">{link.label}</p>
                        <p className="mt-2 text-sm text-textPrimary">{link.value}</p>
                      </div>
                      <span className="font-mono text-xs uppercase tracking-[0.2em] text-textSecondary">open</span>
                    </a>
                  ))}
                </div>
              </TerminalWindow>

              <TerminalWindow title="notes.txt" subtitle="placeholder message">
                <div className="space-y-4 text-md text-textSecondary">
                  <p>Dummy contact note one for the right-side panel.</p>
                  <p>Dummy contact note two for the right-side panel.</p>
                  <p>Dummy contact note three for the right-side panel.</p>
                </div>
              </TerminalWindow>
            </div>
          </Section>
        </main>
      </div>
    </div>
  );
}

export default App;
