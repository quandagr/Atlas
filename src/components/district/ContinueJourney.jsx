import { districts } from "../../data/districts";

/**
 * ContinueJourney — shows links to other districts at the bottom of a district page.
 * Props:
 *   currentId — id of the current district to exclude from the list
 */
function ContinueJourney({ currentId }) {
  const others = districts.filter((d) => d.id !== currentId);

  return (
    <section className="border-t border-white/10 py-16">
      <div className="mx-auto max-w-7xl px-6">
        <p className="text-sm font-black uppercase tracking-[0.2em] text-amber-400">
          Keep Exploring
        </p>

        <h2 className="mt-3 text-4xl font-black tracking-[-0.03em] text-white sm:text-5xl">
          Continue the Journey
        </h2>

        <p className="mt-4 text-lg leading-8 text-slate-300">
          Every district is a verified chapter of one connected professional story.
        </p>

        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {others.map((district) => (
            <a
              key={district.id}
              href={district.href}
              className="group flex items-start justify-between gap-4 rounded-2xl border border-slate-700 bg-slate-900/60 p-5 backdrop-blur-md transition hover:-translate-y-1 hover:border-amber-400/40"
            >
              <div className="flex items-start gap-4">
                <span className="text-2xl" aria-hidden="true">{district.icon}</span>
                <div>
                  <p className="font-black text-white">{district.name}</p>
                  <p className="mt-1 text-sm text-slate-400">{district.tagline}</p>
                </div>
              </div>
              <span className="mt-1 shrink-0 text-slate-500 transition group-hover:translate-x-1 group-hover:text-amber-400">
                →
              </span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

export default ContinueJourney;
