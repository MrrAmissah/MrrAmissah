"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";

const DURATION = 1100;
const STORAGE_KEY = "pka-intro-seen";

/**
 * Brief count-up curtain over the page. Purely decorative: the page content is
 * already in the DOM behind it, so it never gates content or crawlers.
 */
export function Preloader() {
  const reduced = useReducedMotion();
  const [visible, setVisible] = useState(false);
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (reduced) return;
    if (sessionStorage.getItem(STORAGE_KEY)) return;

    setVisible(true);

    const start = performance.now();
    let frame = 0;

    const tick = (now: number) => {
      const progress = Math.min((now - start) / DURATION, 1);
      // Ease-out so the numbers sprint then settle.
      setCount(Math.round((1 - Math.pow(1 - progress, 3)) * 100));

      if (progress < 1) {
        frame = requestAnimationFrame(tick);
      } else {
        sessionStorage.setItem(STORAGE_KEY, "1");
        setVisible(false);
      }
    };

    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, [reduced]);

  return (
    <AnimatePresence>
      {visible ? (
        <motion.div
          aria-hidden
          initial={{ opacity: 1 }}
          exit={{ y: "-100%" }}
          transition={{ duration: 0.7, ease: [0.76, 0, 0.24, 1] }}
          className="fixed inset-0 z-[60] flex items-end bg-bg-deep p-5 sm:p-8"
        >
          <span className="font-display text-[22vw] font-extrabold leading-none text-accent sm:text-[16vw]">
            {count}
          </span>
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
}
