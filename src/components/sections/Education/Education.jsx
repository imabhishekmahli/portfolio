import education from "../../../data/education";
import Container from "../../UI/Container";
import FadeInSection from "../../UI/FadeInSection";

function Education() {
  return (
    <section id="education" className="bg-slate-900 py-28">
      <Container>
        <FadeInSection>
          {/* Heading */}
          <div className="mb-16 text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.35em] text-cyan-400">
              Education
            </p>

            <h2 className="mt-4 text-5xl font-black text-white">
              Academic Journey
            </h2>

            <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-slate-400">
              My academic foundation in Computer Science, Artificial
              Intelligence, Machine Learning and Generative AI.
            </p>
          </div>

          {/* Education Cards */}
          <div className="space-y-8">
            {education.map((item) => (
              <div
                key={item.id}
                className="group rounded-3xl border border-white/10 bg-slate-900/60 p-8 text-center backdrop-blur-xl transition-all duration-300 hover:-translate-y-2 hover:border-cyan-400/50 hover:shadow-2xl hover:shadow-cyan-500/10"
              >
                {/* Degree */}
                <h3 className="text-3xl font-bold text-white transition duration-300 group-hover:text-cyan-400">
                  {item.degree}
                </h3>

                {/* Institute */}
                <p className="mt-3 text-lg font-medium text-cyan-400">
                  🎓 {item.institute}
                </p>

                {/* Duration */}
                <p className="mt-2 text-slate-500">{item.duration}</p>

                {/* Description */}
                <p className="mt-6 leading-8 text-slate-400">
                  {item.description}
                </p>
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

export default Education;
