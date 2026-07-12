import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

import profileImage from "../../../assets/images/profile.png";
import profile from "../../../data/profile";

import Aurora from "./Aurora";

import Button from "../../ui/Button";
import Container from "../../ui/Container";

import { TypeAnimation } from "react-type-animation";

function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center overflow-hidden"
    >
      <Aurora />

      <Container>
        <div className="grid items-center gap-16 lg:grid-cols-2">
          {/* ================= Left ================= */}
          <motion.div
            initial={{ opacity: 0, x: -80 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <p className="text-lg font-semibold text-cyan-400">
              <div className="mb-6 inline-flex items-center rounded-full border border-green-400/30 bg-green-400/10 px-4 py-2 text-sm text-green-400">
                🟢 Open to AI/ML Internship Opportunities
              </div>
              {profile.greeting}
            </p>

            <h1 className="mt-4 text-6xl font-black leading-none text-white lg:text-8xl">
              {profile.name}
            </h1>

            <div className="mt-6 text-3xl font-semibold text-cyan-400">
              <TypeAnimation
                sequence={[
                  "Generative AI Engineer",
                  2000,
                  "AI Researcher",
                  2000,
                  "Machine Learning Engineer",
                  2000,
                  "Multi-Agent AI Developer",
                  2000,
                  "Full-Stack Developer",
                  2000,
                ]}
                wrapper="span"
                speed={50}
                repeat={Infinity}
              />
            </div>

            {/* Education Badges */}
            <div className="mt-6 flex flex-wrap gap-3">
              {profile.education.map((item) => (
                <span
                  key={item}
                  className="rounded-full border border-cyan-400/50 bg-cyan-400/10 px-4 py-2 text-sm text-cyan-300 backdrop-blur-md"
                >
                  🎓 {item}
                </span>
              ))}
            </div>

            <p className="mt-8 max-w-xl leading-8 text-slate-400">
              {profile.description}
            </p>

            {/* Social Icons */}
            <div className="mt-8 flex items-center gap-6 text-3xl">
              <a
                href={profile.github}
                target="_blank"
                rel="noreferrer"
                className="transition duration-300 hover:scale-110 hover:text-cyan-400"
              >
                <FaGithub />
              </a>

              <a
                href={profile.linkedin}
                target="_blank"
                rel="noreferrer"
                className="transition duration-300 hover:scale-110 hover:text-cyan-400"
              >
                <FaLinkedin />
              </a>

              <a
                href={`mailto:${profile.email}`}
                className="transition duration-300 hover:scale-110 hover:text-cyan-400"
              >
                <FaEnvelope />
              </a>
            </div>

            {/* Buttons */}
            <div className="mt-10 flex flex-wrap gap-4">
              <Button>View Projects</Button>

              <Button variant="secondary" href={profile.resume}>
                Download Resume
              </Button>
            </div>
          </motion.div>

          {/* ================= Right ================= */}
          <motion.div
            initial={{ opacity: 0, x: 80 }}
            animate={{
              opacity: 1,
              x: 0,
              y: [0, -12, 0],
            }}
            transition={{
              duration: 5,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="flex justify-center"
          >
            <div className="h-96 w-96 rounded-full bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-600 p-1 shadow-2xl shadow-cyan-500/30">
              <div className="flex h-full w-full items-center justify-center rounded-full bg-slate-950">
                <img
                  src={profileImage}
                  alt={profile.name}
                  className="h-full w-full rounded-full object-cover"
                />
              </div>
            </div>
          </motion.div>
        </div>
      </Container>
    </section>
  );
}

export default Hero;
