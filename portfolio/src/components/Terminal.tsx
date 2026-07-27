"use client";

import { useEffect, useState } from "react";
import { useReducedMotion } from "framer-motion";

type Block = { command: string; output: string[] };

/**
 * Real commands with correct output. Addresses are deliberately from the
 * RFC 5737 documentation ranges (192.0.2.0/24, 198.51.100.0/24, 203.0.113.0/24)
 * and RFC 1918 private space, so nothing here points at live infrastructure.
 */
const script: Block[] = [
  {
    command: "ipcalc 10.20.0.0/22",
    output: [
      "Netmask    255.255.252.0",
      "Broadcast  10.20.3.255",
      "Hosts      1022",
    ],
  },
  {
    command: "traceroute 203.0.113.10",
    output: [
      " 1  10.20.0.1       1.204 ms",
      " 2  198.51.100.1    8.431 ms",
      " 3  203.0.113.10   14.907 ms",
    ],
  },
  {
    command: 'tshark -r cap.pcapng -Y "tcp.flags.syn==1"',
    output: [
      "1  10.20.0.15 -> 203.0.113.80  [SYN]",
      "2  203.0.113.80 -> 10.20.0.15  [SYN, ACK]",
    ],
  },
  {
    command: "curl -s localhost:3000/api/escrow",
    output: ['{"state":"held","release":"on_delivery"}'],
  },
];

/**
 * Every line is kept short enough to fit one row at the narrowest supported
 * width. Combined with the fixed body height below, the card never changes
 * size between commands, so nothing under it shifts.
 */

const TYPE_MS = 42;
const LINE_MS = 170;
const HOLD_MS = 2600;

export function Terminal() {
  const reduced = useReducedMotion();
  const [block, setBlock] = useState(0);
  const [chars, setChars] = useState(0);
  const [lines, setLines] = useState(0);

  useEffect(() => {
    if (reduced) return;

    const current = script[block];
    let timer: ReturnType<typeof setTimeout>;

    if (chars < current.command.length) {
      timer = setTimeout(() => setChars((c) => c + 1), TYPE_MS);
    } else if (lines < current.output.length) {
      timer = setTimeout(() => setLines((l) => l + 1), LINE_MS);
    } else {
      timer = setTimeout(() => {
        setBlock((b) => (b + 1) % script.length);
        setChars(0);
        setLines(0);
      }, HOLD_MS);
    }

    return () => clearTimeout(timer);
  }, [block, chars, lines, reduced]);

  const current = script[block];
  const shownCommand = reduced ? current.command : current.command.slice(0, chars);
  const shownOutput = reduced ? current.output : current.output.slice(0, lines);
  const typing = !reduced && chars < current.command.length;

  return (
    <div className="w-full max-w-md overflow-hidden rounded-xl border border-line-strong bg-bg-deep/80 shadow-2xl backdrop-blur-sm">
      <div className="flex items-center gap-2 border-b border-line px-4 py-2.5">
        <span className="h-2.5 w-2.5 rounded-full bg-line-strong" />
        <span className="h-2.5 w-2.5 rounded-full bg-line-strong" />
        <span className="h-2.5 w-2.5 rounded-full bg-line-strong" />
        <span className="ml-2 font-mono text-[0.7rem] tracking-wide text-dim">
          ~/network
        </span>
      </div>

      {/* The animation is decorative noise for a screen reader, so the live
          region is hidden and a static summary is exposed instead. */}
      <p className="sr-only">
        A terminal demonstrating networking tooling: subnet calculation with
        ipcalc, route tracing with traceroute, packet filtering with tshark, and
        an escrow status check.
      </p>

      <div
        aria-hidden
        // Fixed height, not min-height: the tallest block is one command line,
        // three output lines and the trailing prompt, so the box is sized for
        // that and clipped. min-height let a wrapped line grow the card and
        // push the whole page down mid-cycle.
        className="h-40 overflow-hidden px-4 py-4 font-mono text-[0.72rem] leading-6 sm:text-[0.78rem]"
      >
        <p className="break-all text-text">
          <span className="text-accent">$</span> {shownCommand}
          {typing ? (
            <span className="ml-0.5 inline-block h-3.5 w-1.5 translate-y-0.5 animate-pulse bg-accent" />
          ) : null}
        </p>

        {shownOutput.map((line) => (
          <p key={line} className="break-all text-dim">
            {line}
          </p>
        ))}

        {!typing ? (
          <p className="text-text">
            <span className="text-accent">$</span>
            <span className="ml-2 inline-block h-3.5 w-1.5 translate-y-0.5 animate-pulse bg-accent" />
          </p>
        ) : null}
      </div>
    </div>
  );
}
