"use client";

import { useState } from "react";
import { profile } from "@/lib/content";
import Reveal from "@/components/Reveal";

export default function Contact() {
  const [status, setStatus] = useState("");

  function handleSubmit(event) {
    event.preventDefault();
    const form = new FormData(event.currentTarget);
    const name = String(form.get("name") || "").trim();
    const email = String(form.get("email") || "").trim();
    const message = String(form.get("message") || "").trim();
    const subject = encodeURIComponent(`Hello Fathima — ${name}`);
    const body = encodeURIComponent(`${message}\n\n— ${name}\n${email}`);
    window.location.href = `mailto:${profile.email}?subject=${subject}&body=${body}`;
    setStatus("Opening your email app…");
  }

  const fieldClass =
    "mt-2 w-full rounded-xl border border-line bg-bg px-3 py-3 outline-none focus:border-accent";

  return (
    <section id="contact" className="mx-auto max-w-6xl px-5 py-16 sm:px-8">
      <div className="glass-card grid gap-10 overflow-hidden rounded-[1.8rem] p-6 lg:grid-cols-[0.9fr_1.1fr] lg:p-10">
        <Reveal>
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-accent">Contact</p>
          <h2 className="mt-3 text-[2rem] font-extrabold leading-[1.15] tracking-[-0.04em] sm:text-[2.6rem]">
            Let’s talk about a full stack role in Dubai.
          </h2>
          <p className="mt-4 text-sm leading-7 text-muted">
            Immediate joining. Happy to walk through the telehealth and HR platforms, or a new product you want built.
          </p>
          <div className="mt-6 space-y-2 text-sm">
            <a className="block hover:text-accent" href={`mailto:${profile.email}`}>
              {profile.email}
            </a>
            <a className="block hover:text-accent" href={profile.phoneHref}>
              {profile.phone}
            </a>
            <a className="block hover:text-accent" href={profile.linkedin} target="_blank" rel="noreferrer">
              LinkedIn
            </a>
          </div>
        </Reveal>
        <form onSubmit={handleSubmit}>
          <div className="grid gap-4 sm:grid-cols-2">
            <label className="block text-sm">
              Name
              <input required name="name" className={fieldClass} />
            </label>
            <label className="block text-sm">
              Email
              <input required type="email" name="email" className={fieldClass} />
            </label>
          </div>
          <label className="mt-4 block text-sm">
            Message
            <textarea required name="message" rows={5} className={fieldClass} />
          </label>
          <button type="submit" className="btn-primary mt-6">
            Get Started →
          </button>
          {status ? <p className="mt-3 text-sm text-muted">{status}</p> : null}
        </form>
      </div>
    </section>
  );
}
