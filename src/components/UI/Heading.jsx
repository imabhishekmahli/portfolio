function Heading({ title, subtitle }) {
  return (
    <div className="mb-14">
      <p className="text-cyan-400 font-semibold">{subtitle}</p>

      <h2 className="text-4xl md:text-5xl font-bold">{title}</h2>
    </div>
  );
}

export default Heading;
