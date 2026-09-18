function TelehealthMock() {
  return (
    <div className="overflow-hidden rounded-2xl bg-[#07140e] p-3 text-[11px] ring-1 ring-line">
      <div className="mb-3 flex items-center justify-between px-1 text-[10px] font-bold uppercase tracking-[0.14em] text-muted">
        <span>Agent portal</span>
        <span className="rounded-full bg-accent px-2 py-0.5 text-[#04150c]">Live</span>
      </div>
      <div className="grid grid-cols-[88px_1fr] overflow-hidden rounded-xl bg-[#0f2318]">
        <aside className="space-y-1 border-r border-white/5 p-3 text-muted">
          {["Leads", "Calls", "Nurses", "Admin"].map((item, index) => (
            <div
              key={item}
              className={`rounded-lg px-2 py-1.5 ${index === 1 ? "bg-accent font-bold text-[#04150c]" : ""}`}
            >
              {item}
            </div>
          ))}
        </aside>
        <div className="space-y-2 p-3">
          <div className="flex items-center justify-between rounded-lg bg-accent/15 px-3 py-2">
            <span>Incoming call request</span>
            <span className="text-accent">Now</span>
          </div>
          {["AWV eligibility · Medicare", "CHI follow-up assigned", "SDOH screening queued"].map((row) => (
            <div key={row} className="rounded-lg bg-white/5 px-3 py-2 text-muted">
              {row}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function HrMock() {
  return (
    <div className="rounded-2xl bg-[#07140e] p-4 text-[12px] ring-1 ring-line">
      <div className="mb-3 flex items-center justify-between">
        <span className="font-bold">Attendance · today</span>
        <span className="text-accent">42 on shift</span>
      </div>
      <div className="space-y-2">
        {[
          ["Aisha K.", "IN 08:59", "Nursing"],
          ["Rahul M.", "IN 09:04", "Call centre"],
          ["Noor S.", "Leave", "HR"],
        ].map(([name, status, dept]) => (
          <div key={name} className="grid grid-cols-[1fr_auto_auto] gap-3 rounded-lg bg-white/5 px-3 py-2">
            <span>{name}</span>
            <span className="text-accent">{status}</span>
            <span className="text-muted">{dept}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

function SitesMock() {
  return (
    <div className="grid gap-3 sm:grid-cols-2">
      {["medcare.org", "careconnex.com"].map((site) => (
        <div key={site} className="rounded-2xl bg-[#07140e] p-4 ring-1 ring-line">
          <div className="h-16 rounded-xl bg-accent/15" />
          <p className="mt-3 text-xs font-semibold text-muted">{site}</p>
        </div>
      ))}
    </div>
  );
}

export default function ProjectMock({ type }) {
  if (type === "telehealth") return <TelehealthMock />;
  if (type === "hr") return <HrMock />;
  return <SitesMock />;
}
