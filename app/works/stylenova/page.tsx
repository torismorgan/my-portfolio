import Image from "next/image";
import { Poppins } from "next/font/google";
import Navbar from "@/app/components/Navbar";
import Footer from "@/app/components/Footer";
import ProjectNav from "@/app/components/ProjectNav";
import CaseStudyBreadcrumb from "@/app/components/CaseStudyBreadcrumb";
import ExternalArrow from "@/app/components/ExternalArrow";

export const metadata = {
  title: "Style Nova — Oris Morgan",
  description:
    "Style Nova is an interactive fashion game redesigned with stronger storytelling, expanded choices, and a more engaging mobile experience.",
};

const poppins = Poppins({ subsets: ["latin"], weight: ["300", "400", "500", "600"], variable: "--font-poppins-sn" });

const A = "/work/stylenova";

const NAVY = "#20242f";
const PINK = "#FF94DD"; // bubblegum — the game's "Pick outfit" bar
const PINK_SOFT = "#FDECF6";
const BLUSH = "#FFF4FB"; // the game's title-screen background

const eyebrow = "font-sans text-[12px] uppercase tracking-[0.14em] text-ink/70";
const bodyText = "font-sans text-[16px] md:text-[17px] leading-[1.7] text-ink/80";
const pad = "px-6 md:px-9";
const section = `${pad} py-14 md:py-24 border-b border-ink`;
const twoCol = "grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-start";

/* ── content ── */

/* Project links, shown as a row under the project details. */
const LINKS = [{ label: "View original website", href: "https://torismorgan.github.io/stylenova/" }];

const META = [
  ["Role", "Visual Design, UI/UX, Character Design"],
  ["Project Type", "Interactive Game Redesign"],
  ["Platform", "Mobile"],
  ["Status", "In Progress"],
  ["Year", "2026"],
];

const GOALS = [
  "Expand the story and event journey",
  "Introduce Nova’s rival, Chanel",
  "Create more outfit choices",
  "Add wins, losses, ties and scoring",
  "Give player decisions visible consequences",
  "Improve the mobile interface",
  "Preserve the original Y2K nostalgia",
];

// the design board's core palette (the board's purple accents are deliberately left out)
const PALETTE = [
  ["Porcelain", "#F7F5F2", "backgrounds, surfaces"],
  ["Chrome Mist", "#E1E4EA", "panels, borders, dividers"],
  ["Liquid Silver", "#BEC3CC", "secondary text, icons"],
  ["Ink Charcoal", "#1E1F23", "primary text, headings"],
  ["Electric Ice", "#A9D9FF", "highlights, info"],
  ["Nova Pink", "#FF5FA2", "signature accent, selected items"],
];
const CHROME = ["#8D939C", "#F7F8FA", "#AEB4BD", "#FFFFFF", "#7E848D"];
const ACCENTS = [
  ["Brunch", "Butter Yellow", "#F3D98B"],
  ["Red Carpet", "Deep Cherry", "#8F1734"],
];

const ORIGINALS = [
  { src: "o-landing", w: 1200, h: 853, caption: "Landing screen", alt: "Original Style Nova landing screen: a pink STYLE NOVA banner, Nova in a glass dome, and a “hey there, style star!” card with a Pick her outfit button" },
  { src: "o-desk-7", w: 1200, h: 853, caption: "Outfit selection", alt: "Original desktop game, Event One, Casual Work Day: Nova in a glass dome with three outfits to choose from" },
  { src: "o-desk-6", w: 1200, h: 853, caption: "Result", alt: "Original desktop game: a 'perfect pick, bestie!' result screen with a Next event button" },
];

const JOURNEY = [
  "Meet Nova",
  "Receive the event brief",
  "Select an outfit",
  "Confirm the selected look",
  "Meet Chanel",
  "Compare scores",
  "Continue to the next event",
];

/* ── small building blocks ── */

