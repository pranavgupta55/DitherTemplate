"use client";

import { useState } from "react";

import { BottomSheet } from "@/components/layout/BottomSheet";
import { Badge, CodeLink, ColorSwatch, DataCard, Eyebrow } from "@/components/ui/TacticalUI";

type ToolId = "feature-toggle" | "inspector";
type BadgeVariant = "red" | "gold" | "green" | "dim";

const palette = [
  { label: "Background Base", hex: "#111110", colorClass: "bg-bg-base" },
  { label: "Background Panel", hex: "rgba(255,255,255,0.02)", colorClass: "bg-bg-panel" },
  { label: "Inspector", hex: "#151412", colorClass: "bg-bg-inspector" },
  { label: "Border Light", hex: "rgba(255,255,255,0.06)", colorClass: "bg-border-light border-white/20" },
  { label: "Text Main", hex: "#E8E0D4", colorClass: "bg-text-main" },
  { label: "Text Dimmed", hex: "#7A7873", colorClass: "bg-text-dim" },
  { label: "Accent Gold", hex: "#C4A052", colorClass: "bg-accent-gold" },
  { label: "Accent Red", hex: "#AD544B", colorClass: "bg-accent-red" },
] as const;

const treePalette = [
  { label: "Tree Blue", hex: "#7C9FB4", colorClass: "bg-tree-blue" },
  { label: "Tree Green", hex: "#79A773", colorClass: "bg-tree-green" },
  { label: "Tree Yellow", hex: "#D1A556", colorClass: "bg-tree-yellow" },
  { label: "Tree Rust", hex: "#C17C5F", colorClass: "bg-tree-rust" },
  { label: "Tree Purple", hex: "#9C7EB8", colorClass: "bg-tree-purple" },
  { label: "Tree Grey", hex: "#8A857F", colorClass: "bg-tree-grey" },
] as const;

const toolDetails: Record<
  ToolId,
  {
    title: string;
    badge: string;
    badgeVariant: BadgeVariant;
    subtitle: string;
    body: string;
    files: readonly string[];
  }
> = {
  "feature-toggle": {
    title: "Feature Toggle",
    badge: "Feature Control",
    badgeVariant: "red",
    subtitle: "State Management",
    body:
      "Feature toggles let you expose or hide functionality without redeploying the whole application. They are useful for staged rollouts, experiments, and role-based access patterns.",
    files: ["app/page.tsx", "components/ui/TacticalUI.tsx", "components/layout/BottomSheet.tsx"],
  },
  inspector: {
    title: "Inspector",
    badge: "Layout Systems",
    badgeVariant: "red",
    subtitle: "Interactive State",
    body:
      "The inspector pane slides up from the bottom to provide extra context without making you lose your place in the broader grid view. It is designed for technical documentation and component deep dives.",
    files: ["components/layout/BottomSheet.tsx", "app/page.tsx"],
  },
};

