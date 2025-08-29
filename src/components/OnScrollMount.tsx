"use client";
import { useRef, useEffect, useState } from "react";
import { useInView, motion } from "framer-motion";
import { SectionLoading } from "./SectionLoading";

type Props = {
  children: React.ReactNode;
  label: string;
  /** Durée mini d’affichage du loader (ms) */
  minDelay?: number;
  /** Hauteur réservée avant chargement (évite les sauts de mise en page) */
  minHeight?: number;
  /** Quand déclencher par rapport au viewport (IntersectionObserver rootMargin) */
  triggerOffset?: string; // ex: "0px 0px -40% 0px" (déclenche quand ~60% visibles)
};

export default function OnScrollMount({
  children,
  label,
  minDelay = 450,
  minHeight = 520,
  triggerOffset = "0px 0px -40% 0px",
}: Props) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { margin: triggerOffset, once: true });
  const [armed, setArmed] = useState(false);     // prêt à afficher contenu
  const [started, setStarted] = useState(false); // a-t-on montré le loader

  useEffect(() => {
    if (inView && !armed) {
      setStarted(true);
      const t = setTimeout(() => setArmed(true), minDelay);
      return () => clearTimeout(t);
    }
  }, [inView, armed, minDelay]);

  return (
    <section ref={ref} className="scroll-mt-20 py-16">
      {!armed ? (
        // Loader n’apparaît QUE quand la section est atteinte
        started ? (
          <div className="mx-auto max-w-6xl px-4" style={{ minHeight }}>
            <SectionLoading label={label} />
          </div>
        ) : (
          // Placeholder transparent pour garder la place tant qu’on n’a pas atteint la section
          <div className="mx-auto max-w-6xl px-4" style={{ minHeight }} aria-hidden="true" />
        )
      ) : (
        <motion.div
          initial={{ opacity: 0, y: 18, filter: "blur(6px)" }}
          animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
        >
          {children}
        </motion.div>
      )}
    </section>
  );
}
