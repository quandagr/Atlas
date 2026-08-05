import { healthcareMission } from "../../data/healthcare";

function Mission() {
  return (
    <section className="border-b border-white/10 py-16">
      <div className="mx-auto max-w-7xl px-6">
        <div className="max-w-3xl rounded-2xl border border-white/10 bg-slate-950/60 p-8 backdrop-blur-md">
          <p className="text-sm font-black uppercase tracking-[0.2em] text-emerald-400">
            District Mission
          </p>

          <blockquote className="mt-5">
            <p className="text-xl font-semibold leading-8 text-white sm:text-2xl">
              "{healthcareMission.headline}"
            </p>
            <p className="mt-4 leading-7 text-slate-300">
              {healthcareMission.summary}
            </p>
          </blockquote>
        </div>
      </div>
    </section>
  );
}

export default Mission;
