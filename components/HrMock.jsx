export default function HrMock() {
  return (
    <div className="overflow-hidden rounded-3xl border border-line bg-card shadow-[0_24px_60px_rgba(21,33,28,0.08)]">
      <div className="flex items-center gap-2 border-b border-line bg-ink px-4 py-3 text-paper">
        <span className="h-2.5 w-2.5 rounded-full bg-[#e07a5f]" />
        <span className="h-2.5 w-2.5 rounded-full bg-[#f2cc8f]" />
        <span className="h-2.5 w-2.5 rounded-full bg-[#81b29a]" />
        <p className="ml-3 text-[11px] tracking-wide text-paper/70">hr-portal · admin console</p>
      </div>
      <div className="grid grid-cols-3 gap-2 p-4">
        {[
          ["Present", "42"],
          ["On leave", "4"],
          ["Pending expenses", "7"],
        ].map(([label, value]) => (
          <div key={label} className="rounded-2xl bg-soft px-3 py-3">
            <p className="text-[10px] uppercase tracking-wider text-muted">{label}</p>
            <p className="font-serif mt-1 text-2xl">{value}</p>
          </div>
        ))}
      </div>
      <div className="px-4 pb-4">
        <div className="overflow-hidden rounded-2xl border border-line">
          <div className="grid grid-cols-[1fr_auto_auto] bg-ink/5 px-3 py-2 text-[10px] uppercase tracking-wider text-muted">
            <span>Employee</span>
            <span>Punch</span>
            <span>Shift</span>
          </div>
          {[
            ["Aisha Khan", "08:59", "Morning"],
            ["Omar Faris", "09:04", "Morning"],
            ["Leena Mathew", "13:02", "Split"],
          ].map((row) => (
            <div
              key={row[0]}
              className="grid grid-cols-[1fr_auto_auto] border-t border-line px-3 py-2 text-[12px]"
            >
              <span>{row[0]}</span>
              <span className="text-accent">{row[1]}</span>
              <span className="pl-4 text-muted">{row[2]}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
