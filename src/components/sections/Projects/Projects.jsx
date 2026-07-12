import projects from "../../../data/projects";
import Container from "../../ui/Container";

function Projects() {
  return (
    <section id="projects" className="py-28 bg-slate-900">
      <Container>
        <h2 className="text-center text-5xl font-bold text-white">
          Featured Projects
        </h2>

        <p className="mt-4 text-center text-slate-400">
          A selection of AI, ML and Full Stack projects.
        </p>

        <div className="mt-16 grid gap-8 md:grid-cols-2">
          {projects.map((project) => (
            <div
              key={project.id}
              className="rounded-3xl border border-white/10 bg-slate-950 p-8 transition hover:border-cyan-400"
            >
              {project.featured && (
                <span className="rounded-full bg-cyan-500 px-3 py-1 text-sm font-semibold text-slate-950">
                  ⭐ Featured
                </span>
              )}

              <h3 className="mt-5 text-3xl font-bold text-white">
                {project.title}
              </h3>

              <p className="mt-2 text-cyan-400">{project.subtitle}</p>

              <p className="mt-6 leading-8 text-slate-400">
                {project.description}
              </p>

              <div className="mt-6 flex flex-wrap gap-3">
                {project.technologies.map((tech) => (
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
      </Container>
    </section>
  );
}

export default Projects;
