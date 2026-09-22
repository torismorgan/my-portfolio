import Image from "next/image";
import Navbar from "@/app/components/Navbar";
import Footer from "@/app/components/Footer";

export const metadata = { title: "About — Oris Morgan" };

const SKILLS = [
  {
    shape: "/blue-arr.svg",
    title: "UI/UX Design",
    desc: "I design clear flows, wireframes, and prototypes—focused on hierarchy, usability, and navigation that feels effortless",
  },
  {
    shape: "/red-arr.svg",
    title: "Visual + Typography",
    desc: "I build strong visual systems with typography-led layouts, mood, and art direction—so the design feels intentional, not random.",
  },
  {
    shape: "/green-arr.png",
    title: "Front-End Build",
    desc: "I translate designs into responsive HTML/CSS/JavaScript and refine the details—spacing, hover states, and interactions.",
  },
];

const STORY =
  "I’m Oris, a visual designer who brings ideas to life through branding, UI/UX, editorial, and interactive design. I’m drawn to bold concepts, strong typography, and thoughtful details that make digital experiences feel expressive and easy to use.";

const STRENGTHS = [
  { label: "Visual Direction", desc: "Branding, typography, and editorial design" },
  { label: "UI/UX", desc: "Wireframing, prototyping, and interaction design" },
  { label: "Front-End", desc: "HTML, CSS, and JavaScript" },
  { label: "Accessibility", desc: "Inclusive and usable digital experiences" },
];

// The résumé PDF lives in /public, so it is served at this path.
const RESUME_HREF = "/oris-morgan-resume.pdf";

