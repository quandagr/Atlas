import { recruiterHighlights } from "../../data/healthcare";

function RecruiterHighlight() {
  return (
    <section id="highlights" className="border-b border-white/10 py-16">
      <div className="mx-auto max-w-7xl px-6">
        <p className="text-sm font-black uppercase tracking-[0.2em] text-emerald-400">
          Core Competencies
        </p>

        <h2 className="mt-3 text-4xl font-black tracking-[-0.03em] text-white sm:text-5xl">
          Recruiter Highlights
        </h2>

        <p className="mt-4 max-w-2xl text-lg leading-8 text-slate-300">
          Key areas of expertise built through hands-on experience across
          healthcare operations and leadership.
        </p>

        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {recruiterHighlights.map((item) => (
            <div
              key={item.id}
              className="rounded-2xl border border-emerald-500/20 bg-slate-950/60 p-6 backdrop-blur-md transition hover:-translate-y-1 hover:border-emerald-400/40"
            >
              <h3 className="text-lg font-black text-white">{item.title}</h3>
              <p className="mt-3 leading-7 text-slate-300">{item.summary}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default RecruiterHighlight;
