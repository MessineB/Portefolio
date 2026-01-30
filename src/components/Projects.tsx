"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import { fadeUp } from "../lib/motion";

const projects = [
  { 
    title: "Apihistory",
    img: "/proj-1.jpg",
    tags: ["Site communautaire et utilitaire", "Prototype personnel"],
    link: "https://github.com/MessineB/Apihistory" // lien unique
  },
  { 
    title: "Wordle",
    img: "/proj-2.jpg",
    tags: ["Jeu en ligne", "Projet personnel", "Next/Nest"],
    link: "https://motus-messine-6ulf.vercel.app/" // lien unique
  },
  { 
    title: "GreenRoots",
    img: "/proj-3.jpg",
    tags: ["E-commerce", "Travail de groupe"],
    link: "https://github.com/MessineB/Greenroots" // lien unique
  },
];

export const Projects = () => (
  <section id="projects" className="scroll-mt-20 py-7">
    <motion.h2
      variants={fadeUp}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true }}
      className="text-2xl font-semibold"
    >
      Mes derniers travaux
    </motion.h2>

    <div className="mt-6 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
      {projects.map((p) => (
        <motion.a
          key={p.title}
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          href={p.link}
          target="_blank"
          rel="noopener noreferrer"
          className="group overflow-hidden rounded-2xl border ui-card shadow-sm"
        >
          <div className="relative aspect-[4/3]">
            <Image
              src={p.img}
              alt={p.title}
              fill
              className="object-cover transition-transform duration-500 group-hover:scale-105"
            />
          </div>
          <div className="p-4">
            <div className="font-medium">{p.title}</div>
            <div className="mt-2 flex flex-wrap gap-2">
              {p.tags.map((t) => (
                <span
                  key={t}
                  className="rounded-full ui-chip px-2 py-1 text-xs"
                >
                  {t}
                </span>
              ))}
            </div>
          </div>
        </motion.a>
      ))}
    </div>
  </section>
);
