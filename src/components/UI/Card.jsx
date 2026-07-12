function Card({ children }) {
  return (
    <div className="rounded-2xl bg-slate-900 border border-slate-800 p-6">
      {children}
    </div>
  );
}

export default Card;
