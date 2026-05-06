# AbuChip

A personal design system for research and product work. Applied to landing sites, pitch decks, one-page reports, and embedded charts.

Visual signature: cobalt accent on near-black ink and warm off-white paper, sharp 2px corners, Geist typography, oversized headlines, generous whitespace, plain-language copy.

---

## How to feed this into Claude Design

The four input fields on Claude Design's intake form map to four parts of this folder:

| Form field | What to use |
|---|---|
| **Company name and blurb** | The first two paragraphs of this README, copied as-is. |
| **Link code from your computer** | Drag the entire `code/` subfolder. |
| **Add fonts, logos and assets** | Drag everything in the `assets/` subfolder. |
| **Any other notes?** | The full contents of `NOTES.md`. |

Once Claude Design has all four, anything it generates — slides, pages, reports, charts — should land already on-brand. If a generation feels off, the gap is almost always something missing in `NOTES.md`; add it and re-upload.

---

## What's in this folder

```
abuchip-design-system/
├─ README.md          ← this file (the blurb)
├─ NOTES.md           ← the brand-voice + color + typography notes
├─ assets/            ← wordmark, favicon, palette swatch (SVG + PNG)
├─ code/
│  ├─ tokens/         ← colors.json, typography.json, spacing.json
│  ├─ tailwind.config.ts
│  ├─ globals.css
│  ├─ package.json
│  └─ components/     ← button, card, hero, stat, chart-frame, slide, report-header
└─ examples/          ← landing.tsx, deck.tsx, report.tsx, dashboard.tsx
```

The `examples/` files exist to prove the components compose into real artifacts. If you change a value in `tokens/colors.json` and rebuild, every example picks it up — nothing is hardcoded.

---

## The cheat sheet

- **Name:** AbuChip
- **Primary accent:** `#2563EB` (electric cobalt)
- **Ink:** `#0F172A`
- **Paper:** `#FAFAF9`
- **Rule:** `#E2E8F0`
- **Reserve (charts only):** `#EA580C` (amber)
- **Type:** Geist Sans (UI/body), Geist Mono (numbers, labels, code)
- **Corners:** 2px on cards/buttons, 0px on dividers, never pill-shaped
- **Voice:** plain, direct, short sentences

---

## Re-using on new projects

Drag `code/` into any Next.js or Vite app and import from `components/`. The Tailwind config self-references the JSON tokens, so consumers get a fully wired theme without copy-pasting values.

```ts
// In a downstream app
import { Button, Hero, Stat, ChartFrame } from 'abuchip-design-system/code/components';
import config from 'abuchip-design-system/code/tailwind.config';
```
