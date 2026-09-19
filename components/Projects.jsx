import Image from "next/image";
import { clientProjects, extraClientWork, featuredProjects } from "@/lib/content";
import ProjectMock from "@/components/ProjectMock";

function ProjectCopy({ project }) {
  return (
    <div>
      <p className="text-xs font-semibold uppercase tracking-[0.18em] text-accent">
        {project.number} · {project.kicker}
      </p>
      <h3 className="mt-3 text-2xl font-semibold tracking-[-0.03em]">{project.title}</h3>
      <p className="mt-3 text-sm leading-7 text-muted">{project.description}</p>
      <ul className="mt-4 space-y-2 text-sm leading-6 text-ink/90">
        {project.points.map((point) => (
          <li key={point} className="flex gap-2">
            <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
            <span>{point}</span>
          </li>
        ))}
      </ul>
      <p className="mt-4 text-xs text-muted">{project.stack.join(" · ")}</p>
      {project.links ? (
        <div className="mt-4 flex flex-wrap gap-4 text-sm font-semibold text-accent">
          {project.links.map((link) => (
            <a key={link.href} href={link.href} target="_blank" rel="noreferrer">
              {link.label} →
            </a>
          ))}
        </div>
      ) : project.image ? (
        <p className="mt-4 text-xs font-semibold uppercase tracking-[0.12em] text-muted">
          Internal product · not a public link
        </p>
      ) : null}
    </div>
  );
}

function ProjectVisual({ project }) {
  if (project.images) {
    return (
      <div className="grid gap-4">
        {project.images.map((shot) => (
          <a
            key={shot.src}
            href={shot.href}
            target="_blank"
            rel="noreferrer"
            className="overflow-hidden rounded-2xl bg-white ring-1 ring-line transition hover:ring-accent/40"
          >
            <Image
              src={shot.src}
              alt={shot.alt}
              width={1600}
              height={900}
              className="h-auto w-full"
            />
          </a>
        ))}
      </div>
    );
  }

  if (project.image) {
    return (
      <div className="overflow-hidden rounded-2xl bg-bg ring-1 ring-line">
        <Image
          src={project.image}
          alt={project.imageAlt}
          width={900}
          height={620}
          className="h-auto w-full"
        />
      </div>
    );
  }

  return <ProjectMock type={project.mock} />;
}

export default function Projects() {
  return (
    <section id="work" className="mx-auto max-w-6xl px-5 py-14 sm:px-8">
      <p className="text-xs font-bold uppercase tracking-[0.22em] text-muted">Selected work</p>
      <h2 className="mt-3 max-w-xl text-[2rem] font-extrabold leading-[1.15] tracking-[-0.04em] sm:text-[2.6rem]">
        Work running in production
      </h2>

      <div className="mt-10 space-y-6">
        {featuredProjects.map((project) => (
          <article
            id={project.id}
            key={project.id}
            className={`glass-card grid scroll-mt-24 items-start gap-8 overflow-hidden rounded-[1.6rem] p-6 lg:p-8 ${
              project.images ? "lg:grid-cols-[0.9fr_1.1fr]" : "lg:grid-cols-2"
            }`}
          >
            <ProjectCopy project={project} />
            <ProjectVisual project={project} />
          </article>
        ))}
      </div>

      <div className="mt-12">
        <h3 className="text-xl font-extrabold">Client websites</h3>
        <div className="mt-5 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {clientProjects.map((project) => (
            <a
              key={project.url}
              href={project.url}
              target="_blank"
              rel="noreferrer"
              className="glass-card rounded-3xl p-5 transition hover:ring-2 hover:ring-accent/30"
            >
              <div className="flex items-start justify-between">
                <h4 className="font-bold">{project.title}</h4>
                <span className="text-accent">→</span>
              </div>
              <p className="mt-2 text-sm leading-6 text-muted">{project.summary}</p>
            </a>
          ))}
        </div>
        <p className="mt-5 text-sm text-muted">Also shipped: {extraClientWork.join(" · ")}.</p>
      </div>
    </section>
  );
}
