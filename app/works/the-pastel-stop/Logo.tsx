import { SymbolCycler, WordmarkCycler } from "./LogoColourways";

const A = "/work/the-pastel-stop";

const NAVY = "#20242f";

const eyebrow = "font-sans text-[12px] uppercase tracking-[0.14em] text-ink/70";
const bodyText = "font-sans text-[16px] md:text-[17px] leading-[1.7] text-ink/80";
const pad = "px-6 md:px-9";

/* Logo palette — sampled from the Canva colourway sheet. */
const PALETTE = [
  ["Light pink", "#FEE2E7"],
  ["Hot pink", "#EE397B"],
  ["Pale yellow", "#FFF9C9"],
  ["Light blue", "#86B4FD"],
  ["Blue", "#0E7BC2"],
  ["Red", "#F73638"],
  ["Black", "#0D0D0D"],
];

/* The previous logo: three one-colour files, recoloured with CSS from the file's alpha channel. */
const PREVIOUS: { name: string; src: string; w: number; h: number; ink: string; label: string; width: string }[] = [
  { name: "Symbol", src: "logo-symbol.png", w: 389, h: 361, ink: "#0D0D0D", label: "Previous symbol: an interlocking P", width: "54%" },
  { name: "Short mark", src: "logo-short.png", w: 243, h: 130, ink: "#EB476C", label: "Previous short mark: tps.", width: "62%" },
  { name: "Lockup", src: "logo-lockup.png", w: 904, h: 516, ink: "#0D0D0D", label: "Previous lockup: the symbol above the name", width: "74%" },
];

export default function Logo() {
  return (
    <section className={`${pad} py-14 md:py-24 border-b border-ink`} id="logo">
      <div className="mx-auto w-full max-w-[1080px]">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-start">
        <div>
          <p className={eyebrow}>Brand Identity</p>
          <h2
            className="mt-4 uppercase ps-title font-semibold leading-[1.02] tracking-[-0.03em] text-balance text-[clamp(34px,5.4vw,72px)]"
            style={{ color: NAVY }}
          >
            Logo, type and voice
          </h2>
        </div>
        <div className="flex flex-col gap-5">
          <p className={bodyText}>
            The clean wordmark gives the brand a modern and approachable voice, while the abstract TPS symbol creates
            a recognizable mark that can be used in smaller digital spaces.
          </p>
          <p className={bodyText}>
            Headlines run in League Spartan; body copy in Poppins — a pairing carried through every page and season.
          </p>
        </div>
      </div>

      {/* current logo: each part is one picture that moves through its colours */}
      <div className="mt-12 md:mt-16">
        <p className={`${eyebrow} mb-6`}>Current logo</p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-8">
          <WordmarkCycler />
          <SymbolCycler />
        </div>
      </div>

      {/* the palette behind the wordmark */}
      <div className="mt-12 md:mt-16">
        <p className={`${eyebrow} mb-3`}>Logo palette — pastel and deeper shades</p>
        <ul className="grid grid-cols-4 sm:grid-cols-7 border-l border-t border-ink/30">
          {PALETTE.map(([name, hex]) => (
            <li key={hex} className="border-r border-b border-ink/30">
              <span className="block h-[64px] md:h-[84px]" style={{ backgroundColor: hex }} aria-hidden="true" />
              <p className="px-3 py-2.5 font-sans text-[12px] leading-[1.35] text-ink/80">
                {name}
                <span className="block uppercase text-ink/55">{hex}</span>
              </p>
            </li>
          ))}
        </ul>
      </div>

      {/* previous logo */}
      <div className="mt-12 md:mt-16">
        <p className={`${eyebrow} mb-3`}>Previous logo, for reference</p>
        <ul className="grid grid-cols-1 sm:grid-cols-3 border-l border-t border-ink/30">
          {PREVIOUS.map((p) => {
            const url = `url(${A}/${p.src})`;
            return (
              <li key={p.name} className="border-r border-b border-ink/30">
                <div className="flex items-center justify-center bg-white aspect-[16/9] sm:aspect-[4/3]">
                  <span
                    role="img"
                    aria-label={p.label}
                    className="block"
                    style={{
                      width: p.width,
                      aspectRatio: `${p.w} / ${p.h}`,
                      backgroundColor: p.ink,
                      WebkitMaskImage: url,
                      maskImage: url,
                      WebkitMaskSize: "contain",
                      maskSize: "contain",
                      WebkitMaskRepeat: "no-repeat",
                      maskRepeat: "no-repeat",
                      WebkitMaskPosition: "center",
                      maskPosition: "center",
                    }}
                  />
                </div>
                <p className={`${eyebrow} px-4 py-3 border-t border-ink/20`}>{p.name}</p>
              </li>
            );
          })}
        </ul>
      </div>
      </div>
    </section>
  );
}
