function Button({ children, variant = "primary", href, onClick }) {
  const base =
    "inline-flex items-center justify-center rounded-2xl px-8 py-4 font-semibold shadow-lg transition-all duration-300 hover:scale-105";

  const variants = {
    primary:
      "bg-cyan-400 text-slate-950 hover:bg-cyan-300 hover:shadow-xl hover:shadow-cyan-500/30",

    secondary:
      "border border-cyan-400 bg-white/5 text-cyan-400 backdrop-blur-sm hover:bg-cyan-400 hover:text-slate-950",
  };

  // Link Button
  if (href) {
    // Internal page links (#projects, #contact, etc.)
    if (href.startsWith("#")) {
      return (
        <a href={href} className={`${base} ${variants[variant]}`}>
          {children}
        </a>
      );
    }

    // External links
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className={`${base} ${variants[variant]}`}
      >
        {children}
      </a>
    );
  }

  // Normal button
  return (
    <button onClick={onClick} className={`${base} ${variants[variant]}`}>
      {children}
    </button>
  );
}

export default Button;
