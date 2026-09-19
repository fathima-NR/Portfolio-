import { stats } from "@/lib/content";

const icons = [
  <svg key="years" viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.8">
    <circle cx="12" cy="12" r="8" />
    <path d="M12 8v4l3 2" strokeLinecap="round" />
  </svg>,
  <svg key="platforms" viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.8">
    <rect x="3" y="7" width="18" height="12" rx="2" />
    <path d="M8 7V5h8v2" />
  </svg>,
  <svg key="sites" viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.8">
    <circle cx="12" cy="12" r="8.5" />
    <path d="M3.5 12h17M12 3.5c2.4 2.8 3.6 5.6 3.6 8.5S14.4 17.7 12 20.5C9.6 17.7 8.4 14.9 8.4 12S9.6 6.3 12 3.5Z" />
  </svg>,
  <svg key="visa" viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.8">
    <path d="M8 11.2 11 14l5-6" strokeLinecap="round" strokeLinejoin="round" />
    <circle cx="12" cy="12" r="8.5" />
  </svg>,
];

export default function Stats() {
  return (
    <div className="mx-auto max-w-6xl px-5 sm:px-8">
      <div className="glass-card grid overflow-hidden rounded-[1.8rem] sm:grid-cols-2 lg:grid-cols-4">
        {stats.map((stat, index) => (
          <article
            key={stat.label}
            className={`flex items-center gap-4 px-6 py-6 ${index > 0 ? "border-t border-line lg:border-t-0 lg:border-l" : ""} ${
              index % 2 === 1 ? "sm:border-l" : ""
            } ${index > 1 ? "sm:border-t lg:border-t-0" : "sm:border-t-0"}`}
          >
            <span className="icon-box shrink-0">{icons[index]}</span>
            <div>
              <p className="font-display text-3xl font-extrabold tracking-tight sm:text-4xl">{stat.value}</p>
              <p className="mt-1 text-[11px] font-bold uppercase tracking-[0.14em] text-muted">{stat.label}</p>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}
