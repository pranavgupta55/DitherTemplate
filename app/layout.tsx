import type { Metadata } from "next";
import { Inter, JetBrains_Mono, Playfair_Display } from "next/font/google";
import type { ReactNode } from "react";

import "./globals.css";
import { Background } from "@/components/layout/Background";
import { SectionNav } from "@/components/layout/SectionNav";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const jetbrains = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Tactical Editorial Terminal",
    template: "%s | Tactical Editorial Terminal",
  },
  description: "A premium technical aesthetic template.",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" className={`${playfair.variable} ${inter.variable} ${jetbrains.variable}`}>
      <body className="relative min-h-screen overflow-x-hidden font-sans antialiased selection:bg-accent-gold/20 selection:text-accent-gold">
        <Background />
        <SectionNav />
        <main className="relative z-10 flex min-h-screen flex-col items-center px-6 py-24 xl:ml-32">
          <div className="w-full max-w-5xl">{children}</div>
        </main>
      </body>
    </html>
  );
}
