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

const INFO_CARDS = [
  {
    shape: "/red-blob.svg",
    title: "My Story",
    body: (
      <p className="font-sans text-[14px] leading-[22px] text-center text-ink/80">
        I&apos;m Oris—a UI/UX designer and front-end developer who builds concept-led digital
        experiences that feel clean, intentional, and easy to use. I&apos;m especially drawn to
        typography-led layouts, strong hierarchy, and small interaction details that make a product
        feel polished rather than busy.
        <br /><br />
        My process usually starts with a clear concept and a simple system—then I prototype flows,
        refine navigation, and build consistent components across screens. When the design is ready,
        I enjoy translating it into HTML/CSS/JavaScript so the final build keeps the same energy as
        the prototype.
      </p>
    ),
  },
  {
    shape: "/blue-leaf.svg",
    title: "Strengths",
    body: (
      <ul className="font-sans text-[14px] leading-[22px] text-ink/80 space-y-2 text-left">
        <li><span className="font-semibold text-ink">UI/UX + Product Thinking:</span> design thinking, wireframing, prototyping, usability testing, user research</li>
        <li><span className="font-semibold text-ink">Programming:</span> Python, C++, Java, JavaScript, HTML/CSS, React, XML</li>
        <li><span className="font-semibold text-ink">CS Foundations:</span> OOP, data structures, algorithms, problem-solving</li>
        <li><span className="font-semibold text-ink">Design Tools:</span> Figma, Adobe Suite (Illustrator, Photoshop, InDesign), Canva, Procreate</li>
        <li><span className="font-semibold text-ink">Accessibility + Collaboration:</span> accessibility improvements (alt text, HTML/XML), GitHub collaboration</li>
      </ul>
    ),
  },
  {
    shape: "/yell-shape.svg",
    title: "Key Positions",
    body: (
      <ul className="font-sans text-[14px] leading-[22px] text-ink/80 space-y-3 text-left">
        <li><span className="font-semibold text-ink">President, GDG Student Chapter</span> — created and led Google Developer Group for Campus at the University of Lethbridge.</li>
        <li><span className="font-semibold text-ink">Founder/President, The Hive</span> — built a campus tech + design community focused on real projects, portfolios, and connection.</li>
        <li><span className="font-semibold text-ink">Branding & Marketing Lead, Gesner</span> — content strategy, storytelling, SEO research, and content calendar management.</li>
        <li><span className="font-semibold text-ink">UI/UX Camp Coordinator, BrainSTEM Alliance (Jun 2022–Aug 2022)</span> — taught Python/C++ fundamentals and UI/UX basics using Figma and Canva</li>
      </ul>
    ),
  },
  {
    shape: "/green-blob.svg",
    title: "Education",
    body: (
      <ul className="font-sans text-[14px] leading-[22px] text-ink/80 space-y-4 text-left">
        <li><span className="font-semibold text-ink">University of Lethbridge (BSc Computer Science, in progress)</span> — Lethbridge, AB<br />Minor: New Media & Marketing • GPA: 3.47/4.00</li>
        <li><span className="font-semibold text-ink">Federal University of Petroleum Resources (Chemical Engineering)</span> — 3 years completed</li>
      </ul>
    ),
  },
];

