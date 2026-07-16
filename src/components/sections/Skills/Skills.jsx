import skills from "../../../data/skills";
import Container from "../../UI/Container";
import FadeInSection from "../../UI/FadeInSection";

function Skills() {
  return (
    <section id="skills" className="bg-slate-950 py-28">
      <Container>
        <FadeInSection>
          {/* Heading */}
          <div className="mb-16 text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.35em] text-cyan-400">
              Expertise
            </p>

            <h2 className="mt-4 text-5xl font-black text-white">
              Technical Skills
            </h2>

            <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-slate-400">
              A collection of technologies, frameworks and tools I use for
              Artificial Intelligence, Machine Learning and Full-Stack
              Development.
            </p>
          </div>

          {/* Skill Categories */}
          <div className="space-y-8">
            {skills.map((group) => (
              <div
                key={group.category}
                className="group rounded-3xl border border-white/10 bg-slate-900/60 backdrop-blur-xl p-8 transition-all duration-300 hover:-translate-y-2 hover:border-cyan-400/50 hover:shadow-2xl hover:shadow-cyan-500/10"
              >
                <h3 className="text-center text-2xl font-bold text-cyan-400">
                  {group.category}
                </h3>

                <div className="mt-8 flex flex-wrap justify-center gap-3">
                  {group.items.map((skill) => (
                    <span
                      key={skill}
                      className="rounded-full border border-cyan-500/30 bg-cyan-500/10 px-4 py-2 text-sm font-medium text-cyan-300 transition duration-300 hover:bg-cyan-500 hover:text-slate-950 hover:scale-105"
                    >
                      {skill}
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

export default Skills;
