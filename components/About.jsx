import { certification, education, facts, profile } from "@/lib/content";
import Reveal from "@/components/Reveal";
import { Torus } from "@/components/Shapes";

const services = [
  {
    title: "Full stack apps",
    body: "Next.js, React and Node.js platforms with auth, roles and real-time workflows.",
    icon: (
      <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="1.8">
        <rect x="7" y="3" width="10" height="18" rx="2" />
        <path d="M11 17h2" />
      </svg>
    ),
  },
  {
    title: "APIs & data",
    body: "REST APIs, MongoDB and SQL Server, designed for operations teams who use them daily.",
    icon: (
      <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="1.8">
        <path d="M8 12h8M7 8h10M9 16h6" />
        <rect x="4" y="5" width="16" height="14" rx="2" />
      </svg>
    ),
  },
  {
    title: "IT operations",
    body: "Device setup, Microsoft 365, network support and vendor coordination in Dubai.",
    icon: (
      <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="1.8">
        <path d="M12 3 4 7v5c0 5 3.5 8.5 8 9 4.5-.5 8-4 8-9V7l-8-4Z" />
      </svg>
    ),
  },
];

export default function About() {
  return (
    <section id="about" className="mx-auto max-w-6xl px-5 py-16 sm:px-8">
      <div className="grid gap-5 lg:grid-cols-[1.2fr_0.8fr]">
        <div>
          <Reveal>
            <h2 className="max-w-lg text-[2rem] font-extrabold leading-[1.15] tracking-[-0.04em] sm:text-[2.6rem]">
              Discover the stack I use to ship
            </h2>
            <p className="mt-4 max-w-xl text-[15px] leading-7 text-muted">{profile.summary}</p>
          </Reveal>
          <div className="mt-8 grid gap-4 sm:grid-cols-3">
            {services.map((item) => (
              <article key={item.title} className="glass-card rounded-[1.35rem] p-5">
                <span className="icon-box">{item.icon}</span>
                <h3 className="mt-5 text-[15px] font-semibold">{item.title}</h3>
                <p className="mt-2 text-sm leading-6 text-muted">{item.body}</p>
              </article>
            ))}
          </div>
        </div>

        <article className="glass-card relative flex min-h-[320px] flex-col justify-end overflow-hidden rounded-[1.5rem] p-7">
          <div className="pointer-events-none absolute -right-6 -top-8">
            <Torus />
          </div>
          <h3 className="relative max-w-[14rem] text-2xl font-extrabold leading-tight tracking-[-0.03em]">
            Immediate joining in Dubai
          </h3>
          <p className="relative mt-3 max-w-sm text-sm leading-6 text-muted">
            UAE employment visa. Open to a full stack or IT operations role.
          </p>
          <a href="#contact" className="btn-primary relative mt-6 w-fit">
            Get Started →
          </a>
        </article>
      </div>

      <div className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
        {facts.map((fact) => (
          <div key={fact.label} className="rounded-[1.2rem] border border-line/80 px-4 py-4">
            <p className="text-[11px] uppercase tracking-[0.16em] text-muted">{fact.label}</p>
            <p className="mt-1 text-sm font-semibold">{fact.value}</p>
          </div>
        ))}
      </div>

      <div className="mt-3 grid gap-3 sm:grid-cols-2">
        <div className="glass-card rounded-[1.35rem] p-5">
          <p className="text-[11px] uppercase tracking-[0.16em] text-muted">Education</p>
          <h3 className="mt-2 font-semibold">{education.degree}</h3>
          <p className="mt-1 text-sm text-muted">
            {education.school} · {education.dates} · {education.extra}
          </p>
        </div>
        <div className="glass-card rounded-[1.35rem] p-5">
          <p className="text-[11px] uppercase tracking-[0.16em] text-muted">Certification</p>
          <h3 className="mt-2 font-semibold">{certification.title}</h3>
          <p className="mt-1 text-sm text-muted">
            {certification.school} · {certification.dates}
          </p>
        </div>
      </div>
    </section>
  );
}