export default function About() {
  return (
    <main className="bg-cream text-ink flex flex-col">
      <Navbar />

      {/* ── Hero ── */}
      <section className="px-[65px] pt-[88px] pb-[80px] flex items-center gap-8">
        {/* Left copy */}
        <div className="flex-1 max-w-[480px]">
          <p className="font-sans text-[15px] font-bold tracking-wide mb-4 text-ink">
            UI/UX Design | Front-End
          </p>
          <h1
            className="font-display font-bold leading-[1.05] mb-6 text-ink whitespace-nowrap"
            style={{ fontSize: "clamp(44px, 4.8vw, 76px)" }}
          >
            Product Designer
          </h1>
          <p className="font-sans font-light text-[17px] leading-[27px] mb-8 text-ink/80">
            I&apos;m Oris Morgan, a UI/UX designer and developer creating concept-led digital
            experiences with clean systems, strong typography, and thoughtful interaction. I
            design in Figma and bring ideas to life with HTML/CSS/JavaScript.
          </p>
          <a
            href="#"
            className="inline-block bg-ink text-cream font-sans font-medium text-[14px] px-7 py-3 hover:opacity-85 transition-opacity"
          >
            View Resume
          </a>
        </div>

        {/* Right — photo, flush to right padding edge */}
        <div className="relative shrink-0 w-[520px] h-[580px] mr-[-65px]">
          <Image src="/image-me.png" alt="Oris Morgan" fill className="object-contain object-right" />
        </div>
      </section>

      {/* ── Tools ── */}
      <section className="px-[65px] pb-[80px]">
        <div className="border border-ink/20 bg-white flex items-center justify-around py-10 px-12 rounded-[12px]">
          <div className="w-[72px] h-[72px] rounded-[10px] bg-[#FF7C00] flex items-center justify-center">
            <span className="text-white font-bold text-[22px] font-sans tracking-tight">Ai</span>
          </div>
          <div className="w-[72px] h-[72px] rounded-[10px] bg-black flex items-center justify-center">
            <svg width="26" height="38" viewBox="0 0 200 300" fill="none" xmlns="http://www.w3.org/2000/svg" aria-label="Figma">
              <path d="M100 150C100 122.386 122.386 100 150 100C177.614 100 200 122.386 200 150C200 177.614 177.614 200 150 200C122.386 200 100 177.614 100 150Z" fill="#1ABCFE"/>
              <path d="M0 250C0 222.386 22.386 200 50 200H100V250C100 277.614 77.614 300 50 300C22.386 300 0 277.614 0 250Z" fill="#0ACF83"/>
              <path d="M100 0V100H150C177.614 100 200 77.614 200 50C200 22.386 177.614 0 150 0H100Z" fill="#FF7262"/>
              <path d="M0 50C0 77.614 22.386 100 50 100H100V0H50C22.386 0 0 22.386 0 50Z" fill="#F24E1E"/>
              <path d="M0 150C0 177.614 22.386 200 50 200H100V100H50C22.386 100 0 122.386 0 150Z" fill="#A259FF"/>
            </svg>
          </div>
          <div className="w-[72px] h-[72px] rounded-[10px] bg-[#f0f0f0] border border-ink/10 flex items-center justify-center">
            <span className="font-sans font-semibold text-[13px] text-[#3776AB] italic">python</span>
          </div>
          <div className="w-[72px] h-[72px] rounded-[10px] bg-[#001E36] flex items-center justify-center">
            <span className="text-[#31A8FF] font-bold text-[22px] font-sans tracking-tight">Ps</span>
          </div>
        </div>
      </section>

      {/* ── Skill cards ── */}
      <section className="px-[65px] pb-[80px]">
        <div className="grid grid-cols-3 gap-6">
          {SKILLS.map((s) => (
            <div key={s.title} className="border border-ink/15 rounded-[16px] p-8 flex flex-col gap-5 bg-cream">
              <div className="relative w-[130px] h-[110px]">
                <Image src={s.shape} alt="" fill className="object-contain object-left-top" />
              </div>
              <h3 className="font-display font-semibold text-[20px] text-ink">{s.title}</h3>
              <p className="font-sans font-light text-[15px] leading-[23px] text-ink/75">{s.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── About Me heading ── */}
      <section className="px-[65px] pb-[48px] text-center">
        <h2 className="font-display font-light text-ink" style={{ fontSize: "clamp(52px, 7vw, 100px)" }}>
          About Me
        </h2>
      </section>

      {/* ── Info cards 2×2 ── */}
      <section className="px-[65px] pb-[80px]">
        <div className="grid grid-cols-2 gap-6">
          {INFO_CARDS.map((card) => (
            <div key={card.title} className="border border-ink/15 rounded-[16px] overflow-hidden flex flex-col">
              <div className="flex items-center justify-center py-10 border-b border-ink/15">
                <div className="relative w-[80px] h-[80px]">
                  <Image src={card.shape} alt="" fill className="object-contain" />
                </div>
              </div>
              <div className="border-b border-ink/15 py-4 px-8 text-center">
                <h3 className="font-display font-semibold text-[20px] text-ink">{card.title}</h3>
              </div>
              <div className="p-8 flex-1">{card.body}</div>
            </div>
          ))}
        </div>
      </section>

      <Footer />
    </main>
  );
}
