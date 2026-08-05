/**
 * DistrictMarker — a styled pill/badge overlaid on the atlas map.
 * Props:
 *   title    — display name
 *   icon     — React component (e.g. from heroicons)
 *   href     — destination link
 *   color    — emerald | amber | blue | violet | rose | sky | orange
 *   position — Tailwind absolute position classes e.g. "left-[4%] top-[27%]"
 */
function DistrictMarker({ title, icon: Icon, href, color = "amber", position }) {
  const colorMap = {
    emerald: "bg-emerald-500/80 text-white border-emerald-400 hover:bg-emerald-500",
    amber:   "bg-amber-500/80 text-white border-amber-400 hover:bg-amber-500",
    blue:    "bg-blue-500/80 text-white border-blue-400 hover:bg-blue-500",
    violet:  "bg-violet-500/80 text-white border-violet-400 hover:bg-violet-500",
    rose:    "bg-rose-500/80 text-white border-rose-400 hover:bg-rose-500",
    sky:     "bg-sky-500/80 text-white border-sky-400 hover:bg-sky-500",
    orange:  "bg-orange-500/80 text-white border-orange-400 hover:bg-orange-500",
  };

  const classes = colorMap[color] ?? colorMap.amber;
  const positionClass = position ? `absolute ${position}` : "";

  return (
    <a
      href={href}
      className={`inline-flex items-center gap-1.5 rounded-xl border px-3 py-1.5 text-xs font-black backdrop-blur-sm shadow-lg transition hover:-translate-y-0.5 hover:shadow-xl ${classes} ${positionClass}`}
    >
      {Icon && <Icon className="h-3.5 w-3.5" aria-hidden="true" />}
      {title}
    </a>
  );
}

export default DistrictMarker;
