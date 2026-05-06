# GFBI

The design system for **Glance Foresight & Behavioral Insights** (GFBI). Applied to landing sites, pitch decks, one-page reports, and embedded charts produced by the team.

Visual signature: cobalt accent on near-black ink and warm off-white paper, sharp 2px corners, Geist typography, oversized headlines, generous whitespace, plain-language copy.

The mark is a cobalt chip frame containing a rising trend line, three observed data points, and a highlighted forecast point — built to evoke foresight, behavioral signal, and research-grade rigor.

---

## See it live

Open `preview.html` directly in a browser, or serve the folder:

```bash
python3 -m http.server 8765
open http://localhost:8765/preview.html
```

The preview is mobile-verified at 390px and renders every component (hero, KPI tiles, three card tones, single- and two-series charts, a 16:9 slide, a report header, the full palette, and a type specimen). Geist Sans + Geist Mono load from the bundled `.woff2` files in `assets/fonts/`.

---

## How to feed this into Claude Design

The four input fields on Claude Design's intake form map to four parts of this folder:

| Form field | What to use |
|---|---|
| **Company name and blurb** | The first three paragraphs of this README, copied as-is. |
| **Link code from your computer** | Drag the entire `code/` subfolder. |
| **Add fonts, logos and assets** | Drag everything in the `assets/` subfolder, **including `assets/fonts/`** — the bundled Geist `.woff2` files prevent Claude Design from substituting web fonts. |
| **Any other notes?** | The full contents of `NOTES.md`. |

Once Claude Design has all four, anything it generates — slides, pages, reports, charts — should land already on-brand. If a generation feels off, the gap is almost always something missing in `NOTES.md`; add it and re-upload.

---

## What's in this folder

```
gfbi-design-system/
├─ README.md          ← this file (the blurb)
├─ NOTES.md           ← the brand-voice + color + typography notes
├─ preview.html       ← single-file live preview, no build step
├─ assets/
│  ├─ wordmark.svg/png       cobalt mark + GFBI wordmark
│  ├─ wordmark-mono.svg/png  single-color version
│  ├─ favicon.svg/png        compact mark for tab/icon
│  ├─ palette.svg/png        visual swatch sheet
│  └─ fonts/
│     ├─ Geist-{Regular,Medium,SemiBold,Bold}.woff2    primary
│     ├─ GeistMono-{Regular,Medium,SemiBold}.woff2     numerals/data
│     └─ OFL.txt                                       license
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

- **Name:** GFBI
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
import { Button, Hero, Stat, ChartFrame } from 'gfbi-design-system/code/components';
import config from 'gfbi-design-system/code/tailwind.config';
```
