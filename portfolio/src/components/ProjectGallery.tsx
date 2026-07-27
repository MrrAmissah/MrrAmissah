"use client";

import { useCallback, useRef, useState } from "react";
import Image from "next/image";
import { useReducedMotion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";

type ProjectGalleryProps = {
  images: string[];
  title: string;
  /** Tilt direction for single-image cards. Carousels stay flat. */
  flipped: boolean;
};

export function ProjectGallery({ images, title, flipped }: ProjectGalleryProps) {
  const reduced = useReducedMotion();
  const trackRef = useRef<HTMLDivElement>(null);
  const [index, setIndex] = useState(0);

  const multi = images.length > 1;

  const goTo = useCallback(
    (next: number) => {
      const track = trackRef.current;
      if (!track) return;
      const clamped = Math.max(0, Math.min(next, images.length - 1));
      track.scrollTo({
        left: track.clientWidth * clamped,
        behavior: reduced ? "auto" : "smooth",
      });
    },
    [images.length, reduced],
  );

  const onScroll = useCallback(() => {
    const track = trackRef.current;
    if (!track || track.clientWidth === 0) return;
    setIndex(Math.round(track.scrollLeft / track.clientWidth));
  }, []);

  return (
    <div className="relative">
      <div
        ref={trackRef}
        onScroll={multi ? onScroll : undefined}
        // A carousel needs to sit flat to feel controllable; rotated arrows
        // read as a rendering fault. Single-image cards keep the tilt.
        className={`no-scrollbar flex overflow-hidden rounded-2xl border border-line-strong bg-surface shadow-2xl ${
          multi
            ? "snap-x snap-mandatory overflow-x-auto"
            : `transition-transform duration-500 ease-out group-hover:rotate-0 ${
                flipped ? "rotate-2" : "-rotate-2"
              }`
        }`}
      >
        {images.map((src, i) => (
          <div
            key={src}
            className="relative aspect-[16/10] w-full shrink-0 snap-center"
          >
            <Image
              src={src}
              alt={
                multi
                  ? `${title} screenshot ${i + 1} of ${images.length}`
                  : `${title} preview`
              }
              fill
              sizes="(min-width: 1024px) 32rem, 100vw"
              className={`object-cover object-top ${
                multi
                  ? ""
                  : "transition-transform duration-700 group-hover:scale-[1.04]"
              }`}
            />
          </div>
        ))}
      </div>

      {multi ? (
        <>
          <button
            type="button"
            onClick={() => goTo(index - 1)}
            disabled={index === 0}
            aria-label={`Previous ${title} screenshot`}
            className="absolute left-3 top-1/2 hidden -translate-y-1/2 place-items-center rounded-full border border-line-strong bg-bg-deep/85 p-2.5 text-text backdrop-blur transition hover:border-accent hover:text-accent focus:outline-none focus:ring-2 focus:ring-accent disabled:pointer-events-none disabled:opacity-0 sm:grid"
          >
            <ChevronLeft className="h-5 w-5" />
          </button>
          <button
            type="button"
            onClick={() => goTo(index + 1)}
            disabled={index === images.length - 1}
            aria-label={`Next ${title} screenshot`}
            className="absolute right-3 top-1/2 hidden -translate-y-1/2 place-items-center rounded-full border border-line-strong bg-bg-deep/85 p-2.5 text-text backdrop-blur transition hover:border-accent hover:text-accent focus:outline-none focus:ring-2 focus:ring-accent disabled:pointer-events-none disabled:opacity-0 sm:grid"
          >
            <ChevronRight className="h-5 w-5" />
          </button>

          <div className="mt-4 flex items-center justify-center gap-2.5">
            {images.map((src, i) => (
              <button
                key={src}
                type="button"
                onClick={() => goTo(i)}
                aria-label={`Show ${title} screenshot ${i + 1}`}
                aria-current={i === index}
                className={`h-1.5 rounded-full transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2 focus:ring-offset-bg ${
                  i === index
                    ? "w-7 bg-accent"
                    : "w-1.5 bg-line-strong hover:bg-dim"
                }`}
              />
            ))}
          </div>
        </>
      ) : null}
    </div>
  );
}