export default function About() {
  return (
    <main className="bg-cream text-ink flex flex-col">
      <Navbar />

      {/* ── Hero ── */}
      <section className="px-6 sm:px-8 md:px-[65px] pt-[56px] md:pt-[88px] pb-[48px] md:pb-[80px] flex flex-col md:flex-row items-center gap-8">
        {/* Left copy */}
        <div className="flex-1 max-w-[480px] text-center md:text-left">
          <p className="font-sans text-[14px] md:text-[15px] font-bold tracking-wide mb-4 text-ink">
            UI/UX Design | Front-End
          </p>
          <h1
            className="font-display font-bold leading-[1.05] mb-6 text-ink md:whitespace-nowrap"
            style={{ fontSize: "clamp(36px, 4.8vw, 76px)" }}
          >
            Product Designer
          </h1>
          <p className="font-sans font-light text-[13px] md:text-[17px] leading-[21px] md:leading-[27px] mb-8 text-ink/80">
            I&apos;m Oris Morgan, a UI/UX designer and developer creating concept-led digital
            experiences with clean systems, strong typography, and thoughtful interaction. I
            design in Figma and bring ideas to life with HTML/CSS/JavaScript.
          </p>
          <a
            href={RESUME_HREF}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-ink text-cream font-sans font-medium text-[14px] px-7 py-3 hover:opacity-85 transition-opacity"
          >
            View Resume
          </a>
        </div>

        {/* Right — photo, flush to right padding edge on desktop */}
        <div className="relative w-full max-w-[320px] h-[360px] md:w-[520px] md:h-[580px] md:shrink-0 md:max-w-none md:mr-[-65px]">
          <Image src="/image-me.png" alt="Oris Morgan" fill className="object-contain md:object-right" />
        </div>
      </section>

      {/* ── Tools ── */}
      <section className="px-6 sm:px-8 md:px-[65px] pb-6 md:pb-[80px]">
        <div className="border border-ink md:border-ink/20 bg-white flex flex-wrap items-center justify-around gap-4 py-4 px-4 md:py-10 md:px-12 rounded-none md:rounded-[12px]">
          <div className="relative w-[60px] h-[60px] md:w-[88px] md:h-[88px]">
            <Image src="/tools/illustrator.png" alt="Adobe Illustrator" fill className="object-contain" />
          </div>
          <div className="w-[48px] h-[48px] md:w-[72px] md:h-[72px] rounded-[10px] bg-black flex items-center justify-center">
            <svg width="20" height="29" viewBox="0 0 200 300" fill="none" xmlns="http://www.w3.org/2000/svg" aria-label="Figma" className="md:w-[26px] md:h-[38px]">
              <path d="M100 150C100 122.386 122.386 100 150 100C177.614 100 200 122.386 200 150C200 177.614 177.614 200 150 200C122.386 200 100 177.614 100 150Z" fill="#1ABCFE"/>
              <path d="M0 250C0 222.386 22.386 200 50 200H100V250C100 277.614 77.614 300 50 300C22.386 300 0 277.614 0 250Z" fill="#0ACF83"/>
              <path d="M100 0V100H150C177.614 100 200 77.614 200 50C200 22.386 177.614 0 150 0H100Z" fill="#FF7262"/>
              <path d="M0 50C0 77.614 22.386 100 50 100H100V0H50C22.386 0 0 22.386 0 50Z" fill="#F24E1E"/>
              <path d="M0 150C0 177.614 22.386 200 50 200H100V100H50C22.386 100 0 122.386 0 150Z" fill="#A259FF"/>
            </svg>
          </div>
          <div className="relative w-[48px] h-[48px] md:w-[72px] md:h-[72px] rounded-[10px] bg-[#f0f0f0] border border-ink/10">
            <Image src="/tools/python-logo.png" alt="Python" fill className="object-contain p-2.5" />
          </div>
          <div className="w-[48px] h-[48px] md:w-[72px] md:h-[72px] rounded-[10px] bg-[#001E36] flex items-center justify-center">
            <span className="text-[#31A8FF] font-bold text-[17px] md:text-[22px] font-sans tracking-tight">Ps</span>
          </div>
        </div>
      </section>

      {/* ── Skill cards ── */}
      <section className="px-6 sm:px-8 md:px-[65px] pb-8 md:pb-[80px]">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-3 md:gap-6">
          {SKILLS.map((s) => (
            <div key={s.title} className="border border-ink md:border-ink/15 rounded-none md:rounded-[16px] p-4 md:p-8 flex flex-row items-center md:items-stretch md:flex-col gap-4 md:gap-5 bg-cream">
              <div className="relative shrink-0 w-[60px] h-[60px] md:w-[130px] md:h-[110px]">
                <Image src={s.shape} alt="" fill className="object-contain object-left md:object-left-top" />
              </div>
              <div className="flex flex-col gap-1 md:gap-5">
                <h3 className="font-display font-bold md:font-semibold uppercase md:normal-case text-[15px] md:text-[20px] text-ink">{s.title}</h3>
                <p className="font-sans font-normal md:font-light text-[13px] leading-[19px] md:text-[15px] md:leading-[23px] text-ink/80 md:text-ink/75">{s.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── About Me heading ── */}
      <section className="px-6 sm:px-8 md:px-[65px] pb-5 md:pb-[48px] text-center">
        <h2 className="font-display font-bold md:font-light text-ink" style={{ fontSize: "clamp(40px, 7vw, 100px)" }}>
          About Me
        </h2>
      </section>

      {/* ── My Story + What I Bring ── */}
      <section className="px-6 sm:px-8 md:px-[65px] pb-14 md:pb-[96px]">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-6 max-w-[1180px] mx-auto">
          {/* My Story */}
          <div className="border border-ink md:border-ink/15 rounded-none md:rounded-[16px] bg-cream p-6 md:p-10 flex flex-col">
            <div className="relative w-[64px] h-[56px] md:w-[72px] md:h-[64px] mb-4 md:mb-5" aria-hidden="true">
              <Image src="/yell-shape.svg" alt="" fill className="object-contain object-left" />
            </div>
            <h3 className="font-display font-bold md:font-semibold uppercase md:normal-case text-[18px] md:text-[24px] leading-[1.15] text-ink">
              My Story
            </h3>
            <p className="mt-4 font-sans text-[16px] leading-[1.7] md:text-[21px] md:leading-[1.65] text-ink/85 max-w-[540px]">
              {STORY}
            </p>
          </div>

          {/* What I Bring */}
          <div className="border border-ink md:border-ink/15 rounded-none md:rounded-[16px] bg-cream p-6 md:p-10 flex flex-col">
            <div className="relative w-[64px] h-[56px] md:w-[72px] md:h-[64px] mb-4 md:mb-5" aria-hidden="true">
              <Image src="/blue-leaf.svg" alt="" fill className="object-contain object-left" />
            </div>
            <h3 className="font-display font-bold md:font-semibold uppercase md:normal-case text-[18px] md:text-[24px] leading-[1.15] text-ink">
              What I Bring
            </h3>
            <ul className="mt-4 flex flex-col border-t border-ink/15">
              {STRENGTHS.map((s) => (
                <li key={s.label} className="py-3 md:py-3.5 border-b border-ink/15 last:border-b-0 flex flex-col gap-0.5 md:flex-row md:items-baseline md:gap-6">
                  <span className="font-sans font-semibold text-[13px] uppercase tracking-[0.1em] text-ink md:w-[150px] md:shrink-0">
                    {s.label}
                  </span>
                  <span className="font-sans text-[16px] leading-[1.5] text-ink/80">{s.desc}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-8 md:mt-12 flex justify-center">
          <a
            href={RESUME_HREF}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 bg-ink text-cream font-sans font-medium text-[14px] uppercase tracking-[0.08em] px-8 py-3.5 min-h-[48px] transition-opacity hover:opacity-80"
          >
            View my résumé
            <span aria-hidden="true">→</span>
          </a>
        </div>
      </section>

      <Footer />
    </main>
  );
}
