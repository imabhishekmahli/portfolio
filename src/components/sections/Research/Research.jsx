import research from "../../../data/research";
import Container from "../../ui/Container";
import FadeInSection from "../../ui/FadeInSection";

function Research() {
  return (
    <section id="research" className="py-28 bg-slate-950">
      <Container>
        <FadeInSection>
          <h2 className="text-5xl font-bold text-center text-white">
            Featured Research
          </h2>

          <p className="mt-4 text-center text-slate-400">
            My research work in Generative AI and Financial Time-Series
            Modeling.
          </p>

          <div className="mt-16 space-y-10">
            {research.map((item) => (
              <div
                key={item.id}
                className="rounded-3xl border border-white/10 bg-slate-900 p-8"
              >
                {item.featured && (
                  <span className="rounded-full bg-cyan-500 px-3 py-1 text-sm font-semibold text-slate-950">
                    ⭐ Featured
                  </span>
                )}

                <h3 className="mt-5 text-3xl font-bold text-white">
                  {item.title}
                </h3>

                <p className="mt-2 text-cyan-400">
                  {item.degree} • {item.institute}
                </p>

                <p className="mt-6 leading-8 text-slate-400">
                  {item.description}
                </p>

                <div className="mt-6 flex flex-wrap gap-3">
                  {item.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="rounded-full border border-cyan-500/30 bg-cyan-500/10 px-3 py-1 text-sm text-cyan-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </FadeInSection>
      </Container>
    </section>
  );
}

export default Research;
