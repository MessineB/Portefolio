import type { Metadata } from "next";
import Script from "next/script";
import "./globals.css";
import { clsx } from "clsx";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Mon Portefolio — Messine BELAROUSSI",
  description: "Développeur Web  • React • Animations",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr" className="scroll-smooth" suppressHydrationWarning>
      <body className={clsx(inter.className, "antialiased")}>
        {/* Choix du thème avant le premier paint */}
        <Script id="theme-init" strategy="beforeInteractive">
          {`
            (function () {
              try {
                var saved = localStorage.getItem('theme');           // "light" | "dark" | null
                var prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
                var theme = (saved === 'light' || saved === 'dark') ? saved : (prefersDark ? 'dark' : 'light');
                document.documentElement.setAttribute('data-theme', theme);
              } catch (e) {}
            })();
          `}
        </Script>
        {children}
      </body>
    </html>
  );
}
