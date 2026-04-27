import type { PropsWithChildren } from 'react';

type TerminalWindowProps = PropsWithChildren<{
  title: string;
  subtitle?: string;
  className?: string;
}>;

export function TerminalWindow({ title, subtitle, className, children }: TerminalWindowProps) {
  return (
    <article
      className={`overflow-hidden rounded-xs bg-panel/90 shadow-glow transition duration-instant ${className ?? ''}`}
    >
      <div className="flex items-center justify-between px-5 py-4">
        <div className="flex items-center gap-3">
          <div className="flex gap-2">
            <span className="h-2 w-2 rounded-full bg-muted" />
            <span className="h-2 w-2 rounded-full bg-muted" />
            <span className="h-2 w-2 rounded-full bg-signal/40" />
          </div>
          <div>
            <p className="font-mono text-xs uppercase tracking-[0.2em] text-textPrimary">{title}</p>
            {subtitle ? <p className="mt-1 text-xs text-textSecondary">{subtitle}</p> : null}
          </div>
        </div>
        <p className="font-mono text-xs uppercase tracking-[0.2em] text-signal">active</p>
      </div>
      <div className="p-5 md:p-6">{children}</div>
    </article>
  );
}
