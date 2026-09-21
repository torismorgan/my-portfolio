import Image from "next/image";
import Navbar from "@/app/components/Navbar";
import Footer from "@/app/components/Footer";
import ProjectNav from "@/app/components/ProjectNav";

export const metadata = {
  title: "Nauryz Red — Oris Morgan",
  description:
    "A typography-led concept website exploring how one typeface can become an entire visual language.",
};

const A = "/work/nayryz-red";

/* Project links, shown as a row under the project details. Add { label, href } entries here (e.g. the live website). */
const LINKS = [
  { label: "View live website", href: "https://torismorgan.github.io/Website-Type/" },
  {
    label: "View Figma prototype",
    href: "https://www.figma.com/proto/4g5gk4INzd1gwvodSMwloP/website?node-id=29-127&viewport=-772%2C78%2C0.21&t=onVjbNB3LjXipsiQ-1&scaling=scale-down&content-scaling=fixed&starting-point-node-id=29%3A99&page-id=0%3A1",
  },
];

const RED = "#B03A2E";
const NAVY = "#20242f";
const PANEL = "#F0ECE4";

const META = [
  ["Role", "UI/UX Designer + Front-End Developer"],
  ["Project Type", "Concept Website"],
  ["Tools", "Figma, Illustrator, Photoshop, HTML/CSS/JavaScript"],
  ["Focus", "Typography, Web Design, Interaction"],
];

const DISCIPLINES: [string, string[]][] = [
  ["Typography", ["Type as image", "Type in its natural habitat", "Type as a component"]],
  ["UI/UX", ["Figma", "Layout + prototyping", "Interaction"]],
  ["Web Dev", ["HTML", "CSS", "JavaScript"]],
];

/* Reference layout: 7 columns, A–Z then 1–9. */
const ALPHABET = "ABCDEFGHIJKLMNOPQRSTUVWXYZ123456789".split("");
const TITLE = "#1c2846";
const SPECIMEN_BG = "#F3F0EA";
const BLUE = "#3D4A77"; // the blue behind the social posts in the supplied artwork

const PALETTE = [
  ["#B5443A", "Heritage"],
  ["#E0B028", "Renewal"],
  ["#2F4773", "Depth"],
  ["#7C8A4E", "Growth"],
  ["#F6F5EC", "Balance"],
];

const PROCESS = [
  [
    "Creating hierarchy",
    "Because the same typeface carried most of the experience, I created hierarchy through scale, spacing, placement and contrast.",
  ],
  [
    "Maintaining readability",
    "Nauryz Red is highly expressive, so it became difficult to read at smaller sizes. I tested different sizes and supporting treatments to determine where it worked best.",
  ],
  [
    "Balancing expression and function",
    "The main challenge was allowing the typography to feel experimental without making the interface confusing or difficult to use.",
  ],
];

const eyebrow = "font-sans text-[12px] uppercase tracking-[0.14em] text-ink/70";
const bodyText = "font-sans text-[16px] md:text-[17px] leading-[1.7] text-ink/80";
const pad = "px-6 md:px-9";
const section = `${pad} py-14 md:py-24 border-b border-ink`;

