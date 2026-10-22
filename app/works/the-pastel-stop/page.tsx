import Image from "next/image";
import { League_Spartan, Poppins } from "next/font/google";
import Navbar from "@/app/components/Navbar";
import Footer from "@/app/components/Footer";
import ProjectNav from "@/app/components/ProjectNav";
import CaseStudyBreadcrumb from "@/app/components/CaseStudyBreadcrumb";
import ExternalArrow from "@/app/components/ExternalArrow";
import SectionNav from "@/app/components/SectionNav";
import CaseSummary from "@/app/components/CaseSummary";
import FeedbackLoop from "@/app/components/FeedbackLoop";
import Logo from "./Logo";
import ColourSystem from "./ColourSystem";
import WebsiteExperience from "./WebsiteExperience";
import Community from "./Community";

// Titles in League Spartan, small text in Poppins — the live Pastel Stop site's own type, scoped to this page.
const spartan = League_Spartan({ subsets: ["latin"], weight: ["500", "600", "700"], variable: "--font-spartan" });
const poppins = Poppins({ subsets: ["latin"], weight: ["300", "400", "500", "600"], variable: "--font-poppins" });

export const metadata = {
  title: "The Pastel Stop — Victoria Morgan",
  description:
    "A lifestyle and community platform combining editorial storytelling, seasonal design and shared experiences for every version of her.",
};

const A = "/work/the-pastel-stop";
const LIVE_URL = "https://thepastelstop.com";

const NAVY = "#20242f";
const SITE_CREAM = "#FFFFF1";

const META = [
  ["Role", "Founder, Brand Designer, UI/UX Designer + Front-End Developer"],
  ["Tools", "Figma, Photoshop, HTML, CSS and JavaScript"],
  ["Scope", "Brand strategy, visual identity, website, social media and events"],
  ["Status", "Ongoing"],
];

const eyebrow = "font-sans text-[12px] uppercase tracking-[0.14em] text-ink/70";
const bodyText = "font-sans text-[16px] md:text-[17px] leading-[1.7] text-ink/80";
const pad = "px-6 md:px-9";
const scrollOffset = "scroll-mt-[var(--case-study-offset,190px)]";

const SECTIONS = [
  { id: "overview", label: "Overview" },
  { id: "brand", label: "Brand" },
  { id: "website", label: "Website" },
  { id: "content-ecosystem", label: "Community" },
  { id: "feedback", label: "Feedback" },
  { id: "outcome", label: "Outcome" },
];

const SUMMARY: [string, string][] = [
  ["The problem", "Women moving through different stages of life had no single place that mixed honest editorial, recommendations and real-world community."],
  ["My role", "Founder, brand designer, UI/UX designer and front-end developer: I took it from idea to launch."],
  ["What I did", "Built the brand, colour system, website, social presence and community events, all from one visual language."],
  ["Result", "A live site, 52 Instagram followers in the first 48 hours, and a first event that filled 12 of its 15 spots."],
];

// Paraphrased from readers and community members after launch.
const FEEDBACK = [
  {
    heard: "Once I was deep in the site, it was hard to get back to the main page.",
    changed: "Added a sticky header, so home and the main sections are always one tap away.",
  },
  {
    heard: "On the Dear Her pages I didn’t realise some things were clickable, and the type made it harder to tell.",
    changed: "Adjusted the fonts and made links and buttons look clearly interactive.",
  },
  {
    heard: "The articles were long, and it wasn’t obvious how to get back when I finished one.",
    changed: "Tightened the article length and added a clear way back at the end of each piece.",
  },
];

const STATS = [
  { value: "12 / 15", label: "spots filled at the first community event, a small, intimate gathering" },
  { value: "0 → 52", label: "Instagram followers in the first 48 hours after launch" },
];

