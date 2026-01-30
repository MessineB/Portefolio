"use client";

import React, { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";

type Props = {
  children: React.ReactNode;
  minDelay?: number;
  className?: string;
  id?: string;
  ariaLabel?: string;
};

export default function LazySection({
  children,
  minDelay = 400,
  className,
  id,
  ariaLabel,
}: Props) {
  const ref = useRef<HTMLElement | null>(null);
  const inView = useInView(ref, { margin: "0px 0px -35% 0px", once: true });
  const [ready, setReady] = useState(false);

  useEffect(() => {
    if (!inView || ready) return;

    const t = window.setTimeout(() => setReady(true), minDelay);
    return () => window.clearTimeout(t);
  }, [inView, ready, minDelay]);

  return (
    <section
      ref={ref}
      id={id}
      aria-label={ariaLabel}
      className={`section-gap ${className ?? ""}`}
    >
      {!ready ? (
        <div aria-hidden="true" className="mx-auto max-w-6xl px-4">
          <div className="h-1 w-full overflow-hidden rounded-full bg-zinc-200">
            <motion.div
              initial={{ width: "0%" }}
              animate={{ width: "100%" }}
              transition={{
                duration: Math.max(minDelay / 1000, 0.45),
                ease: [0.22, 1, 0.36, 1],
              }}
              className="h-full bg-emerald-500"
            />
          </div>
        </div>
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
