import Image from "next/image";
import { Poppins } from "next/font/google";
import Navbar from "@/app/components/Navbar";
import Footer from "@/app/components/Footer";
import ProjectNav from "@/app/components/ProjectNav";
import CaseStudyBreadcrumb from "@/app/components/CaseStudyBreadcrumb";
import ExternalArrow from "@/app/components/ExternalArrow";
import SectionNav from "@/app/components/SectionNav";
import CaseSummary from "@/app/components/CaseSummary";
import FeedbackLoop from "@/app/components/FeedbackLoop";

export const metadata = {
  title: "Buddy Up — Victoria Morgan",
  description:
    "Buddy Up is a social fitness app redesigned around one insight: starting, or starting again, feels like a big step, and it’s easier with an accountability partner beside you.",
};

// Poppins is the app's own typeface, so the whole case study uses it.
const poppins = Poppins({ subsets: ["latin"], weight: ["300", "400", "500", "600", "700", "800"], variable: "--font-poppins-bu" });

const A = "/work/buddy-up";
const PROTOTYPE_URL =
  "https://www.figma.com/proto/3iefOOmj1WCMvMB6TmXQsh/gym-buds-rebrand?node-id=2614-332&starting-point-node-id=2614-332&hide-ui=1";
// Drop the walkthrough recording in public/work/buddy-up and set its file name here to show it in the Prototype section.
const VIDEO: string | null = null;

const INK = "#1f1f1f";
const LIME = "#B7D417";
const OLIVE = "#5C6B00";
const APP_BLACK = "#000000";
const LIME_SOFT = "#F1F7D0";

const eyebrow = "font-sans text-[12px] uppercase tracking-[0.14em] text-ink/70";
const bodyText = "font-sans text-[16px] md:text-[17px] leading-[1.7] text-ink/80";
const pad = "px-6 md:px-9";
const scrollOffset = "scroll-mt-[var(--case-study-offset,190px)]";
const section = `${pad} py-14 md:py-24 border-b border-ink`;
const twoCol = "grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-start";

const SECTIONS = [
  { id: "overview", label: "Overview" },
  { id: "background", label: "Background" },
  { id: "research", label: "Research" },
  { id: "design", label: "Design" },
  { id: "accountability", label: "Accountability" },
  { id: "brand", label: "Brand" },
  { id: "system", label: "System" },
  { id: "feedback", label: "Feedback" },
  { id: "outcome", label: "Outcome" },
];

/* ── content ── */

const META = [
  ["Role", "UX/UI Designer, Brand Designer"],
  ["Project Type", "App Redesign · Personal Project"],
  ["Platform", "iOS"],
  ["Tools", "Figma"],
  ["Status", "Prototype complete"],
];

const BARRIERS = [
  {
    quote: "It never fits my schedule.",
    response: "Match on Availability",
    detail:
      "You set when you’re free during onboarding. Filters default to “matches my free times”, and every activity card leads with when it happens.",
    screen: "s-onboard-level",
    alt: "Onboarding: pick your level and the days and times you’re usually free",
  },
  {
    quote: "I haven’t been in ages. Going back feels like a lot.",
    response: "Make the First Step Small",
    detail:
      "“Getting back into it” is a level of its own. Activities carry beginner-friendly tags, and short sessions surface first.",
    screen: "s-explore",
    alt: "Explore: nearby activities with beginner-friendly tags and a Buddy Up button",
  },
  {
    quote: "The gym feels like this big, intimidating thing.",
    response: "It’s Not Just the Gym",
    detail:
      "Running, cycling, yoga, hiking and more sit alongside the gym. You can start with one buddy and one short session, not a whole class.",
    screen: "s-onboard-activities",
    alt: "Onboarding: choose from eight activities, from running to yoga to hiking",
  },
  {
    quote: "Starting something new on my own feels overwhelming. I wish I had an accountability partner.",
    response: "Never Start Alone",
    detail:
      "Buddies are matched on level, so you can find someone a step ahead to show you what to do, or someone at the same stage to get better with. Check-ins, shared streaks and friendly nudges keep you both going.",
    screen: "s-checkin",
    alt: "Check-in: Did you show up? with a five-week streak shared with Tessa",
  },
];

const COMPETITORS = [
  {
    name: "Strava",
    good: "A huge community, clubs and group events, and kudos that make logging a run feel social.",
    gap: "The social part happens after the workout and centres on pace and distance, which can make a beginner feel behind before they start.",
  },
  {
    name: "Meetup",
    good: "Running clubs, hiking groups and classes in almost every city, with a clear time and place.",
    gap: "You turn up to a group of strangers. There’s no one person who notices if you don’t come back.",
  },
  {
    name: "Nike Run Club",
    good: "Free guided runs and plans: the “show me what to do” half of what people asked for.",
    gap: "The coach is a voice in your headphones. You’re still doing it alone.",
  },
  {
    name: "Bumble BFF",
    good: "Matching with new people nearby, with mutual opt-in that feels safe.",
    gap: "Not built around movement, level or free times, so a match doesn’t lead to a plan.",
  },
];

