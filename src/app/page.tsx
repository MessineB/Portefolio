"use client";

import dynamic from "next/dynamic";
import OnScrollMount from "../components/OnScrollMount";
import { Navbar } from "../components/Navbar";
import { Footer } from "../components/Footer";

// Adaptateur export nommé -> default
const Hero = dynamic(() => import("../components/Hero").then(m => ({ default: m.Hero })));
const Services = dynamic(() => import("../components/Services").then(m => ({ default: m.Services })), { ssr: false });
const About = dynamic(() => import("../components/About").then(m => ({ default: m.About })), { ssr: false });
const Experience = dynamic(() => import("../components/Experience").then(m => ({ default: m.Experience })), { ssr: false });
const Projects = dynamic(() => import("../components/Projects").then(m => ({ default: m.Projects })), { ssr: false });
const Contact = dynamic(() => import("../components/Contact").then(m => ({ default: m.Contact })), { ssr: false });

export default function Page() {
  return (
    <>
      <Navbar />
      <main className="mx-auto max-w-6xl px-4">
        {/* Hero visible direct (avec petite attente pour cohérence visuelle si tu veux) */}
        <OnScrollMount label="Hero" minDelay={300} triggerOffset="0px 0px -5% 0px">
          <Hero />
        </OnScrollMount>

        {/* Les autres ne montent que lorsqu’on y arrive en scroll */}
        <OnScrollMount label="Services" minDelay={450}><Services /></OnScrollMount>
        <OnScrollMount label="À propos" minDelay={400}><About /></OnScrollMount>
        <OnScrollMount label="Expérience" minDelay={450}><Experience /></OnScrollMount>
        <OnScrollMount label="Projets" minDelay={500}><Projects /></OnScrollMount>
        <OnScrollMount label="Contact" minDelay={350}><Contact /></OnScrollMount>
      </main>
      <Footer />
    </>
  );
}
