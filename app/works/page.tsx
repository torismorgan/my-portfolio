import Navbar from "@/app/components/Navbar";
import Footer from "@/app/components/Footer";
import ProjectCards from "@/app/components/ProjectCards";
import Asterisk from "@/app/components/Asterisk";

export const metadata = { title: "Works — Oris Morgan" };

export default function Works() {
  return (
    <main className="bg-cream text-ink flex flex-col">
      <Navbar />

      <section className="relative px-6 sm:px-8 md:px-[65px] pt-[64px] md:pt-[88px] pb-[64px] max-w-full overflow-x-hidden md:overflow-x-visible">
        {/* PROJECTS heading + asterisk — centered at every breakpoint */}
        <div className="mb-[32px] md:mb-[48px] text-center">
          <h1
            className="font-display font-bold leading-none text-ink inline"
            style={{ fontSize: "clamp(48px, 13vw, 190px)" }}
          >
            PROJECTS
          </h1>
          <span
            className="text-[#e04040] select-none pointer-events-none inline-block align-top"
            style={{ fontSize: "clamp(36px, 9vw, 130px)", lineHeight: 1, marginLeft: "-0.05em" }}
            aria-hidden="true"
          >
            <Asterisk strokeWidth={20} />
          </span>
        </div>

        {/* Description — centered on mobile; indented from the heading (not split at 50%) on desktop */}
        <div className="mb-[48px] md:mb-[80px] md:ml-[15%] md:max-w-[720px] flex flex-col items-center md:items-stretch gap-[16px] text-center md:text-left">
          <p className="font-sans font-medium text-[16px] md:text-[18px] leading-[26px] md:leading-[28px] text-ink">
            These Are A Selection Of The Design And Product Case Studies I&apos;ve Worked On.
          </p>
          <p className="font-sans font-medium text-[16px] md:text-[18px] leading-[26px] md:leading-[28px] text-ink">
            Each Project Shows My Process, The Problems I Set Out To Solve, And The Thinking Behind Every Decision.
          </p>
        </div>

        <ProjectCards />
      </section>

      <Footer />
    </main>
  );
}
