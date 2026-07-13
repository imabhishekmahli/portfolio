import experience from "../../../data/experience";
import Container from "../../ui/Container";
import FadeInSection from "../../ui/FadeInSection";

function Experience() {
  return (
    <section id="experience" className="bg-slate-950 py-28">
      <Container>
        <FadeInSection>
          {/* Heading */}
          <div className="mb-16 text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.35em] text-cyan-400">
              Experience
            </p>

            <h2 className="mt-4 text-5xl font-black text-white">
              Professional Experience
            </h2>

            <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-slate-400">
              Internship experience and professional contributions in AI,
              Machine Learning and Software Engineering.
            </p>
          </div>

          {/* Experience Cards */}
          <div className="space-y-8">
            {experience.map((job) => (
              <div
                key={job.id}
                className="group rounded-3xl border border-white/10 bg-slate-900/60 backdrop-blur-xl p-8 transition-all duration-300 hover:-translate-y-2 hover:border-cyan-400/50 hover:shadow-2xl hover:shadow-cyan-500/10"
              >
                <div className="flex flex-col justify-between gap-6 md:flex-row">
                  <div>
                    <h3 className="text-3xl font-bold text-white transition duration-300 group-hover:text-cyan-400">
                      {job.role}
                    </h3>

                    <p className="mt-3 text-lg font-medium text-cyan-400">
                      🏢 {job.company}
                    </p>
                  </div>

                  <div className="text-left text-slate-400 md:text-right">
                    <p>{job.duration}</p>
                    <p>{job.location}</p>
                  </div>
                </div>

                {/* Responsibilities */}
                <ul className="mt-8 space-y-3 text-slate-400">
                  {job.description.map((point) => (
                    <li key={point} className="flex items-start gap-3">
                      <span className="mt-1 text-cyan-400">▹</span>
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>

                {/* Technologies */}
                <div className="mt-8 flex flex-wrap gap-3">
                  {job.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="rounded-full border border-cyan-500/30 bg-cyan-500/10 px-4 py-2 text-sm font-medium text-cyan-300 transition duration-300 hover:bg-cyan-500 hover:text-slate-950 hover:scale-105"
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

export default Experience;
