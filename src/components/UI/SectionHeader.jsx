function SectionHeader({ label, title, description }) {
  return (
    <div className="mx-auto mb-20 max-w-4xl text-center">
      <p className="mb-4 text-sm font-bold uppercase tracking-[0.45em] text-cyan-400">
        {label}
      </p>

      <h2 className="text-5xl font-black leading-tight text-white lg:text-6xl">
        {title}
      </h2>

      <p className="mx-auto mt-6 max-w-3xl text-lg leading-9 text-slate-400">
        {description}
      </p>
    </div>
  );
}

export default SectionHeader;
