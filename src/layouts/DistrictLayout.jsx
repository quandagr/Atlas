import Navbar from "../components/layout/Navbar";

/**
 * DistrictLayout — shared wrapper for all district pages.
 * Props:
 *   children     — page content
 *   districtName — e.g. "Healthcare District"
 *   tagline      — e.g. "Quality. Care. Impact."
 */
function DistrictLayout({ children, districtName, tagline }) {
  return (
    <div className="min-h-screen text-slate-100">
      <Navbar />

      <main>{children}</main>

      <footer className="bg-slate-950 text-slate-300">
        <div className="mx-auto flex max-w-7xl flex-col gap-5 px-6 py-10 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <p className="font-black text-white">
              Atlas · {districtName}
            </p>
            {tagline && (
              <p className="mt-1 text-sm">{tagline}</p>
            )}
          </div>
          <a
            href="/"
            className="text-sm font-bold text-amber-400 transition hover:text-amber-300"
          >
            ← Back to Atlas
          </a>
        </div>
      </footer>
    </div>
  );
}

export default DistrictLayout;
