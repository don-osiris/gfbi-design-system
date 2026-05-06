# GFBI — design notes

GFBI is the design system for **Glance Foresight & Behavioral Insights**. These are the rules anything generated under this brand must follow. Paste this whole file into the "Any other notes?" field on Claude Design's intake form.

---

## Voice

- Plain, direct, short sentences. Spell out acronyms on first use.
- The audience has no patience for jargon. Cut it.
- Active voice, present tense by default.
- Never start a sentence with "Furthermore," "Moreover," "Additionally," or "In conclusion."
- One idea per paragraph. Three sentences is plenty.

---

## Color

- **One accent: cobalt `#2563EB`.** Used sparingly. Reserve it for primary buttons, key data points, section markers, and the eyebrow rule on dark cards.
- **Ink and paper everywhere else.** `#0F172A` on `#FAFAF9` is the default reading surface.
- **No gradients except one.** A subtle cobalt-to-indigo (`#2563EB → #4338CA`) is permitted on landing-page heroes only. No other gradients anywhere — not on cards, not on buttons, not on charts.
- **Two-series charts add amber `#EA580C` as the second series.** Never use amber decoratively.
- **Never use rainbow palettes.** Never use red as a brand color (it's reserved for error states only).

---

## Corners

- **2px** on buttons and cards.
- **0px** on dividers, image frames, chart axes.
- **Never pill-shaped.** No fully rounded corners, no `rounded-full` outside of avatars.

---

## Typography

- **Brand fonts ship with this folder.** The `assets/fonts/` directory contains the actual Geist Sans (Regular/Medium/SemiBold/Bold) and Geist Mono (Regular/Medium/SemiBold) `.woff2` files plus the OFL license. Use these — do not substitute web fonts.
- **Geist Sans** for everything: UI, body, headlines.
- **Geist Mono** for numerals, data labels, table column headers, code, eyebrows.
- Body copy: `1rem / 1.6` line-height.
- Headlines: oversized and tight. Use `clamp(2rem, 5vw, 3.75rem)` so they scale fluidly without breakpoints. Line-height 1.05 to 1.1.
- Eyebrows are mono, 12px, uppercase, `letter-spacing: 0.04em`, in cobalt.
- Numbers always tabular (`font-variant-numeric: tabular-nums`) so columns align.

---

## Layout & whitespace

- 4-point spacing grid. Use multiples of 4px.
- Generous whitespace between sections. Cramped layouts feel cheap.
- Reading line length capped at 65ch for body prose.
- Container max-widths: 1200px hero, 768px prose.

---

## Mobile

- **Verify at 390px viewport.** Responsive Tailwind classes are not proof of mobile-friendliness — measure `clientWidth` vs `scrollWidth` to confirm no horizontal overflow.
- **Grids collapse to 2 columns minimum** at 390px (never 1 column unless the content is genuinely a single stream).
- **Tap targets ≥44px** on all interactive elements.
- **Long nav bars** scroll horizontally with `overflow-x-auto whitespace-nowrap`. They never wrap.
- **Modals on mobile** become full-height bottom sheets with a drag-handle pill affordance, anchored to `items-end sm:items-center`.

---

## Charts

- **Sequential data:** monochrome cobalt ramp (`#2563EB → #608CFA → #93B4FD → #BFD3FE → #E2E8F0`).
- **Two series:** cobalt + amber, that pairing only.
- **Three or more series:** rethink the chart. If you must, use the cobalt ramp; never invent a rainbow.
- **Gridlines:** 1px in `#E2E8F0`, horizontal only.
- **Axis labels:** Geist Mono, 12px, in `#475569`.
- **No 3D, no drop shadows, no gradient fills inside bars.**
- **Always include a footnote** with the data source in mono uppercase.

---

## Caching (web only)

When an artifact fetches runtime data (`data.json`, an API endpoint), ship three layers of cache defense from day 1:

1. **Edge header** in `vercel.json`:
   ```json
   { "source": "/data.json", "headers": [{ "key": "Cache-Control", "value": "public, max-age=0, must-revalidate" }] }
   ```
2. **Cache-bust query param** on the fetch:
   ```ts
   fetch(`data.json?v=${Date.now()}`)
   ```
3. **Content-hashed JS/CSS filenames** with `Cache-Control: public, max-age=31536000, immutable`. Hashing does the work — never cache-bust hashed assets with `?v=`.

Verify after deploy: `curl -sI <url>/data.json` returns the expected headers, and a redeployed data file serves new content without a hard refresh.

---

## What GFBI is not

- Not soft, not friendly-blob, not pastel, not gradient-heavy.
- Not minimalist-Swiss either — headlines are bold and oversized, not whisper-thin.
- Not Material Design. No elevation pillows, no FABs, no chip-rounded buttons.
- Not vibrant for the sake of vibrant. The cobalt earns its appearance by being rare.

The aim is **bold but quiet**: one loud color, big confident type, sharp corners, plenty of breathing room, and copy that respects the reader's time.
