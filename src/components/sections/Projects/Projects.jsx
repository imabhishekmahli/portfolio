import projects from "../../../data/projects";
import Container from "../../ui/Container";
import FadeInSection from "../../ui/FadeInSection";

function Projects() {
  return (
    <section id="projects" className="bg-slate-900 py-28">
      <Container>
        <FadeInSection>
          {/* Heading */}
          <div className="mb-16 text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.35em] text-cyan-400">
              Portfolio
            </p>

            <h2 className="mt-4 text-5xl font-black text-white">
              Featured Projects
            </h2>

            <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-slate-400">
              A collection of AI, Machine Learning, Generative AI and Full Stack
              projects showcasing research, engineering and software
              development.
            </p>
          </div>

          {/* Project Cards */}
          <div className="grid gap-8 lg:grid-cols-2">
            {projects.map((project) => (
              <div
                key={project.id}
                className="group rounded-3xl border border-white/10 bg-slate-900/60 backdrop-blur-xl p-8 transition-all duration-300 hover:-translate-y-2 hover:border-cyan-400/50 hover:shadow-2xl hover:shadow-cyan-500/10"
              >
                {/* Featured Badge */}
                {project.featured && (
                  <span className="rounded-full bg-cyan-400 px-4 py-2 text-sm font-semibold text-slate-950">
                    ⭐ Featured Project
                  </span>
                )}

                {/* Title */}
                <h3 className="mt-6 text-3xl font-bold text-white transition duration-300 group-hover:text-cyan-400">
                  {project.title}
                </h3>

                {/* Subtitle */}
                <p className="mt-3 text-lg text-cyan-400">{project.subtitle}</p>

                {/* Description */}
                <p className="mt-6 leading-8 text-slate-400">
                  {project.description}
                </p>

                {/* Tech Stack */}
                <div className="mt-8 flex flex-wrap gap-3">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="rounded-full border border-cyan-500/30 bg-cyan-500/10 px-4 py-2 text-sm text-cyan-300 transition duration-300 hover:bg-cyan-500 hover:text-slate-950"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Buttons */}
                <div className="mt-8 flex gap-4">
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="rounded-xl border border-cyan-400 px-5 py-3 text-cyan-400 transition hover:bg-cyan-400 hover:text-slate-950"
                    >
                      GitHub
                    </a>
                  )}

                  {project.demo && (
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="rounded-xl bg-cyan-400 px-5 py-3 font-semibold text-slate-950 transition hover:bg-cyan-300"
                    >
                      Live Demo
                    </a>
                  )}
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

export default Projects;