function Head({ n, title }: { n: string; title: string }) {
  return (
    <div className="flex items-baseline gap-5 md:gap-8">
      <span className={eyebrow}>{n}</span>
      <h2
        className="uppercase sn-title font-normal leading-[1.2] tracking-[0.01em] text-balance text-[clamp(20px,2.8vw,40px)]"
        style={{ color: NAVY }}
      >
        {title}
      </h2>
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

/* A real game screen, shown at its own proportions with softly rounded corners. */
function Phone({ src, alt, caption, className = "" }: { src: string; alt: string; caption?: string; className?: string }) {
  return (
    <figure className={className}>
      <div className="overflow-hidden rounded-[22px] md:rounded-[26px] shadow-[0_18px_40px_rgba(174,78,117,0.22)] ring-1 ring-black/10 bg-white">
        <Image
          src={`${A}/${src}.webp`}
          alt={alt}
          width={402}
          height={874}
          sizes="(min-width: 1024px) 330px, 46vw"
          className="block w-full h-auto"
        />
      </div>
      {caption && <figcaption className={`${eyebrow} mt-3 text-center`}>{caption}</figcaption>}
    </figure>
  );
}

/* Rows of screens: 2 per row on phones, 3 on desktop; an unfinished last row is centred, never left-heavy. */
function ScreenGrid({ children }: { children: React.ReactNode }) {
  return <ul className="flex flex-wrap justify-center gap-x-4 gap-y-8 md:gap-x-8 md:gap-y-12 max-w-[1040px] mx-auto">{children}</ul>;
}
function ScreenItem({ children }: { children: React.ReactNode }) {
  return <li className="w-[calc(50%-8px)] md:w-[calc(33.333%-21.34px)]">{children}</li>;
}

function Desk({ src, alt, w = 1200, h = 853 }: { src: string; alt: string; w?: number; h?: number }) {
  return (
    <div className="overflow-hidden rounded-[10px] ring-1 ring-black/10 shadow-[0_14px_32px_rgba(174,78,117,0.18)] bg-white">
      <Image src={`${A}/${src}.webp`} alt={alt} width={w} height={h} sizes="(min-width: 1024px) 460px, 86vw" className="block w-full h-auto" />
    </div>
  );
}

function Sketch({ src, alt, w = 760, h = 1082, className = "" }: { src: string; alt: string; w?: number; h?: number; className?: string }) {
  return (
    <div className={`border border-ink/30 bg-white overflow-hidden ${className}`}>
      <Image src={`${A}/${src}.webp`} alt={alt} width={w} height={h} sizes="(min-width: 1024px) 300px, 46vw" className="block w-full h-auto" />
    </div>
  );
}

/* ── the page ── */

export default function StyleNovaCaseStudy() {
  return (
    <main className={`bg-cream text-ink flex flex-col ${poppins.variable}`}>
      <Navbar />
      <CaseStudyBreadcrumb current="stylenova" />

      <div className="sn-body">

      {/* ── 1. Hero ── */}
      <section className="border-b border-ink">
        <div className={`${pad} pt-12 md:pt-20 pb-10 md:pb-14 text-center`}>
          <h1
            className="sn-title font-normal uppercase leading-[1] tracking-[0.01em] text-[clamp(32px,9.6vw,72px)] md:text-[clamp(72px,8.8vw,144px)]"
            style={{ color: NAVY }}
          >
            Style Nova
          </h1>
          <p className={`${eyebrow} mt-6 md:mt-8`}>Interactive Fashion Game</p>
          <p className={`${bodyText} mt-6 md:mt-8 max-w-[640px] mx-auto`}>
            Style Nova is an interactive fashion game redesigned with stronger storytelling, expanded choices, and a more
            engaging mobile experience.
          </p>
        </div>

        {/* collage of the strongest redesigned mobile screens */}
        <div className={`${pad} py-12 md:py-20 border-t border-ink/20 overflow-hidden`} style={{ backgroundColor: PINK_SOFT }}>
          <div className="mx-auto max-w-[1000px] flex items-start justify-center">
            <Phone
              src="s-brunch-tie"
              alt="Style Nova brunch screen: Nova in a hot pink cut-out set beside the outfit panel"
              className="hidden sm:block w-[19%] mt-16 md:mt-24 -mr-[2%] -rotate-[5deg] z-0"
            />
            <Phone
              src="s-brunch-scores"
              alt="Style Nova brunch result: 'Nova wins!!' with the score comparison against Chanel"
              className="w-[30%] sm:w-[23%] mt-8 md:mt-12 -mr-[3%] sm:-mr-[2%] -rotate-[2deg] z-10"
            />
            <Phone
              src="s-title"
              alt="Style Nova title screen: 'Welcome to Style Nova', Nova in a silver mini skirt and boots, and a Start Game button"
              className="w-[40%] sm:w-[30%] z-20"
            />
            <Phone
              src="s-red-win"
              alt="Style Nova red-carpet screen: Nova in a gold gown with a winning reaction"
              className="w-[30%] sm:w-[23%] mt-8 md:mt-12 -ml-[3%] sm:-ml-[2%] rotate-[2deg] z-10"
            />
            <Phone
              src="s-brunch-chanel"
              alt="Style Nova brunch screen: Chanel has arrived, standing beside Nova"
              className="hidden sm:block w-[19%] mt-16 md:mt-24 -ml-[2%] rotate-[5deg] z-0"
            />
          </div>
        </div>
      </section>

      {/* ── Project details ── */}
      <dl className="grid grid-cols-2 lg:grid-cols-5 border-b border-ink">
        {META.map(([k, v], i) => (
          <div
            key={k}
            /* phones: Role, Project Type and Year take a full row; Platform and Status share one */
            className={`min-w-0 py-5 md:py-6 px-6 border-ink/40 ${i > 0 ? "border-t" : ""} ${i === 3 ? "border-l" : ""} ${
              i === 0 || i === 1 || i === 4 ? "col-span-2" : ""
            } lg:col-span-1 lg:border-t-0 ${i > 0 ? "lg:border-l" : ""}`}
          >
            <dt className="font-sans text-[11px] sm:text-[12px] uppercase tracking-[0.12em] sm:tracking-[0.14em] text-ink/70">{k}</dt>
            <dd className="font-sans text-[16px] lg:text-[15px] leading-[1.5] text-ink mt-2 md:mt-3 flex items-center gap-2">
              {k === "Status" && <span aria-hidden="true" className="inline-block w-2.5 h-2.5 rounded-full" style={{ backgroundColor: PINK }} />}
              {v}
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
            <ExternalArrow />
          </a>
        ))}
      </div>

      {/* ── 02 The project ── */}
      <section className={section}>
        <div className={twoCol}>
          <div>
            <Head n="01" title="The project" />
            <Paras
              className="mt-8"
              paras={[
                "Style Nova is an interactive fashion game where players style Nova for different events and compete against her rival, Chanel. Each outfit choice affects the competition results and moves the player through Nova’s day—from brunch to the red carpet and after-party.",
              ]}
            />
          </div>
          <div className="flex justify-center gap-4 md:gap-8">
            <Phone src="s-title" alt="Nova on the Style Nova title screen" caption="Nova" className="w-[46%] max-w-[300px]" />
            <Phone
              src="s-brunch-chanel"
              alt="Chanel arriving at the brunch beside Nova"
              caption="Nova and Chanel"
              className="w-[46%] max-w-[300px] mt-10 md:mt-16"
            />
          </div>
        </div>
      </section>

      {/* ── 03 The original game ── */}
      <section className={section}>
        <Head n="02" title="Where it started" />
        <Paras
          className="mt-8 max-w-[760px]"
          paras={[
            "The original Style Nova introduced Nova, the Y2K-inspired visual direction, and a basic dress-up experience. However, the journey was highly linear: players selected an outfit, received a result, and moved directly to the next event.",
          ]}
        />
        <p className={`${eyebrow} mt-12 md:mt-16 mb-4`}>Style Nova — Original Desktop Experience</p>
        {/* the original screens stay horizontal; on phones they scroll sideways inside the gallery */}
        <div className="-mx-6 px-6 md:mx-0 md:px-0 overflow-x-auto md:overflow-visible snap-x snap-mandatory scroll-px-6 pb-3 md:pb-0">
          <div className="flex items-start gap-4 md:gap-6">
            {ORIGINALS.map((o) => (
              <figure
                key={o.src}
                className="snap-start shrink-0 basis-[86%] sm:basis-[62%] md:shrink md:basis-auto min-w-0 md:[flex:var(--r)_1_0%]"
                style={{ "--r": o.w / o.h } as React.CSSProperties}
              >
                <Desk src={o.src} alt={o.alt} w={o.w} h={o.h} />
                <figcaption className={`${eyebrow} mt-3`}>{o.caption}</figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      {/* ── 04 The problem ── */}
      <section className={section}>
        <Head n="03" title="The problem" />
        <Paras
          className="mt-8 max-w-[760px]"
          paras={[
            "The original version had limited choices, little narrative tension, and few opportunities for the player to influence the experience. The redesign needed to preserve its nostalgic personality while creating a more immersive game with clearer progression and meaningful outcomes.",
          ]}
        />
        {/* both sides share one height, each at its own proportions */}
        <div className="mt-12 md:mt-16 max-w-[1000px] mx-auto flex flex-col md:flex-row md:items-start gap-8">
          <div className="md:[flex:1.407_1_0%] min-w-0">
            <p className={`${eyebrow} mb-3`}>Original desktop game</p>
            <Desk
              src="o-desk-8"
              alt="Original desktop game: a speech bubble reads 'this ain't the vibe, bestie! let's give it another go' beside a Try again button"
            />
          </div>
          <div className="md:[flex:0.46_1_0%] min-w-0 w-[64%] sm:w-[46%] mx-auto md:mx-0">
            <p className={`${eyebrow} mb-3`}>Redesigned mobile game</p>
            <Phone src="s-brunch-lose" alt="Redesigned mobile game: an outfit panel with nine looks, Nova's reaction and Lock it in and Try again buttons" />
          </div>
        </div>
      </section>

      {/* ── 05 The redesign ── */}
      <section className={section}>
        <div className={twoCol}>
          <Head n="04" title="The redesign" />
          <Paras
            paras={[
              "The goal was to transform a simple dress-up game into a more complete interactive experience while preserving the playful Y2K feeling of the original.",
            ]}
          />
        </div>

        <ol className="mt-12 md:mt-16 flex flex-wrap justify-center gap-4 md:gap-5">
          {GOALS.map((g, i) => (
            <li
              key={g}
              className="w-full sm:w-[calc(50%-10px)] lg:w-[calc(25%-15px)] border border-ink/30 p-4 sm:p-5 md:p-6 flex flex-row items-center gap-4 sm:flex-col sm:items-start sm:justify-between sm:gap-8 sm:min-h-[150px]"
              style={{ backgroundColor: i % 2 === 0 ? BLUSH : "transparent" }}
            >
              <span className="shrink-0 inline-flex items-center justify-center w-9 h-9 rounded-full font-sans text-[13px] text-ink" style={{ backgroundColor: PINK }}>
                {String(i + 1).padStart(2, "0")}
              </span>
              <span className="font-sans text-[16px] md:text-[17px] leading-[1.4] text-ink">{g}</span>
            </li>
          ))}
        </ol>

        <div className="mt-12 md:mt-16 flex justify-center gap-4 md:gap-8 max-w-[900px] mx-auto">
          <Phone src="s-title" alt="Redesigned Style Nova title screen" caption="Meet Nova" className="w-[30%]" />
          <Phone src="s-brunch-scores" alt="Redesigned brunch result screen with scoring" caption="Scoring" className="w-[30%] mt-6 md:mt-10" />
          <Phone src="s-red-win" alt="Redesigned red-carpet screen with a winning reaction" caption="Reactions" className="w-[30%]" />
        </div>
      </section>

      {/* ── 06 Early sketches ── */}
      <section className={section}>
        <div className={twoCol}>
          <Head n="05" title="From sketch to screen" />
          <Paras
            paras={[
              "The visual process began with my original 2D character sketches and outfit concepts. I designed Nova, Chanel, their expressions, and the fashion direction for each event before developing the final game screens.",
            ]}
          />
        </div>

        <div className="mt-12 md:mt-20 flex flex-col gap-14 md:gap-24">
          <div>
            <p className={`${eyebrow} mb-4`}>Nova — character studies</p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8 items-start">
              <Sketch src="sk-nova-1" alt="Sketch of Nova in a blue cropped jacket, ruffled skirt and pink heels" />
              <Sketch src="sk-nova-2" alt="Sketch of Nova in a white crop top and black trousers" className="md:mt-12" />
              <Sketch src="sk-nova-4" alt="Sketch of Nova in a pale blue hoodie with her hair in a bun" />
              <Sketch src="sk-nova-3" alt="Sketch of Nova in a sparkling gold one-shoulder gown" className="md:mt-12" />
            </div>
          </div>

          <div>
            <p className={`${eyebrow} mb-4`}>Outfit concepts</p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8 items-start">
              <Sketch src="sk-outfit-1" alt="Outfit sketch: an orange top with teal shoulders and a wrapped orange skirt" w={760} h={1094} />
              <Sketch src="sk-outfit-3" alt="Outfit sketch: a purple halter dress with a trailing scarf" w={760} h={1094} className="md:mt-12" />
              <Sketch src="sk-outfit-4" alt="Outfit sketch: a black plunging gown with a high slit" w={760} h={1094} />
              <Sketch src="sk-outfit-6" alt="Outfit sketch: a red silk one-shoulder gown with a long train" w={760} h={1094} className="md:mt-12" />
            </div>
          </div>

          <div className="w-full max-w-[760px] mx-auto">
            <p className={`${eyebrow} mb-4`}>Chanel dresses sketches</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-8 items-start">
              <Sketch src="sk-chanel-1" alt="Early sketch of a pink mini dress with fluffy boots" w={760} h={600} />
              <Sketch src="sk-chanel-2" alt="Early sketch of a pale blue gown with a long cape" w={760} h={600} />
            </div>
          </div>
        </div>
      </section>

      {/* ── 07 AI-assisted development ── */}
      <section className={section}>
        <div className={twoCol}>
          <Head n="06" title="Developing the characters" />
          <div>
            <p className={`${eyebrow} mb-3`}>AI-assisted process</p>
            <Paras
              paras={[
                "AI was used as an assistive tool to translate and iterate on my original 2D character and fashion designs into a more dimensional visual style. The concepts, characters, outfits, art direction, interface, and overall experience were designed by me, with generated outputs refined to remain consistent with the project’s visual direction.",
              ]}
            />
          </div>
        </div>

        <div className="mt-12 md:mt-16 flex flex-col gap-12 md:gap-16 max-w-[1000px] mx-auto">
          {[
            [
              { src: "sk-outfit-1", w: 760, h: 1094, alt: "Original sketch of an orange top and wrapped skirt" },
              { src: "ai2-orange", w: 685, h: 1028, alt: "AI-assisted iteration: Nova wearing the orange top and wrapped skirt" },
              { src: "s-brunch-chanel", w: 402, h: 874, alt: "The refined outfit on Nova in the brunch screen", phone: true },
            ],
            [
              { src: "sk-nova-3", w: 760, h: 1082, alt: "Original sketch of a gold one-shoulder gown" },
              { src: "ai2-gold", w: 685, h: 1028, alt: "AI-assisted iteration: Nova wearing the gold one-shoulder gown" },
              { src: "s-red-win", w: 402, h: 874, alt: "The refined gold gown on Nova in the red-carpet screen", phone: true },
            ],
          ].map((row, ri) => (
            <div key={ri} className="-mx-6 px-6 md:mx-0 md:px-0 flex flex-row items-center gap-3 md:gap-5 overflow-x-auto md:overflow-visible snap-x snap-mandatory scroll-px-6 pb-3 md:pb-0">
              {row.map((im, i) => (
                <div key={im.src} className="contents">
                  <figure
                    className="snap-center shrink-0 basis-[58%] sm:basis-[40%] md:shrink md:basis-auto min-w-0 md:[flex:var(--r)_1_0%]"
                    style={{ "--r": im.w / im.h } as React.CSSProperties}
                  >
                    <div className={`overflow-hidden bg-white ${im.phone ? "rounded-[22px] shadow-[0_14px_32px_rgba(174,78,117,0.22)] ring-1 ring-black/10" : "border border-ink/30"}`}>
                      <Image src={`${A}/${im.src}.webp`} alt={im.alt} width={im.w} height={im.h} sizes="(min-width: 1024px) 300px, 60vw" className="block w-full h-auto" />
                    </div>
                    <figcaption className={`${eyebrow} mt-3 text-center`}>
                      {["Original sketch", "AI-assisted iteration", "Refined game asset"][i]}
                    </figcaption>
                  </figure>
                  {i < 2 && (
                    <span aria-hidden="true" className="self-center shrink-0 text-ink/50 font-sans text-[20px] leading-none mb-6">
                      →
                    </span>
                  )}
                </div>
              ))}
            </div>
          ))}
        </div>

        {/* character sheets */}
        <div className="mt-14 md:mt-20 max-w-[1000px] mx-auto">
          <p className={`${eyebrow} mb-4`}>Character sheets</p>
          <div className="flex flex-col md:flex-row md:items-center gap-6">
            {[
              { src: "nova-sheet", w: 765, h: 921, caption: "Nova — character sheet", alt: "Nova's character sheet: a full-length front view, three face angles and a back view of her hair" },
              { src: "nova-expressions", w: 916, h: 769, caption: "Nova — expressions", alt: "Four of Nova's facial expressions: calm, sceptical, annoyed and delighted" },
              { src: "chanel-sheet", w: 1028, h: 686, caption: "Chanel — character sheet", alt: "Chanel's character sheet: a full-length pose and four facial expressions" },
            ].map((sh) => (
              <figure
                key={sh.src}
                className="min-w-0 md:[flex:var(--r)_1_0%]"
                style={{ "--r": sh.w / sh.h } as React.CSSProperties}
              >
                <div className="overflow-hidden border border-ink/30" style={{ backgroundColor: BLUSH }}>
                  <Image src={`${A}/${sh.src}.webp`} alt={sh.alt} width={sh.w} height={sh.h} sizes="(min-width: 1024px) 330px, 100vw" className="block w-full h-auto" />
                </div>
                <figcaption className={`${eyebrow} mt-3 text-center`}>{sh.caption}</figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      {/* ── 08 Visual direction ── */}
      <section className={section}>
        <div className={twoCol}>
          <Head n="07" title="Y2K, reimagined" />
          <Paras
            paras={[
              "The redesign preserves the original game’s Y2K-inspired energy through bright pink, playful typography, stars, glossy interface elements, and fashion-game nostalgia. Updated environments and character visuals make the experience feel more polished while maintaining its fun, feminine personality.",
            ]}
          />
        </div>

        {/* colour palette */}
        <div className="mt-12 md:mt-16">
          <p className={`${eyebrow} mb-3`}>Colour palette — the world of Style Nova</p>
          <ul className="grid grid-cols-3 sm:grid-cols-6 border-l border-t border-ink/30">
            {PALETTE.map(([name, hex, use]) => (
              <li key={hex} className="border-r border-b border-ink/30">
                <span className="block h-[64px] md:h-[92px]" style={{ backgroundColor: hex }} aria-hidden="true" />
                <p className="px-3 py-2.5 font-sans text-[12px] leading-[1.35] text-ink/80">
                  {name}
                  <span className="block uppercase text-ink/55">{hex}</span>
                  <span className="block text-ink/55">{use}</span>
                </p>
              </li>
            ))}
          </ul>

          <div className="mt-6 grid grid-cols-1 md:grid-cols-[1.6fr_1fr] gap-6 md:gap-8 items-stretch">
            <div>
              <p className={`${eyebrow} mb-3`}>Chrome / metallic gradient</p>
              <div
                aria-hidden="true"
                className="h-[72px] md:h-[88px] border border-ink/30"
                style={{ background: `linear-gradient(90deg, ${CHROME.join(", ")})` }}
              />
              <p className="mt-2 font-sans text-[12px] leading-[1.5] text-ink/60 uppercase">{CHROME.join("  ·  ")}</p>
            </div>
            <div>
              <p className={`${eyebrow} mb-3`}>Event accents</p>
              <ul className="grid grid-cols-2 border-l border-t border-ink/30">
                {ACCENTS.map(([event, name, hex]) => (
                  <li key={hex} className="border-r border-b border-ink/30 flex items-center gap-3 p-3">
                    <span aria-hidden="true" className="shrink-0 w-9 h-9 rounded-full ring-1 ring-black/10" style={{ backgroundColor: hex }} />
                    <span className="font-sans text-[12px] leading-[1.35] text-ink/80 min-w-0">
                      {event}
                      <span className="block text-ink/55">{name}</span>
                      <span className="block uppercase text-ink/55">{hex}</span>
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* typography · buttons and dialogue · stars and chrome title */}
        <div className="mt-10 md:mt-14 grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 items-stretch">
          <div className="flex flex-col">
            <p className={`${eyebrow} mb-3`}>Typography</p>
            <div className="flex-1 border border-ink/30 p-6 flex flex-col justify-between gap-8" style={{ backgroundColor: BLUSH }}>
              <div>
                <p className={eyebrow}>Azonix — titles</p>
                <p className="sn-title mt-3 text-[clamp(28px,3vw,44px)] leading-[1.1] text-ink uppercase">Style Nova</p>
                <p className="sn-title mt-3 text-[13px] leading-[1.7] text-ink/70 break-all">ABCDEFGHIJKLMNOPQRSTUVWXYZ 0123456789</p>
              </div>
              <div>
                <p className={eyebrow}>Poppins — interface and body</p>
                <p className="mt-3 font-sans font-semibold text-[22px] leading-[1.2] text-ink">Choose. Impress. Own the moment.</p>
                <p className="mt-2 font-sans text-[15px] leading-[1.6] text-ink/80">Poppins Regular for details and body text. abcdefghijklmnopqrstuvwxyz 0123456789</p>
              </div>
            </div>
          </div>
          <div className="flex flex-col">
            <p className={`${eyebrow} mb-3`}>Buttons and dialogue boxes</p>
            <div className="flex-1 border border-ink/30 flex flex-col items-center justify-center gap-6 p-6" style={{ backgroundColor: BLUSH }}>
              <Image src={`${A}/ui-dialogue.webp`} alt="A dialogue box with a pink stitched edge reading 'Oooh, serve — a little risky but very unique'" width={265} height={128} className="block w-full max-w-[265px] h-auto" />
              <Image src={`${A}/ui-buttons.webp`} alt="Glossy rose 'Lock it in' and 'Try again' buttons" width={282} height={50} className="block w-full max-w-[282px] h-auto" />
              <Image src={`${A}/ui-start.webp`} alt="The glossy pink 'Start game' pill button" width={277} height={63} className="block w-full max-w-[277px] h-auto" />
            </div>
          </div>
          <div className="flex flex-col">
            <p className={`${eyebrow} mb-3`}>Stars and chrome title</p>
            <div className="flex-1 border border-ink/30 flex items-center justify-center p-6" style={{ backgroundColor: BLUSH }}>
              <Image src={`${A}/ui-title.webp`} alt="The chrome 'STYLE' and pink 'NOVA' title with pink sparkle stars around it" width={402} height={250} className="block w-full max-w-[360px] h-auto" />
            </div>
          </div>
        </div>

        {/* character presentation */}
        <div className="mt-12 md:mt-16">
          <p className={`${eyebrow} mb-6 text-center`}>Character presentation</p>
          <div className="flex justify-center gap-4 md:gap-8 max-w-[860px] mx-auto">
            <Phone src="s-brunch-lose" alt="Nova in a blue jacket and ruffled skirt" className="w-[30%]" />
            <Phone src="s-after-1" alt="Nova in a fitted blue dress with ring cut-outs" className="w-[30%] mt-6 md:mt-10" />
            <Phone src="s-red-tie" alt="Nova in a black plunging gown" className="w-[30%]" />
          </div>
        </div>
      </section>

      {/* ── 09 The player journey ── */}
      <section className={section}>
        <div className={twoCol}>
          <Head n="08" title="The experience" />
          <Paras
            paras={[
              "The redesigned experience follows Nova through three events: brunch, the Nova Fashion Awards, and an after-party. At each stage, players choose an outfit, receive feedback, meet Chanel, and discover whether Nova wins, loses, or ties based on their styling decision.",
            ]}
          />
        </div>

        {/* horizontal flow on desktop, vertical on phones */}
        <ol className="mt-12 md:mt-16 grid grid-cols-1 lg:grid-cols-7">
          {JOURNEY.map((step, i) => (
            <li key={step} className="relative flex lg:flex-col items-start gap-5 lg:gap-6 pb-9 lg:pb-0 lg:pr-5 last:pb-0">
              {i < JOURNEY.length - 1 && (
                <>
                  <span aria-hidden="true" className="lg:hidden absolute left-[19px] top-11 bottom-1 w-px bg-ink/30" />
                  <span aria-hidden="true" className="hidden lg:block absolute top-[19px] left-12 right-2 h-px bg-ink/30" />
                </>
              )}
              <span className="relative z-10 shrink-0 inline-flex items-center justify-center w-10 h-10 rounded-full border border-ink font-sans text-[14px] text-ink" style={{ backgroundColor: PINK }}>
                {i + 1}
              </span>
              <span className="font-sans text-[16px] leading-[1.4] text-ink pt-2 lg:pt-0">{step}</span>
            </li>
          ))}
        </ol>
      </section>

      {/* ── 10 Brunch ── */}
      <section className={section}>
        <div className={twoCol}>
          <Head n="09" title="Event 01 — Brunch" />
          <Paras
            paras={[
              "The brunch sequence introduces the core gameplay. Players choose between three looks, receive Nova’s reaction, meet Chanel, and compare the two outfits across event fit, impact, and styling.",
            ]}
          />
        </div>
        <div className="mt-12 md:mt-16">
          <ScreenGrid>
            <ScreenItem>
              <Phone src="s-bedroom" alt="Nova's pink bedroom with a chandelier and a neon sign, where the brunch begins" caption="Event introduction" />
            </ScreenItem>
            <ScreenItem>
              <Phone src="s-brunch-lose" alt="Brunch outfit selection: a blue jacket look with Nova's first reaction" caption="Outfit selection" />
            </ScreenItem>
            <ScreenItem>
              <Phone src="s-brunch-tie" alt="Brunch selected look: a hot pink cut-out set with Nova's reaction" caption="Selected look" />
            </ScreenItem>
            <ScreenItem>
              <Phone src="s-brunch-chanel" alt="Chanel has arrived at the brunch beside Nova" caption="Chanel’s entrance" />
            </ScreenItem>
            <ScreenItem>
              <Phone src="s-brunch-scores" alt="Brunch result: Nova wins 92 to 87, with event fit, impact and styling scores" caption="Final result" />
            </ScreenItem>
          </ScreenGrid>
        </div>
      </section>

      {/* ── 11 Red carpet ── */}
      <section className={section}>
        <div className={twoCol}>
          <Head n="10" title="Event 02 — The Nova Fashion Awards" />
          <Paras
            paras={[
              "The red-carpet event raises the stakes with more dramatic fashion choices and a high-profile awards setting. The player’s outfit determines how Nova compares against Chanel and whether she wins, loses, or ties.",
            ]}
          />
        </div>
        <div className="mt-12 md:mt-16">
          <ScreenGrid>
            <ScreenItem>
              <Phone src="s-red-brief" alt="Red-carpet event brief: The Fashion Fair Awards, with the outfit picker" caption="Event brief" />
            </ScreenItem>
            <ScreenItem>
              <Phone src="s-red-lose" alt="Red-carpet outfit selection: a red gown with Nova's reaction" caption="Outfit selection" />
            </ScreenItem>
            <ScreenItem>
              <Phone src="s-red-tie" alt="Red-carpet selected look: a black plunging gown" caption="Final selected look" />
            </ScreenItem>
            <ScreenItem>
              <Phone src="s-red-competition" alt="Nova and Chanel side by side on the red carpet at the Nova Awards" caption="Nova and Chanel together" />
            </ScreenItem>
            <ScreenItem>
              <Phone src="s-red-result-win" alt="Red-carpet competition result: Nova wins 96 to 87 with event fit, impact and styling scores" caption="Competition result" />
            </ScreenItem>
          </ScreenGrid>
        </div>
      </section>

      {/* ── 12 Branching outcomes ── */}
      <section className={section}>
        <div className={twoCol}>
          <Head n="11" title="Your choice changes the moment" />
          <Paras
            paras={[
              "Instead of following one fixed path, the redesign introduces different reactions and outcomes. Outfit choices influence the score, dialogue, and competition result, giving players more control and making the experience worth replaying.",
            ]}
          />
        </div>
        <ul className="mt-12 md:mt-16 flex justify-center gap-4 md:gap-8 max-w-[1000px] mx-auto">
          {[
            ["Win", "s-red-win", "Red-carpet screen with Nova’s winning reaction"],
            ["Tie", "s-red-tie", "Red-carpet screen with Nova’s tie reaction"],
            ["Lose", "s-red-lose", "Red-carpet screen with Nova’s losing reaction"],
          ].map(([label, src, alt]) => (
            <li key={label} className="w-[31%]">
              <p className="mb-4 flex justify-center">
                <span className="inline-flex items-center justify-center min-w-[64px] px-4 py-1.5 rounded-full border border-ink font-sans text-[12px] uppercase tracking-[0.14em] text-ink" style={{ backgroundColor: PINK }}>
                  {label}
                </span>
              </p>
              <Phone src={src} alt={alt} />
            </li>
          ))}
        </ul>
      </section>

      {/* ── 13 Then vs now ── */}
      <section className={section}>
        <div className={twoCol}>
          <Head n="12" title="Then vs. now" />
          <Paras
            paras={[
              "The redesign evolved Style Nova from a simple desktop dress-up activity into a mobile-first fashion narrative. It retains the nostalgic spirit of the original while improving its storytelling, character development, visual hierarchy, and player interaction.",
            ]}
          />
        </div>
        {/* both sides share one height, each at its own proportions */}
        <div className="mt-12 md:mt-16 max-w-[1000px] mx-auto flex flex-col md:flex-row md:items-start gap-8">
          <div className="md:[flex:1.407_1_0%] min-w-0">
            <p className={`${eyebrow} mb-3`}>Before — original desktop game</p>
            <Desk src="o-desk-7" alt="Original desktop game, Event One: Nova in a glass dome with three outfits to choose from" />
          </div>
          <div className="md:[flex:0.46_1_0%] min-w-0 w-[64%] sm:w-[46%] mx-auto md:mx-0">
            <p className={`${eyebrow} mb-3`}>After — redesigned mobile game</p>
            <Phone src="s-brunch-scores" alt="The redesigned mobile game: Nova wins the brunch competition against Chanel" />
          </div>
        </div>
      </section>

      {/* ── 14 Current status ── */}
      <section className={section}>
        <div className={twoCol}>
          <Head n="13" title="What’s next" />
          <div>
            <Paras
              paras={[
                "Style Nova is currently in development. The core visual system, characters, brunch sequence, and red-carpet experience are complete, while the after-party flow and final prototype interactions are still being refined.",
              ]}
            />
            <p className="mt-8">
              <span className="inline-flex items-center gap-3 border border-ink px-4 py-2.5 font-sans text-[12px] uppercase tracking-[0.14em] text-ink" style={{ backgroundColor: PINK }}>
                <span aria-hidden="true" className="inline-block w-2 h-2 rounded-full bg-ink" />
                Coming soon — full interactive experience
              </span>
            </p>
          </div>
        </div>
        <div className="mt-12 md:mt-16">
          <p className={`${eyebrow} mb-6 text-center`}>After-party preview</p>
          <ScreenGrid>
            <ScreenItem>
              <Phone src="s-after" alt="After-party outfit screen: a patterned mini dress and a plum bag" />
            </ScreenItem>
            <ScreenItem>
              <Phone src="s-after-1" alt="After-party outfit screen: a fitted blue dress" />
            </ScreenItem>
          </ScreenGrid>
        </div>
      </section>

      </div>

      {/* ── 15 Footer navigation ── */}
      <ProjectNav current="stylenova" />

      <Footer />
    </main>
  );
}
