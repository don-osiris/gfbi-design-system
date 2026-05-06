# Prompts for Claude Design

Two prompts. The first is one-time, used right after you re-upload the renamed folder. The second is reusable — paste it as a header on every new artifact request.

---

## 1) One-time re-ingest prompt (use after you re-upload the GFBI folder)

> I just re-uploaded my design system. Two things changed since the last version you saw:
>
> 1. **Name change.** The system used to be called *AbuChip*. It's now called **GFBI**, short for **Glance Foresight & Behavioral Insights**. Every artifact you generate from here on should carry the GFBI wordmark — never AbuChip.
>
> 2. **Brand fonts now bundled.** I added `assets/fonts/` with the actual Geist Sans (Regular / Medium / SemiBold / Bold) and Geist Mono (Regular / Medium / SemiBold) `.woff2` files plus the OFL license. Use those fonts directly. Do not substitute web fonts. The previous warning that brand fonts were missing should now be resolved.
>
> Please confirm:
> - You see the GFBI wordmark (cobalt chip with a rising trend line, three observed data points, and a highlighted forecast point) and not the old AbuChip mark.
> - You're using bundled `Geist` and `Geist Mono` from `assets/fonts/` and not falling back to substitutes.
> - You've read `NOTES.md` end-to-end and `README.md` end-to-end.
>
> If anything in the new system contradicts what you remembered from the previous upload, drop the old version completely. The current upload is the truth.

---

## 2) Reusable per-artifact prompt (paste at the top of every new request)

> **Brand:** GFBI — Glance Foresight & Behavioral Insights. Bold-modern, electric cobalt accent (#2563EB), ink #0F172A on warm paper #FAFAF9, sharp 2px corners, Geist typography, oversized tight headlines, plain-language voice.
>
> **Hard rules** (do not violate):
> 1. Wordmark always reads "GFBI" — never "AbuChip", never spell out "Glance Foresight & Behavioral Insights" inside the mark itself; only spell it out in body copy on first mention.
> 2. Use bundled `Geist` and `Geist Mono` from `assets/fonts/`. Never substitute web fonts.
> 3. One accent — cobalt. No gradients except the approved cobalt-to-indigo on landing-page heroes.
> 4. Sharp 2px corners on cards/buttons, 0px on dividers and image frames. Never pill-shaped.
> 5. Numerals always tabular and in Geist Mono.
> 6. Charts: monochrome cobalt for sequential, cobalt + amber #EA580C for two series. Never rainbow palettes. Always footnote the data source in mono uppercase.
> 7. Mobile must work at 390px viewport: grids ≥2 columns, tap targets ≥44px, no horizontal overflow.
> 8. Voice: plain, direct, short sentences. Spell out acronyms on first use. Cut jargon.
>
> **Now build:** *[describe the artifact you want — e.g. "a 5-slide deck on early-career user churn, with one KPI slide and one section divider," or "a one-page report titled 'X' with three findings and a sidebar," or "a landing page for a new GFBI tool called Y"]*

---

## Tips on using the reusable prompt

- **Keep the rules block intact every time.** Even when you're describing the artifact, leave the hard-rules list above the description. Claude Design weighs constraints near the top more heavily.
- **Be specific about deliverable type and length.** "5-slide deck," "one-page report," "single dashboard panel with three KPIs and one chart" — concrete shape produces concrete output.
- **Say what's load-bearing.** If a slide must contain a specific number, name, or quote, write it inline in the prompt. Don't assume Claude Design will reach into context for it.
- **Re-paste the prompt verbatim each new session.** Claude Design's context resets between artifacts; the rules don't carry over silently.
- **If you see drift** (wrong fonts, wrong corner radius, AbuChip wordmark coming back, rainbow palette in a chart), call it out by rule number: *"Rule 4 — corners look pill-shaped. Redo with 2px sharp."* That's faster than re-explaining the whole system.

---

## Quick reference

| What | Value |
|---|---|
| System name | GFBI |
| Full expansion | Glance Foresight & Behavioral Insights |
| Primary accent | `#2563EB` (electric cobalt) |
| Ink | `#0F172A` |
| Paper | `#FAFAF9` |
| Rule | `#E2E8F0` |
| Chart reserve | `#EA580C` (amber) — two-series only |
| UI/body font | Geist Sans (bundled) |
| Number/data font | Geist Mono (bundled) |
| Corner radius | 2px sharp |
| Mobile baseline | 390px verified |
