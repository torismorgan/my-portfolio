import Image from "next/image";
import Link from "next/link";
import Navbar from "@/app/components/Navbar";
import Footer from "@/app/components/Footer";

export const metadata = {
  title: "Naýryz Red — Oris Morgan",
  description:
    "A modern display typeface inspired by the spirit of Naýryz — a type, brand system, website and social campaign case study.",
};

const A = "/work/nayryz-red";

const RED = "#B5443A";
const YELLOW = "#E0B028";
const BLUE = "#2F4773";
const NAVY = "#17224a";
const PANEL = "#F3F0EA";

const META = [
  ["Role", "Typography, UI/UX, Web Design"],
  ["Timeline", "Mar – Apr 2024"],
  ["Tools", "Figma, Illustrator, Photoshop"],
  ["Deliverables", "Typeface, Brand System, Website, Social Campaign"],
];

const DISCIPLINES = [
  ["Typography", "Letters for a wider tomorrow"],
  ["UI/UX", "Interfaces with meaning"],
  ["Web Dev", "Ideas in real spaces"],
];

const GLYPHS = "ABCDEFGHIJKLMNOPQRSTUVWXY0123456789".split("");

const PALETTE = [
  { hex: "#B5443A", name: "Heritage" },
  { hex: "#E0B028", name: "Renewal" },
  { hex: "#2F4773", name: "Depth" },
  { hex: "#F6F5EC", name: "Balance" },
];

const POSTS = [1, 2, 3, 4];

const eyebrow = "text-[10px] uppercase tracking-[0.14em] text-ink/70";
const body = "text-[12.5px] md:text-[13px] leading-[1.75] text-ink/80";
const pad = "px-6 md:px-9";

function Star({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 40 40" className={className} fill="none" aria-hidden="true">
      {[0, 45, 90, 135].map((deg) => (
        <line
          key={deg}
          x1="20"
          y1="4"
          x2="20"
          y2="36"
          stroke="currentColor"
          strokeWidth="8"
          strokeLinecap="round"
          transform={`rotate(${deg} 20 20)`}
        />
      ))}
    </svg>
  );
}

function SectionLabel({ n, title, light }: { n: string; title: string; light?: boolean }) {
  return (
    <div className="flex items-start gap-5 md:gap-7">
      <span className={`${eyebrow} pt-[9px] md:pt-[11px] ${light ? "!text-white/80" : ""}`}>{n}</span>
      <h2
        className={`font-sans font-light uppercase leading-[1.1] text-[22px] md:text-[28px] tracking-[-0.01em] ${
          light ? "text-white" : ""
        }`}
        style={light ? undefined : { color: NAVY }}
      >
        {title}
      </h2>
    </div>
  );
}

function Tags({ items, light }: { items: string[]; light?: boolean }) {
  return (
    <p className={`${eyebrow} ${light ? "!text-white/80" : ""} mt-6`}>
      {items.join("  /  ")}
    </p>
  );
}

