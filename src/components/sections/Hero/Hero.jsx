import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

import profileImage from "../../../assets/images/profile.png";
import profile from "../../../data/profile";

import Aurora from "./Aurora";

import Button from "../../UI/Button";
import Container from "../../UI/Container";

import { TypeAnimation } from "react-type-animation";

function Hero() {
  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center overflow-hidden"
    >
      <Aurora />

      <Container>
        <div className="grid items-center gap-20 lg:grid-cols-[1.2fr_0.8fr]">
          {/* Left */}
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="relative mx-auto max-w-xl text-center"
          >
            {/* Background Glow */}
            <div className="absolute -left-20 top-20 -z-10 h-72 w-72 rounded-full bg-cyan-500/10 blur-3xl"></div>

            {/* Open to Work */}
            <div className="mb-5 inline-flex items-center rounded-full border border-green-400/30 bg-green-400/10 px-5 py-2 text-sm font-medium text-green-400">
              🟢 Open to AI / ML Internship Opportunities
            </div>

            {/* Greeting */}
            <p className="text-lg font-semibold text-cyan-400">
              {profile.greeting}
            </p>

            {/* Name */}
            <h1 className="mt-5 text-6xl font-black leading-tight tracking-tight text-white lg:text-8xl">
              {profile.name}
            </h1>

            {/* Roles */}
            <div className="mt-6 text-3xl font-bold text-cyan-400">
              <TypeAnimation
                sequence={profile.roles.flatMap((role) => [role, 2000])}
                wrapper="span"
                speed={50}
                repeat={Infinity}
              />
            </div>

            {/* IIT Badges */}
            <div className="mt-8 flex flex-wrap justify-center gap-3">
              {profile.education.map((item) => (
                <span
                  key={item}
                  className="rounded-full border border-cyan-400/30 bg-cyan-400/10 px-5 py-2 text-sm font-medium text-cyan-300 transition duration-300 hover:border-cyan-400 hover:bg-cyan-400 hover:text-slate-950"
                >
                  🎓 {item}
                </span>
              ))}
            </div>

            {/* Description */}
            <p className="mt-8 max-w-2xl text-lg leading-9 text-slate-300">
              {profile.description}
            </p>

            {/* Socials */}
            <div className="mt-10 flex items-center justify-center gap-5">
              {[
                {
                  icon: <FaGithub size={22} />,
                  link: profile.github,
                  label: "GitHub profile",
                },
                {
                  icon: <FaLinkedin size={22} />,
                  link: profile.linkedin,
                  label: "LinkedIn profile",
                },
                {
                  icon: <FaEnvelope size={22} />,
                  link: `mailto:${profile.email}`,
                  label: "Send an email",
                },
              ].map((item) => (
                <a
                  key={item.label}
                  href={item.link}
                  aria-label={item.label}
                  {...(!item.link.startsWith("mailto:") && {
                    target: "_blank",
                    rel: "noopener noreferrer",
                  })}
                  className="flex h-12 w-12 items-center justify-center rounded-full border border-white/10 bg-white/5 text-white backdrop-blur-md transition-all duration-300 hover:-translate-y-1 hover:border-cyan-400 hover:bg-cyan-400 hover:text-slate-950"
                >
                  {item.icon}
                </a>
              ))}
            </div>

            {/* Buttons */}
            <div className="mt-12 flex flex-wrap justify-center gap-5">
              <Button href="#projects">View Projects</Button>

              <Button variant="secondary" href={profile.resume} download>
                Download Resume
              </Button>
            </div>
          </motion.div>

          {/* Right */}
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            animate={{
              opacity: 1,
              x: 0,
              y: [0, -10, 0],
            }}
            transition={{
              opacity: { duration: 0.8 },
              x: { duration: 0.8 },
              y: {
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut",
              },
            }}
            className="flex justify-center"
          >
            <div className="relative">
              {/* Glow */}
              <div className="absolute inset-0 rounded-full bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 opacity-40 blur-3xl"></div>

              {/* Image Ring */}
              <motion.div
                whileHover={{
                  rotate: 3,
                  scale: 1.03,
                }}
                transition={{
                  duration: 0.3,
                }}
                className="relative h-80 w-80 rounded-full bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 p-1 lg:h-[25rem] lg:w-[25rem]"
              >
                <div className="h-full w-full overflow-hidden rounded-full bg-slate-950">
                  <img
                    src={profileImage}
                    alt={profile.name}
                    className="h-full w-full rounded-full object-cover"
                  />
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </Container>
    </section>
  );
}

export default Hero;
