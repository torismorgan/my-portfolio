import Image from "next/image";

const A = "/work/the-pastel-stop";

const NAVY = "#20242f";
const SEASON_BLUE = "#64ACF3";
const SEASON_BLUE_DEEP = "#6491F3";
const SEASON_YELLOW = "#FFF78C";
const SEASON_SOFT = "#FFFABB";
const SITE_CREAM = "#FFFFF1";
const SITE_INK = "#3F352D";
const BRAND_PINK = "#ED86C3";
const PANEL = "#F3F0EA";

const eyebrow = "font-sans text-[12px] uppercase tracking-[0.14em] text-ink/70";
const bodyText = "font-sans text-[16px] md:text-[17px] leading-[1.7] text-ink/80";
const pad = "px-6 md:px-9";
const block = `${pad} py-14 md:py-24 border-b border-ink`;

/* ── content ── */

const NEEDS = [
  "Discover what The Pastel Stop is",
  "Find relatable editorial content",
  "Browse current recommendations",
  "Discover upcoming events",
  "Participate in community features",
  "Move between content without feeling lost",
];

const NAV_ITEMS = ["Home", "Dear Her", "Things We Love", "The Pause Files", "Events", "About", "Join the Stop"];

const SITEMAP: { label: string; children?: string[]; cta?: boolean }[] = [
  { label: "Dear Her", children: ["Archive", "Full article"] },
  { label: "Things We Love" },
  { label: "The Pause Files" },
  { label: "Events", children: ["Featured event", "Recap or registration"] },
  { label: "About" },
  { label: "Join the Stop", cta: true },
];

const JOURNEYS: [string, string[]][] = [
  ["Editorial journey", ["Homepage", "Dear Her preview", "Dear Her archive", "Full article"]],
  ["Event journey", ["Homepage or navigation", "Events", "Featured event", "Event recap or registration"]],
  ["Community journey", ["Social media or homepage", "Community feature", "Join the Stop or submit content"]],
];

const NAVIGATION = [
  "Clear page names",
  "Consistent header structure",
  "Visible “Join the Stop” action",
  "Mobile menu",
  "Links to related content",
  "Predictable footer navigation",
];

const HIERARCHY = [
  "Strong page titles",
  "Short introductory copy",
  "Clear section divisions",
  "Consistent card structures",
  "Readable article widths",
  "Visible buttons and links",
  "Enough negative space",
];

const READING = [
  "Comfortable text width",
  "Readable body size",
  "Clear paragraph spacing",
  "Supporting images",
  "Strong contrast",
  "Article information such as category and date",
  "An easy route back to other letters",
];

const SEASONAL = [
  "Reusable layout system",
  "Seasonal colour variables",
  "Consistent typography",
  "Recognizable wordmark",
  "Flexible imagery",
  "Stable navigation and components",
];

const RESPONSIVE = [
  "Collapsible mobile navigation",
  "Stacked layouts",
  "Responsive type sizes",
  "Full-width mobile imagery",
  "Scrollable or reorganized cards",
  "Comfortable mobile padding",
  "Touch-friendly controls",
  "No reliance on hover for important content",
];

const ACCESSIBILITY = [
  "Sufficient colour contrast",
  "Alternative text for images",
  "Keyboard-friendly navigation",
  "Visible focus states",
  "Semantic HTML",
  "Clear link and button text",
  "Reduced reliance on colour alone",
  "Appropriate heading structure",
  "Readable font sizes",
  "Touch targets of at least 44 pixels",
];

const INTERACTIONS = [
  "Hover enlargement on cards",
  "Clear button states",
  "Smooth navigation transitions",
  "Visible active categories",
  "Consistent link behaviour",
  "Mobile alternatives for hover interactions",
  "Reduced-motion support where appropriate",
];

const TOOLS = [
  ["Figma", "UI design and prototyping"],
  ["Photoshop", "image preparation and visual assets"],
  ["HTML", "semantic page structure"],
  ["CSS", "layout, responsive design and seasonal styling"],
  ["JavaScript", "navigation and interactive behaviour"],
];

// contrast ratios calculated from the live stylesheet's colour values (WCAG relative luminance)
const CONTRAST = [
  { label: "Body text", fg: SITE_INK, bg: SITE_CREAM, ratio: "11.84:1" },
  { label: "Secondary text", fg: "#6E6A61", bg: SITE_CREAM, ratio: "5.34:1" },
];