const FLOWS = [
  {
    title: "Getting Started",
    text: "Social sign-in or email, then two quick questions that power everything else: what you like doing, and when you’re free.",
    screens: [
      ["s-welcome", "Welcome: Find someone to move with, over a photo of two people doing partner yoga"],
      ["s-signup", "Sign up with Apple, Google or email, with a Safe by design promise"],
      ["s-onboard-activities", "Onboarding step one: choose your activities"],
      ["s-onboard-level", "Onboarding step two: your level and when you’re free"],
    ],
  },
  {
    title: "Joining an Activity",
    text: "Find something happening near you, tap Buddy Up, and a group chat opens so everyone can sort the details. The brand name is the button.",
    screens: [
      ["s-explore", "Explore: activities happening near you"],
      ["s-detail", "Activity detail: an easy-pace social ride with the host’s show-up rate and who’s going"],
      ["s-youre-in", "You’re in! Tessa and three others are counting on you"],
      ["s-group-chat", "The activity’s group chat, with a pinned meet-up card and quick replies"],
    ],
  },
  {
    title: "Finding a Buddy",
    text: "New people only, matched on activities, level and free times, with the reasons for each match shown up front.",
    screens: [
      ["s-buddies", "Buddies: top picks with match percentage, activities and when they’re free"],
      ["s-filters", "Filters: activities, distance slider, level and safety toggles"],
      ["s-buddy-profile", "A buddy profile with show-up rate and what you have in common"],
      ["s-chat", "A one-to-one chat with an activity invite you can accept in the thread"],
    ],
  },
];

const ACCOUNTABILITY = [
  ["s-home", "Home: your next plan with buddies, weekly goal and shared streak"],
  ["s-checkin", "Check-in after a session: Did you show up?"],
  ["s-streak", "Six-week streak celebration with Tessa"],
  ["s-cant-make-it", "Can’t make it? A sheet to let the group know, with no guilt"],
];

const SAFETY = [
  "Photo-verified profiles, shown with a badge",
  "First meet-ups suggested in public places",
  "Neighbourhood shown instead of exact distance",
  "Live location shared only during an activity, only with that group",
  "Report or block from any profile or chat",
  "Buddies are mutual, not followers: both people choose each other",
];

const LOGOS = [
  { key: "A", name: "Two Buds", note: "Two people, one heart. Warm and community-first.", chosen: true },
  { key: "B", name: "Lean In", note: "Two people leaning together form an up arrow.", chosen: false },
  { key: "C", name: "Heart, Levelled Up", note: "The v2 heart without the dumbbell; the pulse becomes an arrow.", chosen: false },
];

const TOKENS = [
  ["bg/base", "#000000", "#F7F7F5", "Screen background"],
  ["bg/surface", "#262626", "#FFFFFF", "Cards and inputs"],
  ["bg/elevated", "#111111", "#FFFFFF", "Nav bar and sheets"],
  ["border/default", "#3A3A3A", "#E2E2DE", "Dividers and outlines"],
  ["text/primary", "#FFFFFF", "#111111", "Headings and body"],
  ["text/secondary", "#A6A6A6", "#5F5F5A", "Supporting text"],
  ["accent/default", "#B7D417", "#B7D417", "Buttons and selected states"],
  ["accent/subtle", "#1E2306", "#F1F7D0", "Highlighted cards"],
  ["accent/text", "#B7D417", "#5C6B00", "Accent text and links"],
];

const COMPONENTS = [
  "Nav bar (4 states)",
  "Filter chips",
  "Activity tiles",
  "Level picker",
  "Day toggles",
  "Switches",
  "Distance slider",
  "Spots stepper",
  "Dropdown",
  "Buddy Up request",
  "Nudge button",
  "Theme switch",
];

// Paraphrased from friends who clicked through each version of the app.
const FEEDBACK = [
  {
    heard: "Version one felt like a grocery app. It was too green, and it wasn’t clear what the app was actually for.",
    changed: "Dropped the mint green for black and lime, and put the purpose on the very first screen: “Find someone to move with.”",
  },
  {
    heard: "Version two looked better, but finding a community was still confusing, and it was hard to get back or reach some parts of the app.",
    changed: "Rebuilt navigation around five fixed tabs with a back button on every inner screen, and made finding buddies and activities the heart of Explore.",
  },
  {
    heard: "The name GymBuds and the dumbbell logo made it feel like a gym app, not an app for finding friends to move with.",
    changed: "Renamed it Buddy Up, so the name and the main button say the same thing, and replaced the dumbbell with Two Buds: two people forming one heart.",
  },
  {
    heard: "Testers kept switching between light and dark, unsure which should come first and what feeling each one gave.",
    changed: "Built both themes from one set of colour tokens, kept dark as the starting theme for its energy, and added a Light / Dark / Auto setting so people choose.",
  },
];

const LEARNINGS = [
  [
    "Change the Question",
    "Version one asked “what should a fitness app do?” This version asked “why do people stop showing up?” The second question led to a different product, not a prettier one.",
  ],
  [
    "Let the Name Do Work",
    "Renaming GymBuds to Buddy Up made the brand and the main action the same words. Every activity card ends with the promise the app makes.",
  ],
  [
    "Design the Hard Moments",
    "Cancelling, missing a session and meeting a stranger are where people quit. Giving them as much care as the happy path is what makes accountability feel supportive instead of stressful.",
  ],
];

/* ── small building blocks ── */

function Head({ n, title }: { n: string; title: string }) {
  return (
    <div className="flex items-baseline gap-5 md:gap-8">
      <span className={eyebrow}>{n}</span>
      <h2
        className="bu-title font-medium leading-[1.1] tracking-[-0.02em] text-balance text-[clamp(26px,3.6vw,52px)]"
        style={{ color: INK }}
      >
        {title}
      </h2>
    </div>
  );
}

function Paras({ paras, className = "" }: { paras: string[]; className?: string }) {
  return (
    <div className={`flex flex-col gap-5 ${className}`}>
      {paras.map((p) => (
        <p key={p} className={bodyText}>
          {p}
        </p>
      ))}
    </div>
  );
}

