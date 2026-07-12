function Badge({ children }) {
  return (
    <span className="px-3 py-1 rounded-full bg-cyan-400/20 text-cyan-400 text-sm">
      {children}
    </span>
  );
}

export default Badge;
