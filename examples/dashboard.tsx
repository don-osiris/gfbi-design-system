// GFBI example — chart panel / dashboard.
// Verifies: ChartFrame with monochrome and two-series palettes, Stat row,
// raw inline SVG bars (no chart lib needed), token colors via CSS vars.

import * as React from 'react';
import { ChartFrame, Stat, Card } from '../code/components';

export default function DashboardExample() {
  // Inline data — in a real app this would be fetched with the cache-bust pattern from the global rules.
  const monthly = [
    { label: 'Jan', a: 38, b: 14 },
    { label: 'Feb', a: 41, b: 16 },
    { label: 'Mar', a: 47, b: 19 },
    { label: 'Apr', a: 52, b: 22 },
    { label: 'May', a: 56, b: 25 },
    { label: 'Jun', a: 61, b: 28 },
  ];
  const max = 70;

  return (
    <main className="bg-paper text-ink-900 py-12">
      <div className="abu-container max-w-xl">
        <header className="mb-10">
          <p className="eyebrow mb-3">Live dashboard · Q2 2026</p>
          <h1 className="mb-3">Onboarding health</h1>
          <p className="text-lg text-ink-600 max-w-2xl">
            How early-career users move through setup. Updated every hour.
          </p>
        </header>

        <section className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
          <Stat
            label="Sign-ups today"
            value="1,284"
            delta={{ value: '+8.2%', direction: 'up' }}
          />
          <Stat
            label="Setup completion"
            value="61"
            unit="%"
            delta={{ value: '+3 pts', direction: 'up' }}
          />
          <Stat
            label="Median TTV"
            value="6.4"
            unit="min"
            delta={{ value: '–0.8 min', direction: 'down' }}
          />
          <Stat
            label="Week-two retention"
            value="44"
            unit="%"
            delta={{ value: 'flat', direction: 'flat' }}
          />
        </section>

        <section className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
          <ChartFrame
            eyebrow="Setup completion"
            title="Setup-day completions by month"
            subtitle="Users who finish setup the same day they sign up."
            legend={[{ label: 'Same-day setup', color: '#2563EB' }]}
            footnote="Source: product analytics, 2026-05"
            height={260}
          >
            <svg viewBox="0 0 600 260" className="w-full h-full" role="img" aria-label="Bar chart of same-day setup completions by month">
              {monthly.map((d, i) => {
                const barH = (d.a / max) * 200;
                const x = i * 90 + 40;
                return (
                  <g key={d.label}>
                    <rect
                      x={x}
                      y={220 - barH}
                      width={48}
                      height={barH}
                      fill="#2563EB"
                      rx={2}
                    />
                    <text x={x + 24} y={240} textAnchor="middle" fontFamily="Geist Mono, monospace" fontSize="12" fill="#475569">
                      {d.label}
                    </text>
                    <text x={x + 24} y={220 - barH - 6} textAnchor="middle" fontFamily="Geist Mono, monospace" fontSize="11" fill="#0F172A" fontWeight="500">
                      {d.a}
                    </text>
                  </g>
                );
              })}
              <line x1="20" y1="220" x2="580" y2="220" stroke="#E2E8F0" strokeWidth="1" />
            </svg>
          </ChartFrame>

          <ChartFrame
            eyebrow="Setup vs. churn"
            title="Same-day setup vs. churned users"
            subtitle="Two series. Cobalt + amber is the only acceptable two-color pairing."
            legend={[
              { label: 'Same-day setup', color: '#2563EB' },
              { label: 'Churned in week two', color: '#EA580C' },
            ]}
            footnote="Source: product analytics, 2026-05"
            height={260}
          >
            <svg viewBox="0 0 600 260" className="w-full h-full" role="img" aria-label="Grouped bar chart comparing same-day setup against week-two churn">
              {monthly.map((d, i) => {
                const aH = (d.a / max) * 200;
                const bH = (d.b / max) * 200;
                const x = i * 90 + 30;
                return (
                  <g key={d.label}>
                    <rect x={x} y={220 - aH} width={28} height={aH} fill="#2563EB" rx={2} />
                    <rect x={x + 32} y={220 - bH} width={28} height={bH} fill="#EA580C" rx={2} />
                    <text x={x + 30} y={240} textAnchor="middle" fontFamily="Geist Mono, monospace" fontSize="12" fill="#475569">
                      {d.label}
                    </text>
                  </g>
                );
              })}
              <line x1="20" y1="220" x2="580" y2="220" stroke="#E2E8F0" strokeWidth="1" />
            </svg>
          </ChartFrame>
        </section>

        <Card tone="accent" eyebrow="Read this first" title="Why the May numbers look better">
          The setup-tooltip change shipped on April 23. Most of the lift is the tooltip working as designed,
          not a behavior change in the user base. Re-check after the next release before drawing wider conclusions.
        </Card>
      </div>
    </main>
  );
}
