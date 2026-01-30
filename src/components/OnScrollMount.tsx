"use client";
import { useRef, useEffect, useState } from "react";
import { useInView, motion } from "framer-motion";

type Props = {
  children: React.ReactNode;
  label: string;
  minDelay?: number;
  minHeight?: number;
  /** Pour déclencher quand X% de la section est visible (0 à 1). Ex: 0.6 = 60% */
  triggerAmount?: number;
};

export default function OnScrollMount({
  children,
  label,
  minDelay = 450,
  minHeight = 520,
  triggerAmount = 0.6, // ≈ ton ancien "-40%" (déclenche quand ~60% visibles)
}: Props) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { amount: triggerAmount, once: true });
  const [armed, setArmed] = useState(false);
  const [started, setStarted] = useState(false);

  useEffect(() => {
    if (inView && !armed) {
      setStarted(true);
      const t = setTimeout(() => setArmed(true), minDelay);
      return () => clearTimeout(t);
    }
  }, [inView, armed, minDelay]);

  return (
    <section ref={ref} className="scroll-mt-20 py-7">
      {!armed ? (
        started ? (
          <div className="mx-auto max-w-6xl px-4" style={{ minHeight }}>
            {/* ton loader ici */}
          </div>
        ) : (
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
