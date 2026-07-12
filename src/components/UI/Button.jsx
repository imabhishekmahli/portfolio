function Button({ children, variant = "primary", href, onClick }) {
  const base =
    "px-8 py-4 rounded-2xl font-semibold transition-all duration-300 hover:scale-105 shadow-lg";

  const variants = {
    primary:
      "bg-cyan-400 text-slate-950 hover:bg-cyan-300 hover:shadow-cyan-500/40 hover:shadow-xl",

    secondary:
      "border border-cyan-400 bg-white/5 backdrop-blur-sm text-cyan-400 hover:bg-cyan-400 hover:text-slate-950",
  };

  if (href) {
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

  return (
    <button onClick={onClick} className={`${base} ${variants[variant]}`}>
      {children}
    </button>
  );
}

export default Button;
