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
      <section className="relative px-6 sm:px-8 md:px-[65px] pt-[64px] md:pt-[88px] pb-[64px] max-w-full overflow-x-hidden">
        {/* Blurred asterisk — top right */}
        <Asterisk className="absolute top-[82px] right-[3vw] text-[#e04040] text-[48px] leading-none blur-[2px] pointer-events-none select-none" />

        {/* ── PORTFOLIO typography ── */}
        <div className="relative mb-[72px]">
          <h1
            className="flex flex-wrap items-baseline font-display font-bold leading-none text-ink select-none text-[clamp(44px,28vw,140px)] md:text-[clamp(60px,15.3vw,220px)]"
          >
            <span>P</span>
            <span>O</span>

            {/* R — red circle (front, top-aligned like the letter tops) + yellow triangle (behind, filling down to the baseline) */}
            <span
              className="relative flex-shrink-0 inline-flex self-start"
              style={{ width: "0.72em", height: "0.8em" }}
            >
              {/* Yellow triangle */}
              <span
                aria-hidden="true"
                className="absolute"
                style={{
                  width: "0.6em",
                  height: "0.42em",
                  bottom: "0",
                  left: "0.06em",
                  clipPath: "polygon(0% 0%, 0% 100%, 100% 100%)",
                  backgroundColor: "#f5c518",
                }}
              />
              {/* Red circle */}
              <span
                aria-hidden="true"
                className="absolute rounded-full"
                style={{
                  top: "0.06em",
                  left: "0.03em",
                  width: "0.6em",
                  height: "0.6em",
                  backgroundColor: "#e04040",
                }}
              />
            </span>

            <span>T</span>

            {/* Forces FOLIO onto its own line on mobile only */}
            <span aria-hidden="true" className="basis-full h-0 md:hidden" />

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
        <p className="font-sans font-medium text-[clamp(11px,3vw,18px)] leading-[1.7] md:leading-[36px] max-w-[963px] text-ink mb-[40px] uppercase">
          Hello, I’m Orisakite Victoria—a visual designer who brings ideas to life through branding, UI/UX, editorial,
          and interactive design. I create bold, cohesive experiences and use front-end development to turn them into
          functional digital products.
        </p>

        {/* ── Let's chat button ── */}
        <div className="mb-[72px]">
          <Link
            href="/contact"
            className="inline-flex items-center justify-center bg-ink text-cream font-display font-semibold text-[15px] md:text-[22px] leading-[20px] md:leading-[30px] px-[8px] md:px-[10px] py-[10px] md:py-[15px] min-h-[44px] md:min-h-0 w-[140px] md:w-[206px] transition-opacity hover:opacity-80"
          >
            LET’S CHAT
          </Link>
        </div>

        {/* ── Bottom row: asterisk + social links ── */}
        <div className="flex items-center justify-between">
          <Asterisk className="text-[#e04040] text-[48px] leading-none blur-[2px] pointer-events-none select-none" />

          <div className="flex gap-[28px] md:gap-[60px]">
            <a
              href="https://www.linkedin.com/in/victoria-orisakite-morgan/"
              target="_blank"
              rel="noopener noreferrer"
              className="font-display font-bold text-[12px] md:text-[16px] text-black underline decoration-solid underline-offset-2 hover:opacity-70 transition-opacity"
            >
              LINKEDIN
            </a>
            <a
              href="https://github.com/torismorgan"
              target="_blank"
              rel="noopener noreferrer"
              className="font-display font-bold text-[12px] md:text-[16px] text-black underline decoration-solid underline-offset-2 hover:opacity-70 transition-opacity"
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
