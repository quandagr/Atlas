/**
 * DistrictGlow — animated pulse ring behind a district marker.
 * Usage: wrap a marker with this to add a colored glow effect.
 */
function DistrictGlow({ color = "amber", children }) {
  const colorMap = {
    emerald: "shadow-emerald-500/40",
    amber:   "shadow-amber-500/40",
    blue:    "shadow-blue-500/40",
    violet:  "shadow-violet-500/40",
    rose:    "shadow-rose-500/40",
    sky:     "shadow-sky-500/40",
    orange:  "shadow-orange-500/40",
  };

  const glow = colorMap[color] ?? colorMap.amber;

  return (
    <div className={`relative inline-flex rounded-xl shadow-lg ${glow}`}>
      {/* Pulse ring */}
      <span
        className={`absolute inset-0 animate-ping rounded-xl opacity-20 ${glow}`}
        aria-hidden="true"
      />
      {children}
    </div>
  );
}

export default DistrictGlow;
