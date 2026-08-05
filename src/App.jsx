import Navbar from "./components/layout/Navbar";
import atlasDistricts from "./assets/atlas-districts.png";
import { districts } from "./data/districts";
import DistrictMarker from "./components/districts/DistrictMarker";

const engineeringStatus = [
  { label: "Architecture", sub: "Foundation complete" },
  { label: "Blueprint", sub: "Design system ready" },
  { label: "React environment", sub: "Development ready" },
  { label: "Security audit", sub: "No vulnerabilities" },
  { label: "Application shell", sub: "UI components active" },
];

function App() {
  return (
    <div className="min-h-screen text-slate-900">
      <Navbar />

      <main>
        {/* ── Hero ── */}
        <section className="border-b border-slate-200/40 bg-transparent">
          <div className="mx-auto max-w-7xl px-6 py-14">
            <div className="grid items-start gap-10 lg:grid-cols-[1.35fr_0.65fr]">

              {/* Left — text + city image */}
              <div>
                <p className="atlas-slide-right mb-5 text-sm font-black uppercase tracking-[0.22em] text-amber-600">
                  A living career ecosystem
                </p>

                <h1 className="max-w-4xl text-5xl font-black leading-[0.95] tracking-[-0.05em] text-slate-900 sm:text-6xl lg:text-8xl">
                  Welcome to{" "}
                  <span className="atlas-title-animation inline-block">Atlas.</span>
                </h1>

                <p className="mt-7 max-w-xl text-lg leading-8 text-slate-600">
                  Building the future through Healthcare, Technology, Leadership, and Innovation.
                </p>

                <div className="mt-9 flex flex-wrap gap-4">
                  <a
                    href="#districts"
                    className="flex items-center gap-2 rounded-xl bg-slate-900 px-6 py-3 font-bold text-white hover:-translate-y-0.5 hover:bg-slate-800"
                  >
                    Explore Atlas <span aria-hidden="true">→</span>
                  </a>

                  <a
                    href="#status"
                    className="flex items-center gap-2 rounded-xl border border-slate-300 bg-white px-6 py-3 font-bold text-slate-800 hover:-translate-y-0.5 hover:border-slate-400"
                  >
                    View My Journey <span aria-hidden="true">→</span>
                  </a>
                </div>

                <div className="mt-10 max-w-3xl rounded-2xl border border-white/20 bg-slate-950/70 p-7 text-white shadow-2xl backdrop-blur-md">
                  <p className="text-sm font-black uppercase tracking-[0.22em] text-amber-400">Atlas Mission</p>
                  <blockquote className="mt-5">
                    <p className="text-lg font-semibold leading-8 text-slate-100 sm:text-xl">
                      To connect healthcare, technology, education, leadership, and innovation
                      into one living career ecosystem—built through continuous learning,
                      purposeful growth, and the courage to embrace every new challenge.
                    </p>
                    <div className="mt-6 space-y-2 text-base font-bold text-slate-200 sm:text-lg">
                      <p>Every district tells a story.</p>
                      <p>Every milestone has a purpose.</p>
                      <p>Every journey continues.</p>
                    </div>
                    <footer className="mt-6 text-right text-base font-bold italic text-amber-400">— Quanda Grant</footer>
                  </blockquote>
                </div>
              </div>

              {/* Right — engineering status card */}
              <aside
                id="status"
                className="rounded-3xl border border-white/10 bg-slate-900 p-8 text-white shadow-2xl"
              >
                <div className="flex items-center justify-between">
                  <p className="text-sm font-black uppercase tracking-[0.18em] text-amber-400">
                    Engineering Status
                  </p>
                  <span className="h-2.5 w-2.5 rounded-full bg-emerald-400 shadow-[0_0_8px_2px_rgba(52,211,153,0.6)]" aria-hidden="true" />
                </div>

                <div className="mt-7 space-y-5">
                  {engineeringStatus.map(({ label, sub }) => (
                    <div
                      key={label}
                      className="flex items-center justify-between gap-4 border-b border-white/10 pb-4"
                    >
                      <div>
                        <p className="font-bold text-white">{label}</p>
                        <p className="text-xs text-slate-400">{sub}</p>
                      </div>
                      <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-emerald-500/20 text-emerald-400">
                        ✓
                      </span>
                    </div>
                  ))}
                </div>

                {/* Sprint progress */}
                <div className="mt-8">
                  <div className="flex items-center justify-between text-sm">
                    <span className="font-black uppercase tracking-widest text-slate-300">
                      Sprint 1 Progress
                    </span>
                    <span className="font-black text-white">100%</span>
                  </div>
                  <div className="mt-3 h-2.5 w-full overflow-hidden rounded-full bg-white/10">
                    <div className="h-full w-full rounded-full bg-emerald-400" />
                  </div>
                </div>
              </aside>
            </div>
          </div>
        </section>

        {/* ── Districts map overlay ── */}
        <div id="districts" className="mx-auto max-w-7xl px-6 py-10">
          <div className="relative">
            <img
              src={atlasDistricts}
              alt="Atlas Districts"
              className="w-full rounded-3xl"
            />
            {districts.map((district) => (
              <DistrictMarker
                key={district.id}
                title={district.name}
                icon={district.icon}
                href={district.href}
                position={district.position}
                accent={district.accent}
              />
            ))}
          </div>
        </div>

        {/* ── District directory ── */}
        <section className="bg-slate-950 px-6 py-20 text-white">
          <div className="mx-auto max-w-7xl">
            <div className="max-w-3xl">
              <p className="text-sm font-black uppercase tracking-[0.2em] text-amber-400">
                District Directory
              </p>

              <h2 className="mt-4 text-4xl font-black tracking-[-0.04em] sm:text-5xl">
                Continue exploring Atlas
              </h2>

              <p className="mt-5 text-lg leading-8 text-slate-300">
                Choose a district to explore the experience, skills, projects, and
                milestones connected to that chapter.
              </p>
            </div>

            <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {districts.map((district) => (
                <a
                  key={district.id}
                  href={district.href}
                  className="group rounded-2xl border border-slate-700 bg-slate-900 p-6 transition duration-300 hover:-translate-y-1 hover:border-amber-400 hover:bg-slate-800"
                >
                  <div className="flex items-start justify-between gap-5">
                    <span className="text-3xl" aria-hidden="true">
                      {district.icon}
                    </span>
                    <span className="text-slate-500 transition group-hover:translate-x-1 group-hover:text-amber-400">
                      →
                    </span>
                  </div>

                  <h3 className="mt-5 text-xl font-black">
                    {district.name}
                  </h3>

                  <p className="mt-3 leading-7 text-slate-400">
                    {district.summary}
                  </p>

                  <span className="mt-5 block text-sm font-bold text-amber-400">
                    Explore district
                  </span>
                </a>
              ))}
            </div>
          </div>
        </section>

      </main>

      <footer className="bg-slate-950 text-slate-300">
        <div className="mx-auto flex max-w-7xl flex-col gap-5 px-6 py-10 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <p className="font-black text-white">Atlas</p>
            <p className="mt-1 text-sm">
              Building the future one verified milestone at a time.
            </p>
          </div>
          <p className="text-sm">Quanda Grant · Atlas Engineering</p>
        </div>
      </footer>
    </div>
  );
}

export default App;
