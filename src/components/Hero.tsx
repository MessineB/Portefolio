"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import { fadeUp, stagger } from "../lib/motion";

export const Hero = () => {
    return (
        <section className="grid items-center gap-10 py-16 md:grid-cols-2 md:py-24">
            {/* Texte */}
            <motion.div variants={stagger} initial="hidden" animate="show">
            <motion.p variants={fadeUp} className="text-sm ui-muted">Back • Frontend • API • Sécurité • Conception</motion.p>
                <motion.h1 variants={fadeUp} className="mt-2 text-4xl font-bold leading-tight md:text-5xl">
                    Salut, Je suis <span className="text-emerald-600">Messine Belaroussi !</span>
                </motion.h1>
                <motion.p variants={fadeUp} className="mt-4 ui-muted">
                Développeur web passionné, diplômé niveau 5 (Bac+2) et récemment formé au titre professionnel de Concepteur Développeur d’Applications (niveau 6) à l’école O’Clock.
                </motion.p>
                <motion.div variants={fadeUp} className="mt-8 flex gap-3">
                    <a href="#projects" className="rounded-xl bg-emerald-600 px-5 py-3 text-white hover:opacity-90">
                        Voir mes travaux
                    </a>
                    <a href="#contact" className="rounded-xl border ui-border px-5 py-3 hover:bg-[var(--hover-bg)]">
                        Me contacter
                    </a>
                </motion.div>

                <motion.div variants={fadeUp} className="mt-8 grid grid-cols-2 gap-4 text-sm">
                    <div>
                    <div className="text-3xl font-semibold">2+</div>
                    <div className="ui-muted">Années d’expérience</div>
                    </div>
                    <div>
                        <div className="text-3xl font-semibold">100%</div>
                        <div className="text-zinc-500">Clients satisfaits</div>
                    </div>
                    <div>
                        <div className="text-3xl font-semibold">40+</div>
                        <div className="text-zinc-500">Projets personnels</div>
                    </div>
                    <div>
                        <div className="text-3xl font-semibold">100%</div>
                        <div className="text-zinc-500">Passion pour le développement</div>
                    </div>
                </motion.div>
            </motion.div>

            {/* Photo + “peinture” */}
            <motion.div
                initial={{ opacity: 0, scale: 0.98 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                className="relative mx-auto aspect-[4/5] w-[min(420px,90%)]"
            >
                {/* Motif peinture */}
                <div aria-hidden className="absolute -inset-6 -z-10">
                    <svg viewBox="0 0 400 500" className="h-full w-full">
                        <path
                            d="M20,250 C30,120 180,40 260,60 C360,85 390,190 360,300 C330,410 200,480 110,440 C30,410 10,330 20,250 Z"
                            className="fill-emerald-200"
                        />
                    </svg>
                </div>
                {/* Cadre image */}
                <div className="overflow-hidden rounded-3xl border border-zinc-200 shadow-xl">
                    <Image
                        src="/portrait.jpg"
                        alt="Photo de profil"
                        width={800}
                        height={1000}
                        className="h-full w-full object-cover"
                        priority
                    />
                </div>
            </motion.div>
        </section>
    );
};
