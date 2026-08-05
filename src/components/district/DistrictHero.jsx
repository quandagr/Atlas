/**
 * DistrictHero — reusable hero for every district page.
 * Props:
 *   label       — eyebrow label e.g. "Healthcare District"
 *   headline    — main h1 text
 *   accent      — highlighted word/phrase in headline
 *   description — paragraph below headline
 *   color       — tailwind color key: emerald | amber | blue | violet | rose | sky | orange
 *   primaryHref — "View Experience" button link
 *   secondaryHref — "Recruiter Snapshot" button link
 */
const colorMap = {
  emerald: { text: "text-emerald-400", btn: "bg-emerald-500 hover:bg-emerald-400" },
  amber:   { text: "text-amber-400",   btn: "bg-amber-500 hover:bg-amber-400" },
  blue:    { text: "text-blue-400",    btn: "bg-blue-500 hover:bg-blue-400" },
  violet:  { text: "text-violet-400",  btn: "bg-violet-500 hover:bg-violet-400" },
  rose:    { text: "text-rose-400",    btn: "bg-rose-500 hover:bg-rose-400" },
  sky:     { text: "text-sky-400",     btn: "bg-sky-500 hover:bg-sky-400" },
  orange:  { text: "text-orange-400",  btn: "bg-orange-500 hover:bg-orange-400" },
};

function DistrictHero({
  label,
  headline,
  accent,
  description,
  color = "emerald",
  primaryHref = "#highlights",
  secondaryHref = "#snapshot",
}) {
  const c = colorMap[color] ?? colorMap.emerald;

  return (
    <section className="border-b border-white/10 py-20">
      <div className="mx-auto max-w-7xl px-6">
        <p className={`text-sm font-black uppercase tracking-[0.22em] ${c.text}`}>
          {label}
        </p>

        <h1 className="mt-4 max-w-4xl text-5xl font-black leading-[0.95] tracking-[-0.04em] text-white sm:text-6xl lg:text-7xl">
          {headline}{" "}
          {accent && <span className={c.text}>{accent}</span>}
        </h1>

        <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-300">
          {description}
        </p>

        <div className="mt-8 flex flex-wrap gap-4">
          <a
            href={primaryHref}
            className={`flex items-center gap-2 rounded-xl px-6 py-3 font-bold text-white transition hover:-translate-y-0.5 ${c.btn}`}
          >
            View Experience <span aria-hidden="true">→</span>
          </a>
          <a
            href={secondaryHref}
            className="flex items-center gap-2 rounded-xl border border-white/20 bg-white/5 px-6 py-3 font-bold text-white transition hover:-translate-y-0.5 hover:bg-white/10"
          >
            Recruiter Snapshot
          </a>
        </div>
      </div>
    </section>
  );
}

export default DistrictHero;
