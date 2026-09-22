import Image from "next/image";
import { brainTumorProject } from "@/lib/content";

function Section({ title, children }) {
  return (
    <section className="glass-card rounded-[1.6rem] p-6 sm:p-8">
      <h2 className="font-display text-xl font-extrabold tracking-[-0.03em] sm:text-2xl">{title}</h2>
      <div className="mt-4 space-y-3 text-sm leading-7 text-muted">{children}</div>
    </section>
  );
}

function WorkflowDiagram({ steps }) {
  return (
    <ol className="mt-6 flex flex-col items-stretch gap-0 sm:mx-auto sm:max-w-md">
      {steps.map((step, index) => (
        <li key={step} className="flex flex-col items-center">
          <div className="w-full rounded-2xl border border-line bg-white px-4 py-3 text-center text-sm font-semibold text-ink shadow-[0_8px_24px_rgba(111,77,232,0.06)]">
            {step}
          </div>
          {index < steps.length - 1 ? (
            <span className="my-1 text-accent" aria-hidden="true">
              ↓
            </span>
          ) : null}
        </li>
      ))}
    </ol>
  );
}

export default function BrainTumorProject() {
  const project = brainTumorProject;

  return (
    <article className="mx-auto max-w-6xl px-5 py-10 sm:px-8 sm:py-14">
      <a
        href="/#work"
        className="text-xs font-bold uppercase tracking-[0.16em] text-accent transition hover:text-ink"
      >
        ← Back to work
      </a>

      <header className="mt-6 max-w-3xl">
        <p className="text-xs font-bold uppercase tracking-[0.22em] text-muted">{project.kicker}</p>
        <h1 className="mt-3 font-display text-[2rem] font-extrabold leading-[1.15] tracking-[-0.04em] sm:text-[2.75rem]">
          {project.title}
        </h1>
        <p className="mt-4 text-sm leading-7 text-muted sm:text-base">{project.overview}</p>
        <div className="mt-5 flex flex-wrap gap-2 text-[11px] font-bold uppercase tracking-[0.12em] text-muted">
          <span className="rounded-full bg-white/80 px-3 py-1.5 ring-1 ring-line">{project.school}</span>
          <span className="rounded-full bg-white/80 px-3 py-1.5 ring-1 ring-line">{project.projectType}</span>
          <span className="rounded-full bg-white/80 px-3 py-1.5 ring-1 ring-line">{project.domain}</span>
        </div>
      </header>

      <div className="mt-8 flex flex-wrap gap-2">
        {project.techniques.map((item) => (
          <span
            key={item}
            className="rounded-full bg-accent/10 px-3 py-1.5 text-xs font-semibold text-accent ring-1 ring-accent/15"
          >
            {item}
          </span>
        ))}
      </div>

      <div className="mt-10 grid gap-4">
        <Section title="Project Overview">
          <p>{project.overview}</p>
        </Section>

        <div className="grid gap-4 lg:grid-cols-2">
          <Section title="Problem Statement">
            <p>{project.problem}</p>
          </Section>
          <Section title="Solution">
            <p>{project.solution}</p>
          </Section>
        </div>

        <Section title="Technical Workflow">
          <WorkflowDiagram steps={project.workflow} />
          <div className="mt-8 grid gap-5 sm:grid-cols-2">
            {project.technicalWorkflow.map((block) => (
              <div key={block.title} className="rounded-2xl bg-bg/70 p-4 ring-1 ring-line">
                <h3 className="text-sm font-bold text-ink">{block.title}</h3>
                <ul className="mt-3 space-y-2">
                  {block.items.map((item) => (
                    <li key={item} className="flex gap-2 text-sm leading-6 text-muted">
                      <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </Section>

        <div className="grid gap-4 lg:grid-cols-2">
          <Section title="Image Processing Pipeline">
            <ol className="space-y-2">
              {project.imagePipeline.map((step, index) => (
                <li key={step} className="flex gap-3 text-sm leading-6 text-muted">
                  <span className="font-semibold text-accent">{String(index + 1).padStart(2, "0")}</span>
                  <span>{step}</span>
                </li>
              ))}
            </ol>
          </Section>
          <Section title="Machine Learning">
            <ul className="space-y-2">
              {project.machineLearning.map((item) => (
                <li key={item} className="flex gap-2">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </Section>
        </div>

        <Section title="Training & Testing">
          <ul className="space-y-2">
            {project.trainingTesting.map((item) => (
              <li key={item} className="flex gap-2">
                <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </Section>

        <Section title="Key Techniques">
          <div className="flex flex-wrap gap-2">
            {project.techniques.map((item) => (
              <span
                key={item}
                className="rounded-full bg-white px-3 py-1.5 text-xs font-semibold text-ink ring-1 ring-line"
              >
                {item}
              </span>
            ))}
          </div>
        </Section>

        <Section title="Project Gallery">
          <div className="grid gap-5 sm:grid-cols-2">
            {project.gallery.map((shot) => (
              <figure key={shot.src} className="overflow-hidden rounded-2xl bg-white ring-1 ring-line">
                <Image
                  src={shot.src}
                  alt={shot.alt}
                  width={1600}
                  height={900}
                  className="h-auto w-full"
                />
                <figcaption className="border-t border-line px-4 py-3 text-xs font-semibold uppercase tracking-[0.12em] text-muted">
                  {shot.caption}
                </figcaption>
              </figure>
            ))}
          </div>
        </Section>

        <div className="grid gap-4 lg:grid-cols-2">
          <Section title="My Role">
            <p>{project.role}</p>
          </Section>
          <Section title="What I Learned">
            <ul className="space-y-2">
              {project.learned.map((item) => (
                <li key={item} className="flex gap-2">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </Section>
        </div>
      </div>
    </article>
  );
}
