import Aurora from "./Aurora";
import { motion } from "framer-motion";
import Button from "../UI/Button";
import Container from "../UI/Container";

function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center overflow-hidden"
    >
      <Aurora />
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 80 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl"
        >
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-cyan-400 text-lg font-semibold mb-4"
          >
            👋 Hello, I'm
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="text-6xl md:text-8xl font-black leading-tight"
          >
            Abhishek
            <br />
            Mahli
          </motion.h1>

          <motion.h2
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="mt-6 text-2xl md:text-3xl text-slate-300"
          >
            AI Engineer • Machine Learning Engineer • Developer
          </motion.h2>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
            className="mt-8 text-lg text-slate-400 leading-8 max-w-2xl"
          >
            Passionate about Artificial Intelligence, Deep Learning, Computer
            Vision, and building scalable software that solves real-world
            problems.
          </motion.p>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1 }}
            className="mt-10 flex flex-wrap gap-4"
          >
            <Button>View Projects</Button>
            <Button variant="secondary">Download Resume</Button>
          </motion.div>
        </motion.div>
      </Container>
    </section>
  );
}

export default Hero;