export default function Showcase() {
  const [selectedTool, setSelectedTool] = useState<ToolId | null>(null);
  const activeTool = selectedTool ? toolDetails[selectedTool] : null;

  return (
    <div className="space-y-48 pb-48">
      <section id="overview" className="max-w-3xl scroll-mt-32 space-y-8 pt-16">
        <div className="flex items-center gap-4">
          <span className="font-sans text-sm uppercase tracking-widest text-accent-red">01</span>
          <div className="h-px w-12 bg-border-light" />
        </div>
        <h1 className="text-5xl font-bold tracking-tight md:text-7xl">
          <span className="font-sans">Dither</span>{" "}
          <span className="font-serif text-accent-red">Template</span>
        </h1>
        <p className="max-w-2xl font-serif text-lg leading-relaxed text-text-dim">
          A tactical, editorial terminal aesthetic. This page acts as a living design system,
          showcasing the built-in elements, layout primitives, and typography pairings.
        </p>
        <div className="pt-4">
          <Badge variant="dim">Version 1.0.0</Badge>
        </div>
      </section>

      <section id="typography" className="scroll-mt-32 space-y-12">
        <Eyebrow title="Typography System" count="3 Typefaces" />

        <div className="grid grid-cols-1 gap-12 md:grid-cols-2">
          <div className="space-y-4 rounded-xl border border-border-light bg-bg-panel p-6">
            <h3 className="font-serif text-3xl text-text-main">Playfair Display</h3>
            <p className="font-sans text-sm text-text-dim">
              Primary serif. Used for main headlines, academic presence, and editorial body prose.
            </p>
            <div className="border-t border-border-light/50 pt-4 font-serif text-lg text-text-main">
              The quick brown fox jumps over the lazy dog.
            </div>
          </div>

          <div className="space-y-4 rounded-xl border border-border-light bg-bg-panel p-6">
            <h3 className="font-sans text-3xl font-bold tracking-tight text-text-main">Inter</h3>
            <p className="font-sans text-sm text-text-dim">
              Primary sans serif. Used for tactical UI elements, micro-labels, and contrast-heavy
              headings.
            </p>
            <div className="border-t border-border-light/50 pt-4 font-sans text-lg text-text-main">
              The quick brown fox jumps over the lazy dog.
            </div>
          </div>

          <div className="space-y-4 rounded-xl border border-border-light bg-bg-panel p-6 md:col-span-2">
            <h3 className="font-mono text-2xl text-text-main">JetBrains Mono</h3>
            <p className="font-sans text-sm text-text-dim">
              Monospace. Used for dense data grids, source code paths, and numeric values.
            </p>
            <div className="border-t border-border-light/50 pt-4 font-mono text-sm text-code-text">
              0123456789 !@#$%^&amp;*() app/page.tsx components/layout/BottomSheet.tsx
            </div>
          </div>
        </div>
      </section>

      <section id="colors" className="scroll-mt-32 space-y-12">
        <Eyebrow title="Design Tokens" count="Tactical Palette" />

        <div className="grid grid-cols-2 gap-6 sm:grid-cols-3 md:grid-cols-4">
          {palette.map((swatch) => (
            <ColorSwatch key={swatch.label} {...swatch} />
          ))}

          <div className="col-span-full mt-4">
            <Eyebrow title="Data Visualization Colors" count={"Treemap & Charts"} />
          </div>

          {treePalette.map((swatch) => (
            <ColorSwatch key={swatch.label} {...swatch} />
          ))}
        </div>
      </section>

      <section id="components" className="scroll-mt-32 space-y-12">
        <Eyebrow title="Interactive Primitives" count={"Data Cards & Badges"} />

        <div className="grid grid-cols-1 gap-x-8 gap-y-12 md:grid-cols-2">
          <div className="space-y-6">
            <div className="border-b border-border-light pb-2 font-sans text-xs uppercase tracking-widest text-text-dim">
              Data Grids
            </div>
            <div className="flex flex-col gap-2">
              <DataCard
                label="Feature Toggle"
                state={selectedTool === "feature-toggle" ? "active" : "default"}
                onClick={() => setSelectedTool("feature-toggle")}
              />
              <DataCard
                label="Inspector"
                state={selectedTool === "inspector" ? "active" : "default"}
                onClick={() => setSelectedTool("inspector")}
              />
              <DataCard label="LegacySystemConfig" state="locked" />
            </div>
            <p className="pt-2 font-serif text-sm text-text-dim">
              Click a live card above to trigger the bottom sheet overlay.
            </p>
          </div>

          <div className="space-y-6">
            <div className="border-b border-border-light pb-2 font-sans text-xs uppercase tracking-widest text-text-dim">
              Badges &amp; Links
            </div>
            <div className="flex flex-wrap items-center gap-4">
              <Badge variant="gold">System Setup</Badge>
              <Badge variant="green">Active Task</Badge>
              <Badge variant="dim">Deprecated</Badge>
            </div>
            <div className="pt-4">
              <CodeLink>app/page.tsx</CodeLink>
            </div>
          </div>
        </div>
      </section>

      <BottomSheet
        isOpen={activeTool !== null}
        onClose={() => setSelectedTool(null)}
        title={activeTool?.title}
      >
        {activeTool ? (
          <>
            <div className="mb-6 flex items-center gap-3">
              <Badge variant={activeTool.badgeVariant}>{activeTool.badge}</Badge>
              <span className="font-sans text-sm text-text-dim">{activeTool.subtitle}</span>
            </div>

            <p className="mb-8 max-w-2xl leading-relaxed text-text-dim">{activeTool.body}</p>

            <div className="space-y-3">
              <p className="font-sans text-[10px] uppercase tracking-widest text-text-dim">
                Relevant Files
              </p>
              <div className="flex flex-wrap gap-3">
                {activeTool.files.map((file) => (
                  <CodeLink key={file}>{file}</CodeLink>
                ))}
              </div>
            </div>
          </>
        ) : null}
      </BottomSheet>
    </div>
  );
}
