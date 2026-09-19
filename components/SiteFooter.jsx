import { profile } from "@/lib/content";

export default function SiteFooter() {
  return (
    <footer className="border-t border-line/70">
      <div className="mx-auto flex max-w-6xl flex-col gap-3 px-5 py-8 text-sm text-muted sm:flex-row sm:items-center sm:justify-between sm:px-8">
        <p className="font-display text-base font-extrabold text-ink">Fathima NR</p>
        <p>© {new Date().getFullYear()} {profile.name}</p>
        <div className="flex gap-5">
          <a href={`mailto:${profile.email}`} className="hover:text-accent">
            Email
          </a>
          <a href={profile.linkedin} target="_blank" rel="noreferrer" className="hover:text-accent">
            LinkedIn
          </a>
          <a href={profile.resumeHref} download className="hover:text-accent">
            Resume
          </a>
        </div>
      </div>
    </footer>
  );
}
