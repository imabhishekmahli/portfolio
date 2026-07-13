import research from "../../../data/research";
import Container from "../../ui/Container";
import FadeInSection from "../../ui/FadeInSection";

function Research() {
  return (
    <section id="research" className="bg-slate-950 py-28">
      <Container>
        <FadeInSection>
          {/* Heading */}
          <div className="mb-16 text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.35em] text-cyan-400">
              Research
            </p>

            <h2 className="mt-4 text-5xl font-black text-white">
              Featured Research
            </h2>

            <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-slate-400">
              My research contributions in Generative AI, Diffusion Models,
              TimeGAN and Financial Time-Series Modeling.
            </p>
          </div>

          {/* Research Cards */}
          <div className="space-y-10">
            {research.map((item) => (
              <div
                key={item.id}
                className="group rounded-3xl border border-white/10 bg-slate-900/60 p-8 backdrop-blur-xl transition-all duration-300 hover:-translate-y-2 hover:border-cyan-400/50 hover:shadow-2xl hover:shadow-cyan-500/10"
              >
                {/* Featured Badge */}
                {item.featured && (
                  <span className="rounded-full bg-cyan-400 px-4 py-2 text-sm font-semibold text-slate-950">
                    ⭐ Featured Thesis
                  </span>
                )}

                {/* Title */}
                <h3 className="mt-6 text-3xl font-bold text-white transition-colors duration-300 group-hover:text-cyan-400">
                  {item.title}
                </h3>

                {/* Institute */}
                <p className="mt-3 text-lg text-cyan-400">
                  {item.degree} • {item.institute}
                </p>

                {/* Description */}
                <p className="mt-6 leading-8 text-slate-400">
                  {item.description}
                </p>

                {/* Technologies */}
                <div className="mt-8 flex flex-wrap gap-3">
                  {item.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="rounded-full border border-cyan-500/30 bg-cyan-500/10 px-4 py-2 text-sm text-cyan-300 transition duration-300 hover:bg-cyan-500 hover:text-slate-950"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Divider */}
          <div className="mx-auto mt-24 h-px max-w-5xl bg-gradient-to-r from-transparent via-cyan-500/30 to-transparent" />
        </FadeInSection>
      </Container>
    </section>
  );
}

export default Research;
