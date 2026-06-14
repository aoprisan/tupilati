# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## What this is

A single-page informational website (in Romanian) about **Comuna Tupilați, județul Neamț** —
its four villages, history, demographics, monuments, and the famous *Hanul Ancuței*.
Static React + TypeScript + Vite site, auto-deployed to GitHub Pages at
https://aoprisan.github.io/tupilati/.

All user-facing text and the data model are in **Romanian** (including diacritics). Match
this language and tone when editing content or adding sections.

## Commands

```bash
npm install      # install dependencies
npm run dev      # Vite dev server
npm run build    # type-check (tsc --noEmit) then production build into ./dist
npm run preview  # serve the production build locally
```

There is no test suite and no linter — `npm run build` is the only gate (it fails on any
type error, including unused locals/params, which `tsconfig.json` enforces via `strict`,
`noUnusedLocals`, and `noUnusedParameters`).

## Architecture

Content and presentation are deliberately separated:

- **`src/data/comuna.ts`** is the single source of truth for all factual content. It exports
  typed constants (`identitate`, `geografie`, `sate`, `recensaminte`, `demografie`, `istorie`,
  `hanulAncutei`, `monumente`, `economie`, `administratie`, `contact`, `sources`) backed by
  interfaces (`Sat`, `Recensamant`, `Monument`, etc.). To change facts, edit this file — not
  the components. Every claim traces back to a public source listed in `sources`.

- **`src/components/`** holds one presentational component per page section. Each imports the
  relevant constant(s) from `comuna.ts` and renders them; components carry no data of their own.
  The pattern is uniform: a `<section id="…" className="section …">` wrapping a `.container`,
  mapping over data into `.card`/`.card-grid` markup. Follow the existing component as a template
  when adding a section.

- **`src/App.tsx`** composes the page by ordering the section components between `<Header>` and
  `<Footer>`. Adding a section means: add data to `comuna.ts`, create the component, and slot it
  into the `<main>` in `App.tsx`. The section's `id` is also the in-page nav anchor (see `Header`).

- **`src/index.css`** is the entire stylesheet — global, no CSS modules or framework. Design
  tokens (color palette, radius, max width) live in `:root` CSS variables at the top; reuse them
  rather than hardcoding values. Shared classes (`.section`, `.container`, `.card`, `.badge`,
  `.section-title`, `.section-lead`) are the styling vocabulary.

## Deployment

- `vite.config.ts` sets `base: "/tupilati/"` to match the GitHub Pages project path. If the repo
  name changes, this must change too, or asset URLs break.
- `.github/workflows/deploy.yml` builds and deploys on push to `main` (and the
  `claude/tupilati-comuna-website-3rbgq6` branch). Requires GitHub Pages "Source" set to
  "GitHub Actions" in repo settings.