/* One app screen at its true proportions (440 × 956 frames, exported at 2×). */
function Phone({ src, alt, caption, className = "", preload = false }: { src: string; alt: string; caption?: string; className?: string; preload?: boolean }) {
  return (
    <figure className={className}>
      <div className="overflow-hidden rounded-[22px] md:rounded-[28px] ring-1 ring-black/15 shadow-[0_18px_40px_rgba(0,0,0,0.28)] bg-black">
        <Image
          src={`${A}/${src}.png`}
          alt={alt}
          width={880}
          height={1912}
          preload={preload}
          sizes="(min-width: 1024px) 280px, 46vw"
          className="block w-full h-auto"
        />
      </div>
      {caption && <figcaption className={`${eyebrow} mt-3 text-center`}>{caption}</figcaption>}
    </figure>
  );
}

/* A row of four screens: swipes sideways on phones, sits in one row from tablet up. */
function PhoneRow({ screens }: { screens: string[][] }) {
  return (
    <div className="-mx-6 px-6 md:mx-0 md:px-0 overflow-x-auto md:overflow-visible snap-x snap-mandatory scroll-px-6 pb-3 md:pb-0">
      <ul className="flex gap-4 md:gap-6 lg:gap-8">
        {screens.map(([src, alt]) => (
          <li key={src} className="snap-start shrink-0 basis-[58%] sm:basis-[40%] md:basis-0 md:flex-1 min-w-0">
            <Phone src={src} alt={alt} />
          </li>
        ))}
      </ul>
    </div>
  );
}

/* The three logo directions, drawn on the 48-unit grid used in Figma. */
function Mark({ k, left = LIME, right = "#ffffff", className = "" }: { k: string; left?: string; right?: string; className?: string }) {
  const stroke = { fill: "none", strokeLinecap: "round" as const, strokeLinejoin: "round" as const };
  return (
    <svg viewBox="-2 -2 52 52" className={className} aria-hidden="true">
      {k === "A" && (
        <>
          <circle cx="16" cy="10" r="5" fill={left} />
          <circle cx="32" cy="10" r="5" fill={right} />
          <path d="M6 20C6 30 18 38 24 43" stroke={left} strokeWidth="5" {...stroke} />
          <path d="M42 20C42 30 30 38 24 43" stroke={right} strokeWidth="5" {...stroke} />
        </>
      )}
      {k === "B" && (
        <>
          <circle cx="19" cy="8" r="5" fill={left} />
          <circle cx="29" cy="8" r="5" fill={right} />
          <path d="M9 44L21 19" stroke={left} strokeWidth="5.5" {...stroke} />
          <path d="M39 44L27 19" stroke={right} strokeWidth="5.5" {...stroke} />
        </>
      )}
      {k === "C" && (
        <>
          <path
            d="M24 42C10 32 4 24 4 16C4 9 9 4 15 4C19 4 22 6 24 9C26 6 29 4 33 4C39 4 44 9 44 16C44 24 38 32 24 42Z"
            stroke={left}
            strokeWidth="4.5"
            {...stroke}
          />
          <path d="M2 25H13L17 19L22 31L28 17L37 8M30 8H37V15" stroke={right} strokeWidth="4" {...stroke} />
        </>
      )}
    </svg>
  );
}

function Swatch({ hex }: { hex: string }) {
  return (
    <span className="inline-flex items-center gap-2 font-sans text-[13px] text-ink/80">
      <span aria-hidden="true" className="inline-block w-4 h-4 rounded-full ring-1 ring-ink/25" style={{ backgroundColor: hex }} />
      <span className="uppercase">{hex}</span>
    </span>
  );
}

function PrototypeButton({ dark = false }: { dark?: boolean }) {
  return (
    <a
      href={PROTOTYPE_URL}
      target="_blank"
      rel="noopener noreferrer"
      className={`inline-flex items-center justify-center gap-2 font-sans font-medium text-[14px] uppercase tracking-[0.08em] px-6 py-3 min-h-[48px] transition-opacity hover:opacity-80 ${
        dark ? "text-black" : "bg-ink text-cream"
      }`}
      style={dark ? { backgroundColor: LIME } : undefined}
    >
      Try the prototype
      <ExternalArrow />
    </a>
  );
}

/* ── the page ── */

const SUMMARY: [string, string][] = [
  ["The problem", "Starting, or coming back to, exercise feels like a big step to take alone. The first version was a generic tracker that didn’t help."],
  ["My role", "UX/UI and brand designer: research, product strategy, naming, identity, design system and prototype."],
  ["What I did", "Talked to people who exercise, reframed the app around accountability partners, and designed 60+ clickable screens in light and dark."],
  ["Result", "A complete, fully clickable prototype with its own identity and design system, shaped by feedback from friends who tried every version."],
];

