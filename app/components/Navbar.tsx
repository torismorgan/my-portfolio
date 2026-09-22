"use client";

import Link from "next/link";
import { useState } from "react";
import ThinAsterisk from "@/app/components/ThinAsterisk";

const NAV_LINKS = [
  { label: "WORKS", href: "/works", hoverBg: "#e8d77e" },
  { label: "ABOUT", href: "/about", hoverBg: "#8bbf7a" },
  { label: "CONTACT", href: "/contact", hoverBg: "#e07575" },
] as const;

function HamburgerIcon({ open }: { open: boolean }) {
  return (
    <span className="relative flex h-[14px] w-[22px] shrink-0 flex-col justify-between" aria-hidden="true">
      <span
        className={`block h-[2px] w-full bg-ink transition-transform duration-200 ${
          open ? "translate-y-[6px] rotate-45" : ""
        }`}
      />
      <span className={`block h-[2px] w-full bg-ink transition-opacity duration-200 ${open ? "opacity-0" : ""}`} />
      <span
        className={`block h-[2px] w-full bg-ink transition-transform duration-200 ${
          open ? "-translate-y-[6px] -rotate-45" : ""
        }`}
      />
    </span>
  );
}

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="relative w-full border-b border-black">
      <div className="flex w-full">
        {/* Logo / home */}
        <Link
          href="/"
          onClick={() => setOpen(false)}
          className="flex h-[74px] w-auto md:w-[374px] shrink-0 items-center gap-2 border-r border-black px-5 md:px-8 transition-colors hover:bg-ink group"
        >
          <ThinAsterisk size={18} className="shrink-0 text-ink group-hover:text-cream transition-colors" />
          <span className="font-sans font-semibold text-[14px] md:text-[15px] text-ink leading-[22px] whitespace-nowrap group-hover:text-cream transition-colors">
            ORIS MORGAN
          </span>
        </Link>

        {/* Desktop links */}
        <div className="hidden md:flex flex-1">
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

        {/* Mobile menu toggle */}
        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          aria-controls="mobile-nav-menu"
          aria-label={open ? "Close menu" : "Open menu"}
          className="flex md:hidden flex-1 min-h-[44px] items-center justify-center h-[74px] text-ink"
        >
          <HamburgerIcon open={open} />
        </button>
      </div>

      {/* Mobile menu panel */}
      <div
        id="mobile-nav-menu"
        className={`md:hidden overflow-hidden transition-[max-height] duration-300 ease-in-out ${
          open ? "max-h-[240px]" : "max-h-0"
        }`}
      >
        <div className="flex flex-col border-t border-black">
          {NAV_LINKS.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              onClick={() => setOpen(false)}
              style={{ ["--hover-bg" as string]: item.hoverBg }}
              className="flex min-h-[56px] items-center px-5 font-sans font-medium text-[15px] text-ink border-b border-black last:border-b-0 transition-colors hover:[background-color:var(--hover-bg)]"
            >
              {item.label}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
}
