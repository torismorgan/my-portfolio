import Image from "next/image";
import Navbar from "@/app/components/Navbar";
import Footer from "@/app/components/Footer";
import ExternalArrow from "@/app/components/ExternalArrow";

export const metadata = { title: "Let’s chat — Oris Morgan" };

const LINKEDIN_URL = "https://www.linkedin.com/in/victoria-orisakite-morgan/";
// Google Calendar appointment schedule — Google adds a Google Meet link to every booking.
const SCHEDULE_URL = "https://calendar.app.google/Ap15XbhUMcYQf5Vk9";

const eyebrow = "font-sans text-[12px] uppercase tracking-[0.14em] text-ink/70";
const button =
  "inline-flex items-center justify-center gap-2 bg-ink text-cream font-display font-semibold text-[15px] md:text-[17px] leading-[22px] px-6 py-3 min-h-[44px] transition-opacity hover:opacity-80";
const h2 = "mt-4 font-display font-bold uppercase leading-[1.05] tracking-[-0.02em] text-[clamp(26px,3.2vw,40px)]";

/* The same loose, organic shapes used on the About page. Left-aligned inside the card's text column:
   above the label on phones, between the label and the title from md up (see the order-* classes on the card). */
function Shape({ src, className = "" }: { src: string; className?: string }) {
  return (
    <div className={`relative w-[64px] h-[64px] mb-5 md:w-[80px] md:h-[80px] md:mb-0 md:mt-4 ${className}`} aria-hidden="true">
      <Image src={src} alt="" fill className="object-contain object-left" />
    </div>
  );
}

export default function Contact() {
  return (
    <main className="bg-cream text-ink flex flex-col">
      <Navbar />

      <section className="px-6 sm:px-8 md:px-[65px] pt-[56px] md:pt-[88px] pb-[64px] md:pb-[96px]">
        <h1
          className="font-display font-bold uppercase leading-[0.95] tracking-[-0.03em] text-ink text-center"
          style={{ fontSize: "clamp(48px, 11vw, 168px)" }}
        >
          Let’s chat
        </h1>
        <p className="font-sans text-[16px] md:text-[18px] leading-[1.6] text-ink/80 text-center max-w-[560px] mx-auto mt-6 md:mt-8">
          Book a time to talk over Google Meet, or say hello on LinkedIn.
        </p>

        <div className="mt-12 md:mt-16 grid grid-cols-1 lg:grid-cols-[1.5fr_1fr] border border-ink/30">
          {/* Google Meet scheduler */}
          <div className="relative p-6 md:p-10 border-b lg:border-b-0 lg:border-r border-ink/30 flex flex-col gap-6">
            <div className="flex flex-col">
              <Shape src="/green-blob.svg" className="order-1 md:order-2" />
              <p className={`${eyebrow} order-2 md:order-1`}>01 &nbsp;/&nbsp; Schedule</p>
              <h2 className={`${h2} order-3`}>Book a Google Meet</h2>
              <p className="order-4 mt-4 font-sans text-[16px] leading-[1.65] text-ink/80 max-w-[520px]">
                Pick a time that suits you. A Google Meet link is added to your calendar invite automatically.
              </p>
            </div>
            <div>
              <a href={SCHEDULE_URL} target="_blank" rel="noopener noreferrer" className={button}>
                Pick a time
                <span aria-hidden="true">→</span>
              </a>
            </div>
          </div>

          {/* LinkedIn */}
          <div className="relative p-6 md:p-10 flex flex-col gap-6">
            <div className="flex flex-col">
              <Shape src="/red-blob.svg" className="order-1 md:order-2" />
              <p className={`${eyebrow} order-2 md:order-1`}>02 &nbsp;/&nbsp; Connect</p>
              <h2 className={`${h2} order-3`}>LinkedIn</h2>
              <p className="order-4 mt-4 font-sans text-[16px] leading-[1.65] text-ink/80 max-w-[520px]">
                Find my work history, experience and projects, or send me a message.
              </p>
            </div>
            <div>
              <a href={LINKEDIN_URL} target="_blank" rel="noopener noreferrer" className={button}>
                Open LinkedIn
                <ExternalArrow />
              </a>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
