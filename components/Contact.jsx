"use client";

import { useState } from "react";
import { profile } from "@/lib/content";

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
    "mt-2 w-full rounded-xl border border-line bg-white px-3 py-3 outline-none placeholder:text-muted/70 focus:border-accent";

  return (
    <section id="contact" className="mx-auto max-w-6xl px-5 py-14 sm:px-8">
      <div className="glass-card grid gap-10 overflow-hidden rounded-[1.8rem] p-6 lg:grid-cols-[0.9fr_1.1fr] lg:p-10">
        <div>
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-accent">Contact</p>
          <h2 className="mt-3 text-[2.2rem] font-extrabold leading-[1.1] tracking-[-0.04em] sm:text-[3rem]">
            Let’s build something useful.
          </h2>
          <p className="mt-3 text-sm font-semibold text-ink">
            Open to Full Stack Developer & IT Roles in Dubai.
          </p>
          <p className="mt-4 text-sm leading-7 text-muted">
            I’m currently based in Dubai and available for immediate joining. I’m open to Full Stack
            Developer and IT roles, and I’d be happy to discuss your team, product, or technical
            requirements.
          </p>
          <div className="mt-6 space-y-4 text-sm">
            <div>
              <p className="text-[11px] font-bold uppercase tracking-[0.16em] text-muted">Email</p>
              <a className="mt-1 block hover:text-accent" href={`mailto:${profile.email}`}>
                {profile.email}
              </a>
            </div>
            <div>
              <p className="text-[11px] font-bold uppercase tracking-[0.16em] text-muted">Phone</p>
              <a className="mt-1 block hover:text-accent" href={profile.phoneHref}>
                {profile.phone}
              </a>
            </div>
            <div>
              <p className="text-[11px] font-bold uppercase tracking-[0.16em] text-muted">LinkedIn</p>
              <a
                className="mt-1 inline-flex items-center gap-1 font-semibold hover:text-accent"
                href={profile.linkedin}
                target="_blank"
                rel="noreferrer"
              >
                LinkedIn <span aria-hidden="true">→</span>
              </a>
            </div>
          </div>
        </div>
        <form onSubmit={handleSubmit}>
          <div className="grid gap-4 sm:grid-cols-2">
            <label className="block text-sm">
              Name
              <input required name="name" placeholder="Your name" className={fieldClass} />
            </label>
            <label className="block text-sm">
              Email
              <input
                required
                type="email"
                name="email"
                placeholder="Your email"
                className={fieldClass}
              />
            </label>
          </div>
          <label className="mt-4 block text-sm">
            Message
            <textarea
              required
              name="message"
              rows={5}
              placeholder="Tell me about the role or project..."
              className={fieldClass}
            />
          </label>
          <button type="submit" className="btn-primary mt-6 uppercase">
            Send message
            <span aria-hidden="true">→</span>
          </button>
          {status ? <p className="mt-3 text-sm text-muted">{status}</p> : null}
        </form>
      </div>
    </section>
  );
}
