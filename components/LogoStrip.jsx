const logos = [
  "React",
  "Next.js",
  "Node.js",
  "MongoDB",
  "Angular",
  ".NET",
  "SQL Server",
  "Tailwind",
  "WordPress",
  "Socket.io",
];

export default function LogoStrip() {
  const items = [...logos, ...logos];
  return (
    <section className="border-y border-white/5 py-7">
      <div className="marquee-fade overflow-hidden">
        <div className="marquee-track flex w-max gap-16 px-8 text-sm font-semibold uppercase tracking-[0.22em] text-muted/55">
          {items.map((item, index) => (
            <span key={`${item}-${index}`}>{item}</span>
          ))}
        </div>
      </div>
    </section>
  );
}
