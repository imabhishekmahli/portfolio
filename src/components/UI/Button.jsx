function Button({ children, variant = "primary", href, onClick, download = false }) {
  const base =
    "inline-flex items-center justify-center rounded-2xl px-8 py-4 font-semibold transition-all duration-300 hover:-translate-y-1 hover:scale-[1.02] active:scale-95 focus:outline-none focus:ring-2 focus:ring-cyan-400/50 shadow-lg";

  const variants = {
    primary:
      "bg-cyan-400 text-slate-950 hover:bg-cyan-300 hover:shadow-cyan-500/30 hover:shadow-2xl",

    secondary:
      "border border-cyan-400 bg-white/5 text-cyan-400 backdrop-blur-md hover:bg-cyan-400 hover:text-slate-950 hover:shadow-cyan-500/20 hover:shadow-xl",
  };

  if (href) {
    const opensNewTab = /^https?:\/\//.test(href);

    return (
      <a
        href={href}
        {...(opensNewTab && {
          target: "_blank",
          rel: "noopener noreferrer",
        })}
        download={download || undefined}
        className={`${base} ${variants[variant]}`}
      >
        {children}
      </a>
    );
  }

  return (
    <button type="button" onClick={onClick} className={`${base} ${variants[variant]}`}>
      {children}
    </button>
  );
}

export default Button;
