import Image from "next/image";

const A = "/work/the-pastel-stop";

const NAVY = "#20242f";
const PANEL = "#F3F0EA";
const CREAM = "#FFFFF1";

const eyebrow = "font-sans text-[12px] uppercase tracking-[0.14em] text-ink/70";
const bodyText = "font-sans text-[16px] md:text-[17px] leading-[1.7] text-ink/80";
const pad = "px-6 md:px-9";
const block = `${pad} py-14 md:py-24 border-b border-ink`;

const PARTICIPATION: { title: string; text: string; image?: { src: string; alt: string; w: number; h: number; caption: string } }[] = [
  {
    title: "Community submissions",
    text: "Spotted at the Stop invites people to share photographs showing what their lives look like lately—what they are wearing, loving, doing or simply enjoying.",
  },
  {
    title: "Conversations",
    text: "Prompts, reflections and Dear Her entries create space for people to respond to shared experiences and recognize themselves in other women’s stories.",
  },
  {
    title: "Recommendations",
    text: "Music, books, films, products and other current favourites are shared as part of the platform’s everyday lifestyle content.",
  },
  {
    title: "Events",
    text: "Gatherings such as The Last Bloom of Summer move the community beyond the screen and create opportunities for real-life connection.",
    image: {
      src: "c-eventcard.jpg",
      alt: "Event announcement on the Events page: The Last Bloom of Summer, with an image collage, date, place and a see full recap link",
      w: 2160,
      h: 1128,
      caption: "Event announcement — The Last Bloom of Summer",
    },
  },
  {
    title: "Social media",
    text: "Instagram acts as an extension of the website, allowing community members to discover content, participate in features and stay connected between website visits and events.",
  },
];

/*
  Real community evidence (screenshots supplied for this case study). More can be added below — for example
  Spotted at the Stop submissions, event photographs, community replies or Dear Her responses. Blur or remove
  usernames and private messages unless permission has been given. Files live in /public/work/the-pastel-stop/community.
*/
const EVIDENCE: { src: string; alt: string; w: number; h: number; caption: string }[] = [
  {
    src: "ig-profile.jpg",
    alt: "The Pastel Stop Instagram profile: the bio 'Community — for every version of her', highlights named 'spotted at the stop.' and 'the last bloom of summer', and the first row of posts",
    w: 1179,
    h: 2098,
    caption: "Instagram profile — highlights for Spotted at the Stop and The Last Bloom of Summer",
  },
  {
    src: "ig-grid.jpg",
    alt: "The Pastel Stop Instagram grid: the 'spotted at the stop.' prompt post, a reminder post, a 'what is thepastelstop.' post, an event story and a summer teaser",
    w: 1178,
    h: 1521,
    caption: "Instagram grid — the Spotted at the Stop prompt: “show us what life looks like lately”",
  },
];

export default function Community() {
  return (
    <>
      {/* ── More than a website ── */}
      <section className={block} id="community">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-start">
          <div>
            <p className={eyebrow}>Community</p>
            <h2
              className="mt-4 uppercase ps-title font-semibold leading-[1.02] tracking-[-0.03em] text-balance text-[clamp(34px,5.4vw,72px)]"
              style={{ color: NAVY }}
            >
              More than a website
            </h2>
          </div>
          <div className="flex flex-col gap-5">
            <p className={bodyText}>
              The Pastel Stop is supported by a real and growing community. The website gives the brand a home, but the
              experience continues through social media, community submissions, shared conversations and in-person
              events.
            </p>
            <p className={bodyText}>
              Community members are not treated as an audience that only consumes content. They are invited to
              contribute their stories, interests, photographs and everyday experiences, helping shape what appears at
              the Stop.
            </p>
          </div>
        </div>

        <div className="mt-12 md:mt-16">
          <p className={`${eyebrow} mb-3`}>How the community participates</p>
          <ol className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-6 border-l border-t border-ink/30">
            {PARTICIPATION.map((item, i) => (
              <li
                key={item.title}
                className={`border-r border-b border-ink/30 p-6 md:p-7 flex flex-col gap-4 ${
                  i < 3 ? "xl:col-span-2" : "xl:col-span-3"
                } ${i === PARTICIPATION.length - 1 ? "md:col-span-2" : ""}`}
              >
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
                        sizes="(min-width: 1280px) 360px, (min-width: 768px) 45vw, 100vw"
                        className="block w-full h-auto"
                      />
                    </div>
                    <figcaption className={`${eyebrow} mt-2`}>{item.image.caption}</figcaption>
                  </figure>
                )}
              </li>
            ))}
          </ol>
        </div>

        {EVIDENCE.length > 0 && (
          <div className="mt-12 md:mt-16">
            <p className={`${eyebrow} mb-3 max-w-[1000px] mx-auto`}>From the community</p>
            {/* flex-grow = aspect ratio keeps the screenshots the same height side by side, uncropped */}
            <ul className="flex flex-col sm:flex-row items-start gap-6 max-w-[1000px] mx-auto">
              {EVIDENCE.map((e) => (
                <li
                  key={e.src}
                  className="w-full sm:w-auto min-w-0 sm:[flex:var(--r)_1_0%]"
                  style={{ "--r": e.w / e.h } as React.CSSProperties}
                >
                  <figure>
                    <div className="border border-ink/25 overflow-hidden" style={{ backgroundColor: PANEL }}>
                      <Image
                        src={`${A}/community/${e.src}`}
                        alt={e.alt}
                        width={e.w}
                        height={e.h}
                        sizes="(min-width: 1024px) 420px, (min-width: 640px) 45vw, 100vw"
                        className="block w-full h-auto"
                      />
                    </div>
                    <figcaption className={`${eyebrow} mt-2`}>{e.caption}</figcaption>
                  </figure>
                </li>
              ))}
            </ul>
          </div>
        )}
      </section>

      {/* ── Community goal ── */}
      <section className={block}>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-start">
          <div>
            <p className={eyebrow}>Community goal</p>
            <h2
              className="mt-4 uppercase ps-title font-semibold leading-[1.05] tracking-[-0.025em] text-balance text-[clamp(30px,4.4vw,60px)]"
              style={{ color: NAVY }}
            >
              Building a place people can contribute to
            </h2>
          </div>
          <div className="flex flex-col gap-5">
            <p className={bodyText}>
              The goal is not only to publish content for women, but to create a platform with them. As The Pastel Stop
              grows, community participation will continue shaping its stories, events and recurring features.
            </p>
            <p className={bodyText}>
              The website, social media and physical experiences work together to make the platform feel active,
              personal and connected to real life.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
