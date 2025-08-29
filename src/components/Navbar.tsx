"use client";
import { motion } from "framer-motion";
import { fadeUp } from "../lib/motion";
import { ThemeToggle } from "./ThemeToggle";

export const Navbar = () => (
    <motion.header
    initial="hidden"
    animate="show"
    variants={fadeUp}
    className="sticky top-0 z-40 backdrop-blur border-b ui-nav"
  >
    <nav className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3">
      <a href="#" className="font-semibold tracking-tight">Messine Belaroussi</a>
      <div className="hidden gap-6 md:flex text-sm">
        {/* tu peux laisser tel quel ou mettre text-[var(--muted)] + hover:text-[var(--fg)] */}
        <a href="#services" className="hover:text-[var(--fg)]">Services</a>
        <a href="#about" className="hover:text-[var(--fg)]">À propos</a>
        <a href="#experience" className="hover:text-[var(--fg)]">Expérience</a>
        <a href="#projects" className="hover:text-[var(--fg)]">Projets</a>
        <a href="#contact" className="hover:text-[var(--fg)]">Contact</a>
      </div>
      <div className="flex items-center gap-2">
        <ThemeToggle />
      </div>
    </nav>
  </motion.header>  
);
