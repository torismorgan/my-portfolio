import Image from "next/image";

const A = "/work/the-pastel-stop";

const NAVY = "#20242f";
const PANEL = "#F3F0EA";
const CREAM = "#FFFFF1";

const eyebrow = "font-sans text-[12px] uppercase tracking-[0.14em] text-ink/70";
const bodyText = "font-sans text-[16px] md:text-[17px] leading-[1.7] text-ink/80";
const pad = "px-6 md:px-9";
const block = `${pad} py-14 md:py-24 border-b border-ink`;

/* ── 7. The content ecosystem ── */
const CONTENT: { title: string; text: string; image?: { src: string; alt: string; w: number; h: number } }[] = [
  {
    title: "Dear Her",
    text: "Personal letters and longer editorial stories.",
    image: { src: "c-dearcard.jpg", alt: "Dear Her page card with a polaroid photo on a blue background", w: 1640, h: 1240 },
  },
  {
    title: "Recommendations",
    text: "Music, books, products and things the community is enjoying.",
    image: { src: "c-things.jpg", alt: "Homepage 'currently at the stop.' row of recommendation cards", w: 2880, h: 1400 },
  },
  {
    title: "Community submissions",
    text: "Member photos and stories, including “Spotted at the Stop.”",
  },
  {
    title: "Conversations",
    text: "Social prompts and content that encourage reflection and connection.",
  },
];

/*
  Real community evidence (screenshots supplied for this case study). More can be added below — for example
  event photography or Dear Her responses. Blur or remove usernames and private messages unless permission has
  been given. Files live in /public/work/the-pastel-stop and /community.
*/
const EVIDENCE: { src: string; alt: string; w: number; h: number; caption: string; path?: string }[] = [
  {
    src: "c-eventcard.jpg",
    alt: "Event announcement on the Events page: The Last Bloom of Summer, with an image collage, date, place and a see full recap link",
    w: 2160,
    h: 1128,
    caption: "Website event page",
  },
  {
    src: "ig-profile.jpg",
    alt: "The Pastel Stop Instagram profile: the bio 'Community — for every version of her', highlights named 'spotted at the stop.' and 'the last bloom of summer'",
    w: 1179,
    h: 2098,
    caption: "Instagram profile",
    path: "community/",
  },
  {
    src: "ig-grid.jpg",
    alt: "The Pastel Stop Instagram grid: the 'spotted at the stop.' prompt post, a reminder post, an event story and a summer teaser",
    w: 1178,
    h: 1521,
    caption: "Promotional posts",
    path: "community/",
  },
  {
    src: "c-join.jpg",
    alt: "Join the Stop footer form with an email field, an arrow button and a consent checkbox",
    w: 960,
    h: 430,
    caption: "Join the Stop — sign-up",
  },
];

export default function Community() {
  return (
    <>
      {/* ── 7. Content ecosystem ── */}
      <section className={block} id="content-ecosystem">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-start">
          <div>
            <p className={eyebrow}>Content Ecosystem</p>
            <h2
              className="mt-4 uppercase ps-title font-semibold leading-[1.02] tracking-[-0.03em] text-balance text-[clamp(34px,5.4vw,72px)]"
              style={{ color: NAVY }}
            >
              Different ways to participate
            </h2>
          </div>
          <p className={bodyText}>
            The site supports more than one type of visit — from reading a letter to sharing a photo or a
            recommendation.
          </p>
        </div>

        <div className="mt-12 md:mt-16">
          <ul className="grid grid-cols-1 sm:grid-cols-2 border-l border-t border-ink/30">
            {CONTENT.map((item, i) => (
              <li key={item.title} className="border-r border-b border-ink/30 p-6 md:p-7 flex flex-col gap-4">
                <span className={eyebrow}>{String(i + 1).padStart(2, "0")}</span>
                <h3
                  className="ps-title font-semibold leading-[1.1] tracking-[-0.01em] text-[24px] md:text-[26px]"
                  style={{ color: NAVY }}
                >
                  {item.title}
                </h3>
                <p className="font-sans text-[16px] leading-[1.65] text-ink/80">{item.text}</p>
                {item.image && (
                  <figure className="mt-auto pt-2">
                    <div className="border border-ink/25 overflow-hidden" style={{ backgroundColor: CREAM }}>
                      <Image
                        src={`${A}/${item.image.src}`}
                        alt={item.image.alt}
                        width={item.image.w}
                        height={item.image.h}
                        sizes="(min-width: 1024px) 480px, 100vw"
                        className="block w-full h-auto"
                      />
                    </div>
                  </figure>
                )}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* ── 8. Community, social media + live events ── */}
      <section className={`${block} !border-b-0`} id="community">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-start">
          <div>
            <p className={eyebrow}>Community &nbsp;•&nbsp; Social &nbsp;•&nbsp; Events</p>
            <h2
              className="mt-4 uppercase ps-title font-semibold leading-[1.02] tracking-[-0.03em] text-balance text-[clamp(34px,5.4vw,72px)]"
              style={{ color: NAVY }}
            >
              More than a website
            </h2>
          </div>
          <p className={bodyText}>
            The brand continues past the homepage — through Instagram, community submissions and live gatherings
            like The Last Bloom of Summer, which moved the community from the screen into a real room.
          </p>
        </div>

        <div className="mt-12 md:mt-16">
          <p className={`${eyebrow} mb-3`}>Featured — The Last Bloom of Summer</p>
          <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {EVIDENCE.map((e) => (
              <li key={e.src}>
                <figure>
                  <div className="border border-ink/25 overflow-hidden" style={{ backgroundColor: PANEL }}>
                    <Image
                      src={`${A}/${e.path ?? ""}${e.src}`}
                      alt={e.alt}
                      width={e.w}
                      height={e.h}
                      sizes="(min-width: 1024px) 280px, (min-width: 640px) 45vw, 100vw"
                      className="block w-full h-auto"
                    />
                  </div>
                  <figcaption className={`${eyebrow} mt-2`}>{e.caption}</figcaption>
                </figure>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </>
  );
}
