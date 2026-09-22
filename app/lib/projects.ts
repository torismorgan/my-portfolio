/*
  Single source of truth for the three case studies — their order, names and hrefs.
  Used by the bottom ProjectNav (previous/next), the case-study Breadcrumb (project number),
  and anywhere else that needs to loop or number the projects consistently.
*/
export const PROJECTS = [
  { slug: "pastel-stop", name: "The Pastel Stop", href: "/works/the-pastel-stop" },
  { slug: "stylenova", name: "Style Nova", href: "/works/stylenova" },
  { slug: "nauryz", name: "Nauryz Red", href: "/works/nayryz-red" },
] as const;

export type ProjectSlug = (typeof PROJECTS)[number]["slug"];

/** 1-based project number, for "PROJECT 01 / NAME" style labels. */
export function projectNumber(slug: ProjectSlug): number {
  return PROJECTS.findIndex((p) => p.slug === slug) + 1;
}
