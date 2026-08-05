/**
 * DistrictMission — mission statement card for any district page.
 * Props:
 *   headline — bold quote headline
 *   summary  — supporting paragraph
 *   color    — tailwind color key for the label accent
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

function DistrictMission({ headline, summary, color = "emerald" }) {
  const accent = colorMap[color] ?? colorMap.emerald;

  return (
    <section className="border-b border-white/10 py-16">
      <div className="mx-auto max-w-7xl px-6">
        <div className="max-w-3xl rounded-2xl border border-white/10 bg-slate-950/60 p-8 backdrop-blur-md">
          <p className={`text-sm font-black uppercase tracking-[0.2em] ${accent}`}>
            District Mission
          </p>

          <blockquote className="mt-5">
            <p className="text-xl font-semibold leading-8 text-white sm:text-2xl">
              "{headline}"
            </p>
            {summary && (
              <p className="mt-4 leading-7 text-slate-300">{summary}</p>
            )}
          </blockquote>
        </div>
      </div>
    </section>
  );
}

export default DistrictMission;