function Copy({ paras, className = "" }: { paras: string[]; className?: string }) {
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

function Heading({
  n,
  title,
  inline,
  className = "",
}: {
  n?: string;
  title: string;
  inline?: boolean; // number beside the title instead of above it
  className?: string;
}) {
  const h2 = (
    <h2
      className={`${n && !inline ? "mt-4" : ""} uppercase leading-[1.08] font-sans font-light text-[clamp(30px,4.4vw,60px)] tracking-[-0.02em]`}
      style={{ color: NAVY }}
    >
      {title}
    </h2>
  );
  return (
    <div className={className}>
      {inline ? (
        <div className="flex items-baseline gap-5 md:gap-8">
          <span className={eyebrow}>{n}</span>
          {h2}
        </div>
      ) : (
        <>
          {n && <p className={eyebrow}>{n}</p>}
          {h2}
        </>
      )}
    </div>
  );
}

function Shot({
  src,
  alt,
  w,
  h,
  className = "",
  priority,
}: {
  src: string;
  alt: string;
  w: number;
  h: number;
  className?: string;
  priority?: boolean;
}) {
  return (
    <Image
      src={`${A}/${src}`}
      alt={alt}
      width={w}
      height={h}
      priority={priority}
      sizes="(min-width: 1080px) 1080px, 100vw"
      className={`w-full h-auto block ${className}`}
    />
  );
}

/* Small circular alphabet cell, set in Nauryz Red — sized in container units so a glyph never clips. */
function Cell({ c }: { c: string }) {
  return (
    <div
      className="nauryz-type aspect-square rounded-full border flex items-center justify-center"
      style={{ borderColor: RED, color: TITLE, containerType: "inline-size" }}
    >
      <span style={{ fontSize: "46cqw", lineHeight: 1 }}>{c}</span>
    </div>
  );
}

function Caption({ children }: { children: React.ReactNode }) {
  return <p className={`${eyebrow} mb-3`}>{children}</p>;
}

export default function NauryzRedCaseStudy() {
  return (
    <main className="bg-cream text-ink flex flex-col">
      <Navbar />

      {/* ── 1. Hero ── */}
      <section className="border-b border-ink">
        <div className={`${pad} pt-12 md:pt-20 pb-10 md:pb-14 text-center`}>
          <h1
            className="font-sans font-light uppercase leading-[0.95] tracking-[-0.035em] text-[clamp(52px,14.5vw,84px)] md:text-[clamp(84px,11vw,176px)]"
            style={{ color: NAVY }}
          >
            Nauryz Red
          </h1>
          <p className={`${bodyText} mt-8 md:mt-10 max-w-[560px] mx-auto`}>
            A typography-led concept website exploring how one typeface can become an entire visual language.
          </p>
        </div>
        <div style={{ backgroundColor: PANEL }} className="border-t border-ink/20">
          <div className="max-w-[1436px] mx-auto">
            <Shot
              src="specimen.png"
              alt="Nauryz Redkeds type specimen — the wordmark set in two lines, designed by Roman Tabachi"
              w={1436}
              h={692}
              priority
            />
          </div>
        </div>
        <div className={`${pad} py-14 md:py-24 border-t border-ink/20 flex flex-col items-center gap-9 md:gap-12 text-center`}>
          {DISCIPLINES.map(([word, tags]) => (
            <div key={word}>
              <p
                className="font-sans font-light uppercase leading-[0.95] tracking-[-0.035em]"
                style={{ color: NAVY, fontSize: "clamp(40px, 15vw, 168px)" }}
              >
                {word}
              </p>
              <p className={`${eyebrow} mt-4 md:mt-5 flex flex-wrap justify-center gap-x-4 gap-y-1`}>
                {tags.map((t) => (
                  <span key={t} className="whitespace-nowrap">
                    [ {t} ]
                  </span>
                ))}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* ── 2. Project information ── */}
      <dl className="grid grid-cols-4 border-b border-ink">
        {META.map(([k, v], i) => (
          <div
            key={k}
            className={`min-w-0 py-5 md:py-6 pr-2 border-ink/40 ${
              i === 0 ? "pl-6 lg:pl-9" : "pl-3 sm:pl-5 lg:pl-9 border-l"
            }`}
          >
            <dt className="font-sans text-[10px] sm:text-[12px] uppercase tracking-[0.08em] sm:tracking-[0.14em] text-ink/70">
              {k}
            </dt>
            {/* zero-width space after each slash lets HTML/CSS/JavaScript wrap instead of overflowing */}
            <dd className="font-sans text-[12px] sm:text-[14px] lg:text-[16px] leading-[1.45] text-ink mt-2 md:mt-3">
              {v.replace(/\//g, "/\u200B")}
            </dd>
          </div>
        ))}
      </dl>

      <div className="border-b border-ink flex flex-wrap items-center justify-center gap-3 px-6 py-5 md:py-6">
        {LINKS.map((l) => (
          <a
            key={l.href}
            href={l.href}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 bg-ink text-cream font-sans font-medium text-[14px] uppercase tracking-[0.08em] px-6 py-3 min-h-[48px] transition-opacity hover:opacity-80"
          >
            {l.label}
            <span aria-hidden="true">↗</span>
          </a>
        ))}
      </div>

      {/* ── 01 Overview + Challenge ── */}
      <section className="border-b border-ink">
        <div className={`${pad} py-12 md:py-16 max-w-[760px] mx-auto text-center`}>
          <p className={eyebrow}>01</p>
          <h2
            className="mt-4 uppercase font-sans font-light leading-[1.1] tracking-[-0.02em] text-[clamp(28px,3.4vw,46px)]"
            style={{ color: TITLE }}
          >
            Overview + Challenge
          </h2>
          <Copy
            className="mt-7"
            paras={[
              "This project explores typography as the entire visual language of a website. The brief was to choose one typeface and use it as the main component—not decoration.",
              "I chose Nauryz Red and built a concept site that shows the type in three roles: type as image, type in its natural habitat and type as a component.",
            ]}
          />
        </div>
      </section>

      {/* ── 02 Typeface + Visual Exploration ── */}
      <section className={`${pad} py-10 md:py-14 border-b border-ink`} style={{ backgroundColor: SPECIMEN_BG }}>
        <div className="flex items-baseline gap-5 md:gap-8">
          <span className={eyebrow}>02</span>
          <h2
            className="uppercase font-sans font-light leading-[1.1] tracking-[-0.02em] text-[clamp(26px,3vw,42px)]"
            style={{ color: TITLE }}
          >
            Typeface + Visual Exploration
          </h2>
        </div>

        <div className="mt-10 md:mt-12 grid grid-cols-1 md:grid-cols-[1.4fr_1fr] lg:grid-cols-[1.5fr_0.9fr_1px_0.85fr] gap-10 items-start">
          {/* wordmark + typeface credits */}
          <div>
            <Image
              src={`${A}/wordmark-star.png`}
              alt="Nauryz Redkeds wordmark in red, with a blue star beside the second line"
              width={540}
              height={158}
              className="w-full max-w-[540px] h-auto block"
            />
            <h3 className="font-sans text-[16px] font-semibold mt-6" style={{ color: TITLE }}>
              Typeface
            </h3>
            <div className="font-sans text-[16px] md:text-[15px] leading-[1.6] text-ink/75 mt-1">
              <p>Nauryz Redkeds — designed by Roman Tabachi (2024)</p>
              <p>Released by: Red Keds CA in 2024</p>
              <p className="break-words">
                Vendor URL:{" "}
                <a
                  href="https://befonts.com/nauryzredkeds-font.html"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block py-3 -my-3 underline underline-offset-2 hover:opacity-70"
                >
                  https://befonts.com/nauryzredkeds-font.html
                </a>
              </p>
              <p>License: Free for commercial and personal use</p>
            </div>
          </div>

          {/* alphabet + numbers */}
          <div className="grid grid-cols-7 gap-1.5 w-full max-w-[290px] mx-auto md:mx-0" aria-label="Alphabet and numbers">
            {ALPHABET.map((c) => (
              <Cell key={c} c={c} />
            ))}
          </div>

          <div aria-hidden="true" className="hidden lg:block w-px self-stretch bg-ink/40" />

          {/* exploration notes */}
          <div className="md:col-span-2 lg:col-span-1">
            <div className="flex flex-col gap-4">
              <p className="font-sans text-[16px] md:text-[15px] leading-[1.65] text-ink/80">
                Nauryz Red has expressive letterforms that immediately create movement and personality. I explored
                its shapes, proportions and repeated forms to understand how it could carry an entire website.
              </p>
              <p className="font-sans text-[16px] md:text-[15px] leading-[1.65] text-ink/80">
                Instead of introducing decorative graphics, I allowed the typeface itself to create the composition.
              </p>
            </div>
            <p className={`${eyebrow} mt-8`}>Culture &nbsp;/&nbsp; Form &nbsp;/&nbsp; Expression</p>
          </div>
        </div>
      </section>

      {/* ── 03 Visual System ── */}
      <section className={`${pad} py-10 md:py-14 border-b border-ink`}>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-[1.25fr_1px_1.15fr_1px_1fr] gap-10 items-start">
          <div className="md:col-span-2 lg:col-span-1">
            <div className="flex items-baseline gap-5 md:gap-8">
              <span className={eyebrow}>03</span>
              <h2
                className="uppercase font-sans font-light leading-[1.1] tracking-[-0.02em] text-[clamp(26px,3vw,42px)]"
                style={{ color: TITLE }}
              >
                Visual System
              </h2>
            </div>
            <p className="font-sans text-[16px] md:text-[15px] leading-[1.65] text-ink/80 mt-6 max-w-[440px]">
              A small visual system supports the typeface: a warm colour palette, a two-font hierarchy and the
              letter R repeated as a component, so Nauryz Red stays at the centre of every screen.
            </p>
            <p className={`${eyebrow} mt-8`}>Colour &nbsp;/&nbsp; Type &nbsp;/&nbsp; Shape</p>
          </div>

          <div aria-hidden="true" className="hidden lg:block w-px self-stretch bg-ink/40" />

          <div>
            <p className={eyebrow}>Colour palette</p>
            <ul className="mt-6 grid grid-cols-5 gap-x-2 md:gap-x-4 max-w-[420px]">
              {PALETTE.map(([hex, name]) => (
                <li key={hex} className="flex flex-col items-center text-center min-w-0">
                  <span
                    className="block w-full max-w-[56px] aspect-square rounded-full"
                    style={{
                      backgroundColor: hex,
                      border: hex === "#F6F5EC" ? "1px solid rgba(31,31,31,0.55)" : undefined,
                    }}
                  />
                  <span className="font-sans text-[11px] md:text-[12px] text-ink/70 mt-3 uppercase">{hex}</span>
                  <span className="font-sans text-[12px] text-ink/70">{name}</span>
                </li>
              ))}
            </ul>
          </div>

          <div aria-hidden="true" className="hidden lg:block w-px self-stretch bg-ink/40" />

          <div>
            <p className={eyebrow}>Typography hierarchy</p>
            <div className="mt-6 flex gap-10 md:gap-12">
              <div>
                <p className="nauryz-type text-[64px] md:text-[72px] leading-none" style={{ color: TITLE }}>
                  Aa
                </p>
                <p className="font-sans text-[16px] font-medium mt-4" style={{ color: TITLE }}>
                  Primary
                </p>
                <p className="font-sans text-[12px] text-ink/70">Nauryz Red</p>
              </div>
              <div>
                <p className="font-sans font-light text-[64px] md:text-[72px] leading-none" style={{ color: TITLE }}>
                  Aa
                </p>
                <p className="font-sans text-[16px] font-medium mt-4" style={{ color: TITLE }}>
                  Secondary
                </p>
                <p className="font-sans text-[12px] text-ink/70">Geist / Swiss style</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── 04 Website Design ── */}
      <section className="grid grid-cols-1 lg:grid-cols-[minmax(0,0.31fr)_minmax(0,0.69fr)] border-b border-ink">
        <div className={`${pad} py-12 md:py-16 lg:pr-6 flex flex-col justify-center`}>
          <div className="flex items-baseline gap-5 md:gap-8">
            <span className={eyebrow}>04</span>
            <h2
              className="uppercase font-sans font-light leading-[1.1] tracking-[-0.02em] text-[clamp(26px,2.5vw,36px)] lg:whitespace-nowrap"
              style={{ color: TITLE }}
            >
              Website Design
            </h2>
          </div>
          <Copy
            className="mt-7"
            paras={[
              "The final website brings all three roles together. Nauryz Red shifts between expressive imagery, editorial typography and functional interface components while remaining the central element of the experience.",
              "The supporting layout stays minimal so the typeface can control the visual language.",
            ]}
          />
        </div>
        {/* Real screens only, each at its own proportions; flex-grow = aspect ratio keeps them the same height, uncropped. */}
        <div
          className="border-t lg:border-t-0 lg:border-l border-ink p-6 md:p-8 flex flex-col md:flex-row items-start gap-5 md:gap-4"
          style={{ backgroundColor: SPECIMEN_BG }}
        >
          {[
            ["habitat.png", 539, 623, "The BLOOM wordmark on a street billboard"],
            ["website-home.png", 610, 432, "Home screen of the website: navigation pill above the wordmark in yellow"],
          ].map(([src, w, h, alt]) => (
            <div
              key={src as string}
              className="w-full md:w-auto min-w-0 md:[flex:var(--r)_1_0%]"
              style={{ "--r": (w as number) / (h as number) } as React.CSSProperties}
            >
              <Shot src={src as string} alt={alt as string} w={w as number} h={h as number} />
            </div>
          ))}
        </div>
      </section>

      {/* ── 5. TYPE AS IMAGE ── */}
      <section className={section}>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 items-start">
          <Heading n="05" title="Type as image" inline />
          <Copy
            paras={[
              "At a large scale, Nauryz Red functions like an image. Its unusual letterforms create shape, rhythm and contrast before the words are even read.",
              "I used oversized words and cropped letterforms to create visual moments throughout the website.",
            ]}
          />
        </div>
        <div className="mt-12 md:mt-16 grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-10 items-start max-w-[1200px] mx-auto">
          <Shot
            src="horizon.png"
            alt="Yellow website screen with the word HORIZON set in oversized Nauryz Red letters"
            w={1079}
            h={662}
          />
          <Shot
            src="boja.png"
            alt="Green website screen with the word Boja set in large Nauryz Red letters"
            w={1119}
            h={702}
          />
        </div>
      </section>

      {/* ── 05 Social Media ── */}
      <section
        className="grid grid-cols-1 lg:grid-cols-[minmax(0,0.36fr)_minmax(0,0.64fr)] border-b border-ink text-white"
        style={{ backgroundColor: BLUE }}
      >
        <div className={`${pad} py-12 md:py-16 lg:pr-10 flex flex-col justify-center`}>
          <div className="flex items-baseline gap-5 md:gap-8">
            <span className="font-sans text-[12px] uppercase tracking-[0.14em] text-white/70">06</span>
            <h2 className="uppercase font-sans font-light leading-[1.1] tracking-[-0.02em] text-[clamp(26px,3vw,42px)]">
              Social Media
            </h2>
          </div>
          <p className="font-sans text-[16px] md:text-[15px] leading-[1.65] text-white/85 mt-7">
            This section explores how the typeface behaves in the editorial and promotional contexts it was designed
            for. The goal was to preserve its personality while placing it in a clear, intentional composition.
          </p>
          <p className="font-sans text-[12px] uppercase tracking-[0.14em] text-white/70 mt-8">
            Editorial &nbsp;/&nbsp; Promotional &nbsp;/&nbsp; Social
          </p>
        </div>
        {/* the supplied four-post artwork, whole; on phones it scrolls sideways inside the band rather than shrinking */}
        <div className="overflow-x-auto py-8 md:py-12 lg:pr-9">
          <div className="min-w-[720px] lg:min-w-0 px-6 lg:px-0">
            <Shot
              src="social-habitat.png"
              alt="Four BLOOM social posts using Nauryz Red in editorial and promotional layouts"
              w={1322}
              h={363}
            />
          </div>
        </div>
      </section>

      {/* ── 7. TYPE AS A COMPONENT ── */}
      <section className={section}>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 items-start">
          <Heading n="07" title="Type as a component" />
          <Copy
            paras={[
              "The typeface also appears in functional parts of the website, including navigation, labels, buttons and repeated interface elements.",
              "This required balancing expression with readability so the website remained usable and consistent.",
            ]}
          />
        </div>

        <div className="mt-12 md:mt-16">
          <Caption>The letter R, rebuilt as a component in different shapes</Caption>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-6 items-start">
            <Shot src="r-navy.png" alt="Navy R-shaped component on a grey-blue tile" w={662} h={627} />
            <Shot src="r-green.png" alt="Green R-shaped component on a sage tile" w={661} h={627} />
            <Shot src="r-red.png" alt="Red R-shaped component on a pink tile" w={661} h={627} />
            <Shot src="r-yellow.png" alt="Yellow R-shaped component on a pale yellow tile" w={661} h={627} />
          </div>
        </div>
      </section>

      {/* ── 9. Process + Challenges ── */}
      <section className={section}>
        <Heading n="08" title="Process + Challenges" />
        <div className="mt-10 md:mt-14 grid grid-cols-1 md:grid-cols-3">
          {PROCESS.map(([title, text], i) => (
            <div
              key={title}
              className={`py-8 md:py-10 border-b md:border-b-0 border-ink/40 ${
                i > 0 ? "md:border-l md:pl-8" : ""
              } ${i < 2 ? "md:pr-8" : ""}`}
            >
              <p className={eyebrow}>{`0${i + 1}`}</p>
              <h3 className="font-sans text-[20px] md:text-[22px] font-normal mt-4" style={{ color: NAVY }}>
                {title}
              </h3>
              <p className={`${bodyText} mt-4`}>{text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── 11. Outcome ── */}
      <section className={section}>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 items-start">
          <Heading n="09" title="Outcome" />
          <Copy
            paras={[
              "The final concept demonstrates how one typeface can carry an entire website—from bold, image-like moments to functional interface components.",
              "The project strengthened my understanding of typography as a complete design system and taught me how scale, spacing and repetition can create hierarchy without relying on additional decorative elements.",
            ]}
          />
        </div>
        <div className="mt-12 md:mt-16 max-w-[1080px] mx-auto border border-ink/30" style={{ backgroundColor: PANEL }}>
          <video
            className="block w-full h-auto"
            width={1280}
            height={904}
            poster={`${A}/outcome-poster.jpg`}
            autoPlay
            muted
            loop
            playsInline
            controls
            preload="metadata"
            aria-label="Screen recording of the final website: the home screen, the billboard and the large-type screens"
          >
            <source src={`${A}/outcome.mp4`} type="video/mp4" />
          </video>
        </div>
      </section>

      {/* ── Previous / next project ── */}
      <ProjectNav current="nauryz" />

      <Footer />
    </main>
  );
}
