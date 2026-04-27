import type { PropsWithChildren, ReactNode } from 'react';

type SectionProps = PropsWithChildren<{
  id: string;
  kicker: string;
  title: string;
  summary?: string;
  aside?: ReactNode;
  className?: string;
}>;

export function Section({ id, kicker, title, summary, aside, className, children }: SectionProps) {
  return (
    <section id={id} className={`scroll-mt-24 py-10 md:py-16 ${className ?? ''}`}>
      <div className="mb-8 flex flex-col gap-5 pb-6 md:flex-row md:items-end md:justify-between">
        <div className="max-w-2xl space-y-3">
          <p className="font-mono text-xs uppercase tracking-[0.2em] text-signal">{kicker}</p>
          <h2 className="font-display text-2xl font-medium tracking-tight text-textPrimary md:text-4xl">
            {title}
          </h2>
          {summary ? <p className="max-w-xl text-md text-textSecondary">{summary}</p> : null}
        </div>
        {aside ? <div className="shrink-0">{aside}</div> : null}
      </div>
      {children}
    </section>
  );
}
