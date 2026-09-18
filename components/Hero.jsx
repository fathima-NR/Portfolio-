import Image from "next/image";
import { profile } from "@/lib/content";
import { Crystal } from "@/components/Shapes";

function Stars() {
  return (
    <span className="flex gap-0.5 text-accent" aria-hidden="true">
      {Array.from({ length: 5 }).map((_, index) => (
        <svg key={index} viewBox="0 0 20 20" className="h-3 w-3" fill="currentColor">
          <path d="M10 1.6 12.4 7l6 .5-4.6 3.8 1.4 5.8L10 14.6 4.8 17.1l1.4-5.8L1.6 7.5l6-.5L10 1.6Z" />
        </svg>
      ))}
    </span>
  );
}

export default function Hero() {
  return (
    <section id="top" className="hero-beam relative overflow-hidden">
      <div className="hero-streak" />
      <div className="relative mx-auto grid max-w-6xl items-center gap-10 px-5 pb-16 pt-6 sm:px-8 lg:grid-cols-[1.08fr_0.92fr] lg:gap-14 lg:pb-20 lg:pt-8">
        <div>
          <h1 className="max-w-[20ch] text-[2.7rem] font-extrabold leading-[1.05] tracking-[-0.05em] sm:text-[3.55rem]">
            I create production software with vision and care
          </h1>
          <p className="mt-5 max-w-md text-[15px] leading-7 text-muted">
            Full stack developer in Dubai. I help companies ship telehealth, HR and client platforms —
            from the interface to the API, database and the IT around them.
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-5">
            <a href="#work" className="btn-primary">
              Get started now →
            </a>
            <a href="#about" className="btn-ghost">
              Learn more information →
            </a>
          </div>
          <div className="mt-8 flex items-center gap-3">
            <div className="flex -space-x-2">
              <span className="relative h-8 w-8 overflow-hidden rounded-full ring-2 ring-bg">
                <Image src={profile.photo} alt="" width={64} height={64} className="h-full w-full object-cover object-[center_12%]" />
              </span>
              <span className="grid h-8 w-8 place-items-center rounded-full bg-accent text-[10px] font-bold text-[#04150c] ring-2 ring-bg">
                FN
              </span>
              <span className="grid h-8 w-8 place-items-center rounded-full bg-[#143326] text-[9px] font-bold text-accent ring-2 ring-bg">
                DXB
              </span>
            </div>
            <div>
              <p className="text-xs font-medium">Available in Dubai</p>
              <div className="mt-0.5 flex items-center gap-2">
                <p className="text-[11px] text-muted">Immediate joining</p>
                <Stars />
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-2 grid-rows-[minmax(240px,1fr)_92px] gap-3">
          <article className="glass-card relative overflow-hidden rounded-[1.4rem] p-5">
            <Crystal className="pointer-events-none absolute -bottom-4 -right-3 h-32 w-32" />
            <div className="relative max-w-[10rem]">
              <p className="text-[2.4rem] font-extrabold leading-none tracking-tight">2</p>
              <p className="mt-2 text-sm font-medium leading-snug text-muted">Production platforms shipped</p>
            </div>
          </article>

          <article className="relative overflow-hidden rounded-[1.4rem] ring-1 ring-white/10">
            <Image
              src={profile.photo}
              alt="Portrait of Fathima NR"
              fill
              sizes="(max-width: 1024px) 45vw, 280px"
              preload
              className="object-cover object-[center_12%]"
            />
          </article>

          <article className="glass-card flex items-center rounded-[1.4rem] px-5">
            <p className="text-[15px] font-semibold">Immediate joining</p>
          </article>

          <article className="glass-card flex flex-col justify-center rounded-[1.4rem] px-5">
            <p className="text-2xl font-extrabold leading-none tracking-tight">3+</p>
            <p className="mt-1 text-sm text-muted">Years of building</p>
          </article>
        </div>
      </div>
    </section>
  );
}
