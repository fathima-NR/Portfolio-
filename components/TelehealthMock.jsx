export default function TelehealthMock() {
  return (
    <div className="overflow-hidden rounded-3xl border border-line bg-[#10231d] text-[#e8efe9] shadow-[0_24px_60px_rgba(16,35,29,0.28)]">
      <div className="flex items-center gap-2 border-b border-white/10 px-4 py-3">
        <span className="h-2.5 w-2.5 rounded-full bg-[#e07a5f]" />
        <span className="h-2.5 w-2.5 rounded-full bg-[#f2cc8f]" />
        <span className="h-2.5 w-2.5 rounded-full bg-[#81b29a]" />
        <p className="ml-3 text-[11px] tracking-wide text-white/60">uber-health · nurse portal</p>
      </div>
      <div className="grid grid-cols-[88px_1fr] sm:grid-cols-[120px_1fr]">
        <aside className="space-y-2 border-r border-white/10 p-3 text-[11px]">
          {["Agents", "Nurses", "Case workers", "Admin"].map((item, index) => (
            <div
              key={item}
              className={`rounded-lg px-2 py-2 ${index === 1 ? "bg-[#1b6b58] text-white" : "text-white/55"}`}
            >
              {item}
            </div>
          ))}
        </aside>
        <div className="space-y-3 p-4">
          <div className="flex items-center justify-between rounded-xl bg-[#c45c32] px-3 py-2 text-[11px]">
            <span>Live call request · patient waiting</span>
            <span className="rounded-full bg-black/20 px-2 py-0.5">Socket.io</span>
          </div>
          <div className="grid grid-cols-3 gap-2">
            {[
              ["AWV", "Eligible"],
              ["CHI", "In review"],
              ["Visit", "Scheduled"],
            ].map(([label, value]) => (
              <div key={label} className="rounded-xl bg-white/5 p-3">
                <p className="text-[10px] uppercase tracking-wider text-white/45">{label}</p>
                <p className="mt-1 text-sm">{value}</p>
              </div>
            ))}
          </div>
          <div className="rounded-xl bg-white/5 p-3">
            <p className="text-[10px] uppercase tracking-wider text-white/45">Today’s coordination</p>
            <ul className="mt-2 space-y-1.5 text-[11px] text-white/80">
              <li>Lead claimed · nurse assigned</li>
              <li>SDOH assessment queued</li>
              <li>Follow-up task for case worker</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
