"use client";
import { motion } from "framer-motion";
import { fadeUp } from "../lib/motion";
import { EmailLink } from "./mail/Email.link";

export const Contact = () => (
  <section id="contact" className="scroll-mt-20 py-16">
    <motion.div
      variants={fadeUp}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true }}
      className="rounded-2xl border ui-card p-6 text-center shadow-sm"
    >
      <h2 className="text-2xl font-semibold">Faisons quelque chose de génial</h2>
      <p className="mt-3 ui-muted">Dites-moi bonjour 👋</p>
      
<EmailLink
  email="messinebelaroussi@gmail.com"
  subject="Contact portfolio"
  className="mt-5 inline-block rounded-xl bg-emerald-600 px-5 py-3 text-white hover:opacity-90"
>
  messinebelaroussi@gmail.com
</EmailLink>
    </motion.div>

  </section>
);
