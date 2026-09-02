import Link from "next/link";

function ThinAsterisk() {
  const size = 48;
  const c = size / 2;
  const r = c * 0.82;
  return (
    <svg width={size} height={size} viewBox={`0 0 ${size} ${size}`} fill="none" aria-hidden>
      {[0, 45, 90, 135].map((deg, i) => {
        const rad = (deg * Math.PI) / 180;
        return (
          <line
            key={i}
            x1={c - r * Math.cos(rad)}
            y1={c - r * Math.sin(rad)}
            x2={c + r * Math.cos(rad)}
            y2={c + r * Math.sin(rad)}
            stroke="#20242f"
            strokeWidth="2.5"
            strokeLinecap="round"
          />
        );
      })}
    </svg>
  );
}

export default function Footer() {
  return (
    <footer className="border-t border-dark w-full">
      {/* Top — name + star */}
      <div className="flex flex-col items-center gap-6 px-4 py-24">
        <ThinAsterisk />
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

      {/* Bottom — three columns */}
      <div className="flex items-stretch w-full border-t border-b border-dark">
        {/* Nav links */}
        <div className="flex flex-1 flex-col items-center justify-center gap-2 border-r border-dark px-8 py-12 font-sans font-medium text-[14px] text-dark leading-[22px] whitespace-nowrap">
          <Link href="/works" className="hover:underline">
            WORKS
          </Link>
          <Link href="/about" className="hover:underline">
            ABOUT
          </Link>
          <Link href="/contact" className="hover:underline">
            CONTACT
          </Link>
        </div>

        {/* Email */}
        <div className="flex flex-1 items-center justify-center gap-2 border-r border-dark px-8 py-12 font-sans font-medium text-[14px] text-dark leading-[22px] whitespace-nowrap">
          <span>[ EMAIL ]</span>
          <span>[ @ ]</span>
          <a
            href="mailto:torismorgan@gmail.com"
            className="hover:underline"
          >
            [ TORISMORGAN@GMAIL.COM ]
          </a>
        </div>

        {/* Copyright */}
        <div className="flex flex-1 items-center justify-center gap-2 px-8 py-12 font-sans font-medium text-[14px] text-dark leading-[22px] whitespace-nowrap">
          <span>[ © ]</span>
          <span>[ 2026 ]</span>
        </div>
      </div>
    </footer>
  );
}
