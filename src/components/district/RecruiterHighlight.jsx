/**
 * RecruiterHighlight — competency cards for any district page.
 * Props:
 *   highlights — array of { id, title, summary }
 *   color      — tailwind color key for borders and accents
 */
const colorMap = {
  emerald: { label: "text-emerald-400", border: "border-emerald-500/20 hover:border-emerald-400/40" },
  amber:   { label: "text-amber-400",   border: "border-amber-500/20 hover:border-amber-400/40" },
  blue:    { label: "text-blue-400",    border: "border-blue-500/20 hover:border-blue-400/40" },
  violet:  { label: "text-violet-400",  border: "border-violet-500/20 hover:border-violet-400/40" },
  rose:    { label: "text-rose-400",    border: "border-rose-500/20 hover:border-rose-400/40" },
  sky:     { label: "text-sky-400",     border: "border-sky-500/20 hover:border-sky-400/40" },
  orange:  { label: "text-orange-400",  border: "border-orange-500/20 hover:border-orange-400/40" },
};

function RecruiterHighlight({ highlights = [], color = "emerald" }) {
  const c = colorMap[color] ?? colorMap.emerald;

  return (
    <section id="highlights" className="border-b border-white/10 py-16">
      <div className="mx-auto max-w-7xl px-6">
        <p className={`text-sm font-black uppercase tracking-[0.2em] ${c.label}`}>
          Core Competencies
        </p>

        <h2 className="mt-3 text-4xl font-black tracking-[-0.03em] text-white sm:text-5xl">
          Recruiter Highlights
        </h2>

        <p className="mt-4 max-w-2xl text-lg leading-8 text-slate-300">
          Key areas of expertise built through hands-on experience and
          continuous professional growth.
        </p>

        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {highlights.map((item) => (
            <div
              key={item.id}
              className={`rounded-2xl border bg-slate-950/60 p-6 backdrop-blur-md transition hover:-translate-y-1 ${c.border}`}
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
