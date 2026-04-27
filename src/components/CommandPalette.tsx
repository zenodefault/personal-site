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
          className="fixed inset-0 z-50 flex items-start justify-center bg-ink/90 px-4 pb-6 pt-20 backdrop-blur-md"
          role="dialog"
          aria-modal="true"
          aria-label="Command palette"
        >
          <div className="w-full max-w-2xl overflow-hidden rounded-xs bg-panel shadow-glow">
            <div className="px-4 py-3">
              <label className="flex items-center gap-3">
                <span className="font-mono text-md text-signal">$</span>
                <input
                  autoFocus
                  value={query}
                  onChange={(event) => setQuery(event.target.value)}
                  placeholder="open tokens / run wcag-audit / check release"
                  className="min-h-11 w-full bg-transparent font-mono text-md text-textPrimary outline-none placeholder:text-textSecondary"
                />
              </label>
            </div>
            <div className="max-h-[60vh] overflow-y-auto p-3">
              {filteredItems.map((item) => (
                <button
                  key={item.id}
                  type="button"
                  onClick={() => jumpToSection(item.id)}
                  className="flex min-h-11 w-full flex-col gap-2 rounded-xs px-4 py-3 text-left transition duration-instant hover:bg-muted focus:outline-none"
                >
                  <div className="flex items-center justify-between gap-3">
                    <span className="font-display text-lg text-textPrimary">{item.label}</span>
                    <span className="font-mono text-xs uppercase tracking-[0.2em] text-signal">
                      {item.command}
                    </span>
                  </div>
                  <p className="text-md text-textSecondary">{item.description}</p>
                </button>
              ))}
              {filteredItems.length === 0 ? (
                <div className="rounded-xs px-4 py-8 text-center">
                  <p className="font-display text-lg text-textPrimary">No matching command</p>
                  <p className="mt-2 text-md text-textSecondary">Try “tokens”, “components”, or “qa”.</p>
                </div>
              ) : null}
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
}
