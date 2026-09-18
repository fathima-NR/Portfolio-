"use client";

import { useEffect, useState } from "react";
import { nav } from "@/lib/content";

export default function SiteHeader() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className={`sticky top-0 z-40 transition-colors ${
        scrolled || open ? "border-b border-line bg-bg/85 backdrop-blur-xl" : "bg-transparent"
      }`}
    >
      <div className="mx-auto grid max-w-6xl grid-cols-[1fr_auto] items-center px-5 py-4 sm:px-8 lg:grid-cols-[1fr_auto_1fr]">
        <a href="#top" className="flex items-center gap-2.5 text-sm font-semibold tracking-tight">
          <span className="grid h-8 w-8 place-items-center rounded-full bg-accent text-[11px] font-bold text-[#04150c]">
            FN
          </span>
          Fathima NR
        </a>

        <nav
          className="hidden items-center gap-8 text-[11px] font-semibold uppercase tracking-[0.18em] text-muted lg:flex"
          aria-label="Primary"
        >
          <a href="#top" className="text-ink">
            Home
          </a>
          {nav.map((item) => (
            <a key={item.href} href={item.href} className="transition-colors hover:text-ink">
              {item.label}
            </a>
          ))}
        </nav>

        <div className="hidden justify-self-end lg:block">
          <a href="#contact" className="btn-nav">
            Get in Touch
          </a>
        </div>

        <button
          type="button"
          className="grid h-10 w-10 place-items-center justify-self-end rounded-full border border-line lg:hidden"
          aria-expanded={open}
          aria-label={open ? "Close menu" : "Open menu"}
          onClick={() => setOpen((value) => !value)}
        >
          <span className="flex w-4 flex-col gap-1.5">
            <span className={`h-px w-full bg-ink transition ${open ? "translate-y-[4px] rotate-45" : ""}`} />
            <span className={`h-px w-full bg-ink transition ${open ? "-translate-y-[4px] -rotate-45" : ""}`} />
          </span>
        </button>
      </div>

      {open ? (
        <nav className="flex flex-col gap-4 px-5 pb-6 text-sm uppercase tracking-[0.16em] lg:hidden">
          <a href="#top" onClick={() => setOpen(false)}>
            Home
          </a>
          {nav.map((item) => (
            <a key={item.href} href={item.href} onClick={() => setOpen(false)}>
              {item.label}
            </a>
          ))}
          <a href="#contact" className="btn-nav w-fit" onClick={() => setOpen(false)}>
            Get in Touch
          </a>
        </nav>
      ) : null}
    </header>
  );
}
