function Button({ children, variant = "primary" }) {
  const styles = {
    primary: "bg-cyan-400 text-slate-950 hover:bg-cyan-300",

    secondary:
      "border border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-slate-950",
  };

  return (
    <button
      className={`
        px-6
        py-3
        rounded-xl
        font-semibold
        transition-all
        duration-300
        hover:scale-105
        ${styles[variant]}
      `}
    >
      {children}
    </button>
  );
}

export default Button;
