"use client";

import { useEffect, useState } from "react";

const A = "/work/the-pastel-stop";

const HOT_PINK = "#EE397B";
const LIGHT_PINK = "#FEE2E7";
const RED = "#F73638";
const BLUE = "#0E7BC2";
const LIGHT_BLUE = "#86B4FD";
const PALE_YELLOW = "#FFF9C9";
const BLACK = "#0D0D0D";
const WHITE = "#FFFFFF";

type Way = { label: string; ink: string; bg: string };

// wordmark colourways — the Canva sheet
const WORDMARK_WAYS: Way[] = [
  { label: "Hot pink on white", ink: HOT_PINK, bg: WHITE },
  { label: "White on hot pink", ink: WHITE, bg: HOT_PINK },
  { label: "Hot pink on light pink", ink: HOT_PINK, bg: LIGHT_PINK },
  { label: "Red on white", ink: RED, bg: WHITE },
  { label: "Blue on white", ink: BLUE, bg: WHITE },
  { label: "Light blue on pale yellow", ink: LIGHT_BLUE, bg: PALE_YELLOW },
  { label: "Black on white", ink: BLACK, bg: WHITE },
  { label: "White on black", ink: WHITE, bg: BLACK },
];

// symbol colourways — the logo file (LOGO.pdf)
const SYMBOL_BG = "#ECE9E2";
const SYMBOL_WAYS: Way[] = [
  { label: "Black", ink: "#221E1F", bg: SYMBOL_BG },
  { label: "Mint", ink: "#A7D5CD", bg: SYMBOL_BG },
  { label: "Pink", ink: "#F399C1", bg: SYMBOL_BG },
  { label: "Yellow", ink: "#F7F3A5", bg: SYMBOL_BG },
  { label: "Magenta", ink: "#EB008B", bg: SYMBOL_BG },
  { label: "Lavender", ink: "#926A94", bg: SYMBOL_BG },
];

const eyebrow = "font-sans text-[12px] uppercase tracking-[0.14em] text-ink/70";

/* One picture that moves through its colourways with a soft transition, instead of a grid of tiles.
   Pauses on hover/focus, has dots to jump to a colourway, and does not auto-advance for reduced-motion users. */
function Cycler({
  ways,
  title,
  description,
  children,
}: {
  ways: Way[];
  title: string;
  description?: string;
  children: (way: Way) => React.ReactNode;
}) {
  const [i, setI] = useState(0);
  const [held, setHeld] = useState(false);

  useEffect(() => {
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce || held) return;
    const id = setInterval(() => setI((n) => (n + 1) % ways.length), 2600);
    return () => clearInterval(id);
  }, [held, ways.length]);

  const way = ways[i];

  return (
    <div
      onMouseEnter={() => setHeld(true)}
      onMouseLeave={() => setHeld(false)}
      onFocusCapture={() => setHeld(true)}
      onBlurCapture={() => setHeld(false)}
    >
      <p className={`${eyebrow} mb-3`}>{title}</p>
      <div
        className="flex items-center justify-center overflow-hidden aspect-[4/3] ring-1 ring-black/10 transition-colors duration-700 ease-in-out motion-reduce:transition-none"
        style={{ backgroundColor: way.bg, containerType: "inline-size" }}
      >
        {children(way)}
      </div>
      <div className="mt-2 flex flex-col gap-1 sm:flex-row sm:items-center sm:justify-between sm:gap-3">
        <p className={eyebrow}>{way.label}</p>
        <div role="group" aria-label={`Choose a ${title.toLowerCase()} colour`} className="flex w-full sm:w-auto sm:shrink-0">
          {ways.map((w, idx) => (
            <button
              key={w.label}
              type="button"
              onClick={() => setI(idx)}
              aria-label={w.label}
              aria-pressed={idx === i}
              className="flex-1 sm:flex-none h-11 sm:w-11 flex items-center justify-center"
            >
              <span
                aria-hidden="true"
                className={`block rounded-full ring-1 ring-black/30 transition-all ${idx === i ? "w-[18px] h-[18px]" : "w-3 h-3"}`}
                style={{ background: `linear-gradient(90deg, ${w.bg} 50%, ${w.ink} 50%)` }}
              />
            </button>
          ))}
        </div>
      </div>
      {description && <p className="mt-5 font-sans text-[16px] md:text-[17px] leading-[1.7] text-ink/80">{description}</p>}
    </div>
  );
}

export function WordmarkCycler({ description }: { description?: string }) {
  return (
    <Cycler ways={WORDMARK_WAYS} title="Wordmark" description={description}>
      {(w) => (
        <span
          role="img"
          aria-label="thepastelstop."
          className="ps-title font-bold leading-none tracking-[-0.045em] whitespace-nowrap transition-colors duration-700 ease-in-out motion-reduce:transition-none"
          style={{ color: w.ink, fontSize: "14.5cqw" }}
        >
          thepastelstop.
        </span>
      )}
    </Cycler>
  );
}

export function SymbolCycler({ description }: { description?: string }) {
  const url = `url(${A}/symbol-blob.png)`;
  return (
    <Cycler ways={SYMBOL_WAYS} title="Symbol" description={description}>
      {(w) => (
        <span
          role="img"
          aria-label="The Pastel Stop symbol: a rounded, bubbly mark followed by a dot"
          className="block w-[62%] transition-colors duration-700 ease-in-out motion-reduce:transition-none"
          style={{
            aspectRatio: "715 / 425",
            backgroundColor: w.ink,
            WebkitMaskImage: url,
            maskImage: url,
            WebkitMaskSize: "contain",
            maskSize: "contain",
            WebkitMaskRepeat: "no-repeat",
            maskRepeat: "no-repeat",
            WebkitMaskPosition: "center",
            maskPosition: "center",
          }}
        />
      )}
    </Cycler>
  );
}
