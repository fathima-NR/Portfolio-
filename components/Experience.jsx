import { experience } from "@/lib/content";
import Reveal from "@/components/Reveal";

export default function Experience() {
  return (
    <section id="experience" className="mx-auto max-w-6xl px-5 py-16 sm:px-8">
      <Reveal>
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-muted">Experience</p>
        <h2 className="mt-3 max-w-xl text-[2rem] font-extrabold leading-[1.15] tracking-[-0.04em] sm:text-[2.6rem]">
          Three years shipping interfaces, APIs and operations
        </h2>
      </Reveal>
      <div className="mt-10 space-y-4">
        {experience.map((job) => (
          <article key={job.company} className="glass-card grid gap-5 rounded-3xl p-6 lg:grid-cols-[200px_1fr] lg:p-8">
            <div>
              <p className="text-sm text-muted">{job.dates}</p>
              {job.current ? (
                <p className="mt-3 inline-flex rounded-full bg-accent px-3 py-1 text-xs font-bold text-[#04150c]">
                  Current
                </p>
              ) : null}
            </div>
            <div>
              <h3 className="text-xl font-semibold tracking-[-0.02em]">{job.role}</h3>
              <p className="mt-1 text-sm text-muted">
                {job.company} · {job.detail}
              </p>
              <ul className="mt-4 space-y-2 text-sm leading-7 text-muted">
                {job.bullets.map((bullet) => (
                  <li key={bullet}>{bullet}</li>
                ))}
              </ul>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