export default function BuddyUpCaseStudy() {
  return (
    <main className={`bg-cream text-ink flex flex-col ${poppins.variable}`}>
      <Navbar />
      <CaseStudyBreadcrumb current="buddy-up" />
      <SectionNav items={SECTIONS} />

      <div className="bu-body">

      {/* ── 1. Hero ── */}
      <section id="overview" className={`border-b border-ink ${scrollOffset}`}>
        <div className={`${pad} pt-12 md:pt-20 pb-10 md:pb-14 text-center`}>
          <p className={eyebrow}>Social Fitness App &nbsp;•&nbsp; UX/UI &nbsp;•&nbsp; Brand</p>
          <h1
            className="mt-8 md:mt-10 bu-title font-medium leading-[0.95] tracking-[-0.03em] text-[clamp(52px,15vw,96px)] md:text-[clamp(96px,10vw,168px)]"
            style={{ color: INK }}
          >
            Buddy Up
          </h1>
          <p className={`${bodyText} mt-8 md:mt-10 max-w-[660px] mx-auto`}>
            Buddy Up helps you find people nearby to move with, from a 6 AM run to Sunday yoga. It started as a
            generic workout tracker called GymBuds. I redesigned it around one insight from research: starting, or
            starting again, feels like a big step, and it’s much easier with an accountability partner beside you.
          </p>
        </div>

        {/* collage of the strongest screens, on the app's own black */}
        <div className={`${pad} py-12 md:py-20 border-t border-ink overflow-hidden`} style={{ backgroundColor: APP_BLACK }}>
          <div className="mx-auto max-w-[1060px] flex items-start justify-center">
            <Phone src="s-explore" alt="Explore: activities happening near you" className="hidden sm:block w-[19%] mt-16 md:mt-24 -mr-[2%] -rotate-[5deg] z-0" />
            <Phone src="s-detail" alt="Activity detail for an easy-pace social ride" className="w-[30%] sm:w-[23%] mt-8 md:mt-12 -mr-[3%] sm:-mr-[2%] -rotate-[2deg] z-10" />
            <Phone src="s-home" alt="Home: up next with your buddies, weekly goal and streak" className="w-[40%] sm:w-[30%] z-20" preload />
            <Phone src="s-buddies" alt="Buddies: top picks matched on activities and free times" className="w-[30%] sm:w-[23%] mt-8 md:mt-12 -ml-[3%] sm:-ml-[2%] rotate-[2deg] z-10" />
            <Phone src="s-streak" alt="A six-week streak shared with a buddy" className="hidden sm:block w-[19%] mt-16 md:mt-24 -ml-[2%] rotate-[5deg] z-0" />
          </div>
        </div>
      </section>

      {/* ── Project details ── */}
      <dl className="grid grid-cols-2 lg:grid-cols-5 border-b border-ink">
        {META.map(([k, v], i) => (
          <div
            key={k}
            /* phones: Role and Project Type take a full row each; the other three share rows */
            className={`min-w-0 py-5 md:py-6 px-6 border-ink/40 ${i > 0 ? "border-t" : ""} ${i === 3 ? "border-l" : ""} ${
              i === 0 || i === 1 || i === 4 ? "col-span-2" : ""
            } lg:col-span-1 lg:border-t-0 ${i > 0 ? "lg:border-l" : ""}`}
          >
            <dt className="font-sans text-[11px] sm:text-[12px] uppercase tracking-[0.12em] sm:tracking-[0.14em] text-ink/70">{k}</dt>
            <dd className="font-sans text-[16px] lg:text-[15px] leading-[1.5] text-ink mt-2 md:mt-3 flex items-center gap-2">
              {k === "Status" && <span aria-hidden="true" className="inline-block w-2.5 h-2.5 rounded-full" style={{ backgroundColor: LIME }} />}
              {v}
            </dd>
          </div>
        ))}
      </dl>

      <CaseSummary items={SUMMARY} accent={LIME} />

      <div className="border-b border-ink flex flex-wrap items-center justify-center gap-3 px-6 py-5 md:py-6">
        <PrototypeButton />
      </div>

      {/* ── 01 The project ── */}
      <section className={section}>
        <div className={twoCol}>
          <div>
            <Head n="01" title="The Project" />
            <Paras
              className="mt-8"
              paras={[
                "Buddy Up is an iOS app for finding accountability partners. You can join activities people post nearby, post your own (“easy 5K tomorrow at 7, walk breaks welcome”), find buddies who like the same things and are free at the same times, then keep each other showing up.",
                "It’s a personal project I first designed two years ago and returned to this year: a full redesign covering research, product strategy, a new name and identity, a themeable design system and a clickable prototype of more than 60 screens.",
              ]}
            />
          </div>
          <div className="flex justify-center gap-4 md:gap-8">
            <Phone src="s-explore" alt="Explore: activities happening near you" caption="Explore" className="w-[46%] max-w-[280px]" />
            <Phone src="s-detail" alt="Activity detail with a Buddy Up button" caption="Buddy Up" className="w-[46%] max-w-[280px] mt-10 md:mt-16" />
          </div>
        </div>
      </section>

      {/* ── 02 Iteration 1 ── */}
      <section id="background" className={`${section} ${scrollOffset}`}>
        <div className={twoCol}>
          <Head n="02" title="Iteration 1: The Tracker" />
          <Paras
            paras={[
              "The first version, GymBuds, was a mint-green tracker: daily goal rings for calories and hours, a recent-activity log and a settings menu. The idea was always to help people find a gym buddy, but nothing on screen did that. I never finished it.",
              "Why I moved on: it was solving the wrong problem. Nobody asked for a calorie counter. The whole premise needed to change.",
            ]}
          />
        </div>
        <figure className="mt-12 md:mt-16">
          <div className="border border-ink/30 bg-white overflow-hidden">
            <Image src={`${A}/v1-board.png`} alt="GymBuds v1: five mint-green screens for splash, registration, login, a home with goal rings and recent activity, and a profile menu" width={1380} height={1008} sizes="(min-width: 1200px) 1100px, 100vw" className="block w-full h-auto" />
          </div>
          <figcaption className={`${eyebrow} mt-3`}>GymBuds v1 — splash, registration, login, home with goal rings, profile</figcaption>
        </figure>
      </section>

      {/* ── 03 Iteration 2 ── */}
      <section className={section}>
        <div className={twoCol}>
          <Head n="03" title="Iteration 2: A Brand, But Not Yet a Product" />
          <Paras
            paras={[
              "My next pass sketched the social screens — Find Buddies, workouts, chat — and gave the app real energy: black, lime and a heart-and-dumbbell logo. It looked much better, but the home screen still led with calories and steps, there was nowhere to post an activity, and the gym framing narrowed who it was for.",
              "Why I moved on: it was a better-looking tracker, not a different product. The core idea — finding someone to move with — still didn’t have a flow.",
            ]}
          />
        </div>
        <div className="mt-12 md:mt-16 grid grid-cols-1 md:grid-cols-[1fr_2.4fr] gap-6 md:gap-8 items-start">
          <figure>
            <div className="border border-ink/30 bg-white overflow-hidden">
              <Image src={`${A}/v2-sketches.png`} alt="Hand-drawn wireframes for home, find buddies, workout and chat screens" width={600} height={586} sizes="(min-width: 768px) 320px, 100vw" className="block w-full h-auto" />
            </div>
            <figcaption className={`${eyebrow} mt-3`}>Early sketches exploring social screens</figcaption>
          </figure>
          <figure>
            <div className="border border-ink/30 bg-white overflow-hidden">
              <Image src={`${A}/v2-showcase.png`} alt="GymBuds v2: dark screens for splash, sign-up, home with daily goals, workouts, find buddies and chat" width={1439} height={443} sizes="(min-width: 768px) 760px, 100vw" className="block w-full h-auto" />
            </div>
            <figcaption className={`${eyebrow} mt-3`}>GymBuds v2 — stronger identity, but still a tracker at heart</figcaption>
          </figure>
        </div>
      </section>

      {/* ── 04 Research ── */}
      <section id="research" className={`${section} ${scrollOffset}`}>
        <div className={twoCol}>
          <Head n="04" title="Why People Stop Showing Up" />
          <Paras
            paras={[
              "Before designing anything new, I went back to people who exercise, or want to, and asked what gets in the way. Nobody asked for a better tracker. Four answers kept coming up.",
              "The common thread was that starting, or coming back, feels like a big step to take alone. Many wished they had an accountability partner: someone who could show them what to do, or someone at the same stage to improve alongside. That reframed the whole project.",
            ]}
          />
        </div>
        <ul className="mt-12 md:mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-5">
          {BARRIERS.map((b, i) => (
            <li
              key={b.quote}
              className="border border-ink/30 p-5 md:p-6 flex flex-col justify-between gap-8 min-h-[170px]"
              style={{ backgroundColor: i === 3 ? LIME_SOFT : "transparent" }}
            >
              <span className="font-sans text-[13px] text-ink/60">{String(i + 1).padStart(2, "0")}</span>
              <p className="font-sans font-medium text-[19px] md:text-[20px] leading-[1.35] text-ink">“{b.quote}”</p>
            </li>
          ))}
        </ul>
        <p className={`${eyebrow} mt-4`}>Paraphrased from informal conversations with people who work out, or want to</p>
      </section>

      {/* ── 05 The reframe ── */}
      <section className={section}>
        <div className={twoCol}>
          <Head n="05" title="From GymBuds to Buddy Up" />
          <Paras
            paras={[
              "If the answer is a person, the app should be about people, and not only at the gym. I renamed it Buddy Up: a name that covers any kind of movement and is also the main action. On every activity, the button you tap says Buddy Up.",
              "That one decision changed the structure. The nav now puts a Post button at its centre, Workouts became a “Train solo” option inside Explore (with an Invite a buddy button on every workout), and the calorie rings on Home were replaced by your next plan with your buddies.",
            ]}
          />
        </div>
      </section>

      {/* ── 06 Competitor scan ── */}
      <section className={section}>
        <div className={twoCol}>
          <Head n="06" title="Where Buddy Up Fits" />
          <Paras
            paras={[
              "After the first pass of the redesign, I looked at what people already use to find movement or company. Each app solves part of the problem: community, structure, coaching or new friends. None of them pairs you with one person at your level, at a time you’re both free, who notices if you don’t show up.",
              "That gap is where Buddy Up sits: a person, a plan and a time, with accountability built in.",
            ]}
          />
        </div>
        {/* stacked on phones, three columns from tablet up; the column labels repeat inline on phones */}
        <div className="mt-12 md:mt-16 font-sans text-[15px] leading-[1.6]">
          <div className="hidden md:grid grid-cols-[160px_1fr_1fr] gap-8 border-b border-ink py-3">
            {["App", "What it does well", "What’s missing for someone starting out"].map((h) => (
              <p key={h} className="text-[12px] uppercase tracking-[0.12em] font-medium text-ink/70">{h}</p>
            ))}
          </div>
          <ul>
            {COMPETITORS.map((c) => (
              <li key={c.name} className="grid grid-cols-1 md:grid-cols-[160px_1fr_1fr] gap-2 md:gap-8 border-b border-ink/20 py-5">
                <p className="bu-title font-medium text-[18px] text-ink">{c.name}</p>
                <p className="text-ink/80">
                  <span className="md:hidden font-medium text-ink">Does well: </span>
                  {c.good}
                </p>
                <p className="text-ink/80">
                  <span className="md:hidden font-medium text-ink">Missing: </span>
                  {c.gap}
                </p>
              </li>
            ))}
            <li className="grid grid-cols-1 md:grid-cols-[160px_1fr] gap-2 md:gap-8 border-b border-ink py-5 px-4 md:px-0 md:pl-0" style={{ backgroundColor: LIME_SOFT }}>
              <p className="bu-title font-medium text-[18px] text-ink md:pl-4">Buddy Up</p>
              <p className="text-ink md:pr-4">
                Matches you with a buddy on activity, level and free times, turns the match into a plan, and keeps you both
                showing up with check-ins and a shared streak.
              </p>
            </li>
          </ul>
        </div>
      </section>

      {/* ── 07 From barrier to design ── */}
      <section id="design" className={`${section} ${scrollOffset}`}>
        <div className={twoCol}>
          <Head n="07" title="Every Barrier, Answered" />
          <Paras paras={["Each research finding became a specific design decision, so every screen has a reason to exist."]} />
        </div>
        <ol className="mt-12 md:mt-16 flex flex-col gap-6 md:gap-8">
          {BARRIERS.map((b, i) => (
            <li key={b.quote} className="border border-ink/30 grid grid-cols-1 md:grid-cols-[1fr_1.3fr_200px] lg:grid-cols-[1fr_1.4fr_220px] gap-6 md:gap-10 p-5 md:p-8 items-center">
              <div>
                <p className={eyebrow}>Barrier {String(i + 1).padStart(2, "0")}</p>
                <p className="mt-3 font-sans font-medium text-[19px] md:text-[22px] leading-[1.35] text-ink">“{b.quote}”</p>
              </div>
              <div>
                <p className={eyebrow}>
                  <span aria-hidden="true">→ </span>Design response
                </p>
                <p className="mt-3 bu-title font-medium text-[20px] md:text-[24px] leading-[1.2] text-ink">{b.response}</p>
                <p className={`${bodyText} mt-3`}>{b.detail}</p>
              </div>
              <Phone src={b.screen} alt={b.alt} className="w-[60%] max-w-[220px] mx-auto md:w-full" />
            </li>
          ))}
        </ol>
      </section>

      {/* ── 07 Key flows ── */}
      {FLOWS.map((f, i) => (
        <section key={f.title} className={section}>
          <div className={twoCol}>
            <Head n={`08.${i + 1}`} title={f.title} />
            <Paras paras={[f.text]} />
          </div>
          <div className="mt-12 md:mt-16">
            <PhoneRow screens={f.screens} />
          </div>
        </section>
      ))}

      {/* ── 08 Accountability ── */}
      <section id="accountability" className={`${section} ${scrollOffset}`}>
        <div className={twoCol}>
          <Head n="09" title="Accountability Without Guilt" />
          <Paras
            paras={[
              "Accountability is the product, so it runs through the whole app. Home opens on your next plan and who’s coming. After a session you check in with one tap, which extends the streak you share with your buddy. If someone goes quiet, you can send a friendly nudge.",
              "The harder moments got the same care. “Can’t make it” lets the group know in two taps with an optional note, and missing a check-in leads to “No guilt. Life happens.” with your streak still safe and times to reschedule.",
            ]}
          />
        </div>
        <div className="mt-12 md:mt-16">
          <PhoneRow screens={ACCOUNTABILITY} />
        </div>
      </section>

      {/* ── 09 Safety ── */}
      <section className={section}>
        <div className={twoCol}>
          <div>
            <Head n="10" title="Safe by Design" />
            <Paras
              className="mt-8"
              paras={[
                "An app that asks people to meet strangers has to earn trust before anything else. Safety is part of sign-up, every profile and every activity, not hidden in settings.",
              ]}
            />
            <ul className="mt-8 border-b border-ink/20">
              {SAFETY.map((s) => (
                <li key={s} className="border-t border-ink/20 py-3 flex items-start gap-3 font-sans text-[16px] leading-[1.5] text-ink/85">
                  <span aria-hidden="true" className="mt-[7px] inline-block w-2.5 h-2.5 rounded-full shrink-0" style={{ backgroundColor: OLIVE }} />
                  {s}
                </li>
              ))}
            </ul>
          </div>
          <div className="flex justify-center gap-4 md:gap-8">
            <Phone src="s-signup" alt="Sign up with a Safe by design promise: verified profiles, public meeting places, report or block" caption="Sign up" className="w-[46%] max-w-[280px]" />
            <Phone src="s-buddy-profile" alt="A buddy profile with a verified badge, show-up rate and shared interests" caption="Verified profiles" className="w-[46%] max-w-[280px] mt-10 md:mt-16" />
          </div>
        </div>
      </section>

      {/* ── 10 Brand ── */}
      <section id="brand" className={`${section} ${scrollOffset}`}>
        <div className={twoCol}>
          <Head n="11" title="Two Buds, One Heart" />
          <Paras
            paras={[
              "Testers said the dumbbell in the old logo made it feel like a gym app rather than an app for friends, so it had to go. I explored three directions and chose Two buds: two dots for two people, and one curve that turns them into a heart. It’s warm, it reads at app-icon size, and it carries the idea of the product.",
              "Black and lime stayed from v2. They give the energy people associate with working out, with the lime reserved for the actions that matter.",
            ]}
          />
        </div>
        <ul className="mt-12 md:mt-16 grid grid-cols-1 md:grid-cols-3 gap-5 md:gap-6">
          {LOGOS.map((l) => (
            <li key={l.key} className={`border ${l.chosen ? "border-ink border-2" : "border-ink/30"} flex flex-col`}>
              <div className="aspect-[4/3] flex flex-col items-center justify-center gap-4" style={{ backgroundColor: APP_BLACK }}>
                <Mark k={l.key} className="w-[30%]" />
                <span className="bu-title font-extrabold text-[22px] md:text-[26px] text-white">
                  Buddy <span style={{ color: LIME }}>Up</span>
                </span>
              </div>
              <div className="p-5 flex flex-col gap-2">
                <p className="font-sans font-medium text-[16px] text-ink flex items-center gap-2">
                  {l.key} · {l.name}
                  {l.chosen && (
                    <span className="ml-auto font-sans text-[11px] uppercase tracking-[0.12em] px-2 py-1 text-black" style={{ backgroundColor: LIME }}>
                      Chosen
                    </span>
                  )}
                </p>
                <p className="font-sans text-[14px] leading-[1.5] text-ink/70">{l.note}</p>
              </div>
            </li>
          ))}
        </ul>
        <div className="mt-12 md:mt-16 flex flex-col sm:flex-row items-center justify-center gap-8 md:gap-14">
          <figure className="flex flex-col items-center">
            <div className="w-[120px] h-[120px] rounded-[28px] flex items-center justify-center shadow-[0_14px_30px_rgba(0,0,0,0.18)]" style={{ backgroundColor: LIME }}>
              <Mark k="A" left="#000" right="#000" className="w-[64%]" />
            </div>
            <figcaption className={`${eyebrow} mt-3`}>App icon</figcaption>
          </figure>
          <Phone src="s-splash" alt="Splash screen with the Buddy Up logo and the line Find someone to move with" caption="Splash" className="w-[46%] max-w-[220px]" />
          <Phone src="s-welcome" alt="Welcome screen: Find someone to move with, over a partner yoga photo" caption="Welcome" className="w-[46%] max-w-[220px]" />
        </div>
      </section>

      {/* ── 11 Design system ── */}
      <section id="system" className={`${section} ${scrollOffset}`}>
        <div className={twoCol}>
          <Head n="12" title="One System, Light and Dark" />
          <Paras
            paras={[
              "Every colour in the app is a Figma variable with a Dark and a Light value, so any screen switches theme in one step, and the prototype’s Appearance setting really does flip the whole app.",
              "Building light mode surfaced an accessibility problem: lime text on a light background is only 1.69:1. Accent text now swaps to olive in light mode (5.9:1), while lime stays for buttons, where it sits behind black text at 12.4:1.",
            ]}
          />
        </div>

        <div className="mt-12 md:mt-16 grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 max-w-[1100px] mx-auto">
          <Phone src="s-home" alt="Home in dark mode" caption="Dark" />
          <Phone src="l-home" alt="Home in light mode" caption="Light" />
          <Phone src="s-checkin" alt="Check-in in dark mode" caption="Dark" />
          <Phone src="l-checkin" alt="Check-in in light mode with olive accent text" caption="Light" />
        </div>

        <div className="mt-14 md:mt-20 grid grid-cols-1 lg:grid-cols-[1.5fr_1fr] gap-10 lg:gap-16 items-start">
          <div>
            <p className={`${eyebrow} mb-4`}>Colour tokens</p>
            <div className="overflow-x-auto">
              <table className="w-full min-w-[520px] border-collapse font-sans text-[14px]">
                <thead>
                  <tr className="text-left">
                    {["Token", "Dark", "Light", "Used for"].map((h) => (
                      <th key={h} className="border-b border-ink py-2 pr-4 font-sans text-[12px] uppercase tracking-[0.12em] font-medium text-ink/70">
                        {h}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {TOKENS.map(([t, d, l, u]) => (
                    <tr key={t}>
                      <td className="border-b border-ink/20 py-2.5 pr-4 font-medium text-ink">{t}</td>
                      <td className="border-b border-ink/20 py-2.5 pr-4"><Swatch hex={d} /></td>
                      <td className="border-b border-ink/20 py-2.5 pr-4"><Swatch hex={l} /></td>
                      <td className="border-b border-ink/20 py-2.5 text-ink/75">{u}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
          <div className="flex flex-col gap-10">
            <div>
              <p className={`${eyebrow} mb-4`}>Accessibility fixes from v2</p>
              <ul className="border-b border-ink/20">
                {[
                  ["8px → 12px", "smallest text size"],
                  ["1.69 → 5.9:1", "accent text on light"],
                  ["44px", "minimum touch target"],
                ].map(([v, l]) => (
                  <li key={l} className="border-t border-ink/20 py-3 flex items-baseline gap-4">
                    <span className="bu-title font-medium text-[20px] text-ink w-[150px] shrink-0">{v}</span>
                    <span className="font-sans text-[15px] text-ink/75">{l}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <p className={`${eyebrow} mb-4`}>Interactive components</p>
              <ul className="flex flex-wrap gap-2">
                {COMPONENTS.map((c) => (
                  <li key={c} className="border border-ink/30 px-3 py-1.5 font-sans text-[13px] text-ink/85">
                    {c}
                  </li>
                ))}
              </ul>
              <p className={`${bodyText} mt-4 !text-[15px]`}>
                Chips, toggles, sliders and dropdowns change state where you tap them, so the prototype behaves like an app
                without a separate screen for every choice.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── 12 Three iterations ── */}
      <section className={section}>
        <div className={twoCol}>
          <Head n="13" title="Three Iterations" />
          <Paras
            paras={[
              "The home screen tells the whole story. V1 asked “how many calories today?” V2 looked sharper but still asked the same question. Buddy Up asks “what am I doing next, and who’s counting on me?”",
            ]}
          />
        </div>
        <div className="mt-12 md:mt-16 grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 items-start">
          <div className="flex flex-col gap-3">
            <p className={eyebrow}>V1 — The tracker</p>
            <p className="font-sans text-[14px] leading-[1.6] text-ink/70">Mint-green, calorie-focused. The social idea existed in name only.</p>
            <div className="border border-ink/30 bg-white overflow-hidden">
              <Image src={`${A}/v1-board.png`} alt="GymBuds v1 screens: mint green with daily goal rings and a recent activity log" width={1380} height={1008} sizes="(min-width: 768px) 380px, 100vw" className="block w-full h-auto" />
            </div>
          </div>
          <div className="flex flex-col gap-3">
            <p className={eyebrow}>V2 — The visual refresh</p>
            <p className="font-sans text-[14px] leading-[1.6] text-ink/70">Black and lime, a real logo. Still a tracker underneath — no way to post or join an activity.</p>
            <div className="border border-ink/30 bg-white overflow-hidden">
              <Image src={`${A}/v2-showcase.png`} alt="GymBuds v2: dark screens for splash, sign-up, home with daily goals, workouts and find buddies" width={1439} height={443} sizes="(min-width: 768px) 380px, 100vw" className="block w-full h-auto" />
            </div>
          </div>
          <div className="flex flex-col gap-3">
            <p className={eyebrow}>V3 — Buddy Up</p>
            <p className="font-sans text-[14px] leading-[1.6] text-ink/70">A different product, not just a prettier one. Built around accountability, not data.</p>
            <Phone src="s-home" alt="Buddy Up home: up next with buddies, weekly goal and shared streak" />
          </div>
        </div>
      </section>

      {/* ── 13 Prototype ── */}
      <section className={`${pad} py-14 md:py-24 border-b border-ink`} style={{ backgroundColor: APP_BLACK }}>
        <div className={twoCol}>
          <div>
            <div className="flex items-baseline gap-5 md:gap-8">
              <span className="font-sans text-[12px] uppercase tracking-[0.14em] text-white/60">14</span>
              <h2 className="bu-title font-medium leading-[1.1] tracking-[-0.02em] text-[clamp(26px,3.6vw,52px)] text-white">
                Try It Yourself
              </h2>
            </div>
            <p className="font-sans text-[16px] md:text-[17px] leading-[1.7] text-white/80 mt-8">
              The prototype is fully clickable: more than 60 screens, filters that change results, chats for every buddy,
              and a theme switch that really works. Start at the splash screen and Buddy Up with someone.
            </p>
            <div className="mt-8">
              <PrototypeButton dark />
            </div>
          </div>
          {VIDEO ? (
            <video
              className="block w-full max-w-[360px] mx-auto h-auto rounded-[28px]"
              width={880}
              height={1912}
              autoPlay
              muted
              loop
              playsInline
              controls
              preload="metadata"
              aria-label="Screen recording walking through the Buddy Up prototype"
            >
              <source src={`${A}/${VIDEO}`} type="video/mp4" />
            </video>
          ) : (
            <div className="flex justify-center gap-4 md:gap-6">
              <Phone src="s-search" alt="Search results for run: activities, people and groups" className="w-[44%] max-w-[240px] mt-8" />
              <Phone src="s-workout" alt="Train solo: a Legs and glutes workout with an Invite a buddy button" className="w-[44%] max-w-[240px]" />
            </div>
          )}
        </div>
      </section>

      {/* ── 15 Feedback ── */}
      <section id="feedback" className={`${section} ${scrollOffset}`}>
        <div className={twoCol}>
          <Head n="15" title="What People Said" />
          <Paras
            paras={[
              "I asked friends to click through each version and tell me what confused them. Every round changed the design: the colour, the name, the logo, the navigation and the theme all came out of their feedback.",
            ]}
          />
        </div>
        <FeedbackLoop who="A few friends, across all three versions of the app" rows={FEEDBACK} accent={OLIVE} />
      </section>

      {/* ── 16 Outcome ── */}
      <section id="outcome" className={`${section} ${scrollOffset}`}>
        <div className={twoCol}>
          <Head n="16" title="What I Learned" />
          <Paras
            paras={[
              "Buddy Up is now a complete, fully clickable prototype with its own identity and design system. The next step is usability testing with people who’ve fallen out of the habit, to see whether the accountability features actually bring them back.",
            ]}
          />
        </div>
        <ul className="mt-12 md:mt-16 grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-5">
          {LEARNINGS.map(([t, d], i) => (
            <li key={t} className="border border-ink/30 p-5 md:p-6 flex flex-col gap-4" style={{ backgroundColor: i === 0 ? LIME_SOFT : "transparent" }}>
              <span className="font-sans text-[13px] text-ink/60">{String(i + 1).padStart(2, "0")}</span>
              <p className="bu-title font-medium text-[20px] md:text-[22px] leading-[1.25] text-ink">{t}</p>
              <p className="font-sans text-[15px] md:text-[16px] leading-[1.65] text-ink/80">{d}</p>
            </li>
          ))}
        </ul>
        <div className="mt-12 md:mt-16 grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-start">
          <div>
            <p className={`${eyebrow} mb-4`}>What’s next</p>
            <ul className="border-b border-ink/20">
              {[
                "Usability testing with five people returning to exercise",
                "Real, inclusive photography of everyday people moving together",
                "Measuring whether check-ins and streaks change show-up rates",
              ].map((s) => (
                <li key={s} className="border-t border-ink/20 py-3 font-sans text-[16px] leading-[1.5] text-ink/85">
                  {s}
                </li>
              ))}
            </ul>
          </div>
          <div className="flex lg:justify-end">
            <PrototypeButton />
          </div>
        </div>
      </section>

      </div>

      <ProjectNav current="buddy-up" />

      <Footer />
    </main>
  );
}
