import { clientProjects, extraClientWork, featuredProjects } from "@/lib/content";
import HrMock from "./HrMock";
import TelehealthMock from "./TelehealthMock";

function ExternalIcon() {
  return (
    <svg viewBox="0 0 16 16" className="h-3.5 w-3.5" fill="none" aria-hidden="true">
      <path
        d="M4 12 12 4M7 4h5v5"
        stroke="currentColor"
        strokeWidth="1.4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default function Work() {
  return (
    <section id="work" className="border-y border-line bg-card/40">
      <div className="mx-auto max-w-6xl px-5 py-20 sm:px-8">
        <div>
          <p className="text-xs uppercase tracking-[0.22em] text-accent">Selected work</p>
          <h2 className="font-serif mt-3 max-w-2xl text-4xl leading-tight sm:text-5xl">
            Platforms shipped in production, plus client sites still live on the web.
          </h2>
        </div>

        <div className="mt-14 space-y-10">
          {featuredProjects.map((project, index) => (
            <article key={project.id} className="overflow-hidden rounded-[2rem] border border-line bg-card">
                <div className={`grid gap-8 p-6 sm:p-8 ${project.mock ? "lg:grid-cols-2" : ""}`}>
                  {project.mock === "telehealth" ? <TelehealthMock /> : null}
                  {project.mock === "hr" ? (
                    <div className={index % 2 === 1 ? "lg:order-2" : ""}>
                      <HrMock />
                    </div>
                  ) : null}
                  <div className={project.mock === "hr" ? "lg:order-1" : ""}>
                    <p className="text-xs uppercase tracking-[0.2em] text-muted">
                      {project.number} · {project.kicker}
                    </p>
                    <h3 className="font-serif mt-3 text-3xl">{project.title}</h3>
                    <p className="mt-4 text-sm leading-7 text-muted">{project.summary}</p>
                    <ul className="mt-5 space-y-3 text-sm leading-6">
                      {project.highlights.map((item) => (
                        <li key={item} className="flex gap-3">
                          <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                    <div className="mt-6 flex flex-wrap gap-2">
                      {project.stack.map((item) => (
                        <span key={item} className="rounded-full bg-soft px-3 py-1 text-xs text-ink/80">
                          {item}
                        </span>
                      ))}
                    </div>
                    {project.links ? (
                      <div className="mt-6 flex flex-wrap gap-3">
                        {project.links.map((link) => (
                          <a
                            key={link.href}
                            href={link.href}
                            target="_blank"
                            rel="noreferrer"
                            className="inline-flex items-center gap-2 rounded-full border border-line px-4 py-2 text-sm transition hover:border-accent hover:text-accent"
                          >
                            {link.label}
                            <ExternalIcon />
                          </a>
                        ))}
                      </div>
                    ) : null}
                  </div>
                </div>
              </article>
          ))}
        </div>

        <div className="mt-16">
          <p className="text-xs uppercase tracking-[0.22em] text-muted">Client websites · Techcybe</p>
          <h3 className="font-serif mt-3 text-3xl">Live sites for UAE businesses</h3>
        </div>

        <div className="mt-8 grid gap-4 md:grid-cols-2">
          {clientProjects.map((project) => (
            <a
              key={project.url}
                href={project.url}
                target="_blank"
                rel="noreferrer"
                className="group flex h-full flex-col rounded-3xl border border-line bg-card p-6 transition hover:border-accent"
              >
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <h4 className="text-lg">{project.title}</h4>
                    <p className="mt-1 text-xs text-muted">{project.host}</p>
                  </div>
                  <span className="grid h-8 w-8 place-items-center rounded-full bg-soft text-ink transition group-hover:bg-accent group-hover:text-paper">
                    <ExternalIcon />
                  </span>
                </div>
                <p className="mt-4 flex-1 text-sm leading-6 text-muted">{project.description}</p>
                <div className="mt-5 flex flex-wrap gap-2">
                  {project.stack.map((item) => (
                    <span key={item} className="text-xs text-ink/60">
                      {item}
                    </span>
                  ))}
                </div>
              </a>
          ))}
        </div>

        <div className="mt-8 rounded-3xl border border-dashed border-line px-6 py-5 text-sm text-muted">
          Also shipped at Techcybe: {extraClientWork.join(" · ")}.
        </div>
      </div>
    </section>
  );
}
