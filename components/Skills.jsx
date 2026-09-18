import { skillGroups } from "@/lib/content";
import Reveal from "@/components/Reveal";

export default function Skills() {
  return (
    <section id="skills" className="mx-auto max-w-6xl px-5 py-16 sm:px-8">
      <Reveal>
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-muted">Skills</p>
        <h2 className="mt-3 max-w-xl text-[2rem] font-extrabold leading-[1.15] tracking-[-0.04em] sm:text-[2.6rem]">
          A practical stack from Figma to production
        </h2>
      </Reveal>
      <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {skillGroups.map((group) => (
          <article key={group.title} className="glass-card rounded-3xl p-6">
            <h3 className="font-bold text-accent">{group.title}</h3>
            <div className="mt-4 flex flex-wrap gap-2">
              {group.items.map((item) => (
                <span key={item} className="rounded-full bg-white/5 px-3 py-1 text-sm text-muted">
                  {item}
                </span>
              ))}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
