function DistrictMarker({ title, href, icon, position, accent }) {
  return (
    <a
      href={href}
      className={`absolute ${position} ${accent}
        group hidden min-w-44 rounded-xl border bg-slate-950/95
        px-5 py-4 text-white shadow-xl backdrop-blur
        transition duration-300 hover:-translate-y-1 hover:scale-105
        hover:shadow-2xl lg:block`}
      aria-label={`Explore ${title}`}
    >
      <span className="flex items-center gap-3">
        <span className="text-2xl" aria-hidden="true">
          {icon}
        </span>

        <span>
          <span className="block text-sm font-black uppercase tracking-wide">
            {title}
          </span>

          <span className="mt-1 block text-sm text-slate-300 opacity-0 transition group-hover:opacity-100">
            Explore →
          </span>
        </span>
      </span>
    </a>
  );
}

export default DistrictMarker;