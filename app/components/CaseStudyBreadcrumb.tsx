"use client";

import Link from "next/link";
import { useEffect, useRef } from "react";
import { PROJECTS, projectNumber, type ProjectSlug } from "@/app/lib/projects";

const focusRing = "focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue";

/*
  Sits directly under the sticky main header on every case-study page: a way out that doesn't
  depend on remembering the logo goes home, plus immediate context on which project this is.
  Publishes its own height as --breadcrumb-h so a page's SectionNav (if it renders one) can
  stick right below it without hardcoding a number that would drift between breakpoints.
*/
export default function CaseStudyBreadcrumb({ current }: { current: ProjectSlug }) {
  const project = PROJECTS.find((p) => p.slug === current)!;
  const n = String(projectNumber(current)).padStart(2, "0");
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const measure = () => document.documentElement.style.setProperty("--breadcrumb-h", `${el.offsetHeight}px`);
    measure();
    window.addEventListener("resize", measure);
    return () => window.removeEventListener("resize", measure);
  }, []);

  return (
    <div
      ref={ref}
      className="sticky z-40 border-b border-ink bg-cream/95 backdrop-blur-sm flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1 px-6 md:px-9 py-3"
      style={{ top: "var(--header-h, 74px)" }}
    >
      <Link
        href="/works"
        className={`inline-flex items-center gap-1.5 w-fit min-h-[44px] font-sans text-[13px] font-semibold uppercase tracking-[0.1em] text-ink transition-opacity hover:opacity-70 ${focusRing}`}
      >
        <span aria-hidden="true">←</span> All Projects
      </Link>
      <p className="font-sans text-[12px] uppercase tracking-[0.14em] text-ink/60">
        Project {n} / {project.name}
      </p>
    </div>
  );
}
