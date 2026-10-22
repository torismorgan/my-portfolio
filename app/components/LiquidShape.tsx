"use client";

import { useEffect, useId, useRef, useState, type CSSProperties } from "react";
import Link from "next/link";

/*
  One of the coloured shapes inside the PORTFOLIO heading, doubling as a link.
  At rest it is drawn exactly as before (a flat circle or triangle). On hover or keyboard focus
  it turns liquid: the outline wobbles like a drop of paint, a soft highlight and shadow give it
  volume, and a small label names where it goes. The triangle also melts into the About page's
  leaf shape. On touch screens (no hover) each shape gives an occasional small wobble as a hint,
  and a tap goes straight to the page. Reduced-motion users get the label and colour change
  without any wobble.
*/

type Kind = "circle" | "triangle";

const N = 72; // points around the outline while it's liquid

// Exact resting outlines, in each shape's own viewBox.
const SHAPES = {
  circle: { w: 100, h: 100, rest: "M0 50a50 50 0 1 0 100 0a50 50 0 1 0 -100 0Z" },
  // The heading's right triangle (top-left, bottom-right, bottom-left), traced clockwise from the top-left like the leaf.
  triangle: { w: 60, h: 42, rest: "M0 0L60 42L0 42Z" },
};
// /public/blue-leaf.svg, scaled from its 146 × 99 box into the triangle's 60 × 42 box.
const LEAF = "M0 0H75.95C114.61 0 145.95 31.34 145.95 70V98.69H90C40.29 98.69 0 58.4 0 8.69V0Z";
const LEAF_SX = 60 / 145.95;
const LEAF_SY = 42 / 98.69;

function samplePath(el: SVGPathElement, sx = 1, sy = 1) {
  const len = el.getTotalLength();
  const pts = new Float32Array(N * 2);
  for (let i = 0; i < N; i++) {
    const p = el.getPointAtLength((len * i) / N);
    pts[i * 2] = p.x * sx;
    pts[i * 2 + 1] = p.y * sy;
  }
  return pts;
}

// Closed, smooth curve through the points (Catmull-Rom converted to cubic Béziers).
function smoothPath(pts: Float32Array) {
  const x = (i: number) => pts[((i + N) % N) * 2];
  const y = (i: number) => pts[((i + N) % N) * 2 + 1];
  let d = `M${x(0).toFixed(2)} ${y(0).toFixed(2)}`;
  for (let i = 0; i < N; i++) {
    const c1x = x(i) + (x(i + 1) - x(i - 1)) / 6;
    const c1y = y(i) + (y(i + 1) - y(i - 1)) / 6;
    const c2x = x(i + 1) - (x(i + 2) - x(i)) / 6;
    const c2y = y(i + 1) - (y(i + 2) - y(i)) / 6;
    d += `C${c1x.toFixed(2)} ${c1y.toFixed(2)} ${c2x.toFixed(2)} ${c2y.toFixed(2)} ${x(i + 1).toFixed(2)} ${y(i + 1).toFixed(2)}`;
  }
  return d + "Z";
}

function hexToRgb(hex: string) {
  const n = parseInt(hex.slice(1), 16);
  return [(n >> 16) & 255, (n >> 8) & 255, n & 255];
}
function mixColor(a: string, b: string, t: number) {
  const A = hexToRgb(a);
  const B = hexToRgb(b);
  return `rgb(${A.map((v, i) => Math.round(v + (B[i] - v) * t)).join(",")})`;
}

