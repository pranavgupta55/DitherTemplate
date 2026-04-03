"use client";

import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";

const SECTIONS = [
  { id: "overview", label: "Overview", number: "01" },
  { id: "typography", label: "Typography", number: "02" },
  { id: "colors", label: "Color Palette", number: "03" },
  { id: "components", label: "Components", number: "04" },
];

export function SectionNav() {
  const [activeTab, setActiveTab] = useState(SECTIONS[0].id);
  const isClickScrolling = useRef(false);
  const scrollTimeout = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    const observers = SECTIONS.map((section) => {
      const element = document.getElementById(section.id);

      if (!element) {
        return null;
      }

      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting && !isClickScrolling.current) {
              setActiveTab(section.id);
            }
          });
        },
        { rootMargin: "-40% 0px -60% 0px" },
      );

      observer.observe(element);
      return observer;
    });

    return () => {
      observers.forEach((observer) => observer?.disconnect());

      if (scrollTimeout.current) {
        clearTimeout(scrollTimeout.current);
      }
    };
  }, []);

  const scrollTo = (id: string) => {
    const element = document.getElementById(id);

    if (!element) {
      return;
    }

    isClickScrolling.current = true;
    setActiveTab(id);
    element.scrollIntoView({ behavior: "smooth", block: "start" });

    if (scrollTimeout.current) {
      clearTimeout(scrollTimeout.current);
    }

    scrollTimeout.current = setTimeout(() => {
      isClickScrolling.current = false;
    }, 1000);
  };

  return (
    <nav className="fixed top-1/2 left-8 z-40 hidden -translate-y-1/2 xl:flex xl:flex-col">
      <div className="flex w-64 flex-col gap-1 rounded-xl border border-border-light bg-white/[0.02] p-2 shadow-2xl backdrop-blur-md">
        {SECTIONS.map((section) => {
          const isActive = activeTab === section.id;

          return (
            <button
              key={section.id}
              type="button"
              onClick={() => scrollTo(section.id)}
              aria-current={isActive ? "page" : undefined}
              className="relative flex w-full items-center gap-3 rounded-md px-3 py-2 text-left text-sm font-sans transition-colors"
            >
              {isActive ? (
                <motion.div
                  layoutId="active-nav"
                  className="absolute inset-0 -z-10 rounded-md border border-accent-red/20 bg-accent-red/10"
                  transition={{ type: "spring", stiffness: 300, damping: 30 }}
                />
              ) : null}

              <span
                className={cn(
                  "font-mono text-xs",
                  isActive ? "text-accent-red" : "text-text-dim",
                )}
              >
                {section.number}
              </span>
              <span
                className={cn(
                  "truncate",
                  isActive
                    ? "text-text-main"
                    : "text-text-dim hover:text-white/70",
                )}
              >
                {section.label}
              </span>
            </button>
          );
        })}
      </div>
    </nav>
  );
}
