// AbuChip example — one-page research report.
// Verifies: ReportHeader, prose width cap, Card.data for sidebars,
// plain-language sentences, mono metadata strip.

import * as React from 'react';
import { ReportHeader, Card, Stat } from '../code/components';

export default function ReportExample() {
  return (
    <main className="bg-paper text-ink-900 py-16">
      <div className="abu-container max-w-2xl">
        <ReportHeader
          eyebrow="Research brief — early-career users"
          title="Why early-career users churn in week two."
          dek="Setup friction and three error states explain most of the gap. The fixes are small. The expected lift is large."
          meta={[
            { label: 'Author',     value: 'AC, Research' },
            { label: 'Date',       value: '2026-05-06' },
            { label: 'Method',     value: '24 interviews · 412 surveys' },
            { label: 'Status',     value: 'Final v1.0' },
          ]}
        />

        <section className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <article className="lg:col-span-2 abu-prose">
            <p className="text-lg text-ink-700 leading-relaxed mb-6">
              Early-career users sign up at the same rate as everyone else. They drop off twice as fast.
              We ran 24 interviews and a 412-respondent diary study to find out why.
            </p>

            <h2 className="mt-10">The setup cliff</h2>
            <p className="mt-4 text-ink-700 leading-relaxed">
              Users who finish setup on the same day they sign up retain at 68 percent in week two. Users
              who delay setup retain at 20 percent. Setup is not a small detail. It is the product, for
              the first session.
            </p>

            <h2 className="mt-10">Three error states do most of the damage</h2>
            <p className="mt-4 text-ink-700 leading-relaxed">
              More than half of users who churned hit one of three errors in their first ten minutes:
              an email-already-in-use message with no path forward, a two-factor code page with no
              resend, and a generic error on the import flow. None of the three need new technology to fix.
            </p>

            <h2 className="mt-10">What to do next</h2>
            <p className="mt-4 text-ink-700 leading-relaxed">
              Engineering can ship the three error-state fixes in a single sprint. We should re-run the
              diary study six weeks after the fixes land and compare the numbers.
            </p>
          </article>

          <aside className="space-y-6">
            <Card tone="data" eyebrow="Headline number">
              <Stat
                label="Week-two retention gap"
                value="48"
                unit="pts"
                delta={{ value: 'closing', direction: 'down' }}
                caption="Setup-day vs. delayed users"
              />
            </Card>

            <Card tone="accent" eyebrow="Recommended action" title="Ship the three error-state fixes">
              <p className="text-sm">
                Estimated engineering effort: one sprint. Estimated retention lift: 8 to 12 percentage points
                in week two.
              </p>
            </Card>
          </aside>
        </section>
      </div>
    </main>
  );
}
