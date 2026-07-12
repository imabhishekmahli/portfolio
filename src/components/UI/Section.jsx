function Section({ children, id }) {
  return (
    <section id={id} className="py-28">
      {children}
    </section>
  );
}

export default Section;
