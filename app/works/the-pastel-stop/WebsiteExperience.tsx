import Image from "next/image";

const A = "/work/the-pastel-stop";

const NAVY = "#20242f";
const SITE_CREAM = "#FFFFF1";
const SITE_INK = "#3F352D";
const BRAND_PINK = "#ED86C3";
const PANEL = "#F3F0EA";
const SEASON_SOFT = "#FFFABB";

const eyebrow = "font-sans text-[12px] uppercase tracking-[0.14em] text-ink/70";
const bodyText = "font-sans text-[16px] md:text-[17px] leading-[1.7] text-ink/80";
const pad = "px-6 md:px-9";
const block = `${pad} py-14 md:py-24 border-b border-ink`;

/* ── content ── */

const SITEMAP: { label: string; children?: string[]; cta?: boolean }[] = [
  { label: "Dear Her", children: ["Archive", "Full article"] },
  { label: "Things We Love" },
  { label: "The Pause Files" },
  { label: "Events", children: ["Featured event", "Recap or registration"] },
  { label: "About" },
  { label: "Join the Stop", cta: true },
];

const TOOLS = [
  ["Figma", "UI design and prototyping"],
  ["Photoshop", "image preparation and visual assets"],
  ["HTML / CSS / JS", "structure, responsive layout and interaction"],
];

// contrast ratios calculated from the live stylesheet's colour values (WCAG relative luminance)
const CONTRAST = [
  { label: "Body text", fg: SITE_INK, bg: SITE_CREAM, ratio: "11.84:1" },
  { label: "Secondary text", fg: "#6E6A61", bg: SITE_CREAM, ratio: "5.34:1" },
];

/* ── small building blocks ── */

function Head({ n, title }: { n: string; title: string }) {
  return (
    <div>
      <p className={eyebrow}>Website Experience &nbsp;/&nbsp; {n}</p>
      <h3
        className="mt-4 uppercase ps-title font-semibold leading-[1.08] tracking-[-0.02em] text-[clamp(28px,3.6vw,52px)]"
        style={{ color: NAVY }}
      >
        {title}
      </h3>
    </div>
  );
}

function Shot({
  src,
  alt,
  w,
  h,
  sizes = "(min-width: 1024px) 620px, 100vw",
  className = "",
}: {
  src: string;
  alt: string;
  w: number;
  h: number;
  sizes?: string;
  className?: string;
}) {
  return (
    <Image src={`${A}/${src}`} alt={alt} width={w} height={h} sizes={sizes} className={`block w-full h-auto ${className}`} />
  );
}

function Framed({ children, className = "", bg = PANEL }: { children: React.ReactNode; className?: string; bg?: string }) {
  return (
    <div className={`border border-ink/30 overflow-hidden ${className}`} style={{ backgroundColor: bg }}>
      {children}
    </div>
  );
}

function Caption({ children }: { children: React.ReactNode }) {
  return <p className={`${eyebrow} mb-3`}>{children}</p>;
}

const node = "border border-ink/50 px-3 py-2 font-sans text-[14px] leading-[1.3] text-ink text-center bg-white/50";

/* ── the section ── */

