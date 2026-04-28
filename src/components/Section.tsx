import type { PropsWithChildren, ReactNode } from 'react';

type SectionProps = PropsWithChildren<{
  id: string;
  title: string;
  summary?: string;
  aside?: ReactNode;
  className?: string;
}>;

export function Section({ id, title, summary, aside, className, children }: SectionProps) {
  return (
    <section id={id} className={`scroll-mt-24 py-10 md:py-16 ${className ?? ''}`}>
      <div className="mb-8 flex flex-col gap-5 pb-6 md:flex-row md:items-end md:justify-between">
        <div className="max-w-2xl space-y-3">
          <p className="font-mono text-md text-signal">~/zenodefault</p>
          <h2 className="font-display text-md text-textPrimary">{title}</h2>
          {summary ? <p className="max-w-xl text-md text-textSecondary">{summary}</p> : null}
        </div>
        {aside ? <div className="shrink-0">{aside}</div> : null}
      </div>
      {children}
    </section>
  );
}
