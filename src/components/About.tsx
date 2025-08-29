"use client";
import { motion } from "framer-motion";
import { fadeUp } from "../lib/motion";

export const About = () => (
  <section id="about" className="scroll-mt-20 py-16">
  <motion.div
    variants={fadeUp}
    initial="hidden"
    whileInView="show"
    viewport={{ once: true }}
    className="rounded-2xl border ui-card p-8 shadow-sm transition-colors duration-300"
  >
    <h3 className="text-2xl font-bold text-center transition-colors duration-300">
      Développeur web passionné, spécialisé en Symfony & TypeScript
    </h3>

    <p className="mt-6 ui-muted transition-colors duration-300 leading-relaxed">
      Développeur web diplômé niveau 5 (Bac+2) et récemment formé au titre professionnel de 
      <strong> Concepteur Développeur d’Applications (niveau 6)</strong> à l’école O’Clock, 
      je mets mes compétences au service de projets ambitieux et innovants.
    </p>

    <p className="mt-4 ui-muted transition-colors duration-300 leading-relaxed">
      Je conçois et développe des applications web <strong>fullstack</strong> en JavaScript/TypeScript 
      et Symfony, avec une attention particulière portée à la performance, à la sécurité et 
      à l’expérience utilisateur. Mon approche allie rigueur technique et souci du détail.
    </p>

    <p className="mt-4 ui-muted transition-colors duration-300 leading-relaxed">
      Curieux, créatif et orienté solution, j’apprécie autant travailler en équipe que mener des projets 
      en autonomie. J’aime relever des défis techniques et explorer en continu de nouvelles technologies 
      pour enrichir mon savoir-faire.
    </p>
  </motion.div>
</section>

);
