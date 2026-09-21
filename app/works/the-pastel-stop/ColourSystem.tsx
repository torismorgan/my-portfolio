import Image from "next/image";

const A = "/work/the-pastel-stop";

const NAVY = "#20242f";
const PANEL = "#F3F0EA";
const CREAM = "#FFFFF1";

const eyebrow = "font-sans text-[12px] uppercase tracking-[0.14em] text-ink/70";
const bodyText = "font-sans text-[16px] md:text-[17px] leading-[1.7] text-ink/80";
const pad = "px-6 md:px-9";

type Swatch = { name: string; hex: string };

type Season = {
  tag: string;
  title: string;
  /** light → dark, so every palette reads as tonal steps of one mood */
  swatches: Swatch[];
  example:
    | { kind: "image"; src: string; alt: string; w: number; h: number; caption: string }
    | { kind: "direction"; caption: string };
};

/*
  Hex values are the live site's own variables (--season-*, --dearher-*, --brand-pink), except:
  - "Earthy brown" / "Deep earth": sampled from the About-page photography;
  - the "Next season" palette, which is a direction and is not built yet.
*/
const SEASONS: Season[] = [
  {
    tag: "Homepage slide + event",
    title: "Last Bloom of Summer",
    swatches: [
      { name: "Cream", hex: "#FFFFF1" },
      { name: "Lemon yellow", hex: "#FFF78C" },
      { name: "Light blue", hex: "#64ACF3" },
      { name: "Deeper blue accents", hex: "#2978CC" },
    ],
    example: {
      kind: "image",
      src: "last-bloom.jpg",
      alt: "The Last Bloom of Summer homepage slide: a cream script title over a blue sky and a lemon tree",
      w: 1440,
      h: 1024,
      caption: "Homepage slide",
    },
  },
  {
    tag: "Editorial letters",
    title: "Dear Her",
    swatches: [
      { name: "Soft cream", hex: "#FFFFF1" },
      { name: "Light blue stripe", hex: "#C6E4FF" },
      { name: "Small pink accents", hex: "#ED86C3" },
      { name: "Deep blue", hex: "#2978CC" },
    ],
    example: {
      kind: "image",
      src: "ex-dearher.jpg",
      alt: "Dear Her letter card: a polaroid photograph on a deep blue background",
      w: 1640,
      h: 1163,
      caption: "Letter card",
    },
  },
  {
    tag: "Brand story page",
    title: "About the Stop",
    swatches: [
      { name: "Cream", hex: "#FFFFF1" },
      { name: "Soft pink", hex: "#ED86C3" },
      { name: "Earthy photography", hex: "#6B4B30" },
      { name: "Deep earth", hex: "#2F271D" },
    ],
    example: {
      kind: "image",
      src: "ex-about.jpg",
      alt: "About page: warm, earthy photography of three women in a flower field above a soft pink headline on cream",
      w: 1440,
      h: 1024,
      caption: "About page",
    },
  },
  {
    tag: "Direction — not built yet",
    title: "Next season",
    swatches: [
      { name: "Cream", hex: "#FFFFF1" },
      { name: "Muted pink", hex: "#DDAEB6" },
      { name: "Burgundy", hex: "#6B1D33" },
      { name: "Deeper neutral accents", hex: "#3F352D" },
    ],
    example: { kind: "direction", caption: "Palette direction" },
  },
];

const CONSTANT = [
  ["Typography", "League Spartan + Poppins"],
  ["Layout", "the same page structure"],
  ["Navigation", "the same header and menu"],
  ["Wordmark", "thepastelstop."],
  ["Brand voice", "for every version of her."],
];

