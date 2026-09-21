import Image from "next/image";
import { League_Spartan, Poppins } from "next/font/google";
import Navbar from "@/app/components/Navbar";
import Footer from "@/app/components/Footer";
import ProjectNav from "@/app/components/ProjectNav";
import Logo from "./Logo";
import ColourSystem from "./ColourSystem";
import WebsiteExperience from "./WebsiteExperience";
import Community from "./Community";

// Titles in League Spartan, small text in Poppins — the live Pastel Stop site's own type, scoped to this page.
const spartan = League_Spartan({ subsets: ["latin"], weight: ["500", "600", "700"], variable: "--font-spartan" });
const poppins = Poppins({ subsets: ["latin"], weight: ["300", "400", "500", "600"], variable: "--font-poppins" });

export const metadata = {
  title: "The Pastel Stop — Oris Morgan",
  description:
    "A lifestyle and community platform combining editorial storytelling, seasonal design and shared experiences for every version of her.",
};

const A = "/work/the-pastel-stop";

const NAVY = "#20242f";
const SITE_CREAM = "#FFFFF1";

const META = [
  ["Role", "Founder, Brand Designer, UI/UX Designer + Front-End Developer"],
  ["Project Type", "Community and Lifestyle Platform"],
  ["Timeline", "2025–Present"],
  ["Tools", "Figma, Illustrator, Photoshop, HTML/CSS/JavaScript"],
  ["Deliverables", "Brand Identity, Responsive Website, Editorial System, Social Content"],
];

const eyebrow = "font-sans text-[12px] uppercase tracking-[0.14em] text-ink/70";
const bodyText = "font-sans text-[16px] md:text-[17px] leading-[1.7] text-ink/80";
const pad = "px-6 md:px-9";

export default function ThePastelStopCaseStudy() {
  return (
    <main className={`bg-cream text-ink flex flex-col ${spartan.variable} ${poppins.variable}`}>
      <Navbar />

      <div className="ps-body">

      {/* ── 1. Hero ── */}
      <section className="border-b border-ink">
        <div className={`${pad} pt-12 md:pt-20 pb-10 md:pb-14 text-center`}>
          <p className={eyebrow}>Brand &nbsp;•&nbsp; Web Design &nbsp;•&nbsp; Community</p>
          <h1
            className="mt-8 md:mt-10 ps-title font-semibold uppercase leading-[0.95] tracking-[-0.035em] text-balance text-[clamp(44px,13vw,84px)] md:text-[clamp(84px,9vw,160px)]"
            style={{ color: NAVY }}
          >
            The Pastel Stop
          </h1>
          <p className={`${bodyText} mt-8 md:mt-10 max-w-[620px] mx-auto`}>
            A lifestyle and community platform combining editorial storytelling, seasonal design and shared
            experiences for every version of her.
          </p>
        </div>

        {/* the homepage hero, on its own */}
        <div className={`${pad} py-10 md:py-16 border-t border-ink/20`} style={{ backgroundColor: SITE_CREAM }}>
          <div className="mx-auto max-w-[1100px] overflow-hidden rounded-[6px] md:rounded-[10px] shadow-[0_14px_34px_rgba(63,53,45,0.2)] ring-1 ring-black/10">
            <Image
              src={`${A}/hero.jpg`}
              alt="The Pastel Stop homepage header: the thepastelstop. wordmark over a portrait of a woman holding white flowers"
              width={1526}
              height={881}
              priority
              sizes="(min-width: 1100px) 1100px, 100vw"
              className="block w-full h-auto"
            />
          </div>
        </div>
      </section>

      {/* ── Project information ── */}
      <dl className="grid grid-cols-2 lg:grid-cols-5 border-b border-ink">
        {META.map(([k, v], i) => (
          <div
            key={k}
            /* phones: the long items get a full row, Project Type and Timeline share one */
            className={`min-w-0 py-5 md:py-6 px-6 border-ink/40 ${i > 0 ? "border-t" : ""} ${i === 2 ? "border-l" : ""} ${
              i === 1 || i === 2 ? "" : "col-span-2"
            } lg:col-span-1 lg:border-t-0 ${i > 0 ? "lg:border-l" : ""}`}
          >
            <dt className="font-sans text-[11px] sm:text-[12px] uppercase tracking-[0.12em] sm:tracking-[0.14em] text-ink/70">
              {k}
            </dt>
            <dd className="font-sans text-[16px] lg:text-[15px] leading-[1.5] text-ink mt-2 md:mt-3">{v}</dd>
          </div>
        ))}
      </dl>

      <Logo />
      <ColourSystem />
      <WebsiteExperience />
      <Community />
      </div>

      <ProjectNav current="pastel-stop" />

      <Footer />
    </main>
  );
}
