import Link from "next/link";

const NAV_LINKS = [
  { label: "WORKS", href: "/works", hoverBg: "#e8d77e" },
  { label: "ABOUT", href: "/about", hoverBg: "#8bbf7a" },
  { label: "CONTACT", href: "/contact", hoverBg: "#e07575" },
] as const;

export default function Navbar() {
  return (
    <nav className="flex w-full border-b border-black">
      {/* Logo / home */}
      <Link
        href="/"
        className="flex h-[74px] w-[374px] shrink-0 items-center border-r border-black px-8 transition-colors hover:bg-ink group"
      >
        <span className="font-sans font-semibold text-[15px] text-ink leading-[22px] whitespace-nowrap group-hover:text-cream transition-colors">
          ORIS MORGAN
        </span>
      </Link>

      <div className="flex flex-1">
        {NAV_LINKS.map((item, i) => (
          <Link
            key={item.label}
            href={item.href}
            style={{ ["--hover-bg" as string]: item.hoverBg }}
            className={`flex flex-1 h-[74px] items-center justify-center px-3 font-sans font-medium text-[14px] text-ink leading-[22px] whitespace-nowrap transition-colors hover:[background-color:var(--hover-bg)] ${
              i < NAV_LINKS.length - 1 ? "border-r border-black" : ""
            }`}
          >
            {item.label}
          </Link>
        ))}
      </div>
    </nav>
  );
}