const SEASON_VARS = [
  ["--season-primary", SEASON_BLUE, "sky blue"],
  ["--season-primary-deep", SEASON_BLUE_DEEP, "sky blue, deeper"],
  ["--season-secondary", SEASON_YELLOW, "event / button yellow"],
  ["--season-soft", SEASON_SOFT, "hero / soft butter yellow"],
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

function Paras({ paras, className = "" }: { paras: string[]; className?: string }) {
  return (
    <div className={`flex flex-col gap-5 ${className}`}>
      {paras.map((p) => (
        <p key={p} className={bodyText}>
          {p}
        </p>
      ))}
    </div>
  );
}

function Considerations({
  items,
  cols = false,
  label = "Considerations",
  flush = false,
}: {
  items: string[];
  cols?: boolean;
  label?: string;
  flush?: boolean; // true when the list is its own grid column, so its top lines up with the heading beside it
}) {
  return (
    <div className={flush ? "" : "mt-8"}>
      <p className={eyebrow}>{label}</p>
      <ul className={`mt-4 border-b border-ink/20 ${cols ? "sm:grid sm:grid-cols-2 sm:gap-x-10" : ""}`}>
        {items.map((it) => (
          <li key={it} className="border-t border-ink/20 py-3 font-sans text-[16px] leading-[1.45] text-ink/85">
            {it}
          </li>
        ))}
      </ul>
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
      <section className={block} id="website-experience">
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
          <Paras
            paras={[
              "The website was designed to bring The Pastel Stop’s editorial content, recommendations, events and community experiences into one connected platform.",
              "I considered how visitors would discover content, move between different parts of the website and understand what The Pastel Stop offers without the experience feeling overwhelming. The goal was to balance expressive editorial design with clear navigation, accessibility and responsive behaviour.",
            ]}
          />
        </div>
      </section>

      {/* ── 01 Audience ── */}
      <section className={block}>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-start">
          <div>
            <Head n="01" title="Designing for her" />
            <Paras
              className="mt-8"
              paras={[
                "The Pastel Stop is designed for women moving through different stages, interests and versions of themselves. Some visitors may come to read a personal letter, while others may be looking for recommendations, events or a sense of community.",
                "The experience needed to support different intentions without forcing every visitor through the same journey.",
              ]}
            />
          </div>
          <div>
            <p className={eyebrow}>Main user needs</p>
            <ol className="mt-4 grid grid-cols-1 sm:grid-cols-2 border-l border-t border-ink/30">
              {NEEDS.map((need, i) => (
                <li key={need} className="border-r border-b border-ink/30 p-5 md:p-6 min-h-[120px] flex flex-col justify-between gap-6">
                  <span className={eyebrow}>{String(i + 1).padStart(2, "0")}</span>
                  <span className="font-sans text-[16px] md:text-[17px] leading-[1.4] text-ink">{need}</span>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </section>

      {/* ── 02 Information architecture ── */}
      <section className={block}>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-start">
          <div>
            <Head n="02" title="Organizing the experience" />
            <Paras
              className="mt-8"
              paras={[
                "Because The Pastel Stop includes several types of content, I created a simple information structure that gives every section a clear purpose.",
                "The navigation separates editorial content, community conversations and events while keeping joining the community visible as a primary action.",
              ]}
            />
          </div>
          <Considerations items={NAV_ITEMS} label="Main navigation" cols flush />
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

      {/* ── 03 User journeys ── */}
      <section className={block}>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-start">
          <div>
            <Head n="03" title="Multiple ways to enter the stop" />
            <Paras
              className="mt-8"
              paras={[
                "Instead of designing one fixed journey, I created several pathways based on what a visitor might be looking for. Related content and repeated calls to action help people continue exploring naturally.",
              ]}
            />
          </div>
          <div className="flex flex-col gap-8">
            {JOURNEYS.map(([label, steps]) => (
              <div key={label}>
                <p className={eyebrow}>{label}</p>
                <ol className="mt-3 flex flex-col md:flex-row md:flex-wrap md:items-center gap-2">
                  {steps.map((s, i) => (
                    <li key={s} className="flex flex-col md:flex-row md:items-center gap-2">
                      <span className={`${node} text-left md:text-center`}>{s}</span>
                      {i < steps.length - 1 && (
                        <span aria-hidden="true" className="text-ink/50 pl-4 md:pl-0">
                          <span className="md:hidden">↓</span>
                          <span className="hidden md:inline">→</span>
                        </span>
                      )}
                    </li>
                  ))}
                </ol>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 04 Navigation ── */}
      <section className={block}>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-start">
          <div>
            <Head n="04" title="Clear without feeling corporate" />
            <Paras
              className="mt-8"
              paras={[
                "The navigation needed to remain simple and familiar while matching the platform’s softer editorial personality.",
                "I used direct labels, consistent placement and visible calls to action so visitors could move through the website without interrupting the visual experience.",
              ]}
            />
            <Considerations items={NAVIGATION} cols />
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
      </section>

      {/* ── 05 Content hierarchy ── */}
      <section className={block}>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-start">
          <div>
            <Head n="05" title="Making every page easy to scan" />
            <Paras
              className="mt-8"
              paras={[
                "Each page uses size, spacing, colour and imagery to establish a clear reading order. Large editorial headlines introduce the mood, while smaller descriptions and calls to action explain what visitors can do next.",
              ]}
            />
            <Considerations items={HIERARCHY} cols />
          </div>
          <div>
            <Caption>Events page: headline, intro, tag, featured card</Caption>
            <Framed>
              <Shot className="md:hidden" src="xm-hier.jpg" alt="Mobile Events page: a large 'find your next stop.' headline, an italic intro, a pink Featured tag and the event image" w={780} h={1184} sizes="100vw" />
              <Shot className="hidden md:block" src="x-hier.jpg" alt="Events page: a large 'find your next stop.' headline, a short intro, a Featured tag and an event card with title, date, description and link" w={2880} h={1800} />
            </Framed>
          </div>
        </div>
      </section>

      {/* ── 06 Reading experience ── */}
      <section className={block}>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-start">
          <div>
            <Head n="06" title="Designing for long-form reading" />
            <Paras
              className="mt-8"
              paras={[
                "Dear Her includes longer, emotionally personal entries, so the article layout needed to feel calm and easy to read.",
                "I used comfortable line lengths, generous spacing, supporting photography and clear paragraph breaks to prevent the writing from feeling dense.",
              ]}
            />
            <Considerations items={READING} cols />
          </div>
          <div>
            <Caption>Dear Her article</Caption>
            <Framed bg={SITE_CREAM}>
              <Shot className="md:hidden" src="xm-read.jpg" alt="Mobile Dear Her article: a script 'Dear her,' heading followed by short paragraphs with generous spacing" w={780} h={1720} sizes="100vw" />
              <Shot className="hidden md:block" src="x-read.jpg" alt="Dear Her article page: the letter opens with a script 'Dear her,' and continues in short paragraphs in a narrow, comfortable column" w={2880} h={2360} />
            </Framed>
          </div>
        </div>
      </section>

      {/* ── 07 Flexible content system ── */}
      <section className={block}>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-start">
          <Head n="07" title="One system, different experiences" />
          <Paras
            paras={[
              "The website needed to support very different types of content without making every page look identical.",
              "I developed a flexible system of typography, spacing, buttons, cards and content sections that could be reused across Dear Her, Events, recommendations and future community features.",
            ]}
          />
        </div>
        <div className="mt-12 md:mt-16 grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 items-start">
          <div className="md:col-span-2">
            <Caption>Home — recommendation cards</Caption>
            <Framed bg={SITE_CREAM}>
              <Shot src="c-things.jpg" alt="Homepage 'currently at the stop.' row of four recommendation cards, each with a category, title and credit" w={2880} h={1400} sizes="(min-width: 1024px) 1200px, 100vw" />
            </Framed>
          </div>
          <div>
            <Caption>Events — event card</Caption>
            <Framed bg={SITE_CREAM}>
              <Shot src="c-eventcard.jpg" alt="Events page card for The Last Bloom of Summer with an image collage, details, description and a see full recap link" w={2160} h={1128} sizes="(min-width: 1024px) 600px, 100vw" />
            </Framed>
          </div>
          <div>
            <Caption>Dear Her — letter card</Caption>
            <Framed bg={SITE_CREAM}>
              <Shot src="c-dearcard.jpg" alt="Dear Her page card with a polaroid photo on a blue background and its category label" w={1640} h={1240} sizes="(min-width: 1024px) 600px, 100vw" />
            </Framed>
          </div>
          <div className="md:col-span-2 md:mx-auto w-full md:max-w-[560px]">
            <Caption>Footer — Join the Stop form</Caption>
            <Framed bg={SITE_CREAM}>
              <Shot src="c-join.jpg" alt="Join the Stop footer form with an email field, an arrow button and a consent checkbox" w={960} h={430} sizes="560px" />
            </Framed>
          </div>
        </div>
      </section>

      {/* ── 08 Seasonal design ── */}
      <section className={block}>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-start">
          <div>
            <Head n="08" title="Designed to change without losing its identity" />
            <Paras
              className="mt-8"
              paras={[
                "The Pastel Stop changes visually with different seasons and themes. The challenge was creating enough flexibility for each season to feel new while keeping the platform recognizable.",
                "The typography, navigation, page structure and voice remain consistent, while colours, photography and decorative elements can change.",
              ]}
            />
            <Considerations items={SEASONAL} cols />
          </div>
          <div className="flex flex-col gap-6">
            <div>
              <Caption>Seasonal colour variables — Summer ’26</Caption>
              <ul className="grid grid-cols-2 border-l border-t border-ink/30">
                {SEASON_VARS.map(([name, hex, note]) => (
                  <li key={name} className="border-r border-b border-ink/30 p-4 flex items-center gap-4 min-w-0">
                    <span
                      className="shrink-0 w-11 h-11 rounded-full ring-1 ring-black/10"
                      style={{ backgroundColor: hex }}
                      role="img"
                      aria-label={`${note} ${hex}`}
                    />
                    <span className="min-w-0 font-sans text-[13px] leading-[1.4] text-ink/80">
                      <span className="block font-mono text-[12px] text-ink break-all">{name}</span>
                      <span className="block uppercase">{hex}</span>
                      <span className="block text-ink/60">{note}</span>
                    </span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="grid grid-cols-2 gap-4 items-start">
              <div>
                <Caption>Homepage slide</Caption>
                <Framed>
                  <Shot src="home-hero.jpg" alt="Homepage slide with the thepastelstop. wordmark over a portrait of a woman holding white flowers" w={1440} h={1005} sizes="(min-width: 1024px) 300px, 50vw" />
                </Framed>
              </div>
              <div>
                <Caption>Seasonal slide</Caption>
                <Framed>
                  <Shot src="last-bloom.jpg" alt="The Last Bloom of Summer slide: script title over a blue sky and a lemon tree" w={1440} h={1024} sizes="(min-width: 1024px) 300px, 50vw" />
                </Framed>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── 09 Responsive design ── */}
      <section className={block}>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-start">
          <div>
            <Head n="09" title="The same stop on every screen" />
            <Paras
              className="mt-8"
              paras={[
                "The responsive experience was designed to preserve the website’s editorial personality across desktop, tablet and mobile.",
                "Rather than shrinking the desktop layout, I reorganized content, stacked sections and adjusted typography so every page remained readable and intentional on smaller screens.",
              ]}
            />
          </div>
          <Considerations items={RESPONSIVE} cols flush />
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

      {/* ── 10 Accessibility ── */}
      <section className={block}>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-start">
          <div>
            <Head n="10" title="Designing for more people" />
            <Paras
              className="mt-8"
              paras={[
                "Accessibility was considered throughout the visual and technical design. I focused on readable typography, clear hierarchy, meaningful link labels and layouts that remain understandable across different devices.",
              ]}
            />
          </div>
          <Considerations items={ACCESSIBILITY} cols flush />
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

      {/* ── 11 Interactions + 12 Development ── */}
      <section className={`${block} !border-b-0`}>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 lg:gap-16 items-start">
          <div>
            <Head n="11" title="Small moments of interaction" />
            <Paras
              className="mt-8"
              paras={[
                "Interactions were kept subtle so they supported the content rather than distracting from it. Hover states, card movement and transitions give the website personality while still making each interactive element understandable.",
              ]}
            />
            <Considerations items={INTERACTIONS} />
          </div>
          <div>
            <Head n="12" title="From Figma to code" />
            <Paras
              className="mt-8"
              paras={[
                "After developing the interface and responsive layouts in Figma, I translated the design into HTML, CSS and JavaScript.",
                "Building the website myself allowed me to preserve the spacing, hierarchy and interactions established during the design process while making practical adjustments for performance, accessibility and different screen sizes.",
              ]}
            />
            <div className="mt-8">
              <p className={eyebrow}>Tools</p>
              <dl className="mt-4 border-b border-ink/20">
                {TOOLS.map(([tool, role]) => (
                  <div key={tool} className="border-t border-ink/20 py-3 flex flex-col sm:flex-row sm:gap-6">
                    <dt className="sm:w-[130px] shrink-0 font-sans text-[16px] font-medium text-ink">{tool}</dt>
                    <dd className="font-sans text-[16px] leading-[1.45] text-ink/80">{role}</dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
