import skills from "../../../data/skills";
import Container from "../../ui/Container";

function Skills() {
  return (
    <section id="skills" className="bg-slate-950 py-28">
      <Container>
        <h2 className="text-center text-5xl font-bold text-white">
          Technical Skills
        </h2>

        <p className="mt-4 text-center text-slate-400">
          Technologies I use to build AI systems and full-stack applications.
        </p>

        <div className="mt-16 space-y-10">
          {skills.map((group) => (
            <div
              key={group.category}
              className="rounded-3xl border border-white/10 bg-slate-900 p-8"
            >
              <h3 className="text-2xl font-semibold text-cyan-400">
                {group.category}
              </h3>

              <div className="mt-6 flex flex-wrap gap-3">
                {group.items.map((skill) => (
                  <span
                    key={skill}
                    className="rounded-full border border-cyan-500/30 bg-cyan-500/10 px-4 py-2 text-sm text-cyan-300"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}

export default Skills;
