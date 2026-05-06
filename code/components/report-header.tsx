import * as React from 'react';

// GFBI ReportHeader — title block for one-pagers and long-form reports.
// Cobalt eyebrow, oversized headline, ink-muted dek, mono metadata strip.

export interface ReportMeta {
  label: string;
  value: React.ReactNode;
}

export interface ReportHeaderProps {
  eyebrow?:  React.ReactNode;
  title:     React.ReactNode;
  dek?:      React.ReactNode;
  meta?:     ReportMeta[];
}

export function ReportHeader({
  eyebrow = 'Research brief',
  title,
  dek,
  meta,
}: ReportHeaderProps) {
  return (
    <header className="border-b border-rule pb-10 mb-10">
      <div className="eyebrow mb-4">{eyebrow}</div>

      <h1
        className="font-semibold tracking-tight max-w-4xl"
        style={{ fontSize: 'clamp(2rem, 5vw, 3.75rem)', lineHeight: 1.1 }}
      >
        {title}
      </h1>

      {dek && (
        <p
          className="mt-5 max-w-3xl text-lg sm:text-xl text-ink-600"
          style={{ lineHeight: 1.55 }}
        >
          {dek}
        </p>
      )}

      {meta && meta.length > 0 && (
        <dl className="mt-8 grid grid-cols-2 sm:grid-cols-4 gap-x-6 gap-y-4">
          {meta.map((m) => (
            <div key={m.label} className="flex flex-col gap-1">
              <dt className="font-mono text-xs uppercase tracking-wide text-ink-500">
                {m.label}
              </dt>
              <dd className="text-sm font-medium text-ink-900 font-mono tabular-nums">
                {m.value}
              </dd>
            </div>
          ))}
        </dl>
      )}
    </header>
  );
}

export default ReportHeader;
