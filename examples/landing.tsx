// AbuChip example — landing page.
// Verifies: Hero (cobalt variant), Card (default + accent), Button, plain-language copy,
// 2-column grid that collapses to 1 col below sm.

import * as React from 'react';
import { Hero, Card, Button } from '../code/components';

export default function LandingExample() {
  return (
    <main className="bg-paper text-ink-900">
      <Hero
        variant="cobalt"
        eyebrow="Research, faster"
        title="Find the answer before the slide deck is due."
        subtitle="A research workspace that turns interviews, charts, and notes into a draft you can send."
        primaryCta={{ label: 'Start a project', href: '#start' }}
        secondaryCta={{ label: 'See how it works', href: '#how' }}
      />

      <section className="abu-container py-20" id="how">
        <div className="max-w-2xl mb-14">
          <p className="eyebrow mb-4">Three things it does well</p>
          <h2>Less stitching. More thinking.</h2>
          <p className="mt-4 text-lg text-ink-600">
            You bring the raw material. We do the joining, the ranking, and the first draft.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <Card eyebrow="01" title="Pull it in" tone="default">
            Upload transcripts, screenshots, and survey exports. We index every quote.
          </Card>
          <Card eyebrow="02" title="Cut to the signal" tone="accent">
            We surface the three points the audience will actually remember.
          </Card>
          <Card eyebrow="03" title="Ship the draft" tone="default">
            Get a one-pager, a five-slide deck, or a chart pack. All in your house style.
          </Card>
        </div>

        <div className="mt-14 flex flex-wrap gap-3">
          <Button variant="primary" size="lg">Start a project</Button>
          <Button variant="secondary" size="lg">Talk to the team</Button>
        </div>
      </section>

      <section className="bg-ink-900 text-paper py-20">
        <div className="abu-container">
          <p className="eyebrow !text-primary-300 mb-4">What teams say</p>
          <blockquote className="text-2xl sm:text-3xl font-semibold tracking-tight max-w-3xl">
            “We cut a week out of every research cycle. The drafts already sound like us.”
          </blockquote>
          <p className="mt-6 font-mono text-sm uppercase tracking-wide text-paper/70">
            — Head of Research, mid-stage SaaS company
          </p>
        </div>
      </section>
    </main>
  );
}
