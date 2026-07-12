import Navbar from "../components/layout/Navbar/Navbar";
import Hero from "../components/sections/Hero/Hero";
import Research from "../components/sections/Research/Research";
import Projects from "../components/sections/Projects/Projects";
import Skills from "../components/sections/Skills/Skills";
import Education from "../components/sections/Education/Education";
import Experience from "../components/sections/Experience/Experience";
import Contact from "../components/sections/Contact/Contact";

function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <Research />
      <Projects />
      <Skills />
      <Education />
      <Experience />
      <Contact />
    </>
  );
}

export default Home;
