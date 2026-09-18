const stats = [
  { value: "3+", label: "Years shipping product" },
  { value: "2", label: "Production platforms" },
  { value: "5+", label: "Live client websites" },
];

export default function Stats() {
  return (
    <section className="mx-auto grid max-w-6xl items-center gap-10 px-5 py-16 sm:px-8 lg:grid-cols-[0.8fr_1.2fr] lg:py-20">
      <h2 className="max-w-xs text-[2rem] font-extrabold leading-[1.15] tracking-[-0.04em] sm:text-[2.6rem]">
        Transforming ideas into impact
      </h2>
      <div className="grid grid-cols-3 gap-6">
        {stats.map((stat) => (
          <div key={stat.label}>
            <p className="text-5xl font-extrabold tracking-tight text-accent sm:text-6xl">{stat.value}</p>
            <p className="mt-2 text-sm text-muted">{stat.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
