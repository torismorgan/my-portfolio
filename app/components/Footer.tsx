import Link from "next/link";
import ThinAsterisk from "@/app/components/ThinAsterisk";

export default function Footer() {
  return (
    <footer className="border-t border-dark w-full">
      {/* Top — name + star */}
      <div className="flex flex-col items-center gap-6 px-4 py-14 md:py-24">
        <ThinAsterisk className="text-dark" />
        <Link
          href="/"
          className="font-sans font-light text-dark text-center hover:opacity-70 transition-opacity"
          style={{
            fontSize: "clamp(48px, 6.4vw, 92px)",
            lineHeight: "clamp(44px, 6.1vw, 88px)",
            letterSpacing: "-3.68px",
          }}
        >
          Oris Morgan
        </Link>
      </div>

      {/* Bottom — three columns on desktop, stacked rows on mobile */}
      <div className="flex flex-col md:flex-row items-stretch w-full border-t border-b border-dark">
        {/* Nav links */}
        <div className="flex flex-1 flex-row md:flex-col items-center justify-center gap-4 md:gap-2 border-b md:border-b-0 md:border-r border-dark px-3 py-1 md:px-8 md:py-12 font-sans font-medium text-[13px] md:text-[14px] text-dark leading-[22px] whitespace-nowrap">
          <Link href="/works" className="inline-flex items-center min-h-[44px] px-2 md:min-h-0 md:px-0 hover:underline">
            WORKS
          </Link>
          <Link href="/about" className="inline-flex items-center min-h-[44px] px-2 md:min-h-0 md:px-0 hover:underline">
            ABOUT
          </Link>
          <Link href="/contact" className="inline-flex items-center min-h-[44px] px-2 md:min-h-0 md:px-0 hover:underline">
            CONTACT
          </Link>
        </div>

        {/* Email + social links */}
        <div className="flex flex-1 flex-col items-center justify-center gap-1 md:gap-3 border-b md:border-b-0 md:border-r border-dark px-5 py-2 md:px-8 md:py-12 font-sans font-medium text-[13px] md:text-[14px] text-dark leading-[22px] text-center">
          <div className="flex items-center justify-center gap-2">
            <a
              href="mailto:torismorgan@gmail.com"
              className="inline-flex items-center min-h-[44px] md:min-h-0 hover:underline break-all md:whitespace-nowrap"
            >
              TORISMORGAN@GMAIL.COM
            </a>
          </div>
          <div className="flex items-center justify-center gap-2 md:gap-5">
            <a
              href="https://www.linkedin.com/in/victoria-orisakite-morgan/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center min-h-[44px] md:min-h-0 px-3 md:px-0 hover:underline"
            >
              LINKEDIN
            </a>
            <a
              href="https://github.com/torismorgan"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center min-h-[44px] md:min-h-0 px-3 md:px-0 hover:underline"
            >
              GITHUB
            </a>
          </div>
        </div>

        {/* Copyright */}
        <div className="flex flex-1 items-center justify-center gap-2 px-5 py-5 md:px-8 md:py-12 font-sans font-medium text-[13px] md:text-[14px] text-dark leading-[22px] whitespace-nowrap">
          <span>[ © ]</span>
          <span>[ 2026 ]</span>
        </div>
      </div>

      {/* Credit line — shows on every page that uses the shared footer */}
      <p className="px-5 py-5 md:py-6 text-center font-sans font-medium text-[13px] md:text-[14px] text-dark leading-[22px] uppercase tracking-[0.06em]">
        Designed by Oris Morgan
      </p>
    </footer>
  );
}