export default function ColourSystem() {
  return (
    <section className={`${pad} py-14 md:py-24 border-b border-ink`} id="colour-system">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-start">
        <div>
          <p className={eyebrow}>Visual Identity</p>
          <h2
            className="mt-4 uppercase ps-title font-semibold leading-[1.02] tracking-[-0.03em] text-balance text-[clamp(34px,5.4vw,72px)]"
            style={{ color: NAVY }}
          >
            A colour system that moves with the season
          </h2>
        </div>
        <div className="flex flex-col gap-5">
          <p className={bodyText}>
            The Pastel Stop uses tonal colour palettes that combine soft pastels with deeper, darker shades of the
            same visual mood. This creates a look that feels cohesive and almost monochromatic without becoming flat or
            repetitive.
          </p>
          <p className={bodyText}>
            The palette is also seasonal. Colours change to reflect the current atmosphere, content and experiences
            happening at the Stop, while the typography, layout and brand voice keep everything recognizable.
          </p>
          <p className={bodyText}>
            This allows each season to have its own personality without making The Pastel Stop feel like a different
            brand every time it changes.
          </p>
        </div>
      </div>

      {/* the colour board */}
      <div className="mt-12 md:mt-16">
        <p className={`${eyebrow} mb-3`}>Current seasonal examples — light and dark shades paired</p>
        <div className="border border-ink/30" style={{ backgroundColor: PANEL }}>
          <ul className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4">
            {SEASONS.map((s, i) => (
              <li
                key={s.title}
                className={`p-6 md:p-7 flex flex-col gap-5 border-ink/30 ${i > 0 ? "border-t sm:border-t-0" : ""} ${
                  i % 2 === 1 ? "sm:border-l" : ""
                } ${i >= 2 ? "sm:border-t" : ""} xl:border-t-0 ${i > 0 ? "xl:border-l" : ""}`}
              >
                <div>
                  <p className={eyebrow}>{s.tag}</p>
                  <h3
                    className="mt-3 ps-title font-semibold leading-[1.1] tracking-[-0.01em] text-[24px] md:text-[26px]"
                    style={{ color: NAVY }}
                  >
                    {s.title}
                  </h3>
                </div>

                {/* the tonal bar: light steps into dark */}
                <div aria-hidden="true" className="flex h-[76px] overflow-hidden rounded-[6px] ring-1 ring-black/10">
                  {s.swatches.map((sw) => (
                    <span key={sw.hex} className="flex-1" style={{ backgroundColor: sw.hex }} />
                  ))}
                </div>

                <ul className="grid grid-cols-2 gap-x-4 gap-y-3">
                  {s.swatches.map((sw) => (
                    <li key={sw.hex} className="flex items-start gap-2.5 min-w-0">
                      <span
                        aria-hidden="true"
                        className="mt-[3px] shrink-0 w-3.5 h-3.5 rounded-full ring-1 ring-black/15"
                        style={{ backgroundColor: sw.hex }}
                      />
                      <span className="font-sans text-[13px] leading-[1.35] text-ink/85 min-w-0">
                        <span className="block">{sw.name}</span>
                        <span className="block text-ink/55 uppercase">{sw.hex}</span>
                      </span>
                    </li>
                  ))}
                </ul>

                {/* a small real example of the palette in use */}
                <figure className="mt-auto">
                  {s.example.kind === "image" ? (
                    <div className="border border-ink/25 overflow-hidden" style={{ backgroundColor: CREAM }}>
                      <Image
                        src={`${A}/${s.example.src}`}
                        alt={s.example.alt}
                        width={s.example.w}
                        height={s.example.h}
                        sizes="(min-width: 1280px) 300px, (min-width: 640px) 45vw, 100vw"
                        className="block w-full h-auto"
                      />
                    </div>
                  ) : (
                    <div
                      role="img"
                      aria-label="Palette direction: the thepastelstop. wordmark in muted pink on burgundy, with the line for every version of her in cream"
                      className="aspect-[1440/1024] flex flex-col items-center justify-center gap-3 text-center px-4 border border-ink/25"
                      style={{ backgroundColor: "#6B1D33" }}
                    >
                      <span className="ps-title font-bold leading-none tracking-[-0.03em] text-[clamp(26px,3.4vw,44px)]" style={{ color: "#DDAEB6" }}>
                        thepastelstop.
                      </span>
                      <span className="font-sans text-[12px]" style={{ color: CREAM }}>
                        for every version of her.
                      </span>
                    </div>
                  )}
                  <figcaption className={`${eyebrow} mt-2`}>{s.example.caption}</figcaption>
                </figure>
              </li>
            ))}
          </ul>

          {/* what does not change */}
          <div className="border-t border-ink/30 px-6 md:px-7 py-5">
            <p className={eyebrow}>What stays the same in every season</p>
            <dl className="mt-3 grid grid-cols-2 md:grid-cols-5 gap-x-6 gap-y-4">
              {CONSTANT.map(([k, v]) => (
                <div key={k}>
                  <dt className="font-sans text-[14px] font-medium text-ink">{k}</dt>
                  <dd className="font-sans text-[13px] leading-[1.4] text-ink/65">{v}</dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </div>
    </section>
  );
}
