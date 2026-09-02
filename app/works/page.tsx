import Navbar from "@/app/components/Navbar";
import Footer from "@/app/components/Footer";
import ProjectCards from "@/app/components/ProjectCards";

export const metadata = { title: "Works — Oris Morgan" };

export default function Works() {
  return (
    <main className="bg-cream text-ink flex flex-col">
      <Navbar />

      <section className="relative px-[65px] pt-[88px] pb-[64px]">
        {/* PROJECTS heading + asterisk — centered as a unit */}
        <div className="mb-[48px] text-center">
          <h1
            className="font-display font-bold leading-none text-ink inline"
            style={{ fontSize: "clamp(60px, 13vw, 190px)" }}
          >
            PROJECTS
          </h1>
          <span
            className="text-[#e04040] select-none pointer-events-none font-black inline-block align-top"
            style={{ fontSize: "clamp(48px, 9vw, 130px)", lineHeight: 1, WebkitTextStroke: "3px #e04040", marginLeft: "-0.05em" }}
            aria-hidden="true"
          >
            ✳
          </span>
        </div>

        {/* Description — left-aligned, starting from horizontal center */}
        <div className="mb-[80px] ml-[50%] max-w-[560px] flex flex-col gap-[16px]">
          <p className="font-sans font-medium text-[18px] leading-[28px] text-ink">
            These Are A Selection Of The Design And Product Case Studies I&apos;ve Worked On.
          </p>
          <p className="font-sans font-medium text-[18px] leading-[28px] text-ink">
            Each Project Shows My Process, The Problems I Set Out To Solve, And The Thinking Behind Every Decision.
          </p>
        </div>

        <ProjectCards />
      </section>

      <Footer />
    </main>
  );
}
