import projects from "../../../data/projects";
import Container from "../../UI/Container";
import FadeInSection from "../../UI/FadeInSection";
import SectionHeader from "../../UI/SectionHeader";

function Projects() {
  return (
    <section id="projects" className="bg-slate-900 py-32">
      <Container>
        <FadeInSection>
          <SectionHeader
            label="PORTFOLIO"
            title="Featured Projects"
            description="A collection of AI, Machine Learning, Generative AI and Full-Stack projects showcasing research, engineering and software development."
          />

          {/* Centered Project Grid */}
          <div className="mx-auto max-w-6xl">
            <div className="mx-auto grid max-w-6xl gap-12 lg:grid-cols-2">
              {projects.map((project) => (
                <div
                  key={project.id}
                  className="group flex min-h-[200px] flex-col rounded-[32px] border border-white/10 bg-slate-900/60 p-4 backdrop-blur-xl transition-all duration-500 hover:-translate-y-2 hover:border-cyan-400/50 hover:shadow-[0_20px_50px_rgba(34,211,238,0.15)]"
                >
                  {/* Inner Content */}
                  <div className="flex h-full flex-col justify-between rounded-[26px] p-8 lg:p-10">
                    {/* Featured Badge */}
                    {project.featured && (
                      <div className="mb-8">
                        <span className="rounded-full bg-cyan-400 px-5 py-2 text-sm font-semibold text-slate-950">
                          ⭐ Featured Project
                        </span>
                      </div>
                    )}

                    {/* Title */}
                    <h3 className="text-3xl font-bold leading-snug text-white transition duration-300 group-hover:text-cyan-400">
                      {project.title}
                    </h3>

                    {/* Subtitle */}
                    <p className="mt-5 text-lg font-medium text-cyan-400">
                      {project.subtitle}
                    </p>

                    {/* Divider */}
                    <div className="mt-6 mb-8 h-px w-24 bg-cyan-500/30"></div>

                    {/* Description */}
                    <p className="flex-1 leading-9 text-slate-400">
                      {project.description}
                    </p>

                    {/* Tech Stack */}
                    <div className="mt-12">
                      <h4 className="mb-5 text-sm font-semibold uppercase tracking-[0.3em] text-white">
                        Tech Stack
                      </h4>

                      <div className="flex flex-wrap gap-3">
                        {project.technologies.map((tech) => (
                          <span
                            key={tech}
                            className="rounded-full border border-cyan-500/30 bg-cyan-500/10 px-5 py-2 text-sm font-medium text-cyan-300 transition-all duration-300 hover:scale-105 hover:bg-cyan-500 hover:text-slate-950"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Buttons */}
                    {(project.github || project.demo) && (
                      <div className="mt-12 flex flex-wrap gap-4">
                        {project.github && (
                          <a
                            href={project.github}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="rounded-2xl border border-cyan-400 px-6 py-3 font-medium text-cyan-400 transition-all duration-300 hover:bg-cyan-400 hover:text-slate-950"
                          >
                            GitHub
                          </a>
                        )}

                        {project.demo && (
                          <a
                            href={project.demo}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="rounded-2xl bg-cyan-400 px-6 py-3 font-semibold text-slate-950 transition hover:bg-cyan-300"
                          >
                            Live Demo
                          </a>
                        )}
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Divider */}
          <div className="mx-auto mt-32 h-px max-w-5xl bg-gradient-to-r from-transparent via-cyan-500/30 to-transparent" />
        </FadeInSection>
      </Container>
    </section>
  );
}

export default Projects;
