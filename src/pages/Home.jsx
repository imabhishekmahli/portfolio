import Navbar from "../components/layout/Navbar/Navbar";
import Hero from "../components/sections/Hero/Hero";
import Research from "../components/sections/Research/Research";
import Projects from "../components/sections/Projects/Projects";
import Skills from "../components/sections/Skills/Skills";

function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <Research />
      <Projects />
      <Skills />
    </>
  );
}

export default Home;
