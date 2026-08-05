import { recruiterSnapshot } from "../../data/healthcare";

function RecruiterSnapshot() {
  return (
    <section id="snapshot" className="py-16">
      <div className="mx-auto max-w-7xl px-6">
        <p className="text-sm font-black uppercase tracking-[0.2em] text-emerald-400">
          Quick View
        </p>

        <h2 className="mt-3 text-4xl font-black tracking-[-0.03em] text-white sm:text-5xl">
          Recruiter Snapshot
        </h2>

        <div className="mt-10 max-w-2xl rounded-2xl border border-white/10 bg-slate-950/60 p-8 backdrop-blur-md">
          <p className="text-xl font-black text-emerald-400">
            {recruiterSnapshot.role}
          </p>

          <div className="mt-6">
            <p className="text-sm font-black uppercase tracking-widest text-slate-400">
              Core Strengths
            </p>
            <div className="mt-3 flex flex-wrap gap-2">
              {recruiterSnapshot.strengths.map((strength) => (
                <span
                  key={strength}
                  className="rounded-lg border border-emerald-500/30 bg-emerald-500/10 px-3 py-1.5 text-sm font-bold text-emerald-300"
                >
                  {strength}
                </span>
              ))}
            </div>
          </div>

          <div className="mt-6 flex items-center gap-3">
            <span className="h-2.5 w-2.5 rounded-full bg-emerald-400 shadow-[0_0_8px_2px_rgba(52,211,153,0.5)]" aria-hidden="true" />
            <p className="font-bold text-slate-200">{recruiterSnapshot.availability}</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default RecruiterSnapshot;
