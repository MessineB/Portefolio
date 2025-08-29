"use client";
import { motion } from "framer-motion";
import { fadeUp } from "../lib/motion";
import { PenTool, Smartphone, Palette, Airplay, Database, Route } from "lucide-react";

const items = [
  { icon: PenTool, title: "Website Design",  desc: "Sites modernes et accessibles." },
  { icon: Smartphone, title: "Mobile App Design",  desc: "UI clean pour apps iOS/Android et Tablettes." },
  { icon: Palette, title: "Creation d'identité visuelle",  desc: "Systèmes visuels cohérents." },
  { icon: Airplay, title: "Deploiment", desc: "Mise en ligne et maintenance." },
  { icon: Database, title: "Base de données", desc: "Création et gestion." },
  { icon: Route, title: "Conception", desc: "Plannification des technologies." },
];

export const Services = () => (
  <section id="services" className="scroll-mt-20 py-16">
    <motion.h2 variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }} className="text-2xl font-semibold">
      Ce que je propose
    </motion.h2>
    <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {items.map(({ icon: Icon, title, desc }) => (
        <motion.div
          key={title}
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="rounded-2xl border ui-card p-5 shadow-sm"
        >
          <div className="flex items-center gap-3">
            <div className="rounded-xl p-3 bg-[var(--accent-soft)]"><Icon size={20} /></div>
            <div className="font-medium">{title}</div>
          </div>
          <p className="mt-3 text-sm ui-muted">{desc}</p>
        </motion.div>
      ))}
    </div>
  </section>
);
