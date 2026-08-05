/**
 * AtlasHub — the central "A" medallion displayed over the city map.
 * Represents the core of the Atlas ecosystem.
 */
function AtlasHub({ size = "md" }) {
  const sizeMap = {
    sm: "h-12 w-12 text-xl",
    md: "h-16 w-16 text-2xl",
    lg: "h-24 w-24 text-4xl",
  };

  const classes = sizeMap[size] ?? sizeMap.md;

  return (
    <div className="relative inline-flex items-center justify-center">
      {/* Outer glow ring */}
      <span
        className="absolute inline-flex h-full w-full animate-ping rounded-full bg-amber-400 opacity-20"
        aria-hidden="true"
      />
      {/* Hub medallion */}
      <div
        className={`relative grid place-items-center rounded-full bg-slate-900 font-black text-amber-400 shadow-2xl ring-2 ring-amber-400/40 ${classes}`}
        aria-label="Atlas hub"
      >
        A
      </div>
    </div>
  );
}

export default AtlasHub;
