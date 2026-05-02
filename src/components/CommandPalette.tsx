import { useEffect, useMemo, useState } from 'react';
import type { NavItem } from '../lib/types';

type CommandPaletteProps = {
  items: NavItem[];
};

export function CommandPalette({ items }: CommandPaletteProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [query, setQuery] = useState('');

  useEffect(() => {
    const onKeyDown = (event: KeyboardEvent) => {
      if ((event.metaKey || event.ctrlKey) && event.key.toLowerCase() === 'k') {
        event.preventDefault();
        setIsOpen((value) => !value);
      }

      if (event.key === '/') {
        const target = event.target as HTMLElement | null;
        const isTyping = target?.tagName === 'INPUT' || target?.tagName === 'TEXTAREA' || target?.isContentEditable;
        if (!isTyping) {
          event.preventDefault();
          setIsOpen(true);
        }
      }

      if (event.key === 'Escape') {
        setIsOpen(false);
      }
    };

    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, []);

  const filteredItems = useMemo(() => {
    const needle = query.trim().toLowerCase();
    if (!needle) {
      return items;
    }

    return items.filter((item) => {
      const haystack = `${item.label} ${item.command} ${item.description}`.toLowerCase();
      return haystack.includes(needle);
    });
  }, [items, query]);

  const jumpToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    setIsOpen(false);
    setQuery('');
  };

  return (
    <>
      <div className="flex items-center gap-3 rounded-full bg-transparent px-3 py-2">
        <button
          type="button"
          onClick={() => setIsOpen(true)}
          className="inline-flex min-h-11 items-center gap-2 rounded-xs bg-panel px-4 py-3 font-mono text-xs uppercase tracking-[0.2em] text-textPrimary transition duration-instant hover:text-signal focus:outline-none"
        >
          <span className="text-signal">cmd</span>
          <span>Open console</span>
        </button>
        <p className="hidden font-mono text-xs uppercase tracking-[0.2em] text-textSecondary sm:block">
          Ctrl/Cmd + K
        </p>
      </div>

      {isOpen ? (
        <div
          className="fixed inset-0 z-[100] flex items-start justify-center bg-ink/90 px-4 pb-6 pt-20 backdrop-blur-md"
          role="dialog"
          aria-modal="true"
          aria-label="Command palette"
        >
          <div className="w-full max-w-2xl overflow-hidden border border-signal/30 bg-panel shadow-signal-glow animate-flicker">
            <div className="border-b border-signal/30 bg-signal/10 px-4 py-3">
              <label className="flex items-center gap-3">
                <span className="font-mono text-md text-signal glow-text">$</span>
                <input
                  autoFocus
                  value={query}
                  onChange={(event) => setQuery(event.target.value)}
                  placeholder="EXECUTE_COMMAND..."
                  className="min-h-11 w-full bg-transparent font-mono text-md text-textPrimary outline-none placeholder:text-textSecondary/50"
                />
              </label>
            </div>
            <div className="max-h-[60vh] overflow-y-auto p-3 custom-scrollbar">
              {filteredItems.map((item) => (
                <button
                  key={item.id}
                  type="button"
                  onClick={() => jumpToSection(item.id)}
                  className="group flex min-h-11 w-full flex-col gap-2 border border-transparent px-4 py-3 text-left transition-all hover:border-signal/30 hover:bg-signal/5 focus:outline-none"
                >
                  <div className="flex items-center justify-between gap-3">
                    <span className="font-mono text-lg text-textPrimary group-hover:text-signal group-hover:glow-text transition-colors">{item.label}</span>
                    <span className="font-mono text-xs uppercase tracking-[0.2em] text-signal/60 group-hover:text-signal transition-colors">
                      {item.command}
                    </span>
                  </div>
                  <p className="font-mono text-sm text-textSecondary group-hover:text-textPrimary transition-colors">{item.description}</p>
                </button>
              ))}
              {filteredItems.length === 0 ? (
                <div className="px-4 py-8 text-center font-mono">
                  <p className="text-lg text-textPrimary">NO_MATCHING_COMMAND</p>
                  <p className="mt-2 text-sm text-textSecondary">TRY "PROJECTS", "SKILLS", OR "CONTACT"</p>
                </div>
              ) : null}
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
}
