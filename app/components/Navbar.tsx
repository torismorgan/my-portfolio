"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useCallback, useEffect, useState } from "react";
import ThinAsterisk from "@/app/components/ThinAsterisk";

const NAV_LINKS = [
  { label: "WORKS", href: "/works", hoverBg: "#e8d77e" },
  { label: "ABOUT", href: "/about", hoverBg: "#8bbf7a" },
  { label: "CONTACT", href: "/contact", hoverBg: "#e07575" },
] as const;

// The mobile overlay carries a couple of extra stops the desktop bar doesn't need room for.
const MOBILE_LINKS = [
  { label: "HOME", href: "/", hoverBg: "#f0ede3" },
  ...NAV_LINKS,
  { label: "RÉSUMÉ", href: "/oris-morgan-resume.pdf", hoverBg: "#f0ede3", external: true },
] as const;

const focusRing = "focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue";

/** True when `href` is the current page, or (for /works) an ancestor of it — so a case-study page still highlights WORKS. */
function isActive(pathname: string, href: string) {
  if (href === "/") return pathname === "/";
  return pathname === href || pathname.startsWith(`${href}/`);
}

export default function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Compact the header once the visitor has actually started scrolling, not at pixel zero.
  // The current height is also published as --header-h, so the breadcrumb and section nav
  // (rendered by other components, further down the page) can stick right beneath it without
  // needing to know about this component's internal state.
  useEffect(() => {
    const onScroll = () => {
      const isScrolled = window.scrollY > 8;
      setScrolled(isScrolled);
      document.documentElement.style.setProperty("--header-h", isScrolled ? "58px" : "74px");
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Escape closes the mobile overlay from anywhere on the page, not just inside it.
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  const close = useCallback(() => setOpen(false), []);

  const barHeight = scrolled ? "h-[58px]" : "h-[74px]";

  return (
    <nav className="sticky top-0 z-50 w-full border-b border-black bg-cream/95 backdrop-blur-sm">
      <div className={`flex w-full transition-[height] duration-200 ease-out ${barHeight}`}>
        {/* Logo / home */}
        <Link
          href="/"
          onClick={close}
          aria-label="Return to homepage"
          className={`flex flex-1 md:flex-none md:w-[374px] shrink-0 items-center gap-2 border-r border-black px-5 md:px-8 transition-colors hover:bg-ink group ${focusRing}`}
        >
          <ThinAsterisk size={18} className="shrink-0 text-ink group-hover:text-cream transition-colors" />
          <span className="font-sans font-semibold text-[14px] md:text-[15px] text-ink leading-[22px] whitespace-nowrap group-hover:text-cream transition-colors">
            ORIS MORGAN
            {/* desktop-only reveal — inert on touch since there's no hover to trigger it; the mobile overlay lists HOME explicitly instead */}
            <span
              aria-hidden="true"
              className="hidden md:inline-block max-w-0 overflow-hidden align-bottom whitespace-nowrap transition-[max-width] duration-200 ease-out group-hover:max-w-[80px] group-focus-visible:max-w-[80px]"
            >
              {" "}/ HOME
            </span>
          </span>
        </Link>

        {/* Desktop links */}
        <div className="hidden md:flex flex-1">
          {NAV_LINKS.map((item, i) => {
            const active = isActive(pathname, item.href);
            return (
              <Link
                key={item.label}
                href={item.href}
                aria-current={active ? "page" : undefined}
                style={{ ["--hover-bg" as string]: item.hoverBg }}
                className={`relative flex flex-1 h-full items-center justify-center px-3 font-sans text-[14px] text-ink leading-[22px] whitespace-nowrap transition-colors hover:[background-color:var(--hover-bg)] ${
                  active ? "font-semibold" : "font-medium"
                } ${i < NAV_LINKS.length - 1 ? "border-r border-black" : ""} ${focusRing}`}
              >
                {item.label}
                <span
                  aria-hidden="true"
                  className={`absolute left-3 right-3 bottom-0 h-[3px] transition-opacity ${active ? "opacity-100" : "opacity-0"}`}
                  style={{ backgroundColor: item.hoverBg }}
                />
              </Link>
            );
          })}
        </div>

        {/* Mobile toggle — text, not an icon; "ORIS MORGAN | MENU" per spec */}
        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          aria-controls="mobile-nav-menu"
          className={`flex md:hidden min-w-[96px] min-h-[44px] items-center justify-center h-full font-sans font-medium text-[14px] text-ink ${focusRing}`}
        >
          {open ? "CLOSE" : "MENU"}
        </button>
      </div>

      {/* Mobile overlay — floats over the page below the header rather than pushing content down */}
      <div
        id="mobile-nav-menu"
        className={`md:hidden absolute inset-x-0 top-full overflow-hidden bg-cream border-b border-black shadow-[0_12px_24px_rgba(0,0,0,0.12)] transition-[max-height] duration-300 ease-in-out ${
          open ? "max-h-[320px]" : "max-h-0"
        }`}
      >
        <div className="flex flex-col">
          {MOBILE_LINKS.map((item) => {
            const external = "external" in item && item.external;
            const active = !external && isActive(pathname, item.href);
            return (
              <Link
                key={item.label}
                href={item.href}
                onClick={close}
                {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                aria-current={active ? "page" : undefined}
                style={{ ["--hover-bg" as string]: item.hoverBg }}
                className={`flex min-h-[56px] items-center px-5 font-sans text-[15px] text-ink border-b border-black last:border-b-0 transition-colors hover:[background-color:var(--hover-bg)] ${
                  active ? "font-semibold" : "font-medium"
                } ${focusRing}`}
              >
                {item.label}
              </Link>
            );
          })}
        </div>
      </div>
    </nav>
  );
}
