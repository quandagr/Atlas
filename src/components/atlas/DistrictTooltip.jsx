import { useState } from "react";

/**
 * DistrictTooltip — shows a tooltip on hover with the district summary.
 * Usage: <DistrictTooltip label="Healthcare District" summary="..." />
 */
function DistrictTooltip({ label, summary, children }) {
  const [visible, setVisible] = useState(false);

  return (
    <div
      className="relative inline-flex"
      onMouseEnter={() => setVisible(true)}
      onMouseLeave={() => setVisible(false)}
      onFocusCapture={() => setVisible(true)}
      onBlurCapture={() => setVisible(false)}
    >
      {children}

      {visible && (
        <div
          role="tooltip"
          className="absolute bottom-full left-1/2 z-50 mb-3 w-56 -translate-x-1/2 rounded-2xl border border-white/10 bg-slate-900 px-4 py-3 text-sm text-white shadow-2xl"
        >
          <p className="font-black text-amber-400">{label}</p>
          <p className="mt-1 leading-6 text-slate-300">{summary}</p>
          {/* Arrow */}
          <span className="absolute left-1/2 top-full -translate-x-1/2 border-4 border-transparent border-t-slate-900" />
        </div>
      )}
    </div>
  );
}

export default DistrictTooltip;
