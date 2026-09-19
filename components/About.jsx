import { certification, education, expertise, profile } from "@/lib/content";

function Arrow() {
  return (
    <span className="grid h-9 w-9 place-items-center rounded-full bg-accent text-white">
      <svg viewBox="0 0 16 16" className="h-3.5 w-3.5" fill="none" aria-hidden="true">
        <path d="M4 12 12 4M7 4h5v5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
      </svg>
    </span>
  );
}

function Art({ type }) {
  if (type === "stack") {
    return (
      <div className="relative mx-auto h-32 w-full">
        <div className="absolute left-6 top-4 h-24 w-36 rounded-xl bg-white shadow-sm ring-1 ring-line" />
        <div className="absolute left-10 top-7 h-3 w-20 rounded bg-accent-soft" />
        <div className="absolute left-10 top-12 h-2 w-16 rounded bg-line" />
        <div className="absolute bottom-2 right-8 h-20 w-12 rounded-xl bg-white shadow-sm ring-1 ring-line" />
      </div>
    );
  }
  if (type === "health") {
    return (
      <div className="relative mx-auto h-32 w-full">
        <div className="absolute left-8 top-3 h-[7.2rem] w-[4.4rem] rounded-[1.3rem] bg-white shadow-sm ring-1 ring-line" />
        <div className="absolute left-[4.4rem] top-6 h-[6.4rem] w-[4.8rem] rounded-[1.3rem] bg-[#d9c7fb] shadow-sm" />
        <div className="absolute left-[5rem] top-10 h-2 w-10 rounded bg-white/80" />
      </div>
    );
  }
  if (type === "hr") {
    return (
      <div className="relative mx-auto h-32 w-full">
        <div className="absolute inset-x-8 top-6 h-20 rounded-2xl bg-white p-3 shadow-sm ring-1 ring-line">
          <div className="h-2 w-16 rounded bg-accent-soft" />
          <div className="mt-3 grid grid-cols-2 gap-2">
            <div className="h-8 rounded-lg bg-bg-2" />
            <div className="h-8 rounded-lg bg-bg-2" />
          </div>
        </div>
      </div>
    );
  }
  return (
    <div className="relative mx-auto h-32 w-full">
      <div className="absolute left-6 top-8 h-16 w-24 rounded-xl bg-white shadow-sm ring-1 ring-line" />
      <div className="absolute right-8 top-4 h-20 w-28 rounded-xl bg-[#dcc8fb] p-3 shadow-sm">
        <div className="h-2 w-16 rounded bg-white/80" />
        <div className="mt-3 h-8 rounded-lg bg-white/50" />
      </div>
    </div>
  );
}

export default function About() {
  return (
    <section id="about" className="mx-auto max-w-6xl px-5 py-14 sm:px-8">
      <p className="text-xs font-bold uppercase tracking-[0.22em] text-muted">What I build</p>
      <h2 className="mt-3 max-w-2xl text-[1.8rem] font-extrabold leading-[1.15] tracking-[-0.04em] sm:text-[2.2rem]">
        Full-stack products, platforms & business systems
      </h2>
      <p className="mt-4 max-w-3xl text-sm leading-7 text-muted">{profile.intro}</p>
      <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {expertise.map((item) => (
          <article key={item.title} className="soft-card flex h-full flex-col rounded-[1.7rem] p-5">
            <Art type={item.art} />
            <h3 className="mt-2 text-sm font-extrabold uppercase tracking-[0.12em]">{item.title}</h3>
            <p className="mt-2 flex-1 text-sm leading-6 text-muted">{item.body}</p>
            {item.href ? (
              <a href={item.href} className="mt-6 inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.12em] text-ink">
                <Arrow />
                {item.cta}
              </a>
            ) : (
              <p className="mt-6 text-[11px] font-bold uppercase tracking-[0.12em] text-muted">{item.note}</p>
            )}
          </article>
        ))}
      </div>

      <div className="mt-6 grid gap-3 sm:grid-cols-2">
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
          <p className="mt-1 text-sm text-muted">{certification.detail}</p>
          <p className="mt-1 text-sm text-muted">
            {certification.school} · {certification.dates}
          </p>
        </div>
      </div>
    </section>
  );
}