export default function NayryzRedCaseStudy() {
  return (
    <main className="bg-cream text-ink flex flex-col">
      <Navbar />

      {/* ── Hero ── */}
      <section className="grid grid-cols-1 md:grid-cols-[1.08fr_1fr] border-b border-ink">
        <div className="flex flex-col justify-between border-b md:border-b-0 md:border-r border-ink">
          <div className={`${pad} pt-8 md:pt-12 pb-8 md:pb-10`}>
            <p className={eyebrow}>Typography &nbsp;/&nbsp; Branding &nbsp;/&nbsp; Digital</p>
            <h1
              className="mt-8 md:mt-10 font-sans font-normal leading-[0.95] tracking-[-0.045em]"
              style={{ color: NAVY, fontSize: "clamp(46px, 7.4vw, 116px)" }}
            >
              NAÝRYZ RED
            </h1>
            <p className={`${body} mt-6 max-w-[430px]`}>
              A modern display typeface inspired by the spirit of Naýryz. Blending cultural symbolism with a
              contemporary digital language, Naýryz Red explores how tradition can live confidently in modern
              interfaces and visual culture.
            </p>
          </div>
          <dl className="grid grid-cols-2 md:grid-cols-4 border-t border-ink">
            {META.map(([k, v], i) => (
              <div
                key={k}
                className={`px-5 md:px-4 py-4 border-ink/40 ${i % 2 === 1 ? "border-l" : ""} ${
                  i > 0 ? "md:border-l" : "md:border-l-0"
                } ${i >= 2 ? "border-t md:border-t-0" : ""} ${i === 0 ? "md:pl-9" : ""}`}
              >
                <dt className="text-[10px] uppercase tracking-[0.12em] font-semibold text-ink">{k}</dt>
                <dd className="mt-2 text-[10.5px] leading-[1.5] text-ink/70">{v}</dd>
              </div>
            ))}
          </dl>
        </div>
        <div className="flex items-center justify-center p-6 md:p-10" style={{ backgroundColor: PANEL }}>
          <Image
            src={`${A}/wordmark.png`}
            alt="Naýryz Redkeds typeface wordmark, designed by Roman Tabachi"
            width={600}
            height={288}
            priority
            className="w-full max-w-[620px] h-auto"
          />
        </div>
      </section>

      {/* ── Disciplines ── */}
      <section className={`border-b border-ink ${pad} py-8 md:py-9`}>
        <div className="flex flex-col md:flex-row md:items-center gap-5 md:gap-8">
          <span className={`${eyebrow} md:[writing-mode:vertical-rl] md:rotate-180 md:border-r md:border-ink/40 md:pr-4`}>
            Disciplines
          </span>
          <div className="flex-1 flex flex-col md:flex-row md:items-center md:justify-around gap-6 md:gap-4">
            {DISCIPLINES.map(([t, c], i) => (
              <div key={t} className="flex md:items-center md:gap-[clamp(16px,4vw,64px)]">
                <div className="md:text-center">
                  <p
                    className="font-sans font-light uppercase leading-none tracking-[-0.02em]"
                    style={{ color: NAVY, fontSize: "clamp(32px, 4.6vw, 66px)" }}
                  >
                    {t}
                  </p>
                  <p className={`${eyebrow} mt-3 !text-[9px]`}>{c}</p>
                </div>
                {i < DISCIPLINES.length - 1 && (
                  <span
                    aria-hidden="true"
                    className="hidden md:block font-light text-ink/60"
                    style={{ fontSize: "clamp(24px, 3vw, 44px)" }}
                  >
                    /
                  </span>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 01 Overview + Challenge ── */}
      <section className="grid grid-cols-1 md:grid-cols-2 border-b border-ink">
        <div className={`${pad} py-10 md:py-14`}>
          <SectionLabel n="01" title="Overview + Challenge" />
          <div className={`${body} mt-7 md:mt-9 max-w-[520px] space-y-5`}>
            <p>
              Naýryz Red is a type and digital design project that reimagines cultural identity for a modern,
              global context. Rooted in the spirit of renewal and connection, the project explores how
              traditional forms, symbols and rhythms can be translated into a functional typeface and
              contemporary visual system.
            </p>
            <p>
              The challenge was to create a distinctive typographic voice that feels authentic to its cultural
              roots, while remaining legible, versatile and relevant across digital platforms.
            </p>
          </div>
        </div>
        <div
          className="relative min-h-[280px] md:min-h-[380px]"
          style={{
            backgroundColor: YELLOW,
            backgroundImage: `url(${A}/horizon.jpg)`,
            backgroundSize: "190% auto",
            backgroundPosition: "0% 46%",
            backgroundRepeat: "no-repeat",
          }}
        >
          <p className={`${eyebrow} !text-ink absolute left-6 bottom-6 leading-[1.7]`}>
            Tradition
            <br />
            Meets
            <br />
            A Brighter
            <br />
            Tomorrow
          </p>
        </div>
      </section>

      {/* ── 02 Typeface + Visual Exploration ── */}
      <section className={`border-b border-ink ${pad} py-10 md:py-12`}>
        <SectionLabel n="02" title="Typeface + Visual Exploration" />
        <div className="mt-8 md:mt-10 grid md:grid-cols-[1.15fr_1fr_1fr] gap-10 md:gap-10 items-start">
          <div>
            <div className="relative">
              <Star className="absolute left-0 top-[10%] w-9 h-9 md:w-11 md:h-11 text-[#2F4773]" />
              <Image
                src={`${A}/wordmark-plain.png`}
                alt="Naýryz Redkeds wordmark"
                width={600}
                height={162}
                className="w-full h-auto"
                style={{ color: BLUE }}
              />
            </div>
            <p className={`${body} mt-4 max-w-[380px] !text-[12px]`}>
              <strong className="text-ink" style={{ color: BLUE }}>
                Typeface
              </strong>
              <br />
              Naýryz Red is a custom display typeface that draws inspiration from traditional forms,
              reinterpreted through a contemporary lens. It features expressive curves, distinct character
              details and a bold personality suited for both branding and digital use.
            </p>
          </div>

          <div className="grid grid-cols-7 gap-x-2 gap-y-2.5 max-w-[340px] md:mx-auto w-full">
            {GLYPHS.map((g) => (
              <span
                key={g}
                className="aspect-square rounded-full border flex items-center justify-center text-[11px] md:text-[12px]"
                style={{ borderColor: RED, color: RED }}
              >
                {g}
              </span>
            ))}
          </div>

          <div className="md:border-l border-ink/40 md:pl-8">
            <p className={body}>
              The typeface balances geometric structure with organic flow, creating a unique visual language
              that feels both modern and deeply rooted. Explorations included alternate characters, ligatures
              and typographic compositions to test tone, rhythm and usability across different media.
            </p>
            <Tags items={["CULTURE", "FORM", "EXPRESSION"]} />
          </div>
        </div>
      </section>

      {/* ── 03 Visual System ── */}
      <section className="border-b border-ink grid grid-cols-1 md:grid-cols-[1.15fr_0.95fr_1fr_1fr]">
        <div className={`${pad} py-10 md:py-12`}>
          <SectionLabel n="03" title="Visual System" />
          <p className={`${body} mt-7 max-w-[340px]`}>
            A cohesive visual system brings Naýryz Red to life across digital and print. The palette,
            typography hierarchy and repeating shapes create a distinct and flexible identity, ensuring
            consistency from website to social media and beyond.
          </p>
          <Tags items={["A MODERN IDENTITY ROOTED IN TRADITION"]} />
        </div>

        <div className="px-6 md:px-7 py-8 md:py-12 border-t md:border-t-0 md:border-l border-ink/40">
          <p className={eyebrow}>Colour Palette</p>
          <div className="mt-5 grid grid-cols-4 gap-2">
            {PALETTE.map((c) => (
              <div key={c.hex} className="text-center">
                <span
                  className="block aspect-square w-full max-w-[48px] mx-auto rounded-full border border-ink/25"
                  style={{ backgroundColor: c.hex }}
                />
                <p className="mt-2 text-[8.5px] text-ink/70 leading-tight">{c.hex}</p>
                <p className="text-[8.5px] text-ink/70 leading-tight">{c.name}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="px-6 md:px-7 py-8 md:py-12 border-t md:border-t-0 md:border-l border-ink/40">
          <p className={eyebrow}>Typography Hierarchy</p>
          <div className="mt-4 flex gap-8">
            <div>
              <p className="font-bold leading-none text-[44px] md:text-[48px]" style={{ color: NAVY }}>
                Aa
              </p>
              <p className="mt-3 text-[9px] text-ink/70 leading-tight">
                Primary
                <br />
                Naýryz Red
              </p>
            </div>
            <div>
              <p className="font-normal leading-none text-[36px] md:text-[40px]" style={{ color: NAVY }}>
                Aa
              </p>
              <p className="mt-3 text-[9px] text-ink/70 leading-tight">
                Secondary
                <br />
                Inter / Swiss Style
              </p>
            </div>
          </div>
        </div>

        <div className="px-6 md:px-7 py-8 md:py-12 border-t md:border-t-0 md:border-l border-ink/40">
          <p className={eyebrow}>Graphic Elements</p>
          <div className="mt-4 flex items-center gap-6">
            <Image src={`${A}/symbol.png`} alt="" width={632} height={576} className="w-[64px] h-auto" />
            <Star className="w-9 h-9 text-[#2F4773]" />
          </div>
          <p className={`${eyebrow} mt-6 !text-[9px]`}>Symbols of renewal</p>
        </div>
      </section>

      {/* ── 04 Website Design ── */}
      <section className="grid grid-cols-1 md:grid-cols-[0.32fr_0.68fr] border-b border-ink">
        <div className={`${pad} py-10 md:py-12 md:pr-6`}>
          <SectionLabel n="04" title="Website Design" />
          <p className={`${body} mt-7 max-w-[330px]`}>
            A clean and immersive web presence showcases the typeface, its story and real-world
            applications. The website is designed to be minimal, content-focused and visually expressive,
            allowing the typography to take center stage.
          </p>
          <Link href="#" className={`${eyebrow} !text-ink mt-8 inline-flex items-center gap-3 underline underline-offset-4`}>
            Explore the website <span aria-hidden="true">→</span>
          </Link>
        </div>

        <div className="min-w-0">
        <div
          className="relative overflow-hidden w-full aspect-[16/9] md:aspect-[1082/460]"
          style={{ containerType: "inline-size" }}
        >
          <div
            className="absolute inset-0 scale-110 blur-[3px]"
            style={{ backgroundImage: `url(${A}/street.jpg)`, backgroundSize: "cover", backgroundPosition: "center 70%" }}
          />
          <div className="absolute inset-0 bg-ink/10" />

          {/* poster */}
          <div className="absolute left-[4%] top-[6%] h-[88%] aspect-[352/554]">
            <Image src={`${A}/poster.jpg`} alt="Bloom billboard poster" fill sizes="30vw" className="object-cover rounded-[2px] shadow-lg" />
          </div>

          {/* desktop mock */}
          <div
            className="absolute left-[34.5%] top-[7%] w-[37%] h-[86%] rounded-[6px] shadow-xl overflow-hidden flex flex-col"
            style={{ backgroundColor: "#F6F4EE" }}
          >
            <div
              className="flex justify-between px-[4%] py-[2.2%] border-b border-ink/15 uppercase text-ink/60"
              style={{ fontSize: "max(5px, 0.62cqw)" }}
            >
              <span>Naýryz</span>
              <span>Shop &nbsp; About &nbsp; Contact</span>
            </div>
            <div className="flex-1 flex flex-col items-center justify-center text-center">
              <Image src={`${A}/wordmark-plain.png`} alt="" width={600} height={162} className="w-[68%] h-auto" />
              <p className="mt-[4%] text-ink/80 leading-[1.5]" style={{ fontSize: "max(6px, 0.95cqw)" }}>
                Type is a bridge between
                <br />
                heritage and tomorrow.
              </p>
              <p className="mt-[5%] uppercase tracking-[0.12em] text-ink" style={{ fontSize: "max(5px, 0.7cqw)" }}>
                View project &nbsp;→
              </p>
            </div>
          </div>

          {/* mobile mock */}
          <div
            className="absolute left-[77.5%] top-[5%] w-[19%] h-[90%] rounded-[6px] shadow-xl overflow-hidden flex flex-col"
            style={{ backgroundColor: "#F6F4EE" }}
          >
            <div className="flex items-center justify-between px-[8%] py-[6%]">
              <span className="block rounded-full aspect-square w-[14%]" style={{ backgroundColor: YELLOW }} />
              <span className="block w-[14%] h-[2px] bg-ink/60" />
            </div>
            <div
              className="mx-0 h-[52%]"
              style={{
                backgroundColor: YELLOW,
                backgroundImage: `url(${A}/horizon.jpg)`,
                backgroundSize: "330% auto",
                backgroundPosition: "0% 46%",
                backgroundRepeat: "no-repeat",
              }}
            />
            <div className="px-[8%] pt-[8%]">
              <p className="font-semibold text-ink leading-[1.25]" style={{ fontSize: "max(6px, 1.05cqw)" }}>
                Tradition
                <br />
                in a new form.
              </p>
              <span className="mt-[10%] block h-px w-[70%] bg-ink/70" />
            </div>
          </div>
        </div>
        </div>
      </section>

      {/* ── 05 Social Campaign ── */}
      <section className="border-b border-ink text-white grid grid-cols-1 md:grid-cols-[0.34fr_0.66fr]" style={{ backgroundColor: "#34508A" }}>
        <div className={`${pad} py-10 md:py-12 flex flex-col`}>
          <SectionLabel n="05" title="Social Campaign" light />
          <p className="mt-7 max-w-[300px] text-[12.5px] md:text-[13px] leading-[1.75] text-white/85">
            A social media campaign brings Naýryz Red into everyday life, sharing its message through
            striking visuals, typographic moments and cultural storytelling.
          </p>
          <p className="mt-8 md:mt-auto pt-6 text-[10px] uppercase tracking-[0.14em] text-white/85 leading-[1.7]">
            Same roots.
            <br />
            New platforms.
          </p>
        </div>
        <div className="px-6 md:px-8 pb-10 md:py-12 grid grid-cols-4 gap-2 md:gap-4 items-center">
          {POSTS.map((n) => (
            <Image
              key={n}
              src={`${A}/post-${n}.png`}
              alt={`Naýryz Red social post ${n}`}
              width={105}
              height={130}
              className="w-full h-auto rounded-[8px]"
            />
          ))}
        </div>
      </section>

      {/* ── 06 Challenges + Iterations ── */}
      <section className="border-b border-ink grid grid-cols-1 md:grid-cols-[1.15fr_1fr_1fr]">
        <div className={`${pad} py-10 md:py-12`}>
          <SectionLabel n="06" title="Challenges + Iterations" />
          <p className={`${body} mt-7 max-w-[420px]`}>
            Creating Naýryz Red involved navigating a delicate balance between expressive, culturally
            inspired forms and the practical demands of digital use. Through multiple iterations, testing
            and refinement, the typeface evolved into a system that is both distinctive and usable across
            real-world applications.
          </p>
        </div>
        <div className="px-6 md:px-8 py-8 md:py-12 border-t md:border-t-0 md:border-l border-ink/40 flex flex-col">
          <h3 className="text-[12px] font-semibold text-ink">Legibility at small sizes</h3>
          <p className={`${body} mt-4 !text-[12px]`}>
            The initial letterforms were highly expressive, but some details lost clarity at smaller sizes. I
            refined the curves, spacing and stroke contrast to improve readability.
          </p>
          <p className={`${eyebrow} mt-auto pt-8`}>Iterate &nbsp;/&nbsp; Test &nbsp;/&nbsp; Refine</p>
        </div>
        <div className="px-6 md:px-8 py-8 md:py-12 border-t md:border-t-0 md:border-l border-ink/40 flex flex-col">
          <h3 className="text-[12px] font-semibold text-ink">Balancing cultural references with digital usability</h3>
          <p className={`${body} mt-4 !text-[12px]`}>
            The goal was to honor traditional forms without relying on direct replication. I explored
            abstractions, simplified key shapes and tested the typeface in modern UI contexts to ensure it
            feels relevant, functional and authentic.
          </p>
          <p className={`${eyebrow} mt-auto pt-8`}>Tradition &nbsp;/&nbsp; Modernity &nbsp;/&nbsp; Harmony</p>
        </div>
      </section>

      {/* ── 07 Outcome + Reflection ── */}
      <section className="grid grid-cols-1 md:grid-cols-[0.82fr_1.18fr] border-b border-ink">
        <div className={`${pad} py-10 md:py-12 flex flex-col`}>
          <SectionLabel n="07" title="Outcome + Reflection" />
          <div className={`${body} mt-7 max-w-[430px] space-y-5`}>
            <p>
              Naýryz Red is a personal project that explores how typography, digital design and cultural
              identity can work together. It resulted in a cohesive typeface, visual system, website and
              social campaign — a foundation for future real-world applications.
            </p>
            <p>
              This project reinforced the value of thoughtful research, iteration and cross-disciplinary
              design. It showed how cultural inspiration can be translated into a modern, functional identity
              without losing its soul.
            </p>
          </div>
          <p className={`${eyebrow} mt-8 md:mt-auto pt-6 leading-[1.7]`}>
            Same heritage.
            <br />
            Brighter tomorrows.
          </p>
        </div>
        <div className="p-6 md:p-8">
          <div className="grid grid-cols-[0.42fr_0.58fr] gap-0 rounded-[6px] overflow-hidden">
            <div className="flex items-center justify-center p-[10%]" style={{ backgroundColor: "#6F7BA0" }}>
              <Image src={`${A}/symbol.png`} alt="Naýryz Red horned symbol" width={632} height={576} className="w-full h-auto" />
            </div>
            <Image
              src={`${A}/outcome-composite.png`}
              alt="Naýryz Red website, mobile and social campaign shown together"
              width={270}
              height={205}
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </section>

      {/* ── Prev / Next ── */}
      <nav
        aria-label="Project navigation"
        className={`flex items-center justify-between ${pad} py-5 border-b border-ink text-[10.5px] uppercase tracking-[0.1em]`}
      >
        <Link href="/works" className="inline-flex items-center gap-3 hover:opacity-70 transition-opacity">
          <span aria-hidden="true">←</span> Prev project
        </Link>
        <Link href="/works" className="inline-flex items-center gap-3 hover:opacity-70 transition-opacity">
          Next project <span aria-hidden="true">→</span>
        </Link>
      </nav>

      <Footer />
    </main>
  );
}
