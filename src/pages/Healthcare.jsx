const healthcareStats = [
  {
    value: "5+",
    label: "Healthcare organizations",
  },
  {
    value: "120+",
    label: "Claims and prior authorizations daily",
  },
  {
    value: "100",
    label: "QA reviews completed daily",
  },
  {
    value: "10+",
    label: "Healthcare systems and platforms",
  },
];

const recruiterSnapshot = [
  "Healthcare Operations",
  "Claims Processing & Adjudication",
  "Prior Authorization",
  "Insurance & Benefits Verification",
  "Quality Assurance / QA-QC",
  "Patient Access",
  "Leadership & Coaching",
  "Healthcare Technology",
];

function Healthcare() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-emerald-950 via-slate-950 to-slate-900 text-white">
      <section className="px-6 py-20 sm:py-24">
        <div className="mx-auto max-w-7xl">
          <a
            href="/"
            className="inline-flex items-center gap-2 text-sm font-bold text-emerald-300 hover:text-emerald-200"
          >
            ← Return to Atlas
          </a>

          <div className="mt-12 max-w-5xl">
            <p className="text-sm font-black uppercase tracking-[0.24em] text-emerald-400">
              Healthcare District
            </p>

            <h1 className="mt-5 text-5xl font-black leading-tight tracking-[-0.05em] sm:text-6xl lg:text-7xl">
              Serve. Improve. Heal.
            </h1>

            <p className="mt-7 max-w-4xl text-xl leading-9 text-slate-300">
              Delivering quality through healthcare operations, claims
              excellence, leadership, continuous improvement, and technology.
            </p>

            <a
              href="#recruiter-highlight"
              className="mt-9 inline-flex rounded-xl bg-emerald-500 px-6 py-3 font-black text-slate-950 shadow-lg transition hover:-translate-y-1 hover:bg-emerald-400"
            >
              Begin the Journey
            </a>
          </div>
        </div>
      </section>

      <section className="px-6 pb-20">
        <div className="mx-auto grid max-w-7xl gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {healthcareStats.map((stat) => (
            <article
              key={stat.label}
              className="rounded-2xl border border-emerald-400/20 bg-white/5 p-6 shadow-xl backdrop-blur"
            >
              <p className="text-4xl font-black text-emerald-400">
                {stat.value}
              </p>

              <p className="mt-3 leading-7 text-slate-300">
                {stat.label}
              </p>
            </article>
          ))}
        </div>
      </section>

      <section id="recruiter-highlight" className="px-6 py-20">
        <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[1.35fr_0.65fr]">
          <article className="rounded-3xl border border-white/10 bg-slate-900/80 p-8 shadow-2xl sm:p-10">
            <p className="text-sm font-black uppercase tracking-[0.22em] text-emerald-400">
              Recruiter Highlight
            </p>

            <h2 className="mt-5 text-3xl font-black tracking-[-0.04em] sm:text-4xl">
              Healthcare operations built on quality, leadership, and growth.
            </h2>

            <p className="mt-6 text-lg leading-9 text-slate-300">
              Healthcare Operations Professional with a proven background in
              patient access, insurance and benefits verification, claims
              processing and adjudication, prior authorization, quality
              assurance, leadership, and healthcare technology. Throughout my
              career, I have consistently embraced opportunities to grow beyond
              my assigned role, strengthen operational performance, mentor
              team members, and deliver high-quality outcomes.
            </p>

            <p className="mt-5 text-lg leading-9 text-slate-300">
              My experience spans provider, payer, specialty pharmacy,
              hospital, and government-program environments. This combination
              allows me to understand healthcare workflows from multiple
              perspectives while connecting policy, systems, service, quality,
              and continuous improvement. Atlas reflects that journey by
              showing not only where I worked, but how each experience
              strengthened my ability to solve problems, lead with purpose, and
              continue evolving.
            </p>

            <p className="mt-7 text-right font-bold italic text-emerald-300">
              — Quanda Grant
            </p>
          </article>

          <aside className="rounded-3xl border border-emerald-400/20 bg-emerald-950/60 p-8 shadow-2xl">
            <p className="text-sm font-black uppercase tracking-[0.22em] text-emerald-300">
              Recruiter Snapshot
            </p>

            <div className="mt-7 flex flex-wrap gap-3">
              {recruiterSnapshot.map((item) => (
                <span
                  key={item}
                  className="rounded-full border border-emerald-400/30 bg-emerald-400/10 px-4 py-2 text-sm font-bold text-emerald-100"
                >
                  ✓ {item}
                </span>
              ))}
            </div>
          </aside>
        </div>
      </section>
    </main>
  );
}

export default Healthcare;