export default function WebsiteExperience() {
  return (
    <>
      {/* ── intro ── */}
      <section className={`${block} scroll-mt-[var(--case-study-offset,190px)]`} id="website">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-start">
          <div>
            <p className={eyebrow}>Website Experience</p>
            <h2
              className="mt-4 uppercase ps-title font-semibold leading-[0.98] tracking-[-0.035em] text-balance text-[clamp(38px,7vw,96px)]"
              style={{ color: NAVY }}
            >
              Designing the digital stop
            </h2>
          </div>
          <p className={bodyText}>
            The website brings the Stop’s editorial content, recommendations, events and community into one
            connected platform — built to stay expressive without losing clarity, on any screen.
          </p>
        </div>
      </section>

      {/* ── 01 Clear navigation ── */}
      <section className={block}>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-start">
          <div>
            <Head n="01" title="Clear navigation" />
            <p className={`${bodyText} mt-8`}>
              Direct labels, a consistent header and a visible “Join the Stop” action let visitors move between
              editorial content, community and events without losing their place. The header blends into the page
              background at the top, then becomes a sticky bar on scroll — keeping navigation always within reach,
              which supports accessibility.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row lg:flex-col gap-6">
            <div className="sm:flex-1 lg:flex-none">
              <Caption>Desktop header</Caption>
              <Framed>
                <div className="overflow-x-auto">
                  <div className="min-w-[680px] sm:min-w-0">
                    <Shot src="nav-desktop.jpg" alt="Desktop header: logo mark, Dear Her, Things We Love, The Pause Files, Events, About and a Join the Stop link" w={2880} h={220} />
                  </div>
                </div>
              </Framed>
            </div>
            <div className="w-[220px] sm:w-[240px] mx-auto sm:mx-0 lg:mx-auto">
              <Caption>Mobile menu</Caption>
              <Framed>
                <Shot src="nav-mobile-menu.jpg" alt="Open mobile menu listing the same six links, with Join the Stop highlighted in pink" w={780} h={1688} sizes="240px" />
              </Framed>
            </div>
          </div>
        </div>

        <div className="mt-12 md:mt-16">
          <Caption>Sitemap</Caption>
          <Framed className="p-6 lg:p-10">
            <div className="flex flex-col items-center lg:after:content-[''] lg:after:block lg:after:w-px lg:after:h-8 lg:after:bg-ink/40">
              <span className={`${node} px-6 font-medium`} style={{ backgroundColor: SEASON_SOFT }}>
                Home · The Pastel Stop
              </span>
            </div>
            <ul className="mt-6 lg:mt-0 grid grid-cols-1 lg:grid-cols-6 gap-4 lg:gap-3 relative lg:before:content-[''] lg:before:absolute lg:before:top-0 lg:before:left-[calc(100%/12)] lg:before:right-[calc(100%/12)] lg:before:h-px lg:before:bg-ink/40">
              {SITEMAP.map((item) => (
                <li
                  key={item.label}
                  className="relative flex flex-col items-stretch lg:items-center gap-3 lg:pt-8 border-l lg:border-l-0 border-ink/30 pl-4 lg:pl-0 lg:before:content-[''] lg:before:absolute lg:before:top-0 lg:before:left-1/2 lg:before:h-8 lg:before:w-px lg:before:bg-ink/40"
                >
                  <span
                    className={`${node} lg:w-full`}
                    style={item.cta ? { backgroundColor: BRAND_PINK, borderColor: BRAND_PINK } : undefined}
                  >
                    {item.label}
                  </span>
                  {item.children?.map((child) => (
                    <span key={child} className="flex flex-col items-stretch lg:items-center gap-3 lg:w-full">
                      <span aria-hidden="true" className="hidden lg:block text-ink/50 leading-none text-center">
                        ↓
                      </span>
                      <span className={`${node} lg:w-full ml-4 lg:ml-0`}>{child}</span>
                    </span>
                  ))}
                </li>
              ))}
            </ul>
          </Framed>
        </div>
      </section>

      {/* ── 02 Editorial hierarchy ── */}
      <section className={block}>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-start">
          <Head n="02" title="Editorial hierarchy" />
          <p className={bodyText}>
            Large headings, controlled text widths and intentional spacing make each page expressive but easy to
            scan — from a featured event down to a long, personal letter.
          </p>
        </div>
        <div className="mt-12 md:mt-16 grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          <div>
            <Caption>Events page — headline, tag, featured card</Caption>
            <Framed>
              <Shot className="md:hidden" src="xm-hier.jpg" alt="Mobile Events page: a large 'find your next stop.' headline, an italic intro, a pink Featured tag and the event image" w={780} h={1184} sizes="(min-width: 768px) 500px, 100vw" />
              <Shot className="hidden md:block" src="x-hier.jpg" alt="Events page: a large 'find your next stop.' headline, a short intro, a Featured tag and an event card with title, date, description and link" w={2880} h={1800} sizes="500px" />
            </Framed>
          </div>
          <div>
            <Caption>Dear Her — long-form article</Caption>
            <Framed bg={SITE_CREAM}>
              <Shot className="md:hidden" src="xm-read.jpg" alt="Mobile Dear Her article: a script 'Dear her,' heading followed by short paragraphs with generous spacing" w={780} h={1720} sizes="(min-width: 768px) 500px, 100vw" />
              <Shot className="hidden md:block" src="x-read.jpg" alt="Dear Her article page: the letter opens with a script 'Dear her,' and continues in short paragraphs in a narrow, comfortable column" w={2880} h={2360} sizes="500px" />
            </Framed>
          </div>
        </div>
      </section>

      {/* ── 03 Responsive experience ── */}
      <section className={block}>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-start">
          <Head n="03" title="Responsive experience" />
          <p className={bodyText}>
            Rather than shrinking the desktop layout, content reorganizes and stacks across breakpoints — the
            structure adapts while the brand identity stays the same.
          </p>
        </div>

        {/* desktop and mobile beside each other: one shared height (--h), so every screen is the same height at its true proportions */}
        <div className="mt-12 md:mt-16 md:[container-type:inline-size]">
          <div
            className="flex flex-col md:flex-row md:items-start md:justify-between gap-6 md:gap-5 md:[--h:calc((100cqw-52px)/2.986)]"
          >
            <div className="md:w-[calc(var(--h)*1.6)] md:shrink-0 min-w-0">
              <Caption>Desktop — 1440 px</Caption>
              <Framed>
                <Shot src="resp-desktop.jpg" alt="Desktop homepage: full-width portrait hero with the thepastelstop. wordmark and the navigation across the top" w={2880} h={1800} sizes="(min-width: 1024px) 640px, 100vw" />
              </Framed>
            </div>
            <div className="min-w-0 md:shrink-0">
              <Caption>Mobile — 390 px</Caption>
              <div className="flex gap-3 md:gap-4 overflow-x-auto md:overflow-visible snap-x snap-mandatory pb-2 md:pb-0">
                {[
                  ["resp-m-home.jpg", "Mobile homepage: full-screen portrait with the wordmark and a menu button"],
                  ["resp-m-dear.jpg", "Mobile Dear Her page: an envelope floating in a blue sky"],
                  ["resp-m-events.jpg", "Mobile Events page: a polaroid and a stamp-style card over a sky"],
                ].map(([src, alt]) => (
                  <div key={src} className="snap-start shrink-0 basis-[44%] sm:basis-[30%] md:basis-auto md:w-[calc(var(--h)*0.462)] min-w-0">
                    <Framed>
                      <Shot src={src} alt={alt} w={780} h={1688} sizes="(min-width: 1024px) 200px, 45vw" />
                    </Framed>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── 04 Accessible interaction ── */}
      <section className={block}>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-start">
          <Head n="04" title="Accessible interaction" />
          <p className={bodyText}>
            Readable type, strong contrast, image descriptions and clear controls make the experience easier to use
            — with hover and focus states that stay legible for touch and keyboard alike.
          </p>
        </div>
        <div className="mt-12 md:mt-14">
          <Caption>Text contrast on the site’s cream background</Caption>
          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4 lg:gap-x-16">
            {CONTRAST.map((c) => (
              <li key={c.label} className="border border-ink/30 p-5" style={{ backgroundColor: c.bg }}>
                <p className="font-sans text-[32px] leading-none" style={{ color: c.fg }}>
                  Aa
                </p>
                <p className="mt-4 font-sans text-[16px]" style={{ color: c.fg }}>
                  {c.label}
                </p>
                <p className="mt-1 font-sans text-[13px] text-ink/70">
                  <span className="uppercase">{c.fg}</span> on <span className="uppercase">{c.bg}</span>
                </p>
                <p className="mt-2 font-sans text-[16px] font-medium text-ink">{c.ratio}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* ── 09 From Figma to code ── */}
      <section className={`${block} !border-b-0`}>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-start">
          <Head n="05" title="From Figma to code" />
          <div className="flex flex-col gap-5">
            <p className={bodyText}>
              After establishing the brand and user experience in Figma, I translated the designs into a responsive
              website using HTML, CSS and JavaScript. I built reusable layouts and visual patterns so new stories,
              campaigns and seasons could be introduced without redesigning the platform.
            </p>
            <dl className="mt-3 border-b border-ink/20">
              {TOOLS.map(([tool, role]) => (
                <div key={tool} className="border-t border-ink/20 py-3 flex flex-col sm:flex-row sm:gap-6">
                  <dt className="sm:w-[130px] shrink-0 font-sans text-[16px] font-medium text-ink">{tool}</dt>
                  <dd className="font-sans text-[16px] leading-[1.45] text-ink/80">{role}</dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </section>
    </>
  );
}
