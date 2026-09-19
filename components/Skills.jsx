import { processSteps, skillGroups, toolTiles } from "@/lib/content";
import ToolLogo from "@/components/ToolLogo";

export default function Skills() {
  return (
    <section id="skills" className="mx-auto max-w-6xl px-5 py-8 sm:px-8">
      <div className="grid gap-6 lg:grid-cols-2">
        <article className="glass-card rounded-[1.8rem] p-6 sm:p-8">
          <p className="text-xs font-bold uppercase tracking-[0.22em] text-muted">Technology stack</p>
          <div className="mt-6 grid grid-cols-3 gap-3 sm:grid-cols-4">
            {toolTiles.map((item) => (
              <div
                key={item}
                className="flex aspect-square flex-col items-center justify-center rounded-[1.2rem] bg-bg px-2 text-center ring-1 ring-white"
              >
                <span className="grid h-11 w-11 place-items-center">
                  <ToolLogo name={item} />
                </span>
                <span className="mt-2 text-[10px] font-bold uppercase tracking-[0.08em] text-muted">{item}</span>
              </div>
            ))}
          </div>
        </article>

        <article className="glass-card rounded-[1.8rem] p-6 sm:p-8">
          <p className="text-xs font-bold uppercase tracking-[0.22em] text-muted">From requirements to production</p>
          <ol className="mt-6 space-y-5">
            {processSteps.map((step) => (
              <li key={step.num} className="grid grid-cols-[auto_1fr] gap-4">
                <span className="font-display text-xl font-extrabold text-accent">{step.num}</span>
                <div>
                  <h3 className="text-sm font-extrabold uppercase tracking-[0.12em]">{step.title}</h3>
                  <p className="mt-1 text-sm leading-6 text-muted">{step.body}</p>
                </div>
              </li>
            ))}
          </ol>
        </article>
      </div>

      <div className="mt-6">
        <p className="text-xs font-bold uppercase tracking-[0.22em] text-muted">Technical skills</p>
        <h2 className="mt-3 max-w-xl text-[1.8rem] font-extrabold tracking-[-0.04em] sm:text-[2.2rem]">
          Frontend, backend, data, security and IT
        </h2>
        <div className="mt-6 grid gap-4 sm:grid-cols-2">
          {skillGroups.map((group) => (
            <article key={group.title} className="glass-card rounded-[1.5rem] p-5 sm:p-6">
              <h3 className="text-sm font-extrabold uppercase tracking-[0.12em] text-accent">{group.title}</h3>
              <div className="mt-3 flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <span
                    key={item}
                    className="rounded-full bg-bg px-3 py-1 text-xs font-medium text-ink ring-1 ring-white"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
