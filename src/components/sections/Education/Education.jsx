import education from "../../../data/education";
import Container from "../../ui/Container";

function Education() {
  return (
    <section id="education" className="bg-slate-900 py-28">
      <Container>
        <h2 className="text-center text-5xl font-bold text-white">Education</h2>

        <p className="mt-4 text-center text-slate-400">
          My academic journey in Computer Science and Artificial Intelligence.
        </p>

        <div className="mt-16 space-y-8">
          {education.map((item) => (
            <div
              key={item.id}
              className="rounded-3xl border border-white/10 bg-slate-950 p-8"
            >
              <h3 className="text-3xl font-bold text-white">{item.degree}</h3>

              <p className="mt-2 text-cyan-400">{item.institute}</p>

              <p className="mt-2 text-slate-500">{item.duration}</p>

              <p className="mt-6 leading-8 text-slate-400">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}

export default Education;
