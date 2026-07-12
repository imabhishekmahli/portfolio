function Button({ children, variant = "primary", href, onClick }) {
  const base = "px-6 py-3 rounded-xl font-semibold transition-all duration-300";

  const variants = {
    primary: "bg-cyan-400 text-slate-950 hover:bg-cyan-300",

    secondary:
      "border border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-slate-950",
  };

  if (href) {
    return (
      <a href={href} className={`${base} ${variants[variant]}`}>
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
