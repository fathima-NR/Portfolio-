import Image from "next/image";
import { profile } from "@/lib/content";
import HeroParticles from "@/components/HeroParticles";
import Stats from "@/components/Stats";

function DownloadIcon() {
  return (
    <svg viewBox="0 0 20 20" className="h-4 w-4" fill="none" aria-hidden="true">
      <path
        d="M10 3.5v8M6.5 8.5 10 12l3.5-3.5M4 16.5h12"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default function Hero() {
  return (
    <section id="top" className="relative overflow-hidden pb-6">
      <HeroParticles />
      <div className="pointer-events-none absolute -right-24 top-10 h-80 w-80 rounded-full bg-accent/10 blur-3xl" />
      <div className="pointer-events-none absolute left-[-8rem] top-40 h-64 w-64 rounded-full bg-accent-soft/40 blur-3xl" />

      <div className="relative mx-auto grid max-w-6xl items-center gap-10 px-5 pt-8 sm:px-8 lg:grid-cols-[1fr_auto] lg:gap-14 lg:pt-10">
        <div className="hero-copy max-w-3xl">
          <p className="text-[11px] font-bold uppercase tracking-[0.22em] text-accent">
            Full stack developer · IT specialist · Dubai
          </p>
          <h1 className="font-display mt-4 text-[2.2rem] font-extrabold leading-[1.08] tracking-[-0.045em] sm:text-[3.2rem] lg:text-[3.55rem]">
            Building web platforms that{" "}
            <span className="text-accent">solve real business problems.</span>
          </h1>
          <p className="mt-5 max-w-2xl text-[15px] leading-7 text-muted">
            Full Stack Developer with 3+ years of experience building production web applications,
            internal platforms, and telehealth solutions using React, Next.js, Node.js, MongoDB, and
            modern web technologies.
          </p>
          <p className="mt-4 text-sm font-semibold text-ink">
            Currently in Dubai · Immediate joining · Open to Full Stack Developer & IT roles
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-5">
            <a href="#work" className="btn-primary uppercase">
              View my work
              <span aria-hidden="true">→</span>
            </a>
            <a href={profile.resumeHref} download className="btn-ghost uppercase tracking-[0.08em]">
              Download resume
              <DownloadIcon />
            </a>
          </div>
        </div>

        <div className="hero-photo relative mx-auto w-[200px] sm:w-[240px] lg:mx-0 lg:w-[260px]">
          <div className="hero-orb -right-8 -top-6 h-40 w-40" />
          <div className="relative aspect-[4/5] overflow-hidden rounded-[1.6rem] shadow-[0_22px_50px_rgba(90,50,140,0.16)]">
            <Image
              src={profile.photo}
              alt="Portrait of Fathima NR"
              fill
              sizes="260px"
              preload
              className="object-cover object-[center_12%]"
            />
          </div>
        </div>
      </div>

      <div className="relative z-10 mt-12 sm:mt-14">
        <Stats />
      </div>
    </section>
  );
}

