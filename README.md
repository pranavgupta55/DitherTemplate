# Dither Template

A compact **Next.js + React + TypeScript + Tailwind** template for a tactical, editorial terminal aesthetic.

This repository is intentionally small: it functions as a living design-system demo with reusable UI primitives, an animated background, a section navigator, and a bottom-sheet inspector panel.

## Stack

- Next.js 16
- React 19
- TypeScript
- Tailwind CSS 4
- Framer Motion
- Lucide React

## Getting started

1. Install dependencies:

   ```bash
   npm install
   ```

2. Start the development server:

   ```bash
   npm run dev
   ```

3. Open `http://localhost:3000`.

## Scripts

```bash
npm run dev
npm run build
npm run start
npm run lint
npm run typecheck
```

## Project structure

```text
app/
  globals.css
  layout.tsx
  page.tsx
components/
  layout/
    Background.tsx
    BottomSheet.tsx
    SectionNav.tsx
  ui/
    TacticalUI.tsx
lib/
  utils.ts
```

## Repository hygiene

This project should be shared **without** local machine artifacts. Do not commit or zip the following:

- `node_modules/`
- `.next/`
- `.git/` when sending a release snapshot
- macOS archive metadata such as `__MACOSX/`
- generated files such as `tsconfig.tsbuildinfo`

After cloning or unzipping on a new machine, run `npm install` so the correct platform-specific native packages are installed for that system.
