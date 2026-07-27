"use client";

import { useRef } from "react";
import {
  motion,
  useReducedMotion,
  useScroll,
  useTransform,
  type MotionValue,
} from "framer-motion";

type RevealWordsProps = {
  text: string;
  /** Words rendered in the accent colour, matched case-insensitively. */
  highlight?: string[];
  className?: string;
};

/**
 * Dims a block of text and brings it up word by word as the block scrolls
 * through the viewport.
 */
export function RevealWords({
  text,
  highlight = [],
  className = "",
}: RevealWordsProps) {
  const ref = useRef<HTMLParagraphElement>(null);
  const reduced = useReducedMotion();

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 0.85", "start 0.3"],
  });

  const words = text.split(" ");
  const accented = new Set(
    highlight.map((w) => w.toLowerCase().replace(/[^a-z0-9]/g, "")),
  );

  return (
    <p ref={ref} className={`flex flex-wrap ${className}`}>
      {words.map((word, i) => {
        const key = word.toLowerCase().replace(/[^a-z0-9]/g, "");
        const start = i / words.length;
        const end = start + 1 / words.length;

        return (
          <Word
            key={`${word}-${i}`}
            progress={scrollYProgress}
            range={[start, end]}
            reduced={Boolean(reduced)}
            accent={accented.has(key)}
          >
            {word}
          </Word>
        );
      })}
    </p>
  );
}

function Word({
  children,
  progress,
  range,
  reduced,
  accent,
}: {
  children: string;
  progress: MotionValue<number>;
  range: [number, number];
  reduced: boolean;
  accent: boolean;
}) {
  const opacity = useTransform(progress, range, [0.15, 1]);

  return (
    <span className="mr-[0.25em] inline-block">
      <motion.span
        style={reduced ? undefined : { opacity }}
        className={accent ? "text-accent" : undefined}
      >
        {children}
      </motion.span>
    </span>
  );
}
