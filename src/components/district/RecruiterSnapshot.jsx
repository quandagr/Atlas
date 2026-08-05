/**
 * RecruiterSnapshot — role, strengths, and availability for any district page.
 * Props:
 *   role         — job title string
 *   strengths    — array of strings
 *   availability — status string
 *   color        — tailwind color key
 */
const colorMap = {
  emerald: {
    label:  "text-emerald-400",
    badge:  "border-emerald-500/30 bg-emerald-500/10 text-emerald-300",
    dot:    "bg-emerald-400 shadow-[0_0_8px_2px_rgba(52,211,153,0.5)]",
  },
  amber: {
    label:  "text-amber-400",
    badge:  "border-amber-500/30 bg-amber-500/10 text-amber-300",
    dot:    "bg-amber-400 shadow-[0_0_8px_2px_rgba(245,158,11,0.5)]",
  },
  blue: {
    label:  "text-blue-400",
    badge:  "border-blue-500/30 bg-blue-500/10 text-blue-300",
    dot:    "bg-blue-400 shadow-[0_0_8px_2px_rgba(59,130,246,0.5)]",
  },
  violet: {
    label:  "text-violet-400",
    badge:  "border-violet-500/30 bg-violet-500/10 text-violet-300",
    dot:    "bg-violet-400 shadow-[0_0_8px_2px_rgba(139,92,246,0.5)]",
  },
  rose: {
    label:  "text-rose-400",
    badge:  "border-rose-500/30 bg-rose-500/10 text-rose-300",
    dot:    "bg-rose-400 shadow-[0_0_8px_2px_rgba(244,63,94,0.5)]",
  },
  sky: {
    label:  "text-sky-400",
    badge:  "border-sky-500/30 bg-sky-500/10 text-sky-300",
    dot:    "bg-sky-400 shadow-[0_0_8px_2px_rgba(14,165,233,0.5)]",
  },
  orange: {
    label:  "text-orange-400",
    badge:  "border-orange-500/30 bg-orange-500/10 text-orange-300",
    dot:    "bg-orange-400 shadow-[0_0_8px_2px_rgba(249,115,22,0.5)]",
  },
};

function RecruiterSnapshot({ role, strengths = [], availability, color = "emerald" }) {
  const c = colorMap[color] ?? colorMap.emerald;

  return (
    <section id="snapshot" className="border-b border-white/10 py-16">
      <div className="mx-auto max-w-7xl px-6">
        <p className={`text-sm font-black uppercase tracking-[0.2em] ${c.label}`}>
          Quick View
        </p>

        <h2 className="mt-3 text-4xl font-black tracking-[-0.03em] text-white sm:text-5xl">
          Recruiter Snapshot
        </h2>

        <div className="mt-10 max-w-2xl rounded-2xl border border-white/10 bg-slate-950/60 p-8 backdrop-blur-md">
          <p className={`text-xl font-black ${c.label}`}>{role}</p>

          <div className="mt-6">
            <p className="text-sm font-black uppercase tracking-widest text-slate-400">
              Core Strengths
            </p>
            <div className="mt-3 flex flex-wrap gap-2">
              {strengths.map((strength) => (
                <span
                  key={strength}
                  className={`rounded-lg border px-3 py-1.5 text-sm font-bold ${c.badge}`}
                >
                  {strength}
                </span>
              ))}
            </div>
          </div>

          {availability && (
            <div className="mt-6 flex items-center gap-3">
              <span className={`h-2.5 w-2.5 rounded-full ${c.dot}`} aria-hidden="true" />
              <p className="font-bold text-slate-200">{availability}</p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}

export default RecruiterSnapshot;
