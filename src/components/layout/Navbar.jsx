const navItems = [
  { label: "Home", href: "#top" },
  { label: "Healthcare", href: "#healthcare" },
  { label: "Technology", href: "#technology" },
  { label: "Education", href: "#education" },
  { label: "Innovation", href: "#innovation" },
  { label: "Library", href: "#library" },
  { label: "Founders", href: "#founders" },
];

function Navbar() {
  return (
    <header className="atlas-navbar sticky top-0 z-50">
      <nav
        className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5"
        aria-label="Primary navigation"
      >
        <a href="#top" className="flex items-center gap-3">
          <div className="grid h-11 w-11 place-items-center rounded-xl bg-slate-900 text-lg font-black text-amber-400">
            A
          </div>

          <div>
            <p className="text-lg font-black tracking-[0.18em] text-white">
              ATLAS
            </p>
            <p className="text-sm text-slate-400">Quanda Grant</p>
          </div>
        </a>

        <div className="hidden items-center gap-6 lg:flex">
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

        <span className="rounded-full border border-emerald-500/40 bg-emerald-500/10 px-4 py-2 text-sm font-bold text-emerald-400">
          Sprint 1 Active
        </span>
      </nav>
    </header>
  );
}

export default Navbar;