export default function ThePastelStopCaseStudy() {
  return (
    <main className={`bg-cream text-ink flex flex-col ${spartan.variable} ${poppins.variable}`}>
      <Navbar />
      <CaseStudyBreadcrumb current="pastel-stop" />
      <SectionNav items={SECTIONS} />

      <div className="ps-body">

      {/* ── 1. Hero + project summary ── */}
      <section id="overview" className={`border-b border-ink ${scrollOffset}`}>
        <div className={`${pad} pt-12 md:pt-20 pb-10 md:pb-14 text-center`}>
          <p className={eyebrow}>Brand &nbsp;•&nbsp; Web Design &nbsp;•&nbsp; Community</p>
          <h1
            className="mt-8 md:mt-10 ps-title font-semibold uppercase leading-[0.95] tracking-[-0.035em] text-balance text-[clamp(44px,13vw,84px)] md:text-[clamp(84px,9vw,160px)]"
            style={{ color: NAVY }}
          >
            The Pastel Stop
          </h1>
          <p className={`${bodyText} mt-8 md:mt-10 max-w-[640px] mx-auto`}>
            The Pastel Stop is a lifestyle and community platform created for women navigating different versions of
            themselves. I developed the project from ideation to execution, building its brand identity, digital
            experience, social presence and community-focused campaigns.
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
      <dl className="grid grid-cols-2 lg:grid-cols-4 border-b border-ink">
        {META.map(([k, v], i) => (
          <div
            key={k}
            /* mobile: 2 per row (odd index gets a left border, row 2+ gets a top border) — desktop: one row of 4 */
            className={`min-w-0 py-5 md:py-6 px-6 border-ink/40 ${i % 2 === 1 ? "border-l" : ""} ${i >= 2 ? "border-t" : ""} lg:border-t-0 ${i > 0 ? "lg:border-l" : ""}`}
          >
            <dt className="font-sans text-[11px] sm:text-[12px] uppercase tracking-[0.12em] sm:tracking-[0.14em] text-ink/70">
              {k}
            </dt>
            <dd className="font-sans text-[16px] lg:text-[15px] leading-[1.5] text-ink mt-2 md:mt-3">{v}</dd>
          </div>
        ))}
      </dl>

      <CaseSummary items={SUMMARY} accent={"#20242f"} />

      {/* ── 2. The idea ── */}
      <section className={`${pad} py-14 md:py-24 border-b border-ink`}>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-start">
          <div>
            <p className={eyebrow}>The Idea</p>
            <h2
              className="mt-4 uppercase ps-title font-semibold leading-[1.02] tracking-[-0.03em] text-balance text-[clamp(34px,5.4vw,72px)]"
              style={{ color: NAVY }}
            >
              A place to pause
            </h2>
          </div>
          <div className="flex flex-col gap-5">
            <p className={bodyText}>
              The Pastel Stop started as a space for women moving through different stages, interests and versions of
              themselves — somewhere to slow down between who they were and who they’re becoming. It’s built around
              editorial letters, recommendations, events and community, rather than one fixed idea of who “her” is.
            </p>
            <p className={bodyText}>
              It’s a real and growing community, not just a concept website: people read, submit, show up to events
              and shape what the Stop becomes next.
            </p>
          </div>
        </div>
      </section>

      <Logo />
      <ColourSystem />
      <WebsiteExperience />
      <Community />

      {/* ── Feedback ── */}
      <section id="feedback" className={`${pad} py-14 md:py-24 border-b border-ink ${scrollOffset}`}>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-start">
          <div>
            <p className={eyebrow}>Feedback</p>
            <h2
              className="mt-4 uppercase ps-title font-semibold leading-[1.02] tracking-[-0.03em] text-balance text-[clamp(34px,5.4vw,72px)]"
              style={{ color: NAVY }}
            >
              Shaped by the people using it
            </h2>
          </div>
          <p className={bodyText}>
            Because The Pastel Stop is live, real readers told me where they got lost. Each round of feedback became a
            fix on the site, and the community kept growing alongside it.
          </p>
        </div>
        <FeedbackLoop who="Readers, community members and event guests" rows={FEEDBACK} stats={STATS} accent={NAVY} />
      </section>

      {/* ── 10. Outcome and ongoing direction ── */}
      <section id="outcome" className={`${pad} py-14 md:py-24 border-b border-ink ${scrollOffset}`}>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-start">
          <div>
            <p className={eyebrow}>Outcome</p>
            <h2
              className="mt-4 uppercase ps-title font-semibold leading-[1.02] tracking-[-0.03em] text-balance text-[clamp(34px,5.4vw,72px)]"
              style={{ color: NAVY }}
            >
              An ongoing world, not a finished one
            </h2>
          </div>
          <p className={bodyText}>
            The Pastel Stop has grown from a visual concept into a connected brand experience spanning editorial
            content, social media, community participation and live events. The project is ongoing, with future
            seasons and features continuing to expand the world without losing its central identity.
          </p>
        </div>

        <div className="mt-10 md:mt-12 flex flex-wrap items-center gap-4">
          <a
            href={LIVE_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 bg-ink text-cream font-sans font-medium text-[14px] uppercase tracking-[0.08em] px-6 py-3 min-h-[48px] transition-opacity hover:opacity-80"
          >
            Visit The Pastel Stop
            <ExternalArrow />
          </a>
        </div>
      </section>
      </div>

      <ProjectNav current="pastel-stop" />

      <Footer />
    </main>
  );
}
