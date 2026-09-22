"use client";

import { useEffect, useRef, useState } from "react";

const focusRing = "focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue";

export type SectionNavItem = { id: string; label: string };

/*
  A short, sticky row of section jump-links for a longer case study (sticks below the main
  header and the breadcrumb — see --header-h / --breadcrumb-h in globals.css / CaseStudyBreadcrumb).
  Highlights the section currently in view, scrolls there smoothly (native anchor + the site-wide
  `scroll-behavior: smooth` rule, which already respects prefers-reduced-motion on its own), and
  publishes --case-study-offset so every anchored section can reserve enough space at its top to
  not land underneath this stack of sticky bars.
*/
export default function SectionNav({ items }: { items: SectionNavItem[] }) {
  const [active, setActive] = useState(items[0]?.id);
  const ref = useRef<HTMLElement>(null);

  // Keep --case-study-offset in sync with the combined height of header + breadcrumb + this bar,
  // so every jump target's scroll-margin-top stays correct as the header compacts on scroll or
  // the breadcrumb reflows at a different breakpoint.
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const measure = () => {
      const headerH = parseFloat(getComputedStyle(document.documentElement).getPropertyValue("--header-h")) || 74;
      const breadcrumbH = parseFloat(getComputedStyle(document.documentElement).getPropertyValue("--breadcrumb-h")) || 52;
      document.documentElement.style.setProperty("--case-study-offset", `${headerH + breadcrumbH + el.offsetHeight + 12}px`);
    };
    measure();
    window.addEventListener("resize", measure);
    const id = setInterval(measure, 400); // catches the header's own 200ms scroll-shrink transition
    return () => {
      window.removeEventListener("resize", measure);
      clearInterval(id);
    };
  }, []);

  useEffect(() => {
    const targets = items.map((item) => document.getElementById(item.id)).filter((el): el is HTMLElement => !!el);
    if (targets.length === 0) return;
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) setActive(entry.target.id);
        }
      },
      { rootMargin: "-30% 0px -60% 0px", threshold: 0 },
    );
    targets.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, [items]);

  return (
    <nav
      ref={ref}
      aria-label="Case study sections"
      className="sticky z-30 border-b border-ink/40 bg-cream/95 backdrop-blur-sm"
      style={{ top: "calc(var(--header-h, 74px) + var(--breadcrumb-h, 52px))" }}
    >
      <ul className="flex items-stretch gap-1 overflow-x-auto px-4 md:px-9 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
        {items.map((item) => {
          const isActive = active === item.id;
          return (
            <li key={item.id} className="shrink-0">
              <a
                href={`#${item.id}`}
                aria-current={isActive ? "true" : undefined}
                className={`flex items-center min-h-[44px] px-3 whitespace-nowrap font-sans text-[12px] uppercase tracking-[0.12em] transition-colors ${
                  isActive ? "text-ink font-semibold border-b-2 border-ink" : "text-ink/55 border-b-2 border-transparent hover:text-ink/85"
                } ${focusRing}`}
              >
                {item.label}
              </a>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