export default function LiquidShape({
  kind,
  color,
  hoverColor = color,
  href,
  label,
  labelPosition = "below",
  hintDelay = 0,
  className = "",
  style,
}: {
  kind: Kind;
  color: string;
  hoverColor?: string;
  href: string;
  label: string;
  labelPosition?: "above" | "below";
  /** ms offset for the touch-screen hint wobble, so the shapes don't all move at once */
  hintDelay?: number;
  className?: string;
  style?: CSSProperties;
}) {
  const shape = SHAPES[kind];
  const uid = useId().replace(/:/g, "");
  const [active, setActive] = useState(false);

  const fromRef = useRef<SVGPathElement>(null);
  const toRef = useRef<SVGPathElement>(null);
  const fillRef = useRef<SVGPathElement>(null);
  const glossRef = useRef<SVGGElement>(null);
  const svgRef = useRef<SVGSVGElement>(null);

  // Animation state lives in refs so the 60fps loop never re-renders React.
  const target = useRef(0);
  const progress = useRef(0);
  const frame = useRef<number | null>(null);
  const start = useRef(0);
  const reduced = useRef(false);
  const points = useRef<{ from: Float32Array; to: Float32Array } | null>(null);

  useEffect(() => {
    reduced.current = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (fromRef.current && toRef.current) {
      const from = samplePath(fromRef.current);
      const to = kind === "triangle" ? samplePath(toRef.current, LEAF_SX, LEAF_SY) : from;
      points.current = { from, to };
    }
  }, [kind]);

  const draw = (now: number) => {
    const pts = points.current;
    const fill = fillRef.current;
    if (!pts || !fill) return;

    const p = progress.current;
    if (p < 0.002 && target.current === 0) {
      // fully at rest: back to the exact original outline, no gloss
      fill.setAttribute("d", shape.rest);
      fill.setAttribute("fill", color);
      glossRef.current?.querySelectorAll("[data-gloss]").forEach((g) => g.setAttribute("d", shape.rest));
      glossRef.current?.setAttribute("opacity", "0");
      if (svgRef.current) svgRef.current.style.filter = "";
      return;
    }

    const t = (now - start.current) / 1000;
    const cx = shape.w / 2;
    const cy = kind === "triangle" ? shape.h * 0.6 : shape.h / 2;
    const size = Math.min(shape.w, shape.h);
    const amp = reduced.current ? 0 : size * 0.075 * p;
    // morph eases a little ahead of the wobble so the new shape reads clearly
    const m = kind === "triangle" ? Math.min(1, p * 1.15) : 0;

    const out = new Float32Array(N * 2);
    for (let i = 0; i < N; i++) {
      let x = pts.from[i * 2] + (pts.to[i * 2] - pts.from[i * 2]) * m;
      let y = pts.from[i * 2 + 1] + (pts.to[i * 2 + 1] - pts.from[i * 2 + 1]) * m;
      const a = (i / N) * Math.PI * 2;
      const wobble =
        Math.sin(3 * a + t * 2.1) * 0.5 + Math.sin(5 * a - t * 2.7 + 1.3) * 0.3 + Math.sin(2 * a + t * 1.6 + 2.4) * 0.35;
      const dx = x - cx;
      const dy = y - cy;
      const dist = Math.hypot(dx, dy) || 1;
      x += (dx / dist) * amp * wobble;
      y += (dy / dist) * amp * wobble;
      // a gentle overall swell, as if it's filling with liquid
      x = cx + (x - cx) * (1 + 0.06 * p);
      y = cy + (y - cy) * (1 + 0.06 * p);
      out[i * 2] = x;
      out[i * 2 + 1] = y;
    }
    const d = smoothPath(out);
    fill.setAttribute("d", d);
    glossRef.current?.querySelectorAll("[data-gloss]").forEach((g) => g.setAttribute("d", d));
    fill.setAttribute("fill", mixColor(color, hoverColor, m || p));
    glossRef.current?.setAttribute("opacity", p.toFixed(3));
    if (svgRef.current) {
      svgRef.current.style.filter = `drop-shadow(0 ${(0.05 * p).toFixed(3)}em ${(0.07 * p).toFixed(3)}em rgba(0,0,0,${(0.28 * p).toFixed(3)}))`;
    }
  };

  const tick = (now: number) => {
    const k = reduced.current ? 1 : 0.09; // reduced motion: snap instead of easing
    progress.current += (target.current - progress.current) * k;
    draw(now);
    if (target.current === 0 && progress.current < 0.002) {
      progress.current = 0;
      draw(now);
      frame.current = null;
      return;
    }
    frame.current = requestAnimationFrame(tick);
  };

  const go = (on: number) => {
    target.current = on;
    if (frame.current === null) {
      if (progress.current === 0) start.current = performance.now();
      frame.current = requestAnimationFrame(tick);
    }
  };

  // Touch screens can't hover, so every so often a shape gives a small wobble to show it's alive.
  useEffect(() => {
    if (window.matchMedia("(hover: hover)").matches || reduced.current) return;
    let pulseOff: ReturnType<typeof setTimeout>;
    const pulse = () => {
      go(0.45);
      pulseOff = setTimeout(() => go(0), 900);
    };
    const first = setTimeout(pulse, 1800 + hintDelay);
    const every = setInterval(pulse, 7000 + hintDelay);
    return () => {
      clearTimeout(first);
      clearTimeout(pulseOff);
      clearInterval(every);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [hintDelay]);

  useEffect(() => () => {
    if (frame.current !== null) cancelAnimationFrame(frame.current);
  }, []);

  const on = () => {
    setActive(true);
    go(1);
  };
  const off = () => {
    setActive(false);
    go(0);
  };

  return (
    <Link
      href={href}
      aria-label={label}
      onPointerEnter={(e) => e.pointerType === "mouse" && on()}
      onPointerLeave={(e) => e.pointerType === "mouse" && off()}
      onFocus={on}
      onBlur={off}
      // the box itself ignores the pointer; only the painted shape is clickable, so overlapping shapes each keep their own area
      className={`pointer-events-none focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-blue ${active ? "z-10" : ""} ${className}`}
      style={style}
    >
      <svg
        ref={svgRef}
        viewBox={`0 0 ${shape.w} ${shape.h}`}
        preserveAspectRatio="none"
        className="block w-full h-full overflow-visible"
        aria-hidden="true"
      >
        <defs>
          <radialGradient id={`gloss-${uid}`} cx="0.32" cy="0.26" r="0.55">
            <stop offset="0" stopColor="#fff" stopOpacity="0.6" />
            <stop offset="0.45" stopColor="#fff" stopOpacity="0.12" />
            <stop offset="1" stopColor="#fff" stopOpacity="0" />
          </radialGradient>
          <radialGradient id={`shade-${uid}`} cx="0.7" cy="0.85" r="0.7">
            <stop offset="0" stopColor="#000" stopOpacity="0.28" />
            <stop offset="1" stopColor="#000" stopOpacity="0" />
          </radialGradient>
          {/* hidden outlines, only used to measure points for the morph */}
          <path ref={fromRef} d={shape.rest} fill="none" stroke="none" />
          <path ref={toRef} d={kind === "triangle" ? LEAF : shape.rest} fill="none" stroke="none" />
        </defs>

        {/* steady hit area so the wobbling edge never flickers the hover on and off */}
        <path d={shape.rest} fill="transparent" className="pointer-events-auto cursor-pointer" />

        <path ref={fillRef} d={shape.rest} fill={color} className="pointer-events-none" />
        <g ref={glossRef} opacity="0" className="pointer-events-none">
          <path data-gloss d={shape.rest} fill={`url(#shade-${uid})`} />
          <path data-gloss d={shape.rest} fill={`url(#gloss-${uid})`} />
        </g>
      </svg>

      <span
        aria-hidden="true"
        className={`absolute left-1/2 -translate-x-1/2 ${
          labelPosition === "above" ? "bottom-full mb-2" : "top-full mt-2"
        } whitespace-nowrap bg-ink text-cream font-display font-semibold uppercase leading-none tracking-[0.08em] text-[11px] md:text-[13px] px-2.5 py-1.5 transition-[opacity,transform] duration-300 ${
          active ? "opacity-100 translate-y-0" : "opacity-0 " + (labelPosition === "above" ? "translate-y-1" : "-translate-y-1")
        }`}
      >
        {label} →
      </span>
    </Link>
  );
}
