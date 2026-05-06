import * as React from 'react';

// GFBI ChartFrame — wraps any chart (Recharts, Chart.js, D3, raw SVG)
// and gives it the GFBI envelope: eyebrow, title, mono axis labels,
// legend chips in the approved palette, and a footnote.
// The chart itself is whatever you pass as children — this is presentation only.

export interface LegendItem {
  label: string;
  color: string;
}

export interface ChartFrameProps {
  eyebrow?:  React.ReactNode;
  title:     React.ReactNode;
  subtitle?: React.ReactNode;
  legend?:   LegendItem[];
  footnote?: React.ReactNode;
  height?:   number;        // px
  children:  React.ReactNode;
}

export function ChartFrame({
  eyebrow,
  title,
  subtitle,
  legend,
  footnote,
  height = 320,
  children,
}: ChartFrameProps) {
  return (
    <figure className="bg-paper-raised border border-rule rounded-sm p-6 sm:p-8 shadow-sm">
      {eyebrow && <div className="eyebrow mb-2">{eyebrow}</div>}

      <figcaption>
        <h3 className="mb-1">{title}</h3>
        {subtitle && (
          <p className="text-sm text-ink-600 mb-5">{subtitle}</p>
        )}
      </figcaption>

      {legend && legend.length > 0 && (
        <ul className="flex flex-wrap gap-x-4 gap-y-2 mb-4">
          {legend.map((item) => (
            <li
              key={item.label}
              className="flex items-center gap-2 font-mono text-xs uppercase tracking-wide text-ink-700"
            >
              <span
                aria-hidden="true"
                className="inline-block w-3 h-3 rounded-sm"
                style={{ background: item.color }}
              />
              {item.label}
            </li>
          ))}
        </ul>
      )}

      <div
        className="w-full"
        style={{ height }}
      >
        {children}
      </div>

      {footnote && (
        <p className="mt-4 pt-3 border-t border-rule font-mono text-xs uppercase tracking-wide text-ink-500">
          {footnote}
        </p>
      )}
    </figure>
  );
}

export default ChartFrame;
