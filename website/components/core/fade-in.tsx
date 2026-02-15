"use client";

import { useRef, useEffect, useState } from "react";
import { motion } from "motion/react";

export function FadeIn({
  children,
  className,
  delay = 0,
}: {
  children: React.ReactNode;
  className?: string;
  delay?: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [wasAboveFold, setWasAboveFold] = useState(false);
  const [checked, setChecked] = useState(false);

  useEffect(() => {
    if (ref.current) {
      const rect = ref.current.getBoundingClientRect();
      setWasAboveFold(rect.top < window.innerHeight);
      setChecked(true);
    }
  }, []);

  if (!checked) {
    return (
      <div ref={ref} className={className} style={{ opacity: 0 }}>
        {children}
      </div>
    );
  }

  if (wasAboveFold) {
    return (
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: "easeOut", delay }}
        className={className}
      >
        {children}
      </motion.div>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, ease: "easeOut", delay }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
