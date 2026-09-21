import Link from "next/link";

/*
  Previous / next project at the end of each case study. The projects run in one loop
  (Pastel Stop → StyleNova → Nauryz Red → Pastel Stop …), so every page shows the other two by name.
  Set a project's href once its case-study page exists; until then it is shown as "Coming soon", not a dead link.
*/
const PROJECTS = [
  { slug: "pastel-stop", name: "The Pastel Stop", href: "/works/the-pastel-stop" },
  { slug: "stylenova", name: "StyleNova", href: null },
  { slug: "nauryz", name: "Nauryz Red", href: "/works/nayryz-red" },
] as const;

type Slug = (typeof PROJECTS)[number]["slug"];

const label = "font-sans text-[12px] uppercase tracking-[0.14em] text-ink/70";
const nameClass = "mt-3 font-sans font-light uppercase leading-[1.05] tracking-[-0.02em] text-ink text-[clamp(20px,3.4vw,44px)] text-balance";

function Cell({
  project,
  direction,
}: {
  project: (typeof PROJECTS)[number];
  direction: "prev" | "next";
}) {
  const isNext = direction === "next";
  const inner = (
    <>
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
      {!project.href && <span className={`${label} block mt-2`}>Coming soon</span>}
    </>
  );
  const base = `flex flex-col justify-center h-full min-h-[104px] md:min-h-[140px] px-6 md:px-9 py-6 ${isNext ? "items-end text-right" : "items-start text-left"}`;

  return project.href ? (
    <Link href={project.href} className={`${base} transition-opacity hover:opacity-70`}>
      {inner}
    </Link>
  ) : (
    <div aria-disabled="true" className={`${base} opacity-60`}>
      {inner}
    </div>
  );
}

export default function ProjectNav({ current }: { current: Slug }) {
  const i = PROJECTS.findIndex((p) => p.slug === current);
  const prev = PROJECTS[(i + PROJECTS.length - 1) % PROJECTS.length];
  const next = PROJECTS[(i + 1) % PROJECTS.length];

  return (
    <nav aria-label="Project navigation" className="grid grid-cols-2 border-b border-ink">
      <div className="border-r border-ink/40 min-w-0">
        <Cell project={prev} direction="prev" />
      </div>
      <div className="min-w-0">
        <Cell project={next} direction="next" />
      </div>
    </nav>
  );
}
