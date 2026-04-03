# Dither Template

A compact **Next.js + React + TypeScript + Tailwind** template for a tactical, editorial terminal aesthetic.

This repository is intentionally small: it functions as a living design-system demo with reusable UI primitives, an animated background, a section navigator, and a bottom-sheet inspector panel.

<img width="1800" height="999" alt="Screenshot 2026-04-03 at 3 54 06 AM" src="https://github.com/user-attachments/assets/0642f2d5-f527-4fbd-b184-a5ec61ef7ec7" />
<img width="1800" height="999" alt="Screenshot 2026-04-03 at 3 55 42 AM" src="https://github.com/user-attachments/assets/3cbb464d-a949-4571-85a5-5eae6d57d83a" />
<img width="1800" height="674" alt="Screenshot 2026-04-03 at 3 56 04 AM" src="https://github.com/user-attachments/assets/8e9e5406-8f28-48ce-a558-e77595dc09f6" />


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
