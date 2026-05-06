// AbuChip example — 5-slide pitch deck.
// Layouts used: title (cover), section (divider), content (body x3).
// Each Slide renders at 16:9; Stat handles the KPI page.

import * as React from 'react';
import { Slide, Stat } from '../code/components';

export default function DeckExample() {
  return (
    <div className="bg-ink-100 min-h-screen py-10 px-4 sm:px-8 space-y-8">
      <Slide
        layout="title"
        eyebrow="Research deck — Q2 2026"
        title="Why early-career users churn in week two."
        subtitle="Findings from 24 interviews and a 412-respondent diary study."
        deckLabel="AbuChip"
        number={1}
      />

      <Slide
        layout="section"
        title="What we found"
        subtitle="Three patterns. One blocker. A clear next step."
        deckLabel="AbuChip"
        number={2}
      />

      <Slide
        layout="content"
        eyebrow="Pattern 01"
        title="Setup is the cliff, not the feature itself."
        subtitle="Users who finish setup in the first session have a 3.4x higher week-two retention rate."
        deckLabel="AbuChip"
        number={3}
      >
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 mt-12">
          <Stat
            label="Setup-day retention"
            value="68"
            unit="%"
            delta={{ value: '+12 pts', direction: 'up' }}
            caption="Vs. those who set up later"
          />
          <Stat
            label="Week-two retention"
            value="3.4"
            unit="x"
            delta={{ value: 'higher', direction: 'up' }}
            caption="Setup-day vs. delayed users"
          />
          <Stat
            label="Time to first value"
            value="6"
            unit="min"
            delta={{ value: '–4 min', direction: 'down' }}
            caption="Goal: under 5 minutes"
          />
        </div>
      </Slide>

      <Slide
        layout="content"
        eyebrow="Pattern 02"
        title="The first error message is the moment we lose them."
        subtitle="More than half of churned users hit one of three errors in their first 10 minutes."
        deckLabel="AbuChip"
        number={4}
      >
        <ul className="mt-12 space-y-4 text-xl text-ink-700 max-w-3xl">
          <li className="flex gap-4">
            <span className="font-mono font-semibold text-primary-600 w-8">01</span>
            <span>Email-already-in-use error with no clear next step.</span>
          </li>
          <li className="flex gap-4">
            <span className="font-mono font-semibold text-primary-600 w-8">02</span>
            <span>Two-factor code page with no resend button.</span>
          </li>
          <li className="flex gap-4">
            <span className="font-mono font-semibold text-primary-600 w-8">03</span>
            <span>Generic “something went wrong” on the import flow.</span>
          </li>
        </ul>
      </Slide>

      <Slide
        layout="content"
        eyebrow="What to do next"
        title="Fix the three errors. Re-test in six weeks."
        subtitle="Engineering can ship the three fixes in one sprint. Re-run the diary study after the change lands."
        deckLabel="AbuChip"
        number={5}
      />
    </div>
  );
}
