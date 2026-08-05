import { healthcareStats } from "../../data/healthcare";

function DistrictStats() {
  return (
    <section className="border-b border-white/10 py-16">
      <div className="mx-auto max-w-7xl px-6">
        <p className="text-sm font-black uppercase tracking-[0.2em] text-emerald-400">
          By the Numbers
        </p>

        <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {healthcareStats.map((stat) => (
            <div
              key={stat.label}
              className="rounded-2xl border border-white/10 bg-slate-950/60 p-6 backdrop-blur-md"
            >
              <p className="text-4xl font-black text-emerald-400">{stat.value}</p>
              <p className="mt-2 text-sm font-bold text-slate-300">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default DistrictStats;
