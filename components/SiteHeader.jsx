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
      className={`relative sticky top-0 z-40 transition-colors ${
        scrolled || open ? "border-b border-line bg-bg/80 backdrop-blur-xl" : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-5 py-4 sm:px-8">
        <a href="/#top" className="font-display text-[1.05rem] font-extrabold tracking-tight sm:text-xl">
          Fathima NR
        </a>

        <nav
          className="absolute left-1/2 hidden -translate-x-1/2 items-center gap-5 text-[11px] font-bold uppercase tracking-[0.16em] text-muted lg:flex"
          aria-label="Primary"
        >
          {nav.map((item, index) => (
            <a
              key={item.href}
              href={item.href}
              className={`transition-colors hover:text-ink ${index === 0 ? "text-ink" : ""}`}
            >
              {item.label}
            </a>
          ))}
        </nav>

        <a href="/#contact" className="btn-nav hidden lg:inline-flex">
          Get in touch
          <span aria-hidden="true">→</span>
        </a>

        <button
          type="button"
          className="inline-flex shrink-0 items-center gap-2 rounded-full bg-accent px-3.5 py-2.5 text-[11px] font-bold uppercase tracking-[0.14em] text-white shadow-[0_8px_20px_rgba(111,77,232,0.28)] lg:hidden"
          aria-expanded={open}
          aria-label={open ? "Close menu" : "Open menu"}
          onClick={() => setOpen((value) => !value)}
        >
          Menu
        </button>
      </div>

      {open ? (
        <nav className="flex flex-col gap-4 px-5 pb-6 text-sm font-bold uppercase tracking-[0.16em] lg:hidden">
          {nav.map((item) => (
            <a key={item.href} href={item.href} onClick={() => setOpen(false)}>
              {item.label}
            </a>
          ))}
          <a href="/#contact" className="btn-nav inline-flex w-fit" onClick={() => setOpen(false)}>
            Get in touch →
          </a>
        </nav>
      ) : null}
    </header>
  );
}
