/**
 * DistrictStats — stat tiles row for any district page.
 * Props:
 *   stats — array of { label, value }
 *   color — tailwind color key for value text
 */
const colorMap = {
  emerald: "text-emerald-400",
  amber:   "text-amber-400",
  blue:    "text-blue-400",
  violet:  "text-violet-400",
  rose:    "text-rose-400",
  sky:     "text-sky-400",
  orange:  "text-orange-400",
};

function DistrictStats({ stats = [], color = "emerald" }) {
  const accent = colorMap[color] ?? colorMap.emerald;

  return (
    <section className="border-b border-white/10 py-16">
      <div className="mx-auto max-w-7xl px-6">
        <p className={`text-sm font-black uppercase tracking-[0.2em] ${accent}`}>
          By the Numbers
        </p>

        <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="rounded-2xl border border-white/10 bg-slate-950/60 p-6 backdrop-blur-md"
            >
              <p className={`text-4xl font-black ${accent}`}>{stat.value}</p>
              <p className="mt-2 text-sm font-bold text-slate-300">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default DistrictStats;
