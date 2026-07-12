import Button from "../UI/Button";
import Container from "../UI/Container";

function Hero() {
  return (
    <section id="home" className="min-h-screen flex items-center">
      <Container>
        <div className="max-w-3xl">
          <p className="text-cyan-400 text-lg font-semibold mb-4">
            👋 Hello, I'm
          </p>

          <h1 className="text-6xl md:text-8xl font-black leading-tight">
            Abhishek
            <br />
            Mahli
          </h1>

          <h2 className="text-2xl md:text-3xl text-slate-300 mt-6">
            AI Engineer • Machine Learning Engineer • Developer
          </h2>

          <p className="mt-8 text-slate-400 text-lg leading-8 max-w-2xl">
            Passionate about Artificial Intelligence, Deep Learning, Computer
            Vision, and building scalable applications that solve real-world
            problems.
          </p>

          <div className="mt-10 flex gap-4">
            <Button>View Projects</Button>

            <Button variant="secondary">Download Resume</Button>
          </div>
        </div>
      </Container>
    </section>
  );
}

export default Hero;
