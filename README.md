# Dither Template

A compact **Next.js + React + TypeScript + Tailwind** template for a tactical, editorial terminal aesthetic.

This repository is intentionally small: it functions as a living design-system demo with reusable UI primitives, an animated background, a section navigator, and a bottom-sheet inspector panel.

<img width="1800" height="1000" alt="Screenshot 2026-04-03 at 4 25 08 AM" src="https://github.com/user-attachments/assets/7ea7c9f2-0d32-440d-817c-48e8d8a964a3" />
<img width="1800" height="1000" alt="Screenshot 2026-04-03 at 4 25 16 AM" src="https://github.com/user-attachments/assets/eacbe3b7-c9c9-48a4-b595-84dc3b243d24" />
<img width="1800" height="1000" alt="Screenshot 2026-04-03 at 4 25 23 AM" src="https://github.com/user-attachments/assets/20a12a8d-bdf3-4f1f-bbbd-71e22725c37c" />


## Stack

- Next.js 16
- React 19
- TypeScript
- Tailwind CSS 4
- Framer Motion
- Lucide React

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

## Cross-Platform Usage

This project should be shared **without** local machine artifacts. Do not commit or zip the following:

- `node_modules/`
- `.next/`
- `.git/` when sending a release snapshot
- macOS archive metadata such as `__MACOSX/`
- generated files such as `tsconfig.tsbuildinfo`

After cloning or unzipping on a new machine, run `npm install` so the correct platform-specific native packages are installed for that system.
