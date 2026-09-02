import Link from "next/link";
import Navbar from "@/app/components/Navbar";
import Footer from "@/app/components/Footer";

function Asterisk({ className }: { className?: string }) {
  return (
    <span className={className} aria-hidden="true">
      ✳
    </span>
  );
}

export default function Home() {
  return (
    <main className="bg-cream text-ink">
      <Navbar />

      {/* ── Hero ── */}
      <section className="relative px-[65px] pt-[88px] pb-[64px]">
        {/* Blurred asterisk — top right */}
        <Asterisk className="absolute top-[82px] right-[3vw] text-[#e04040] text-[48px] leading-none blur-[2px] pointer-events-none select-none" />

        {/* ── PORTFOLIO typography ── */}
        <div className="relative mb-[72px]">
          {/* Blue square accents — top right of text block */}
          <div className="absolute top-[22px] right-0 flex gap-2">
            <div className="w-[30px] h-[28px] bg-blue" />
            <div className="w-[30px] h-[28px] bg-blue" />
          </div>

          <h1
            className="flex items-center font-display font-bold leading-none text-ink select-none"
            style={{ fontSize: "clamp(60px, 15.3vw, 220px)" }}
          >
            <span>P</span>
            <span>O</span>

            {/* R — red circle (front) + yellow triangle (behind, bottom-left) */}
            <span
              className="relative flex-shrink-0 inline-flex"
              style={{ width: "0.67em", height: "0.7em" }}
            >
              {/* Yellow triangle */}
              <span
                aria-hidden="true"
                className="absolute"
                style={{
                  width: "0.75em",
                  height: "0.68em",
                  bottom: "-0.14em",
                  left: "0.03em",
                  clipPath: "polygon(50% 0%, 0% 100%, 100% 100%)",
                  backgroundColor: "#f5c518",
                }}
              />
              {/* Red circle */}
              <span
                aria-hidden="true"
                className="absolute inset-0 rounded-full"
                style={{ backgroundColor: "#e04040" }}
              />
            </span>

            <span>T</span>
            <span>F</span>

            {/* O — green circle */}
            <span
              aria-hidden="true"
              className="rounded-full flex-shrink-0 self-center"
              style={{
                width: "0.67em",
                height: "0.67em",
                backgroundColor: "#4dba72",
              }}
            />

            <span>L</span>
            <span>I</span>
            <span>O</span>
          </h1>
        </div>

        {/* ── Bio ── */}
        <p className="font-sans font-medium text-[20px] leading-[40px] max-w-[963px] text-ink mb-[40px] uppercase">
          {`Hello there, my name is Orisakite Victoria. I'm a UI/UX designer, graphic artist,\nand front-end developer who loves creating bold and interactive digital experiences.`}
        </p>

        {/* ── VISUALS button ── */}
        <div className="mb-[72px]">
          <Link
            href="/works"
            className="inline-flex items-center justify-center bg-ink text-cream font-display font-semibold text-[22px] leading-[30px] px-[10px] py-[15px] w-[206px] transition-opacity hover:opacity-80"
          >
            VISUALS
          </Link>
        </div>

        {/* ── Bottom row: asterisk + social links ── */}
        <div className="flex items-center justify-between">
          <Asterisk className="text-[#e04040] text-[48px] leading-none blur-[2px] pointer-events-none select-none" />

          <div className="flex gap-[60px]">
            <a
              href="https://www.linkedin.com/in/victoria-orisakite-morgan/"
              target="_blank"
              rel="noopener noreferrer"
              className="font-display font-bold text-[16px] text-black underline decoration-solid underline-offset-2 hover:opacity-70 transition-opacity"
            >
              LINKEDIN
            </a>
            <a
              href="https://github.com/torismorgan"
              target="_blank"
              rel="noopener noreferrer"
              className="font-display font-bold text-[16px] text-black underline decoration-solid underline-offset-2 hover:opacity-70 transition-opacity"
            >
              GITHUB
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
