import type { ReactNode } from "react";

import { ExternalLink, Lock } from "lucide-react";

import { cn } from "@/lib/utils";

export function Eyebrow({ title, count }: { title: string; count?: string }) {
  return (
    <div className="mb-4 flex flex-col gap-1">
      <span className="font-sans text-[10px] font-bold uppercase tracking-[0.15em] text-accent-red">
        {title}
      </span>
      {count ? <span className="font-sans text-[10px] capitalize text-text-dim">{count}</span> : null}
    </div>
  );
}

type BadgeVariant = "red" | "gold" | "green" | "dim";

export function Badge({
  children,
  variant = "red",
}: {
  children: ReactNode;
  variant?: BadgeVariant;
}) {
  const variants: Record<BadgeVariant, string> = {
    red: "border-accent-red/30 bg-accent-red/20 text-accent-red",
    green: "border-accent-green/20 bg-accent-green/10 text-accent-green",
    gold: "border-accent-gold/20 bg-accent-gold/10 text-accent-gold",
    dim: "border-white/10 bg-white/5 text-text-dim",
  };

  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full border px-2 py-0.5 font-sans text-[10px] uppercase tracking-wider",
        variants[variant],
      )}
    >
      {children}
    </span>
  );
}

export function CodeLink({ href, children }: { href?: string; children: ReactNode }) {
  const sharedClasses =
    "inline-flex w-fit items-center gap-2 rounded-md border border-accent-green/20 bg-accent-green/5 px-3 py-1.5 transition-colors";

  const content = (
    <>
      {href ? (
        <ExternalLink
          size={12}
          className="text-accent-green/60 transition-colors group-hover:text-accent-green/90"
        />
      ) : null}
      <span className="font-mono text-xs text-code-green/80 transition-colors group-hover:text-code-green">
        {children}
      </span>
    </>
  );

  if (!href) {
    return <span className={cn(sharedClasses, "cursor-default")}>{content}</span>;
  }

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={cn(sharedClasses, "group hover:bg-accent-green/10")}
    >
      {content}
    </a>
  );
}

interface DataCardProps {
  label: string;
  state?: "default" | "active" | "locked";
  onClick?: () => void;
}

export function DataCard({ label, state = "default", onClick }: DataCardProps) {
  const baseClasses =
    "flex w-full items-center justify-between rounded-md border px-3 py-2 text-left font-mono text-sm transition-all";

  const states = {
    default: "border-border-light bg-bg-panel text-text-main hover:bg-white/[0.04]",
    active: "border-accent-green bg-accent-green/10 text-white",
    locked: "cursor-not-allowed border-dashed border-border-dashed bg-transparent text-text-dim opacity-70",
  };

  return (
    <button
      type="button"
      onClick={state !== "locked" ? onClick : undefined}
      disabled={state === "locked"}
      aria-pressed={state === "active"}
      className={cn(baseClasses, states[state])}
    >
      <span className="truncate">{label}</span>
      {state === "locked" ? <Lock size={12} className="ml-2 shrink-0" /> : null}
    </button>
  );
}

export function ColorSwatch({
  colorClass,
  hex,
  label,
}: {
  colorClass: string;
  hex: string;
  label: string;
}) {
  return (
    <div className="flex flex-col gap-2">
      <div className={cn("h-16 w-full rounded-md border border-border-light shadow-inner", colorClass)} />
      <div className="flex flex-col">
        <span className="font-sans text-xs font-semibold text-text-main">{label}</span>
        <span className="font-mono text-[10px] uppercase tracking-wider text-text-dim">{hex}</span>
      </div>
    </div>
  );
}
