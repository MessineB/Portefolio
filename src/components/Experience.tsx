"use client";
import { motion } from "framer-motion";
import { fadeUp } from "../lib/motion";

const jobs = [
    { role: "Developpeur Web Symfony et gestionnaire informatique", company: "OMAH Lab", period: "2024 — 2025", points: ["Conception", "Creation", "Mise en ligne"] },
    { role: "Professeur Particulier", company: "Superprof", period: "2023 — 2024", points: ["Cours Informatique et Mathematique", "Creation d'exercise particulier", "Accompagnement"] },
    { role: "Developpeur web en stage", company: "Connexion Graphique", period: "2023 —2023", points: ["Travail sur un site deja existant", "Modifications sur la production", "Tests de sécurité"] },
];

export const Experience = () => (
    <section id="experience" className="scroll-mt-20 py-16">
        <motion.h2 variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }} className="text-2xl font-semibold">
            Mon expérience
        </motion.h2>
        <div className="mt-6 space-y-4">
            {jobs.map((j) => (
                <motion.div
                    key={j.role}
                    variants={fadeUp}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true }}
                    className="rounded-2xl border ui-card p-5 shadow-sm"
                >
                    <div className="flex flex-wrap items-baseline justify-between gap-2">
                        <div className="font-medium">{j.role} — {j.company}</div>
                        <div className="text-sm ui-muted">{j.period}</div>
                    </div>
                    <ul className="mt-3 list-disc space-y-1 pl-5 text-sm ui-muted">
                        {j.points.map((p) => <li key={p}>{p}</li>)}
                    </ul>
                </motion.div>
            ))}
        </div>
    </section>
);
