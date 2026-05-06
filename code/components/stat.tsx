import * as React from 'react';

// AbuChip Stat — KPI tile.
// Mono numeral, sans label. Optional delta with semantic color.
// Used in dashboards, decks, and report headers.

export interface StatProps {
  label:  React.ReactNode;
  value:  React.ReactNode;
  unit?:  string;
  delta?: { value: string; direction: 'up' | 'down' | 'flat' };
  caption?: React.ReactNode;
  align?: 'left' | 'center';
}

const arrow = { up: '↑', down: '↓', flat: '–' } as const;
const deltaTone = {
  up:   'text-success',
  down: 'text-error',
  flat: 'text-ink-500',
} as const;

export function Stat({
  label,
  value,
  unit,
  delta,
  caption,
  align = 'left',
}: StatProps) {
  return (
    <div
      className={`flex flex-col gap-2 ${
        align === 'center' ? 'items-center text-center' : 'items-start'
      }`}
    >
      <span className="eyebrow text-ink-500 !text-ink-500">{label}</span>

      <span
        className="font-mono font-semibold text-ink-900 tabular-nums tracking-tight"
        style={{ fontSize: 'clamp(2rem, 5vw, 3.5rem)', lineHeight: 1.0 }}
      >
        {value}
        {unit && (
          <span className="ml-1 text-ink-500 font-sans font-medium text-base align-middle">
            {unit}
          </span>
        )}
      </span>

      {delta && (
        <span
          className={`font-mono text-sm font-medium tabular-nums ${
            deltaTone[delta.direction]
          }`}
        >
          {arrow[delta.direction]} {delta.value}
        </span>
      )}

      {caption && (
        <span className="text-sm text-ink-600">{caption}</span>
      )}
    </div>
  );
}

export default Stat;
