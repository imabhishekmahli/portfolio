import experience from "../../../data/experience";
import Container from "../../ui/Container";

function Experience() {
  return (
    <section id="experience" className="bg-slate-950 py-28">
      <Container>
        <h2 className="text-center text-5xl font-bold text-white">
          Experience
        </h2>

        <p className="mt-4 text-center text-slate-400">
          Professional experience and internships.
        </p>

        <div className="mt-16 space-y-8">
          {experience.map((job) => (
            <div
              key={job.id}
              className="rounded-3xl border border-white/10 bg-slate-900 p-8"
            >
              <div className="flex flex-col justify-between gap-3 md:flex-row">
                <div>
                  <h3 className="text-3xl font-bold text-white">{job.role}</h3>

                  <p className="mt-2 text-cyan-400">{job.company}</p>
                </div>

                <div className="text-right text-slate-400">
                  <p>{job.duration}</p>
                  <p>{job.location}</p>
                </div>
              </div>

              <ul className="mt-8 list-disc space-y-3 pl-6 text-slate-400">
                {job.description.map((point) => (
                  <li key={point}>{point}</li>
                ))}
              </ul>

              <div className="mt-8 flex flex-wrap gap-3">
                {job.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="rounded-full border border-cyan-500/30 bg-cyan-500/10 px-4 py-2 text-sm text-cyan-300"
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

export default Experience;
