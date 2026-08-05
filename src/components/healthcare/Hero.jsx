function Hero() {
  return (
    <section className="border-b border-white/10 bg-transparent py-20">
      <div className="mx-auto max-w-7xl px-6">
        <p className="text-sm font-black uppercase tracking-[0.22em] text-emerald-400">
          Healthcare District
        </p>

        <h1 className="mt-4 max-w-4xl text-5xl font-black leading-[0.95] tracking-[-0.04em] text-white sm:text-6xl lg:text-7xl">
          Quality. Care.{" "}
          <span className="text-emerald-400">Impact.</span>
        </h1>

        <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-300">
          A decade of healthcare experience spanning claims, prior authorization,
          quality assurance, patient access, and leadership.
        </p>

        <div className="mt-8 flex flex-wrap gap-4">
          <a
            href="#highlights"
            className="flex items-center gap-2 rounded-xl bg-emerald-500 px-6 py-3 font-bold text-white hover:-translate-y-0.5 hover:bg-emerald-400"
          >
            View Experience <span aria-hidden="true">→</span>
          </a>
          <a
            href="#snapshot"
            className="flex items-center gap-2 rounded-xl border border-white/20 bg-white/5 px-6 py-3 font-bold text-white hover:-translate-y-0.5 hover:bg-white/10"
          >
            Recruiter Snapshot
          </a>
        </div>
      </div>
    </section>
  );
}

export default Hero;
