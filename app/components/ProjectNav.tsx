import Link from "next/link";
import { PROJECTS, type ProjectSlug } from "@/app/lib/projects";

/*
  Bottom-of-case-study navigation: ← Previous project | All projects | Next project →.
  The projects run in one loop (Pastel Stop → StyleNova → Nauryz Red → Pastel Stop …), so
  every page shows the other two by name, plus a way out to the Works index in the middle.
*/

const focusRing = "focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue";
const label = "font-sans text-[12px] uppercase tracking-[0.14em] text-ink/70";
const nameClass = "mt-3 font-sans font-light uppercase leading-[1.05] tracking-[-0.02em] text-ink text-[clamp(20px,3vw,36px)] text-balance";

function Cell({ project, direction }: { project: (typeof PROJECTS)[number]; direction: "prev" | "next" }) {
  const isNext = direction === "next";
  return (
    <Link
      href={project.href}
      className={`flex flex-col justify-center h-full min-h-[104px] md:min-h-[140px] px-6 md:px-8 py-6 transition-opacity hover:opacity-70 ${
        isNext ? "items-end text-right" : "items-start text-left"
      } ${focusRing}`}
    >
      <span className={label}>
        {isNext ? (
          <>
            Next<span className="hidden sm:inline"> project</span> →
          </>
        ) : (
          <>
            ← Previous<span className="hidden sm:inline"> project</span>
          </>
        )}
      </span>
      <span className={`block ${nameClass}`}>{project.name}</span>
    </Link>
  );
}

export default function ProjectNav({ current }: { current: ProjectSlug }) {
  const i = PROJECTS.findIndex((p) => p.slug === current);
  const prev = PROJECTS[(i + PROJECTS.length - 1) % PROJECTS.length];
  const next = PROJECTS[(i + 1) % PROJECTS.length];

  return (
    <nav aria-label="Project navigation" className="border-b border-ink flex flex-col md:grid md:grid-cols-3 md:items-stretch">
      {/* mobile order: ← Previous, All projects, Next → — desktop: same three, one row */}
      <div className="border-b md:border-b-0 md:border-r border-ink/40 min-w-0">
        <Cell project={prev} direction="prev" />
      </div>
      <Link
        href="/works"
        className={`border-b md:border-b-0 md:border-r border-ink/40 flex items-center justify-center min-h-[56px] md:min-h-[140px] font-sans text-[12px] font-semibold uppercase tracking-[0.14em] text-ink transition-opacity hover:opacity-70 ${focusRing}`}
      >
        All Projects
      </Link>
      <div className="min-w-0">
        <Cell project={next} direction="next" />
      </div>
    </nav>
  );
}
