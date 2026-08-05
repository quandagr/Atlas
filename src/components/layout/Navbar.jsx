import { useState } from "react";

const navItems = [
  { label: "Home", href: "#top" },
  { label: "Healthcare", href: "/healthcare" },
  { label: "Technology", href: "/technology" },
  { label: "Education", href: "/education" },
  { label: "Innovation", href: "/innovation" },
  { label: "Library", href: "/library" },
  { label: "Academy", href: "/academy" },
];

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-slate-950/85 text-white shadow-lg backdrop-blur-xl">
      <nav
        className="mx-auto max-w-7xl px-4 py-4 sm:px-6"
        aria-label="Primary navigation"
      >
        <div className="flex items-center justify-between gap-4">
          <a
            href="#top"
            className="flex shrink-0 items-center gap-3"
            onClick={closeMenu}
          >
            <div className="grid h-11 w-11 place-items-center rounded-xl bg-slate-800 text-lg font-black text-amber-400 ring-1 ring-white/10">
              A
            </div>

            <div>
              <p className="text-lg font-black tracking-[0.18em]">ATLAS</p>
              <p className="text-sm text-slate-400">Quanda Grant</p>
            </div>
          </a>

          <div className="hidden items-center gap-5 lg:flex">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="text-sm font-bold text-slate-300 hover:text-amber-400"
              >
                {item.label}
              </a>
            ))}
          </div>

          <div className="flex items-center gap-3">
            <a
              href="#status"
              className="hidden shrink-0 rounded-full border border-emerald-400/30 bg-emerald-400/10 px-4 py-2 text-sm font-bold text-emerald-300 sm:inline-flex"
            >
              Sprint 2 Active
            </a>

            <button
              type="button"
              className="grid h-11 w-11 place-items-center rounded-xl border border-white/15 bg-white/5 text-white hover:border-amber-400 hover:text-amber-400 lg:hidden"
              aria-expanded={isMenuOpen}
              aria-controls="mobile-navigation"
              aria-label={isMenuOpen ? "Close navigation menu" : "Open navigation menu"}
              onClick={() => setIsMenuOpen((current) => !current)}
            >
              <span className="sr-only">
                {isMenuOpen ? "Close menu" : "Open menu"}
              </span>

              {isMenuOpen ? (
                <span className="text-3xl leading-none" aria-hidden="true">
                  ×
                </span>
              ) : (
                <span className="flex flex-col gap-1.5" aria-hidden="true">
                  <span className="h-0.5 w-6 rounded-full bg-current" />
                  <span className="h-0.5 w-6 rounded-full bg-current" />
                  <span className="h-0.5 w-6 rounded-full bg-current" />
                </span>
              )}
            </button>
          </div>
        </div>

        <div
          id="mobile-navigation"
          className={`overflow-hidden transition-all duration-300 lg:hidden ${
            isMenuOpen
              ? "mt-4 max-h-[36rem] border-t border-white/10 pt-4 opacity-100"
              : "max-h-0 opacity-0"
          }`}
        >
          <div className="grid gap-2">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                onClick={closeMenu}
                className="rounded-xl px-4 py-3 font-bold text-slate-200 hover:bg-white/10 hover:text-amber-400"
              >
                {item.label}
              </a>
            ))}

            <a
              href="#status"
              onClick={closeMenu}
              className="mt-2 rounded-xl border border-emerald-400/30 bg-emerald-400/10 px-4 py-3 text-center font-bold text-emerald-300 sm:hidden"
            >
              Sprint 2 Active
            </a>
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Navbar;