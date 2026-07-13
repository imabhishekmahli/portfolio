import research from "../../../data/research";
import Container from "../../ui/Container";
import FadeInSection from "../../ui/FadeInSection";
import SectionHeader from "../../ui/SectionHeader";

function Research() {
  return (
    <section id="research" className="bg-slate-950 py-32">
      <Container className="max-w-5xl">
        <FadeInSection>
          <SectionHeader
            label="RESEARCH"
            title="Featured Research"
            description="My research contributions in Generative AI, Diffusion Models, TimeGAN and Financial Time-Series Modeling."
          />

          {/* Research Cards */}
          <div className="mx-auto flex max-w-4xl flex-col gap-24">
            {research.map((item) => (
              <div
                key={item.id}
                className="group w-full rounded-[32px] border border-white/10 bg-slate-900/60 p-14 backdrop-blur-xl transition-all duration-300 hover:-translate-y-2 hover:border-cyan-400/50 hover:shadow-2xl hover:shadow-cyan-500/10"
              >
                {/* Featured Badge */}
                {item.featured && (
                  <div className="mb-8 flex justify-center">
                    <span className="rounded-full bg-cyan-400 px-6 py-2 text-sm font-semibold text-slate-950">
                      ⭐ Featured Thesis
                    </span>
                  </div>
                )}

                {/* Title */}
                <h3 className="mx-auto max-w-3xl text-center text-3xl font-bold leading-tight text-white transition-colors duration-300 group-hover:text-cyan-400 lg:text-4xl">
                  {item.title}
                </h3>

                {/* Institute */}
                <p className="mt-5 text-center text-lg font-medium text-cyan-400">
                  {item.degree} • {item.institute}
                </p>

                {/* Divider */}
                <div className="mx-auto mt-8 h-px w-40 bg-cyan-500/30"></div>

                {/* Description */}
                <p className="mx-auto mt-10 max-w-3xl text-center leading-9 text-slate-400">
                  {item.description}
                </p>

                {/* Tech Stack */}
                <div className="mt-12">
                  <h4 className="mb-5 text-center text-lg font-semibold text-white">
                    Tech Stack
                  </h4>

                  <div className="flex flex-wrap justify-center gap-4">
                    {item.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="rounded-full border border-cyan-500/30 bg-cyan-500/10 px-5 py-3 text-sm font-medium text-cyan-300 transition-all duration-300 hover:scale-105 hover:bg-cyan-500 hover:text-slate-950"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Bottom Divider */}
          <div className="mx-auto mt-32 h-px max-w-5xl bg-gradient-to-r from-transparent via-cyan-500/30 to-transparent" />
        </FadeInSection>
      </Container>
    </section>
  );
}

export default Research;
